// GCSE AQA Physics - Module 1: Forces and Their Interactions
// Complete revision notes with diagrams and visual elements

export interface ForcesSubsection {
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

export interface ForcesModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: ForcesSubsection[];
}

export const forcesModuleData: ForcesModule = {
  id: "forces-module-1",
  title: "Module 1: Forces & Their Interactions",
  status: "ready",
  subsections: [
    {
      id: "5-1-1-scalar-vector-quantities",
      title: "5.1.1 – Scalar and Vector Quantities",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Scalar Quantities (Magnitude Only)</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>Scalars are physical quantities that have <strong>size (magnitude) only</strong>, and <strong>no direction</strong>. They tell you how much of something there is, but not where or in what direction it acts.</p>
  </div>

  <div class="table-block">
    <h4>📊 Common Scalar Quantities</h4>
    <table>
      <thead>
        <tr>
          <th>Scalar Quantity</th>
          <th>Unit</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Mass</strong></td>
          <td>kg</td>
          <td>Amount of matter in an object; does not change with location</td>
        </tr>
        <tr>
          <td><strong>Temperature</strong></td>
          <td>°C / K</td>
          <td>A measure of thermal energy</td>
        </tr>
        <tr>
          <td><strong>Distance</strong></td>
          <td>m</td>
          <td>Total path length travelled</td>
        </tr>
        <tr>
          <td><strong>Speed</strong></td>
          <td>m/s</td>
          <td>How fast something travels (no direction required)</td>
        </tr>
        <tr>
          <td><strong>Time</strong></td>
          <td>s</td>
          <td>Duration of an event</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p><strong>Scalar quantities = magnitude only, no direction.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Vector Quantities (Magnitude + Direction)</h3>
  
  <div class="definition-block">
    <h4>📗 Definition:</h4>
    <p>A <strong>vector</strong> is a quantity with <strong>magnitude AND direction</strong>. It is impossible to fully describe a vector without giving both.</p>
  </div>

  <div class="table-block">
    <h4>📊 Common Vector Quantities</h4>
    <table>
      <thead>
        <tr>
          <th>Vector Quantity</th>
          <th>Unit</th>
          <th>Direction Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Force</strong></td>
          <td>N</td>
          <td>"10 N to the right"</td>
        </tr>
        <tr>
          <td><strong>Weight</strong></td>
          <td>N</td>
          <td>Always acts downwards, towards Earth's centre</td>
        </tr>
        <tr>
          <td><strong>Velocity</strong></td>
          <td>m/s</td>
          <td>"20 m/s north"</td>
        </tr>
        <tr>
          <td><strong>Displacement</strong></td>
          <td>m</td>
          <td>"5 m east"</td>
        </tr>
        <tr>
          <td><strong>Acceleration</strong></td>
          <td>m/s²</td>
          <td>"3 m/s² upwards"</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>💡 GCSE Tip:</h4>
    <p>AQA often gives marks for <strong>including direction</strong> in vector answers:</p>
    <ul>
      <li>✅ "5 N to the left"</li>
      <li>✅ "12 m/s north-east"</li>
      <li>❌ "5 N" (missing direction!)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Representing Vectors Using Arrows</h3>
  
  <div class="key-facts-block">
    <h4>🎯 Key Idea:</h4>
    <p>Vectors are drawn using <strong>arrows</strong>. The arrow carries two pieces of information:</p>
  </div>

  <div class="table-block">
    <h4>📌 Arrow Meaning Table</h4>
    <table>
      <thead>
        <tr>
          <th>Arrow Feature</th>
          <th>Represents</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Length</strong></td>
          <td>Magnitude</td>
          <td>Longer arrow = larger force/velocity</td>
        </tr>
        <tr>
          <td><strong>Direction</strong></td>
          <td>Direction of action</td>
          <td>Arrow points in the direction the vector acts</td>
        </tr>
        <tr>
          <td><strong>Arrow Tail</strong></td>
          <td>Point of application</td>
          <td>Where the force/velocity originates</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Vector Arrow Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Vector Arrow Diagram</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="300" height="120" viewBox="0 0 300 120">
        <!-- Base line -->
        <line x1="30" y1="80" x2="270" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        
        <!-- Vector arrow -->
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
          </marker>
        </defs>
        <line x1="50" y1="80" x2="220" y2="30" stroke="#3b82f6" stroke-width="3" marker-end="url(#arrowhead)"/>
        
        <!-- Labels -->
        <text x="135" y="45" fill="currentColor" font-size="12" font-weight="bold">10 N at 45°</text>
        <text x="50" y="100" fill="currentColor" font-size="10">Tail (start)</text>
        <text x="200" y="20" fill="currentColor" font-size="10">Head (direction)</text>
        
        <!-- Angle indicator -->
        <path d="M 70 80 A 20 20 0 0 0 85 67" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="90" y="75" fill="#f59e0b" font-size="10">45°</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">A vector showing '10 N at 45° upwards' - longer arrow = larger force</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why arrows matter:</h4>
    <ul>
      <li>Visualise forces</li>
      <li>Calculate resultant forces</li>
      <li>Represent velocities in projectile motion</li>
      <li>Draw free-body diagrams accurately</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "scalar", "vector", "magnitude", "direction", "force", "weight", "velocity",
        "displacement", "acceleration", "mass", "speed", "distance", "temperature",
        "arrow", "representation"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Define the difference between a scalar and a vector quantity, giving two examples of each.",
          marks: 4,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["scalar", "magnitude only", "vector", "magnitude and direction", "mass", "speed", "force", "velocity"]
        },
        {
          id: "p2",
          prompt_template: "Explain why force is classified as a vector quantity and describe how vectors are represented using arrows.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["force", "vector", "magnitude", "direction", "arrow", "length", "direction"]
        }
      ]
    },
    {
      id: "5-1-2-contact-non-contact-forces",
      title: "5.1.2 – Contact and Non-Contact Forces",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – What Is a Force?</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>A <strong>force</strong> is a push or pull acting on an object due to its <strong>interaction with another object</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🔄 Forces can:</h4>
    <ul>
      <li>Change <strong>speed</strong> (speed up or slow down)</li>
      <li>Change <strong>direction</strong></li>
      <li>Change <strong>shape</strong> (stretch, compress, bend)</li>
      <li><strong>Start</strong> or <strong>stop</strong> motion</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Contact vs Non-Contact Forces</h3>
  
  <div class="key-idea-block">
    <h4>🎯 Key Idea:</h4>
    <p>All forces belong to one of <strong>two categories</strong>:</p>
  </div>

  <div class="table-block">
    <h4>📊 Types of Forces Comparison</h4>
    <table>
      <thead>
        <tr>
          <th>Type of Force</th>
          <th>Definition</th>
          <th>Do Objects Touch?</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Contact Forces</strong></td>
          <td>Forces that act when objects physically touch</td>
          <td>✅ Yes</td>
          <td>Friction, Air Resistance, Tension, Normal Contact Force</td>
        </tr>
        <tr>
          <td><strong>Non-Contact Forces</strong></td>
          <td>Forces that act across a distance, through a field</td>
          <td>❌ No</td>
          <td>Gravitational, Electrostatic, Magnetic</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="spec-point-block">
    <h4>📋 Spec Wording:</h4>
    <ul>
      <li>"Contact forces – the objects are <strong>physically touching</strong>."</li>
      <li>"Non-contact forces – the objects are <strong>physically separated</strong>."</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Examples of Contact Forces</h3>

  <!-- Contact Forces Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Contact Forces Diagram</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="320" height="200" viewBox="0 0 320 200">
        <!-- Box -->
        <rect x="120" y="100" width="80" height="60" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2" rx="4"/>
        <text x="160" y="135" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">Box</text>
        
        <!-- Surface -->
        <line x1="40" y1="160" x2="280" y2="160" stroke="currentColor" stroke-width="3"/>
        <text x="160" y="180" fill="currentColor" font-size="10" text-anchor="middle">Surface</text>
        
        <!-- Normal Force Arrow (up) -->
        <defs>
          <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e"/>
          </marker>
          <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#ef4444"/>
          </marker>
          <marker id="arrowOrange" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f59e0b"/>
          </marker>
        </defs>
        
        <!-- Normal force -->
        <line x1="160" y1="100" x2="160" y2="50" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreen)"/>
        <text x="175" y="70" fill="#22c55e" font-size="10" font-weight="bold">Normal (N)</text>
        
        <!-- Friction arrow (left, opposing motion) -->
        <line x1="120" y1="130" x2="60" y2="130" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)"/>
        <text x="70" y="145" fill="#ef4444" font-size="10" font-weight="bold">Friction</text>
        
        <!-- Applied force (right) -->
        <line x1="200" y1="130" x2="260" y2="130" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowOrange)"/>
        <text x="230" y="145" fill="#f59e0b" font-size="10" font-weight="bold">Push</text>
        
        <!-- Motion indicator -->
        <text x="240" y="115" fill="currentColor" font-size="10">→ motion</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Contact forces acting on a box being pushed along a surface</p>
  </div>

  <div class="table-block">
    <h4>📌 Contact Forces Summary</h4>
    <table>
      <thead>
        <tr>
          <th>Contact Force</th>
          <th>Symbol</th>
          <th>Direction</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Friction</strong></td>
          <td>F / Fr</td>
          <td>Opposite to motion</td>
          <td>Resists sliding between surfaces</td>
        </tr>
        <tr>
          <td><strong>Air Resistance</strong></td>
          <td>Fₐᵢᵣ</td>
          <td>Opposite to motion</td>
          <td>Friction from air particles colliding with object</td>
        </tr>
        <tr>
          <td><strong>Tension</strong></td>
          <td>T</td>
          <td>Along rope, outward</td>
          <td>Force transmitted through rope/string</td>
        </tr>
        <tr>
          <td><strong>Normal Contact</strong></td>
          <td>N / R</td>
          <td>Perpendicular to surface (90°)</td>
          <td>Support force from surface pushing back</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Examples of Non-Contact Forces</h3>

  <!-- Non-Contact Forces Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Non-Contact Forces Acting at a Distance</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="320" height="180" viewBox="0 0 320 180">
        <!-- Gravitational -->
        <circle cx="80" cy="50" r="25" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
        <text x="80" y="55" fill="currentColor" font-size="10" text-anchor="middle">Mass</text>
        <circle cx="80" cy="140" r="35" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2"/>
        <text x="80" y="145" fill="currentColor" font-size="10" text-anchor="middle">Earth</text>
        <line x1="80" y1="75" x2="80" y2="100" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
        <text x="80" y="20" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Gravitational</text>
        
        <!-- Electrostatic -->
        <circle cx="180" cy="70" r="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2"/>
        <text x="180" y="75" fill="currentColor" font-size="10" text-anchor="middle">+</text>
        <circle cx="220" cy="70" r="15" fill="#22c55e" opacity="0.3" stroke="#22c55e" stroke-width="2"/>
        <text x="220" y="75" fill="currentColor" font-size="10" text-anchor="middle">−</text>
        <line x1="195" y1="70" x2="205" y2="70" stroke="#8b5cf6" stroke-width="2"/>
        <text x="200" y="20" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">Electrostatic</text>
        <text x="200" y="100" fill="currentColor" font-size="8" text-anchor="middle">Attract</text>
        
        <!-- Magnetic -->
        <rect x="260" y="55" width="25" height="30" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2" rx="3"/>
        <text x="272" y="75" fill="currentColor" font-size="8" text-anchor="middle">N</text>
        <rect x="290" y="55" width="25" height="30" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="2" rx="3"/>
        <text x="302" y="75" fill="currentColor" font-size="8" text-anchor="middle">S</text>
        <text x="290" y="20" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Magnetic</text>
        <text x="290" y="100" fill="currentColor" font-size="8" text-anchor="middle">Attract</text>
      </svg>
    </div>
  </div>

  <div class="table-block">
    <h4>📌 Non-Contact Forces Summary</h4>
    <table>
      <thead>
        <tr>
          <th>Non-Contact Force</th>
          <th>Type</th>
          <th>Example</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Gravitational</strong></td>
          <td>Attractive only</td>
          <td>Earth pulling objects</td>
          <td>Weight acts downwards</td>
        </tr>
        <tr>
          <td><strong>Electrostatic</strong></td>
          <td>Attractive or repulsive</td>
          <td>Proton & electron</td>
          <td>Depends on charge (+ or −)</td>
        </tr>
        <tr>
          <td><strong>Magnetic</strong></td>
          <td>Attractive or repulsive</td>
          <td>Magnet poles</td>
          <td>Like poles repel, opposite attract</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Interaction Pairs (Newton's Third Law)</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>For every <strong>interaction</strong>, there are always <strong>two forces</strong>:</p>
    <ul>
      <li>Equal in <strong>magnitude</strong></li>
      <li>Opposite in <strong>direction</strong></li>
      <li>Act on <strong>different objects</strong></li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Examples of Interaction Pairs</h4>
    <table>
      <thead>
        <tr>
          <th>Scenario</th>
          <th>Object A's Force on B</th>
          <th>Object B's Force on A</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Book on a table</td>
          <td>Book pushes down on table (weight)</td>
          <td>Table pushes up on book (normal contact)</td>
        </tr>
        <tr>
          <td>Person standing on Earth</td>
          <td>Earth pulls person down</td>
          <td>Person pulls Earth up</td>
        </tr>
        <tr>
          <td>Person pulling a rope</td>
          <td>Person pulls rope</td>
          <td>Rope pulls person</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="warning-block">
    <h4>⚠️ Important Exam Tip:</h4>
    <p><strong>Interaction pairs are NOT balanced forces!</strong></p>
    <ul>
      <li>Balanced forces act on <strong>the same object</strong></li>
      <li>Interaction pairs act on <strong>two different objects</strong></li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "contact force", "non-contact force", "friction", "air resistance", "tension",
        "normal contact", "gravitational", "electrostatic", "magnetic", "interaction pair",
        "Newton's third law", "force", "push", "pull"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Explain the difference between contact and non-contact forces, giving two examples of each.",
          marks: 4,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["contact", "touching", "non-contact", "field", "friction", "tension", "gravitational", "magnetic"]
        },
        {
          id: "p2",
          prompt_template: "Describe what is meant by an interaction pair and give one example.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["two forces", "equal", "opposite", "different objects", "example"]
        }
      ]
    },
    {
      id: "5-1-3-gravity",
      title: "5.1.3 – Gravity",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – The Weight Equation</h3>
  
  <div class="definition-block">
    <h4>📘 Key Equation:</h4>
    <p class="equation">W = m × g</p>
    <p>Where:</p>
    <ul>
      <li><strong>W</strong> = weight (newtons, N)</li>
      <li><strong>m</strong> = mass (kilograms, kg)</li>
      <li><strong>g</strong> = gravitational field strength (N/kg)</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Meaning of Each Term</h4>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>What it Represents</th>
          <th>Unit</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>W (weight)</strong></td>
          <td>Gravitational force acting on an object</td>
          <td>N</td>
          <td>A vector acting downwards</td>
        </tr>
        <tr>
          <td><strong>m (mass)</strong></td>
          <td>Amount of matter</td>
          <td>kg</td>
          <td>Stays constant everywhere</td>
        </tr>
        <tr>
          <td><strong>g (field strength)</strong></td>
          <td>Force per kg</td>
          <td>N/kg</td>
          <td>Depends on planet/location</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Gravitational Field Strength (g)</h3>
  
  <div class="key-facts-block">
    <h4>🌍 What is g?</h4>
    <ul>
      <li>The force on <strong>1 kg of mass</strong> in a gravitational field</li>
      <li>A measure of <strong>how strong gravity is</strong> at a location</li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Values of g on Different Bodies</h4>
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>g (N/kg)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>🌍 Earth</td>
          <td><strong>9.81</strong> (often rounded to 10 in GCSE)</td>
        </tr>
        <tr>
          <td>🌙 Moon</td>
          <td>1.63</td>
        </tr>
        <tr>
          <td>🔴 Mars</td>
          <td>3.8</td>
        </tr>
        <tr>
          <td>⚪ Jupiter</td>
          <td>24.8</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>💡 Exam Reminder:</h4>
    <p>In all questions, AQA gives the value of g unless stated otherwise.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Centre of Mass</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>The <strong>centre of mass</strong> is the point at which the whole weight of the object is considered to act.</p>
  </div>

  <!-- Centre of Mass Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Centre of Mass for Different Shapes</h4>
    <div style="display: flex; justify-content: space-around; align-items: center; padding: 1rem; flex-wrap: wrap; gap: 1rem;">
      <svg width="80" height="100" viewBox="0 0 80 100">
        <!-- Sphere -->
        <circle cx="40" cy="50" r="30" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="40" cy="50" r="3" fill="#ef4444"/>
        <text x="40" y="95" fill="currentColor" font-size="9" text-anchor="middle">Sphere</text>
        <text x="40" y="15" fill="currentColor" font-size="8" text-anchor="middle">Centre</text>
      </svg>
      
      <svg width="80" height="100" viewBox="0 0 80 100">
        <!-- Square -->
        <rect x="10" y="20" width="60" height="60" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="2"/>
        <circle cx="40" cy="50" r="3" fill="#ef4444"/>
        <text x="40" y="95" fill="currentColor" font-size="9" text-anchor="middle">Square</text>
        <text x="40" y="12" fill="currentColor" font-size="8" text-anchor="middle">Centre</text>
      </svg>
      
      <svg width="80" height="100" viewBox="0 0 80 100">
        <!-- Ring -->
        <circle cx="40" cy="50" r="30" fill="none" stroke="#f59e0b" stroke-width="8" opacity="0.3"/>
        <circle cx="40" cy="50" r="3" fill="#ef4444"/>
        <text x="40" y="95" fill="currentColor" font-size="9" text-anchor="middle">Ring</text>
        <text x="40" y="12" fill="currentColor" font-size="8" text-anchor="middle">Empty centre!</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Red dots show centre of mass - note the ring's centre is in empty space!</p>
  </div>

  <div class="key-facts-block">
    <h4>📌 Key Points:</h4>
    <ul>
      <li>Used for drawing force diagrams</li>
      <li>For <strong>symmetrical objects</strong>, it is at the geometric centre</li>
      <li>For <strong>irregular objects</strong>, it is found at the balance point</li>
      <li>For a <strong>ring/hoop</strong>, it's in the empty space at the centre!</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Weight and Mass Relationship</h3>
  
  <div class="key-idea-block">
    <h4>📐 Direct Proportionality:</h4>
    <p class="highlight-box">W ∝ m (when g is constant)</p>
    <p>If mass <strong>doubles</strong> → weight <strong>doubles</strong></p>
  </div>

  <div class="table-block">
    <h4>📊 Proportionality Example (on Earth, g = 9.8 N/kg)</h4>
    <table>
      <thead>
        <tr>
          <th>Mass (kg)</th>
          <th>g (Earth)</th>
          <th>Weight (N)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>9.8</td><td>9.8</td></tr>
        <tr><td>2</td><td>9.8</td><td>19.6</td></tr>
        <tr><td>5</td><td>9.8</td><td>49</td></tr>
        <tr><td>10</td><td>9.8</td><td>98</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Measuring Weight vs Mass</h3>

  <div class="table-block">
    <h4>📊 Mass vs Weight Comparison</h4>
    <table>
      <thead>
        <tr>
          <th>Property</th>
          <th>Mass</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Type</strong></td>
          <td>Scalar</td>
          <td>Vector</td>
        </tr>
        <tr>
          <td><strong>What it measures</strong></td>
          <td>Amount of matter</td>
          <td>Gravitational force</td>
        </tr>
        <tr>
          <td><strong>Units</strong></td>
          <td>kg</td>
          <td>N</td>
        </tr>
        <tr>
          <td><strong>Depends on location?</strong></td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td><strong>Measured using</strong></td>
          <td>Balance</td>
          <td>Newtonmeter (spring balance)</td>
        </tr>
        <tr>
          <td><strong>Equation</strong></td>
          <td>—</td>
          <td>W = m × g</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="warning-block">
    <h4>❗ Common Misconceptions (Exam Traps!):</h4>
    <ul>
      <li>❌ "My mass on the Moon is lower." → <strong>Incorrect</strong> — mass stays the same!</li>
      <li>❌ "Gravity is the same everywhere." → <strong>No</strong> — g changes between planets</li>
      <li>❌ "Weight is measured in kg." → <strong>Wrong</strong> — weight is measured in newtons (N)</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: [
        "weight", "mass", "gravitational field strength", "g", "W=mg", "newtons",
        "kilograms", "centre of mass", "newtonmeter", "balance", "proportional"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A 5 kg object is on Earth where g = 10 N/kg. Calculate its weight.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["W=mg", "50 N", "weight"]
        },
        {
          id: "p2",
          prompt_template: "Explain the difference between mass and weight, including how each is measured.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["mass", "matter", "kg", "balance", "weight", "force", "N", "newtonmeter", "location"]
        }
      ]
    },
    {
      id: "5-1-4-resultant-forces",
      title: "5.1.4 – Resultant Forces",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – What Is a Resultant Force?</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>The <strong>resultant force</strong> is the single force that has the same effect as all the forces acting on an object <strong>combined</strong>.</p>
  </div>

  <div class="table-block">
    <h4>📊 Why We Use Resultant Force</h4>
    <table>
      <thead>
        <tr>
          <th>Situation</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Resultant = 0</strong></td>
          <td>Forces balanced → <strong>no change in motion</strong></td>
        </tr>
        <tr>
          <td><strong>Resultant ≠ 0</strong></td>
          <td>Forces unbalanced → <strong>object accelerates</strong></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Calculating Resultant Forces in a Straight Line</h3>
  
  <div class="key-facts-block">
    <h4>📏 Rule:</h4>
    <p>If forces act in a <strong>straight line</strong>:</p>
    <ul>
      <li><strong>Same direction</strong> → <strong>ADD</strong></li>
      <li><strong>Opposite directions</strong> → <strong>SUBTRACT</strong></li>
    </ul>
  </div>

  <!-- Resultant Force Diagrams -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Resultant Force Examples</h4>
    <div style="display: flex; flex-direction: column; gap: 1.5rem; padding: 1rem;">
      
      <!-- Same direction -->
      <div style="display: flex; align-items: center; gap: 1rem;">
        <svg width="200" height="50" viewBox="0 0 200 50">
          <rect x="70" y="15" width="60" height="20" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2" rx="3"/>
          <line x1="130" y1="25" x2="170" y2="25" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreen)"/>
          <text x="155" y="40" fill="#22c55e" font-size="9">5N</text>
          <line x1="130" y1="25" x2="190" y2="25" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
          <line x1="70" y1="25" x2="40" y2="25" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreenLeft)"/>
          <defs>
            <marker id="arrowGreenLeft" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
              <polygon points="8 0, 0 3, 8 6" fill="#22c55e"/>
            </marker>
          </defs>
        </svg>
        <div>
          <strong>Same direction:</strong> 5N + 3N = <span style="color: #22c55e; font-weight: bold;">8N →</span>
        </div>
      </div>
      
      <!-- Opposite direction -->
      <div style="display: flex; align-items: center; gap: 1rem;">
        <svg width="200" height="50" viewBox="0 0 200 50">
          <rect x="70" y="15" width="60" height="20" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2" rx="3"/>
          <line x1="130" y1="25" x2="180" y2="25" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreen)"/>
          <text x="155" y="40" fill="#22c55e" font-size="9">12N</text>
          <line x1="70" y1="25" x2="40" y2="25" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRedLeft)"/>
          <text x="40" y="40" fill="#ef4444" font-size="9">4N</text>
          <defs>
            <marker id="arrowRedLeft" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
              <polygon points="8 0, 0 3, 8 6" fill="#ef4444"/>
            </marker>
          </defs>
        </svg>
        <div>
          <strong>Opposite direction:</strong> 12N − 4N = <span style="color: #22c55e; font-weight: bold;">8N →</span>
        </div>
      </div>
      
      <!-- Balanced -->
      <div style="display: flex; align-items: center; gap: 1rem;">
        <svg width="200" height="50" viewBox="0 0 200 50">
          <rect x="70" y="15" width="60" height="20" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2" rx="3"/>
          <line x1="130" y1="25" x2="170" y2="25" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowOrange)"/>
          <text x="150" y="40" fill="#f59e0b" font-size="9">10N</text>
          <line x1="70" y1="25" x2="30" y2="25" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowOrangeLeft)"/>
          <text x="35" y="40" fill="#f59e0b" font-size="9">10N</text>
          <defs>
            <marker id="arrowOrangeLeft" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto">
              <polygon points="8 0, 0 3, 8 6" fill="#f59e0b"/>
            </marker>
          </defs>
        </svg>
        <div>
          <strong>Balanced:</strong> 10N − 10N = <span style="color: #8b5cf6; font-weight: bold;">0N (balanced)</span>
        </div>
      </div>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>💡 Key Idea:</h4>
    <p>Resultant force must include <strong>magnitude AND direction</strong>. Exam mark is lost if direction is missing!</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Examples of Forces on Isolated Objects</h3>

  <div class="table-block">
    <h4>📊 Force Scenarios</h4>
    <table>
      <thead>
        <tr>
          <th>Scenario</th>
          <th>Forces Acting</th>
          <th>Balanced?</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Book on table</td>
          <td>Weight (down), Normal force (up)</td>
          <td>✅ Yes</td>
          <td>No movement</td>
        </tr>
        <tr>
          <td>Parachutist falling</td>
          <td>Weight (down), Air resistance (up)</td>
          <td>❌ No</td>
          <td>Accelerates downward</td>
        </tr>
        <tr>
          <td>Car at constant speed</td>
          <td>Driving force = Resistive force</td>
          <td>✅ Yes</td>
          <td>Constant velocity</td>
        </tr>
        <tr>
          <td>Rocket launching</td>
          <td>Thrust > Weight</td>
          <td>❌ No</td>
          <td>Accelerates upward</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Free Body Diagrams</h3>
  
  <div class="definition-block">
    <h4>📘 What is a Free Body Diagram?</h4>
    <p>A simplified diagram showing <strong>only the forces</strong> acting on the object.</p>
  </div>

  <!-- Free Body Diagram Examples -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Free Body Diagram Examples</h4>
    <div style="display: flex; justify-content: space-around; align-items: flex-start; padding: 1rem; flex-wrap: wrap; gap: 2rem;">
      
      <!-- Box on surface -->
      <div style="text-align: center;">
        <svg width="120" height="140" viewBox="0 0 120 140">
          <rect x="35" y="60" width="50" height="40" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2" rx="3"/>
          <line x1="60" y1="60" x2="60" y2="20" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreen)"/>
          <text x="75" y="35" fill="#22c55e" font-size="9" font-weight="bold">N</text>
          <line x1="60" y1="100" x2="60" y2="130" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)"/>
          <text x="70" y="125" fill="#ef4444" font-size="9" font-weight="bold">W</text>
          <line x1="20" y1="100" x2="100" y2="100" stroke="currentColor" stroke-width="2"/>
        </svg>
        <p style="font-size: 0.75rem; margin-top: 0.5rem;"><strong>Balanced</strong><br/>Resultant = 0N</p>
      </div>
      
      <!-- Car accelerating -->
      <div style="text-align: center;">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <rect x="40" y="60" width="60" height="30" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" stroke-width="2" rx="3"/>
          <circle cx="55" cy="95" r="8" fill="currentColor" opacity="0.3"/>
          <circle cx="85" cy="95" r="8" fill="currentColor" opacity="0.3"/>
          <line x1="100" y1="75" x2="130" y2="75" stroke="#22c55e" stroke-width="4" marker-end="url(#arrowGreen)"/>
          <text x="108" y="68" fill="#22c55e" font-size="8" font-weight="bold">Thrust</text>
          <line x1="40" y1="75" x2="20" y2="75" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRedLeft)"/>
          <text x="15" y="68" fill="#ef4444" font-size="8" font-weight="bold">Drag</text>
          <line x1="10" y1="103" x2="130" y2="103" stroke="currentColor" stroke-width="2"/>
        </svg>
        <p style="font-size: 0.75rem; margin-top: 0.5rem;"><strong>Accelerating →</strong><br/>Thrust > Drag</p>
      </div>
    </div>
  </div>

  <div class="table-block">
    <h4>📊 Features of a Free Body Diagram</h4>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Requirement</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Arrows</strong></td><td>Show direction of each force</td></tr>
        <tr><td><strong>Arrow length</strong></td><td>Shows magnitude (longer = bigger force)</td></tr>
        <tr><td><strong>Labels</strong></td><td>Name each force (e.g., weight, friction)</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Resolving Forces (Higher Tier)</h3>
  
  <div class="definition-block">
    <h4>📘 What is resolving a force?</h4>
    <p>Breaking one force into <strong>two perpendicular components</strong> (horizontal & vertical).</p>
  </div>

  <div class="key-facts-block">
    <h4>📐 Component Equations:</h4>
    <p class="equation">Horizontal = F × cos θ</p>
    <p class="equation">Vertical = F × sin θ</p>
  </div>

  <div class="table-block">
    <h4>📊 Why Resolve Forces?</h4>
    <table>
      <thead>
        <tr>
          <th>Purpose</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Analyse motion separately</td><td>Object on slope</td></tr>
        <tr><td>Work out useful force direction</td><td>Pushing at an angle</td></tr>
        <tr><td>Build vector diagrams</td><td>Higher-tier questions</td></tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "resultant force", "balanced", "unbalanced", "free body diagram", "equilibrium",
        "acceleration", "vector diagram", "resolving forces", "components", "horizontal", "vertical"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "Two forces act on an object: 8N to the right and 3N to the left. Calculate the resultant force.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["5N", "right", "subtract", "resultant"]
        },
        {
          id: "p2",
          prompt_template: "Draw and label a free body diagram for a book resting on a table. Explain why the book doesn't move.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["weight", "down", "normal", "up", "balanced", "resultant zero", "equilibrium"]
        }
      ]
    },
    {
      id: "5-1-5-forces-elasticity",
      title: "5.1.5 – Forces and Elasticity",
      type: "content",
      study_group: 3,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Forces and Deformation</h3>
  
  <div class="key-idea-block">
    <h4>🎯 Key Idea:</h4>
    <p>When an object is stretched, bent, or compressed, <strong>more than one force must act</strong>. If only one force acted, the object would simply move — not change shape.</p>
  </div>

  <div class="table-block">
    <h4>📊 Types of Deformation</h4>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Forces Involved</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Stretching</strong></td>
          <td>Length increases</td>
          <td>Two opposite forces pulling</td>
          <td>Spring pulled from both ends</td>
        </tr>
        <tr>
          <td><strong>Compression</strong></td>
          <td>Object is squashed</td>
          <td>Two opposite forces pushing</td>
          <td>Squeezing a sponge</td>
        </tr>
        <tr>
          <td><strong>Bending</strong></td>
          <td>Shape curves</td>
          <td>Forces applied at different points</td>
          <td>Ruler bending over edge of desk</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Deformation Diagrams - ANIMATED -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Deformation Types (hover to pause)</h4>
    <div style="display: flex; justify-content: space-around; align-items: center; padding: 1rem; flex-wrap: wrap; gap: 1.5rem;">
      
      <!-- Stretching - Animated -->
      <div style="text-align: center;">
        <svg width="100" height="80" viewBox="0 0 100 80">
          <line class="anim-force-pulse" x1="20" y1="40" x2="5" y2="40" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRedLeft)"/>
          <line class="anim-force-pulse anim-delay-500" x1="80" y1="40" x2="95" y2="40" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)"/>
          <!-- Spring - Animated stretch -->
          <g class="anim-stretch">
            <path d="M25 40 Q30 30, 35 40 Q40 50, 45 40 Q50 30, 55 40 Q60 50, 65 40 Q70 30, 75 40" fill="none" stroke="#3b82f6" stroke-width="2"/>
          </g>
        </svg>
        <p style="font-size: 0.75rem;"><strong>Stretching</strong></p>
      </div>
      
      <!-- Compression - Animated -->
      <div style="text-align: center;">
        <svg width="100" height="80" viewBox="0 0 100 80">
          <line class="anim-force-pulse" x1="15" y1="40" x2="30" y2="40" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreen)"/>
          <line class="anim-force-pulse anim-delay-500" x1="85" y1="40" x2="70" y2="40" stroke="#22c55e" stroke-width="3" marker-end="url(#arrowGreenLeft)"/>
          <!-- Compressed spring - Animated compress -->
          <g class="anim-compress">
            <path d="M35 40 Q37 35, 40 40 Q43 45, 46 40 Q49 35, 52 40 Q55 45, 58 40 Q61 35, 65 40" fill="none" stroke="#3b82f6" stroke-width="2"/>
          </g>
        </svg>
        <p style="font-size: 0.75rem;"><strong>Compression</strong></p>
      </div>
      
      <!-- Bending - Animated -->
      <div style="text-align: center;">
        <svg width="100" height="80" viewBox="0 0 100 80">
          <g class="anim-oscillate-y">
            <path d="M10 50 Q50 20, 90 50" fill="none" stroke="#3b82f6" stroke-width="4"/>
          </g>
          <line class="anim-pulse" x1="50" y1="35" x2="50" y2="15" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrowOrangeUp)"/>
          <defs>
            <marker id="arrowOrangeUp" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
              <polygon points="0 6, 4 0, 8 6" fill="#f59e0b"/>
            </marker>
          </defs>
          <circle cx="10" cy="50" r="3" fill="currentColor"/>
          <circle cx="90" cy="50" r="3" fill="currentColor"/>
        </svg>
        <p style="font-size: 0.75rem;"><strong>Bending</strong></p>
      </div>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Elastic vs Inelastic Deformation</h3>
  
  <div class="table-block">
    <h4>📊 Comparison Table</h4>
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Definition</th>
          <th>Behaviour</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Elastic deformation</strong></td>
          <td>Object returns to original shape when forces are removed</td>
          <td>Obeys Hooke's Law until limit reached</td>
        </tr>
        <tr>
          <td><strong>Inelastic deformation</strong></td>
          <td>Object does NOT return to original shape; permanent change</td>
          <td>Occurs after the limit of proportionality</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>💡 SME Tip:</h4>
    <p>Once a spring is stretched beyond its <strong>elastic limit</strong>, the extension will not return to zero when the load is removed — this is classic exam content.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Hooke's Law</h3>
  
  <div class="definition-block">
    <h4>📘 Hooke's Law Equation:</h4>
    <p class="equation">F = k × e</p>
    <p>Where:</p>
    <ul>
      <li><strong>F</strong> = force (newtons, N)</li>
      <li><strong>k</strong> = spring constant (N/m)</li>
      <li><strong>e</strong> = extension (metres, m)</li>
    </ul>
  </div>

  <div class="spec-point-block">
    <h4>📋 Spec Point:</h4>
    <p>The extension of an elastic object is <strong>directly proportional</strong> to the force applied, provided the <strong>limit of proportionality</strong> is not exceeded.</p>
  </div>

  <div class="table-block">
    <h4>📊 Variable Summary</h4>
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Quantity</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>F</td><td>Force</td><td>N</td></tr>
        <tr><td>k</td><td>Spring constant</td><td>N/m</td></tr>
        <tr><td>e</td><td>Extension</td><td>m</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Elastic Potential Energy</h3>
  
  <div class="definition-block">
    <h4>📘 Energy Equation (Higher Tier):</h4>
    <p class="equation">E = ½ × k × e²</p>
    <p>Elastic potential energy = work done on the spring (if elastic)</p>
  </div>

  <div class="example-block">
    <h4>💡 Example Calculation:</h4>
    <table>
      <thead>
        <tr>
          <th>k (N/m)</th>
          <th>e (m)</th>
          <th>Energy (J)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>100</td><td>0.1</td><td>0.5</td></tr>
        <tr><td>200</td><td>0.05</td><td>0.25</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📌 Condition:</h4>
    <p>Energy stored = work done <strong>only if</strong> the spring is not permanently deformed.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Force-Extension Graphs</h3>

  <!-- Force-Extension Graph -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Force-Extension Graph</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="280" height="200" viewBox="0 0 280 200">
        <!-- Axes -->
        <line x1="40" y1="170" x2="260" y2="170" stroke="currentColor" stroke-width="2"/>
        <line x1="40" y1="170" x2="40" y2="20" stroke="currentColor" stroke-width="2"/>
        
        <!-- Labels -->
        <text x="150" y="195" fill="currentColor" font-size="11" text-anchor="middle">Extension (m)</text>
        <text x="15" y="95" fill="currentColor" font-size="11" text-anchor="middle" transform="rotate(-90, 15, 95)">Force (N)</text>
        
        <!-- Linear region -->
        <line x1="40" y1="170" x2="150" y2="70" stroke="#22c55e" stroke-width="3"/>
        <text x="80" y="100" fill="#22c55e" font-size="9" font-weight="bold">Linear</text>
        <text x="80" y="112" fill="#22c55e" font-size="8">(Hooke's Law)</text>
        
        <!-- Limit of proportionality -->
        <circle cx="150" cy="70" r="5" fill="#f59e0b"/>
        <text x="155" y="55" fill="#f59e0b" font-size="8" font-weight="bold">Limit of</text>
        <text x="155" y="65" fill="#f59e0b" font-size="8" font-weight="bold">proportionality</text>
        
        <!-- Non-linear region -->
        <path d="M150 70 Q180 50, 220 40 Q240 35, 250 33" fill="none" stroke="#ef4444" stroke-width="3"/>
        <text x="210" y="25" fill="#ef4444" font-size="9" font-weight="bold">Non-linear</text>
        
        <!-- Slope indicator -->
        <text x="60" y="150" fill="currentColor" font-size="8">Slope = k</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Green: Linear (elastic) | Orange: Limit | Red: Non-linear (inelastic)</p>
  </div>

  <div class="table-block">
    <h4>📊 Graph Interpretation</h4>
    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>Graph Shape</th>
          <th>Spring Behaviour</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Linear</strong></td>
          <td>Straight line</td>
          <td>Perfectly elastic</td>
          <td>Obeys F = k × e</td>
        </tr>
        <tr>
          <td><strong>Non-linear</strong></td>
          <td>Curved</td>
          <td>Inelastic deformation</td>
          <td>Extension increases faster</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 6 – Required Practical: Hooke's Law</h3>
  
  <!-- Animated Equipment Setup Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Apparatus Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="280" height="260" viewBox="0 0 280 260">
        <!-- Clamp stand base -->
        <rect x="40" y="230" width="120" height="12" fill="#4a5568" rx="2"/>
        
        <!-- Clamp stand rod -->
        <rect x="55" y="30" width="8" height="200" fill="#718096"/>
        
        <!-- Boss and clamp -->
        <rect x="55" y="50" width="60" height="8" fill="#4a5568"/>
        <rect x="110" y="45" width="15" height="18" fill="#4a5568" rx="2"/>
        
        <!-- Spring (animated stretch) -->
        <g class="anim-spring-stretch">
          <path d="M 117 63 
                   L 110 73 L 124 83 L 110 93 L 124 103 
                   L 110 113 L 124 123 L 110 133 L 117 143" 
                fill="none" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
        </g>
        
        <!-- Mass hanger -->
        <rect x="110" y="145" width="14" height="25" fill="#ef4444" class="anim-bounce-slow"/>
        <text x="117" y="162" fill="white" font-size="8" text-anchor="middle" font-weight="bold">M</text>
        
        <!-- Ruler -->
        <rect x="180" y="40" width="20" height="180" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <!-- Ruler markings -->
        <line x1="180" y1="60" x2="192" y2="60" stroke="#333" stroke-width="1"/>
        <line x1="180" y1="80" x2="188" y2="80" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="100" x2="192" y2="100" stroke="#333" stroke-width="1"/>
        <line x1="180" y1="120" x2="188" y2="120" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="140" x2="192" y2="140" stroke="#333" stroke-width="1"/>
        <line x1="180" y1="160" x2="188" y2="160" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="180" x2="192" y2="180" stroke="#333" stroke-width="1"/>
        <text x="203" y="63" fill="#333" font-size="7">0</text>
        <text x="203" y="103" fill="#333" font-size="7">5</text>
        <text x="203" y="143" fill="#333" font-size="7">10</text>
        <text x="203" y="183" fill="#333" font-size="7">15</text>
        
        <!-- Extension marker line (animated) -->
        <line x1="125" y1="63" x2="175" y2="63" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="125" y1="145" x2="175" y2="145" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="165" y1="63" x2="165" y2="145" stroke="#22c55e" stroke-width="2" marker-start="url(#extArrowUp)" marker-end="url(#extArrowDown)"/>
        <text x="145" y="105" fill="#22c55e" font-size="9" font-weight="bold">extension</text>
        
        <!-- Labels -->
        <text x="59" y="25" fill="currentColor" font-size="8" text-anchor="middle">Clamp</text>
        <text x="59" y="35" fill="currentColor" font-size="8" text-anchor="middle">stand</text>
        <text x="117" y="195" fill="#3b82f6" font-size="9" text-anchor="middle">Spring</text>
        <text x="117" y="215" fill="#ef4444" font-size="9" text-anchor="middle">Mass (Force)</text>
        <text x="190" y="232" fill="#f59e0b" font-size="9" text-anchor="middle">Ruler</text>
        
        <defs>
          <marker id="extArrowUp" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M3,6 L3,0 L0,3 z" fill="#22c55e"/>
          </marker>
          <marker id="extArrowDown" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M3,0 L3,6 L0,3 z" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Add masses to increase force • Measure extension from ruler</p>
  </div>
  
  <div class="key-facts-block">
    <h4>🔬 Method Summary:</h4>
    <ol>
      <li>Measure the <strong>natural length</strong> of the spring</li>
      <li>Add a known <strong>weight (force)</strong></li>
      <li>Measure new length → find <strong>extension</strong></li>
      <li><strong>Repeat</strong> with increasing forces</li>
      <li>Plot force (y-axis) vs extension (x-axis)</li>
      <li>Identify linear region and limit of proportionality</li>
    </ol>
  </div>

  <div class="warning-block">
    <h4>⚠️ Common Sources of Error:</h4>
    <table>
      <thead>
        <tr>
          <th>Error</th>
          <th>Effect</th>
          <th>Fix</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Zero error on ruler</td>
          <td>Incorrect extension values</td>
          <td>Check starting point carefully</td>
        </tr>
        <tr>
          <td>Measuring at angle</td>
          <td>Parallax error</td>
          <td>Eye level with ruler</td>
        </tr>
        <tr>
          <td>Mass swings</td>
          <td>Inaccurate reading</td>
          <td>Wait for stillness</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "Hooke's Law", "F=ke", "spring constant", "extension", "elastic", "inelastic",
        "deformation", "stretching", "compression", "bending", "limit of proportionality",
        "elastic potential energy", "force-extension graph"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A spring has a spring constant of 200 N/m. Calculate the force needed to extend it by 0.15 m.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["F=ke", "30 N", "force"]
        },
        {
          id: "p2",
          prompt_template: "Explain the difference between elastic and inelastic deformation, using a spring as an example.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["elastic", "returns", "original shape", "inelastic", "permanent", "limit of proportionality"]
        }
      ]
    },
    {
      id: "4-5-4-moments-levers-gears",
      title: "4.5.4 – Moments, Levers and Gears (Physics Only)",
      type: "content",
      study_group: 3,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Forces Causing Rotation</h3>
  
  <div class="definition-block">
    <h4>📘 Key Idea:</h4>
    <p>A force can make an object <strong>turn about a pivot</strong>. This rotational turning effect is known as a <strong>moment</strong>.</p>
  </div>

  <div class="table-block">
    <h4>📊 Examples of Forces Causing Rotation</h4>
    <table>
      <thead>
        <tr>
          <th>Object</th>
          <th>Force Applied</th>
          <th>Pivot</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Door</td>
          <td>Push on handle</td>
          <td>Hinges</td>
          <td>Door rotates open</td>
        </tr>
        <tr>
          <td>Spanner</td>
          <td>Force on end</td>
          <td>Nut/bolt</td>
          <td>Nut rotates</td>
        </tr>
        <tr>
          <td>Seesaw</td>
          <td>Child's weight</td>
          <td>Centre support</td>
          <td>Seesaw rotates</td>
        </tr>
        <tr>
          <td>Crowbar</td>
          <td>Downward push</td>
          <td>Contact point</td>
          <td>Lifts object</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – The Moment Equation</h3>
  
  <div class="definition-block">
    <h4>📘 Moment Equation:</h4>
    <p class="equation">M = F × d</p>
    <p>Where:</p>
    <ul>
      <li><strong>M</strong> = moment (newton-metres, Nm)</li>
      <li><strong>F</strong> = force (newtons, N)</li>
      <li><strong>d</strong> = perpendicular distance from pivot (metres, m)</li>
    </ul>
  </div>

  <!-- Moment Diagram -->
  <div class="key-idea-block" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Moment Diagram - Spanner Example</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="280" height="140" viewBox="0 0 280 140">
        <!-- Spanner -->
        <rect x="60" y="55" width="180" height="20" fill="#6366f1" opacity="0.3" stroke="#6366f1" stroke-width="2" rx="3"/>
        
        <!-- Pivot (nut) -->
        <circle cx="70" cy="65" r="12" fill="#f59e0b" opacity="0.5" stroke="#f59e0b" stroke-width="2"/>
        <text x="70" y="69" fill="currentColor" font-size="8" text-anchor="middle">Pivot</text>
        
        <!-- Force arrow -->
        <line x1="230" y1="55" x2="230" y2="15" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRedUp)"/>
        <defs>
          <marker id="arrowRedUp" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
            <polygon points="0 6, 4 0, 8 6" fill="#ef4444"/>
          </marker>
        </defs>
        <text x="245" y="35" fill="#ef4444" font-size="10" font-weight="bold">F</text>
        
        <!-- Distance line -->
        <line x1="70" y1="90" x2="230" y2="90" stroke="#22c55e" stroke-width="2"/>
        <line x1="70" y1="85" x2="70" y2="95" stroke="#22c55e" stroke-width="2"/>
        <line x1="230" y1="85" x2="230" y2="95" stroke="#22c55e" stroke-width="2"/>
        <text x="150" y="105" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">d (distance)</text>
        
        <!-- Rotation arrow -->
        <path d="M100 45 A30 30 0 0 0 100 85" fill="none" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowPurple)"/>
        <defs>
          <marker id="arrowPurple" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <polygon points="0 0, 6 2.5, 0 5" fill="#8b5cf6"/>
          </marker>
        </defs>
        <text x="85" y="125" fill="#8b5cf6" font-size="9">Anticlockwise</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Moment = Force × Perpendicular distance from pivot</p>
  </div>

  <div class="exam-tip-block">
    <h4>💡 Important:</h4>
    <p>Distance must be <strong>perpendicular</strong> to the force's line of action for the equation to work.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Clockwise and Anticlockwise Moments</h3>
  
  <div class="key-facts-block">
    <h4>🔄 Direction of Moments:</h4>
    <ul>
      <li><strong>Clockwise moment</strong> → Turns object clockwise (like clock hands)</li>
      <li><strong>Anticlockwise moment</strong> → Turns object anticlockwise (opposite direction)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Principle of Moments (Equilibrium)</h3>
  
  <div class="definition-block">
    <h4>📘 Principle of Moments:</h4>
    <p class="highlight-box">Clockwise Moment = Anticlockwise Moment</p>
    <p>If an object is <strong>balanced</strong>, total clockwise moment equals total anticlockwise moment.</p>
  </div>

  <!-- Balanced Seesaw Diagram - ANIMATED -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Balanced Seesaw Example (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="300" height="120" viewBox="0 0 300 120">
        <!-- Animated beam that gently rocks -->
        <g class="anim-seesaw" style="transform-origin: 150px 58px;">
          <!-- Beam -->
          <rect x="40" y="50" width="220" height="8" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="2"/>
          
          <!-- Left weight - bounces slightly -->
          <g class="anim-bounce-small anim-delay-200">
            <rect x="55" y="30" width="25" height="20" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2" rx="2"/>
            <text x="67" y="44" fill="currentColor" font-size="8" text-anchor="middle">6N</text>
          </g>
          <line x1="67" y1="50" x2="67" y2="30" stroke="#ef4444" stroke-width="2"/>
          
          <!-- Right weight - bounces slightly -->
          <g class="anim-bounce-small anim-delay-500">
            <rect x="210" y="30" width="25" height="20" fill="#22c55e" opacity="0.3" stroke="#22c55e" stroke-width="2" rx="2"/>
            <text x="222" y="44" fill="currentColor" font-size="8" text-anchor="middle">3N</text>
          </g>
          <line x1="222" y1="50" x2="222" y2="30" stroke="#22c55e" stroke-width="2"/>
        </g>
        
        <!-- Pivot/fulcrum - static -->
        <polygon points="150,58 140,90 160,90" fill="#f59e0b" opacity="0.5" stroke="#f59e0b" stroke-width="2"/>
        <text x="150" y="105" fill="currentColor" font-size="9" text-anchor="middle">Pivot</text>
        
        <!-- Distance labels -->
        <text x="105" y="75" fill="#ef4444" font-size="8" text-anchor="middle">0.5m</text>
        <text x="185" y="75" fill="#22c55e" font-size="8" text-anchor="middle">1.0m</text>
        
        <!-- Moment calculations - pulse glow -->
        <text class="anim-pulse-glow" x="67" y="18" fill="#ef4444" font-size="8" text-anchor="middle">6×0.5=3Nm</text>
        <text class="anim-pulse-glow anim-delay-500" x="222" y="18" fill="#22c55e" font-size="8" text-anchor="middle">3×1.0=3Nm</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">3 Nm = 3 Nm → The seesaw is balanced!</p>
  </div>

  <div class="example-block">
    <h4>💡 Example Calculation:</h4>
    <p>A 4 N force acts 0.6 m from a pivot. Where must a 3 N force act to balance it?</p>
    <p><strong>Solution:</strong></p>
    <p>F₁ × d₁ = F₂ × d₂</p>
    <p>4 × 0.6 = 3 × d</p>
    <p>2.4 = 3d</p>
    <p><strong>d = 0.8 m</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Levers (Physics Only)</h3>
  
  <div class="definition-block">
    <h4>📘 What is a Lever?</h4>
    <p>A lever is a <strong>rigid bar</strong> that pivots around a point called the <strong>fulcrum</strong>.</p>
  </div>

  <div class="table-block">
    <h4>📊 Lever Components</h4>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><strong>Fulcrum</strong></td><td>Pivot point</td></tr>
        <tr><td><strong>Load</strong></td><td>Object you want to lift/move</td></tr>
        <tr><td><strong>Effort</strong></td><td>Force you apply</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🔧 Why levers are useful:</h4>
    <p>They act as <strong>force multipliers</strong>:</p>
    <ul>
      <li>Small effort → big load lifted</li>
      <li>Done by <strong>increasing the distance from the pivot</strong></li>
    </ul>
  </div>

  <div class="table-block">
    <h4>📊 Lever Advantage</h4>
    <table>
      <thead>
        <tr>
          <th>Increase…</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Distance from pivot</td>
          <td>Less effort needed</td>
        </tr>
        <tr>
          <td>Force applied close to pivot</td>
          <td>More effort required</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 6 – Gears (Physics Only)</h3>
  
  <div class="definition-block">
    <h4>📘 What are Gears?</h4>
    <p>Gears are <strong>interlocking toothed wheels</strong> that transfer rotational force from one shaft to another.</p>
  </div>

  <!-- Gear Diagram - ANIMATED -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1.5rem; margin: 1rem 0;">
    <h4>📐 Gear System (hover to pause animation)</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="200" height="120" viewBox="0 0 200 120">
        <!-- Small gear (driving) - Clockwise rotation -->
        <g class="anim-rotate-cw" style="transform-origin: 60px 60px;">
          <circle cx="60" cy="60" r="25" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="2"/>
          <!-- Gear teeth indicators -->
          <line x1="60" y1="35" x2="60" y2="40" stroke="#3b82f6" stroke-width="2"/>
          <line x1="85" y1="60" x2="80" y2="60" stroke="#3b82f6" stroke-width="2"/>
          <line x1="60" y1="85" x2="60" y2="80" stroke="#3b82f6" stroke-width="2"/>
          <line x1="35" y1="60" x2="40" y2="60" stroke="#3b82f6" stroke-width="2"/>
          <line x1="78" y1="42" x2="74" y2="46" stroke="#3b82f6" stroke-width="2"/>
          <line x1="78" y1="78" x2="74" y2="74" stroke="#3b82f6" stroke-width="2"/>
          <line x1="42" y1="78" x2="46" y2="74" stroke="#3b82f6" stroke-width="2"/>
          <line x1="42" y1="42" x2="46" y2="46" stroke="#3b82f6" stroke-width="2"/>
        </g>
        <circle cx="60" cy="60" r="5" fill="currentColor"/>
        <text x="60" y="100" fill="currentColor" font-size="9" text-anchor="middle">Driving</text>
        <text x="60" y="112" fill="currentColor" font-size="8" text-anchor="middle">(small)</text>
        
        <!-- Rotation direction indicator -->
        <path class="anim-pulse-glow" d="M75 45 A20 20 0 0 1 75 75" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>
        <defs>
          <marker id="arrowBlue" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
            <polygon points="0 0, 6 2.5, 0 5" fill="#3b82f6"/>
          </marker>
        </defs>
        
        <!-- Large gear (driven) - Counter-clockwise rotation -->
        <g class="anim-rotate-ccw-slow" style="transform-origin: 140px 60px;">
          <circle cx="140" cy="60" r="40" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="2"/>
          <!-- Gear teeth indicators -->
          <line x1="140" y1="20" x2="140" y2="28" stroke="#22c55e" stroke-width="2"/>
          <line x1="180" y1="60" x2="172" y2="60" stroke="#22c55e" stroke-width="2"/>
          <line x1="140" y1="100" x2="140" y2="92" stroke="#22c55e" stroke-width="2"/>
          <line x1="100" y1="60" x2="108" y2="60" stroke="#22c55e" stroke-width="2"/>
          <line x1="168" y1="32" x2="162" y2="38" stroke="#22c55e" stroke-width="2"/>
          <line x1="168" y1="88" x2="162" y2="82" stroke="#22c55e" stroke-width="2"/>
          <line x1="112" y1="88" x2="118" y2="82" stroke="#22c55e" stroke-width="2"/>
          <line x1="112" y1="32" x2="118" y2="38" stroke="#22c55e" stroke-width="2"/>
        </g>
        <circle cx="140" cy="60" r="5" fill="currentColor"/>
        <text x="140" y="100" fill="currentColor" font-size="9" text-anchor="middle">Driven</text>
        <text x="140" y="112" fill="currentColor" font-size="8" text-anchor="middle">(large)</text>
        
        <!-- Rotation direction indicator -->
        <path class="anim-pulse-glow" d="M115 45 A25 25 0 0 0 115 75" fill="none" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowGreenCCW)"/>
        <defs>
          <marker id="arrowGreenCCW" markerWidth="6" markerHeight="5" refX="1" refY="2.5" orient="auto">
            <polygon points="6 0, 0 2.5, 6 5" fill="#22c55e"/>
          </marker>
        </defs>
        
        <!-- Contact point - animated -->
        <line class="anim-pulse-fast" x1="85" y1="60" x2="100" y2="60" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,2"/>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Gears rotate in opposite directions. Small → Large = more force, less speed</p>
  </div>

  <div class="table-block">
    <h4>📊 How Gears Transfer Force</h4>
    <table>
      <thead>
        <tr>
          <th>Gear Feature</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gears rotate in opposite directions</td>
          <td>One clockwise → the next anticlockwise</td>
        </tr>
        <tr>
          <td>Large gear driving small gear</td>
          <td>Increases speed, decreases force</td>
        </tr>
        <tr>
          <td>Small gear driving large gear</td>
          <td>Decreases speed, increases force (force multiplier)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>⚙️ Gear Ratio:</h4>
    <p class="equation">Gear ratio = Teeth on driven gear ÷ Teeth on driving gear</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 7 – Summary: Levers & Gears as Force Multipliers</h3>

  <div class="table-block">
    <h4>📊 Comparison Table</h4>
    <table>
      <thead>
        <tr>
          <th>System</th>
          <th>How It Multiplies Force</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Lever</strong></td>
          <td>Increase distance from pivot</td>
          <td>Crowbar lifting a crate</td>
        </tr>
        <tr>
          <td><strong>Gears</strong></td>
          <td>Use small–large gear combination</td>
          <td>Bicycle gear system</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
      `,
      canonical_keywords: [
        "moment", "M=Fd", "pivot", "fulcrum", "clockwise", "anticlockwise", "equilibrium",
        "principle of moments", "lever", "gear", "force multiplier", "gear ratio", "rotation"
      ],
      practice_items: [
        {
          id: "p1",
          prompt_template: "A force of 20 N is applied 0.3 m from a pivot. Calculate the moment.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["M=Fd", "6 Nm", "moment"]
        },
        {
          id: "p2",
          prompt_template: "Explain how a lever acts as a force multiplier, using an example.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["lever", "pivot", "fulcrum", "distance", "effort", "load", "force multiplier"]
        },
        {
          id: "p3",
          prompt_template: "Explain why gears connected together rotate in opposite directions and describe how gear ratio affects force and speed.",
          marks: 4,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["teeth", "interlock", "opposite", "ratio", "force", "speed", "multiplier"]
        }
      ]
    }
  ]
};
