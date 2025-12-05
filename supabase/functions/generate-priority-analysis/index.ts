import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TopicPerformance {
  topic: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  attempts: number;
  missedKeyPoints: string[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userId, topicSlugs, topicTitles, subject } = await req.json();
    
    console.log("Generate priority analysis request:", { userId, topicSlugs, subject });

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch practice sessions for these topics
    const { data: practiceSessions, error: practiceError } = await supabase
      .from('practice_sessions')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (practiceError) {
      console.error("Error fetching practice sessions:", practiceError);
    }

    // Fetch mock exam results
    const { data: mockExams, error: mockError } = await supabase
      .from('mock_exams')
      .select(`
        id,
        selected_topics,
        total_score,
        total_marks,
        mock_exam_results (
          score,
          max_marks,
          key_points_missed,
          areas_to_improve
        )
      `)
      .eq('user_id', userId)
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(20);

    if (mockError) {
      console.error("Error fetching mock exams:", mockError);
    }

    // Aggregate performance by topic
    const topicPerformance: Record<string, TopicPerformance> = {};

    // Initialize topics
    topicTitles.forEach((title: string) => {
      topicPerformance[title] = {
        topic: title,
        totalScore: 0,
        maxScore: 0,
        percentage: 0,
        attempts: 0,
        missedKeyPoints: []
      };
    });

    // Process practice sessions
    if (practiceSessions) {
      for (const session of practiceSessions) {
        const title = session.subsection_title;
        if (title && topicPerformance[title]) {
          topicPerformance[title].totalScore += session.overall_score || 0;
          topicPerformance[title].maxScore += session.max_marks || 0;
          topicPerformance[title].attempts += 1;
          if (session.key_ideas_missed) {
            topicPerformance[title].missedKeyPoints.push(...session.key_ideas_missed);
          }
        }
      }
    }

    // Process mock exam results
    if (mockExams) {
      for (const exam of mockExams) {
        if (exam.mock_exam_results) {
          for (const result of exam.mock_exam_results as any[]) {
            // Try to match result to topic
            for (const topicTitle of exam.selected_topics || []) {
              if (topicPerformance[topicTitle]) {
                topicPerformance[topicTitle].totalScore += result.score || 0;
                topicPerformance[topicTitle].maxScore += result.max_marks || 0;
                topicPerformance[topicTitle].attempts += 1;
                if (result.key_points_missed) {
                  topicPerformance[topicTitle].missedKeyPoints.push(...result.key_points_missed);
                }
              }
            }
          }
        }
      }
    }

    // Calculate percentages
    for (const key of Object.keys(topicPerformance)) {
      const tp = topicPerformance[key];
      if (tp.maxScore > 0) {
        tp.percentage = Math.round((tp.totalScore / tp.maxScore) * 100);
      } else {
        tp.percentage = -1; // No data
      }
      // Deduplicate missed key points
      tp.missedKeyPoints = [...new Set(tp.missedKeyPoints)].slice(0, 5);
    }

    // Categorize topics
    const focusAreas: TopicPerformance[] = [];
    const developing: TopicPerformance[] = [];
    const confident: TopicPerformance[] = [];
    const noData: TopicPerformance[] = [];

    for (const tp of Object.values(topicPerformance)) {
      if (tp.percentage === -1) {
        noData.push(tp);
      } else if (tp.percentage < 50) {
        focusAreas.push(tp);
      } else if (tp.percentage < 70) {
        developing.push(tp);
      } else {
        confident.push(tp);
      }
    }

    // Sort by percentage (lowest first for focus areas)
    focusAreas.sort((a, b) => a.percentage - b.percentage);
    developing.sort((a, b) => a.percentage - b.percentage);
    confident.sort((a, b) => b.percentage - a.percentage);

    // Collect all missed key points for AI analysis
    const allMissedPoints = Object.values(topicPerformance)
      .flatMap(tp => tp.missedKeyPoints)
      .filter(Boolean);

    // Generate AI insights if we have data
    let aiInsights: string[] = [];
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (LOVABLE_API_KEY && allMissedPoints.length > 0) {
      try {
        const prompt = `Based on a student's exam performance in ${subject}, analyze these commonly missed key points and provide 3-4 brief, actionable insights:

Missed points: ${allMissedPoints.slice(0, 20).join(', ')}

Focus areas (low scores): ${focusAreas.map(t => t.topic).join(', ') || 'None'}

Provide insights in this JSON format:
{
  "insights": [
    "Brief actionable insight 1",
    "Brief actionable insight 2",
    "Brief actionable insight 3"
  ],
  "commonMistakes": [
    "Pattern 1 observed in mistakes",
    "Pattern 2 observed in mistakes"
  ]
}

Return ONLY valid JSON.`;

        const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${LOVABLE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'google/gemini-2.5-flash-lite',
            messages: [
              { role: 'system', content: 'You are a helpful tutor analyzing student performance. Be concise and actionable.' },
              { role: 'user', content: prompt }
            ],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          let content = data.choices?.[0]?.message?.content || '';
          content = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
          
          try {
            const parsed = JSON.parse(content);
            aiInsights = parsed.insights || [];
          } catch (e) {
            console.error("Failed to parse AI insights:", e);
          }
        }
      } catch (e) {
        console.error("AI insights error:", e);
      }
    }

    // Generate recommended topics (prioritize focus areas and no-data topics)
    const recommendedTopics = [
      ...focusAreas.map(t => t.topic),
      ...noData.map(t => t.topic),
      ...developing.slice(0, 2).map(t => t.topic)
    ];

    return new Response(JSON.stringify({
      success: true,
      analysis: {
        focusAreas,
        developing,
        confident,
        noData,
        aiInsights,
        recommendedTopics: recommendedTopics.slice(0, 5),
        totalAttempts: Object.values(topicPerformance).reduce((sum, tp) => sum + tp.attempts, 0)
      }
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error("Error in generate-priority-analysis:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ 
      error: errorMessage 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
