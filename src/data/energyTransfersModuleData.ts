// Module 3: Energy Transfers - Part of the Forces chapter
// Based on AQA GCSE Physics specification

export interface EnergyTransfersSubsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: {
    id: string;
    prompt_template: string;
    marks: number;
    type: "open" | "short-answer" | "mcq";
    difficulty: "easy" | "medium" | "hard";
    randomise: boolean;
    expected_keywords: string[];
  }[];
}

export interface EnergyTransfersModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: EnergyTransfersSubsection[];
}

export const energyTransfersModuleData: EnergyTransfersModule = {
  id: "module-1-energy-transfers",
  title: "Module 1: Energy Transfers",
  status: "ready",
  subsections: [
    {
      id: "4-1-2-1-conduction-convection-radiation",
      title: "4.1.2.1 – Conduction, Convection and Radiation",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🔥 1 — Energy Transfer by Heating</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>When there is a <strong>temperature difference</strong> between objects, energy is transferred from the <strong>hotter</strong> object to the <strong>cooler</strong> object.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Three Methods of Energy Transfer:</h4>
    <ul>
      <li>1️⃣ <strong>Conduction</strong> — through solids</li>
      <li>2️⃣ <strong>Convection</strong> — through fluids (liquids and gases)</li>
      <li>3️⃣ <strong>Radiation</strong> — through electromagnetic waves (no medium needed)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧊 2 — Conduction</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Conduction</strong> is the transfer of energy through a material without the material itself moving.</p>
  </div>

  <div class="key-facts-block">
    <h4>🔬 How It Works:</h4>
    <ul>
      <li>Particles in the hot region <strong>vibrate more</strong></li>
      <li>They <strong>collide</strong> with neighbouring particles</li>
      <li>Energy is passed on through these collisions</li>
      <li>In metals, <strong>free electrons</strong> also transfer energy (faster conduction)</li>
    </ul>
  </div>

  <!-- Animated Conduction Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 500 200" style="max-width: 100%; height: auto;">
      <!-- Background metal bar -->
      <rect x="50" y="70" width="400" height="60" fill="url(#conductionGradient)" stroke="#666" stroke-width="2" rx="5"/>
      
      <!-- Gradient for heat flow -->
      <defs>
        <linearGradient id="conductionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#ff4444"/>
          <stop offset="50%" style="stop-color:#ffaa00"/>
          <stop offset="100%" style="stop-color:#4488ff"/>
        </linearGradient>
      </defs>
      
      <!-- Vibrating particles - hot end -->
      <circle cx="80" cy="100" r="8" fill="#ff6666" class="anim-vibrate"/>
      <circle cx="110" cy="100" r="8" fill="#ff7777" class="anim-vibrate anim-delay-100"/>
      <circle cx="140" cy="100" r="8" fill="#ff8888" class="anim-vibrate anim-delay-200"/>
      
      <!-- Vibrating particles - middle -->
      <circle cx="200" cy="100" r="8" fill="#ffaa44" class="anim-vibrate-slow"/>
      <circle cx="250" cy="100" r="8" fill="#ffcc66" class="anim-vibrate-slow anim-delay-200"/>
      <circle cx="300" cy="100" r="8" fill="#eedd88" class="anim-vibrate-slow anim-delay-100"/>
      
      <!-- Vibrating particles - cold end -->
      <circle cx="360" cy="100" r="8" fill="#88aaff" class="anim-vibrate-slow anim-delay-300"/>
      <circle cx="390" cy="100" r="8" fill="#6699ff" class="anim-vibrate-slow anim-delay-100"/>
      <circle cx="420" cy="100" r="8" fill="#4488ff" class="anim-vibrate-slow"/>
      
      <!-- Free electrons moving -->
      <circle cx="100" cy="90" r="4" fill="#ffff00" class="anim-flow-right"/>
      <circle cx="180" cy="110" r="4" fill="#ffff00" class="anim-flow-right anim-delay-300"/>
      <circle cx="280" cy="95" r="4" fill="#ffff00" class="anim-flow-right anim-delay-500"/>
      
      <!-- Labels -->
      <text x="80" y="50" font-size="14" fill="#ff4444" font-weight="bold" text-anchor="middle">HOT</text>
      <text x="420" y="50" font-size="14" fill="#4488ff" font-weight="bold" text-anchor="middle">COLD</text>
      <text x="250" y="170" font-size="12" fill="currentColor" text-anchor="middle">Energy transfer direction →</text>
      <text x="180" y="185" font-size="10" fill="#ffff00" text-anchor="middle">● Free electrons (in metals)</text>
    </svg>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Material Type</th>
          <th>Conduction Rate</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Metals</td>
          <td>Fast (good conductors)</td>
          <td>Free electrons transfer energy quickly</td>
        </tr>
        <tr>
          <td>Non-metals</td>
          <td>Slow (poor conductors)</td>
          <td>No free electrons</td>
        </tr>
        <tr>
          <td>Gases</td>
          <td>Very slow (insulators)</td>
          <td>Particles far apart</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🌀 3 — Convection</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Convection</strong> is the transfer of energy by the movement of particles in a fluid (liquid or gas).</p>
  </div>

  <div class="key-facts-block">
    <h4>🔬 How Convection Currents Work:</h4>
    <ol>
      <li>Fluid near a heat source becomes <strong>hot</strong></li>
      <li>Hot fluid <strong>expands</strong> and becomes <strong>less dense</strong></li>
      <li>Hot fluid <strong>rises</strong></li>
      <li>Cooler, denser fluid <strong>sinks</strong> to take its place</li>
      <li>A <strong>convection current</strong> is created</li>
    </ol>
  </div>

  <!-- Animated Convection Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 400 300" style="max-width: 100%; height: auto;">
      <!-- Container (beaker) -->
      <rect x="80" y="50" width="240" height="200" fill="#e6f3ff" stroke="#333" stroke-width="3" rx="5"/>
      
      <!-- Heat source -->
      <rect x="140" y="250" width="120" height="20" fill="#ff4444" class="anim-pulse"/>
      <text x="200" y="285" font-size="12" fill="currentColor" text-anchor="middle">Heat Source</text>
      
      <!-- Rising hot water arrows -->
      <path d="M200 220 L200 80" stroke="#ff6644" stroke-width="4" fill="none" marker-end="url(#arrowRed)"/>
      
      <!-- Spreading at top -->
      <path d="M200 80 Q280 80 280 120" stroke="#ff8866" stroke-width="3" fill="none" marker-end="url(#arrowOrange)"/>
      <path d="M200 80 Q120 80 120 120" stroke="#ff8866" stroke-width="3" fill="none" marker-end="url(#arrowOrange)"/>
      
      <!-- Sinking cold water -->
      <path d="M280 120 L280 200" stroke="#4488ff" stroke-width="3" fill="none" marker-end="url(#arrowBlue)"/>
      <path d="M120 120 L120 200" stroke="#4488ff" stroke-width="3" fill="none" marker-end="url(#arrowBlue)"/>
      
      <!-- Moving back to center -->
      <path d="M280 200 Q240 220 200 220" stroke="#6699ff" stroke-width="3" fill="none"/>
      <path d="M120 200 Q160 220 200 220" stroke="#6699ff" stroke-width="3" fill="none"/>
      
      <!-- Animated particles -->
      <circle cx="200" cy="200" r="5" fill="#ff4444" class="anim-flow-up"/>
      <circle cx="200" cy="160" r="5" fill="#ff6644" class="anim-flow-up anim-delay-300"/>
      <circle cx="200" cy="120" r="5" fill="#ff8866" class="anim-flow-up anim-delay-500"/>
      
      <circle cx="280" cy="140" r="5" fill="#4488ff" class="anim-flow-down anim-delay-200"/>
      <circle cx="120" cy="160" r="5" fill="#4488ff" class="anim-flow-down anim-delay-400"/>
      
      <!-- Arrow markers -->
      <defs>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ff6644"/>
        </marker>
        <marker id="arrowOrange" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ff8866"/>
        </marker>
        <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#4488ff"/>
        </marker>
      </defs>
      
      <!-- Labels -->
      <text x="210" y="140" font-size="11" fill="#ff4444" font-weight="bold">Hot rises</text>
      <text x="290" y="160" font-size="11" fill="#4488ff" font-weight="bold">Cold sinks</text>
    </svg>
  </div>

  <div class="spec-callout">
    <strong>⚠️ Important:</strong> Convection CANNOT occur in solids because the particles are fixed in position and cannot flow.
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">☀️ 4 — Radiation</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Radiation</strong> (infrared radiation) is the transfer of energy by electromagnetic waves. It does <strong>not require a medium</strong> — it can travel through a vacuum.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Points:</h4>
    <ul>
      <li>All objects emit and absorb infrared radiation</li>
      <li><strong>Hotter</strong> objects emit more radiation</li>
      <li><strong>Dark, matt surfaces</strong> are good absorbers AND emitters</li>
      <li><strong>Light, shiny surfaces</strong> are poor absorbers AND emitters (good reflectors)</li>
    </ul>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Surface Type</th>
          <th>Absorbs Radiation</th>
          <th>Emits Radiation</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dark, matt</td>
          <td>Good ✓</td>
          <td>Good ✓</td>
          <td>Black car gets hot in sun</td>
        </tr>
        <tr>
          <td>Light, shiny</td>
          <td>Poor ✗</td>
          <td>Poor ✗</td>
          <td>Silver flask keeps drinks warm</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "conduction", "convection", "radiation", "energy transfer", "heating",
        "temperature difference", "particles", "vibration", "free electrons",
        "convection current", "infrared", "emitter", "absorber", "insulator"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain how energy is transferred through a metal rod by conduction.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["particles", "vibrate", "collisions", "free electrons", "energy transfer"]
        },
        {
          id: "p2",
          prompt_template: "Describe how a convection current is formed in a liquid being heated from below.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["hot", "expands", "less dense", "rises", "cooler", "sinks", "current"]
        },
        {
          id: "p3",
          prompt_template: "Explain why a dark matt surface is a better absorber of infrared radiation than a light shiny surface.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["dark", "matt", "absorbs", "light", "shiny", "reflects"]
        }
      ]
    },
    {
      id: "4-1-2-2-reducing-unwanted-energy-transfers",
      title: "4.1.2.2 – Reducing Unwanted Energy Transfers",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🏠 1 — Why Reduce Unwanted Transfers?</h3>
  
  <div class="definition-block">
    <h4>📘 Key Idea:</h4>
    <p>Energy that is transferred to unwanted stores is often described as <strong>wasted</strong> or <strong>dissipated</strong>.</p>
    <p>Reducing unwanted energy transfers:</p>
    <ul>
      <li>✅ Saves money (lower energy bills)</li>
      <li>✅ Reduces environmental impact</li>
      <li>✅ Increases efficiency</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧱 2 — Thermal Insulation in Buildings</h3>
  
  <div class="key-facts-block">
    <h4>🔬 Methods of Insulation:</h4>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>How It Works</th>
          <th>Type of Transfer Reduced</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Cavity wall insulation</strong></td>
          <td>Foam or wool fills the gap between walls, trapping air</td>
          <td>Conduction & Convection</td>
        </tr>
        <tr>
          <td><strong>Loft insulation</strong></td>
          <td>Fibreglass wool traps pockets of air</td>
          <td>Conduction & Convection</td>
        </tr>
        <tr>
          <td><strong>Double glazing</strong></td>
          <td>Two panes of glass with air or vacuum between</td>
          <td>Conduction & Convection</td>
        </tr>
        <tr>
          <td><strong>Draught excluders</strong></td>
          <td>Seal gaps around doors and windows</td>
          <td>Convection</td>
        </tr>
        <tr>
          <td><strong>Reflective foil</strong></td>
          <td>Shiny surface reflects infrared radiation back</td>
          <td>Radiation</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Animated House Insulation Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 450 320" style="max-width: 100%; height: auto;">
      <!-- House outline -->
      <path d="M60 150 L225 50 L390 150 L390 280 L60 280 Z" fill="#f5f0e6" stroke="#333" stroke-width="2"/>
      
      <!-- Roof -->
      <path d="M50 150 L225 40 L400 150" fill="none" stroke="#8B4513" stroke-width="4"/>
      
      <!-- Loft insulation (pink/yellow) -->
      <rect x="80" y="140" width="290" height="20" fill="#ffccdd" stroke="#ff99bb" stroke-width="1" class="anim-pulse-glow"/>
      <text x="225" y="135" font-size="10" fill="#cc4477" text-anchor="middle">Loft Insulation</text>
      
      <!-- Cavity wall left -->
      <rect x="60" y="150" width="30" height="130" fill="#d4a574" stroke="#333" stroke-width="1"/>
      <rect x="90" y="160" width="15" height="110" fill="#ffffcc" class="anim-pulse"/>
      <rect x="105" y="150" width="30" height="130" fill="#d4a574" stroke="#333" stroke-width="1"/>
      
      <!-- Cavity wall right -->
      <rect x="315" y="150" width="30" height="130" fill="#d4a574" stroke="#333" stroke-width="1"/>
      <rect x="345" y="160" width="15" height="110" fill="#ffffcc" class="anim-pulse"/>
      <rect x="360" y="150" width="30" height="130" fill="#d4a574" stroke="#333" stroke-width="1"/>
      
      <!-- Double glazed window -->
      <rect x="180" y="180" width="90" height="60" fill="#87ceeb" stroke="#333" stroke-width="2"/>
      <line x1="195" y1="180" x2="195" y2="240" stroke="#333" stroke-width="1"/>
      <line x1="255" y1="180" x2="255" y2="240" stroke="#333" stroke-width="1"/>
      <text x="225" y="255" font-size="9" fill="currentColor" text-anchor="middle">Double Glazing</text>
      
      <!-- Door with draught excluder -->
      <rect x="280" y="200" width="50" height="80" fill="#8B4513" stroke="#333" stroke-width="2"/>
      <circle cx="320" cy="240" r="4" fill="#FFD700"/>
      <rect x="278" y="278" width="54" height="5" fill="#666" class="anim-pulse"/>
      <text x="305" y="295" font-size="8" fill="currentColor" text-anchor="middle">Draught Excluder</text>
      
      <!-- Heat arrows blocked -->
      <path d="M40 200 L60 200" stroke="#ff4444" stroke-width="2" marker-end="url(#blockArrow)" class="anim-pulse"/>
      <line x1="55" y1="195" x2="55" y2="205" stroke="#333" stroke-width="3"/>
      
      <!-- Labels -->
      <text x="30" y="165" font-size="9" fill="#ffffcc" text-anchor="middle" transform="rotate(-90 30 165)">Cavity Wall</text>
      
      <!-- Legend -->
      <rect x="10" y="300" width="12" height="12" fill="#ffffcc"/>
      <text x="25" y="310" font-size="9" fill="currentColor">= Insulation (traps air)</text>
      
      <defs>
        <marker id="blockArrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#ff4444"/>
        </marker>
      </defs>
    </svg>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚙️ 3 — Reducing Friction</h3>
  
  <div class="definition-block">
    <h4>📘 Key Idea:</h4>
    <p><strong>Friction</strong> causes energy to be transferred to thermal energy stores (things heat up). This is often unwanted.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Methods to Reduce Friction:</h4>
    <ul>
      <li><strong>Lubrication</strong> — oil or grease between moving parts</li>
      <li><strong>Streamlining</strong> — smooth shapes reduce air resistance</li>
      <li><strong>Smooth surfaces</strong> — polished surfaces create less friction</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Examples:</h4>
    <ul>
      <li>🚗 Car engine uses oil to lubricate moving parts</li>
      <li>🚴 Cyclists wear tight clothing to reduce air resistance</li>
      <li>🎿 Skis are waxed to reduce friction with snow</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📊 4 — Comparing Insulation Methods</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Factors to Consider:</h4>
    <ul>
      <li><strong>Initial cost</strong> — how much does it cost to install?</li>
      <li><strong>Annual savings</strong> — how much money is saved each year?</li>
      <li><strong>Payback time</strong> = Initial cost ÷ Annual savings</li>
    </ul>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1)); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
    <p style="font-size: 1.2rem; font-weight: bold; text-align: center;">
      Payback time (years) = Initial cost (£) ÷ Annual saving (£/year)
    </p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Method</th>
          <th>Typical Cost</th>
          <th>Annual Saving</th>
          <th>Payback Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Draught excluders</td>
          <td>£50</td>
          <td>£25</td>
          <td>2 years</td>
        </tr>
        <tr>
          <td>Loft insulation</td>
          <td>£300</td>
          <td>£100</td>
          <td>3 years</td>
        </tr>
        <tr>
          <td>Cavity wall insulation</td>
          <td>£500</td>
          <td>£100</td>
          <td>5 years</td>
        </tr>
        <tr>
          <td>Double glazing</td>
          <td>£3000</td>
          <td>£60</td>
          <td>50 years</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "insulation", "thermal", "cavity wall", "loft", "double glazing",
        "draught excluder", "payback time", "friction", "lubrication",
        "streamlining", "energy saving", "unwanted transfer"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain how cavity wall insulation reduces energy transfer from a house.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["foam", "wool", "air", "trapped", "conduction", "convection", "reduced"]
        },
        {
          id: "p2",
          prompt_template: "Calculate the payback time for loft insulation costing £400 that saves £80 per year.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["400", "80", "5 years", "payback"]
        },
        {
          id: "p3",
          prompt_template: "Give two methods of reducing friction in a mechanical system and explain how each works.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["lubrication", "oil", "grease", "streamlining", "smooth", "air resistance"]
        }
      ]
    },
    {
      id: "4-1-3-efficiency",
      title: "4.1.3 – Energy Efficiency",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">📊 1 — What is Efficiency?</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Efficiency</strong> is a measure of how much useful energy (or power) is transferred compared to the total energy (or power) supplied.</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15)); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid hsl(var(--primary) / 0.3);">
    <p style="font-size: 1.3rem; font-weight: bold; text-align: center; margin-bottom: 0.5rem;">
      Efficiency = Useful output energy transfer ÷ Total input energy transfer
    </p>
    <p style="font-size: 1.1rem; text-align: center; color: hsl(var(--muted-foreground));">
      or
    </p>
    <p style="font-size: 1.3rem; font-weight: bold; text-align: center;">
      Efficiency = Useful power output ÷ Total power input
    </p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Points:</h4>
    <ul>
      <li>Efficiency is usually expressed as a <strong>decimal</strong> (0 to 1) or a <strong>percentage</strong> (0% to 100%)</li>
      <li>Efficiency can <strong>never exceed 100%</strong> — no device is 100% efficient</li>
      <li>To convert decimal to percentage: <strong>multiply by 100</strong></li>
    </ul>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Device</th>
          <th>Typical Efficiency</th>
          <th>Wasted Energy Goes To</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LED bulb</td>
          <td>80–90%</td>
          <td>Thermal store (slight heating)</td>
        </tr>
        <tr>
          <td>Filament bulb</td>
          <td>5–10%</td>
          <td>Thermal store (lots of heat)</td>
        </tr>
        <tr>
          <td>Electric motor</td>
          <td>80–95%</td>
          <td>Thermal store (friction, resistance)</td>
        </tr>
        <tr>
          <td>Car engine</td>
          <td>25–30%</td>
          <td>Thermal store (heat to surroundings)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📈 2 — Calculating Efficiency</h3>
  
  <div class="example-block">
    <h4>💡 Worked Example 1:</h4>
    <p>A motor transfers 400 J of energy. 320 J is usefully transferred to kinetic energy. Calculate the efficiency.</p>
    <div style="background: hsl(var(--muted)); padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">
      <p>Efficiency = Useful output ÷ Total input</p>
      <p>Efficiency = 320 J ÷ 400 J = <strong>0.8</strong> or <strong>80%</strong></p>
    </div>
  </div>

  <div class="example-block">
    <h4>💡 Worked Example 2:</h4>
    <p>A heater has a power input of 2000 W. It has an efficiency of 0.9. Calculate the useful power output.</p>
    <div style="background: hsl(var(--muted)); padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">
      <p>Rearranging: Useful output = Efficiency × Total input</p>
      <p>Useful output = 0.9 × 2000 W = <strong>1800 W</strong></p>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔄 3 — Energy Dissipation</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>When energy is <strong>dissipated</strong>, it spreads out to the surroundings and becomes less useful. This energy is often transferred to thermal energy stores.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea:</h4>
    <p>The more energy that is dissipated (wasted), the <strong>lower</strong> the efficiency.</p>
    <p>Wasted energy = Total input energy − Useful output energy</p>
  </div>

  <!-- Animated Efficiency Diagram (Sankey-style) -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 450 200" style="max-width: 100%; height: auto;">
      <!-- Input arrow -->
      <path d="M30 100 L120 100" stroke="#4CAF50" stroke-width="40" fill="none" class="anim-flow-right"/>
      <text x="75" y="140" font-size="11" fill="currentColor" text-anchor="middle">100 J Input</text>
      
      <!-- Device box -->
      <rect x="120" y="60" width="100" height="80" fill="hsl(var(--primary) / 0.2)" stroke="hsl(var(--primary))" stroke-width="2" rx="8"/>
      <text x="170" y="95" font-size="12" fill="currentColor" text-anchor="middle" font-weight="bold">Motor</text>
      <text x="170" y="115" font-size="10" fill="currentColor" text-anchor="middle">(80% efficient)</text>
      
      <!-- Useful output arrow -->
      <path d="M220 100 L350 100" stroke="#4CAF50" stroke-width="32" fill="none" class="anim-flow-right anim-delay-300"/>
      <text x="285" y="85" font-size="11" fill="#4CAF50" text-anchor="middle" font-weight="bold">80 J Useful</text>
      <text x="285" y="135" font-size="10" fill="currentColor" text-anchor="middle">(Kinetic energy)</text>
      
      <!-- Wasted output arrow (going up/down) -->
      <path d="M170 60 Q170 30 220 30 L300 30" stroke="#ff6b6b" stroke-width="8" fill="none" class="anim-flow-right anim-delay-500"/>
      <text x="260" y="22" font-size="10" fill="#ff6b6b" text-anchor="middle">20 J Wasted</text>
      <text x="260" y="50" font-size="9" fill="currentColor" text-anchor="middle">(Heat to surroundings)</text>
      
      <!-- Labels -->
      <text x="400" y="100" font-size="10" fill="currentColor" text-anchor="middle">→</text>
    </svg>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🌍 4 — Increasing Efficiency</h3>
  
  <div class="key-facts-block">
    <h4>💠 Methods to Increase Efficiency:</h4>
    <ul>
      <li>Reduce friction with <strong>lubricants</strong></li>
      <li>Reduce air resistance with <strong>streamlining</strong></li>
      <li>Use <strong>better insulation</strong> to reduce heat loss</li>
      <li>Use more efficient <strong>components</strong> (e.g., LED instead of filament bulbs)</li>
    </ul>
  </div>

  <div class="spec-callout">
    <strong>⚠️ Exam Tip:</strong> Remember — efficiency improvements are important for:
    <ul>
      <li>Reducing energy costs</li>
      <li>Reducing environmental impact</li>
      <li>Conserving finite energy resources</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "efficiency", "useful output", "total input", "power", "energy",
        "percentage", "dissipated", "wasted", "thermal", "friction",
        "lubrication", "insulation"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A kettle has a power input of 2400 W and an efficiency of 0.85. Calculate the useful power output.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["efficiency", "useful", "0.85", "2400", "2040 W"]
        },
        {
          id: "p2",
          prompt_template: "Explain why no device can be 100% efficient.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["energy", "dissipated", "wasted", "thermal", "surroundings", "friction"]
        },
        {
          id: "p3",
          prompt_template: "An LED bulb is 85% efficient. For every 60 J of electrical energy supplied, calculate how much is wasted.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["60", "0.85", "51 J useful", "9 J wasted"]
        }
      ]
    },
    {
      id: "4-1-4-national-grid",
      title: "4.1.4 – National and Global Energy Resources",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">⚡ 1 — The National Grid</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>The <strong>National Grid</strong> is a system of cables and transformers that links power stations to consumers across the country.</p>
  </div>

  <!-- Animated National Grid Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 500 220" style="max-width: 100%; height: auto;">
      <!-- Power Station -->
      <rect x="20" y="80" width="70" height="60" fill="#666" stroke="#333" stroke-width="2" rx="5"/>
      <rect x="35" y="60" width="15" height="30" fill="#888" stroke="#333" stroke-width="1"/>
      <rect x="55" y="55" width="12" height="35" fill="#888" stroke="#333" stroke-width="1"/>
      <circle cx="45" cy="75" r="8" fill="#ff6644" class="anim-pulse"/>
      <text x="55" y="160" font-size="9" fill="currentColor" text-anchor="middle">Power Station</text>
      <text x="55" y="172" font-size="8" fill="#4CAF50" text-anchor="middle">25,000 V</text>
      
      <!-- Step-up transformer -->
      <rect x="120" y="85" width="50" height="50" fill="#ffcc00" stroke="#333" stroke-width="2" rx="5"/>
      <path d="M130 100 Q145 100 145 110 Q145 120 130 120" stroke="#333" stroke-width="2" fill="none"/>
      <path d="M160 100 Q145 100 145 110 Q145 120 160 120" stroke="#333" stroke-width="2" fill="none"/>
      <text x="145" y="155" font-size="8" fill="currentColor" text-anchor="middle">Step-Up</text>
      <text x="145" y="165" font-size="8" fill="currentColor" text-anchor="middle">Transformer</text>
      
      <!-- High voltage transmission lines -->
      <line x1="170" y1="110" x2="280" y2="110" stroke="#ff4444" stroke-width="3"/>
      <line x1="170" y1="105" x2="280" y2="105" stroke="#ff4444" stroke-width="1"/>
      <line x1="170" y1="115" x2="280" y2="115" stroke="#ff4444" stroke-width="1"/>
      
      <!-- Pylons -->
      <path d="M200 90 L210 110 L220 90 M210 110 L210 140" stroke="#666" stroke-width="2" fill="none"/>
      <path d="M250 90 L260 110 L270 90 M260 110 L260 140" stroke="#666" stroke-width="2" fill="none"/>
      
      <text x="225" y="85" font-size="9" fill="#ff4444" font-weight="bold">400,000 V</text>
      <text x="225" y="160" font-size="8" fill="currentColor" text-anchor="middle">Transmission Lines</text>
      
      <!-- Animated electrons flowing -->
      <circle cx="190" cy="110" r="3" fill="#ffff00" class="anim-flow-right"/>
      <circle cx="230" cy="110" r="3" fill="#ffff00" class="anim-flow-right anim-delay-300"/>
      
      <!-- Step-down transformer -->
      <rect x="290" y="85" width="50" height="50" fill="#00ccff" stroke="#333" stroke-width="2" rx="5"/>
      <path d="M300 100 Q315 100 315 110 Q315 120 300 120" stroke="#333" stroke-width="2" fill="none"/>
      <path d="M330 100 Q315 100 315 110 Q315 120 330 120" stroke="#333" stroke-width="2" fill="none"/>
      <text x="315" y="155" font-size="8" fill="currentColor" text-anchor="middle">Step-Down</text>
      <text x="315" y="165" font-size="8" fill="currentColor" text-anchor="middle">Transformer</text>
      
      <!-- Houses -->
      <path d="M380 95 L400 75 L420 95 L420 130 L380 130 Z" fill="#d4a574" stroke="#333" stroke-width="1"/>
      <rect x="395" y="105" width="15" height="25" fill="#87ceeb" stroke="#333" stroke-width="1"/>
      
      <path d="M440 95 L460 75 L480 95 L480 130 L440 130 Z" fill="#d4a574" stroke="#333" stroke-width="1"/>
      <rect x="455" y="105" width="15" height="25" fill="#87ceeb" stroke="#333" stroke-width="1"/>
      
      <!-- Low voltage to houses -->
      <line x1="340" y1="110" x2="380" y2="110" stroke="#4CAF50" stroke-width="2"/>
      <text x="430" y="155" font-size="9" fill="currentColor" text-anchor="middle">Homes</text>
      <text x="430" y="167" font-size="8" fill="#4CAF50" text-anchor="middle">230 V</text>
      
      <!-- Connection lines -->
      <line x1="90" y1="110" x2="120" y2="110" stroke="#333" stroke-width="2"/>
    </svg>
  </div>

  <div class="key-facts-block">
    <h4>💠 Why Use High Voltage for Transmission?</h4>
    <ul>
      <li>Power = Voltage × Current (P = V × I)</li>
      <li>To transmit high power: either high voltage OR high current</li>
      <li>High current → more energy lost to heating (P = I²R)</li>
      <li>So we use <strong>high voltage, low current</strong> to reduce energy loss</li>
    </ul>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Function</th>
          <th>Voltage Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Step-up transformer</strong></td>
          <td>Increases voltage for transmission</td>
          <td>25,000 V → 400,000 V</td>
        </tr>
        <tr>
          <td><strong>Step-down transformer</strong></td>
          <td>Decreases voltage for safe use</td>
          <td>400,000 V → 230 V</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🌱 2 — Energy Resources</h3>
  
  <div class="key-facts-block">
    <h4>💠 Renewable vs Non-Renewable:</h4>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Definition</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Renewable</strong></td>
          <td>Replenished naturally, will not run out</td>
          <td>Solar, wind, hydro, tidal, geothermal, biomass</td>
        </tr>
        <tr>
          <td><strong>Non-renewable</strong></td>
          <td>Finite, will eventually run out</td>
          <td>Fossil fuels (coal, oil, gas), nuclear</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">☀️ 3 — Comparing Energy Resources</h3>
  
  <div class="table-wrapper">
    <table class="content-table" style="font-size: 0.85rem;">
      <thead>
        <tr>
          <th>Resource</th>
          <th>Advantages</th>
          <th>Disadvantages</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Solar</strong></td>
          <td>No pollution, free energy source</td>
          <td>Only works in daylight, expensive setup</td>
        </tr>
        <tr>
          <td><strong>Wind</strong></td>
          <td>No pollution, renewable</td>
          <td>Unreliable, visual/noise pollution</td>
        </tr>
        <tr>
          <td><strong>Nuclear</strong></td>
          <td>No CO₂, reliable, high output</td>
          <td>Radioactive waste, risk of accidents</td>
        </tr>
        <tr>
          <td><strong>Fossil fuels</strong></td>
          <td>Reliable, high energy density</td>
          <td>CO₂ emissions, finite, pollution</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="spec-callout">
    <strong>⚠️ Exam Tip:</strong> You must be able to compare and contrast different energy resources, considering:
    <ul>
      <li>Environmental impact (CO₂, pollution, habitat damage)</li>
      <li>Reliability (weather dependent vs constant)</li>
      <li>Cost (setup and running costs)</li>
      <li>Sustainability (renewable vs non-renewable)</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "National Grid", "transformer", "step-up", "step-down", "high voltage",
        "transmission", "renewable", "non-renewable", "fossil fuels", "solar",
        "wind", "nuclear", "efficiency", "power loss"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain why electricity is transmitted at high voltage in the National Grid.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["high voltage", "low current", "less energy loss", "heating", "P = I²R"]
        },
        {
          id: "p2",
          prompt_template: "State the function of a step-up transformer in the National Grid.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["increases", "voltage", "transmission", "power station"]
        },
        {
          id: "p3",
          prompt_template: "Compare the advantages and disadvantages of wind power and fossil fuels for generating electricity.",
          marks: 6,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["wind", "renewable", "no pollution", "unreliable", "fossil fuels", "reliable", "CO2", "finite"]
        }
      ]
    }
  ]
};
