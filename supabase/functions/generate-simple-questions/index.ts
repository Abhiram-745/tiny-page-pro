import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function callOpenAIWithTimeout(payload: any, timeoutMs = 45000) {
  const key = Deno.env.get("BYTEZ_API_KEY_PRO");
  if (!key) throw new Error("BYTEZ_API_KEY_PRO is not configured");
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const resp = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${key}`, 
        "Content-Type": "application/json" 
      },
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

// Get subject-specific exam board and style
function getSubjectContext(subject: string) {
  const subjectLower = (subject || 'chemistry').toLowerCase();
  
  const contexts: Record<string, { board: string; style: string; examples: string; forbidden: string }> = {
    'physics': {
      board: 'AQA GCSE Physics',
      style: 'Focus on calculations, equations, practical applications, and explaining physical phenomena. Include formula-based questions where appropriate. Use physics terminology only.',
      examples: `
PHYSICS QUESTION EXAMPLES:
1 MARK: "State the unit of force." [1 mark]
2 MARKS: "Calculate the speed of a car that travels 100m in 5 seconds." [2 marks]
3 MARKS: "Explain why a parachutist reaches terminal velocity." [3 marks]
4 MARKS: "Describe how a transformer works and explain why it is used in the National Grid." [4 marks]`,
      forbidden: 'Do NOT include: chemical equations, reaction mechanisms, biological processes, economic concepts, design terminology.'
    },
    'chemistry': {
      board: 'AQA GCSE Chemistry',
      style: 'Focus on reactions, bonding, structure, and practical chemistry. Include balanced equations where appropriate.',
      examples: `
CHEMISTRY QUESTION EXAMPLES:
1 MARK: "State the type of bonding in sodium chloride." [1 mark]
2 MARKS: "Describe what happens to the atoms when sodium reacts with chlorine." [2 marks]
3 MARKS: "Explain why metals are good conductors of electricity." [3 marks]
4 MARKS: "Explain how a catalyst increases the rate of reaction." [4 marks]`,
      forbidden: 'Do NOT include: physics formulas (v=s/t, F=ma), biological processes, economic concepts.'
    },
    'biology': {
      board: 'AQA GCSE Biology',
      style: 'Focus on living organisms, processes, systems, and practical biology. Include diagrams and data interpretation where appropriate.',
      examples: `
BIOLOGY QUESTION EXAMPLES:
1 MARK: "Name the organelle where aerobic respiration occurs." [1 mark]
2 MARKS: "Describe the structure of a plant cell." [2 marks]
3 MARKS: "Explain how the structure of the small intestine is adapted for absorption." [3 marks]
4 MARKS: "Explain how natural selection leads to evolution." [4 marks]`,
      forbidden: 'Do NOT include: physics formulas, chemical equations (unless simple like respiration), economic concepts.'
    },
    'economics': {
      board: 'AQA GCSE Economics',
      style: 'Focus on economic concepts, markets, business decisions, and real-world applications. Include diagram analysis and case studies.',
      examples: `
ECONOMICS QUESTION EXAMPLES:
1 MARK: "Define opportunity cost." [1 mark]
2 MARKS: "State two factors that cause demand to shift." [2 marks]
3 MARKS: "Explain how an increase in interest rates affects consumer spending." [3 marks]
4 MARKS: "Analyse how a minimum wage affects the labour market." [4 marks]`,
      forbidden: 'Do NOT include: scientific equations, chemical formulas, physics calculations, biological processes.'
    },
    'product-design': {
      board: 'AQA GCSE Design and Technology',
      style: 'Focus on materials, manufacturing processes, design principles, and sustainability. DO NOT include chemistry equations or formulas.',
      examples: `
PRODUCT DESIGN QUESTION EXAMPLES:
1 MARK: "State one advantage of using MDF over solid wood." [1 mark]
2 MARKS: "Describe two properties of thermoplastics." [2 marks]
3 MARKS: "Explain how CAD/CAM has changed manufacturing processes." [3 marks]
4 MARKS: "Evaluate the environmental impact of using renewable materials in product design." [4 marks]`,
      forbidden: 'Do NOT include: chemical equations, element symbols, reaction arrows, state symbols, polymerisation notation, mole calculations, physics formulas.'
    },
    'geography': {
      board: 'AQA GCSE Geography',
      style: 'Focus on physical and human geography, case studies, and fieldwork. Include data interpretation and map skills.',
      examples: `
GEOGRAPHY QUESTION EXAMPLES:
1 MARK: "Define the term 'urbanisation'." [1 mark]
2 MARKS: "Describe two features of a meander." [2 marks]
3 MARKS: "Explain how deforestation affects the water cycle." [3 marks]
4 MARKS: "Evaluate the effectiveness of flood management strategies." [4 marks]`,
      forbidden: 'Do NOT include: chemistry equations, physics formulas, economic graphs (unless relevant to human geography).'
    }
  };
  
  return contexts[subjectLower] || contexts['chemistry'];
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyContent, numQuestions = 1, previousQuestions = [], subject, marks = 4, questionType = "general" } = await req.json();
    
    if (!studyContent || typeof studyContent !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing studyContent" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const subjectContext = getSubjectContext(subject);
    console.log("[generate-simple-questions] Generating questions for subject:", subject, "marks:", marks);

const systemPrompt = `You are an expert ${subjectContext.board} examiner creating exam questions that EXACTLY match authentic past paper style.

🎯 SUBJECT: ${subjectContext.board} ONLY
${subjectContext.style}

🚫 FORBIDDEN CONTENT FOR THIS SUBJECT:
${subjectContext.forbidden}

⚠️ ABSOLUTE SUBJECT RESTRICTION:
- You are ONLY creating ${subjectContext.board} questions
- Do NOT include content from other subjects
- Do NOT use chemistry terminology in physics questions
- Do NOT use physics formulas in biology questions
- Do NOT use scientific notation in economics questions
- EVERY question must be 100% relevant to ${subjectContext.board}

📚 COMMAND WORDS (use correctly for mark allocation):
- **State/Name/Give** (1 mark) - Single word/phrase, factual recall
- **Describe** (2-3 marks) - Give account of process/phenomenon
- **Explain** (3-4 marks) - Give reasons using correct terminology
- **Calculate** (2-4 marks) - Show working, include units
- **Compare** (3-4 marks) - State similarities AND differences
- **Suggest** (2-3 marks) - Apply to unfamiliar context
- **Analyse** (6 marks) - Examine in detail with reasons
- **Evaluate** (8 marks) - Make judgement with justification

${subjectContext.examples}

🚨 CRITICAL CONSTRAINTS:
✓ Questions must be DIRECTLY answerable from the study content provided
✓ Use EXACT command words for mark allocation
✓ Every fact/term MUST appear in the study content
✓ Generate questions appropriate for ${subjectContext.board}
✗ DO NOT introduce topics not covered in the study content
✗ DO NOT cross subject boundaries
✗ DO NOT invent data or scenarios not in notes

📋 TABLE FORMATTING (when needed):
- Use proper markdown table syntax with headers
- Format: | Header1 | Header2 |
- Separate headers with: |---|---|
- Keep tables clean and readable

Output ONLY valid JSON format.`;

    const userPrompt = `Study Content:

${studyContent}

🎯 Create exactly ${numQuestions} GCSE AQA exam questions with EXACTLY ${marks} marks total.

⚠️ CRITICAL MARK CONSTRAINTS - YOU MUST FOLLOW THESE:
✓ The question MUST be worth EXACTLY ${marks} marks - NO MORE, NO LESS
✓ If ${marks} = 3, create a 3-mark question (short answer with 3 marking points)
✓ If ${marks} = 4, create a 4-mark question (extended answer with 4 marking points)
✓ If ${marks} = 6, create a 6-mark question (analysis question)
✓ If ${marks} = 8, create an 8-mark question (evaluation question)
✓ DO NOT create questions worth more marks than requested
✓ The markscheme MUST have exactly ${marks} marking points totaling ${marks} marks

⚠️ CONTENT CONSTRAINTS:
✓ Every word of your question must relate to concepts in the study content above
✓ Do NOT introduce new topics, materials, or processes not mentioned above
✓ Questions must be DIRECTLY answerable using ONLY the information provided
✓ Use clear, simple language
✓ Include questionType field matching question style

${marks <= 4 ? `
📝 SHORT/MEDIUM QUESTION (${marks} marks):
- Use command words appropriate for ${marks} marks: State, Describe, Explain, Calculate
- Keep the question focused and specific
- Markscheme should have ${marks} distinct marking points, each worth 1 mark
- Example format: "Explain why [concept from study content]. [${marks} marks]"
` : ''}

${marks === 6 && questionType === "diagram" ? `
📊 DIAGRAM ANALYSIS QUESTION (6 marks):
- Start with "Using a diagram, analyse..."
- Student must DRAW and LABEL a diagram (supply/demand curves, factors diagram, etc.)
- Then ANALYSE the diagram's implications
- Example: "Using a diagram, analyse how a rise in consumer income could affect the market price and quantity of [product from study content]."
` : ''}

${marks === 6 && questionType === "case-study" ? `
📋 CASE STUDY ANALYSIS QUESTION (6 marks):
- Create a realistic business/economic scenario (150-200 words) based on study content
- Include specific data/context (prices, quantities, percentages, real business names if possible)
- Example structure:
  **Case Study: [Business Name]**
  [Business Name] is a [size] [industry] firm specialising in [products/services]. [Describe current situation with economic concepts from study content]. Recent [economic change] has affected [aspect of business]. [Include specific data and consequences].
  
  Question: "Analyse how [economic concept from study content] has affected [specific aspect from case study]." [6 marks]
` : ''}

${marks === 8 ? `
📝 MULTI-PART EVALUATION QUESTION (8 marks total):
⚠️ CRITICAL: For 8 marks, create a MULTI-PART question like real GCSE papers with parts (a), (b), (c):

REQUIRED STRUCTURE FOR 8-MARK QUESTIONS:
Create a question with MULTIPLE PARTS that add up to 8 marks total. Example structures:
- (a) State... [1 mark] + (b) Describe... [3 marks] + (c) Explain... [4 marks] = 8 marks
- (a) Define... [2 marks] + (b) Explain... [3 marks] + (c) Evaluate... [3 marks] = 8 marks
- (a) State... [1 mark] + (b) Calculate... [2 marks] + (c) Explain... [2 marks] + (d) Suggest... [3 marks] = 8 marks

FORMAT YOUR QUESTION LIKE THIS:
"Topic: [Topic Name]

(a) State [simple recall question]. [1 mark]

(b) Describe [process/concept from study content]. [3 marks]

(c) Explain [why/how aspect requiring analysis]. [4 marks]"

The question MUST:
- Have multiple parts labeled (a), (b), (c), etc.
- Progress from simple recall to complex analysis
- Have marks that add up to EXACTLY 8
- Test different levels of understanding
- Be directly answerable from the study content
` : ''}

${previousQuestions.length > 0 ? `AVOID repeating these previous questions:
${previousQuestions.map((q: string, i: number) => `${i + 1}. ${q}`).join("\n")}` : ''}

${subject && subject.toLowerCase() === 'product-design' ? `ADDITIONAL FILTERS FOR PRODUCT DESIGN (especially Sources and Origins):
- Do NOT include chemical equations, element symbols (e.g., Fe, C2H4), reaction arrows (→), state symbols ((s),(l),(g),(aq)), polymerisation notation, or stoichiometry/mole/relative-mass calculations.
- If such symbols or equations do NOT appear in the study content above, you MUST NOT include them in the question or markscheme.
- Focus on sources, origins, material categories, properties, provenance, environmental/ethical impact, supply chains, and responsible design.` : ''}

MARK SCHEME REQUIREMENTS (MUST have exactly ${marks} marking points):
Create detailed mark schemes following AQA exam paper style:

${marks <= 2 ? `
For ${marks} MARK question:
"**Mark Scheme:**\\n\\n${Array.from({length: marks}, (_, i) => `• [Point ${i+1}] (1 mark)`).join('\\n')}\\n\\n**Maximum: ${marks} marks**"
` : ''}

${marks === 3 ? `
For 3 MARK question:
"**Mark Scheme:**\\n\\n• [First point] (1)\\n• [Second point] (1)\\n• [Third point] (1)\\n\\n**Maximum: 3 marks**"
` : ''}

${marks === 4 ? `
For 4 MARK question:
"**Mark Scheme:**\\n\\n• [First point] (1)\\n• [Second point] (1)\\n• [Third point] (1)\\n• [Fourth point] (1)\\n\\n**Maximum: 4 marks**"
` : ''}

${marks === 6 ? `
For 6 MARK question:
"**Mark Scheme:**\\n\\n**Knowledge/Application (AO1/AO2):**\\n• [Point 1] (1)\\n• [Point 2] (1)\\n• [Point 3] (1)\\n\\n**Analysis (AO3):**\\n• [Point 4] (1)\\n• [Point 5] (1)\\n• [Point 6 - chain of reasoning] (1)\\n\\n**Maximum: 6 marks**"
` : ''}

${marks === 8 ? `
For 8 MARK MULTI-PART question:
"**Mark Scheme:**\\n\\n**(a)** [1 mark]\\n• [Answer point] (1)\\n\\n**(b)** [3 marks]\\n• [First point] (1)\\n• [Second point] (1)\\n• [Third point] (1)\\n\\n**(c)** [4 marks]\\n• [First explanation point] (1)\\n• [Second explanation point] (1)\\n• [Third explanation point] (1)\\n• [Fourth explanation point/link] (1)\\n\\n**Total: 8 marks**"
` : ''}

Return ONLY this JSON structure:
{ "questions": [ { "question": string, "questionType": string, "marks": ${marks}, "expectedKeyPoints": string[], "markscheme": string, "caseStudy"?: string } ] }

⚠️ FINAL VALIDATION CHECKLIST - ALL MUST BE TRUE:
1. The "marks" field MUST equal exactly ${marks}
2. The question MUST be worth exactly ${marks} marks total
3. For ${marks} marks, the markscheme MUST have exactly ${marks} marking points
4. If ${marks} = 8: The question MUST have multiple parts (a), (b), (c) adding to 8 marks
5. DO NOT create a question worth fewer marks than ${marks}
6. DO NOT create a question worth more marks than ${marks}

REJECT ANY OUTPUT where marks ≠ ${marks}`;

    console.log("[generate-simple-questions] Calling Gemini 2.5 Pro with marks:", marks);
    
    // Use gemini-2.5-pro for better exam question quality
    const data = await callOpenAIWithTimeout({
      model: "google/gemini-2.5-pro",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_completion_tokens: 3000,
    });

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("No content in OpenAI response");
    }

    console.log("[generate-simple-questions] Raw AI response:", content);

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      console.error("[generate-simple-questions] JSON parse error:", e);
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not extract JSON from response");
      }
    }

if (!parsed.questions || !Array.isArray(parsed.questions)) {
      throw new Error("Invalid response structure");
    }

    // ENFORCE MARKS: Override any incorrect marks values
    parsed.questions = parsed.questions.map((q: any) => ({
      ...q,
      marks: marks // Force the marks to match the requested value
    }));

    console.log("[generate-simple-questions] Successfully generated", parsed.questions.length, "questions with enforced marks:", marks);

    return new Response(
      JSON.stringify(parsed),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[generate-simple-questions] Error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        questions: [] 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});