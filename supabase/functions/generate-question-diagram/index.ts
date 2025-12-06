import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function generateSvg(key: string, questionText: string, subject: string, topic: string): Promise<string | null> {
  const prompt = `Create SVG code for a diagram to accompany this GCSE ${subject || 'science'} exam question:

"${questionText}"

Topic: ${topic || 'general'}

Requirements:
- Return ONLY the raw SVG code, nothing else
- Use viewBox="0 0 500 350"
- Use "currentColor" for all text
- Use colors: #2563eb (blue), #dc2626 (red), #16a34a (green), #d97706 (orange)
- Include clear labels
- Make it exam-quality and educational

Return ONLY the SVG code starting with <svg and ending with </svg>. No markdown, no explanation, no JSON wrapper.`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 50000);

  try {
    const resp = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${key}`, 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "user", content: prompt }
        ],
        max_tokens: 4000,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const text = await resp.text();
    console.log("[generate-question-diagram] API status:", resp.status);
    
    if (!resp.ok) {
      console.error("[generate-question-diagram] API error:", resp.status, text.substring(0, 300));
      return null;
    }

    const data = JSON.parse(text);
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      console.log("[generate-question-diagram] No content in response");
      return null;
    }

    console.log("[generate-question-diagram] Response length:", content.length);

    // Extract SVG from response
    const svgMatch = content.match(/<svg[\s\S]*<\/svg>/);
    if (svgMatch) {
      console.log("[generate-question-diagram] Found SVG");
      return svgMatch[0];
    }

    console.log("[generate-question-diagram] No SVG found in response");
    return null;

  } catch (fetchError: unknown) {
    clearTimeout(timeoutId);
    if (fetchError instanceof Error && fetchError.name === 'AbortError') {
      console.error("[generate-question-diagram] Request timed out");
    } else {
      console.error("[generate-question-diagram] Fetch error:", fetchError);
    }
    return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { questionText, subject, topic, marks } = await req.json();
    
    if (!questionText) {
      return new Response(
        JSON.stringify({ error: "Missing questionText" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const key = Deno.env.get("BYTEZ_API_KEY_PRO");
    if (!key) {
      console.error("[generate-question-diagram] BYTEZ_API_KEY_PRO not configured");
      return new Response(
        JSON.stringify({ svg: null, error: "API key not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-question-diagram] Generating for:", subject, topic);
    console.log("[generate-question-diagram] Question:", questionText.substring(0, 80));

    // Try up to 3 times
    let svg: string | null = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      console.log(`[generate-question-diagram] Attempt ${attempt}/3`);
      svg = await generateSvg(key, questionText, subject, topic);
      if (svg) break;
      if (attempt < 3) {
        await new Promise(r => setTimeout(r, 1000)); // Wait 1s before retry
      }
    }

    return new Response(
      JSON.stringify({ svg }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[generate-question-diagram] Error:", error);
    return new Response(
      JSON.stringify({ svg: null, error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
