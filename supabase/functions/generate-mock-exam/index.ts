import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { examId, topics, totalMarks, subject } = await req.json();
    console.log("Generating mock exam:", { examId, topicsCount: topics?.length, totalMarks, subject });

    const BYTEZ_API_KEY = Deno.env.get('BYTEZ_API_KEY_PRO');
    if (!BYTEZ_API_KEY) {
      throw new Error("BYTEZ_API_KEY_PRO not configured");
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Calculate question distribution for target marks
    // Mix of 1, 2, 3, 4, 5, 6 mark questions
    const distribution = calculateQuestionDistribution(totalMarks);
    console.log("Question distribution:", distribution);

    let questionNumber = 1;
    const allQuestions: any[] = [];

    // Generate questions for each topic (page)
    for (let pageNumber = 0; pageNumber < topics.length; pageNumber++) {
      const topic = topics[pageNumber];
      const pageMarks = Math.floor(totalMarks / topics.length);
      const pageDistribution = calculateQuestionDistribution(pageMarks);

      console.log(`Generating questions for topic: ${topic.title}, page: ${pageNumber + 1}`);

      // Generate questions for each mark value
      for (const [marksStr, count] of Object.entries(pageDistribution)) {
        const marks = parseInt(marksStr);
        if (count === 0) continue;

        const prompt = `You are a ${subject} exam question generator. Generate ${count} high-quality exam questions worth ${marks} marks each about: "${topic.title}".

Study content for context:
${topic.content.substring(0, 3000)}

For each question, create:
1. A clear, well-structured question appropriate for ${marks} marks
2. Include relevant context or data where appropriate
3. For 4+ mark questions, consider including a table or diagram requirement

Return a JSON array with this structure:
{
  "questions": [
    {
      "question_text": "The question text with any context",
      "marks": ${marks},
      "expected_key_points": ["point1", "point2"],
      "markscheme": "Detailed markscheme with [1] for each mark point",
      "diagram_svg": null or "<svg>...</svg>" for relevant diagrams,
      "table_html": null or "<table>...</table>" for data tables
    }
  ]
}

Guidelines:
- Questions should test understanding, application, and analysis
- Include a mix of explain, describe, calculate, compare, evaluate questions
- For higher mark questions (4-6), include extended response prompts
- Diagrams should be simple, clear SVGs with labeled parts
- Tables should have clear headers and realistic data
- Markschemes should have clear, specific marking points

Return ONLY valid JSON, no other text.`;

        const response = await fetch('https://api.bytez.com/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Key ${BYTEZ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-pro-preview-05-06',
            messages: [
              { role: 'system', content: 'You are an expert exam question generator. Always return valid JSON.' },
              { role: 'user', content: prompt }
            ],
            max_tokens: 4000,
            temperature: 0.7
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Bytez API error:", response.status, errorText);
          throw new Error(`Bytez API error: ${response.status}`);
        }

        const data = await response.json();
        let content = data.choices?.[0]?.message?.content || '';
        
        // Clean up the response
        content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        
        let parsed: { questions?: any[] };
        try {
          parsed = JSON.parse(content);
        } catch (e) {
          console.error("Failed to parse response:", content.substring(0, 500));
          // Create fallback questions
          parsed = {
            questions: Array(count as number).fill(null).map(() => ({
              question_text: `Explain the key concepts related to ${topic.title}. [${marks} marks]`,
              marks: marks,
              expected_key_points: ["Key concept 1", "Key concept 2"],
              markscheme: `Award marks for: understanding of topic, correct terminology, clear explanation`,
              diagram_svg: null,
              table_html: null
            }))
          };
        }

        // Add questions with proper numbering
        for (const q of parsed.questions || []) {
          allQuestions.push({
            exam_id: examId,
            topic: topic.title,
            question_number: questionNumber++,
            question_text: q.question_text,
            marks: q.marks || marks,
            expected_key_points: q.expected_key_points || [],
            markscheme: q.markscheme || "",
            diagram_svg: q.diagram_svg || null,
            table_html: q.table_html || null,
            page_number: pageNumber + 1
          });
        }
      }
    }

    console.log(`Generated ${allQuestions.length} questions total`);

    // Insert all questions
    const { error: insertError } = await supabase
      .from('mock_exam_questions')
      .insert(allQuestions);

    if (insertError) {
      console.error("Error inserting questions:", insertError);
      throw insertError;
    }

    return new Response(JSON.stringify({ 
      success: true, 
      questionsGenerated: allQuestions.length 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error("Error in generate-mock-exam:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function calculateQuestionDistribution(totalMarks: number): Record<number, number> {
  // Aim for a realistic distribution of question types
  const distribution: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  let remaining = totalMarks;

  // Always include at least one 6-mark question for higher totals
  if (totalMarks >= 30 && remaining >= 6) {
    distribution[6] = 1;
    remaining -= 6;
  }

  // Add some 4-5 mark questions
  while (remaining >= 5 && distribution[5] < 2) {
    distribution[5] = (distribution[5] || 0) + 1;
    remaining -= 5;
  }
  while (remaining >= 4 && distribution[4] < 2) {
    distribution[4] = (distribution[4] || 0) + 1;
    remaining -= 4;
  }

  // Fill with 2-3 mark questions
  while (remaining >= 3 && distribution[3] < 4) {
    distribution[3] = (distribution[3] || 0) + 1;
    remaining -= 3;
  }
  while (remaining >= 2 && distribution[2] < 4) {
    distribution[2] = (distribution[2] || 0) + 1;
    remaining -= 2;
  }

  // Use 1-mark questions for the remainder
  while (remaining >= 1) {
    distribution[1] = (distribution[1] || 0) + 1;
    remaining -= 1;
  }

  return distribution;
}
