// GCSE AQA Biology - Full Module Structure matching Physics
// Structured with chapters containing modules

export interface PracticeItem {
  id: string;
  prompt_template: string;
  marks: number;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[];
}

export interface Subsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: PracticeItem[];
  study_group?: number;
}

export interface Module {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
}

export interface BiologyChapter {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
  modules?: Module[];
}

// Cell Biology Chapter with modules
export const biologyData: BiologyChapter[] = [
  {
    id: "cell-biology",
    title: "Cell Biology",
    status: "ready",
    subsections: [],
    modules: [
      // ========================================
      // MODULE 1: CELL STRUCTURE
      // ========================================
      {
        id: "cell-structure-module",
        title: "Module 1: Cell Structure",
        status: "ready",
        subsections: [
          {
            id: "b1-1-1-types-of-cells",
            title: "B1.1.1 — Types of Cells & Genetic Material",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Eukaryotic vs Prokaryotic Cells</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the differences between eukaryotic and prokaryotic cells, including DNA location, structure, and relative size.</p>
  </div>

  <div class="definition-block">
    <h4>🧬 Eukaryotic Cells (Plants & Animals)</h4>
    <ul>
      <li>Have a <strong>cell membrane</strong>, <strong>cytoplasm</strong>, and genetic material enclosed in a <strong>nucleus</strong></li>
      <li>DNA is organised into <strong>chromosomes</strong></li>
      <li>Contain organelles such as <strong>mitochondria</strong> and <strong>ribosomes</strong></li>
      <li>Plants also contain <strong>chloroplasts</strong>, a <strong>cell wall</strong>, and a large <strong>vacuole</strong></li>
      <li>Larger and more complex: around <strong>10–100 μm</strong></li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>🦠 Prokaryotic Cells (Bacteria)</h4>
    <ul>
      <li>Much smaller: typically <strong>1–5 μm</strong></li>
      <li>Genetic material is <strong>not inside a nucleus</strong> but in a single <strong>circular DNA loop</strong></li>
      <li>May contain <strong>plasmids</strong> (extra rings of DNA)</li>
      <li>Have <strong>cytoplasm</strong>, <strong>cell membrane</strong>, and <strong>cell wall</strong></li>
      <li><strong>No mitochondria</strong> or chloroplasts</li>
      <li>Smaller size = faster reproduction and simpler structure</li>
    </ul>
  </div>

  <!-- Eukaryotic Animal Cell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Eukaryotic Animal Cell (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="380" viewBox="0 0 450 380">
        <defs>
          <radialGradient id="cellGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.7"/>
            <stop offset="100%" style="stop-color:#fde68a;stop-opacity:0.4"/>
          </radialGradient>
          <radialGradient id="nucleusGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#c084fc;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.7"/>
          </radialGradient>
          <radialGradient id="mitoGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fca5a5"/>
            <stop offset="100%" style="stop-color:#ef4444"/>
          </radialGradient>
        </defs>
        
        <!-- Cell membrane - irregular blob shape -->
        <path d="M225,30 Q380,40 400,190 Q410,340 225,350 Q40,340 50,190 Q60,40 225,30" 
              fill="url(#cellGrad)" stroke="#f59e0b" stroke-width="5"/>
        
        <!-- Cytoplasm label -->
        <text x="90" y="70" fill="currentColor" font-size="11" font-weight="bold">Cytoplasm</text>
        <line x1="115" y1="75" x2="150" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Nucleus with nucleolus -->
        <g class="anim-pulse">
          <ellipse cx="225" cy="180" rx="75" ry="60" fill="url(#nucleusGrad)" stroke="#7c3aed" stroke-width="3"/>
          <!-- Nuclear pores -->
          <circle cx="160" cy="165" r="4" fill="#ddd6fe"/>
          <circle cx="170" cy="200" r="4" fill="#ddd6fe"/>
          <circle cx="280" cy="170" r="4" fill="#ddd6fe"/>
          <circle cx="290" cy="195" r="4" fill="#ddd6fe"/>
          <!-- Nucleolus -->
          <circle cx="225" cy="180" r="20" fill="#581c87" opacity="0.8"/>
          <!-- Chromosomes (DNA) -->
          <path d="M200,160 Q195,180 200,200" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
          <path d="M225,150 Q220,180 225,210" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
          <path d="M250,160 Q255,180 250,200" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
        </g>
        <text x="330" y="145" fill="#7c3aed" font-size="11" font-weight="bold">Nucleus</text>
        <text x="330" y="160" fill="#7c3aed" font-size="9">(contains DNA in</text>
        <text x="330" y="173" fill="#7c3aed" font-size="9">chromosomes)</text>
        <line x1="300" y1="175" x2="315" y2="175" stroke="#7c3aed" stroke-width="1"/>
        
        <!-- Mitochondria (multiple) -->
        <g class="anim-pulse-fast" style="animation-delay: 0.2s;">
          <ellipse cx="100" cy="250" rx="30" ry="15" fill="url(#mitoGrad)" stroke="#dc2626" stroke-width="2"/>
          <path d="M75,250 Q85,243 100,250 Q115,257 125,250" fill="none" stroke="#fca5a5" stroke-width="2"/>
          <path d="M80,245 L80,255" stroke="#fca5a5" stroke-width="1"/>
          <path d="M90,243 L90,257" stroke="#fca5a5" stroke-width="1"/>
          <path d="M100,242 L100,258" stroke="#fca5a5" stroke-width="1"/>
          <path d="M110,243 L110,257" stroke="#fca5a5" stroke-width="1"/>
          <path d="M120,245 L120,255" stroke="#fca5a5" stroke-width="1"/>
        </g>
        <g class="anim-pulse-fast" style="animation-delay: 0.5s;">
          <ellipse cx="340" cy="270" rx="28" ry="14" fill="url(#mitoGrad)" stroke="#dc2626" stroke-width="2"/>
          <path d="M317,270 Q327,263 340,270 Q353,277 363,270" fill="none" stroke="#fca5a5" stroke-width="2"/>
        </g>
        <g class="anim-pulse-fast" style="animation-delay: 0.8s;">
          <ellipse cx="150" cy="310" rx="25" ry="12" fill="url(#mitoGrad)" stroke="#dc2626" stroke-width="2"/>
        </g>
        <text x="50" y="290" fill="#dc2626" font-size="10" font-weight="bold">Mitochondria</text>
        <text x="50" y="303" fill="#dc2626" font-size="9">(aerobic respiration</text>
        <text x="50" y="316" fill="#dc2626" font-size="9">→ releases energy)</text>
        
        <!-- Ribosomes (many small dots) -->
        <g class="anim-vibrate-slow">
          <circle cx="160" cy="100" r="5" fill="#10b981"/>
          <circle cx="180" cy="115" r="5" fill="#10b981"/>
          <circle cx="280" cy="95" r="5" fill="#10b981"/>
          <circle cx="300" cy="110" r="5" fill="#10b981"/>
          <circle cx="140" cy="280" r="5" fill="#10b981"/>
          <circle cx="290" cy="310" r="5" fill="#10b981"/>
          <circle cx="200" cy="290" r="5" fill="#10b981"/>
          <circle cx="260" cy="300" r="5" fill="#10b981"/>
        </g>
        <text x="320" y="85" fill="#10b981" font-size="10" font-weight="bold">Ribosomes</text>
        <text x="320" y="98" fill="#10b981" font-size="9">(protein synthesis)</text>
        
        <!-- Cell membrane label -->
        <text x="340" y="340" fill="#f59e0b" font-size="10" font-weight="bold">Cell Membrane</text>
        <text x="340" y="353" fill="#f59e0b" font-size="9">(controls entry/exit)</text>
        <line x1="370" y1="320" x2="370" y2="305" stroke="#f59e0b" stroke-width="1"/>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Eukaryotic cells have a nucleus containing DNA organised into chromosomes</p>
  </div>

  <!-- Prokaryotic Bacterial Cell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🦠 Prokaryotic Bacterial Cell (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="300" viewBox="0 0 450 300">
        <defs>
          <radialGradient id="bacteriaGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#dbeafe;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#93c5fd;stop-opacity:0.6"/>
          </radialGradient>
        </defs>
        
        <!-- Cell wall (outer) -->
        <ellipse cx="225" cy="150" rx="170" ry="100" fill="none" stroke="#1d4ed8" stroke-width="8"/>
        
        <!-- Cell membrane (inner) -->
        <ellipse cx="225" cy="150" rx="155" ry="85" fill="url(#bacteriaGrad)" stroke="#3b82f6" stroke-width="3"/>
        
        <!-- Circular DNA loop (main genetic material) -->
        <g class="anim-pulse">
          <ellipse cx="225" cy="150" rx="60" ry="40" fill="none" stroke="#ef4444" stroke-width="5" stroke-dasharray="12,6"/>
        </g>
        <text x="225" y="155" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Circular DNA</text>
        <text x="225" y="168" fill="#ef4444" font-size="9" text-anchor="middle">(no nucleus!)</text>
        
        <!-- Plasmids (extra DNA rings) -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 110px 110px;">
          <circle cx="110" cy="110" r="18" fill="none" stroke="#f59e0b" stroke-width="4"/>
        </g>
        <g class="anim-rotate-ccw" style="transform-origin: 320px 180px;">
          <circle cx="320" cy="180" r="15" fill="none" stroke="#f59e0b" stroke-width="4"/>
        </g>
        <g class="anim-rotate-cw-slow" style="transform-origin: 140px 200px; animation-delay: 0.5s;">
          <circle cx="140" cy="200" r="12" fill="none" stroke="#f59e0b" stroke-width="3"/>
        </g>
        <text x="70" y="85" fill="#f59e0b" font-size="10" font-weight="bold">Plasmids</text>
        <text x="70" y="98" fill="#f59e0b" font-size="9">(extra DNA rings)</text>
        
        <!-- Ribosomes -->
        <g class="anim-vibrate-slow">
          <circle cx="170" cy="100" r="5" fill="#10b981"/>
          <circle cx="195" cy="200" r="5" fill="#10b981"/>
          <circle cx="270" cy="105" r="5" fill="#10b981"/>
          <circle cx="285" cy="195" r="5" fill="#10b981"/>
          <circle cx="145" cy="150" r="5" fill="#10b981"/>
          <circle cx="305" cy="140" r="5" fill="#10b981"/>
        </g>
        <text x="350" y="100" fill="#10b981" font-size="10" font-weight="bold">Ribosomes</text>
        
        <!-- Flagellum (tail for movement) -->
        <g class="anim-wave">
          <path d="M55,150 Q35,120 20,150 Q5,180 -15,150 Q-30,120 -45,150" fill="none" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round"/>
        </g>
        <text x="10" y="200" fill="#8b5cf6" font-size="10" font-weight="bold">Flagellum</text>
        <text x="10" y="213" fill="#8b5cf6" font-size="9">(movement)</text>
        
        <!-- Labels -->
        <text x="360" y="50" fill="#1d4ed8" font-size="10" font-weight="bold">Cell Wall</text>
        <text x="360" y="63" fill="#1d4ed8" font-size="9">(protection)</text>
        <line x1="370" y1="68" x2="350" y2="85" stroke="#1d4ed8" stroke-width="1"/>
        
        <text x="360" y="240" fill="#3b82f6" font-size="10" font-weight="bold">Cell Membrane</text>
        <line x1="370" y1="225" x2="355" y2="210" stroke="#3b82f6" stroke-width="1"/>
        
        <text x="180" y="280" fill="currentColor" font-size="10" text-anchor="middle">Cytoplasm</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Prokaryotic cells have NO nucleus — DNA floats freely in the cytoplasm</p>
  </div>

  <div class="table-block">
    <h4>📊 DNA Differences Comparison</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Eukaryotic</th>
          <th>Prokaryotic</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>DNA location</strong></td>
          <td>In a nucleus</td>
          <td>Free in cytoplasm</td>
        </tr>
        <tr>
          <td><strong>DNA structure</strong></td>
          <td>Linear chromosomes</td>
          <td>Circular DNA loop</td>
        </tr>
        <tr>
          <td><strong>Extra DNA</strong></td>
          <td>Usually none</td>
          <td>Plasmids possible</td>
        </tr>
        <tr>
          <td><strong>Size</strong></td>
          <td>10–100 μm</td>
          <td>1–5 μm</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📏 Scale & Order of Magnitude</h4>
    <ul>
      <li><strong>1 mm = 1000 μm</strong></li>
      <li><strong>1 μm = 1000 nm</strong></li>
      <li>Bacteria are about <strong>100× smaller</strong> than human cells</li>
      <li>Order of magnitude compares sizes by <strong>10× steps</strong></li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: <strong>Pro</strong>karyotic = <strong>No</strong> nucleus (before nucleus evolved). <strong>Eu</strong>karyotic = <strong>True</strong> nucleus.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "eukaryotic", "prokaryotic", "nucleus", "DNA", "chromosome", "plasmid",
              "cell membrane", "cytoplasm", "mitochondria", "ribosomes", "cell wall",
              "bacteria", "circular DNA", "micrometer", "nanometer"
            ],
            practice_items: [
              {
                id: "bio-cell-structure-p1",
                prompt_template: "Describe three differences between eukaryotic and prokaryotic cells.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["nucleus", "DNA", "circular", "plasmid", "size", "mitochondria"]
              },
              {
                id: "bio-cell-structure-p2",
                prompt_template: "Explain why prokaryotic cells are described as 'simpler' than eukaryotic cells.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["no nucleus", "no membrane-bound organelles", "smaller", "circular DNA", "no mitochondria"]
              }
            ]
          },
          {
            id: "b1-1-2-subcellular-structures",
            title: "B1.1.2 — Sub-cellular Structures & Functions",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Sub-cellular Structures & Their Functions</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Know the functions of organelles in animal, plant, and bacterial cells, and understand how structure relates to function.</p>
  </div>

  <div class="table-block">
    <h4>🐻 Animal Cell Organelles</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Organelle</th>
          <th>Function</th>
          <th>How Structure Helps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Nucleus</strong></td>
          <td>Contains DNA and controls cell activity</td>
          <td>Genetic material organised for accurate control</td>
        </tr>
        <tr>
          <td><strong>Cell membrane</strong></td>
          <td>Controls movement in/out of the cell</td>
          <td>Selectively permeable → maintains internal balance</td>
        </tr>
        <tr>
          <td><strong>Cytoplasm</strong></td>
          <td>Where most chemical reactions occur</td>
          <td>Contains enzymes that speed up reactions</td>
        </tr>
        <tr>
          <td><strong>Mitochondria</strong></td>
          <td>Aerobic respiration → releases energy</td>
          <td>Folded inner membrane increases area for respiration enzymes</td>
        </tr>
        <tr>
          <td><strong>Ribosomes</strong></td>
          <td>Protein synthesis</td>
          <td>Translate instructions to build proteins</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-block">
    <h4>🌿 Plant Cell Organelles (Additional)</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Organelle</th>
          <th>Function</th>
          <th>How Structure Helps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Cell wall</strong></td>
          <td>Strengthens and supports the cell</td>
          <td>Rigid cellulose fibres resist pressure</td>
        </tr>
        <tr>
          <td><strong>Permanent vacuole</strong></td>
          <td>Contains cell sap</td>
          <td>Maintains turgor pressure to keep cell firm</td>
        </tr>
        <tr>
          <td><strong>Chloroplasts</strong></td>
          <td>Photosynthesis</td>
          <td>Chlorophyll + stacked membranes absorb light efficiently</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Detailed Plant Cell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌿 Plant Cell Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="400" viewBox="0 0 480 400">
        <defs>
          <linearGradient id="vacuoleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#c7d2fe;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#a5b4fc;stop-opacity:0.7"/>
          </linearGradient>
          <radialGradient id="chloroplastGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#86efac;stop-opacity:0.95"/>
            <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0.8"/>
          </radialGradient>
        </defs>
        
        <!-- Cell wall (outer rectangle) -->
        <rect x="25" y="25" width="430" height="350" rx="15" fill="none" stroke="#84cc16" stroke-width="10"/>
        
        <!-- Cell membrane -->
        <rect x="45" y="45" width="390" height="310" rx="10" fill="#fef9c3" stroke="#eab308" stroke-width="4"/>
        
        <!-- Large central vacuole -->
        <g class="anim-pulse">
          <ellipse cx="240" cy="200" rx="140" ry="110" fill="url(#vacuoleGrad)" stroke="#6366f1" stroke-width="3"/>
        </g>
        <text x="240" y="195" fill="#4f46e5" font-size="12" text-anchor="middle" font-weight="bold">Vacuole</text>
        <text x="240" y="212" fill="#4f46e5" font-size="10" text-anchor="middle">(contains cell sap)</text>
        
        <!-- Nucleus -->
        <g class="anim-pulse-fast" style="animation-delay: 0.2s;">
          <ellipse cx="110" cy="110" rx="45" ry="38" fill="#c084fc" stroke="#7c3aed" stroke-width="3"/>
          <circle cx="110" cy="110" r="12" fill="#581c87"/>
          <!-- Chromosomes -->
          <path d="M95,100 Q90,110 95,120" fill="none" stroke="#1e3a8a" stroke-width="2"/>
          <path d="M125,100 Q130,110 125,120" fill="none" stroke="#1e3a8a" stroke-width="2"/>
        </g>
        <text x="110" y="165" fill="#7c3aed" font-size="10" text-anchor="middle" font-weight="bold">Nucleus</text>
        
        <!-- Chloroplasts (multiple) -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <ellipse cx="380" cy="95" rx="35" ry="18" fill="url(#chloroplastGrad)" stroke="#16a34a" stroke-width="2"/>
          <!-- Grana (stacks) -->
          <line x1="355" y1="95" x2="405" y2="95" stroke="#166534" stroke-width="2"/>
          <line x1="360" y1="88" x2="400" y2="88" stroke="#166534" stroke-width="1.5"/>
          <line x1="360" y1="102" x2="400" y2="102" stroke="#166534" stroke-width="1.5"/>
        </g>
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <ellipse cx="100" cy="300" rx="35" ry="18" fill="url(#chloroplastGrad)" stroke="#16a34a" stroke-width="2"/>
          <line x1="75" y1="300" x2="125" y2="300" stroke="#166534" stroke-width="2"/>
        </g>
        <g class="anim-pulse" style="animation-delay: 0.9s;">
          <ellipse cx="380" cy="320" rx="30" ry="15" fill="url(#chloroplastGrad)" stroke="#16a34a" stroke-width="2"/>
        </g>
        <text x="415" y="65" fill="#16a34a" font-size="10" font-weight="bold">Chloroplasts</text>
        <text x="415" y="78" fill="#16a34a" font-size="9">(photosynthesis)</text>
        
        <!-- Mitochondria -->
        <g class="anim-pulse-fast" style="animation-delay: 0.4s;">
          <ellipse cx="370" cy="200" rx="25" ry="12" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
          <path d="M350,200 Q360,193 370,200 Q380,207 390,200" fill="none" stroke="#b91c1c" stroke-width="1.5"/>
        </g>
        <text x="410" y="230" fill="#ef4444" font-size="10" font-weight="bold">Mitochondria</text>
        
        <!-- Ribosomes -->
        <g class="anim-vibrate-slow">
          <circle cx="200" cy="80" r="4" fill="#10b981"/>
          <circle cx="180" cy="95" r="4" fill="#10b981"/>
          <circle cx="300" cy="330" r="4" fill="#10b981"/>
        </g>
        
        <!-- Labels -->
        <text x="35" y="18" fill="#84cc16" font-size="11" font-weight="bold">Cell Wall</text>
        <text x="400" y="380" fill="#eab308" font-size="10" font-weight="bold">Cell Membrane</text>
        <text x="65" y="360" fill="currentColor" font-size="10">Cytoplasm</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Plant cells have a regular, box-like shape due to their stiff cell wall</p>
  </div>

  <div class="table-block">
    <h4>🦠 Bacterial Cell Components</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Structure</th>
          <th>Function</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Cytoplasm</strong></td>
          <td>Site of reactions</td>
          <td>No complex organelles present</td>
        </tr>
        <tr>
          <td><strong>Cell membrane</strong></td>
          <td>Controls movement</td>
          <td>Similar selective role as in eukaryotes</td>
        </tr>
        <tr>
          <td><strong>Cell wall</strong></td>
          <td>Supports/protects</td>
          <td>Different material to plant cellulose</td>
        </tr>
        <tr>
          <td><strong>Circular DNA loop</strong></td>
          <td>Main genetic material</td>
          <td>Floats free in cytoplasm</td>
        </tr>
        <tr>
          <td><strong>Plasmids</strong></td>
          <td>Extra DNA rings</td>
          <td>Often contain useful genes (e.g., antibiotic resistance)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always link <strong>structure to function</strong>. E.g., "Mitochondria have a folded inner membrane to increase surface area for respiration enzymes."</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "nucleus", "cell membrane", "cytoplasm", "mitochondria", "ribosomes",
              "cell wall", "vacuole", "chloroplast", "photosynthesis", "respiration",
              "protein synthesis", "cellulose", "turgor pressure"
            ],
            practice_items: [
              {
                id: "bio-subcell-p1",
                prompt_template: "Describe the function of mitochondria and explain how its structure helps it carry out this function.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["respiration", "energy", "ATP", "folded", "inner membrane", "surface area", "enzymes"]
              },
              {
                id: "bio-subcell-p2",
                prompt_template: "Name three organelles found in plant cells but not in animal cells, and state the function of each.",
                marks: 6,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["cell wall", "support", "vacuole", "turgor", "chloroplast", "photosynthesis"]
              }
            ]
          },
          {
            id: "b1-1-3-specialised-cells",
            title: "B1.1.3 — Specialised Cells",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Specialised Cells — How Structure Supports Function</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Explain how the structure of specialised cells is adapted to their function in animals and plants.</p>
  </div>

  <!-- ======= NERVE CELL ======= -->
  <div class="definition-block">
    <h4>🧠 Nerve Cell (Neurone)</h4>
    <ul>
      <li><strong>Long axon</strong> → carries electrical impulses long distances</li>
      <li><strong>Many dendrites</strong> → connect to multiple neurones</li>
      <li><strong>Myelin sheath</strong> → insulates and speeds impulse transmission</li>
      <li><strong>Lots of mitochondria</strong> → energy for neurotransmitters</li>
    </ul>
  </div>

  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Nerve Cell (Neurone) Structure</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="200" viewBox="0 0 520 200">
        <defs>
          <linearGradient id="axonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#8b5cf6"/>
            <stop offset="100%" style="stop-color:#c084fc"/>
          </linearGradient>
        </defs>
        
        <!-- Cell body with nucleus -->
        <g class="anim-pulse">
          <circle cx="80" cy="100" r="45" fill="#c084fc" stroke="#7c3aed" stroke-width="3"/>
          <circle cx="80" cy="100" r="15" fill="#581c87"/>
          <!-- Mitochondria in cell body -->
          <ellipse cx="60" cy="85" rx="8" ry="4" fill="#ef4444"/>
          <ellipse cx="100" cy="115" rx="8" ry="4" fill="#ef4444"/>
          <ellipse cx="70" cy="125" rx="7" ry="3" fill="#ef4444"/>
        </g>
        <text x="80" y="160" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Cell body</text>
        <text x="80" y="173" fill="currentColor" font-size="9" text-anchor="middle">(nucleus + mitochondria)</text>
        
        <!-- Dendrites (branching inputs) -->
        <g class="anim-pulse-fast">
          <path d="M35,65 Q10,45 5,25" fill="none" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
          <path d="M35,85 Q10,80 0,70" fill="none" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
          <path d="M35,100 Q10,100 0,100" fill="none" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
          <path d="M35,115 Q10,120 0,130" fill="none" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
          <path d="M35,135 Q10,155 5,175" fill="none" stroke="#a78bfa" stroke-width="4" stroke-linecap="round"/>
        </g>
        <text x="15" y="195" fill="#a78bfa" font-size="9" font-weight="bold">Dendrites</text>
        
        <!-- Axon (long tube) -->
        <line x1="125" y1="100" x2="460" y2="100" stroke="url(#axonGrad)" stroke-width="10"/>
        <text x="290" y="145" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">Long Axon</text>
        <text x="290" y="158" fill="#8b5cf6" font-size="9" text-anchor="middle">(carries impulses long distances)</text>
        
        <!-- Myelin sheath segments -->
        <g class="anim-fade-in-out">
          <ellipse cx="170" cy="100" rx="25" ry="15" fill="#fbbf24" opacity="0.75"/>
          <ellipse cx="240" cy="100" rx="25" ry="15" fill="#fbbf24" opacity="0.75"/>
          <ellipse cx="310" cy="100" rx="25" ry="15" fill="#fbbf24" opacity="0.75"/>
          <ellipse cx="380" cy="100" rx="25" ry="15" fill="#fbbf24" opacity="0.75"/>
        </g>
        <text x="310" y="60" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Myelin sheath</text>
        <text x="310" y="73" fill="#f59e0b" font-size="9" text-anchor="middle">(insulates → speeds impulses)</text>
        
        <!-- Nerve endings (synaptic terminals) -->
        <g class="anim-pulse">
          <path d="M460,100 L485,75 L500,78" fill="none" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
          <path d="M460,100 L495,100" fill="none" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
          <path d="M460,100 L485,125 L500,122" fill="none" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
          <circle cx="500" cy="78" r="5" fill="#ec4899"/>
          <circle cx="495" cy="100" r="5" fill="#ec4899"/>
          <circle cx="500" cy="122" r="5" fill="#ec4899"/>
        </g>
        <text x="485" y="150" fill="#ec4899" font-size="9" font-weight="bold">Nerve</text>
        <text x="485" y="162" fill="#ec4899" font-size="9" font-weight="bold">endings</text>
        
        <!-- Signal animation -->
        <g class="anim-flow-right">
          <circle cx="200" cy="100" r="6" fill="#22c55e"/>
        </g>
      </svg>
    </div>
  </div>

  <!-- ======= MUSCLE CELL ======= -->
  <div class="definition-block">
    <h4>💪 Muscle Cell</h4>
    <ul>
      <li><strong>Packed with mitochondria</strong> → ATP for contraction</li>
      <li><strong>Protein filaments</strong> → slide to shorten the cell</li>
      <li><strong>Long, fibre-like shape</strong> → contracts in one direction</li>
    </ul>
  </div>

  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>💪 Muscle Cell (Fibre) Structure</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="160" viewBox="0 0 500 160">
        <defs>
          <linearGradient id="muscleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#f87171"/>
            <stop offset="50%" style="stop-color:#ef4444"/>
            <stop offset="100%" style="stop-color:#f87171"/>
          </linearGradient>
        </defs>
        
        <!-- Long muscle fibre shape -->
        <path d="M30,80 Q50,40 100,50 L400,50 Q450,40 470,80 Q450,120 400,110 L100,110 Q50,120 30,80" 
              fill="url(#muscleGrad)" stroke="#dc2626" stroke-width="3"/>
        
        <!-- Protein filaments (striations) -->
        <g class="anim-compress">
          <line x1="80" y1="55" x2="80" y2="105" stroke="#fca5a5" stroke-width="3"/>
          <line x1="120" y1="52" x2="120" y2="108" stroke="#fca5a5" stroke-width="3"/>
          <line x1="160" y1="51" x2="160" y2="109" stroke="#fca5a5" stroke-width="3"/>
          <line x1="200" y1="50" x2="200" y2="110" stroke="#fca5a5" stroke-width="3"/>
          <line x1="240" y1="50" x2="240" y2="110" stroke="#fca5a5" stroke-width="3"/>
          <line x1="280" y1="50" x2="280" y2="110" stroke="#fca5a5" stroke-width="3"/>
          <line x1="320" y1="50" x2="320" y2="110" stroke="#fca5a5" stroke-width="3"/>
          <line x1="360" y1="51" x2="360" y2="109" stroke="#fca5a5" stroke-width="3"/>
          <line x1="400" y1="52" x2="400" y2="108" stroke="#fca5a5" stroke-width="3"/>
        </g>
        
        <!-- Multiple nuclei -->
        <g class="anim-pulse-fast">
          <ellipse cx="140" cy="80" rx="15" ry="8" fill="#581c87" opacity="0.8"/>
          <ellipse cx="250" cy="80" rx="15" ry="8" fill="#581c87" opacity="0.8"/>
          <ellipse cx="360" cy="80" rx="15" ry="8" fill="#581c87" opacity="0.8"/>
        </g>
        
        <!-- Mitochondria (many) -->
        <g class="anim-pulse">
          <ellipse cx="100" cy="70" rx="10" ry="5" fill="#fbbf24"/>
          <ellipse cx="180" cy="90" rx="10" ry="5" fill="#fbbf24"/>
          <ellipse cx="220" cy="65" rx="10" ry="5" fill="#fbbf24"/>
          <ellipse cx="300" cy="95" rx="10" ry="5" fill="#fbbf24"/>
          <ellipse cx="340" cy="68" rx="10" ry="5" fill="#fbbf24"/>
          <ellipse cx="410" cy="85" rx="10" ry="5" fill="#fbbf24"/>
        </g>
        
        <!-- Labels -->
        <text x="250" y="145" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Long fibre shape → contracts in one direction</text>
        <text x="80" y="25" fill="#fbbf24" font-size="9" font-weight="bold">Many mitochondria</text>
        <text x="80" y="37" fill="#fbbf24" font-size="8">(energy for contraction)</text>
        <text x="350" y="25" fill="#fca5a5" font-size="9" font-weight="bold">Protein filaments</text>
        <text x="350" y="37" fill="#fca5a5" font-size="8">(slide to shorten cell)</text>
      </svg>
    </div>
  </div>

  <!-- ======= SPERM CELL ======= -->
  <div class="definition-block">
    <h4>🏊 Sperm Cell</h4>
    <ul>
      <li><strong>Tail (flagellum)</strong> → swimming towards egg</li>
      <li><strong>Mitochondria in midpiece</strong> → energy for movement</li>
      <li><strong>Acrosome</strong> → contains enzymes to break into egg</li>
      <li><strong>Haploid nucleus</strong> → correct number of chromosomes for fertilisation</li>
    </ul>
  </div>

  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🏊 Sperm Cell Structure</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="150" viewBox="0 0 480 150">
        <!-- Head -->
        <g class="anim-pulse">
          <ellipse cx="70" cy="75" rx="40" ry="28" fill="#3b82f6"/>
          <!-- Acrosome (cap) -->
          <path d="M30,75 Q15,60 30,45 Q50,60 30,75" fill="#1d4ed8"/>
          <!-- Nucleus (main part of head) -->
          <ellipse cx="80" cy="75" rx="25" ry="18" fill="#1e3a8a"/>
        </g>
        <text x="70" y="115" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Head</text>
        <text x="25" y="35" fill="#1d4ed8" font-size="9" font-weight="bold">Acrosome</text>
        <text x="25" y="47" fill="#1d4ed8" font-size="8">(enzymes)</text>
        <text x="80" y="128" fill="#1e3a8a" font-size="8" text-anchor="middle">Haploid nucleus</text>
        
        <!-- Midpiece -->
        <g class="anim-pulse-fast">
          <rect x="110" y="62" width="55" height="26" rx="5" fill="#ef4444" opacity="0.9"/>
          <!-- Mitochondria spirals -->
          <line x1="118" y1="66" x2="118" y2="84" stroke="#fca5a5" stroke-width="2"/>
          <line x1="128" y1="66" x2="128" y2="84" stroke="#fca5a5" stroke-width="2"/>
          <line x1="138" y1="66" x2="138" y2="84" stroke="#fca5a5" stroke-width="2"/>
          <line x1="148" y1="66" x2="148" y2="84" stroke="#fca5a5" stroke-width="2"/>
          <line x1="158" y1="66" x2="158" y2="84" stroke="#fca5a5" stroke-width="2"/>
        </g>
        <text x="137" y="105" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Midpiece</text>
        <text x="137" y="118" fill="#ef4444" font-size="9" text-anchor="middle">(packed with</text>
        <text x="137" y="130" fill="#ef4444" font-size="9" text-anchor="middle">mitochondria)</text>
        
        <!-- Tail (flagellum) - wavy -->
        <g class="anim-wave">
          <path d="M165,75 Q220,50 275,75 Q330,100 385,75 Q420,60 450,75" fill="none" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round"/>
        </g>
        <text x="340" y="45" fill="#8b5cf6" font-size="10" font-weight="bold">Tail (flagellum)</text>
        <text x="340" y="58" fill="#8b5cf6" font-size="9">for swimming</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Streamlined head + tail for swimming • Mitochondria provide energy for movement</p>
  </div>

  <!-- ======= ROOT HAIR CELL ======= -->
  <div class="definition-block">
    <h4>🌱 Root Hair Cell</h4>
    <ul>
      <li><strong>Long extension</strong> → increases surface area enormously</li>
      <li><strong>Thin wall</strong> → easier movement of substances</li>
      <li><strong>Many mitochondria</strong> → active transport of mineral ions</li>
      <li>Absorbs water efficiently due to large contact with soil</li>
    </ul>
  </div>

  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌱 Root Hair Cell Structure</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="200" viewBox="0 0 450 200">
        <!-- Cell body -->
        <rect x="30" y="50" width="110" height="100" rx="8" fill="#d9f99d" stroke="#84cc16" stroke-width="4"/>
        
        <!-- Root hair extension -->
        <g class="anim-pulse">
          <path d="M140,100 Q240,100 350,100" fill="none" stroke="#84cc16" stroke-width="50" stroke-linecap="round"/>
        </g>
        
        <!-- Nucleus -->
        <circle cx="85" cy="100" r="25" fill="#c084fc" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="85" cy="100" r="8" fill="#581c87"/>
        
        <!-- Vacuole -->
        <ellipse cx="65" cy="115" rx="18" ry="25" fill="#a5b4fc" opacity="0.5"/>
        
        <!-- Mitochondria in extension (many for active transport) -->
        <g class="anim-pulse-fast">
          <ellipse cx="180" cy="100" rx="15" ry="8" fill="#ef4444"/>
          <ellipse cx="220" cy="100" rx="15" ry="8" fill="#ef4444"/>
          <ellipse cx="260" cy="100" rx="15" ry="8" fill="#ef4444"/>
          <ellipse cx="300" cy="100" rx="15" ry="8" fill="#ef4444"/>
          <ellipse cx="340" cy="100" rx="12" ry="6" fill="#ef4444"/>
        </g>
        
        <!-- Water movement arrows -->
        <g class="anim-flow-left">
          <path d="M420,75 L365,90" stroke="#3b82f6" stroke-width="3" marker-end="url(#waterArrow)"/>
          <path d="M430,100 L380,100" stroke="#3b82f6" stroke-width="3" marker-end="url(#waterArrow)"/>
          <path d="M420,125 L365,110" stroke="#3b82f6" stroke-width="3" marker-end="url(#waterArrow)"/>
        </g>
        <defs>
          <marker id="waterArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#3b82f6"/>
          </marker>
        </defs>
        
        <!-- Soil particles -->
        <circle cx="400" cy="55" r="12" fill="#92400e" opacity="0.6"/>
        <circle cx="430" cy="80" r="8" fill="#92400e" opacity="0.6"/>
        <circle cx="415" cy="130" r="14" fill="#92400e" opacity="0.6"/>
        <circle cx="440" cy="150" r="10" fill="#92400e" opacity="0.6"/>
        
        <!-- Labels -->
        <text x="85" y="165" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Cell body</text>
        <text x="260" y="160" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Long hair extension</text>
        <text x="260" y="175" fill="currentColor" font-size="9" text-anchor="middle">(↑ surface area for absorption)</text>
        <text x="415" y="180" fill="#92400e" font-size="10" font-weight="bold">Soil</text>
        <text x="400" y="40" fill="#3b82f6" font-size="9" font-weight="bold">Water enters</text>
        <text x="180" y="70" fill="#ef4444" font-size="9" font-weight="bold">Many mitochondria</text>
        <text x="180" y="82" fill="#ef4444" font-size="8">(for active transport)</text>
      </svg>
    </div>
  </div>

  <!-- ======= XYLEM VESSEL ======= -->
  <div class="definition-block">
    <h4>💧 Xylem Vessel</h4>
    <ul>
      <li><strong>Long, hollow tubes</strong> made from dead cells</li>
      <li><strong>No end walls</strong> → uninterrupted water flow</li>
      <li><strong>Lignin</strong> strengthens walls → prevents collapse</li>
      <li>Lignin patterns (spiral/ring) allow bending as plant grows</li>
      <li><strong>Pits</strong> allow sideways water movement</li>
      <li>Supports plant structure and forms part of the transpiration stream</li>
    </ul>
  </div>

  <!-- ======= PHLOEM VESSEL ======= -->
  <div class="definition-block">
    <h4>🍬 Phloem Vessel</h4>
    <ul>
      <li>Made of <strong>sieve tube elements + companion cells</strong></li>
      <li><strong>Sieve plates</strong> → pores allow sugar solution to flow</li>
      <li>Sieve elements have very few organelles → more space for transport</li>
      <li>Companion cells contain <strong>many mitochondria</strong> → provide energy for loading sugars</li>
      <li>Transport is <strong>two-way</strong> depending on plant's needs (source → sink)</li>
    </ul>
  </div>

  <!-- Xylem & Phloem Comparison Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌿 Xylem & Phloem Vessels Comparison</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="260" viewBox="0 0 450 260">
        <!-- XYLEM -->
        <g>
          <text x="110" y="25" fill="#3b82f6" font-size="13" text-anchor="middle" font-weight="bold">XYLEM</text>
          <text x="110" y="40" fill="#3b82f6" font-size="9" text-anchor="middle">(water transport)</text>
          
          <!-- Vessel wall with lignin spiral -->
          <rect x="70" y="55" width="80" height="180" fill="none" stroke="#1d4ed8" stroke-width="5"/>
          
          <!-- Lignin spirals -->
          <g class="anim-draw-infinite">
            <path d="M80,65 Q95,75 80,85 Q95,95 80,105 Q95,115 80,125 Q95,135 80,145 Q95,155 80,165 Q95,175 80,185 Q95,195 80,205 Q95,215 80,225" 
                  fill="none" stroke="#60a5fa" stroke-width="3"/>
            <path d="M140,65 Q125,75 140,85 Q125,95 140,105 Q125,115 140,125 Q125,135 140,145 Q125,155 140,165 Q125,175 140,185 Q125,195 140,205 Q125,215 140,225" 
                  fill="none" stroke="#60a5fa" stroke-width="3"/>
          </g>
          
          <!-- Water flow upward -->
          <g class="anim-flow-up">
            <circle cx="110" cy="200" r="6" fill="#22d3ee"/>
            <circle cx="105" cy="150" r="6" fill="#22d3ee"/>
            <circle cx="115" cy="100" r="6" fill="#22d3ee"/>
          </g>
          
          <!-- Pit -->
          <ellipse cx="70" cy="130" rx="4" ry="12" fill="#93c5fd"/>
          <text x="45" y="130" fill="#3b82f6" font-size="8" text-anchor="end">Pit</text>
          
          <!-- No end walls indicator -->
          <text x="110" y="250" fill="currentColor" font-size="9" text-anchor="middle">Water ↑</text>
          <text x="45" y="180" fill="#60a5fa" font-size="8">Lignin</text>
          <text x="45" y="192" fill="#60a5fa" font-size="8">spiral</text>
        </g>
        
        <!-- PHLOEM -->
        <g>
          <text x="340" y="25" fill="#22c55e" font-size="13" text-anchor="middle" font-weight="bold">PHLOEM</text>
          <text x="340" y="40" fill="#22c55e" font-size="9" text-anchor="middle">(sugar transport)</text>
          
          <!-- Sieve tube -->
          <rect x="300" y="55" width="50" height="180" fill="#dcfce7" stroke="#16a34a" stroke-width="4"/>
          
          <!-- Sieve plates with pores -->
          <g class="anim-fade-in-out">
            <line x1="300" y1="100" x2="350" y2="100" stroke="#15803d" stroke-width="3" stroke-dasharray="6,3"/>
            <line x1="300" y1="145" x2="350" y2="145" stroke="#15803d" stroke-width="3" stroke-dasharray="6,3"/>
            <line x1="300" y1="190" x2="350" y2="190" stroke="#15803d" stroke-width="3" stroke-dasharray="6,3"/>
          </g>
          
          <!-- Companion cell -->
          <rect x="360" y="80" width="35" height="120" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <!-- Companion cell mitochondria -->
          <g class="anim-pulse-fast">
            <ellipse cx="377" cy="100" rx="8" ry="4" fill="#ef4444"/>
            <ellipse cx="377" cy="130" rx="8" ry="4" fill="#ef4444"/>
            <ellipse cx="377" cy="160" rx="8" ry="4" fill="#ef4444"/>
          </g>
          <!-- Companion cell nucleus -->
          <ellipse cx="377" cy="140" rx="10" ry="8" fill="#8b5cf6"/>
          
          <!-- Sugar flow (bidirectional) -->
          <g class="anim-flow-down">
            <circle cx="325" cy="80" r="5" fill="#fbbf24"/>
            <circle cx="325" cy="130" r="5" fill="#fbbf24"/>
            <circle cx="325" cy="175" r="5" fill="#fbbf24"/>
          </g>
          
          <!-- Labels -->
          <text x="325" y="250" fill="currentColor" font-size="9" text-anchor="middle">Sugar ↑↓</text>
          <text x="410" y="140" fill="#f59e0b" font-size="9" font-weight="bold">Companion</text>
          <text x="410" y="153" fill="#f59e0b" font-size="9" font-weight="bold">cell</text>
          <text x="260" y="145" fill="#15803d" font-size="8">Sieve</text>
          <text x="260" y="157" fill="#15803d" font-size="8">plate</text>
        </g>
      </svg>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always link <strong>structure to function</strong>! E.g., "Root hair cells have a long extension to increase surface area for water absorption."</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "nerve cell", "neurone", "axon", "dendrite", "myelin sheath",
              "muscle cell", "mitochondria", "protein filaments",
              "sperm cell", "acrosome", "flagellum", "haploid",
              "root hair cell", "surface area", "active transport",
              "xylem", "lignin", "phloem", "sieve plate", "companion cell"
            ],
            practice_items: [
              {
                id: "bio-spec-p1",
                prompt_template: "Explain how the structure of a nerve cell is adapted to its function.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["axon", "long", "impulses", "myelin", "dendrites", "mitochondria"]
              },
              {
                id: "bio-spec-p2",
                prompt_template: "Describe how the root hair cell is adapted for absorbing water and mineral ions.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["long extension", "surface area", "thin wall", "mitochondria", "active transport"]
              },
              {
                id: "bio-spec-p3",
                prompt_template: "Compare the structure of xylem and phloem vessels.",
                marks: 6,
                type: "short-answer",
                difficulty: "hard",
                randomise: true,
                expected_keywords: ["xylem", "hollow", "dead", "lignin", "water", "phloem", "sieve tube", "companion cell", "living", "sugar"]
              }
            ]
          },
          {
            id: "b1-1-4-microscopy",
            title: "B1.1.4 — Microscopy",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Microscopy — Parts, Use, Magnification, Resolution</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Be able to use a light microscope, calculate magnification, and compare light and electron microscopes.</p>
  </div>

  <div class="table-block">
    <h4>🔬 Parts of a Light Microscope</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Part</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Eyepiece lens</strong></td>
          <td>You look through it; usually ×10</td>
        </tr>
        <tr>
          <td><strong>Objective lenses</strong></td>
          <td>Provide different magnifications (×4, ×10, ×40)</td>
        </tr>
        <tr>
          <td><strong>Stage</strong></td>
          <td>Holds the slide</td>
        </tr>
        <tr>
          <td><strong>Stage clips</strong></td>
          <td>Secure the slide on the stage</td>
        </tr>
        <tr>
          <td><strong>Coarse focus wheel</strong></td>
          <td>Brings image roughly into focus</td>
        </tr>
        <tr>
          <td><strong>Fine focus wheel</strong></td>
          <td>Sharpens the image precisely</td>
        </tr>
        <tr>
          <td><strong>Light source / mirror</strong></td>
          <td>Illuminates the slide</td>
        </tr>
        <tr>
          <td><strong>Diaphragm</strong></td>
          <td>Controls amount of light passing through the specimen</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Microscope Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Light Microscope Parts</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="400" viewBox="0 0 350 400">
        <!-- Base -->
        <rect x="90" y="350" width="160" height="25" rx="6" fill="#374151"/>
        
        <!-- Arm (curved support) -->
        <path d="M170,350 L170,120 Q170,90 200,90 L215,90" fill="none" stroke="#4b5563" stroke-width="18" stroke-linecap="round"/>
        
        <!-- Stage -->
        <rect x="70" y="230" width="200" height="12" fill="#6b7280"/>
        <rect x="160" y="237" width="20" height="6" fill="#9ca3af"/>
        
        <!-- Eyepiece -->
        <g class="anim-pulse">
          <rect x="195" y="65" width="40" height="50" rx="6" fill="#1f2937"/>
          <ellipse cx="215" cy="58" rx="16" ry="6" fill="#374151"/>
        </g>
        <text x="255" y="80" fill="currentColor" font-size="10" font-weight="bold">Eyepiece</text>
        <text x="255" y="93" fill="currentColor" font-size="9">(×10)</text>
        
        <!-- Objective lenses (revolving nosepiece) -->
        <g>
          <rect x="180" y="160" width="70" height="18" rx="4" fill="#1f2937"/>
          <g class="anim-rotate-cw-slow" style="transform-origin: 215px 178px;">
            <rect x="185" y="178" width="12" height="30" rx="3" fill="#ef4444"/>
            <rect x="203" y="178" width="12" height="42" rx="3" fill="#3b82f6"/>
            <rect x="221" y="178" width="12" height="55" rx="3" fill="#22c55e"/>
          </g>
        </g>
        <text x="265" y="195" fill="currentColor" font-size="10" font-weight="bold">Objective</text>
        <text x="265" y="208" fill="currentColor" font-size="9">lenses</text>
        <text x="265" y="221" fill="currentColor" font-size="9">(×4, ×10, ×40)</text>
        
        <!-- Focus wheels -->
        <g class="anim-pulse">
          <circle cx="115" cy="280" r="25" fill="#4b5563" stroke="#374151" stroke-width="4"/>
          <circle cx="115" cy="280" r="10" fill="#1f2937"/>
        </g>
        <text x="35" y="260" fill="currentColor" font-size="9" font-weight="bold">Coarse</text>
        <text x="35" y="273" fill="currentColor" font-size="9">focus</text>
        
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <circle cx="115" cy="320" r="15" fill="#6b7280" stroke="#4b5563" stroke-width="3"/>
        </g>
        <text x="35" y="325" fill="currentColor" font-size="9" font-weight="bold">Fine focus</text>
        
        <!-- Light -->
        <g class="anim-pulse-glow">
          <circle cx="170" cy="295" r="18" fill="#fbbf24" opacity="0.6"/>
          <circle cx="170" cy="295" r="10" fill="#fef3c7"/>
        </g>
        <text x="200" y="305" fill="currentColor" font-size="9" font-weight="bold">Light</text>
        
        <!-- Stage clips -->
        <rect x="80" y="225" width="18" height="10" fill="#9ca3af"/>
        <rect x="242" y="225" width="18" height="10" fill="#9ca3af"/>
        <text x="70" y="255" fill="currentColor" font-size="8">Clips</text>
        
        <!-- Stage label -->
        <text x="280" y="245" fill="currentColor" font-size="10" font-weight="bold">Stage</text>
      </svg>
    </div>
  </div>

  <div class="method-step">
    <h5>📝 How to Use a Light Microscope Properly</h5>
    <ol>
      <li>Place the slide on the <strong>stage</strong> and secure with clips</li>
      <li>Select the <strong>lowest objective lens</strong> (e.g. ×4)</li>
      <li>Use the <strong>coarse focus</strong> wheel to bring the image into view</li>
      <li>Switch to a <strong>higher magnification</strong> when needed (×10 → ×40)</li>
      <li>Use the <strong>fine focus</strong> wheel to sharpen the image</li>
      <li>Adjust the <strong>light diaphragm</strong> to improve contrast</li>
    </ol>
  </div>

  <div class="warning-block">
    <h4>⚠️ Important Safety Rule</h4>
    <p><strong>Never use the coarse focus on the highest lens</strong> — risk of breaking the slide and damaging the lens!</p>
  </div>

  <div class="key-facts-block">
    <h4>🧮 Magnification & Resolution</h4>
    <ul>
      <li><strong>Magnification</strong> = how much larger the image is compared to the actual specimen</li>
      <li><strong>Resolution</strong> = how well a microscope can distinguish two close points as separate</li>
    </ul>
  </div>

  <div class="formula-box">
    <p><strong>Magnification = Image size ÷ Actual size</strong></p>
    <p class="formula-note">Or rearranged: Image size = Magnification × Actual size</p>
  </div>

  <div class="table-block">
    <h4>🔎 Light vs Electron Microscope Comparison</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Light Microscope</th>
          <th>Electron Microscope</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Magnification</strong></td>
          <td>Low (up to ×2000)</td>
          <td>Very high (up to ×2,000,000)</td>
        </tr>
        <tr>
          <td><strong>Resolution</strong></td>
          <td>Low (~200 nm)</td>
          <td>Very high (~0.1 nm)</td>
        </tr>
        <tr>
          <td><strong>Living samples?</strong></td>
          <td>✅ Yes</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td><strong>Cost</strong></td>
          <td>Cheap</td>
          <td>Expensive</td>
        </tr>
        <tr>
          <td><strong>Image</strong></td>
          <td>Colour</td>
          <td>Black & white</td>
        </tr>
        <tr>
          <td><strong>Visible structures</strong></td>
          <td>Cells + some organelles</td>
          <td>Ultrastructure (ribosomes, membranes, viruses)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🟢 Why Electron Microscopes Matter</h4>
    <p>Electron microscopes allow us to see extremely small structures such as <strong>ribosomes</strong> and <strong>internal membranes of mitochondria</strong> that are invisible under light microscopes.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: Higher magnification ≠ better image. You also need <strong>high resolution</strong> to see fine detail clearly!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "microscope", "eyepiece", "objective lens", "stage", "focus",
              "magnification", "resolution", "light microscope", "electron microscope",
              "image size", "actual size", "organelle", "ultrastructure"
            ],
            practice_items: [
              {
                id: "bio-micro-p1",
                prompt_template: "Describe the steps you would take to view a prepared slide under a light microscope.",
                marks: 4,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["stage", "clips", "lowest", "objective", "coarse", "focus", "fine", "magnification"]
              },
              {
                id: "bio-micro-p2",
                prompt_template: "Compare the advantages and disadvantages of using a light microscope versus an electron microscope.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["magnification", "resolution", "living", "colour", "cost", "detail"]
              },
              {
                id: "bio-micro-p3",
                prompt_template: "A cell has an actual size of 50 μm. Calculate the image size if it is viewed at ×400 magnification. Show your working.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["20000", "20,000", "μm", "mm", "image size", "magnification", "actual"]
              }
            ]
          }
        ]
      },
      // ========================================
      // MODULE 2: CELL TRANSPORT
      // ========================================
      {
        id: "cell-transport-module",
        title: "Module 2: Cell Transport",
        status: "ready",
        subsections: [
          {
            id: "b1-2-1-diffusion",
            title: "B1.2.1 — Diffusion",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Diffusion — Movement of Particles</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Explain diffusion as the spreading of particles. Understand factors affecting rate. Apply to examples in living organisms.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What is Diffusion?</h4>
    <p>Diffusion is the <strong>net movement of particles from an area of higher concentration to an area of lower concentration</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>⭐ What "Net Movement" Means</h4>
    <ul>
      <li>Particles move <strong>randomly in both directions</strong></li>
      <li>But there is <strong>overall movement down the gradient</strong></li>
      <li>This is a <strong>passive process</strong> — no energy required!</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>⭐ Why Diffusion is Essential</h4>
    <ul>
      <li>Main method for moving <strong>gases (O₂, CO₂)</strong></li>
      <li>Allows cells to obtain <strong>raw materials rapidly</strong></li>
      <li>Removes <strong>waste products</strong> before they become toxic</li>
    </ul>
  </div>

  <!-- Diffusion Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔄 Diffusion in Action (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Container -->
        <rect x="25" y="35" width="450" height="130" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Membrane -->
        <line x1="250" y1="35" x2="250" y2="165" stroke="#8b5cf6" stroke-width="5" stroke-dasharray="12,6"/>
        <text x="250" y="185" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">Membrane</text>
        
        <!-- High concentration side (left) -->
        <text x="135" y="25" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">HIGH concentration</text>
        <g>
          <!-- Stationary particles -->
          <circle cx="55" cy="65" r="10" fill="#ef4444"/>
          <circle cx="90" cy="90" r="10" fill="#ef4444"/>
          <circle cx="115" cy="55" r="10" fill="#ef4444"/>
          <circle cx="65" cy="125" r="10" fill="#ef4444"/>
          <circle cx="145" cy="100" r="10" fill="#ef4444"/>
          <circle cx="100" cy="145" r="10" fill="#ef4444"/>
          <circle cx="170" cy="65" r="10" fill="#ef4444"/>
          <circle cx="195" cy="115" r="10" fill="#ef4444"/>
          <circle cx="45" cy="100" r="10" fill="#ef4444"/>
          <circle cx="125" cy="135" r="10" fill="#ef4444"/>
          <circle cx="75" cy="70" r="10" fill="#ef4444"/>
          <!-- Moving particles -->
          <g class="anim-flow-right">
            <circle cx="200" cy="75" r="10" fill="#f87171"/>
          </g>
          <g class="anim-flow-right" style="animation-delay: 0.6s;">
            <circle cx="180" cy="130" r="10" fill="#f87171"/>
          </g>
          <g class="anim-flow-right" style="animation-delay: 1.2s;">
            <circle cx="210" cy="150" r="10" fill="#f87171"/>
          </g>
        </g>
        
        <!-- Low concentration side (right) -->
        <text x="375" y="25" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">LOW concentration</text>
        <g>
          <circle cx="310" cy="90" r="10" fill="#ef4444"/>
          <circle cx="390" cy="110" r="10" fill="#ef4444"/>
          <circle cx="440" cy="75" r="10" fill="#ef4444"/>
        </g>
        
        <!-- Arrow showing net movement -->
        <g class="anim-pulse">
          <path d="M155,175 L345,175" stroke="#22c55e" stroke-width="5" marker-end="url(#greenArrowDiff)"/>
        </g>
        <text x="250" y="198" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">NET MOVEMENT →</text>
        
        <defs>
          <marker id="greenArrowDiff" markerWidth="12" markerHeight="9" refX="10" refY="4.5" orient="auto">
            <polygon points="0 0, 12 4.5, 0 9" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles spread from high → low concentration until evenly distributed</p>
  </div>

  <div class="example-block">
    <h4>🟢 Examples You Must Recall</h4>
    <ul>
      <li><strong>Gas exchange in lungs:</strong> O₂ diffuses from alveoli → blood (higher O₂ in alveoli). CO₂ diffuses from blood → alveoli (higher CO₂ in blood from respiration).</li>
      <li><strong>Photosynthesis in plants:</strong> CO₂ diffuses into leaf cells because photosynthesis constantly uses CO₂, keeping internal concentration low.</li>
      <li><strong>Excretion (urea):</strong> Urea diffuses from liver cells → blood plasma, then to kidneys (higher concentration in liver cells).</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Factors Affecting Rate of Diffusion</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Factor</th>
          <th>Effect</th>
          <th>Scientific Reasoning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>🔥 Higher temperature</strong></td>
          <td>Faster diffusion</td>
          <td>Particles have more kinetic energy → collide more → spread faster</td>
        </tr>
        <tr>
          <td><strong>↗ Steep concentration gradient</strong></td>
          <td>Faster net movement</td>
          <td>Bigger difference = stronger "driving force"</td>
        </tr>
        <tr>
          <td><strong>🪶 Thin membrane</strong></td>
          <td>Faster diffusion</td>
          <td>Short diffusion distance → fewer collisions → quicker</td>
        </tr>
        <tr>
          <td><strong>📏 Large surface area</strong></td>
          <td>Faster diffusion</td>
          <td>More area = more space for particles to cross</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🟢 Real Examples</h4>
    <ul>
      <li><strong>Alveoli walls</strong> are 1 cell thick → short diffusion distance</li>
      <li><strong>Leaves</strong> have large surface area → more space for CO₂ entry</li>
      <li><strong>Root hairs</strong> massively increase total SA → better water uptake</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always mention <strong>"steep concentration gradient"</strong> and <strong>"short diffusion distance"</strong> together — examiners love this combination!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "diffusion", "concentration", "gradient", "net movement", "passive",
              "temperature", "surface area", "membrane", "oxygen", "carbon dioxide",
              "high to low", "particles", "random"
            ],
            practice_items: [
              {
                id: "bio-diff-p1",
                prompt_template: "Define diffusion and explain why it is described as a passive process.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["net movement", "high", "low", "concentration", "no energy", "passive"]
              },
              {
                id: "bio-diff-p2",
                prompt_template: "Describe four factors that affect the rate of diffusion.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["temperature", "concentration gradient", "surface area", "membrane thickness", "distance"]
              },
              {
                id: "bio-diff-p3",
                prompt_template: "Explain how oxygen moves from the alveoli into the blood during gas exchange.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["diffusion", "high concentration", "alveoli", "low concentration", "blood", "gradient", "thin wall"]
              }
            ]
          },
          {
            id: "b1-2-2-osmosis",
            title: "B1.2.2 — Osmosis",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Osmosis — Water Movement</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Describe osmosis as the diffusion of water through a partially permeable membrane. Explain effects on plant and animal cells.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What is Osmosis?</h4>
    <p>Osmosis is the <strong>diffusion of water</strong> from a <strong>dilute solution</strong> to a <strong>more concentrated solution</strong> through a <strong>partially permeable membrane</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Breaking It Down</h4>
    <ul>
      <li><strong>Dilute</strong> = high water concentration</li>
      <li><strong>Concentrated</strong> = low water concentration</li>
      <li>Water moves to "even out" the concentration difference</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why a Partially Permeable Membrane Matters</h4>
    <p>It allows <strong>water molecules through</strong> but <strong>not larger solutes</strong>, so the gradient applies to water only.</p>
  </div>

  <!-- Osmosis Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>💧 Osmosis Across a Membrane (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="240" viewBox="0 0 500 240">
        <!-- Container -->
        <rect x="25" y="35" width="450" height="160" rx="12" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Partially permeable membrane -->
        <line x1="250" y1="35" x2="250" y2="195" stroke="#8b5cf6" stroke-width="6" stroke-dasharray="15,8"/>
        <text x="250" y="220" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">Partially permeable membrane</text>
        
        <!-- Dilute side (left) - more water molecules -->
        <text x="135" y="25" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">DILUTE solution</text>
        <text x="135" y="210" fill="#3b82f6" font-size="9" text-anchor="middle">(high water concentration)</text>
        
        <!-- Water molecules (left - many) -->
        <g class="anim-vibrate-slow">
          <circle cx="55" cy="60" r="8" fill="#22d3ee"/>
          <circle cx="85" cy="85" r="8" fill="#22d3ee"/>
          <circle cx="115" cy="55" r="8" fill="#22d3ee"/>
          <circle cx="60" cy="115" r="8" fill="#22d3ee"/>
          <circle cx="145" cy="95" r="8" fill="#22d3ee"/>
          <circle cx="95" cy="140" r="8" fill="#22d3ee"/>
          <circle cx="175" cy="65" r="8" fill="#22d3ee"/>
          <circle cx="195" cy="120" r="8" fill="#22d3ee"/>
          <circle cx="45" cy="160" r="8" fill="#22d3ee"/>
          <circle cx="130" cy="165" r="8" fill="#22d3ee"/>
          <circle cx="70" cy="80" r="8" fill="#22d3ee"/>
          <circle cx="160" cy="145" r="8" fill="#22d3ee"/>
        </g>
        <!-- Solute molecules (left - few) -->
        <circle cx="100" cy="110" r="12" fill="#f59e0b"/>
        
        <!-- Concentrated side (right) - more solutes, less water -->
        <text x="375" y="25" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">CONCENTRATED solution</text>
        <text x="375" y="210" fill="#f59e0b" font-size="9" text-anchor="middle">(low water concentration)</text>
        
        <!-- Water molecules (right - few) -->
        <g class="anim-vibrate-slow">
          <circle cx="310" cy="80" r="8" fill="#22d3ee"/>
          <circle cx="380" cy="145" r="8" fill="#22d3ee"/>
          <circle cx="440" cy="70" r="8" fill="#22d3ee"/>
        </g>
        <!-- Solute molecules (right - many) -->
        <circle cx="340" cy="110" r="12" fill="#f59e0b"/>
        <circle cx="400" cy="85" r="12" fill="#f59e0b"/>
        <circle cx="420" cy="130" r="12" fill="#f59e0b"/>
        <circle cx="360" cy="160" r="12" fill="#f59e0b"/>
        <circle cx="290" cy="150" r="12" fill="#f59e0b"/>
        
        <!-- Moving water molecules -->
        <g class="anim-flow-right" style="animation-delay: 0.3s;">
          <circle cx="210" cy="100" r="8" fill="#06b6d4"/>
        </g>
        <g class="anim-flow-right" style="animation-delay: 0.9s;">
          <circle cx="205" cy="140" r="8" fill="#06b6d4"/>
        </g>
        <g class="anim-flow-right" style="animation-delay: 1.5s;">
          <circle cx="215" cy="70" r="8" fill="#06b6d4"/>
        </g>
        
        <!-- Arrow -->
        <g class="anim-pulse">
          <path d="M155,230 L345,230" stroke="#22c55e" stroke-width="4" marker-end="url(#osmArrow)"/>
        </g>
        <text x="250" y="238" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">NET WATER MOVEMENT →</text>
        
        <defs>
          <marker id="osmArrow" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Water moves from dilute (high water) → concentrated (low water) • Solutes cannot pass through</p>
  </div>

  <h3 class="subsection-subheading">Osmosis and Plant Cells</h3>

  <div class="info-grid">
    <div class="key-facts-block">
      <h4>💧 Hypotonic Solution (more dilute outside)</h4>
      <ul>
        <li>Water <strong>enters</strong> the cell → vacuole expands</li>
        <li>Cell becomes <strong>turgid</strong> (firm)</li>
        <li>Provides <strong>support</strong> for plant stems and leaves</li>
      </ul>
    </div>
    <div class="warning-block">
      <h4>🔴 Hypertonic Solution (more concentrated outside)</h4>
      <ul>
        <li>Water <strong>leaves</strong> the cell</li>
        <li>Cytoplasm shrinks away from cell wall → <strong>plasmolysis</strong></li>
        <li>Plant <strong>wilts</strong> if many cells plasmolyse</li>
      </ul>
    </div>
  </div>

  <!-- Plant Cell Osmosis Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌱 Effect of Osmosis on Plant Cells</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="550" height="220" viewBox="0 0 550 220">
        <!-- Turgid Cell -->
        <g>
          <text x="95" y="20" fill="#22c55e" font-size="12" text-anchor="middle" font-weight="bold">TURGID</text>
          <text x="95" y="35" fill="currentColor" font-size="9" text-anchor="middle">(in dilute solution)</text>
          <rect x="35" y="50" width="120" height="110" rx="8" fill="none" stroke="#22c55e" stroke-width="5"/>
          <g class="anim-pulse">
            <rect x="48" y="63" width="94" height="84" rx="5" fill="#dcfce7" stroke="#86efac" stroke-width="2"/>
            <ellipse cx="95" cy="105" rx="40" ry="35" fill="#a5b4fc" opacity="0.7"/>
          </g>
          <text x="95" y="175" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Vacuole full</text>
          <text x="95" y="190" fill="#22c55e" font-size="9" text-anchor="middle">Cell firm ✓</text>
          <!-- Water arrows in -->
          <g class="anim-flow-right">
            <path d="M5,80 L28,90" stroke="#3b82f6" stroke-width="3" marker-end="url(#blueOsm)"/>
            <path d="M5,130 L28,120" stroke="#3b82f6" stroke-width="3" marker-end="url(#blueOsm)"/>
          </g>
        </g>
        
        <!-- Normal Cell -->
        <g>
          <text x="275" y="20" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">NORMAL</text>
          <text x="275" y="35" fill="currentColor" font-size="9" text-anchor="middle">(isotonic solution)</text>
          <rect x="215" y="50" width="120" height="110" rx="8" fill="none" stroke="#f59e0b" stroke-width="5"/>
          <rect x="228" y="63" width="94" height="84" rx="5" fill="#fef9c3" stroke="#fde047" stroke-width="2"/>
          <ellipse cx="275" cy="105" rx="35" ry="30" fill="#a5b4fc" opacity="0.6"/>
          <text x="275" y="175" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">No net movement</text>
          <text x="275" y="190" fill="#f59e0b" font-size="9" text-anchor="middle">Balanced</text>
        </g>
        
        <!-- Plasmolysed Cell -->
        <g>
          <text x="455" y="20" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">PLASMOLYSED</text>
          <text x="455" y="35" fill="currentColor" font-size="9" text-anchor="middle">(in concentrated solution)</text>
          <rect x="395" y="50" width="120" height="110" rx="8" fill="none" stroke="#ef4444" stroke-width="5"/>
          <g class="anim-pulse">
            <ellipse cx="455" cy="105" rx="40" ry="35" fill="#fee2e2" stroke="#fca5a5" stroke-width="2"/>
            <ellipse cx="455" cy="105" rx="18" ry="15" fill="#a5b4fc" opacity="0.5"/>
          </g>
          <text x="455" y="175" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Cytoplasm shrinks</text>
          <text x="455" y="190" fill="#ef4444" font-size="9" text-anchor="middle">Cell wilts ✗</text>
          <!-- Water arrows out -->
          <g class="anim-flow-right">
            <path d="M500,90 L530,80" stroke="#ef4444" stroke-width="3" marker-end="url(#redOsm)"/>
            <path d="M500,120 L530,130" stroke="#ef4444" stroke-width="3" marker-end="url(#redOsm)"/>
          </g>
        </g>
        
        <defs>
          <marker id="blueOsm" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#3b82f6"/>
          </marker>
          <marker id="redOsm" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <polygon points="0 0, 8 4, 0 8" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Isotonic Solution</h4>
    <ul>
      <li><strong>No net osmosis</strong> — water in = water out</li>
      <li>Mass of tissue remains the same</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: In osmosis, water always moves from where there's <strong>MORE water</strong> (dilute) to where there's <strong>LESS water</strong> (concentrated). It's still "high to low" — just for water!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "osmosis", "water", "dilute", "concentrated", "partially permeable membrane",
              "turgid", "plasmolysis", "hypotonic", "hypertonic", "isotonic",
              "vacuole", "cell wall", "turgor pressure"
            ],
            practice_items: [
              {
                id: "bio-osm-p1",
                prompt_template: "Define osmosis and explain why a partially permeable membrane is necessary.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["diffusion", "water", "dilute", "concentrated", "partially permeable", "solute"]
              },
              {
                id: "bio-osm-p2",
                prompt_template: "Explain what happens to a plant cell when placed in a concentrated solution.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["osmosis", "water leaves", "concentrated", "plasmolysis", "cytoplasm", "shrinks", "vacuole"]
              },
              {
                id: "bio-osm-p3",
                prompt_template: "Explain how turgid cells help support a plant.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["turgid", "water", "vacuole", "pressure", "cell wall", "rigid", "support"]
              }
            ]
          },
          {
            id: "b1-2-3-active-transport",
            title: "B1.2.3 — Active Transport",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Active Transport — Moving Against the Gradient</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Describe active transport and why it is necessary. Understand the role of carrier proteins and ATP.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What is Active Transport?</h4>
    <p>Active transport moves substances from a <strong>more dilute solution</strong> to a <strong>more concentrated solution</strong> (against a concentration gradient) using <strong>energy from respiration</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why is Active Transport Necessary?</h4>
    <ul>
      <li>Many essential ions/minerals are present in <strong>very low concentrations</strong> in the environment</li>
      <li><strong>Diffusion cannot</strong> move substances from low → high concentration</li>
      <li>ATP energy changes the shape of <strong>membrane proteins</strong> to pump molecules across</li>
    </ul>
  </div>

  <div class="method-step">
    <h5>⚙️ Mechanism of Active Transport</h5>
    <ol>
      <li>Substance <strong>binds to a carrier protein</strong> in the membrane</li>
      <li><strong>ATP from mitochondria</strong> is used</li>
      <li>Protein <strong>changes shape</strong> and pushes substance against the gradient</li>
      <li>Carrier <strong>resets</strong> using more ATP</li>
    </ol>
  </div>

  <!-- Active Transport Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Active Transport Mechanism (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="260" viewBox="0 0 500 260">
        <!-- Cell membrane -->
        <rect x="25" y="100" width="450" height="50" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
        <text x="250" y="130" fill="#92400e" font-size="10" text-anchor="middle" font-weight="bold">Cell Membrane</text>
        
        <!-- Labels -->
        <text x="250" y="30" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">OUTSIDE CELL</text>
        <text x="250" y="48" fill="#ef4444" font-size="10" text-anchor="middle">(LOW concentration)</text>
        <text x="250" y="195" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">INSIDE CELL</text>
        <text x="250" y="213" fill="#22c55e" font-size="10" text-anchor="middle">(HIGH concentration)</text>
        
        <!-- Low concentration particles (outside) -->
        <circle cx="65" cy="70" r="10" fill="#3b82f6"/>
        <circle cx="420" cy="75" r="10" fill="#3b82f6"/>
        
        <!-- High concentration particles (inside) -->
        <g class="anim-vibrate-slow">
          <circle cx="75" cy="175" r="10" fill="#3b82f6"/>
          <circle cx="140" cy="180" r="10" fill="#3b82f6"/>
          <circle cx="210" cy="170" r="10" fill="#3b82f6"/>
          <circle cx="280" cy="180" r="10" fill="#3b82f6"/>
          <circle cx="350" cy="175" r="10" fill="#3b82f6"/>
          <circle cx="420" cy="178" r="10" fill="#3b82f6"/>
          <circle cx="110" cy="220" r="10" fill="#3b82f6"/>
          <circle cx="245" cy="225" r="10" fill="#3b82f6"/>
          <circle cx="380" cy="222" r="10" fill="#3b82f6"/>
        </g>
        
        <!-- Carrier protein 1 (binding) -->
        <g>
          <rect x="80" y="95" width="55" height="60" rx="12" fill="#8b5cf6"/>
          <text x="107" y="130" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Carrier</text>
          <circle cx="107" cy="82" r="10" fill="#3b82f6"/>
        </g>
        <text x="107" y="245" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">1. Binds</text>
        
        <!-- Carrier protein 2 (ATP) -->
        <g>
          <rect x="195" y="95" width="55" height="60" rx="12" fill="#a855f7"/>
          <g class="anim-pulse-fast">
            <circle cx="188" cy="125" r="15" fill="#fbbf24"/>
            <text x="188" y="130" fill="#92400e" font-size="9" text-anchor="middle" font-weight="bold">ATP</text>
          </g>
          <circle cx="222" cy="105" r="10" fill="#3b82f6"/>
        </g>
        <text x="222" y="245" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">2. ATP used</text>
        
        <!-- Carrier protein 3 (shape change) -->
        <g class="anim-stretch">
          <rect x="305" y="90" width="55" height="70" rx="12" fill="#c084fc"/>
          <circle cx="332" cy="165" r="10" fill="#3b82f6"/>
        </g>
        <text x="332" y="245" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">3. Shape changes</text>
        
        <!-- Carrier protein 4 (releases) -->
        <g>
          <rect x="420" y="95" width="55" height="60" rx="12" fill="#8b5cf6"/>
          <g class="anim-flow-down">
            <circle cx="447" cy="165" r="10" fill="#3b82f6"/>
          </g>
        </g>
        <text x="447" y="245" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">4. Releases</text>
        
        <!-- Arrow showing direction -->
        <g class="anim-pulse">
          <path d="M50,65 L50,160" stroke="#ef4444" stroke-width="4" marker-end="url(#activeArr)"/>
        </g>
        <text x="35" y="115" fill="#ef4444" font-size="9" transform="rotate(-90 35,115)" text-anchor="middle">AGAINST gradient</text>
        
        <defs>
          <marker id="activeArr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <div class="info-grid">
    <div class="example-block">
      <h4>🌱 Active Transport in Plants</h4>
      <p>Mineral ions (e.g., <strong>nitrate</strong> for amino acids, <strong>magnesium</strong> for chlorophyll) are often at <strong>lower concentration in soil</strong> → must enter root hair cells by active transport.</p>
    </div>
    <div class="example-block">
      <h4>🏃 Active Transport in Animals</h4>
      <p>In the small intestine, when glucose concentration in the gut becomes <strong>lower than in blood</strong>, active transport ensures <strong>all glucose is absorbed</strong> — preventing waste of energy-rich molecules.</p>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always mention: <strong>carrier proteins</strong> + <strong>energy from respiration (ATP)</strong> when describing active transport!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "active transport", "carrier protein", "ATP", "respiration", "energy",
              "against gradient", "low to high", "mineral ions", "glucose",
              "root hair", "small intestine"
            ],
            practice_items: [
              {
                id: "bio-active-p1",
                prompt_template: "Explain the difference between diffusion and active transport.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["diffusion", "high to low", "passive", "no energy", "active transport", "low to high", "energy", "ATP", "carrier protein"]
              },
              {
                id: "bio-active-p2",
                prompt_template: "Describe the mechanism of active transport, including the role of carrier proteins.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["carrier protein", "binds", "ATP", "energy", "shape change", "against gradient"]
              },
              {
                id: "bio-active-p3",
                prompt_template: "Explain why plants need active transport to absorb mineral ions from the soil.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["mineral ions", "lower concentration", "soil", "against gradient", "energy", "root hair"]
              }
            ]
          },
          {
            id: "b1-2-4-exchange-surfaces",
            title: "B1.2.4 — Exchange Surfaces",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Surface Area : Volume Ratio & Exchange Surfaces</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Explain the need for exchange surfaces in multicellular organisms. Describe adaptations of exchange surfaces.</p>
  </div>

  <div class="key-facts-block">
    <h4>🦠 Single-Celled Organisms</h4>
    <ul>
      <li><strong>Very large SA:V ratio</strong></li>
      <li>All nutrients/waste diffuse directly through the membrane</li>
      <li>Efficient enough because cell volume is small</li>
      <li><strong>No need</strong> for specialised organs or transport systems</li>
      <li>Example: amoeba relies fully on diffusion for oxygen uptake</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧍 Why Multicellular Organisms Need Special Exchange Surfaces</h4>
    <p>As organisms increase in size:</p>
    <ul>
      <li><strong>Volume increases faster than surface area</strong></li>
      <li>Inner cells cannot receive substances quickly enough by diffusion alone</li>
      <li>Diffusion distances become <strong>too long</strong></li>
      <li>Metabolic demand increases (more oxygen, more glucose needed)</li>
    </ul>
    <p>Therefore, large organisms evolved: <strong>lungs, gills, roots, leaves, villi, circulatory systems</strong></p>
  </div>

  <div class="table-block">
    <h4>⭐ Features of an Efficient Exchange Surface</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Why it Improves Exchange</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Large surface area</strong></td>
          <td>More molecules can diffuse at once</td>
        </tr>
        <tr>
          <td><strong>Thin barrier</strong></td>
          <td>Short diffusion distance → faster rate</td>
        </tr>
        <tr>
          <td><strong>Good blood supply</strong></td>
          <td>Constantly removes substances → keeps gradient steep</td>
        </tr>
        <tr>
          <td><strong>Ventilation</strong></td>
          <td>Refreshes air → maintains gradient for gases</td>
        </tr>
        <tr>
          <td><strong>Moist surface</strong></td>
          <td>Gases dissolve → diffuse faster</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Alveoli Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>💨 Alveoli (Lungs) — Gas Exchange</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="280" viewBox="0 0 450 280">
        <!-- Single alveolus -->
        <g class="anim-pulse">
          <circle cx="225" cy="140" r="100" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
          <!-- Thin wall indication -->
          <circle cx="225" cy="140" r="95" fill="none" stroke="#93c5fd" stroke-width="1" stroke-dasharray="4,2"/>
        </g>
        
        <!-- Air space label -->
        <text x="225" y="130" fill="#1d4ed8" font-size="11" text-anchor="middle" font-weight="bold">AIR</text>
        <text x="225" y="145" fill="#1d4ed8" font-size="9" text-anchor="middle">(in alveolus)</text>
        
        <!-- Capillary wrapping around -->
        <g class="anim-pulse-fast">
          <path d="M100,100 Q90,140 100,180 Q110,210 140,220 Q180,235 225,240 Q270,235 310,220 Q340,210 350,180 Q360,140 350,100" 
                fill="none" stroke="#ef4444" stroke-width="12" opacity="0.8"/>
        </g>
        
        <!-- Blood cells in capillary -->
        <g class="anim-flow-right">
          <ellipse cx="110" cy="150" rx="8" ry="6" fill="#dc2626"/>
          <ellipse cx="160" cy="225" rx="8" ry="6" fill="#dc2626"/>
          <ellipse cx="290" cy="230" rx="8" ry="6" fill="#dc2626"/>
          <ellipse cx="345" cy="140" rx="8" ry="6" fill="#dc2626"/>
        </g>
        
        <!-- O2 arrows (into blood) -->
        <g class="anim-flow-right">
          <path d="M185,110 L155,95" stroke="#22c55e" stroke-width="3" marker-end="url(#o2Arr)"/>
          <path d="M180,170 L140,190" stroke="#22c55e" stroke-width="3" marker-end="url(#o2Arr)"/>
        </g>
        <circle cx="195" cy="105" r="6" fill="#22c55e"/>
        <text x="195" y="108" fill="white" font-size="7" text-anchor="middle">O₂</text>
        <circle cx="190" cy="165" r="6" fill="#22c55e"/>
        
        <!-- CO2 arrows (out of blood) -->
        <g class="anim-flow-left">
          <path d="M295,95 L265,110" stroke="#8b5cf6" stroke-width="3" marker-end="url(#co2Arr)"/>
          <path d="M310,190 L270,170" stroke="#8b5cf6" stroke-width="3" marker-end="url(#co2Arr)"/>
        </g>
        <circle cx="305" cy="95" r="6" fill="#8b5cf6"/>
        <text x="305" y="98" fill="white" font-size="6" text-anchor="middle">CO₂</text>
        <circle cx="315" cy="185" r="6" fill="#8b5cf6"/>
        
        <!-- Labels -->
        <text x="85" y="140" fill="#ef4444" font-size="10" font-weight="bold">Capillary</text>
        <text x="85" y="155" fill="#ef4444" font-size="9">(blood)</text>
        
        <!-- Feature annotations -->
        <text x="225" y="270" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">✓ Large SA (millions of alveoli)  ✓ 1 cell thick  ✓ Dense capillaries  ✓ Moist  ✓ Ventilated</text>
        
        <defs>
          <marker id="o2Arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e"/>
          </marker>
          <marker id="co2Arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#8b5cf6"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">O₂ diffuses into blood • CO₂ diffuses out • Short diffusion distance + steep gradient</p>
  </div>

  <!-- Small Intestine Villi Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🍴 Villi (Small Intestine) — Nutrient Absorption</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="250" viewBox="0 0 450 250">
        <!-- Intestine wall base -->
        <rect x="25" y="180" width="400" height="40" fill="#fde68a" stroke="#f59e0b" stroke-width="3"/>
        
        <!-- Villi (finger-like projections) -->
        <g class="anim-oscillate-y">
          <path d="M70,180 Q70,80 95,55 Q120,80 120,180" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
          <!-- Capillary network inside -->
          <path d="M82,170 L82,75 Q95,60 108,75 L108,170" fill="none" stroke="#ef4444" stroke-width="6" opacity="0.7"/>
          <!-- Lacteal (green) -->
          <rect x="92" y="75" width="6" height="90" fill="#86efac" rx="3"/>
          <!-- Microvilli (brush border) -->
          <g class="anim-vibrate-slow">
            <line x1="75" y1="55" x2="75" y2="45" stroke="#f59e0b" stroke-width="2"/>
            <line x1="85" y1="50" x2="85" y2="40" stroke="#f59e0b" stroke-width="2"/>
            <line x1="95" y1="48" x2="95" y2="38" stroke="#f59e0b" stroke-width="2"/>
            <line x1="105" y1="50" x2="105" y2="40" stroke="#f59e0b" stroke-width="2"/>
            <line x1="115" y1="55" x2="115" y2="45" stroke="#f59e0b" stroke-width="2"/>
          </g>
        </g>
        
        <g class="anim-oscillate-y" style="animation-delay: 0.25s;">
          <path d="M175,180 Q175,80 200,55 Q225,80 225,180" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
          <path d="M187,170 L187,75 Q200,60 213,75 L213,170" fill="none" stroke="#ef4444" stroke-width="6" opacity="0.7"/>
          <rect x="197" y="75" width="6" height="90" fill="#86efac" rx="3"/>
        </g>
        
        <g class="anim-oscillate-y" style="animation-delay: 0.5s;">
          <path d="M280,180 Q280,80 305,55 Q330,80 330,180" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
          <path d="M292,170 L292,75 Q305,60 318,75 L318,170" fill="none" stroke="#ef4444" stroke-width="6" opacity="0.7"/>
          <rect x="302" y="75" width="6" height="90" fill="#86efac" rx="3"/>
        </g>
        
        <g class="anim-oscillate-y" style="animation-delay: 0.75s;">
          <path d="M380,180 Q380,80 405,55 Q430,80 430,180" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
          <path d="M392,170 L392,75 Q405,60 418,75 L418,170" fill="none" stroke="#ef4444" stroke-width="6" opacity="0.7"/>
          <rect x="402" y="75" width="6" height="90" fill="#86efac" rx="3"/>
        </g>
        
        <!-- Nutrient absorption arrows -->
        <g class="anim-flow-down">
          <circle cx="55" cy="35" r="5" fill="#fbbf24"/>
          <circle cx="160" cy="30" r="5" fill="#fbbf24"/>
          <circle cx="265" cy="35" r="5" fill="#fbbf24"/>
          <circle cx="365" cy="30" r="5" fill="#fbbf24"/>
        </g>
        
        <!-- Labels -->
        <text x="55" y="20" fill="#fbbf24" font-size="9" font-weight="bold">Nutrients</text>
        <text x="380" y="105" fill="#ef4444" font-size="9" font-weight="bold">Capillary</text>
        <text x="380" y="145" fill="#86efac" font-size="9" font-weight="bold">Lacteal</text>
        <text x="95" y="28" fill="#f59e0b" font-size="8">Microvilli</text>
        
        <!-- Features -->
        <text x="225" y="240" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">✓ Huge SA (villi + microvilli)  ✓ 1 cell thick  ✓ Dense capillaries  ✓ Lacteals for fats</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>📊 Comparing Transport Methods</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Diffusion</th>
          <th>Osmosis</th>
          <th>Active Transport</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Moves...</strong></td>
          <td>Any particles</td>
          <td>Water only</td>
          <td>Ions/molecules</td>
        </tr>
        <tr>
          <td><strong>Direction</strong></td>
          <td>High → Low</td>
          <td>Dilute → Concentrated</td>
          <td>Low → High</td>
        </tr>
        <tr>
          <td><strong>Gradient</strong></td>
          <td>Down</td>
          <td>Down (for water)</td>
          <td>Against</td>
        </tr>
        <tr>
          <td><strong>Energy required</strong></td>
          <td>❌ No</td>
          <td>❌ No</td>
          <td>✅ Yes (ATP)</td>
        </tr>
        <tr>
          <td><strong>Membrane needed?</strong></td>
          <td>Not always</td>
          <td>Partially permeable</td>
          <td>Yes (carrier proteins)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Examiners love when you mention <strong>"steep concentration gradient"</strong> + <strong>"short diffusion distance"</strong> together when explaining efficient exchange!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "surface area", "volume", "ratio", "exchange surface", "diffusion distance",
              "alveoli", "villi", "microvilli", "capillary", "ventilation",
              "thin", "moist", "gradient", "blood supply"
            ],
            practice_items: [
              {
                id: "bio-exchange-p1",
                prompt_template: "Explain why large multicellular organisms need specialised exchange surfaces.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["surface area", "volume", "ratio", "diffusion", "distance", "metabolic demand"]
              },
              {
                id: "bio-exchange-p2",
                prompt_template: "Describe four features of the alveoli that make them efficient for gas exchange.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["surface area", "thin", "one cell", "blood supply", "moist", "ventilated"]
              },
              {
                id: "bio-exchange-p3",
                prompt_template: "Explain how villi are adapted for the efficient absorption of nutrients.",
                marks: 6,
                type: "short-answer",
                difficulty: "hard",
                randomise: true,
                expected_keywords: ["surface area", "microvilli", "thin", "capillary", "blood supply", "lacteal", "diffusion", "active transport"]
              }
            ]
          }
        ]
      },
      // ========================================
      // MODULE 3: CELL DIVISION
      // ========================================
      {
        id: "cell-division-module",
        title: "Module 3: Cell Division",
        status: "ready",
        subsections: [
          {
            id: "4-1-2-1-chromosomes",
            title: "4.1.2.1 — Chromosomes",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Chromosomes & The Cell Cycle</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Structure of chromosomes, genome organisation, chromosome number, DNA replication before division.</p>
  </div>

  <div class="definition-block">
    <h4>🧬 What are Chromosomes?</h4>
    <ul>
      <li>The nucleus of a cell contains <strong>chromosomes</strong>, which are long coiled molecules of <strong>DNA</strong>.</li>
      <li>DNA carries <strong>genes</strong>, each controlling the production of a specific protein.</li>
      <li>Human body cells contain <strong>46 chromosomes</strong>, arranged in <strong>23 pairs</strong>.</li>
      <li>Each chromosome pair consists of: one from <strong>mother</strong>, one from <strong>father</strong>.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why Chromosomes are Paired</h4>
    <p>Chromosome pairing ensures that organisms inherit correct sets of genes for development and survival.</p>
  </div>

  <!-- Chromosome Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧬 Chromosome Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="240" viewBox="0 0 320 240">
        <defs>
          <radialGradient id="chromGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.3"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0"/>
          </radialGradient>
          <linearGradient id="dnaGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3b82f6"/>
            <stop offset="50%" style="stop-color:#8b5cf6"/>
            <stop offset="100%" style="stop-color:#ec4899"/>
          </linearGradient>
        </defs>
        
        <circle cx="160" cy="120" r="90" fill="url(#chromGlow2)"/>
        
        <!-- Sister Chromatid 1 (left arm) -->
        <g class="anim-pulse">
          <path d="M115,35 Q90,60 95,120 Q90,180 115,205" 
                fill="none" stroke="url(#dnaGrad2)" stroke-width="15" stroke-linecap="round"/>
        </g>
        
        <!-- Sister Chromatid 2 (right arm) -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <path d="M205,35 Q230,60 225,120 Q230,180 205,205" 
                fill="none" stroke="url(#dnaGrad2)" stroke-width="15" stroke-linecap="round"/>
        </g>
        
        <!-- Centromere -->
        <g class="anim-pulse-fast">
          <ellipse cx="160" cy="120" rx="25" ry="10" fill="#f59e0b" opacity="0.9"/>
          <ellipse cx="160" cy="120" rx="15" ry="6" fill="#fbbf24"/>
        </g>
        
        <!-- Labels -->
        <text x="55" y="120" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Sister</text>
        <text x="55" y="135" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Chromatid</text>
        <text x="265" y="120" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Sister</text>
        <text x="265" y="135" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Chromatid</text>
        <text x="160" y="150" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">Centromere</text>
        <text x="160" y="230" fill="currentColor" font-size="10" text-anchor="middle">X-shaped chromosome after DNA replication</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Two identical chromatids joined at the centromere • DNA coiled around proteins</p>
  </div>

  <h3 class="subsection-subheading">The Cell Cycle</h3>

  <div class="definition-block">
    <h4>🔁 What is the Cell Cycle?</h4>
    <p>The cell cycle produces <strong>two genetically identical daughter cells</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Three Main Stages</h4>
    <ol>
      <li><strong>Growth & DNA Replication</strong> — The cell grows, produces more organelles, and chromosomes are replicated (forming two identical chromatids joined together).</li>
      <li><strong>Mitosis (nuclear division)</strong> — Chromosomes become visible as X-shaped structures. The nucleus divides, separating chromatids into two sets.</li>
      <li><strong>Cytokinesis</strong> — The cell membrane pinches inward. The cytoplasm divides. Two genetically identical daughter cells form.</li>
    </ol>
  </div>

  <!-- Cell Cycle Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔄 The Cell Cycle (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="340" height="300" viewBox="0 0 340 300">
        <!-- Growth phase (largest segment) -->
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <path d="M170,40 A110,110 0 0,1 273,190" fill="none" stroke="#22c55e" stroke-width="28" stroke-linecap="round" opacity="0.85"/>
        </g>
        <text x="255" y="100" fill="#22c55e" font-size="11" font-weight="bold">Growth</text>
        <text x="255" y="115" fill="#22c55e" font-size="9">(Interphase)</text>
        
        <!-- DNA Synthesis -->
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <path d="M273,190 A110,110 0 0,1 170,260" fill="none" stroke="#3b82f6" stroke-width="28" stroke-linecap="round" opacity="0.85"/>
        </g>
        <text x="250" y="235" fill="#3b82f6" font-size="11" font-weight="bold">DNA</text>
        <text x="250" y="250" fill="#3b82f6" font-size="9">Synthesis</text>
        
        <!-- Mitosis (smallest segment) -->
        <g class="anim-pulse" style="animation-delay: 0.8s;">
          <path d="M170,260 A110,110 0 0,1 67,190" fill="none" stroke="#ef4444" stroke-width="28" stroke-linecap="round" opacity="0.85"/>
        </g>
        <text x="70" y="235" fill="#ef4444" font-size="11" font-weight="bold">Mitosis</text>
        
        <!-- Gap back to growth -->
        <g class="anim-pulse">
          <path d="M67,190 A110,110 0 0,1 170,40" fill="none" stroke="#f59e0b" stroke-width="28" stroke-linecap="round" opacity="0.85"/>
        </g>
        <text x="55" y="100" fill="#f59e0b" font-size="11" font-weight="bold">Gap</text>
        
        <!-- Center label -->
        <circle cx="170" cy="150" r="50" fill="hsl(var(--card))" stroke="currentColor" stroke-width="2"/>
        <text x="170" y="145" fill="currentColor" font-size="13" text-anchor="middle" font-weight="bold">Cell</text>
        <text x="170" y="162" fill="currentColor" font-size="13" text-anchor="middle" font-weight="bold">Cycle</text>
        
        <!-- Animated arrow showing cycle direction -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 170px 150px;">
          <circle cx="170" cy="40" r="10" fill="#8b5cf6"/>
          <polygon points="170,28 165,42 175,42" fill="#8b5cf6"/>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Most time is spent in Growth phase • DNA copied during Synthesis • Division during Mitosis</p>
  </div>

  <div class="key-facts-block">
    <h4>⭐ Why the Cell Cycle is Vital</h4>
    <ul>
      <li>Allows <strong>growth</strong> of the organism</li>
      <li><strong>Replaces</strong> damaged or dead cells</li>
      <li>Essential for <strong>embryonic development</strong></li>
      <li>Enables <strong>asexual reproduction</strong> in certain organisms</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Cells need accurate DNA copying and division to prevent genetic disorders or malfunction.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "chromosome", "DNA", "gene", "nucleus", "chromatid", "centromere",
              "cell cycle", "interphase", "growth", "DNA replication", "mitosis", "cytokinesis"
            ],
            practice_items: [
              {
                id: "bio-chrom-p1",
                prompt_template: "Describe the structure of a chromosome after DNA replication.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["chromatid", "identical", "centromere", "X-shape", "DNA"]
              },
              {
                id: "bio-chrom-p2",
                prompt_template: "Explain why human body cells have chromosomes arranged in pairs.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["mother", "father", "inherit", "genes", "23 pairs", "46"]
              }
            ]
          },
          {
            id: "4-1-2-2-mitosis",
            title: "4.1.2.2 — Mitosis",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Mitosis — Nuclear Division</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the stages of mitosis and its importance for growth, repair, and asexual reproduction.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What is Mitosis?</h4>
    <p>Mitosis is a type of cell division that produces <strong>two genetically identical daughter cells</strong>.</p>
    <p>This ensures each new cell contains the <strong>same number and type of chromosomes</strong> as the parent cell.</p>
  </div>

  <div class="method-step">
    <h5>🧩 Stages of Mitosis</h5>
    <ol>
      <li><strong>Chromosomes condense</strong> — DNA coils tightly and becomes visible as X-shaped structures.</li>
      <li><strong>Chromosomes line up in the centre</strong> — Chromosomes arrange across the middle of the cell. Spindle fibres attach to chromatids.</li>
      <li><strong>Chromatids separate</strong> — Spindle fibres pull chromatids apart toward opposite poles. Ensures each side gets an identical set.</li>
      <li><strong>New nuclei form</strong> — Nuclear membranes reform around each set of chromosomes.</li>
      <li><strong>Cell divides (cytokinesis)</strong> — The cytoplasm splits. Two identical daughter cells form.</li>
    </ol>
  </div>

  <!-- Mitosis Stages Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Stages of Mitosis (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="550" height="220" viewBox="0 0 550 220">
        <!-- Parent Cell -->
        <g>
          <text x="65" y="25" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Parent Cell</text>
          <circle cx="65" cy="105" r="50" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
          <g class="anim-pulse">
            <text x="45" y="95" fill="#8b5cf6" font-size="28" font-weight="bold">✕</text>
            <text x="65" y="120" fill="#8b5cf6" font-size="28" font-weight="bold">✕</text>
          </g>
          <text x="65" y="175" fill="currentColor" font-size="9" text-anchor="middle">46 chromosomes</text>
        </g>
        
        <!-- Arrow -->
        <path d="M125,105 L150,105" stroke="currentColor" stroke-width="3" marker-end="url(#mitArr2)"/>
        
        <!-- Chromosomes line up -->
        <g>
          <text x="200" y="25" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Line Up</text>
          <circle cx="200" cy="105" r="50" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
          <g class="anim-oscillate-y">
            <line x1="200" y1="65" x2="200" y2="145" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/>
            <text x="180" y="95" fill="#8b5cf6" font-size="22" font-weight="bold">✕</text>
            <text x="195" y="120" fill="#8b5cf6" font-size="22" font-weight="bold">✕</text>
          </g>
          <text x="200" y="175" fill="currentColor" font-size="9" text-anchor="middle">Middle of cell</text>
        </g>
        
        <!-- Arrow -->
        <path d="M260,105 L285,105" stroke="currentColor" stroke-width="3" marker-end="url(#mitArr2)"/>
        
        <!-- Chromatids separate -->
        <g>
          <text x="340" y="25" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Separate</text>
          <ellipse cx="340" cy="105" rx="60" ry="50" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
          <g class="anim-stretch">
            <text x="295" y="100" fill="#8b5cf6" font-size="18">|</text>
            <text x="305" y="115" fill="#8b5cf6" font-size="18">|</text>
            <text x="365" y="100" fill="#8b5cf6" font-size="18">|</text>
            <text x="375" y="115" fill="#8b5cf6" font-size="18">|</text>
          </g>
          <text x="340" y="175" fill="currentColor" font-size="9" text-anchor="middle">Pulled apart</text>
        </g>
        
        <!-- Arrow -->
        <path d="M410,105 L435,105" stroke="currentColor" stroke-width="3" marker-end="url(#mitArr2)"/>
        
        <!-- Two Daughter Cells -->
        <g>
          <text x="490" y="25" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Two Cells</text>
          <g class="anim-pulse">
            <circle cx="470" cy="85" r="35" fill="#dcfce7" stroke="#22c55e" stroke-width="3"/>
            <text x="455" y="90" fill="#8b5cf6" font-size="16" font-weight="bold">✕✕</text>
          </g>
          <g class="anim-pulse" style="animation-delay: 0.3s;">
            <circle cx="510" cy="125" r="35" fill="#dcfce7" stroke="#22c55e" stroke-width="3"/>
            <text x="495" y="130" fill="#8b5cf6" font-size="16" font-weight="bold">✕✕</text>
          </g>
          <text x="490" y="180" fill="currentColor" font-size="9" text-anchor="middle">46 chromosomes each</text>
          <text x="490" y="195" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">IDENTICAL!</text>
        </g>
        
        <defs>
          <marker id="mitArr2" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
            <polygon points="0 0, 10 4, 0 8" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points About Mitosis</h4>
    <ul>
      <li>Produces <strong>2 daughter cells</strong></li>
      <li>Daughter cells are <strong>genetically identical</strong> to parent and each other</li>
      <li>Chromosome number stays the <strong>same</strong> (diploid → diploid)</li>
      <li>Used for <strong>growth</strong>, <strong>repair</strong>, and <strong>asexual reproduction</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Why Mitosis is Important</h4>
    <ul>
      <li><strong>Growth</strong> — More cells needed as an organism develops</li>
      <li><strong>Repair</strong> — Replace damaged or worn-out cells (skin, blood cells, digestive lining)</li>
      <li><strong>Asexual reproduction</strong> — Produce offspring identical to parent (e.g., bacteria, strawberry runners)</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🔍 Where Mitosis Occurs</h4>
    <ul>
      <li>In <strong>bone marrow</strong> → producing blood cells</li>
      <li>In <strong>skin</strong> → continuously generating new protective cells</li>
      <li>In <strong>digestive system lining</strong> → replacing cells damaged by enzymes</li>
      <li>In <strong>plant root & shoot tips</strong> → rapid growth</li>
      <li>During <strong>embryo development</strong> → rapid and repeated mitosis</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: Mitosis produces <strong>identical</strong> cells. Think "Mi-TWO-sis" = <strong>TWO</strong> identical cells!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "mitosis", "daughter cells", "identical", "diploid", "chromosomes",
              "growth", "repair", "asexual reproduction", "cytokinesis",
              "chromatids", "spindle", "separate"
            ],
            practice_items: [
              {
                id: "bio-mitosis-p1",
                prompt_template: "Describe the three main stages of the cell cycle.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["growth", "DNA synthesis", "replication", "mitosis", "division"]
              },
              {
                id: "bio-mitosis-p2",
                prompt_template: "Explain why mitosis is important for multicellular organisms.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["growth", "repair", "replace", "identical", "cells", "damaged"]
              },
              {
                id: "bio-mitosis-p3",
                prompt_template: "Describe what happens to the chromosomes during mitosis.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["line up", "middle", "separate", "chromatids", "opposite", "poles", "identical"]
              }
            ]
          },
          {
            id: "4-1-2-3-stem-cells",
            title: "4.1.2.3 — Stem Cells",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Human Stem Cells — Types, Uses, Risks, Ethics</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand what stem cells are, their types, and their potential therapeutic uses.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What are Stem Cells?</h4>
    <p>A stem cell is an <strong>undifferentiated cell</strong> that can divide to produce many more stem cells and can <strong>differentiate</strong> into other types of specialised cells.</p>
    <p>They are essential for growth, repair, and medical treatment.</p>
  </div>

  <!-- Stem Cell Differentiation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧬 Stem Cell Differentiation (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="260" viewBox="0 0 450 260">
        <!-- Stem cell -->
        <g class="anim-pulse">
          <circle cx="225" cy="55" r="42" fill="#c084fc" stroke="#7c3aed" stroke-width="4"/>
          <text x="225" y="50" fill="white" font-size="11" text-anchor="middle" font-weight="bold">STEM</text>
          <text x="225" y="65" fill="white" font-size="11" text-anchor="middle" font-weight="bold">CELL</text>
        </g>
        <text x="225" y="20" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Undifferentiated</text>
        
        <!-- Arrows branching out -->
        <g class="anim-draw">
          <path d="M185,95 Q100,140 75,185" fill="none" stroke="currentColor" stroke-width="3"/>
          <path d="M225,100 L225,185" fill="none" stroke="currentColor" stroke-width="3"/>
          <path d="M265,95 Q350,140 375,185" fill="none" stroke="currentColor" stroke-width="3"/>
        </g>
        
        <!-- Nerve cell -->
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <ellipse cx="75" cy="210" rx="35" ry="22" fill="#3b82f6"/>
          <line x1="40" y1="210" x2="15" y2="192" stroke="#3b82f6" stroke-width="3"/>
          <line x1="40" y1="210" x2="15" y2="228" stroke="#3b82f6" stroke-width="3"/>
          <line x1="110" y1="210" x2="150" y2="210" stroke="#3b82f6" stroke-width="4"/>
        </g>
        <text x="75" y="250" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Nerve cell</text>
        
        <!-- Muscle cell -->
        <g class="anim-pulse" style="animation-delay: 0.4s;">
          <rect x="190" y="195" width="70" height="35" rx="6" fill="#ef4444"/>
          <line x1="202" y1="205" x2="202" y2="220" stroke="#fca5a5" stroke-width="2"/>
          <line x1="215" y1="205" x2="215" y2="220" stroke="#fca5a5" stroke-width="2"/>
          <line x1="228" y1="205" x2="228" y2="220" stroke="#fca5a5" stroke-width="2"/>
          <line x1="241" y1="205" x2="241" y2="220" stroke="#fca5a5" stroke-width="2"/>
          <line x1="254" y1="205" x2="254" y2="220" stroke="#fca5a5" stroke-width="2"/>
        </g>
        <text x="225" y="250" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Muscle cell</text>
        
        <!-- Red blood cell -->
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <ellipse cx="375" cy="210" rx="28" ry="28" fill="#f87171"/>
          <ellipse cx="375" cy="210" rx="18" ry="10" fill="#fecaca"/>
        </g>
        <text x="375" y="250" fill="#f87171" font-size="10" text-anchor="middle" font-weight="bold">Red blood cell</text>
        
        <!-- Label -->
        <text x="225" y="155" fill="currentColor" font-size="10" text-anchor="middle" font-style="italic">Differentiation</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Stem cells can become many different types of specialised cells</p>
  </div>

  <div class="table-block">
    <h4>📊 Types of Human Stem Cells</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Source</th>
          <th>Potential</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Embryonic</strong></td>
          <td>Early embryo (blastocyst)</td>
          <td>Can differentiate into <strong>almost any</strong> cell type (totipotent/pluripotent). Easily grown in the lab.</td>
        </tr>
        <tr>
          <td><strong>Adult</strong></td>
          <td>Bone marrow, brain, liver, skin</td>
          <td><strong>Limited</strong> in the types they can form (multipotent). Mainly form blood cells and immune cells.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🩺 Medical Conditions Treated with Stem Cells</h4>
    <p>Stem cells may treat or potentially treat:</p>
    <ul>
      <li><strong>Leukaemia / blood cancers</strong> — bone marrow transplants</li>
      <li><strong>Type 1 diabetes</strong> — replacing insulin-producing cells</li>
      <li><strong>Spinal cord injuries</strong> — replacing damaged nerve tissue</li>
      <li><strong>Burns</strong> — skin grafts grown from stem cells</li>
      <li><strong>Heart damage</strong> — regenerating cardiac muscle</li>
      <li><strong>Macular degeneration</strong> — replacing retina cells</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧬 Therapeutic Cloning</h4>
    <p>A technique to create stem cells <strong>genetically identical</strong> to a patient.</p>
    <p><strong>Steps:</strong></p>
    <ol>
      <li>Remove nucleus from donor egg cell</li>
      <li>Insert nucleus from the patient's somatic cell</li>
      <li>Egg develops into an early embryo</li>
      <li>Stem cells taken from embryo</li>
      <li>Transplanted into patient</li>
    </ol>
    <p><strong>Advantages:</strong> No donor rejection • Can treat conditions requiring personalised cells</p>
  </div>

  <div class="info-grid">
    <div class="key-facts-block">
      <h4>✅ Arguments FOR Stem Cell Research</h4>
      <ul>
        <li>Could cure diseases with no current treatment</li>
        <li>Embryos used are from IVF clinics (would otherwise be discarded)</li>
        <li>Adult stem cells avoid many ethical concerns</li>
        <li>Potential to save many lives</li>
      </ul>
    </div>
    <div class="warning-block">
      <h4>❌ Arguments AGAINST Stem Cell Research</h4>
      <ul>
        <li>Embryos have potential for life — is it ethical to use them?</li>
        <li>Risk of tumours if cell division isn't controlled</li>
        <li>Risk of viral infection from donor cells</li>
        <li>Religious/moral objections to using embryos</li>
      </ul>
    </div>
  </div>

  <div class="warning-block">
    <h4>⚠️ Risks & Issues with Stem Cell Treatments</h4>
    <ul>
      <li>Cells may divide uncontrollably → <strong>tumours</strong></li>
      <li>Immune system may still <strong>reject</strong> if not perfectly matched</li>
      <li>Procedures are <strong>expensive</strong> and experimental</li>
      <li>Potential for <strong>infection</strong> during stem cell manipulation</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>In 6-mark questions about stem cells, always discuss <strong>both</strong> scientific benefits AND ethical concerns for a balanced answer.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Plant Stem Cells — Meristems & Uses</h3>

  <div class="definition-block">
    <h4>🌿 Plant Stem Cells (Meristems)</h4>
    <ul>
      <li>Found in <strong>root tips</strong>, <strong>shoot tips</strong>, and <strong>buds</strong></li>
      <li>Meristem cells can differentiate into <strong>any plant cell type</strong> throughout life</li>
      <li>Enable <strong>continuous growth</strong> and regeneration even in mature plants</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🌱 Uses of Plant Stem Cells</h4>
    <ul>
      <li><strong>Cloning plants genetically</strong> — Produces identical copies (clones). Useful for preserving desirable characteristics.</li>
      <li><strong>Saving endangered species</strong> — Rare plants can be cloned many times for conservation.</li>
      <li><strong>Crop production</strong> — Allows farmers to grow disease-resistant, high-yield, or drought-resistant strains quickly. Very efficient — thousands of clones from a single parent plant.</li>
      <li><strong>Producing disease-free plants</strong> — Meristem tissue often remains virus-free, so cloned plants are healthier.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Difference: Animal vs Plant Stem Cells</h4>
    <ul>
      <li>In animals, most cells lose the ability to differentiate at an early stage</li>
      <li>In plants, meristem cells remain capable of differentiating throughout the plant's life</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: [
              "stem cell", "differentiation", "undifferentiated", "specialised",
              "embryonic", "adult", "bone marrow", "totipotent", "pluripotent",
              "ethics", "therapeutic", "treatment", "disease", "meristem", "plant"
            ],
            practice_items: [
              {
                id: "bio-stem-p1",
                prompt_template: "Define the term 'stem cell' and explain what differentiation means.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["undifferentiated", "divide", "specialised", "differentiation"]
              },
              {
                id: "bio-stem-p2",
                prompt_template: "Compare embryonic stem cells and adult stem cells.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["embryonic", "any cell type", "totipotent", "adult", "limited", "bone marrow"]
              },
              {
                id: "bio-stem-p3",
                prompt_template: "Discuss the benefits and risks of using stem cells in medicine.",
                marks: 6,
                type: "short-answer",
                difficulty: "hard",
                randomise: true,
                expected_keywords: ["cure", "disease", "diabetes", "ethical", "embryo", "tumour", "infection", "controversy"]
              }
            ]
          }
        ]
      }
    ]
  }
];
