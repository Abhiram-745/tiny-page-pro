import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function extractSvg(content: string): string | null {
  // First try to find SVG directly
  let svgMatch = content.match(/<svg[\s\S]*?<\/svg>/i);
  if (svgMatch) {
    return svgMatch[0];
  }
  
  // Try to extract from markdown code blocks (```svg or ```xml or ```)
  const codeBlockMatch = content.match(/```(?:svg|xml)?\s*([\s\S]*?)```/i);
  if (codeBlockMatch) {
    const innerContent = codeBlockMatch[1];
    svgMatch = innerContent.match(/<svg[\s\S]*?<\/svg>/i);
    if (svgMatch) {
      return svgMatch[0];
    }
  }
  
  return null;
}

function getSubjectDiagramGuidance(subject: string): string {
  const guides: Record<string, string> = {
    'biology': `Create accurate biological diagrams:
- For cells: show cell membrane as outer boundary, nucleus with clear nucleolus, cytoplasm, organelles like mitochondria, ribosomes
- For plant cells: include cell wall (thick outer line), large central vacuole, chloroplasts (green ovals)
- For prokaryotic cells: show cell wall, cell membrane, circular DNA (plasmid), ribosomes, flagellum if mentioned
- For organ systems: show proper proportions and connections
- Always label ALL key structures with leader lines pointing to exact locations
- Use proper scientific terminology`,
    'chemistry': `Create accurate chemistry diagrams:
- For apparatus: show beakers, flasks, bunsen burners, clamps with proper proportions
- For atomic structure: electron shells as concentric circles, protons/neutrons in nucleus
- For energy profiles: proper axis labels (Energy on Y, Reaction Progress on X), activation energy hump, ΔH arrow
- For electrolysis: show electrodes, electrolyte, ion movement with arrows`,
    'physics': `Create accurate physics diagrams:
- For circuits: use proper symbols (cell, resistor, ammeter, voltmeter, lamp)
- For forces: show arrows with proper lengths indicating magnitude, label each force
- For waves: show wavelength, amplitude, frequency clearly
- For energy: Sankey diagrams with proper proportions`,
    'economics': `Create accurate economics diagrams:
- Supply/demand: proper axis labels (Price on Y, Quantity on X), curves crossing at equilibrium
- Shifts: show original and new positions with arrows indicating direction
- Market diagrams: shade areas for consumer/producer surplus`
  };
  return guides[subject?.toLowerCase()] || '';
}

async function generateSvg(key: string, questionText: string, subject: string, topic: string): Promise<string | null> {
  const subjectGuidance = getSubjectDiagramGuidance(subject);
  
  const prompt = `You are an expert GCSE exam diagram creator. Create a HIGHLY ACCURATE and COMPLETE SVG diagram for this exam question.

QUESTION: "${questionText}"
SUBJECT: ${subject || 'science'}
TOPIC: ${topic || 'general'}

${subjectGuidance}

CRITICAL SVG REQUIREMENTS:
1. Start with <svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
2. Use "currentColor" for ALL text fills (for dark mode compatibility)
3. Use these colors for elements: #2563eb (blue), #dc2626 (red), #16a34a (green), #d97706 (orange), #8b5cf6 (purple)
4. Include CLEAR LABELS for every important structure with leader lines
5. Make sure ALL labels are FULLY VISIBLE within the viewBox - no text should be cut off
6. Position labels with enough margin from edges (at least 30px from any edge)
7. Use font-size 12-14px for labels
8. End with </svg>

OUTPUT: Return ONLY the raw SVG code. No markdown, no backticks, no explanation. Start directly with <svg`;

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
    console.log("[generate-question-diagram] Response preview:", content.substring(0, 200));

    // Extract SVG from response (handles markdown code blocks too)
    const svg = extractSvg(content);
    if (svg) {
      console.log("[generate-question-diagram] Found SVG, length:", svg.length);
      return svg;
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
