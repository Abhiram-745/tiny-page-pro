import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyContent } = await req.json();
    
    if (!studyContent || typeof studyContent !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing studyContent" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const BYTEZ_API_KEY_FLASH = Deno.env.get("BYTEZ_API_KEY_FLASH");
    if (!BYTEZ_API_KEY_FLASH) {
      throw new Error("BYTEZ_API_KEY_FLASH is not configured");
    }

    const timestamp = Date.now();
    const randomSeed = Math.floor(Math.random() * 10000);

    const systemPrompt = `You are an expert GCSE AQA examiner creating BLURT-STYLE quick recall questions.

🎯 BLURT QUESTIONS ARE FOR QUICK RECALL ONLY - NOT EXAM PRACTICE:
These questions test MEMORIZATION of key facts, terms, and definitions.
They should be instantly answerable from memory - no extended thinking required.

📋 BLURT QUESTION TYPES (USE THESE ONLY):
1. DEFINITIONS: "Define the term [X]" / "What is meant by [X]?"
2. NAMING: "Name the..." / "What is the name of..."
3. SIMPLE FACTS: "State one..." / "Give one..."
4. IDENTIFICATION: "What type of..." / "Which..."
5. QUICK RECALL: "What does [X] do?" / "Where is [X] found?"

🚫 DO NOT ASK THESE (RESERVED FOR EXAM QUESTIONS):
- "Explain why..." (explanation questions)
- "Compare..." (comparison questions)
- "Describe the process..." (extended descriptions)
- "Calculate..." (calculations)
- "Evaluate..." (evaluation questions)
- "Discuss..." (discussion questions)
- Multi-part questions (a), (b), (c)

✅ GOOD BLURT QUESTIONS:
- "Define osmosis."
- "Name the organelle responsible for protein synthesis."
- "State the function of the cell membrane."
- "What is the formula for photosynthesis?"
- "Give one example of a transition metal."

❌ BAD BLURT QUESTIONS (too complex):
- "Explain why osmosis is important for plants."
- "Compare diffusion and osmosis."
- "Describe how the cell membrane controls what enters the cell."

CRITICAL REQUIREMENTS:
1. Questions must be 5-15 words ONLY
2. Answers must be 1-2 sentences maximum
3. Test ONE specific fact per question
4. Focus on: terms, definitions, names, functions, locations, simple facts
5. Generate EXACTLY 5 questions covering DIFFERENT concepts
6. Each question should have ONE clear correct answer

RANDOMIZATION SEED: ${randomSeed}
Cover DIFFERENT subtopics from the content each time.

Return ONLY valid JSON:
{
  "questions": [
    {
      "questionNumber": "Q1",
      "question": "Define [term]...",
      "answer": "Short factual answer",
      "marks": 1
    }
  ]
}`;

    const userPrompt = `Study Content:\n\n${studyContent}\n\n🎲 BLURT QUESTION GENERATION (Seed: ${randomSeed}, Time: ${timestamp}):

STEP 1: Extract KEY TERMS from the content (definitions, names, functions)
STEP 2: Select 5 DIFFERENT terms/concepts to test
STEP 3: Create SHORT recall questions (5-15 words each)

QUESTION STYLE DISTRIBUTION:
- Q1: Definition question ("Define..." or "What is meant by...")
- Q2: Naming question ("Name..." or "What is the name of...")
- Q3: Function question ("What is the function of..." or "What does X do?")
- Q4: Location/identification ("Where is..." or "Which...")
- Q5: Simple fact ("State..." or "Give one...")

⚠️ REMEMBER: These are QUICK RECALL questions, NOT exam questions.
- Keep questions SHORT (5-15 words)
- Keep answers BRIEF (1-2 sentences)
- Test FACTS, not understanding

Generate 5 blurt questions NOW.`;

    const response = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${BYTEZ_API_KEY_FLASH}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please check your Bytez API credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log("[generate-blurt-questions] AI Response:", aiResponse.substring(0, 300));
    
    // Parse the JSON response from AI
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Could not parse AI response:", aiResponse);
      throw new Error("Invalid AI response format");
    }
    
    const result = JSON.parse(jsonMatch[0]);
    
    console.log("[generate-blurt-questions] Generated questions:", result.questions?.length);
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-blurt-questions function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        questions: [
          {
            questionNumber: "Q1",
            question: "Explain the key concepts from the study material.",
            answer: "Review the main ideas and how they connect to each other.",
            marks: 1
          }
        ]
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
