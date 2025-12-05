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
      {
        id: "cell-structure-module",
        title: "Module 1: Cell Structure",
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
        <path d="M105,45 L125,45" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/>
        
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
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
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
            id: "bio-p1",
            prompt_template: "Describe the structure of a chromosome and explain why it has an X-shape before cell division.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["DNA", "coiled", "chromatid", "centromere", "replication", "identical", "proteins"]
          },
          {
            id: "bio-p2",
            prompt_template: "Explain why human cells contain chromosomes in pairs and state how many chromosomes are found in a human body cell.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["46", "23 pairs", "mother", "father", "inherit", "both parents"]
          },
          {
            id: "bio-p3",
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
        <path d="M67,175 A90,90 0 0,1 150,40" fill="none" stroke="#8b5cf6" stroke-width="20" stroke-linecap="round" opacity="0.8"/>
        <text x="60" y="90" fill="#8b5cf6" font-size="10" font-weight="bold">Mitosis</text>
        
        <!-- Rotating indicator -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 150px 130px;">
          <circle cx="150" cy="40" r="8" fill="#f59e0b"/>
          <circle cx="150" cy="40" r="4" fill="#fbbf24"/>
        </g>
        
        <!-- Center cell illustration -->
        <g class="anim-pulse">
          <circle cx="150" cy="130" r="35" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
          <circle cx="150" cy="130" r="15" fill="#8b5cf6" opacity="0.5"/>
          <text x="150" y="134" fill="currentColor" font-size="8" text-anchor="middle">Cell</text>
        </g>
        
        <!-- Arrows showing direction -->
        <polygon points="148,42 150,35 152,42" fill="#f59e0b"/>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">The cell cycle repeats continuously • Growth → DNA Synthesis → Mitosis → Division</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">The Three Main Stages (AQA)</h3>
  
  <div class="warning-block">
    <h4>⚠️ Important</h4>
    <p>AQA does <strong>not</strong> require phase names (prophase, anaphase, etc.). You only need to know these three broad stages.</p>
  </div>

  <div class="table-block">
    <table class="styled-table">
      <thead>
        <tr>
          <th>Stage</th>
          <th>What Happens</th>
          <th>Key Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Growth Phase</strong></td>
          <td>Cell grows, increases number of sub-cellular structures</td>
          <td>Ribosomes, mitochondria, enzymes multiply</td>
        </tr>
        <tr>
          <td><strong>DNA Synthesis</strong></td>
          <td>Chromosomes are duplicated</td>
          <td>DNA copied exactly → forms identical chromatids</td>
        </tr>
        <tr>
          <td><strong>Mitosis</strong></td>
          <td>Nucleus divides, chromatids separate</td>
          <td>Each daughter cell gets identical DNA</td>
        </tr>
        <tr>
          <td><strong>Cytokinesis</strong></td>
          <td>Cell membrane & cytoplasm divide</td>
          <td>Splits into two separate daughter cells</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">What Happens During Mitosis?</h3>
  
  <div class="key-facts-block">
    <h4>🧠 AQA-Friendly Description</h4>
    <ol>
      <li>Chromosomes replicate → each becomes two chromatids</li>
      <li>Chromosomes line up at the <strong>centre</strong> of the cell</li>
      <li>Chromatids are <strong>pulled apart</strong> to opposite ends</li>
      <li>Two nuclei form, each containing an identical set of chromosomes</li>
      <li>Cytokinesis occurs → cell splits into <strong>two daughter cells</strong></li>
    </ol>
  </div>

  <!-- Animated Mitosis Process Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Mitosis Process (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="160" viewBox="0 0 380 160">
        <!-- Stage 1: Chromosomes line up -->
        <g>
          <text x="50" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">1. Line Up</text>
          <ellipse cx="50" cy="80" rx="40" ry="50" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
          <!-- Chromosomes at center -->
          <g class="anim-oscillate-y">
            <line x1="35" y1="65" x2="65" y2="65" stroke="#8b5cf6" stroke-width="4" stroke-linecap="round"/>
            <line x1="35" y1="80" x2="65" y2="80" stroke="#ec4899" stroke-width="4" stroke-linecap="round"/>
            <line x1="35" y1="95" x2="65" y2="95" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
          </g>
          <line x1="50" y1="30" x2="50" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
          <text x="50" y="145" fill="currentColor" font-size="7" text-anchor="middle">Centre line</text>
        </g>
        
        <!-- Arrow -->
        <path d="M100,80 L120,80" stroke="currentColor" stroke-width="2"/>
        <polygon points="118,77 125,80 118,83" fill="currentColor"/>
        
        <!-- Stage 2: Chromatids pulling apart -->
        <g>
          <text x="170" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">2. Pull Apart</text>
          <ellipse cx="170" cy="80" rx="45" ry="50" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
          <!-- Spindle fibers -->
          <line x1="140" y1="80" x2="200" y2="80" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2,2" class="anim-stretch"/>
          <!-- Chromatids moving apart -->
          <g class="anim-flow-left">
            <circle cx="145" cy="70" r="6" fill="#8b5cf6"/>
            <circle cx="145" cy="80" r="6" fill="#ec4899"/>
            <circle cx="145" cy="90" r="6" fill="#3b82f6"/>
          </g>
          <g class="anim-flow-right">
            <circle cx="195" cy="70" r="6" fill="#8b5cf6"/>
            <circle cx="195" cy="80" r="6" fill="#ec4899"/>
            <circle cx="195" cy="90" r="6" fill="#3b82f6"/>
          </g>
          <text x="170" y="145" fill="currentColor" font-size="7" text-anchor="middle">Fibres pull</text>
        </g>
        
        <!-- Arrow -->
        <path d="M225,80 L245,80" stroke="currentColor" stroke-width="2"/>
        <polygon points="243,77 250,80 243,83" fill="currentColor"/>
        
        <!-- Stage 3: Two daughter cells -->
        <g>
          <text x="315" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">3. Two Cells</text>
          <!-- Cell 1 -->
          <g class="anim-pulse">
            <ellipse cx="285" cy="80" rx="25" ry="40" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
            <circle cx="285" cy="70" r="4" fill="#8b5cf6"/>
            <circle cx="285" cy="80" r="4" fill="#ec4899"/>
            <circle cx="285" cy="90" r="4" fill="#3b82f6"/>
            <circle cx="285" cy="80" r="10" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
          </g>
          <!-- Cell 2 -->
          <g class="anim-pulse" style="animation-delay: 0.5s;">
            <ellipse cx="345" cy="80" rx="25" ry="40" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="2"/>
            <circle cx="345" cy="70" r="4" fill="#8b5cf6"/>
            <circle cx="345" cy="80" r="4" fill="#ec4899"/>
            <circle cx="345" cy="90" r="4" fill="#3b82f6"/>
            <circle cx="345" cy="80" r="10" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
          </g>
          <text x="315" y="145" fill="currentColor" font-size="7" text-anchor="middle">Identical copies</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Chromosomes line up → Chromatids pulled apart → Two identical daughter cells formed</p>
  </div>

  <div class="example-block">
    <h4>🟢 Daughter Cells Produced by Mitosis</h4>
    <ul>
      <li>✔ Genetically <strong>identical</strong> to each other</li>
      <li>✔ Genetically <strong>identical</strong> to the parent cell</li>
      <li>✔ Same number of chromosomes</li>
    </ul>
    <p>This is essential for producing consistent, functional tissues.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Why Mitosis is Important</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Mitosis is Vital For:</h4>
    <ul>
      <li><strong>✔ Growth</strong> — A fertilised egg (zygote) divides repeatedly to form an embryo → fetus</li>
      <li><strong>✔ Repair</strong> — Damaged tissues (e.g., skin, blood vessels) need new identical cells</li>
      <li><strong>✔ Replacement</strong> — Cells with short lifespans (skin cells, blood cells) must be replaced continuously</li>
      <li><strong>✔ Asexual Reproduction</strong> — Some organisms reproduce by mitosis, producing clones</li>
    </ul>
  </div>

  <!-- Animated Importance of Mitosis Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌱 Why We Need Mitosis (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="340" height="140" viewBox="0 0 340 140">
        <!-- Growth -->
        <g>
          <text x="50" y="20" fill="#10b981" font-size="10" text-anchor="middle" font-weight="bold">Growth</text>
          <g class="anim-pulse">
            <circle cx="40" cy="50" r="8" fill="#10b981" opacity="0.6"/>
            <circle cx="60" cy="50" r="12" fill="#10b981" opacity="0.7"/>
            <circle cx="50" cy="75" r="18" fill="#10b981" opacity="0.8"/>
          </g>
          <text x="50" y="110" fill="currentColor" font-size="8" text-anchor="middle">Zygote →</text>
          <text x="50" y="120" fill="currentColor" font-size="8" text-anchor="middle">Embryo</text>
        </g>
        
        <!-- Repair -->
        <g>
          <text x="135" y="20" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Repair</text>
          <!-- Wound healing animation -->
          <rect x="115" y="45" width="40" height="40" rx="5" fill="#fecaca" stroke="#ef4444" stroke-width="2"/>
          <g class="anim-fade-in-out">
            <line x1="125" y1="55" x2="145" y2="75" stroke="#ef4444" stroke-width="2"/>
            <line x1="145" y1="55" x2="125" y2="75" stroke="#ef4444" stroke-width="2"/>
          </g>
          <g class="anim-pulse-fast">
            <circle cx="135" cy="65" r="8" fill="#3b82f6" opacity="0.5"/>
          </g>
          <text x="135" y="110" fill="currentColor" font-size="8" text-anchor="middle">Healing</text>
          <text x="135" y="120" fill="currentColor" font-size="8" text-anchor="middle">wounds</text>
        </g>
        
        <!-- Replacement -->
        <g>
          <text x="220" y="20" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Replace</text>
          <!-- Skin cells shedding and replacing -->
          <g class="anim-flow-up">
            <rect x="205" y="50" width="8" height="8" rx="1" fill="#f59e0b" opacity="0.3"/>
            <rect x="217" y="55" width="8" height="8" rx="1" fill="#f59e0b" opacity="0.4"/>
            <rect x="229" y="48" width="8" height="8" rx="1" fill="#f59e0b" opacity="0.3"/>
          </g>
          <rect x="200" y="70" width="40" height="15" rx="3" fill="#f59e0b" opacity="0.8"/>
          <text x="220" y="110" fill="currentColor" font-size="8" text-anchor="middle">Skin cells</text>
          <text x="220" y="120" fill="currentColor" font-size="8" text-anchor="middle">replaced</text>
        </g>
        
        <!-- Asexual reproduction -->
        <g>
          <text x="300" y="20" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">Clone</text>
          <!-- Bacteria dividing -->
          <g class="anim-stretch">
            <ellipse cx="285" cy="65" rx="15" ry="20" fill="#8b5cf6" opacity="0.7"/>
          </g>
          <g class="anim-pulse" style="animation-delay: 0.5s;">
            <ellipse cx="315" cy="65" rx="15" ry="20" fill="#8b5cf6" opacity="0.7"/>
          </g>
          <text x="300" y="110" fill="currentColor" font-size="8" text-anchor="middle">Asexual</text>
          <text x="300" y="120" fill="currentColor" font-size="8" text-anchor="middle">reproduction</text>
        </g>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Calculating Cell Cycle Duration</h3>
  
  <div class="definition-block">
    <h4>📊 AQA Calculation Question</h4>
    <p>AQA may provide a table of cells at different stages and ask you to calculate how long each stage lasts or the proportion of cells in each stage.</p>
  </div>

  <div class="formula-box">
    <p>Time in Stage = (Number of cells in stage ÷ Total cells observed) × Total time for cell cycle</p>
    <p class="formula-note">You must convert units (hours → minutes) where required.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Worked Example</h4>
    <p>If 20 out of 100 cells are in mitosis, and the cell cycle takes 24 hours:</p>
    <p><strong>Time in mitosis = (20 ÷ 100) × 24 = 4.8 hours</strong></p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always show your working clearly. If converting to minutes: 4.8 hours × 60 = <strong>288 minutes</strong>.</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "cell cycle", "mitosis", "growth", "DNA synthesis", "replication", "cytokinesis",
          "chromatids", "separate", "daughter cells", "identical", "genetically identical",
          "repair", "replacement", "asexual reproduction", "clones"
        ],
        practice_items: [
          {
            id: "bio-p4",
            prompt_template: "Describe the three main stages of the cell cycle as required by AQA.",
            marks: 6,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["growth", "DNA synthesis", "replication", "mitosis", "chromatids", "separate", "cytokinesis"]
          },
          {
            id: "bio-p5",
            prompt_template: "Explain why mitosis is important for living organisms. Give three reasons.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["growth", "repair", "replacement", "asexual reproduction", "identical"]
          },
          {
            id: "bio-p6",
            prompt_template: "A student counted 150 cells under a microscope. 30 cells were in mitosis. If the total cell cycle time is 20 hours, calculate how long the cells spend in mitosis.",
            marks: 3,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["30", "150", "0.2", "20", "4 hours", "calculation"]
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
  <h3 class="subsection-heading">What Are Stem Cells?</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Definition, types, locations, advantages, disadvantages, potential uses.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 AQA Definition</h4>
    <p>Stem cells are <strong>undifferentiated cells</strong> capable of dividing to make more stem cells and <strong>specialised cells</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Extended Understanding</h4>
    <ul>
      <li>They have <strong>not yet developed</strong> structures for a specific function.</li>
      <li>They can <strong>differentiate</strong> into other cell types.</li>
      <li>They are essential for <strong>growth, repair, and development</strong>.</li>
    </ul>
  </div>

  <!-- Animated Stem Cell Differentiation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Stem Cell Differentiation (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="340" height="200" viewBox="0 0 340 200">
        <!-- Central stem cell -->
        <g class="anim-pulse">
          <circle cx="170" cy="50" r="30" fill="#8b5cf6" opacity="0.3" stroke="#8b5cf6" stroke-width="3"/>
          <circle cx="170" cy="50" r="12" fill="#a855f7"/>
          <text x="170" y="55" fill="white" font-size="8" text-anchor="middle">Stem</text>
        </g>
        <text x="170" y="15" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">Undifferentiated</text>
        
        <!-- Differentiation arrows -->
        <g class="anim-draw-infinite">
          <path d="M145,75 Q100,100 60,130" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/>
          <path d="M170,80 L170,130" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,3"/>
          <path d="M195,75 Q240,100 280,130" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="5,3"/>
        </g>
        
        <!-- Blood cell -->
        <g class="anim-pulse" style="animation-delay: 0.2s;">
          <circle cx="60" cy="155" r="22" fill="#ef4444" opacity="0.7"/>
          <circle cx="55" cy="150" r="8" fill="#fca5a5"/>
          <text x="60" y="190" fill="currentColor" font-size="9" text-anchor="middle">Blood Cell</text>
        </g>
        
        <!-- Nerve cell -->
        <g class="anim-pulse" style="animation-delay: 0.4s;">
          <ellipse cx="170" cy="155" rx="10" ry="20" fill="#3b82f6" opacity="0.7"/>
          <line x1="150" y1="155" x2="130" y2="155" stroke="#3b82f6" stroke-width="2"/>
          <line x1="190" y1="155" x2="210" y2="155" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="130" cy="155" r="3" fill="#60a5fa"/>
          <circle cx="210" cy="155" r="3" fill="#60a5fa"/>
          <text x="170" y="190" fill="currentColor" font-size="9" text-anchor="middle">Nerve Cell</text>
        </g>
        
        <!-- Muscle cell -->
        <g class="anim-pulse" style="animation-delay: 0.6s;">
          <rect x="255" y="140" width="50" height="30" rx="3" fill="#10b981" opacity="0.7"/>
          <line x1="265" y1="145" x2="265" y2="165" stroke="#34d399" stroke-width="2"/>
          <line x1="280" y1="145" x2="280" y2="165" stroke="#34d399" stroke-width="2"/>
          <line x1="295" y1="145" x2="295" y2="165" stroke="#34d399" stroke-width="2"/>
          <text x="280" y="190" fill="currentColor" font-size="9" text-anchor="middle">Muscle Cell</text>
        </g>
        
        <!-- Labels -->
        <text x="170" y="115" fill="currentColor" font-size="8" text-anchor="middle">Differentiation</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Stem cells can differentiate into many specialised cell types</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Where Are Stem Cells Found?</h3>
  
  <div class="table-block">
    <table class="styled-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Location</th>
          <th>Ability</th>
          <th>Can Become</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Embryonic stem cells</strong></td>
          <td>Inside early embryo</td>
          <td>Can become <strong>any</strong> cell type</td>
          <td>Muscle, nerve, blood, skin, liver — all types</td>
        </tr>
        <tr>
          <td><strong>Adult stem cells</strong></td>
          <td>Bone marrow, skin, organs</td>
          <td><strong>Limited</strong> differentiation</td>
          <td>Blood cells, immune cells, skin cells</td>
        </tr>
        <tr>
          <td><strong>Umbilical cord blood</strong></td>
          <td>Cord blood after birth</td>
          <td>Limited</td>
          <td>Various blood cells</td>
        </tr>
        <tr>
          <td><strong>Plant meristem cells</strong></td>
          <td>Root/shoot tips</td>
          <td>Can become <strong>any</strong> plant cell</td>
          <td>Xylem, phloem, root hair cells</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Animated Stem Cell Types Comparison -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>📊 Embryonic vs Adult Stem Cells (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="160" viewBox="0 0 320 160">
        <!-- Embryonic (left) -->
        <g>
          <text x="90" y="20" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">Embryonic</text>
          <g class="anim-pulse">
            <circle cx="90" cy="60" r="25" fill="#ec4899" opacity="0.3" stroke="#ec4899" stroke-width="2"/>
            <circle cx="90" cy="60" r="10" fill="#f472b6"/>
          </g>
          <!-- Many arrows showing versatility -->
          <g class="anim-ripple" style="transform-origin: 90px 60px;">
            <circle cx="90" cy="60" r="40" fill="none" stroke="#ec4899" stroke-width="1" opacity="0.5"/>
          </g>
          <text x="90" y="115" fill="currentColor" font-size="8" text-anchor="middle">Can become</text>
          <text x="90" y="127" fill="#ec4899" font-size="9" text-anchor="middle" font-weight="bold">ANY cell type</text>
          <text x="90" y="145" fill="currentColor" font-size="8" text-anchor="middle">Most versatile ⭐</text>
        </g>
        
        <!-- VS -->
        <text x="160" y="65" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">vs</text>
        
        <!-- Adult (right) -->
        <g>
          <text x="230" y="20" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">Adult</text>
          <g class="anim-pulse" style="animation-delay: 0.3s;">
            <circle cx="230" cy="60" r="25" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="230" cy="60" r="10" fill="#60a5fa"/>
          </g>
          <!-- Fewer arrows showing limited ability -->
          <line x1="230" y1="90" x2="210" y2="105" stroke="#3b82f6" stroke-width="2" class="anim-fade-in-out"/>
          <line x1="230" y1="90" x2="250" y2="105" stroke="#3b82f6" stroke-width="2" class="anim-fade-in-out" style="animation-delay: 0.3s;"/>
          <text x="230" y="115" fill="currentColor" font-size="8" text-anchor="middle">Can become</text>
          <text x="230" y="127" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Limited types</text>
          <text x="230" y="145" fill="currentColor" font-size="8" text-anchor="middle">Partially specialised</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Embryonic = most versatile • Adult = limited but still useful</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Point</h4>
    <p><strong>Embryonic stem cells</strong> = most versatile (can become any cell type)<br/>
    <strong>Adult stem cells</strong> = partially specialised (limited differentiation)</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "stem cells", "undifferentiated", "differentiate", "specialised", "embryonic",
          "adult stem cells", "bone marrow", "meristem", "versatile", "limited"
        ],
        practice_items: [
          {
            id: "bio-p7",
            prompt_template: "Define stem cells using the AQA definition.",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["undifferentiated", "divide", "specialised cells", "stem cells"]
          },
          {
            id: "bio-p8",
            prompt_template: "Compare embryonic stem cells with adult stem cells. Include where they are found and their abilities.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["embryonic", "adult", "any cell type", "limited", "bone marrow", "embryo", "versatile"]
          }
        ]
      },
      {
        id: "4-1-2-4-stem-cells-medicine",
        title: "4.1.2.4 — Stem Cells in Medicine",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Using Stem Cells to Treat Disease</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Uses, benefits, risks, ethical concerns.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Stem Cells May Help Treat:</h4>
    <ul>
      <li><strong>Type 1 diabetes</strong> — replace insulin-producing cells</li>
      <li><strong>Paralysis</strong> — replace damaged nerve tissue</li>
      <li><strong>Blood cancers</strong> — bone marrow transplants</li>
      <li><strong>Organ damage</strong> — grow new tissues in the lab</li>
    </ul>
  </div>

  <!-- Animated Medical Applications Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🏥 Medical Applications (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="150" viewBox="0 0 360 150">
        <!-- Central stem cell -->
        <g class="anim-pulse">
          <circle cx="180" cy="75" r="25" fill="#8b5cf6" opacity="0.5" stroke="#8b5cf6" stroke-width="2"/>
          <text x="180" y="72" fill="white" font-size="8" text-anchor="middle">Stem</text>
          <text x="180" y="82" fill="white" font-size="8" text-anchor="middle">Cell</text>
        </g>
        
        <!-- Diabetes treatment -->
        <g>
          <line x1="155" y1="60" x2="80" y2="35" stroke="#10b981" stroke-width="2" class="anim-draw-infinite"/>
          <g class="anim-pulse-fast">
            <circle cx="60" cy="30" r="18" fill="#10b981" opacity="0.3" stroke="#10b981" stroke-width="2"/>
            <text x="60" y="25" fill="#10b981" font-size="7" text-anchor="middle">Insulin</text>
            <text x="60" y="35" fill="#10b981" font-size="7" text-anchor="middle">cells</text>
          </g>
          <text x="60" y="60" fill="currentColor" font-size="8" text-anchor="middle">Diabetes</text>
        </g>
        
        <!-- Paralysis treatment -->
        <g>
          <line x1="155" y1="90" x2="80" y2="115" stroke="#3b82f6" stroke-width="2" class="anim-draw-infinite" style="animation-delay: 0.3s;"/>
          <g class="anim-pulse-fast" style="animation-delay: 0.3s;">
            <ellipse cx="60" cy="115" rx="8" ry="15" fill="#3b82f6" opacity="0.5"/>
            <line x1="40" y1="115" x2="52" y2="115" stroke="#3b82f6" stroke-width="2"/>
            <line x1="68" y1="115" x2="80" y2="115" stroke="#3b82f6" stroke-width="2"/>
          </g>
          <text x="60" y="140" fill="currentColor" font-size="8" text-anchor="middle">Nerve repair</text>
        </g>
        
        <!-- Blood cancer -->
        <g>
          <line x1="205" y1="60" x2="280" y2="35" stroke="#ef4444" stroke-width="2" class="anim-draw-infinite" style="animation-delay: 0.5s;"/>
          <g class="anim-pulse-fast" style="animation-delay: 0.5s;">
            <circle cx="300" cy="30" r="8" fill="#ef4444" opacity="0.7"/>
            <circle cx="285" cy="25" r="6" fill="#fca5a5" opacity="0.7"/>
            <circle cx="295" cy="40" r="7" fill="#f87171" opacity="0.7"/>
          </g>
          <text x="300" y="60" fill="currentColor" font-size="8" text-anchor="middle">Blood cells</text>
        </g>
        
        <!-- Organ repair -->
        <g>
          <line x1="205" y1="90" x2="280" y2="115" stroke="#f59e0b" stroke-width="2" class="anim-draw-infinite" style="animation-delay: 0.7s;"/>
          <g class="anim-pulse-fast" style="animation-delay: 0.7s;">
            <path d="M285,105 Q300,95 315,105 Q315,125 300,130 Q285,125 285,105" fill="#f59e0b" opacity="0.5"/>
          </g>
          <text x="300" y="145" fill="currentColor" font-size="8" text-anchor="middle">Heart tissue</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Stem cells can potentially regenerate damaged tissues and organs</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Therapeutic Cloning</h3>
  
  <div class="definition-block">
    <h4>🔵 How It Works</h4>
    <ol>
      <li>Patient donates a <strong>body cell</strong></li>
      <li>Nucleus is removed and inserted into a <strong>donor egg cell</strong> (with its nucleus removed)</li>
      <li>Egg cell develops into an <strong>embryo</strong> containing patient's genes</li>
      <li>Stem cells from embryo are <strong>extracted and grown</strong></li>
      <li>Because genes match the patient → <strong>no rejection</strong></li>
    </ol>
  </div>

  <!-- Animated Therapeutic Cloning Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧪 Therapeutic Cloning Process (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="130" viewBox="0 0 380 130">
        <!-- Step 1: Patient cell -->
        <g>
          <text x="40" y="15" fill="currentColor" font-size="8" text-anchor="middle">1. Patient cell</text>
          <circle cx="40" cy="50" r="20" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
          <g class="anim-pulse">
            <circle cx="40" cy="50" r="8" fill="#1d4ed8"/>
          </g>
          <text x="40" y="85" fill="currentColor" font-size="7" text-anchor="middle">Nucleus with</text>
          <text x="40" y="95" fill="currentColor" font-size="7" text-anchor="middle">patient's DNA</text>
        </g>
        
        <!-- Arrow -->
        <path d="M65,50 L85,50" stroke="currentColor" stroke-width="2"/>
        <polygon points="83,47 90,50 83,53" fill="currentColor"/>
        
        <!-- Step 2: Egg cell (empty) -->
        <g>
          <text x="120" y="15" fill="currentColor" font-size="8" text-anchor="middle">2. Empty egg</text>
          <circle cx="120" cy="50" r="22" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
          <circle cx="120" cy="50" r="8" fill="none" stroke="#ec4899" stroke-width="1" stroke-dasharray="3,2"/>
          <text x="120" y="85" fill="currentColor" font-size="7" text-anchor="middle">Nucleus</text>
          <text x="120" y="95" fill="currentColor" font-size="7" text-anchor="middle">removed</text>
        </g>
        
        <!-- Arrow with nucleus transfer -->
        <g class="anim-flow-right">
          <path d="M95,50 Q120,30 145,50" fill="none" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="120" cy="35" r="5" fill="#1d4ed8"/>
        </g>
        
        <!-- Step 3: Combined cell -->
        <g>
          <text x="200" y="15" fill="currentColor" font-size="8" text-anchor="middle">3. Combined</text>
          <circle cx="200" cy="50" r="22" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2"/>
          <g class="anim-pulse">
            <circle cx="200" cy="50" r="8" fill="#1d4ed8"/>
          </g>
          <text x="200" y="85" fill="currentColor" font-size="7" text-anchor="middle">Patient's DNA</text>
          <text x="200" y="95" fill="currentColor" font-size="7" text-anchor="middle">in egg cell</text>
        </g>
        
        <!-- Arrow -->
        <path d="M225,50 L245,50" stroke="currentColor" stroke-width="2"/>
        <polygon points="243,47 250,50 243,53" fill="currentColor"/>
        
        <!-- Step 4: Embryo -->
        <g>
          <text x="280" y="15" fill="currentColor" font-size="8" text-anchor="middle">4. Embryo</text>
          <g class="anim-pulse">
            <circle cx="270" cy="45" r="10" fill="#8b5cf6" opacity="0.5"/>
            <circle cx="285" cy="50" r="10" fill="#8b5cf6" opacity="0.5"/>
            <circle cx="275" cy="58" r="10" fill="#8b5cf6" opacity="0.5"/>
            <circle cx="290" cy="55" r="10" fill="#8b5cf6" opacity="0.5"/>
          </g>
          <text x="280" y="85" fill="currentColor" font-size="7" text-anchor="middle">Develops with</text>
          <text x="280" y="95" fill="currentColor" font-size="7" text-anchor="middle">matching genes</text>
        </g>
        
        <!-- Arrow -->
        <path d="M305,50 L325,50" stroke="currentColor" stroke-width="2"/>
        <polygon points="323,47 330,50 323,53" fill="currentColor"/>
        
        <!-- Step 5: Stem cells extracted -->
        <g>
          <text x="355" y="15" fill="currentColor" font-size="8" text-anchor="middle">5. Extract</text>
          <g class="anim-ripple" style="transform-origin: 355px 50px;">
            <circle cx="355" cy="50" r="18" fill="#10b981" opacity="0.3"/>
          </g>
          <circle cx="350" cy="45" r="6" fill="#10b981"/>
          <circle cx="360" cy="50" r="6" fill="#10b981"/>
          <circle cx="355" cy="58" r="6" fill="#10b981"/>
          <text x="355" y="85" fill="#10b981" font-size="7" text-anchor="middle" font-weight="bold">No rejection!</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Perfect genetic match means no immunosuppressants needed</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Ethical, Social, and Practical Issues</h3>
  
  <div class="info-grid">
    <div class="improvement-card">
      <h5>✅ Advantages</h5>
      <ul>
        <li>Could cure currently untreatable diseases</li>
        <li>Reduce suffering</li>
        <li>Prevent long-term disability</li>
        <li>No donor organ shortages</li>
        <li>In therapeutic cloning: no rejection</li>
      </ul>
    </div>
    
    <div class="error-card">
      <h5>❌ Disadvantages & Concerns</h5>
      <ul>
        <li>Some believe embryo destruction is ethically wrong</li>
        <li>Risk of uncontrolled cell growth (tumours)</li>
        <li>Expensive and experimental</li>
        <li>Adult stem cells have limited potential</li>
      </ul>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>AQA expects <strong>evaluation</strong>. Always discuss <strong>both sides</strong> — benefits AND ethical concerns. Use phrases like "However..." and "On the other hand..."</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "therapeutic cloning", "diabetes", "paralysis", "bone marrow", "transplant",
          "rejection", "ethical", "embryo", "tumours", "advantages", "disadvantages"
        ],
        practice_items: [
          {
            id: "bio-p9",
            prompt_template: "Describe how therapeutic cloning works and explain why it reduces the risk of rejection.",
            marks: 5,
            type: "short-answer",
            difficulty: "hard",
            randomise: true,
            expected_keywords: ["body cell", "nucleus", "egg cell", "embryo", "genes", "match", "rejection"]
          },
          {
            id: "bio-p10",
            prompt_template: "Evaluate the use of stem cells in medicine. Include both advantages and disadvantages.",
            marks: 6,
            type: "open",
            difficulty: "hard",
            randomise: true,
            expected_keywords: ["cure", "diseases", "ethical", "embryo", "tumours", "rejection", "expensive"]
          }
        ]
      },
      {
        id: "4-1-2-5-stem-cells-plants",
        title: "4.1.2.5 — Stem Cells in Plants",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Where Are Plant Stem Cells Found?</h3>
  
  <div class="spec-point-block">
    <h4>📋 AQA Specification</h4>
    <p>Meristems, cloning, agriculture, conservation.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 Meristems</h4>
    <p>Plant stem cells are found in <strong>meristems</strong> — regions of active growth at:</p>
    <ul>
      <li><strong>Root tips</strong></li>
      <li><strong>Shoot tips</strong></li>
      <li><strong>Buds</strong></li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Difference</h4>
    <p>Plant stem cells can differentiate into <strong>any plant cell at any time</strong>, even in mature plants. This is different from animal stem cells which become more limited as the organism ages.</p>
  </div>

  <!-- Animated Plant Meristem Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌱 Plant Meristems (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="200" height="260" viewBox="0 0 200 260">
        <!-- Plant stem -->
        <rect x="90" y="80" width="20" height="120" fill="#22c55e" rx="3"/>
        
        <!-- Shoot tip meristem -->
        <g>
          <ellipse cx="100" cy="60" rx="25" ry="30" fill="#86efac" stroke="#22c55e" stroke-width="2"/>
          <g class="anim-pulse-fast">
            <circle cx="100" cy="50" r="10" fill="#4ade80" stroke="#16a34a" stroke-width="2"/>
            <text x="100" y="54" fill="#15803d" font-size="6" text-anchor="middle">STEM</text>
          </g>
          <text x="155" y="50" fill="#16a34a" font-size="9" font-weight="bold">Shoot tip</text>
          <text x="155" y="62" fill="#16a34a" font-size="8">meristem</text>
          <line x1="125" y1="55" x2="140" y2="55" stroke="#16a34a" stroke-width="1"/>
        </g>
        
        <!-- Side bud -->
        <g>
          <ellipse cx="70" cy="110" rx="12" ry="8" fill="#86efac" stroke="#22c55e" stroke-width="2" transform="rotate(-30, 70, 110)"/>
          <g class="anim-pulse" style="animation-delay: 0.3s;">
            <circle cx="65" cy="108" r="5" fill="#4ade80"/>
          </g>
          <text x="30" y="110" fill="#16a34a" font-size="8">Bud</text>
          <line x1="50" y1="108" x2="58" y2="108" stroke="#16a34a" stroke-width="1"/>
        </g>
        
        <!-- Leaves -->
        <ellipse cx="60" cy="140" rx="20" ry="8" fill="#4ade80" transform="rotate(-45, 60, 140)"/>
        <ellipse cx="140" cy="130" rx="20" ry="8" fill="#4ade80" transform="rotate(45, 140, 130)"/>
        
        <!-- Root system -->
        <path d="M100,200 L100,230 M100,210 L80,240 M100,210 L120,240 M100,220 L90,250 M100,220 L110,250" 
              stroke="#a16207" stroke-width="4" fill="none" stroke-linecap="round"/>
        
        <!-- Root tip meristem -->
        <g>
          <g class="anim-pulse-fast" style="animation-delay: 0.5s;">
            <circle cx="100" cy="232" r="6" fill="#fbbf24" stroke="#a16207" stroke-width="2"/>
          </g>
          <g class="anim-pulse-fast" style="animation-delay: 0.6s;">
            <circle cx="80" cy="242" r="5" fill="#fbbf24" stroke="#a16207" stroke-width="2"/>
          </g>
          <g class="anim-pulse-fast" style="animation-delay: 0.7s;">
            <circle cx="120" cy="242" r="5" fill="#fbbf24" stroke="#a16207" stroke-width="2"/>
          </g>
          <text x="155" y="235" fill="#a16207" font-size="9" font-weight="bold">Root tip</text>
          <text x="155" y="247" fill="#a16207" font-size="8">meristems</text>
          <line x1="130" y1="240" x2="145" y2="240" stroke="#a16207" stroke-width="1"/>
        </g>
        
        <!-- Growth arrows -->
        <g class="anim-flow-up">
          <polygon points="100,25 95,35 105,35" fill="#16a34a"/>
        </g>
        <g class="anim-flow-down">
          <polygon points="100,258 95,248 105,248" fill="#a16207"/>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Meristems (stem cells) at shoot tips, root tips, and buds allow continuous growth</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Uses of Plant Stem Cells</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Applications</h4>
    <ol>
      <li><strong>Cloning Plants Quickly</strong> — Produces large numbers of identical plants for nurseries</li>
      <li><strong>Preserving Rare Species</strong> — Prevents extinction, protects biodiversity</li>
      <li><strong>Producing Crops with Desired Traits</strong> — Disease resistance, pest resistance, higher yield</li>
      <li><strong>Faster, Cheaper Production</strong> — Only one parent plant needed, no seeds required</li>
    </ol>
  </div>

  <!-- Animated Plant Cloning Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌿 Plant Cloning from Meristems (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="140" viewBox="0 0 360 140">
        <!-- Parent plant -->
        <g>
          <text x="50" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Parent Plant</text>
          <rect x="45" y="50" width="10" height="50" fill="#22c55e" rx="2"/>
          <ellipse cx="50" cy="40" rx="15" ry="18" fill="#4ade80"/>
          <g class="anim-pulse">
            <circle cx="50" cy="35" r="6" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
          </g>
          <ellipse cx="35" cy="70" rx="12" ry="5" fill="#4ade80" transform="rotate(-45, 35, 70)"/>
          <ellipse cx="65" cy="65" rx="12" ry="5" fill="#4ade80" transform="rotate(45, 65, 65)"/>
        </g>
        
        <!-- Arrow: Take cutting -->
        <g>
          <path d="M75,45 L105,45" stroke="currentColor" stroke-width="2"/>
          <polygon points="103,42 110,45 103,48" fill="currentColor"/>
          <text x="92" y="38" fill="currentColor" font-size="7" text-anchor="middle">Cut</text>
        </g>
        
        <!-- Cutting in culture -->
        <g>
          <text x="140" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Culture</text>
          <rect x="125" y="55" width="30" height="40" fill="#dbeafe" stroke="#3b82f6" stroke-width="2" rx="3"/>
          <g class="anim-vibrate-slow">
            <circle cx="140" cy="65" r="8" fill="#4ade80"/>
            <circle cx="140" cy="60" r="4" fill="#fbbf24"/>
          </g>
          <rect x="130" y="80" width="20" height="10" fill="#bfdbfe"/>
          <text x="140" y="110" fill="currentColor" font-size="7" text-anchor="middle">Growth</text>
          <text x="140" y="120" fill="currentColor" font-size="7" text-anchor="middle">medium</text>
        </g>
        
        <!-- Arrow: Grow -->
        <g>
          <path d="M160,70 L190,70" stroke="currentColor" stroke-width="2"/>
          <polygon points="188,67 195,70 188,73" fill="currentColor"/>
          <text x="177" y="63" fill="currentColor" font-size="7" text-anchor="middle">Grow</text>
        </g>
        
        <!-- Multiple clones -->
        <g>
          <text x="280" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Identical Clones</text>
          
          <!-- Clone 1 -->
          <g class="anim-pulse">
            <rect x="205" y="50" width="8" height="40" fill="#22c55e" rx="2"/>
            <ellipse cx="209" cy="42" rx="12" ry="14" fill="#4ade80"/>
          </g>
          
          <!-- Clone 2 -->
          <g class="anim-pulse" style="animation-delay: 0.2s;">
            <rect x="240" y="50" width="8" height="40" fill="#22c55e" rx="2"/>
            <ellipse cx="244" cy="42" rx="12" ry="14" fill="#4ade80"/>
          </g>
          
          <!-- Clone 3 -->
          <g class="anim-pulse" style="animation-delay: 0.4s;">
            <rect x="275" y="50" width="8" height="40" fill="#22c55e" rx="2"/>
            <ellipse cx="279" cy="42" rx="12" ry="14" fill="#4ade80"/>
          </g>
          
          <!-- Clone 4 -->
          <g class="anim-pulse" style="animation-delay: 0.6s;">
            <rect x="310" y="50" width="8" height="40" fill="#22c55e" rx="2"/>
            <ellipse cx="314" cy="42" rx="12" ry="14" fill="#4ade80"/>
          </g>
          
          <!-- Clone 5 -->
          <g class="anim-pulse" style="animation-delay: 0.8s;">
            <rect x="345" y="50" width="8" height="40" fill="#22c55e" rx="2"/>
            <ellipse cx="349" cy="42" rx="12" ry="14" fill="#4ade80"/>
          </g>
          
          <text x="280" y="110" fill="#16a34a" font-size="8" text-anchor="middle" font-weight="bold">All genetically identical!</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Take meristem cutting → Grow in culture → Produce many identical plants</p>
  </div>

  <div class="warning-block">
    <h4>⚠️ Disadvantage</h4>
    <p><strong>Clones have low genetic diversity</strong>, which can increase susceptibility to disease. If one plant is affected, all clones may be vulnerable.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Benefits Summary</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Benefit</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fast production</td>
          <td>Many plants from one parent quickly</td>
        </tr>
        <tr>
          <td>Preserve rare species</td>
          <td>Clone endangered plants to prevent extinction</td>
        </tr>
        <tr>
          <td>Desired traits</td>
          <td>Clone plants with disease resistance or high yield</td>
        </tr>
        <tr>
          <td>Cost effective</td>
          <td>No seeds needed, controlled lab environment</td>
        </tr>
        <tr>
          <td>Uniform crops</td>
          <td>All plants grow identically</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: Plant meristems retain the ability to differentiate throughout the plant's life. This makes plant cloning much easier than animal cloning.</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "meristem", "root tips", "shoot tips", "cloning", "identical",
          "rare species", "conservation", "disease resistance", "genetic diversity"
        ],
        practice_items: [
          {
            id: "bio-p11",
            prompt_template: "Describe where plant stem cells are found and explain how they differ from animal stem cells.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["meristem", "root tips", "shoot tips", "differentiate", "any cell", "throughout life"]
          },
          {
            id: "bio-p12",
            prompt_template: "Explain why plant cloning using meristems is useful in agriculture. Include one potential disadvantage.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["identical", "fast", "disease resistance", "genetic diversity", "susceptible"]
          }
        ]
      }
    ]
      }
    ]
  },
  {
    id: "cell-transport",
    title: "Cell Transport",
    status: "coming_soon",
    subsections: [],
    modules: []
  },
  {
    id: "cell-division",
    title: "Cell Division",
    status: "coming_soon",
    subsections: [],
    modules: []
  }
];
