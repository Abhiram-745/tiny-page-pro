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

// Generate difficulty-specific prompts based on real AQA past paper examples
function getDifficultyPrompt(difficulty: string, studyContent: string, kws: string[]): { system: string; user: string; marksRange: string } {
  const shuffledKws = [...kws].sort(() => Math.random() - 0.5);
  
  if (difficulty === 'easy') {
    return {
      marksRange: "2-3",
      system: `You are an expert GCSE AQA examiner creating EASY difficulty questions (2-3 marks each).

🎯 EASY QUESTION CHARACTERISTICS:
- Simple recall and identification
- Single-step reasoning
- Data table interpretation
- Basic naming/listing

📝 AQA PAST PAPER EASY QUESTION EXAMPLES:

EXAMPLE 1 - Data Table (3 marks):
"A student records the densities of different metals:
Metal | Density (g/cm³)
Sodium | 0.97
Potassium | 0.86
Iron | 7.87
Copper | 8.96
(a) Identify which metals in the table are transition metals. (1 mark)
(b) Explain why transition metals have much higher densities than Group 1 metals. (2 marks)"

EXAMPLE 2 - Coloured Compounds (2 marks):
"A sample of two metal salts is tested: Salt A is blue. Salt B is colourless.
(a) Which salt is most likely to contain a transition metal? (1 mark)
(b) Explain why transition metal compounds are often coloured. (1 mark)"

EXAMPLE 3 - Reactivity (3 marks):
"A student places sodium, iron, and copper into separate test tubes of cold water. Sodium reacts vigorously. Iron shows no visible reaction. Copper shows no visible reaction.
(a) Identify which metals are transition metals. (1 mark)
(b) Explain why transition metals react less vigorously with water than Group 1 metals. (2 marks)"

EXAMPLE 4 - Variable Oxidation States (2 marks):
"Iron can form both Fe²⁺ and Fe³⁺ ions.
(a) What term is used to describe metals that can form ions with different charges? (1 mark)
(b) Suggest one reason why this property makes transition metals useful as catalysts. (1 mark)"

EXAMPLE 5 - Catalysts (2 marks):
"Iron is used as a catalyst in the Haber process. Manganese dioxide (MnO₂) is used to speed up the decomposition of hydrogen peroxide. Explain why transition metals make good catalysts. (2 marks)"

📚 COMMAND WORDS FOR EASY QUESTIONS:
- State (1 mark) - Single word/phrase answer
- Name (1 mark) - Give specific examples
- Identify (1 mark) - Pick from given information
- Give (1-2 marks) - List without explanation
- Suggest (1-2 marks) - Basic application

🔴 REQUIREMENTS:
1. Total marks: 2-3 marks per question
2. Maximum 2 parts (a) and (b) only
3. Focus on recall and simple data interpretation
4. Use simple contexts students would recognize
5. Include data tables where appropriate

Output ONLY valid JSON format`,
      user: `Study Content:\n\n${studyContent}\n\nCreate exactly 1 EASY AQA-style exam question (2-3 marks total) about ONLY the content above.

REQUIREMENTS:
✓ Use command words: State, Name, Identify, Give, or simple Explain
✓ Maximum 2 parts: (a) and (b) only
✓ Include data table if appropriate for the content
✓ Focus on basic recall and simple identification
✓ Total marks: 2-3 marks

Include keywords from: ${shuffledKws.slice(0, 8).join(", ")}

Return ONLY this JSON:
{ "questions": [ { "question": string, "marks": number (2-3), "expectedKeyPoints": string[], "markscheme": string } ] }`
    };
  }
  
  if (difficulty === 'hard') {
    return {
      marksRange: "5-8",
      system: `You are an expert GCSE AQA examiner creating HARD difficulty questions (5-8 marks each) for Grade 8-9 students.

🎯 HARD QUESTION CHARACTERISTICS:
- Multi-step reasoning
- Calculations with ionic equations
- Evaluate and discuss
- Data analysis with conclusions
- Industrial applications

📝 AQA PAST PAPER HARD QUESTION EXAMPLES:

EXAMPLE 1 - Displacement & Ion Formation (5 marks):
"A student adds aqueous copper(II) sulfate to a piece of zinc metal. After a few minutes, solid copper forms on the zinc.
(a) Write the ionic equation for this reaction. (2 marks)
(b) Explain why zinc can displace copper from its compound. (2 marks)
(c) Give one visible observation other than the appearance of copper. (1 mark)"

EXAMPLE 2 - Data Comparison (6 marks):
"A student compares three metals:
Metal | Melting Point (°C) | Density (g/cm³) | Reaction with Water
Lithium | 181 | 0.53 | Explosive
Iron | 1538 | 7.87 | No reaction
Copper | 1085 | 8.96 | No reaction
(a) Identify which metals are transition metals. (1 mark)
(b) Explain why transition metals have higher melting points and densities than lithium. (3 marks)
(c) Suggest one reason why transition metals do not react explosively with water. (2 marks)"

EXAMPLE 3 - Catalyst Mechanism (5 marks):
"Transition metals and their compounds are widely used as catalysts. Explain fully why transition metals make effective catalysts. In your answer refer to surface area, adsorption, and variable oxidation states."

EXAMPLE 4 - Colour & Electron Transitions (6 marks):
"Iron(III) chloride is yellow-brown, while copper(II) sulfate is blue. Explain why transition metal compounds are coloured. Your answer should refer to d-electrons, energy levels, and light absorption."

EXAMPLE 5 - Multi-step Reaction Comparison (4 marks):
"Group 1 metals react vigorously with water but transition metals do not. Explain this difference in reactivity using ideas about: electron loss, attraction between the nucleus and outer electrons, the number of electron shells."

EXAMPLE 6 - Alloy & Structure (5 marks):
"Steel is an alloy mainly made of iron. Explain why pure iron is not used for construction and why alloying it improves its properties. Refer to layers, strength, and atomic structure."

EXAMPLE 7 - Oxidation State Change (6 marks):
"Iron(II) ions (Fe²⁺) can be oxidised to iron(III) ions (Fe³⁺).
(a) Define oxidation in terms of electron transfer. (2 marks)
(b) Explain why the ability to form multiple ions is characteristic of transition metals. (2 marks)
(c) Suggest one industrial advantage of this property. (2 marks)"

EXAMPLE 8 - Electrochemical Series (5 marks):
"A student places strips of zinc and copper into solutions of different metal salts. They observe: Zinc displaces copper from copper sulfate. Zinc does not displace iron from iron(II) sulfate. Copper does not displace zinc from zinc sulfate. Use this information to rank zinc, copper, and iron in order of reactivity and justify your answer."

📚 COMMAND WORDS FOR HARD QUESTIONS:
- Explain fully (4-6 marks) - Detailed reasoning with links
- Evaluate (5-6 marks) - Weigh advantages/disadvantages
- Discuss (5-6 marks) - Consider multiple viewpoints
- Compare (4-5 marks) - State similarities AND differences with reasons
- Calculate (2-4 marks) - Multi-step calculations with working

🔴 REQUIREMENTS:
1. Total marks: 5-8 marks per question
2. 3-4 parts: (a), (b), (c), and optionally (d)
3. Include ionic equations where appropriate
4. Require multi-step reasoning
5. Include evaluation or discussion elements

Output ONLY valid JSON format`,
      user: `Study Content:\n\n${studyContent}\n\nCreate exactly 1 HARD AQA-style exam question (5-8 marks total) about ONLY the content above.

REQUIREMENTS:
✓ Use command words: Explain fully, Evaluate, Discuss, Compare, Calculate
✓ Include 3-4 parts: (a), (b), (c), and optionally (d)
✓ Require multi-step reasoning
✓ Include ionic equations, calculations, or evaluation where appropriate
✓ Total marks: 5-8 marks

Include keywords from: ${shuffledKws.slice(0, 10).join(", ")}

Return ONLY this JSON:
{ "questions": [ { "question": string, "marks": number (5-8), "expectedKeyPoints": string[], "markscheme": string } ] }`
    };
  }
  
  // Medium difficulty (default)
  return {
    marksRange: "3-4",
    system: `You are an expert GCSE AQA examiner creating MEDIUM difficulty questions (3-4 marks each).

🎯 MEDIUM QUESTION CHARACTERISTICS:
- Explanation with context
- Compare properties
- Describe patterns
- Apply knowledge to scenarios

📝 AQA PAST PAPER MEDIUM QUESTION EXAMPLES:

EXAMPLE 1 - Physical Properties (3 marks):
"Explain why transition metals are used instead of Group 1 metals in the construction of buildings and bridges. Include at least two physical properties and one explanation."

EXAMPLE 2 - Coloured Compounds (2 marks):
"Copper(II) sulfate solution is blue, but sodium sulfate solution is colourless. Explain why only one of these compounds is coloured."

EXAMPLE 3 - Density Data (3 marks):
"A data table shows densities of four metals:
Metal | Density (g/cm³)
Lithium | 0.53
Sodium | 0.97
Iron | 7.87
Nickel | 8.90
(a) Which metals in the table are transition metals?
(b) Suggest why transition metals have much higher densities than Group 1 metals."

EXAMPLE 4 - Variable Oxidation States (3 marks):
"Iron forms Fe²⁺ ions in some compounds and Fe³⁺ ions in others. Explain what this means and why it is unusual when compared to Group 1 metals."

EXAMPLE 5 - Catalyst Application (2 marks):
"Nickel is used as a catalyst in hydrogenation reactions. Explain what a catalyst is and why transition metals are often used as catalysts."

EXAMPLE 6 - Reaction Comparison (3 marks):
"A student adds potassium, iron and copper to cold water. Only potassium reacts. Explain why iron and copper do not react, referring to their position in the periodic table."

EXAMPLE 7 - Compound Colours (3 marks):
"A student observes: Copper(II) chloride – blue-green, Iron(III) nitrate – yellow-brown, Sodium chloride – white. Explain why only the first two compounds are coloured and relate your answer to electron structure."

EXAMPLE 8 - Everyday Uses (4 marks):
"Explain why copper is used for electrical wiring and why iron is used for building structures. Refer to their physical properties."

EXAMPLE 9 - Reactions Comparison (3 marks):
"Compare the reactions of transition metals with water and oxygen to those of Group 1 metals. Use specific examples."

EXAMPLE 10 - Chemical Properties Summary (4 marks):
"Describe two chemical properties that are typical of transition metals and explain how these differ from the properties of Group 1 metals."

📚 COMMAND WORDS FOR MEDIUM QUESTIONS:
- Explain (3-4 marks) - Give reasons with scientific vocabulary
- Describe (2-3 marks) - Account of a process
- Compare (3-4 marks) - Similarities AND differences
- Suggest (2-3 marks) - Apply to unfamiliar context

🔴 REQUIREMENTS:
1. Total marks: 3-4 marks per question
2. 2-3 parts maximum: (a), (b), and optionally (c)
3. Require explanation with reasoning
4. Use realistic contexts

Output ONLY valid JSON format`,
    user: `Study Content:\n\n${studyContent}\n\nCreate exactly 1 MEDIUM AQA-style exam question (3-4 marks total) about ONLY the content above.

REQUIREMENTS:
✓ Use command words: Explain, Describe, Compare, Suggest
✓ Maximum 3 parts: (a), (b), and optionally (c)
✓ Require explanation with reasoning
✓ Total marks: 3-4 marks

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
        markscheme: q?.markscheme || ""
      });
      if (out.length >= numQuestions) break;
    }
    
    console.log(`[generate-varied-questions] Final result: ${out.length}/${numQuestions} valid questions for difficulty: ${difficulty}`);

    if (!out.length) {
      return new Response(JSON.stringify(fallback), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ questions: out }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (error) {
    console.error("Error in generate-varied-questions:", error);
    return new Response(JSON.stringify({ questions: [ { question: "Describe one key concept from these notes. (3 marks)", marks: 3, expectedKeyPoints: [] } ] }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
