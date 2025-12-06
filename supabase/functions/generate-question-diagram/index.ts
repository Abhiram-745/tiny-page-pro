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
    const { questionText, subject, topic, marks } = await req.json();
    
    if (!questionText) {
      return new Response(
        JSON.stringify({ error: "Missing questionText" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use Lovable AI instead of Bytez
    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    if (!lovableKey) {
      console.error("[generate-question-diagram] LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ svg: null, error: "API key not configured" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-question-diagram] Generating diagram for:", subject, topic);
    console.log("[generate-question-diagram] Question:", questionText.substring(0, 100));

    // Generate the diagram - ALWAYS create one for every question
    const systemPrompt = `You are an expert GCSE exam diagram creator. You MUST create an SVG diagram for EVERY question.

IMPORTANT: Always create a diagram. If the question is text-based, create a relevant diagram that helps visualize the concept.

Create accurate, educational SVG diagrams that match the quality and style of official AQA/Edexcel/OCR exam papers.

SVG REQUIREMENTS:
- Use viewBox="0 0 500 350" for consistent sizing
- Use "currentColor" for ALL text to support dark/light themes
- Use professional colors: #2563eb (blue), #dc2626 (red), #16a34a (green), #d97706 (orange), #7c3aed (purple)
- Include clear, accurate labels with proper scientific terminology
- Use arrows to show direction/flow where relevant
- Add measurement labels where appropriate
- Make diagrams clean, uncluttered, and exam-appropriate

SUBJECT-SPECIFIC ACCURACY:
${subject === 'biology' ? `
BIOLOGY - Be anatomically accurate:
- Cell diagrams: Show correct organelle shapes and positions (nucleus with nucleolus, mitochondria bean-shaped, ribosomes as dots)
- Heart: 4 chambers correctly positioned, valves, correct blood vessel connections
- Digestive system: Correct organ order and relative sizes
- Lungs: Show bronchi, bronchioles, alveoli structure
- Use standard biology conventions (e.g., red for oxygenated, blue for deoxygenated)
` : ''}
${subject === 'chemistry' ? `
CHEMISTRY - Be scientifically accurate:
- Reaction profiles: Correct axes (Energy vs Progress of reaction), show activation energy, ΔH, transition state
- Apparatus: Correct lab equipment shapes (beakers, conical flasks, Bunsen burners, delivery tubes)
- Atomic structure: Correct electron shells, proper notation
- Bonding: Correct dot-cross diagrams, proper electron sharing/transfer
- Use standard chemistry conventions
` : ''}
${subject === 'physics' ? `
PHYSICS - Use standard symbols:
- Circuits: Use correct circuit symbols (cell, resistor, ammeter A in circle, voltmeter V in circle)
- Forces: Show force arrows with correct relative sizes, label in Newtons
- Waves: Show wavelength, amplitude, frequency correctly
- Ray diagrams: Correct conventions for normal lines, angles of incidence/reflection
- Energy: Sankey diagrams with correct proportions
` : ''}
${subject === 'economics' ? `
ECONOMICS - Use standard conventions:
- Supply/Demand: Price on Y-axis, Quantity on X-axis, correct curve slopes
- Show equilibrium points clearly
- Use arrows to show shifts
- Label P1, P2, Q1, Q2 for changes
` : ''}
${subject === 'geography' ? `
GEOGRAPHY - Be geographically accurate:
- River features: Correct cross-sections showing erosion/deposition
- Coastal features: Correct formation diagrams
- Weather systems: Correct air mass movements
- Population pyramids: Correct age/gender conventions
` : ''}

You MUST return an SVG diagram. Return ONLY valid JSON: { "svg": "<svg viewBox='0 0 500 350'>...</svg>" }`;

    const userPrompt = `Create an SVG diagram for this GCSE ${subject || 'science'} question.

Question: "${questionText}"
Topic: ${topic || 'general'}

Requirements:
1. Create a diagram that helps visualize or understand the question
2. Use viewBox="0 0 500 350"
3. Use currentColor for all text elements
4. Include clear, accurate labels
5. For ${subject || 'science'}: create appropriate scientific diagrams (cell structures, apparatus, graphs, etc.)

IMPORTANT: Return ONLY valid JSON with no markdown or explanation:
{"svg": "<svg viewBox='0 0 500 350' xmlns='http://www.w3.org/2000/svg'>...your diagram here...</svg>"}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 50000);

    try {
      // Use Lovable AI gateway
      const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: { 
          Authorization: `Bearer ${lovableKey}`, 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt }
          ],
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const text = await resp.text();
      console.log("[generate-question-diagram] API response status:", resp.status);
      console.log("[generate-question-diagram] API response preview:", text.substring(0, 500));
      
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
        console.log("[generate-question-diagram] No content in response, full data:", JSON.stringify(data).substring(0, 500));
        return new Response(
          JSON.stringify({ svg: null, error: "No content in API response" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      console.log("[generate-question-diagram] Raw response length:", content.length);

      let parsed;
      try {
        parsed = JSON.parse(content);
      } catch (e) {
        // Try to extract JSON from response
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          try {
            parsed = JSON.parse(jsonMatch[0]);
          } catch {
            // Try to extract just the SVG
            const svgMatch = content.match(/<svg[\s\S]*<\/svg>/);
            if (svgMatch) {
              parsed = { svg: svgMatch[0] };
            } else {
              console.log("[generate-question-diagram] Could not parse response");
              return new Response(
                JSON.stringify({ svg: null }),
                { headers: { ...corsHeaders, "Content-Type": "application/json" } }
              );
            }
          }
        } else {
          const svgMatch = content.match(/<svg[\s\S]*<\/svg>/);
          if (svgMatch) {
            parsed = { svg: svgMatch[0] };
          } else {
            console.log("[generate-question-diagram] Could not parse response");
            return new Response(
              JSON.stringify({ svg: null }),
              { headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
          }
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
