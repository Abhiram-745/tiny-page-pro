import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question, studentAnswer, quote, themes, ao2Notes, ao3Notes } = await req.json();

    console.log('Marking English Literature answer:', { question, quote, themes });

    const systemPrompt = `You are an expert English Literature teacher specializing in GCSE and A-Level analysis. 
Your role is to provide constructive feedback on student analyses of literary quotes.

Focus on evaluating:
- AO1: Use of literary terminology and textual references
- AO2: Analysis of language, structure, and effects on the reader
- AO3: Understanding of context (historical, social, literary)

Your feedback should be encouraging but specific, helping students understand exactly what they did well and how to improve.`;

    const userPrompt = `A student was asked: "${question}"

The quote being analyzed: "${quote}"

Relevant themes: ${themes}

Expected AO2 Analysis (Language/Structure/Effect):
${ao2Notes}

Expected AO3 Analysis (Context):
${ao3Notes}

Student's Answer:
${studentAnswer}

Please provide feedback in the following JSON format:
{
  "strengths": "Specific things the student did well (e.g., good use of terminology, strong contextual link, clear analysis of effect)",
  "improvements": "Specific areas to develop (e.g., could explore the effect on the reader more deeply, missing link to Victorian context, needs more precise terminology)",
  "modelAnswer": "A rewritten version of the student's answer that demonstrates how to write a stronger analysis. Keep it as a single analytical paragraph similar to the student's style but with: more sophisticated terminology, deeper analysis of language/structure, stronger exploration of effects, and better contextual connections. Make it detailed but not overly long."
}`;

    const BYTEZ_API_KEY_FLASH = Deno.env.get('BYTEZ_API_KEY_FLASH');
    if (!BYTEZ_API_KEY_FLASH) {
      throw new Error('BYTEZ_API_KEY_FLASH is not configured');
    }

    const response = await fetch('https://api.bytez.com/models/v2/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BYTEZ_API_KEY_FLASH}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', response.status, errorText);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const feedbackText = data.choices[0].message.content;
    
    console.log('Raw AI response:', feedbackText);
    
    const feedback = JSON.parse(feedbackText);

    return new Response(
      JSON.stringify({
        strengths: feedback.strengths,
        improvements: feedback.improvements,
        modelAnswer: feedback.modelAnswer
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in mark-english-literature function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        strengths: "Unable to analyze at this time.",
        improvements: "Please try again.",
        modelAnswer: ""
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
