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

    console.log(`Generating insights for user: ${user.id}, subject: ${subject || 'all'}`);

    // Fetch practice sessions, filter by subject if provided
    let query = supabase
      .from('practice_sessions')
      .select('*')
      .eq('user_id', user.id);
    
    if (topicSlugs && topicSlugs.length > 0) {
      query = query.in('topic_slug', topicSlugs);
    }

    const { data: sessions, error: sessionsError } = await query.order('created_at', { ascending: false });

    if (sessionsError) {
      throw new Error(`Failed to fetch sessions: ${sessionsError.message}`);
    }

    if (!sessions || sessions.length === 0) {
      const subjectName = subject || "topics";
      return new Response(
        JSON.stringify({ 
          insights: `Start practicing ${subjectName} to receive personalized AI insights about your learning journey!`,
          hasData: false
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Prepare data summary for AI
    const topicSummary = sessions.reduce((acc: any, session: any) => {
      const topic = session.subsection_title || "Unknown";
      if (!acc[topic]) {
        acc[topic] = {
          attempts: 0,
          totalScore: 0,
          keyIdeasCovered: new Set(),
          keyIdeasMissed: new Set(),
        };
      }
      acc[topic].attempts += 1;
      acc[topic].totalScore += (session.overall_score / session.max_marks) * 100;
      
      if (session.key_ideas_covered) {
        session.key_ideas_covered.forEach((idea: string) => acc[topic].keyIdeasCovered.add(idea));
      }
      if (session.key_ideas_missed) {
        session.key_ideas_missed.forEach((idea: string) => acc[topic].keyIdeasMissed.add(idea));
      }
      
      return acc;
    }, {});

    const summaryText = Object.entries(topicSummary)
      .map(([topic, data]: [string, any]) => {
        const avgScore = Math.round(data.totalScore / data.attempts);
        return `${topic}: ${data.attempts} attempts, ${avgScore}% average, ${data.keyIdeasCovered.size} concepts mastered, ${data.keyIdeasMissed.size} concepts to review`;
      })
      .join('\n');

    const subjectDisplayName = subject || "subject";
    const prompt = `You are an expert ${subjectDisplayName} tutor analyzing a student's practice session data. Based on the following performance summary, provide a personalized, encouraging assessment in 3-4 sentences that includes:

1. Overall progress summary
2. Specific strengths (topics they're excelling in)
3. Key areas needing focus
4. One actionable study recommendation

Performance Data:
${summaryText}

Total sessions: ${sessions.length}
Recent activity: Last practiced ${new Date(sessions[0].created_at).toLocaleDateString()}

Provide insights that are specific, encouraging, and actionable. Keep it concise and student-friendly.`;

    console.log('Calling Bytez API with Gemini 2.5 Pro...');

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
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Bytez API error:', response.status, errorText);
      throw new Error(`Bytez API error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const insights = aiResponse.choices[0]?.message?.content || "Unable to generate insights at this time.";

    console.log('Successfully generated insights');

    return new Response(
      JSON.stringify({ insights, hasData: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-topic-insights:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        insights: 'Unable to generate insights. Please try again later.',
        hasData: false
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
