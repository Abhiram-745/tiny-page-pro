// Required Practical 10: Investigating Infrared Radiation

export interface InfraredPracticalSubsection {
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

export const infraredPracticalData: InfraredPracticalSubsection = {
  id: "rp10-infrared-radiation",
  title: "Required Practical 10: Investigating Infrared Radiation",
  type: "content",
  study_group: 1,
  content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Aim of the Practical</h3>
  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">💠 Aim</h4>
    <p>To investigate how the <strong>colour and surface</strong> of an object affects how quickly it <strong>emits infrared (IR) radiation</strong>.</p>
  </div>
  
  <div class="definition-block">
    <h4>Why This Matters:</h4>
    <p>Since infrared radiation is a type of electromagnetic wave that transfers heat energy, this experiment shows how different surfaces lose thermal energy at different rates.</p>
    <ul>
      <li><strong>Dark, matte surfaces</strong> are known to emit heat more effectively</li>
      <li><strong>Light, shiny surfaces</strong> emit heat poorly</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Real-World Applications:</h4>
    <ul>
      <li>Radiators</li>
      <li>Insulation</li>
      <li>Clothing design</li>
      <li>Survival blankets</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Equipment Needed</h3>
  
  <!-- Animated Equipment Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1.5rem 0;">
    <h4>Equipment Setup</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="200" viewBox="0 0 450 200">
        <defs>
          <linearGradient id="waterGradIR" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#64b5f6"/>
            <stop offset="100%" style="stop-color:#1976d2"/>
          </linearGradient>
        </defs>
        
        <!-- Flask 1 - Black -->
        <g transform="translate(30, 50)">
          <text x="30" y="-5" text-anchor="middle" font-size="9" fill="#333" font-weight="bold">Black</text>
          <path d="M10 20 L10 100 Q10 110 20 110 L40 110 Q50 110 50 100 L50 20" fill="#1f2937" stroke="#111" stroke-width="2"/>
          <rect x="15" y="35" width="30" height="70" fill="url(#waterGradIR)" opacity="0.6"/>
          <rect x="26" y="0" width="8" height="40" fill="#e8e8e8" stroke="#999" rx="4"/>
          <rect x="28" y="20" width="4" height="18" fill="#ef4444" rx="2">
            <animate attributeName="height" values="18;12;18" dur="3s" repeatCount="indefinite"/>
            <animate attributeName="y" values="20;26;20" dur="3s" repeatCount="indefinite"/>
          </rect>
          <text x="30" y="130" text-anchor="middle" font-size="8" fill="#ef4444">Fastest cooling</text>
        </g>
        
        <!-- Flask 2 - Grey -->
        <g transform="translate(120, 50)">
          <text x="30" y="-5" text-anchor="middle" font-size="9" fill="#333" font-weight="bold">Dark Grey</text>
          <path d="M10 20 L10 100 Q10 110 20 110 L40 110 Q50 110 50 100 L50 20" fill="#4b5563" stroke="#374151" stroke-width="2"/>
          <rect x="15" y="35" width="30" height="70" fill="url(#waterGradIR)" opacity="0.6"/>
          <rect x="26" y="0" width="8" height="40" fill="#e8e8e8" stroke="#999" rx="4"/>
          <rect x="28" y="20" width="4" height="18" fill="#ef4444" rx="2">
            <animate attributeName="height" values="18;14;18" dur="4s" repeatCount="indefinite"/>
            <animate attributeName="y" values="20;24;20" dur="4s" repeatCount="indefinite"/>
          </rect>
          <text x="30" y="130" text-anchor="middle" font-size="8" fill="#f97316">Good emitter</text>
        </g>
        
        <!-- Flask 3 - White -->
        <g transform="translate(210, 50)">
          <text x="30" y="-5" text-anchor="middle" font-size="9" fill="#333" font-weight="bold">White</text>
          <path d="M10 20 L10 100 Q10 110 20 110 L40 110 Q50 110 50 100 L50 20" fill="#f5f5f5" stroke="#d1d5db" stroke-width="2"/>
          <rect x="15" y="35" width="30" height="70" fill="url(#waterGradIR)" opacity="0.6"/>
          <rect x="26" y="0" width="8" height="40" fill="#e8e8e8" stroke="#999" rx="4"/>
          <rect x="28" y="20" width="4" height="18" fill="#ef4444" rx="2">
            <animate attributeName="height" values="18;16;18" dur="6s" repeatCount="indefinite"/>
            <animate attributeName="y" values="20;22;20" dur="6s" repeatCount="indefinite"/>
          </rect>
          <text x="30" y="130" text-anchor="middle" font-size="8" fill="#facc15">Poor emitter</text>
        </g>
        
        <!-- Flask 4 - Silver -->
        <g transform="translate(300, 50)">
          <text x="30" y="-5" text-anchor="middle" font-size="9" fill="#333" font-weight="bold">Silver</text>
          <path d="M10 20 L10 100 Q10 110 20 110 L40 110 Q50 110 50 100 L50 20" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="2"/>
          <line x1="20" y1="40" x2="25" y2="80" stroke="#fff" stroke-width="2" opacity="0.5"/>
          <line x1="35" y1="50" x2="40" y2="90" stroke="#fff" stroke-width="2" opacity="0.5"/>
          <rect x="15" y="35" width="30" height="70" fill="url(#waterGradIR)" opacity="0.6"/>
          <rect x="26" y="0" width="8" height="40" fill="#e8e8e8" stroke="#999" rx="4"/>
          <rect x="28" y="20" width="4" height="18" fill="#ef4444" rx="2">
            <animate attributeName="height" values="18;17;18" dur="8s" repeatCount="indefinite"/>
            <animate attributeName="y" values="20;21;20" dur="8s" repeatCount="indefinite"/>
          </rect>
          <text x="30" y="130" text-anchor="middle" font-size="8" fill="#22c55e">Slowest cooling</text>
        </g>
        
        <!-- Stopwatch -->
        <g transform="translate(380, 80)">
          <circle cx="25" cy="25" r="22" fill="#fff" stroke="#333" stroke-width="2"/>
          <line x1="25" y1="25" x2="25" y2="10" stroke="#333" stroke-width="2"/>
          <line x1="25" y1="25" x2="35" y2="25" stroke="#ef4444" stroke-width="1">
            <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="10s" repeatCount="indefinite"/>
          </line>
          <text x="25" y="70" text-anchor="middle" font-size="8" fill="currentColor">Stopwatch</text>
        </g>
        
        <!-- Title -->
        <text x="200" y="180" text-anchor="middle" font-size="11" fill="currentColor" font-weight="bold">Four identical flasks with different surface colours</text>
      </svg>
    </div>
  </div>
  
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Equipment</th>
        <th style="padding: 0.75rem; text-align: left;">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Four identical flasks</td><td style="padding: 0.75rem;">Same shape, size, surface area</td></tr>
      <tr><td style="padding: 0.75rem;">Surface colours</td><td style="padding: 0.75rem;">Black, dark grey, white, and silver</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Thermometers</td><td style="padding: 0.75rem;">One per flask</td></tr>
      <tr><td style="padding: 0.75rem;">Hot water</td><td style="padding: 0.75rem;">All flasks must start at the same temperature</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Stopwatch</td><td style="padding: 0.75rem;">For timing measurements</td></tr>
      <tr><td style="padding: 0.75rem;">Heatproof mat</td><td style="padding: 0.75rem;">Safety</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Measuring cylinder</td><td style="padding: 0.75rem;">Accurate volume measurement</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Why Equipment Must Be Identical:</h4>
    <p>If the flasks were different sizes or materials, they would lose heat at different rates due to surface area or thermal conductivity, which would make the comparison <strong>unfair</strong>. By using identical flasks, the only difference affecting heat loss is the <strong>colour of the surface</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Method</h3>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Step 1: Setup</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Set up the four identical flasks on a heatproof mat</li>
      <li>Paint each flask with a different surface colour:
        <ul>
          <li>Black (matte)</li>
          <li>Dark grey</li>
          <li>White</li>
          <li>Silver (shiny)</li>
        </ul>
      </li>
    </ol>
  </div>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Step 2: Fill Flasks</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Boil water and allow it to cool slightly so all flasks can safely be filled to the same temperature (e.g., exactly 80°C)</li>
      <li>Fill each flask with the <strong>same volume</strong> of hot water</li>
    </ol>
  </div>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Step 3: Insert Thermometers</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Insert a thermometer into each flask</li>
      <li>Ensure the thermometers are positioned at the <strong>same depth</strong></li>
      <li>Record the <strong>initial temperature</strong> of each flask</li>
    </ol>
  </div>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Step 4: Collect Data</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Start a stopwatch</li>
      <li>Measure the temperature of each flask every <strong>30 seconds for 10 minutes</strong></li>
      <li>Record all results in a table</li>
      <li>Plot graphs of <strong>temperature vs time</strong> for each surface colour</li>
    </ol>
  </div>
  
  <div class="key-facts-block">
    <h4>Why We Measure Over Time:</h4>
    <p>We want to compare how quickly each coloured surface loses heat. <strong>Faster cooling = better emitter</strong> of infrared radiation. <strong>Slower cooling = poor emitter</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Variables</h3>
  
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Variable Type</th>
        <th style="padding: 0.75rem; text-align: left;">Variable</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--chart-1)/0.2);"><td style="padding: 0.75rem;"><strong>Independent</strong> (what we change)</td><td style="padding: 0.75rem;">Colour and surface texture of the flask (black, grey, white, silver)</td></tr>
      <tr style="background: hsl(var(--chart-2)/0.2);"><td style="padding: 0.75rem;"><strong>Dependent</strong> (what we measure)</td><td style="padding: 0.75rem;">The rate of temperature decrease (how much the flask cools over time)</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Control Variables (things we keep the same):</h4>
    <ul>
      <li>Volume of water in each flask</li>
      <li>Initial temperature of the water</li>
      <li>Type and size of flask</li>
      <li>Room temperature and airflow</li>
      <li>Position of each flask</li>
      <li>Type of thermometer</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Controlling Variables Is Essential:</h4>
    <p>If other factors changed, we could not be sure that the <strong>colour was responsible</strong> for the difference in cooling rate.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Expected Results</h3>
  
  <!-- Animated Cooling Curves Graph -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1.5rem 0;">
    <h4>Cooling Curves for Different Surface Colours</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="280" viewBox="0 0 400 280">
        <defs>
          <marker id="arrowheadIR" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
          </marker>
        </defs>
        
        <!-- Title -->
        <text x="200" y="20" text-anchor="middle" font-size="12" fill="#333" font-weight="bold">Temperature vs Time</text>
        
        <!-- Axes -->
        <line x1="60" y1="220" x2="370" y2="220" stroke="#333" stroke-width="2" marker-end="url(#arrowheadIR)"/>
        <line x1="60" y1="220" x2="60" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrowheadIR)"/>
        
        <!-- Y-axis labels -->
        <text x="30" y="130" font-size="10" fill="#333" transform="rotate(-90, 30, 130)">Temperature (°C)</text>
        <text x="55" y="225" font-size="9" fill="#666" text-anchor="end">20</text>
        <text x="55" y="175" font-size="9" fill="#666" text-anchor="end">40</text>
        <text x="55" y="125" font-size="9" fill="#666" text-anchor="end">60</text>
        <text x="55" y="75" font-size="9" fill="#666" text-anchor="end">80</text>
        
        <!-- X-axis labels -->
        <text x="200" y="255" font-size="10" fill="#333" text-anchor="middle">Time (minutes)</text>
        <text x="100" y="238" font-size="9" fill="#666" text-anchor="middle">2</text>
        <text x="160" y="238" font-size="9" fill="#666" text-anchor="middle">4</text>
        <text x="220" y="238" font-size="9" fill="#666" text-anchor="middle">6</text>
        <text x="280" y="238" font-size="9" fill="#666" text-anchor="middle">8</text>
        <text x="340" y="238" font-size="9" fill="#666" text-anchor="middle">10</text>
        
        <!-- Grid lines -->
        <g stroke="#e0e0e0" stroke-width="1">
          <line x1="60" y1="175" x2="360" y2="175"/>
          <line x1="60" y1="125" x2="360" y2="125"/>
          <line x1="60" y1="75" x2="360" y2="75"/>
        </g>
        
        <!-- Cooling curve - Black (fastest) -->
        <path d="M60 55 Q140 90, 200 150 Q260 190, 360 200" stroke="#1f2937" stroke-width="3" fill="none"/>
        
        <!-- Cooling curve - Dark Grey -->
        <path d="M60 55 Q160 85, 230 130 Q300 165, 360 180" stroke="#4b5563" stroke-width="3" fill="none"/>
        
        <!-- Cooling curve - White -->
        <path d="M60 55 Q180 75, 260 110 Q330 140, 360 155" stroke="#9ca3af" stroke-width="3" fill="none"/>
        
        <!-- Cooling curve - Silver (slowest) -->
        <path d="M60 55 Q200 65, 280 90 Q340 105, 360 120" stroke="#a8a29e" stroke-width="3" fill="none"/>
        
        <!-- Legend -->
        <g transform="translate(240, 40)">
          <line x1="0" y1="0" x2="20" y2="0" stroke="#1f2937" stroke-width="3"/>
          <text x="25" y="4" font-size="9" fill="#666">Black (fastest)</text>
          <line x1="0" y1="15" x2="20" y2="15" stroke="#4b5563" stroke-width="3"/>
          <text x="25" y="19" font-size="9" fill="#666">Dark grey</text>
          <line x1="0" y1="30" x2="20" y2="30" stroke="#9ca3af" stroke-width="3"/>
          <text x="25" y="34" font-size="9" fill="#666">White</text>
          <line x1="0" y1="45" x2="20" y2="45" stroke="#a8a29e" stroke-width="3"/>
          <text x="25" y="49" font-size="9" fill="#666">Silver (slowest)</text>
        </g>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Typical Results:</h4>
    <ul>
      <li>The <strong>black flask</strong> cools the fastest</li>
      <li>The <strong>dark grey flask</strong> cools slightly slower</li>
      <li>The <strong>white flask</strong> cools significantly slower</li>
      <li>The <strong>silver flask</strong> cools the slowest of all</li>
    </ul>
  </div>
  
  <div class="definition-block">
    <h4>Ranking (Best to Worst Emitter of IR):</h4>
    <p>🥇 <strong>Best emitter:</strong> Black</p>
    <p>🥈 Dark Grey</p>
    <p>🥉 White</p>
    <p>⬜ <strong>Worst emitter:</strong> Silver</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Scientific Explanation</h3>
  
  <!-- Animated Emission/Absorption Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1.5rem 0;">
    <h4>How Surface Colour Affects IR Emission</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="180" viewBox="0 0 420 180">
        <!-- Black surface -->
        <g transform="translate(50, 90)">
          <rect x="-30" y="0" width="60" height="40" fill="#1f2937" stroke="#111"/>
          <text x="0" y="55" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">Black</text>
          <!-- IR waves emitting -->
          <g>
            <path d="M-20 -5 Q-25 -20, -15 -35" stroke="#ef4444" stroke-width="2" fill="none">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </path>
            <path d="M0 -5 Q0 -25, 0 -40" stroke="#ef4444" stroke-width="2" fill="none">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.2s"/>
            </path>
            <path d="M20 -5 Q25 -20, 15 -35" stroke="#ef4444" stroke-width="2" fill="none">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.4s"/>
            </path>
          </g>
          <text x="0" y="-50" text-anchor="middle" font-size="8" fill="#ef4444">Strong emission</text>
        </g>
        
        <!-- Silver surface -->
        <g transform="translate(200, 90)">
          <rect x="-30" y="0" width="60" height="40" fill="#c0c0c0" stroke="#999"/>
          <line x1="-20" y1="10" x2="-15" y2="30" stroke="#fff" stroke-width="2" opacity="0.5"/>
          <line x1="10" y1="15" x2="15" y2="35" stroke="#fff" stroke-width="2" opacity="0.5"/>
          <text x="0" y="55" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">Silver</text>
          <!-- Weak IR emission -->
          <g opacity="0.3">
            <path d="M0 -5 Q0 -15, 0 -25" stroke="#ef4444" stroke-width="1" fill="none"/>
          </g>
          <text x="0" y="-35" text-anchor="middle" font-size="8" fill="#22c55e">Weak emission</text>
        </g>
        
        <!-- Incoming radiation reflection -->
        <g transform="translate(350, 90)">
          <rect x="-30" y="0" width="60" height="40" fill="#c0c0c0" stroke="#999"/>
          <!-- Incoming ray -->
          <line x1="-50" y1="-30" x2="-5" y2="5" stroke="#f97316" stroke-width="2" marker-end="url(#arrowIRRef)"/>
          <!-- Reflected ray -->
          <line x1="5" y1="5" x2="50" y2="-30" stroke="#f97316" stroke-width="2"/>
          <text x="0" y="55" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">Reflection</text>
          <text x="0" y="-45" text-anchor="middle" font-size="8" fill="#f97316">Shiny reflects IR</text>
        </g>
        
        <defs>
          <marker id="arrowIRRef" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f97316"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
  
  <div class="definition-block">
    <h4>Infrared radiation is a form of electromagnetic radiation that transfers energy away from a warm surface.</h4>
  </div>
  
  <div class="key-facts-block">
    <h4>⬛ Black Surfaces:</h4>
    <ul>
      <li>They absorb almost all wavelengths of radiation</li>
      <li>They also <strong>emit radiation very efficiently</strong></li>
      <li>Therefore they lose heat quickly, causing rapid cooling</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>⬜ White Surfaces:</h4>
    <ul>
      <li>Reflect significant amounts of radiation</li>
      <li>Emit less than black</li>
      <li>Cool more slowly</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>🪞 Silver / Shiny Surfaces:</h4>
    <ul>
      <li>Reflect the majority of incident radiation</li>
      <li>Emit very little IR radiation</li>
      <li>Cool the slowest because they retain heat</li>
    </ul>
  </div>
  
  <div class="definition-block" style="background: linear-gradient(135deg, hsl(var(--chart-1)/0.1), hsl(var(--chart-2)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h4>🔑 Key Principle:</h4>
    <p style="font-size: 1.1rem;"><strong>A good absorber is also a good emitter.</strong></p>
    <p><strong>A poor absorber is also a poor emitter.</strong></p>
    <p style="margin-top: 0.5rem;">This is why radiators used to be painted black and why emergency thermal blankets are silver — to reduce heat loss from the body.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Improving Accuracy and Reliability</h3>
  
  <div class="key-facts-block">
    <h4>To Make the Practical More Accurate:</h4>
    <ul>
      <li>Use a <strong>digital thermometer or data logger</strong> for continuous readings</li>
      <li>Ensure all flasks start at <strong>exactly the same temperature</strong></li>
      <li>Ensure all flasks contain the <strong>same water volume</strong></li>
      <li>Keep the equipment <strong>away from drafts</strong> to avoid extra cooling</li>
      <li>Use a <strong>lid with a small hole</strong> for the thermometer to prevent evaporative cooling</li>
      <li><strong>Repeat the experiment</strong> and calculate averages</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why These Improvements Matter:</h4>
    <p>They reduce <strong>random and systematic errors</strong>, giving clearer differences between flasks.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Typical Exam Question</h3>
  
  <div class="example-block" style="background: hsl(var(--accent)/0.2); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h4>❓ Question:</h4>
    <p>"Which flask would cool fastest and why?"</p>
  </div>
  
  <div class="key-facts-block" style="background: hsl(var(--chart-4)/0.2); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h4>✅ Model Answer Structure:</h4>
    <ul>
      <li>The <strong>black flask</strong> cools fastest</li>
      <li>Because it <strong>emits infrared radiation most effectively</strong></li>
      <li>Black surfaces <strong>emit and absorb the most IR</strong></li>
      <li>Therefore they <strong>lose thermal energy more quickly</strong></li>
    </ul>
  </div>
</div>
  `,
  canonical_keywords: ["infrared radiation", "IR", "emission", "absorption", "black surface", "white surface", "silver surface", "thermal energy", "cooling curve", "good emitter", "poor emitter", "control variables"],
  practice_items: [
    {
      id: "ir-prac-p1",
      prompt_template: "Describe the method for investigating how surface colour affects infrared emission.",
      marks: 6,
      type: "short-answer",
      difficulty: "medium",
      randomise: true,
      expected_keywords: ["identical flasks", "different colours", "black", "white", "silver", "same volume", "same temperature", "thermometer", "stopwatch", "measure temperature", "time interval"]
    },
    {
      id: "ir-prac-p2",
      prompt_template: "Explain why the black flask cools faster than the silver flask in the infrared radiation practical.",
      marks: 4,
      type: "short-answer",
      difficulty: "medium",
      randomise: true,
      expected_keywords: ["black", "good emitter", "infrared", "silver", "reflects", "poor emitter", "absorber"]
    },
    {
      id: "ir-prac-p3",
      prompt_template: "State the independent, dependent and two control variables in the infrared radiation experiment.",
      marks: 4,
      type: "short-answer",
      difficulty: "easy",
      randomise: true,
      expected_keywords: ["independent", "colour", "surface", "dependent", "temperature", "cooling rate", "control", "volume", "starting temperature", "flask size"]
    }
  ]
};
