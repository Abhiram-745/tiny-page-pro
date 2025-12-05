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
    const { examId } = await req.json();
    console.log("Marking mock exam:", examId);

    const BYTEZ_API_KEY = Deno.env.get('BYTEZ_API_KEY_FLASH');
    if (!BYTEZ_API_KEY) {
      throw new Error("BYTEZ_API_KEY_FLASH not configured");
    }
    console.log("BYTEZ_API_KEY_FLASH found, length:", BYTEZ_API_KEY.length);

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Update exam status to marking
    await supabase
      .from('mock_exams')
      .update({ status: 'marking' })
      .eq('id', examId);

    // Get all questions and answers
    const { data: questions, error: qError } = await supabase
      .from('mock_exam_questions')
      .select('*')
      .eq('exam_id', examId)
      .order('question_number', { ascending: true });

    if (qError) throw qError;

    const { data: answers, error: aError } = await supabase
      .from('mock_exam_answers')
      .select('*')
      .eq('exam_id', examId);

    if (aError) throw aError;

    const answerMap = new Map((answers || []).map((a: any) => [a.question_id, a]));

    let totalScore = 0;
    const results: any[] = [];

    // Mark each question
    for (let i = 0; i < (questions?.length || 0); i++) {
      const question = questions![i];
      const answer = answerMap.get(question.id);

      console.log(`Marking question ${i + 1}/${questions!.length}`);

      // Update progress
      await supabase
        .from('mock_exams')
        .update({ marking_progress: i + 1 })
        .eq('id', examId);

      const studentAnswer = (answer as any)?.answer_text || "";
      const hasImage = (answer as any)?.answer_image_url ? true : false;

      // Skip marking if no answer
      if (!studentAnswer && !hasImage) {
        results.push({
          exam_id: examId,
          question_id: question.id,
          score: 0,
          max_marks: question.marks,
          feedback: "No answer provided.",
          model_answer: question.markscheme || "See markscheme for expected answer.",
          key_points_covered: [],
          key_points_missed: question.expected_key_points || [],
          what_done_well: null,
          areas_to_improve: "You need to attempt this question."
        });
        continue;
      }

      const prompt = `You are a strict but fair exam marker. Mark this student's answer.

QUESTION (${question.marks} marks):
${question.question_text}

MARKSCHEME:
${question.markscheme || (question.expected_key_points as string[])?.join('\n') || 'Use professional judgement'}

STUDENT'S ANSWER:
${hasImage ? "[Student submitted a handwritten/drawn answer - assume it partially addresses the question]" : studentAnswer}

Mark the answer and return JSON:
{
  "score": <number from 0 to ${question.marks}>,
  "feedback": "<brief overall feedback>",
  "model_answer": "<ideal answer for ${question.marks} marks>",
  "key_points_covered": ["<points the student got right>"],
  "key_points_missed": ["<points the student missed or got wrong>"],
  "what_done_well": "<specific praise for good elements>",
  "areas_to_improve": "<constructive feedback on what to add/fix>"
}

Be fair but rigorous. Award partial marks for partial understanding.
Return ONLY valid JSON.`;

      try {
        // Use the correct Bytez API endpoint format
        const response = await fetch('https://api.bytez.com/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Key ${BYTEZ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash-preview-05-20',
            messages: [
              { role: 'system', content: 'You are an expert exam marker. Return only valid JSON.' },
              { role: 'user', content: prompt }
            ],
            max_tokens: 1500
          }),
        });

        console.log(`Bytez API response status for question ${i + 1}:`, response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Bytez API error for question ${i + 1}:`, response.status, errorText);
          throw new Error(`Bytez API error: ${response.status}`);
        }

        const data = await response.json();
        let content = data.choices?.[0]?.message?.content || '';
        content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

        const marking = JSON.parse(content);
        const score = Math.min(question.marks, Math.max(0, marking.score || 0));
        totalScore += score;

        results.push({
          exam_id: examId,
          question_id: question.id,
          score: score,
          max_marks: question.marks,
          feedback: marking.feedback || "",
          model_answer: marking.model_answer || "",
          key_points_covered: marking.key_points_covered || [],
          key_points_missed: marking.key_points_missed || [],
          what_done_well: marking.what_done_well || null,
          areas_to_improve: marking.areas_to_improve || null
        });

      } catch (markError) {
        console.error(`Error marking question ${question.id}:`, markError);
        // Provide default marking on error
        results.push({
          exam_id: examId,
          question_id: question.id,
          score: Math.floor(question.marks / 2), // Give partial credit
          max_marks: question.marks,
          feedback: "Marking encountered an issue. Partial credit awarded.",
          model_answer: question.markscheme || "See markscheme",
          key_points_covered: [],
          key_points_missed: [],
          what_done_well: null,
          areas_to_improve: null
        });
        totalScore += Math.floor(question.marks / 2);
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Insert all results
    const { error: insertError } = await supabase
      .from('mock_exam_results')
      .insert(results);

    if (insertError) {
      console.error("Error inserting results:", insertError);
      throw insertError;
    }

    // Update exam with final score and status
    await supabase
      .from('mock_exams')
      .update({ 
        status: 'completed', 
        total_score: totalScore,
        marking_progress: questions?.length || 0
      })
      .eq('id', examId);

    console.log(`Exam marked. Total score: ${totalScore}`);

    return new Response(JSON.stringify({ 
      success: true, 
      totalScore,
      questionsMarked: results.length
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error("Error in mark-mock-exam:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: errorMessage
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
