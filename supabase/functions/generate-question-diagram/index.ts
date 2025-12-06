import "https://deno.land/x/xhr@0.1.0/mod.ts";
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
    const { questionText, subject, topic } = await req.json();
    
    if (!questionText) {
      return new Response(
        JSON.stringify({ error: "Missing questionText" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const key = Deno.env.get("BYTEZ_API_KEY_FLASH");
    if (!key) {
      console.error("[generate-question-diagram] BYTEZ_API_KEY_FLASH not configured");
      return new Response(
        JSON.stringify({ svg: null, error: "API key not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-question-diagram] Generating SVG for subject:", subject, "topic:", topic);

    const systemPrompt = `You are an expert educational diagram creator. Generate SVG diagrams for GCSE exam questions.

SVG REQUIREMENTS:
- Use viewBox for responsive scaling (e.g., viewBox="0 0 400 300")
- Use "currentColor" for all text elements to support light/dark themes
- Use appropriate colors for different elements (use hex colors like #3b82f6 for blue, #ef4444 for red, #22c55e for green)
- Include clear labels and annotations
- Make diagrams educational, accurate, and visually appealing
- Keep SVG clean and optimized

SUBJECT-SPECIFIC DIAGRAMS:
${subject === 'biology' ? `
Biology diagrams:
- Cell structures (nucleus, mitochondria, ribosomes, cell membrane)
- Organ systems (heart, lungs, digestive system)
- Food webs and ecological diagrams
- Graphs of experimental data
- Cross-sections of tissues and organs
` : ''}
${subject === 'chemistry' ? `
Chemistry diagrams:
- Reaction profiles (energy vs progress of reaction)
- Atomic structure diagrams
- Bonding diagrams (ionic, covalent, metallic)
- Apparatus/equipment diagrams
- Graphs (rate of reaction, temperature effects)
` : ''}
${subject === 'physics' ? `
Physics diagrams:
- Circuit diagrams with proper symbols
- Force diagrams with arrows
- Velocity-time and distance-time graphs
- Wave diagrams
- Ray diagrams for optics
` : ''}
${subject === 'economics' ? `
Economics diagrams:
- Supply and demand curves
- Market equilibrium diagrams
- Circular flow diagrams
- Price/quantity graphs
` : ''}
${subject === 'geography' ? `
Geography diagrams:
- River cross-sections and features
- Population pyramids
- Climate graphs
- Geological cross-sections
` : ''}

Return ONLY a valid JSON object with the SVG code:
{ "svg": "<svg width='400' height='300' viewBox='0 0 400 300'>...</svg>" }

If no diagram is appropriate for this question, return:
{ "svg": null }`;

    const userPrompt = `Question: ${questionText}

Subject: ${subject || 'general'}
Topic: ${topic || 'general'}

Analyze this exam question and create an appropriate SVG diagram if one would enhance understanding or is required by the question.

If the question:
- Mentions "diagram shows", "figure shows", or references a visual - CREATE the diagram described
- Asks about processes, structures, or relationships - CREATE an educational diagram
- Is purely text-based recall (definitions, lists) - Return { "svg": null }

Return ONLY valid JSON.`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const resp = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${key}`, 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
          max_completion_tokens: 2000,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await resp.text();
      if (!resp.ok) {
        console.error("[generate-question-diagram] API error:", resp.status, text);
        return new Response(
          JSON.stringify({ svg: null, error: `API error: ${resp.status}` }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const data = JSON.parse(text);
      const content = data.choices?.[0]?.message?.content;

      if (!content) {
        console.log("[generate-question-diagram] No content in response");
        return new Response(
          JSON.stringify({ svg: null }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("[generate-question-diagram] Raw response:", content.substring(0, 200));

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (e) {
        // Try to extract JSON from response
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        } else {
          console.log("[generate-question-diagram] Could not parse response");
          return new Response(
            JSON.stringify({ svg: null }),
            { headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }

      console.log("[generate-question-diagram] Successfully generated diagram:", parsed.svg ? "yes" : "no");

      return new Response(
        JSON.stringify({ svg: parsed.svg || null }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );

    } catch (fetchError: unknown) {
      clearTimeout(timeoutId);
      if (fetchError instanceof Error && fetchError.name === 'AbortError') {
        console.error("[generate-question-diagram] Request timed out");
        return new Response(
          JSON.stringify({ svg: null, error: "Request timed out" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw fetchError;
    }

  } catch (error) {
    console.error("[generate-question-diagram] Error:", error);
    return new Response(
      JSON.stringify({ svg: null, error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
