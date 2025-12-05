// GCSE AQA Physics - Module 2: Introduction to Energy
// Based on the specification and revision notes

export interface EnergySubsection {
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
  study_group?: number;
}

export interface EnergyModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: EnergySubsection[];
}

export const energyModuleData: EnergyModule = {
  id: "energy-module-2",
  title: "Module 2: Introduction to Energy",
  status: "ready",
  subsections: [
    {
      id: "4-1-1-1-energy-stores-systems",
      title: "4.1.1.1 – Energy Stores and Systems",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — What Is a System?</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>A system is an object or group of objects.</p>
  </div>

  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>A <strong>system</strong> is:</p>
    <ul>
      <li>A single object, or</li>
      <li>A group of interacting objects</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Examples of Systems</h4>
    <table>
      <thead>
        <tr>
          <th>System Type</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Single-object system</strong></td>
          <td>A ball</td>
          <td>Only the ball's energy changes</td>
        </tr>
        <tr>
          <td><strong>Multi-object system</strong></td>
          <td>A ball + Earth</td>
          <td>System includes gravitational interaction</td>
        </tr>
        <tr>
          <td><strong>Complex system</strong></td>
          <td>Kettle + water + heater</td>
          <td>Energy transfers between multiple parts</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea:</h4>
    <p>Systems help physicists track energy changes clearly.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Energy Changes When a System Changes</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>There are changes in the way energy is stored when a system changes.</p>
  </div>

  <div class="key-facts-block">
    <h4>🎯 Key Idea:</h4>
    <p>When a system changes, energy is:</p>
    <ul>
      <li><strong>Transferred</strong> from one store to another</li>
      <li><strong>Redistributed</strong> between components</li>
      <li><strong>Conserved</strong> overall (total energy before = total after)</li>
    </ul>
  </div>

  <!-- Animated Energy Stores Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 The 8 Energy Stores</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="400" height="280" viewBox="0 0 400 280" class="hover-pause">
        <!-- Central energy symbol -->
        <circle cx="200" cy="140" r="35" fill="none" stroke="url(#energyGrad)" stroke-width="3" class="diagram-pulse"/>
        <text x="200" y="145" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">ENERGY</text>
        
        <defs>
          <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#3b82f6"/>
            <stop offset="100%" style="stop-color:#8b5cf6"/>
          </linearGradient>
        </defs>
        
        <!-- Energy stores around the center -->
        <g class="diagram-bounce">
          <rect x="160" y="20" width="80" height="35" fill="#ef4444" opacity="0.2" stroke="#ef4444" stroke-width="2" rx="6"/>
          <text x="200" y="42" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Kinetic</text>
        </g>
        
        <g class="diagram-glow-warm">
          <rect x="290" y="55" width="80" height="35" fill="#f97316" opacity="0.2" stroke="#f97316" stroke-width="2" rx="6"/>
          <text x="330" y="77" fill="#f97316" font-size="10" text-anchor="middle" font-weight="bold">Thermal</text>
        </g>
        
        <g>
          <rect x="320" y="125" width="70" height="35" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="2" rx="6"/>
          <text x="355" y="140" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">Gravitational</text>
          <text x="355" y="152" fill="#22c55e" font-size="8" text-anchor="middle">Potential</text>
        </g>
        
        <g class="diagram-spring-oscillate">
          <rect x="290" y="185" width="80" height="35" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" stroke-width="2" rx="6"/>
          <text x="330" y="200" fill="#06b6d4" font-size="9" text-anchor="middle" font-weight="bold">Elastic</text>
          <text x="330" y="212" fill="#06b6d4" font-size="8" text-anchor="middle">Potential</text>
        </g>
        
        <g>
          <rect x="160" y="230" width="80" height="35" fill="#a855f7" opacity="0.2" stroke="#a855f7" stroke-width="2" rx="6"/>
          <text x="200" y="252" fill="#a855f7" font-size="10" text-anchor="middle" font-weight="bold">Chemical</text>
        </g>
        
        <g class="diagram-magnet-attract">
          <rect x="30" y="185" width="80" height="35" fill="#ec4899" opacity="0.2" stroke="#ec4899" stroke-width="2" rx="6"/>
          <text x="70" y="200" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Magnetic</text>
        </g>
        
        <g class="diagram-electron-orbit">
          <rect x="10" y="125" width="80" height="35" fill="#eab308" opacity="0.2" stroke="#eab308" stroke-width="2" rx="6"/>
          <text x="50" y="147" fill="#eab308" font-size="10" text-anchor="middle" font-weight="bold">Electrostatic</text>
        </g>
        
        <g class="diagram-nucleus-vibrate">
          <rect x="30" y="55" width="80" height="35" fill="#14b8a6" opacity="0.2" stroke="#14b8a6" stroke-width="2" rx="6"/>
          <text x="70" y="77" fill="#14b8a6" font-size="10" text-anchor="middle" font-weight="bold">Nuclear</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">The 8 energy stores - hover to pause animations</p>
  </div>

  <div class="table-block">
    <h4>📊 Common Energy Stores</h4>
    <table>
      <thead>
        <tr>
          <th>Energy Store</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Kinetic</strong></td><td>Due to motion</td></tr>
        <tr><td><strong>Gravitational potential</strong></td><td>Due to height in a gravitational field</td></tr>
        <tr><td><strong>Elastic potential</strong></td><td>Stored when objects stretch/compress</td></tr>
        <tr><td><strong>Thermal</strong></td><td>Related to temperature, particle movement</td></tr>
        <tr><td><strong>Chemical</strong></td><td>Stored in fuels, food, batteries</td></tr>
        <tr><td><strong>Nuclear</strong></td><td>Stored in atomic nuclei</td></tr>
        <tr><td><strong>Magnetic</strong></td><td>In magnetic fields</td></tr>
        <tr><td><strong>Electrostatic</strong></td><td>In electric fields</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Energy-Store Changes in Common Situations</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Students should be able to describe all the changes involved in the way energy is stored when a system changes… for common situations.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example 1 — An Object Projected Upwards</h4>
    <table>
      <thead>
        <tr><th>Start Store</th><th>End Store</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Chemical</td><td>Kinetic (ball moves)</td><td>Person throws object</td></tr>
        <tr><td>Kinetic</td><td>Gravitational potential</td><td>Ball rises and slows</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Ball thrown upwards animation -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Energy Transfer: Ball Thrown Upwards</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="280" height="180" viewBox="0 0 280 180" class="hover-pause">
        <line x1="30" y1="160" x2="250" y2="160" stroke="currentColor" stroke-width="2"/>
        <path d="M 70 150 Q 140 20 210 150" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        
        <g class="diagram-bounce" style="animation-delay: 0s;">
          <circle cx="70" cy="145" r="12" fill="#ef4444" opacity="0.8"/>
          <text x="70" y="130" fill="#ef4444" font-size="8" text-anchor="middle" font-weight="bold">Max KE</text>
        </g>
        
        <g class="diagram-float">
          <circle cx="140" cy="40" r="12" fill="#22c55e" opacity="0.8"/>
          <text x="140" y="25" fill="#22c55e" font-size="8" text-anchor="middle" font-weight="bold">Max GPE</text>
        </g>
        
        <g class="diagram-bounce" style="animation-delay: 0.5s;">
          <circle cx="210" cy="145" r="12" fill="#ef4444" opacity="0.8"/>
          <text x="210" y="130" fill="#ef4444" font-size="8" text-anchor="middle" font-weight="bold">Max KE</text>
        </g>
      </svg>
    </div>
  </div>

  <div class="example-block">
    <h4>💡 Example 2 — A Moving Object Hitting an Obstacle</h4>
    <table>
      <thead>
        <tr><th>Start Store</th><th>End Store</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Kinetic</td><td>Thermal + Sound</td><td>Energy dissipated on impact</td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>💡 Example 3 — An Object Accelerated by a Constant Force</h4>
    <table>
      <thead>
        <tr><th>Store</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Chemical</td><td>Provided force (battery/fuel)</td></tr>
        <tr><td>Kinetic</td><td>Object speeds up</td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>💡 Example 4 — A Vehicle Slowing Down</h4>
    <table>
      <thead>
        <tr><th>Store</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Kinetic → Thermal</td><td>Brakes heat up</td></tr>
        <tr><td>Kinetic → Sound</td><td>Tyre noise, brake squeal</td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>💡 Example 5 — Bringing Water to Boil in an Electric Kettle</h4>
    <table>
      <thead>
        <tr><th>Store</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Electrical</td><td>Current flows in coil</td></tr>
        <tr><td>Thermal (water)</td><td>Water temperature increases</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — Calculate Energy Changes When a System Changes</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Students should be able to calculate the changes in energy involved when a system is changed by: heating, work done by forces, work done when a current flows.</p>
  </div>

  <div class="key-facts-block">
    <h4>A. Energy Change by Heating</h4>
    <p>📌 When heating occurs: Energy transferred → thermal store increases.</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formula:</h4>
    <p style="font-size: 1.25rem; font-weight: bold; text-align: center;">ΔE = m × c × ΔT</p>
    <table style="margin-top: 1rem; font-size: 0.9rem;">
      <thead><tr><th>Symbol</th><th>Meaning</th><th>Units</th></tr></thead>
      <tbody>
        <tr><td>ΔE</td><td>Change in thermal energy</td><td>J</td></tr>
        <tr><td>m</td><td>Mass</td><td>kg</td></tr>
        <tr><td>c</td><td>Specific heat capacity</td><td>J/kg°C</td></tr>
        <tr><td>ΔT</td><td>Temperature change</td><td>°C</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>B. Energy Change by Work Done by Forces</h4>
    <p>Work done when a force moves an object:</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formula:</h4>
    <p style="font-size: 1.25rem; font-weight: bold; text-align: center;">W = F × s</p>
    <table style="margin-top: 1rem; font-size: 0.9rem;">
      <thead><tr><th>Variable</th><th>Meaning</th><th>Unit</th></tr></thead>
      <tbody>
        <tr><td>W</td><td>Work done</td><td>J</td></tr>
        <tr><td>F</td><td>Force</td><td>N</td></tr>
        <tr><td>s</td><td>Distance moved</td><td>m</td></tr>
      </tbody>
    </table>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;"><strong>Examples:</strong> Pushing a box, Lifting an object, Stretching a spring</p>
  </div>

  <div class="key-facts-block">
    <h4>C. Energy Change When a Current Flows</h4>
    <p>📌 Electrical work done when charge flows through a component:</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <p style="font-size: 1.1rem; font-weight: bold; text-align: center;">W = V × Q &nbsp;&nbsp; or &nbsp;&nbsp; W = P × t</p>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Where: V = potential difference (volts), Q = charge (coulombs), P = power (watts), t = time (seconds)</p>
    <p style="margin-top: 0.5rem; font-size: 0.9rem;">Energy is transferred from electrical store → thermal store.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — Showing Energy Redistribution on a Common Scale</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Use calculations to show on a common scale how the overall energy in a system is redistributed…</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Meaning:</h4>
    <p>You must be able to:</p>
    <ul>
      <li>Calculate different energy amounts</li>
      <li>Present them using a <strong>bar chart</strong> or <strong>flow chart</strong></li>
      <li>Show <strong>energy in = energy out</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example (Heating Water)</h4>
    <table>
      <thead><tr><th>Energy Store</th><th>Energy (J)</th></tr></thead>
      <tbody>
        <tr><td>Electrical input</td><td>10,000 J</td></tr>
        <tr><td>Thermal (water) gain</td><td>8,000 J</td></tr>
        <tr><td>Dissipated to surroundings</td><td>2,000 J</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Sankey diagram animation -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Energy Flow Diagram (Sankey)</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="320" height="140" viewBox="0 0 320 140" class="hover-pause">
        <path d="M 30 70 L 100 70" fill="none" stroke="#3b82f6" stroke-width="30"/>
        <text x="65" y="75" fill="white" font-size="9" text-anchor="middle" font-weight="bold">10kJ</text>
        
        <rect x="100" y="50" width="50" height="40" fill="#eab308" opacity="0.3" stroke="#eab308" stroke-width="2" rx="5"/>
        <text x="125" y="75" fill="currentColor" font-size="8" text-anchor="middle">Kettle</text>
        
        <g class="diagram-heat-rise">
          <path d="M 150 60 L 260 35" fill="none" stroke="#22c55e" stroke-width="20"/>
          <text x="205" y="40" fill="white" font-size="8" text-anchor="middle" font-weight="bold">8kJ useful</text>
        </g>
        
        <g class="diagram-glow-warm">
          <path d="M 150 80 L 260 105" fill="none" stroke="#ef4444" stroke-width="10"/>
          <text x="205" y="108" fill="white" font-size="7" text-anchor="middle">2kJ wasted</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Sankey diagram showing energy distribution</p>
  </div>
</div>
      `,
      canonical_keywords: [
        "system", "energy stores", "kinetic", "gravitational potential", "elastic potential",
        "thermal", "chemical", "nuclear", "magnetic", "electrostatic", "energy transfer",
        "energy change", "heating", "work done", "current", "redistribution"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Define what a system is in physics and give two examples.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["object", "group of objects", "energy changes", "ball", "kettle"]
        },
        {
          id: "p2",
          prompt_template: "Name the 8 energy stores and describe what happens to energy when a ball is thrown upwards.",
          marks: 6,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["kinetic", "gravitational potential", "thermal", "chemical", "elastic", "nuclear", "magnetic", "electrostatic", "chemical to kinetic", "kinetic to GPE"]
        }
      ]
    },
    {
      id: "4-1-1-2-changes-in-energy",
      title: "4.1.1.2 – Changes in Energy",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — Kinetic Energy of a Moving Object</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Kinetic energy can be calculated using the equation: kinetic energy = 0.5 × mass × speed²</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formula:</h4>
    <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">E<sub>k</sub> = ½ m v²</p>
    <table style="margin-top: 1rem;">
      <thead><tr><th>Symbol</th><th>Meaning</th><th>Unit</th></tr></thead>
      <tbody>
        <tr><td>E<sub>k</sub></td><td>Kinetic energy</td><td>joules (J)</td></tr>
        <tr><td>m</td><td>Mass</td><td>kilograms (kg)</td></tr>
        <tr><td>v</td><td>Speed</td><td>metres per second (m/s)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📌 Explanation:</h4>
    <ul>
      <li>Kinetic energy <strong>increases with mass</strong></li>
      <li>Kinetic energy increases with the <strong>square of speed</strong> → <em>doubling speed quadruples E<sub>k</sub></em></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>A 2 kg object moving at 3 m/s:</p>
    <p>E<sub>k</sub> = 0.5 × 2 × 3² = 0.5 × 2 × 9 = <strong>9 J</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Elastic Potential Energy (Stretched or Compressed Spring)</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Elastic potential energy = 0.5 × spring constant × extension² (assuming limit of proportionality not exceeded)</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formula:</h4>
    <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">E<sub>e</sub> = ½ k e²</p>
    <table style="margin-top: 1rem;">
      <thead><tr><th>Symbol</th><th>Meaning</th><th>Unit</th></tr></thead>
      <tbody>
        <tr><td>E<sub>e</sub></td><td>Elastic potential energy</td><td>joules (J)</td></tr>
        <tr><td>k</td><td>Spring constant</td><td>newtons per metre (N/m)</td></tr>
        <tr><td>e</td><td>Extension/compression</td><td>metres (m)</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Animated Spring Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Spring Energy Storage</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="300" height="120" viewBox="0 0 300 120" class="hover-pause">
        <rect x="10" y="30" width="10" height="60" fill="currentColor" opacity="0.3"/>
        
        <g>
          <text x="80" y="20" fill="currentColor" font-size="9" text-anchor="middle">Natural length</text>
          <path d="M 20 60 L 35 60 L 40 50 L 50 70 L 60 50 L 70 70 L 80 50 L 90 70 L 95 60 L 110 60" fill="none" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="120" cy="60" r="10" fill="#3b82f6" opacity="0.5"/>
        </g>
        
        <g class="diagram-spring-oscillate">
          <text x="180" y="85" fill="currentColor" font-size="9" text-anchor="middle">Stretched</text>
          <path d="M 20 100 L 45 100 L 55 90 L 75 110 L 95 90 L 115 110 L 135 90 L 155 110 L 165 100 L 190 100" fill="none" stroke="#ef4444" stroke-width="2"/>
          <circle cx="200" cy="100" r="10" fill="#ef4444" opacity="0.5"/>
        </g>
        
        <line x1="120" y1="65" x2="120" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="200" y1="65" x2="200" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
        <line x1="120" y1="78" x2="200" y2="78" stroke="#f59e0b" stroke-width="2"/>
        <text x="160" y="73" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">e</text>
      </svg>
    </div>
  </div>

  <div class="warning-block">
    <h4>⚠️ Conditions:</h4>
    <p>This formula only works when the spring is in the <strong>linear region</strong> (obeys Hooke's Law). Beyond the limit of proportionality, the relationship becomes non-linear.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>Spring constant k = 150 N/m, Extension e = 0.04 m</p>
    <p>E<sub>e</sub> = ½ × 150 × (0.04)² = ½ × 150 × 0.0016 = <strong>0.12 J</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Gravitational Potential Energy (Raised Object)</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>g.p.e. = mass × gravitational field strength × height</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formula:</h4>
    <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">E<sub>p</sub> = m g h</p>
    <table style="margin-top: 1rem;">
      <thead><tr><th>Symbol</th><th>Meaning</th><th>Unit</th></tr></thead>
      <tbody>
        <tr><td>E<sub>p</sub></td><td>Gravitational potential energy</td><td>J</td></tr>
        <tr><td>m</td><td>Mass</td><td>kg</td></tr>
        <tr><td>g</td><td>Gravitational field strength</td><td>N/kg</td></tr>
        <tr><td>h</td><td>Height</td><td>m</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📌 Explanation:</h4>
    <ul>
      <li>The <strong>higher</strong> an object is lifted, the <strong>more energy</strong> it stores in its gravitational potential energy store</li>
      <li>The value of g depends on the planet (Earth ≈ <strong>9.8 N/kg</strong>)</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>m = 5 kg, g = 9.8 N/kg, h = 2 m</p>
    <p>E<sub>p</sub> = 5 × 9.8 × 2 = <strong>98 J</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — Summary Table of All Energy Equations</h3>

  <div class="table-block">
    <h4>📊 Energy Equations Summary</h4>
    <table>
      <thead>
        <tr><th>Energy Type</th><th>Formula</th><th>Conditions</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Kinetic</strong></td><td>E<sub>k</sub> = ½mv²</td><td>Object must be moving</td></tr>
        <tr><td><strong>Elastic potential</strong></td><td>E<sub>e</sub> = ½ke²</td><td>Hooke's Law region only</td></tr>
        <tr><td><strong>Gravitational potential</strong></td><td>E<sub>p</sub> = mgh</td><td>Height measured from a zero point</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — Common Exam Misconceptions</h3>

  <div class="warning-block">
    <h4>⚠️ Avoid These Mistakes:</h4>
    <table>
      <thead>
        <tr><th>Misconception</th><th>Correction</th></tr>
      </thead>
      <tbody>
        <tr><td>"A faster object has double the E<sub>k</sub>."</td><td>No — E<sub>k</sub> depends on <strong>v²</strong></td></tr>
        <tr><td>Using cm instead of m</td><td>Always convert extension & height to <strong>metres</strong></td></tr>
        <tr><td>Using k instead of N/m</td><td>Spring constant must be in <strong>N/m</strong>, not N/cm</td></tr>
        <tr><td>Using g = 10 without being told</td><td>AQA usually gives g; only approximate if allowed</td></tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "kinetic energy", "elastic potential energy", "gravitational potential energy",
        "Ek", "Ee", "Ep", "mass", "velocity", "speed", "spring constant", "extension",
        "height", "gravitational field strength", "formula", "calculation"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A 2 kg object is moving at 5 m/s. Calculate its kinetic energy.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["Ek = ½mv²", "0.5", "2", "25", "25 J"]
        },
        {
          id: "p2",
          prompt_template: "A spring with spring constant 200 N/m is extended by 0.05 m. Calculate the elastic potential energy stored.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["Ee = ½ke²", "200", "0.0025", "0.25 J"]
        },
        {
          id: "p3",
          prompt_template: "Calculate the gravitational potential energy of a 3 kg mass lifted 4 m above the ground. (g = 9.8 N/kg)",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["Ep = mgh", "3", "9.8", "4", "117.6 J"]
        }
      ]
    },
    {
      id: "4-5-2-work-done-energy-transfer",
      title: "4.5.2 – Work Done and Energy Transfer",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — What Is Work Done?</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>When a force causes an object to move through a distance, work is done on the object.</p>
  </div>

  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Work</strong> is done when a force causes a displacement of an object in the direction of the force.</p>
  </div>

  <div class="table-block">
    <h4>📊 Key Points</h4>
    <table>
      <thead><tr><th>Question</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>When is work done?</td><td>When a force makes an object move</td></tr>
        <tr><td>What must be present?</td><td>Force + movement in the same direction</td></tr>
        <tr><td>Why is work important?</td><td>Work done is an energy transfer</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea:</h4>
    <p>Work done <strong>transfers energy</strong> between stores.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Formula for Work Done</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Work done = force × distance moved along line of action of force</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formula:</h4>
    <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">W = F × s</p>
    <table style="margin-top: 1rem;">
      <thead><tr><th>Symbol</th><th>Quantity</th><th>Unit</th></tr></thead>
      <tbody>
        <tr><td>W</td><td>Work done</td><td>joules (J)</td></tr>
        <tr><td>F</td><td>Force</td><td>newtons (N)</td></tr>
        <tr><td>s</td><td>Distance moved</td><td>metres (m)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="warning-block">
    <h4>⚠️ Important Detail:</h4>
    <p>Distance must be measured <strong>in the direction of the force</strong>. If the object does not move → <strong>no work is done</strong>, even if a force is applied.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — What Is 1 Joule?</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>One joule of work is done when a force of one newton causes a displacement of one metre.</p>
  </div>

  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>1 joule</strong> = the work done by <strong>1 N force</strong> moving an object <strong>1 m</strong>.</p>
  </div>

  <div class="table-block">
    <h4>📊 Force, Distance & Work Done</h4>
    <table>
      <thead><tr><th>Force (N)</th><th>Distance (m)</th><th>Work Done (J)</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>1</td><td>1</td></tr>
        <tr><td>2</td><td>1</td><td>2</td></tr>
        <tr><td>1</td><td>3</td><td>3</td></tr>
        <tr><td>0</td><td>any</td><td>0</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — Converting Newton-Metres and Joules</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>1 joule = 1 newton-metre</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Meaning:</h4>
    <ul>
      <li><strong>Newton-metre (Nm)</strong> and <strong>joule (J)</strong> are equivalent for work done</li>
      <li>Both measure energy transfer</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Conversion Table</h4>
    <table>
      <thead><tr><th>Nm</th><th>J</th></tr></thead>
      <tbody>
        <tr><td>1 Nm</td><td>1 J</td></tr>
        <tr><td>5 Nm</td><td>5 J</td></tr>
        <tr><td>10 Nm</td><td>10 J</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — Describing the Energy Transfer When Work Is Done</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Describe the energy transfer involved when work is done.</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Key Idea:</h4>
    <p>Doing work <strong>always</strong> causes an energy transfer between stores.</p>
  </div>

  <div class="table-block">
    <h4>📊 Examples of Energy Transfers</h4>
    <table>
      <thead><tr><th>Scenario</th><th>Energy Transfer</th></tr></thead>
      <tbody>
        <tr><td>Lifting a weight</td><td>Chemical → Gravitational potential</td></tr>
        <tr><td>Pushing a trolley</td><td>Chemical → Kinetic</td></tr>
        <tr><td>Braking a moving vehicle</td><td>Kinetic → Thermal (brakes heat up)</td></tr>
        <tr><td>Stretching a spring</td><td>Work done → Elastic potential energy</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 6 — Work Done Against Friction</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>Work done against the frictional forces acting on an object causes a rise in the temperature of the object.</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Explanation:</h4>
    <p>When friction opposes motion, work done against friction transfers energy to the <strong>thermal store</strong> of:</p>
    <ul>
      <li>The object</li>
      <li>The surface</li>
      <li>The surroundings</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>When brakes are applied:</p>
    <ul>
      <li>Work done by friction increases brake-pad temperature</li>
      <li>Kinetic energy → thermal energy</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Real-World Examples</h4>
    <table>
      <thead><tr><th>Object</th><th>Result of Friction</th></tr></thead>
      <tbody>
        <tr><td>Rubbing hands</td><td>Warmer hands</td></tr>
        <tr><td>Tyres on road</td><td>Heat + rubber wear</td></tr>
        <tr><td>Machine parts</td><td>Temperature rise → requires lubrication</td></tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>💡 Exam Tips:</h4>
    <ul>
      <li>If distance is not in the line of action of the force, use the <strong>component</strong> of the force in that direction</li>
      <li>Always convert <strong>cm → m</strong> before using formula</li>
      <li>If force and motion are perpendicular, <strong>work done = 0</strong></li>
      <li>Never forget units: AQA awards marks separately for correct units (J)</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "work done", "force", "distance", "energy transfer", "joule", "newton-metre",
        "friction", "thermal", "temperature", "W = F × s"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A force of 25 N pushes a box 4 m along the floor. Calculate the work done.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["W = F × s", "25", "4", "100 J"]
        },
        {
          id: "p2",
          prompt_template: "Explain why work done against friction causes a rise in temperature.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["friction", "opposes motion", "energy transfer", "thermal store", "temperature"]
        }
      ]
    },
    {
      id: "4-1-1-4-power",
      title: "4.1.1.4 – Power",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — What Is Power?</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Definition:</h4>
    <p>Power is defined as the <strong>rate at which energy is transferred</strong> OR the <strong>rate at which work is done</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Key Idea:</h4>
    <p>Power measures <strong>how fast</strong> energy is transferred or work is done.</p>
  </div>

  <div class="table-block">
    <h4>📊 Concept Table</h4>
    <table>
      <thead><tr><th>Question</th><th>Answer</th></tr></thead>
      <tbody>
        <tr><td>What does power measure?</td><td>Rate of energy transfer / work done per second</td></tr>
        <tr><td>What has more power?</td><td>Devices that transfer more energy in less time</td></tr>
        <tr><td>Units of power?</td><td>Watts (W)</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Power Equations</h3>
  
  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📐 Formulas:</h4>
    <p style="font-size: 1.25rem; font-weight: bold; text-align: center;">P = E ÷ t &nbsp;&nbsp;&nbsp; or &nbsp;&nbsp;&nbsp; P = W ÷ t</p>
    <table style="margin-top: 1rem;">
      <thead><tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>Power</td><td>P</td><td>watts (W)</td><td>1 watt = 1 joule per second</td></tr>
        <tr><td>Energy</td><td>E</td><td>joules (J)</td><td>Energy moved between stores</td></tr>
        <tr><td>Work</td><td>W</td><td>joules (J)</td><td>Energy transferred by a force</td></tr>
        <tr><td>Time</td><td>t</td><td>seconds (s)</td><td>Time taken</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — What Is a Watt?</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Statement:</h4>
    <p>An energy transfer of 1 joule per second is equal to a power of 1 watt.</p>
  </div>

  <div class="definition-block">
    <h4>📘 Meaning:</h4>
    <p><strong>1 W = 1 J/s</strong></p>
    <p>If a motor transfers 50 J of energy every second → <strong>50 W</strong></p>
    <p>More watts = more energy transferred per second</p>
  </div>

  <div class="table-block">
    <h4>📊 Conversion Table</h4>
    <table>
      <thead><tr><th>Power</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>1 W</td><td>1 J transferred per second</td></tr>
        <tr><td>100 W</td><td>100 J per second</td></tr>
        <tr><td>1 kW</td><td>1,000 J per second</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — Examples Illustrating Power</h3>
  
  <div class="spec-point-block">
    <h4>📋 Spec Requirement:</h4>
    <p>Students should be able to give examples comparing devices that do the same work but one does it faster.</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Key Idea:</h4>
    <p>If two devices do the <strong>same work</strong>, the device that takes <strong>less time</strong> has <strong>more power</strong>.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example 1 — Two Electric Motors</h4>
    <table>
      <thead><tr><th>Motor</th><th>Work</th><th>Time Taken</th><th>Power</th></tr></thead>
      <tbody>
        <tr><td>A</td><td>50 J</td><td>5 s</td><td>10 W</td></tr>
        <tr><td>B</td><td>50 J</td><td>2 s</td><td>25 W</td></tr>
      </tbody>
    </table>
    <p><strong>Motor B is more powerful</strong> because it transfers the same energy in less time.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example 2 — Two Students Running Upstairs</h4>
    <table>
      <thead><tr><th>Student</th><th>Energy gained</th><th>Time</th><th>Power</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>800 J</td><td>8 s</td><td>100 W</td></tr>
        <tr><td>2</td><td>800 J</td><td>4 s</td><td>200 W</td></tr>
      </tbody>
    </table>
    <p><strong>Student 2 has higher power.</strong></p>
  </div>

  <div class="example-block">
    <h4>💡 Example 3 — Two Kettles</h4>
    <table>
      <thead><tr><th>Kettle</th><th>Energy Supplied</th><th>Time</th><th>Power</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>300 kJ</td><td>3 min</td><td>1.67 kW</td></tr>
        <tr><td>2</td><td>300 kJ</td><td>2 min</td><td>2.5 kW</td></tr>
      </tbody>
    </table>
    <p><strong>Kettle 2 boils water faster</strong> because it has a higher power rating.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — Common Mistakes (AQA Exam Traps)</h3>

  <div class="warning-block">
    <h4>⚠️ Avoid These Mistakes:</h4>
    <ul>
      <li><strong>❌ Confusing Power and Energy</strong>
        <ul>
          <li>Energy = total transferred (J)</li>
          <li>Power = how fast it's transferred (W)</li>
        </ul>
      </li>
      <li><strong>❌ Forgetting to convert minutes to seconds</strong>
        <ul>
          <li>Always convert time to <strong>seconds</strong> in calculations</li>
        </ul>
      </li>
      <li><strong>❌ Using the wrong formula</strong>
        <ul>
          <li>If question gives "work done", use P = W ÷ t</li>
          <li>If question gives "energy transferred", use P = E ÷ t</li>
        </ul>
      </li>
      <li><strong>❌ Mixing up watts and joules</strong>
        <ul>
          <li>J = energy</li>
          <li>W = power</li>
        </ul>
      </li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "power", "watt", "energy transfer", "work done", "time", "rate",
        "P = E/t", "P = W/t", "joule per second"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Define power and state its unit.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["rate", "energy transfer", "work done", "time", "watt", "W"]
        },
        {
          id: "p2",
          prompt_template: "A motor does 600 J of work in 30 seconds. Calculate its power.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["P = W/t", "600", "30", "20 W"]
        },
        {
          id: "p3",
          prompt_template: "Two cranes lift the same load. Crane A takes 10 s and Crane B takes 5 s. Which crane has more power and why?",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["Crane B", "more power", "same work", "less time", "rate"]
        }
      ]
    }
  ]
};
