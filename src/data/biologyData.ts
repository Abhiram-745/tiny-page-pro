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
      // MODULE 1: CELL STRUCTURE (NEW)
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
    <h4>🔵 Eukaryotic Cells (Plants & Animals)</h4>
    <ul>
      <li>Have a <strong>cell membrane</strong>, <strong>cytoplasm</strong>, and genetic material enclosed in a <strong>nucleus</strong></li>
      <li>DNA is organised into <strong>chromosomes</strong></li>
      <li>Contain organelles such as <strong>mitochondria</strong> and <strong>ribosomes</strong></li>
      <li>Plants also contain <strong>chloroplasts</strong>, a <strong>cell wall</strong>, and a large <strong>vacuole</strong></li>
      <li>Larger and more complex: around <strong>10–100 μm</strong></li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>🔵 Prokaryotic Cells (Bacteria)</h4>
    <ul>
      <li>Much smaller: typically <strong>1–5 μm</strong></li>
      <li>Genetic material is <strong>not inside a nucleus</strong> but in a single <strong>circular DNA loop</strong></li>
      <li>May contain <strong>plasmids</strong> (extra rings of DNA)</li>
      <li>Have <strong>cytoplasm</strong>, <strong>cell membrane</strong>, and <strong>cell wall</strong></li>
      <li><strong>No mitochondria</strong> or chloroplasts</li>
      <li>Smaller size = faster reproduction and simpler structure</li>
    </ul>
  </div>

  <!-- Animated Eukaryotic Cell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Eukaryotic Animal Cell (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="320" viewBox="0 0 400 320">
        <defs>
          <radialGradient id="cellGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#fef3c7;stop-opacity:0.6"/>
            <stop offset="100%" style="stop-color:#fde68a;stop-opacity:0.3"/>
          </radialGradient>
          <radialGradient id="nucleusGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#c084fc;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.6"/>
          </radialGradient>
        </defs>
        
        <!-- Cell membrane -->
        <ellipse cx="200" cy="160" rx="180" ry="140" fill="url(#cellGradient)" stroke="#f59e0b" stroke-width="4"/>
        
        <!-- Cytoplasm label -->
        <text x="80" y="80" fill="currentColor" font-size="10" font-weight="bold">Cytoplasm</text>
        <line x1="95" y1="85" x2="150" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Nucleus -->
        <g class="anim-pulse">
          <ellipse cx="200" cy="160" rx="60" ry="50" fill="url(#nucleusGradient)" stroke="#7c3aed" stroke-width="3"/>
          <!-- Chromosomes inside nucleus -->
          <path d="M180,145 Q175,160 180,175" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
          <path d="M200,140 Q195,160 200,180" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
          <path d="M220,145 Q225,160 220,175" fill="none" stroke="#1e3a8a" stroke-width="3" stroke-linecap="round"/>
        </g>
        <text x="280" y="140" fill="#7c3aed" font-size="10" font-weight="bold">Nucleus</text>
        <text x="280" y="152" fill="#7c3aed" font-size="8">(contains DNA)</text>
        <line x1="260" y1="155" x2="265" y2="155" stroke="#7c3aed" stroke-width="1"/>
        
        <!-- Mitochondria -->
        <g class="anim-pulse-fast" style="animation-delay: 0.3s;">
          <ellipse cx="100" cy="200" rx="25" ry="12" fill="#ef4444" opacity="0.7" stroke="#dc2626" stroke-width="2"/>
          <path d="M80,200 Q90,195 100,200 Q110,205 120,200" fill="none" stroke="#fca5a5" stroke-width="2"/>
        </g>
        <g class="anim-pulse-fast" style="animation-delay: 0.6s;">
          <ellipse cx="300" cy="220" rx="25" ry="12" fill="#ef4444" opacity="0.7" stroke="#dc2626" stroke-width="2"/>
          <path d="M280,220 Q290,215 300,220 Q310,225 320,220" fill="none" stroke="#fca5a5" stroke-width="2"/>
        </g>
        <text x="50" y="235" fill="#dc2626" font-size="9" font-weight="bold">Mitochondria</text>
        <text x="50" y="247" fill="#dc2626" font-size="8">(respiration)</text>
        
        <!-- Ribosomes -->
        <g class="anim-vibrate-slow">
          <circle cx="140" cy="120" r="4" fill="#10b981"/>
          <circle cx="155" cy="130" r="4" fill="#10b981"/>
          <circle cx="250" cy="110" r="4" fill="#10b981"/>
          <circle cx="265" cy="125" r="4" fill="#10b981"/>
          <circle cx="130" cy="250" r="4" fill="#10b981"/>
          <circle cx="270" cy="260" r="4" fill="#10b981"/>
        </g>
        <text x="280" y="95" fill="#10b981" font-size="9" font-weight="bold">Ribosomes</text>
        <text x="280" y="107" fill="#10b981" font-size="8">(protein synthesis)</text>
        
        <!-- Cell membrane label -->
        <text x="320" y="280" fill="#f59e0b" font-size="9" font-weight="bold">Cell Membrane</text>
        <line x1="350" y1="265" x2="350" y2="250" stroke="#f59e0b" stroke-width="1"/>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Eukaryotic cells have a nucleus containing DNA organised into chromosomes</p>
  </div>

  <!-- Animated Prokaryotic Cell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🦠 Prokaryotic Bacterial Cell (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="260" viewBox="0 0 400 260">
        <defs>
          <radialGradient id="bacteriaGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#dbeafe;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#93c5fd;stop-opacity:0.5"/>
          </radialGradient>
        </defs>
        
        <!-- Cell wall -->
        <ellipse cx="200" cy="130" rx="150" ry="90" fill="none" stroke="#1d4ed8" stroke-width="6"/>
        
        <!-- Cell membrane -->
        <ellipse cx="200" cy="130" rx="140" ry="80" fill="url(#bacteriaGradient)" stroke="#3b82f6" stroke-width="3"/>
        
        <!-- Circular DNA loop -->
        <g class="anim-pulse">
          <ellipse cx="200" cy="130" rx="50" ry="35" fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="8,4"/>
        </g>
        <text x="200" y="135" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">Circular DNA</text>
        
        <!-- Plasmids -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 100px 100px;">
          <circle cx="100" cy="100" r="15" fill="none" stroke="#f59e0b" stroke-width="3"/>
        </g>
        <g class="anim-rotate-ccw" style="transform-origin: 290px 160px;">
          <circle cx="290" cy="160" r="12" fill="none" stroke="#f59e0b" stroke-width="3"/>
        </g>
        <text x="70" y="80" fill="#f59e0b" font-size="9" font-weight="bold">Plasmids</text>
        
        <!-- Ribosomes -->
        <g class="anim-vibrate-slow">
          <circle cx="150" cy="90" r="4" fill="#10b981"/>
          <circle cx="170" cy="170" r="4" fill="#10b981"/>
          <circle cx="240" cy="95" r="4" fill="#10b981"/>
          <circle cx="260" cy="165" r="4" fill="#10b981"/>
          <circle cx="130" cy="140" r="4" fill="#10b981"/>
        </g>
        <text x="310" y="90" fill="#10b981" font-size="9" font-weight="bold">Ribosomes</text>
        
        <!-- Flagellum -->
        <g class="anim-wave">
          <path d="M50,130 Q30,110 20,130 Q10,150 0,130" fill="none" stroke="#8b5cf6" stroke-width="3"/>
        </g>
        <text x="5" y="165" fill="#8b5cf6" font-size="9" font-weight="bold">Flagellum</text>
        
        <!-- Labels -->
        <text x="320" y="50" fill="#1d4ed8" font-size="9" font-weight="bold">Cell Wall</text>
        <line x1="320" y1="55" x2="300" y2="70" stroke="#1d4ed8" stroke-width="1"/>
        
        <text x="320" y="200" fill="#3b82f6" font-size="9" font-weight="bold">Cell Membrane</text>
        <line x1="320" y1="190" x2="310" y2="175" stroke="#3b82f6" stroke-width="1"/>
        
        <text x="150" y="240" fill="currentColor" font-size="9">Cytoplasm</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Prokaryotic cells have NO nucleus — DNA floats freely in the cytoplasm</p>
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
    <h4>🧠 Scale & Order of Magnitude</h4>
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

  <!-- Animated Plant Cell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌿 Plant Cell Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="350" viewBox="0 0 420 350">
        <defs>
          <linearGradient id="vacuoleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#c7d2fe;stop-opacity:0.8"/>
            <stop offset="100%" style="stop-color:#a5b4fc;stop-opacity:0.6"/>
          </linearGradient>
          <radialGradient id="chloroplastGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#86efac;stop-opacity:0.9"/>
            <stop offset="100%" style="stop-color:#22c55e;stop-opacity:0.7"/>
          </radialGradient>
        </defs>
        
        <!-- Cell wall (outer rectangle) -->
        <rect x="20" y="20" width="380" height="310" rx="10" fill="none" stroke="#84cc16" stroke-width="8"/>
        
        <!-- Cell membrane -->
        <rect x="35" y="35" width="350" height="280" rx="8" fill="#fef9c3" stroke="#eab308" stroke-width="3"/>
        
        <!-- Large central vacuole -->
        <g class="anim-pulse">
          <ellipse cx="210" cy="175" rx="120" ry="100" fill="url(#vacuoleGradient)" stroke="#6366f1" stroke-width="3"/>
        </g>
        <text x="210" y="175" fill="#4f46e5" font-size="11" text-anchor="middle" font-weight="bold">Vacuole</text>
        <text x="210" y="190" fill="#4f46e5" font-size="9" text-anchor="middle">(cell sap)</text>
        
        <!-- Nucleus -->
        <g class="anim-pulse-fast" style="animation-delay: 0.2s;">
          <ellipse cx="100" cy="100" rx="40" ry="35" fill="#c084fc" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="100" cy="100" r="10" fill="#581c87"/>
        </g>
        <text x="100" y="150" fill="#7c3aed" font-size="9" text-anchor="middle" font-weight="bold">Nucleus</text>
        
        <!-- Chloroplasts -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <ellipse cx="320" cy="85" rx="30" ry="15" fill="url(#chloroplastGradient)" stroke="#16a34a" stroke-width="2"/>
          <line x1="300" y1="85" x2="340" y2="85" stroke="#166534" stroke-width="1"/>
          <line x1="305" y1="80" x2="335" y2="80" stroke="#166534" stroke-width="1"/>
          <line x1="305" y1="90" x2="335" y2="90" stroke="#166534" stroke-width="1"/>
        </g>
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <ellipse cx="90" cy="260" rx="30" ry="15" fill="url(#chloroplastGradient)" stroke="#16a34a" stroke-width="2"/>
          <line x1="70" y1="260" x2="110" y2="260" stroke="#166534" stroke-width="1"/>
        </g>
        <g class="anim-pulse" style="animation-delay: 0.7s;">
          <ellipse cx="330" cy="280" rx="30" ry="15" fill="url(#chloroplastGradient)" stroke="#16a34a" stroke-width="2"/>
        </g>
        <text x="355" y="60" fill="#16a34a" font-size="9" font-weight="bold">Chloroplasts</text>
        <text x="355" y="72" fill="#16a34a" font-size="8">(photosynthesis)</text>
        
        <!-- Mitochondria -->
        <g class="anim-pulse-fast" style="animation-delay: 0.4s;">
          <ellipse cx="320" cy="200" rx="20" ry="10" fill="#fca5a5" stroke="#ef4444" stroke-width="2"/>
          <path d="M305,200 Q312,195 320,200 Q328,205 335,200" fill="none" stroke="#b91c1c" stroke-width="1"/>
        </g>
        <text x="350" y="225" fill="#ef4444" font-size="9" font-weight="bold">Mitochondria</text>
        
        <!-- Ribosomes -->
        <g class="anim-vibrate-slow">
          <circle cx="180" cy="75" r="3" fill="#10b981"/>
          <circle cx="165" cy="85" r="3" fill="#10b981"/>
          <circle cx="270" cy="290" r="3" fill="#10b981"/>
        </g>
        
        <!-- Labels -->
        <text x="30" y="15" fill="#84cc16" font-size="10" font-weight="bold">Cell Wall</text>
        <text x="350" y="330" fill="#eab308" font-size="9" font-weight="bold">Cell Membrane</text>
        <text x="55" y="310" fill="currentColor" font-size="9">Cytoplasm</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Plant cells have a regular, box-like shape due to their stiff cell wall</p>
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

  <!-- Nerve Cell -->
  <div class="definition-block">
    <h4>🧠 Nerve Cell (Neurone)</h4>
    <ul>
      <li><strong>Long axon</strong> → carries electrical impulses long distances</li>
      <li><strong>Many dendrites</strong> → connect to multiple neurones</li>
      <li><strong>Myelin sheath</strong> → insulates and speeds impulse transmission</li>
      <li><strong>Lots of mitochondria</strong> → energy for neurotransmitters</li>
    </ul>
  </div>

  <!-- Animated Nerve Cell -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Nerve Cell Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="160" viewBox="0 0 450 160">
        <defs>
          <linearGradient id="axonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#8b5cf6"/>
            <stop offset="100%" style="stop-color:#c084fc"/>
          </linearGradient>
        </defs>
        
        <!-- Cell body -->
        <g class="anim-pulse">
          <circle cx="70" cy="80" r="35" fill="#c084fc" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="70" cy="80" r="12" fill="#581c87"/>
        </g>
        <text x="70" y="130" fill="currentColor" font-size="9" text-anchor="middle">Cell body</text>
        
        <!-- Dendrites -->
        <g class="anim-pulse-fast">
          <path d="M35,60 Q15,45 5,30" fill="none" stroke="#a78bfa" stroke-width="3"/>
          <path d="M35,80 Q15,80 0,75" fill="none" stroke="#a78bfa" stroke-width="3"/>
          <path d="M35,100 Q15,115 5,130" fill="none" stroke="#a78bfa" stroke-width="3"/>
        </g>
        <text x="5" y="145" fill="#a78bfa" font-size="8">Dendrites</text>
        
        <!-- Axon -->
        <line x1="105" y1="80" x2="400" y2="80" stroke="url(#axonGradient)" stroke-width="8"/>
        
        <!-- Myelin sheath segments -->
        <g class="anim-fade-in-out">
          <ellipse cx="150" cy="80" rx="20" ry="12" fill="#fbbf24" opacity="0.7"/>
          <ellipse cx="210" cy="80" rx="20" ry="12" fill="#fbbf24" opacity="0.7"/>
          <ellipse cx="270" cy="80" rx="20" ry="12" fill="#fbbf24" opacity="0.7"/>
          <ellipse cx="330" cy="80" rx="20" ry="12" fill="#fbbf24" opacity="0.7"/>
        </g>
        <text x="270" y="50" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Myelin sheath</text>
        <text x="270" y="62" fill="#f59e0b" font-size="8" text-anchor="middle">(insulation)</text>
        
        <!-- Nerve ending -->
        <g class="anim-pulse">
          <path d="M400,80 L420,60 L430,65" fill="none" stroke="#ec4899" stroke-width="3"/>
          <path d="M400,80 L425,80" fill="none" stroke="#ec4899" stroke-width="3"/>
          <path d="M400,80 L420,100 L430,95" fill="none" stroke="#ec4899" stroke-width="3"/>
        </g>
        <text x="420" y="120" fill="#ec4899" font-size="8">Nerve endings</text>
        
        <!-- Signal animation -->
        <g class="anim-flow-right">
          <circle cx="180" cy="80" r="4" fill="#22c55e"/>
        </g>
        
        <text x="250" y="145" fill="currentColor" font-size="9" text-anchor="middle">Long axon carries impulses over long distances</text>
      </svg>
    </div>
  </div>

  <!-- Muscle Cell -->
  <div class="definition-block">
    <h4>💪 Muscle Cell</h4>
    <ul>
      <li><strong>Packed with mitochondria</strong> → ATP for contraction</li>
      <li><strong>Protein filaments</strong> → slide to shorten the cell</li>
      <li><strong>Long, fibre-like shape</strong> → contracts in one direction</li>
    </ul>
  </div>

  <!-- Sperm Cell -->
  <div class="definition-block">
    <h4>🏊 Sperm Cell</h4>
    <ul>
      <li><strong>Tail (flagellum)</strong> → swimming towards egg</li>
      <li><strong>Mitochondria in midpiece</strong> → energy for movement</li>
      <li><strong>Acrosome</strong> → contains enzymes to break into egg</li>
      <li><strong>Haploid nucleus</strong> → correct number of chromosomes for fertilisation</li>
    </ul>
  </div>

  <!-- Animated Sperm Cell -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🏊 Sperm Cell Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <!-- Head -->
        <g class="anim-pulse">
          <ellipse cx="60" cy="60" rx="30" ry="20" fill="#3b82f6"/>
          <!-- Acrosome -->
          <path d="M30,60 Q20,50 30,40 Q40,50 30,60" fill="#1d4ed8"/>
          <!-- Nucleus -->
          <ellipse cx="65" cy="60" rx="18" ry="12" fill="#1e3a8a"/>
        </g>
        <text x="60" y="95" fill="currentColor" font-size="8" text-anchor="middle">Head</text>
        <text x="25" y="35" fill="#1d4ed8" font-size="7">Acrosome</text>
        
        <!-- Midpiece -->
        <g class="anim-pulse-fast">
          <rect x="90" y="52" width="40" height="16" rx="3" fill="#ef4444" opacity="0.8"/>
          <line x1="95" y1="55" x2="95" y2="67" stroke="#b91c1c" stroke-width="1"/>
          <line x1="105" y1="55" x2="105" y2="67" stroke="#b91c1c" stroke-width="1"/>
          <line x1="115" y1="55" x2="115" y2="67" stroke="#b91c1c" stroke-width="1"/>
          <line x1="125" y1="55" x2="125" y2="67" stroke="#b91c1c" stroke-width="1"/>
        </g>
        <text x="110" y="85" fill="#ef4444" font-size="8" text-anchor="middle">Midpiece</text>
        <text x="110" y="95" fill="#ef4444" font-size="7" text-anchor="middle">(mitochondria)</text>
        
        <!-- Tail -->
        <g class="anim-wave">
          <path d="M130,60 Q180,40 230,60 Q280,80 330,60 Q360,50 380,60" fill="none" stroke="#8b5cf6" stroke-width="3"/>
        </g>
        <text x="280" y="45" fill="#8b5cf6" font-size="8">Tail (flagellum)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Streamlined head + tail for swimming • Mitochondria provide energy</p>
  </div>

  <!-- Root Hair Cell -->
  <div class="definition-block">
    <h4>🌱 Root Hair Cell</h4>
    <ul>
      <li><strong>Long extension</strong> → increases surface area enormously</li>
      <li><strong>Thin wall</strong> → easier movement of substances</li>
      <li><strong>Many mitochondria</strong> → active transport of mineral ions</li>
      <li>Absorbs water efficiently due to large contact with soil</li>
    </ul>
  </div>

  <!-- Animated Root Hair Cell -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌱 Root Hair Cell (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="180" viewBox="0 0 380 180">
        <!-- Cell body -->
        <rect x="40" y="50" width="100" height="80" rx="5" fill="#d9f99d" stroke="#84cc16" stroke-width="3"/>
        
        <!-- Root hair extension -->
        <g class="anim-pulse">
          <path d="M140,90 Q220,90 300,90" fill="none" stroke="#84cc16" stroke-width="40" stroke-linecap="round"/>
        </g>
        
        <!-- Nucleus -->
        <circle cx="90" cy="90" r="20" fill="#c084fc" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="90" cy="90" r="7" fill="#581c87"/>
        
        <!-- Vacuole -->
        <ellipse cx="70" cy="100" rx="15" ry="20" fill="#a5b4fc" opacity="0.5"/>
        
        <!-- Mitochondria -->
        <g class="anim-pulse-fast">
          <ellipse cx="200" cy="90" rx="12" ry="6" fill="#ef4444"/>
          <ellipse cx="240" cy="90" rx="12" ry="6" fill="#ef4444"/>
          <ellipse cx="280" cy="90" rx="12" ry="6" fill="#ef4444"/>
        </g>
        
        <!-- Water movement arrows -->
        <g class="anim-flow-left">
          <path d="M350,70 L310,85" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>
          <path d="M360,90 L320,90" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>
          <path d="M350,110 L310,95" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>
        </g>
        <defs>
          <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
          </marker>
        </defs>
        
        <!-- Soil particles -->
        <circle cx="340" cy="60" r="8" fill="#92400e" opacity="0.6"/>
        <circle cx="365" cy="80" r="6" fill="#92400e" opacity="0.6"/>
        <circle cx="355" cy="120" r="10" fill="#92400e" opacity="0.6"/>
        
        <!-- Labels -->
        <text x="90" y="150" fill="currentColor" font-size="9" text-anchor="middle">Cell body</text>
        <text x="220" y="140" fill="currentColor" font-size="9" text-anchor="middle">Long hair extension</text>
        <text x="220" y="152" fill="currentColor" font-size="8" text-anchor="middle">(↑ surface area)</text>
        <text x="350" y="150" fill="#92400e" font-size="8">Soil</text>
        <text x="340" cy="50" fill="#3b82f6" font-size="8">Water</text>
      </svg>
    </div>
  </div>

  <!-- Xylem -->
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

  <!-- Phloem -->
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

  <!-- Xylem and Phloem Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌿 Xylem & Phloem Vessels (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <!-- Xylem -->
        <g>
          <text x="100" y="20" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">XYLEM</text>
          <!-- Vessel wall with lignin -->
          <rect x="70" y="30" width="60" height="150" fill="none" stroke="#1d4ed8" stroke-width="4"/>
          <!-- Lignin spirals -->
          <g class="anim-draw-infinite">
            <path d="M75,40 Q90,50 75,60 Q90,70 75,80 Q90,90 75,100 Q90,110 75,120 Q90,130 75,140 Q90,150 75,160" fill="none" stroke="#60a5fa" stroke-width="2"/>
            <path d="M125,40 Q110,50 125,60 Q110,70 125,80 Q110,90 125,100 Q110,110 125,120 Q110,130 125,140 Q110,150 125,160" fill="none" stroke="#60a5fa" stroke-width="2"/>
          </g>
          <!-- Water flow -->
          <g class="anim-flow-up">
            <circle cx="100" cy="140" r="4" fill="#22d3ee"/>
            <circle cx="95" cy="100" r="4" fill="#22d3ee"/>
            <circle cx="105" cy="60" r="4" fill="#22d3ee"/>
          </g>
          <!-- Pit -->
          <ellipse cx="70" cy="90" rx="3" ry="8" fill="#93c5fd"/>
          <text x="50" y="90" fill="#3b82f6" font-size="7" text-anchor="end">Pit</text>
          <text x="100" y="195" fill="currentColor" font-size="8" text-anchor="middle">Water ↑</text>
        </g>
        
        <!-- Phloem -->
        <g>
          <text x="300" y="20" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">PHLOEM</text>
          <!-- Sieve tube -->
          <rect x="270" y="30" width="40" height="150" fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
          <!-- Sieve plates -->
          <g class="anim-fade-in-out">
            <line x1="270" y1="70" x2="310" y2="70" stroke="#15803d" stroke-width="2" stroke-dasharray="4,2"/>
            <line x1="270" y1="110" x2="310" y2="110" stroke="#15803d" stroke-width="2" stroke-dasharray="4,2"/>
            <line x1="270" y1="150" x2="310" y2="150" stroke="#15803d" stroke-width="2" stroke-dasharray="4,2"/>
          </g>
          <text x="250" y="70" fill="#16a34a" font-size="7" text-anchor="end">Sieve</text>
          <text x="250" y="78" fill="#16a34a" font-size="7" text-anchor="end">plate</text>
          
          <!-- Companion cell -->
          <rect x="320" y="60" width="30" height="80" fill="#bbf7d0" stroke="#22c55e" stroke-width="2"/>
          <circle cx="335" cy="100" r="8" fill="#166534"/>
          <g class="anim-pulse-fast">
            <ellipse cx="330" cy="80" rx="6" ry="3" fill="#ef4444"/>
            <ellipse cx="340" cy="120" rx="6" ry="3" fill="#ef4444"/>
          </g>
          <text x="335" y="155" fill="#22c55e" font-size="7" text-anchor="middle">Companion</text>
          <text x="335" y="163" fill="#22c55e" font-size="7" text-anchor="middle">cell</text>
          
          <!-- Sugar flow (both ways) -->
          <g class="anim-flow-down">
            <circle cx="290" cy="50" r="4" fill="#fbbf24"/>
          </g>
          <text x="290" y="195" fill="currentColor" font-size="8" text-anchor="middle">Sugars ↑↓</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Xylem: Dead cells, lignin walls, water transport UP only • Phloem: Living cells, sieve plates, sugars BOTH ways</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>For every specialised cell, learn at least <strong>3 structural adaptations</strong> and explain <strong>how each helps its function</strong>.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "nerve cell", "neurone", "axon", "dendrite", "myelin sheath", "impulse",
              "muscle cell", "mitochondria", "protein filaments",
              "sperm cell", "tail", "acrosome", "haploid",
              "root hair cell", "surface area", "active transport",
              "xylem", "lignin", "transpiration",
              "phloem", "sieve plate", "companion cell", "translocation"
            ],
            practice_items: [
              {
                id: "bio-spec-p1",
                prompt_template: "Explain how the structure of a nerve cell is adapted for its function.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["axon", "long", "impulse", "myelin", "insulation", "dendrites", "connections", "mitochondria", "energy"]
              },
              {
                id: "bio-spec-p2",
                prompt_template: "Describe how a root hair cell is adapted for absorbing water and mineral ions.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["long extension", "surface area", "thin wall", "mitochondria", "active transport", "osmosis"]
              },
              {
                id: "bio-spec-p3",
                prompt_template: "Compare the structure and function of xylem and phloem vessels.",
                marks: 6,
                type: "short-answer",
                difficulty: "hard",
                randomise: true,
                expected_keywords: ["xylem", "water", "dead", "lignin", "one-way", "phloem", "sugar", "living", "sieve plate", "two-way"]
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
  <h3 class="subsection-heading">Microscopy — Parts, Use, Magnification & Resolution</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Use microscopes to observe, draw and label cells. Calculate magnification. Compare light and electron microscopes.</p>
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
    <h4>🔬 Light Microscope (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="350" viewBox="0 0 300 350">
        <!-- Base -->
        <rect x="80" y="310" width="140" height="20" rx="5" fill="#374151"/>
        
        <!-- Arm -->
        <path d="M150,310 L150,100 Q150,80 170,80 L180,80" fill="none" stroke="#4b5563" stroke-width="15" stroke-linecap="round"/>
        
        <!-- Stage -->
        <rect x="60" y="200" width="180" height="10" fill="#6b7280"/>
        <rect x="140" y="205" width="20" height="5" fill="#9ca3af"/>
        
        <!-- Eyepiece -->
        <g class="anim-pulse">
          <rect x="165" y="60" width="30" height="40" rx="5" fill="#1f2937"/>
          <ellipse cx="180" cy="55" rx="12" ry="5" fill="#374151"/>
        </g>
        <text x="220" y="75" fill="currentColor" font-size="8">Eyepiece</text>
        <text x="220" y="85" fill="currentColor" font-size="7">(×10)</text>
        
        <!-- Objective lenses -->
        <g>
          <rect x="155" y="145" width="50" height="15" rx="3" fill="#1f2937"/>
          <g class="anim-rotate-cw-slow" style="transform-origin: 180px 160px;">
            <rect x="160" y="160" width="10" height="25" rx="2" fill="#ef4444"/>
            <rect x="175" y="160" width="10" height="35" rx="2" fill="#3b82f6"/>
            <rect x="190" y="160" width="10" height="45" rx="2" fill="#22c55e"/>
          </g>
        </g>
        <text x="220" y="175" fill="currentColor" font-size="8">Objective</text>
        <text x="220" y="185" fill="currentColor" font-size="7">lenses</text>
        
        <!-- Focus wheels -->
        <g class="anim-pulse">
          <circle cx="95" cy="250" r="20" fill="#4b5563" stroke="#374151" stroke-width="3"/>
          <circle cx="95" cy="250" r="8" fill="#1f2937"/>
        </g>
        <text x="40" y="230" fill="currentColor" font-size="7">Coarse</text>
        <text x="40" y="240" fill="currentColor" font-size="7">focus</text>
        
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <circle cx="95" cy="285" r="12" fill="#6b7280" stroke="#4b5563" stroke-width="2"/>
        </g>
        <text x="40" y="290" fill="currentColor" font-size="7">Fine focus</text>
        
        <!-- Light -->
        <g class="anim-pulse-glow">
          <circle cx="150" cy="260" r="15" fill="#fbbf24" opacity="0.6"/>
          <circle cx="150" cy="260" r="8" fill="#fef3c7"/>
        </g>
        <text x="175" y="270" fill="currentColor" font-size="7">Light</text>
        
        <!-- Stage clips -->
        <rect x="70" y="195" width="15" height="8" fill="#9ca3af"/>
        <rect x="215" y="195" width="15" height="8" fill="#9ca3af"/>
        <text x="60" y="220" fill="currentColor" font-size="7">Clips</text>
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
    <h4>🧠 Magnification & Resolution</h4>
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
      // MODULE 2: CELL TRANSPORT (NEW)
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

  <!-- Animated Diffusion Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔄 Diffusion in Action (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="180" viewBox="0 0 450 180">
        <!-- Container -->
        <rect x="20" y="30" width="410" height="120" rx="10" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Membrane -->
        <line x1="225" y1="30" x2="225" y2="150" stroke="#8b5cf6" stroke-width="4" stroke-dasharray="10,5"/>
        <text x="225" y="170" fill="#8b5cf6" font-size="9" text-anchor="middle">Membrane</text>
        
        <!-- High concentration side (left) -->
        <text x="120" y="25" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">HIGH concentration</text>
        <g>
          <!-- Stationary particles -->
          <circle cx="50" cy="60" r="8" fill="#ef4444"/>
          <circle cx="80" cy="80" r="8" fill="#ef4444"/>
          <circle cx="100" cy="50" r="8" fill="#ef4444"/>
          <circle cx="60" cy="110" r="8" fill="#ef4444"/>
          <circle cx="130" cy="90" r="8" fill="#ef4444"/>
          <circle cx="90" cy="130" r="8" fill="#ef4444"/>
          <circle cx="150" cy="60" r="8" fill="#ef4444"/>
          <circle cx="170" cy="100" r="8" fill="#ef4444"/>
          <circle cx="40" cy="90" r="8" fill="#ef4444"/>
          <circle cx="110" cy="120" r="8" fill="#ef4444"/>
          <!-- Moving particles -->
          <g class="anim-flow-right">
            <circle cx="180" cy="70" r="8" fill="#f87171"/>
          </g>
          <g class="anim-flow-right" style="animation-delay: 0.5s;">
            <circle cx="160" cy="110" r="8" fill="#f87171"/>
          </g>
          <g class="anim-flow-right" style="animation-delay: 1s;">
            <circle cx="190" cy="130" r="8" fill="#f87171"/>
          </g>
        </g>
        
        <!-- Low concentration side (right) -->
        <text x="340" y="25" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">LOW concentration</text>
        <g>
          <circle cx="280" cy="80" r="8" fill="#ef4444"/>
          <circle cx="350" cy="100" r="8" fill="#ef4444"/>
          <circle cx="400" cy="70" r="8" fill="#ef4444"/>
        </g>
        
        <!-- Arrow showing net movement -->
        <g class="anim-pulse">
          <path d="M140,160 L310,160" stroke="#22c55e" stroke-width="4" marker-end="url(#greenArrow)"/>
        </g>
        <text x="225" y="178" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">NET MOVEMENT →</text>
        
        <defs>
          <marker id="greenArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Particles spread from high → low concentration until evenly distributed</p>
  </div>

  <div class="key-facts-block">
    <h4>⭐ Why Diffusion is Essential</h4>
    <ul>
      <li>Main method for moving <strong>gases (O₂, CO₂)</strong></li>
      <li>Allows cells to obtain <strong>raw materials rapidly</strong></li>
      <li>Removes <strong>waste products</strong> before they become toxic</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples You Must Recall</h4>
    <ul>
      <li><strong>Gas exchange in lungs:</strong> O₂ diffuses from alveoli → blood (higher O₂ in alveoli). CO₂ diffuses from blood → alveoli (higher CO₂ in blood).</li>
      <li><strong>Photosynthesis in plants:</strong> CO₂ diffuses into leaf cells because photosynthesis constantly uses CO₂, keeping internal concentration low.</li>
      <li><strong>Excretion:</strong> Urea diffuses from liver cells → blood plasma (higher concentration in liver cells).</li>
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
          <td><strong>Higher temperature</strong></td>
          <td>Faster diffusion</td>
          <td>Particles have more kinetic energy → collide more → spread faster</td>
        </tr>
        <tr>
          <td><strong>Steep concentration gradient</strong></td>
          <td>Faster net movement</td>
          <td>Bigger difference = stronger "driving force"</td>
        </tr>
        <tr>
          <td><strong>Thin membrane</strong></td>
          <td>Faster diffusion</td>
          <td>Short diffusion distance → fewer collisions → quicker</td>
        </tr>
        <tr>
          <td><strong>Large surface area</strong></td>
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
    <p>Explain osmosis as a special type of diffusion. Understand effects on plant and animal cells.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What is Osmosis?</h4>
    <p>Osmosis is the <strong>diffusion of water</strong> from a <strong>dilute solution</strong> to a more <strong>concentrated solution</strong> through a <strong>partially permeable membrane</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Breaking It Down</h4>
    <ul>
      <li><strong>Dilute</strong> = high water concentration</li>
      <li><strong>Concentrated</strong> = low water concentration</li>
      <li>Water moves to "even out" the concentration difference</li>
      <li>The <strong>partially permeable membrane</strong> allows water through but not larger solutes</li>
    </ul>
  </div>

  <!-- Animated Osmosis Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>💧 Osmosis Through a Membrane (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="200" viewBox="0 0 450 200">
        <!-- Container -->
        <rect x="20" y="30" width="180" height="140" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <rect x="250" y="30" width="180" height="140" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        
        <!-- Membrane -->
        <rect x="200" y="30" width="50" height="140" fill="#e9d5ff" stroke="#8b5cf6" stroke-width="2"/>
        <!-- Pores -->
        <ellipse cx="225" cy="60" rx="8" ry="4" fill="white"/>
        <ellipse cx="225" cy="100" rx="8" ry="4" fill="white"/>
        <ellipse cx="225" cy="140" rx="8" ry="4" fill="white"/>
        
        <!-- Labels -->
        <text x="110" y="25" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">DILUTE</text>
        <text x="110" y="185" fill="#3b82f6" font-size="8" text-anchor="middle">(high water %)</text>
        <text x="340" y="25" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">CONCENTRATED</text>
        <text x="340" y="185" fill="#f59e0b" font-size="8" text-anchor="middle">(low water %)</text>
        <text x="225" y="185" fill="#8b5cf6" font-size="8" text-anchor="middle">Partially permeable membrane</text>
        
        <!-- Water molecules (left - many) -->
        <g class="anim-brownian">
          <circle cx="50" cy="60" r="6" fill="#60a5fa"/>
          <circle cx="80" cy="80" r="6" fill="#60a5fa"/>
          <circle cx="100" cy="55" r="6" fill="#60a5fa"/>
          <circle cx="60" cy="110" r="6" fill="#60a5fa"/>
          <circle cx="130" cy="90" r="6" fill="#60a5fa"/>
          <circle cx="150" cy="60" r="6" fill="#60a5fa"/>
          <circle cx="90" cy="130" r="6" fill="#60a5fa"/>
          <circle cx="170" cy="100" r="6" fill="#60a5fa"/>
          <circle cx="40" cy="90" r="6" fill="#60a5fa"/>
          <circle cx="120" cy="140" r="6" fill="#60a5fa"/>
        </g>
        
        <!-- Solute particles (right - many) -->
        <g class="anim-vibrate-slow">
          <circle cx="280" cy="70" r="10" fill="#f59e0b"/>
          <circle cx="320" cy="100" r="10" fill="#f59e0b"/>
          <circle cx="360" cy="60" r="10" fill="#f59e0b"/>
          <circle cx="300" cy="140" r="10" fill="#f59e0b"/>
          <circle cx="380" cy="120" r="10" fill="#f59e0b"/>
          <circle cx="400" cy="80" r="10" fill="#f59e0b"/>
        </g>
        
        <!-- Water molecules (right - few) -->
        <circle cx="270" cy="130" r="6" fill="#60a5fa"/>
        <circle cx="410" cy="50" r="6" fill="#60a5fa"/>
        
        <!-- Water moving through membrane -->
        <g class="anim-flow-right">
          <circle cx="210" cy="60" r="6" fill="#22d3ee"/>
        </g>
        <g class="anim-flow-right" style="animation-delay: 0.6s;">
          <circle cx="210" cy="100" r="6" fill="#22d3ee"/>
        </g>
        <g class="anim-flow-right" style="animation-delay: 1.2s;">
          <circle cx="210" cy="140" r="6" fill="#22d3ee"/>
        </g>
        
        <!-- Arrow -->
        <g class="anim-pulse">
          <path d="M140,195 L310,195" stroke="#22c55e" stroke-width="3" marker-end="url(#greenArrow2)"/>
        </g>
        <text x="225" y="205" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">NET WATER MOVEMENT →</text>
        
        <defs>
          <marker id="greenArrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Water moves from dilute (high water) → concentrated (low water) • Solutes cannot pass through</p>
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

  <!-- Animated Plant Cell Osmosis -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌱 Effect of Osmosis on Plant Cells (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Turgid Cell -->
        <g>
          <text x="85" y="20" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">TURGID</text>
          <text x="85" y="32" fill="currentColor" font-size="8" text-anchor="middle">(in dilute solution)</text>
          <rect x="30" y="45" width="110" height="100" rx="5" fill="none" stroke="#22c55e" stroke-width="4"/>
          <g class="anim-pulse">
            <rect x="40" y="55" width="90" height="80" rx="3" fill="#dcfce7" stroke="#86efac" stroke-width="2"/>
            <ellipse cx="85" cy="95" rx="35" ry="30" fill="#a5b4fc" opacity="0.6"/>
          </g>
          <text x="85" y="160" fill="currentColor" font-size="8" text-anchor="middle">Vacuole full</text>
          <text x="85" y="172" fill="currentColor" font-size="8" text-anchor="middle">Cell firm ✓</text>
          <!-- Water arrows in -->
          <g class="anim-flow-right">
            <path d="M5,70 L25,80" stroke="#3b82f6" stroke-width="2" marker-end="url(#blueArr)"/>
            <path d="M5,120 L25,110" stroke="#3b82f6" stroke-width="2" marker-end="url(#blueArr)"/>
          </g>
        </g>
        
        <!-- Normal Cell -->
        <g>
          <text x="250" y="20" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">NORMAL</text>
          <text x="250" y="32" fill="currentColor" font-size="8" text-anchor="middle">(isotonic solution)</text>
          <rect x="195" y="45" width="110" height="100" rx="5" fill="none" stroke="#f59e0b" stroke-width="4"/>
          <rect x="205" y="55" width="90" height="80" rx="3" fill="#fef9c3" stroke="#fde047" stroke-width="2"/>
          <ellipse cx="250" cy="95" rx="30" ry="25" fill="#a5b4fc" opacity="0.5"/>
          <text x="250" y="160" fill="currentColor" font-size="8" text-anchor="middle">No net movement</text>
          <text x="250" y="172" fill="currentColor" font-size="8" text-anchor="middle">Balanced</text>
        </g>
        
        <!-- Plasmolysed Cell -->
        <g>
          <text x="415" y="20" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">PLASMOLYSED</text>
          <text x="415" y="32" fill="currentColor" font-size="8" text-anchor="middle">(in concentrated solution)</text>
          <rect x="360" y="45" width="110" height="100" rx="5" fill="none" stroke="#ef4444" stroke-width="4"/>
          <g class="anim-pulse">
            <ellipse cx="415" cy="95" rx="35" ry="30" fill="#fee2e2" stroke="#fca5a5" stroke-width="2"/>
            <ellipse cx="415" cy="95" rx="15" ry="12" fill="#a5b4fc" opacity="0.4"/>
          </g>
          <text x="415" y="160" fill="currentColor" font-size="8" text-anchor="middle">Cytoplasm shrinks</text>
          <text x="415" y="172" fill="currentColor" font-size="8" text-anchor="middle">Cell wilts ✗</text>
          <!-- Water arrows out -->
          <g class="anim-flow-right">
            <path d="M455,80 L480,70" stroke="#ef4444" stroke-width="2" marker-end="url(#redArr)"/>
            <path d="M455,110 L480,120" stroke="#ef4444" stroke-width="2" marker-end="url(#redArr)"/>
          </g>
        </g>
        
        <defs>
          <marker id="blueArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#3b82f6"/>
          </marker>
          <marker id="redArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#ef4444"/>
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

  <!-- Animated Active Transport -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Active Transport Mechanism (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="220" viewBox="0 0 450 220">
        <!-- Cell membrane -->
        <rect x="20" y="90" width="410" height="40" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
        <text x="225" y="115" fill="#92400e" font-size="9" text-anchor="middle">Cell Membrane</text>
        
        <!-- Labels -->
        <text x="225" y="30" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">OUTSIDE CELL</text>
        <text x="225" y="45" fill="#ef4444" font-size="9" text-anchor="middle">(LOW concentration)</text>
        <text x="225" y="175" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">INSIDE CELL</text>
        <text x="225" y="190" fill="#22c55e" font-size="9" text-anchor="middle">(HIGH concentration)</text>
        
        <!-- Low concentration particles (outside) -->
        <circle cx="60" cy="60" r="8" fill="#3b82f6"/>
        <circle cx="380" cy="70" r="8" fill="#3b82f6"/>
        
        <!-- High concentration particles (inside) -->
        <g class="anim-vibrate-slow">
          <circle cx="80" cy="160" r="8" fill="#3b82f6"/>
          <circle cx="150" cy="165" r="8" fill="#3b82f6"/>
          <circle cx="220" cy="155" r="8" fill="#3b82f6"/>
          <circle cx="290" cy="165" r="8" fill="#3b82f6"/>
          <circle cx="360" cy="160" r="8" fill="#3b82f6"/>
          <circle cx="120" cy="200" r="8" fill="#3b82f6"/>
          <circle cx="260" cy="195" r="8" fill="#3b82f6"/>
          <circle cx="330" cy="200" r="8" fill="#3b82f6"/>
        </g>
        
        <!-- Carrier protein 1 (Step 1 - binding) -->
        <g>
          <rect x="80" y="85" width="50" height="50" rx="10" fill="#8b5cf6"/>
          <text x="105" y="115" fill="white" font-size="8" text-anchor="middle">Carrier</text>
          <circle cx="105" cy="75" r="8" fill="#3b82f6"/>
          <text x="105" y="78" fill="white" font-size="7" text-anchor="middle">1</text>
        </g>
        <text x="105" y="210" fill="currentColor" font-size="8" text-anchor="middle">1. Binds</text>
        
        <!-- Carrier protein 2 (Step 2 - ATP) -->
        <g>
          <rect x="180" y="85" width="50" height="50" rx="10" fill="#a855f7"/>
          <g class="anim-pulse-fast">
            <circle cx="175" cy="110" r="12" fill="#fbbf24"/>
            <text x="175" y="114" fill="#92400e" font-size="7" text-anchor="middle" font-weight="bold">ATP</text>
          </g>
          <circle cx="205" cy="95" r="8" fill="#3b82f6"/>
        </g>
        <text x="205" y="210" fill="currentColor" font-size="8" text-anchor="middle">2. ATP used</text>
        
        <!-- Carrier protein 3 (Step 3 - shape change) -->
        <g class="anim-stretch">
          <rect x="280" y="80" width="50" height="60" rx="10" fill="#c084fc"/>
          <circle cx="305" cy="145" r="8" fill="#3b82f6"/>
        </g>
        <text x="305" y="210" fill="currentColor" font-size="8" text-anchor="middle">3. Changes shape</text>
        
        <!-- Carrier protein 4 (Step 4 - releases) -->
        <g>
          <rect x="380" y="85" width="50" height="50" rx="10" fill="#8b5cf6"/>
          <g class="anim-flow-down">
            <circle cx="405" cy="145" r="8" fill="#3b82f6"/>
          </g>
        </g>
        <text x="405" y="210" fill="currentColor" font-size="8" text-anchor="middle">4. Releases</text>
        
        <!-- Arrow showing direction -->
        <g class="anim-pulse">
          <path d="M50,55 L50,145" stroke="#ef4444" stroke-width="3" marker-end="url(#activeArrow)"/>
        </g>
        <text x="35" y="100" fill="#ef4444" font-size="8" transform="rotate(-90 35,100)">AGAINST gradient</text>
        
        <defs>
          <marker id="activeArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <div class="info-grid">
    <div class="example-block">
      <h4>🌱 Active Transport in Plants</h4>
      <p>Mineral ions (e.g., nitrate for amino acids, magnesium for chlorophyll) are often at <strong>lower concentration in soil</strong> → must enter root hair cells by active transport.</p>
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
    <h4>🧠 Single-Celled Organisms</h4>
    <ul>
      <li><strong>Very large SA:V ratio</strong></li>
      <li>All nutrients/waste diffuse directly through the membrane</li>
      <li>Efficient enough because cell volume is small</li>
      <li><strong>No need</strong> for specialised organs or transport systems</li>
      <li>Example: amoeba relies fully on diffusion for oxygen uptake</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why Multicellular Organisms Need Special Exchange Surfaces</h4>
    <p>As organisms increase in size:</p>
    <ul>
      <li><strong>Volume increases faster than surface area</strong></li>
      <li>Inner cells cannot receive substances quickly enough by diffusion alone</li>
      <li>Diffusion distances become <strong>too long</strong></li>
      <li>Metabolic demand increases (more oxygen, more glucose needed)</li>
    </ul>
    <p>Therefore, large organisms evolved: <strong>lungs, gills, roots, leaves, villi, circulatory systems</strong></p>
  </div>

  <!-- SA:V Ratio Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>📊 Surface Area : Volume Ratio (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="180" viewBox="0 0 450 180">
        <!-- Small cube -->
        <g>
          <rect x="40" y="80" width="40" height="40" fill="#22c55e" stroke="#166534" stroke-width="2" class="anim-pulse"/>
          <text x="60" y="145" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">1 cm cube</text>
          <text x="60" y="158" fill="#22c55e" font-size="8" text-anchor="middle">SA = 6 cm²</text>
          <text x="60" y="170" fill="#22c55e" font-size="8" text-anchor="middle">V = 1 cm³</text>
          <text x="60" y="65" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">SA:V = 6:1</text>
        </g>
        
        <!-- Medium cube -->
        <g>
          <rect x="155" y="60" width="60" height="60" fill="#f59e0b" stroke="#b45309" stroke-width="2" class="anim-pulse" style="animation-delay: 0.3s;"/>
          <text x="185" y="145" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">2 cm cube</text>
          <text x="185" y="158" fill="#f59e0b" font-size="8" text-anchor="middle">SA = 24 cm²</text>
          <text x="185" y="170" fill="#f59e0b" font-size="8" text-anchor="middle">V = 8 cm³</text>
          <text x="185" y="45" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">SA:V = 3:1</text>
        </g>
        
        <!-- Large cube -->
        <g>
          <rect x="290" y="40" width="80" height="80" fill="#ef4444" stroke="#b91c1c" stroke-width="2" class="anim-pulse" style="animation-delay: 0.6s;"/>
          <text x="330" y="145" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">4 cm cube</text>
          <text x="330" y="158" fill="#ef4444" font-size="8" text-anchor="middle">SA = 96 cm²</text>
          <text x="330" y="170" fill="#ef4444" font-size="8" text-anchor="middle">V = 64 cm³</text>
          <text x="330" y="25" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">SA:V = 1.5:1</text>
        </g>
        
        <!-- Arrow showing ratio decreases -->
        <path d="M100,50 L270,50" stroke="currentColor" stroke-width="2" marker-end="url(#simpleArrow)"/>
        <text x="185" y="42" fill="currentColor" font-size="8" text-anchor="middle">SA:V ratio DECREASES →</text>
        
        <defs>
          <marker id="simpleArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">As size increases, SA:V ratio decreases → harder to exchange substances by diffusion alone</p>
  </div>

  <div class="table-block">
    <h4>📊 Features of an Efficient Exchange Surface</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Why It Improves Exchange</th>
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

  <h3 class="subsection-subheading">Specific Exchange Surface Adaptations</h3>

  <!-- Alveoli Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🫁 Alveoli (Lungs) — Gas Exchange (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <!-- Alveolus -->
        <circle cx="200" cy="100" r="70" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
        <text x="200" y="40" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">ALVEOLUS</text>
        
        <!-- Thin wall indication -->
        <text x="285" y="85" fill="currentColor" font-size="8">1 cell thick</text>
        <line x1="270" y1="90" x2="260" y2="100" stroke="currentColor" stroke-width="1"/>
        
        <!-- Capillary -->
        <path d="M100,80 Q130,60 150,80 Q180,110 200,100 Q220,90 250,100 Q280,115 300,80" fill="none" stroke="#ef4444" stroke-width="12" opacity="0.7"/>
        <path d="M100,80 Q130,60 150,80 Q180,110 200,100 Q220,90 250,100 Q280,115 300,80" fill="none" stroke="#fca5a5" stroke-width="6"/>
        <text x="100" y="60" fill="#ef4444" font-size="8">Capillary</text>
        
        <!-- Blood cells -->
        <g class="anim-flow-right">
          <ellipse cx="130" cy="80" rx="8" ry="5" fill="#ef4444"/>
        </g>
        <g class="anim-flow-right" style="animation-delay: 0.5s;">
          <ellipse cx="200" cy="100" rx="8" ry="5" fill="#ef4444"/>
        </g>
        <g class="anim-flow-right" style="animation-delay: 1s;">
          <ellipse cx="270" cy="90" rx="8" ry="5" fill="#ef4444"/>
        </g>
        
        <!-- O2 arrows -->
        <g class="anim-pulse">
          <path d="M200,60 L200,85" stroke="#22c55e" stroke-width="2" marker-end="url(#o2Arrow)"/>
          <circle cx="200" cy="55" r="12" fill="#dcfce7" stroke="#22c55e" stroke-width="1"/>
          <text x="200" y="59" fill="#166534" font-size="8" text-anchor="middle" font-weight="bold">O₂</text>
        </g>
        
        <!-- CO2 arrows -->
        <g class="anim-pulse" style="animation-delay: 0.5s;">
          <path d="M230,115 L230,140" stroke="#8b5cf6" stroke-width="2" marker-end="url(#co2Arrow)"/>
          <circle cx="230" cy="150" r="12" fill="#f3e8ff" stroke="#8b5cf6" stroke-width="1"/>
          <text x="230" y="154" fill="#6b21a8" font-size="8" text-anchor="middle" font-weight="bold">CO₂</text>
        </g>
        
        <!-- Air indicator -->
        <text x="200" y="105" fill="currentColor" font-size="9" text-anchor="middle">Air space</text>
        
        <!-- Features list -->
        <text x="340" y="120" fill="currentColor" font-size="8">✓ Large SA (~70 m²)</text>
        <text x="340" y="135" fill="currentColor" font-size="8">✓ Thin walls (1 cell)</text>
        <text x="340" y="150" fill="currentColor" font-size="8">✓ Rich blood supply</text>
        <text x="340" y="165" fill="currentColor" font-size="8">✓ Moist lining</text>
        <text x="340" y="180" fill="currentColor" font-size="8">✓ Ventilated</text>
        
        <defs>
          <marker id="o2Arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#22c55e"/>
          </marker>
          <marker id="co2Arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#8b5cf6"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <!-- Villi Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🍴 Villi (Small Intestine) — Nutrient Absorption (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="200" viewBox="0 0 350 200">
        <!-- Intestine wall base -->
        <rect x="20" y="150" width="310" height="30" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
        
        <!-- Villi -->
        <g class="anim-oscillate-y">
          <path d="M60,150 Q60,70 80,50 Q100,70 100,150" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <!-- Capillary network -->
          <path d="M70,140 L70,70 Q80,60 90,70 L90,140" fill="none" stroke="#ef4444" stroke-width="4" opacity="0.6"/>
          <!-- Lacteal -->
          <rect x="77" y="70" width="6" height="70" fill="#86efac" rx="2"/>
        </g>
        
        <g class="anim-oscillate-y" style="animation-delay: 0.2s;">
          <path d="M140,150 Q140,70 160,50 Q180,70 180,150" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <path d="M150,140 L150,70 Q160,60 170,70 L170,140" fill="none" stroke="#ef4444" stroke-width="4" opacity="0.6"/>
          <rect x="157" y="70" width="6" height="70" fill="#86efac" rx="2"/>
        </g>
        
        <g class="anim-oscillate-y" style="animation-delay: 0.4s;">
          <path d="M220,150 Q220,70 240,50 Q260,70 260,150" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <path d="M230,140 L230,70 Q240,60 250,70 L250,140" fill="none" stroke="#ef4444" stroke-width="4" opacity="0.6"/>
          <rect x="237" y="70" width="6" height="70" fill="#86efac" rx="2"/>
        </g>
        
        <!-- Microvilli indication -->
        <g class="anim-vibrate-slow">
          <line x1="60" y1="50" x2="60" y2="42" stroke="#f59e0b" stroke-width="1"/>
          <line x1="70" y1="45" x2="70" y2="37" stroke="#f59e0b" stroke-width="1"/>
          <line x1="80" y1="43" x2="80" y2="35" stroke="#f59e0b" stroke-width="1"/>
          <line x1="90" y1="45" x2="90" y2="37" stroke="#f59e0b" stroke-width="1"/>
          <line x1="100" y1="50" x2="100" y2="42" stroke="#f59e0b" stroke-width="1"/>
        </g>
        
        <!-- Labels -->
        <text x="300" y="50" fill="#f59e0b" font-size="9" font-weight="bold">Villus</text>
        <text x="300" y="75" fill="#ef4444" font-size="8">Capillary</text>
        <text x="300" y="95" fill="#22c55e" font-size="8">Lacteal</text>
        <text x="80" y="30" fill="currentColor" font-size="7">Microvilli</text>
        
        <!-- Nutrient absorption arrows -->
        <g class="anim-flow-down">
          <circle cx="50" cy="30" r="4" fill="#fbbf24"/>
          <circle cx="130" cy="25" r="4" fill="#fbbf24"/>
        </g>
        
        <!-- Features -->
        <text x="30" y="195" fill="currentColor" font-size="8">✓ Huge surface area (villi + microvilli) ✓ 1 cell thick ✓ Dense capillary network ✓ Lacteals for fats</text>
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
      // MODULE 3: CELL DIVISION (Existing content renamed)
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
  <h3 class="subsection-heading">Chromosomes — Carriers of Genetic Information</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Structure of chromosomes, genome organisation, chromosome number, DNA replication before division.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What are Chromosomes?</h4>
    <ul>
      <li>Chromosomes are long, coiled <strong>DNA molecules</strong> that carry genes.</li>
      <li>In eukaryotic cells, chromosomes are located inside the <strong>nucleus</strong>.</li>
      <li>DNA is wrapped around <strong>proteins</strong> to keep it compact and organised.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>Before a cell divides, its DNA must be copied.</li>
      <li>This produces the classic <strong>X-shaped chromosome</strong>, made of two identical chromatids.</li>
      <li>The chromatids are joined at a point called the <strong>centromere</strong>.</li>
    </ul>
  </div>

  <!-- Animated Chromosome Structure Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧬 Chromosome Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="280" height="200" viewBox="0 0 280 200">
        <!-- Background glow -->
        <defs>
          <radialGradient id="chromGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:0.3"/>
            <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0"/>
          </radialGradient>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3b82f6"/>
            <stop offset="50%" style="stop-color:#8b5cf6"/>
            <stop offset="100%" style="stop-color:#ec4899"/>
          </linearGradient>
        </defs>
        
        <circle cx="140" cy="100" r="80" fill="url(#chromGlow)"/>
        
        <!-- Sister Chromatid 1 (left arm) -->
        <g class="anim-pulse">
          <path d="M100,30 Q80,50 85,100 Q80,150 100,170" 
                fill="none" stroke="url(#dnaGradient)" stroke-width="12" stroke-linecap="round"/>
        </g>
        
        <!-- Sister Chromatid 2 (right arm) -->
        <g class="anim-pulse" style="animation-delay: 0.3s;">
          <path d="M180,30 Q200,50 195,100 Q200,150 180,170" 
                fill="none" stroke="url(#dnaGradient)" stroke-width="12" stroke-linecap="round"/>
        </g>
        
        <!-- Centromere - pulsing connection point -->
        <g class="anim-pulse-fast">
          <ellipse cx="140" cy="100" rx="20" ry="8" fill="#f59e0b" opacity="0.8"/>
          <ellipse cx="140" cy="100" rx="12" ry="5" fill="#fbbf24"/>
        </g>
        
        <!-- DNA coil indicators -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 92px 60px;">
          <circle cx="92" cy="55" r="3" fill="#60a5fa"/>
          <circle cx="88" cy="65" r="3" fill="#c084fc"/>
        </g>
        <g class="anim-rotate-ccw" style="transform-origin: 188px 60px;">
          <circle cx="188" cy="55" r="3" fill="#60a5fa"/>
          <circle cx="192" cy="65" r="3" fill="#c084fc"/>
        </g>
        
        <!-- Labels -->
        <text x="55" y="100" fill="currentColor" font-size="9" text-anchor="middle">Sister</text>
        <text x="55" y="112" fill="currentColor" font-size="9" text-anchor="middle">Chromatid</text>
        <text x="225" y="100" fill="currentColor" font-size="9" text-anchor="middle">Sister</text>
        <text x="225" y="112" fill="currentColor" font-size="9" text-anchor="middle">Chromatid</text>
        <text x="140" y="125" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Centromere</text>
        <text x="140" y="190" fill="currentColor" font-size="10" text-anchor="middle">X-shaped chromosome after DNA replication</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Two identical chromatids joined at the centromere • DNA coiled around proteins</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Chromosome Pairs (Diploid Cells)</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Chromosomes come in pairs — one from mother, one from father.</li>
      <li>Humans have <strong>46 chromosomes</strong>, arranged as 23 pairs.</li>
      <li>Different species have different numbers: horses have 64, dogs have 78.</li>
    </ul>
  </div>

  <!-- Animated Chromosome Pairs Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>👥 Homologous Chromosome Pairs (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="180" viewBox="0 0 320 180">
        <!-- Pair 1 - from mother (pink) and father (blue) -->
        <g>
          <text x="80" y="20" fill="currentColor" font-size="10" text-anchor="middle">Pair 1</text>
          <!-- Mother's chromosome -->
          <g class="anim-oscillate-y">
            <rect x="55" y="30" width="15" height="80" rx="7" fill="#ec4899" opacity="0.8"/>
            <rect x="58" y="35" width="9" height="70" rx="4" fill="#f472b6"/>
          </g>
          <!-- Father's chromosome -->
          <g class="anim-oscillate-y" style="animation-delay: 0.2s;">
            <rect x="90" y="30" width="15" height="80" rx="7" fill="#3b82f6" opacity="0.8"/>
            <rect x="93" y="35" width="9" height="70" rx="4" fill="#60a5fa"/>
          </g>
          <text x="62" y="125" fill="#ec4899" font-size="8">♀</text>
          <text x="97" y="125" fill="#3b82f6" font-size="8">♂</text>
        </g>
        
        <!-- Pair 2 -->
        <g>
          <text x="160" y="20" fill="currentColor" font-size="10" text-anchor="middle">Pair 2</text>
          <g class="anim-oscillate-y" style="animation-delay: 0.1s;">
            <rect x="135" y="35" width="15" height="70" rx="7" fill="#ec4899" opacity="0.8"/>
            <rect x="138" y="40" width="9" height="60" rx="4" fill="#f472b6"/>
          </g>
          <g class="anim-oscillate-y" style="animation-delay: 0.3s;">
            <rect x="170" y="35" width="15" height="70" rx="7" fill="#3b82f6" opacity="0.8"/>
            <rect x="173" y="40" width="9" height="60" rx="4" fill="#60a5fa"/>
          </g>
          <text x="142" y="120" fill="#ec4899" font-size="8">♀</text>
          <text x="177" y="120" fill="#3b82f6" font-size="8">♂</text>
        </g>
        
        <!-- Pair 3 -->
        <g>
          <text x="240" y="20" fill="currentColor" font-size="10" text-anchor="middle">Pair 3</text>
          <g class="anim-oscillate-y" style="animation-delay: 0.15s;">
            <rect x="215" y="40" width="15" height="60" rx="7" fill="#ec4899" opacity="0.8"/>
            <rect x="218" y="45" width="9" height="50" rx="4" fill="#f472b6"/>
          </g>
          <g class="anim-oscillate-y" style="animation-delay: 0.35s;">
            <rect x="250" y="40" width="15" height="60" rx="7" fill="#3b82f6" opacity="0.8"/>
            <rect x="253" y="45" width="9" height="50" rx="4" fill="#60a5fa"/>
          </g>
          <text x="222" y="115" fill="#ec4899" font-size="8">♀</text>
          <text x="257" y="115" fill="#3b82f6" font-size="8">♂</text>
        </g>
        
        <!-- Legend -->
        <rect x="100" y="145" width="12" height="12" rx="3" fill="#ec4899"/>
        <text x="117" y="155" fill="currentColor" font-size="9">= From Mother</text>
        <rect x="195" y="145" width="12" height="12" rx="3" fill="#3b82f6"/>
        <text x="212" y="155" fill="currentColor" font-size="9">= From Father</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Each pair contains one chromosome from each parent • Humans have 23 pairs (46 total)</p>
  </div>

  <div class="example-block">
    <h4>🟢 Why Pairs Matter</h4>
    <p>This ensures that organisms inherit characteristics from <strong>both parents</strong>, and during cell division each new cell receives a full, identical set of DNA.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Chromosomes Before & During Cell Division</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Most of the time, chromosomes are <strong>uncoiled</strong> and not visible.</li>
      <li>When the cell prepares to divide, DNA replicates forming <strong>identical sister chromatids</strong>.</li>
      <li>Chromosomes then <strong>condense</strong> into short, visible structures.</li>
      <li>Chromatids separate so each new cell receives identical genetic information.</li>
    </ul>
  </div>

  <!-- Animated DNA Replication Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔄 DNA Replication Process (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="140" viewBox="0 0 360 140">
        <!-- Stage 1: Uncoiled DNA -->
        <g>
          <text x="60" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">1. Uncoiled</text>
          <!-- DNA double helix simplified -->
          <g class="anim-wave">
            <path d="M30,40 Q45,35 60,40 Q75,45 90,40" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <path d="M30,50 Q45,55 60,50 Q75,45 90,50" fill="none" stroke="#ef4444" stroke-width="3"/>
          </g>
          <!-- Rungs -->
          <line x1="40" y1="42" x2="40" y2="48" stroke="#10b981" stroke-width="2"/>
          <line x1="60" y1="40" x2="60" y2="50" stroke="#10b981" stroke-width="2"/>
          <line x1="80" y1="42" x2="80" y2="48" stroke="#10b981" stroke-width="2"/>
          <text x="60" y="75" fill="currentColor" font-size="8" text-anchor="middle">DNA strand</text>
        </g>
        
        <!-- Arrow -->
        <path d="M105,45 L125,45" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead2)"/>
        
        <!-- Stage 2: Replicating -->
        <g>
          <text x="180" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">2. Replicating</text>
          <!-- Opening zipper effect -->
          <g class="anim-stretch">
            <path d="M150,35 Q160,40 170,35" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <path d="M150,55 Q160,50 170,55" fill="none" stroke="#ef4444" stroke-width="3"/>
          </g>
          <!-- New strands being built -->
          <g class="anim-fade-in-out">
            <path d="M170,35 Q185,30 200,35" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <path d="M170,42 Q185,47 200,42" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="4,2"/>
            <path d="M170,48 Q185,43 200,48" fill="none" stroke="#a855f7" stroke-width="3" stroke-dasharray="4,2"/>
            <path d="M170,55 Q185,60 200,55" fill="none" stroke="#ef4444" stroke-width="3"/>
          </g>
          <text x="180" y="75" fill="currentColor" font-size="8" text-anchor="middle">Copying</text>
        </g>
        
        <!-- Arrow -->
        <path d="M220,45 L240,45" stroke="currentColor" stroke-width="2"/>
        <polygon points="238,42 245,45 238,48" fill="currentColor"/>
        
        <!-- Stage 3: Two identical copies -->
        <g>
          <text x="300" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">3. Two Copies</text>
          <!-- X-shaped chromosome -->
          <g class="anim-pulse">
            <path d="M280,25 Q270,45 275,55 Q280,60 285,55 Q290,45 280,25" fill="#8b5cf6" opacity="0.7"/>
            <path d="M320,25 Q330,45 325,55 Q320,60 315,55 Q310,45 320,25" fill="#8b5cf6" opacity="0.7"/>
            <ellipse cx="300" cy="55" rx="8" ry="4" fill="#f59e0b"/>
            <path d="M280,85 Q270,65 275,55" fill="none" stroke="#8b5cf6" stroke-width="8" stroke-linecap="round"/>
            <path d="M320,85 Q330,65 325,55" fill="none" stroke="#8b5cf6" stroke-width="8" stroke-linecap="round"/>
          </g>
          <text x="300" y="105" fill="currentColor" font-size="8" text-anchor="middle">X-shaped</text>
          <text x="300" y="115" fill="currentColor" font-size="8" text-anchor="middle">chromosome</text>
        </g>
        
        <!-- Arrowhead definition -->
        <defs>
          <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">DNA unzips → Each strand is copied → Forms X-shaped chromosome with two identical chromatids</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: DNA replication happens <strong>before</strong> cell division. This ensures each daughter cell gets an identical copy of genetic information.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "chromosome", "DNA", "gene", "nucleus", "protein", "chromatid", "centromere",
              "diploid", "pairs", "mother", "father", "46 chromosomes", "23 pairs",
              "replication", "division", "sister chromatids", "identical"
            ],
            practice_items: [
              {
                id: "bio-chrom-p1",
                prompt_template: "Describe the structure of a chromosome and explain why it has an X-shape before cell division.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["DNA", "coiled", "chromatid", "centromere", "replication", "identical", "proteins"]
              },
              {
                id: "bio-chrom-p2",
                prompt_template: "Explain why human cells contain chromosomes in pairs and state how many chromosomes are found in a human body cell.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["46", "23 pairs", "mother", "father", "inherit", "both parents"]
              },
              {
                id: "bio-chrom-p3",
                prompt_template: "Describe what happens to chromosomes before a cell divides.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["DNA", "replicates", "copies", "chromatids", "identical", "condense"]
              }
            ]
          },
          {
            id: "4-1-2-2-cell-cycle-mitosis",
            title: "4.1.2.2 — The Cell Cycle & Mitosis",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">The Cell Cycle</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Stages of the cell cycle, what happens in each stage, importance of mitosis, and how to interpret cell images.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What is the Cell Cycle?</h4>
    <p>The cell cycle is the <strong>continuous series of events</strong> that cells go through as they grow and divide. It ensures accurate duplication and distribution of genetic information.</p>
  </div>

  <!-- Animated Cell Cycle Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔄 The Cell Cycle (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="280" viewBox="0 0 300 280">
        <!-- Circular track -->
        <circle cx="150" cy="130" r="90" fill="none" stroke="currentColor" stroke-width="2" opacity="0.2"/>
        
        <!-- Growth Phase Arc (largest) -->
        <path d="M150,40 A90,90 0 0,1 233,175" fill="none" stroke="#10b981" stroke-width="20" stroke-linecap="round" opacity="0.8"/>
        <text x="210" y="80" fill="#10b981" font-size="10" font-weight="bold">Growth</text>
        <text x="210" y="92" fill="#10b981" font-size="8">Phase</text>
        
        <!-- DNA Synthesis Arc -->
        <path d="M233,175 A90,90 0 0,1 67,175" fill="none" stroke="#3b82f6" stroke-width="20" stroke-linecap="round" opacity="0.8"/>
        <text x="150" y="235" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="middle">DNA Synthesis</text>
        <text x="150" y="247" fill="#3b82f6" font-size="8" text-anchor="middle">(Replication)</text>
        
        <!-- Mitosis Arc (smallest) -->
        <g class="anim-pulse">
          <path d="M67,175 A90,90 0 0,1 150,40" fill="none" stroke="#ef4444" stroke-width="20" stroke-linecap="round" opacity="0.8"/>
        </g>
        <text x="60" y="95" fill="#ef4444" font-size="10" font-weight="bold">Mitosis</text>
        
        <!-- Center label -->
        <circle cx="150" cy="130" r="40" fill="hsl(var(--card))" stroke="currentColor" stroke-width="1"/>
        <text x="150" y="125" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Cell</text>
        <text x="150" y="140" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Cycle</text>
        
        <!-- Animated arrow showing cycle direction -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 150px 130px;">
          <circle cx="150" cy="40" r="8" fill="#f59e0b"/>
          <polygon points="150,30 145,40 155,40" fill="#f59e0b"/>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Most time is spent in Growth phase • DNA copied during Synthesis • Division during Mitosis</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Three Main Stages</h4>
    <ul>
      <li><strong>1. Growth Phase (Interphase)</strong> — Cell grows, organelles duplicate, normal cell activities</li>
      <li><strong>2. DNA Synthesis</strong> — DNA is replicated (copied)</li>
      <li><strong>3. Mitosis</strong> — Nucleus divides, followed by cell division (cytokinesis)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Mitosis — Nuclear Division</h3>
  
  <div class="definition-block">
    <h4>🔵 What is Mitosis?</h4>
    <p>Mitosis is the process where a cell divides to produce <strong>two genetically identical daughter cells</strong>. It is used for growth, repair, and asexual reproduction.</p>
  </div>

  <!-- Animated Mitosis Stages -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Stages of Mitosis (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Parent Cell -->
        <g>
          <text x="60" y="25" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Parent Cell</text>
          <circle cx="60" cy="100" r="45" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <g class="anim-pulse">
            <!-- X-chromosomes -->
            <text x="45" y="95" fill="#8b5cf6" font-size="24">✕</text>
            <text x="60" y="115" fill="#8b5cf6" font-size="24">✕</text>
          </g>
          <text x="60" y="160" fill="currentColor" font-size="8" text-anchor="middle">46 chromosomes</text>
        </g>
        
        <!-- Arrow -->
        <path d="M115,100 L135,100" stroke="currentColor" stroke-width="2" marker-end="url(#mitArrow)"/>
        
        <!-- Chromosomes line up -->
        <g>
          <text x="180" y="25" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Line Up</text>
          <circle cx="180" cy="100" r="45" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <g class="anim-oscillate-y">
            <line x1="180" y1="65" x2="180" y2="135" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2"/>
            <text x="165" y="95" fill="#8b5cf6" font-size="20">✕</text>
            <text x="175" y="115" fill="#8b5cf6" font-size="20">✕</text>
          </g>
          <text x="180" y="160" fill="currentColor" font-size="8" text-anchor="middle">Middle of cell</text>
        </g>
        
        <!-- Arrow -->
        <path d="M235,100 L255,100" stroke="currentColor" stroke-width="2" marker-end="url(#mitArrow)"/>
        
        <!-- Chromatids separate -->
        <g>
          <text x="300" y="25" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Separate</text>
          <ellipse cx="300" cy="100" rx="55" ry="45" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <g class="anim-stretch">
            <text x="265" y="105" fill="#8b5cf6" font-size="16">|</text>
            <text x="275" y="115" fill="#8b5cf6" font-size="16">|</text>
            <text x="315" y="105" fill="#8b5cf6" font-size="16">|</text>
            <text x="325" y="115" fill="#8b5cf6" font-size="16">|</text>
          </g>
          <text x="300" y="160" fill="currentColor" font-size="8" text-anchor="middle">Pulled apart</text>
        </g>
        
        <!-- Arrow -->
        <path d="M365,100 L385,100" stroke="currentColor" stroke-width="2" marker-end="url(#mitArrow)"/>
        
        <!-- Two Daughter Cells -->
        <g>
          <text x="445" y="25" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Two Cells</text>
          <g class="anim-pulse">
            <circle cx="425" cy="85" r="30" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
            <text x="415" y="90" fill="#8b5cf6" font-size="14">✕✕</text>
          </g>
          <g class="anim-pulse" style="animation-delay: 0.3s;">
            <circle cx="465" cy="115" r="30" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
            <text x="455" y="120" fill="#8b5cf6" font-size="14">✕✕</text>
          </g>
          <text x="445" y="160" fill="currentColor" font-size="8" text-anchor="middle">46 chromosomes each</text>
          <text x="445" y="172" fill="#22c55e" font-size="8" text-anchor="middle" font-weight="bold">IDENTICAL!</text>
        </g>
        
        <defs>
          <marker id="mitArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="currentColor"/>
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
      <li><strong>Repair</strong> — Replace damaged or worn-out cells</li>
      <li><strong>Asexual reproduction</strong> — Produce offspring identical to parent (e.g., bacteria, strawberry runners)</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: Mitosis produces <strong>identical</strong> cells. Think "Mi-TWO-sis" = <strong>TWO</strong> identical cells!</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "cell cycle", "mitosis", "interphase", "DNA replication", "growth",
              "daughter cells", "identical", "diploid", "chromosomes",
              "repair", "asexual reproduction", "cytokinesis"
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
  <h3 class="subsection-heading">Stem Cells</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Understand what stem cells are, their types, and their potential therapeutic uses.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 What are Stem Cells?</h4>
    <p>Stem cells are <strong>undifferentiated cells</strong> that can divide to produce more stem cells, or can <strong>differentiate</strong> into specialised cell types.</p>
  </div>

  <!-- Animated Stem Cell Differentiation -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧬 Stem Cell Differentiation (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="220" viewBox="0 0 400 220">
        <!-- Stem cell -->
        <g class="anim-pulse">
          <circle cx="200" cy="50" r="35" fill="#c084fc" stroke="#7c3aed" stroke-width="3"/>
          <text x="200" y="45" fill="white" font-size="9" text-anchor="middle" font-weight="bold">STEM</text>
          <text x="200" y="58" fill="white" font-size="9" text-anchor="middle" font-weight="bold">CELL</text>
        </g>
        <text x="200" y="20" fill="currentColor" font-size="10" text-anchor="middle">Undifferentiated</text>
        
        <!-- Arrows branching out -->
        <g class="anim-draw">
          <path d="M170,80 Q100,120 70,160" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M200,85 L200,160" fill="none" stroke="currentColor" stroke-width="2"/>
          <path d="M230,80 Q300,120 330,160" fill="none" stroke="currentColor" stroke-width="2"/>
        </g>
        
        <!-- Nerve cell -->
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <ellipse cx="70" cy="180" rx="30" ry="20" fill="#3b82f6"/>
          <line x1="40" y1="180" x2="15" y2="165" stroke="#3b82f6" stroke-width="2"/>
          <line x1="40" y1="180" x2="15" y2="195" stroke="#3b82f6" stroke-width="2"/>
          <line x1="100" y1="180" x2="135" y2="180" stroke="#3b82f6" stroke-width="3"/>
        </g>
        <text x="70" y="215" fill="#3b82f6" font-size="9" text-anchor="middle">Nerve cell</text>
        
        <!-- Muscle cell -->
        <g class="anim-pulse" style="animation-delay: 0.4s;">
          <rect x="170" y="165" width="60" height="30" rx="5" fill="#ef4444"/>
          <line x1="180" y1="175" x2="180" y2="185" stroke="#fca5a5" stroke-width="2"/>
          <line x1="190" y1="175" x2="190" y2="185" stroke="#fca5a5" stroke-width="2"/>
          <line x1="200" y1="175" x2="200" y2="185" stroke="#fca5a5" stroke-width="2"/>
          <line x1="210" y1="175" x2="210" y2="185" stroke="#fca5a5" stroke-width="2"/>
          <line x1="220" y1="175" x2="220" y2="185" stroke="#fca5a5" stroke-width="2"/>
        </g>
        <text x="200" y="215" fill="#ef4444" font-size="9" text-anchor="middle">Muscle cell</text>
        
        <!-- Blood cell -->
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <circle cx="330" cy="180" r="20" fill="#f87171"/>
          <ellipse cx="330" cy="180" rx="12" ry="6" fill="#fecaca"/>
        </g>
        <text x="330" y="215" fill="#f87171" font-size="9" text-anchor="middle">Red blood cell</text>
        
        <!-- Label -->
        <text x="200" y="135" fill="currentColor" font-size="9" text-anchor="middle" font-style="italic">Differentiation</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Stem cells can become many different types of specialised cells</p>
  </div>

  <div class="table-block">
    <h4>📊 Types of Stem Cells</h4>
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
          <td>Can become ANY cell type (totipotent/pluripotent)</td>
        </tr>
        <tr>
          <td><strong>Adult</strong></td>
          <td>Bone marrow, skin, etc.</td>
          <td>Limited — can only become certain cell types (multipotent)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Differences</h4>
    <ul>
      <li><strong>Embryonic stem cells</strong> can differentiate into <strong>any</strong> cell type</li>
      <li><strong>Adult stem cells</strong> are more <strong>limited</strong> in what they can become</li>
      <li>In animals, most cells lose the ability to differentiate at an early stage</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Stem Cells in Medicine</h3>
  
  <div class="example-block">
    <h4>🟢 Medical Uses of Stem Cells</h4>
    <ul>
      <li><strong>Treating blood disorders</strong> — Bone marrow transplants use adult stem cells</li>
      <li><strong>Diabetes</strong> — Potential to create insulin-producing cells</li>
      <li><strong>Spinal cord injuries</strong> — Regenerate damaged nerve tissue</li>
      <li><strong>Heart disease</strong> — Repair damaged heart muscle</li>
    </ul>
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

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>In 6-mark questions about stem cells, always discuss <strong>both</strong> scientific benefits AND ethical concerns for a balanced answer.</p>
  </div>
</div>
            `,
            canonical_keywords: [
              "stem cell", "differentiation", "undifferentiated", "specialised",
              "embryonic", "adult", "bone marrow", "totipotent", "pluripotent",
              "ethics", "therapeutic", "treatment", "disease"
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
