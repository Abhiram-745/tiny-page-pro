// GCSE AQA Product Design - Complete with all subsections and color coding

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

export interface TopicSection {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
}

export const productDesignData: TopicSection[] = [
  {
    id: "selection-of-materials",
    title: "3.2.1 – Selection of Materials or Components",
    status: "ready",
    subsections: [
      {
        id: "definition",
        title: "Subsection 1 – Definition",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>The <strong>selection of materials or components</strong> is the process of choosing the most suitable materials or parts for a product, based on how they look, feel, perform, cost, and affect people or the planet.</p>
  <p>Designers must carefully consider both <strong>functional</strong> (how it works) and <strong>aesthetic</strong> (how it looks) requirements, as well as ethical, social, cultural, and environmental impacts.</p>
  <p>In AQA Product Design, this means knowing how to choose the best material for a specific product — for example, deciding between oak, aluminium, or polypropylene for a chair.</p>
</div>
        `,
        canonical_keywords: ["material selection","functional","aesthetic","ethical"],
        practice_items: []
      },
      {
        id: "key-influences",
        title: "Subsection 2 – Key Influences on Material Selection",
        type: "content",
        study_group: 1,
        content_html: `
<div class="key-facts-block">
  <h4>✨ Functionality</h4>
  <p>How well the material performs the job it's needed for.</p>
  <ul>
    <li><strong>Timber:</strong> Oak is strong and durable for furniture</li>
    <li><strong>Metal:</strong> Aluminium is lightweight and corrosion-resistant for bikes</li>
    <li><strong>Polymer:</strong> Acrylic can be easily shaped and has a glossy surface for signs</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>🎨 Aesthetics</h4>
  <p>How the product looks, feels, and appeals to the senses.</p>
  <ul>
    <li><strong>Timber:</strong> Grain pattern in beech or mahogany adds beauty</li>
    <li><strong>Metal:</strong> Polished stainless steel looks modern</li>
    <li><strong>Polymer:</strong> Available in many colours and finishes</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>🌍 Environmental Factors</h4>
  <p>How the material affects the environment throughout its life (from "cradle to grave").</p>
  <ul>
    <li><strong>Timber:</strong> Renewable if FSC-certified</li>
    <li><strong>Metal:</strong> Mining causes pollution, but metals can be recycled</li>
    <li><strong>Polymer:</strong> Made from oil, so non-renewable — only eco if recycled</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>📦 Availability</h4>
  <p>How easy it is to get the material or component.</p>
  <ul>
    <li><strong>Timber:</strong> Widely available in standard forms (planks, sheets)</li>
    <li><strong>Metal:</strong> Easily available but energy-heavy to produce</li>
    <li><strong>Polymer:</strong> Mass-produced and globally available</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>💰 Cost</h4>
  <p>Includes financial cost and environmental cost.</p>
  <ul>
    <li><strong>Financial:</strong> Pine (softwood) is cheap; hardwoods like oak are expensive</li>
    <li><strong>Environmental:</strong> MDF uses glue and energy, not fully sustainable</li>
    <li><strong>Metal:</strong> Precious metals (gold, silver) are costly</li>
    <li><strong>Polymer:</strong> Expensive in small quantities, cheaper when mass produced</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>👥 Social Factors</h4>
  <p>How the choice of materials affects people and communities.</p>
  <ul>
    <li>Using recycled or fair-trade materials supports communities</li>
    <li>Safe working conditions must be ensured when sourcing materials</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>🏛️ Cultural Factors</h4>
  <p>The impact of culture, religion, and values on design.</p>
  <ul>
    <li>Colours or patterns must not offend cultural groups</li>
    <li>Designers research symbolism and avoid inappropriate imagery</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>⚖️ Ethical Factors</h4>
  <p>Choosing materials that do not harm people or the planet — doing the "right thing."</p>
  <ul>
    <li>Use FSC-certified wood (sustainably sourced)</li>
    <li>Avoid child labour or unsafe mining</li>
    <li>Use biodegradable materials like Potatopak</li>
  </ul>
</div>
        `,
        canonical_keywords: ["functionality","aesthetics","environmental","FSC","availability","cost","social","cultural","ethical"],
        practice_items: []
      },
      {
        id: "examples-timber-metal-polymer",
        title: "🪵 Subsection 3 – Examples and Applications (Materials)",
        type: "content",
        study_group: 2,
        content_html: `
<div class="example-block">
  <h4>🪚 Timber-Based Materials</h4>
  <ul>
    <li><strong>Balsa:</strong> Very light, easy to cut, weak (model-making)</li>
    <li><strong>Oak:</strong> Strong, decorative, used for furniture and floors</li>
    <li><strong>Pine:</strong> Strong softwood, grows quickly, easy to work with</li>
    <li><strong>Softwoods (e.g. pine):</strong> Cheap, quick to grow</li>
    <li><strong>Hardwoods (e.g. oak, ash, beech):</strong> Expensive, slow to grow</li>
    <li><strong>MDF, plywood:</strong> Low cost, large sheets, stable</li>
    <li><strong>Environmental cost:</strong> MDF dust is hazardous; hardwood forests take longer to replace</li>
  </ul>
</div>

<div class="example-block">
  <h4>🔩 Metal-Based Materials</h4>
  <ul>
    <li><strong>Low-carbon steel:</strong> Strong, easy to weld (car bodies), cheap</li>
    <li><strong>Aluminium:</strong> Light and corrosion-resistant (bikes)</li>
    <li><strong>Gold and silver:</strong> Decorative, used in jewellery, extremely expensive</li>
    <li><strong>Environmental cost:</strong> Mining and refining use huge energy and produce harmful gases</li>
  </ul>
</div>

<div class="example-block">
  <h4>🧴 Polymer-Based Materials</h4>
  <ul>
    <li><strong>Thermoplastics:</strong> Can be remoulded and reshaped</li>
    <li>Available in bright colours, often glossy, do not corrode</li>
    <li>Good electrical and thermal insulators</li>
    <li>Cheap when mass-produced (e.g. bottles, chairs)</li>
    <li><strong>Environmental cost:</strong> Oil-based, polluting, some cannot be recycled</li>
  </ul>
</div>
        `,
        canonical_keywords: ["timber","metal","polymer","materials","examples"],
        practice_items: []
      },
      {
        id: "key-terminology",
        title: "🧠 Subsection 4 – Key Terminology",
        type: "content",
        study_group: 2,
        content_html: `
<div class="definition-block">
  <h4>Important Terms</h4>
  <ul>
    <li><strong>FSC (Forest Stewardship Council):</strong> Organisation ensuring wood is sourced sustainably, protecting forests and wildlife</li>
    <li><strong>WEEE (Waste Electrical and Electronic Equipment):</strong> Law controlling disposal and recycling of electronics and components</li>
    <li><strong>Potatopak:</strong> A biodegradable, compostable material made from potato starch, used as an eco alternative to plastic packaging</li>
    <li><strong>Bulk Buying:</strong> Buying large quantities of material to reduce cost per unit — common in mass production</li>
  </ul>
</div>
        `,
        canonical_keywords: ["FSC","WEEE","Potatopak","terminology","bulk buying"],
        practice_items: []
      },
      {
        id: "environmental-ethical",
        title: "🧩 Subsection 5 – Environmental and Ethical Overview",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>🌱 Environmental Responsibility</h4>
  <ul>
    <li>Designers must reduce the ecological footprint of products</li>
    <li>Materials should be renewable, recyclable, or biodegradable</li>
    <li><strong>Life Cycle Thinking:</strong> "Cradle to grave" — consider sourcing, use, and disposal</li>
    <li>Avoid toxic adhesives and harmful coatings (especially in polymers and MDF)</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>💭 Ethical Responsibility</h4>
  <ul>
    <li>Avoid exploiting workers or using unsafe materials</li>
    <li>Prefer fair-trade, recycled, or certified sources</li>
    <li>Choose sustainable companies (e.g. FSC-certified wood)</li>
  </ul>
</div>
        `,
        canonical_keywords: ["environmental","ethical","sustainable","life cycle"],
        practice_items: []
      },
      {
        id: "example-application",
        title: "🪜 Subsection 6 – Example Application Task",
        type: "content",
        study_group: 3,
        content_html: `
<div class="example-block">
  <h4>Example Question:</h4>
  <p>"Examine three chairs made from different materials and used in different areas of school. Explain why the materials have been used for each chair."</p>
  
  <h4>Example Answer (Model Response):</h4>
  <ul>
    <li><strong>Classroom chair:</strong> Polypropylene and steel - Polypropylene is lightweight, mouldable, easy to clean. Steel frame = strong and durable</li>
    <li><strong>Library chair:</strong> Beech hardwood - Comfortable, attractive grain, strong for everyday use</li>
    <li><strong>Workshop stool:</strong> Aluminium - Lightweight and resistant to rust and spills</li>
  </ul>
</div>
        `,
        canonical_keywords: ["application","example","chairs","model answer"],
        practice_items: []
      },
      {
        id: "summary-table",
        title: "Subsection 7 – Summary Table",
        type: "content",
        study_group: 3,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Factor</th>
        <th>Definition</th>
        <th>Example (Timber)</th>
        <th>Example (Metal)</th>
        <th>Example (Polymer)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Functionality</td>
        <td>How well material performs</td>
        <td>Oak for strength</td>
        <td>Steel for car frames</td>
        <td>Acrylic for signage</td>
      </tr>
      <tr>
        <td>Aesthetics</td>
        <td>Looks and feel</td>
        <td>Mahogany for grain</td>
        <td>Polished aluminium</td>
        <td>Glossy polypropylene</td>
      </tr>
      <tr>
        <td>Environment</td>
        <td>Effect on planet</td>
        <td>FSC wood</td>
        <td>Recycled aluminium</td>
        <td>Recycled PET bottles</td>
      </tr>
      <tr>
        <td>Availability</td>
        <td>How easy to source</td>
        <td>Readily available</td>
        <td>Common</td>
        <td>Mass produced</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Price and energy</td>
        <td>Softwood = cheap</td>
        <td>Gold = costly</td>
        <td>Plastic = cheap in bulk</td>
      </tr>
      <tr>
        <td>Social/Cultural</td>
        <td>Fit with people's values</td>
        <td>Fair-trade furniture</td>
        <td>Recycled metals</td>
        <td>Vegan-friendly materials</td>
      </tr>
      <tr>
        <td>Ethical</td>
        <td>Doing the right thing</td>
        <td>FSC, no illegal logging</td>
        <td>Safe mining</td>
        <td>Biodegradable plastics</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["summary","comparison","factors"],
        practice_items: []
      },
      {
        id: "fair-trade-ethical-sourcing",
        title: "🌍 Subsection 8 – Fair Trade and Ethical Sourcing",
        type: "content",
        study_group: 4,
        content_html: `
<div class="definition-block">
  <h4>⚛️ Definition</h4>
  <p><strong>Fair trade</strong> means buying materials or components that have been sourced fairly, ensuring workers are treated well, paid fairly, and no exploitation occurs during production.</p>
</div>

<div class="key-facts-block">
  <h4>🔹 Why Fair Trade Matters in Material Selection</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Reason</th>
        <th>Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Worker Rights</td>
        <td>Ensures workers have safe conditions and fair wages.</td>
      </tr>
      <tr>
        <td>No Child Labour</td>
        <td>Protects vulnerable communities and follows global labour laws.</td>
      </tr>
      <tr>
        <td>Sustainable Practice</td>
        <td>Often linked with eco-friendly production and community development.</td>
      </tr>
      <tr>
        <td>Brand Reputation</td>
        <td>Ethically-sourced products appeal to conscious consumers.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>🧱 Examples of Ethical/Fair Trade Materials</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Material / Component</th>
        <th>Fair Practice</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cotton (textiles)</td>
        <td>Fairtrade-certified farms use no child labour.</td>
      </tr>
      <tr>
        <td>Timber (woods)</td>
        <td>FSC-certified = responsibly managed forests.</td>
      </tr>
      <tr>
        <td>Metals (electronics)</td>
        <td>Conflict-free tin, gold, and tungsten.</td>
      </tr>
      <tr>
        <td>Food-safe packaging</td>
        <td>Fair trade paperboard for chocolate or tea packaging.</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["fair trade","ethical sourcing","worker rights","FSC","conflict-free","child labour"],
        practice_items: []
      }
    ]
  },
  {
    id: "forces-and-stresses",
    title: "3.2.2 – Forces and Stresses",
    status: "ready",
    subsections: [
      {
        id: "definition",
        title: "Subsection 1 – Definition",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p><strong>Forces and stresses</strong> describe the external loads and internal reactions that act on materials and structures when they are used. These forces can stretch, compress, bend, twist, or shear a material, and understanding them helps designers choose and improve materials for safe, strong, and reliable products.</p>
  <p>In AQA Product Design, this topic explains how different materials respond to forces and how they can be reinforced, stiffened, or enhanced to improve performance.</p>
</div>
        `,
        canonical_keywords: ["forces","stresses","definition"],
        practice_items: []
      },
      {
        id: "types-of-forces",
        title: "Subsection 2 – Types of Forces Acting on Materials",
        type: "content",
        study_group: 1,
        content_html: `
<div class="key-facts-block">
  <h4>Five Main Types of Mechanical Forces</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type of Force</th>
        <th>Definition</th>
        <th>Example / Application</th>
        <th>Effect on Material</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tension</strong></td>
        <td>Pulling force that tries to stretch a material apart</td>
        <td>A rope in a tug-of-war, steel cables in bridges</td>
        <td>Makes materials longer and thinner; can cause snapping if tensile strength is low</td>
      </tr>
      <tr>
        <td><strong>Compression</strong></td>
        <td>Pushing or squashing force that squeezes materials together</td>
        <td>Table legs, chair legs, or a brick wall supporting weight</td>
        <td>Makes materials shorter and thicker; can cause buckling or crushing</td>
      </tr>
      <tr>
        <td><strong>Bending</strong></td>
        <td>A combination of compression and tension caused by a force acting at an angle</td>
        <td>A shelf bending under heavy books</td>
        <td>The top side is in compression, bottom side in tension</td>
      </tr>
      <tr>
        <td><strong>Shear</strong></td>
        <td>Forces act across a material in opposite directions but close together</td>
        <td>Scissors cutting paper, garden shears, rivets</td>
        <td>Causes materials to slide and split along a plane</td>
      </tr>
      <tr>
        <td><strong>Torsion</strong></td>
        <td>Twisting force that acts around an axis</td>
        <td>Bottle lid being opened, car drive shafts turning</td>
        <td>Can cause spiralling stress or material failure under rotation</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["tension","compression","bending","shear","torsion","forces"],
        practice_items: []
      },
      {
        id: "static-dynamic",
        title: "Subsection 3 – Static and Dynamic Loads",
        type: "content",
        study_group: 2,
        content_html: `
<div class="definition-block">
  <h4>Static vs Dynamic Loads</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type of Load</th>
        <th>Description</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Static</strong></td>
        <td>A constant, downward force that doesn't move</td>
        <td>A person standing still holding a box</td>
      </tr>
      <tr>
        <td><strong>Dynamic</strong></td>
        <td>A moving or changing force that can act in multiple directions</td>
        <td>A person walking while holding the same box, or wind acting on a bridge</td>
      </tr>
    </tbody>
  </table>
  <p><strong>💬 Why this matters:</strong> Designers must ensure materials and structures can withstand both static and dynamic loads without failure. For example, a bridge experiences constant static load (its own weight) and dynamic loads (vehicles moving across it).</p>
</div>
        `,
        canonical_keywords: ["static","dynamic","loads"],
        practice_items: []
      },
      {
        id: "enhancing",
        title: "Subsection 4 – Enhancing Materials",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>Enhancement Methods</h4>
  <p>Materials can be modified or reinforced to resist forces and stresses more effectively. These processes improve strength, stiffness, and flexibility depending on what's needed.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Material / Process</th>
        <th>Enhancement Method</th>
        <th>Purpose / Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Rope</strong></td>
        <td>Twisting multiple strands of natural or synthetic fibres (cotton, nylon, polypropylene)</td>
        <td>Increases tensile strength — used in climbing ropes and suspension bridges</td>
      </tr>
      <tr>
        <td><strong>Concrete</strong></td>
        <td>Adding steel rods (rebar) before it sets to make reinforced concrete</td>
        <td>Improves tensile strength while keeping excellent compressive strength — used in bridges and skyscrapers</td>
      </tr>
      <tr>
        <td><strong>Timber</strong></td>
        <td>Lamination – gluing thin layers (plies) of wood with grains in different directions</td>
        <td>Improves stiffness and bending resistance — used in curved furniture, beams, and skateboards</td>
      </tr>
      <tr>
        <td><strong>Fabric</strong></td>
        <td>Weaving / Webbing – combining fibres for strength; interfacing adds stiffness</td>
        <td>Increases tensile strength (e.g. seat belts, shirt collars, upholstery)</td>
      </tr>
      <tr>
        <td><strong>Polymers</strong></td>
        <td>Fibre reinforcement – adding carbon or glass fibres to resin (CFRP or GRP)</td>
        <td>Greatly increases strength-to-weight ratio; used in sports cars, aircraft, helmets</td>
      </tr>
      <tr>
        <td><strong>Shape design</strong></td>
        <td>Using structural forms such as I-beams, T-beams, and box sections</td>
        <td>Increases load-bearing ability without adding extra material</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["enhancing","reinforcement","lamination","CFRP","GRP"],
        practice_items: []
      },
      {
        id: "examples-applications",
        title: "Subsection 5 – Examples and Applications",
        type: "content",
        study_group: 3,
        content_html: `
<div class="example-block">
  <h4>Timber-Based Materials</h4>
  <ul>
    <li><strong>Laminated timber:</strong> Thin layers glued to make stronger beams. Used in furniture, bridges, and building structures</li>
    <li><strong>Plywood:</strong> Alternating grain directions resist bending and warping</li>
    <li><strong>Glulam beams:</strong> Large, laminated structural beams that combine high strength with flexibility</li>
  </ul>
</div>

<div class="example-block">
  <h4>Metal-Based Materials</h4>
  <ul>
    <li><strong>Steel reinforcement in concrete:</strong> Improves tensile strength</li>
    <li><strong>I-beams:</strong> Used in construction to resist bending forces</li>
    <li><strong>Aluminium alloys:</strong> Lightweight but strong; resist torsion in aircraft bodies and car frames</li>
  </ul>
</div>

<div class="example-block">
  <h4>Polymer-Based Materials</h4>
  <ul>
    <li><strong>Glass Reinforced Plastic (GRP):</strong> Glass fibres embedded in resin; used for boat hulls and car panels</li>
    <li><strong>Carbon Fibre Reinforced Polymer (CFRP):</strong> Carbon fibres in epoxy resin; extremely strong and lightweight (e.g. bicycles, aircraft)</li>
    <li><strong>Corrugated plastic:</strong> Strong under compression, used in lightweight packaging</li>
  </ul>
</div>
        `,
        canonical_keywords: ["timber","metal","polymer","examples","applications"],
        practice_items: []
      },
      {
        id: "shape-reinforcement",
        title: "Subsection 6 – Shape and Structural Reinforcement",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Designing with Shape</h4>
  <p>A material's shape often determines its strength more than its composition.</p>
  <ul>
    <li><strong>I-beams:</strong> Resist bending in one direction due to flanges</li>
    <li><strong>Triangular trusses:</strong> Distribute forces evenly across bridges</li>
    <li><strong>Curved forms and domes:</strong> Spread compression loads efficiently</li>
  </ul>
  <p><strong>Example:</strong> A cardboard tube supports more weight vertically than a flat sheet because the shape increases stiffness and spreads compression forces.</p>
</div>
        `,
        canonical_keywords: ["shape","structural","reinforcement","I-beams","trusses"],
        practice_items: []
      },
      {
        id: "why-understand",
        title: "Subsection 7 – Why Designers Must Understand Forces",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Designers must know how materials react to stresses to:</h4>
  <ol>
    <li>Prevent product failure (e.g. a shelf collapsing due to bending)</li>
    <li>Ensure safety in use (e.g. chair legs not snapping)</li>
    <li>Choose the most efficient material and shape for the job</li>
    <li>Reduce waste and cost by avoiding over-engineering</li>
    <li>Improve product lifespan through reinforcement or correct material selection</li>
  </ol>
</div>
        `,
        canonical_keywords: ["design","safety","efficiency","product failure"],
        practice_items: []
      },
      {
        id: "key-terminology",
        title: "Subsection 8 – Key Terminology",
        type: "content",
        study_group: 4,
        content_html: `
<div class="definition-block">
  <h4>Important Terms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Term</th>
        <th>Definition / Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tensile Strength</strong></td>
        <td>The ability of a material to resist being pulled apart (tension)</td>
      </tr>
      <tr>
        <td><strong>Compressive Strength</strong></td>
        <td>The ability to resist being squashed or compressed</td>
      </tr>
      <tr>
        <td><strong>Elasticity</strong></td>
        <td>The ability of a material to return to its original shape after being deformed</td>
      </tr>
      <tr>
        <td><strong>Plasticity</strong></td>
        <td>The ability to permanently deform without breaking</td>
      </tr>
      <tr>
        <td><strong>Ductility</strong></td>
        <td>The ability to be stretched or drawn into wires</td>
      </tr>
      <tr>
        <td><strong>Malleability</strong></td>
        <td>The ability to be hammered or rolled into sheets</td>
      </tr>
      <tr>
        <td><strong>Rigidity</strong></td>
        <td>The stiffness of a material; resistance to bending</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["terminology","tensile","compressive","elasticity","ductility","malleability"],
        practice_items: []
      },
      {
        id: "summary-table",
        title: "Subsection 9 – Summary Table of Forces",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Force Type</th>
        <th>Definition</th>
        <th>Example</th>
        <th>Material Best at Resisting</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tension</td>
        <td>Pulling apart</td>
        <td>Rope, cables</td>
        <td>Steel, nylon, Kevlar</td>
      </tr>
      <tr>
        <td>Compression</td>
        <td>Pushing/squashing</td>
        <td>Table leg</td>
        <td>Concrete, brick, oak</td>
      </tr>
      <tr>
        <td>Shear</td>
        <td>Sliding in opposite directions</td>
        <td>Scissors</td>
        <td>Steel</td>
      </tr>
      <tr>
        <td>Bending</td>
        <td>Curving under load</td>
        <td>Shelf with books</td>
        <td>Plywood, laminated wood</td>
      </tr>
      <tr>
        <td>Torsion</td>
        <td>Twisting</td>
        <td>Car axle</td>
        <td>Steel, carbon fibre</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["summary","forces","materials"],
        practice_items: []
      },
      {
        id: "real-world-examples",
        title: "Subsection 10 – Real-World Examples",
        type: "content",
        study_group: 4,
        content_html: `
<div class="example-block">
  <h4>Real-World Product Examples</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Main Force Experienced</th>
        <th>How Material/Design Resists It</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bridge</td>
        <td>Tension + Compression</td>
        <td>Steel cables in tension; concrete towers in compression</td>
      </tr>
      <tr>
        <td>Chair</td>
        <td>Compression + Bending</td>
        <td>Hardwood frame resists bending; joints distribute load</td>
      </tr>
      <tr>
        <td>Car Chassis</td>
        <td>Torsion + Shear</td>
        <td>Welded steel frame and reinforced beams</td>
      </tr>
      <tr>
        <td>Boat Hull (GRP)</td>
        <td>Compression + Torsion</td>
        <td>Glass fibres add flexibility and strength</td>
      </tr>
      <tr>
        <td>Corrugated Cardboard Box</td>
        <td>Compression</td>
        <td>Corrugations increase stiffness vertically</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["real-world","examples","products","applications"],
        practice_items: []
      }
    ]
  },
  {
    id: "sources-and-origins",
    title: "3.2.4 – Sources and Origins",
    status: "ready",
    subsections: [
      {
        id: "overview",
        title: "Subsection 1 – Overview: What Does 'Sources and Origins' Mean?",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>Every product we design begins with <strong>raw materials</strong> — natural resources that must be extracted or grown before being converted into a usable form. These raw materials come from one of five main categories:</p>
  <ul>
    <li>Timber-based (trees)</li>
    <li>Metal-based (ores)</li>
    <li>Polymer-based (crude oil)</li>
    <li>Textile-based (plants, animals, chemicals)</li>
    <li>Paper and board-based (wood pulp or grasses)</li>
  </ul>
  <p>Before they can be manufactured, these raw materials must go through a conversion process such as smelting, refining, pulping, polymerisation, or spinning.</p>
</div>

<div class="key-facts-block">
  <h4>💬 Why this matters:</h4>
  <p>Designers need to understand the origin, availability, and processing of materials so they can:</p>
  <ul>
    <li>Choose suitable materials for a product's function</li>
    <li>Consider environmental and ethical impacts</li>
    <li>Make sustainable decisions about finite vs renewable resources</li>
  </ul>
</div>
        `,
        canonical_keywords: ["raw materials","sources","origins","conversion"],
        practice_items: []
      },
      {
        id: "timber-based",
        title: "🌲 Subsection 2 – Timber-Based Materials",
        type: "content",
        study_group: 1,
        content_html: `
<div class="key-facts-block">
  <h4>🧩 Source of Timber</h4>
  <p>Timber comes from trees grown in managed forests or plantations. There are two main types of natural wood:</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Tree Type</th>
        <th>Examples</th>
        <th>Typical Properties</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Hardwood</td>
        <td>Deciduous (lose leaves annually, slow-growing)</td>
        <td>Oak, Beech, Mahogany</td>
        <td>Dense, strong, decorative grain, expensive</td>
      </tr>
      <tr>
        <td>Softwood</td>
        <td>Coniferous (evergreen, fast-growing)</td>
        <td>Pine, Spruce, Cedar</td>
        <td>Lightweight, cheaper, easy to cut, sustainable</td>
      </tr>
      <tr>
        <td>Manufactured Board</td>
        <td>Man-made (from waste wood and resin)</td>
        <td>MDF, Plywood, Chipboard</td>
        <td>Stable, large sheets, smooth finish</td>
      </tr>
    </tbody>
  </table>
  <p><strong>🌍 Environmental note:</strong> Softwoods grow faster and are often used in construction because they are renewable within 30–40 years. Hardwoods take up to 100 years to mature, so they must be FSC-certified to ensure forests are replanted and biodiversity is protected.</p>
</div>

<div class="key-facts-block">
  <h4>Conversion of Timber</h4>
  <p>Once felled, logs are taken to sawmills for conversion into usable planks or boards. The goal is to produce wood that's easy to handle, stable, and the right shape for products.</p>
  
  <h5>Methods of Conversion</h5>
  <ol>
    <li><strong>Through and Through (Plain Sawn):</strong> Boards are cut straight across the log
      <ul>
        <li>✅ Cheaper, quick, little waste</li>
        <li>❌ More likely to warp or twist</li>
      </ul>
    </li>
    <li><strong>Quarter Sawn:</strong> Log cut into quarters and then across the grain
      <ul>
        <li>✅ Stronger, more decorative pattern, less shrinkage</li>
        <li>❌ Expensive and more wasteful</li>
      </ul>
    </li>
    <li><strong>Tangential Cut:</strong> Tangential to the growth rings</li>
  </ol>
</div>

<div class="key-facts-block">
  <h4>Seasoning of Timber</h4>
  <p>Freshly felled timber contains around 50% water. If used immediately, it will shrink, crack, or twist. Seasoning removes this water to stabilise the timber.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Advantages</th>
        <th>Disadvantages</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Air Seasoning</td>
        <td>Wood stacked under cover, air circulates between boards for months or years</td>
        <td>Cheap, eco-friendly, suitable for outdoor use</td>
        <td>Slow, not always fully dry, affected by weather</td>
      </tr>
      <tr>
        <td>Kiln Seasoning</td>
        <td>Wood placed in a large heated chamber with fans and humidity control</td>
        <td>Quick, produces very dry and stable timber</td>
        <td>Uses lots of energy, higher cost</td>
      </tr>
    </tbody>
  </table>
  <p>✅ Seasoned timber is lighter, stronger, less likely to warp, and accepts paints and finishes evenly.</p>
</div>

<div class="key-facts-block">
  <h4>Manufactured Boards</h4>
  <p><strong>Definition:</strong> Engineered sheets made by combining waste wood fibres or veneers with adhesives under heat and pressure.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Structure</th>
        <th>Key Properties</th>
        <th>Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Plywood</td>
        <td>Layers of veneer glued with grains at 90° angles</td>
        <td>Strong in both directions, doesn't warp</td>
        <td>Construction, furniture</td>
      </tr>
      <tr>
        <td>MDF</td>
        <td>Wood fibres mixed with resin and pressed into sheets</td>
        <td>Smooth, easy to cut, uniform texture</td>
        <td>Cabinetry, model-making</td>
      </tr>
      <tr>
        <td>Chipboard</td>
        <td>Wood chips + resin pressed into sheets</td>
        <td>Cheap, flat, but weak when wet</td>
        <td>Flat-pack furniture</td>
      </tr>
    </tbody>
  </table>
  <p><strong>Environmental impact:</strong> Manufactured boards recycle waste timber but rely on synthetic adhesives that may release formaldehyde. They're harder to recycle than solid wood.</p>
</div>
        `,
        canonical_keywords: ["timber","hardwood","softwood","seasoning","manufactured boards","plywood","MDF"],
        practice_items: []
      },
      {
        id: "metal-based",
        title: "Subsection 3 – Metal-Based Materials",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>🧩 Source of Metals (Ores)</h4>
  <p>Metals are extracted from <strong>ores</strong>, naturally occurring rocks containing metal compounds. The process of mining and refining transforms ore into usable metal.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Metal</th>
        <th>Ore Name</th>
        <th>Key Locations</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Iron</td>
        <td>Haematite</td>
        <td>China, Brazil, Australia</td>
        <td>Used to make steel</td>
      </tr>
      <tr>
        <td>Aluminium</td>
        <td>Bauxite</td>
        <td>Australia, Guinea</td>
        <td>Lightweight, corrosion-resistant</td>
      </tr>
      <tr>
        <td>Copper</td>
        <td>Chalcopyrite</td>
        <td>Chile, Peru</td>
        <td>Good conductor of heat/electricity</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>Mining Processes</h4>
  <ul>
    <li><strong>Surface (open-cast) mining:</strong> removes large sections of land, causing deforestation and soil loss</li>
    <li><strong>Underground mining:</strong> tunnels dug deep into the Earth, high risk, costly, and disruptive</li>
  </ul>
  <p><strong>💡 Environmental effects:</strong> Mining uses massive energy and creates toxic waste. Designers should consider recycled metals whenever possible — recycling aluminium saves 95% energy compared to extracting new material.</p>
</div>

<div class="key-facts-block">
  <h4>🔥 Metal Conversion: Extraction and Refining</h4>
  
  <h5>Iron Extraction – The Blast Furnace</h5>
  <ul>
    <li><strong>Inputs:</strong> Haematite (iron ore), coke (carbon), limestone</li>
    <li><strong>Process:</strong> Heated to ~1,700°C in a tall furnace
      <ul>
        <li>Coke burns to make carbon monoxide gas</li>
        <li>The gas reduces haematite to molten iron</li>
        <li>Limestone removes impurities (forms slag)</li>
      </ul>
    </li>
    <li><strong>Outputs:</strong> Pig iron → refined into steel in a Basic Oxygen Furnace (BOF)</li>
    <li><strong>Environmental impact:</strong> Uses fossil fuels, emits CO₂, and operates continuously to save energy once heated</li>
  </ul>
  
  <h5>⚡ Aluminium Extraction – Electrolysis</h5>
  <ul>
    <li><strong>Ore:</strong> Bauxite, processed into alumina (Al₂O₃)</li>
    <li><strong>Process:</strong>
      <ol>
        <li>Alumina dissolved in molten cryolite</li>
        <li>Electric current passed between carbon electrodes</li>
        <li>Aluminium collects at the bottom; oxygen released at the top</li>
      </ol>
    </li>
    <li><strong>Result:</strong> Pure aluminium metal</li>
    <li><strong>💡</strong> Requires massive electricity → factories are often near hydroelectric power stations for sustainability</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>Refining and Alloying</h4>
  <p>Pure metals are rarely used — they are often too soft. <strong>Alloying</strong> (adding another element) improves properties.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Base Metal</th>
        <th>Added Element(s)</th>
        <th>Example Alloy</th>
        <th>Key Property</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Iron</td>
        <td>Carbon</td>
        <td>Steel</td>
        <td>Strong and tough</td>
      </tr>
      <tr>
        <td>Copper</td>
        <td>Tin</td>
        <td>Bronze</td>
        <td>Hard, corrosion-resistant</td>
      </tr>
      <tr>
        <td>Copper</td>
        <td>Zinc</td>
        <td>Brass</td>
        <td>Attractive, easy to cast</td>
      </tr>
      <tr>
        <td>Aluminium</td>
        <td>Copper + Manganese</td>
        <td>Duralumin</td>
        <td>Strong, light</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["metals","ores","mining","blast furnace","electrolysis","alloying","steel","aluminium"],
        practice_items: []
      },
      {
        id: "polymers",
        title: "Subsection 4 – Polymers (Crude Oil to Plastic)",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>⛽ Source of Polymers</h4>
  <p>Most plastics are synthetic polymers made from <strong>crude oil</strong>, a finite fossil fuel found deep underground. Oil is located in countries like Saudi Arabia, Venezuela, Russia, and the USA.</p>
  
  <h5>Extraction process:</h5>
  <ol>
    <li>Seismic surveys locate underground oil</li>
    <li>Oil wells are drilled; crude oil pumped to the surface</li>
    <li>Oil is transported via pipelines and tankers to refineries</li>
  </ol>
</div>

<div class="key-facts-block">
  <h4>Fractional Distillation of Crude Oil</h4>
  <p>Crude oil is a mix of hydrocarbons of different molecular sizes. It must be separated in a distillation tower:</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Stage</th>
        <th>Temperature</th>
        <th>Main Output</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bottom</td>
        <td>~370°C</td>
        <td>Bitumen, heavy oil</td>
      </tr>
      <tr>
        <td>Middle</td>
        <td>250–300°C</td>
        <td>Diesel, kerosene</td>
      </tr>
      <tr>
        <td>Top</td>
        <td>20–100°C</td>
        <td>Petrol, LPG, Naphtha</td>
      </tr>
    </tbody>
  </table>
  <p><strong>🧩</strong> The <strong>naphtha fraction</strong> is the key part used for plastic production.</p>
</div>

<div class="key-facts-block">
  <h4>🔬 Cracking and Polymerisation</h4>
  
  <h5>Cracking</h5>
  <p>Heats naphtha to break large hydrocarbons into smaller ones (e.g. ethylene, propylene). These small molecules are called <strong>monomers</strong>.</p>
  
  <h5>Polymerisation</h5>
  <p>Monomers chemically bond into long molecular chains called <strong>polymers</strong>.</p>
  <p><strong>Example:</strong></p>
  <ul>
    <li>Ethylene → Polyethylene (PE)</li>
    <li>Propylene → Polypropylene (PP)</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>🔥 Thermoplastics vs Thermosets</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Molecular Structure</th>
        <th>Properties</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thermoplastics</td>
        <td>Linear, weak bonds between chains</td>
        <td>Soften when heated, can be reshaped and recycled</td>
        <td>Acrylic, PVC, Polypropylene</td>
      </tr>
      <tr>
        <td>Thermosets</td>
        <td>Cross-linked 3D molecular structure</td>
        <td>Heat-resistant, rigid, cannot be reshaped</td>
        <td>Epoxy resin, Melamine, Bakelite</td>
      </tr>
    </tbody>
  </table>
  <p><strong>Environmental Note:</strong> Polymers rely on non-renewable resources, but recycling and bioplastics (e.g. Potatopak) can reduce the ecological footprint.</p>
</div>
        `,
        canonical_keywords: ["polymers","crude oil","fractional distillation","polymerisation","thermoplastics","thermosets"],
        practice_items: []
      },
      {
        id: "textile-based",
        title: "Subsection 5 – Textile-Based Materials",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Natural Fibres</h4>
  <p>Derived from plants or animals, these are renewable but require processing.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Fibre</th>
        <th>Source</th>
        <th>Process Summary</th>
        <th>Main Uses / Properties</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cotton</td>
        <td>Seed bolls from cotton plant</td>
        <td>Harvested → Cleaned → Combed → Twisted → Yarn</td>
        <td>Soft, breathable, strong, absorbent</td>
      </tr>
      <tr>
        <td>Wool</td>
        <td>Fleece of sheep or goats</td>
        <td>Sheared → Cleaned → Carded → Spun</td>
        <td>Warm, elastic, good insulator</td>
      </tr>
      <tr>
        <td>Silk</td>
        <td>Cocoon of silk moth</td>
        <td>Boiled → Unwound → Reeled</td>
        <td>Smooth, shiny, luxurious</td>
      </tr>
      <tr>
        <td>Linen</td>
        <td>Flax plant stems</td>
        <td>Soaked → Beaten → Spun</td>
        <td>Crisp, cool, hard-wearing</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>Synthetic Fibres</h4>
  <p>Made from oil- or coal-based chemicals through polymerisation.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Fibre</th>
        <th>Made From</th>
        <th>Process Summary</th>
        <th>Properties / Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Polyester</td>
        <td>Oil-derived monomers</td>
        <td>Melted → Spun into filaments</td>
        <td>Strong, crease-resistant, dries quickly</td>
      </tr>
      <tr>
        <td>Nylon</td>
        <td>Oil or coal</td>
        <td>Extruded and polymerised</td>
        <td>Strong, elastic, used in ropes, parachutes</td>
      </tr>
      <tr>
        <td>Acrylic</td>
        <td>Acrylonitrile</td>
        <td>Melt-spun and cut</td>
        <td>Soft, wool-like, cheap</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>🧩 Spinning Process (Yarn Production)</h4>
  <ol>
    <li><strong>Staple fibres</strong> (short, like cotton/wool) → cleaned, straightened (carded), twisted to form yarn</li>
    <li><strong>Filament fibres</strong> (continuous, like silk/polyester) → lightly twisted for strength</li>
    <li><strong>Tight twist</strong> = smooth, strong yarn. <strong>Loose twist</strong> = soft, warm yarn (traps air)</li>
  </ol>
  <p><strong>💬</strong> Yarn then woven, knitted, or bonded into fabrics.</p>
</div>
        `,
        canonical_keywords: ["textiles","natural fibres","synthetic fibres","cotton","wool","polyester","spinning"],
        practice_items: []
      },
      {
        id: "paper-and-board",
        title: "📄 Subsection 6 – Paper and Board",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>🌳 Source and Pulping</h4>
  <p>Paper and board are made from cellulose fibres from wood pulp or grasses like bamboo. Most pulp comes from softwood trees (pine, spruce) because of their long fibres.</p>
  
  <h5>Process:</h5>
  <ol>
    <li>Logs debarked and chipped</li>
    <li>Chips boiled in water + chemicals to release cellulose</li>
    <li>Pulp washed, bleached, and drained</li>
    <li>Pulp pressed, rolled, and dried into large continuous sheets</li>
  </ol>
</div>

<div class="key-facts-block">
  <h4>📦 Properties and Types</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
        <th>Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Paper</td>
        <td>Thin, lightweight sheet (under 200 gsm)</td>
        <td>Printing, packaging, writing</td>
      </tr>
      <tr>
        <td>Board</td>
        <td>Thicker, layered (above 200 gsm)</td>
        <td>Boxes, cards, cartons</td>
      </tr>
      <tr>
        <td>Corrugated Board</td>
        <td>Wavy inner layer between two liners</td>
        <td>Strong packaging</td>
      </tr>
    </tbody>
  </table>
  <p><strong>Environmental Aspect:</strong> Recycling saves trees and water. Around 70% of UK paper is recycled. However, each recycling cycle shortens fibres, eventually requiring virgin pulp.</p>
</div>
        `,
        canonical_keywords: ["paper","board","pulping","cellulose","recycling","corrugated"],
        practice_items: []
      },
      {
        id: "sustainability",
        title: "Subsection 7 – Sustainability and Environmental Impact",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Material</th>
        <th>Renewable or Finite?</th>
        <th>Environmental Concern</th>
        <th>Sustainable Solution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Timber</td>
        <td>Renewable</td>
        <td>Deforestation, biodiversity loss</td>
        <td>FSC-certified forests, replanting</td>
      </tr>
      <tr>
        <td>Metals</td>
        <td>Finite</td>
        <td>Mining damage, pollution</td>
        <td>Recycle scrap metal (saves 95% energy)</td>
      </tr>
      <tr>
        <td>Polymers</td>
        <td>Finite</td>
        <td>Non-biodegradable waste, oil use</td>
        <td>Recycled plastics, biodegradable polymers</td>
      </tr>
      <tr>
        <td>Textiles</td>
        <td>Mostly renewable</td>
        <td>High water use (cotton), energy use</td>
        <td>Use organic fibres, recycle fabrics</td>
      </tr>
      <tr>
        <td>Paper</td>
        <td>Renewable</td>
        <td>Tree use, bleaching chemicals</td>
        <td>Recycled paper, eco inks</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["sustainability","environmental","renewable","finite","FSC","recycling"],
        practice_items: []
      },
      {
        id: "summary-table",
        title: "Subsection 8 – Summary Table",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Material Type</th>
        <th>Primary Source</th>
        <th>Conversion Process</th>
        <th>Final Form</th>
        <th>Example Products</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Timber</td>
        <td>Trees</td>
        <td>Felling → Conversion → Seasoning</td>
        <td>Planks, boards</td>
        <td>Furniture, doors</td>
      </tr>
      <tr>
        <td>Metal</td>
        <td>Ore</td>
        <td>Mining → Smelting → Refining</td>
        <td>Sheets, rods</td>
        <td>Cars, bridges</td>
      </tr>
      <tr>
        <td>Polymer</td>
        <td>Crude oil</td>
        <td>Distillation → Cracking → Polymerisation</td>
        <td>Pellets, moulds</td>
        <td>Bottles, chairs</td>
      </tr>
      <tr>
        <td>Textile</td>
        <td>Plants, animals, oil</td>
        <td>Cleaning → Spinning → Weaving</td>
        <td>Fabric, yarn</td>
        <td>Clothing, rope</td>
      </tr>
      <tr>
        <td>Paper/Board</td>
        <td>Wood pulp</td>
        <td>Pulping → Pressing → Drying</td>
        <td>Sheets, rolls</td>
        <td>Packaging, stationery</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["summary","conversion","materials","processing"],
        practice_items: []
      }
    ]
  },
  {
    id: "properties-and-forming",
    title: "3.2.6 – Properties & Forming",
    status: "ready",
    subsections: [
      {
        id: "overview",
        title: "Subsection 1 – Overview",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>Every material has unique <strong>properties</strong> that affect how it can be used, shaped, and formed. Understanding these properties helps designers and manufacturers choose the most suitable materials for a product's function, safety, performance, and cost.</p>
  
  <p>This section explores:</p>
  <ul>
    <li>Physical and mechanical properties of different materials</li>
    <li>Why certain materials are chosen for commercial products</li>
    <li>How to shape, cut, and form materials accurately</li>
    <li>Tolerances, accuracy, and safety in practical work</li>
  </ul>
</div>
        `,
        canonical_keywords: ["properties","forming","materials","shaping"],
        practice_items: []
      },
      {
        id: "physical-mechanical-properties",
        title: "⚡ Subsection 2 – Physical and Mechanical Properties",
        type: "content",
        study_group: 1,
        content_html: `
<div class="key-facts-block">
  <h4>Types of Properties</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Property Type</th>
        <th>Definition</th>
        <th>Examples and Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Physical Properties</strong></td>
        <td>Can be observed or measured without changing the material's structure</td>
        <td>Colour, density, conductivity, melting point, or transparency</td>
      </tr>
      <tr>
        <td><strong>Mechanical Properties</strong></td>
        <td>Describe how a material reacts to forces</td>
        <td>Strength, toughness, elasticity, hardness, ductility, and malleability</td>
      </tr>
    </tbody>
  </table>
  <p><strong>💡 Why this matters:</strong> A strong, tough metal is suitable for tools, while a flexible polymer might be better for a chair. Designers must match properties to the function and environment of the product.</p>
</div>
        `,
        canonical_keywords: ["physical properties","mechanical properties","strength","ductility"],
        practice_items: []
      },
      {
        id: "timber-properties",
        title: "🧩 Subsection 3 – Timber-Based Materials",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>🌲 Key Properties</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Property</th>
        <th>Softwoods (e.g. Pine, Spruce)</th>
        <th>Hardwoods (e.g. Oak, Beech)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Density</td>
        <td>Low, light, easy to cut</td>
        <td>High, heavy, dense structure</td>
      </tr>
      <tr>
        <td>Strength</td>
        <td>Moderate strength</td>
        <td>Very strong and durable</td>
      </tr>
      <tr>
        <td>Workability</td>
        <td>Easy to shape and join</td>
        <td>Requires more effort to cut</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Cheap and quick to grow</td>
        <td>Expensive, slow-growing</td>
      </tr>
      <tr>
        <td>Environmental Impact</td>
        <td>Renewable, widely replanted</td>
        <td>Renewable but limited supply</td>
      </tr>
    </tbody>
  </table>
  <p><strong>🌍 Sustainability:</strong> Wood is renewable, but responsible designers use FSC-certified timber to ensure forests are replanted and wildlife habitats are protected.</p>
</div>

<div class="key-facts-block">
  <h4>🧩 Shaping and Forming Timber</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Process</th>
        <th>Tool / Equipment</th>
        <th>How It's Done</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cutting straight lines</td>
        <td>Tenon saw</td>
        <td>Rigid blade for neat, accurate cuts. Used in box or frame making</td>
      </tr>
      <tr>
        <td>Cutting curves</td>
        <td>Coping or fret saw</td>
        <td>Thin blade for curved shapes (e.g. toys or decorative pieces)</td>
      </tr>
      <tr>
        <td>Drilling holes</td>
        <td>Hand or pillar drill</td>
        <td>Use Forstner or spade bits for large, clean holes</td>
      </tr>
      <tr>
        <td>Planing</td>
        <td>Bench plane</td>
        <td>Slices off thin layers to smooth or size timber</td>
      </tr>
      <tr>
        <td>Chiselling</td>
        <td>Chisel and mallet</td>
        <td>Removes wood for joints or shaping corners</td>
      </tr>
      <tr>
        <td>Sanding</td>
        <td>Disc sander, belt sander, or sandpaper</td>
        <td>Smooths surfaces before finishing</td>
      </tr>
      <tr>
        <td>Filing / Rasping</td>
        <td>Wood file or rasp</td>
        <td>Shapes edges and curves precisely</td>
      </tr>
      <tr>
        <td>Joining</td>
        <td>Comb (finger) joint</td>
        <td>Interlocking design increases glue area for strength</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Comb (Finger) Joint:</h4>
  <ul>
    <li>Interlocks like "teeth" for maximum surface contact</li>
    <li>Common in wooden boxes and drawers</li>
    <li>Made by marking and cutting accurately, then chiselling waste away</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>Accuracy, Tolerance, and Quality</h4>
  <ul>
    <li><strong>On tolerance:</strong> Part is correct size and fits as intended</li>
    <li><strong>Off tolerance:</strong> Too large or too small — can affect assembly</li>
    <li><strong>Quality control:</strong> Check measurements frequently using rules, squares, and callipers</li>
  </ul>
  <p>Accurate cutting and fitting are vital for flat-pack furniture, where all parts must align perfectly.</p>
</div>
        `,
        canonical_keywords: ["timber","softwood","hardwood","cutting","planing","chiselling","comb joint","tolerance"],
        practice_items: []
      },
      {
        id: "metal-properties",
        title: "Subsection 4 – Metal-Based Materials",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>🔩 Key Properties</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Property</th>
        <th>Explanation and Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Strength</td>
        <td>Resists stretching and bending (e.g. steel for tools)</td>
      </tr>
      <tr>
        <td>Hardness</td>
        <td>Resists scratches or dents (e.g. stainless steel cutlery)</td>
      </tr>
      <tr>
        <td>Ductility</td>
        <td>Can be stretched into wires (e.g. copper cables)</td>
      </tr>
      <tr>
        <td>Malleability</td>
        <td>Can be rolled or hammered into sheets (e.g. aluminium foil)</td>
      </tr>
      <tr>
        <td>Conductivity</td>
        <td>Transfers heat or electricity (e.g. copper pans, wires)</td>
      </tr>
      <tr>
        <td>Corrosion Resistance</td>
        <td>Metals like aluminium form a protective oxide layer</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>Shaping and Forming Metals</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Process</th>
        <th>Tool / Machine</th>
        <th>How It's Done</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cutting</td>
        <td>Hacksaw / Junior hacksaw</td>
        <td>Cuts through rods or sheet metal using fine-toothed blades</td>
      </tr>
      <tr>
        <td>Filing</td>
        <td>Flat, round, or half-round file</td>
        <td>Smooths sharp edges; cross-filing removes material, draw-filing polishes</td>
      </tr>
      <tr>
        <td>Drilling</td>
        <td>Pillar drill</td>
        <td>A centre punch makes a dent to stop the bit slipping</td>
      </tr>
      <tr>
        <td>Turning</td>
        <td>Lathe</td>
        <td>Spins metal to create round parts (e.g. bolts, handles)</td>
      </tr>
      <tr>
        <td>Milling</td>
        <td>Milling machine</td>
        <td>Cuts slots and flat surfaces with precision</td>
      </tr>
      <tr>
        <td>Casting</td>
        <td>Sand or die casting</td>
        <td>Molten metal poured into moulds for identical parts</td>
      </tr>
      <tr>
        <td>Welding / Brazing</td>
        <td>Oxy-acetylene or MIG welder</td>
        <td>Joins metals by heating or melting filler rods</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Example:</h4>
  <p>A stainless-steel saucepan is strong, corrosion-resistant, and conducts heat well — ideal for cooking.</p>
</div>
        `,
        canonical_keywords: ["metals","strength","ductility","malleability","cutting","drilling","welding","casting"],
        practice_items: []
      },
      {
        id: "polymer-properties",
        title: "Subsection 5 – Polymers",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Key Properties</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Property</th>
        <th>Thermoplastics</th>
        <th>Thermosets</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Heat Behaviour</td>
        <td>Soften when heated; can be reshaped</td>
        <td>Set permanently when heated; cannot be reshaped</td>
      </tr>
      <tr>
        <td>Flexibility</td>
        <td>Flexible and tough</td>
        <td>Rigid and hard</td>
      </tr>
      <tr>
        <td>Recyclability</td>
        <td>Can be reheated and reused</td>
        <td>Cannot be remoulded once set</td>
      </tr>
      <tr>
        <td>Insulation</td>
        <td>Electrical and thermal insulator</td>
        <td>Excellent insulator for electrics</td>
      </tr>
      <tr>
        <td>Examples</td>
        <td>Acrylic, Polypropylene, HIPS</td>
        <td>Epoxy resin, Melamine, Urea formaldehyde</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>Shaping and Forming Polymers</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Process</th>
        <th>Tool / Equipment</th>
        <th>How It's Done / Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cutting</td>
        <td>Coping saw or laser cutter</td>
        <td>Cuts plastic sheets accurately; use slow speed to prevent melting</td>
      </tr>
      <tr>
        <td>Drilling</td>
        <td>Pillar drill (low speed)</td>
        <td>Use scrap underneath to avoid cracking</td>
      </tr>
      <tr>
        <td>Folding</td>
        <td>Line bender</td>
        <td>Heats plastic to fold along a straight line (used in displays)</td>
      </tr>
      <tr>
        <td>Vacuum forming</td>
        <td>Vacuum former</td>
        <td>Sheet heated and sucked around a mould to form packaging</td>
      </tr>
      <tr>
        <td>Casting</td>
        <td>Mould + resin</td>
        <td>Liquid resin sets into solid form (used for models or handles)</td>
      </tr>
      <tr>
        <td>Plastic welding / Cementing</td>
        <td>Solvent cement / hot air welder</td>
        <td>Bonds parts chemically or by melting</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>💡 Example:</h4>
  <p>Polypropylene chairs are injection moulded — flexible yet tough enough for heavy use.</p>
</div>
        `,
        canonical_keywords: ["polymers","thermoplastics","thermosets","vacuum forming","injection moulding","line bending"],
        practice_items: []
      },
      {
        id: "textile-properties",
        title: "Subsection 6 – Textile-Based Materials",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Key Properties</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Properties</th>
        <th>Common Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Natural fibres (cotton, wool, silk)</td>
        <td>Breathable, absorbent, comfortable</td>
        <td>Clothing, furnishings</td>
      </tr>
      <tr>
        <td>Synthetic fibres (polyester, nylon, acrylic)</td>
        <td>Strong, stretchy, water-resistant</td>
        <td>Sportswear, curtains</td>
      </tr>
      <tr>
        <td>Blended fibres (poly-cotton)</td>
        <td>Combines strength and comfort</td>
        <td>School uniforms, upholstery</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>Shaping and Forming Textiles</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Process</th>
        <th>Method / Tool</th>
        <th>Explanation / Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cutting</td>
        <td>Fabric shears or rotary cutter</td>
        <td>Cuts accurately through layers of fabric</td>
      </tr>
      <tr>
        <td>Sewing</td>
        <td>Needle or sewing machine</td>
        <td>Joins fabric using thread (lockstitch or zig-zag)</td>
      </tr>
      <tr>
        <td>Pleating / Gathering</td>
        <td>Folding and stitching fabric</td>
        <td>Adds flexibility or decoration</td>
      </tr>
      <tr>
        <td>Quilting</td>
        <td>Sewing through padding layers</td>
        <td>Adds warmth and shape (e.g. jackets, bedding)</td>
      </tr>
      <tr>
        <td>Piping</td>
        <td>Sewn bias strip edge</td>
        <td>Decorative finish for cushions or upholstery</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Example:</h4>
  <p>Sportswear uses polyester because it is lightweight, fast-drying, and stretch-resistant.</p>
</div>
        `,
        canonical_keywords: ["textiles","natural fibres","synthetic fibres","sewing","quilting","cotton","polyester"],
        practice_items: []
      },
      {
        id: "paper-board-properties",
        title: "Subsection 7 – Papers and Boards",
        type: "content",
        study_group: 4,
        content_html: `
<div class="key-facts-block">
  <h4>Properties</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Property</th>
        <th>Explanation / Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lightweight</td>
        <td>Easy to fold, cut, and print</td>
      </tr>
      <tr>
        <td>Different GSM (thickness)</td>
        <td>80gsm for flyers; 300gsm+ for packaging</td>
      </tr>
      <tr>
        <td>Printable</td>
        <td>Smooth, suitable for inks and coatings</td>
      </tr>
      <tr>
        <td>Biodegradable & Recyclable</td>
        <td>Environmentally friendly, renewable source</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="key-facts-block">
  <h4>Shaping and Forming Papers & Boards</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Process</th>
        <th>Tool / Method</th>
        <th>Description / Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cutting</td>
        <td>Craft knife, guillotine, or laser cutter</td>
        <td>Clean, precise edges</td>
      </tr>
      <tr>
        <td>Creasing</td>
        <td>Creasing tool / bone folder</td>
        <td>Prepares folds without tearing fibres</td>
      </tr>
      <tr>
        <td>Folding</td>
        <td>Hand or machine folding</td>
        <td>Used for leaflets and packaging nets</td>
      </tr>
      <tr>
        <td>Scoring</td>
        <td>Stylus or blunt knife</td>
        <td>Makes fold lines on card</td>
      </tr>
      <tr>
        <td>Perforating</td>
        <td>Perforation roller / die cutter</td>
        <td>Creates tear-off sections (e.g. vouchers, tickets)</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Example:</h4>
  <p>Card-based food packaging (e.g. cereal boxes) is scored and folded for shape, printed for advertising, and coated to resist moisture.</p>
</div>
        `,
        canonical_keywords: ["paper","board","GSM","scoring","folding","perforating","packaging"],
        practice_items: []
      },
      {
        id: "electronic-mechanical",
        title: "Subsection 8 – Electronic and Mechanical Systems",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Material Used</th>
        <th>Key Property</th>
        <th>Common Shaping / Joining Methods</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Metals (steel, aluminium)</td>
        <td>Strength, conductivity</td>
        <td>Cutting, drilling, welding, milling</td>
      </tr>
      <tr>
        <td>Polymers (PVC, ABS)</td>
        <td>Insulation, flexibility</td>
        <td>Injection moulding, extrusion</td>
      </tr>
      <tr>
        <td>Ceramics / Glass</td>
        <td>Hard, brittle, heat-resistant</td>
        <td>Casting, moulding, sintering</td>
      </tr>
      <tr>
        <td>Electronic components (copper, tin)</td>
        <td>Conductivity</td>
        <td>Soldering onto PCBs</td>
      </tr>
    </tbody>
  </table>
  <p><strong>💡 Example:</strong> In domestic appliances, polymer casings insulate electricity while metal interiors provide structural strength.</p>
</div>
        `,
        canonical_keywords: ["electronic","mechanical","conductivity","soldering","PCB"],
        practice_items: []
      },
      {
        id: "tolerances-quality-safety",
        title: "📏 Subsection 9 – Tolerances, Quality, and Safety",
        type: "content",
        study_group: 4,
        content_html: `
<div class="key-facts-block">
  <h4>Key Concepts</h4>
  <ul>
    <li><strong>Tolerance:</strong> The acceptable range of error in a dimension (e.g. ±1mm)</li>
    <li><strong>On tolerance:</strong> Correct fit</li>
    <li><strong>Off tolerance:</strong> Too tight or too loose — affects product performance</li>
    <li><strong>Quality control:</strong> Checking size, finish, and alignment during each manufacturing stage</li>
    <li><strong>Safety:</strong> Use PPE (goggles, aprons), secure workpieces, and follow workshop rules for each tool</li>
  </ul>
</div>
        `,
        canonical_keywords: ["tolerance","quality control","safety","PPE","accuracy"],
        practice_items: []
      },
      {
        id: "summary-table",
        title: "🧩 Subsection 10 – Summary Table",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Material</th>
        <th>Properties</th>
        <th>Key Processes / Tools</th>
        <th>Example Product Type</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Timber</td>
        <td>Strong, renewable, workable</td>
        <td>Sawing, chiselling, sanding</td>
        <td>Toys, furniture</td>
      </tr>
      <tr>
        <td>Metal</td>
        <td>Hard, ductile, conductive</td>
        <td>Filing, drilling, welding</td>
        <td>Spanner, saucepan</td>
      </tr>
      <tr>
        <td>Polymer</td>
        <td>Flexible, insulative, lightweight</td>
        <td>Bending, casting, drilling</td>
        <td>Plastic chair, plug socket</td>
      </tr>
      <tr>
        <td>Textile</td>
        <td>Soft, absorbent, durable</td>
        <td>Sewing, quilting, piping</td>
        <td>Sportswear, cushions</td>
      </tr>
      <tr>
        <td>Paper/Board</td>
        <td>Thin, printable, recyclable</td>
        <td>Cutting, scoring, folding</td>
        <td>Leaflets, packaging</td>
      </tr>
      <tr>
        <td>Electronic</td>
        <td>Conductive, heat-resistant</td>
        <td>Drilling, soldering</td>
        <td>Circuit boards, appliances</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["summary","materials","properties","processes"],
        practice_items: []
      }
    ]
  },
  {
    id: "stock-forms",
    title: "2.6 – Stock Forms, Types and Sizes",
    status: "ready",
    subsections: [
      {
        id: "what-are-stock-forms",
        title: "🧩 Subsection 1 – What Are Stock Forms?",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p><strong>Stock forms</strong> are standard, pre-manufactured sizes and shapes of materials supplied by manufacturers.</p>
  <p>They are available in set lengths, widths, thicknesses, or diameters, depending on the material type.</p>
</div>

<div class="key-facts-block">
  <h4>💡 Why They Matter</h4>
  <ul>
    <li>Standard forms reduce costs, waste, and machining time</li>
    <li>They allow designers to calculate material quantities easily when planning products</li>
    <li>Mass-produced stock forms are cheaper per unit than custom-cut materials</li>
    <li>Designers can use "nesting" — placing parts close together to minimise offcuts and waste</li>
  </ul>
</div>
        `,
        canonical_keywords: ["stock forms","standard sizes","materials","nesting","waste reduction"],
        practice_items: []
      },
      {
        id: "paper-board",
        title: "Subsection 2 – Paper and Board Stock Forms",
        type: "content",
        study_group: 1,
        content_html: `
<div class="key-facts-block">
  <h4>📄 Paper Sizes – ISO 216 International Standard</h4>
  <p>The ISO paper system (A-series) is used worldwide. Each size is half the area of the previous one.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Paper Size</th>
        <th>Dimensions (mm)</th>
        <th>Common Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A0</td>
        <td>841 × 1189</td>
        <td>Posters, technical drawings</td>
      </tr>
      <tr>
        <td>A1</td>
        <td>594 × 841</td>
        <td>Posters, large charts</td>
      </tr>
      <tr>
        <td>A2</td>
        <td>420 × 594</td>
        <td>Drawings, artwork</td>
      </tr>
      <tr>
        <td>A3</td>
        <td>297 × 420</td>
        <td>Presentation sheets</td>
      </tr>
      <tr>
        <td>A4</td>
        <td>210 × 297</td>
        <td>Standard printer paper</td>
      </tr>
      <tr>
        <td>A5</td>
        <td>148 × 210</td>
        <td>Flyers, leaflets</td>
      </tr>
      <tr>
        <td>A6–A8</td>
        <td>Progressively smaller</td>
        <td>Labels, tickets, cards</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="definition-block">
  <h4>Key Measurements</h4>
  <ul>
    <li><strong>Paper density:</strong> Measured in grams per square metre (gsm)</li>
    <li>Up to 150 gsm = paper</li>
    <li>Over 200 gsm = board</li>
    <li><strong>Board thickness:</strong> Measured in microns (μm)</li>
    <li>Boards can be laminated with plastic or foil to improve strength and water resistance</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>Commercial Paper/Board Forms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Form</th>
        <th>Description</th>
        <th>Typical Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sheets</td>
        <td>Sold in full, half, or quarter sizes</td>
        <td>Packaging, signage</td>
      </tr>
      <tr>
        <td>Rolls</td>
        <td>Continuous sheets wound into rolls</td>
        <td>Printing, wrapping</td>
      </tr>
      <tr>
        <td>Cardboard / Box board</td>
        <td>Thicker, rigid sheets</td>
        <td>Food packaging, cartons</td>
      </tr>
      <tr>
        <td>Corrugated board</td>
        <td>Fluted inner layer for strength</td>
        <td>Boxes, storage packaging</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Standard Components for Paper and Board</h4>
  <p>(Pre-made parts used to speed up manufacturing)</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Examples</th>
        <th>Use / Benefit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Temporary Fastenings</td>
        <td>Paper clips, split pins, Velcro, magnets, treasury tags</td>
        <td>Allow paper to be removed or replaced easily</td>
      </tr>
      <tr>
        <td>Permanent Fastenings</td>
        <td>Rivets, sticky pads, post-and-screw fasteners, snap rivets</td>
        <td>Stronger, for permanent assembly</td>
      </tr>
      <tr>
        <td>Bindings</td>
        <td>Comb, spiral, saddle stitching, perfect binding</td>
        <td>Hold pages together securely for booklets</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="exam-tip-block">
  <h4>🧩 Design Tip</h4>
  <p>Always choose the smallest stock size possible to reduce waste and keep costs down.</p>
</div>
        `,
        canonical_keywords: ["paper sizes","ISO 216","A4","gsm","board","corrugated","stock forms"],
        practice_items: []
      },
      {
        id: "timber-materials",
        title: "Subsection 3 – Timber-Based Materials",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>🪵 Common Stock Forms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Stock Form</th>
        <th>Description</th>
        <th>Typical Uses</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Planks</td>
        <td>Thick, wide lengths of timber (usually over 50mm thick)</td>
        <td>Flooring, furniture frames</td>
      </tr>
      <tr>
        <td>Boards</td>
        <td>Thinner, wide pieces (under 50mm thick)</td>
        <td>Shelves, cabinet sides</td>
      </tr>
      <tr>
        <td>Standard Mouldings</td>
        <td>Pre-shaped profiles such as skirting boards, dowels, beading, or trims</td>
        <td>Decorative finishing, joints, rails</td>
      </tr>
      <tr>
        <td>Veneers</td>
        <td>Very thin layers of wood used to cover cheaper materials</td>
        <td>Decorative surfaces, plywood</td>
      </tr>
      <tr>
        <td>Dowels</td>
        <td>Cylindrical wooden rods</td>
        <td>Used for joints and connecting parts</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="definition-block">
  <h4>📏 Sizes and Dimensions</h4>
  <p>Timber is usually sold by length × width × thickness (mm). Dowels and rods are sold by diameter × length.</p>
  <table class="data-table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Example Measurement</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Board sheet size</td>
        <td>2440 mm × 1220 mm (standard full sheet)</td>
      </tr>
      <tr>
        <td>Plank widths</td>
        <td>Increase in 25 mm steps (e.g. 50 mm × 25 mm → 100 mm × 50 mm)</td>
      </tr>
      <tr>
        <td>Thicknesses</td>
        <td>Commonly 3 mm, 6 mm, 9 mm, 12 mm, 15 mm, 18 mm, 25 mm</td>
      </tr>
      <tr>
        <td>Lengths</td>
        <td>Usually 1.2 m, 1.8 m, 2.4 m, 3 m, 3.6 m, 4.8 m</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="definition-block">
  <h4>Timber Finishing and Planing Terms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Term</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rough Sawn</td>
        <td>Straight from sawmill, rough surface. Cheapest form</td>
      </tr>
      <tr>
        <td>Planed Square Edge (PSE)</td>
        <td>One edge planed smooth for marking out</td>
      </tr>
      <tr>
        <td>Planed Both Sides (PBS)</td>
        <td>Both large faces planed, edges rough</td>
      </tr>
      <tr>
        <td>Planed All Round (PAR)</td>
        <td>All sides planed smooth and ready for use</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Timber Components and Fittings</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Component</th>
        <th>Description and Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Woodscrews</td>
        <td>Used to join wood or fix parts; available in steel, brass, or stainless steel</td>
      </tr>
      <tr>
        <td>Hinges</td>
        <td>Allow doors or lids to move. Types include butt, piano, flush, and concealed hinges</td>
      </tr>
      <tr>
        <td>Knock-Down (KD) Fittings</td>
        <td>Metal or plastic fittings for easy assembly and dismantling (e.g. flat-pack furniture). Examples include cam locks, dowels, and cross dowels</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>🧩 Example</h4>
  <p>A flat-pack wardrobe uses KD fittings for fast home assembly and hinges for smooth door movement.</p>
</div>
        `,
        canonical_keywords: ["timber","planks","boards","dowels","PSE","PAR","KD fittings","stock forms"],
        practice_items: []
      },
      {
        id: "metal-materials",
        title: "Subsection 4 – Metal-Based Materials",
        type: "content",
        study_group: 2,
        content_html: `
<div class="key-facts-block">
  <h4>🔩 Stock Forms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Form</th>
        <th>Description</th>
        <th>Common Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sheet</td>
        <td>Flat, thin metal pieces in various gauges</td>
        <td>Car panels, roofing, appliances</td>
      </tr>
      <tr>
        <td>Rod</td>
        <td>Solid cylindrical form</td>
        <td>Shafts, axles, pins</td>
      </tr>
      <tr>
        <td>Bar</td>
        <td>Solid rectangular or square section</td>
        <td>Brackets, handles, frameworks</td>
      </tr>
      <tr>
        <td>Tube</td>
        <td>Hollow cylinder; round or square</td>
        <td>Bike frames, pipes, furniture</td>
      </tr>
      <tr>
        <td>Angle / Channel (U, L, T, I sections)</td>
        <td>Rolled steel shapes for construction</td>
        <td>Beams, supports, bridges</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="definition-block">
  <h4>Standard Sizes</h4>
  <p>Measured by length, width, thickness, or diameter.</p>
  <ul>
    <li><strong>Common sheet size:</strong> 2500 mm × 1250 mm</li>
    <li><strong>Tubes and bars:</strong> Sold in metre lengths (often 1–4 m)</li>
    <li><strong>Gauge</strong> (or mm) refers to sheet metal thickness:
      <ul>
        <li>20 gauge ≈ 0.9 mm</li>
        <li>16 gauge ≈ 1.5 mm</li>
      </ul>
    </li>
  </ul>
</div>

<div class="example-block">
  <h4>Standard Metal Components</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Component</th>
        <th>Description and Use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rivets</td>
        <td>Permanent fasteners joining sheet metal</td>
      </tr>
      <tr>
        <td>Machine Screws</td>
        <td>Threaded fasteners used with nuts</td>
      </tr>
      <tr>
        <td>Bolts and Nuts</td>
        <td>Provide strong, removable joints</td>
      </tr>
      <tr>
        <td>Washers</td>
        <td>Distribute pressure evenly around fastenings</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="exam-tip-block">
  <h4>Design Tip</h4>
  <p>When designing metal structures, use standard section profiles (L, T, I) to reduce cost and simplify fabrication.</p>
</div>
        `,
        canonical_keywords: ["metal","sheet","rod","bar","tube","angle","gauge","rivets","stock forms"],
        practice_items: []
      },
      {
        id: "polymers",
        title: "Subsection 5 – Polymers",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Stock Forms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Form</th>
        <th>Description</th>
        <th>Common Applications</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sheet</td>
        <td>Flat, rigid plastic panels</td>
        <td>Signage, protective covers</td>
      </tr>
      <tr>
        <td>Rod / Bar</td>
        <td>Solid lengths for machining</td>
        <td>Engineering parts, spacers</td>
      </tr>
      <tr>
        <td>Tube</td>
        <td>Hollow form, various diameters</td>
        <td>Piping, lightweight structures</td>
      </tr>
      <tr>
        <td>Granules / Pellets</td>
        <td>Small plastic beads for heating and moulding</td>
        <td>Injection moulding, extrusion</td>
      </tr>
      <tr>
        <td>Powder</td>
        <td>Fine form used in casting and coatings</td>
        <td>Powder coating, moulding</td>
      </tr>
      <tr>
        <td>Foam</td>
        <td>Expanded lightweight form</td>
        <td>Packaging, cushioning</td>
      </tr>
      <tr>
        <td>Film</td>
        <td>Thin plastic sheets</td>
        <td>Food wraps, carrier bags</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="definition-block">
  <h4>📏 Typical Dimensions</h4>
  <ul>
    <li>Measured by length × width × gauge (thickness) or diameter × length</li>
    <li><strong>Standard sheet size:</strong> 2000 mm × 1000 mm or 2440 mm × 1220 mm</li>
    <li><strong>Thickness ranges:</strong> From 1 mm to 25 mm, depending on the plastic type</li>
  </ul>
</div>

<div class="example-block">
  <h4>Standard Polymer Components</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Component</th>
        <th>Example</th>
        <th>Purpose / Benefit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Screws / Nuts / Bolts</td>
        <td>Nylon fasteners</td>
        <td>Lightweight, corrosion-resistant</td>
      </tr>
      <tr>
        <td>Hinges</td>
        <td>Plastic or metal</td>
        <td>Allows movement of lids and doors</td>
      </tr>
      <tr>
        <td>Moulded Inserts</td>
        <td>Embedded parts in injection moulds</td>
        <td>Strengthens screw joints in plastic casings</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>🧩 Example</h4>
  <p>Polypropylene sheet used for chairs is sold in standard sheet thicknesses and formed by injection moulding. Screws or clips allow secure assembly.</p>
</div>
        `,
        canonical_keywords: ["polymer","plastic","sheet","granules","pellets","foam","film","stock forms"],
        practice_items: []
      },
      {
        id: "calculating-quantities",
        title: "🧩 Subsection 6 – Calculating Material Quantities",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>Steps to Calculate Material Quantities</h4>
  <p>Designers must calculate material quantities to reduce cost and waste. To do this, they:</p>
  <ol>
    <li>Identify the stock form being used (sheet, bar, board, etc.)</li>
    <li>Measure or estimate the part sizes needed</li>
    <li>Plan layouts on sheet materials using "nesting"</li>
    <li>Calculate total quantity using volume formulas (L × W × T)</li>
    <li>Add allowances for cutting losses and wastage (typically 10%)</li>
  </ol>
</div>

<div class="example-block">
  <h4>🧩 Example</h4>
  <p>A wooden tabletop measuring 1200 × 600 mm requires a section from a 2440 × 1220 mm board — one sheet can yield two tops with some offcuts.</p>
</div>
        `,
        canonical_keywords: ["calculating","material quantities","nesting","waste","allowance"],
        practice_items: []
      },
      {
        id: "summary-table",
        title: "🧩 Subsection 7 – Summary Table",
        type: "content",
        study_group: 3,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Material Category</th>
        <th>Stock Forms</th>
        <th>Measurement</th>
        <th>Standard Components</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Paper & Board</td>
        <td>Sheets, rolls, boards</td>
        <td>gsm, mm, μm</td>
        <td>Fasteners, bindings, adhesives</td>
      </tr>
      <tr>
        <td>Timber</td>
        <td>Planks, boards, mouldings, dowels</td>
        <td>mm (L × W × T)</td>
        <td>Screws, hinges, KD fittings</td>
      </tr>
      <tr>
        <td>Metal</td>
        <td>Sheet, rod, bar, tube, angle</td>
        <td>mm, gauge</td>
        <td>Rivets, bolts, washers</td>
      </tr>
      <tr>
        <td>Polymers</td>
        <td>Sheet, rod, granules, foam, film</td>
        <td>mm, gauge</td>
        <td>Screws, hinges, inserts</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["summary","stock forms","comparison","materials"],
        practice_items: []
      }
    ]
  },
  {
    id: "scales-of-production",
    title: "2.7 – Scales of Production",
    status: "ready",
    subsections: [
      {
        id: "what-are-scales",
        title: "Subsection 1 – What Are Scales of Production?",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>The <strong>scale of production</strong> refers to the number of products made and the level of automation or technology used during manufacturing.</p>
  <p>Different products require different levels of production depending on:</p>
  <ul>
    <li><strong>Demand</strong> (how many are needed)</li>
    <li><strong>Cost</strong> (materials, labour, machinery)</li>
    <li><strong>Time</strong> (speed and efficiency)</li>
    <li><strong>Skill level</strong> (craft vs automated systems)</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>Four Main Scales of Production</h4>
  <ol>
    <li>One-off (Prototype or Bespoke)</li>
    <li>Batch</li>
    <li>Mass</li>
    <li>Continuous</li>
  </ol>
</div>
        `,
        canonical_keywords: ["scales of production","manufacturing","demand","automation"],
        practice_items: []
      },
      {
        id: "one-off",
        title: "Subsection 2 – One-Off (Prototype or Bespoke) Production",
        type: "content",
        study_group: 1,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>Making a single, unique product designed for one specific purpose or client. Often handmade by a skilled craftsperson.</p>
</div>

<div class="key-facts-block">
  <h4>Features</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Scale</td>
        <td>Only one product made</td>
      </tr>
      <tr>
        <td>Labour</td>
        <td>Highly skilled, lots of manual work</td>
      </tr>
      <tr>
        <td>Equipment</td>
        <td>Basic hand tools and workshop machinery</td>
      </tr>
      <tr>
        <td>Cost</td>
        <td>Very expensive per unit due to labour time and customisation</td>
      </tr>
      <tr>
        <td>Flexibility</td>
        <td>Very high – designs can be changed easily during making</td>
      </tr>
      <tr>
        <td>Lead Time</td>
        <td>Long production time</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Examples</h4>
  <ul>
    <li>Handmade furniture (e.g. a commissioned rocking horse or cabinet)</li>
    <li>Custom jewellery or tailored suits</li>
    <li>Prototype products for testing designs in coursework (like NEA projects)</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>✅ Advantages</h4>
  <ul>
    <li>High-quality craftsmanship</li>
    <li>Fully customisable to the client's needs</li>
    <li>Excellent for developing and testing new ideas</li>
  </ul>
</div>

<div class="warning-block">
  <h4>❌ Disadvantages</h4>
  <ul>
    <li>Time-consuming and costly</li>
    <li>Not suitable for large demand</li>
  </ul>
</div>
        `,
        canonical_keywords: ["one-off","prototype","bespoke","custom","handmade"],
        practice_items: []
      },
      {
        id: "batch",
        title: "Subsection 3 – Batch Production",
        type: "content",
        study_group: 2,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>Making a set number of identical products in one production run.</p>
</div>

<div class="key-facts-block">
  <h4>Features</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Scale</td>
        <td>Dozens to thousands of products per batch</td>
      </tr>
      <tr>
        <td>Tools Used</td>
        <td>Jigs, templates, patterns, and moulds for consistency</td>
      </tr>
      <tr>
        <td>Labour</td>
        <td>Mix of skilled and semi-skilled workers</td>
      </tr>
      <tr>
        <td>Automation</td>
        <td>Some machines used for repetitive processes (e.g. CNC routers, laser cutters)</td>
      </tr>
      <tr>
        <td>Flexibility</td>
        <td>High – batches can be changed or adapted between runs</td>
      </tr>
      <tr>
        <td>Unit Cost</td>
        <td>Lower than one-off, but higher than mass</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Examples</h4>
  <ul>
    <li>Furniture runs (e.g. 50 identical chairs)</li>
    <li>Seasonal goods (e.g. Christmas toys, decorations)</li>
    <li>Short runs of ceramic mugs or lighting units</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>✅ Advantages</h4>
  <ul>
    <li>Consistency and accuracy using jigs and moulds</li>
    <li>Products can be changed between batches</li>
    <li>Economies of scale (bulk buying materials reduces costs)</li>
  </ul>
</div>

<div class="warning-block">
  <h4>❌ Disadvantages</h4>
  <ul>
    <li>Storage space needed between batches</li>
    <li>Machine downtime when changing setups</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>Production Aids</h4>
  <ul>
    <li><strong>Jigs</strong> hold materials for cutting or drilling precisely</li>
    <li><strong>Templates</strong> guide cutting shapes accurately</li>
    <li><strong>Patterns</strong> act as reference models for moulds or castings</li>
    <li><strong>Fixtures</strong> keep components secure for machining</li>
  </ul>
</div>
        `,
        canonical_keywords: ["batch production","jigs","templates","moulds","flexibility"],
        practice_items: []
      },
      {
        id: "mass",
        title: "Subsection 4 – Mass Production",
        type: "content",
        study_group: 2,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>Continuous production of identical products in large quantities using assembly lines.</p>
</div>

<div class="key-facts-block">
  <h4>Features</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Scale</td>
        <td>Thousands to millions of identical items</td>
      </tr>
      <tr>
        <td>Labour</td>
        <td>Mostly unskilled or semi-skilled, operating machines</td>
      </tr>
      <tr>
        <td>Automation</td>
        <td>High – uses Computer-Aided Manufacturing (CAM) and production lines</td>
      </tr>
      <tr>
        <td>Flexibility</td>
        <td>Low – expensive to change designs once set up</td>
      </tr>
      <tr>
        <td>Unit Cost</td>
        <td>Very low – machinery spreads costs over many products</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Examples</h4>
  <ul>
    <li>Mobile phones and computers</li>
    <li>Plastic chairs</li>
    <li>Cars and domestic appliances</li>
    <li>Kitchen cabinets and flat-pack furniture</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>✅ Advantages</h4>
  <ul>
    <li>Very efficient and consistent</li>
    <li>Cheap unit cost due to high-volume production</li>
    <li>Products are uniform in quality and size</li>
  </ul>
</div>

<div class="warning-block">
  <h4>❌ Disadvantages</h4>
  <ul>
    <li>High initial setup cost</li>
    <li>Low flexibility – changing designs is difficult</li>
    <li>Workers may perform repetitive tasks, lowering job satisfaction</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>📦 Automation and Mechanisation</h4>
  <ul>
    <li><strong>Mechanisation:</strong> Human-controlled machines (e.g. CNC router operated by a worker)</li>
    <li><strong>Automation:</strong> Fully computer-controlled systems (e.g. robotic assembly line)</li>
    <li>Both improve accuracy, speed, and consistency</li>
  </ul>
</div>
        `,
        canonical_keywords: ["mass production","assembly line","automation","CAM","high volume"],
        practice_items: []
      },
      {
        id: "continuous",
        title: "⚡ Subsection 5 – Continuous Production",
        type: "content",
        study_group: 3,
        content_html: `
<div class="definition-block">
  <h4>📘 Definition</h4>
  <p>24/7 operation producing the same product continuously. Machines only stop for maintenance.</p>
</div>

<div class="key-facts-block">
  <h4>Features</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Scale</td>
        <td>Millions of identical products</td>
      </tr>
      <tr>
        <td>Automation</td>
        <td>Fully automated with little human intervention</td>
      </tr>
      <tr>
        <td>Labour</td>
        <td>Few operators needed (mainly technicians)</td>
      </tr>
      <tr>
        <td>Unit Cost</td>
        <td>Extremely low – huge output rate</td>
      </tr>
      <tr>
        <td>Flexibility</td>
        <td>None – setup remains fixed for long periods</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>🧩 Examples</h4>
  <ul>
    <li>Paper, screws, nails, pencils, and glass bottles</li>
    <li>Timber sheet materials like MDF or plywood (continuous pressing and cutting lines)</li>
    <li>Plastic products like polythene film or pipes</li>
  </ul>
</div>

<div class="key-facts-block">
  <h4>💡 Advantages</h4>
  <ul>
    <li>Maximum efficiency – no downtime</li>
    <li>Low unit cost</li>
    <li>High quality and identical output</li>
  </ul>
</div>

<div class="warning-block">
  <h4>❌ Disadvantages</h4>
  <ul>
    <li>Extremely high setup cost</li>
    <li>Maintenance requires halting production</li>
    <li>Little room for design changes</li>
  </ul>
</div>
        `,
        canonical_keywords: ["continuous production","24/7","fully automated","high output"],
        practice_items: []
      },
      {
        id: "mechanisation-automation",
        title: "Subsection 6 – Mechanisation, Automation, and CNC",
        type: "content",
        study_group: 3,
        content_html: `
<div class="key-facts-block">
  <h4>CNC (Computer Numerical Control) Machines</h4>
  <p>CNC routers, mills, and lathes are used at all levels from batch to mass production.</p>
</div>

<div class="key-facts-block">
  <h4>✅ Advantages</h4>
  <ol>
    <li>High accuracy and repeatability</li>
    <li>Faster than manual methods</li>
    <li>Reduces waste with precise cutting</li>
  </ol>
</div>

<div class="example-block">
  <h4>Example</h4>
  <p>A CNC wood lathe can produce identical chair legs or stair spindles automatically once programmed.</p>
</div>

<div class="key-facts-block">
  <h4>Automation Benefits</h4>
  <ul>
    <li>Fewer human errors</li>
    <li>Consistent output</li>
    <li>Quicker manufacturing cycle</li>
  </ul>
</div>

<div class="warning-block">
  <h4>Automation Challenges</h4>
  <ul>
    <li>High equipment cost</li>
    <li>Reduces need for skilled labour</li>
    <li>Requires maintenance and specialist training</li>
  </ul>
</div>
        `,
        canonical_keywords: ["CNC","automation","mechanisation","computer control","accuracy"],
        practice_items: []
      },
      {
        id: "sub-assembly",
        title: "Subsection 7 – Sub-Assembly and Bought-In Components",
        type: "content",
        study_group: 4,
        content_html: `
<div class="definition-block">
  <h4>Sub-assembly</h4>
  <p>When separate parts of a product are made in different locations or workstations (cells), then brought together later for final assembly.</p>
  <ul>
    <li>Improves efficiency</li>
    <li>Allows specialists to work on certain components</li>
    <li>Reduces lead times</li>
  </ul>
</div>

<div class="definition-block">
  <h4>Bought-in Components</h4>
  <p>Pre-made parts supplied by another manufacturer (e.g. screws, bolts, or hinges).</p>
  <ul>
    <li>Saves time and cost</li>
    <li>Ensures consistency and quality</li>
  </ul>
</div>

<div class="example-block">
  <h4>Example</h4>
  <p>A flat-pack chair uses sub-assembled legs and seat panels, and bought-in bolts and Allen keys to simplify final assembly for customers.</p>
</div>
        `,
        canonical_keywords: ["sub-assembly","bought-in components","efficiency","cells"],
        practice_items: []
      },
      {
        id: "quality-control",
        title: "Subsection 8 – Quality Control and Tolerance",
        type: "content",
        study_group: 4,
        content_html: `
<div class="definition-block">
  <h4>Key Terms</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Term</th>
        <th>Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Quality Control (QC)</td>
        <td>Ensures each product meets specification and is free from defects</td>
      </tr>
      <tr>
        <td>Tolerance</td>
        <td>The acceptable size variation allowed in manufacturing</td>
      </tr>
      <tr>
        <td>Go/No-Go Gauge</td>
        <td>A tool used to check if a part is within or outside tolerance</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="example-block">
  <h4>Example</h4>
  <p><strong>Table leg tolerance = 25 mm ± 0.5 mm</strong></p>
  <p>Legs measuring 24.6–25.4 mm are "Go". Outside this range = "No-Go".</p>
</div>

<div class="key-facts-block">
  <h4>Why QC Matters</h4>
  <ul>
    <li>Prevents product failures</li>
    <li>Maintains consistency</li>
    <li>Protects company reputation</li>
    <li>Reduces waste and cost</li>
  </ul>
</div>
        `,
        canonical_keywords: ["quality control","tolerance","Go/No-Go gauge","QC","specification"],
        practice_items: []
      },
      {
        id: "comparing-scales",
        title: "Subsection 9 – Comparing the Four Scales",
        type: "content",
        study_group: 5,
        content_html: `
<div class="subsection">
  <table class="data-table">
    <thead>
      <tr>
        <th>Scale</th>
        <th>Quantity</th>
        <th>Automation</th>
        <th>Cost per Unit</th>
        <th>Flexibility</th>
        <th>Example Product</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>One-Off</td>
        <td>1</td>
        <td>Handmade</td>
        <td>Very high</td>
        <td>Very flexible</td>
        <td>Custom jewellery, prototype furniture</td>
      </tr>
      <tr>
        <td>Batch</td>
        <td>10s–1000s</td>
        <td>Semi-automated</td>
        <td>Moderate</td>
        <td>Flexible</td>
        <td>Chairs, toys, ceramics</td>
      </tr>
      <tr>
        <td>Mass</td>
        <td>1000s–millions</td>
        <td>Highly automated</td>
        <td>Low</td>
        <td>Limited</td>
        <td>Phones, flat-pack furniture</td>
      </tr>
      <tr>
        <td>Continuous</td>
        <td>Millions</td>
        <td>Fully automated</td>
        <td>Very low</td>
        <td>None</td>
        <td>Paper, screws, bottles</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["comparison","scales","production methods","summary"],
        practice_items: []
      },
      {
        id: "timber-example",
        title: "Subsection 10 – Example: Timber Production by Scale",
        type: "content",
        study_group: 5,
        content_html: `
<div class="example-block">
  <h4>Timber Products by Scale</h4>
  <table class="data-table">
    <thead>
      <tr>
        <th>Scale</th>
        <th>Timber Product Example</th>
        <th>Features</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>One-Off</td>
        <td>Handmade oak rocking horse</td>
        <td>Crafted, unique, time-consuming</td>
      </tr>
      <tr>
        <td>Batch</td>
        <td>Set of school chairs</td>
        <td>Uses jigs and templates for consistency</td>
      </tr>
      <tr>
        <td>Mass</td>
        <td>Flat-pack desk</td>
        <td>CNC-cut parts, sub-assembled components</td>
      </tr>
      <tr>
        <td>Continuous</td>
        <td>MDF or plywood sheets</td>
        <td>Fully automated manufacturing 24/7</td>
      </tr>
    </tbody>
  </table>
</div>
        `,
        canonical_keywords: ["timber","production example","furniture","manufacturing"],
        practice_items: []
      },
      {
        id: "key-takeaways",
        title: "Subsection 11 – Key Takeaways",
        type: "content",
        study_group: 5,
        content_html: `
<div class="key-facts-block">
  <h4>🎯 Summary Points</h4>
  <ul>
    <li>Scales of production depend on quantity, demand, and equipment</li>
    <li>Jigs, templates, and CNC improve accuracy in batch/mass production</li>
    <li>Mechanisation and automation increase efficiency and reduce labour</li>
    <li>Sub-assembly and bought-in parts save time and simplify production</li>
    <li>Quality control and tolerances ensure products meet exact standards</li>
  </ul>
</div>
        `,
        canonical_keywords: ["summary","key points","production","manufacturing"],
        practice_items: []
      }
    ]
  },
  {
    id: "specialist-techniques",
    title: "2.8 – Specialist Techniques",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "surface-treatments",
    title: "2.9 – Surface Treatments",
    status: "coming_soon",
    subsections: []
  }
];
