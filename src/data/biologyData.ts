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
  },
  // ========================================
  // CHAPTER 2: ORGANISATION
  // ========================================
  {
    id: "organisation",
    title: "Organisation",
    status: "ready",
    subsections: [],
    modules: [
      // ========================================
      // MODULE 1: DIGESTION AND ENZYMES
      // ========================================
      {
        id: "digestion-enzymes-module",
        title: "Module 1: Digestion and Enzymes",
        status: "ready",
        subsections: [
          {
            id: "b3-1-1-biological-molecules",
            title: "B3.1.1 — Biological Molecules & Why Digestion Is Necessary",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Biological Molecules & Why Digestion Is Necessary</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the structure of carbohydrates, proteins, and lipids, why large molecules must be digested, and how digestion links to metabolism.</p>
  </div>

  <div class="definition-block">
    <h4>🍞 Carbohydrates — Structure & Function</h4>
    <p>Carbohydrates are made from <strong>carbon, hydrogen, and oxygen</strong>. Their structure determines how easily they are digested.</p>
    
    <h5>1. Monosaccharides (simple sugars)</h5>
    <ul>
      <li>Single sugar molecules: <strong>glucose, fructose</strong></li>
      <li>Small, soluble → <strong>rapid absorption</strong></li>
      <li>Immediately available for respiration</li>
    </ul>
    
    <h5>2. Disaccharides</h5>
    <ul>
      <li>Two sugars joined: <strong>maltose, sucrose</strong></li>
      <li>Must be broken down by digestive enzymes into monosaccharides</li>
    </ul>
    
    <h5>3. Polysaccharides</h5>
    <ul>
      <li>Long chains of glucose units: <strong>starch, glycogen, cellulose</strong></li>
      <li><strong>Starch (plants)</strong>: energy storage; must be digested before absorption</li>
      <li><strong>Glycogen (animals)</strong>: stored in liver/muscle</li>
      <li><strong>Cellulose (plant cell walls)</strong>: not digested by human enzymes</li>
    </ul>
  </div>

  <!-- Carbohydrate Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Carbohydrate Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="280" viewBox="0 0 500 280">
        <defs>
          <linearGradient id="glucoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <!-- Title -->
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">From Simple to Complex Carbohydrates</text>
        
        <!-- Monosaccharide (single glucose) -->
        <g class="anim-pulse">
          <circle cx="70" cy="100" r="30" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="3"/>
          <text x="70" y="105" fill="#7c2d12" font-size="11" font-weight="bold" text-anchor="middle">Glucose</text>
        </g>
        <text x="70" y="150" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Monosaccharide</text>
        <text x="70" y="165" fill="currentColor" font-size="9" text-anchor="middle">(1 sugar unit)</text>
        
        <!-- Arrow -->
        <path d="M115,100 L155,100" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
        
        <!-- Disaccharide (two glucose) -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <circle cx="190" cy="100" r="25" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="3"/>
          <circle cx="240" cy="100" r="25" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="3"/>
          <line x1="215" y1="100" x2="215" y2="100" stroke="#dc2626" stroke-width="4"/>
          <rect x="210" y="95" width="10" height="10" fill="#dc2626" rx="2"/>
        </g>
        <text x="215" y="150" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Disaccharide</text>
        <text x="215" y="165" fill="currentColor" font-size="9" text-anchor="middle">(2 sugar units)</text>
        <text x="215" y="180" fill="#dc2626" font-size="8" text-anchor="middle">e.g., maltose, sucrose</text>
        
        <!-- Arrow -->
        <path d="M280,100 L320,100" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <!-- Polysaccharide (chain of glucose) -->
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <circle cx="350" cy="100" r="18" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="2"/>
          <circle cx="385" cy="100" r="18" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="2"/>
          <circle cx="420" cy="100" r="18" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="2"/>
          <circle cx="455" cy="100" r="18" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="2"/>
          <rect x="363" y="95" width="8" height="10" fill="#dc2626" rx="2"/>
          <rect x="398" y="95" width="8" height="10" fill="#dc2626" rx="2"/>
          <rect x="433" y="95" width="8" height="10" fill="#dc2626" rx="2"/>
          <text x="480" y="105" fill="currentColor" font-size="16">...</text>
        </g>
        <text x="415" y="150" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Polysaccharide</text>
        <text x="415" y="165" fill="currentColor" font-size="9" text-anchor="middle">(many sugar units)</text>
        <text x="415" y="180" fill="#dc2626" font-size="8" text-anchor="middle">e.g., starch, glycogen</text>
        
        <!-- Key -->
        <rect x="20" y="210" width="460" height="55" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <circle cx="50" cy="235" r="12" fill="url(#glucoseGrad)" stroke="#d97706" stroke-width="2"/>
        <text x="70" y="240" fill="currentColor" font-size="10">= Glucose molecule</text>
        <rect x="160" y="228" width="14" height="14" fill="#dc2626" rx="2"/>
        <text x="180" y="240" fill="currentColor" font-size="10">= Chemical bond</text>
        <text x="300" y="235" fill="currentColor" font-size="9" font-weight="bold">⚠️ Large molecules must be</text>
        <text x="300" y="250" fill="currentColor" font-size="9" font-weight="bold">broken down to be absorbed!</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Starch molecules are too large and insoluble to cross the intestinal wall</p>
  </div>

  <div class="key-facts-block">
    <h4>❓ Why Carbohydrates Must Be Digested</h4>
    <p>Starch molecules are:</p>
    <ul>
      <li><strong>Too large</strong> to pass through cell membranes</li>
      <li><strong>Insoluble</strong> in water</li>
      <li><strong>Unable to cross</strong> the intestinal wall</li>
    </ul>
    <p>Enzymes break: <strong>starch → maltose → glucose</strong>, which is small and absorbed into blood.</p>
  </div>

  <div class="definition-block">
    <h4>🍗 Proteins — Structure & Function</h4>
    <p>Proteins are made from <strong>long chains of amino acids</strong> folded into complex shapes.</p>
    
    <h5>Properties</h5>
    <ul>
      <li><strong>Shape determines function</strong> (enzyme, antibody, hormone)</li>
      <li><strong>Peptide bonds</strong> link amino acids</li>
      <li>Too large to be absorbed → must be broken into individual amino acids</li>
    </ul>
    
    <h5>Why Protein Digestion Matters</h5>
    <p>Amino acids are used to build:</p>
    <ul>
      <li>New enzymes</li>
      <li>Muscle fibres</li>
      <li>Antibodies</li>
      <li>Hormones</li>
      <li>Structural proteins (keratin, collagen)</li>
    </ul>
  </div>

  <!-- Protein Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Protein Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="220" viewBox="0 0 480 220">
        <defs>
          <linearGradient id="aminoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="aminoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f472b6;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="aminoGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#34d399;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <text x="240" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Protein: Chain of Amino Acids</text>
        
        <!-- Amino acid chain -->
        <g class="anim-pulse">
          <circle cx="50" cy="100" r="25" fill="url(#aminoGrad1)" stroke="#7c3aed" stroke-width="2"/>
          <text x="50" y="105" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Amino</text>
          <text x="50" y="115" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Acid 1</text>
        </g>
        
        <!-- Peptide bond -->
        <line x1="75" y1="100" x2="95" y2="100" stroke="#ef4444" stroke-width="4"/>
        <text x="85" y="125" fill="#ef4444" font-size="7" text-anchor="middle">peptide</text>
        <text x="85" y="135" fill="#ef4444" font-size="7" text-anchor="middle">bond</text>
        
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <circle cx="120" cy="100" r="25" fill="url(#aminoGrad2)" stroke="#db2777" stroke-width="2"/>
          <text x="120" y="105" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Amino</text>
          <text x="120" y="115" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Acid 2</text>
        </g>
        
        <line x1="145" y1="100" x2="165" y2="100" stroke="#ef4444" stroke-width="4"/>
        
        <g class="anim-pulse" style="animation-delay: 0.4s;">
          <circle cx="190" cy="100" r="25" fill="url(#aminoGrad3)" stroke="#059669" stroke-width="2"/>
          <text x="190" y="105" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Amino</text>
          <text x="190" y="115" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Acid 3</text>
        </g>
        
        <line x1="215" y1="100" x2="235" y2="100" stroke="#ef4444" stroke-width="4"/>
        
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <circle cx="260" cy="100" r="25" fill="url(#aminoGrad1)" stroke="#7c3aed" stroke-width="2"/>
          <text x="260" y="105" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Amino</text>
          <text x="260" y="115" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Acid 4</text>
        </g>
        
        <text x="295" y="105" fill="currentColor" font-size="20">...</text>
        
        <!-- Arrow to folded protein -->
        <path d="M320,100 L360,100" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="340" y="85" fill="currentColor" font-size="9" text-anchor="middle">folds into</text>
        
        <!-- Folded protein -->
        <g class="anim-pulse-fast">
          <path d="M400,60 Q420,40 440,60 Q470,80 450,110 Q440,140 410,140 Q370,130 380,100 Q375,70 400,60" 
                fill="none" stroke="#8b5cf6" stroke-width="4"/>
          <circle cx="400" cy="65" r="8" fill="url(#aminoGrad1)"/>
          <circle cx="440" cy="55" r="8" fill="url(#aminoGrad2)"/>
          <circle cx="455" cy="90" r="8" fill="url(#aminoGrad3)"/>
          <circle cx="440" cy="125" r="8" fill="url(#aminoGrad1)"/>
          <circle cx="400" cy="135" r="8" fill="url(#aminoGrad2)"/>
          <circle cx="375" cy="105" r="8" fill="url(#aminoGrad3)"/>
        </g>
        <text x="415" y="170" fill="currentColor" font-size="10" font-weight="bold" text-anchor="middle">Folded Protein</text>
        <text x="415" y="185" fill="currentColor" font-size="9" text-anchor="middle">(3D shape = function)</text>
        
        <!-- Note -->
        <text x="240" y="210" fill="#dc2626" font-size="10" font-weight="bold" text-anchor="middle">⚠️ Must be digested into individual amino acids for absorption</text>
      </svg>
    </div>
  </div>

  <div class="definition-block">
    <h4>🧈 Lipids — Structure & Function</h4>
    <p>Lipids are made of:</p>
    <ul>
      <li><strong>1 glycerol molecule</strong></li>
      <li><strong>3 fatty acids</strong></li>
    </ul>
    
    <h5>Properties</h5>
    <ul>
      <li><strong>Insoluble in water</strong></li>
      <li>Form <strong>cell membranes</strong></li>
      <li>Important <strong>energy stores</strong></li>
      <li>Provide <strong>insulation & protection</strong></li>
    </ul>
    
    <h5>Why Digestion Is Needed</h5>
    <p>Large lipid droplets must be broken into <strong>fatty acids + glycerol</strong>, which are absorbable.</p>
  </div>

  <!-- Lipid Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Lipid Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="200" viewBox="0 0 450 200">
        <defs>
          <linearGradient id="glycerolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="fattyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <text x="225" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Lipid Structure: Glycerol + 3 Fatty Acids</text>
        
        <!-- Glycerol backbone -->
        <g class="anim-pulse">
          <rect x="50" y="60" width="60" height="100" fill="url(#glycerolGrad)" stroke="#d97706" stroke-width="3" rx="5"/>
          <text x="80" y="100" fill="#7c2d12" font-size="10" font-weight="bold" text-anchor="middle">Glycerol</text>
          <text x="80" y="115" fill="#7c2d12" font-size="9" text-anchor="middle">(backbone)</text>
        </g>
        
        <!-- Fatty acid chains -->
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <rect x="115" y="65" width="150" height="20" fill="url(#fattyGrad)" stroke="#2563eb" stroke-width="2" rx="10"/>
          <text x="190" y="79" fill="white" font-size="9" font-weight="bold" text-anchor="middle">Fatty Acid 1</text>
        </g>
        
        <g class="anim-pulse" style="animation-delay: 0.4s;">
          <rect x="115" y="100" width="180" height="20" fill="url(#fattyGrad)" stroke="#2563eb" stroke-width="2" rx="10"/>
          <text x="205" y="114" fill="white" font-size="9" font-weight="bold" text-anchor="middle">Fatty Acid 2</text>
        </g>
        
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <rect x="115" y="135" width="160" height="20" fill="url(#fattyGrad)" stroke="#2563eb" stroke-width="2" rx="10"/>
          <text x="195" y="149" fill="white" font-size="9" font-weight="bold" text-anchor="middle">Fatty Acid 3</text>
        </g>
        
        <!-- Labels -->
        <text x="350" y="80" fill="currentColor" font-size="10">Long hydrocarbon</text>
        <text x="350" y="95" fill="currentColor" font-size="10">chains (insoluble)</text>
        
        <!-- Arrow to products -->
        <text x="80" y="180" fill="currentColor" font-size="9">Digestion →</text>
        <text x="170" y="180" fill="#22c55e" font-size="10" font-weight="bold">Glycerol + Fatty Acids</text>
        <text x="330" y="180" fill="#22c55e" font-size="9">(can be absorbed)</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🔥 Why Digestion Is Essential for Metabolism</h4>
    <p>Digestion provides the <strong>building blocks</strong> needed for metabolism:</p>
    <ul>
      <li><strong>Glucose → respiration → energy (ATP)</strong></li>
      <li><strong>Amino acids → protein synthesis</strong></li>
      <li><strong>Fatty acids/glycerol → cell membranes, hormones, storage fats</strong></li>
    </ul>
    <p><strong>Without digestion, complex molecules would pass through the body unused.</strong></p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always link molecule size to absorption: <strong>large + insoluble = cannot be absorbed</strong>. Digestion makes molecules <strong>small + soluble = can diffuse into blood</strong>.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "carbohydrate", "protein", "lipid", "monosaccharide", "glucose", "disaccharide",
              "polysaccharide", "starch", "glycogen", "amino acid", "peptide bond", "fatty acid",
              "glycerol", "digestion", "metabolism", "absorption"
            ],
            practice_items: [
              {
                id: "bio-digestion-p1",
                prompt_template: "Explain why large food molecules such as starch cannot be absorbed directly into the blood.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["too large", "insoluble", "cannot pass", "membrane", "digestion"]
              },
              {
                id: "bio-digestion-p2",
                prompt_template: "Describe the structure of a lipid molecule.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["glycerol", "fatty acids", "three"]
              }
            ]
          },
          {
            id: "b3-1-2-digestive-system",
            title: "B3.1.2 — The Digestive System",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">The Digestive System — A Fully Integrated Organ System</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the digestive system as an organ system, the roles of each organ, and the complete sequence of digestion from mouth to bloodstream.</p>
  </div>

  <div class="definition-block">
    <h4>🧩 What Makes the Digestive System an Organ System?</h4>
    <p>An <strong>organ system</strong> = organs working together for one overall function.</p>
    <p><strong>Digestive system overall functions:</strong></p>
    <ul>
      <li>Break down complex food molecules</li>
      <li>Convert them to small soluble molecules</li>
      <li>Absorb nutrients into blood</li>
      <li>Transport nutrients to cells</li>
      <li>Remove undigested material</li>
    </ul>
    <p>Each organ performs a <strong>specialised role</strong> and depends on the others.</p>
  </div>

  <!-- Human Digestive System Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Human Digestive System (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="580" viewBox="0 0 420 580">
        <defs>
          <linearGradient id="mouthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fca5a5;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#f87171;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fdba74;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#f97316;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="liverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="pancreasGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fcd34d;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="smallIntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f472b6;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="largeIntGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#86efac;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <!-- Background body outline -->
        <path d="M210,30 Q280,35 290,80 Q310,120 300,200 Q320,350 310,450 Q300,530 210,540 Q120,530 110,450 Q100,350 120,200 Q110,120 130,80 Q140,35 210,30" 
              fill="none" stroke="hsl(var(--muted-foreground))" stroke-width="1" opacity="0.3"/>
        
        <!-- 1. Mouth -->
        <g class="anim-pulse">
          <ellipse cx="210" cy="55" rx="35" ry="20" fill="url(#mouthGrad)" stroke="#ef4444" stroke-width="2"/>
          <text x="210" y="60" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Mouth</text>
        </g>
        <text x="300" y="45" fill="#ef4444" font-size="9" font-weight="bold">1. MOUTH</text>
        <text x="300" y="58" fill="currentColor" font-size="8">• Teeth: mechanical digestion</text>
        <text x="300" y="70" fill="currentColor" font-size="8">• Saliva + amylase: starch → maltose</text>
        
        <!-- Salivary glands -->
        <ellipse cx="155" cy="50" rx="15" ry="10" fill="#fecaca" stroke="#ef4444" stroke-width="1"/>
        <text x="120" y="55" fill="#ef4444" font-size="7">Salivary</text>
        <text x="120" y="65" fill="#ef4444" font-size="7">glands</text>
        
        <!-- 2. Oesophagus -->
        <rect x="200" y="75" width="20" height="60" fill="#fecdd3" stroke="#f87171" stroke-width="2" rx="5"/>
        <text x="133" y="105" fill="#f87171" font-size="9" font-weight="bold">2. OESOPHAGUS</text>
        <text x="108" y="118" fill="currentColor" font-size="8">Peristalsis pushes food</text>
        
        <!-- Peristalsis arrows -->
        <g class="anim-pulse-fast">
          <path d="M195,85 L185,90 L195,95" fill="none" stroke="#f87171" stroke-width="2"/>
          <path d="M195,100 L185,105 L195,110" fill="none" stroke="#f87171" stroke-width="2"/>
          <path d="M195,115 L185,120 L195,125" fill="none" stroke="#f87171" stroke-width="2"/>
        </g>
        
        <!-- 3. Stomach -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <path d="M170,140 Q130,180 150,230 Q180,270 230,260 Q270,250 260,200 Q250,150 220,135 Q200,130 170,140" 
                fill="url(#stomachGrad)" stroke="#ea580c" stroke-width="3"/>
          <text x="200" y="195" fill="white" font-size="11" font-weight="bold" text-anchor="middle">Stomach</text>
        </g>
        <text x="300" y="160" fill="#ea580c" font-size="9" font-weight="bold">3. STOMACH</text>
        <text x="300" y="173" fill="currentColor" font-size="8">• Churns food (mechanical)</text>
        <text x="300" y="186" fill="currentColor" font-size="8">• Protease (pepsin): proteins</text>
        <text x="300" y="199" fill="currentColor" font-size="8">• HCl: pH 2, kills bacteria</text>
        <text x="300" y="212" fill="currentColor" font-size="8">• Food → acidic chyme</text>
        
        <!-- 4. Liver -->
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <path d="M130,175 Q100,185 110,215 Q120,240 160,240 Q180,238 170,210 Q165,185 130,175" 
                fill="url(#liverGrad)" stroke="#7c3aed" stroke-width="2"/>
          <text x="140" y="210" fill="white" font-size="9" font-weight="bold" text-anchor="middle">Liver</text>
        </g>
        
        <!-- Gallbladder -->
        <ellipse cx="155" cy="248" rx="15" ry="12" fill="#c4b5fd" stroke="#7c3aed" stroke-width="2"/>
        <text x="115" y="248" fill="#7c3aed" font-size="7">Gall-</text>
        <text x="115" y="258" fill="#7c3aed" font-size="7">bladder</text>
        
        <text x="30" y="180" fill="#7c3aed" font-size="9" font-weight="bold">4. LIVER & BILE</text>
        <text x="30" y="193" fill="currentColor" font-size="8">• Makes bile</text>
        <text x="30" y="206" fill="currentColor" font-size="8">• Neutralises acid</text>
        <text x="30" y="219" fill="currentColor" font-size="8">• Emulsifies fats</text>
        
        <!-- 5. Pancreas -->
        <g class="anim-pulse" style="animation-delay: 0.7s;">
          <ellipse cx="230" cy="280" rx="45" ry="15" fill="url(#pancreasGrad)" stroke="#d97706" stroke-width="2"/>
          <text x="230" y="285" fill="white" font-size="9" font-weight="bold" text-anchor="middle">Pancreas</text>
        </g>
        <text x="300" y="265" fill="#d97706" font-size="9" font-weight="bold">5. PANCREAS</text>
        <text x="300" y="278" fill="currentColor" font-size="8">Produces enzymes:</text>
        <text x="300" y="291" fill="currentColor" font-size="8">• Amylase, Protease, Lipase</text>
        
        <!-- 6. Small Intestine -->
        <g class="anim-pulse" style="animation-delay: 0.9s;">
          <path d="M180,300 Q140,320 160,350 Q180,380 220,370 Q260,360 250,330 Q240,310 200,320 Q160,330 180,360 Q200,390 240,380 Q280,370 260,340 Q240,320 200,340 Q160,360 190,390 Q220,420 260,400" 
                fill="none" stroke="url(#smallIntGrad)" stroke-width="12" stroke-linecap="round"/>
        </g>
        <text x="30" y="330" fill="#ec4899" font-size="9" font-weight="bold">6. SMALL INTESTINE</text>
        <text x="30" y="343" fill="currentColor" font-size="8">• Main digestion site</text>
        <text x="30" y="356" fill="currentColor" font-size="8">• Villi absorb nutrients</text>
        <text x="30" y="369" fill="currentColor" font-size="8">• Large surface area</text>
        <text x="30" y="382" fill="currentColor" font-size="8">• Rich blood supply</text>
        
        <!-- 7. Large Intestine -->
        <g class="anim-pulse" style="animation-delay: 1.1s;">
          <path d="M130,420 L130,350 Q130,320 160,320 Q250,320 280,320 Q310,320 310,350 L310,480 Q310,510 280,510 L150,510 Q120,510 120,480 L130,420" 
                fill="none" stroke="url(#largeIntGrad)" stroke-width="18" stroke-linecap="round"/>
        </g>
        <text x="300" y="420" fill="#22c55e" font-size="9" font-weight="bold">7. LARGE INTESTINE</text>
        <text x="300" y="433" fill="currentColor" font-size="8">• Absorbs water</text>
        <text x="300" y="446" fill="currentColor" font-size="8">• Forms faeces</text>
        
        <!-- Rectum/Anus -->
        <rect x="200" y="520" width="30" height="30" fill="#bbf7d0" stroke="#22c55e" stroke-width="2" rx="5"/>
        <text x="215" y="540" fill="#166534" font-size="8" font-weight="bold" text-anchor="middle">Rectum</text>
        
        <!-- Flow arrows -->
        <g class="anim-pulse-fast">
          <circle cx="210" cy="85" r="4" fill="#ef4444"/>
          <circle cx="210" cy="140" r="4" fill="#f97316"/>
          <circle cx="200" cy="260" r="4" fill="#f97316"/>
          <circle cx="220" cy="305" r="4" fill="#ec4899"/>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Food travels through the digestive system in sequence from mouth to anus</p>
  </div>

  <div class="table-block">
    <h4>🌍 Full Sequence of Digestion</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Organ</th>
          <th>Type of Digestion</th>
          <th>What Happens</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Mouth</strong></td>
          <td>Mechanical + Chemical</td>
          <td>Teeth break food; saliva + amylase begins starch breakdown; forms bolus</td>
        </tr>
        <tr>
          <td><strong>2. Oesophagus</strong></td>
          <td>Transport only</td>
          <td>Peristalsis (muscle contractions) pushes bolus to stomach</td>
        </tr>
        <tr>
          <td><strong>3. Stomach</strong></td>
          <td>Mechanical + Chemical</td>
          <td>Churning; protease (pepsin) digests proteins; HCl provides pH 2; forms chyme</td>
        </tr>
        <tr>
          <td><strong>4. Liver/Gallbladder</strong></td>
          <td>Physical (emulsification)</td>
          <td>Bile neutralises acid + emulsifies fats (increases surface area)</td>
        </tr>
        <tr>
          <td><strong>5. Pancreas</strong></td>
          <td>Chemical</td>
          <td>Produces amylase, protease, lipase for small intestine</td>
        </tr>
        <tr>
          <td><strong>6. Small Intestine</strong></td>
          <td>Chemical + Absorption</td>
          <td>Main digestion + absorption via villi; lacteals absorb fatty acids</td>
        </tr>
        <tr>
          <td><strong>7. Large Intestine</strong></td>
          <td>Absorption</td>
          <td>Water reabsorbed; undigested material forms faeces</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Villus Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Villus Structure — Adapted for Absorption (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="350" viewBox="0 0 450 350">
        <defs>
          <linearGradient id="villusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fecdd3;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#fda4af;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="bloodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#ef4444;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#dc2626;stop-opacity:0.6"/>
          </linearGradient>
          <linearGradient id="lactealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#fcd34d;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <text x="225" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Structure of a Villus</text>
        
        <!-- Villus outline (finger-like projection) -->
        <path d="M150,320 L150,120 Q150,50 225,50 Q300,50 300,120 L300,320" 
              fill="url(#villusGrad)" stroke="#fb7185" stroke-width="3"/>
        
        <!-- Epithelium layer (one cell thick) -->
        <path d="M150,320 L150,120 Q150,50 225,50 Q300,50 300,120 L300,320" 
              fill="none" stroke="#f43f5e" stroke-width="8" stroke-dasharray="4,4"/>
        <text x="320" y="80" fill="#f43f5e" font-size="10" font-weight="bold">Epithelium</text>
        <text x="320" y="95" fill="currentColor" font-size="9">(1 cell thick)</text>
        <line x1="300" y1="85" x2="315" y2="85" stroke="#f43f5e" stroke-width="1"/>
        
        <!-- Microvilli at top -->
        <g class="anim-vibrate-slow">
          <line x1="165" y1="55" x2="165" y2="45" stroke="#f43f5e" stroke-width="2"/>
          <line x1="180" y1="52" x2="180" y2="42" stroke="#f43f5e" stroke-width="2"/>
          <line x1="195" y1="50" x2="195" y2="40" stroke="#f43f5e" stroke-width="2"/>
          <line x1="210" y1="49" x2="210" y2="39" stroke="#f43f5e" stroke-width="2"/>
          <line x1="225" y1="48" x2="225" y2="38" stroke="#f43f5e" stroke-width="2"/>
          <line x1="240" y1="49" x2="240" y2="39" stroke="#f43f5e" stroke-width="2"/>
          <line x1="255" y1="50" x2="255" y2="40" stroke="#f43f5e" stroke-width="2"/>
          <line x1="270" y1="52" x2="270" y2="42" stroke="#f43f5e" stroke-width="2"/>
          <line x1="285" y1="55" x2="285" y2="45" stroke="#f43f5e" stroke-width="2"/>
        </g>
        <text x="350" y="45" fill="#f43f5e" font-size="9" font-weight="bold">Microvilli</text>
        <text x="350" y="58" fill="currentColor" font-size="8">(↑ surface area)</text>
        
        <!-- Blood capillary network -->
        <g class="anim-pulse">
          <path d="M175,300 L175,100 Q175,70 200,70 Q225,70 225,100 L225,200 Q225,220 245,220 Q265,220 265,200 L265,100 Q265,70 240,70" 
                fill="none" stroke="url(#bloodGrad)" stroke-width="10" stroke-linecap="round"/>
        </g>
        <text x="80" y="150" fill="#ef4444" font-size="10" font-weight="bold">Blood</text>
        <text x="80" y="165" fill="#ef4444" font-size="10" font-weight="bold">capillaries</text>
        <text x="80" y="180" fill="currentColor" font-size="9">(carry glucose,</text>
        <text x="80" y="195" fill="currentColor" font-size="9">amino acids)</text>
        <line x1="130" y1="165" x2="170" y2="150" stroke="#ef4444" stroke-width="1"/>
        
        <!-- Lacteal (central) -->
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <path d="M215,280 L215,90 Q215,75 225,75 Q235,75 235,90 L235,280" 
                fill="url(#lactealGrad)" stroke="#f59e0b" stroke-width="2"/>
        </g>
        <text x="320" y="200" fill="#f59e0b" font-size="10" font-weight="bold">Lacteal</text>
        <text x="320" y="215" fill="currentColor" font-size="9">(absorbs fatty</text>
        <text x="320" y="230" fill="currentColor" font-size="9">acids + glycerol)</text>
        <line x1="235" y1="210" x2="315" y2="210" stroke="#f59e0b" stroke-width="1"/>
        
        <!-- Nutrient arrows -->
        <g class="anim-pulse-fast">
          <circle cx="160" cy="100" r="5" fill="#22c55e"/>
          <text x="110" y="105" fill="#22c55e" font-size="8">Glucose →</text>
          
          <circle cx="290" cy="130" r="5" fill="#8b5cf6"/>
          <text x="305" y="135" fill="#8b5cf6" font-size="8">← Amino acids</text>
        </g>
        
        <!-- Key adaptations -->
        <rect x="50" y="270" width="350" height="70" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="225" y="290" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Adaptations for Efficient Absorption:</text>
        <text x="70" y="310" fill="currentColor" font-size="9">✓ Large surface area (villi + microvilli)</text>
        <text x="70" y="325" fill="currentColor" font-size="9">✓ Thin epithelium (short diffusion distance)</text>
        <text x="250" y="310" fill="currentColor" font-size="9">✓ Rich blood supply (steep gradient)</text>
        <text x="250" y="325" fill="currentColor" font-size="9">✓ Lacteal for fat absorption</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🔑 Key Functions of Bile</h4>
    <p><strong>Where bile comes from:</strong></p>
    <ul>
      <li>Liver <strong>makes</strong> bile</li>
      <li>Gallbladder <strong>stores</strong> bile</li>
    </ul>
    <p><strong>Why bile is essential:</strong></p>
    <ul>
      <li><strong>Neutralises acid</strong> — chyme is acidic, small intestine enzymes need alkaline conditions</li>
      <li><strong>Emulsifies fats</strong> — breaks large fat droplets → small droplets → increases surface area → lipase digests fat faster</li>
    </ul>
    <p>⭐ <strong>Emulsification is a physical change, NOT chemical digestion.</strong></p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember the sequence: <strong>Mouth → Oesophagus → Stomach → Liver/Gallbladder → Pancreas → Small Intestine → Large Intestine</strong>. Link each organ to its specific role!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "digestive system", "mouth", "oesophagus", "stomach", "liver", "gallbladder",
              "pancreas", "small intestine", "large intestine", "bile", "emulsification",
              "villi", "peristalsis", "chyme", "absorption"
            ],
            practice_items: [
              {
                id: "bio-digestive-p1",
                prompt_template: "Describe the role of bile in digestion.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["liver", "gallbladder", "neutralise", "acid", "emulsify", "fat", "surface area", "lipase"]
              },
              {
                id: "bio-digestive-p2",
                prompt_template: "Explain how the small intestine is adapted for absorption.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["villi", "microvilli", "surface area", "thin", "blood supply", "lacteal"]
              }
            ]
          },
          {
            id: "b3-1-3-enzymes",
            title: "B3.1.3 — Enzymes: Structure, Function & Conditions",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Enzymes — Structure, Function, Optimum Conditions & Denaturation</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand enzyme structure and function, the lock and key model, optimum pH and temperature, denaturation, and the link to metabolism.</p>
  </div>

  <div class="definition-block">
    <h4>⚙️ What Enzymes Are</h4>
    <p><strong>Enzymes are biological catalysts made of protein.</strong></p>
    <p>They <strong>speed up reactions</strong> without being used up.</p>
  </div>

  <!-- Lock and Key Model Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔑 Lock and Key Model (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="280" viewBox="0 0 500 280">
        <defs>
          <linearGradient id="enzymeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="substrateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f472b6;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="productGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#34d399;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Enzyme-Substrate Interaction (Lock & Key)</text>
        
        <!-- Step 1: Enzyme with active site -->
        <g>
          <text x="70" y="55" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">1. Enzyme</text>
          <path d="M30,80 L30,160 L60,160 L60,130 Q70,100 80,130 L80,160 L110,160 L110,80 Z" 
                fill="url(#enzymeGrad)" stroke="#2563eb" stroke-width="2"/>
          <text x="70" y="145" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Active</text>
          <text x="70" y="155" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Site</text>
          
          <!-- Substrate approaching -->
          <g class="anim-pulse">
            <path d="M60,50 Q70,70 80,50 L80,40 L60,40 Z" 
                  fill="url(#substrateGrad)" stroke="#db2777" stroke-width="2"/>
            <text x="70" y="35" fill="#db2777" font-size="8" font-weight="bold" text-anchor="middle">Substrate</text>
          </g>
        </g>
        
        <!-- Arrow -->
        <path d="M125,120 L155,120" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <!-- Step 2: Enzyme-Substrate Complex -->
        <g>
          <text x="220" y="55" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">2. E-S Complex</text>
          <path d="M180,80 L180,160 L210,160 L210,130 Q220,100 230,130 L230,160 L260,160 L260,80 Z" 
                fill="url(#enzymeGrad)" stroke="#2563eb" stroke-width="2"/>
          
          <!-- Substrate fitted in -->
          <g class="anim-pulse-fast">
            <path d="M210,100 Q220,120 230,100 L230,80 L210,80 Z" 
                  fill="url(#substrateGrad)" stroke="#db2777" stroke-width="2"/>
          </g>
          <text x="220" y="175" fill="currentColor" font-size="8" text-anchor="middle">Substrate fits</text>
          <text x="220" y="185" fill="currentColor" font-size="8" text-anchor="middle">active site exactly</text>
        </g>
        
        <!-- Arrow -->
        <path d="M275,120 L305,120" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="290" y="110" fill="currentColor" font-size="8" text-anchor="middle">Reaction</text>
        
        <!-- Step 3: Products Released -->
        <g>
          <text x="390" y="55" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">3. Products Released</text>
          <path d="M350,80 L350,160 L380,160 L380,130 Q390,100 400,130 L400,160 L430,160 L430,80 Z" 
                fill="url(#enzymeGrad)" stroke="#2563eb" stroke-width="2"/>
          <text x="390" y="145" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Active</text>
          <text x="390" y="155" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Site</text>
          
          <!-- Products leaving -->
          <g class="anim-pulse">
            <circle cx="365" cy="55" r="12" fill="url(#productGrad)" stroke="#059669" stroke-width="2"/>
            <circle cx="415" cy="55" r="12" fill="url(#productGrad)" stroke="#059669" stroke-width="2"/>
          </g>
          <text x="390" y="35" fill="#059669" font-size="8" font-weight="bold" text-anchor="middle">Products</text>
        </g>
        
        <!-- Key points -->
        <rect x="30" y="200" width="440" height="70" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="250" y="220" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Key Points:</text>
        <text x="50" y="240" fill="currentColor" font-size="9">• Active site has a specific shape → only ONE substrate fits</text>
        <text x="50" y="255" fill="currentColor" font-size="9">• Enzyme-substrate complex forms → reaction occurs → products released</text>
        <text x="300" y="240" fill="#22c55e" font-size="9" font-weight="bold">✓ Enzyme unchanged → can be reused</text>
        <text x="300" y="255" fill="#22c55e" font-size="9" font-weight="bold">✓ Specificity prevents wrong reactions</text>
      </svg>
    </div>
  </div>

  <div class="definition-block">
    <h4>🔑 Active Site & Specificity</h4>
    <ul>
      <li>Each enzyme has an <strong>active site</strong> shaped to fit one specific substrate</li>
      <li>When substrate binds → <strong>enzyme–substrate complex</strong> forms → reaction proceeds</li>
      <li>Enzyme remains <strong>unchanged</strong> afterwards</li>
      <li><strong>Specificity prevents unwanted reactions</strong></li>
    </ul>
  </div>

  <!-- Temperature and pH Effects Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌡️ Effect of Temperature & pH on Enzyme Activity (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="320" viewBox="0 0 500 320">
        <!-- Temperature Graph -->
        <g transform="translate(20, 20)">
          <text x="100" y="15" fill="currentColor" font-size="12" font-weight="bold" text-anchor="middle">Temperature Effect</text>
          
          <!-- Axes -->
          <line x1="30" y1="180" x2="180" y2="180" stroke="currentColor" stroke-width="2"/>
          <line x1="30" y1="180" x2="30" y2="30" stroke="currentColor" stroke-width="2"/>
          
          <!-- Axis labels -->
          <text x="105" y="200" fill="currentColor" font-size="9" text-anchor="middle">Temperature (°C)</text>
          <text x="15" y="105" fill="currentColor" font-size="9" text-anchor="middle" transform="rotate(-90, 15, 105)">Rate of reaction</text>
          
          <!-- Temperature values -->
          <text x="30" y="195" fill="currentColor" font-size="8" text-anchor="middle">0</text>
          <text x="75" y="195" fill="currentColor" font-size="8" text-anchor="middle">20</text>
          <text x="105" y="195" fill="currentColor" font-size="8" text-anchor="middle">37</text>
          <text x="135" y="195" fill="currentColor" font-size="8" text-anchor="middle">50</text>
          <text x="165" y="195" fill="currentColor" font-size="8" text-anchor="middle">60</text>
          
          <!-- Curve -->
          <path d="M30,175 Q50,170 75,140 Q90,90 105,50 Q120,90 140,150 Q160,175 175,178" 
                fill="none" stroke="#ef4444" stroke-width="3"/>
          
          <!-- Optimum marker -->
          <line x1="105" y1="50" x2="105" y2="180" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="105" y="40" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Optimum</text>
          <text x="105" y="220" fill="#22c55e" font-size="8" text-anchor="middle">37°C</text>
          
          <!-- Denaturation zone -->
          <rect x="125" y="30" width="55" height="145" fill="#ef4444" opacity="0.1"/>
          <text x="152" y="80" fill="#ef4444" font-size="8" text-anchor="middle" font-weight="bold">DENATURED</text>
        </g>
        
        <!-- pH Graph -->
        <g transform="translate(260, 20)">
          <text x="100" y="15" fill="currentColor" font-size="12" font-weight="bold" text-anchor="middle">pH Effect</text>
          
          <!-- Axes -->
          <line x1="30" y1="180" x2="180" y2="180" stroke="currentColor" stroke-width="2"/>
          <line x1="30" y1="180" x2="30" y2="30" stroke="currentColor" stroke-width="2"/>
          
          <!-- Axis labels -->
          <text x="105" y="200" fill="currentColor" font-size="9" text-anchor="middle">pH</text>
          <text x="15" y="105" fill="currentColor" font-size="9" text-anchor="middle" transform="rotate(-90, 15, 105)">Rate of reaction</text>
          
          <!-- pH values -->
          <text x="30" y="195" fill="currentColor" font-size="8" text-anchor="middle">1</text>
          <text x="60" y="195" fill="currentColor" font-size="8" text-anchor="middle">4</text>
          <text x="105" y="195" fill="currentColor" font-size="8" text-anchor="middle">7</text>
          <text x="150" y="195" fill="currentColor" font-size="8" text-anchor="middle">10</text>
          <text x="175" y="195" fill="currentColor" font-size="8" text-anchor="middle">14</text>
          
          <!-- Curve for neutral enzyme -->
          <path d="M30,175 Q60,160 90,80 Q105,50 120,80 Q150,160 175,175" 
                fill="none" stroke="#3b82f6" stroke-width="3"/>
          
          <!-- Optimum marker -->
          <line x1="105" y1="50" x2="105" y2="180" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,4"/>
          <text x="105" y="40" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Optimum</text>
          
          <!-- Pepsin curve (pH 2) -->
          <path d="M30,150 Q45,50 60,150 Q90,175 175,178" 
                fill="none" stroke="#f97316" stroke-width="2" stroke-dasharray="5,3"/>
          <text x="55" y="40" fill="#f97316" font-size="8">Pepsin</text>
          <text x="55" y="50" fill="#f97316" font-size="7">(pH 2)</text>
        </g>
        
        <!-- Explanation boxes -->
        <rect x="20" y="250" width="200" height="60" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="30" y="270" fill="currentColor" font-size="9" font-weight="bold">🌡️ Temperature:</text>
        <text x="30" y="285" fill="currentColor" font-size="8">↑ temp = ↑ collisions = ↑ rate</text>
        <text x="30" y="298" fill="currentColor" font-size="8">Too hot → bonds break → denatured</text>
        
        <rect x="240" y="250" width="200" height="60" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="250" y="270" fill="currentColor" font-size="9" font-weight="bold">💧 pH:</text>
        <text x="250" y="285" fill="currentColor" font-size="8">Each enzyme has optimal pH</text>
        <text x="250" y="298" fill="currentColor" font-size="8">Extreme pH → active site changes</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>🌡️ Optimum Conditions</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Factor</th>
          <th>Effect</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>↑ Temperature</strong></td>
          <td>↑ Rate (up to optimum)</td>
          <td>Particles move faster → more collisions → faster reaction</td>
        </tr>
        <tr>
          <td><strong>Above optimum temp</strong></td>
          <td>Rate drops → denaturation</td>
          <td>Enzyme bonds break → active site changes shape</td>
        </tr>
        <tr>
          <td><strong>Human enzymes</strong></td>
          <td>Optimum ~37°C</td>
          <td>Body temperature</td>
        </tr>
        <tr>
          <td><strong>Stomach protease</strong></td>
          <td>Optimum pH 2</td>
          <td>Works in acidic stomach environment</td>
        </tr>
        <tr>
          <td><strong>Small intestine enzymes</strong></td>
          <td>Optimum pH 8-9</td>
          <td>Works in alkaline environment (bile neutralises acid)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>💥 What Is Denaturation?</h4>
    <p><strong>Denaturation</strong> is the <strong>irreversible change in the shape of an enzyme's active site</strong>, preventing the substrate from binding and stopping the enzyme from working.</p>
    <p><strong>Causes:</strong></p>
    <ul>
      <li>High temperature</li>
      <li>Extreme pH</li>
    </ul>
    <p><strong>Once denatured, enzymes cannot return to their original shape.</strong></p>
  </div>

  <div class="key-facts-block">
    <h4>🔗 Enzymes and Metabolism</h4>
    <p><strong>Metabolism</strong> includes all chemical reactions in cells.</p>
    <p><strong>Two types of metabolic reactions:</strong></p>
    <ul>
      <li><strong>Catabolic</strong> (breaking molecules) → e.g., digestion, respiration</li>
      <li><strong>Anabolic</strong> (building molecules) → e.g., protein synthesis, making glycogen</li>
    </ul>
    <p>Enzymes control both types, making metabolism <strong>efficient and controlled</strong>.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>When explaining denaturation, always mention: <strong>active site shape changes → substrate cannot bind → enzyme cannot function</strong>. Never say the enzyme is "killed" or "destroyed" — it's denatured!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "enzyme", "catalyst", "active site", "substrate", "lock and key", "specificity",
              "optimum", "temperature", "pH", "denaturation", "metabolism", "catabolic", "anabolic"
            ],
            practice_items: [
              {
                id: "bio-enzyme-p1",
                prompt_template: "Explain the lock and key model of enzyme action.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["active site", "specific shape", "substrate", "fits", "enzyme-substrate complex", "products"]
              },
              {
                id: "bio-enzyme-p2",
                prompt_template: "Explain why enzymes stop working at high temperatures.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["denatured", "active site", "shape", "bonds break", "substrate cannot bind"]
              }
            ]
          },
          {
            id: "b3-1-4-digestive-enzymes",
            title: "B3.1.4 — Digestive Enzymes & Products of Digestion",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Digestive Enzymes, Bile & Products of Digestion</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Know the sites of enzyme production, actions of each enzyme, what digestive enzymes achieve, products of digestion, bile's function, and how fat breakdown rate is increased.</p>
  </div>

  <!-- Digestive Enzymes Summary Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 The Three Digestive Enzymes (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="320" viewBox="0 0 520 320">
        <defs>
          <linearGradient id="amylaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fbbf24;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#f59e0b;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="proteaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="lipaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#60a5fa;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <!-- AMYLASE -->
        <g transform="translate(10, 30)">
          <rect x="0" y="0" width="160" height="80" fill="url(#amylaseGrad)" rx="10" stroke="#d97706" stroke-width="3"/>
          <text x="80" y="25" fill="white" font-size="14" font-weight="bold" text-anchor="middle">AMYLASE</text>
          <text x="80" y="45" fill="white" font-size="10" text-anchor="middle">(carbohydrase)</text>
          <text x="80" y="65" fill="white" font-size="9" text-anchor="middle">Salivary glands, Pancreas</text>
        </g>
        
        <g class="anim-pulse">
          <text x="90" y="130" fill="currentColor" font-size="10" text-anchor="middle">Starch</text>
          <rect x="55" y="135" width="70" height="25" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="5"/>
          <text x="90" y="152" fill="#92400e" font-size="8" text-anchor="middle">Long chain</text>
        </g>
        
        <path d="M90,165 L90,185" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <text x="90" y="205" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">Glucose</text>
          <circle cx="90" cy="225" r="15" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
        </g>
        
        <!-- PROTEASE -->
        <g transform="translate(180, 30)">
          <rect x="0" y="0" width="160" height="80" fill="url(#proteaseGrad)" rx="10" stroke="#7c3aed" stroke-width="3"/>
          <text x="80" y="25" fill="white" font-size="14" font-weight="bold" text-anchor="middle">PROTEASE</text>
          <text x="80" y="45" fill="white" font-size="10" text-anchor="middle">Stomach, Pancreas</text>
          <text x="80" y="65" fill="white" font-size="9" text-anchor="middle">Small intestine</text>
        </g>
        
        <g class="anim-pulse">
          <text x="260" y="130" fill="currentColor" font-size="10" text-anchor="middle">Protein</text>
          <path d="M220,145 Q240,135 260,150 Q280,165 300,145" fill="none" stroke="#8b5cf6" stroke-width="4"/>
        </g>
        
        <path d="M260,175 L260,195" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <text x="260" y="215" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">Amino Acids</text>
          <circle cx="235" cy="235" r="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
          <circle cx="260" cy="235" r="10" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
          <circle cx="285" cy="235" r="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
        </g>
        
        <!-- LIPASE -->
        <g transform="translate(350, 30)">
          <rect x="0" y="0" width="160" height="80" fill="url(#lipaseGrad)" rx="10" stroke="#2563eb" stroke-width="3"/>
          <text x="80" y="25" fill="white" font-size="14" font-weight="bold" text-anchor="middle">LIPASE</text>
          <text x="80" y="45" fill="white" font-size="10" text-anchor="middle">Pancreas</text>
          <text x="80" y="65" fill="white" font-size="9" text-anchor="middle">Small intestine</text>
        </g>
        
        <g class="anim-pulse">
          <text x="430" y="130" fill="currentColor" font-size="10" text-anchor="middle">Lipid</text>
          <ellipse cx="430" cy="155" rx="30" ry="15" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        </g>
        
        <path d="M430,175 L430,195" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <text x="430" y="215" fill="#22c55e" font-size="9" font-weight="bold" text-anchor="middle">Fatty Acids + Glycerol</text>
          <rect x="390" y="225" width="35" height="20" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="5"/>
          <rect x="430" y="225" width="45" height="10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1" rx="3"/>
          <rect x="430" y="237" width="45" height="10" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1" rx="3"/>
        </g>
        
        <!-- Summary box -->
        <rect x="60" y="260" width="400" height="50" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="260" y="280" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">All products are SMALL + SOLUBLE = can be absorbed into blood</text>
        <text x="260" y="298" fill="currentColor" font-size="10" text-anchor="middle">Used for respiration, growth, repair, and building new molecules</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>🥖 Summary: Digestive Enzymes</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Enzyme</th>
          <th>Produced In</th>
          <th>Substrate → Product</th>
          <th>Product Used For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Amylase</strong></td>
          <td>Salivary glands, Pancreas, Small intestine</td>
          <td>Starch → Maltose → <strong>Glucose</strong></td>
          <td>Respiration, stored as glycogen</td>
        </tr>
        <tr>
          <td><strong>Protease</strong></td>
          <td>Stomach (pepsin), Pancreas, Small intestine</td>
          <td>Proteins → <strong>Amino acids</strong></td>
          <td>Build proteins, enzymes, hormones, antibodies</td>
        </tr>
        <tr>
          <td><strong>Lipase</strong></td>
          <td>Pancreas, Small intestine</td>
          <td>Lipids → <strong>Fatty acids + Glycerol</strong></td>
          <td>Cell membranes, hormones, energy storage</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Bile and Fat Emulsification Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🟡 Bile: Emulsification of Fats (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="250" viewBox="0 0 500 250">
        <defs>
          <radialGradient id="fatDropletGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#fcd34d;stop-opacity:0.7"/>
          </radialGradient>
        </defs>
        
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">How Bile Increases Fat Digestion Rate</text>
        
        <!-- Before: Large fat droplet -->
        <g>
          <text x="80" y="55" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Before Bile</text>
          <circle cx="80" cy="120" r="50" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="3"/>
          <text x="80" y="115" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">Large</text>
          <text x="80" y="130" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">Fat Droplet</text>
          <text x="80" y="195" fill="currentColor" font-size="9" text-anchor="middle">Small surface area</text>
          <text x="80" y="210" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">SLOW digestion</text>
        </g>
        
        <!-- Arrow with bile -->
        <g class="anim-pulse">
          <path d="M145,120 L195,120" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowhead)"/>
          <text x="170" y="105" fill="#22c55e" font-size="10" font-weight="bold" text-anchor="middle">+ BILE</text>
          <text x="170" y="145" fill="#22c55e" font-size="8" text-anchor="middle">(emulsifies)</text>
        </g>
        
        <!-- After: Many small droplets -->
        <g>
          <text x="280" y="55" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">After Bile</text>
          <g class="anim-vibrate-slow">
            <circle cx="240" cy="90" r="15" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="275" cy="85" r="12" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="310" cy="95" r="14" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="250" cy="125" r="13" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="285" cy="120" r="11" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="315" cy="130" r="15" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="260" cy="155" r="12" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
            <circle cx="295" cy="155" r="14" fill="url(#fatDropletGrad)" stroke="#f59e0b" stroke-width="2"/>
          </g>
          <text x="280" y="195" fill="currentColor" font-size="9" text-anchor="middle">Large surface area</text>
          <text x="280" y="210" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">FAST digestion!</text>
        </g>
        
        <!-- Arrow to lipase action -->
        <path d="M345,120 L385,120" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="365" y="105" fill="currentColor" font-size="8" text-anchor="middle">Lipase</text>
        <text x="365" y="145" fill="currentColor" font-size="8" text-anchor="middle">works faster</text>
        
        <!-- Products -->
        <g>
          <text x="440" y="55" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Products</text>
          <g class="anim-pulse">
            <rect x="410" y="80" width="60" height="20" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2" rx="5"/>
            <text x="440" y="95" fill="#1e40af" font-size="8" text-anchor="middle">Fatty Acids</text>
            
            <rect x="410" y="110" width="60" height="20" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="5"/>
            <text x="440" y="125" fill="#92400e" font-size="8" text-anchor="middle">Glycerol</text>
          </g>
          <text x="440" y="155" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">Can be absorbed!</text>
        </g>
        
        <!-- Key point -->
        <rect x="100" y="225" width="300" height="20" fill="#dcfce7" rx="5"/>
        <text x="250" y="240" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">⭐ Emulsification = physical change, NOT chemical digestion</text>
      </svg>
    </div>
  </div>

  <div class="definition-block">
    <h4>🟡 Bile — Essential Features</h4>
    <p><strong>Bile is:</strong></p>
    <ul>
      <li><strong>Produced</strong> in the liver</li>
      <li><strong>Stored</strong> in the gallbladder</li>
      <li><strong>Released</strong> into the small intestine</li>
    </ul>
    <p><strong>Functions:</strong></p>
    <ul>
      <li><strong>Neutralises acid</strong> — allows enzymes to work at optimal pH</li>
      <li><strong>Emulsifies fats</strong> → increases surface area → lipase action faster</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>💥 Factors That Increase Rate of Fat Breakdown by Lipase</h4>
    <ul>
      <li><strong>Presence of bile</strong> (emulsification)</li>
      <li><strong>Higher enzyme concentration</strong></li>
      <li><strong>Higher substrate concentration</strong> (until saturation)</li>
      <li><strong>Correct pH</strong> (alkaline)</li>
      <li><strong>Temperature near optimum</strong> (37°C)</li>
      <li><strong>Smaller fat droplets</strong> → greater surface area for lipase</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>🧬 Products of Digestion & How They're Used</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Digestion Product</th>
          <th>Used For</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Glucose</strong></td>
          <td>Respiration, making glycogen, forming carbohydrates</td>
        </tr>
        <tr>
          <td><strong>Amino acids</strong></td>
          <td>Making proteins: enzymes, antibodies, hormones, muscle</td>
        </tr>
        <tr>
          <td><strong>Fatty acids + Glycerol</strong></td>
          <td>Making cell membranes, hormones, storing energy</td>
        </tr>
      </tbody>
    </table>
    <p>Every molecule absorbed has a <strong>specific metabolic role</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🔬 What Digestive Enzymes Achieve</h4>
    <p>Digestive enzymes convert:</p>
    <p><strong>Large, insoluble molecules → small, soluble molecules</strong> that can:</p>
    <ul>
      <li>Diffuse into bloodstream</li>
      <li>Be transported to cells</li>
      <li>Be used in respiration, growth, repair</li>
    </ul>
    <p><strong>Without digestive enzymes, nutrients could not enter the body.</strong></p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>For fat digestion questions, always link: <strong>Bile → emulsification → increased surface area → faster lipase action → more fatty acids + glycerol produced</strong>. This chain of reasoning scores full marks!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "amylase", "protease", "lipase", "bile", "emulsification", "glucose", "amino acid",
              "fatty acid", "glycerol", "digestion", "absorption", "small intestine", "liver", "gallbladder"
            ],
            practice_items: [
              {
                id: "bio-digest-enzyme-p1",
                prompt_template: "Describe the action of lipase and where it is produced.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["lipid", "fatty acids", "glycerol", "pancreas", "small intestine"]
              },
              {
                id: "bio-digest-enzyme-p2",
                prompt_template: "Explain how bile helps to increase the rate of fat digestion.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["emulsifies", "small droplets", "surface area", "lipase", "faster"]
              }
            ]
          }
        ]
      },
      // ========================================
      // MODULE 2: CIRCULATORY SYSTEM
      // ========================================
      {
        id: "circulatory-system-module",
        title: "Module 2: Circulatory System",
        status: "ready",
        subsections: [
          {
            id: "b4-2-1-blood-components",
            title: "B4.2.1 — Blood Components & Adaptations",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Blood — Components & Their Adaptations</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the components of blood (plasma, red blood cells, white blood cells, platelets) and their functions and adaptations.</p>
  </div>

  <div class="definition-block">
    <h4>🩸 Blood Overview</h4>
    <p>Blood is a <strong>transport system</strong> carrying oxygen, nutrients, hormones, waste, and heat.</p>
  </div>

  <!-- Blood Components Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Blood Components (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="400" viewBox="0 0 500 400">
        <defs>
          <linearGradient id="plasmaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#fcd34d;stop-opacity:0.6"/>
          </linearGradient>
          <radialGradient id="rbcGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fca5a5;stop-opacity:0.9"/>
            <stop offset="40%" style="stop-color:#ef4444;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#dc2626;stop-opacity:0.9"/>
          </radialGradient>
          <radialGradient id="wbcGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1"/>
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:0.9"/>
          </radialGradient>
        </defs>
        
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Components of Blood</text>
        
        <!-- Test tube shape -->
        <rect x="180" y="40" width="140" height="320" fill="url(#plasmaGrad)" rx="10" stroke="#f59e0b" stroke-width="3"/>
        
        <!-- Plasma (top layer - 55%) -->
        <rect x="183" y="43" width="134" height="140" fill="url(#plasmaGrad)" rx="8"/>
        <text x="250" y="80" fill="#92400e" font-size="12" font-weight="bold" text-anchor="middle">PLASMA</text>
        <text x="250" y="100" fill="#92400e" font-size="10" text-anchor="middle">(55%)</text>
        <text x="250" y="120" fill="#78350f" font-size="8" text-anchor="middle">Liquid part</text>
        
        <!-- Cells layer -->
        <rect x="183" y="183" width="134" height="170" fill="#fecaca" rx="8"/>
        
        <!-- Red blood cells -->
        <g class="anim-pulse">
          <ellipse cx="210" cy="220" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="250" cy="230" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="290" cy="215" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="220" cy="260" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="260" cy="270" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="295" cy="255" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="235" cy="300" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="275" cy="310" rx="18" ry="8" fill="url(#rbcGrad)" stroke="#dc2626" stroke-width="1"/>
        </g>
        
        <!-- White blood cells (larger, fewer) -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <circle cx="205" cy="320" r="12" fill="url(#wbcGrad)" stroke="#6b7280" stroke-width="2"/>
          <circle cx="200" cy="318" r="4" fill="#8b5cf6" opacity="0.7"/>
          <circle cx="208" cy="323" r="3" fill="#8b5cf6" opacity="0.7"/>
          
          <circle cx="285" cy="335" r="12" fill="url(#wbcGrad)" stroke="#6b7280" stroke-width="2"/>
          <circle cx="283" cy="332" r="4" fill="#8b5cf6" opacity="0.7"/>
        </g>
        
        <!-- Platelets (tiny fragments) -->
        <g class="anim-vibrate-slow">
          <circle cx="240" cy="340" r="4" fill="#a78bfa"/>
          <circle cx="255" cy="338" r="3" fill="#a78bfa"/>
          <circle cx="265" cy="345" r="4" fill="#a78bfa"/>
          <circle cx="225" cy="348" r="3" fill="#a78bfa"/>
        </g>
        
        <!-- Labels -->
        <line x1="320" y1="220" x2="350" y2="200" stroke="#ef4444" stroke-width="2"/>
        <text x="355" y="195" fill="#ef4444" font-size="11" font-weight="bold">Red Blood Cells</text>
        <text x="355" y="210" fill="currentColor" font-size="9">Carry oxygen (44%)</text>
        
        <line x1="220" y1="320" x2="140" y2="310" stroke="#6b7280" stroke-width="2"/>
        <text x="50" y="305" fill="#6b7280" font-size="11" font-weight="bold">White Blood Cells</text>
        <text x="50" y="320" fill="currentColor" font-size="9">Fight infection (~1%)</text>
        
        <line x1="260" y1="345" x2="140" y2="355" stroke="#8b5cf6" stroke-width="2"/>
        <text x="50" y="350" fill="#8b5cf6" font-size="11" font-weight="bold">Platelets</text>
        <text x="50" y="365" fill="currentColor" font-size="9">Blood clotting</text>
        
        <!-- Plasma info box -->
        <rect x="330" y="50" width="160" height="130" fill="hsl(var(--muted))" rx="8" opacity="0.7"/>
        <text x="410" y="70" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Plasma Transports:</text>
        <text x="340" y="90" fill="currentColor" font-size="9">• Glucose (for respiration)</text>
        <text x="340" y="105" fill="currentColor" font-size="9">• Amino acids</text>
        <text x="340" y="120" fill="currentColor" font-size="9">• CO₂ (to lungs)</text>
        <text x="340" y="135" fill="currentColor" font-size="9">• Urea (to kidneys)</text>
        <text x="340" y="150" fill="currentColor" font-size="9">• Hormones</text>
        <text x="340" y="165" fill="currentColor" font-size="9">• Antibodies & Heat</text>
      </svg>
    </div>
  </div>

  <div class="definition-block">
    <h4>🟡 Plasma (Liquid Component)</h4>
    <p>Plasma makes up about <strong>55% of blood</strong>.</p>
    <p><strong>Transports:</strong></p>
    <ul>
      <li><strong>Glucose</strong> (to cells for respiration)</li>
      <li><strong>Amino acids</strong></li>
      <li><strong>Fatty acids</strong></li>
      <li><strong>Carbon dioxide</strong> (from cells → lungs)</li>
      <li><strong>Urea</strong> (from liver → kidneys)</li>
      <li><strong>Hormones</strong> (to target organs)</li>
      <li><strong>Antibodies</strong></li>
      <li><strong>Heat energy</strong> → maintains stable temperature</li>
    </ul>
    <p><strong>Why plasma is essential:</strong></p>
    <ul>
      <li>Enables dissolved substances to flow quickly</li>
      <li>Maintains blood pressure & volume</li>
      <li>Allows even distribution of heat around body</li>
    </ul>
  </div>

  <!-- Red Blood Cell Adaptation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔴 Red Blood Cell Adaptations (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="220" viewBox="0 0 480 220">
        <defs>
          <radialGradient id="rbcDetailGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fecaca;stop-opacity:0.5"/>
            <stop offset="40%" style="stop-color:#ef4444;stop-opacity:0.8"/>
            <stop offset="60%" style="stop-color:#ef4444;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#dc2626;stop-opacity:1"/>
          </radialGradient>
        </defs>
        
        <text x="240" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Red Blood Cell — Adapted for Oxygen Transport</text>
        
        <!-- Side view of RBC (biconcave) -->
        <g transform="translate(80, 80)">
          <text x="60" y="-10" fill="currentColor" font-size="10" font-weight="bold" text-anchor="middle">Side View</text>
          <g class="anim-pulse">
            <ellipse cx="60" cy="50" rx="55" ry="25" fill="url(#rbcDetailGrad)" stroke="#dc2626" stroke-width="2"/>
            <!-- Concave dip -->
            <ellipse cx="60" cy="50" rx="30" ry="10" fill="#fecaca" opacity="0.6"/>
          </g>
          <text x="60" y="95" fill="currentColor" font-size="9" text-anchor="middle">Biconcave disc</text>
          <text x="60" y="108" fill="currentColor" font-size="8" text-anchor="middle">↑ surface area</text>
        </g>
        
        <!-- Top view of RBC -->
        <g transform="translate(260, 80)">
          <text x="60" y="-10" fill="currentColor" font-size="10" font-weight="bold" text-anchor="middle">Top View</text>
          <g class="anim-pulse" style="animation-delay: 0.3s;">
            <circle cx="60" cy="50" r="45" fill="url(#rbcDetailGrad)" stroke="#dc2626" stroke-width="2"/>
            <!-- No nucleus -->
            <text x="60" y="45" fill="white" font-size="10" font-weight="bold" text-anchor="middle">No</text>
            <text x="60" y="60" fill="white" font-size="10" font-weight="bold" text-anchor="middle">nucleus</text>
          </g>
          <text x="60" y="115" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">More space for</text>
          <text x="60" y="128" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">haemoglobin!</text>
        </g>
        
        <!-- Adaptations list -->
        <rect x="10" y="155" width="460" height="55" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="240" y="175" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Key Adaptations:</text>
        <text x="30" y="195" fill="currentColor" font-size="9">✓ Biconcave shape → huge SA</text>
        <text x="160" y="195" fill="currentColor" font-size="9">✓ No nucleus → more haemoglobin</text>
        <text x="320" y="195" fill="currentColor" font-size="9">✓ Flexible → squeeze through capillaries</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>🔴 Red Blood Cell Adaptations</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Adaptation</th>
          <th>How It Helps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Biconcave disc shape</strong></td>
          <td>Huge surface area → faster diffusion of oxygen</td>
        </tr>
        <tr>
          <td><strong>No nucleus</strong></td>
          <td>More space for haemoglobin</td>
        </tr>
        <tr>
          <td><strong>Packed with haemoglobin</strong></td>
          <td>Binds oxygen in lungs, releases it in tissues</td>
        </tr>
        <tr>
          <td><strong>Flexible membrane</strong></td>
          <td>Squeeze through narrow capillaries</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Result:</strong> Extremely efficient oxygen carriers.</p>
  </div>

  <div class="definition-block">
    <h4>⚪ White Blood Cells (WBCs)</h4>
    <p><strong>Two key types:</strong></p>
    
    <h5>Phagocytes</h5>
    <ul>
      <li><strong>Engulf and digest</strong> pathogens</li>
      <li>Change shape to surround microbes</li>
    </ul>
    
    <h5>Lymphocytes</h5>
    <ul>
      <li>Produce <strong>antibodies</strong> to neutralise pathogens</li>
      <li>Produce <strong>antitoxins</strong></li>
      <li>Produce <strong>memory cells</strong> → long-term immunity</li>
    </ul>
    
    <p>Contain a <strong>nucleus</strong> so they can produce proteins for immunity.</p>
  </div>

  <div class="definition-block">
    <h4>🟣 Platelets</h4>
    <p>Small cell fragments with <strong>no nucleus</strong>.</p>
    <p><strong>Roles:</strong></p>
    <ul>
      <li>Trigger <strong>blood clotting</strong></li>
      <li>Convert fibrinogen → <strong>fibrin mesh</strong></li>
      <li>Prevent blood loss</li>
      <li>Prevent pathogen entry</li>
    </ul>
    <p>Clotting forms a <strong>scab</strong>, which protects tissue as it heals.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>RBCs have <strong>no nucleus</strong> (more haemoglobin). WBCs <strong>have a nucleus</strong> (produce antibodies). Don't mix them up!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "blood", "plasma", "red blood cell", "white blood cell", "platelet", "haemoglobin",
              "oxygen", "phagocyte", "lymphocyte", "antibody", "clotting", "fibrin"
            ],
            practice_items: [
              {
                id: "bio-blood-p1",
                prompt_template: "Describe three adaptations of red blood cells for carrying oxygen.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["biconcave", "no nucleus", "haemoglobin", "surface area", "flexible"]
              },
              {
                id: "bio-blood-p2",
                prompt_template: "Explain the role of platelets in wound healing.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["clotting", "fibrin", "mesh", "scab", "prevent blood loss", "pathogen"]
              }
            ]
          },
          {
            id: "b4-2-2-blood-vessels",
            title: "B4.2.2 — Blood Vessels: Structure & Function",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Blood Vessels — Structure & Function Comparison</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the structure and function of arteries, veins, and capillaries, and how their structures are adapted to their functions.</p>
  </div>

  <!-- Blood Vessels Comparison Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Blood Vessel Structures (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="380" viewBox="0 0 520 380">
        <defs>
          <linearGradient id="arteryWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#fca5a5;stop-opacity:0.9"/>
            <stop offset="50%" style="stop-color:#ef4444;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#fca5a5;stop-opacity:0.9"/>
          </linearGradient>
          <linearGradient id="veinWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#93c5fd;stop-opacity:0.9"/>
            <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.7"/>
            <stop offset="100%" style="stop-color:#93c5fd;stop-opacity:0.9"/>
          </linearGradient>
        </defs>
        
        <text x="260" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Comparing Blood Vessels (Cross-Section)</text>
        
        <!-- ARTERY -->
        <g transform="translate(50, 60)">
          <text x="60" y="0" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">ARTERY</text>
          
          <!-- Outer wall (thick, muscular) -->
          <circle cx="60" cy="80" r="55" fill="url(#arteryWallGrad)" stroke="#dc2626" stroke-width="3"/>
          
          <!-- Inner lumen (narrow) -->
          <circle cx="60" cy="80" r="20" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
          
          <text x="60" y="85" fill="#7f1d1d" font-size="8" font-weight="bold" text-anchor="middle">Narrow</text>
          <text x="60" y="95" fill="#7f1d1d" font-size="8" text-anchor="middle">lumen</text>
          
          <!-- Thick wall label -->
          <line x1="95" y1="50" x2="120" y2="35" stroke="#dc2626" stroke-width="1"/>
          <text x="95" y="30" fill="#dc2626" font-size="9" font-weight="bold">Thick</text>
          <text x="95" y="42" fill="#dc2626" font-size="9" font-weight="bold">muscular</text>
          <text x="95" y="54" fill="#dc2626" font-size="9" font-weight="bold">wall</text>
          
          <!-- Elastic fibres -->
          <g class="anim-pulse">
            <path d="M30,60 Q35,55 40,60 Q45,65 50,60" fill="none" stroke="#f97316" stroke-width="2"/>
            <path d="M25,80 Q30,75 35,80 Q40,85 45,80" fill="none" stroke="#f97316" stroke-width="2"/>
            <path d="M30,100 Q35,95 40,100 Q45,105 50,100" fill="none" stroke="#f97316" stroke-width="2"/>
          </g>
          <text x="5" y="130" fill="#f97316" font-size="8">Elastic fibres</text>
          
          <!-- Description -->
          <text x="60" y="155" fill="currentColor" font-size="9" text-anchor="middle">High pressure</text>
          <text x="60" y="167" fill="currentColor" font-size="9" text-anchor="middle">FROM heart</text>
        </g>
        
        <!-- VEIN -->
        <g transform="translate(200, 60)">
          <text x="60" y="0" fill="#3b82f6" font-size="13" font-weight="bold" text-anchor="middle">VEIN</text>
          
          <!-- Outer wall (thin) -->
          <circle cx="60" cy="80" r="55" fill="url(#veinWallGrad)" stroke="#2563eb" stroke-width="2"/>
          
          <!-- Inner lumen (wide) -->
          <circle cx="60" cy="80" r="40" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
          
          <text x="60" y="80" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">Wide</text>
          <text x="60" y="92" fill="#1e40af" font-size="9" text-anchor="middle">lumen</text>
          
          <!-- Thin wall label -->
          <line x1="100" y1="55" x2="125" y2="40" stroke="#2563eb" stroke-width="1"/>
          <text x="105" y="35" fill="#2563eb" font-size="9" font-weight="bold">Thin wall</text>
          
          <!-- Valve -->
          <g class="anim-pulse">
            <path d="M40,75 Q60,65 80,75" fill="none" stroke="#8b5cf6" stroke-width="3"/>
            <path d="M40,85 Q60,95 80,85" fill="none" stroke="#8b5cf6" stroke-width="3"/>
          </g>
          <text x="60" y="115" fill="#8b5cf6" font-size="8" font-weight="bold" text-anchor="middle">Valves</text>
          
          <!-- Description -->
          <text x="60" y="155" fill="currentColor" font-size="9" text-anchor="middle">Low pressure</text>
          <text x="60" y="167" fill="currentColor" font-size="9" text-anchor="middle">TO heart</text>
        </g>
        
        <!-- CAPILLARY -->
        <g transform="translate(350, 60)">
          <text x="60" y="0" fill="#22c55e" font-size="13" font-weight="bold" text-anchor="middle">CAPILLARY</text>
          
          <!-- Very thin tube -->
          <rect x="20" y="50" width="80" height="60" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="5"/>
          
          <!-- One cell thick wall -->
          <rect x="20" y="50" width="80" height="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
          <rect x="20" y="102" width="80" height="8" fill="#bbf7d0" stroke="#16a34a" stroke-width="1"/>
          
          <!-- RBC inside -->
          <g class="anim-pulse">
            <ellipse cx="45" cy="80" rx="12" ry="6" fill="#fecaca" stroke="#ef4444" stroke-width="1"/>
            <ellipse cx="75" cy="80" rx="12" ry="6" fill="#fecaca" stroke="#ef4444" stroke-width="1"/>
          </g>
          
          <text x="60" y="130" fill="#16a34a" font-size="8" font-weight="bold" text-anchor="middle">1 cell thick</text>
          <text x="60" y="142" fill="#16a34a" font-size="8" text-anchor="middle">Tiny lumen</text>
          
          <!-- Diffusion arrows -->
          <g class="anim-pulse-fast">
            <path d="M10,70 L20,70" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
            <path d="M100,70 L110,70" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
            <text x="5" y="60" fill="#22c55e" font-size="7">O₂</text>
            <text x="110" y="60" fill="#22c55e" font-size="7">CO₂</text>
          </g>
          
          <!-- Description -->
          <text x="60" y="155" fill="currentColor" font-size="9" text-anchor="middle">Exchange site</text>
          <text x="60" y="167" fill="currentColor" font-size="9" text-anchor="middle">In tissues</text>
        </g>
        
        <!-- Flow diagram -->
        <g transform="translate(50, 250)">
          <rect x="0" y="0" width="420" height="110" fill="hsl(var(--muted))" rx="10" opacity="0.5"/>
          <text x="210" y="25" fill="currentColor" font-size="12" font-weight="bold" text-anchor="middle">Blood Flow Through the Body</text>
          
          <!-- Heart -->
          <ellipse cx="60" cy="70" rx="35" ry="30" fill="#fecdd3" stroke="#f43f5e" stroke-width="3"/>
          <text x="60" y="75" fill="#881337" font-size="10" font-weight="bold" text-anchor="middle">HEART</text>
          
          <!-- Artery -->
          <rect x="100" y="55" width="80" height="30" fill="#fecaca" stroke="#ef4444" stroke-width="2" rx="5"/>
          <text x="140" y="75" fill="#7f1d1d" font-size="9" font-weight="bold" text-anchor="middle">Artery</text>
          
          <!-- Arrow -->
          <path d="M180,70 L200,70" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
          
          <!-- Capillaries -->
          <rect x="205" y="55" width="80" height="30" fill="#dcfce7" stroke="#22c55e" stroke-width="2" rx="5"/>
          <text x="245" y="75" fill="#166534" font-size="9" font-weight="bold" text-anchor="middle">Capillaries</text>
          
          <!-- Arrow -->
          <path d="M285,70 L305,70" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
          
          <!-- Vein -->
          <rect x="310" y="55" width="80" height="30" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="5"/>
          <text x="350" y="75" fill="#1e40af" font-size="9" font-weight="bold" text-anchor="middle">Vein</text>
          
          <!-- Arrow back to heart -->
          <path d="M350,85 Q350,100 60,100 Q60,100 60,100" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
        </g>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>📊 Blood Vessel Comparison</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Artery</th>
          <th>Vein</th>
          <th>Capillary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Direction</strong></td>
          <td>Away from heart</td>
          <td>Towards heart</td>
          <td>Between arteries & veins</td>
        </tr>
        <tr>
          <td><strong>Pressure</strong></td>
          <td>High</td>
          <td>Low</td>
          <td>Very low</td>
        </tr>
        <tr>
          <td><strong>Wall thickness</strong></td>
          <td>Thick, muscular</td>
          <td>Thin</td>
          <td>One cell thick</td>
        </tr>
        <tr>
          <td><strong>Lumen size</strong></td>
          <td>Narrow</td>
          <td>Wide</td>
          <td>Tiny (RBCs single file)</td>
        </tr>
        <tr>
          <td><strong>Valves</strong></td>
          <td>No</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td><strong>Special features</strong></td>
          <td>Elastic fibres (stretch & recoil)</td>
          <td>Valves prevent backflow</td>
          <td>Permeable walls for exchange</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>🔴 Arteries</h4>
    <p>Carry blood <strong>away from the heart</strong> under <strong>high pressure</strong>.</p>
    <p><strong>Structure:</strong></p>
    <ul>
      <li>Thick muscular walls</li>
      <li>Elastic fibres to stretch & recoil</li>
      <li>Narrow lumen → maintains high pressure</li>
    </ul>
    <p><strong>How structure links to function:</strong></p>
    <ul>
      <li>Thick walls withstand the force of blood pumped by ventricles</li>
      <li>Elasticity smooths out pressure fluctuations</li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>🔵 Veins</h4>
    <p>Carry blood <strong>towards the heart</strong> under <strong>low pressure</strong>.</p>
    <p><strong>Structure:</strong></p>
    <ul>
      <li>Thin walls</li>
      <li>Wide lumen</li>
      <li>Valves to prevent backflow</li>
    </ul>
    <p><strong>Structure → Function:</strong></p>
    <ul>
      <li>Low pressure means walls can be thinner</li>
      <li>Valves essential because gravity slows upward flow</li>
      <li>Assisted by skeletal muscles squeezing veins</li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>⚪ Capillaries</h4>
    <p>Microscopic vessels where <strong>exchange occurs</strong>.</p>
    <p><strong>Structure:</strong></p>
    <ul>
      <li>One cell thick → minimal diffusion distance</li>
      <li>Tiny lumen → RBCs pass in single file</li>
      <li>Permeable walls → allow glucose/oxygen to diffuse out</li>
    </ul>
    <p><strong>Function:</strong></p>
    <ul>
      <li>Deliver nutrients</li>
      <li>Remove CO₂ and urea</li>
      <li>Exchange happens rapidly due to tiny size and high density in tissues</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: <strong>A</strong>rteries = <strong>A</strong>way from heart. <strong>V</strong>eins have <strong>V</strong>alves. <strong>C</strong>apillaries allow gas ex<strong>C</strong>hange.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "artery", "vein", "capillary", "blood vessel", "lumen", "valve", "wall thickness",
              "elastic", "muscular", "pressure", "diffusion", "exchange"
            ],
            practice_items: [
              {
                id: "bio-vessels-p1",
                prompt_template: "Compare the structure of arteries and veins.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["artery", "thick wall", "narrow lumen", "vein", "thin wall", "wide lumen", "valve"]
              },
              {
                id: "bio-vessels-p2",
                prompt_template: "Explain how capillaries are adapted for their function.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["one cell thick", "short diffusion distance", "permeable", "exchange"]
              }
            ]
          },
          {
            id: "b4-2-3-heart-structure",
            title: "B4.2.3 — The Heart: Structure & Double Circulation",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">The Heart — Structure, Function & Double Circulation</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the structure of the heart, the function of each chamber and blood vessel, and the advantages of double circulation.</p>
  </div>

  <!-- Heart Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>❤️ Heart Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="420" viewBox="0 0 500 420">
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fecdd3;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#fda4af;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="deoxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#93c5fd;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="oxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fca5a5;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#ef4444;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">The Heart (Front View — as if looking at patient)</text>
        
        <!-- Heart outline -->
        <path d="M250,380 Q100,280 100,180 Q100,80 180,80 Q250,80 250,140 Q250,80 320,80 Q400,80 400,180 Q400,280 250,380" 
              fill="url(#heartGrad)" stroke="#f43f5e" stroke-width="4"/>
        
        <!-- Septum (dividing wall) -->
        <line x1="250" y1="100" x2="250" y2="350" stroke="#881337" stroke-width="6"/>
        <text x="250" y="370" fill="#881337" font-size="9" text-anchor="middle">Septum</text>
        
        <!-- RIGHT SIDE (left on diagram - deoxygenated) -->
        <!-- Right atrium -->
        <g class="anim-pulse">
          <path d="M135,140 Q180,100 245,120 L245,180 Q180,200 135,160 Z" 
                fill="url(#deoxyGrad)" stroke="#2563eb" stroke-width="2"/>
          <text x="190" y="155" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Right</text>
          <text x="190" y="168" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Atrium</text>
        </g>
        
        <!-- Right ventricle -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <path d="M140,195 L245,195 L245,320 Q180,350 140,280 Z" 
                fill="url(#deoxyGrad)" stroke="#2563eb" stroke-width="2"/>
          <text x="195" y="255" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Right</text>
          <text x="195" y="268" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Ventricle</text>
        </g>
        
        <!-- LEFT SIDE (right on diagram - oxygenated) -->
        <!-- Left atrium -->
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <path d="M255,120 Q320,100 365,140 L365,160 Q320,200 255,180 Z" 
                fill="url(#oxyGrad)" stroke="#dc2626" stroke-width="2"/>
          <text x="310" y="155" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Left</text>
          <text x="310" y="168" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Atrium</text>
        </g>
        
        <!-- Left ventricle (thicker wall) -->
        <g class="anim-pulse" style="animation-delay: 0.7s;">
          <path d="M255,195 L360,195 L360,280 Q320,350 255,320 Z" 
                fill="url(#oxyGrad)" stroke="#dc2626" stroke-width="4"/>
          <text x="305" y="255" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Left</text>
          <text x="305" y="268" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Ventricle</text>
          <text x="305" y="285" fill="white" font-size="8" text-anchor="middle">(thicker wall)</text>
        </g>
        
        <!-- Valves -->
        <path d="M200,190 Q215,180 230,190" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <path d="M270,190 Q285,180 300,190" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <text x="250" y="215" fill="#f59e0b" font-size="8" text-anchor="middle">AV Valves</text>
        
        <!-- BLOOD VESSELS -->
        <!-- Vena cava (top) -->
        <rect x="120" y="50" width="30" height="50" fill="url(#deoxyGrad)" stroke="#2563eb" stroke-width="2" rx="5"/>
        <text x="50" y="65" fill="#2563eb" font-size="9" font-weight="bold">Vena Cava</text>
        <text x="50" y="78" fill="#2563eb" font-size="8">(from body)</text>
        
        <!-- Pulmonary artery -->
        <rect x="170" y="50" width="35" height="45" fill="url(#deoxyGrad)" stroke="#2563eb" stroke-width="2" rx="5"/>
        <text x="155" y="30" fill="#2563eb" font-size="9" font-weight="bold">Pulmonary Artery</text>
        <text x="175" y="43" fill="#2563eb" font-size="8">(to lungs)</text>
        
        <!-- Pulmonary vein -->
        <rect x="295" y="50" width="35" height="45" fill="url(#oxyGrad)" stroke="#dc2626" stroke-width="2" rx="5"/>
        <text x="305" y="30" fill="#dc2626" font-size="9" font-weight="bold">Pulmonary Vein</text>
        <text x="305" y="43" fill="#dc2626" font-size="8">(from lungs)</text>
        
        <!-- Aorta -->
        <rect x="350" y="50" width="30" height="50" fill="url(#oxyGrad)" stroke="#dc2626" stroke-width="2" rx="5"/>
        <text x="405" y="65" fill="#dc2626" font-size="9" font-weight="bold">Aorta</text>
        <text x="405" y="78" fill="#dc2626" font-size="8">(to body)</text>
        
        <!-- Coronary arteries -->
        <g class="anim-pulse-fast">
          <path d="M245,150 Q200,160 180,200" fill="none" stroke="#f97316" stroke-width="3"/>
          <path d="M255,150 Q300,160 320,200" fill="none" stroke="#f97316" stroke-width="3"/>
        </g>
        <text x="250" y="400" fill="#f97316" font-size="9" text-anchor="middle" font-weight="bold">Coronary arteries supply heart muscle with O₂</text>
        
        <!-- Legend -->
        <rect x="20" y="320" width="100" height="50" fill="hsl(var(--muted))" rx="5" opacity="0.7"/>
        <circle cx="35" cy="335" r="8" fill="url(#deoxyGrad)"/>
        <text x="50" y="340" fill="currentColor" font-size="8">Deoxygenated</text>
        <circle cx="35" cy="355" r="8" fill="url(#oxyGrad)"/>
        <text x="50" y="360" fill="currentColor" font-size="8">Oxygenated</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>❤️ Heart Structure — Detailed Breakdown</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Chamber</th>
          <th>Receives Blood From</th>
          <th>Pumps Blood To</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Right atrium</strong></td>
          <td>Body (via vena cava)</td>
          <td>Right ventricle</td>
        </tr>
        <tr>
          <td><strong>Right ventricle</strong></td>
          <td>Right atrium</td>
          <td>Lungs (via pulmonary artery)</td>
        </tr>
        <tr>
          <td><strong>Left atrium</strong></td>
          <td>Lungs (via pulmonary vein)</td>
          <td>Left ventricle</td>
        </tr>
        <tr>
          <td><strong>Left ventricle</strong></td>
          <td>Left atrium</td>
          <td>Body (via aorta)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>💪 Why Is the Left Ventricle Thicker?</h4>
    <ul>
      <li>Needs to create <strong>higher pressure</strong></li>
      <li>Pushes blood <strong>around entire body</strong></li>
      <li>Right ventricle only pumps to <strong>nearby lungs</strong></li>
    </ul>
  </div>

  <div class="table-block">
    <h4>🩸 Major Blood Vessels</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Vessel</th>
          <th>Function</th>
          <th>Blood Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Aorta</strong></td>
          <td>Carries blood → body</td>
          <td>Oxygenated</td>
        </tr>
        <tr>
          <td><strong>Vena cava</strong></td>
          <td>Brings blood → heart</td>
          <td>Deoxygenated</td>
        </tr>
        <tr>
          <td><strong>Pulmonary artery</strong></td>
          <td>Carries blood → lungs</td>
          <td>Deoxygenated</td>
        </tr>
        <tr>
          <td><strong>Pulmonary vein</strong></td>
          <td>Brings blood → heart</td>
          <td>Oxygenated</td>
        </tr>
        <tr>
          <td><strong>Coronary arteries</strong></td>
          <td>Supply heart muscle with O₂</td>
          <td>Oxygenated</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Double Circulation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔁 Double Circulatory System (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="300" viewBox="0 0 480 300">
        <text x="240" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Double Circulation: Two Linked Circuits</text>
        
        <!-- Heart (center) -->
        <ellipse cx="240" cy="150" rx="60" ry="50" fill="#fecdd3" stroke="#f43f5e" stroke-width="3"/>
        <text x="240" y="145" fill="#881337" font-size="12" font-weight="bold" text-anchor="middle">HEART</text>
        <text x="240" y="160" fill="#881337" font-size="9" text-anchor="middle">2 pumps</text>
        
        <!-- Lungs (top) -->
        <ellipse cx="240" cy="50" rx="80" ry="30" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <text x="240" y="55" fill="#1e40af" font-size="11" font-weight="bold" text-anchor="middle">LUNGS</text>
        
        <!-- Body (bottom) -->
        <ellipse cx="240" cy="250" rx="100" ry="35" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="240" y="255" fill="#92400e" font-size="11" font-weight="bold" text-anchor="middle">BODY</text>
        
        <!-- Pulmonary circuit (left side) -->
        <g class="anim-pulse">
          <!-- To lungs (deoxygenated) -->
          <path d="M200,105 Q140,80 200,50" fill="none" stroke="#3b82f6" stroke-width="4" marker-end="url(#arrowhead)"/>
          <text x="130" y="80" fill="#3b82f6" font-size="9" font-weight="bold">Pulmonary</text>
          <text x="130" y="92" fill="#3b82f6" font-size="9" font-weight="bold">artery</text>
          
          <!-- From lungs (oxygenated) -->
          <path d="M280,50 Q340,80 280,105" fill="none" stroke="#ef4444" stroke-width="4" marker-end="url(#arrowhead)"/>
          <text x="330" y="80" fill="#ef4444" font-size="9" font-weight="bold">Pulmonary</text>
          <text x="330" y="92" fill="#ef4444" font-size="9" font-weight="bold">vein</text>
        </g>
        
        <!-- Systemic circuit (right side) -->
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <!-- To body (oxygenated) -->
          <path d="M280,195 Q340,220 280,250" fill="none" stroke="#ef4444" stroke-width="4" marker-end="url(#arrowhead)"/>
          <text x="340" y="220" fill="#ef4444" font-size="9" font-weight="bold">Aorta</text>
          
          <!-- From body (deoxygenated) -->
          <path d="M200,250 Q140,220 200,195" fill="none" stroke="#3b82f6" stroke-width="4" marker-end="url(#arrowhead)"/>
          <text x="100" y="220" fill="#3b82f6" font-size="9" font-weight="bold">Vena cava</text>
        </g>
        
        <!-- Circuit labels -->
        <rect x="20" y="40" width="90" height="40" fill="#dbeafe" rx="5" opacity="0.7"/>
        <text x="65" y="55" fill="#1e40af" font-size="10" font-weight="bold" text-anchor="middle">PULMONARY</text>
        <text x="65" y="70" fill="#1e40af" font-size="9" text-anchor="middle">Circuit</text>
        
        <rect x="370" y="210" width="90" height="40" fill="#fef3c7" rx="5" opacity="0.7"/>
        <text x="415" y="225" fill="#92400e" font-size="10" font-weight="bold" text-anchor="middle">SYSTEMIC</text>
        <text x="415" y="240" fill="#92400e" font-size="9" text-anchor="middle">Circuit</text>
      </svg>
    </div>
  </div>

  <div class="definition-block">
    <h4>🔁 Double Circulatory System</h4>
    <p>Humans have <strong>two linked circuits</strong>:</p>
    
    <h5>1️⃣ Pulmonary Circuit</h5>
    <p>Heart → Lungs → Oxygenation → Heart</p>
    
    <h5>2️⃣ Systemic Circuit</h5>
    <p>Heart → Body → Delivers oxygen → Heart</p>
    
    <h5>Why Double Circulation Is Efficient:</h5>
    <ul>
      <li>Allows blood to be pumped at <strong>high pressure to body</strong></li>
      <li><strong>Faster oxygen delivery</strong> to organs</li>
      <li>Maintains <strong>strong concentration gradients</strong></li>
    </ul>
    <p><em>Fish (single circuit) have slower oxygen delivery because pressure drops in gills.</em></p>
  </div>

  <div class="key-facts-block">
    <h4>🔄 Blood Flow Through the Heart (Step-by-Step)</h4>
    <ol>
      <li>Deoxygenated blood enters <strong>right atrium</strong> (vena cava)</li>
      <li>Valve → <strong>right ventricle</strong></li>
      <li>Pumped through <strong>pulmonary artery</strong> → lungs</li>
      <li>Gas exchange happens</li>
      <li>Oxygenated blood returns by <strong>pulmonary vein</strong> → <strong>left atrium</strong></li>
      <li>Valve → <strong>left ventricle</strong></li>
      <li>Pumped out the <strong>aorta</strong> → body</li>
    </ol>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p><strong>Pulmonary artery</strong> is the ONLY artery carrying deoxygenated blood. <strong>Pulmonary vein</strong> is the ONLY vein carrying oxygenated blood. This is a common exam trick question!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "heart", "atrium", "ventricle", "aorta", "vena cava", "pulmonary artery", "pulmonary vein",
              "double circulation", "systemic", "pulmonary", "coronary artery", "valve", "septum"
            ],
            practice_items: [
              {
                id: "bio-heart-p1",
                prompt_template: "Describe the pathway of blood through the heart, starting from the vena cava.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["right atrium", "right ventricle", "pulmonary artery", "lungs", "pulmonary vein", "left atrium", "left ventricle", "aorta"]
              },
              {
                id: "bio-heart-p2",
                prompt_template: "Explain why humans have a double circulatory system.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["high pressure", "body", "lungs", "efficient", "oxygen delivery"]
              }
            ]
          },
          {
            id: "b4-2-4-cardiovascular-disease",
            title: "B4.2.4 — Cardiovascular Diseases & Treatments",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Cardiovascular Diseases & Treatments</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand coronary heart disease, its causes, and treatments including stents, statins, pacemakers, and artificial hearts with their advantages and disadvantages.</p>
  </div>

  <div class="definition-block">
    <h4>💔 Coronary Heart Disease (CHD)</h4>
    <p><strong>What happens:</strong></p>
    <ul>
      <li>Fatty deposits (cholesterol) build up in <strong>coronary arteries</strong></li>
      <li>Artery <strong>narrows</strong></li>
      <li>Heart muscle receives <strong>less oxygen</strong></li>
      <li>Less aerobic respiration → less energy → <strong>heart attack risk increases</strong></li>
    </ul>
    
    <p><strong>Main causes:</strong></p>
    <ul>
      <li>High cholesterol</li>
      <li>Smoking</li>
      <li>High blood pressure</li>
      <li>Lack of exercise</li>
      <li>Genetic factors</li>
    </ul>
  </div>

  <!-- CHD Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Coronary Heart Disease (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Coronary Artery: Healthy vs. Blocked</text>
        
        <!-- Healthy artery -->
        <g transform="translate(50, 50)">
          <text x="75" y="0" fill="#22c55e" font-size="11" font-weight="bold" text-anchor="middle">Healthy Artery</text>
          
          <!-- Artery wall -->
          <rect x="0" y="20" width="150" height="80" fill="#fecaca" stroke="#ef4444" stroke-width="3" rx="10"/>
          
          <!-- Lumen (open) -->
          <rect x="15" y="40" width="120" height="40" fill="#fef2f2" rx="5"/>
          
          <!-- Blood flow -->
          <g class="anim-pulse">
            <circle cx="40" cy="60" r="8" fill="#ef4444"/>
            <circle cx="75" cy="60" r="8" fill="#ef4444"/>
            <circle cx="110" cy="60" r="8" fill="#ef4444"/>
          </g>
          
          <text x="75" y="120" fill="#22c55e" font-size="9" text-anchor="middle">Good blood flow ✓</text>
        </g>
        
        <!-- Arrow -->
        <text x="250" y="100" fill="currentColor" font-size="20">→</text>
        <text x="250" y="120" fill="#ef4444" font-size="9" text-anchor="middle">CHD develops</text>
        
        <!-- Blocked artery -->
        <g transform="translate(300, 50)">
          <text x="75" y="0" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Blocked Artery</text>
          
          <!-- Artery wall -->
          <rect x="0" y="20" width="150" height="80" fill="#fecaca" stroke="#ef4444" stroke-width="3" rx="10"/>
          
          <!-- Fatty deposits (plaque) -->
          <ellipse cx="40" cy="45" rx="25" ry="15" fill="#fcd34d" stroke="#f59e0b" stroke-width="2"/>
          <ellipse cx="110" cy="75" rx="30" ry="18" fill="#fcd34d" stroke="#f59e0b" stroke-width="2"/>
          <ellipse cx="70" cy="80" rx="20" ry="12" fill="#fcd34d" stroke="#f59e0b" stroke-width="2"/>
          
          <!-- Restricted lumen -->
          <path d="M15,60 Q40,65 75,55 Q110,45 135,60" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,2"/>
          
          <text x="75" y="120" fill="#ef4444" font-size="9" text-anchor="middle">Restricted flow ✗</text>
          <text x="75" y="135" fill="#f59e0b" font-size="8" text-anchor="middle">(fatty plaque)</text>
        </g>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>🛠️ Stents — Pros & Cons</h4>
    <p><strong>Stents = mesh tubes placed in narrowed coronary arteries.</strong></p>
    <table class="data-table">
      <thead>
        <tr>
          <th>✔ Pros</th>
          <th>✖ Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Keeps artery open permanently, restoring blood flow</td>
          <td>Risk of blood clots forming at stent site</td>
        </tr>
        <tr>
          <td>Immediate effect — oxygen supply returns quickly</td>
          <td>Patient must take blood-thinning drugs</td>
        </tr>
        <tr>
          <td>Long-lasting solution (often >10 years)</td>
          <td>Infection risk from surgery</td>
        </tr>
        <tr>
          <td>Rapid recovery time — minimally invasive</td>
          <td>Not effective if many arteries blocked</td>
        </tr>
        <tr>
          <td>Can prevent future heart attacks</td>
          <td>May fail if fatty deposits build around stent</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-block">
    <h4>🧪 Statins — Pros & Cons</h4>
    <p><strong>Statins reduce blood cholesterol by blocking an enzyme in the liver.</strong></p>
    <table class="data-table">
      <thead>
        <tr>
          <th>✔ Pros</th>
          <th>✖ Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lower cholesterol significantly, reducing CHD risk</td>
          <td>Must be taken every day for life</td>
        </tr>
        <tr>
          <td>Help prevent strokes and heart attacks</td>
          <td>Risk of side effects (muscle pain, tiredness)</td>
        </tr>
        <tr>
          <td>May stabilise existing fatty plaques</td>
          <td>Rare liver damage</td>
        </tr>
        <tr>
          <td>Can increase good HDL cholesterol</td>
          <td>Not suitable for pregnant women</td>
        </tr>
        <tr>
          <td>Require no surgery — easy daily pill</td>
          <td>Effects can take months to appear</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>⚡ Pacemakers — Natural & Artificial</h4>
    
    <h5>❤️ Natural Pacemaker</h5>
    <ul>
      <li>A group of specialised cells in <strong>right atrium</strong></li>
      <li>Sends regular <strong>electrical impulses</strong></li>
      <li>Controls natural <strong>heartbeat rhythm</strong></li>
    </ul>
    
    <h5>🤖 Artificial Pacemaker</h5>
    <p>Implanted device that sends electrical signals to maintain heart rhythm.</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>✔ Pros</th>
          <th>✖ Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Corrects slow or irregular heartbeat</td>
          <td>Requires surgical implantation</td>
        </tr>
        <tr>
          <td>Allows patients to exercise normally</td>
          <td>Must avoid strong magnetic fields</td>
        </tr>
        <tr>
          <td>Highly reliable</td>
          <td>Battery needs replacing after several years</td>
        </tr>
        <tr>
          <td>Life-extending for arrhythmias</td>
          <td>Risk of infection or device malfunction</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-block">
    <h4>🤖 Artificial Hearts — Pros & Cons</h4>
    <p><strong>Used when both ventricles fail severely.</strong></p>
    <table class="data-table">
      <thead>
        <tr>
          <th>✔ Pros</th>
          <th>✖ Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Can keep patient alive while waiting for transplant</td>
          <td>Risk of blood clots, requiring blood thinners</td>
        </tr>
        <tr>
          <td>Reduces strain on diseased heart</td>
          <td>Bulky machinery may limit mobility</td>
        </tr>
        <tr>
          <td>No issue with donor rejection</td>
          <td>Not a long-term solution — only temporary</td>
        </tr>
        <tr>
          <td>Life-saving in extreme cases</td>
          <td>Risk of mechanical failure</td>
        </tr>
        <tr>
          <td>Maintains blood flow & oxygen delivery</td>
          <td>Expensive & increased infection risk</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>❤️ Valves — Role in Heart & Veins</h4>
    
    <h5>Valves in the Heart</h5>
    <ul>
      <li>Prevent <strong>backflow</strong> when ventricles contract</li>
      <li>Ensure blood moves in <strong>one direction only</strong></li>
      <li>Maintain <strong>pressure differences</strong></li>
      <li>Stop mixing of oxygenated + deoxygenated blood</li>
    </ul>
    <p><strong>Types:</strong> Atrioventricular valves, Semilunar valves</p>
    
    <h5>🔵 Valves in Veins</h5>
    <ul>
      <li>Prevent backflow in <strong>low-pressure vessels</strong></li>
      <li>Essential in legs where <strong>gravity opposes flow</strong></li>
      <li>Work with contractions of <strong>skeletal muscles</strong></li>
      <li>Failure of valves → <strong>varicose veins</strong></li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>When comparing treatments, always give <strong>balanced pros AND cons</strong>. For stents: immediate effect but surgery risks. For statins: no surgery but lifelong medication. Examiners want you to show critical evaluation!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "coronary heart disease", "CHD", "stent", "statin", "cholesterol", "pacemaker",
              "artificial heart", "valve", "fatty deposit", "plaque", "treatment"
            ],
            practice_items: [
              {
                id: "bio-cvd-p1",
                prompt_template: "Explain how coronary heart disease develops.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["fatty deposits", "cholesterol", "coronary artery", "narrow", "less oxygen", "heart muscle"]
              },
              {
                id: "bio-cvd-p2",
                prompt_template: "Compare the advantages and disadvantages of using stents to treat coronary heart disease.",
                marks: 4,
                type: "short-answer",
                difficulty: "hard",
                randomise: true,
                expected_keywords: ["keeps artery open", "immediate", "blood clots", "blood thinners", "surgery"]
              }
            ]
          }
        ]
      },
      // ========================================
      // MODULE 3: BREATHING AND GAS EXCHANGE
      // ========================================
      {
        id: "breathing-gas-exchange-module",
        title: "Module 3: Breathing and Gas Exchange",
        status: "ready",
        subsections: [
          {
            id: "b4-3-1-lung-structure",
            title: "B4.3.1 — Structure of the Lungs",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Structure of the Lungs</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the structure of the lungs, including the trachea, bronchi, bronchioles, alveoli, and their roles in gas exchange.</p>
  </div>

  <div class="definition-block">
    <h4>🫁 Location of the Lungs</h4>
    <p>The lungs are located in the <strong>thorax</strong> and protected by the <strong>ribcage</strong>. They sit above the <strong>diaphragm</strong>, a dome-shaped muscle essential for breathing.</p>
  </div>

  <!-- Lung Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Structure of the Respiratory System (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="450" viewBox="0 0 500 450">
        <defs>
          <linearGradient id="lungGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#fecdd3;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#fda4af;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="tracheaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#93c5fd;stop-opacity:0.9"/>
            <stop offset="50%" style="stop-color:#60a5fa;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#93c5fd;stop-opacity:0.9"/>
          </linearGradient>
        </defs>
        
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">The Respiratory System</text>
        
        <!-- Ribcage outline -->
        <path d="M100,80 Q80,150 90,280 Q100,350 150,380 Q200,400 250,405 Q300,400 350,380 Q400,350 410,280 Q420,150 400,80" 
              fill="none" stroke="hsl(var(--muted-foreground))" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
        <text x="420" y="150" fill="hsl(var(--muted-foreground))" font-size="9">Ribcage</text>
        
        <!-- Trachea (windpipe) -->
        <g class="anim-pulse">
          <rect x="230" y="40" width="40" height="80" fill="url(#tracheaGrad)" stroke="#3b82f6" stroke-width="2" rx="5"/>
          <!-- Cartilage rings -->
          <line x1="230" y1="55" x2="270" y2="55" stroke="#2563eb" stroke-width="3"/>
          <line x1="230" y1="75" x2="270" y2="75" stroke="#2563eb" stroke-width="3"/>
          <line x1="230" y1="95" x2="270" y2="95" stroke="#2563eb" stroke-width="3"/>
        </g>
        <text x="300" y="60" fill="#3b82f6" font-size="10" font-weight="bold">Trachea</text>
        <text x="300" y="75" fill="#3b82f6" font-size="9">(windpipe)</text>
        <text x="300" y="90" fill="#3b82f6" font-size="8">C-shaped cartilage</text>
        <text x="300" y="103" fill="#3b82f6" font-size="8">prevents collapse</text>
        
        <!-- Bronchi (Y-shape) -->
        <g>
          <path d="M250,120 L200,160" stroke="url(#tracheaGrad)" stroke-width="25" stroke-linecap="round"/>
          <path d="M250,120 L300,160" stroke="url(#tracheaGrad)" stroke-width="25" stroke-linecap="round"/>
        </g>
        <text x="140" y="145" fill="#3b82f6" font-size="10" font-weight="bold">Bronchi</text>
        <text x="140" y="160" fill="#3b82f6" font-size="9">(one to each lung)</text>
        
        <!-- Left Lung -->
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <path d="M100,160 Q80,200 90,280 Q100,340 140,370 Q180,390 210,360 Q230,320 230,250 Q230,180 200,160 Q150,140 100,160" 
                fill="url(#lungGrad)" stroke="#f43f5e" stroke-width="3"/>
          <text x="155" y="270" fill="#881337" font-size="11" font-weight="bold" text-anchor="middle">LEFT</text>
          <text x="155" y="285" fill="#881337" font-size="11" font-weight="bold" text-anchor="middle">LUNG</text>
        </g>
        
        <!-- Right Lung -->
        <g class="anim-pulse" style="animation-delay: 0.4s;">
          <path d="M400,160 Q420,200 410,280 Q400,340 360,370 Q320,390 290,360 Q270,320 270,250 Q270,180 300,160 Q350,140 400,160" 
                fill="url(#lungGrad)" stroke="#f43f5e" stroke-width="3"/>
          <text x="345" y="270" fill="#881337" font-size="11" font-weight="bold" text-anchor="middle">RIGHT</text>
          <text x="345" y="285" fill="#881337" font-size="11" font-weight="bold" text-anchor="middle">LUNG</text>
        </g>
        
        <!-- Bronchioles inside lungs -->
        <g>
          <!-- Left lung bronchioles -->
          <path d="M200,165 Q170,200 150,230" fill="none" stroke="#f87171" stroke-width="4"/>
          <path d="M150,230 Q130,250 120,280" fill="none" stroke="#f87171" stroke-width="3"/>
          <path d="M150,230 Q160,260 170,290" fill="none" stroke="#f87171" stroke-width="3"/>
          
          <!-- Right lung bronchioles -->
          <path d="M300,165 Q330,200 350,230" fill="none" stroke="#f87171" stroke-width="4"/>
          <path d="M350,230 Q370,250 380,280" fill="none" stroke="#f87171" stroke-width="3"/>
          <path d="M350,230 Q340,260 330,290" fill="none" stroke="#f87171" stroke-width="3"/>
        </g>
        <text x="50" y="210" fill="#f87171" font-size="9" font-weight="bold">Bronchioles</text>
        <text x="50" y="223" fill="#f87171" font-size="8">(smaller branches)</text>
        
        <!-- Alveoli clusters -->
        <g class="anim-vibrate-slow">
          <circle cx="115" cy="310" r="12" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="130" cy="295" r="10" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="140" cy="315" r="11" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="175" cy="320" r="12" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="160" cy="305" r="9" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          
          <circle cx="385" cy="310" r="12" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="370" cy="295" r="10" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="360" cy="315" r="11" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="325" cy="320" r="12" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
          <circle cx="340" cy="305" r="9" fill="#fecdd3" stroke="#fb7185" stroke-width="2"/>
        </g>
        <text x="50" y="330" fill="#fb7185" font-size="9" font-weight="bold">Alveoli</text>
        <text x="50" y="343" fill="#fb7185" font-size="8">(gas exchange)</text>
        
        <!-- Diaphragm -->
        <path d="M80,390 Q180,350 250,360 Q320,350 420,390" fill="none" stroke="#8b5cf6" stroke-width="4"/>
        <text x="250" y="420" fill="#8b5cf6" font-size="11" font-weight="bold" text-anchor="middle">Diaphragm</text>
        <text x="250" y="435" fill="#8b5cf6" font-size="9" text-anchor="middle">(dome-shaped muscle)</text>
        
        <!-- Intercostal muscles label -->
        <text x="420" y="250" fill="hsl(var(--muted-foreground))" font-size="9">Intercostal</text>
        <text x="420" y="263" fill="hsl(var(--muted-foreground))" font-size="9">muscles</text>
        <text x="420" y="276" fill="hsl(var(--muted-foreground))" font-size="8">(between ribs)</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>✅ Main Structures of the Respiratory System</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Structure</th>
          <th>Description</th>
          <th>Key Function</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Ribs</strong></td>
          <td>Curved bones surrounding lungs</td>
          <td>Protect lungs + move up/out during inhalation</td>
        </tr>
        <tr>
          <td><strong>Intercostal muscles</strong></td>
          <td>Between ribs</td>
          <td>Contract/relax to move ribcage during breathing</td>
        </tr>
        <tr>
          <td><strong>Diaphragm</strong></td>
          <td>Dome-shaped muscle under lungs</td>
          <td>Controls volume changes in thorax</td>
        </tr>
        <tr>
          <td><strong>Trachea</strong></td>
          <td>Windpipe with rings of cartilage</td>
          <td>Prevents collapse; carries air to lungs</td>
        </tr>
        <tr>
          <td><strong>Bronchi</strong></td>
          <td>Two large tubes branching from trachea</td>
          <td>One to each lung</td>
        </tr>
        <tr>
          <td><strong>Bronchioles</strong></td>
          <td>Smaller branches of bronchi</td>
          <td>Distribute air throughout lungs</td>
        </tr>
        <tr>
          <td><strong>Alveoli</strong></td>
          <td>Millions of tiny air sacs</td>
          <td>Site of gas exchange</td>
        </tr>
        <tr>
          <td><strong>Capillary network</strong></td>
          <td>Surround alveoli</td>
          <td>Carries blood close to air for diffusion</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📊 Key Fact</h4>
    <p>The lungs contain <strong>250–300 million alveoli</strong> giving a total gas exchange surface area of about <strong>70 m²</strong> — the size of a tennis court!</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember the pathway: <strong>Trachea → Bronchi → Bronchioles → Alveoli</strong>. Each step gets smaller and branches more, maximising the surface area for gas exchange.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "lungs", "trachea", "bronchi", "bronchioles", "alveoli", "diaphragm",
              "intercostal muscles", "ribcage", "thorax", "cartilage", "gas exchange"
            ],
            practice_items: [
              {
                id: "bio-lungs-p1",
                prompt_template: "Describe the pathway of air from the mouth to the alveoli.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["trachea", "bronchi", "bronchioles", "alveoli"]
              },
              {
                id: "bio-lungs-p2",
                prompt_template: "Explain the role of the diaphragm in breathing.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["contracts", "flattens", "volume increases", "pressure decreases", "relaxes", "dome"]
              }
            ]
          },
          {
            id: "b4-3-2-gas-exchange",
            title: "B4.3.2 — Gas Exchange: Structure & Adaptations",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Gas Exchange — Structure & Adaptations</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand how gas exchange occurs in the alveoli and the adaptations that make this process efficient.</p>
  </div>

  <div class="definition-block">
    <h4>🌬️➡️🩸 Gas Exchange</h4>
    <p>Gas exchange occurs by <strong>diffusion</strong>:</p>
    <ul>
      <li><strong>O₂ diffuses</strong> from alveoli → blood</li>
      <li><strong>CO₂ diffuses</strong> from blood → alveoli</li>
    </ul>
  </div>

  <!-- Alveolus Gas Exchange Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Gas Exchange in an Alveolus (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="380" viewBox="0 0 500 380">
        <defs>
          <radialGradient id="alveolusGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.3"/>
            <stop offset="100%" style="stop-color:#fecdd3;stop-opacity:0.8"/>
          </radialGradient>
          <linearGradient id="deoxyBloodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#93c5fd;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:0.7"/>
          </linearGradient>
          <linearGradient id="oxyBloodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#fca5a5;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#ef4444;stop-opacity:0.7"/>
          </linearGradient>
        </defs>
        
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Gas Exchange in an Alveolus</text>
        
        <!-- Alveolus (large air sac) -->
        <circle cx="250" cy="180" r="120" fill="url(#alveolusGrad)" stroke="#fb7185" stroke-width="4"/>
        
        <!-- Alveolus wall label -->
        <text x="250" y="80" fill="#fb7185" font-size="10" font-weight="bold" text-anchor="middle">Alveolus wall</text>
        <text x="250" y="95" fill="#fb7185" font-size="9" text-anchor="middle">(one cell thick)</text>
        
        <!-- Air inside alveolus -->
        <text x="250" y="160" fill="currentColor" font-size="12" font-weight="bold" text-anchor="middle">AIR</text>
        <text x="250" y="180" fill="currentColor" font-size="10" text-anchor="middle">(high O₂)</text>
        <text x="250" y="198" fill="currentColor" font-size="10" text-anchor="middle">(low CO₂)</text>
        
        <!-- Capillary wrapping around -->
        <path d="M100,130 Q80,180 100,230 Q130,280 180,300 Q250,320 320,300 Q370,280 400,230 Q420,180 400,130" 
              fill="none" stroke="url(#deoxyBloodGrad)" stroke-width="25" stroke-linecap="round"/>
        
        <!-- Oxygenated section of capillary -->
        <path d="M320,300 Q370,280 400,230 Q420,180 400,130" 
              fill="none" stroke="url(#oxyBloodGrad)" stroke-width="25" stroke-linecap="round"/>
        
        <!-- Capillary wall label -->
        <text x="50" y="180" fill="#3b82f6" font-size="10" font-weight="bold">Capillary</text>
        <text x="50" y="195" fill="#3b82f6" font-size="9">(one cell thick)</text>
        
        <!-- Red blood cells -->
        <g class="anim-pulse">
          <ellipse cx="100" cy="180" rx="10" ry="5" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="130" cy="260" rx="10" ry="5" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="200" cy="300" rx="10" ry="5" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="350" cy="280" rx="10" ry="5" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
          <ellipse cx="400" cy="180" rx="10" ry="5" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
        </g>
        
        <!-- O2 diffusion arrows (into blood) -->
        <g class="anim-pulse-fast">
          <path d="M180,140 L140,140" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowhead)"/>
          <path d="M190,230 L150,260" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowhead)"/>
          <path d="M310,230 L350,260" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowhead)"/>
          <path d="M320,140 L360,140" fill="none" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowhead)"/>
        </g>
        <text x="130" y="125" fill="#22c55e" font-size="11" font-weight="bold">O₂</text>
        <text x="360" y="125" fill="#22c55e" font-size="11" font-weight="bold">O₂</text>
        
        <!-- CO2 diffusion arrows (out of blood) -->
        <g class="anim-pulse-fast" style="animation-delay: 0.3s;">
          <path d="M145,160 L185,160" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowhead)"/>
          <path d="M160,240 L200,210" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowhead)"/>
          <path d="M340,240 L300,210" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowhead)"/>
          <path d="M355,160 L315,160" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowhead)"/>
        </g>
        <text x="130" y="170" fill="#f59e0b" font-size="11" font-weight="bold">CO₂</text>
        <text x="360" y="170" fill="#f59e0b" font-size="11" font-weight="bold">CO₂</text>
        
        <!-- Blood flow direction -->
        <path d="M70,120 L100,130" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="40" y="115" fill="#3b82f6" font-size="9">Deoxygenated</text>
        <text x="40" y="128" fill="#3b82f6" font-size="9">blood IN</text>
        
        <path d="M400,120 L430,110" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowhead)"/>
        <text x="435" y="110" fill="#ef4444" font-size="9">Oxygenated</text>
        <text x="435" y="123" fill="#ef4444" font-size="9">blood OUT</text>
        
        <!-- Key adaptations -->
        <rect x="50" y="330" width="400" height="40" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="250" y="350" fill="currentColor" font-size="10" font-weight="bold" text-anchor="middle">Diffusion Distance = Alveolus wall (1 cell) + Capillary wall (1 cell) = ~2 cells!</text>
        <text x="250" y="365" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">This short distance allows rapid gas exchange</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>⭐ Adaptations of the Lungs for Gas Exchange</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Adaptation</th>
          <th>How It Helps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>1. Enormous surface area</strong></td>
          <td>Millions of alveoli create ~70 m² surface area. Larger surface = faster diffusion.</td>
        </tr>
        <tr>
          <td><strong>2. Very thin walls</strong></td>
          <td>Alveolus wall + capillary wall = 2 cells thick. Short diffusion distance → rapid exchange.</td>
        </tr>
        <tr>
          <td><strong>3. Rich blood supply</strong></td>
          <td>Dense capillary network around each alveolus. Maintains steep concentration gradients.</td>
        </tr>
        <tr>
          <td><strong>4. Moist lining</strong></td>
          <td>Gases dissolve in moisture before diffusing → increases speed.</td>
        </tr>
        <tr>
          <td><strong>5. Good ventilation</strong></td>
          <td>Fresh air brought in with every breath keeps O₂ high and CO₂ low in alveoli.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🔑 Key Principle</h4>
    <p>Together, these features make the alveoli <strong>perfectly adapted</strong> for fast diffusion of oxygen and carbon dioxide.</p>
    <p>The key factors are:</p>
    <ul>
      <li><strong>Large surface area</strong> — more molecules can diffuse at once</li>
      <li><strong>Short diffusion distance</strong> — molecules travel quickly</li>
      <li><strong>Steep concentration gradient</strong> — maintained by blood flow and ventilation</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>When explaining gas exchange adaptations, always link each feature to HOW it increases the rate of diffusion. For example: "Thin walls → short diffusion distance → faster rate of gas exchange."</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "gas exchange", "alveoli", "diffusion", "oxygen", "carbon dioxide", "surface area",
              "thin walls", "blood supply", "concentration gradient", "ventilation", "moist"
            ],
            practice_items: [
              {
                id: "bio-gasexchange-p1",
                prompt_template: "Describe three adaptations of the alveoli for efficient gas exchange.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["large surface area", "thin walls", "blood supply", "moist", "ventilation"]
              },
              {
                id: "bio-gasexchange-p2",
                prompt_template: "Explain why oxygen diffuses from the alveoli into the blood.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["concentration gradient", "high", "low", "diffusion", "net movement"]
              }
            ]
          },
          {
            id: "b4-3-3-ventilation",
            title: "B4.3.3 — Ventilation: Breathing In & Out",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Ventilation (Breathing In & Out)</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the mechanism of ventilation, including the roles of the intercostal muscles, diaphragm, and pressure changes.</p>
  </div>

  <div class="definition-block">
    <h4>🫁↕️ What Is Ventilation?</h4>
    <p><strong>Ventilation</strong> is the mechanical movement of air in and out of the lungs controlled by:</p>
    <ul>
      <li>Intercostal muscles</li>
      <li>Diaphragm</li>
      <li>Ribcage shape</li>
      <li>Thoracic volume</li>
      <li>Air pressure differences</li>
    </ul>
  </div>

  <!-- Breathing Mechanism Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Breathing Mechanism (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="380" viewBox="0 0 520 380">
        <text x="260" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Inhalation vs Exhalation</text>
        
        <!-- INHALATION (left) -->
        <g transform="translate(20, 50)">
          <text x="110" y="0" fill="#22c55e" font-size="13" font-weight="bold" text-anchor="middle">INHALATION</text>
          <text x="110" y="18" fill="#22c55e" font-size="10" text-anchor="middle">(Breathing In)</text>
          
          <!-- Ribcage expanded -->
          <path d="M30,60 Q10,120 20,180 Q40,220 110,230 Q180,220 200,180 Q210,120 190,60" 
                fill="none" stroke="#d1d5db" stroke-width="3"/>
          
          <!-- Ribs moving up and out -->
          <g class="anim-pulse">
            <path d="M40,80 Q110,70 180,80" fill="none" stroke="#6b7280" stroke-width="4"/>
            <path d="M35,110 Q110,95 185,110" fill="none" stroke="#6b7280" stroke-width="4"/>
            <path d="M30,140 Q110,120 190,140" fill="none" stroke="#6b7280" stroke-width="4"/>
          </g>
          
          <!-- Arrows showing rib movement -->
          <path d="M50,75 L40,60" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
          <path d="M170,75 L180,60" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowhead)"/>
          <text x="35" y="55" fill="#22c55e" font-size="8">Up & out</text>
          
          <!-- Lungs expanded -->
          <g class="anim-pulse">
            <ellipse cx="80" cy="150" rx="35" ry="50" fill="#fecdd3" stroke="#f43f5e" stroke-width="2"/>
            <ellipse cx="140" cy="150" rx="35" ry="50" fill="#fecdd3" stroke="#f43f5e" stroke-width="2"/>
          </g>
          
          <!-- Diaphragm flat -->
          <path d="M25,220 Q110,200 195,220" fill="none" stroke="#8b5cf6" stroke-width="5"/>
          <text x="110" y="240" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">Diaphragm CONTRACTS</text>
          <text x="110" y="255" fill="#8b5cf6" font-size="9" text-anchor="middle">(flattens down)</text>
          
          <!-- Air flow arrow -->
          <g class="anim-pulse-fast">
            <path d="M110,30 L110,70" fill="none" stroke="#22c55e" stroke-width="4" marker-end="url(#arrowhead)"/>
            <text x="135" y="50" fill="#22c55e" font-size="10" font-weight="bold">Air IN</text>
          </g>
          
          <!-- Volume/Pressure box -->
          <rect x="30" y="270" width="160" height="50" fill="#dcfce7" rx="5"/>
          <text x="110" y="290" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">Volume ↑ INCREASES</text>
          <text x="110" y="308" fill="#166534" font-size="10" text-anchor="middle">Pressure ↓ DECREASES</text>
        </g>
        
        <!-- Arrow between -->
        <text x="260" y="180" fill="currentColor" font-size="30">⟷</text>
        
        <!-- EXHALATION (right) -->
        <g transform="translate(280, 50)">
          <text x="110" y="0" fill="#ef4444" font-size="13" font-weight="bold" text-anchor="middle">EXHALATION</text>
          <text x="110" y="18" fill="#ef4444" font-size="10" text-anchor="middle">(Breathing Out)</text>
          
          <!-- Ribcage contracted -->
          <path d="M40,60 Q25,120 30,180 Q50,210 110,215 Q170,210 190,180 Q195,120 180,60" 
                fill="none" stroke="#d1d5db" stroke-width="3"/>
          
          <!-- Ribs moving down and in -->
          <g class="anim-pulse" style="animation-delay: 0.5s;">
            <path d="M50,85 Q110,80 170,85" fill="none" stroke="#6b7280" stroke-width="4"/>
            <path d="M45,115 Q110,105 175,115" fill="none" stroke="#6b7280" stroke-width="4"/>
            <path d="M40,145 Q110,130 180,145" fill="none" stroke="#6b7280" stroke-width="4"/>
          </g>
          
          <!-- Arrows showing rib movement -->
          <path d="M55,90 L65,105" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowhead)"/>
          <path d="M165,90 L155,105" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowhead)"/>
          <text x="50" y="85" fill="#ef4444" font-size="8">Down & in</text>
          
          <!-- Lungs contracted -->
          <g class="anim-pulse" style="animation-delay: 0.5s;">
            <ellipse cx="80" cy="145" rx="28" ry="40" fill="#fecdd3" stroke="#f43f5e" stroke-width="2"/>
            <ellipse cx="140" cy="145" rx="28" ry="40" fill="#fecdd3" stroke="#f43f5e" stroke-width="2"/>
          </g>
          
          <!-- Diaphragm dome-shaped -->
          <path d="M35,200 Q110,160 185,200" fill="none" stroke="#8b5cf6" stroke-width="5"/>
          <text x="110" y="230" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">Diaphragm RELAXES</text>
          <text x="110" y="245" fill="#8b5cf6" font-size="9" text-anchor="middle">(moves up as dome)</text>
          
          <!-- Air flow arrow -->
          <g class="anim-pulse-fast" style="animation-delay: 0.5s;">
            <path d="M110,70 L110,30" fill="none" stroke="#ef4444" stroke-width="4" marker-end="url(#arrowhead)"/>
            <text x="135" y="50" fill="#ef4444" font-size="10" font-weight="bold">Air OUT</text>
          </g>
          
          <!-- Volume/Pressure box -->
          <rect x="30" y="270" width="160" height="50" fill="#fee2e2" rx="5"/>
          <text x="110" y="290" fill="#991b1b" font-size="10" font-weight="bold" text-anchor="middle">Volume ↓ DECREASES</text>
          <text x="110" y="308" fill="#991b1b" font-size="10" text-anchor="middle">Pressure ↑ INCREASES</text>
        </g>
        
        <!-- Key principle -->
        <rect x="120" y="340" width="280" height="30" fill="hsl(var(--muted))" rx="5" opacity="0.7"/>
        <text x="260" y="360" fill="currentColor" font-size="10" font-weight="bold" text-anchor="middle">Air flows from HIGH pressure → LOW pressure</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>🌬️ Breathing In (Inhalation) — Active Process</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>What Happens</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intercostal muscles <strong>contract</strong></td>
          <td>Ribs move <strong>up and out</strong></td>
        </tr>
        <tr>
          <td>Diaphragm <strong>contracts</strong></td>
          <td>Moves <strong>down</strong> (flattens)</td>
        </tr>
        <tr>
          <td>Thoracic volume <strong>increases</strong></td>
          <td>—</td>
        </tr>
        <tr>
          <td>Pressure inside thorax <strong>decreases</strong></td>
          <td>Below atmospheric pressure</td>
        </tr>
        <tr>
          <td colspan="2"><strong>➡️ Air moves INTO the lungs</strong> (high → low pressure)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-block">
    <h4>😮‍💨 Breathing Out (Exhalation) — Passive Process at Rest</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>What Happens</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Intercostal muscles <strong>relax</strong></td>
          <td>Ribs move <strong>down and in</strong></td>
        </tr>
        <tr>
          <td>Diaphragm <strong>relaxes</strong></td>
          <td>Moves <strong>up</strong> into dome shape</td>
        </tr>
        <tr>
          <td>Thoracic volume <strong>decreases</strong></td>
          <td>—</td>
        </tr>
        <tr>
          <td>Pressure inside thorax <strong>increases</strong></td>
          <td>Above atmospheric pressure</td>
        </tr>
        <tr>
          <td colspan="2"><strong>➡️ Air is forced OUT of the lungs</strong></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>💪 During Exercise</h4>
    <p>Exhalation becomes <strong>active</strong> as <strong>abdominal muscles contract</strong> to push air out faster.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: <strong>"Contracts = active, Relaxes = passive"</strong>. Inhalation requires muscle contraction (uses energy). Normal exhalation is passive (elastic recoil). Don't confuse diaphragm contracting (flattening) with relaxing (doming up)!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "ventilation", "inhalation", "exhalation", "breathing", "diaphragm", "intercostal muscles",
              "ribcage", "thorax", "volume", "pressure", "contract", "relax"
            ],
            practice_items: [
              {
                id: "bio-vent-p1",
                prompt_template: "Describe the changes that occur in the thorax during inhalation.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["intercostal", "contract", "ribs up", "diaphragm", "flattens", "volume increases", "pressure decreases"]
              },
              {
                id: "bio-vent-p2",
                prompt_template: "Explain why air moves into the lungs when we breathe in.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["volume increases", "pressure decreases", "atmospheric", "high to low"]
              }
            ]
          },
          {
            id: "b4-3-4-air-composition",
            title: "B4.3.4 — Differences Between Inhaled & Exhaled Air",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Differences Between Inhaled & Exhaled Air</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand the differences in composition between inhaled and exhaled air, and explain why these differences occur.</p>
  </div>

  <div class="definition-block">
    <h4>🌫️ Why Does Air Composition Change?</h4>
    <p>The composition of air changes because the body <strong>uses oxygen for respiration</strong> and produces <strong>CO₂ as waste</strong>.</p>
  </div>

  <!-- Air Composition Comparison Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Inhaled vs Exhaled Air Composition (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="320" viewBox="0 0 500 320">
        <text x="250" y="25" fill="currentColor" font-size="14" font-weight="bold" text-anchor="middle">Air Composition: Inhaled vs Exhaled</text>
        
        <!-- INHALED AIR -->
        <g transform="translate(50, 50)">
          <text x="80" y="0" fill="#3b82f6" font-size="12" font-weight="bold" text-anchor="middle">INHALED AIR</text>
          
          <!-- Pie chart -->
          <g class="anim-pulse">
            <!-- Nitrogen (78%) - grey -->
            <path d="M80,120 L80,40 A80,80 0 1,1 15,155 Z" fill="#9ca3af"/>
            
            <!-- Oxygen (21%) - green -->
            <path d="M80,120 L15,155 A80,80 0 0,1 58,43 Z" fill="#22c55e"/>
            
            <!-- Other (1%) - small slice -->
            <path d="M80,120 L58,43 A80,80 0 0,1 80,40 Z" fill="#f59e0b"/>
          </g>
          
          <!-- Labels -->
          <text x="120" y="90" fill="#6b7280" font-size="9" font-weight="bold">N₂ 78%</text>
          <text x="20" y="160" fill="#22c55e" font-size="10" font-weight="bold">O₂ ~21%</text>
          <text x="55" y="55" fill="#f59e0b" font-size="8">CO₂ 0.04%</text>
        </g>
        
        <!-- Arrow showing breathing -->
        <g class="anim-pulse-fast">
          <path d="M200,130 L300,130" fill="none" stroke="currentColor" stroke-width="3" marker-end="url(#arrowhead)"/>
          <text x="250" y="120" fill="currentColor" font-size="10" font-weight="bold" text-anchor="middle">Gas Exchange</text>
          <text x="250" y="150" fill="currentColor" font-size="9" text-anchor="middle">in alveoli</text>
        </g>
        
        <!-- EXHALED AIR -->
        <g transform="translate(310, 50)">
          <text x="80" y="0" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">EXHALED AIR</text>
          
          <!-- Pie chart -->
          <g class="anim-pulse" style="animation-delay: 0.3s;">
            <!-- Nitrogen (78%) - grey (unchanged) -->
            <path d="M80,120 L80,40 A80,80 0 1,1 15,155 Z" fill="#9ca3af"/>
            
            <!-- Oxygen (16%) - green (less) -->
            <path d="M80,120 L15,155 A80,80 0 0,1 72,42 Z" fill="#86efac"/>
            
            <!-- CO2 (4%) - orange (more) -->
            <path d="M80,120 L72,42 A80,80 0 0,1 80,40 Z" fill="#fb923c"/>
          </g>
          
          <!-- Labels -->
          <text x="120" y="90" fill="#6b7280" font-size="9" font-weight="bold">N₂ 78%</text>
          <text x="20" y="160" fill="#86efac" font-size="10" font-weight="bold">O₂ ~16%</text>
          <text x="40" y="50" fill="#fb923c" font-size="9" font-weight="bold">CO₂ ~4%</text>
        </g>
        
        <!-- Change indicators -->
        <rect x="50" y="220" width="400" height="90" fill="hsl(var(--muted))" rx="8" opacity="0.5"/>
        <text x="250" y="245" fill="currentColor" font-size="11" font-weight="bold" text-anchor="middle">Key Changes:</text>
        
        <circle cx="100" cy="270" r="8" fill="#22c55e"/>
        <text x="115" y="275" fill="currentColor" font-size="10">O₂: 21% → 16% (absorbed for respiration)</text>
        
        <circle cx="100" cy="295" r="8" fill="#fb923c"/>
        <text x="115" y="300" fill="currentColor" font-size="10">CO₂: 0.04% → 4% (released as waste)</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>📊 Comparison of Inhaled & Exhaled Air</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Gas/Feature</th>
          <th>Inhaled Air</th>
          <th>Exhaled Air</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>O₂</strong></td>
          <td>~21%</td>
          <td>~16%</td>
          <td>Oxygen is absorbed into bloodstream for aerobic respiration</td>
        </tr>
        <tr>
          <td><strong>CO₂</strong></td>
          <td>~0.04%</td>
          <td>~4%</td>
          <td>Produced by cells → diffuses into blood → breathed out</td>
        </tr>
        <tr>
          <td><strong>Water vapour</strong></td>
          <td>Low</td>
          <td>High</td>
          <td>Air is humidified in respiratory passages</td>
        </tr>
        <tr>
          <td><strong>Temperature</strong></td>
          <td>Cooler</td>
          <td>Warmer</td>
          <td>Air warmed by body</td>
        </tr>
        <tr>
          <td><strong>Dust/bacteria</strong></td>
          <td>More</td>
          <td>Less</td>
          <td>Nose hairs & mucus trap particles</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🔑 Key Points to Remember</h4>
    <ul>
      <li><strong>Oxygen decreases</strong> because it's used in cellular respiration to release energy</li>
      <li><strong>CO₂ increases 100x</strong> because it's a waste product of respiration</li>
      <li><strong>Nitrogen stays the same</strong> (~78%) because we don't use it</li>
      <li>Exhaled air is <strong>warmer and more humid</strong></li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Common mistake: Saying exhaled air "contains no oxygen". Wrong! Exhaled air still contains ~16% oxygen. Only about 5% is absorbed each breath. This is why mouth-to-mouth resuscitation works!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "inhaled air", "exhaled air", "oxygen", "carbon dioxide", "composition",
              "respiration", "water vapour", "temperature", "nitrogen"
            ],
            practice_items: [
              {
                id: "bio-aircomp-p1",
                prompt_template: "Compare the composition of inhaled and exhaled air.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["oxygen", "21%", "16%", "carbon dioxide", "0.04%", "4%", "water vapour", "higher"]
              },
              {
                id: "bio-aircomp-p2",
                prompt_template: "Explain why the percentage of carbon dioxide is higher in exhaled air than inhaled air.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["respiration", "waste product", "cells", "diffuses", "blood", "alveoli"]
              }
            ]
          }
        ]
      }
    ]
  }
];
