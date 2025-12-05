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
    const { title, topic, content, keyPoints } = await req.json();
    
    const BYTEZ_API_KEY_FLASH = Deno.env.get('BYTEZ_API_KEY_FLASH');
    if (!BYTEZ_API_KEY_FLASH) {
      throw new Error('BYTEZ_API_KEY_FLASH is not configured');
    }

    const systemPrompt = `You are an expert GCSE Geography examiner specializing in "The Living World" topic. 
Your task is to generate 3 high-quality exam-style questions that would be appropriate for GCSE Grade 9 students.

GCSE Geography Command Words to use:
- "Explain" (give reasons why something happens - cause and effect)
- "Describe" (say what something is like, give characteristics)
- "Analyse" (examine in detail, explore relationships)
- "Evaluate" or "Assess" (consider different viewpoints, judge importance)
- "To what extent" (weigh up how far something is true)

Question Requirements:
1. Must be specific to the content provided
2. Should require detailed, analytical answers (Grade 9 level)
3. Use proper GCSE Geography terminology
4. Include mark allocations (e.g., [4 marks], [6 marks], [9 marks])
5. Focus on understanding, application, and evaluation
6. Mix question types: some factual recall, some application, some evaluation

Return EXACTLY 3 questions in a JSON array format:
[
  {
    "question": "Question 1 text here [4 marks]",
    "guidance": "Brief guidance on what a good answer should include"
  },
  {
    "question": "Question 2 text here [6 marks]",
    "guidance": "Brief guidance on what a good answer should include"
  },
  {
    "question": "Question 3 text here [9 marks]",
    "guidance": "Brief guidance on what a good answer should include"
  }
]`;

    const userPrompt = `Generate 3 GCSE Geography questions based on this content:

Title: ${title}
Topic: ${topic}

Content:
${content}

Key Points:
${keyPoints.join('\n')}

Generate questions that test understanding of these specific concepts, using proper GCSE command words and mark allocations.`;

    console.log('Generating geography questions for:', title);

    const response = await fetch('https://api.bytez.com/models/v2/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BYTEZ_API_KEY_FLASH}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        max_completion_tokens: 2000,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ]
      }),
    });

    console.log('Bytez API response status:', response.status);
    console.log('Bytez API response ok:', response.ok);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Bytez API error:', response.status, errorText);
      
      if (response.status === 429) {
        throw new Error('Rate limits exceeded. Please try again in a moment.');
      }
      if (response.status === 402) {
        throw new Error('Insufficient Bytez credits. Please add funds to your account.');
      }
      if (response.status === 401) {
        throw new Error('Invalid Bytez API key. Please check your configuration.');
      }
      
      throw new Error(`Bytez API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('Full Bytez response:', JSON.stringify(data, null, 2));

    // Check for Bytez error in response
    if (data.error) {
      console.error('Bytez API returned error:', data.error);
      throw new Error(`Bytez API error: ${data.error.message || JSON.stringify(data.error)}`);
    }

    // Validate response structure
    if (!data.choices || !data.choices[0] || !data.choices[0].message || !data.choices[0].message.content) {
      console.error('Invalid Bytez response structure:', JSON.stringify(data, null, 2));
      throw new Error('Invalid response structure from Bytez API');
    }

    const assistantMessage = data.choices[0].message.content;
    
    console.log('Raw AI response:', assistantMessage);
    
    // Extract JSON from markdown code blocks if present
    let jsonText = assistantMessage.trim();
    if (jsonText.includes('```json')) {
      const match = jsonText.match(/```json\s*([\s\S]*?)\s*```/);
      if (match) jsonText = match[1];
    } else if (jsonText.includes('```')) {
      const match = jsonText.match(/```\s*([\s\S]*?)\s*```/);
      if (match) jsonText = match[1];
    }
    
    let questions;
    try {
      const parsed = JSON.parse(jsonText);
      // Handle both direct array and object with questions property
      questions = Array.isArray(parsed) ? parsed : (parsed.questions || []);
    } catch (e) {
      console.error('Failed to parse questions. Raw response:', assistantMessage);
      console.error('Parse error:', e);
      throw new Error('Failed to parse AI response as JSON');
    }

    if (!Array.isArray(questions) || questions.length < 1) {
      console.error('Invalid questions format:', questions);
      throw new Error('Invalid questions format from AI');
    }
    
    // Ensure we have exactly 3 questions
    if (questions.length > 3) {
      questions = questions.slice(0, 3);
    }

    console.log('Generated questions:', questions);

    return new Response(
      JSON.stringify({ questions }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in generate-geography-questions:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});