// EM Waves Module Data for Physics
// 4.6.2 Electromagnetic Waves

export interface EMWavesSubsection {
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

export interface EMWavesModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: EMWavesSubsection[];
}

export const emWavesModuleData: EMWavesModule = {
  id: "em-waves-module",
  title: "Module 2: Electromagnetic Waves",
  status: "ready",
  subsections: [
    {
      id: "4-6-2-1-types-em-waves",
      title: "4.6.2.1 – Types of Electromagnetic Waves",
      type: "content",
      study_group: 1,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Electromagnetic Waves Are</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>Electromagnetic (EM) waves are <strong>transverse waves</strong>, meaning the oscillations happen at right angles to the direction of energy transfer. They transfer energy from a source (e.g., the Sun, a lamp, a radio transmitter) to an absorber (your skin, an aerial, a camera sensor).</p>
  </div>
  
  <div class="key-facts-block">
    <h4>Key Properties of All EM Waves:</h4>
    <ul>
      <li>They are <strong>transverse</strong> (vibrations ⟂ wave direction)</li>
      <li>They can travel through a <strong>vacuum</strong> because they do not need particles</li>
      <li>They all travel at <strong>3 × 10⁸ m/s</strong> in a vacuum — the speed of light</li>
    </ul>
  </div>
  
  <!-- Animated EM Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Transverse EM Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="200" viewBox="0 0 420 200">
        <defs>
          <linearGradient id="emWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#3b82f6"/>
            <stop offset="50%" style="stop-color:#8b5cf6"/>
            <stop offset="100%" style="stop-color:#ec4899"/>
          </linearGradient>
        </defs>
        <path d="M20 100 Q55 30, 90 100 T160 100 T230 100 T300 100 T370 100" fill="none" stroke="url(#emWaveGrad)" stroke-width="3" class="anim-wave"/>
        <line x1="20" y1="100" x2="400" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Electric field arrow -->
        <line x1="55" y1="100" x2="55" y2="45" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowEM)"/>
        <text x="65" y="50" fill="#ef4444" font-size="10" font-weight="bold">E field</text>
        
        <!-- Wave direction -->
        <path d="M330 100 L380 100" stroke="currentColor" stroke-width="2" marker-end="url(#arrowEM)"/>
        <text x="355" y="90" fill="currentColor" font-size="9" text-anchor="middle">Wave direction</text>
        
        <!-- Oscillation indicator -->
        <path d="M195 60 L195 140" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="210" y="155" fill="#22c55e" font-size="9">Oscillation</text>
        
        <defs>
          <marker id="arrowEM" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">EM waves are oscillating electric and magnetic fields travelling through space</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – The Electromagnetic Spectrum</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>The electromagnetic spectrum is a <strong>continuous range</strong> of wavelengths and frequencies. There are no gaps — each type of EM radiation gradually changes into the next.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>Ordered from Longest Wavelength → Shortest Wavelength:</h4>
    <ol>
      <li>Radio waves</li>
      <li>Microwaves</li>
      <li>Infrared</li>
      <li>Visible light (red → violet)</li>
      <li>Ultraviolet</li>
      <li>X-rays</li>
      <li>Gamma rays</li>
    </ol>
  </div>
  
  <!-- Animated EM Spectrum Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1.5rem 0;">
    <h4>The Electromagnetic Spectrum</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="450" height="180" viewBox="0 0 450 180">
        <defs>
          <linearGradient id="spectrumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#dc2626"/>
            <stop offset="14%" style="stop-color:#f97316"/>
            <stop offset="28%" style="stop-color:#facc15"/>
            <stop offset="42%" style="stop-color:#22c55e"/>
            <stop offset="57%" style="stop-color:#3b82f6"/>
            <stop offset="71%" style="stop-color:#6366f1"/>
            <stop offset="85%" style="stop-color:#8b5cf6"/>
            <stop offset="100%" style="stop-color:#ec4899"/>
          </linearGradient>
        </defs>
        
        <!-- Spectrum bar -->
        <rect x="20" y="60" width="410" height="40" fill="url(#spectrumGrad)" rx="4"/>
        
        <!-- Labels above -->
        <text x="35" y="50" fill="#dc2626" font-size="8" text-anchor="middle" font-weight="bold">Radio</text>
        <text x="85" y="50" fill="#f97316" font-size="8" text-anchor="middle" font-weight="bold">Micro</text>
        <text x="135" y="50" fill="#facc15" font-size="8" text-anchor="middle" font-weight="bold">IR</text>
        <text x="200" y="50" fill="#22c55e" font-size="8" text-anchor="middle" font-weight="bold">Visible</text>
        <text x="280" y="50" fill="#3b82f6" font-size="8" text-anchor="middle" font-weight="bold">UV</text>
        <text x="345" y="50" fill="#6366f1" font-size="8" text-anchor="middle" font-weight="bold">X-ray</text>
        <text x="410" y="50" fill="#ec4899" font-size="8" text-anchor="middle" font-weight="bold">Gamma</text>
        
        <!-- Divider lines -->
        <line x1="60" y1="55" x2="60" y2="105" stroke="currentColor" stroke-width="1" opacity="0.3"/>
        <line x1="110" y1="55" x2="110" y2="105" stroke="currentColor" stroke-width="1" opacity="0.3"/>
        <line x1="160" y1="55" x2="160" y2="105" stroke="currentColor" stroke-width="1" opacity="0.3"/>
        <line x1="240" y1="55" x2="240" y2="105" stroke="currentColor" stroke-width="1" opacity="0.3"/>
        <line x1="310" y1="55" x2="310" y2="105" stroke="currentColor" stroke-width="1" opacity="0.3"/>
        <line x1="380" y1="55" x2="380" y2="105" stroke="currentColor" stroke-width="1" opacity="0.3"/>
        
        <!-- Wavelength arrow -->
        <path d="M430 80 L20 80" stroke="currentColor" stroke-width="2" marker-end="url(#arrowSpec)" opacity="0.7"/>
        <text x="225" y="130" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">← Increasing Wavelength</text>
        
        <!-- Frequency arrow -->
        <path d="M20 90 L430 90" stroke="currentColor" stroke-width="2" marker-end="url(#arrowSpec)" opacity="0.7"/>
        <text x="225" y="150" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Increasing Frequency & Energy →</text>
        
        <!-- Info boxes -->
        <rect x="20" y="160" width="100" height="15" fill="#22c55e" rx="3" opacity="0.2"/>
        <text x="70" y="171" fill="#22c55e" font-size="8" text-anchor="middle">Safe (low energy)</text>
        
        <rect x="330" y="160" width="100" height="15" fill="#ef4444" rx="3" opacity="0.2"/>
        <text x="380" y="171" fill="#ef4444" font-size="8" text-anchor="middle">Harmful (high energy)</text>
        
        <defs>
          <marker id="arrowSpec" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Key Relationships:</h4>
    <ul>
      <li>As <strong>wavelength decreases</strong>, frequency and energy <strong>increase</strong></li>
      <li>Long wavelength = low energy (safe)</li>
      <li>Short wavelength = high energy (more dangerous)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Visible Light (The Part Humans Can Detect)</h3>
  <div class="definition-block">
    <h4>What We See:</h4>
    <p>Although the spectrum is huge, our eyes detect only a very small part: <strong>visible light</strong>. Visible light contains all the colours you see in a rainbow.</p>
  </div>
  
  <!-- Animated Visible Light Spectrum -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Colours of Visible Light (Longest → Shortest wavelength)</h4>
    <div style="display: flex; justify-content: center; padding: 1rem;">
      <svg width="400" height="100" viewBox="0 0 400 100">
        <defs>
          <linearGradient id="visibleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#dc2626"/>
            <stop offset="16%" style="stop-color:#f97316"/>
            <stop offset="32%" style="stop-color:#facc15"/>
            <stop offset="50%" style="stop-color:#22c55e"/>
            <stop offset="66%" style="stop-color:#3b82f6"/>
            <stop offset="82%" style="stop-color:#4f46e5"/>
            <stop offset="100%" style="stop-color:#7c3aed"/>
          </linearGradient>
        </defs>
        
        <rect x="20" y="20" width="360" height="40" fill="url(#visibleGrad)" rx="8"/>
        
        <text x="45" y="80" fill="#dc2626" font-size="10" font-weight="bold">Red</text>
        <text x="95" y="80" fill="#f97316" font-size="10" font-weight="bold">Orange</text>
        <text x="155" y="80" fill="#facc15" font-size="10" font-weight="bold">Yellow</text>
        <text x="215" y="80" fill="#22c55e" font-size="10" font-weight="bold">Green</text>
        <text x="270" y="80" fill="#3b82f6" font-size="10" font-weight="bold">Blue</text>
        <text x="320" y="80" fill="#4f46e5" font-size="10" font-weight="bold">Indigo</text>
        <text x="365" y="80" fill="#7c3aed" font-size="10" font-weight="bold">Violet</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);"><strong>Red</strong> light has the longest wavelength and lowest frequency, while <strong>violet</strong> has the shortest wavelength and highest frequency.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Grouping EM Waves by Wavelength and Frequency</h3>
  <div class="definition-block">
    <h4>Why Grouping Matters:</h4>
    <p>EM waves can be grouped because each type has a <strong>characteristic range of wavelengths</strong>, affecting how it behaves.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>Behaviour by Wavelength:</h4>
    <ul>
      <li><strong>Longer wavelengths</strong> (radio, microwaves) → travel long distances and bend around obstacles</li>
      <li><strong>Medium wavelengths</strong> (infrared, visible) → interact well with surfaces</li>
      <li><strong>Short wavelengths</strong> (UV, X-rays, gamma) → have high energy and can penetrate materials or damage cells</li>
    </ul>
  </div>
  
  <p>This is why each part of the spectrum has <strong>specific uses and risks</strong>.</p>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Key Idea: Energy Transfer by EM Waves</h3>
  <div class="definition-block">
    <h4>Core Principle:</h4>
    <p>All EM waves <strong>transfer energy</strong>. That energy can be used for many purposes:</p>
  </div>
  
  <!-- Animated Energy Transfer Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Energy Transfer Examples</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <!-- Central sun/source -->
        <circle cx="200" cy="100" r="30" fill="#fbbf24" stroke="#f59e0b" stroke-width="3">
          <animate attributeName="r" values="28;32;28" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="200" y="105" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">SOURCE</text>
        
        <!-- Rays emanating -->
        <g opacity="0.6">
          <line x1="230" y1="100" x2="300" y2="60" stroke="#ef4444" stroke-width="2"/>
          <line x1="230" y1="100" x2="320" y2="100" stroke="#f97316" stroke-width="2"/>
          <line x1="230" y1="100" x2="300" y2="140" stroke="#facc15" stroke-width="2"/>
          <line x1="170" y1="100" x2="100" y2="60" stroke="#3b82f6" stroke-width="2"/>
          <line x1="170" y1="100" x2="80" y2="100" stroke="#6366f1" stroke-width="2"/>
          <line x1="170" y1="100" x2="100" y2="140" stroke="#8b5cf6" stroke-width="2"/>
        </g>
        
        <!-- Absorber icons -->
        <circle cx="310" cy="55" r="15" fill="hsl(var(--muted))" stroke="#ef4444" stroke-width="2"/>
        <text x="310" y="58" text-anchor="middle" font-size="7" fill="currentColor">IR Heat</text>
        
        <rect x="315" y="90" width="30" height="20" fill="hsl(var(--muted))" stroke="#f97316" stroke-width="2" rx="2"/>
        <text x="330" y="103" text-anchor="middle" font-size="7" fill="currentColor">Radio</text>
        
        <circle cx="310" cy="145" r="15" fill="hsl(var(--muted))" stroke="#facc15" stroke-width="2"/>
        <text x="310" y="148" text-anchor="middle" font-size="7" fill="currentColor">UV Tan</text>
        
        <rect x="55" y="45" width="30" height="20" fill="hsl(var(--muted))" stroke="#3b82f6" stroke-width="2" rx="2"/>
        <text x="70" y="58" text-anchor="middle" font-size="7" fill="currentColor">X-ray</text>
        
        <circle cx="70" cy="100" r="15" fill="hsl(var(--muted))" stroke="#6366f1" stroke-width="2"/>
        <text x="70" y="103" text-anchor="middle" font-size="7" fill="currentColor">Micro</text>
        
        <rect x="55" y="135" width="30" height="20" fill="hsl(var(--muted))" stroke="#8b5cf6" stroke-width="2" rx="2"/>
        <text x="70" y="148" text-anchor="middle" font-size="7" fill="currentColor">Gamma</text>
        
        <text x="200" y="185" text-anchor="middle" font-size="10" fill="currentColor" font-weight="bold">Energy carried from SOURCE → ABSORBER</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Energy Use</th><th>EM Wave Type</th></tr></thead>
    <tbody>
      <tr><td>Heat something</td><td>Infrared</td></tr>
      <tr><td>Allow communication</td><td>Radio, Microwaves</td></tr>
      <tr><td>Cause chemical reactions (e.g., tanning)</td><td>UV</td></tr>
      <tr><td>Create medical images</td><td>X-rays</td></tr>
      <tr><td>Destroy cancer cells</td><td>Gamma rays</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Remember:</h4>
    <p>Even though each type behaves differently, the principle is the same: <strong>Energy is carried from a source to an absorber.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Examples of Energy Transfer (Exam Ready)</h3>
  <div class="definition-block">
    <h4>Examples You May Need in Exams:</h4>
    <p>These examples show the practical consequences of EM waves transferring energy:</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>EM Wave</th><th>How It Transfers Energy</th></tr></thead>
    <tbody>
      <tr><td><strong>Radio waves</strong></td><td>Transfer energy to an aerial → produces an electrical signal</td></tr>
      <tr><td><strong>Microwaves</strong></td><td>Transfer energy to water molecules → heating</td></tr>
      <tr><td><strong>Infrared</strong></td><td>Transfers heat energy from heaters to surroundings</td></tr>
      <tr><td><strong>Visible light</strong></td><td>Transfers energy to the eyes → allows sight</td></tr>
      <tr><td><strong>Ultraviolet</strong></td><td>Transfers energy to skin cells → tanning or burning</td></tr>
      <tr><td><strong>X-rays</strong></td><td>Transfer enough energy to penetrate soft tissue for imaging</td></tr>
      <tr><td><strong>Gamma rays</strong></td><td>Transfer high energy → kills cancer cells</td></tr>
    </tbody>
  </table>
</div>
      `,
      canonical_keywords: ["electromagnetic waves", "EM spectrum", "transverse", "wavelength", "frequency", "energy transfer", "vacuum", "speed of light", "radio", "microwave", "infrared", "visible light", "ultraviolet", "X-ray", "gamma"],
      practice_items: [
        {
          id: "em-p1",
          prompt_template: "List the electromagnetic spectrum in order from longest to shortest wavelength.",
          marks: 3,
          type: "short-answer",
          difficulty: "easy",
          randomise: true,
          expected_keywords: ["radio", "microwave", "infrared", "visible", "ultraviolet", "X-ray", "gamma"]
        },
        {
          id: "em-p2",
          prompt_template: "Explain why all electromagnetic waves can travel through a vacuum and state their speed.",
          marks: 3,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["do not need particles", "vacuum", "3 × 10⁸ m/s", "speed of light", "transverse"]
        },
        {
          id: "em-p3",
          prompt_template: "Give three examples of how different EM waves transfer energy to absorbers.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["infrared", "heat", "radio", "aerial", "UV", "skin", "X-ray", "imaging"]
        }
      ]
    },
    {
      id: "4-6-2-3-properties-em-waves",
      title: "4.6.2.3 – Properties of Electromagnetic Waves",
      type: "content",
      study_group: 2,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Radio Waves Produced by Oscillations</h3>
  <div class="definition-block">
    <h4>How Radio Waves Are Made:</h4>
    <p>Radio waves can be produced when electrical charges <strong>oscillate</strong> (vibrate) in an electrical circuit. An alternating current in a transmitter causes electrons to move back and forth rapidly, creating a radio wave of the same frequency.</p>
  </div>
  
  <!-- Animated Radio Wave Production -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Radio Wave Production & Reception</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="180" viewBox="0 0 420 180">
        <!-- Transmitter -->
        <rect x="20" y="60" width="60" height="80" fill="hsl(var(--muted))" stroke="hsl(var(--primary))" stroke-width="2" rx="4"/>
        <text x="50" y="95" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">AC</text>
        <text x="50" y="110" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">Source</text>
        
        <!-- Transmitter antenna -->
        <line x1="50" y1="60" x2="50" y2="20" stroke="#3b82f6" stroke-width="3"/>
        <circle cx="50" cy="15" r="5" fill="#3b82f6"/>
        
        <!-- Oscillating electrons in transmitter -->
        <circle cx="50" cy="40" r="3" fill="#ef4444">
          <animate attributeName="cy" values="35;45;35" dur="0.5s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Radio waves emanating -->
        <g opacity="0.6">
          <path d="M80 40 Q120 20, 160 40 T240 40" stroke="#8b5cf6" stroke-width="2" fill="none">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.5s" repeatCount="indefinite"/>
          </path>
          <path d="M85 55 Q125 35, 165 55 T245 55" stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.7">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.5s" repeatCount="indefinite"/>
          </path>
          <path d="M90 70 Q130 50, 170 70 T250 70" stroke="#8b5cf6" stroke-width="2" fill="none" opacity="0.5">
            <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.5s" repeatCount="indefinite"/>
          </path>
        </g>
        
        <!-- Arrow showing direction -->
        <path d="M160 100 L260 100" stroke="currentColor" stroke-width="2" marker-end="url(#arrowRadio)"/>
        <text x="210" y="120" text-anchor="middle" font-size="9" fill="currentColor">Radio wave travels</text>
        
        <!-- Receiver antenna -->
        <line x1="350" y1="60" x2="350" y2="20" stroke="#22c55e" stroke-width="3"/>
        <circle cx="350" cy="15" r="5" fill="#22c55e"/>
        
        <!-- Oscillating electrons in receiver -->
        <circle cx="350" cy="40" r="3" fill="#ef4444">
          <animate attributeName="cy" values="35;45;35" dur="0.5s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Receiver -->
        <rect x="320" y="60" width="60" height="80" fill="hsl(var(--muted))" stroke="#22c55e" stroke-width="2" rx="4"/>
        <text x="350" y="95" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">AC</text>
        <text x="350" y="110" text-anchor="middle" font-size="9" fill="currentColor" font-weight="bold">Signal</text>
        
        <!-- Labels -->
        <text x="50" y="155" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="bold">Transmitter</text>
        <text x="350" y="155" text-anchor="middle" font-size="10" fill="#22c55e" font-weight="bold">Receiver</text>
        
        <defs>
          <marker id="arrowRadio" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Oscillating charges create radio waves; absorbed waves cause charges in the receiver to oscillate</p>
  </div>
  
  <div class="key-facts-block">
    <h4>When Radio Waves Are Absorbed:</h4>
    <ul>
      <li>If a radio wave hits a metal aerial, the electrons in the aerial are forced to <strong>oscillate at the same frequency</strong></li>
      <li>This creates an <strong>alternating current</strong> in the receiving circuit</li>
      <li>The AC can be decoded into sound or data</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – EM Waves From Atoms and Nuclei</h3>
  <div class="key-facts-block">
    <h4>💡 Changes in Atoms:</h4>
    <p>When electrons in atoms move between <strong>energy levels</strong>, they may absorb or emit electromagnetic waves. These changes produce EM waves over a wide range of frequencies (from infrared to ultraviolet and beyond).</p>
  </div>
  
  <!-- Animated Atom Energy Levels -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Electron Energy Level Transitions</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="180" viewBox="0 0 350 180">
        <!-- Nucleus -->
        <circle cx="80" cy="100" r="15" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
        <text x="80" y="104" text-anchor="middle" font-size="8" fill="white" font-weight="bold">+</text>
        
        <!-- Energy levels (orbits) -->
        <circle cx="80" cy="100" r="35" fill="none" stroke="hsl(var(--primary))" stroke-width="1" stroke-dasharray="4,2"/>
        <circle cx="80" cy="100" r="55" fill="none" stroke="hsl(var(--primary))" stroke-width="1" stroke-dasharray="4,2"/>
        <circle cx="80" cy="100" r="75" fill="none" stroke="hsl(var(--primary))" stroke-width="1" stroke-dasharray="4,2"/>
        
        <!-- Labels for energy levels -->
        <text x="125" y="70" font-size="8" fill="currentColor">E₃ (high)</text>
        <text x="140" y="90" font-size="8" fill="currentColor">E₂</text>
        <text x="120" y="110" font-size="8" fill="currentColor">E₁ (low)</text>
        
        <!-- Electron jumping down (emission) -->
        <circle cx="80" cy="25" r="5" fill="#3b82f6">
          <animate attributeName="cy" values="25;65" dur="1s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Photon emitted -->
        <g>
          <path d="M90 45 Q110 35, 130 45 T170 45" stroke="#facc15" stroke-width="2" fill="none">
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
          </path>
          <text x="180" y="50" font-size="9" fill="#facc15" font-weight="bold">Photon emitted</text>
        </g>
        
        <!-- Nuclear emission side -->
        <circle cx="270" cy="100" r="20" fill="#8b5cf6" stroke="#7c3aed" stroke-width="2"/>
        <text x="270" y="104" text-anchor="middle" font-size="7" fill="white" font-weight="bold">Nucleus</text>
        
        <!-- Gamma ray emitted -->
        <path d="M295 100 Q310 85, 325 100 T355 100" stroke="#ec4899" stroke-width="3" fill="none">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="0.3s" repeatCount="indefinite"/>
        </path>
        <text x="325" y="85" font-size="9" fill="#ec4899" font-weight="bold">γ ray</text>
        
        <text x="80" y="170" text-anchor="middle" font-size="9" fill="currentColor">Electron transition</text>
        <text x="270" y="145" text-anchor="middle" font-size="9" fill="currentColor">Nuclear change</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>💥 Gamma Rays From the Nucleus:</h4>
    <ul>
      <li>Gamma rays are released when changes occur in the <strong>nucleus</strong> of an atom</li>
      <li>This often happens during <strong>radioactive decay</strong></li>
      <li>They have <strong>extremely high frequency</strong> and <strong>high energy</strong></li>
      <li>Nuclear changes involve much larger energy transfers than electron changes</li>
    </ul>
  </div>
  
  <div class="definition-block">
    <h4>Key Idea:</h4>
    <p>The <strong>frequency</strong> of EM radiation depends on how much energy is released during the atomic or nuclear change.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Hazards of High-Energy EM Waves</h3>
  <div class="definition-block">
    <h4>Which Waves Are Harmful?</h4>
    <p><strong>Ultraviolet, X-rays, and gamma rays</strong> can all be dangerous to human tissue because they have high frequencies and therefore carry high energy.</p>
  </div>
  
  <!-- Hazards Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>How High-Energy Waves Cause Damage</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="160" viewBox="0 0 380 160">
        <!-- Cell -->
        <ellipse cx="190" cy="80" rx="80" ry="50" fill="hsl(var(--muted))" stroke="#22c55e" stroke-width="2"/>
        <text x="190" y="70" text-anchor="middle" font-size="10" fill="currentColor" font-weight="bold">Cell</text>
        
        <!-- DNA helix representation -->
        <path d="M170 90 Q180 80, 190 90 Q200 100, 210 90" stroke="#3b82f6" stroke-width="2" fill="none"/>
        <text x="190" y="110" text-anchor="middle" font-size="8" fill="#3b82f6">DNA</text>
        
        <!-- Incoming harmful radiation -->
        <path d="M30 40 L100 70" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowHazard)">
          <animate attributeName="stroke-opacity" values="0.5;1;0.5" dur="0.5s" repeatCount="indefinite"/>
        </path>
        <text x="50" y="30" font-size="9" fill="#ef4444" font-weight="bold">UV / X-ray / γ</text>
        
        <!-- Ionisation -->
        <g transform="translate(140, 65)">
          <circle cx="0" cy="0" r="8" fill="#ef4444" opacity="0.3">
            <animate attributeName="r" values="5;15;5" dur="1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0;0.5" dur="1s" repeatCount="indefinite"/>
          </circle>
          <text x="0" y="4" text-anchor="middle" font-size="8" fill="#ef4444">×</text>
        </g>
        
        <!-- Damage consequences -->
        <text x="300" y="50" font-size="9" fill="#ef4444">• DNA damage</text>
        <text x="300" y="70" font-size="9" fill="#ef4444">• Mutations</text>
        <text x="300" y="90" font-size="9" fill="#ef4444">• Cell death</text>
        <text x="300" y="110" font-size="9" fill="#ef4444">• Cancer</text>
        
        <defs>
          <marker id="arrowHazard" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Why They Are Harmful - Ionisation:</h4>
    <p>High-energy EM waves can <strong>ionise atoms</strong>, meaning they remove electrons from atoms in cells.</p>
    <p>Ionisation can cause:</p>
    <ul>
      <li>Damage to DNA</li>
      <li>Mutations</li>
      <li>Cell death</li>
      <li>Cancer formation</li>
    </ul>
  </div>
  
  <p>This is why protection (e.g., lead screens, sunscreen) is required.</p>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Radiation Dose</h3>
  <div class="definition-block">
    <h4>📏 Definition:</h4>
    <p><strong>Radiation dose</strong> (measured in <strong>sieverts, Sv</strong>) is a measure of the risk of harm from exposure to ionising radiation.</p>
    <p>It tells you how much energy has been absorbed by the body and how likely it is to cause biological damage.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>🧮 Conversion:</h4>
    <p><strong>1000 millisieverts (mSv) = 1 sievert (Sv)</strong></p>
  </div>
  
  <div class="example-block">
    <h4>🧠 Spec Note:</h4>
    <p>Students do NOT need to memorise the unit of radiation dose — it may be given in the exam.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Drawing Conclusions From Data</h3>
  <div class="key-facts-block">
    <h4>📊 Analysing Radiation Data:</h4>
    <p>You may be asked to analyse data about exposure to ionising radiation. You must be able to:</p>
    <ul>
      <li>Identify whether there is a <strong>correlation</strong> (e.g., higher UV exposure → greater skin cancer risk)</li>
      <li>Decide whether the data is <strong>reliable</strong> or if other factors may affect results</li>
      <li>Explain whether the data <strong>supports a conclusion</strong></li>
    </ul>
  </div>
  
  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>If a table shows that people who spend more time in sunlight have higher rates of skin cancer, this shows a <strong>correlation</strong>, but not necessarily a <strong>causal link</strong> because other factors (skin type, genetics, sunscreen use) also affect risk.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Effects of UV, X-rays, and Gamma Rays</h3>
  <div class="key-facts-block">
    <h4>☀️ Ultraviolet Radiation Effects:</h4>
    <ul>
      <li>Can cause <strong>sunburn</strong></li>
      <li>Speeds up <strong>skin ageing</strong></li>
      <li>Increases the risk of <strong>skin cancer</strong></li>
      <li>Can damage <strong>eyes</strong></li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>🩻 X-rays and Gamma Rays Effects:</h4>
    <ul>
      <li>Are <strong>strongly ionising</strong></li>
      <li>Can <strong>mutate genes</strong> or destroy cells</li>
      <li>Used in medicine, but with <strong>controlled exposure</strong></li>
      <li>Long-term or high-dose exposure increases <strong>cancer risk</strong></li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: ["radio waves", "oscillation", "alternating current", "aerial", "atoms", "nucleus", "gamma rays", "ionising radiation", "hazards", "radiation dose", "sieverts", "UV", "X-rays", "cancer"],
      practice_items: [
        {
          id: "em-prop-p1",
          prompt_template: "Explain how radio waves are produced and received.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["oscillating charges", "alternating current", "aerial", "same frequency", "electrons"]
        },
        {
          id: "em-prop-p2",
          prompt_template: "Explain why UV, X-rays and gamma rays can be harmful to human tissue.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["high energy", "high frequency", "ionising", "DNA damage", "mutations", "cancer"]
        }
      ]
    },
    {
      id: "4-6-2-4-uses-em-waves",
      title: "4.6.2.4 – Uses and Applications of EM Waves",
      type: "content",
      study_group: 3,
      content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Why EM Waves Have So Many Uses</h3>
  <div class="definition-block">
    <h4>Core Concept:</h4>
    <p>Electromagnetic waves cover a <strong>huge range of wavelengths and frequencies</strong>, which gives each type of wave very different properties. These differences affect:</p>
    <ul>
      <li>How far they travel</li>
      <li>How easily they pass through materials</li>
      <li>How much energy they carry</li>
      <li>How useful they are in communication, heating, medicine, and industry</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>📚 Spec Requirement:</h4>
    <p>Students must explain <strong>why each type of EM wave is suitable</strong> for its practical application.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Radio Waves</h3>
  
  <!-- Radio Wave Applications Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Radio Wave Applications</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <!-- Earth surface -->
        <path d="M0 150 Q200 130, 400 150" fill="hsl(var(--muted))" stroke="#22c55e" stroke-width="2"/>
        
        <!-- Ionosphere -->
        <path d="M0 40 Q200 20, 400 40" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
        <text x="350" y="30" font-size="9" fill="#8b5cf6">Ionosphere</text>
        
        <!-- Transmitter -->
        <rect x="30" y="130" width="20" height="25" fill="hsl(var(--primary))" rx="2"/>
        <line x1="40" y1="130" x2="40" y2="110" stroke="currentColor" stroke-width="2"/>
        <text x="40" y="170" text-anchor="middle" font-size="8" fill="currentColor">TX</text>
        
        <!-- Radio wave bouncing off ionosphere -->
        <path d="M45 115 Q120 50, 200 40 Q280 50, 360 120" stroke="#f97316" stroke-width="2" fill="none">
          <animate attributeName="stroke-dashoffset" from="0" to="-50" dur="2s" repeatCount="indefinite"/>
        </path>
        
        <!-- Receiver -->
        <rect x="350" y="125" width="20" height="25" fill="#22c55e" rx="2"/>
        <line x1="360" y1="125" x2="360" y2="105" stroke="currentColor" stroke-width="2"/>
        <text x="360" y="165" text-anchor="middle" font-size="8" fill="currentColor">RX</text>
        
        <!-- Ground wave -->
        <path d="M50 140 Q200 135, 350 140" stroke="#3b82f6" stroke-width="2" fill="none"/>
        <text x="200" y="145" text-anchor="middle" font-size="8" fill="#3b82f6">Ground wave</text>
        
        <!-- Legend -->
        <line x1="20" y1="15" x2="40" y2="15" stroke="#f97316" stroke-width="2"/>
        <text x="45" y="18" font-size="8" fill="currentColor">Sky wave (reflects)</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>📻 Applications:</h4>
    <ul>
      <li>Television broadcasting</li>
      <li>AM/FM radio</li>
      <li>Communication over long distances</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Radio Waves Are Suitable:</h4>
    <ul>
      <li>They have <strong>very long wavelengths</strong>, so they spread out and cover large areas → ideal for broadcasting to many receivers</li>
      <li>Some radio waves <strong>reflect off the ionosphere</strong>, allowing signals to travel around the Earth</li>
      <li>They are <strong>not absorbed significantly by the atmosphere</strong>, meaning signals remain strong over long distances</li>
      <li>Their <strong>low energy</strong> makes them safe for everyday communication</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Microwaves</h3>
  
  <!-- Microwave Applications Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Microwave Applications</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <!-- Satellite -->
        <g transform="translate(200, 30)">
          <rect x="-15" y="-10" width="30" height="20" fill="#6366f1" rx="2"/>
          <rect x="-40" y="-5" width="20" height="10" fill="#3b82f6"/>
          <rect x="20" y="-5" width="20" height="10" fill="#3b82f6"/>
          <text x="0" y="35" text-anchor="middle" font-size="8" fill="currentColor">Satellite</text>
        </g>
        
        <!-- Earth station 1 -->
        <g transform="translate(50, 130)">
          <rect x="-10" y="-20" width="20" height="20" fill="hsl(var(--muted))" stroke="currentColor"/>
          <path d="M-15 -25 L0 -40 L15 -25" fill="#22c55e" stroke="currentColor"/>
        </g>
        
        <!-- Earth station 2 -->
        <g transform="translate(350, 130)">
          <rect x="-10" y="-20" width="20" height="20" fill="hsl(var(--muted))" stroke="currentColor"/>
          <path d="M-15 -25 L0 -40 L15 -25" fill="#22c55e" stroke="currentColor"/>
        </g>
        
        <!-- Microwave beams -->
        <line x1="55" y1="95" x2="185" y2="35" stroke="#f97316" stroke-width="2" stroke-dasharray="5,3">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.5s" repeatCount="indefinite"/>
        </line>
        <line x1="215" y1="35" x2="345" y2="95" stroke="#f97316" stroke-width="2" stroke-dasharray="5,3">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="0.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Microwave oven side -->
        <rect x="150" y="100" width="50" height="40" fill="hsl(var(--muted))" stroke="#ef4444" stroke-width="2" rx="4"/>
        <circle cx="175" cy="120" r="12" fill="#facc15" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="175" y="155" text-anchor="middle" font-size="8" fill="currentColor">Microwave oven</text>
        
        <text x="50" y="155" text-anchor="middle" font-size="8" fill="currentColor">Ground station</text>
        <text x="350" y="155" text-anchor="middle" font-size="8" fill="currentColor">Ground station</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>📡 Applications:</h4>
    <ul>
      <li>Satellite communications</li>
      <li>Cooking food</li>
      <li>Wi-Fi and radar</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Microwaves Are Suitable:</h4>
    <ul>
      <li>They can <strong>pass through the atmosphere</strong> with very little absorption → perfect for sending signals to and from satellites</li>
      <li>Microwaves are <strong>absorbed by water molecules</strong>, causing them to vibrate faster, which increases temperature → excellent for cooking food quickly</li>
      <li>Their <strong>shorter wavelength</strong> compared to radio waves allows them to carry high data rates</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Infrared Radiation (IR)</h3>
  
  <!-- Infrared Applications Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Infrared Radiation Applications</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="140" viewBox="0 0 400 140">
        <!-- Electric heater -->
        <g transform="translate(60, 70)">
          <rect x="-30" y="-40" width="60" height="80" fill="hsl(var(--muted))" stroke="#ef4444" stroke-width="2" rx="4"/>
          <line x1="-15" y1="-25" x2="-15" y2="25" stroke="#ef4444" stroke-width="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="0" y1="-25" x2="0" y2="25" stroke="#ef4444" stroke-width="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" begin="0.2s"/>
          </line>
          <line x1="15" y1="-25" x2="15" y2="25" stroke="#ef4444" stroke-width="3">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite" begin="0.4s"/>
          </line>
          <text x="0" y="55" text-anchor="middle" font-size="8" fill="currentColor">Electric heater</text>
        </g>
        
        <!-- Heat waves -->
        <g opacity="0.5">
          <path d="M100 50 Q115 40, 130 50 Q145 60, 160 50" stroke="#ef4444" stroke-width="2" fill="none"/>
          <path d="M100 70 Q115 60, 130 70 Q145 80, 160 70" stroke="#ef4444" stroke-width="2" fill="none"/>
          <path d="M100 90 Q115 80, 130 90 Q145 100, 160 90" stroke="#ef4444" stroke-width="2" fill="none"/>
        </g>
        
        <!-- Thermal camera -->
        <g transform="translate(250, 70)">
          <rect x="-25" y="-20" width="50" height="40" fill="#333" stroke="#22c55e" stroke-width="2" rx="4"/>
          <circle cx="0" cy="0" r="12" fill="#22c55e" opacity="0.3"/>
          <circle cx="0" cy="0" r="6" fill="#22c55e"/>
          <text x="0" y="35" text-anchor="middle" font-size="8" fill="currentColor">Thermal camera</text>
        </g>
        
        <!-- Person (thermal image) -->
        <g transform="translate(340, 70)">
          <ellipse cx="0" cy="-15" rx="10" ry="12" fill="#ef4444" opacity="0.6"/>
          <rect x="-12" y="0" width="24" height="30" fill="#f97316" opacity="0.6" rx="4"/>
          <text x="0" y="50" text-anchor="middle" font-size="8" fill="currentColor">Warm object</text>
        </g>
        
        <path d="M275 70 L320 70" stroke="#22c55e" stroke-width="2" stroke-dasharray="3,2"/>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔥 Applications:</h4>
    <ul>
      <li>Electric heaters</li>
      <li>Cooking appliances (grills)</li>
      <li>Infrared cameras (thermal imaging)</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Infrared Is Suitable:</h4>
    <ul>
      <li>IR is easily <strong>absorbed by surfaces</strong>, transferring energy as heat → ideal for heaters and cooking</li>
      <li>Warm objects <strong>emit more infrared radiation</strong>, so thermal cameras can detect temperature differences even in complete darkness</li>
      <li>Infrared does <strong>not penetrate deeply into the body</strong>, making it safe for external heating</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Visible Light</h3>
  
  <!-- Fibre Optic Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Fibre Optic Communication</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <!-- Fibre optic cable -->
        <rect x="60" y="45" width="280" height="30" fill="hsl(var(--muted))" stroke="#6366f1" stroke-width="2" rx="15"/>
        
        <!-- Core -->
        <rect x="65" y="52" width="270" height="16" fill="#3b82f6" opacity="0.3" rx="8"/>
        
        <!-- Light ray bouncing -->
        <path d="M80 60 L120 52 L160 68 L200 52 L240 68 L280 52 L320 68" stroke="#facc15" stroke-width="2" fill="none">
          <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="0.5s" repeatCount="indefinite"/>
        </path>
        
        <!-- Light source -->
        <circle cx="40" cy="60" r="15" fill="#facc15" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="r" values="13;17;13" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="40" y="90" text-anchor="middle" font-size="8" fill="currentColor">Light source</text>
        
        <!-- Detector -->
        <rect x="345" y="50" width="20" height="20" fill="#22c55e" stroke="#16a34a" stroke-width="2" rx="2"/>
        <text x="355" y="90" text-anchor="middle" font-size="8" fill="currentColor">Detector</text>
        
        <!-- Label -->
        <text x="200" y="30" text-anchor="middle" font-size="9" fill="#6366f1" font-weight="bold">Total Internal Reflection</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Light bounces repeatedly inside the fibre with almost no energy loss</p>
  </div>
  
  <div class="key-facts-block">
    <h4>💡 Applications:</h4>
    <ul>
      <li>Fibre-optic communications</li>
      <li>Endoscopes (medical imaging)</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Visible Light Is Suitable:</h4>
    <ul>
      <li><strong>Total internal reflection</strong> allows visible light to bounce repeatedly along optical fibres with almost no energy loss</li>
      <li>Visible light can carry <strong>large amounts of data at high speed</strong> → useful for internet cables, endoscopes, and medical imaging</li>
      <li>It is <strong>not easily absorbed by the fibre</strong>, allowing signals to travel long distances</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Ultraviolet (UV)</h3>
  <div class="key-facts-block">
    <h4>☀️ Applications:</h4>
    <ul>
      <li>Energy-efficient lamps</li>
      <li>Sun tanning</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Ultraviolet Is Suitable:</h4>
    <ul>
      <li>UV rays cause <strong>fluorescent materials to emit visible light</strong>, so energy-efficient lamps use UV inside the bulb which is converted into bright visible light by a coating</li>
      <li>UV has enough energy to cause <strong>chemical reactions in skin</strong>, producing melanin → tanning</li>
      <li>Its <strong>higher energy</strong> compared to visible light allows it to drive reactions that visible light cannot</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – X-rays and Gamma Rays</h3>
  
  <!-- X-ray Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Medical Applications</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="140" viewBox="0 0 400 140">
        <!-- X-ray machine -->
        <rect x="30" y="30" width="40" height="60" fill="#6366f1" stroke="#4f46e5" stroke-width="2" rx="4"/>
        <circle cx="50" cy="60" r="12" fill="#facc15">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="0.5s" repeatCount="indefinite"/>
        </circle>
        <text x="50" y="105" text-anchor="middle" font-size="8" fill="currentColor">X-ray source</text>
        
        <!-- X-rays -->
        <g>
          <line x1="75" y1="50" x2="150" y2="50" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
          <line x1="75" y1="60" x2="150" y2="60" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
          <line x1="75" y1="70" x2="150" y2="70" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
        </g>
        
        <!-- Body/hand with bone -->
        <g transform="translate(180, 60)">
          <ellipse cx="0" cy="0" rx="25" ry="40" fill="#fecaca" stroke="#fca5a5"/>
          <rect x="-8" y="-30" width="16" height="60" fill="white" stroke="#d4d4d4" rx="3"/>
          <text x="0" y="55" text-anchor="middle" font-size="8" fill="currentColor">Body</text>
        </g>
        
        <!-- Some X-rays pass through -->
        <g>
          <line x1="205" y1="50" x2="280" y2="50" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="5,3" opacity="0.3"/>
          <line x1="205" y1="60" x2="280" y2="60" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="5,3"/>
          <line x1="205" y1="70" x2="280" y2="70" stroke="#8b5cf6" stroke-width="1" stroke-dasharray="5,3" opacity="0.3"/>
        </g>
        
        <!-- Detector/film -->
        <rect x="290" y="20" width="15" height="80" fill="#333" stroke="#666" stroke-width="2"/>
        <rect x="295" y="40" width="5" height="40" fill="white"/>
        <text x="297" y="115" text-anchor="middle" font-size="8" fill="currentColor">Image</text>
        
        <!-- Result -->
        <rect x="330" y="30" width="50" height="60" fill="#1f2937" stroke="#374151" stroke-width="2" rx="2"/>
        <rect x="340" y="45" width="10" height="30" fill="white"/>
        <text x="355" y="105" text-anchor="middle" font-size="8" fill="currentColor">X-ray image</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">X-rays pass through soft tissue but are absorbed by bone</p>
  </div>
  
  <div class="key-facts-block">
    <h4>🩻 Applications:</h4>
    <ul>
      <li>Medical imaging (X-rays)</li>
      <li>Cancer treatment (gamma rays)</li>
      <li>Sterilising medical equipment (gamma rays)</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why X-Rays Are Suitable:</h4>
    <ul>
      <li>X-rays <strong>penetrate soft tissue but are absorbed by bone</strong>, producing clear images of internal structures</li>
      <li>Their <strong>short wavelength</strong> allows them to carry energy that can pass through the body without being fully absorbed</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Gamma Rays Are Suitable:</h4>
    <ul>
      <li>Gamma rays are <strong>highly penetrating and ionising</strong>, meaning they can kill cancer cells by damaging DNA</li>
      <li>They can be directed in <strong>narrow beams to target tumours</strong> while minimising damage to surrounding healthy tissue</li>
      <li>Gamma rays also <strong>sterilise medical equipment</strong> by destroying microbes</li>
    </ul>
  </div>
</div>
      `,
      canonical_keywords: ["radio waves", "broadcasting", "ionosphere", "microwaves", "satellite", "water molecules", "infrared", "thermal imaging", "visible light", "fibre optic", "total internal reflection", "UV", "fluorescent", "X-rays", "gamma rays", "medical imaging", "cancer treatment"],
      practice_items: [
        {
          id: "em-uses-p1",
          prompt_template: "Explain why radio waves are suitable for broadcasting over long distances.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["long wavelength", "ionosphere", "reflect", "not absorbed", "atmosphere", "low energy", "safe"]
        },
        {
          id: "em-uses-p2",
          prompt_template: "Explain how microwaves are used for satellite communication and cooking food.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["pass through atmosphere", "satellite", "absorbed by water", "vibrate", "heat"]
        },
        {
          id: "em-uses-p3",
          prompt_template: "Describe how X-rays are used to produce medical images and explain why they are suitable.",
          marks: 4,
          type: "short-answer",
          difficulty: "medium",
          randomise: true,
          expected_keywords: ["penetrate soft tissue", "absorbed by bone", "short wavelength", "internal structures", "imaging"]
        }
      ]
    }
  ]
};
