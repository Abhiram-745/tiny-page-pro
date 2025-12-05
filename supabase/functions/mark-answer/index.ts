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
    const { question, studentAnswer, expectedContent, marks, markscheme, questionType, hasImage } = await req.json();
    
    const BYTEZ_API_KEY_PRO = Deno.env.get("BYTEZ_API_KEY_PRO");
    if (!BYTEZ_API_KEY_PRO) {
      throw new Error("BYTEZ_API_KEY_PRO is not configured");
    }

    const isDiagramQuestion = questionType === "diagram" || /using a diagram|draw.*diagram|sketch.*diagram/i.test(question);
    
    const systemPrompt = `You are an expert GCSE examiner marking exam answers with LENIENT marking criteria.

CRITICAL MARKING RULES:
1. For calculation questions: Award FULL marks if the numerical answer is correct, even if working/units are slightly different
2. For multi-part questions: Mark each part separately and award partial credit generously
3. Accept equivalent expressions and notation differences
4. Award marks for correct reasoning even if final answer has minor errors
5. Be GENEROUS with marks - if the student shows understanding, give them credit
6. For balanced equations: Accept any correctly balanced form (coefficients may vary but ratios must be correct)
${isDiagramQuestion ? `
7. **DIAGRAM QUESTIONS**: When the question asks to "use a diagram" or "draw a diagram":
   - If student describes diagram without drawing: Award marks for correct description of what diagram should show
   - If photo/whiteboard submitted: Analyze the diagram carefully - look for labeled axes, curves, shifts, equilibrium points
   - Award diagram marks for: correct structure (axes/setup), correct labels, accurate representation of concept
   - Award analysis marks for: explaining the diagram, linking to theory, showing chain of reasoning
   - Be LENIENT on diagram quality - focus on whether key economic/scientific concepts are correctly shown
` : ''}

MARKING PROCESS:
- Read the full answer carefully before judging
- Look for correct content and key concepts
- Award marks for partially correct answers
- Only deduct marks for fundamental errors or completely missing key points
- If the student demonstrates understanding of the concept, be lenient with presentation
${isDiagramQuestion && hasImage ? `
- **IMAGE ANALYSIS**: The student has submitted a photo/whiteboard. Look for drawn diagrams showing:
  * Correct axes (e.g., Price vs Quantity for supply/demand)
  * Proper labels (D1, D2, S, equilibrium points, etc.)
  * Accurate shifts or changes shown
  * Clear indication of effects (price increase/decrease, quantity change)
- Award diagram marks generously if core elements are present, even if hand-drawn or rough
` : ''}

ALWAYS return a modelAnswer field with a complete, well-written model answer that would score full marks.

Return JSON with: score (0-${marks}), keyIdeasCovered (array of strings showing what they got right), keyIdeasMissed (array of strings showing what they missed), feedback (constructive string), modelAnswer (REQUIRED: a well-structured model answer that would score full marks - this is MANDATORY), and markingBreakdown (array with improved suggestions)`;

    const userPrompt = `Question (${marks} marks): ${question}

Expected Content/Key Concepts:
${expectedContent}

Student's Answer:
${studentAnswer}

${hasImage ? '**NOTE**: Student submitted answer via photo/whiteboard. Look carefully for any diagrams, labels, or visual elements in their description.' : ''}

MARKING INSTRUCTIONS:
- For calculation questions: Check if numerical answers are correct (allow for rounding)
- For explanation questions: Look for key concepts and understanding
- For multi-part questions: Award marks for each correct part
- Be LENIENT - if the answer demonstrates understanding, award marks
- Award partial credit wherever possible
${isDiagramQuestion ? `
- **DIAGRAM MARKING**: Award up to ${Math.ceil(marks / 2)} marks for diagram quality (axes, labels, accuracy)
- Award remaining marks for analysis and explanation linking to diagram
- If no diagram drawn but concepts explained: Award analysis marks only
` : ''}

Official Markscheme:
${markscheme || 'No markscheme provided'}

Return your response as JSON with this exact structure:
{
  "score": <number between 0 and ${marks}>,
  "keyIdeasCovered": ["list specific correct points from the answer"],
  "keyIdeasMissed": ["list specific missing or incorrect points"],
  "feedback": "Clear feedback explaining: (1) what they got right, (2) what they missed, (3) how to improve",
  "modelAnswer": "A well-structured model answer that would score full marks. Format appropriately for the question type.",
  "markscheme": "${markscheme ? markscheme.replace(/"/g, '\\"').replace(/\n/g, '\\n') : 'No markscheme available'}",
  "markingBreakdown": [
    {
      "markPoint": "The specific marking point from the markscheme",
      "studentText": "The exact phrase from the student's answer that matches this point (or null if not found)",
      "awarded": true or false,
      "marks": number of marks for this point,
      "explanation": "Brief explanation for why this mark was awarded/not awarded",
      "improvedSentence": "If NOT awarded: Write a sentence that incorporates this marking point into the student's existing answer style - something they could add to improve their answer. If awarded: null"
    }
  ]
}

CRITICAL FOR MISSED POINTS:
- For each marking point NOT awarded, provide an "improvedSentence" field
- This sentence should be written in the student's style, showing HOW to incorporate the missed concept
- Example: If student wrote about price increases but missed mentioning demand shifts, improvedSentence could be: "This price increase leads to a leftward shift in the demand curve as consumers seek alternatives."
- The improved sentence helps students understand exactly what to add to their answer

IMPORTANT: Be generous with marks. Students should get high scores for correct answers.`;

    const response = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${BYTEZ_API_KEY_PRO}`,
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
    
    console.log("[mark-answer] AI Response:", aiResponse.substring(0, 300));
    
    // Parse the JSON response from AI
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Could not parse AI response:", aiResponse);
      throw new Error("Invalid AI response format");
    }
    
    const result = JSON.parse(jsonMatch[0]);
    
    console.log("[mark-answer] Parsed result:", {
      score: result.score,
      maxMarks: marks,
      keyIdeasCoveredCount: result.keyIdeasCovered?.length,
      keyIdeasMissedCount: result.keyIdeasMissed?.length
    });
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in mark-answer function:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
