import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple English stopwords to bias toward content terms
const STOPWORDS = new Set([
  "the","a","an","and","or","but","if","then","than","that","this","these","those",
  "is","are","was","were","be","been","being","to","of","in","on","for","as","at",
  "by","with","from","it","its","their","there","which","who","whom","into","out",
  "about","over","under","between","within","also","can","may","might","should","would",
]);

function extractKeywords(text: string, max = 24): string[] {
  const freq = new Map<string, number>();
  for (const raw of text.toLowerCase().split(/[^a-z0-9-]+/g)) {
    const w = raw.trim();
    if (w.length < 3) continue;
    if (STOPWORDS.has(w)) continue;
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }
  return Array.from(freq.entries()).sort((a,b) => b[1]-a[1]).slice(0, max).map(([w]) => w);
}

function makeBlurtFallback({ studyContent, numQuestions, previousQuestions }: { studyContent: string; numQuestions: number; previousQuestions: string[] }) {
  const kws = extractKeywords(studyContent, 30);
  const prevSet = new Set((previousQuestions || []).map(String));
  const questions: any[] = [];
  for (const kw of kws) {
    const q = `Define: ${kw}`;
    if (!prevSet.has(q)) {
      // Vary marks 1-4 for fallback
      const fallbackMarks = 1 + Math.floor(Math.random() * 4);
      questions.push({ question: q, marks: fallbackMarks, expectedKeyPoints: [kw] });
    }
    if (questions.length >= numQuestions) break;
  }
  if (!questions.length) {
    questions.push({ question: "State one key term from these notes.", marks: 1, expectedKeyPoints: [] });
  }
  return { questions };
}

async function callAIWithTimeout(payload: any, timeoutMs = 15000) {
  const key = Deno.env.get("BYTEZ_API_KEY_FLASH");
  if (!key) throw new Error("BYTEZ_API_KEY_FLASH is not configured");

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const resp = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const text = await resp.text();
    if (!resp.ok) throw new Error(`Bytez API error ${resp.status}: ${text}`);
    return JSON.parse(text);
  } finally {
    clearTimeout(id);
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { studyContent, numQuestions = 1, previousQuestions = [] } = await req.json();
    if (!studyContent || typeof studyContent !== "string") {
      return new Response(JSON.stringify({ error: "Missing studyContent" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const fallback = makeBlurtFallback({ studyContent, numQuestions, previousQuestions });

    const kws = extractKeywords(studyContent, 24);
    // Shuffle keywords to vary focus each time
    const shuffledKws = [...kws].sort(() => Math.random() - 0.5);
    const system = `You are an expert GCSE AQA examiner creating active recall blurt questions for revision.

AQA BLURT PRINCIPLES:
1. Short, direct questions (5-15 words) testing ONE specific concept
2. Vary question styles: "Define...", "State...", "Name...", "What is...", "Give..."
3. Focus on key terms, definitions, processes, and core facts
4. Each question tests a DIFFERENT aspect of the content
5. Questions build progressive understanding

BASED ON PREVIOUSLY TESTED CONTENT:
- Analyze what the student has been asked before
- Generate questions on NEW aspects of the same topic
- Progressively test deeper understanding
- Avoid repetition of similar concepts

QUESTION VARIETY (rotate through these):
- Definitions: "Define [key term]"
- Factual recall: "State the function of..."
- Examples: "Name an example of..."
- Process recall: "What happens when..."
- Property identification: "Give two properties of..."

Use ONLY the provided study content. Include relevant keywords from: ${shuffledKws.join(", ")}. Output valid JSON.`;
    const user = `Study Content:\n\n${studyContent}\n\nCreate ${numQuestions} active recall blurt question(s) for GCSE AQA revision.

REQUIREMENTS:
1. Short questions (5-15 words each)
2. Test ONE specific fact/concept per question
3. Use different question styles (Define, State, Name, What is, Give)
4. Focus on DIFFERENT aspects: terms, processes, examples, properties
5. Assign marks 1-2 (1 for simple recall, 2 for slightly more complex)
6. Each question should be answerable in 1-2 sentences

PREVIOUSLY TESTED (avoid repetition):
${previousQuestions.map((q: string, i: number) => `${i + 1}. ${q}`).join("\n")}

Return ONLY valid JSON:
{ "questions": [ { "question": string, "marks": number (1-2), "expectedKeyPoints": string[] } ] }`;

    let data: any | null = null;
    try {
      data = await callAIWithTimeout({
        model: "google/gemini-2.5-flash",
        messages: [ { role: "system", content: system }, { role: "user", content: user } ],
      });
    } catch (e) {
      console.warn("[generate-questions] AI call failed, using fallback:", e);
      return new Response(JSON.stringify(fallback), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const content = data?.choices?.[0]?.message?.content;
    let parsed: any = null;
    try {
      parsed = typeof content === "string" ? JSON.parse(content) : content;
    } catch {
      const m = typeof content === "string" ? content.match(/\{[\s\S]*\}/) : null;
      if (m) parsed = JSON.parse(m[0]);
    }

    // Validate and filter
    const out: any[] = [];
    const prevSet = new Set((previousQuestions || []).map(String));
    const arr: any[] = parsed?.questions ?? [];
    for (const q of arr) {
      const text = String(q?.question ?? "");
      if (!text || prevSet.has(text)) continue;
      // Require at least 2 keyword overlaps to ensure topic lock
      const lower = text.toLowerCase();
      let overlap = 0; for (const k of kws) { if (lower.includes(k)) overlap++; }
      if (overlap < 2) continue;
      // Clamp marks to 1-4
      const marks = Math.min(4, Math.max(1, Number(q?.marks ?? 1)));
      out.push({ question: text, marks, expectedKeyPoints: Array.isArray(q?.expectedKeyPoints) ? q.expectedKeyPoints : [] });
      if (out.length >= numQuestions) break;
    }

    if (!out.length) {
      return new Response(JSON.stringify(fallback), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ questions: out }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error in generate-questions:", error);
    // Always recover with deterministic output
    return new Response(JSON.stringify({ questions: [ { question: "State one key term from these notes.", marks: 1, expectedKeyPoints: [] } ] }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});