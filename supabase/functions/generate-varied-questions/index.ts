import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Enhanced stopwords including pronouns, question words, and common verbs
const STOPWORDS = new Set([
  "the","a","an","and","or","but","if","then","than","that","this","these","those",
  "is","are","was","were","be","been","being","to","of","in","on","for","as","at",
  "by","with","from","it","its","their","there","which","who","whom","into","out",
  "about","over","under","between","within","also","can","may","might","should","would",
  "your","my","our","his","her","how","what","when","where","why","who","have","has","had",
  "will","shall","could","using","used","uses","make","made","makes","give","given","gives",
]);

function isChemicalFormula(word: string): boolean {
  if (/\d/.test(word)) return true;
  if (word.length <= 5 && /^[a-z]{1,2}\d*[a-z]*\d*$/.test(word)) return true;
  const chemicalPatterns = ['naoh', 'hcl', 'h2o', 'co2', 'h2so4', 'nacl', 'caco3', 'mgso4', 'kcl', 'koh', 'nh3', 'ch4', 'c6h12o6'];
  return chemicalPatterns.includes(word.toLowerCase());
}

function isValidKeyword(word: string): boolean {
  if (word.length < 4) return false;
  if (STOPWORDS.has(word)) return false;
  if (isChemicalFormula(word)) return false;
  if (/^\d+$/.test(word)) return false;
  if (!/[aeiou]/.test(word)) return false;
  if (word.endsWith('ly')) return false;
  if (word.endsWith('ive') || word.endsWith('ous') || word.endsWith('ful')) return false;
  return true;
}

function extractKeywords(text: string, max = 24): string[] {
  const freq = new Map<string, number>();
  const compounds = new Set<string>();
  const compoundPatterns = [
    /limiting\s+reactant/gi,
    /relative\s+atomic\s+mass/gi,
    /relative\s+formula\s+mass/gi,
    /mole\s+calculations?/gi,
    /percentage\s+yield/gi,
    /concentration\s+calculations?/gi,
    /transition\s+metals?/gi,
    /group\s+1\s+metals?/gi,
    /oxidation\s+states?/gi,
    /variable\s+oxidation/gi,
  ];
  
  for (const pattern of compoundPatterns) {
    const matches = text.matchAll(pattern);
    for (const match of matches) {
      compounds.add(match[0].toLowerCase().replace(/\s+/g, '-'));
    }
  }
  
  for (const raw of text.toLowerCase().split(/[^a-z0-9-]+/g)) {
    const w = raw.trim();
    if (!isValidKeyword(w)) continue;
    freq.set(w, (freq.get(w) ?? 0) + 1);
  }
  
  const allKeywords = [
    ...Array.from(compounds).map(c => [c, 5] as [string, number]),
    ...Array.from(freq.entries())
  ];
  
  return allKeywords
    .sort((a, b) => {
      const aIsCompound = a[0].includes('-');
      const bIsCompound = b[0].includes('-');
      if (aIsCompound !== bIsCompound) return aIsCompound ? -1 : 1;
      if (b[0].length !== a[0].length) return b[0].length - a[0].length;
      return b[1] - a[1];
    })
    .slice(0, max)
    .map(([w]) => w);
}

function makeExamFallback({ studyContent, numQuestions, previousQuestions, difficulty }: { studyContent: string; numQuestions: number; previousQuestions: string[]; difficulty?: string }) {
  const kws = extractKeywords(studyContent, 30);
  console.log("[generate-varied-questions] Fallback keywords extracted:", kws.slice(0, 10));
  
  const prevSet = new Set((previousQuestions || []).map(String));
  const questions: any[] = [];
  
  // Difficulty-based templates
  const easyTemplates = [
    (kw: string) => `State what is meant by the term ${kw}. (1 mark)`,
    (kw: string) => `Name one example of ${kw}. (1 mark)`,
    (kw: string) => `Give two properties of ${kw}. (2 marks)`,
    (kw: string) => `Identify one use of ${kw}. (1 mark)`,
  ];
  
  const mediumTemplates = [
    (kw: string) => `Explain why ${kw} is important in chemistry. (3 marks)`,
    (kw: string) => `Describe what happens during ${kw}. (3 marks)`,
    (kw: string) => `Compare ${kw} with another related concept. (4 marks)`,
    (kw: string) => `Suggest one reason why ${kw} is used in industry. (2 marks)`,
  ];
  
  const hardTemplates = [
    (kw: string) => `A student investigates ${kw} in an experiment. (a) Describe how they would set up the experiment. (3 marks) (b) Explain the expected results. (3 marks) (c) Evaluate the reliability of this method. (2 marks)`,
    (kw: string) => `Explain fully how ${kw} affects chemical reactions. Include specific examples and relate your answer to particle theory. (6 marks)`,
    (kw: string) => `Discuss the advantages and disadvantages of using ${kw} in industrial processes. (6 marks)`,
  ];
  
  const templates = difficulty === 'easy' ? easyTemplates : difficulty === 'hard' ? hardTemplates : mediumTemplates;
  const marksRange = difficulty === 'easy' ? [1, 2, 3] : difficulty === 'hard' ? [6, 7, 8] : [3, 4, 5];
  
  for (const kw of kws) {
    if (!isValidKeyword(kw)) continue;
    if (isChemicalFormula(kw)) continue;
    if (kw.length === 2 && kw === kw.toLowerCase()) continue;
    if (/ly$|ive$|ous$/.test(kw)) continue;
    
    const template = templates[Math.floor(Math.random() * templates.length)];
    const questionText = template(kw);
    
    if (!prevSet.has(questionText)) {
      const marks = marksRange[Math.floor(Math.random() * marksRange.length)];
      questions.push({ question: questionText, marks, expectedKeyPoints: [kw] });
    }
    if (questions.length >= numQuestions) break;
  }
  
  if (!questions.length) {
    const defaultMarks = difficulty === 'easy' ? 2 : difficulty === 'hard' ? 6 : 4;
    questions.push({ 
      question: `Describe one key concept from these notes. (${defaultMarks} marks)`, 
      marks: defaultMarks, 
      expectedKeyPoints: [] 
    });
  }
  
  console.log("[generate-varied-questions] Fallback questions generated:", questions.length);
  return { questions };
}

async function callLovableAIWithTimeout(payload: any, timeoutMs = 30000) {
  const key = Deno.env.get("BYTEZ_API_KEY_PRO");
  if (!key) throw new Error("BYTEZ_API_KEY_PRO is not configured");
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
  } finally { clearTimeout(id); }
}

function validateQuestionFormat(questionText: string): { valid: boolean; error?: string } {
  if (!questionText.trim().match(/[.!?)\]"]$/)) {
    return { valid: false, error: "Question doesn't end with proper punctuation" };
  }
  
  const words = questionText.trim().split(/\s+/);
  const lastWord = words[words.length - 1];
  if (lastWord && !lastWord.match(/[.!?)\]"]$/) && lastWord.length > 0) {
    if (questionText.includes("...") || questionText.endsWith(" ")) {
      return { valid: false, error: "Question appears to be cut off mid-sentence" };
    }
  }
  
  const incompletePatterns = [
    /\b(using|from|with|in|on|at|to|for)\s*$/i,
    /\b(the|a|an)\s*$/i,
    /\b(your|his|her|their)\s*$/i,
    /\(\w+\)?\s*$/,
  ];
  
  for (const pattern of incompletePatterns) {
    if (pattern.test(questionText)) {
      return { valid: false, error: "Question ends with incomplete phrase" };
    }
  }

  const partMatches = Array.from(questionText.matchAll(/\(([a-d])\)\s*([^(]+?)(?:\((\d+)\s*marks?\))/gi));
  
  if (partMatches.length === 0) {
    return { valid: true };
  }

  for (const match of partMatches) {
    const partLabel = match[1].toLowerCase();
    const partContent = match[2].trim();
    
    if (partContent.length < 10) {
      return { valid: false, error: `Part ${partLabel} content too short: "${partContent}"` };
    }
    
    if (partContent.match(/^[,.\s]+$/)) {
      return { valid: false, error: `Part ${partLabel} has no actual content` };
    }
    
    if (!partContent.includes(" ") || partContent.split(" ").length < 3) {
      return { valid: false, error: `Part ${partLabel} appears incomplete: "${partContent}"` };
    }
  }

  const expectedOrder = ['a', 'b', 'c', 'd'];
  const foundParts = partMatches.map(m => m[1].toLowerCase());
  
  for (let i = 1; i < foundParts.length; i++) {
    const currentIdx = expectedOrder.indexOf(foundParts[i]);
    const prevIdx = expectedOrder.indexOf(foundParts[i - 1]);
    
    if (currentIdx <= prevIdx) {
      return { valid: false, error: `Parts out of sequence: ${foundParts[i]} should come after ${foundParts[i-1]}` };
    }
  }

  return { valid: true };
}

// Generate difficulty-specific prompts - EXAM QUESTIONS focus on APPLICATION/ANALYSIS (not recall)
function getDifficultyPrompt(difficulty: string, studyContent: string, kws: string[]): { system: string; user: string; marksRange: string } {
  const shuffledKws = [...kws].sort(() => Math.random() - 0.5);
  
  if (difficulty === 'easy') {
    return {
      marksRange: "2-3",
      system: `You are an expert GCSE AQA examiner creating EASY difficulty EXAM questions (2-3 marks each).

🎯 EXAM QUESTIONS TEST UNDERSTANDING - NOT JUST RECALL
These questions require EXPLANATION or DESCRIPTION, not just naming/defining.
(Simple recall is tested separately in Blurt practice)

📝 EASY EXAM QUESTION TYPES:
- "Explain briefly why..." (2 marks)
- "Describe what happens when..." (2-3 marks)
- "Give a reason for..." (2 marks)
- "Using the data, explain..." (2-3 marks)

🚫 DO NOT USE THESE (reserved for Blurt practice):
- "Define..." 
- "Name..."
- "State..."
- "What is..."
- "Give an example of..."

✅ GOOD EASY EXAM QUESTIONS:
- "Explain why transition metals have higher melting points than Group 1 metals. (2 marks)"
- "Describe what happens to the particles during osmosis. (2 marks)"
- "Give a reason why plants wilt in salt water. (2 marks)"

❌ BAD (too simple - these are Blurt questions):
- "Define osmosis."
- "Name two transition metals."
- "What is a catalyst?"

📊 DATA INTERPRETATION:
Include simple data tables for students to interpret and explain patterns.

🔴 REQUIREMENTS:
1. Total marks: 2-3 marks per question
2. Maximum 2 parts (a) and (b) only
3. Require EXPLANATION or DESCRIPTION (not just recall)
4. Use simple real-world contexts

Output ONLY valid JSON format`,
      user: `Study Content:\n\n${studyContent}\n\nCreate exactly 1 EASY AQA-style EXAM question (2-3 marks total).

⚠️ IMPORTANT: This is an EXAM question, not a flashcard.
- Require EXPLANATION or DESCRIPTION
- Do NOT ask simple definitions or naming (those are for Blurt practice)

GOOD: "Explain why..." / "Describe what happens when..." / "Give a reason for..."
BAD: "Define..." / "Name..." / "State..." / "What is..."

Include keywords from: ${shuffledKws.slice(0, 8).join(", ")}

Return ONLY this JSON:
{ "questions": [ { "question": string, "marks": number (2-3), "expectedKeyPoints": string[], "markscheme": string } ] }`
    };
  }
  
  if (difficulty === 'hard') {
    return {
      marksRange: "5-8",
      system: `You are an expert GCSE AQA examiner creating HARD difficulty EXAM questions (5-8 marks each) for Grade 8-9 students.

🎯 HARD EXAM QUESTIONS TEST ANALYSIS & EVALUATION
These require multi-step reasoning, calculations, and critical thinking.

📝 HARD EXAM QUESTION TYPES:
- "Explain fully why... Include..." (5-6 marks)
- "Evaluate the advantages and disadvantages of..." (6 marks)
- "Compare and contrast... with reference to..." (5-6 marks)
- "Calculate... Show your working" (4-5 marks)
- "Analyse the data and explain..." (5-6 marks)

✅ INCLUDE WHERE APPROPRIATE:
- Multi-part questions (a), (b), (c), (d)
- Calculations with working
- Data analysis with conclusions
- Evaluation of methods or outcomes
- Application to unfamiliar contexts

📊 INCLUDE:
- Data tables for analysis
- Graphs or trends to interpret
- Experimental scenarios to evaluate
- Industrial applications to discuss

🔴 REQUIREMENTS:
1. Total marks: 5-8 marks per question
2. 3-4 parts: (a), (b), (c), and optionally (d)
3. Require ANALYSIS, EVALUATION, or CALCULATION
4. Multi-step reasoning required

Output ONLY valid JSON format`,
      user: `Study Content:\n\n${studyContent}\n\nCreate exactly 1 HARD AQA-style EXAM question (5-8 marks total).

⚠️ IMPORTANT: This is a CHALLENGING exam question.
- Require ANALYSIS, EVALUATION, or CALCULATION
- Include multi-step reasoning
- Use data interpretation where appropriate

Include 3-4 parts: (a), (b), (c), and optionally (d)

Include keywords from: ${shuffledKws.slice(0, 10).join(", ")}

Return ONLY this JSON:
{ "questions": [ { "question": string, "marks": number (5-8), "expectedKeyPoints": string[], "markscheme": string } ] }`
    };
  }
  
  // Medium difficulty (default)
  return {
    marksRange: "3-4",
    system: `You are an expert GCSE AQA examiner creating MEDIUM difficulty EXAM questions (3-4 marks each).

🎯 MEDIUM EXAM QUESTIONS TEST APPLICATION & COMPARISON
These require applying knowledge to scenarios and comparing concepts.

📝 MEDIUM EXAM QUESTION TYPES:
- "Explain why..." (3 marks)
- "Compare the properties of X and Y..." (4 marks)
- "Describe the process of..." (3 marks)
- "Using the data, explain the pattern..." (3-4 marks)
- "Suggest why..." (2-3 marks)

🚫 DO NOT USE (reserved for Blurt practice):
- "Define..."
- "Name..."
- "State..."
- "What is..."

✅ GOOD MEDIUM EXAM QUESTIONS:
- "Explain why copper is used for electrical wiring. (3 marks)"
- "Compare the reactivity of Group 1 metals with transition metals. (4 marks)"
- "Describe what happens to plant cells in a concentrated salt solution. (3 marks)"

❌ BAD (too simple):
- "Define a transition metal."
- "Name two properties of copper."

📊 INCLUDE:
- Data tables showing properties or results
- Real-world applications and contexts
- Comparison scenarios

🔴 REQUIREMENTS:
1. Total marks: 3-4 marks per question
2. 2-3 parts maximum: (a), (b), and optionally (c)
3. Require EXPLANATION, COMPARISON, or APPLICATION
4. Use realistic contexts

Output ONLY valid JSON format`,
    user: `Study Content:\n\n${studyContent}\n\nCreate exactly 1 MEDIUM AQA-style EXAM question (3-4 marks total).

⚠️ IMPORTANT: This is an EXAM question, not a flashcard.
- Require EXPLANATION, COMPARISON, or APPLICATION
- Do NOT ask simple definitions or naming (those are for Blurt practice)

GOOD: "Explain why..." / "Compare..." / "Describe the process..." / "Suggest why..."
BAD: "Define..." / "Name..." / "State..." / "What is..."

Include keywords from: ${shuffledKws.slice(0, 8).join(", ")}

Return ONLY this JSON:
{ "questions": [ { "question": string, "marks": number (3-4), "expectedKeyPoints": string[], "markscheme": string } ] }`
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { studyContent, numQuestions = 1, previousQuestions = [], subject, difficulty = 'medium' } = await req.json();
    
    console.log("[generate-varied-questions] Request received:", { 
      contentLength: studyContent?.length, 
      numQuestions, 
      subject, 
      difficulty,
      previousQuestionsCount: previousQuestions?.length 
    });
    
    if (!studyContent || typeof studyContent !== "string") {
      return new Response(JSON.stringify({ error: "Missing studyContent" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const isProductDesign = subject === "product-design" || 
      studyContent.toLowerCase().includes("product design") ||
      studyContent.toLowerCase().includes("material selection") ||
      studyContent.toLowerCase().includes("timber") ||
      studyContent.toLowerCase().includes("fair trade");

    const fallback = makeExamFallback({ studyContent, numQuestions, previousQuestions, difficulty });
    const kws = extractKeywords(studyContent, 24);
    
    let system: string;
    let user: string;
    let minMarks: number;
    let maxMarks: number;
    
    if (isProductDesign) {
      // Product Design prompt (unchanged)
      system = `You are an expert GCSE Product Design examiner creating simple, content-based exam questions.

🔴 ABSOLUTE FORMATTING REQUIREMENTS:
1. THE ENTIRE QUESTION MUST BE ONE CONTINUOUS STRING
2. Each question is SINGLE-PART (not multi-part with a, b, c)
3. Questions should be straightforward and directly answerable from the study content

Output ONLY valid JSON format`;

      user = `Study Content:\n\n${studyContent}\n\nCreate exactly ${numQuestions} GCSE Product Design exam question(s).

Return ONLY this JSON:
{ "questions": [ { "question": string, "marks": number (2-4), "expectedKeyPoints": string[], "markscheme": string } ] }`;
      
      minMarks = 2;
      maxMarks = 4;
    } else {
      // Use difficulty-specific prompts for Chemistry/Physics
      const difficultyPrompt = getDifficultyPrompt(difficulty, studyContent, kws);
      system = difficultyPrompt.system;
      user = difficultyPrompt.user;
      
      // Set marks range based on difficulty
      if (difficulty === 'easy') {
        minMarks = 2;
        maxMarks = 3;
      } else if (difficulty === 'hard') {
        minMarks = 5;
        maxMarks = 8;
      } else {
        minMarks = 3;
        maxMarks = 4;
      }
    }

    let data: any | null = null;
    try {
      console.log("[generate-varied-questions] Calling Bytez AI with difficulty:", difficulty);
      data = await callLovableAIWithTimeout({
        model: "google/gemini-2.5-pro",
        messages: [ { role: "system", content: system }, { role: "user", content: user } ],
        max_completion_tokens: 4000,
      });
    } catch (e) {
      console.warn("[generate-varied-questions] AI call failed, using fallback:", e);
      return new Response(JSON.stringify(fallback), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const content = data?.choices?.[0]?.message?.content;
    console.log("[generate-varied-questions] AI raw response length:", content?.length);
    console.log("[generate-varied-questions] AI raw response (first 800 chars):", content?.substring(0, 800));
    
    let parsed: any = null;
    try { parsed = typeof content === "string" ? JSON.parse(content) : content; }
    catch { const m = typeof content === "string" ? content.match(/\{[\s\S]*\}/) : null; if (m) parsed = JSON.parse(m[0]); }

    const out: any[] = [];
    const prevSet = new Set((previousQuestions || []).map(String));
    const arr: any[] = parsed?.questions ?? [];
    
    console.log(`[generate-varied-questions] Validating ${arr.length} AI-generated questions`);
    
    for (const q of arr) {
      const text = String(q?.question ?? "");
      if (!text) {
        console.log("[generate-varied-questions] Skipping empty question");
        continue;
      }
      
      if (prevSet.has(text)) {
        console.log("[generate-varied-questions] Skipping duplicate question");
        continue;
      }
      
      const validation = validateQuestionFormat(text);
      if (!validation.valid) {
        console.log(`[generate-varied-questions] ❌ REJECTED: ${validation.error}`);
        continue;
      }
      
      if (text.includes("...") || !text.trim().match(/[.!?)"]$/)) {
        console.log("[generate-varied-questions] ❌ REJECTED: Question appears incomplete");
        continue;
      }
      
      console.log(`[generate-varied-questions] ✓ ACCEPTED: "${text.substring(0, 80)}..."`);
      
      // More lenient keyword matching for easy questions
      const lower = text.toLowerCase();
      let overlap = 0; 
      for (const k of kws) { if (lower.includes(k)) overlap++; }
      const minKeywords = difficulty === 'easy' ? 1 : 2;
      if (overlap < minKeywords) {
        console.log(`[generate-varied-questions] Question has insufficient keyword overlap (${overlap}/${minKeywords})`);
        continue;
      }
      
      const marks = Math.min(maxMarks, Math.max(minMarks, Number(q?.marks ?? minMarks)));
      out.push({ 
        question: text, 
        marks, 
        expectedKeyPoints: Array.isArray(q?.expectedKeyPoints) ? q.expectedKeyPoints : [],
        markscheme: q?.markscheme || "",
        diagramSvg: null // Will be populated below
      });
      if (out.length >= numQuestions) break;
    }
    
    console.log(`[generate-varied-questions] Final result: ${out.length}/${numQuestions} valid questions for difficulty: ${difficulty}`);

    // Generate diagrams for questions that would benefit from them
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (out.length && supabaseUrl && supabaseKey) {
      console.log(`[generate-varied-questions] Generating diagrams for ${out.length} questions`);
      
      const diagramPromises = out.map(async (q, idx) => {
        try {
          const diagramResp = await fetch(`${supabaseUrl}/functions/v1/generate-question-diagram`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${supabaseKey}`,
            },
            body: JSON.stringify({
              questionText: q.question,
              subject: subject || 'chemistry',
              topic: kws.slice(0, 3).join(', '),
              marks: q.marks
            }),
          });
          
          if (diagramResp.ok) {
            const diagramData = await diagramResp.json();
            if (diagramData.svg) {
              out[idx].diagramSvg = diagramData.svg;
              console.log(`[generate-varied-questions] ✓ Diagram generated for Q${idx + 1}`);
            } else {
              console.log(`[generate-varied-questions] - No diagram needed for Q${idx + 1}`);
            }
          }
        } catch (diagramError) {
          console.log(`[generate-varied-questions] Diagram generation failed for Q${idx + 1}:`, diagramError);
        }
      });
      
      await Promise.all(diagramPromises);
    }

    if (!out.length) {
      return new Response(JSON.stringify(fallback), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ questions: out }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error in generate-varied-questions:", error);
    return new Response(JSON.stringify({ questions: [ { question: "Describe one key concept from these notes. (3 marks)", marks: 3, expectedKeyPoints: [] } ] }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
