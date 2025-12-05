import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function getGCSEContext(subject: string): string {
  const contexts: Record<string, string> = {
    'chemistry': `**GCSE Chemistry Past Paper Style Guide:**
- Use command words correctly: State (1 mark), Describe (2-3 marks), Explain (3-4 marks), Evaluate/Discuss (5-6 marks)
- Include calculations with "Show your working" for quantitative chemistry
- Use word equations and balanced symbol equations
- Reference practical skills and required practicals
- Include data analysis from tables and graphs
- Test understanding of atomic structure, bonding, reactions, and rates`,
    
    'physics': `**GCSE Physics Past Paper Style Guide:**
- Include calculations with correct units and significant figures
- Use "State and explain" for 2-3 mark questions
- Reference required practicals (specific heat capacity, waves, etc.)
- Include graph interpretation and data analysis
- Test energy transfers, forces, waves, electricity, and particle model
- Use real-world contexts and applications`,
    
    'biology': `**GCSE Biology Past Paper Style Guide:**
- Use command words: Name (1 mark), Describe (2-3 marks), Explain using scientific knowledge (4-6 marks)
- Include data from experiments with control variables
- Test understanding of cells, organ systems, ecology, genetics
- Reference required practicals (osmosis, photosynthesis, etc.)
- Include graph and data interpretation questions`,
    
    'economics': `**GCSE Economics Past Paper Style Guide:**
- Use case studies and real-world economic scenarios
- Include data response questions with tables/graphs
- Test understanding of markets, government intervention, international trade
- Use "Analyse" and "Evaluate" for extended response questions
- Include multiple choice style factual questions`,
    
    'geography': `**GCSE Geography Past Paper Style Guide:**
- Include fieldwork-related questions
- Use OS maps, photographs, and diagrams
- Test physical and human geography concepts
- Include data interpretation from climate graphs, population pyramids
- Use case study examples (named locations)`,
    
    'english': `**GCSE English Literature Past Paper Style Guide:**
- Focus on specific quotes and language analysis (AO2)
- Include context questions (AO3)
- Test understanding of themes, characters, and writer's methods
- Use extract-based questions
- Include comparison questions for poetry`,
    
    'product-design': `**GCSE Product Design Past Paper Style Guide:**
- Include design analysis questions
- Test knowledge of materials, processes, and sustainability
- Use scenario-based design problems
- Include sketching/annotation requirements
- Test understanding of manufacturing and production`
  };
  
  return contexts[subject] || contexts['chemistry'];
}

function getMarkGuidelines(marks: number): string {
  switch (marks) {
    case 1:
      return `- Single fact recall or simple identification
- Command words: State, Name, Give, Identify
- One clear marking point`;
    case 2:
      return `- Two linked points or simple description
- Command words: State and explain, Describe, Give two reasons
- Two distinct marking points`;
    case 3:
      return `- Short description with some explanation
- Command words: Describe, Explain briefly, Calculate (with working)
- Three marking points, may include application`;
    case 4:
      return `- Detailed explanation or extended calculation
- Command words: Explain, Describe and explain, Compare
- Four marking points, must show understanding`;
    case 5:
      return `- Extended response with multiple aspects
- Command words: Explain fully, Discuss, Analyse
- Five marking points across different aspects`;
    case 6:
      return `- Extended writing question with QWC (Quality of Written Communication)
- Command words: Evaluate, Discuss, Explain in detail
- Six marking points, requires structured response with introduction and conclusion`;
    default:
      return `- Appropriate for ${marks} marks with clear marking criteria`;
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { examId, topics, totalMarks, subject } = await req.json();
    console.log("Generating mock exam:", { examId, topicsCount: topics?.length, totalMarks, subject });

    const BYTEZ_API_KEY = Deno.env.get('BYTEZ_API_KEY_PRO');
    if (!BYTEZ_API_KEY) {
      console.error("BYTEZ_API_KEY_PRO not configured");
      throw new Error("BYTEZ_API_KEY_PRO not configured");
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Calculate question distribution for target marks
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

        const subjectContext = getGCSEContext(subject);
        
        const prompt = `You are an expert GCSE ${subject} exam question generator. Your task is to create authentic GCSE-style exam questions that mirror the format, difficulty, and marking style of actual UK GCSE past papers.

**Subject: ${subject.toUpperCase()}**
**Topic: "${topic.title}"**
**Marks per question: ${marks}**
**Number of questions needed: ${count}**

${subjectContext}

**Study content for context:**
${topic.content.substring(0, 3000)}

**Question Requirements for ${marks}-mark questions:**
${getMarkGuidelines(marks)}

**Return a JSON array with this exact structure:**
{
  "questions": [
    {
      "question_text": "The complete question text with any context, data, or scenario",
      "marks": ${marks},
      "expected_key_points": ["specific marking point 1", "specific marking point 2"],
      "markscheme": "Detailed markscheme using AO1/AO2/AO3 where applicable. Each mark point should be on a new line with [1] notation",
      "diagram_svg": null,
      "table_html": null
    }
  ]
}

Return ONLY valid JSON, no markdown code blocks, no other text.`;

        console.log(`Calling Bytez API for ${count} x ${marks}-mark questions`);
        
        const response = await fetch('https://api.bytez.com/models/google/gemini-2.5-pro/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Key ${BYTEZ_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-pro',
            messages: [
              { role: 'system', content: 'You are an expert GCSE examiner who writes authentic exam questions following UK exam board standards (AQA, Edexcel, OCR). Always return valid JSON without markdown formatting.' },
              { role: 'user', content: prompt }
            ],
            max_tokens: 4000
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Bytez API error:", response.status, errorText);
          throw new Error(`Bytez API error: ${response.status} - ${errorText}`);
        }

        const data = await response.json();
        console.log("Bytez API response received");
        
        let content = data.choices?.[0]?.message?.content || '';
        
        // Clean up the response - remove markdown code blocks
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
