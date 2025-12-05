// GCSE AQA Physics - 8 Base Topics with Module Structure
// Forces chapter includes detailed modules from forcesModuleData and energyModuleData

import { forcesModuleData, ForcesModule } from './forcesModuleData';
import { energyModuleData, EnergyModule } from './energyModuleData';
import { energyTransfersModuleData, EnergyTransfersModule } from './energyTransfersModuleData';
import { motionModuleData, MotionModule } from './motionModuleData';
import { emWavesModuleData, EMWavesModule } from './emWavesModuleData';
import { infraredPracticalData } from './infraredPracticalData';
import { opticsModuleData, OpticsModule } from './opticsModuleData';

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

export interface TopicSection {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
  modules?: Module[];
}

// Convert ForcesModule to Module type
const forcesModule: Module = {
  id: forcesModuleData.id,
  title: forcesModuleData.title,
  status: forcesModuleData.status,
  subsections: forcesModuleData.subsections as Subsection[]
};

// Convert EnergyModule to Module type
const energyModule: Module = {
  id: energyModuleData.id,
  title: energyModuleData.title,
  status: energyModuleData.status,
  subsections: energyModuleData.subsections as Subsection[]
};

// Convert EnergyTransfersModule to Module type
const energyTransfersModule: Module = {
  id: energyTransfersModuleData.id,
  title: energyTransfersModuleData.title,
  status: energyTransfersModuleData.status,
  subsections: energyTransfersModuleData.subsections as Subsection[]
};

// Convert MotionModule to Module type
const motionModule: Module = {
  id: motionModuleData.id,
  title: motionModuleData.title,
  status: motionModuleData.status,
  subsections: motionModuleData.subsections as Subsection[]
};

// Convert EMWavesModule to Module type
const emWavesModule: Module = {
  id: emWavesModuleData.id,
  title: emWavesModuleData.title,
  status: emWavesModuleData.status,
  subsections: emWavesModuleData.subsections as Subsection[]
};

// Convert OpticsModule subsections to Subsection array
const getOpticsSubsectionsArray = (): Subsection[] => {
  return opticsModuleData.subsections.map(sub => ({
    id: sub.id,
    title: sub.title,
    type: sub.type,
    content_html: sub.content_html,
    canonical_keywords: sub.canonical_keywords,
    practice_items: sub.practice_items as PracticeItem[],
    study_group: sub.study_group
  }));
};

// Convert OpticsModule to Module type
const opticsModule: Module = {
  id: opticsModuleData.id,
  title: opticsModuleData.title,
  status: opticsModuleData.status,
  subsections: getOpticsSubsectionsArray()
};

// Convert infrared practical to Subsection
const infraredSubsection: Subsection = {
  id: infraredPracticalData.id,
  title: infraredPracticalData.title,
  type: infraredPracticalData.type,
  content_html: infraredPracticalData.content_html,
  canonical_keywords: infraredPracticalData.canonical_keywords,
  practice_items: infraredPracticalData.practice_items as PracticeItem[],
  study_group: infraredPracticalData.study_group
};

export const physicsData: TopicSection[] = [
  {
    id: "energy",
    title: "Energy",
    status: "ready",
    subsections: [],
    modules: [energyTransfersModule]
  },
  {
    id: "electricity",
    title: "Electricity",
    status: "coming_soon",
    subsections: [
      {
        id: "4-2-1-current-vpd-resistance",
        title: "4.2.1 Current, Potential Difference and Resistance",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Ideas</h3>
  <ul>
    <li>Current (I) is the rate of flow of charge. Unit: ampere (A)</li>
    <li>Potential difference (V) is energy transferred per unit charge. Unit: volt (V)</li>
    <li>Resistance (R) opposes current. Ohm's law: V = I R</li>
  </ul>
</div>
        `,
        canonical_keywords:["current","charge","potential difference","voltage","resistance","Ohm's law","V=IR"],
        practice_items:[
          { id:"p1", prompt_template:"Define current and potential difference, including their units.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["current","rate of flow of charge","ampere","potential difference","energy per charge","volt"]},
          { id:"p2", prompt_template:"A component has resistance 20 Ω and current 0.4 A. Calculate the potential difference across it.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["V=IR","8 V"]}
        ]
      },
      {
        id: "4-2-2-series-parallel",
        title: "4.2.2 Series and Parallel Circuits",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Rules</h3>
  <ul>
    <li>Series: current same everywhere; potential differences add; total R = R1 + R2 …</li>
    <li>Parallel: potential difference same across branches; currents add; 1/R_total = 1/R1 + 1/R2 …</li>
  </ul>
</div>
        `,
        canonical_keywords:["series","parallel","current","potential difference","resistance","circuit rules"],
        practice_items:[
          { id:"p3", prompt_template:"In a series circuit, how do current and potential difference behave?", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["current same","potential differences add"]},
          { id:"p4", prompt_template:"Two 6 Ω resistors in parallel give what total resistance?", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["3 Ω","parallel formula"]}
        ]
      }
    ]
  },
  {
    id: "particle-model",
    title: "Particle Model of Matter",
    status: "coming_soon",
    subsections: [
      {
        id: "4-3-1-density",
        title: "4.3.1 Density of Materials",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Density</h3>
  <p>Density ρ = m / V. Typical units kg/m³. Measure mass with a balance and volume by geometry or displacement.</p>
</div>
        `,
        canonical_keywords:["density","rho","mass","volume","kg/m^3","displacement"],
        practice_items:[
          { id:"p1", prompt_template:"A block has mass 0.8 kg and volume 4×10^-4 m³. Calculate its density.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["ρ=m/V","2000 kg/m^3"]}
        ]
      },
      {
        id: "4-3-2-changes-of-state-internal-energy",
        title: "4.3.2 Changes of State and Internal Energy",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Internal Energy</h3>
  <p>Internal energy is the sum of the kinetic and potential energies of particles. Heating changes temperature or state.</p>
  <p>Specific latent heat L: energy to change state of 1 kg without temperature change.</p>
</div>
        `,
        canonical_keywords:["internal energy","specific latent heat","change of state","temperature","particle model"],
        practice_items:[
          { id:"p2", prompt_template:"Explain what is meant by specific latent heat.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["energy","1 kg","change of state","no temperature change"]}
        ]
      }
    ]
  },
  {
    id: "atomic-structure",
    title: "Atomic Structure",
    status: "coming_soon",
    subsections: [
      {
        id: "4-4-1-atom-and-isotopes",
        title: "4.4.1 Atoms and Isotopes",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Structure</h3>
  <p>Atoms have a nucleus of protons and neutrons with electrons in shells. Isotopes are atoms of the same element with different numbers of neutrons.</p>
</div>
        `,
        canonical_keywords:["proton","neutron","electron","nucleus","isotopes"],
        practice_items:[
          { id:"p1", prompt_template:"Define an isotope and give one example.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["same element","different neutrons","example"]}
        ]
      },
      {
        id: "4-4-2-radioactivity-half-life",
        title: "4.4.2 Radioactive Decay and Half-life",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Ideas</h3>
  <p>Alpha, beta and gamma radiation; random and spontaneous decay; half-life is the time for activity to halve.</p>
</div>
        `,
        canonical_keywords:["alpha","beta","gamma","radioactive","decay","half-life","activity"],
        practice_items:[
          { id:"p2", prompt_template:"Explain what is meant by the half-life of a radioactive isotope.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["time","activity halves","nuclei","decay"]}
        ]
      }
    ]
  },
  {
    id: "forces",
    title: "Forces",
    status: "ready",
    subsections: [], // No direct subsections - all content is in modules
    modules: [forcesModule, energyModule, motionModule]
  },
{
    id: "waves",
    title: "Waves",
    status: "ready",
    modules: [
      {
        id: "waves-module-1",
        title: "Module 1: Wave Properties & Behaviour",
        status: "ready",
        subsections: [
          {
            id: "4-6-1-1-transverse-longitudinal",
            title: "4.6.1.1 – Transverse and Longitudinal Waves",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Waves Transfer Energy</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>Waves transfer <strong>energy</strong> from one place to another <strong>without transferring matter</strong>.</p>
    <p>There are two types of mechanical wave motion:</p>
    <ul>
      <li>Transverse waves</li>
      <li>Longitudinal waves</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Transverse Waves</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>In a transverse wave, the vibrations of particles are <strong>perpendicular (at right angles)</strong> to the direction that the wave travels.</p>
  </div>
  <div class="key-facts-block">
    <h4>Key Features:</h4>
    <ul>
      <li>Wave moves horizontally, particles move up and down</li>
      <li>Produces crests (peaks) and troughs</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>Example:</h4>
    <p>Ripples on a water surface are transverse waves.</p>
  </div>
  
  <!-- Animated Transverse Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Transverse Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <path d="M20 90 Q55 30, 90 90 T160 90 T230 90 T300 90 T370 90" fill="none" stroke="#3b82f6" stroke-width="3" class="anim-wave"/>
        <text x="55" y="25" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Crest</text>
        <line x1="55" y1="30" x2="55" y2="50" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
        <text x="125" y="165" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Trough</text>
        <line x1="125" y1="130" x2="125" y2="155" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2"/>
        <line x1="55" y1="50" x2="55" y2="90" stroke="#f59e0b" stroke-width="2"/>
        <text x="78" y="75" fill="#f59e0b" font-size="10" font-weight="bold">A</text>
        <line x1="55" y1="105" x2="195" y2="105" stroke="#ec4899" stroke-width="2"/>
        <text x="125" y="120" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Wavelength</text>
        <line x1="20" y1="90" x2="380" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        <path d="M310 60 L350 60" stroke="currentColor" stroke-width="2" marker-end="url(#arrowWaveT)"/>
        <text x="330" y="50" fill="currentColor" font-size="9" text-anchor="middle">Wave direction</text>
        <line x1="20" y1="50" x2="20" y2="130" stroke="#6366f1" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="35" y="145" fill="#6366f1" font-size="8">Particle motion</text>
        <defs>
          <marker id="arrowWaveT" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles vibrate <strong>perpendicular</strong> to wave direction</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Particle motion</td><td>Perpendicular to wave direction</td></tr>
      <tr><td>Wave shape</td><td>Peaks and troughs</td></tr>
      <tr><td>Examples</td><td>Water ripples, light waves, S-waves</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Longitudinal Waves</h3>
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>In a longitudinal wave, the oscillations are <strong>parallel</strong> to the direction the wave travels.</p>
  </div>
  <div class="key-facts-block">
    <h4>Key Features:</h4>
    <ul>
      <li><strong>Compressions</strong> - particles close together</li>
      <li><strong>Rarefactions</strong> - particles spread apart</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>Example:</h4>
    <p>Sound waves in air are longitudinal.</p>
  </div>
  
  <!-- Animated Longitudinal Wave -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Longitudinal Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <g class="anim-oscillate-x">
          <circle cx="40" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="54" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="68" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="82" cy="80" r="6" fill="#3b82f6"/>
        </g>
        <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
          <circle cx="110" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="145" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="180" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
        </g>
        <g class="anim-oscillate-x">
          <circle cx="210" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="224" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="238" cy="80" r="6" fill="#3b82f6"/>
          <circle cx="252" cy="80" r="6" fill="#3b82f6"/>
        </g>
        <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
          <circle cx="280" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="315" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          <circle cx="350" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
        </g>
        <text x="61" y="45" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Compression</text>
        <text x="145" y="120" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Rarefaction</text>
        <line x1="40" y1="20" x2="210" y2="20" stroke="#ec4899" stroke-width="2"/>
        <text x="125" y="14" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Wavelength</text>
        <path d="M360 50 L385 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowLongT)"/>
        <text x="372" y="42" fill="currentColor" font-size="8" text-anchor="middle">Wave</text>
        <path d="M360 105 L385 105" stroke="#6366f1" stroke-width="2"/>
        <text x="372" y="145" fill="#6366f1" font-size="8" text-anchor="middle">Particle</text>
        <defs>
          <marker id="arrowLongT" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles vibrate <strong>parallel</strong> to wave direction</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Particle motion</td><td>Parallel to wave direction</td></tr>
      <tr><td>Wave shape</td><td>Compressions and rarefactions</td></tr>
      <tr><td>Examples</td><td>Sound waves, P-waves, slinky</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Comparison Table</h3>
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Feature</th><th>Transverse</th><th>Longitudinal</th></tr></thead>
    <tbody>
      <tr><td>Direction of oscillations</td><td>Perpendicular to travel</td><td>Parallel to travel</td></tr>
      <tr><td>Appearance</td><td>Peaks + troughs</td><td>Compressions + rarefactions</td></tr>
      <tr><td>Travels through</td><td>Solids, liquid surfaces</td><td>Solids, liquids, gases</td></tr>
      <tr><td>Example</td><td>Water ripples</td><td>Sound waves</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Evidence Waves Transfer Energy Not Matter</h3>
  <div class="key-facts-block">
    <h4>Water Surface Evidence:</h4>
    <ul>
      <li>Float a cork on water</li>
      <li>When waves pass, cork moves up and down only</li>
      <li>Cork does NOT travel with the wave</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>Sound in Air Evidence:</h4>
    <ul>
      <li>When someone speaks, air molecules do not flow across the room</li>
      <li>Regions of high and low pressure move through the air</li>
      <li>Energy travels, not matter</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["waves", "energy transfer", "transverse", "longitudinal", "compression", "rarefaction", "perpendicular", "parallel"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Define what a wave is and explain what waves transfer.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["wave", "transfer", "energy", "not matter"]
              },
              {
                id: "p2",
                prompt_template: "Explain the difference between transverse and longitudinal waves.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["transverse", "longitudinal", "perpendicular", "parallel", "compression", "rarefaction"]
              }
            ]
          },
          {
            id: "4-6-1-2-wave-properties",
            title: "4.6.1.2 – Properties of Waves",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Wave Properties</h3>
  <div class="definition-block">
    <h4>Amplitude (A):</h4>
    <p>Maximum displacement from rest position. Measured in metres (m).</p>
  </div>
  <div class="definition-block">
    <h4>Wavelength (λ):</h4>
    <p>Distance between repeating points (crest to crest). Measured in metres (m).</p>
  </div>
  <div class="definition-block">
    <h4>Frequency (f):</h4>
    <p>Number of complete waves per second. Measured in hertz (Hz).</p>
  </div>
  <div class="definition-block">
    <h4>Period (T):</h4>
    <p>Time for one complete wave. T = 1/f</p>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Wave Properties Diagram</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="200" viewBox="0 0 420 200">
        <line x1="40" y1="100" x2="400" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        <path d="M40 100 Q70 40, 100 100 T160 100 T220 100 T280 100 T340 100 T400 100" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <line x1="70" y1="40" x2="70" y2="100" stroke="#f59e0b" stroke-width="3"/>
        <text x="108" y="74" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">Amplitude</text>
        <line x1="100" y1="175" x2="220" y2="175" stroke="#ec4899" stroke-width="3"/>
        <text x="160" y="167" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">Wavelength (λ)</text>
        <text x="70" y="28" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Crest</text>
        <text x="130" y="180" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Trough</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Quantity</th><th>Symbol</th><th>Unit</th></tr></thead>
    <tbody>
      <tr><td>Amplitude</td><td>A</td><td>m</td></tr>
      <tr><td>Wavelength</td><td>λ</td><td>m</td></tr>
      <tr><td>Frequency</td><td>f</td><td>Hz</td></tr>
      <tr><td>Period</td><td>T</td><td>s</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Wave Speed Equation</h3>
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Wave Equation:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">v = f × λ</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Wave speed (m/s) = Frequency (Hz) × Wavelength (m)</p>
  </div>
  <div class="key-facts-block">
    <h4>Key Relationships:</h4>
    <ul>
      <li>If frequency increases and wavelength stays constant → wave speed increases</li>
      <li>If wavelength decreases and frequency stays constant → wave speed decreases</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Measuring Speed of Sound</h3>
  <div class="key-facts-block">
    <h4>Method:</h4>
    <ol>
      <li>Two students stand 30-50 m apart</li>
      <li>Student A claps wooden blocks together</li>
      <li>Student B times from seeing clap to hearing sound</li>
      <li>Repeat and average</li>
      <li>Calculate: v = d/t</li>
    </ol>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Speed of Sound Experiment</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <circle cx="60" cy="50" r="15" fill="#3b82f6"/>
        <text x="60" y="55" fill="white" font-size="10" text-anchor="middle">A</text>
        <text x="60" y="85" fill="currentColor" font-size="9" text-anchor="middle">Clapper</text>
        <circle cx="340" cy="50" r="15" fill="#22c55e"/>
        <text x="340" y="55" fill="white" font-size="10" text-anchor="middle">B</text>
        <text x="340" y="85" fill="currentColor" font-size="9" text-anchor="middle">Timer</text>
        <line x1="85" y1="50" x2="315" y2="50" stroke="#ec4899" stroke-width="2"/>
        <text x="200" y="42" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">30-50 m</text>
        <text x="200" y="110" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">v = d / t</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Required Practical: Ripple Tank</h3>
  <div class="key-facts-block">
    <h4>Equipment:</h4>
    <ul>
      <li>Ripple tank with water</li>
      <li>Oscillating bar/motor</li>
      <li>Lamp above tank</li>
      <li>Screen/paper beneath</li>
      <li>Ruler and stopwatch</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Ripple Tank Setup</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <ellipse cx="190" cy="20" rx="30" ry="10" fill="#fbbf24"/>
        <text x="190" y="10" fill="currentColor" font-size="9" text-anchor="middle">Lamp</text>
        <rect x="80" y="60" width="220" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="5"/>
        <path d="M90 100 Q110 85, 130 100 T170 100 T210 100 T250 100 T290 100" fill="none" stroke="#3b82f6" stroke-width="2" class="anim-wave"/>
        <rect x="90" y="65" width="200" height="8" fill="#6366f1" rx="2"/>
        <text x="190" y="62" fill="#6366f1" font-size="8" text-anchor="middle">Vibrating bar</text>
        <rect x="80" y="160" width="220" height="25" fill="hsl(var(--muted))" stroke="currentColor" stroke-width="1" rx="3"/>
        <text x="190" y="177" fill="currentColor" font-size="9" text-anchor="middle">Screen showing wave shadows</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Method - Measuring Wavelength:</h4>
    <ol>
      <li>Turn on lamp to see wave shadows on screen</li>
      <li>Identify at least 5 consecutive peaks</li>
      <li>Measure total distance</li>
      <li>Divide by number of wavelengths</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>Calculating Wave Speed:</h4>
    <p>Once λ and f are known: <strong>v = f × λ</strong></p>
  </div>
</div>
            `,
            canonical_keywords: ["amplitude", "wavelength", "frequency", "period", "wave speed", "v=fλ", "ripple tank"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "A wave has frequency 50 Hz and wavelength 2 m. Calculate the wave speed.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["v=fλ", "100 m/s"]
              },
              {
                id: "p2",
                prompt_template: "Define amplitude and wavelength.",
                marks: 4,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["amplitude", "maximum displacement", "wavelength", "distance", "crest"]
              }
            ]
          },
          {
            id: "4-6-1-3-reflection-waves",
            title: "4.6.1.3 – Reflection of Waves",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Waves at Boundaries</h3>
  <div class="definition-block">
    <h4>What happens at boundaries:</h4>
    <ul>
      <li><strong>Reflection:</strong> Wave bounces back into original medium</li>
      <li><strong>Transmission:</strong> Wave passes through to new medium</li>
      <li><strong>Absorption:</strong> Energy absorbed by material (becomes heat)</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Wave Behaviour at Boundaries</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <line x1="200" y1="20" x2="200" y2="160" stroke="currentColor" stroke-width="3"/>
        <text x="200" y="175" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Boundary</text>
        <text x="100" y="30" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">Medium 1</text>
        <text x="300" y="30" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Medium 2</text>
        <line x1="60" y1="60" x2="200" y2="90" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="55" fill="#3b82f6" font-size="9">Incident</text>
        <line x1="200" y1="90" x2="60" y2="120" stroke="#ef4444" stroke-width="2"/>
        <text x="100" y="140" fill="#ef4444" font-size="9">Reflected</text>
        <line x1="200" y1="90" x2="340" y2="120" stroke="#22c55e" stroke-width="2"/>
        <text x="300" y="110" fill="#22c55e" font-size="9">Transmitted</text>
        <circle cx="200" cy="90" r="8" fill="#f59e0b" opacity="0.5" class="anim-pulse"/>
        <text x="215" y="80" fill="#f59e0b" font-size="8">Absorbed</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Law of Reflection</h3>
  <div class="definition-block">
    <h4>Key Terms:</h4>
    <ul>
      <li><strong>Incident ray:</strong> ray that hits the boundary</li>
      <li><strong>Reflected ray:</strong> ray that bounces off</li>
      <li><strong>Normal:</strong> line at 90 degrees to the boundary</li>
      <li><strong>Angle of incidence (i):</strong> angle between incident ray and normal</li>
      <li><strong>Angle of reflection (r):</strong> angle between reflected ray and normal</li>
    </ul>
  </div>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Law of Reflection:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">Angle i = Angle r</p>
    <p style="font-size: 0.9rem;">Angle of incidence = Angle of reflection</p>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Ray Diagram for Reflection</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <line x1="60" y1="140" x2="320" y2="140" stroke="currentColor" stroke-width="4"/>
        <text x="340" y="145" fill="currentColor" font-size="9">Mirror</text>
        <line x1="190" y1="40" x2="190" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="205" y="50" fill="currentColor" font-size="9">Normal</text>
        <line x1="80" y1="50" x2="190" y2="140" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="70" fill="#3b82f6" font-size="10" font-weight="bold">Incident ray</text>
        <line x1="190" y1="140" x2="300" y2="50" stroke="#ef4444" stroke-width="2"/>
        <text x="270" y="70" fill="#ef4444" font-size="10" font-weight="bold">Reflected ray</text>
        <path d="M190 100 A40 40 0 0 0 155 125" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="155" y="95" fill="#3b82f6" font-size="11" font-weight="bold">i</text>
        <path d="M190 100 A40 40 0 0 1 225 125" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="225" y="95" fill="#ef4444" font-size="11" font-weight="bold">r</text>
        <rect x="130" y="170" width="120" height="25" fill="hsl(var(--primary)/0.2)" rx="5"/>
        <text x="190" y="187" fill="hsl(var(--primary))" font-size="12" text-anchor="middle" font-weight="bold">i = r</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Required Practical: Reflection</h3>
  <div class="key-facts-block">
    <h4>Aim:</h4>
    <p>Investigate the law of reflection using ray boxes and plane mirrors.</p>
  </div>
  <div class="key-facts-block">
    <h4>Method:</h4>
    <ol>
      <li>Place mirror on paper and draw around it</li>
      <li>Draw a normal at 90 degrees to mirror surface</li>
      <li>Shine a ray from ray box onto mirror at an angle</li>
      <li>Mark incident and reflected rays</li>
      <li>Measure angles with protractor</li>
      <li>Repeat for several angles</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>Expected Result:</h4>
    <p><strong>Angle i = Angle r</strong> - confirms the law of reflection.</p>
  </div>
</div>
            `,
            canonical_keywords: ["reflection", "transmission", "absorption", "boundary", "incident ray", "reflected ray", "normal", "angle of incidence", "angle of reflection"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "State the law of reflection.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["angle of incidence", "angle of reflection", "equal"]
              }
            ]
          },
          {
            id: "4-6-1-4-sound-waves",
            title: "4.6.1.4 – Sound Waves",
            type: "content",
            study_group: 2,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – How Sound Waves Travel</h3>
  <div class="definition-block">
    <h4>Sound Waves:</h4>
    <p>Sound waves are <strong>longitudinal</strong> waves consisting of:</p>
    <ul>
      <li><strong>Compressions</strong> (high pressure)</li>
      <li><strong>Rarefactions</strong> (low pressure)</li>
    </ul>
    <p>They <strong>cannot travel in a vacuum</strong> - they need particles to vibrate.</p>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Speed of Sound in Different Media</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <rect x="30" y="30" width="100" height="30" fill="#3b82f6" rx="3"/>
        <text x="80" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">SOLID</text>
        <text x="80" y="80" fill="#3b82f6" font-size="9" text-anchor="middle">Fastest ~5000 m/s</text>
        <rect x="150" y="30" width="100" height="30" fill="#22c55e" rx="3"/>
        <text x="200" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">LIQUID</text>
        <text x="200" y="80" fill="#22c55e" font-size="9" text-anchor="middle">Medium ~1500 m/s</text>
        <rect x="270" y="30" width="100" height="30" fill="#f59e0b" rx="3"/>
        <text x="320" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">GAS</text>
        <text x="320" y="80" fill="#f59e0b" font-size="9" text-anchor="middle">Slowest ~340 m/s</text>
        <text x="80" y="105" fill="currentColor" font-size="8" text-anchor="middle">Particles close</text>
        <text x="200" y="105" fill="currentColor" font-size="8" text-anchor="middle">Moderate</text>
        <text x="320" y="105" fill="currentColor" font-size="8" text-anchor="middle">Far apart</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Medium</th><th>Speed</th><th>Reason</th></tr></thead>
    <tbody>
      <tr><td>Solids</td><td>Fastest</td><td>Vibrations transfer quickly</td></tr>
      <tr><td>Liquids</td><td>Medium</td><td>Less rigid but connected</td></tr>
      <tr><td>Gases</td><td>Slowest</td><td>Fewer particle collisions</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Human Hearing Range</h3>
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Human Hearing Range:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">20 Hz - 20 kHz</p>
    <p style="font-size: 0.9rem;">Children and teenagers have widest range; reduces with age.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>Why Limited Frequency Range?</h4>
    <ul>
      <li>Ear structures cannot vibrate at all frequencies</li>
      <li>High frequencies (above 20 kHz) - vibrations too fast for hair cells</li>
      <li>Low frequencies (below 20 Hz) - cause little ear movement</li>
    </ul>
  </div>
  
  <div class="example-block">
    <h4>Other Animals:</h4>
    <ul>
      <li>Dogs: up to 45 kHz</li>
      <li>Bats: up to 100 kHz</li>
      <li>Elephants: use infrasound (below 20 Hz)</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["sound waves", "longitudinal", "compression", "rarefaction", "hearing range", "20 Hz", "20 kHz"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain why sound cannot travel through a vacuum.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["vacuum", "no particles", "vibrate", "longitudinal"]
              },
              {
                id: "p2",
                prompt_template: "State the human hearing range.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["20 Hz", "20 kHz"]
              }
            ]
          },
          {
            id: "4-6-1-5-detection-exploration",
            title: "4.6.1.5 – Waves for Detection and Exploration",
            type: "content",
            study_group: 3,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Ultrasound Waves</h3>
  <div class="definition-block">
    <h4>Ultrasound:</h4>
    <ul>
      <li>Frequency <strong>above 20 kHz</strong> (higher than human hearing)</li>
      <li>Partially reflected at boundaries between different media</li>
      <li>Safe - no ionising radiation</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>How Ultrasound Imaging Works:</h4>
    <ol>
      <li>Ultrasound pulse transmitted into body/object</li>
      <li>Part of wave reflects at boundaries</li>
      <li>Detector measures time for reflections to return</li>
      <li>Calculate: <strong>distance = (speed × time) ÷ 2</strong></li>
    </ol>
    <p><em>(Divide by 2 because wave travels there AND back)</em></p>
  </div>
  
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Ultrasound Imaging (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="180" viewBox="0 0 380 180">
        <rect x="30" y="60" width="40" height="80" fill="#6366f1" rx="5"/>
        <text x="50" y="110" fill="white" font-size="8" text-anchor="middle">Probe</text>
        <rect x="80" y="40" width="200" height="120" fill="hsl(var(--muted))" rx="10" stroke="currentColor" stroke-width="1"/>
        <text x="180" y="55" fill="currentColor" font-size="9" text-anchor="middle">Body Tissue</text>
        <ellipse cx="200" cy="100" rx="40" ry="35" fill="#ec4899" opacity="0.6"/>
        <text x="200" y="105" fill="white" font-size="9" text-anchor="middle">Organ</text>
        <g class="anim-flow-right">
          <line x1="75" y1="85" x2="155" y2="85" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="155" cy="85" r="4" fill="#3b82f6"/>
        </g>
        <g class="anim-flow-left" style="animation-delay: 0.5s;">
          <line x1="155" y1="115" x2="75" y2="115" stroke="#ef4444" stroke-width="2"/>
          <circle cx="75" cy="115" r="4" fill="#ef4444"/>
        </g>
        <text x="115" y="78" fill="#3b82f6" font-size="8">Transmitted</text>
        <text x="115" y="130" fill="#ef4444" font-size="8">Reflected</text>
        <rect x="300" y="50" width="70" height="80" fill="#1e1e1e" stroke="currentColor" stroke-width="2" rx="5"/>
        <ellipse cx="335" cy="90" rx="20" ry="15" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="335" y="145" fill="currentColor" font-size="8" text-anchor="middle">Image formed</text>
        <text x="335" y="165" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">d = (v × t) ÷ 2</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Uses of Ultrasound:</h4>
    <p><strong>Medical:</strong> prenatal scans, organ imaging, blood flow monitoring</p>
    <p><strong>Industrial:</strong> detecting cracks in metals, pipeline thickness</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Seismic Waves</h3>
  <div class="definition-block">
    <h4>Seismic Waves:</h4>
    <p>Produced by earthquakes. Allow exploration of Earth's structure.</p>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Type</th><th>Nature</th><th>Travels Through</th><th>Speed</th></tr></thead>
    <tbody>
      <tr><td>P-waves</td><td>Longitudinal</td><td>Solids and liquids</td><td>Fast (arrive first)</td></tr>
      <tr><td>S-waves</td><td>Transverse</td><td>Only solids</td><td>Slower</td></tr>
    </tbody>
  </table>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>P-waves vs S-waves Through Earth</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <circle cx="190" cy="100" r="90" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="190" cy="100" r="20" fill="#f59e0b"/>
        <text x="190" y="103" fill="white" font-size="7" text-anchor="middle">Inner core</text>
        <circle cx="190" cy="100" r="45" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="190" y="62" fill="#ef4444" font-size="8" text-anchor="middle">Liquid outer core</text>
        <circle cx="100" cy="50" r="8" fill="#ec4899" class="anim-pulse"/>
        <text x="100" y="35" fill="#ec4899" font-size="8" text-anchor="middle">Earthquake</text>
        <path d="M108 55 Q190 100, 272 55" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <path d="M108 55 Q190 150, 272 145" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="310" y="50" fill="#3b82f6" font-size="9">P-waves (through)</text>
        <path d="M108 55 Q150 100, 145 100" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="145" y="120" fill="#ef4444" font-size="8">S-waves BLOCKED</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Why S-waves Cannot Travel Through Liquids:</h4>
    <ul>
      <li>Liquids do not support shear vibrations</li>
      <li>Transverse waves need rigid material</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>What This Tells Us:</h4>
    <ul>
      <li>S-waves do NOT appear on opposite side of Earth → outer core is liquid</li>
      <li>P-waves refract through layers → reveals density boundaries</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Echo Sounding (Sonar)</h3>
  <div class="definition-block">
    <h4>Echo Sounding:</h4>
    <p>Uses high-frequency sound waves to explore deep water and detect underwater objects.</p>
  </div>
  
  <div class="key-facts-block">
    <h4>How It Works:</h4>
    <ol>
      <li>Ship sends ultrasound pulse downward</li>
      <li>Wave reflects off seabed/object</li>
      <li>Detector receives reflection</li>
      <li>Calculate: <strong>depth = (v × t) ÷ 2</strong></li>
    </ol>
  </div>
  
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Echo Sounding (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="180" viewBox="0 0 300 180">
        <line x1="20" y1="30" x2="280" y2="30" stroke="#3b82f6" stroke-width="2"/>
        <text x="260" y="25" fill="#3b82f6" font-size="8">Water surface</text>
        <rect x="120" y="15" width="60" height="20" fill="currentColor" rx="3"/>
        <text x="150" y="12" fill="currentColor" font-size="8" text-anchor="middle">Ship</text>
        <path d="M20 150 Q80 140, 150 150 T280 150" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <text x="260" y="165" fill="#f59e0b" font-size="8">Seabed</text>
        <g class="anim-flow-down">
          <line x1="150" y1="40" x2="150" y2="100" stroke="#22c55e" stroke-width="2"/>
          <circle cx="150" cy="100" r="5" fill="#22c55e"/>
        </g>
        <g class="anim-flow-up" style="animation-delay: 1s;">
          <line x1="150" y1="145" x2="150" y2="100" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="100" r="5" fill="#ef4444"/>
        </g>
        <text x="150" y="175" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">d = (v × t) ÷ 2</text>
      </svg>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>Uses:</h4>
    <ul>
      <li>Measuring ocean depth</li>
      <li>Detecting submarines/shipwrecks</li>
      <li>Mapping fish populations</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["ultrasound", "seismic waves", "P-waves", "S-waves", "echo sounding", "sonar", "detection"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain how ultrasound creates images of a baby in the womb.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["ultrasound", "pulse", "boundary", "reflected", "time", "distance"]
              },
              {
                id: "p2",
                prompt_template: "A sonar pulse takes 0.4 seconds to return. Speed of sound in water is 1500 m/s. Calculate depth.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["300 m", "divide by 2"]
              }
            ]
          },
          {
            id: "4-6-2-specular-diffuse",
            title: "4.6.2.6 – Specular and Diffuse Reflection",
            type: "content",
            study_group: 3,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Types of Reflection</h3>
  <div class="definition-block">
    <h4>Specular Reflection:</h4>
    <ul>
      <li>Surface: Smooth and flat (mirror, polished metal)</li>
      <li>Reflection: Neat, single clear direction</li>
      <li>Result: Clear image formed</li>
    </ul>
  </div>
  
  <div class="definition-block">
    <h4>Diffuse Reflection:</h4>
    <ul>
      <li>Surface: Rough or uneven (paper, wood, stone)</li>
      <li>Reflection: Scattered in multiple directions</li>
      <li>Result: No clear image</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Specular vs Diffuse Reflection</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <text x="100" y="20" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Specular</text>
        <line x1="30" y1="100" x2="170" y2="100" stroke="#3b82f6" stroke-width="3"/>
        <text x="100" y="115" fill="currentColor" font-size="8" text-anchor="middle">Smooth surface</text>
        <line x1="60" y1="40" x2="80" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="90" y1="40" x2="100" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="120" y1="40" x2="120" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="80" y1="100" x2="100" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="100" y1="100" x2="110" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="120" y1="100" x2="120" y2="40" stroke="#22c55e" stroke-width="2"/>
        <text x="100" y="145" fill="#22c55e" font-size="9" text-anchor="middle">Clear image</text>
        <line x1="200" y1="10" x2="200" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        <text x="300" y="20" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">Diffuse</text>
        <path d="M230 100 L240 95 L250 100 L260 95 L270 100 L280 95 L290 100 L300 95 L310 100 L320 95 L330 100 L340 95 L350 100 L360 95 L370 100" fill="none" stroke="#ef4444" stroke-width="3"/>
        <text x="300" y="115" fill="currentColor" font-size="8" text-anchor="middle">Rough surface</text>
        <line x1="280" y1="40" x2="290" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="300" y1="40" x2="300" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="320" y1="40" x2="310" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="290" y1="98" x2="260" y2="50" stroke="#22c55e" stroke-width="2"/>
        <line x1="300" y1="98" x2="310" y2="45" stroke="#22c55e" stroke-width="2"/>
        <line x1="310" y1="98" x2="350" y2="55" stroke="#22c55e" stroke-width="2"/>
        <text x="300" y="145" fill="#ef4444" font-size="9" text-anchor="middle">No clear image</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why Surfaces Behave Differently</h3>
  <div class="key-facts-block">
    <h4>Explanation:</h4>
    <ul>
      <li><strong>Smooth surfaces:</strong> all rays reflect in same direction</li>
      <li><strong>Rough surfaces:</strong> microscopic bumps cause rays to scatter</li>
      <li>Law of reflection still holds for each individual ray</li>
    </ul>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Type</th><th>Examples</th><th>Result</th></tr></thead>
    <tbody>
      <tr><td>Specular</td><td>Mirrors, calm water, polished metal</td><td>Clear reflections</td></tr>
      <tr><td>Diffuse</td><td>Paper, rough concrete, wood</td><td>Light spreads out</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Why Diffuse Reflection Is Important:</h4>
    <ul>
      <li>Prevents glare</li>
      <li>Allows us to see most objects</li>
      <li>Provides even illumination</li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["specular reflection", "diffuse reflection", "smooth surface", "rough surface"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain the difference between specular and diffuse reflection.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["specular", "smooth", "same direction", "diffuse", "rough", "scattered"]
              }
            ]
          },
          {
            id: "4-6-2-2-em-refraction",
            title: "4.6.2.2 – Refraction of EM Waves",
            type: "content",
            study_group: 3,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – How EM Waves Interact with Substances</h3>
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Process</th><th>Description</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>Absorption</td><td>Wave energy taken in</td><td>Black surfaces absorb light</td></tr>
      <tr><td>Transmission</td><td>Wave passes through</td><td>Glass allows light through</td></tr>
      <tr><td>Reflection</td><td>Wave bounces off</td><td>Mirrors reflect light</td></tr>
      <tr><td>Refraction</td><td>Wave changes direction</td><td>Light bending in water</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why Refraction Occurs</h3>
  <div class="key-facts-block">
    <h4>When EM Wave Enters New Medium:</h4>
    <ul>
      <li><strong>Speed changes</strong></li>
      <li><strong>Wavelength changes</strong></li>
      <li><strong>Frequency stays the same</strong> (set by source)</li>
    </ul>
  </div>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Light Refraction at Boundary</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="200" viewBox="0 0 350 200">
        <rect x="30" y="20" width="290" height="80" fill="hsl(var(--background))" stroke="none"/>
        <text x="50" y="50" fill="currentColor" font-size="10">Air (less dense)</text>
        <rect x="30" y="100" width="290" height="80" fill="hsl(var(--primary)/0.1)" stroke="none"/>
        <text x="50" y="165" fill="currentColor" font-size="10">Glass (denser)</text>
        <line x1="30" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="2"/>
        <line x1="175" y1="30" x2="175" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="185" y="40" fill="currentColor" font-size="9">Normal</text>
        <line x1="100" y1="30" x2="175" y2="100" stroke="#3b82f6" stroke-width="2"/>
        <text x="105" y="55" fill="#3b82f6" font-size="9">Incident ray</text>
        <line x1="175" y1="100" x2="230" y2="170" stroke="#22c55e" stroke-width="2"/>
        <text x="215" y="150" fill="#22c55e" font-size="9">Refracted ray</text>
        <path d="M175 70 A30 30 0 0 0 150 90" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="145" y="75" fill="#3b82f6" font-size="10" font-weight="bold">i</text>
        <path d="M175 130 A30 30 0 0 1 195 118" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="195" y="135" fill="#22c55e" font-size="10" font-weight="bold">r</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Entering...</th><th>What Happens</th><th>Ray Behaviour</th></tr></thead>
    <tbody>
      <tr><td>Denser medium</td><td>Speed decreases, wavelength decreases</td><td>Bends towards normal</td></tr>
      <tr><td>Less dense medium</td><td>Speed increases, wavelength increases</td><td>Bends away from normal</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>Remember:</h4>
    <p><strong>Frequency never changes</strong> - it is set by the original wave source.</p>
  </div>
</div>
            `,
            canonical_keywords: ["electromagnetic waves", "refraction", "absorption", "transmission", "wavelength", "frequency", "speed"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain what happens to speed, wavelength and frequency when light enters glass from air.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["speed decreases", "wavelength decreases", "frequency same"]
              }
            ]
          }
        ]
      },
      emWavesModule,
      opticsModule
    ],
    subsections: []
  },
  {
    id: "magnetism",
    title: "Magnetism and Electromagnetism",
    status: "coming_soon",
    subsections: [
      {
        id: "4-7-1-permanent-induced-magnets",
        title: "4.7.1 Permanent and Induced Magnets",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Magnets</h3>
  <ul>
    <li>Permanent magnets: produce their own magnetic field</li>
    <li>Induced magnets: become magnetic when in a magnetic field</li>
    <li>Like poles repel, unlike poles attract</li>
  </ul>
</div>
        `,
        canonical_keywords: ["permanent magnet", "induced magnet", "magnetic field", "poles", "attract", "repel"],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Explain the difference between a permanent and an induced magnet.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["permanent", "own field", "induced", "only magnetic in field"]
          }
        ]
      }
    ]
  },
  {
    id: "space",
    title: "Space Physics",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "required-practicals",
    title: "Required Practicals",
    status: "ready",
    subsections: [],
    modules: [
      {
        id: "rp-energy",
        title: "Energy Practicals",
        status: "ready",
        subsections: [
          {
            id: "rp-specific-heat-capacity",
            title: "RP1: Investigating Specific Heat Capacity",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">⚡ Required Practical 1: Investigating Specific Heat Capacity</h3>
  
  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">💠 Aim</h4>
    <p>To determine the <strong>specific heat capacity (SHC)</strong> of a material (e.g., aluminium, copper, water) by measuring the temperature change produced by supplying a known amount of energy.</p>
  </div>

  <h4 class="subsection-subheading">💠 Key Equation</h4>
  <div style="background: hsl(var(--muted)); border-radius: 8px; padding: 1rem; margin: 1rem 0; text-align: center;">
    <p style="font-size: 1.25rem; font-weight: bold; color: hsl(var(--primary));">E = mcΔθ</p>
    <p style="margin-top: 0.5rem;">Rearranged for SHC: <strong>c = E / (m × Δθ)</strong></p>
  </div>

  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Symbol</th>
        <th style="padding: 0.75rem; text-align: left;">Meaning</th>
        <th style="padding: 0.75rem; text-align: left;">Unit</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">E</td><td style="padding: 0.75rem;">Energy supplied</td><td style="padding: 0.75rem;">J</td></tr>
      <tr><td style="padding: 0.75rem;">m</td><td style="padding: 0.75rem;">Mass of block/liquid</td><td style="padding: 0.75rem;">kg</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">c</td><td style="padding: 0.75rem;">Specific heat capacity</td><td style="padding: 0.75rem;">J/kg°C</td></tr>
      <tr><td style="padding: 0.75rem;">Δθ</td><td style="padding: 0.75rem;">Temperature change</td><td style="padding: 0.75rem;">°C</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Apparatus</h4>
  
  <!-- Animated Apparatus Diagram -->
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <svg viewBox="0 0 400 320" style="max-width: 400px; width: 100%;">
      <defs>
        <linearGradient id="metalBlock" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#a8a8a8"/>
          <stop offset="50%" style="stop-color:#808080"/>
          <stop offset="100%" style="stop-color:#606060"/>
        </linearGradient>
        <linearGradient id="insulation" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f5e6d3"/>
          <stop offset="100%" style="stop-color:#d4c4b0"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      
      <!-- Insulation wrap -->
      <rect x="80" y="120" width="140" height="120" rx="8" fill="url(#insulation)" stroke="#b8a896" stroke-width="2"/>
      <text x="150" y="110" text-anchor="middle" font-size="10" fill="#666">Insulation</text>
      
      <!-- Metal block -->
      <rect x="100" y="140" width="100" height="80" rx="4" fill="url(#metalBlock)" stroke="#505050" stroke-width="2"/>
      <text x="150" y="185" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Metal Block</text>
      
      <!-- Heater hole with heater -->
      <rect x="130" y="145" width="40" height="30" fill="#333" rx="2"/>
      <rect x="135" y="150" width="30" height="20" fill="#ff6b35" rx="2">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite"/>
      </rect>
      <text x="150" y="163" text-anchor="middle" font-size="8" fill="#fff">Heater</text>
      
      <!-- Heat waves animation -->
      <g opacity="0.6">
        <path d="M145 148 Q148 142 151 148 Q154 154 157 148" stroke="#ff4444" stroke-width="2" fill="none">
          <animate attributeName="d" values="M145 148 Q148 142 151 148 Q154 154 157 148;M145 145 Q148 139 151 145 Q154 151 157 145;M145 148 Q148 142 151 148 Q154 154 157 148" dur="0.8s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="0.8s" repeatCount="indefinite"/>
        </path>
      </g>
      
      <!-- Thermometer -->
      <rect x="175" y="100" width="8" height="60" fill="#e8e8e8" stroke="#999" stroke-width="1" rx="4"/>
      <rect x="177" y="140" width="4" height="18" fill="#ff3333" rx="2">
        <animate attributeName="height" values="18;25;18" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="y" values="140;133;140" dur="3s" repeatCount="indefinite"/>
      </rect>
      <circle cx="179" cy="158" r="5" fill="#ff3333"/>
      <text x="195" y="130" font-size="9" fill="#666">Thermometer</text>
      
      <!-- Power supply -->
      <rect x="260" y="140" width="80" height="60" rx="4" fill="#2a5298" stroke="#1a3a7a" stroke-width="2"/>
      <text x="300" y="165" text-anchor="middle" font-size="10" fill="#fff">Power</text>
      <text x="300" y="180" text-anchor="middle" font-size="10" fill="#fff">Supply</text>
      
      <!-- Ammeter -->
      <circle cx="300" cy="240" r="25" fill="#fff" stroke="#333" stroke-width="2"/>
      <text x="300" y="244" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">A</text>
      <text x="300" y="280" text-anchor="middle" font-size="9" fill="#666">Ammeter</text>
      
      <!-- Voltmeter -->
      <circle cx="370" cy="180" r="25" fill="#fff" stroke="#333" stroke-width="2"/>
      <text x="370" y="184" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">V</text>
      <text x="370" y="220" text-anchor="middle" font-size="9" fill="#666">Voltmeter</text>
      
      <!-- Wires -->
      <path d="M170 160 L260 160" stroke="#333" stroke-width="2" fill="none"/>
      <path d="M300 200 L300 215" stroke="#333" stroke-width="2" fill="none"/>
      <path d="M275 200 L275 240 L275 240" stroke="#333" stroke-width="2" fill="none"/>
      <path d="M325 240 L350 240 L350 205" stroke="#333" stroke-width="2" fill="none"/>
      <path d="M340 160 L345 160 L345 180" stroke="#333" stroke-width="2" fill="none"/>
      
      <!-- Labels -->
      <text x="40" y="180" font-size="10" fill="#333" font-weight="bold">Setup:</text>
      <text x="40" y="200" font-size="9" fill="#666">1. Weigh block</text>
      <text x="40" y="215" font-size="9" fill="#666">2. Insert heater</text>
      <text x="40" y="230" font-size="9" fill="#666">3. Add insulation</text>
      <text x="40" y="245" font-size="9" fill="#666">4. Connect circuit</text>
      
      <!-- Title -->
      <text x="200" y="30" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">Specific Heat Capacity Apparatus</text>
    </svg>
  </div>

  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Equipment</th>
        <th style="padding: 0.75rem; text-align: left;">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Metal block with heater hole</td><td style="padding: 0.75rem;">Test material</td></tr>
      <tr><td style="padding: 0.75rem;">Immersion heater (12V)</td><td style="padding: 0.75rem;">Supply thermal energy</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Power supply</td><td style="padding: 0.75rem;">Drives heater</td></tr>
      <tr><td style="padding: 0.75rem;">Ammeter</td><td style="padding: 0.75rem;">Measure current (A)</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Voltmeter</td><td style="padding: 0.75rem;">Measure voltage (V)</td></tr>
      <tr><td style="padding: 0.75rem;">Stopwatch</td><td style="padding: 0.75rem;">Time energy input</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Thermometer / temperature probe</td><td style="padding: 0.75rem;">Measure temperature change</td></tr>
      <tr><td style="padding: 0.75rem;">Insulation (cotton wool)</td><td style="padding: 0.75rem;">Reduce heat losses</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Balance</td><td style="padding: 0.75rem;">Measure mass of block</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Method (Step-by-Step)</h4>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Setup</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Measure the mass of the metal block using a balance (e.g., 1.00 kg)</li>
      <li>Insert the immersion heater into the block</li>
      <li>Wrap the block tightly in insulation (cotton wool) to reduce energy losses</li>
      <li>Place a thermometer in the block's small hole or in thermal contact with the block</li>
      <li>Connect the heater to a power supply with an ammeter in series and voltmeter in parallel</li>
    </ol>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Heating Procedure</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Record the <strong>initial temperature</strong> of the block</li>
      <li>Switch on the heater and start the stopwatch simultaneously</li>
      <li>Record voltage and current every 30 seconds (they should remain constant)</li>
      <li>Continue heating for 10 minutes (or until temperature rises by ~10°C)</li>
      <li>Switch off the heater and record the <strong>final temperature</strong></li>
    </ol>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Energy Calculation</h5>
    <div style="text-align: center; padding: 1rem; background: hsl(var(--muted)); border-radius: 8px;">
      <p style="font-size: 1.1rem;"><strong>E = V × I × t</strong></p>
      <p style="font-size: 0.9rem; color: hsl(var(--muted-foreground));">Where: V = voltage (volts), I = current (amps), t = time (seconds)</p>
      <p style="margin-top: 1rem; font-size: 1.1rem;"><strong>c = (V × I × t) / (m × Δθ)</strong></p>
    </div>
  </div>

  <h4 class="subsection-subheading">💠 Reducing Errors & Improving Accuracy</h4>
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--destructive)); color: hsl(var(--destructive-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Issue</th>
        <th style="padding: 0.75rem; text-align: left;">Explanation</th>
        <th style="padding: 0.75rem; text-align: left;">Solution</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Heat loss to air</td><td style="padding: 0.75rem;">Energy escapes instead of heating block</td><td style="padding: 0.75rem;">Add more insulation, use lid</td></tr>
      <tr><td style="padding: 0.75rem;">Temperature lag</td><td style="padding: 0.75rem;">Thermometer reacts slowly</td><td style="padding: 0.75rem;">Use a digital probe</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Uneven heating</td><td style="padding: 0.75rem;">Heater only warms part of block</td><td style="padding: 0.75rem;">Allow time for block to equalise</td></tr>
      <tr><td style="padding: 0.75rem;">Inaccurate V/I</td><td style="padding: 0.75rem;">Causes energy calculation errors</td><td style="padding: 0.75rem;">Keep V & I constant; check meter zero</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Evaluation</h4>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
    <div style="background: hsl(var(--destructive)/0.1); border-radius: 8px; padding: 1rem; border-left: 4px solid hsl(var(--destructive));">
      <h5 style="color: hsl(var(--destructive));">Sources of Error</h5>
      <ul style="margin-left: 1rem; font-size: 0.9rem;">
        <li>Heat lost to surroundings → SHC appears larger</li>
        <li>Inaccurate ΔT due to thermal inertia</li>
        <li>Not all energy from heater enters the block</li>
      </ul>
    </div>
    <div style="background: hsl(var(--chart-2)/0.1); border-radius: 8px; padding: 1rem; border-left: 4px solid hsl(var(--chart-2));">
      <h5 style="color: hsl(var(--chart-2));">Improvements</h5>
      <ul style="margin-left: 1rem; font-size: 0.9rem;">
        <li>Use data logger</li>
        <li>Use oil for better thermal contact</li>
        <li>Insulate heater leads</li>
        <li>Allow block to preheat slowly</li>
      </ul>
    </div>
  </div>

  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--chart-1)/0.1), hsl(var(--chart-2)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--chart-1));">
    <h4 style="color: hsl(var(--chart-1)); margin-bottom: 0.5rem;">💠 Conclusion</h4>
    <p>Plotting <strong>temperature rise vs energy supplied</strong> gives a straight line. The gradient can also be used to calculate SHC.</p>
  </div>
</div>
            `,
            canonical_keywords: ["specific heat capacity", "energy", "temperature change", "E=mcΔθ", "immersion heater", "insulation", "joules", "mass", "thermal energy"],
            practice_items: [
              {
                id: "shc-p1",
                prompt_template: "Describe the method used to determine the specific heat capacity of a metal block.",
                marks: 6,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["mass", "heater", "thermometer", "voltage", "current", "time", "insulation", "temperature change"]
              },
              {
                id: "shc-p2",
                prompt_template: "A 1 kg aluminium block is heated using a 12V, 4A heater for 5 minutes. The temperature rises from 20°C to 45°C. Calculate the specific heat capacity.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: false,
                expected_keywords: ["E=VIt", "14400 J", "c=E/mΔθ", "576 J/kg°C"]
              },
              {
                id: "shc-p3",
                prompt_template: "Explain why the calculated value of specific heat capacity is often higher than the accepted value.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["heat loss", "surroundings", "insulation", "energy escapes"]
              }
            ]
          },
          {
            id: "rp-insulation",
            title: "RP2: Investigating Insulation",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">❄️ Required Practical 2: Investigating Insulation</h3>
  <p style="color: hsl(var(--muted-foreground)); font-style: italic;">(Reducing Unwanted Energy Transfers)</p>
  
  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--chart-4)/0.1), hsl(var(--chart-5)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--chart-4));">
    <h4 style="color: hsl(var(--chart-4)); margin-bottom: 0.5rem;">💠 Aim</h4>
    <p>To investigate how the <strong>rate of cooling</strong> of a beaker of hot water depends on:</p>
    <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
      <li>Type of insulation</li>
      <li>Thickness of insulation</li>
      <li>Use of a lid / shiny surface</li>
    </ul>
  </div>

  <h4 class="subsection-subheading">💠 Apparatus</h4>
  
  <!-- Animated Insulation Setup Diagram -->
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <svg viewBox="0 0 450 300" style="max-width: 450px; width: 100%;">
      <defs>
        <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#64b5f6"/>
          <stop offset="100%" style="stop-color:#1976d2"/>
        </linearGradient>
        <linearGradient id="beakerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#e0e0e0"/>
          <stop offset="50%" style="stop-color:#f5f5f5"/>
          <stop offset="100%" style="stop-color:#e0e0e0"/>
        </linearGradient>
        <linearGradient id="insulationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffcc80"/>
          <stop offset="100%" style="stop-color:#ff9800"/>
        </linearGradient>
      </defs>
      
      <!-- Title -->
      <text x="225" y="25" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">Insulation Investigation Setup</text>
      
      <!-- Beaker A - No Insulation (Control) -->
      <g transform="translate(30, 50)">
        <text x="40" y="0" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">A: Control</text>
        <path d="M15 20 L15 120 Q15 130 25 130 L55 130 Q65 130 65 120 L65 20" fill="url(#beakerGrad)" stroke="#999" stroke-width="2"/>
        <rect x="20" y="40" width="40" height="85" fill="url(#waterGrad)" opacity="0.8"/>
        <!-- Steam animation -->
        <g opacity="0.5">
          <path d="M30 35 Q33 25 30 15" stroke="#999" stroke-width="1.5" fill="none">
            <animate attributeName="d" values="M30 35 Q33 25 30 15;M30 35 Q27 25 30 15;M30 35 Q33 25 30 15" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M50 35 Q47 25 50 15" stroke="#999" stroke-width="1.5" fill="none">
            <animate attributeName="d" values="M50 35 Q47 25 50 15;M50 35 Q53 25 50 15;M50 35 Q47 25 50 15" dur="2s" repeatCount="indefinite"/>
          </path>
        </g>
        <!-- Thermometer -->
        <rect x="35" y="10" width="6" height="50" fill="#fff" stroke="#666" rx="3"/>
        <rect x="36.5" y="35" width="3" height="22" fill="#e53935" rx="1.5">
          <animate attributeName="height" values="22;18;22" dur="4s" repeatCount="indefinite"/>
        </rect>
        <circle cx="38" cy="58" r="4" fill="#e53935"/>
        <text x="40" y="150" text-anchor="middle" font-size="9" fill="#e53935">Fastest cooling</text>
      </g>
      
      <!-- Beaker B - Cotton Wool -->
      <g transform="translate(130, 50)">
        <text x="45" y="0" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">B: Cotton Wool</text>
        <!-- Insulation layer -->
        <ellipse cx="45" cy="75" rx="45" ry="60" fill="#f5f5dc" stroke="#d4c896" stroke-width="2" opacity="0.8"/>
        <path d="M15 20 L15 120 Q15 130 25 130 L65 130 Q75 130 75 120 L75 20" fill="url(#beakerGrad)" stroke="#999" stroke-width="2"/>
        <rect x="20" y="40" width="50" height="85" fill="url(#waterGrad)" opacity="0.8"/>
        <!-- Lid -->
        <rect x="10" y="15" width="70" height="8" fill="#8d6e63" rx="2"/>
        <!-- Thermometer through lid -->
        <rect x="42" y="5" width="6" height="55" fill="#fff" stroke="#666" rx="3"/>
        <rect x="43.5" y="35" width="3" height="22" fill="#e53935" rx="1.5">
          <animate attributeName="height" values="22;20;22" dur="6s" repeatCount="indefinite"/>
        </rect>
        <circle cx="45" cy="58" r="4" fill="#e53935"/>
        <text x="45" y="150" text-anchor="middle" font-size="9" fill="#4caf50">Good insulation</text>
      </g>
      
      <!-- Beaker C - Bubble Wrap -->
      <g transform="translate(240, 50)">
        <text x="45" y="0" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">C: Bubble Wrap</text>
        <!-- Bubble wrap pattern -->
        <rect x="5" y="25" width="80" height="110" fill="none" stroke="#90caf9" stroke-width="10" rx="8" opacity="0.6"/>
        <circle cx="15" cy="40" r="5" fill="#e3f2fd" stroke="#90caf9"/>
        <circle cx="15" cy="55" r="5" fill="#e3f2fd" stroke="#90caf9"/>
        <circle cx="15" cy="70" r="5" fill="#e3f2fd" stroke="#90caf9"/>
        <circle cx="75" cy="40" r="5" fill="#e3f2fd" stroke="#90caf9"/>
        <circle cx="75" cy="55" r="5" fill="#e3f2fd" stroke="#90caf9"/>
        <circle cx="75" cy="70" r="5" fill="#e3f2fd" stroke="#90caf9"/>
        <path d="M20 30 L20 115 Q20 125 30 125 L60 125 Q70 125 70 115 L70 30" fill="url(#beakerGrad)" stroke="#999" stroke-width="2"/>
        <rect x="25" y="45" width="40" height="75" fill="url(#waterGrad)" opacity="0.8"/>
        <!-- Lid -->
        <rect x="10" y="25" width="70" height="8" fill="#8d6e63" rx="2"/>
        <!-- Thermometer -->
        <rect x="42" y="15" width="6" height="50" fill="#fff" stroke="#666" rx="3"/>
        <rect x="43.5" y="40" width="3" height="22" fill="#e53935" rx="1.5">
          <animate attributeName="height" values="22;21;22" dur="8s" repeatCount="indefinite"/>
        </rect>
        <circle cx="45" cy="63" r="4" fill="#e53935"/>
        <text x="45" y="150" text-anchor="middle" font-size="9" fill="#2196f3">Better insulation</text>
      </g>
      
      <!-- Beaker D - Foil -->
      <g transform="translate(340, 50)">
        <text x="45" y="0" text-anchor="middle" font-size="11" fill="#666" font-weight="bold">D: Foil</text>
        <!-- Foil wrap -->
        <rect x="8" y="25" width="74" height="110" fill="#c0c0c0" stroke="#a0a0a0" stroke-width="2" rx="4"/>
        <rect x="12" y="28" width="66" height="104" fill="none" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="4,2"/>
        <path d="M18 30 L18 115 Q18 125 28 125 L62 125 Q72 125 72 115 L72 30" fill="url(#beakerGrad)" stroke="#999" stroke-width="2"/>
        <rect x="23" y="45" width="44" height="75" fill="url(#waterGrad)" opacity="0.8"/>
        <!-- Shiny reflection -->
        <line x1="30" y1="50" x2="35" y2="90" stroke="#fff" stroke-width="2" opacity="0.5"/>
        <line x1="55" y1="60" x2="60" y2="100" stroke="#fff" stroke-width="2" opacity="0.5"/>
        <!-- Lid -->
        <rect x="8" y="25" width="74" height="8" fill="#a0a0a0" rx="2"/>
        <!-- Thermometer -->
        <rect x="42" y="15" width="6" height="50" fill="#fff" stroke="#666" rx="3"/>
        <rect x="43.5" y="40" width="3" height="22" fill="#e53935" rx="1.5">
          <animate attributeName="height" values="22;21.5;22" dur="10s" repeatCount="indefinite"/>
        </rect>
        <circle cx="45" cy="63" r="4" fill="#e53935"/>
        <text x="45" y="150" text-anchor="middle" font-size="9" fill="#9c27b0">Reflects radiation</text>
      </g>
      
      <!-- Key at bottom -->
      <g transform="translate(20, 260)">
        <text x="0" y="0" font-size="10" fill="#333" font-weight="bold">Key:</text>
        <rect x="40" y="-8" width="15" height="10" fill="url(#waterGrad)" opacity="0.8"/>
        <text x="60" y="0" font-size="9" fill="#666">Hot water (200ml)</text>
        <rect x="140" y="-8" width="15" height="10" fill="#8d6e63"/>
        <text x="160" y="0" font-size="9" fill="#666">Cardboard lid</text>
        <rect x="240" y="-6" width="8" height="15" fill="#fff" stroke="#666"/>
        <rect x="241.5" y="2" width="5" height="6" fill="#e53935"/>
        <text x="255" y="0" font-size="9" fill="#666">Thermometer</text>
      </g>
    </svg>
  </div>

  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--chart-4)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Equipment</th>
        <th style="padding: 0.75rem; text-align: left;">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Beakers (identical)</td><td style="padding: 0.75rem;">Hold hot water</td></tr>
      <tr><td style="padding: 0.75rem;">Thermometer / temperature probe</td><td style="padding: 0.75rem;">Measure cooling</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Stopwatch</td><td style="padding: 0.75rem;">Timings</td></tr>
      <tr><td style="padding: 0.75rem;">Kettle</td><td style="padding: 0.75rem;">Heat water</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Insulation materials</td><td style="padding: 0.75rem;">Cotton wool, bubble wrap, foil, newspaper</td></tr>
      <tr><td style="padding: 0.75rem;">Lids (cardboard discs)</td><td style="padding: 0.75rem;">Reduce convection</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Elastic bands / tape</td><td style="padding: 0.75rem;">Hold insulation in place</td></tr>
      <tr><td style="padding: 0.75rem;">Measuring cylinder</td><td style="padding: 0.75rem;">Accurately measure volume</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Method A: Comparing Different Materials</h4>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Setup</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Label beakers A, B, C, D</li>
      <li>Wrap each beaker in a different insulating material</li>
      <li>Leave one beaker uninsulated as a <strong>control</strong></li>
      <li>Place identical cardboard lids on top (with thermometer hole)</li>
    </ol>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Heating</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Pour <strong>200 ml of boiled water</strong> into each beaker quickly</li>
      <li>Insert thermometer and record <strong>initial temperature</strong></li>
    </ol>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ Recording Data</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Start timer and record temperature every minute for 10 minutes</li>
      <li>Plot cooling curves for each beaker</li>
      <li>Compare which material reduced cooling the most</li>
    </ol>
  </div>

  <h4 class="subsection-subheading">💠 Method B: Changing Thickness of Insulation</h4>
  
  <div style="background: hsl(var(--chart-2)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--chart-2)); margin-bottom: 1rem;">⭐ Setup</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Use one insulating material (e.g., bubble wrap)</li>
      <li>Apply <strong>1 layer, 2 layers, 3 layers, 4 layers</strong> in different trials</li>
      <li>Ensure layers fit tightly with no gaps</li>
    </ol>
  </div>

  <div style="background: hsl(var(--chart-2)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--chart-2)); margin-bottom: 1rem;">⭐ Measurement</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Record temperature every minute for 10 minutes</li>
      <li>Repeat for each thickness; keep all other variables the same</li>
      <li>Plot cooling curves for each thickness</li>
    </ol>
  </div>

  <!-- Animated Cooling Curve Graph -->
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <svg viewBox="0 0 400 280" style="max-width: 400px; width: 100%;">
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
        </marker>
      </defs>
      
      <!-- Title -->
      <text x="200" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Cooling Curves for Different Insulation</text>
      
      <!-- Axes -->
      <line x1="60" y1="230" x2="380" y2="230" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      <line x1="60" y1="230" x2="60" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrowhead)"/>
      
      <!-- Y-axis labels -->
      <text x="25" y="140" font-size="11" fill="#333" transform="rotate(-90, 25, 140)">Temperature (°C)</text>
      <text x="55" y="235" font-size="9" fill="#666" text-anchor="end">0</text>
      <text x="55" y="180" font-size="9" fill="#666" text-anchor="end">40</text>
      <text x="55" y="130" font-size="9" fill="#666" text-anchor="end">60</text>
      <text x="55" y="80" font-size="9" fill="#666" text-anchor="end">80</text>
      
      <!-- X-axis labels -->
      <text x="220" y="260" font-size="11" fill="#333" text-anchor="middle">Time (minutes)</text>
      <text x="100" y="248" font-size="9" fill="#666" text-anchor="middle">2</text>
      <text x="160" y="248" font-size="9" fill="#666" text-anchor="middle">4</text>
      <text x="220" y="248" font-size="9" fill="#666" text-anchor="middle">6</text>
      <text x="280" y="248" font-size="9" fill="#666" text-anchor="middle">8</text>
      <text x="340" y="248" font-size="9" fill="#666" text-anchor="middle">10</text>
      
      <!-- Grid lines -->
      <g stroke="#e0e0e0" stroke-width="1">
        <line x1="60" y1="180" x2="370" y2="180"/>
        <line x1="60" y1="130" x2="370" y2="130"/>
        <line x1="60" y1="80" x2="370" y2="80"/>
      </g>
      
      <!-- Cooling curve - No insulation (steep) -->
      <path d="M60 60 Q150 100 220 160 Q280 200 370 210" stroke="#e53935" stroke-width="3" fill="none">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2s" fill="freeze"/>
      </path>
      
      <!-- Cooling curve - Cotton wool (medium) -->
      <path d="M60 60 Q180 80 260 120 Q320 150 370 170" stroke="#ff9800" stroke-width="3" fill="none">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2s" fill="freeze"/>
      </path>
      
      <!-- Cooling curve - Bubble wrap (gentle) -->
      <path d="M60 60 Q200 70 280 100 Q340 120 370 140" stroke="#2196f3" stroke-width="3" fill="none">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2s" fill="freeze"/>
      </path>
      
      <!-- Cooling curve - Foil (gentlest) -->
      <path d="M60 60 Q220 65 300 85 Q350 100 370 115" stroke="#9c27b0" stroke-width="3" fill="none">
        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2s" fill="freeze"/>
      </path>
      
      <!-- Legend -->
      <g transform="translate(240, 35)">
        <line x1="0" y1="0" x2="20" y2="0" stroke="#e53935" stroke-width="3"/>
        <text x="25" y="4" font-size="9" fill="#666">No insulation</text>
        <line x1="0" y1="15" x2="20" y2="15" stroke="#ff9800" stroke-width="3"/>
        <text x="25" y="19" font-size="9" fill="#666">Cotton wool</text>
        <line x1="0" y1="30" x2="20" y2="30" stroke="#2196f3" stroke-width="3"/>
        <text x="25" y="34" font-size="9" fill="#666">Bubble wrap</text>
        <line x1="0" y1="45" x2="20" y2="45" stroke="#9c27b0" stroke-width="3"/>
        <text x="25" y="49" font-size="9" fill="#666">Foil (shiny)</text>
      </g>
      
      <!-- Annotation -->
      <text x="370" y="205" font-size="8" fill="#e53935">Steeper = faster cooling</text>
    </svg>
  </div>

  <h4 class="subsection-subheading">💠 Variables</h4>
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Type</th>
        <th style="padding: 0.75rem; text-align: left;">Variable</th>
        <th style="padding: 0.75rem; text-align: left;">Control Method</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;"><strong>Independent</strong></td><td style="padding: 0.75rem;">Material / Thickness</td><td style="padding: 0.75rem;">Change one only</td></tr>
      <tr><td style="padding: 0.75rem;"><strong>Dependent</strong></td><td style="padding: 0.75rem;">Temperature drop</td><td style="padding: 0.75rem;">Measured with thermometer</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Control</td><td style="padding: 0.75rem;">Volume of water</td><td style="padding: 0.75rem;">Use measuring cylinder</td></tr>
      <tr><td style="padding: 0.75rem;">Control</td><td style="padding: 0.75rem;">Starting temperature</td><td style="padding: 0.75rem;">Adjust until identical (±1°C)</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Control</td><td style="padding: 0.75rem;">Beaker type</td><td style="padding: 0.75rem;">Use identical beakers</td></tr>
      <tr><td style="padding: 0.75rem;">Control</td><td style="padding: 0.75rem;">Environment</td><td style="padding: 0.75rem;">No drafts; same room</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Improving Accuracy</h4>
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--destructive)); color: hsl(var(--destructive-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Problem</th>
        <th style="padding: 0.75rem; text-align: left;">Why It Happens</th>
        <th style="padding: 0.75rem; text-align: left;">Solution</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Rapid cooling during setup</td><td style="padding: 0.75rem;">Water poured slowly</td><td style="padding: 0.75rem;">Pour quickly & measure immediately</td></tr>
      <tr><td style="padding: 0.75rem;">Heat loss through top</td><td style="padding: 0.75rem;">Uncovered beaker</td><td style="padding: 0.75rem;">Use lids</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Thermometer touches sides</td><td style="padding: 0.75rem;">Cooler at edges</td><td style="padding: 0.75rem;">Hold centrally</td></tr>
      <tr><td style="padding: 0.75rem;">Background drafts</td><td style="padding: 0.75rem;">Increases convection</td><td style="padding: 0.75rem;">Close windows</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Random error in reading</td><td style="padding: 0.75rem;">Parallax error</td><td style="padding: 0.75rem;">Eye level & digital probe</td></tr>
    </tbody>
  </table>

  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--chart-4)/0.1), hsl(var(--chart-5)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--chart-4));">
    <h4 style="color: hsl(var(--chart-4)); margin-bottom: 0.5rem;">💠 Conclusion</h4>
    <ul style="margin-left: 1.5rem;">
      <li><strong>Best insulators</strong>: low thermal conductivity</li>
      <li><strong>More layers = less energy transfer</strong></li>
      <li><strong>Lids reduce convection</strong>, shiny foil reflects radiation</li>
    </ul>
    <div style="margin-top: 1rem; padding: 0.75rem; background: hsl(var(--muted)); border-radius: 8px;">
      <p><strong>Cooling curve shape:</strong></p>
      <ul style="margin-left: 1.5rem; margin-top: 0.5rem;">
        <li>Steeper slope → faster energy loss</li>
        <li>Shallow slope → good insulation</li>
      </ul>
    </div>
  </div>
</div>
            `,
            canonical_keywords: ["insulation", "thermal conductivity", "cooling curve", "heat loss", "conduction", "convection", "radiation", "temperature", "energy transfer"],
            practice_items: [
              {
                id: "ins-p1",
                prompt_template: "Describe how you would investigate which material is the best insulator.",
                marks: 6,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["beakers", "hot water", "thermometer", "different materials", "measure temperature", "time", "control", "lid"]
              },
              {
                id: "ins-p2",
                prompt_template: "Explain why a shiny foil wrapper would be good at reducing heat loss from a hot object.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["reflects", "radiation", "infrared", "shiny surface"]
              },
              {
                id: "ins-p3",
                prompt_template: "State three control variables that must be kept the same when comparing different insulating materials.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["volume", "starting temperature", "beaker type", "room temperature", "lid"]
              }
            ]
          }
        ]
      },
      {
        id: "rp-forces",
        title: "Forces Practicals",
        status: "ready",
        subsections: [
          {
            id: "rp-force-extension",
            title: "RP: Investigating Force & Extension",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🔩 Required Practical: Investigating Force & Extension</h3>
  <p style="color: hsl(var(--muted-foreground)); font-style: italic;">(Linked to Hooke's Law in the Forces Module)</p>
  
  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--primary));">
    <h4 style="color: hsl(var(--primary)); margin-bottom: 0.5rem;">💠 Aim</h4>
    <p>To investigate the relationship between <strong>force and extension</strong> for a spring, and to determine the <strong>spring constant (k)</strong>.</p>
  </div>

  <h4 class="subsection-subheading">💠 Key Scientific Background</h4>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
    <div style="background: hsl(var(--chart-1)/0.1); border-radius: 12px; padding: 1.5rem; border-left: 4px solid hsl(var(--chart-1));">
      <h5 style="color: hsl(var(--chart-1)); margin-bottom: 0.5rem;">✔️ Hooke's Law</h5>
      <p>For a spring within its <strong>elastic (linear) limit</strong>:</p>
      <div style="text-align: center; padding: 1rem; background: hsl(var(--muted)); border-radius: 8px; margin-top: 0.5rem;">
        <p style="font-size: 1.5rem; font-weight: bold; color: hsl(var(--primary));">F = k × e</p>
      </div>
      <ul style="margin-top: 0.75rem; margin-left: 1rem; font-size: 0.9rem;">
        <li><strong>F</strong> = force applied (N)</li>
        <li><strong>e</strong> = extension (m)</li>
        <li><strong>k</strong> = spring constant (N/m)</li>
      </ul>
    </div>
    <div style="background: hsl(var(--chart-2)/0.1); border-radius: 12px; padding: 1.5rem; border-left: 4px solid hsl(var(--chart-2));">
      <h5 style="color: hsl(var(--chart-2)); margin-bottom: 0.5rem;">✔️ Linear vs Non-Linear</h5>
      <ul style="margin-left: 1rem;">
        <li>Spring obeys Hooke's Law only in the <strong>linear region</strong></li>
        <li>Beyond the <strong>limit of proportionality</strong>, extension is no longer directly proportional to force</li>
      </ul>
    </div>
  </div>

  <h4 class="subsection-subheading">💠 Apparatus</h4>
  
  <!-- Animated Apparatus Diagram -->
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <svg viewBox="0 0 420 380" style="max-width: 420px; width: 100%;">
      <defs>
        <linearGradient id="springGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#607d8b"/>
          <stop offset="50%" style="stop-color:#90a4ae"/>
          <stop offset="100%" style="stop-color:#607d8b"/>
        </linearGradient>
        <linearGradient id="massGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ffd54f"/>
          <stop offset="100%" style="stop-color:#ff8f00"/>
        </linearGradient>
        <linearGradient id="clampGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#424242"/>
          <stop offset="100%" style="stop-color:#616161"/>
        </linearGradient>
      </defs>
      
      <!-- Title -->
      <text x="210" y="25" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">Force & Extension Apparatus</text>
      
      <!-- Bench/Table -->
      <rect x="20" y="340" width="380" height="20" fill="#8d6e63" rx="2"/>
      <rect x="20" y="355" width="380" height="10" fill="#6d4c41"/>
      
      <!-- Clamp stand base -->
      <rect x="30" y="320" width="100" height="20" fill="url(#clampGrad)" rx="2"/>
      
      <!-- Clamp stand pole -->
      <rect x="75" y="50" width="12" height="270" fill="url(#clampGrad)" rx="2"/>
      
      <!-- Top clamp/boss -->
      <rect x="82" y="55" width="50" height="15" fill="#424242" rx="2"/>
      <circle cx="107" cy="62" r="6" fill="#333"/>
      
      <!-- Spring attachment point -->
      <rect x="125" y="65" width="20" height="10" fill="#555"/>
      
      <!-- Animated Spring -->
      <g>
        <path d="M135 75 
                 L145 85 L125 95 L145 105 L125 115 
                 L145 125 L125 135 L145 145 L125 155 
                 L145 165 L125 175 L145 185 L135 195" 
              stroke="url(#springGrad)" stroke-width="4" fill="none" stroke-linecap="round">
          <animate attributeName="d" 
                   values="M135 75 L145 85 L125 95 L145 105 L125 115 L145 125 L125 135 L145 145 L125 155 L145 165 L125 175 L145 185 L135 195;
                           M135 75 L145 90 L125 105 L145 120 L125 135 L145 150 L125 165 L145 180 L125 195 L145 210 L125 225 L145 240 L135 255;
                           M135 75 L145 85 L125 95 L145 105 L125 115 L145 125 L125 135 L145 145 L125 155 L145 165 L125 175 L145 185 L135 195" 
                   dur="4s" repeatCount="indefinite"/>
        </path>
      </g>
      
      <!-- Pointer/marker on spring -->
      <g>
        <polygon points="145,195 165,195 155,205" fill="#e53935">
          <animate attributeName="points" 
                   values="145,195 165,195 155,205;145,255 165,255 155,265;145,195 165,195 155,205" 
                   dur="4s" repeatCount="indefinite"/>
        </polygon>
      </g>
      
      <!-- Mass hanger with slotted masses -->
      <g>
        <rect x="127" y="200" width="16" height="8" fill="#666" rx="1">
          <animate attributeName="y" values="200;260;200" dur="4s" repeatCount="indefinite"/>
        </rect>
        <!-- Mass 1 -->
        <rect x="120" y="210" width="30" height="15" fill="url(#massGrad)" rx="2" stroke="#e65100" stroke-width="1">
          <animate attributeName="y" values="210;270;210" dur="4s" repeatCount="indefinite"/>
        </rect>
        <text x="135" y="222" text-anchor="middle" font-size="8" fill="#333" font-weight="bold">
          <animate attributeName="y" values="222;282;222" dur="4s" repeatCount="indefinite"/>
          100g
        </text>
        <!-- Mass 2 -->
        <rect x="120" y="227" width="30" height="15" fill="url(#massGrad)" rx="2" stroke="#e65100" stroke-width="1">
          <animate attributeName="y" values="227;287;227" dur="4s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      <!-- Meter ruler -->
      <rect x="180" y="70" width="25" height="250" fill="#fff8e1" stroke="#333" stroke-width="1"/>
      <g fill="#333" font-size="8">
        <line x1="180" y1="80" x2="195" y2="80" stroke="#333" stroke-width="1"/>
        <text x="200" y="83">0</text>
        <line x1="180" y1="100" x2="190" y2="100" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="120" x2="195" y2="120" stroke="#333" stroke-width="1"/>
        <text x="200" y="123">4</text>
        <line x1="180" y1="140" x2="190" y2="140" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="160" x2="195" y2="160" stroke="#333" stroke-width="1"/>
        <text x="200" y="163">8</text>
        <line x1="180" y1="180" x2="190" y2="180" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="200" x2="195" y2="200" stroke="#333" stroke-width="1"/>
        <text x="200" y="203">12</text>
        <line x1="180" y1="220" x2="190" y2="220" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="240" x2="195" y2="240" stroke="#333" stroke-width="1"/>
        <text x="200" y="243">16</text>
        <line x1="180" y1="260" x2="190" y2="260" stroke="#333" stroke-width="0.5"/>
        <line x1="180" y1="280" x2="195" y2="280" stroke="#333" stroke-width="1"/>
        <text x="200" y="283">20</text>
        <line x1="180" y1="300" x2="190" y2="300" stroke="#333" stroke-width="0.5"/>
      </g>
      <text x="192" y="330" text-anchor="middle" font-size="8" fill="#666">cm</text>
      
      <!-- Safety goggles icon -->
      <g transform="translate(280, 80)">
        <ellipse cx="15" cy="15" rx="12" ry="10" fill="none" stroke="#1976d2" stroke-width="2"/>
        <ellipse cx="45" cy="15" rx="12" ry="10" fill="none" stroke="#1976d2" stroke-width="2"/>
        <line x1="27" y1="15" x2="33" y2="15" stroke="#1976d2" stroke-width="2"/>
        <line x1="3" y1="12" x2="0" y2="8" stroke="#1976d2" stroke-width="2"/>
        <line x1="57" y1="12" x2="60" y2="8" stroke="#1976d2" stroke-width="2"/>
        <text x="30" y="40" text-anchor="middle" font-size="9" fill="#1976d2">Safety Goggles</text>
      </g>
      
      <!-- Set square -->
      <g transform="translate(280, 150)">
        <polygon points="0,60 60,60 0,0" fill="none" stroke="#4caf50" stroke-width="2"/>
        <rect x="0" y="50" width="10" height="10" fill="none" stroke="#4caf50" stroke-width="1"/>
        <text x="20" y="80" font-size="9" fill="#4caf50">Set Square</text>
      </g>
      
      <!-- Labels -->
      <g font-size="10" fill="#333">
        <text x="50" y="45">Clamp Stand</text>
        <text x="100" y="145" fill="#607d8b">Spring</text>
        <text x="90" y="280" fill="#ff8f00">Masses</text>
        <text x="220" y="180">Ruler</text>
      </g>
      
      <!-- Extension indicator -->
      <g opacity="0.8">
        <line x1="165" y1="195" x2="175" y2="195" stroke="#e53935" stroke-width="1" stroke-dasharray="3,2">
          <animate attributeName="y1" values="195;255;195" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="y2" values="195;255;195" dur="4s" repeatCount="indefinite"/>
        </line>
        <text x="230" y="230" font-size="9" fill="#e53935">Extension (e)</text>
        <path d="M220 220 L175 205" stroke="#e53935" stroke-width="1" fill="none" marker-end="url(#arrowhead)">
          <animate attributeName="d" values="M220 220 L175 205;M220 260 L175 260;M220 220 L175 205" dur="4s" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>

  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Equipment</th>
        <th style="padding: 0.75rem; text-align: left;">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Clamp stand, boss & clamp</td><td style="padding: 0.75rem;">Hold spring safely</td></tr>
      <tr><td style="padding: 0.75rem;">Metal spring</td><td style="padding: 0.75rem;">Object being tested</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Meter ruler (clamped vertically)</td><td style="padding: 0.75rem;">Measure extension</td></tr>
      <tr><td style="padding: 0.75rem;">Slotted masses (10g – 100g)</td><td style="padding: 0.75rem;">Generate force (weights)</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Pointer indicator / marker</td><td style="padding: 0.75rem;">More accurate extension readings</td></tr>
      <tr><td style="padding: 0.75rem;">Safety goggles</td><td style="padding: 0.75rem;">Protection in case spring snaps</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Set square</td><td style="padding: 0.75rem;">Ensure ruler is vertical</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Setup (Detailed)</h4>
  <div style="background: hsl(var(--muted)/0.3); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <ol style="margin-left: 1.5rem;">
      <li><strong>Secure the clamp stand</strong> to the bench with a large clamp or heavy mass at its base</li>
      <li><strong>Attach the spring</strong> to the top of the clamp</li>
      <li><strong>Hang a pointer</strong> from the bottom of the spring (paper arrow taped to the hook)</li>
      <li><strong>Position the meter ruler</strong> directly next to the spring, zero mark level with pointer</li>
      <li>Use a <strong>set square</strong> to ensure ruler is vertical (avoids parallax error)</li>
      <li>Record the spring's <strong>natural length</strong> (unstretched length)</li>
    </ol>
  </div>

  <h4 class="subsection-subheading">💠 Method (Step-by-Step)</h4>
  
  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ 1. Measure Initial Length</h5>
    <p>Record the starting length of the spring with <strong>0 N</strong> added.</p>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ 2. Add Masses Carefully</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Add a 10g mass (≈ 0.1 N weight)</li>
      <li>Wait for the spring to stop oscillating</li>
      <li>Record the new length</li>
    </ol>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ 3. Increase the Force</h5>
    <p>Add masses in <strong>regular equal steps</strong> (e.g., 0.1 N increments using 10g masses, up to 1 N).</p>
    <p>For each force value, measure the <strong>total length</strong> of the spring.</p>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ 4. Calculate Extension</h5>
    <div style="text-align: center; padding: 1rem; background: hsl(var(--muted)); border-radius: 8px;">
      <p style="font-size: 1.1rem;"><strong>Extension = Stretched Length − Original Length</strong></p>
    </div>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ 5. Repeat Measurements</h5>
    <ol style="margin-left: 1.5rem;">
      <li>Remove all masses</li>
      <li>Allow spring to return to normal</li>
      <li>Repeat the entire experiment two more times</li>
      <li><strong>Average</strong> the extension values</li>
    </ol>
  </div>

  <div style="background: hsl(var(--accent)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0;">
    <h5 style="color: hsl(var(--primary)); margin-bottom: 1rem;">⭐ 6. Identify if Hooke's Law is Obeyed</h5>
    <p>Plot a graph of <strong>Force (N)</strong> on the y-axis vs <strong>Extension (m)</strong> on the x-axis.</p>
    <p style="margin-top: 0.5rem;">A <strong>straight-line graph through the origin</strong> indicates Hooke's Law holds.</p>
  </div>

  <h4 class="subsection-subheading">💠 Results Table (Structure)</h4>
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--primary)); color: hsl(var(--primary-foreground));">
        <th style="padding: 0.75rem; text-align: center;">Mass (g)</th>
        <th style="padding: 0.75rem; text-align: center;">Weight F (N)</th>
        <th style="padding: 0.75rem; text-align: center;">Length (cm)</th>
        <th style="padding: 0.75rem; text-align: center;">Extension (cm)</th>
        <th style="padding: 0.75rem; text-align: center;">Extension (m)</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem; text-align: center;">0</td><td style="padding: 0.75rem; text-align: center;">0.00</td><td style="padding: 0.75rem; text-align: center;">5.0</td><td style="padding: 0.75rem; text-align: center;">0.0</td><td style="padding: 0.75rem; text-align: center;">0.000</td></tr>
      <tr><td style="padding: 0.75rem; text-align: center;">50</td><td style="padding: 0.75rem; text-align: center;">0.49</td><td style="padding: 0.75rem; text-align: center;">6.5</td><td style="padding: 0.75rem; text-align: center;">1.5</td><td style="padding: 0.75rem; text-align: center;">0.015</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem; text-align: center;">100</td><td style="padding: 0.75rem; text-align: center;">0.98</td><td style="padding: 0.75rem; text-align: center;">8.0</td><td style="padding: 0.75rem; text-align: center;">3.0</td><td style="padding: 0.75rem; text-align: center;">0.030</td></tr>
      <tr><td style="padding: 0.75rem; text-align: center;">150</td><td style="padding: 0.75rem; text-align: center;">1.47</td><td style="padding: 0.75rem; text-align: center;">9.5</td><td style="padding: 0.75rem; text-align: center;">4.5</td><td style="padding: 0.75rem; text-align: center;">0.045</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem; text-align: center;">200</td><td style="padding: 0.75rem; text-align: center;">1.96</td><td style="padding: 0.75rem; text-align: center;">11.0</td><td style="padding: 0.75rem; text-align: center;">6.0</td><td style="padding: 0.75rem; text-align: center;">0.060</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Determining the Spring Constant (k)</h4>
  
  <!-- Animated Force-Extension Graph -->
  <div style="display: flex; justify-content: center; margin: 2rem 0;">
    <svg viewBox="0 0 400 320" style="max-width: 400px; width: 100%;">
      <defs>
        <marker id="arrowEnd" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
        </marker>
      </defs>
      
      <!-- Title -->
      <text x="200" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Force vs Extension Graph</text>
      
      <!-- Axes -->
      <line x1="60" y1="260" x2="370" y2="260" stroke="#333" stroke-width="2" marker-end="url(#arrowEnd)"/>
      <line x1="60" y1="260" x2="60" y2="40" stroke="#333" stroke-width="2" marker-end="url(#arrowEnd)"/>
      
      <!-- Y-axis label -->
      <text x="25" y="150" font-size="11" fill="#333" transform="rotate(-90, 25, 150)">Force F (N)</text>
      <text x="55" y="265" font-size="9" fill="#666" text-anchor="end">0</text>
      <text x="55" y="210" font-size="9" fill="#666" text-anchor="end">1</text>
      <text x="55" y="160" font-size="9" fill="#666" text-anchor="end">2</text>
      <text x="55" y="110" font-size="9" fill="#666" text-anchor="end">3</text>
      <text x="55" y="60" font-size="9" fill="#666" text-anchor="end">4</text>
      
      <!-- X-axis label -->
      <text x="215" y="295" font-size="11" fill="#333" text-anchor="middle">Extension e (m)</text>
      <text x="110" y="278" font-size="9" fill="#666" text-anchor="middle">0.02</text>
      <text x="160" y="278" font-size="9" fill="#666" text-anchor="middle">0.04</text>
      <text x="210" y="278" font-size="9" fill="#666" text-anchor="middle">0.06</text>
      <text x="260" y="278" font-size="9" fill="#666" text-anchor="middle">0.08</text>
      <text x="310" y="278" font-size="9" fill="#666" text-anchor="middle">0.10</text>
      
      <!-- Grid lines -->
      <g stroke="#e0e0e0" stroke-width="1">
        <line x1="60" y1="210" x2="360" y2="210"/>
        <line x1="60" y1="160" x2="360" y2="160"/>
        <line x1="60" y1="110" x2="360" y2="110"/>
        <line x1="60" y1="60" x2="360" y2="60"/>
        <line x1="110" y1="260" x2="110" y2="50"/>
        <line x1="160" y1="260" x2="160" y2="50"/>
        <line x1="210" y1="260" x2="210" y2="50"/>
        <line x1="260" y1="260" x2="260" y2="50"/>
        <line x1="310" y1="260" x2="310" y2="50"/>
      </g>
      
      <!-- Linear region (Hooke's Law obeyed) -->
      <line x1="60" y1="260" x2="260" y2="60" stroke="#4caf50" stroke-width="3">
        <animate attributeName="x2" values="60;260;260" dur="2s" fill="freeze"/>
        <animate attributeName="y2" values="260;60;60" dur="2s" fill="freeze"/>
      </line>
      
      <!-- Non-linear region (beyond limit of proportionality) -->
      <path d="M260 60 Q290 55 320 52 Q340 51 360 50" stroke="#e53935" stroke-width="3" fill="none" stroke-dasharray="8,4">
        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" fill="freeze"/>
      </path>
      
      <!-- Data points -->
      <g fill="#1976d2">
        <circle cx="60" cy="260" r="5"><animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze"/></circle>
        <circle cx="110" cy="210" r="5"><animate attributeName="opacity" from="0" to="1" dur="0.7s" fill="freeze"/></circle>
        <circle cx="160" cy="160" r="5"><animate attributeName="opacity" from="0" to="1" dur="0.9s" fill="freeze"/></circle>
        <circle cx="210" cy="110" r="5"><animate attributeName="opacity" from="0" to="1" dur="1.1s" fill="freeze"/></circle>
        <circle cx="260" cy="60" r="5"><animate attributeName="opacity" from="0" to="1" dur="1.3s" fill="freeze"/></circle>
        <circle cx="300" cy="53" r="5" fill="#e53935"><animate attributeName="opacity" from="0" to="1" dur="1.5s" fill="freeze"/></circle>
        <circle cx="340" cy="51" r="5" fill="#e53935"><animate attributeName="opacity" from="0" to="1" dur="1.7s" fill="freeze"/></circle>
      </g>
      
      <!-- Limit of proportionality marker -->
      <line x1="260" y1="260" x2="260" y2="60" stroke="#ff9800" stroke-width="1" stroke-dasharray="5,3"/>
      <text x="265" y="165" font-size="9" fill="#ff9800" transform="rotate(90, 265, 165)">Limit of proportionality</text>
      
      <!-- Legend -->
      <g transform="translate(80, 35)">
        <line x1="0" y1="0" x2="25" y2="0" stroke="#4caf50" stroke-width="3"/>
        <text x="30" y="4" font-size="9" fill="#666">Linear region (Hooke's Law)</text>
        <line x1="0" y1="15" x2="25" y2="15" stroke="#e53935" stroke-width="3" stroke-dasharray="8,4"/>
        <text x="30" y="19" font-size="9" fill="#666">Non-linear (beyond limit)</text>
      </g>
      
      <!-- Gradient annotation -->
      <g transform="translate(100, 180)">
        <text x="0" y="0" font-size="10" fill="#4caf50" font-weight="bold">Gradient = k</text>
        <text x="0" y="14" font-size="9" fill="#666">(spring constant)</text>
      </g>
    </svg>
  </div>

  <div style="background: hsl(var(--chart-1)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0; border-left: 4px solid hsl(var(--chart-1));">
    <h5 style="color: hsl(var(--chart-1)); margin-bottom: 0.5rem;">⭐ Using the Graph</h5>
    <p>The <strong>gradient</strong> of the straight-line portion = spring constant <strong>k</strong></p>
    <div style="text-align: center; padding: 1rem; background: hsl(var(--muted)); border-radius: 8px; margin-top: 0.5rem;">
      <p style="font-size: 1.2rem;"><strong>k = F / e</strong> &nbsp;&nbsp; (Units: N/m)</p>
    </div>
    <ul style="margin-top: 1rem; margin-left: 1rem;">
      <li>Only use the <strong>linear region</strong> before the limit of proportionality</li>
      <li>The steeper the line → the <strong>stiffer</strong> the spring</li>
    </ul>
  </div>

  <h4 class="subsection-subheading">💠 Evaluating & Improving Accuracy</h4>
  <table class="styled-table" style="width: 100%; margin: 1rem 0; border-collapse: collapse;">
    <thead>
      <tr style="background: hsl(var(--destructive)); color: hsl(var(--destructive-foreground));">
        <th style="padding: 0.75rem; text-align: left;">Source of Error</th>
        <th style="padding: 0.75rem; text-align: left;">Why It Happens</th>
        <th style="padding: 0.75rem; text-align: left;">Improvement</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Parallax error</td><td style="padding: 0.75rem;">Reading ruler from angle</td><td style="padding: 0.75rem;">Eye level with pointer</td></tr>
      <tr><td style="padding: 0.75rem;">Spring oscillates</td><td style="padding: 0.75rem;">Hard to read exact length</td><td style="padding: 0.75rem;">Wait until still / use damping</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Mass not centred</td><td style="padding: 0.75rem;">Causes sideways motion</td><td style="padding: 0.75rem;">Ensure masses hang freely</td></tr>
      <tr><td style="padding: 0.75rem;">Zero error on ruler</td><td style="padding: 0.75rem;">Ruler misalignment</td><td style="padding: 0.75rem;">Set ruler zero at pointer before starting</td></tr>
      <tr style="background: hsl(var(--muted)/0.3);"><td style="padding: 0.75rem;">Spring not uniform</td><td style="padding: 0.75rem;">Manufacturing variations</td><td style="padding: 0.75rem;">Repeat with multiple springs</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Safety Precautions</h4>
  <div style="background: hsl(var(--destructive)/0.1); border-radius: 12px; padding: 1.5rem; margin: 1rem 0; border-left: 4px solid hsl(var(--destructive));">
    <ul style="margin-left: 1.5rem;">
      <li><strong>Wear goggles</strong>: spring may snap</li>
      <li>Ensure <strong>clamp stand is securely weighted</strong></li>
      <li>Do <strong>not overload</strong> spring beyond limit of proportionality or elastic limit</li>
    </ul>
  </div>

  <div class="key-point" style="background: linear-gradient(135deg, hsl(var(--chart-1)/0.1), hsl(var(--chart-2)/0.1)); border-radius: 12px; padding: 1.5rem; margin: 1.5rem 0; border-left: 4px solid hsl(var(--chart-1));">
    <h4 style="color: hsl(var(--chart-1)); margin-bottom: 0.5rem;">💠 Conclusion</h4>
    <ul style="margin-left: 1.5rem;">
      <li>In the <strong>linear region</strong>, extension increases proportionally with force</li>
      <li>Beyond the <strong>limit of proportionality</strong>, the graph curves → Hooke's Law no longer applies</li>
      <li>The spring constant <strong>k</strong> quantifies how stiff the spring is:
        <ul style="margin-left: 1rem; margin-top: 0.5rem;">
          <li><strong>Large k</strong> → stiff spring</li>
          <li><strong>Small k</strong> → easily stretched spring</li>
        </ul>
      </li>
    </ul>
  </div>
</div>
            `,
            canonical_keywords: ["Hooke's Law", "force", "extension", "spring constant", "elastic limit", "proportionality", "F=ke", "stiffness", "newton", "meter"],
            practice_items: [
              {
                id: "fe-p1",
                prompt_template: "Describe the method used to investigate the relationship between force and extension for a spring.",
                marks: 6,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["clamp stand", "spring", "ruler", "masses", "measure length", "extension", "repeat", "average"]
              },
              {
                id: "fe-p2",
                prompt_template: "A spring extends by 0.04 m when a force of 2 N is applied. Calculate the spring constant.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: false,
                expected_keywords: ["k = F/e", "k = 2/0.04", "50 N/m"]
              },
              {
                id: "fe-p3",
                prompt_template: "Explain what happens to a spring when it is stretched beyond its limit of proportionality.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["no longer proportional", "curve", "permanent deformation", "does not return"]
              },
              {
                id: "fe-p4",
                prompt_template: "State two safety precautions when investigating force and extension.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["goggles", "spring snap", "secure clamp", "do not overload"]
              }
            ]
          }
        ]
      },
      {
        id: "rp-waves",
        title: "Waves Practicals",
        status: "ready",
        subsections: [
          {
            id: "rp-ripple-tank",
            title: "RP: Ripple Tank - Investigating Wave Properties",
            type: "content",
            study_group: 1,
            content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🌊 Required Practical: Ripple Tank – Investigating Wave Properties</h3>
  
  <div class="key-point">
    <h4>💠 Aim</h4>
    <p>To investigate the properties of water waves in a ripple tank by:</p>
    <ul>
      <li>Measuring <strong>wavelength, frequency, and wave speed</strong></li>
      <li>Observing and explaining <strong>wavefront patterns</strong></li>
      <li>Understanding how waves behave when passing into deeper or shallower water (change in speed)</li>
    </ul>
  </div>

  <h4 class="subsection-subheading">💠 Apparatus</h4>
  
  <!-- Animated Ripple Tank Diagram -->
  <div class="diagram-container">
    <svg viewBox="0 0 500 400" style="max-width: 500px; width: 100%;">
      <defs>
        <linearGradient id="waterSurface" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#81d4fa"/>
          <stop offset="100%" style="stop-color:#0288d1"/>
        </linearGradient>
        <linearGradient id="tankEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#757575"/>
          <stop offset="100%" style="stop-color:#9e9e9e"/>
        </linearGradient>
        <pattern id="wavePattern" x="0" y="0" width="40" height="10" patternUnits="userSpaceOnUse">
          <path d="M0 5 Q10 0 20 5 Q30 10 40 5" stroke="#fff" stroke-width="1.5" fill="none" opacity="0.6">
            <animate attributeName="d" values="M0 5 Q10 0 20 5 Q30 10 40 5;M0 5 Q10 10 20 5 Q30 0 40 5;M0 5 Q10 0 20 5 Q30 10 40 5" dur="1s" repeatCount="indefinite"/>
          </path>
        </pattern>
      </defs>
      
      <!-- Title -->
      <text x="250" y="25" text-anchor="middle" font-size="14" fill="#333" font-weight="bold">Ripple Tank Apparatus</text>
      
      <!-- Lamp above -->
      <ellipse cx="250" cy="55" rx="35" ry="15" fill="#ffeb3b" stroke="#f9a825" stroke-width="2"/>
      <rect x="235" y="40" width="30" height="15" fill="#424242"/>
      <text x="250" y="52" text-anchor="middle" font-size="9" fill="#333">Lamp</text>
      <!-- Light rays -->
      <g stroke="#ffeb3b" stroke-width="1" opacity="0.5">
        <line x1="230" y1="70" x2="180" y2="130"/>
        <line x1="250" y1="70" x2="250" y2="130"/>
        <line x1="270" y1="70" x2="320" y2="130"/>
      </g>
      
      <!-- Tank frame (3D effect) -->
      <rect x="100" y="130" width="300" height="180" fill="url(#tankEdge)" rx="5"/>
      <rect x="110" y="140" width="280" height="160" fill="url(#waterSurface)" rx="3"/>
      
      <!-- Wave pattern overlay -->
      <rect x="110" y="140" width="280" height="160" fill="url(#wavePattern)" rx="3"/>
      
      <!-- Animated wavefronts -->
      <g stroke="#fff" stroke-width="2" fill="none" opacity="0.8">
        <line x1="130" y1="160" x2="130" y2="280">
          <animate attributeName="x1" values="130;370;130" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="130;370;130" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="160" y1="160" x2="160" y2="280">
          <animate attributeName="x1" values="160;400;160" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="160;400;160" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="190" y1="160" x2="190" y2="280">
          <animate attributeName="x1" values="190;430;190" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="190;430;190" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- Vibrating bar -->
      <rect x="105" y="150" width="8" height="130" fill="#795548" rx="2">
        <animate attributeName="x" values="105;107;105;103;105" dur="0.2s" repeatCount="indefinite"/>
      </rect>
      <text x="95" y="145" font-size="8" fill="#333" text-anchor="end">Vibrating</text>
      <text x="95" y="155" font-size="8" fill="#333" text-anchor="end">Bar</text>
      
      <!-- Motor -->
      <rect x="85" y="200" width="25" height="40" fill="#424242" rx="3"/>
      <circle cx="97" cy="220" r="8" fill="#666"/>
      <text x="75" y="255" font-size="8" fill="#333" text-anchor="middle">Motor</text>
      
      <!-- Ruler -->
      <rect x="400" y="140" width="20" height="160" fill="#fff8e1" stroke="#333" stroke-width="1"/>
      <g font-size="7" fill="#333">
        <line x1="400" y1="150" x2="410" y2="150" stroke="#333"/>
        <text x="412" y="153">0</text>
        <line x1="400" y1="180" x2="410" y2="180" stroke="#333"/>
        <text x="412" y="183">3</text>
        <line x1="400" y1="210" x2="410" y2="210" stroke="#333"/>
        <text x="412" y="213">6</text>
        <line x1="400" y1="240" x2="410" y2="240" stroke="#333"/>
        <text x="412" y="243">9</text>
        <line x1="400" y1="270" x2="410" y2="270" stroke="#333"/>
        <text x="412" y="273">12</text>
      </g>
      <text x="410" y="310" font-size="8" fill="#333" text-anchor="middle">Ruler (cm)</text>
      
      <!-- Screen below -->
      <rect x="100" y="320" width="300" height="40" fill="#fff" stroke="#333" stroke-width="2" rx="3"/>
      <text x="250" y="345" text-anchor="middle" font-size="10" fill="#333">White Screen (shows wave shadows)</text>
      
      <!-- Projected wave shadows on screen -->
      <g stroke="#1976d2" stroke-width="3" opacity="0.4">
        <line x1="150" y1="330" x2="150" y2="350">
          <animate attributeName="x1" values="150;350;150" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="150;350;150" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="180" y1="330" x2="180" y2="350">
          <animate attributeName="x1" values="180;380;180" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="180;380;180" dur="3s" repeatCount="indefinite"/>
        </line>
        <line x1="210" y1="330" x2="210" y2="350">
          <animate attributeName="x1" values="210;410;210" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="210;410;210" dur="3s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- Labels -->
      <text x="250" y="230" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Water (5-10mm deep)</text>
      
      <!-- Wavelength indicator -->
      <g transform="translate(280, 180)">
        <line x1="0" y1="0" x2="30" y2="0" stroke="#e53935" stroke-width="2"/>
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#e53935" stroke-width="2"/>
        <line x1="30" y1="-5" x2="30" y2="5" stroke="#e53935" stroke-width="2"/>
        <text x="15" y="-8" text-anchor="middle" font-size="9" fill="#e53935">λ</text>
      </g>
      
      <!-- Power pack -->
      <rect x="50" y="330" width="40" height="30" fill="#1976d2" rx="3"/>
      <text x="70" y="350" text-anchor="middle" font-size="8" fill="#fff">Power</text>
      <line x1="75" y1="345" x2="85" y2="220" stroke="#333" stroke-width="1.5"/>
    </svg>
  </div>

  <table class="styled-table">
    <thead>
      <tr>
        <th>Equipment</th>
        <th>Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Ripple tank with transparent base</td><td>To produce water waves</td></tr>
      <tr><td>Oscillating bar (vibrator motor)</td><td>Creates regular wavefronts</td></tr>
      <tr><td>Power pack</td><td>Controls wave frequency</td></tr>
      <tr><td>Lamp above tank</td><td>Casts shadow/wave pattern onto screen</td></tr>
      <tr><td>White screen / paper</td><td>To observe wavefronts clearly</td></tr>
      <tr><td>Ruler (preferably metal)</td><td>Measure wavelength</td></tr>
      <tr><td>Stopwatch</td><td>Measure frequency/time</td></tr>
      <tr><td>Strobe light (optional)</td><td>"Freeze" the waves for clearer measurement</td></tr>
      <tr><td>Wooden blocks</td><td>Adjust water depth if needed</td></tr>
    </tbody>
  </table>

  <!-- Cross-section diagram showing how lamp projects shadows -->
  <h4 class="subsection-subheading">💡 How the Lamp Creates Wave Shadows</h4>
  <div class="diagram-container">
    <svg viewBox="0 0 480 340" style="max-width: 480px; width: 100%;">
      <defs>
        <linearGradient id="lampBulb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#fff59d"/>
          <stop offset="100%" style="stop-color:#ffeb3b"/>
        </linearGradient>
        <radialGradient id="lightGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#fff59d;stop-opacity:0.8"/>
          <stop offset="70%" style="stop-color:#ffeb3b;stop-opacity:0.2"/>
          <stop offset="100%" style="stop-color:transparent"/>
        </radialGradient>
        <linearGradient id="waterCross" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#81d4fa"/>
          <stop offset="100%" style="stop-color:#29b6f6"/>
        </linearGradient>
      </defs>
      
      <!-- Title -->
      <text x="240" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Cross-Section: How Light Creates Wave Shadows</text>
      
      <!-- Lamp housing -->
      <rect x="200" y="35" width="80" height="30" fill="#424242" rx="5"/>
      <ellipse cx="240" cy="65" rx="30" ry="15" fill="url(#lampBulb)" stroke="#fbc02d" stroke-width="2"/>
      
      <!-- Light glow effect -->
      <ellipse cx="240" cy="65" rx="50" ry="25" fill="url(#lightGlow)">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite"/>
      </ellipse>
      
      <!-- Light rays from lamp -->
      <g stroke="#fdd835" stroke-width="2" opacity="0.6">
        <!-- Left rays -->
        <line x1="210" y1="75" x2="100" y2="150">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="220" y1="78" x2="140" y2="150"/>
        <line x1="230" y1="80" x2="180" y2="150"/>
        <!-- Center rays -->
        <line x1="240" y1="80" x2="240" y2="150"/>
        <!-- Right rays -->
        <line x1="250" y1="80" x2="300" y2="150"/>
        <line x1="260" y1="78" x2="340" y2="150"/>
        <line x1="270" y1="75" x2="380" y2="150">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- Tank (cross-section) -->
      <rect x="80" y="150" width="320" height="80" fill="url(#waterCross)" stroke="#0288d1" stroke-width="3"/>
      
      <!-- Water surface with animated waves -->
      <path d="M80 155 Q120 145 160 155 Q200 165 240 155 Q280 145 320 155 Q360 165 400 155" stroke="#29b6f6" stroke-width="3" fill="none">
        <animate attributeName="d" values="M80 155 Q120 145 160 155 Q200 165 240 155 Q280 145 320 155 Q360 165 400 155;M80 155 Q120 165 160 155 Q200 145 240 155 Q280 165 320 155 Q360 145 400 155;M80 155 Q120 145 160 155 Q200 165 240 155 Q280 145 320 155 Q360 165 400 155" dur="1s" repeatCount="indefinite"/>
      </path>
      
      <!-- Wave crests (thick parts - refract light) -->
      <g fill="#0277bd" opacity="0.5">
        <ellipse cx="120" cy="165" rx="15" ry="25">
          <animate attributeName="cx" values="120;160;120" dur="1s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="200" cy="165" rx="15" ry="25">
          <animate attributeName="cx" values="200;240;200" dur="1s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="280" cy="165" rx="15" ry="25">
          <animate attributeName="cx" values="280;320;280" dur="1s" repeatCount="indefinite"/>
        </ellipse>
        <ellipse cx="360" cy="165" rx="15" ry="25">
          <animate attributeName="cx" values="360;400;360" dur="1s" repeatCount="indefinite"/>
        </ellipse>
      </g>
      
      <!-- Transparent base label -->
      <text x="240" y="218" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Transparent Base</text>
      
      <!-- Light continues through (refracted at crests) -->
      <g stroke="#fdd835" stroke-width="1.5" opacity="0.5">
        <line x1="120" y1="230" x2="120" y2="270">
          <animate attributeName="x1" values="120;160;120" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="115;155;115" dur="1s" repeatCount="indefinite"/>
        </line>
        <line x1="200" y1="230" x2="200" y2="270">
          <animate attributeName="x1" values="200;240;200" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="195;235;195" dur="1s" repeatCount="indefinite"/>
        </line>
        <line x1="280" y1="230" x2="280" y2="270">
          <animate attributeName="x1" values="280;320;280" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="275;315;275" dur="1s" repeatCount="indefinite"/>
        </line>
        <line x1="360" y1="230" x2="360" y2="270">
          <animate attributeName="x1" values="360;400;360" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="355;395;355" dur="1s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- White screen -->
      <rect x="60" y="275" width="360" height="35" fill="#fafafa" stroke="#333" stroke-width="2" rx="3"/>
      
      <!-- Shadow pattern on screen -->
      <g fill="#1565c0" opacity="0.5">
        <rect x="110" y="280" width="20" height="25" rx="2">
          <animate attributeName="x" values="110;150;110" dur="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="190" y="280" width="20" height="25" rx="2">
          <animate attributeName="x" values="190;230;190" dur="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="270" y="280" width="20" height="25" rx="2">
          <animate attributeName="x" values="270;310;270" dur="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="350" y="280" width="20" height="25" rx="2">
          <animate attributeName="x" values="350;390;350" dur="1s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      <!-- Labels -->
      <g font-size="9" fill="#333">
        <text x="30" y="55">Lamp</text>
        <path d="M50 50 L195 50" stroke="#333" stroke-width="1" marker-end="url(#arrowhead)"/>
        
        <text x="420" y="175" fill="#0277bd">Water</text>
        <text x="420" y="188" fill="#0277bd">(5-10mm)</text>
        
        <text x="440" y="295">Screen</text>
      </g>
      
      <!-- Explanation annotations -->
      <rect x="60" y="315" width="170" height="20" fill="#e3f2fd" rx="3"/>
      <text x="145" y="328" text-anchor="middle" font-size="8" fill="#1565c0">Crests focus light → bright bands</text>
      
      <rect x="250" y="315" width="170" height="20" fill="#ffebee" rx="3"/>
      <text x="335" y="328" text-anchor="middle" font-size="8" fill="#c62828">Troughs spread light → dark bands</text>
    </svg>
  </div>
  
  <div class="key-idea-block">
    <h4>How It Works</h4>
    <ul>
      <li><strong>Wave crests</strong> act like converging lenses → focus light → create <strong>bright lines</strong></li>
      <li><strong>Wave troughs</strong> spread light out → create <strong>dark lines</strong></li>
      <li>The pattern of bright/dark lines on the screen shows the <strong>wavefronts</strong></li>
    </ul>
  </div>

  <h4 class="subsection-subheading">💠 Setting Up the Ripple Tank</h4>
  <div class="method-step">
    <ol>
      <li>Fill the tank with <strong>shallow water (5–10 mm depth)</strong> — produces clearer, slower-moving waves</li>
      <li>Position the <strong>lamp directly above</strong> the tank — ensure screen below is evenly illuminated</li>
      <li>Attach the <strong>vibrating bar</strong> to the motor — it should lightly touch the water surface</li>
      <li>Switch on the motor and adjust until waves are <strong>evenly spaced and parallel</strong> to the bar</li>
      <li>Use a <strong>set square</strong> to check the ruler is correctly aligned for measuring wavelengths</li>
    </ol>
  </div>

  <h4 class="subsection-subheading">💠 Method Part A: Measuring Wavelength (λ)</h4>
  
  <!-- Animated Wavelength Measurement Diagram -->
  <div class="diagram-container">
    <svg viewBox="0 0 500 280" style="max-width: 500px; width: 100%;">
      <defs>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#fafafa"/>
          <stop offset="100%" style="stop-color:#e0e0e0"/>
        </linearGradient>
        <filter id="shadowBlur">
          <feGaussianBlur stdDeviation="2"/>
        </filter>
      </defs>
      
      <!-- Title -->
      <text x="250" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Measuring Wavelength from Wave Shadows</text>
      
      <!-- White screen/paper -->
      <rect x="40" y="50" width="420" height="150" fill="url(#screenGrad)" stroke="#999" stroke-width="2" rx="5"/>
      <text x="250" y="45" text-anchor="middle" font-size="10" fill="#666">White Screen (Wave Shadows Projected)</text>
      
      <!-- Wave shadow lines (crests) - stationary for measurement -->
      <g stroke="#1565c0" stroke-width="4" opacity="0.6" filter="url(#shadowBlur)">
        <line x1="80" y1="70" x2="80" y2="180"/>
        <line x1="140" y1="70" x2="140" y2="180"/>
        <line x1="200" y1="70" x2="200" y2="180"/>
        <line x1="260" y1="70" x2="260" y2="180"/>
        <line x1="320" y1="70" x2="320" y2="180"/>
        <line x1="380" y1="70" x2="380" y2="180"/>
      </g>
      
      <!-- Ruler overlay -->
      <rect x="60" y="185" width="340" height="25" fill="#fff8e1" stroke="#795548" stroke-width="2" rx="2"/>
      <!-- Ruler markings -->
      <g stroke="#333" font-size="8" fill="#333">
        <line x1="80" y1="185" x2="80" y2="195" stroke-width="1.5"/>
        <text x="80" y="207" text-anchor="middle">0</text>
        <line x1="140" y1="185" x2="140" y2="195" stroke-width="1.5"/>
        <text x="140" y="207" text-anchor="middle">3</text>
        <line x1="200" y1="185" x2="200" y2="195" stroke-width="1.5"/>
        <text x="200" y="207" text-anchor="middle">6</text>
        <line x1="260" y1="185" x2="260" y2="195" stroke-width="1.5"/>
        <text x="260" y="207" text-anchor="middle">9</text>
        <line x1="320" y1="185" x2="320" y2="195" stroke-width="1.5"/>
        <text x="320" y="207" text-anchor="middle">12</text>
        <line x1="380" y1="185" x2="380" y2="195" stroke-width="1.5"/>
        <text x="380" y="207" text-anchor="middle">15</text>
        <!-- Small mm marks -->
        <line x1="92" y1="185" x2="92" y2="190" stroke-width="0.5"/>
        <line x1="104" y1="185" x2="104" y2="190" stroke-width="0.5"/>
        <line x1="116" y1="185" x2="116" y2="190" stroke-width="0.5"/>
        <line x1="128" y1="185" x2="128" y2="190" stroke-width="0.5"/>
        <line x1="152" y1="185" x2="152" y2="190" stroke-width="0.5"/>
        <line x1="164" y1="185" x2="164" y2="190" stroke-width="0.5"/>
        <line x1="176" y1="185" x2="176" y2="190" stroke-width="0.5"/>
        <line x1="188" y1="185" x2="188" y2="190" stroke-width="0.5"/>
      </g>
      <text x="230" y="225" text-anchor="middle" font-size="9" fill="#795548">Ruler (cm)</text>
      
      <!-- Counting labels on crests -->
      <g font-size="11" fill="#e53935" font-weight="bold">
        <circle cx="80" cy="125" r="12" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
        <text x="80" y="129" text-anchor="middle">1</text>
        <circle cx="140" cy="125" r="12" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
        <text x="140" y="129" text-anchor="middle">2</text>
        <circle cx="200" cy="125" r="12" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
        <text x="200" y="129" text-anchor="middle">3</text>
        <circle cx="260" cy="125" r="12" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
        <text x="260" y="129" text-anchor="middle">4</text>
        <circle cx="320" cy="125" r="12" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
        <text x="320" y="129" text-anchor="middle">5</text>
        <circle cx="380" cy="125" r="12" fill="#ffcdd2" stroke="#e53935" stroke-width="2"/>
        <text x="380" y="129" text-anchor="middle">6</text>
      </g>
      
      <!-- Measurement arrow showing total distance -->
      <g>
        <line x1="80" y1="165" x2="380" y2="165" stroke="#4caf50" stroke-width="2"/>
        <polygon points="80,165 90,160 90,170" fill="#4caf50"/>
        <polygon points="380,165 370,160 370,170" fill="#4caf50"/>
        <rect x="190" y="155" width="80" height="18" fill="#fff" stroke="#4caf50" rx="3"/>
        <text x="230" y="168" text-anchor="middle" font-size="10" fill="#4caf50" font-weight="bold">15 cm total</text>
      </g>
      
      <!-- Calculation box -->
      <rect x="40" y="235" width="420" height="40" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="5"/>
      <text x="250" y="252" text-anchor="middle" font-size="11" fill="#2e7d32" font-weight="bold">Calculation: 6 crests = 5 wavelengths</text>
      <text x="250" y="268" text-anchor="middle" font-size="12" fill="#1b5e20" font-weight="bold">λ = 15 cm ÷ 5 = 3 cm = 0.03 m</text>
    </svg>
  </div>

  <div class="definition-block">
    <h4>⭐ Method A – Direct Measurement from Projected Wavefronts</h4>
    <ol>
      <li>Switch on the lamp so wave shadows appear clearly on the screen</li>
      <li>Identify <strong>5–10 consecutive wave crests</strong> (bright lines)</li>
      <li>Measure the distance from the first crest to the last crest using a ruler</li>
      <li>Divide by the number of wavelengths between them:</li>
    </ol>
    <div class="formula-box">
      <p>λ = distance across many waves ÷ number of waves</p>
    </div>
    <p><strong>Why this is good:</strong> Reduces percentage error by using multiple wavelengths</p>
  </div>

  <!-- Animated Strobe Light Diagram -->
  <div class="diagram-container">
    <svg viewBox="0 0 500 300" style="max-width: 500px; width: 100%;">
      <defs>
        <linearGradient id="strobeLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ffeb3b"/>
          <stop offset="100%" style="stop-color:#ffc107"/>
        </linearGradient>
        <radialGradient id="flashGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#fff59d"/>
          <stop offset="100%" style="stop-color:transparent"/>
        </radialGradient>
      </defs>
      
      <!-- Title -->
      <text x="250" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Strobe Light Method - "Freezing" Waves</text>
      
      <!-- Split view labels -->
      <text x="125" y="45" text-anchor="middle" font-size="11" fill="#e53935" font-weight="bold">Without Strobe (Blurred)</text>
      <text x="375" y="45" text-anchor="middle" font-size="11" fill="#4caf50" font-weight="bold">With Strobe (Frozen)</text>
      
      <!-- Divider -->
      <line x1="250" y1="55" x2="250" y2="280" stroke="#999" stroke-width="2" stroke-dasharray="5,5"/>
      
      <!-- Left side - Without Strobe (moving waves, blurred) -->
      <rect x="30" y="60" width="190" height="130" fill="#e3f2fd" stroke="#1976d2" stroke-width="2" rx="5"/>
      
      <!-- Blurred moving waves -->
      <g opacity="0.4">
        <rect x="50" y="80" width="15" height="90" fill="#1565c0" rx="2">
          <animate attributeName="x" values="50;200;50" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="90" y="80" width="15" height="90" fill="#1565c0" rx="2">
          <animate attributeName="x" values="90;240;90" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="130" y="80" width="15" height="90" fill="#1565c0" rx="2">
          <animate attributeName="x" values="130;280;130" dur="1s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1s" repeatCount="indefinite"/>
        </rect>
      </g>
      
      <!-- Motion blur effect text -->
      <text x="125" y="205" text-anchor="middle" font-size="10" fill="#c62828">❌ Hard to measure - waves are moving!</text>
      
      <!-- Right side - With Strobe (stationary waves, clear) -->
      <rect x="280" y="60" width="190" height="130" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="5"/>
      
      <!-- Clear stationary waves -->
      <g fill="#1565c0">
        <rect x="300" y="80" width="8" height="90" rx="2"/>
        <rect x="340" y="80" width="8" height="90" rx="2"/>
        <rect x="380" y="80" width="8" height="90" rx="2"/>
        <rect x="420" y="80" width="8" height="90" rx="2"/>
      </g>
      
      <!-- Wavelength measurement arrows -->
      <g stroke="#e53935" stroke-width="2">
        <line x1="304" y1="175" x2="344" y2="175"/>
        <polygon points="304,175 310,172 310,178" fill="#e53935"/>
        <polygon points="344,175 338,172 338,178" fill="#e53935"/>
        <text x="324" y="188" text-anchor="middle" font-size="9" fill="#e53935" font-weight="bold">λ</text>
      </g>
      
      <!-- Strobe light icon -->
      <g transform="translate(375, 220)">
        <rect x="-25" y="-10" width="50" height="25" fill="#424242" rx="5"/>
        <ellipse cx="0" cy="2" rx="15" ry="8" fill="url(#strobeLight)"/>
        <!-- Flashing effect -->
        <ellipse cx="0" cy="2" rx="25" ry="15" fill="url(#flashGlow)">
          <animate attributeName="opacity" values="0;1;0" dur="0.3s" repeatCount="indefinite"/>
        </ellipse>
        <text x="0" y="30" text-anchor="middle" font-size="9" fill="#333">Strobe Light</text>
      </g>
      
      <!-- Checkmark -->
      <text x="375" y="205" text-anchor="middle" font-size="10" fill="#2e7d32">✓ Clear crests - easy to measure!</text>
      
      <!-- Explanation box -->
      <rect x="30" y="250" width="440" height="40" fill="#fff3e0" stroke="#ff9800" stroke-width="2" rx="5"/>
      <text x="250" y="267" text-anchor="middle" font-size="10" fill="#e65100" font-weight="bold">When strobe frequency = wave frequency, waves appear stationary</text>
      <text x="250" y="282" text-anchor="middle" font-size="9" fill="#bf360c">Adjust strobe until waves "freeze" → measure spacing between crests</text>
    </svg>
  </div>

  <div class="spec-point-block">
    <h4>⭐ Method B – Using a Strobe Light (Higher Accuracy)</h4>
    <ol>
      <li>Set the strobe frequency close to the wave frequency</li>
      <li>Adjust until the waves appear <strong>stationary ("frozen")</strong></li>
      <li>Measure the spacing between stationary crests — this = wavelength</li>
    </ol>
    <p><strong>Why this is good:</strong> Removes motion blur and makes crests sharper</p>
  </div>

  <h4 class="subsection-subheading">💠 Method Part B: Measuring Frequency (f)</h4>
  
  <!-- Animated Frequency Counting Diagram -->
  <div class="diagram-container">
    <svg viewBox="0 0 480 250" style="max-width: 480px; width: 100%;">
      <defs>
        <linearGradient id="tankWaterFreq" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#4fc3f7"/>
          <stop offset="100%" style="stop-color:#0288d1"/>
        </linearGradient>
      </defs>
      
      <!-- Title -->
      <text x="240" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Counting Waves to Find Frequency</text>
      
      <!-- Tank view from above -->
      <rect x="40" y="50" width="300" height="120" fill="url(#tankWaterFreq)" stroke="#01579b" stroke-width="3" rx="5"/>
      
      <!-- Animated wavefronts moving across -->
      <g stroke="#fff" stroke-width="3" opacity="0.8">
        <line x1="60" y1="60" x2="60" y2="160">
          <animate attributeName="x1" values="60;340;60" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="60;340;60" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="100" y1="60" x2="100" y2="160">
          <animate attributeName="x1" values="100;380;100" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="100;380;100" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="140" y1="60" x2="140" y2="160">
          <animate attributeName="x1" values="140;420;140" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="140;420;140" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="180" y1="60" x2="180" y2="160">
          <animate attributeName="x1" values="180;460;180" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="180;460;180" dur="5s" repeatCount="indefinite"/>
        </line>
        <line x1="220" y1="60" x2="220" y2="160">
          <animate attributeName="x1" values="220;500;220" dur="5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="220;500;220" dur="5s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- Fixed counting point marker -->
      <g>
        <line x1="200" y1="45" x2="200" y2="175" stroke="#e53935" stroke-width="3" stroke-dasharray="5,3"/>
        <polygon points="200,45 195,55 205,55" fill="#e53935"/>
        <circle cx="200" cy="110" r="8" fill="#e53935" stroke="#fff" stroke-width="2">
          <animate attributeName="r" values="8;12;8" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="200" y="185" text-anchor="middle" font-size="10" fill="#e53935" font-weight="bold">Fixed Point</text>
      </g>
      
      <!-- Stopwatch -->
      <g transform="translate(380, 70)">
        <circle cx="40" cy="40" r="38" fill="#fafafa" stroke="#333" stroke-width="3"/>
        <circle cx="40" cy="40" r="32" fill="#fff" stroke="#999" stroke-width="1"/>
        <!-- Clock hands -->
        <line x1="40" y1="40" x2="40" y2="15" stroke="#333" stroke-width="2"/>
        <line x1="40" y1="40" x2="55" y2="40" stroke="#e53935" stroke-width="1.5">
          <animateTransform attributeName="transform" type="rotate" from="0 40 40" to="360 40 40" dur="10s" repeatCount="indefinite"/>
        </line>
        <circle cx="40" cy="40" r="3" fill="#333"/>
        <!-- Button -->
        <rect x="35" y="0" width="10" height="8" fill="#666" rx="2"/>
        <text x="40" y="95" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">10 seconds</text>
      </g>
      
      <!-- Counter display -->
      <rect x="365" y="140" width="90" height="50" fill="#263238" stroke="#37474f" stroke-width="2" rx="5"/>
      <text x="410" y="160" text-anchor="middle" font-size="10" fill="#4caf50">Waves counted:</text>
      <text x="410" y="180" text-anchor="middle" font-size="18" fill="#4caf50" font-weight="bold">
        <animate attributeName="textContent" values="1;2;3;4;5;6;7;8;9;10;11;12;13;14;15;16;17;18;19;20;1" dur="10s" repeatCount="indefinite"/>
        20
      </text>
      
      <!-- Calculation box -->
      <rect x="40" y="200" width="420" height="45" fill="#e8f5e9" stroke="#4caf50" stroke-width="2" rx="5"/>
      <text x="250" y="218" text-anchor="middle" font-size="11" fill="#2e7d32" font-weight="bold">Calculation: 20 waves pass the fixed point in 10 seconds</text>
      <text x="250" y="238" text-anchor="middle" font-size="14" fill="#1b5e20" font-weight="bold">f = 20 ÷ 10 = 2 Hz (2 waves per second)</text>
    </svg>
  </div>
  
  <div class="info-grid">
    <div class="definition-block">
      <h4>⭐ Method A – Using the Power Pack</h4>
      <p>If the vibrator is connected to a calibrated power supply, read frequency directly (e.g., 15 Hz)</p>
    </div>
    <div class="key-facts-block">
      <h4>⭐ Method B – Counting Waves Manually</h4>
      <ol>
        <li>Choose a fixed point on the tank</li>
        <li>Count how many crests pass it in <strong>10 seconds</strong></li>
        <li>Use: <strong>f = number of waves ÷ time</strong></li>
      </ol>
      <p><em>Why 10 seconds? Minimises reaction-time error</em></p>
    </div>
  </div>

  <h4 class="subsection-subheading">💠 Method Part C: Calculating Wave Speed (v)</h4>
  
  <div class="key-point">
    <h4>The Wave Equation</h4>
    <div class="formula-box">
      <p style="font-size: 1.5rem;">v = f × λ</p>
      <p class="formula-note">wave speed = frequency × wavelength</p>
    </div>
    <p>Once both <strong>frequency (f)</strong> and <strong>wavelength (λ)</strong> are known, calculate wave speed.</p>
  </div>

  <div class="example-block">
    <h4>⭐ Direct Speed Method (Alternative)</h4>
    <ol>
      <li>Track a single crest with your eye</li>
      <li>Measure the time it takes to travel a measured distance</li>
      <li>Use: <strong>v = d ÷ t</strong></li>
    </ol>
    <p><em>Less accurate but acceptable</em></p>
  </div>

  <h4 class="subsection-subheading">💠 Extension: Depth & Wave Speed</h4>
  
  <!-- Animated Depth Comparison Diagram -->
  <div class="diagram-container">
    <svg viewBox="0 0 450 220" style="max-width: 450px; width: 100%;">
      <defs>
        <linearGradient id="deepWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#4fc3f7"/>
          <stop offset="100%" style="stop-color:#0277bd"/>
        </linearGradient>
        <linearGradient id="shallowWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#b3e5fc"/>
          <stop offset="100%" style="stop-color:#4fc3f7"/>
        </linearGradient>
      </defs>
      
      <!-- Title -->
      <text x="225" y="20" text-anchor="middle" font-size="13" fill="#333" font-weight="bold">Wave Behaviour in Different Depths</text>
      
      <!-- Deep water section -->
      <rect x="30" y="50" width="180" height="100" fill="url(#deepWater)" rx="5"/>
      <text x="120" y="45" text-anchor="middle" font-size="11" fill="#333" font-weight="bold">Deep Water</text>
      
      <!-- Deep water waves (wider spacing) -->
      <g stroke="#fff" stroke-width="2" opacity="0.8">
        <line x1="50" y1="60" x2="50" y2="140">
          <animate attributeName="x1" values="50;200;50" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="50;200;50" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="90" y1="60" x2="90" y2="140">
          <animate attributeName="x1" values="90;240;90" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="90;240;90" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="130" y1="60" x2="130" y2="140">
          <animate attributeName="x1" values="130;280;130" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="130;280;130" dur="2s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- Shallow water section -->
      <rect x="240" y="80" width="180" height="70" fill="url(#shallowWater)" rx="5"/>
      <rect x="240" y="120" width="180" height="30" fill="#8d6e63" rx="0 0 5 5"/>
      <text x="330" y="45" text-anchor="middle" font-size="11" fill="#333" font-weight="bold">Shallow Water</text>
      
      <!-- Shallow water waves (closer spacing) -->
      <g stroke="#0277bd" stroke-width="2" opacity="0.8">
        <line x1="260" y1="90" x2="260" y2="115">
          <animate attributeName="x1" values="260;400;260" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="260;400;260" dur="2.5s" repeatCount="indefinite"/>
        </line>
        <line x1="285" y1="90" x2="285" y2="115">
          <animate attributeName="x1" values="285;425;285" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="285;425;285" dur="2.5s" repeatCount="indefinite"/>
        </line>
        <line x1="310" y1="90" x2="310" y2="115">
          <animate attributeName="x1" values="310;450;310" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="310;450;310" dur="2.5s" repeatCount="indefinite"/>
        </line>
        <line x1="335" y1="90" x2="335" y2="115">
          <animate attributeName="x1" values="335;475;335" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="x2" values="335;475;335" dur="2.5s" repeatCount="indefinite"/>
        </line>
      </g>
      
      <!-- Labels -->
      <text x="120" y="165" text-anchor="middle" font-size="10" fill="#0277bd" font-weight="bold">Faster waves</text>
      <text x="120" y="178" text-anchor="middle" font-size="10" fill="#0277bd">Longer wavelength (λ)</text>
      
      <text x="330" y="165" text-anchor="middle" font-size="10" fill="#e65100" font-weight="bold">Slower waves</text>
      <text x="330" y="178" text-anchor="middle" font-size="10" fill="#e65100">Shorter wavelength (λ)</text>
      
      <!-- Arrow showing transition -->
      <path d="M215 100 L235 100" stroke="#333" stroke-width="2" marker-end="url(#arrowEnd)"/>
      
      <!-- Key equation -->
      <text x="225" y="205" text-anchor="middle" font-size="11" fill="#333">v ∝ λ (frequency stays constant)</text>
    </svg>
  </div>

  <div class="key-idea-block">
    <h4>Key Concept</h4>
    <ul>
      <li><strong>Deeper water</strong> → waves travel faster, wavelengths spread out</li>
      <li><strong>Shallower water</strong> → waves slow down, wavefronts get closer together</li>
      <li><strong>Frequency remains unchanged</strong> when waves enter a new medium</li>
      <li>This mirrors the behaviour of <strong>light waves entering a denser medium</strong></li>
    </ul>
  </div>

  <h4 class="subsection-subheading">💠 Expected Results & Interpretation</h4>
  
  <table class="styled-table">
    <thead>
      <tr>
        <th>Quantity</th>
        <th>When Increased</th>
        <th>What You Observe</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Frequency (f)</td><td>Higher vibrator setting</td><td>Waves closer together in time</td></tr>
      <tr><td>Wavelength (λ)</td><td>Lower frequency</td><td>Crests further apart</td></tr>
      <tr><td>Depth</td><td>Increased</td><td>Wavefronts spread out (speed ↑)</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Sources of Error & How to Reduce Them</h4>
  
  <table class="styled-table">
    <thead>
      <tr>
        <th>Error</th>
        <th>Cause</th>
        <th>Reduction</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Blurred crests</td><td>Fast-moving waves</td><td>Use strobe or reduce depth</td></tr>
      <tr><td>Parallax error</td><td>Ruler viewed at angle</td><td>Align eye directly above ruler</td></tr>
      <tr><td>Uneven waves</td><td>Vibrator too strong</td><td>Lower power supply voltage</td></tr>
      <tr><td>Reflections from edges</td><td>Waves bounce off sides</td><td>Use foam pieces at edges to absorb waves</td></tr>
      <tr><td>Water depth uneven</td><td>Tilted tank</td><td>Level tank using spirit level</td></tr>
    </tbody>
  </table>

  <h4 class="subsection-subheading">💠 Safety Precautions</h4>
  <div class="safety-block">
    <h4>⚠️ Safety</h4>
    <ul>
      <li>Keep electrical equipment <strong>away from water spills</strong></li>
      <li><strong>Dry hands</strong> before handling power pack</li>
      <li>Do not overfill the tank (risk of overflow near cables)</li>
      <li><strong>Clean water spills immediately</strong> to avoid slipping</li>
    </ul>
  </div>

  <div class="conclusion-block">
    <h4>💠 Conclusion</h4>
    <p>This practical demonstrates:</p>
    <ul>
      <li>How to measure <strong>wavelength, frequency, and wave speed</strong> precisely</li>
      <li>That <strong>wave speed = frequency × wavelength</strong></li>
      <li>That wave speed changes when waves move into different depths</li>
      <li>That wavefronts bend when wave speed changes (basis for <strong>refraction</strong>)</li>
    </ul>
    <p style="margin-top: 1rem;"><em>This practical is essential for understanding wave behaviour, refraction, and the wave equation.</em></p>
  </div>
</div>
            `,
            canonical_keywords: ["ripple tank", "wavelength", "frequency", "wave speed", "v=fλ", "wavefronts", "refraction", "depth", "strobe", "oscillation"],
            practice_items: [
              {
                id: "rt-p1",
                prompt_template: "Describe how you would measure the wavelength of water waves using a ripple tank.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["lamp", "screen", "measure", "multiple waves", "divide", "ruler"]
              },
              {
                id: "rt-p2",
                prompt_template: "A student counts 20 waves passing a point in 10 seconds. The wavelength is 0.03 m. Calculate the wave speed.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: false,
                expected_keywords: ["f = 20/10 = 2 Hz", "v = f × λ", "v = 2 × 0.03", "0.06 m/s"]
              },
              {
                id: "rt-p3",
                prompt_template: "Explain what happens to the wavelength of water waves when they travel from deep water into shallow water.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["wavelength decreases", "speed decreases", "frequency constant", "closer together"]
              },
              {
                id: "rt-p4",
                prompt_template: "State two ways to reduce errors when measuring wavelength in a ripple tank.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["strobe light", "measure multiple waves", "eye level", "level tank"]
              }
            ]
          },
          infraredSubsection
        ]
      }
    ]
  }
];
