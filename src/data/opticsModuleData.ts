// GCSE AQA Physics - Module 3: Optics
// Based on the specification and revision notes

export interface OpticsPracticeItem {
  id: string;
  prompt_template: string;
  marks: number;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[];
}

export interface OpticsSubsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: OpticsPracticeItem[];
  study_group?: number;
}

export interface OpticsModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: OpticsSubsection[];
}

export const opticsModuleData: OpticsModule = {
  id: "optics-module",
  title: "Module 3: Optics",
  status: "ready",
  subsections: [
    // ============================================
    // SUBSECTION 1: 4.6.2.5 – LENSES (8 pairs)
    // ============================================
    {
      id: "4-6-2-5-lenses",
      title: "4.6.2.5 – Lenses",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — What a Lens Does</h3>
  
  <div class="definition-block">
    <h4>💡 Definition:</h4>
    <p>A <strong>lens</strong> forms an image by <strong>refracting light</strong> — bending rays as they pass from one transparent material to another.</p>
    <p>The amount of bending depends on the <strong>shape of the lens</strong> and the <strong>angle at which light enters</strong>.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Idea:</h4>
    <p>Lenses control light so that rays <strong>meet (converge)</strong> or <strong>spread out (diverge)</strong>, creating an image that can be <strong>magnified, reduced, real, or virtual</strong>.</p>
  </div>

  <div class="example-block">
    <h4>📚 Applications:</h4>
    <p>This allows lenses to be used in <strong>glasses, cameras, microscopes, projectors, and magnifying glasses</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Types of Lenses</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Convex Lens (Converging Lens)</h4>
    <ul>
      <li><strong>Thicker in the middle</strong>, thinner at the edges</li>
      <li>Makes parallel rays of light <strong>converge</strong> (come together)</li>
      <li>Creates a <strong>principal focus</strong>, where these rays meet</li>
      <li>The <strong>focal length</strong> is the distance from the centre of the lens to the principal focus</li>
      <li>A more strongly curved convex lens bends light more sharply → <strong>shorter focal length</strong></li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #ef4444; margin-top: 1rem;">
    <h4>🔴 Concave Lens (Diverging Lens)</h4>
    <ul>
      <li><strong>Thinner in the middle</strong>, thicker at the edges</li>
      <li>Makes parallel rays of light <strong>diverge</strong> (spread out)</li>
      <li>Rays appear to come from a <strong>virtual focus</strong> behind the lens</li>
      <li>Concave lenses <strong>always</strong> produce a <strong>virtual, upright, smaller</strong> image regardless of object position</li>
    </ul>
  </div>

  <!-- Lens Shapes Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Lens Shapes & Diagram Symbols</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="180" viewBox="0 0 500 180">
        <!-- CONVEX LENS -->
        <text x="125" y="20" fill="#3b82f6" font-size="13" text-anchor="middle" font-weight="bold">Convex (Converging)</text>
        
        <!-- Physical convex lens shape -->
        <ellipse cx="80" cy="90" rx="18" ry="50" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="80" y="155" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        <text x="80" y="168" fill="#22c55e" font-size="9" text-anchor="middle">(thick in middle)</text>
        
        <!-- Convex lens diagram symbol -->
        <line x1="170" y1="40" x2="170" y2="140" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="170,40 156,58 184,58" fill="#3b82f6"/>
        <polygon points="170,140 156,122 184,122" fill="#3b82f6"/>
        <text x="170" y="158" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>

        <!-- CONCAVE LENS -->
        <text x="375" y="20" fill="#ef4444" font-size="13" text-anchor="middle" font-weight="bold">Concave (Diverging)</text>
        
        <!-- Physical concave lens shape -->
        <path d="M295 40 Q325 90 295 140" fill="none" stroke="#ef4444" stroke-width="2.5"/>
        <path d="M345 40 Q315 90 345 140" fill="none" stroke="#ef4444" stroke-width="2.5"/>
        <line x1="295" y1="40" x2="345" y2="40" stroke="#ef4444" stroke-width="2.5"/>
        <line x1="295" y1="140" x2="345" y2="140" stroke="#ef4444" stroke-width="2.5"/>
        <rect x="295" y="40" width="50" height="100" fill="hsl(0, 70%, 95%)" opacity="0.5"/>
        <text x="320" y="155" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        <text x="320" y="168" fill="#f59e0b" font-size="9" text-anchor="middle">(thin in middle)</text>
        
        <!-- Concave lens diagram symbol -->
        <line x1="430" y1="40" x2="430" y2="140" stroke="#ef4444" stroke-width="3"/>
        <polygon points="430,40 416,58 444,58" fill="#ef4444" transform="rotate(180,430,49)"/>
        <polygon points="430,140 416,122 444,122" fill="#ef4444" transform="rotate(180,430,131)"/>
        <text x="430" y="158" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Convex Lens</th><th>Concave Lens</th></tr></thead>
    <tbody>
      <tr><td>Shape</td><td>Thicker in middle</td><td>Thinner in middle</td></tr>
      <tr><td>Effect on light</td><td>Converges rays</td><td>Diverges rays</td></tr>
      <tr><td>Focus type</td><td>Real focus</td><td>Virtual focus</td></tr>
      <tr><td>Image types possible</td><td>Real or virtual</td><td>Always virtual</td></tr>
      <tr><td>Uses</td><td>Magnifying glass, camera</td><td>Spectacles (short-sight)</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Principal Focus & Focal Length</h3>
  
  <div class="definition-block">
    <h4>📌 Principal Focus (F):</h4>
    <ul>
      <li><strong>Convex lens:</strong> where parallel rays <strong>actually meet</strong></li>
      <li><strong>Concave lens:</strong> where rays <strong>appear to come from</strong> when traced back</li>
    </ul>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>📌 Focal Length (f):</h4>
    <ul>
      <li>Distance between the <strong>centre of the lens</strong> and the <strong>principal focus</strong></li>
      <li><strong>Shorter focal length → stronger bending</strong> of light</li>
      <li>Important in determining how large or small the image becomes</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Understanding focal length allows you to predict whether the image will be <strong>magnified or diminished</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — Real and Virtual Images</h3>
  
  <div class="definition-block" style="border-left: 4px solid #22c55e;">
    <h4>🟢 Real Image</h4>
    <ul>
      <li>Formed when light rays <strong>actually meet</strong> after passing through the lens</li>
      <li><strong>Can be projected</strong> onto a screen</li>
      <li>Always <strong>inverted</strong> compared to the object</li>
      <li>Formed by convex lenses when the object is placed <strong>beyond the focal length</strong></li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #f59e0b; margin-top: 1rem;">
    <h4>🟡 Virtual Image</h4>
    <ul>
      <li>Formed when rays <strong>do not meet</strong>, but appear to meet when traced backwards</li>
      <li><strong>Cannot be projected</strong> onto a screen</li>
      <li>Always <strong>upright</strong></li>
      <li>Formed by:
        <ul>
          <li>Convex lenses when object is <strong>inside the focal length</strong></li>
          <li>Concave lenses at <strong>all distances</strong></li>
        </ul>
      </li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Real Image</th><th>Virtual Image</th></tr></thead>
    <tbody>
      <tr><td>Rays</td><td>Actually meet</td><td>Appear to meet (traced back)</td></tr>
      <tr><td>Can project?</td><td>Yes</td><td>No</td></tr>
      <tr><td>Orientation</td><td>Inverted</td><td>Upright</td></tr>
      <tr><td>Formed by</td><td>Convex (object beyond F)</td><td>Convex (object inside F), Concave (always)</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — Ray Diagrams: Convex Lens</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Ray diagrams allow you to see exactly <strong>where the image forms</strong> and what its <strong>properties</strong> are.</p>
  </div>

  <div class="definition-block">
    <h4>✏️ Three key rays you always draw:</h4>
    <ol>
      <li>A ray <strong>parallel to the principal axis</strong> → refracts <strong>through the principal focus</strong></li>
      <li>A ray <strong>through the centre of the lens</strong> → passes <strong>straight through</strong> without bending</li>
      <li>A ray <strong>through the focal point</strong> before reaching the lens → refracts <strong>parallel to the axis</strong></li>
    </ol>
  </div>

  <div class="example-block" style="margin-top: 1rem;">
    <h4>⭐ What happens depends on object position:</h4>
    <table class="data-table">
      <thead><tr><th>Object Position</th><th>Image Properties</th></tr></thead>
      <tbody>
        <tr><td>🔹 Beyond 2F</td><td><strong>Real, inverted, smaller</strong> (diminished)</td></tr>
        <tr><td>🔹 At 2F</td><td><strong>Real, inverted, same size</strong> — forms at 2F on other side</td></tr>
        <tr><td>🔹 Between F and 2F</td><td><strong>Real, inverted, larger</strong> (magnified)</td></tr>
        <tr><td>🔹 Inside F (closer than focal length)</td><td><strong>Virtual, upright, magnified</strong> — this is how magnifying glasses work</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Convex Lens Ray Diagram - Object Beyond 2F -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Convex Lens Ray Diagram — Object Beyond 2F</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="560" height="260" viewBox="0 0 560 260">
        <!-- Principal axis -->
        <line x1="20" y1="130" x2="540" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Convex lens -->
        <ellipse cx="280" cy="130" rx="10" ry="70" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- F and 2F markers on both sides -->
        <circle cx="200" cy="130" r="4" fill="#ef4444"/>
        <text x="200" y="155" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="120" cy="130" r="4" fill="#8b5cf6"/>
        <text x="120" y="155" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">2F</text>
        
        <circle cx="360" cy="130" r="4" fill="#ef4444"/>
        <text x="360" y="155" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="440" cy="130" r="4" fill="#8b5cf6"/>
        <text x="440" y="155" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (arrow) beyond 2F at x=70 -->
        <line x1="70" y1="130" x2="70" y2="60" stroke="#22c55e" stroke-width="3"/>
        <polygon points="70,55 64,70 76,70" fill="#22c55e"/>
        <text x="70" y="175" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel to axis, then through F -->
        <line x1="70" y1="60" x2="270" y2="60" stroke="#f59e0b" stroke-width="2"/>
        <line x1="290" y1="60" x2="500" y2="130" stroke="#f59e0b" stroke-width="2"/>
        
        <!-- Ray 2: Through centre of lens (straight through) -->
        <line x1="70" y1="60" x2="500" y2="170" stroke="#06b6d4" stroke-width="2"/>
        
        <!-- Ray 3: Through F, then parallel -->
        <line x1="70" y1="60" x2="200" y2="130" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="5,3"/>
        <line x1="70" y1="60" x2="270" y2="96" stroke="#ec4899" stroke-width="2"/>
        <line x1="290" y1="96" x2="500" y2="96" stroke="#ec4899" stroke-width="2"/>
        
        <!-- Image (inverted arrow) between F and 2F on right -->
        <line x1="410" y1="130" x2="410" y2="156" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="410,161 404,146 416,146" fill="#3b82f6"/>
        <text x="410" y="185" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Image</text>
        <text x="410" y="198" fill="#3b82f6" font-size="9" text-anchor="middle">(real, inverted, smaller)</text>
        
        <!-- Legend -->
        <rect x="20" y="210" width="520" height="40" fill="hsl(var(--muted))" opacity="0.3" rx="5"/>
        <line x1="30" y1="225" x2="60" y2="225" stroke="#f59e0b" stroke-width="2"/>
        <text x="65" y="229" fill="currentColor" font-size="9">Parallel → through F</text>
        <line x1="170" y1="225" x2="200" y2="225" stroke="#06b6d4" stroke-width="2"/>
        <text x="205" y="229" fill="currentColor" font-size="9">Through centre (no bend)</text>
        <line x1="340" y1="225" x2="370" y2="225" stroke="#ec4899" stroke-width="2"/>
        <text x="375" y="229" fill="currentColor" font-size="9">Through F → parallel</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Object beyond 2F produces a real, inverted, diminished image between F and 2F</p>
  </div>

  <!-- Convex Lens Ray Diagram - Object Inside F (Magnifying Glass) -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Convex Lens Ray Diagram — Object Inside F (Magnifying Glass)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="560" height="260" viewBox="0 0 560 260">
        <!-- Principal axis -->
        <line x1="20" y1="130" x2="540" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Convex lens -->
        <ellipse cx="280" cy="130" rx="10" ry="70" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- F markers -->
        <circle cx="200" cy="130" r="4" fill="#ef4444"/>
        <text x="200" y="155" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="360" cy="130" r="4" fill="#ef4444"/>
        <text x="360" y="155" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Object (arrow) inside F at x=230 -->
        <line x1="230" y1="130" x2="230" y2="80" stroke="#22c55e" stroke-width="3"/>
        <polygon points="230,75 224,90 236,90" fill="#22c55e"/>
        <text x="230" y="175" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel to axis, then through F (diverging on exit) -->
        <line x1="230" y1="80" x2="270" y2="80" stroke="#f59e0b" stroke-width="2"/>
        <line x1="290" y1="80" x2="500" y2="50" stroke="#f59e0b" stroke-width="2"/>
        <!-- Virtual extension back -->
        <line x1="290" y1="80" x2="60" y2="130" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
        
        <!-- Ray 2: Through centre (straight through) -->
        <line x1="230" y1="80" x2="500" y2="137" stroke="#06b6d4" stroke-width="2"/>
        <!-- Virtual extension back -->
        <line x1="230" y1="80" x2="60" y2="40" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
        
        <!-- Virtual Image (upright, magnified, on same side) -->
        <line x1="100" y1="130" x2="100" y2="40" stroke="#3b82f6" stroke-width="3" stroke-dasharray="6,3"/>
        <polygon points="100,35 94,50 106,50" fill="#3b82f6" opacity="0.7"/>
        <text x="100" y="185" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Virtual Image</text>
        <text x="100" y="198" fill="#3b82f6" font-size="9" text-anchor="middle">(upright, magnified)</text>
        
        <!-- Legend -->
        <rect x="300" y="200" width="230" height="45" fill="hsl(var(--muted))" opacity="0.3" rx="5"/>
        <text x="310" y="218" fill="currentColor" font-size="9">Dashed lines = virtual rays</text>
        <text x="310" y="233" fill="currentColor" font-size="9">(traced back, not real light)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem; color: var(--muted-foreground);">Object inside F produces a virtual, upright, magnified image — this is how magnifying glasses work</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 6 — Ray Diagrams: Concave Lens</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Concave lenses behave much more simply — the image is <strong>always the same type</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>✏️ Two main rays:</h4>
    <ol>
      <li>A ray <strong>parallel to the axis</strong> → refracts as if coming from the <strong>virtual focus behind the lens</strong></li>
      <li>A ray <strong>through the centre</strong> → continues <strong>straight through</strong></li>
    </ol>
  </div>

  <div class="example-block" style="margin-top: 1rem; border-left: 4px solid #f59e0b;">
    <h4>🟠 Image properties (always the same):</h4>
    <ul>
      <li><strong>Virtual</strong></li>
      <li><strong>Upright</strong></li>
      <li><strong>Smaller</strong> (diminished)</li>
      <li>Appears on the <strong>same side of the lens as the object</strong></li>
    </ul>
  </div>

  <!-- Concave Lens Ray Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Concave Lens Ray Diagram</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="240" viewBox="0 0 520 240">
        <!-- Principal axis -->
        <line x1="20" y1="120" x2="500" y2="120" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Concave lens symbol -->
        <line x1="260" y1="40" x2="260" y2="200" stroke="#ef4444" stroke-width="3"/>
        <polygon points="260,40 246,58 274,58" fill="#ef4444" transform="rotate(180,260,49)"/>
        <polygon points="260,200 246,182 274,182" fill="#ef4444" transform="rotate(180,260,191)"/>
        
        <!-- Virtual F marker (on left side of lens) -->
        <circle cx="200" cy="120" r="4" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="200" y="145" fill="#ef4444" font-size="10" text-anchor="middle">F (virtual)</text>
        
        <!-- Object (arrow) at x=100 -->
        <line x1="100" y1="120" x2="100" y2="50" stroke="#22c55e" stroke-width="3"/>
        <polygon points="100,45 94,60 106,60" fill="#22c55e"/>
        <text x="100" y="165" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel to axis, diverges as if from virtual F -->
        <line x1="100" y1="50" x2="260" y2="50" stroke="#f59e0b" stroke-width="2"/>
        <line x1="260" y1="50" x2="480" y2="20" stroke="#f59e0b" stroke-width="2"/>
        <!-- Virtual extension back to F -->
        <line x1="260" y1="50" x2="200" y2="120" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.6"/>
        
        <!-- Ray 2: Through centre (straight through) -->
        <line x1="100" y1="50" x2="480" y2="115" stroke="#06b6d4" stroke-width="2"/>
        
        <!-- Where virtual rays meet = virtual image -->
        <line x1="168" y1="120" x2="168" y2="80" stroke="#3b82f6" stroke-width="3" stroke-dasharray="6,3"/>
        <polygon points="168,75 162,90 174,90" fill="#3b82f6" opacity="0.7"/>
        <text x="168" y="185" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Virtual Image</text>
        <text x="168" y="198" fill="#3b82f6" font-size="9" text-anchor="middle">(upright, smaller)</text>
        
        <!-- Legend -->
        <rect x="300" y="175" width="180" height="50" fill="hsl(var(--muted))" opacity="0.3" rx="5"/>
        <text x="310" y="193" fill="currentColor" font-size="9" font-weight="bold">Concave lens always produces:</text>
        <text x="310" y="208" fill="currentColor" font-size="9">Virtual • Upright • Diminished</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 7 — Magnification</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Magnification tells you <strong>how much bigger or smaller</strong> an image is compared to the object.</p>
  </div>

  <div class="formula-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">📌 Magnification Equation:</h4>
    <p style="font-size: 1.5rem; font-weight: bold; text-align: center; margin: 1rem 0;">Magnification = image height ÷ object height</p>
    <ul style="font-size: 0.95rem;">
      <li><strong>No units</strong> — it is a ratio</li>
      <li>Works for both <strong>convex and concave</strong> lenses</li>
      <li>Both heights must be measured in the <strong>same units</strong> (mm, cm, etc.)</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>👉 Interpretation:</h4>
    <table class="data-table">
      <thead><tr><th>Magnification Value</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td>Magnification > 1</td><td>Image is <strong>magnified</strong> (larger)</td></tr>
        <tr><td>Magnification = 1</td><td>Image is <strong>same size</strong></td></tr>
        <tr><td>Magnification < 1</td><td>Image is <strong>diminished</strong> (smaller)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Why magnification works:</h4>
    <p>The lens changes the <strong>angles at which rays meet</strong>. These angles determine where the image forms and how large it appears.</p>
    <ul>
      <li>If rays meet at a <strong>larger separation</strong> from the axis → image height is greater → <strong>magnified</strong></li>
      <li>If they meet <strong>closer together</strong> → image height is smaller → <strong>diminished</strong></li>
    </ul>
  </div>

  <!-- Magnification Triangle -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Magnification Triangle</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="200" height="160" viewBox="0 0 200 160">
        <polygon points="100,20 30,130 170,130" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <line x1="100" y1="70" x2="100" y2="130" stroke="#3b82f6" stroke-width="2"/>
        
        <text x="100" y="50" fill="#22c55e" font-size="12" text-anchor="middle" font-weight="bold">Image Height</text>
        <text x="50" y="110" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">M</text>
        <text x="150" y="110" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">Object</text>
        <text x="150" y="122" fill="#ec4899" font-size="10" text-anchor="middle">Height</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem;">M = Image Height ÷ Object Height</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 8 — How Lenses Are Drawn in Diagrams</h3>
  
  <div class="definition-block">
    <h4>📐 Standard Symbols:</h4>
    <p>To avoid confusion, lenses have <strong>standard symbols</strong> in ray diagrams:</p>
    <ul>
      <li><strong>Convex lens:</strong> vertical line with arrows <strong>bulging outward</strong> (pointing away from line)</li>
      <li><strong>Concave lens:</strong> vertical line with arrows <strong>curving inward</strong> (pointing toward line)</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📏 Measuring Tips:</h4>
    <ul>
      <li><strong>Image height</strong> and <strong>object height</strong> should be measured using a ruler</li>
      <li>Both must use <strong>consistent units</strong> (both in cm, or both in mm)</li>
      <li>Measure from the <strong>principal axis</strong> to the top of the object/image</li>
    </ul>
  </div>

  <!-- Symbol reference diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Quick Reference: Lens Symbols</h4>
    <div style="display: flex; justify-content: center; gap: 3rem; padding: 0.5rem;">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <line x1="50" y1="10" x2="50" y2="90" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="50,10 36,28 64,28" fill="#3b82f6"/>
        <polygon points="50,90 36,72 64,72" fill="#3b82f6"/>
        <text x="50" y="105" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Convex</text>
      </svg>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <line x1="50" y1="10" x2="50" y2="90" stroke="#ef4444" stroke-width="3"/>
        <polygon points="50,10 36,28 64,28" fill="#ef4444" transform="rotate(180,50,19)"/>
        <polygon points="50,90 36,72 64,72" fill="#ef4444" transform="rotate(180,50,81)"/>
        <text x="50" y="105" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Concave</text>
      </svg>
    </div>
  </div>
</div>
      `,
      canonical_keywords: [
        "lens", "refraction", "convex", "concave", "converging", "diverging",
        "principal focus", "focal length", "real image", "virtual image",
        "magnification", "inverted", "upright", "ray diagram"
      ],
      practice_items: [
        {
          id: "lenses-p1",
          prompt_template: "Explain what a lens does and how it forms an image.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["refract", "light", "converge", "diverge", "image"]
        },
        {
          id: "lenses-p2",
          prompt_template: "Describe the differences between a convex and concave lens in terms of shape and effect on light.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["convex", "concave", "thicker", "thinner", "converge", "diverge"]
        },
        {
          id: "lenses-p3",
          prompt_template: "Define principal focus and focal length. How do they differ for convex and concave lenses?",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["principal focus", "focal length", "parallel rays", "meet", "virtual"]
        },
        {
          id: "lenses-p4",
          prompt_template: "Compare real and virtual images. When does a convex lens produce each type?",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["real", "virtual", "inverted", "upright", "beyond F", "inside F", "projected"]
        },
        {
          id: "lenses-p5",
          prompt_template: "Draw and label a ray diagram for a convex lens with the object beyond 2F. Describe the image formed.",
          marks: 6,
          type: "open",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["parallel ray", "through F", "through centre", "real", "inverted", "diminished"]
        },
        {
          id: "lenses-p6",
          prompt_template: "State the magnification equation and calculate the magnification if an object is 2cm tall and the image is 6cm tall.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["image height", "object height", "6 divided by 2", "3", "magnified"]
        }
      ]
    },

    // ============================================
    // SUBSECTION 2: 4.6.2.6 – VISIBLE LIGHT (7 pairs)
    // ============================================
    {
      id: "4-6-2-6-visible-light",
      title: "4.6.2.6 – Visible Light",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — The Visible Spectrum</h3>
  
  <div class="definition-block">
    <h4>💡 Definition:</h4>
    <p>The <strong>visible light spectrum</strong> is the small part of the electromagnetic spectrum that our eyes can detect.</p>
    <p>Each colour of visible light has its own specific <strong>wavelength</strong> and <strong>frequency</strong>.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌈 Order of colours (longest → shortest wavelength):</h4>
    <p style="font-size: 1.2rem; font-weight: bold; text-align: center; letter-spacing: 0.5px;">
      <span style="color: #ef4444;">Red</span> → 
      <span style="color: #f97316;">Orange</span> → 
      <span style="color: #eab308;">Yellow</span> → 
      <span style="color: #22c55e;">Green</span> → 
      <span style="color: #3b82f6;">Blue</span> → 
      <span style="color: #6366f1;">Indigo</span> → 
      <span style="color: #8b5cf6;">Violet</span>
    </p>
  </div>

  <div class="example-block">
    <h4>🧠 Key relationship:</h4>
    <p>As <strong>wavelength decreases</strong>, <strong>frequency increases</strong>.</p>
    <ul>
      <li><strong>Violet</strong> has the highest frequency (most energy)</li>
      <li><strong>Red</strong> has the lowest frequency</li>
    </ul>
    <p>Understanding this helps explain how objects absorb or reflect specific colours.</p>
  </div>

  <!-- Visible spectrum diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 The Visible Spectrum</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="100" viewBox="0 0 480 100">
        <defs>
          <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ef4444"/>
            <stop offset="17%" style="stop-color:#f97316"/>
            <stop offset="33%" style="stop-color:#eab308"/>
            <stop offset="50%" style="stop-color:#22c55e"/>
            <stop offset="67%" style="stop-color:#3b82f6"/>
            <stop offset="83%" style="stop-color:#6366f1"/>
            <stop offset="100%" style="stop-color:#8b5cf6"/>
          </linearGradient>
        </defs>
        <rect x="20" y="20" width="440" height="40" fill="url(#spectrum)" rx="5"/>
        <text x="20" y="80" fill="currentColor" font-size="10">Long λ</text>
        <text x="20" y="92" fill="currentColor" font-size="9">Low f</text>
        <text x="430" y="80" fill="currentColor" font-size="10" text-anchor="end">Short λ</text>
        <text x="430" y="92" fill="currentColor" font-size="9" text-anchor="end">High f</text>
        
        <text x="50" y="15" fill="#ef4444" font-size="9">Red</text>
        <text x="105" y="15" fill="#f97316" font-size="9">Orange</text>
        <text x="170" y="15" fill="#eab308" font-size="9">Yellow</text>
        <text x="235" y="15" fill="#22c55e" font-size="9">Green</text>
        <text x="300" y="15" fill="#3b82f6" font-size="9">Blue</text>
        <text x="360" y="15" fill="#6366f1" font-size="9">Indigo</text>
        <text x="420" y="15" fill="#8b5cf6" font-size="9">Violet</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — How Colour Filters Work</h3>
  
  <div class="definition-block">
    <h4>🎨 Definition:</h4>
    <p><strong>Colour filters</strong> control which colours <strong>pass through</strong> and which are <strong>absorbed</strong>.</p>
  </div>

  <div class="example-block">
    <h4>How they behave:</h4>
    <ul>
      <li>A <strong style="color: #ef4444;">red filter</strong> transmits red light only and absorbs all other colours</li>
      <li>A <strong style="color: #22c55e;">green filter</strong> transmits green light only</li>
      <li>A <strong style="color: #3b82f6;">blue filter</strong> transmits blue light only</li>
      <li>A <strong style="color: #eab308;">yellow filter</strong> transmits red + green wavelengths (because yellow is made from red+green light)</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Idea:</h4>
    <p>Filters <strong>don't add colour</strong> — they <strong>remove certain wavelengths</strong> by absorbing them, allowing only selected wavelengths to pass.</p>
    <p>So if you shine <strong>white light through a red filter</strong>, the output becomes red because all non-red wavelengths were absorbed.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Why Objects Have Colour</h3>
  
  <div class="definition-block">
    <h4>💡 Key Principle:</h4>
    <p>An object's colour depends on which wavelengths it <strong>reflects</strong> and which it <strong>absorbs</strong>.</p>
  </div>

  <div class="example-block">
    <h4>✔ Opaque objects (objects you cannot see through):</h4>
    <ul>
      <li>They <strong>absorb</strong> some wavelengths</li>
      <li>They <strong>reflect</strong> the wavelengths you see</li>
    </ul>
  </div>

  <div class="table-block" style="margin: 1rem 0;">
    <h4>📊 Examples:</h4>
    <table class="data-table">
      <thead><tr><th>Object</th><th>What Happens</th></tr></thead>
      <tbody>
        <tr><td style="color: #ef4444;">Red apple</td><td>Reflects red wavelengths, absorbs all others</td></tr>
        <tr><td style="color: #22c55e;">Green leaf</td><td>Reflects green, absorbs red and blue</td></tr>
        <tr><td>White object</td><td>Reflects all wavelengths equally</td></tr>
        <tr><td>Black object</td><td>Absorbs all wavelengths, reflects none</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #f59e0b;">
    <h4>🧠 Important Rule:</h4>
    <p><strong>The colour you see is the colour that is reflected, not absorbed.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — Transparent, Translucent, and Opaque Objects</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Transparent Objects:</h4>
    <ul>
      <li>Transmit <strong>most</strong> of the light that hits them</li>
      <li>Allow you to see <strong>clearly through</strong> them</li>
      <li>Example: clear glass</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #06b6d4; margin-top: 1rem;">
    <h4>🔷 Translucent Objects:</h4>
    <ul>
      <li>Transmit <strong>some</strong> light</li>
      <li><strong>Scatter</strong> the rest</li>
      <li>You can see shapes but <strong>not clear images</strong></li>
      <li>Example: frosted glass</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #1f2937; margin-top: 1rem;">
    <h4>⚫ Opaque Objects:</h4>
    <ul>
      <li>Transmit <strong>no light</strong></li>
      <li>Either <strong>reflect or absorb</strong> all incoming wavelengths</li>
      <li>Example: wood, metal, book covers</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Idea:</h4>
    <p>This classification affects how objects appear under different lighting conditions.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — How Filters Affect the Appearance of Objects</h3>
  
  <div class="table-block">
    <h4>📊 Examples of Filter Effects:</h4>
    <table class="data-table">
      <thead><tr><th>Situation</th><th>What You See</th><th>Explanation</th></tr></thead>
      <tbody>
        <tr>
          <td style="color: #ef4444;">Red object under red filter</td>
          <td><strong>Red</strong></td>
          <td>Filter allows red, object reflects red</td>
        </tr>
        <tr>
          <td style="color: #3b82f6;">Blue object under red filter</td>
          <td><strong>Black/dark</strong></td>
          <td>Object reflects blue, but filter blocks blue → no light reaches eyes</td>
        </tr>
        <tr>
          <td style="color: #22c55e;">Green object under white light</td>
          <td><strong>Green</strong></td>
          <td>It reflects green wavelengths</td>
        </tr>
        <tr>
          <td style="color: #eab308;">Yellow object under blue filter</td>
          <td><strong>Black/dull</strong></td>
          <td>Yellow reflects red+green, blue filter blocks both</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Important Understanding:</h4>
    <p>The colour you see depends on:</p>
    <ol>
      <li>The <strong>colour of the object</strong> (what it reflects)</li>
      <li>Which wavelengths the <strong>filter allows</strong> to reach it</li>
    </ol>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 6 — Differential Absorption, Transmission, and Reflection</h3>
  
  <div class="definition-block">
    <h4>Objects interact with light in three ways:</h4>
  </div>

  <div class="table-block" style="margin: 1rem 0;">
    <table class="data-table">
      <thead><tr><th>Interaction</th><th>What Happens</th><th>Example</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>1️⃣ Absorption</strong></td>
          <td>Surface takes in specific wavelengths → converts to heat</td>
          <td>Black surfaces absorb the most energy</td>
        </tr>
        <tr>
          <td><strong>2️⃣ Transmission</strong></td>
          <td>Light passes through the material</td>
          <td>Transparent or translucent objects</td>
        </tr>
        <tr>
          <td><strong>3️⃣ Reflection</strong></td>
          <td>Light bounces off the material</td>
          <td>White surfaces reflect most light</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 How this links to colour:</h4>
    <p>The balance of <strong>absorption, transmission, and reflection</strong> determines what colour we perceive.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 7 — Why an Opaque Object Has a Particular Colour</h3>
  
  <div class="definition-block">
    <h4>The Process:</h4>
    <ol>
      <li><strong>White light</strong> (a mix of all colours) hits the object</li>
      <li>The object's surface <strong>absorbs</strong> some wavelengths</li>
      <li>The wavelengths that are <strong>not absorbed</strong> are <strong>reflected</strong></li>
      <li>The reflected wavelengths enter your eyes → your brain interprets them as the object's colour</li>
    </ol>
  </div>

  <div class="example-block" style="margin-top: 1rem;">
    <h4>📊 Examples:</h4>
    <table class="data-table">
      <thead><tr><th>Object Colour</th><th>Wavelengths Reflected</th></tr></thead>
      <tbody>
        <tr><td style="color: #8b5cf6;">Purple</td><td>Red + Blue wavelengths (absorbs others)</td></tr>
        <tr><td style="color: #06b6d4;">Cyan</td><td>Green + Blue wavelengths</td></tr>
        <tr><td style="color: #ec4899;">Magenta</td><td>Red + Blue wavelengths</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Takeaway:</h4>
    <p>Your brain interprets the <strong>mixture of reflected wavelengths</strong> as the object's final colour.</p>
  </div>
</div>
      `,
      canonical_keywords: [
        "visible spectrum", "wavelength", "frequency", "colour filter", "absorb", "reflect",
        "transmit", "opaque", "transparent", "translucent", "white light"
      ],
      practice_items: [
        {
          id: "visible-p1",
          prompt_template: "List the colours of the visible spectrum in order from longest to shortest wavelength.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
        },
        {
          id: "visible-p2",
          prompt_template: "Explain how a colour filter works. What happens when you shine white light through a red filter?",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["absorb", "transmit", "red light passes", "other colours absorbed"]
        },
        {
          id: "visible-p3",
          prompt_template: "Explain why a green leaf appears green in white light.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["reflects", "green wavelengths", "absorbs", "red", "blue"]
        },
        {
          id: "visible-p4",
          prompt_template: "What would a blue object look like under a red filter? Explain why.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["black", "dark", "filter blocks blue", "no light reflected"]
        },
        {
          id: "visible-p5",
          prompt_template: "Define transparent, translucent, and opaque. Give one example of each.",
          marks: 6,
          type: "open",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["transparent", "transmit most", "clear glass", "translucent", "some light", "frosted", "opaque", "no light"]
        }
      ]
    },

    // ============================================
    // SUBSECTION 3: 4.6.3.1 – INFRARED RADIATION (4 pairs)
    // ============================================
    {
      id: "4-6-3-1-infrared-radiation",
      title: "4.6.3.1 – Emission and Absorption of Infrared Radiation",
      type: "content",
      study_group: 3,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — All Objects Emit and Absorb Infrared Radiation</h3>
  
  <div class="definition-block">
    <h4>💡 Key Fact:</h4>
    <p>Every object above <strong>absolute zero</strong> emits electromagnetic radiation, mostly in the <strong>infrared (IR)</strong> part of the spectrum.</p>
    <p>This includes everyday objects such as the ground, your body, cars, houses, and even ice.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Idea:</h4>
    <p><strong>The hotter an object is, the more infrared radiation it emits in a given time.</strong></p>
    <p>This is why hot objects glow faintly red in the dark — they are emitting large amounts of IR, some of which enters the visible range.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Temperature and Radiation Emission</h3>
  
  <div class="definition-block">
    <h4>The link between temperature and radiation emission:</h4>
    <p>As temperature <strong>increases</strong>:</p>
    <ul>
      <li>✔ <strong>Total energy emitted increases</strong></li>
      <li>✔ Radiation becomes <strong>more intense</strong></li>
      <li>✔ The <strong>peak wavelength</strong> of radiation becomes <strong>shorter</strong> (shifts towards visible light)</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Real-world example:</h4>
    <p>This explains why very hot metals glow:</p>
    <ul>
      <li>First <span style="color: #ef4444;"><strong>red</strong></span></li>
      <li>Then <span style="color: #f97316;"><strong>orange</strong></span></li>
      <li>Then <strong>white</strong></li>
    </ul>
    <p>Hotter surfaces emit <strong>shorter wavelengths</strong>.</p>
  </div>

  <!-- Temperature vs emission diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Temperature and Radiation</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <!-- Axes -->
        <line x1="50" y1="150" x2="380" y2="150" stroke="currentColor" stroke-width="2"/>
        <line x1="50" y1="150" x2="50" y2="20" stroke="currentColor" stroke-width="2"/>
        
        <!-- Labels -->
        <text x="215" y="170" fill="currentColor" font-size="10" text-anchor="middle">Wavelength →</text>
        <text x="25" y="90" fill="currentColor" font-size="10" text-anchor="middle" transform="rotate(-90,25,90)">Intensity →</text>
        
        <!-- Cool object curve (red) -->
        <path d="M60 145 Q150 100 200 140 Q280 148 370 149" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="220" y="125" fill="#ef4444" font-size="9">Cool object</text>
        
        <!-- Hot object curve (orange/yellow) -->
        <path d="M60 140 Q100 40 130 130 Q200 145 370 148" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="130" y="50" fill="#f59e0b" font-size="9">Hot object</text>
        
        <!-- Very hot object curve -->
        <path d="M60 130 Q70 25 85 110 Q150 142 370 147" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="85" y="30" fill="#3b82f6" font-size="9">Very hot</text>
        
        <!-- Peak markers -->
        <circle cx="200" cy="100" r="3" fill="#ef4444"/>
        <circle cx="130" cy="40" r="3" fill="#f59e0b"/>
        <circle cx="70" cy="30" r="3" fill="#3b82f6"/>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.875rem;">Hotter objects: more intensity, shorter peak wavelength</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Absorption of Infrared Radiation</h3>
  
  <div class="definition-block">
    <h4>💡 Key Principle:</h4>
    <p>Objects <strong>absorb</strong> infrared radiation from their surroundings.</p>
    <p>The temperature of a body changes depending on how much IR it absorbs compared to how much it emits.</p>
  </div>

  <div class="table-block" style="margin: 1rem 0;">
    <table class="data-table">
      <thead><tr><th>Condition</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td>If <strong>absorption > emission</strong></td><td>→ The object <strong>heats up</strong></td></tr>
        <tr><td>If <strong>emission > absorption</strong></td><td>→ The object <strong>cools down</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Surface type matters:</h4>
    <ul>
      <li><strong>Black, matte surfaces</strong> absorb AND emit IR radiation <strong>most effectively</strong></li>
      <li><strong>White or shiny surfaces</strong> absorb and emit the <strong>least</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📚 This is why:</h4>
    <ul>
      <li><strong>Solar panels are black</strong> → to absorb more radiation</li>
      <li><strong>Survival blankets are shiny silver</strong> → to reduce heat emission</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — What Is a Perfect Black Body?</h3>
  
  <div class="definition-block">
    <h4>📌 Definition:</h4>
    <p>A <strong>perfect black body</strong> is an idealised object that:</p>
    <ul>
      <li><strong>Absorbs all radiation</strong> that hits it (no reflection, no transmission)</li>
      <li><strong>Emits radiation as effectively as possible</strong> for its temperature</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Understanding:</h4>
    <p>Because it absorbs all wavelengths equally, a perfect black body is also the <strong>best possible emitter</strong> of radiation.</p>
    <p>Real objects try to imitate this behaviour but none achieve true perfection.</p>
  </div>
</div>
      `,
      canonical_keywords: [
        "infrared radiation", "emit", "absorb", "temperature", "intensity",
        "wavelength", "black body", "black surface", "shiny surface"
      ],
      practice_items: [
        {
          id: "ir-p1",
          prompt_template: "What type of radiation do all objects above absolute zero emit? How does the amount emitted relate to temperature?",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["infrared", "hotter", "more radiation", "emit"]
        },
        {
          id: "ir-p2",
          prompt_template: "Describe how the radiation emitted by an object changes as its temperature increases.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["more intense", "shorter wavelength", "peak shifts", "visible"]
        },
        {
          id: "ir-p3",
          prompt_template: "Explain why black surfaces are good absorbers and emitters of infrared radiation, and give a practical application.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["absorb", "emit", "effectively", "solar panels", "black"]
        },
        {
          id: "ir-p4",
          prompt_template: "Define a perfect black body and explain why it is the best emitter of radiation.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["absorbs all", "no reflection", "best emitter", "idealised"]
        }
      ]
    },

    // ============================================
    // SUBSECTION 4: 4.6.3.2 – PERFECT BLACK BODIES AND RADIATION (5 pairs)
    // ============================================
    {
      id: "4-6-3-2-black-bodies",
      title: "4.6.3.2 – Perfect Black Bodies and Radiation",
      type: "content",
      study_group: 4,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1 — All Bodies Emit Radiation</h3>
  
  <div class="definition-block">
    <h4>💡 Key Fact:</h4>
    <p>Every object radiates energy as <strong>electromagnetic waves</strong>.</p>
    <p>This radiation includes a <strong>range of wavelengths</strong>, and the exact mix depends on the object's <strong>temperature</strong>.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Principle:</h4>
    <p>Even objects that feel cold to touch are still emitting radiation — <strong>just less than hotter objects</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 2 — Temperature Determines Intensity and Wavelength Distribution</h3>
  
  <div class="definition-block">
    <h4>When an object becomes hotter:</h4>
    <ul>
      <li>It emits <strong>more radiation per second</strong></li>
      <li>The wavelengths emitted shift towards the <strong>shorter end</strong> of the spectrum</li>
      <li>Radiation becomes <strong>more intense</strong> overall</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>A hotter object does not just emit <strong>more</strong> radiation — it emits <strong>different</strong> radiation.</p>
  </div>

  <div class="example-block">
    <h4>💡 Examples by temperature:</h4>
    <table class="data-table">
      <thead><tr><th>Temperature</th><th>Main Radiation Emitted</th></tr></thead>
      <tbody>
        <tr><td>Warm object</td><td>Mostly <strong>infrared</strong></td></tr>
        <tr><td>Very hot object</td><td><strong>Visible light</strong> (like glowing metal)</td></tr>
        <tr><td>Extremely hot object</td><td><strong>Ultraviolet</strong></td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 3 — Thermal Balance: Absorption vs Emission</h3>
  
  <div class="definition-block">
    <h4>📌 Key Rule:</h4>
    <p>A body's temperature remains <strong>constant</strong> only if:</p>
    <p style="font-size: 1.2rem; font-weight: bold; text-align: center; padding: 0.5rem; background: hsl(var(--muted)); border-radius: 8px; margin: 0.5rem 0;">
      Energy absorbed per second = Energy emitted per second
    </p>
  </div>

  <div class="table-block" style="margin: 1rem 0;">
    <table class="data-table">
      <thead><tr><th>Condition</th><th>Result</th></tr></thead>
      <tbody>
        <tr><td>✔ If a body absorbs radiation <strong>faster</strong> than it emits</td><td>→ Temperature <strong>increases</strong></td></tr>
        <tr><td>✔ If a body emits radiation <strong>faster</strong> than it absorbs</td><td>→ Temperature <strong>decreases</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Understanding:</h4>
    <p>This balance determines the temperature of any <strong>planet, building, or physical system</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 4 — The Earth's Temperature and Radiation Balance</h3>
  
  <div class="definition-block">
    <h4>The Earth's temperature depends on:</h4>
    <ul>
      <li><strong>Absorption</strong> of radiation from the Sun (mainly visible light and some infrared)</li>
      <li><strong>Emission</strong> of infrared radiation back into space</li>
      <li><strong>Reflection</strong> of incoming radiation by clouds, ice, oceans, and land</li>
      <li>The <strong>atmosphere</strong>, which can trap infrared radiation (<strong>greenhouse effect</strong>)</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌍 Why Earth's temperature stays relatively stable:</h4>
    <ul>
      <li>Earth absorbs solar radiation during the day</li>
      <li>Earth emits infrared radiation <strong>continuously</strong></li>
      <li>When these processes balance, temperature remains steady</li>
      <li>If the balance changes (e.g., stronger greenhouse effect), Earth warms or cools</li>
    </ul>
  </div>

  <!-- Earth radiation balance diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Earth's Radiation Balance</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="220" viewBox="0 0 450 220">
        <!-- Sun -->
        <circle cx="50" cy="50" r="30" fill="#f59e0b"/>
        <text x="50" y="95" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Sun</text>
        
        <!-- Incoming radiation -->
        <line x1="85" y1="55" x2="150" y2="100" stroke="#f59e0b" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1s" repeatCount="indefinite"/>
        </line>
        <text x="110" y="70" fill="#f59e0b" font-size="8">Visible + IR</text>
        
        <!-- Earth -->
        <circle cx="280" cy="150" r="50" fill="#3b82f6"/>
        <ellipse cx="280" cy="150" rx="55" ry="20" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,3"/>
        <text x="280" y="155" fill="white" font-size="10" text-anchor="middle" font-weight="bold">Earth</text>
        <text x="280" y="190" fill="#22c55e" font-size="9" text-anchor="middle">Atmosphere</text>
        
        <!-- Reflected radiation -->
        <line x1="240" y1="110" x2="180" y2="60" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="195" y="75" fill="#94a3b8" font-size="8">Reflected</text>
        
        <!-- Emitted IR to space -->
        <line x1="310" y1="105" x2="380" y2="40" stroke="#ef4444" stroke-width="2">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <text x="365" y="30" fill="#ef4444" font-size="8">IR emitted</text>
        <text x="365" y="42" fill="#ef4444" font-size="8">to space</text>
        
        <!-- Trapped IR (greenhouse) -->
        <path d="M310 150 Q350 140 330 170" fill="none" stroke="#f97316" stroke-width="2" stroke-dasharray="3,2"/>
        <text x="365" y="165" fill="#f97316" font-size="8">Some IR</text>
        <text x="365" y="177" fill="#f97316" font-size="8">trapped</text>
        
        <!-- Legend -->
        <rect x="10" y="180" width="180" height="35" fill="hsl(var(--muted))" opacity="0.3" rx="5"/>
        <text x="20" y="198" fill="currentColor" font-size="9" font-weight="bold">Balance:</text>
        <text x="20" y="210" fill="currentColor" font-size="8">Absorbed = Emitted → stable temp</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5 — Using Diagrams and Data to Explain Temperature Changes</h3>
  
  <div class="definition-block">
    <h4>Students should be able to interpret:</h4>
  </div>

  <div class="example-block">
    <h4>✔ Diagrams showing:</h4>
    <ul>
      <li>Radiation <strong>entering</strong> Earth's atmosphere</li>
      <li>Energy <strong>reflected</strong> by clouds or surface</li>
      <li>Energy <strong>absorbed</strong> by the ground</li>
      <li>Infrared emission <strong>escaping to space</strong></li>
      <li>Infrared <strong>absorbed by greenhouse gases</strong></li>
    </ul>
  </div>

  <div class="example-block" style="margin-top: 1rem;">
    <h4>✔ Data showing:</h4>
    <ul>
      <li>Increases in atmospheric CO₂ → more radiation trapped → <strong>higher average temperature</strong></li>
      <li>Changes in <strong>albedo</strong> (reflectivity) due to melting ice</li>
      <li>Temperature graphs over time showing evidence of <strong>energy imbalance</strong></li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #22c55e;">
    <h4>🧠 Key Takeaway:</h4>
    <p>The temperature of Earth depends on the <strong>radiation balance</strong> between what is <strong>absorbed</strong> and what is <strong>emitted</strong>.</p>
  </div>
</div>
      `,
      canonical_keywords: [
        "radiation", "emit", "absorb", "temperature", "thermal balance",
        "Earth", "greenhouse effect", "wavelength", "intensity", "albedo"
      ],
      practice_items: [
        {
          id: "bb-p1",
          prompt_template: "Explain why all bodies emit electromagnetic radiation, even cold objects.",
          marks: 2,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["temperature", "above absolute zero", "emit radiation"]
        },
        {
          id: "bb-p2",
          prompt_template: "Describe how the radiation emitted by an object changes as it gets hotter. Include wavelength and intensity.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["more intense", "shorter wavelength", "infrared", "visible", "ultraviolet"]
        },
        {
          id: "bb-p3",
          prompt_template: "State the condition for a body's temperature to remain constant. What happens if this balance is broken?",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["absorbed equals emitted", "heats up", "cools down", "balance"]
        },
        {
          id: "bb-p4",
          prompt_template: "Explain how the Earth maintains its temperature through radiation balance. What role does the atmosphere play?",
          marks: 5,
          type: "open",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["absorb", "emit", "infrared", "greenhouse", "atmosphere", "trap", "balance"]
        },
        {
          id: "bb-p5",
          prompt_template: "Explain how increasing CO₂ levels affect Earth's temperature using the concept of radiation balance.",
          marks: 4,
          type: "short-answer",
          difficulty: "hard",
          randomise: true,
          expected_keywords: ["CO₂", "greenhouse gas", "trap infrared", "more absorbed", "temperature increases"]
        }
      ]
    }
  ]
};

// Helper function for backwards compatibility
export const getOpticsSubsections = (module: OpticsModule): OpticsSubsection[] => {
  return module.subsections;
};
