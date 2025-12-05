import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.75.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const BYTEZ_API_KEY_PRO = Deno.env.get('BYTEZ_API_KEY_PRO');
    if (!BYTEZ_API_KEY_PRO) {
      throw new Error("BYTEZ_API_KEY_PRO is not configured");
    }

    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error("No authorization header");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    
    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: userError } = await supabase.auth.getUser(token);

    if (userError || !user) {
      throw new Error("Unauthorized");
    }

    const { subject, topicSlugs } = await req.json();

    console.log(`Generating confidence map for user: ${user.id}, subject: ${subject}`);

    // Fetch practice sessions filtered by subject topics
    const { data: sessions, error: sessionsError } = await supabase
      .from('practice_sessions')
      .select('*')
      .eq('user_id', user.id)
      .in('topic_slug', topicSlugs)
      .order('created_at', { ascending: false });

    if (sessionsError) {
      throw new Error(`Failed to fetch sessions: ${sessionsError.message}`);
    }

    if (!sessions || sessions.length === 0) {
      return new Response(
        JSON.stringify({ 
          confidenceMap: [],
          message: `No practice data found for ${subject}. Complete some practice sessions first!`
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build detailed topic analysis
    const topicAnalysis = sessions.reduce((acc: any, session: any) => {
      const key = `${session.topic_slug}|${session.subsection_slug}`;
      const subsectionTitle = session.subsection_title || "Unknown";
      
      if (!acc[key]) {
        acc[key] = {
          topicSlug: session.topic_slug,
          subsectionSlug: session.subsection_slug,
          subsectionTitle: subsectionTitle,
          scores: [],
          keyIdeasCovered: [],
          keyIdeasMissed: [],
          attempts: 0,
        };
      }
      
      acc[key].scores.push((session.overall_score / session.max_marks) * 100);
      acc[key].attempts += 1;
      
      if (session.key_ideas_covered) {
        acc[key].keyIdeasCovered.push(...session.key_ideas_covered);
      }
      if (session.key_ideas_missed) {
        acc[key].keyIdeasMissed.push(...session.key_ideas_missed);
      }
      
      return acc;
    }, {});

    // Build prompt for AI analysis
    const analysisData = Object.values(topicAnalysis).map((data: any) => {
      const avgScore = Math.round(data.scores.reduce((a: number, b: number) => a + b, 0) / data.scores.length);
      return {
        subsection: data.subsectionTitle,
        avgScore,
        attempts: data.attempts,
        covered: data.keyIdeasCovered.slice(0, 5).join(', '),
        missed: data.keyIdeasMissed.slice(0, 5).join(', '),
      };
    });

    const prompt = `You are an expert ${subject} tutor analyzing a student's performance across different topics. Generate personalized feedback for each topic based on their practice data.

For each topic below, provide:
1. A brief "whatDoingWell" message (1 sentence, encouraging, specific to what they've mastered)
2. A brief "whatToImprove" message (1 sentence, actionable advice on what to focus on next)

Performance Data:
${JSON.stringify(analysisData, null, 2)}

Return ONLY a JSON array with this exact structure:
[
  {
    "subsection": "subsection title here",
    "whatDoingWell": "positive feedback here",
    "whatToImprove": "actionable advice here"
  }
]

Keep each message under 20 words. Be specific and encouraging.`;

    console.log('Calling Bytez API with Gemini 2.5 Pro for confidence analysis...');

    const response = await fetch('https://api.bytez.com/models/v2/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BYTEZ_API_KEY_PRO}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: [
          { role: 'user', content: prompt }
        ],
        max_tokens: 1500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Bytez API error:', response.status, errorText);
      throw new Error(`Bytez API error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const aiContent = aiResponse.choices[0]?.message?.content || "[]";
    
    // Parse AI response
    let aiFeedback: any[] = [];
    try {
      // Extract JSON from markdown code blocks if present
      const jsonMatch = aiContent.match(/```json\s*([\s\S]*?)\s*```/) || aiContent.match(/\[[\s\S]*\]/);
      const jsonString = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : aiContent;
      aiFeedback = JSON.parse(jsonString);
    } catch (e) {
      console.error('Failed to parse AI response:', e);
      aiFeedback = [];
    }

    // Build final confidence map
    const confidenceMap = Object.values(topicAnalysis).map((data: any) => {
      const avgScore = Math.round(data.scores.reduce((a: number, b: number) => a + b, 0) / data.scores.length);
      const confidence = avgScore >= 70 ? "confident" : avgScore >= 50 ? "developing" : "struggling";
      
      // Find matching AI feedback
      const feedback = aiFeedback.find((f: any) => 
        f.subsection === data.subsectionTitle
      );

      return {
        chapterName: data.topicSlug.split('-').map((w: string) => 
          w.charAt(0).toUpperCase() + w.slice(1)
        ).join(' '),
        subsectionName: data.subsectionTitle,
        avgScore,
        attempts: data.attempts,
        confidence,
        whatToImprove: feedback?.whatToImprove || "Review key concepts and practice more questions.",
        whatDoingWell: feedback?.whatDoingWell || "Good progress! Keep practicing regularly.",
      };
    });

    console.log(`Generated confidence map with ${confidenceMap.length} topics`);

    return new Response(
      JSON.stringify({ confidenceMap }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-topic-confidence:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        confidenceMap: []
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
