// Module 4: Motion - Part of the Forces chapter
// Based on AQA GCSE Physics specification 4.5.6

export interface MotionSubsection {
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

export interface MotionModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: MotionSubsection[];
}

export const motionModuleData: MotionModule = {
  id: "module-3-motion",
  title: "Module 3: Motion",
  status: "ready",
  subsections: [
    {
      id: "4-5-6-1-1-distance-displacement",
      title: "4.5.6.1.1 – Distance and Displacement",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">📏 1 — Distance</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Distance</strong> is how far an object moves. It does not involve direction.</p>
    <p>Distance is a <strong>scalar quantity</strong>:</p>
    <ul>
      <li>Has magnitude only</li>
      <li>No direction is needed</li>
    </ul>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Includes direction?</td>
          <td>❌ No</td>
        </tr>
        <tr>
          <td>Type of quantity</td>
          <td>Scalar</td>
        </tr>
        <tr>
          <td>What it measures</td>
          <td>Total path length</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>"The car travelled 500 m."</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧭 2 — Displacement</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Displacement</strong> includes:</p>
    <ol>
      <li>The <strong>straight-line distance</strong> from the start point to the end point</li>
      <li>The <strong>direction</strong> of that straight line</li>
    </ol>
    <p>Displacement is a <strong>vector quantity</strong>:</p>
    <ul>
      <li>Has magnitude + direction</li>
    </ul>
  </div>

  <!-- Animated Distance vs Displacement Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 450 280" style="max-width: 100%; height: auto;">
      <!-- Grid background -->
      <defs>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect x="30" y="30" width="390" height="210" fill="url(#grid)"/>
      
      <!-- Start point -->
      <circle cx="60" cy="210" r="10" fill="#4CAF50" stroke="#333" stroke-width="2"/>
      <text x="60" y="245" font-size="11" fill="#4CAF50" text-anchor="middle" font-weight="bold">START</text>
      
      <!-- End point -->
      <circle cx="360" cy="60" r="10" fill="#ff4444" stroke="#333" stroke-width="2"/>
      <text x="360" y="45" font-size="11" fill="#ff4444" text-anchor="middle" font-weight="bold">END</text>
      
      <!-- Curved path (distance) -->
      <path d="M60 210 Q100 210 120 180 Q150 130 200 130 Q250 130 280 100 Q310 70 360 60" 
            stroke="#ff9944" stroke-width="4" fill="none" stroke-dasharray="8,4" class="anim-draw"/>
      
      <!-- Straight line (displacement) -->
      <line x1="60" y1="210" x2="360" y2="60" stroke="#4488ff" stroke-width="3" class="anim-draw anim-delay-500"/>
      
      <!-- Arrow head for displacement -->
      <polygon points="355,65 360,60 350,70" fill="#4488ff"/>
      
      <!-- Walking figure animation along path -->
      <circle cx="60" cy="210" r="6" fill="#ffcc00">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#walkPath"/>
        </animateMotion>
      </circle>
      <path id="walkPath" d="M60 210 Q100 210 120 180 Q150 130 200 130 Q250 130 280 100 Q310 70 360 60" fill="none"/>
      
      <!-- Labels -->
      <text x="180" y="180" font-size="12" fill="#ff9944" font-weight="bold">Distance = 450 m</text>
      <text x="180" y="195" font-size="10" fill="#ff9944">(total path travelled)</text>
      
      <text x="240" y="100" font-size="12" fill="#4488ff" font-weight="bold">Displacement = 320 m NE</text>
      <text x="240" y="115" font-size="10" fill="#4488ff">(straight line + direction)</text>
      
      <!-- Compass -->
      <circle cx="400" cy="220" r="25" fill="none" stroke="currentColor" stroke-width="1"/>
      <text x="400" y="200" font-size="10" fill="currentColor" text-anchor="middle">N</text>
      <text x="400" y="250" font-size="10" fill="currentColor" text-anchor="middle">S</text>
      <text x="370" y="225" font-size="10" fill="currentColor" text-anchor="middle">W</text>
      <text x="430" y="225" font-size="10" fill="currentColor" text-anchor="middle">E</text>
      <line x1="400" y1="215" x2="400" y2="205" stroke="currentColor" stroke-width="2" marker-end="url(#compassArrow)"/>
      
      <defs>
        <marker id="compassArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Displacement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Includes direction?</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Type of quantity</td>
          <td>Vector</td>
        </tr>
        <tr>
          <td>What it measures</td>
          <td>Change in position in a straight line</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>"20 m north"</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Comparing Distance vs Displacement</h3>
  
  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Distance</th>
          <th>Displacement</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Path</td>
          <td>Total path travelled</td>
          <td>Straight line</td>
        </tr>
        <tr>
          <td>Direction</td>
          <td>No</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Type</td>
          <td>Scalar</td>
          <td>Vector</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>Walking 300 m around a field</td>
          <td>Ending 30 m east of start</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="spec-callout">
    <strong>📝 Spec Requirement:</strong> Students must express displacement using both:
    <ul>
      <li><strong>Magnitude</strong> (how far)</li>
      <li><strong>Direction</strong> (where relative to start)</li>
    </ul>
    <p><strong>Examples:</strong> "12 m south", "45 m at 30° north of east", "3.0 km west"</p>
  </div>
</div>
      `,
      canonical_keywords: [
        "distance", "displacement", "scalar", "vector", "magnitude",
        "direction", "straight line", "path", "metres"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Define the term 'displacement' and explain how it differs from distance.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["displacement", "straight line", "direction", "distance", "total path", "scalar", "vector"]
        },
        {
          id: "p2",
          prompt_template: "A person walks 100 m north, then 100 m east. Calculate the distance travelled and estimate the displacement.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["distance", "200 m", "displacement", "141 m", "northeast", "45°"]
        }
      ]
    },
    {
      id: "4-5-6-1-2-speed",
      title: "4.5.6.1.2 – Speed",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🚀 1 — What is Speed?</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Speed</strong> is how fast an object moves.</p>
    <p>It does not involve direction → <strong>scalar quantity</strong>.</p>
    <p>The speed of a moving object is rarely constant — walking, running, driving all change speed.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📊 2 — Typical Speeds You Need to Know</h3>
  
  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Type of Motion</th>
          <th>Typical Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Walking</td>
          <td>1.5 m/s</td>
        </tr>
        <tr>
          <td>Running</td>
          <td>3 m/s</td>
        </tr>
        <tr>
          <td>Cycling</td>
          <td>6 m/s</td>
        </tr>
        <tr>
          <td>Sound in air</td>
          <td>330 m/s</td>
        </tr>
        <tr>
          <td>Wind speeds</td>
          <td>variable</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Animated Speed Comparison -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 500 200" style="max-width: 100%; height: auto;">
      <!-- Track -->
      <rect x="20" y="40" width="460" height="30" fill="hsl(var(--muted))" rx="5"/>
      <rect x="20" y="90" width="460" height="30" fill="hsl(var(--muted))" rx="5"/>
      <rect x="20" y="140" width="460" height="30" fill="hsl(var(--muted))" rx="5"/>
      
      <!-- Walking person (slowest) -->
      <circle cx="50" cy="55" r="12" fill="#4CAF50">
        <animate attributeName="cx" from="50" to="120" dur="4s" repeatCount="indefinite"/>
      </circle>
      <text x="50" y="25" font-size="10" fill="currentColor">Walking: 1.5 m/s</text>
      
      <!-- Running person (medium) -->
      <circle cx="50" cy="105" r="12" fill="#ff9944">
        <animate attributeName="cx" from="50" to="200" dur="4s" repeatCount="indefinite"/>
      </circle>
      <text x="50" y="80" font-size="10" fill="currentColor">Running: 3 m/s</text>
      
      <!-- Cycling (fastest shown) -->
      <circle cx="50" cy="155" r="12" fill="#4488ff">
        <animate attributeName="cx" from="50" to="350" dur="4s" repeatCount="indefinite"/>
      </circle>
      <text x="50" y="180" font-size="10" fill="currentColor">Cycling: 6 m/s</text>
      
      <!-- Finish line -->
      <line x1="480" y1="30" x2="480" y2="180" stroke="currentColor" stroke-width="2" stroke-dasharray="5,5"/>
    </svg>
  </div>

  <div class="spec-callout">
    <strong>📝 You must also recall typical speeds of:</strong>
    <ul>
      <li>People walking, running, cycling</li>
      <li>Different transport systems (e.g., cars, trains, planes)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📐 3 — Speed Calculations</h3>
  
  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15)); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid hsl(var(--primary) / 0.3);">
    <p style="font-size: 1.3rem; font-weight: bold; text-align: center;">
      distance travelled = speed × time
    </p>
    <p style="font-size: 1.2rem; text-align: center; margin-top: 0.5rem;">
      s = v × t
    </p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Symbol</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Distance</td>
          <td>s</td>
          <td>metres (m)</td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>v</td>
          <td>m/s</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>t</td>
          <td>seconds (s)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📈 4 — Average Speed</h3>
  
  <div class="definition-block">
    <h4>📘 For Non-Uniform Motion:</h4>
    <p>When speed is not constant, calculate <strong>average speed</strong>:</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1)); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
    <p style="font-size: 1.2rem; font-weight: bold; text-align: center;">
      average speed = total distance ÷ total time
    </p>
  </div>

  <div class="example-block">
    <h4>💡 Worked Example:</h4>
    <p>A car travels 150 km in 2 hours. Calculate the average speed.</p>
    <div style="background: hsl(var(--muted)); padding: 1rem; border-radius: 8px; margin-top: 0.5rem;">
      <p>Average speed = 150 km ÷ 2 h = <strong>75 km/h</strong></p>
      <p>Or in m/s: 150,000 m ÷ 7200 s = <strong>20.8 m/s</strong></p>
    </div>
  </div>
</div>
      `,
      canonical_keywords: [
        "speed", "distance", "time", "scalar", "average speed",
        "m/s", "walking", "running", "cycling", "formula"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "State the typical speed of a person walking and a person running.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["walking", "1.5 m/s", "running", "3 m/s"]
        },
        {
          id: "p2",
          prompt_template: "A cyclist travels 3000 m in 500 seconds. Calculate the average speed.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["3000", "500", "6 m/s", "speed = distance / time"]
        },
        {
          id: "p3",
          prompt_template: "Explain why speed is described as a scalar quantity.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["magnitude", "no direction", "scalar", "how fast"]
        }
      ]
    },
    {
      id: "4-5-6-1-3-velocity",
      title: "4.5.6.1.3 – Velocity",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🎯 1 — What is Velocity?</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Velocity</strong> is speed in a given direction.</p>
    <p>It is a <strong>vector quantity</strong> because it includes direction.</p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Speed</th>
          <th>Velocity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>Scalar</td>
          <td>Vector</td>
        </tr>
        <tr>
          <td>Includes direction?</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>10 m/s</td>
          <td>10 m/s north</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔄 2 — Motion in a Circle (Qualitative)</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Concept:</h4>
    <p>An object moving in a circle can have <strong>constant speed</strong> but <strong>changing velocity</strong>.</p>
    <p>This is because the <strong>direction is continuously changing</strong>, even if speed stays the same.</p>
  </div>

  <!-- Animated Circular Motion Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 400 300" style="max-width: 100%; height: auto;">
      <!-- Circular path -->
      <circle cx="200" cy="150" r="100" fill="none" stroke="hsl(var(--muted-foreground) / 0.3)" stroke-width="2" stroke-dasharray="8,4"/>
      
      <!-- Center point -->
      <circle cx="200" cy="150" r="4" fill="currentColor"/>
      <text x="200" y="170" font-size="10" fill="currentColor" text-anchor="middle">Centre</text>
      
      <!-- Moving car on circle -->
      <circle cx="300" cy="150" r="12" fill="#4488ff" class="anim-rotate-cw" style="transform-origin: 200px 150px;">
        <animateTransform attributeName="transform" type="rotate" from="0 200 150" to="360 200 150" dur="4s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Velocity arrows at different positions (tangent to circle) -->
      <g>
        <line x1="300" y1="150" x2="300" y2="110" stroke="#ff4444" stroke-width="3" marker-end="url(#velArrow)"/>
        <text x="310" y="120" font-size="9" fill="#ff4444">v</text>
      </g>
      
      <g transform="rotate(90 200 150)">
        <line x1="300" y1="150" x2="300" y2="110" stroke="#ff4444" stroke-width="3" marker-end="url(#velArrow)" opacity="0.5"/>
      </g>
      
      <g transform="rotate(180 200 150)">
        <line x1="300" y1="150" x2="300" y2="110" stroke="#ff4444" stroke-width="3" marker-end="url(#velArrow)" opacity="0.5"/>
      </g>
      
      <g transform="rotate(270 200 150)">
        <line x1="300" y1="150" x2="300" y2="110" stroke="#ff4444" stroke-width="3" marker-end="url(#velArrow)" opacity="0.5"/>
      </g>
      
      <defs>
        <marker id="velArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ff4444"/>
        </marker>
      </defs>
      
      <!-- Labels -->
      <text x="200" y="30" font-size="12" fill="currentColor" text-anchor="middle" font-weight="bold">Circular Motion</text>
      <text x="200" y="280" font-size="11" fill="currentColor" text-anchor="middle">Speed = constant | Velocity = changing</text>
      <text x="200" y="295" font-size="10" fill="hsl(var(--muted-foreground))" text-anchor="middle">(direction changes continuously)</text>
    </svg>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>A car driving around a roundabout at 8 m/s</p>
    <ul>
      <li><strong>Speed</strong> = constant (8 m/s)</li>
      <li><strong>Velocity</strong> = always changing (direction changes)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📋 3 — Combined Summary</h3>
  
  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Definition</th>
          <th>Type</th>
          <th>Key Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Speed</strong></td>
          <td>How fast something moves</td>
          <td>Scalar</td>
          <td>No direction</td>
        </tr>
        <tr>
          <td><strong>Velocity</strong></td>
          <td>Speed in a given direction</td>
          <td>Vector</td>
          <td>Direction required</td>
        </tr>
        <tr>
          <td><strong>Average speed</strong></td>
          <td>Total distance ÷ total time</td>
          <td>Scalar</td>
          <td>Used when speed changes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "velocity", "speed", "direction", "vector", "scalar",
        "circular motion", "constant speed", "changing velocity"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Define velocity and explain how it differs from speed.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["velocity", "speed", "direction", "vector", "scalar"]
        },
        {
          id: "p2",
          prompt_template: "Explain why an object moving in a circle at constant speed has a changing velocity.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["velocity", "vector", "direction", "changing", "speed constant"]
        }
      ]
    },
    {
      id: "4-5-6-1-4-distance-time-graphs",
      title: "4.5.6.1.4 – Distance–Time Graphs",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">📊 1 — Distance–Time Graphs Represent Motion</h3>
  
  <div class="definition-block">
    <h4>📘 Key Idea:</h4>
    <p>If an object moves in a straight line, its distance travelled can be shown on a <strong>distance–time graph</strong>.</p>
    <ul>
      <li>Horizontal axis (x-axis): <strong>time (s)</strong></li>
      <li>Vertical axis (y-axis): <strong>distance (m)</strong></li>
    </ul>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Shape of Line</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Straight line, sloping upwards</td>
          <td>Constant speed</td>
        </tr>
        <tr>
          <td>Steeper line</td>
          <td>Faster speed</td>
        </tr>
        <tr>
          <td>Flat (horizontal) line</td>
          <td>Stationary</td>
        </tr>
        <tr>
          <td>Curved line</td>
          <td>Changing speed (acceleration or deceleration)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Animated Distance-Time Graph -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 450 320" style="max-width: 100%; height: auto;">
      <!-- Axes -->
      <line x1="60" y1="260" x2="420" y2="260" stroke="currentColor" stroke-width="2" marker-end="url(#axisArrow)"/>
      <line x1="60" y1="260" x2="60" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#axisArrow)"/>
      
      <!-- Axis labels -->
      <text x="240" y="295" font-size="12" fill="currentColor" text-anchor="middle">Time (s)</text>
      <text x="25" y="150" font-size="12" fill="currentColor" text-anchor="middle" transform="rotate(-90 25 150)">Distance (m)</text>
      
      <!-- Grid lines -->
      <line x1="60" y1="200" x2="420" y2="200" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      <line x1="60" y1="140" x2="420" y2="140" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      <line x1="60" y1="80" x2="420" y2="80" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      
      <line x1="150" y1="40" x2="150" y2="260" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      <line x1="240" y1="40" x2="240" y2="260" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      <line x1="330" y1="40" x2="330" y2="260" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      
      <!-- Example journey line -->
      <!-- Constant speed section -->
      <line x1="60" y1="260" x2="150" y2="180" stroke="#4CAF50" stroke-width="3"/>
      
      <!-- Stationary section -->
      <line x1="150" y1="180" x2="240" y2="180" stroke="#ff9944" stroke-width="3"/>
      
      <!-- Faster speed section -->
      <line x1="240" y1="180" x2="330" y2="80" stroke="#4488ff" stroke-width="3"/>
      
      <!-- Stationary again -->
      <line x1="330" y1="80" x2="400" y2="80" stroke="#ff9944" stroke-width="3"/>
      
      <!-- Animated dot following the path -->
      <circle r="6" fill="#ff4444">
        <animate attributeName="cx" values="60;150;240;330;400;400" dur="6s" repeatCount="indefinite"/>
        <animate attributeName="cy" values="260;180;180;80;80;80" dur="6s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Labels for sections -->
      <text x="105" y="235" font-size="10" fill="#4CAF50" text-anchor="middle">Constant</text>
      <text x="105" y="247" font-size="10" fill="#4CAF50" text-anchor="middle">speed</text>
      
      <text x="195" y="170" font-size="10" fill="#ff9944" text-anchor="middle">Stationary</text>
      
      <text x="285" y="145" font-size="10" fill="#4488ff" text-anchor="middle">Faster</text>
      <text x="285" y="157" font-size="10" fill="#4488ff" text-anchor="middle">speed</text>
      
      <text x="365" y="95" font-size="10" fill="#ff9944" text-anchor="middle">Stopped</text>
      
      <!-- Arrow markers -->
      <defs>
        <marker id="axisArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📐 2 — Speed from the Gradient</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Formula:</h4>
    <p>The <strong>speed</strong> of an object = <strong>gradient</strong> of its distance–time graph.</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15)); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid hsl(var(--primary) / 0.3);">
    <p style="font-size: 1.2rem; font-weight: bold; text-align: center;">
      speed = change in distance ÷ change in time = Δd / Δt
    </p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Gradient</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Large/steep gradient</td>
          <td>High speed</td>
        </tr>
        <tr>
          <td>Small/shallow gradient</td>
          <td>Low speed</td>
        </tr>
        <tr>
          <td>Zero gradient (flat)</td>
          <td>Stationary</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📈 3 — Accelerating Objects (Curved Graphs)</h3>
  
  <div class="key-facts-block">
    <h4>🔬 Key Concept:</h4>
    <p>If an object is <strong>accelerating</strong>, the graph is <strong>curved</strong>.</p>
    <p>To find the speed at a particular moment: Draw a <strong>tangent</strong> to the curve at that point, then calculate the <strong>gradient of the tangent</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>📝 Steps to Find Instantaneous Speed:</h4>
    <ol>
      <li>Touch the curve lightly with a straight line (tangent)</li>
      <li>Choose two clear points on the tangent</li>
      <li>Use the gradient formula: instantaneous speed = Δd / Δt</li>
    </ol>
  </div>

  <div class="spec-callout">
    <strong>📝 Students Must Be Able To:</strong>
    <ul>
      <li>Draw distance–time graphs from measurements</li>
      <li>Identify when an object is moving / stationary</li>
      <li>Compare speeds from gradients</li>
      <li>Interpret changes in speed</li>
      <li>Calculate speed from numerical data</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "distance-time graph", "gradient", "speed", "stationary",
        "constant speed", "acceleration", "tangent", "curved"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Describe what a horizontal line on a distance-time graph represents.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["stationary", "not moving", "zero speed", "stopped"]
        },
        {
          id: "p2",
          prompt_template: "Explain how to calculate speed from a distance-time graph.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["gradient", "change in distance", "change in time", "rise", "run"]
        },
        {
          id: "p3",
          prompt_template: "A distance-time graph shows a curve. Describe how to find the instantaneous speed at one point.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["tangent", "draw", "gradient", "line", "point"]
        }
      ]
    },
    {
      id: "4-5-6-1-5-acceleration",
      title: "4.5.6.1.5 – Acceleration",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">⚡ 1 — Average Acceleration</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p><strong>Acceleration</strong> is the rate of change of velocity.</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15)); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid hsl(var(--primary) / 0.3);">
    <p style="font-size: 1.3rem; font-weight: bold; text-align: center;">
      acceleration = change in velocity ÷ time taken
    </p>
    <p style="font-size: 1.2rem; text-align: center; margin-top: 0.5rem;">
      a = Δv / t = (v - u) / t
    </p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Symbol</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Acceleration</td>
          <td>a</td>
          <td>m/s²</td>
        </tr>
        <tr>
          <td>Change in velocity</td>
          <td>Δv</td>
          <td>m/s</td>
        </tr>
        <tr>
          <td>Time</td>
          <td>t</td>
          <td>s</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🔻 Deceleration:</h4>
    <p>If an object <strong>slows down</strong>, its acceleration is <strong>negative</strong> → this is called <strong>deceleration</strong>.</p>
  </div>

  <div class="example-block">
    <h4>💡 Everyday Examples:</h4>
    <ul>
      <li>🚗 A car speeding up (positive acceleration)</li>
      <li>🚂 A train braking (deceleration)</li>
      <li>⚽ A ball thrown upward (decelerates on the way up)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📊 2 — Velocity–Time Graphs</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Concept:</h4>
    <p>The <strong>gradient</strong> of a velocity–time graph gives <strong>acceleration</strong>.</p>
  </div>

  <div class="formula-block" style="background: hsl(var(--muted)); padding: 1rem; border-radius: 8px; margin: 1rem 0;">
    <p style="font-size: 1.1rem; text-align: center;">
      acceleration = Δv / Δt = gradient
    </p>
  </div>

  <!-- Animated Velocity-Time Graph -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 450 320" style="max-width: 100%; height: auto;">
      <!-- Axes -->
      <line x1="60" y1="260" x2="420" y2="260" stroke="currentColor" stroke-width="2" marker-end="url(#vtArrow)"/>
      <line x1="60" y1="260" x2="60" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#vtArrow)"/>
      
      <!-- Axis labels -->
      <text x="240" y="295" font-size="12" fill="currentColor" text-anchor="middle">Time (s)</text>
      <text x="25" y="150" font-size="12" fill="currentColor" text-anchor="middle" transform="rotate(-90 25 150)">Velocity (m/s)</text>
      
      <!-- Grid -->
      <line x1="60" y1="200" x2="420" y2="200" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      <line x1="60" y1="140" x2="420" y2="140" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      <line x1="60" y1="80" x2="420" y2="80" stroke="hsl(var(--muted-foreground) / 0.2)" stroke-width="1"/>
      
      <!-- Accelerating section (positive gradient) -->
      <line x1="60" y1="260" x2="150" y2="140" stroke="#4CAF50" stroke-width="3"/>
      <text x="105" y="215" font-size="10" fill="#4CAF50" text-anchor="middle">Accelerating</text>
      <text x="105" y="227" font-size="10" fill="#4CAF50" text-anchor="middle">(+ve gradient)</text>
      
      <!-- Constant velocity section (zero gradient) -->
      <line x1="150" y1="140" x2="250" y2="140" stroke="#ff9944" stroke-width="3"/>
      <text x="200" y="125" font-size="10" fill="#ff9944" text-anchor="middle">Constant velocity</text>
      <text x="200" y="137" font-size="10" fill="#ff9944" text-anchor="middle">(zero gradient)</text>
      
      <!-- Decelerating section (negative gradient) -->
      <line x1="250" y1="140" x2="350" y2="220" stroke="#ff4444" stroke-width="3"/>
      <text x="300" y="165" font-size="10" fill="#ff4444" text-anchor="middle">Decelerating</text>
      <text x="300" y="177" font-size="10" fill="#ff4444" text-anchor="middle">(-ve gradient)</text>
      
      <!-- Stopped -->
      <line x1="350" y1="220" x2="400" y2="220" stroke="#888" stroke-width="3"/>
      
      <!-- Shaded area showing distance -->
      <polygon points="60,260 150,260 150,140 60,260" fill="#4CAF50" fill-opacity="0.2"/>
      <polygon points="150,260 250,260 250,140 150,140" fill="#ff9944" fill-opacity="0.2"/>
      <polygon points="250,260 350,260 350,220 250,140" fill="#ff4444" fill-opacity="0.2"/>
      
      <text x="380" y="45" font-size="10" fill="currentColor" text-anchor="middle">Area under graph</text>
      <text x="380" y="57" font-size="10" fill="currentColor" text-anchor="middle">= Distance</text>
      
      <defs>
        <marker id="vtArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="currentColor"/>
        </marker>
      </defs>
    </svg>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Gradient Type</th>
          <th>Interpretation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Positive gradient</td>
          <td>Accelerating</td>
        </tr>
        <tr>
          <td>Zero gradient (flat)</td>
          <td>Constant velocity</td>
        </tr>
        <tr>
          <td>Negative gradient</td>
          <td>Decelerating</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📏 3 — Distance from a Velocity–Time Graph</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Concept:</h4>
    <p><strong>Area under</strong> the velocity–time graph = <strong>distance travelled</strong> (or displacement).</p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Graph Shape</th>
          <th>How to Find Distance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rectangle</td>
          <td>area = v × t</td>
        </tr>
        <tr>
          <td>Triangle</td>
          <td>area = ½ × base × height</td>
        </tr>
        <tr>
          <td>Trapezium</td>
          <td>½ × (sum of parallel sides) × height</td>
        </tr>
        <tr>
          <td>Irregular</td>
          <td>Count squares or split into shapes</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📐 4 — Uniform Acceleration Equation</h3>
  
  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2)); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid hsl(var(--primary) / 0.4);">
    <p style="font-size: 1.4rem; font-weight: bold; text-align: center;">
      v² − u² = 2as
    </p>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Symbol</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Final velocity</td>
          <td>v</td>
          <td>m/s</td>
        </tr>
        <tr>
          <td>Initial velocity</td>
          <td>u</td>
          <td>m/s</td>
        </tr>
        <tr>
          <td>Acceleration</td>
          <td>a</td>
          <td>m/s²</td>
        </tr>
        <tr>
          <td>Distance</td>
          <td>s</td>
          <td>m</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="spec-callout">
    <strong>⚠️ Note:</strong> This equation is used when acceleration is <strong>constant</strong> (uniform acceleration).
  </div>
</div>
      `,
      canonical_keywords: [
        "acceleration", "deceleration", "velocity-time graph", "gradient",
        "m/s²", "area under graph", "distance", "uniform acceleration", "v² - u² = 2as"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A car accelerates from rest to 20 m/s in 8 seconds. Calculate its acceleration.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["a = Δv/t", "20", "8", "2.5 m/s²"]
        },
        {
          id: "p2",
          prompt_template: "Describe how to find the distance travelled from a velocity-time graph.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["area", "under", "graph", "calculate"]
        },
        {
          id: "p3",
          prompt_template: "A cyclist decelerates uniformly from 12 m/s to rest over a distance of 18 m. Calculate the deceleration.",
          marks: 4,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["v² - u² = 2as", "0", "144", "36", "-4 m/s²"]
        }
      ]
    },
    {
      id: "4-5-6-1-6-terminal-velocity",
      title: "4.5.6.1.6 – Free Fall and Terminal Velocity",
      type: "content",
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🌍 1 — Free Fall</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>Near Earth's surface, objects falling freely accelerate at approximately:</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary) / 0.15), hsl(var(--secondary) / 0.15)); padding: 1.5rem; border-radius: 12px; margin: 1.5rem 0; border: 2px solid hsl(var(--primary) / 0.3);">
    <p style="font-size: 1.5rem; font-weight: bold; text-align: center;">
      g = 9.8 m/s²
    </p>
    <p style="font-size: 1rem; text-align: center; color: hsl(var(--muted-foreground));">
      (acceleration due to gravity)
    </p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Points:</h4>
    <ul>
      <li>Acts <strong>downwards</strong> towards Earth's centre</li>
      <li>Same for all objects (ignoring air resistance)</li>
      <li>In calculations, can use 10 m/s² for simplicity</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🪂 2 — Terminal Velocity</h3>
  
  <div class="definition-block">
    <h4>📘 Motion Through a Fluid (air/liquid):</h4>
    <p>A falling object:</p>
    <ol>
      <li>Starts <strong>accelerating downwards</strong> due to gravity</li>
      <li>As speed increases, <strong>air resistance increases</strong></li>
      <li>Air resistance increases until it <strong>balances weight</strong></li>
      <li><strong>Resultant force becomes zero</strong></li>
      <li>Object travels at <strong>terminal velocity</strong> (constant speed)</li>
    </ol>
  </div>

  <!-- Animated Terminal Velocity Diagram -->
  <div class="diagram-container" style="margin: 1.5rem 0; display: flex; justify-content: center;">
    <svg viewBox="0 0 500 350" style="max-width: 100%; height: auto;">
      <!-- Sky background gradient -->
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#87ceeb"/>
          <stop offset="100%" style="stop-color:#e6f3ff"/>
        </linearGradient>
      </defs>
      <rect x="30" y="20" width="440" height="300" fill="url(#skyGrad)" rx="10"/>
      
      <!-- Stage 1: Start -->
      <g transform="translate(80, 0)">
        <text x="30" y="45" font-size="11" fill="#333" font-weight="bold" text-anchor="middle">START</text>
        
        <!-- Falling object -->
        <circle cx="30" cy="80" r="15" fill="#4488ff" stroke="#333" stroke-width="2"/>
        
        <!-- Weight arrow (big) -->
        <line x1="30" y1="95" x2="30" y2="145" stroke="#ff4444" stroke-width="4"/>
        <polygon points="30,150 25,140 35,140" fill="#ff4444"/>
        <text x="50" y="130" font-size="9" fill="#ff4444">Weight</text>
        <text x="50" y="140" font-size="9" fill="#ff4444">(large)</text>
        
        <!-- Air resistance arrow (small) -->
        <line x1="30" y1="65" x2="30" y2="55" stroke="#4CAF50" stroke-width="2"/>
        <polygon points="30,50 27,58 33,58" fill="#4CAF50"/>
        <text x="50" y="60" font-size="8" fill="#4CAF50">Air R</text>
        <text x="50" y="70" font-size="8" fill="#4CAF50">(small)</text>
        
        <text x="30" y="180" font-size="9" fill="#333" text-anchor="middle">Accelerating</text>
        <text x="30" y="192" font-size="9" fill="#333" text-anchor="middle">⬇️</text>
      </g>
      
      <!-- Stage 2: Midway -->
      <g transform="translate(220, 0)">
        <text x="30" y="45" font-size="11" fill="#333" font-weight="bold" text-anchor="middle">MIDWAY</text>
        
        <!-- Falling object -->
        <circle cx="30" cy="100" r="15" fill="#4488ff" stroke="#333" stroke-width="2"/>
        
        <!-- Weight arrow -->
        <line x1="30" y1="115" x2="30" y2="155" stroke="#ff4444" stroke-width="4"/>
        <polygon points="30,160 25,150 35,150" fill="#ff4444"/>
        <text x="50" y="145" font-size="9" fill="#ff4444">Weight</text>
        
        <!-- Air resistance arrow (medium) -->
        <line x1="30" y1="85" x2="30" y2="60" stroke="#4CAF50" stroke-width="3"/>
        <polygon points="30,55 27,65 33,65" fill="#4CAF50"/>
        <text x="50" y="70" font-size="8" fill="#4CAF50">Air R</text>
        <text x="50" y="80" font-size="8" fill="#4CAF50">(medium)</text>
        
        <text x="30" y="190" font-size="9" fill="#333" text-anchor="middle">Still accelerating</text>
        <text x="30" y="202" font-size="9" fill="#333" text-anchor="middle">(but less)</text>
      </g>
      
      <!-- Stage 3: Terminal Velocity -->
      <g transform="translate(360, 0)">
        <text x="30" y="45" font-size="11" fill="#333" font-weight="bold" text-anchor="middle">TERMINAL</text>
        
        <!-- Falling object -->
        <circle cx="30" cy="100" r="15" fill="#4488ff" stroke="#333" stroke-width="2"/>
        
        <!-- Weight arrow -->
        <line x1="30" y1="115" x2="30" y2="155" stroke="#ff4444" stroke-width="4"/>
        <polygon points="30,160 25,150 35,150" fill="#ff4444"/>
        <text x="50" y="145" font-size="9" fill="#ff4444">Weight</text>
        
        <!-- Air resistance arrow (equal) -->
        <line x1="30" y1="85" x2="30" y2="45" stroke="#4CAF50" stroke-width="4"/>
        <polygon points="30,40 27,50 33,50" fill="#4CAF50"/>
        <text x="50" y="60" font-size="8" fill="#4CAF50">Air R</text>
        <text x="50" y="70" font-size="8" fill="#4CAF50">(= Weight)</text>
        
        <text x="30" y="190" font-size="9" fill="#ff9944" text-anchor="middle" font-weight="bold">Constant speed</text>
        <text x="30" y="202" font-size="9" fill="#333" text-anchor="middle">(no acceleration)</text>
      </g>
      
      <!-- Arrows showing progression -->
      <path d="M130 100 L180 100" stroke="#666" stroke-width="2" marker-end="url(#progArrow)"/>
      <path d="M270 100 L320 100" stroke="#666" stroke-width="2" marker-end="url(#progArrow)"/>
      
      <!-- Velocity-Time graph sketch at bottom -->
      <rect x="100" y="230" width="300" height="80" fill="white" stroke="#333" stroke-width="1" rx="5"/>
      <text x="250" y="245" font-size="10" fill="#333" text-anchor="middle" font-weight="bold">Velocity-Time Graph</text>
      
      <!-- V-T curve -->
      <path d="M120 295 Q200 240 380 260" stroke="#4488ff" stroke-width="2" fill="none"/>
      <line x1="120" y1="295" x2="120" y2="255" stroke="#333" stroke-width="1"/>
      <line x1="120" y1="295" x2="380" y2="295" stroke="#333" stroke-width="1"/>
      <text x="100" y="275" font-size="8" fill="#333">v</text>
      <text x="250" y="308" font-size="8" fill="#333">time</text>
      
      <!-- Terminal velocity line -->
      <line x1="250" y1="260" x2="380" y2="260" stroke="#ff9944" stroke-width="1" stroke-dasharray="4,2"/>
      <text x="315" y="255" font-size="8" fill="#ff9944">Terminal velocity</text>
      
      <defs>
        <marker id="progArrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L7,3 z" fill="#666"/>
        </marker>
      </defs>
    </svg>
  </div>

  <div class="table-wrapper">
    <table class="content-table">
      <thead>
        <tr>
          <th>Stage</th>
          <th>Weight</th>
          <th>Air Resistance</th>
          <th>Resultant Force</th>
          <th>Motion</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Start</td>
          <td>Large</td>
          <td>Small</td>
          <td>Downwards</td>
          <td>Accelerates</td>
        </tr>
        <tr>
          <td>Midway</td>
          <td>Same</td>
          <td>Increasing</td>
          <td>Smaller</td>
          <td>Acceleration decreases</td>
        </tr>
        <tr>
          <td>Terminal velocity</td>
          <td>Equal</td>
          <td>Equal</td>
          <td>Zero</td>
          <td>Constant speed</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="spec-callout">
    <strong>📝 Spec Requirements:</strong>
    <ul>
      <li>Students must be able to <strong>draw and interpret</strong> velocity–time graphs showing terminal velocity</li>
      <li>Students must also be able to <strong>interpret the changing motion</strong> in terms of the forces acting</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "free fall", "terminal velocity", "gravity", "9.8 m/s²", "air resistance",
        "weight", "resultant force", "constant speed", "acceleration"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "State the value of the acceleration due to gravity near Earth's surface.",
          marks: 1,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["9.8 m/s²", "10 m/s²"]
        },
        {
          id: "p2",
          prompt_template: "Explain why a skydiver eventually reaches terminal velocity.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["air resistance", "increases", "weight", "equal", "balanced", "resultant force", "zero", "constant speed"]
        },
        {
          id: "p3",
          prompt_template: "Describe how the forces on a falling object change as it accelerates from rest to terminal velocity.",
          marks: 6,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["weight", "constant", "air resistance", "increases", "speed", "resultant", "decreases", "zero", "terminal"]
        }
      ]
    }
  ]
};
