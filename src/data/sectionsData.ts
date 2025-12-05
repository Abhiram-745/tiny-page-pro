// GCSE AQA Chemistry - 8 Base Topics
// Topic 1 is fully populated with user's revision notes
// Topics 2-8 show "Nothing here — please wait for update" placeholder

export interface PracticeItem {
  id: string;
  prompt_template: string;
  marks: number; // How many marks this question is worth
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[]; // Keywords specific to this question
  feedback_guidance?: { // Optional - for personalized feedback
    // What to mention if certain keywords are found/missing
    topic_coverage: {
      topic: string;
      required_keywords: string[];
      feedback_if_missing: string;
      feedback_if_partial: string;
    }[];
  };
}

export interface Subsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: PracticeItem[];
  study_group?: number; // Group 2-3 subsections together for studying
}

export interface TopicSection {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
}

export const sectionsData: TopicSection[] = [
  {
    id: "atomic-structure",
    title: "Atomic structure & periodic table",
    status: "ready",
    subsections: [
      {
        id: "1-1-1-atoms-elements-compounds",
        title: "1.1.1 ATOMS, ELEMENTS AND COMPOUNDS",
        type: "content",
        study_group: 1, // Study with 1.1.2
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What is an Atom?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>An atom is the smallest particle of an element that can exist. Every atom consists of a nucleus (containing protons and neutrons) and electrons arranged in shells around it.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>All substances are made of atoms.</li>
      <li>Atoms are neutral overall (same number of protons and electrons).</li>
      <li>The atom's nucleus makes up almost all of its mass.</li>
      <li>Atoms are incredibly small — radius ≈ 0.1 nanometres (1 × 10⁻¹⁰ m).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>A single atom of hydrogen (H) has: 1 proton, 0 neutrons, 1 electron.</p>
  </div>

  <!-- Animated Atom Model Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚛️ Atomic Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="200" height="160" viewBox="0 0 200 160">
        <!-- Nucleus - pulsing -->
        <g class="anim-pulse">
          <circle cx="100" cy="80" r="20" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2"/>
          <circle cx="93" cy="75" r="6" fill="#ef4444" opacity="0.7"/>
          <circle cx="107" cy="75" r="6" fill="#3b82f6" opacity="0.7"/>
          <circle cx="100" cy="87" r="6" fill="#ef4444" opacity="0.7"/>
          <text x="100" y="110" fill="currentColor" font-size="8" text-anchor="middle">Nucleus (p⁺ + n)</text>
        </g>
        
        <!-- Electron shell 1 -->
        <circle cx="100" cy="80" r="40" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,2" opacity="0.3"/>
        
        <!-- Electron shell 2 -->
        <circle cx="100" cy="80" r="60" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4,2" opacity="0.3"/>
        
        <!-- Electrons orbiting - animated -->
        <g class="anim-rotate-cw-fast" style="transform-origin: 100px 80px;">
          <circle cx="140" cy="80" r="5" fill="#f59e0b"/>
          <circle cx="60" cy="80" r="5" fill="#f59e0b"/>
        </g>
        
        <g class="anim-rotate-ccw" style="transform-origin: 100px 80px;">
          <circle cx="100" cy="20" r="5" fill="#f59e0b"/>
          <circle cx="100" cy="140" r="5" fill="#f59e0b"/>
          <circle cx="150" cy="50" r="5" fill="#f59e0b"/>
          <circle cx="50" cy="110" r="5" fill="#f59e0b"/>
        </g>
        
        <!-- Labels -->
        <text x="170" y="85" fill="#f59e0b" font-size="8">e⁻</text>
        <text x="100" y="155" fill="currentColor" font-size="9" text-anchor="middle">Electrons in shells</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Protons (red) and neutrons (blue) in nucleus • Electrons (yellow) orbit in shells</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>When asked "What is an atom?", always include: ✅ smallest part of an element and ✅ that can exist.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – What is an Element?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>An element is a pure substance that contains only one type of atom.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Each element is represented by a chemical symbol (e.g. O for oxygen, Na for sodium).</li>
      <li>There are about 100 known elements, shown in the Periodic Table.</li>
      <li>Elements can be classified as metals or non-metals depending on properties.</li>
      <li>The periodic table arranges elements by increasing atomic number (number of protons).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Symbol</th>
          <th>Metal/Non-metal</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hydrogen</td>
          <td>H</td>
          <td>Non-metal</td>
          <td>Lightest element</td>
        </tr>
        <tr>
          <td>Sodium</td>
          <td>Na</td>
          <td>Metal</td>
          <td>Reactive Group 1 element</td>
        </tr>
        <tr>
          <td>Chlorine</td>
          <td>Cl</td>
          <td>Non-metal</td>
          <td>Poisonous green gas</td>
        </tr>
        <tr>
          <td>Iron</td>
          <td>Fe</td>
          <td>Metal</td>
          <td>Forms rust (iron oxide)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>If asked to "define an element", always mention atoms are all the same type.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – What is a Compound?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A compound is a substance formed when two or more elements are chemically bonded together in fixed proportions.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Compounds contain more than one type of atom.</li>
      <li>They can only be separated by chemical reactions, not physical methods.</li>
      <li>The properties of a compound are different from those of the elements it's made from.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Compound</th>
          <th>Elements Involved</th>
          <th>Type of Bond</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Water (H₂O)</td>
          <td>Hydrogen + Oxygen</td>
          <td>Covalent</td>
          <td>Liquid at room temp</td>
        </tr>
        <tr>
          <td>Sodium Chloride (NaCl)</td>
          <td>Sodium + Chlorine</td>
          <td>Ionic</td>
          <td>Solid salt crystals</td>
        </tr>
        <tr>
          <td>Carbon Dioxide (CO₂)</td>
          <td>Carbon + Oxygen</td>
          <td>Covalent</td>
          <td>Colourless gas</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Use "chemically joined" not "mixed" — compounds involve bonding, mixtures don't.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Naming Rules for Compounds</h3>
  
  <div class="definition-block">
    <h4>🔵 Basic Rules</h4>
    <ul>
      <li><strong>Metal + Non-Metal = Ionic Compound</strong> - Ending changes to "-ide". Example: Sodium + Chlorine → Sodium Chloride</li>
      <li><strong>If Oxygen is Included → "-ate"</strong> - Example: Copper + Sulfur + Oxygen → Copper Sulfate</li>
      <li><strong>Non-Metals Only = Covalent Compound</strong> - Use prefixes to show number of atoms: mono = 1, di = 2, tri = 3, tetra = 4. Example: CO₂ = Carbon Dioxide</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Formula</th>
          <th>Name</th>
          <th>Type of Compound</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NaCl</td>
          <td>Sodium Chloride</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <td>H₂O</td>
          <td>Water</td>
          <td>Covalent</td>
        </tr>
        <tr>
          <td>MgO</td>
          <td>Magnesium Oxide</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <td>CO</td>
          <td>Carbon Monoxide</td>
          <td>Covalent</td>
        </tr>
        <tr>
          <td>CuSO₄</td>
          <td>Copper Sulfate</td>
          <td>Ionic</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always check for oxygen — it's the clue for "-ate".</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Writing Formulae and Equations</h3>
  
  <div class="definition-block">
    <h4>🔵 Step 1: Write the Symbols</h4>
    <p>Identify each element and write its symbol. Example: Sodium reacts with chlorine → Na + Cl.</p>
  </div>

  <div class="definition-block">
    <h4>🔵 Step 2: Balance the Charges</h4>
    <p>Combine ions so total charge = 0.</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Ion</th>
          <th>Charge</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Na⁺</td>
          <td>+1</td>
        </tr>
        <tr>
          <td>Cl⁻</td>
          <td>–1</td>
        </tr>
      </tbody>
    </table>
    <p>→ NaCl (charges cancel)</p>
  </div>

  <div class="definition-block">
    <h4>🔵 Step 3: Write the Formula</h4>
    <p>Combine elements in the correct ratio.</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Magnesium Oxide = Mg²⁺ + O²⁻ → MgO</li>
      <li>Calcium Chloride = Ca²⁺ + 2Cl⁻ → CaCl₂</li>
    </ul>
  </div>

  <div class="warning-block">
    <h4>🔴 Balanced Chemical Equation</h4>
    <p><strong>Example:</strong> 2Na + Cl₂ → 2NaCl (always ensure same number of atoms each side)</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Word Equation</h4>
    <p><strong>Example:</strong> Sodium + Chlorine → Sodium Chloride</p>
  </div>

  <div class="example-block">
    <h4>🟢 State Symbols</h4>
    <ul>
      <li>(s) = solid</li>
      <li>(l) = liquid</li>
      <li>(g) = gas</li>
      <li>(aq) = aqueous solution</li>
    </ul>
    <p><strong>Example with states:</strong> 2Na (s) + Cl₂ (g) → 2NaCl (s)</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "atom", "nucleus", "proton", "neutron", "electron", "shells",
          "element", "chemical symbol", "periodic table", "metal", "non-metal",
          "compound", "chemical bond", "formula", "ionic", "covalent",
          "naming compounds", "-ide", "-ate", "balanced equation", "state symbols"
        ],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Define what an atom is and describe its basic structure.",
            marks: 4,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "smallest particle", "element", "exist", "nucleus", "proton", "neutron", "electron", "shells"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Atom definition",
                  required_keywords: ["smallest", "particle", "element", "exist"],
                  feedback_if_missing: "You need to define what an atom is: the **smallest particle of an element that can exist**.",
                  feedback_if_partial: "Your definition is incomplete. Make sure to state it's the smallest particle of an element that can exist."
                },
                {
                  topic: "Atomic structure",
                  required_keywords: ["nucleus", "proton", "neutron", "electron", "shells"],
                  feedback_if_missing: "Describe the atomic structure: a **nucleus** containing protons and neutrons, with **electrons** arranged in shells around it.",
                  feedback_if_partial: "Add more detail about the structure - mention the nucleus contains protons and neutrons, and electrons are in shells."
                }
              ]
            }
          },
          {
            id: "p2",
            prompt_template: "State the definition of an element. Give two examples of elements with their chemical symbols and state whether each is a metal or non-metal.",
            marks: 5,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "pure substance", "one type", "atom", "symbol", "metal", "non-metal", "sodium", "hydrogen", "chlorine", "iron", "oxygen"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Element definition",
                  required_keywords: ["pure", "substance", "one type", "atom"],
                  feedback_if_missing: "Start with the definition: an element is a **pure substance that contains only one type of atom**.",
                  feedback_if_partial: "Your definition needs both parts: 'pure substance' AND 'contains only one type of atom'."
                },
                {
                  topic: "Element examples with classification",
                  required_keywords: ["symbol", "metal", "non-metal"],
                  feedback_if_missing: "Provide **two specific examples** with their symbols (e.g., Sodium, Na, metal; Oxygen, O, non-metal).",
                  feedback_if_partial: "Each example needs: the element name, its symbol, AND whether it's a metal or non-metal."
                }
              ]
            }
          },
          {
            id: "p3",
            prompt_template: "A hydrogen atom has 1 proton, 0 neutrons and 1 electron. Explain why atoms are described as neutral.",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "neutral", "protons", "electrons", "same number", "equal", "charge"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Neutral atoms",
                  required_keywords: ["protons", "electrons", "same", "equal"],
                  feedback_if_missing: "Explain that atoms are neutral because they have the **same number of protons and electrons**.",
                  feedback_if_partial: "Make sure to state that the number of protons equals the number of electrons, which makes the overall charge zero/neutral."
                }
              ]
            }
          },
          {
            id: "p4",
            prompt_template: "Define an element and give one example with its symbol.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "element", "pure substance", "one type of atom", "symbol"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Element definition",
                  required_keywords: ["pure", "one type"],
                  feedback_if_missing: "Your definition should state that an element is a **pure substance** containing only **one type of atom**.",
                  feedback_if_partial: "Make sure both parts are clear: 'pure substance' AND 'one type of atom'."
                },
                {
                  topic: "Example with symbol",
                  required_keywords: ["symbol"],
                  feedback_if_missing: "You must provide a **specific example** with its chemical symbol (e.g., 'Oxygen, symbol O' or 'Sodium, symbol Na').",
                  feedback_if_partial: "Include both the element name and its symbol together."
                }
              ]
            }
          },
          {
            id: "p5",
            prompt_template: "State the difference between an element and a compound.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "element", "one type", "compound", "two or more", "chemically bonded", "fixed proportions"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Element characteristics",
                  required_keywords: ["one type", "atom"],
                  feedback_if_missing: "Clearly state what makes an **element**: contains only one type of atom.",
                  feedback_if_partial: "Be more explicit that elements have one type of atom only."
                },
                {
                  topic: "Compound characteristics",
                  required_keywords: ["two or more", "chemically bonded", "fixed"],
                  feedback_if_missing: "Explain that **compounds** contain two or more elements that are chemically bonded in fixed proportions.",
                  feedback_if_partial: "Emphasize the key difference: compounds involve **chemical bonding** and **fixed proportions**, not just mixing."
                }
              ]
            }
          },
          {
            id: "p6",
            prompt_template: "Explain how to write a formula for an ionic compound (example NaCl).",
            marks: 5,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "ions", "charge", "balance", "metal", "non-metal", "positive", "negative", "formula"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Ion charges",
                  required_keywords: ["charge", "positive", "negative", "balance"],
                  feedback_if_missing: "Start by explaining that you need to **balance the charges** of the ions. Metal ions are positive (e.g., Na⁺ is +1) and non-metal ions are negative (e.g., Cl⁻ is -1).",
                  feedback_if_partial: "Be more specific about charge balancing. Explain that the total charge must equal zero, so you combine ions in the right ratio."
                },
                {
                  topic: "Writing the formula",
                  required_keywords: ["formula", "ratio"],
                  feedback_if_missing: "Explain the process: write the symbols, determine the charges, then combine in the correct ratio so charges cancel out. For NaCl: Na⁺ + Cl⁻ → NaCl (charges +1 and -1 cancel).",
                  feedback_if_partial: "Use the NaCl example to demonstrate: show that Na⁺ (+1) and Cl⁻ (-1) combine in a 1:1 ratio because the charges cancel."
                }
              ]
            }
          },
          {
            id: "p7",
            prompt_template: "Give the naming rule for compounds containing oxygen.",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: [
              "oxygen", "-ate", "ending", "sulfate", "carbonate", "nitrate"
            ],
            feedback_guidance: {
              topic_coverage: [
                {
                  topic: "Naming rule",
                  required_keywords: ["oxygen", "-ate"],
                  feedback_if_missing: "State the rule clearly: **when a compound contains oxygen, the name ends in '-ate'**.",
                  feedback_if_partial: "Be more explicit: compounds with oxygen end in '-ate'."
                },
                {
                  topic: "Examples",
                  required_keywords: ["sulfate", "carbonate", "nitrate"],
                  feedback_if_missing: "Include **examples** like copper sulfate (CuSO₄), calcium carbonate (CaCO₃), or sodium nitrate (NaNO₃).",
                  feedback_if_partial: "Add at least one specific example with its formula to illustrate the rule."
                }
              ]
            }
          }
        ]
      },
      {
        id: "1-1-2-mixtures",
        title: "1.1.2 MIXTURES",
        type: "content",
        study_group: 1, // Study with 1.1.1
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – What Is a Mixture?</h3>
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A mixture is a combination of two or more substances (elements or compounds) that are not chemically bonded together.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Substances in a mixture keep their original properties.</li>
      <li>Mixtures can be easily separated by physical methods, not chemical reactions.</li>
      <li>The composition of a mixture is not fixed — it can vary.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr><th>Mixture</th><th>Components</th><th>How They're Separated</th></tr>
      </thead>
      <tbody>
        <tr><td>Air</td><td>Nitrogen, oxygen, carbon dioxide</td><td>Fractional distillation of liquid air</td></tr>
        <tr><td>Sea water</td><td>Water, dissolved salts</td><td>Distillation or crystallisation</td></tr>
        <tr><td>Sand and salt</td><td>Sand, sodium chloride</td><td>Filtration + crystallisation</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💎 Subsection 2 – Filtration (Insoluble Solid from Liquid)</h3>
  <div class="definition-block">
    <h4>🧪 Purpose</h4>
    <p>To separate an insoluble solid (that doesn't dissolve) from a liquid.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Apparatus</h4>
    <ul>
      <li>Beaker</li>
      <li>Funnel</li>
      <li>Filter paper</li>
      <li>Stirring rod</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧩 Step-by-Step Method</h4>
    <ol>
      <li>1️⃣ Fold the filter paper into a cone and place it inside the funnel.</li>
      <li>2️⃣ Place the funnel into a clean beaker.</li>
      <li>3️⃣ Pour the mixture slowly through the filter paper.</li>
      <li>4️⃣ The liquid (filtrate) passes through the paper.</li>
      <li>5️⃣ The solid (residue) remains trapped on the paper.</li>
    </ol>
  </div>
  
  <!-- Animated Filtration Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧪 Filtration Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="200" height="180" viewBox="0 0 200 180">
        <!-- Funnel -->
        <path d="M60 40 L100 110 L140 40" fill="none" stroke="currentColor" stroke-width="2"/>
        <line x1="100" y1="110" x2="100" y2="130" stroke="currentColor" stroke-width="2"/>
        
        <!-- Filter paper -->
        <path d="M65 45 L100 100 L135 45" fill="#f5f5f4" stroke="#a8a29e" stroke-width="1"/>
        
        <!-- Residue (solid particles) - staying on filter -->
        <g class="anim-vibrate-slow">
          <circle cx="80" cy="70" r="4" fill="#78716c"/>
          <circle cx="95" cy="75" r="3" fill="#78716c"/>
          <circle cx="105" cy="70" r="4" fill="#78716c"/>
          <circle cx="120" cy="65" r="3" fill="#78716c"/>
          <circle cx="90" cy="60" r="3" fill="#78716c"/>
          <circle cx="110" cy="60" r="4" fill="#78716c"/>
        </g>
        
        <!-- Filtrate drops - flowing down -->
        <circle class="anim-flow-down" cx="100" cy="115" r="3" fill="#3b82f6" opacity="0.7"/>
        <circle class="anim-flow-down anim-delay-300" cx="100" cy="120" r="3" fill="#3b82f6" opacity="0.7"/>
        <circle class="anim-flow-down anim-delay-700" cx="100" cy="125" r="3" fill="#3b82f6" opacity="0.7"/>
        
        <!-- Collecting beaker -->
        <path d="M70 130 L70 170 L130 170 L130 130" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Filtrate in beaker - rising slowly -->
        <rect x="72" y="155" width="56" height="13" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Labels -->
        <text x="145" y="70" fill="#78716c" font-size="8">Residue</text>
        <text x="145" y="80" fill="#78716c" font-size="7">(solid)</text>
        <text x="135" y="155" fill="#3b82f6" font-size="8">Filtrate</text>
        <text x="135" y="165" fill="#3b82f6" font-size="7">(liquid)</text>
        <text x="45" y="75" fill="currentColor" font-size="7">Filter</text>
        <text x="45" y="85" fill="currentColor" font-size="7">paper</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Solid residue stays on filter paper • Liquid filtrate passes through</p>
  </div>

  <div class="key-facts-block">
    <h4>🔍 Scientific Explanation</h4>
    <ul>
      <li>Filter paper has tiny pores that allow liquid and dissolved substances through but trap large particles.</li>
      <li>No new substances are formed → physical process only.</li>
    </ul>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Common Exam Tip</h4>
    <p>Always name both the filtrate and the residue in your answer — they're both mark points.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">❄️ Subsection 3 – Crystallisation (Soluble Solid from Solution)</h3>
  <div class="definition-block">
    <h4>🧪 Purpose</h4>
    <p>Used to obtain pure crystals of a soluble solid (solute) from a solution.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Apparatus</h4>
    <ul>
      <li>Evaporating basin</li>
      <li>Tripod and gauze</li>
      <li>Bunsen burner</li>
      <li>Beaker (for hot water bath if needed)</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧩 Step-by-Step Method</h4>
    <ol>
      <li>1️⃣ Pour the solution (e.g. salt water) into an evaporating basin.</li>
      <li>2️⃣ Heat gently with a Bunsen burner (or water bath) to evaporate some of the solvent.</li>
      <li>3️⃣ Stop heating when crystals start to form at the edge of the basin (this shows the solution is concentrated).</li>
      <li>4️⃣ Leave the solution to cool slowly at room temperature — as temperature falls, solubility decreases, and crystals form.</li>
      <li>5️⃣ Filter out the crystals and dry them using filter paper or a warm oven.</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>🔍 Scientific Explanation</h4>
    <ul>
      <li>Heating removes solvent (usually water) → increases concentration.</li>
      <li>Cooling allows solid particles to form a regular crystal lattice as solubility decreases.</li>
    </ul>
  </div>
  
  <!-- Animated Crystallisation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Crystallisation Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="240" height="180" viewBox="0 0 240 180">
        <!-- Tripod -->
        <line x1="50" y1="155" x2="70" y2="130" stroke="#4a5568" stroke-width="3"/>
        <line x1="130" y1="155" x2="110" y2="130" stroke="#4a5568" stroke-width="3"/>
        <line x1="90" y1="155" x2="90" y2="130" stroke="#4a5568" stroke-width="3"/>
        
        <!-- Gauze -->
        <rect x="55" y="125" width="70" height="5" fill="#a8a29e" stroke="#78716c" stroke-width="1"/>
        <line x1="60" y1="127" x2="60" y2="130" stroke="#78716c" stroke-width="0.5"/>
        <line x1="70" y1="127" x2="70" y2="130" stroke="#78716c" stroke-width="0.5"/>
        <line x1="80" y1="127" x2="80" y2="130" stroke="#78716c" stroke-width="0.5"/>
        <line x1="100" y1="127" x2="100" y2="130" stroke="#78716c" stroke-width="0.5"/>
        <line x1="110" y1="127" x2="110" y2="130" stroke="#78716c" stroke-width="0.5"/>
        
        <!-- Bunsen burner flame -->
        <rect x="82" y="155" width="16" height="10" fill="#4a5568"/>
        <path d="M90 155 L90 145 L85 135 L95 135 L90 145" fill="#f97316" class="anim-pulse"/>
        <text x="90" y="173" fill="currentColor" font-size="6" text-anchor="middle">Heat</text>
        
        <!-- Evaporating basin -->
        <ellipse cx="90" cy="115" rx="50" ry="12" fill="#d4d4d8" stroke="#78716c" stroke-width="2"/>
        <path d="M45 115 Q 45 90 90 90 Q 135 90 135 115" fill="#d4d4d8" stroke="#78716c" stroke-width="2"/>
        
        <!-- Solution in basin -->
        <ellipse cx="90" cy="108" rx="40" ry="8" fill="#3b82f6" opacity="0.4"/>
        
        <!-- Steam rising (animated) -->
        <path d="M70 85 Q 65 75, 70 65" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.5" class="anim-flow-up"/>
        <path d="M90 80 Q 85 70, 90 60" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.5" class="anim-flow-up anim-delay-300"/>
        <path d="M110 85 Q 105 75, 110 65" fill="none" stroke="#94a3b8" stroke-width="2" opacity="0.5" class="anim-flow-up anim-delay-500"/>
        
        <!-- Crystal formation at edges -->
        <rect x="55" y="102" width="4" height="4" fill="#fff" stroke="#3b82f6" stroke-width="0.5" transform="rotate(45 57 104)" class="anim-pulse-fast"/>
        <rect x="62" y="100" width="3" height="3" fill="#fff" stroke="#3b82f6" stroke-width="0.5" transform="rotate(45 63.5 101.5)" class="anim-pulse-fast"/>
        <rect x="115" y="102" width="4" height="4" fill="#fff" stroke="#3b82f6" stroke-width="0.5" transform="rotate(45 117 104)" class="anim-pulse-fast"/>
        <rect x="120" y="100" width="3" height="3" fill="#fff" stroke="#3b82f6" stroke-width="0.5" transform="rotate(45 121.5 101.5)" class="anim-pulse-fast"/>
        
        <!-- Result section -->
        <rect x="170" y="80" width="55" height="70" fill="hsl(var(--muted))" rx="4" stroke="currentColor" stroke-width="1"/>
        <text x="197" y="95" fill="currentColor" font-size="7" text-anchor="middle">Result:</text>
        
        <!-- Crystal shapes in result -->
        <rect x="180" y="105" width="10" height="10" fill="#fff" stroke="#3b82f6" stroke-width="1" transform="rotate(45 185 110)"/>
        <rect x="195" y="115" width="8" height="8" fill="#fff" stroke="#3b82f6" stroke-width="1" transform="rotate(45 199 119)"/>
        <rect x="205" y="100" width="12" height="12" fill="#fff" stroke="#3b82f6" stroke-width="1" transform="rotate(45 211 106)"/>
        <text x="197" y="145" fill="#3b82f6" font-size="7" text-anchor="middle">Crystals</text>
        
        <!-- Labels -->
        <text x="90" y="55" fill="#94a3b8" font-size="7" text-anchor="middle">Steam</text>
        <text x="35" y="108" fill="#3b82f6" font-size="7">Solution</text>
        <text x="90" y="35" fill="currentColor" font-size="7" text-anchor="middle">Evaporating basin</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Heat gently until crystals form at edge • Cool slowly for pure crystals</p>
  </div>
  <div class="warning-block">
    <h4>⚠️ Safety Note</h4>
    <p>Avoid boiling all the water away — this can decompose the salt or make crystals impure.</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Common Exam Tip</h4>
    <p>Always mention "heat gently" and "allow to cool slowly" — both are AQA keywords for full marks.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💨 Subsection 4 – Simple Distillation (Solvent from Solution)</h3>
  <div class="definition-block">
    <h4>🧪 Purpose</h4>
    <p>To separate a liquid (solvent) from a solution, e.g. getting pure water from saltwater.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Apparatus</h4>
    <ul>
      <li>Round-bottomed flask</li>
      <li>Thermometer</li>
      <li>Condenser (Liebig condenser)</li>
      <li>Heat source (Bunsen burner)</li>
      <li>Beaker (to collect distillate)</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧩 Step-by-Step Method</h4>
    <ol>
      <li>1️⃣ Place the solution (e.g. saltwater) in the distillation flask.</li>
      <li>2️⃣ Heat gently — the liquid with the lowest boiling point (water) evaporates first.</li>
      <li>3️⃣ Vapour travels through the condenser, which is cooled by water circulating around it.</li>
      <li>4️⃣ Vapour condenses back to liquid and is collected in the beaker (called the distillate).</li>
      <li>5️⃣ The solute (e.g. salt) remains in the flask.</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>🔍 Scientific Explanation</h4>
    <ul>
      <li>Separation is based on different boiling points.</li>
      <li>Condensation happens because cold water enters at the bottom of the condenser and leaves at the top, ensuring efficient cooling.</li>
    </ul>
  </div>
  
  <!-- Animated Simple Distillation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Simple Distillation Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="200" viewBox="0 0 320 200">
        <!-- Heat source (Bunsen burner) -->
        <rect x="30" y="175" width="50" height="10" fill="#4a5568"/>
        <path d="M55 175 L55 165 L50 155 L60 155 L55 165" fill="#f97316" class="anim-pulse"/>
        <text x="55" y="195" fill="currentColor" font-size="7" text-anchor="middle">Heat</text>
        
        <!-- Round-bottomed flask -->
        <ellipse cx="55" cy="140" rx="35" ry="25" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <rect x="48" y="100" width="14" height="25" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <text x="55" y="145" fill="#3b82f6" font-size="7" text-anchor="middle">Solution</text>
        
        <!-- Steam bubbles rising -->
        <circle cx="50" cy="125" r="3" fill="#fff" opacity="0.7" class="anim-bubble-rise"/>
        <circle cx="60" cy="128" r="2" fill="#fff" opacity="0.6" class="anim-bubble-rise-2"/>
        <circle cx="55" cy="120" r="2.5" fill="#fff" opacity="0.6" class="anim-bubble-rise-3"/>
        
        <!-- Thermometer -->
        <rect x="58" y="70" width="4" height="35" fill="#fecaca" stroke="#ef4444" stroke-width="1"/>
        <circle cx="60" cy="75" r="5" fill="#ef4444"/>
        <text x="72" y="90" fill="#ef4444" font-size="7">100°C</text>
        
        <!-- Delivery tube / side arm -->
        <path d="M62 108 Q 80 108, 100 95 L 180 60" fill="none" stroke="#3b82f6" stroke-width="8"/>
        <path d="M62 108 Q 80 108, 100 95 L 180 60" fill="none" stroke="#dbeafe" stroke-width="5"/>
        
        <!-- Condenser outer tube -->
        <rect x="180" y="50" width="80" height="20" fill="none" stroke="#3b82f6" stroke-width="2" rx="3"/>
        
        <!-- Condenser inner tube -->
        <line x1="180" y1="60" x2="260" y2="60" stroke="#dbeafe" stroke-width="4"/>
        
        <!-- Cold water in/out arrows -->
        <path d="M190 45 L190 55" stroke="#06b6d4" stroke-width="2" marker-end="url(#waterArrow)"/>
        <path d="M250 65 L250 75" stroke="#06b6d4" stroke-width="2" marker-end="url(#waterArrow)"/>
        <text x="190" y="40" fill="#06b6d4" font-size="6" text-anchor="middle">Cold in</text>
        <text x="250" y="85" fill="#06b6d4" font-size="6" text-anchor="middle">Warm out</text>
        
        <!-- Vapour flow animation -->
        <circle r="3" fill="#fff" opacity="0.8" class="anim-flow-right">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 80 100 Q 130 80, 180 60 L 260 60"/>
        </circle>
        
        <!-- Collection tube -->
        <path d="M260 60 L280 80 L280 120" fill="none" stroke="#3b82f6" stroke-width="4"/>
        
        <!-- Collecting beaker -->
        <path d="M265 120 L265 170 L295 170 L295 120" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="267" y="145" width="26" height="23" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Drops falling -->
        <circle cx="280" cy="125" r="2" fill="#3b82f6" class="anim-flow-down"/>
        
        <!-- Labels -->
        <text x="55" y="165" fill="currentColor" font-size="7" text-anchor="middle">Flask</text>
        <text x="220" y="45" fill="currentColor" font-size="7" text-anchor="middle">Condenser</text>
        <text x="280" y="185" fill="currentColor" font-size="7" text-anchor="middle">Distillate</text>
        
        <defs>
          <marker id="waterArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#06b6d4"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Heat evaporates solvent • Condenser cools vapour • Distillate collected</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Common Exam Tip</h4>
    <p>Label "distillate" (collected liquid) and "residue" (left in flask) correctly in diagrams — AQA often awards marks for this.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🌡 Subsection 5 – Fractional Distillation (Mixture of Liquids)</h3>
  <div class="definition-block">
    <h4>🧪 Purpose</h4>
    <p>Used to separate two or more miscible liquids (liquids that mix completely), such as ethanol and water or liquid air.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Apparatus</h4>
    <ul>
      <li>Round-bottomed flask</li>
      <li>Fractionating column (glass beads inside to increase surface area)</li>
      <li>Thermometer</li>
      <li>Condenser</li>
      <li>Beaker(s)</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧩 Step-by-Step Method</h4>
    <ol>
      <li>1️⃣ Add the mixture to the flask and fit the fractionating column on top.</li>
      <li>2️⃣ Heat the mixture gently — the liquid with the lowest boiling point evaporates first.</li>
      <li>3️⃣ Vapour rises up the column.</li>
      <li>4️⃣ Cooler beads near the top cause higher-boiling vapours to condense and fall back, while lower-boiling vapours pass through.</li>
      <li>5️⃣ The vapour passes into the condenser, cools, and is collected separately.</li>
      <li>6️⃣ As temperature rises, other fractions can be collected in turn.</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>🔍 Scientific Explanation</h4>
    <ul>
      <li>The temperature gradient in the column ensures better separation.</li>
      <li>Each fraction condenses at its own boiling point, forming pure samples.</li>
    </ul>
  </div>
  
  <!-- Animated Fractional Distillation Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Fractional Distillation Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="280" height="220" viewBox="0 0 280 220">
        <!-- Heat source -->
        <rect x="30" y="195" width="40" height="8" fill="#4a5568"/>
        <path d="M50 195 L50 188 L45 180 L55 180 L50 188" fill="#f97316" class="anim-pulse"/>
        
        <!-- Round-bottomed flask -->
        <ellipse cx="50" cy="165" rx="30" ry="20" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        <rect x="43" y="130" width="14" height="25" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Liquid mixture in flask -->
        <ellipse cx="50" cy="170" rx="25" ry="12" fill="#a855f7" opacity="0.4"/>
        <text x="50" y="173" fill="#a855f7" font-size="6" text-anchor="middle">Mixture</text>
        
        <!-- Fractionating column -->
        <rect x="40" y="50" width="20" height="80" fill="none" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Glass beads in column -->
        <circle cx="48" cy="60" r="4" fill="#94a3b8" opacity="0.6"/>
        <circle cx="52" cy="70" r="3" fill="#94a3b8" opacity="0.6"/>
        <circle cx="47" cy="80" r="4" fill="#94a3b8" opacity="0.6"/>
        <circle cx="53" cy="90" r="3" fill="#94a3b8" opacity="0.6"/>
        <circle cx="48" cy="100" r="4" fill="#94a3b8" opacity="0.6"/>
        <circle cx="52" cy="110" r="3" fill="#94a3b8" opacity="0.6"/>
        <circle cx="47" cy="120" r="4" fill="#94a3b8" opacity="0.6"/>
        
        <!-- Rising vapour bubbles -->
        <circle cx="50" cy="85" r="2" fill="#fff" opacity="0.7" class="anim-bubble-rise"/>
        <circle cx="50" cy="105" r="2" fill="#fff" opacity="0.6" class="anim-bubble-rise-2"/>
        
        <!-- Temperature gradient labels -->
        <text x="25" y="55" fill="#06b6d4" font-size="6">Cool</text>
        <text x="25" y="115" fill="#ef4444" font-size="6">Hot</text>
        
        <!-- Thermometer -->
        <rect x="52" y="35" width="4" height="20" fill="#fecaca" stroke="#ef4444" stroke-width="1"/>
        <circle cx="54" cy="40" r="4" fill="#ef4444"/>
        
        <!-- Side arm to condenser -->
        <path d="M60 55 Q 80 55, 100 45 L 150 30" fill="none" stroke="#3b82f6" stroke-width="6"/>
        <path d="M60 55 Q 80 55, 100 45 L 150 30" fill="none" stroke="#dbeafe" stroke-width="3"/>
        
        <!-- Condenser -->
        <rect x="150" y="20" width="70" height="18" fill="none" stroke="#3b82f6" stroke-width="2" rx="2"/>
        <line x1="150" y1="29" x2="220" y2="29" stroke="#dbeafe" stroke-width="3"/>
        
        <!-- Water flow -->
        <text x="160" y="15" fill="#06b6d4" font-size="5">Cold H₂O</text>
        
        <!-- Collection beaker -->
        <path d="M225 35 L235 55 L235 85 L255 85 L255 55 L245 35" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <rect x="237" y="65" width="16" height="18" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Drop animation -->
        <circle cx="240" cy="50" r="2" fill="#3b82f6" class="anim-flow-down"/>
        
        <!-- Labels -->
        <text x="50" y="45" fill="currentColor" font-size="6" text-anchor="middle">Fractionating</text>
        <text x="50" y="53" fill="currentColor" font-size="6" text-anchor="middle">column</text>
        <text x="245" y="100" fill="currentColor" font-size="6" text-anchor="middle">Fraction 1</text>
        <text x="185" y="45" fill="currentColor" font-size="6" text-anchor="middle">Condenser</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Glass beads increase surface area • Temperature gradient separates fractions</p>
  </div>
  <div class="example-block">
    <h4>🧠 Real-Life Applications</h4>
    <ul>
      <li>Crude oil → separated into petrol, diesel, kerosene, etc.</li>
      <li>Air → separated into nitrogen, oxygen, argon.</li>
    </ul>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always mention the temperature gradient — "cooler at the top, hotter at the bottom."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🎨 Subsection 6 – Paper Chromatography (Soluble Substances)</h3>
  <div class="definition-block">
    <h4>🧪 Purpose</h4>
    <p>Used to separate and identify substances in a mixture of soluble chemicals, especially coloured dyes or inks.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Apparatus</h4>
    <ul>
      <li>Beaker with solvent (e.g. water or ethanol)</li>
      <li>Chromatography paper</li>
      <li>Pencil and ruler</li>
      <li>Capillary tube</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧩 Step-by-Step Method</h4>
    <ol>
      <li>1️⃣ Use a pencil to draw a baseline near the bottom of the chromatography paper.</li>
      <li>2️⃣ Place small dots of each sample on the baseline using a capillary tube.</li>
      <li>3️⃣ Hang the paper in a beaker with solvent below the baseline (so samples don't dissolve immediately).</li>
      <li>4️⃣ As solvent moves up by capillary action, it carries each dye with it.</li>
      <li>5️⃣ Different substances move at different speeds, depending on solubility and attraction to the paper.</li>
      <li>6️⃣ When the solvent front is near the top, remove the paper, mark the solvent line, and let it dry.</li>
    </ol>
  </div>
  <div class="key-facts-block">
    <h4>📊 Calculating Rf Values</h4>
    <p><strong>Rf = Distance moved by substance ÷ Distance moved by solvent front</strong></p>
    <p>Rf value = always between 0 and 1.</p>
  </div>
  <div class="key-facts-block">
    <h4>🔍 Scientific Explanation</h4>
    <ul>
      <li>The more soluble a substance, the further it travels.</li>
      <li>If a substance is strongly attracted to the paper, it moves less.</li>
    </ul>
  </div>
  
  <!-- Animated Chromatography Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🎨 Paper Chromatography Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="260" height="200" viewBox="0 0 260 200">
        <!-- Beaker -->
        <path d="M40 60 L40 170 L180 170 L180 60" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="42" y="155" width="136" height="13" fill="#dbeafe" opacity="0.4"/>
        <text x="110" y="185" fill="currentColor" font-size="7" text-anchor="middle">Solvent</text>
        
        <!-- Paper strip -->
        <rect x="100" y="30" width="20" height="135" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        
        <!-- Baseline (pencil) -->
        <line x1="102" y1="145" x2="118" y2="145" stroke="#78716c" stroke-width="1"/>
        <text x="85" y="147" fill="#78716c" font-size="6">Baseline</text>
        
        <!-- Sample spots on baseline -->
        <circle cx="110" cy="145" r="3" fill="#ef4444" opacity="0.8"/>
        
        <!-- Solvent front rising (animated) -->
        <rect x="101" y="80" width="18" height="65" fill="#3b82f6" opacity="0.15">
          <animate attributeName="y" values="145;80;145" dur="6s" repeatCount="indefinite"/>
          <animate attributeName="height" values="0;65;0" dur="6s" repeatCount="indefinite"/>
        </rect>
        
        <!-- Separated dyes (appearing as solvent rises) -->
        <circle cx="110" cy="90" r="4" fill="#a855f7" opacity="0.8">
          <animate attributeName="opacity" values="0;0;0.8;0.8;0" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="110" cy="110" r="4" fill="#3b82f6" opacity="0.8">
          <animate attributeName="opacity" values="0;0;0.8;0.8;0" dur="6s" repeatCount="indefinite"/>
        </circle>
        <circle cx="110" cy="130" r="4" fill="#ef4444" opacity="0.8">
          <animate attributeName="opacity" values="0;0;0.8;0.8;0" dur="6s" repeatCount="indefinite"/>
        </circle>
        
        <!-- Solvent front line -->
        <line x1="95" y1="80" x2="125" y2="80" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2">
          <animate attributeName="y1" values="145;80;145" dur="6s" repeatCount="indefinite"/>
          <animate attributeName="y2" values="145;80;145" dur="6s" repeatCount="indefinite"/>
        </line>
        <text x="128" y="83" fill="#3b82f6" font-size="6">Solvent front</text>
        
        <!-- Result diagram (right side) -->
        <rect x="195" y="50" width="50" height="90" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
        <text x="220" y="45" fill="currentColor" font-size="7" text-anchor="middle">Result</text>
        
        <!-- Baseline on result -->
        <line x1="197" y1="130" x2="243" y2="130" stroke="#78716c" stroke-width="1"/>
        
        <!-- Separated spots on result -->
        <circle cx="220" cy="70" r="5" fill="#a855f7" opacity="0.8"/>
        <circle cx="220" cy="95" r="5" fill="#3b82f6" opacity="0.8"/>
        <circle cx="220" cy="120" r="5" fill="#ef4444" opacity="0.8"/>
        
        <!-- Rf measurement arrows -->
        <line x1="230" y1="130" x2="230" y2="55" stroke="#22c55e" stroke-width="1"/>
        <polygon points="230,55 227,62 233,62" fill="#22c55e"/>
        <text x="240" y="93" fill="#22c55e" font-size="5">Rf values</text>
        
        <!-- Clip at top -->
        <rect x="95" y="25" width="30" height="8" fill="#4a5568" rx="1"/>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Solvent carries dyes at different rates • Higher Rf = more soluble</p>
  </div>
  <div class="warning-block">
    <h4>⚠️ Safety and Accuracy Notes</h4>
    <ul>
      <li>Always use pencil for the baseline (ink would dissolve).</li>
      <li>Make sure solvent doesn't cover the samples at the start.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚖️ Subsection 7 – Choosing the Correct Technique</h3>
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Type of Mixture</th><th>Correct Method</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Insoluble solid + liquid</td><td>Filtration</td><td>Sand and water</td></tr>
        <tr><td>Soluble solid + liquid</td><td>Crystallisation</td><td>Salt solution</td></tr>
        <tr><td>Solvent from solution</td><td>Simple distillation</td><td>Water from seawater</td></tr>
        <tr><td>Two liquids</td><td>Fractional distillation</td><td>Ethanol and water</td></tr>
        <tr><td>Coloured compounds</td><td>Chromatography</td><td>Ink pigments</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧠 Subsection 8 – Purity and Melting Point</h3>
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Term</th><th>Definition</th></tr>
      </thead>
      <tbody>
        <tr><td>Pure substance</td><td>A single element or compound with a fixed melting and boiling point.</td></tr>
        <tr><td>Impure substance</td><td>A mixture — melts or boils over a range of temperatures.</td></tr>
      </tbody>
    </table>
  </div>
  <div class="example-block">
    <h4>🟢 Example</h4>
    <ul>
      <li>Pure ice → melts at 0°C exactly.</li>
      <li>Ice with salt → melts between –5°C and 0°C.</li>
    </ul>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 This is how purity is tested in labs</h4>
    <p>By measuring melting/boiling point.</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "mixture", "physical combination", "filtration", "residue", "filtrate",
          "crystallisation", "evaporation", "simple distillation", "fractional distillation",
          "chromatography", "Rf value", "solvent front", "purity", "melting point"
        ],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Define what a mixture is. Explain how mixtures are different from compounds.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "mixture", "not chemically joined", "physical", "separated", "properties unchanged", 
              "compound", "chemically bonded", "chemical reaction"
            ]
          },
          {
            id: "p2",
            prompt_template: "Describe how to separate a mixture of sand and salt water to obtain pure salt crystals. Include the names of all techniques used.",
            marks: 6,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "filtration", "sand", "residue", "salt water", "filtrate", "crystallisation", 
              "evaporate", "crystals", "pure"
            ]
          },
          {
            id: "p3",
            prompt_template: "Describe the process of simple distillation to separate pure water from salt water. Include equipment and key steps.",
            marks: 5,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: [
              "heat", "evaporate", "boiling point", "condenser", "cool", "distillate", "collect", "flask"
            ]
          },
          {
            id: "p4",
            prompt_template: "A student uses paper chromatography to test food colourings. Describe the method and explain how to calculate an Rf value.",
            marks: 6,
            type: "short-answer",
            difficulty: "hard",
            randomise: true,
            expected_keywords: [
              "baseline", "pencil", "solvent", "move up", "different distances",
              "Rf value", "distance moved", "substance", "solvent front", "formula"
            ]
          }
        ]
      },
      {
        id: "1-1-3-atomic-model",
        title: "1.1.3 DEVELOPMENT OF THE ATOMIC MODEL",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Why Scientific Models Change</h3>
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A scientific model is an idea, picture, or representation that helps to explain experimental observations. These models are updated when new evidence is discovered through experiments or improved technology.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 More Detail</h4>
    <ul>
      <li>In the 19th and 20th centuries, new experimental techniques like cathode ray tubes and alpha particle scattering allowed scientists to "see" evidence for smaller particles.</li>
      <li>This caused older models to be rejected, adapted, or refined to fit the new data.</li>
      <li>The modern atomic model is still a theoretical model, and even now, new discoveries (like quarks) refine our understanding of atomic structure.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Key Principle</h4>
    <p>"Scientific models evolve as new evidence is gathered."</p>
  </div>

  <!-- Animated Atomic Model Timeline Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>📅 Development of Atomic Models Timeline (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="180" viewBox="0 0 360 180">
        <!-- Timeline line -->
        <line x1="30" y1="90" x2="330" y2="90" stroke="currentColor" stroke-width="2"/>
        
        <!-- Dalton 1803 -->
        <g>
          <circle cx="50" cy="90" r="6" fill="#78716c" class="anim-pulse"/>
          <text x="50" y="70" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">1803</text>
          <circle cx="50" cy="130" r="15" fill="#78716c" stroke="#57534e" stroke-width="2"/>
          <text x="50" y="160" fill="currentColor" font-size="7" text-anchor="middle">Dalton</text>
          <text x="50" y="170" fill="currentColor" font-size="6" text-anchor="middle">Solid Sphere</text>
        </g>
        
        <!-- Thomson 1897 -->
        <g>
          <circle cx="125" cy="90" r="6" fill="#22c55e" class="anim-pulse anim-delay-200"/>
          <text x="125" y="70" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">1897</text>
          <circle cx="125" cy="130" r="15" fill="#22c55e" opacity="0.3" stroke="#16a34a" stroke-width="2"/>
          <circle cx="118" cy="125" r="3" fill="#ef4444"/>
          <circle cx="132" cy="128" r="3" fill="#ef4444"/>
          <circle cx="125" cy="137" r="3" fill="#ef4444"/>
          <text x="125" y="160" fill="currentColor" font-size="7" text-anchor="middle">Thomson</text>
          <text x="125" y="170" fill="currentColor" font-size="6" text-anchor="middle">Plum Pudding</text>
        </g>
        
        <!-- Rutherford 1909 -->
        <g>
          <circle cx="200" cy="90" r="6" fill="#3b82f6" class="anim-pulse anim-delay-400"/>
          <text x="200" y="70" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">1909</text>
          <circle cx="200" cy="130" r="15" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2" opacity="0.4"/>
          <circle cx="200" cy="130" r="5" fill="#ef4444"/>
          <circle cx="200" cy="117" r="2" fill="#f59e0b" class="anim-rotate-cw" style="transform-origin: 200px 130px;"/>
          <text x="200" y="160" fill="currentColor" font-size="7" text-anchor="middle">Rutherford</text>
          <text x="200" y="170" fill="currentColor" font-size="6" text-anchor="middle">Nuclear Model</text>
        </g>
        
        <!-- Bohr 1913 -->
        <g>
          <circle cx="275" cy="90" r="6" fill="#a855f7" class="anim-pulse anim-delay-600"/>
          <text x="275" y="70" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">1913</text>
          <circle cx="275" cy="130" r="10" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
          <circle cx="275" cy="130" r="18" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
          <circle cx="275" cy="130" r="4" fill="#ef4444"/>
          <circle cx="275" cy="120" r="2" fill="#f59e0b" class="anim-rotate-cw-fast" style="transform-origin: 275px 130px;"/>
          <circle cx="275" cy="112" r="2" fill="#f59e0b" class="anim-rotate-ccw" style="transform-origin: 275px 130px;"/>
          <text x="275" y="160" fill="currentColor" font-size="7" text-anchor="middle">Bohr</text>
          <text x="275" y="170" fill="currentColor" font-size="6" text-anchor="middle">Energy Levels</text>
        </g>
        
        <!-- Chadwick 1932 -->
        <g>
          <circle cx="330" cy="90" r="6" fill="#f59e0b" class="anim-pulse anim-delay-800"/>
          <text x="325" y="70" fill="currentColor" font-size="8" text-anchor="middle" font-weight="bold">1932</text>
          <text x="325" y="55" fill="currentColor" font-size="7" text-anchor="middle">Chadwick</text>
          <text x="325" y="45" fill="currentColor" font-size="6" text-anchor="middle">+Neutrons</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Each model improved as new evidence was discovered through experiments</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚫ Subsection 2 – Dalton's Solid Sphere Model (1803)</h3>
  <div class="definition-block">
    <h4>🔵 Summary</h4>
    <p>John Dalton proposed that:</p>
    <ul>
      <li>All matter is made of tiny, indivisible spheres called atoms.</li>
      <li>Each element contains atoms of a single, unique type.</li>
      <li>Atoms of different elements vary in mass and properties.</li>
      <li>Atoms cannot be divided, created, or destroyed (in chemical reactions they just rearrange).</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Added Detail</h4>
    <ul>
      <li>Dalton used experimental data on gas reactions to support his ideas.</li>
      <li>His model explained the Law of Conservation of Mass (total mass before and after a reaction is the same).</li>
      <li>However, Dalton's model could not explain electricity or subatomic particles — because they hadn't been discovered yet.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>📘 Diagram Description</h4>
    <p>Atoms shown as solid, featureless spheres — like tiny billiard balls.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚪ Subsection 3 – Thomson's Plum Pudding Model (1897)</h3>
  <div class="definition-block">
    <h4>🔵 Discovery</h4>
    <p>J. J. Thomson discovered the electron through his cathode ray tube experiment. He found that cathode rays were negatively charged particles, smaller than atoms.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Model Description</h4>
    <p>The atom was imagined as a positive sphere with negative electrons embedded throughout it, like plums in a pudding. The positive "dough" balanced the negative electrons, making the atom neutral overall.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Added Detail</h4>
    <ul>
      <li>This was the first model to include subatomic particles.</li>
      <li>It explained that atoms could conduct electricity because they contained charged particles.</li>
      <li>However, it didn't explain how electrons were arranged or why atoms emitted light at specific wavelengths.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>📘 Diagram Description</h4>
    <p>Positive background with small negative dots spread evenly through it.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧪 Subsection 4 – Rutherford's Nuclear Model (1909)</h3>
  <div class="definition-block">
    <h4>⚙️ Experiment: Gold Foil (Alpha Scattering)</h4>
    <p>Ernest Rutherford, with Geiger and Marsden, fired alpha particles (positive helium nuclei) at thin gold foil.</p>
  </div>
  <div class="key-facts-block">
    <h4>🔬 Observations</h4>
    <ul>
      <li>Most alpha particles passed straight through → Atom mostly empty space.</li>
      <li>Some deflected slightly → Positive charge concentrated in a small area.</li>
      <li>Few bounced straight back → The positive centre (nucleus) must be tiny and dense.</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>🧠 More Scientific Detail</h4>
    <ul>
      <li>The positive nucleus contained most of the atom's mass.</li>
      <li>Electrons were thought to orbit the nucleus, similar to planets around the Sun.</li>
      <li>The model explained atomic scattering patterns, but couldn't explain atomic stability or emission spectra.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🧩 Impact</h4>
    <p>This was a major breakthrough — it completely replaced the Plum Pudding model.</p>
  </div>
  <div class="example-block">
    <h4>📘 Rutherford's Nuclear Model</h4>
    <p>Small, dense nucleus in the centre; electrons orbiting in space around it.</p>
  </div>

  <!-- Animated Alpha Scattering Experiment Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚛️ Alpha Particle Scattering Experiment (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="200" viewBox="0 0 320 200">
        <!-- Alpha source -->
        <rect x="10" y="85" width="30" height="30" fill="#f59e0b" stroke="#d97706" stroke-width="2" rx="3"/>
        <text x="25" y="130" fill="#f59e0b" font-size="8" text-anchor="middle">α source</text>
        
        <!-- Gold foil -->
        <rect x="180" y="40" width="4" height="120" fill="#ffd700" stroke="#b8860b" stroke-width="1"/>
        <text x="182" y="170" fill="#ffd700" font-size="8" text-anchor="middle">Gold foil</text>
        
        <!-- Gold atoms with nuclei -->
        <circle cx="182" cy="60" r="15" fill="none" stroke="#ffd700" stroke-width="1" stroke-dasharray="2,2" opacity="0.5"/>
        <circle cx="182" cy="60" r="3" fill="#ef4444"/>
        <circle cx="182" cy="100" r="15" fill="none" stroke="#ffd700" stroke-width="1" stroke-dasharray="2,2" opacity="0.5"/>
        <circle cx="182" cy="100" r="3" fill="#ef4444"/>
        <circle cx="182" cy="140" r="15" fill="none" stroke="#ffd700" stroke-width="1" stroke-dasharray="2,2" opacity="0.5"/>
        <circle cx="182" cy="140" r="3" fill="#ef4444"/>
        
        <!-- Alpha particles - most pass through -->
        <circle r="4" fill="#f59e0b" class="anim-flow-right">
          <animate attributeName="cx" from="50" to="290" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="70;70;70" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle r="4" fill="#f59e0b" class="anim-flow-right">
          <animate attributeName="cx" from="50" to="290" dur="2s" repeatCount="indefinite" begin="0.3s"/>
          <animate attributeName="cy" values="85;85;85" dur="2s" repeatCount="indefinite" begin="0.3s"/>
        </circle>
        <circle r="4" fill="#f59e0b" class="anim-flow-right">
          <animate attributeName="cx" from="50" to="290" dur="2s" repeatCount="indefinite" begin="0.6s"/>
          <animate attributeName="cy" values="115;115;115" dur="2s" repeatCount="indefinite" begin="0.6s"/>
        </circle>
        
        <!-- Alpha particle - slight deflection -->
        <circle r="4" fill="#22c55e">
          <animate attributeName="cx" from="50" to="280" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
          <animate attributeName="cy" values="100;100;130" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        
        <!-- Alpha particle - bounces back -->
        <circle r="4" fill="#ef4444">
          <animate attributeName="cx" values="50;170;50" dur="3s" repeatCount="indefinite" begin="1s"/>
          <animate attributeName="cy" values="60;60;40" dur="3s" repeatCount="indefinite" begin="1s"/>
        </circle>
        
        <!-- Detector screen -->
        <path d="M240 20 Q300 100 240 180" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5,3"/>
        <text x="280" y="100" fill="currentColor" font-size="8" text-anchor="middle">Detector</text>
        
        <!-- Legend -->
        <circle cx="20" cy="180" r="4" fill="#f59e0b"/>
        <text x="30" y="183" fill="currentColor" font-size="7">Most pass through</text>
        <circle cx="110" cy="180" r="4" fill="#22c55e"/>
        <text x="120" y="183" fill="currentColor" font-size="7">Some deflect</text>
        <circle cx="200" cy="180" r="4" fill="#ef4444"/>
        <text x="210" y="183" fill="currentColor" font-size="7">Few bounce back</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Most α particles pass through (empty space) • Few deflect or bounce (small dense nucleus)</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚡ Subsection 5 – Bohr's Planetary Model (1913)</h3>
  <div class="definition-block">
    <h4>🔵 Discovery</h4>
    <p>Niels Bohr refined Rutherford's model using results from atomic emission spectra (coloured light emitted when atoms are excited).</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 More Detail</h4>
    <ul>
      <li>Bohr realised electrons could only occupy certain fixed energy levels (shells).</li>
      <li>When electrons move between these levels, they absorb or emit specific amounts of energy (quanta).</li>
      <li>This explained why each element produces its own unique line spectrum.</li>
      <li>The idea of quantised energy levels was revolutionary and matched experimental data perfectly.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>📘 Bohr's Model Description</h4>
    <p>Electrons orbit the nucleus in set paths (energy levels), not randomly. Each shell can hold a fixed number of electrons.</p>
  </div>
  <div class="key-facts-block">
    <h4>⚙️ Key Equations (Higher Tier)</h4>
    <p>Energy absorbed/emitted ∝ 1/n₁² – 1/n₂²<br>(This relationship explained hydrogen's emission lines — evidence for quantised orbits.)</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚛️ Subsection 6 – Chadwick's Discovery of the Neutron (1932)</h3>
  <div class="definition-block">
    <h4>🔵 Background</h4>
    <p>After Bohr's model, scientists still couldn't explain why the atomic mass didn't match the number of protons alone.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Discovery</h4>
    <ul>
      <li>James Chadwick performed experiments involving beryllium and alpha particles, discovering a new, neutral particle — the neutron.</li>
      <li>Neutrons had no charge, but similar mass to protons.</li>
      <li>They explained why isotopes (atoms of the same element with different masses) existed.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Significance</h4>
    <ul>
      <li>Completed the modern nuclear model.</li>
      <li>Established that the nucleus contains both protons and neutrons, surrounded by electrons in fixed shells.</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>📘 Modern Atomic Model</h4>
    <p>Dense nucleus (protons + neutrons) surrounded by electrons in fixed energy levels. Atom mostly empty space.</p>
  </div>
</div>
        `,
        canonical_keywords: ["Dalton", "Thomson", "Rutherford", "Bohr", "Chadwick", "alpha scattering", "plum pudding", "nuclear model", "electron", "neutron", "energy levels"],
        practice_items: [
          {
            id: "atomic-model-1",
            prompt_template: "Describe how the discovery of the electron led to the plum pudding model. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["Thomson", "electron", "negative charge", "positive sphere", "embedded"]
          },
          {
            id: "atomic-model-2",
            prompt_template: "Explain what the alpha scattering experiment showed about the structure of the atom. Include all three key observations. [6 marks]",
            marks: 6,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["alpha particles", "gold foil", "passed through", "empty space", "deflected", "nucleus", "bounced back", "dense"]
          },
          {
            id: "atomic-model-3",
            prompt_template: "Describe Bohr's contribution to the atomic model. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["Bohr", "electrons", "fixed distances", "energy levels", "shells"]
          }
        ]
      },
      {
        id: "1-1-4-subatomic-particles",
        title: "1.1.4 RELATIVE ELECTRICAL CHARGES",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – The Three Subatomic Particles</h3>
  
  <div class="diagram-block hover-pause">
    <h4>⚛️ Subatomic Particles</h4>
    <svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Proton -->
      <g transform="translate(75, 100)">
        <circle cx="0" cy="0" r="35" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2">
          <animate attributeName="r" values="35;38;35" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="25" fill="#ef4444"/>
        <text x="0" y="5" fill="white" font-size="16" font-weight="bold" text-anchor="middle">p⁺</text>
        <text x="0" y="60" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">PROTON</text>
        <text x="0" y="75" fill="#94a3b8" font-size="9" text-anchor="middle">Charge: +1</text>
        <text x="0" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">Mass: 1</text>
        <text x="0" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">In nucleus</text>
      </g>
      
      <!-- Neutron -->
      <g transform="translate(225, 100)">
        <circle cx="0" cy="0" r="35" fill="#64748b" opacity="0.3" stroke="#64748b" stroke-width="2">
          <animate attributeName="r" values="35;38;35" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="25" fill="#64748b"/>
        <text x="0" y="5" fill="white" font-size="16" font-weight="bold" text-anchor="middle">n⁰</text>
        <text x="0" y="60" fill="#64748b" font-size="11" text-anchor="middle" font-weight="bold">NEUTRON</text>
        <text x="0" y="75" fill="#94a3b8" font-size="9" text-anchor="middle">Charge: 0</text>
        <text x="0" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">Mass: 1</text>
        <text x="0" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">In nucleus</text>
      </g>
      
      <!-- Electron -->
      <g transform="translate(375, 100)">
        <circle cx="0" cy="0" r="35" fill="#fbbf24" opacity="0.2" stroke="#fbbf24" stroke-width="2">
          <animate attributeName="r" values="35;40;35" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="12" fill="#fbbf24">
          <animate attributeName="cx" values="0;5;0;-5;0" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="4" fill="#0f172a" font-size="10" font-weight="bold" text-anchor="middle">e⁻</text>
        <text x="0" y="60" fill="#fbbf24" font-size="11" text-anchor="middle" font-weight="bold">ELECTRON</text>
        <text x="0" y="75" fill="#94a3b8" font-size="9" text-anchor="middle">Charge: -1</text>
        <text x="0" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">Mass: ≈0</text>
        <text x="0" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">In shells</text>
      </g>
      
      <!-- Size comparison note -->
      <text x="225" y="210" fill="#94a3b8" font-size="9" text-anchor="middle">Note: Electrons are ~1836× smaller in mass than protons/neutrons</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #ef4444; border-radius: 50%;"></span> Proton (+1)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #64748b; border-radius: 50%;"></span> Neutron (0)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #fbbf24; border-radius: 50%;"></span> Electron (-1)</span>
    </div>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Particle</th><th>Symbol</th><th>Relative Charge</th><th>Relative Mass</th><th>Location</th></tr>
      </thead>
      <tbody>
        <tr><td>Proton</td><td>p⁺</td><td>+1</td><td>1</td><td>In the nucleus</td></tr>
        <tr><td>Neutron</td><td>n⁰</td><td>0</td><td>1</td><td>In the nucleus</td></tr>
        <tr><td>Electron</td><td>e⁻</td><td>–1</td><td>1/1836 (≈0)</td><td>In shells</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why Atoms Are Neutral</h3>
  <div class="definition-block">
    <h4>🔵 Explanation</h4>
    <p>Atoms are electrically neutral because the number of positive protons equals the number of negative electrons.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Atomic Number and Mass Number</h3>
  <div class="definition-block">
    <h4>🔵 Definitions</h4>
    <ul>
      <li><strong>Atomic number (Z):</strong> Number of protons</li>
      <li><strong>Mass number (A):</strong> Total protons + neutrons</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>For chlorine-35 (³⁵₁₇Cl): Protons = 17, Neutrons = 18, Electrons = 17</p>
  </div>
</div>
        `,
        canonical_keywords: ["proton", "neutron", "electron", "charge", "mass", "nucleus", "atomic number", "mass number"],
        practice_items: [
          {
            id: "subatomic-1",
            prompt_template: "State the relative charge and relative mass of a proton, neutron, and electron. [3 marks]",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["proton", "+1", "neutron", "0", "electron", "-1", "mass", "1"]
          },
          {
            id: "subatomic-2",
            prompt_template: "Explain why atoms have no overall electrical charge. [2 marks]",
            marks: 2,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["protons", "electrons", "equal", "positive", "negative", "cancel"]
          },
          {
            id: "subatomic-3",
            prompt_template: "An atom of magnesium is ²⁴₁₂Mg. Calculate the number of protons, neutrons, and electrons. [3 marks]",
            marks: 3,
            type: "short-answer",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["protons", "12", "neutrons", "12", "electrons", "12"]
          }
        ]
      },
      {
        id: "1-1-5-size-mass",
        title: "1.1.5 SIZE AND MASS OF ATOMS",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – The Size of Atoms</h3>
  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>Atoms are extremely small — radius ≈ 1 × 10⁻¹⁰ m (0.1 nanometres)</li>
      <li>The nucleus is about 1 × 10⁻¹⁴ m, roughly 10,000 times smaller than the atom itself</li>
      <li>Almost all of an atom is empty space</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Visual Idea</h4>
    <p>If the atom were the size of a football stadium → the nucleus would be the size of a pea at the centre.</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always include both atomic and nucleus radii if asked for a comparison.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – The Mass of an Atom</h3>
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <p>Most of an atom's mass is concentrated in the nucleus, which contains protons and neutrons.</p>
    <p>Electrons have a negligible mass compared to nucleons.</p>
  </div>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Particle</th><th>Relative Mass</th></tr></thead>
      <tbody>
        <tr><td>Proton</td><td>1</td></tr>
        <tr><td>Neutron</td><td>1</td></tr>
        <tr><td>Electron</td><td>Very small (≈1/1836)</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Isotopes</h3>
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons.</p>
  </div>
  <div class="example-block">
    <h4>🟢 Example: Hydrogen Isotopes</h4>
    <table class="data-table">
      <thead><tr><th>Isotope</th><th>Protons</th><th>Neutrons</th><th>Electrons</th></tr></thead>
      <tbody>
        <tr><td>Hydrogen-1 (¹₁H)</td><td>1</td><td>0</td><td>1</td></tr>
        <tr><td>Deuterium (²₁H)</td><td>1</td><td>1</td><td>1</td></tr>
        <tr><td>Tritium (³₁H)</td><td>1</td><td>2</td><td>1</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Animated Isotopes Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚛️ Hydrogen Isotopes Comparison (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="340" height="140" viewBox="0 0 340 140">
        <!-- Hydrogen-1 (Protium) -->
        <g>
          <text x="55" y="15" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">¹H</text>
          <circle cx="55" cy="65" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
          <circle cx="55" cy="65" r="8" fill="#ef4444" class="anim-pulse"/>
          <text x="55" y="68" fill="white" font-size="6" text-anchor="middle">p⁺</text>
          <circle cx="55" cy="35" r="5" fill="#f59e0b" class="anim-rotate-cw" style="transform-origin: 55px 65px;"/>
          <text x="55" y="115" fill="currentColor" font-size="8" text-anchor="middle">Hydrogen-1</text>
          <text x="55" y="125" fill="currentColor" font-size="7" text-anchor="middle">(1p, 0n, 1e)</text>
        </g>
        
        <!-- Deuterium -->
        <g>
          <text x="170" y="15" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">²H</text>
          <circle cx="170" cy="65" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
          <circle cx="165" cy="62" r="7" fill="#ef4444" class="anim-pulse"/>
          <circle cx="175" cy="68" r="7" fill="#3b82f6" class="anim-pulse"/>
          <text x="165" y="65" fill="white" font-size="5" text-anchor="middle">p⁺</text>
          <text x="175" y="71" fill="white" font-size="5" text-anchor="middle">n</text>
          <circle cx="170" cy="35" r="5" fill="#f59e0b" class="anim-rotate-cw" style="transform-origin: 170px 65px;"/>
          <text x="170" y="115" fill="currentColor" font-size="8" text-anchor="middle">Deuterium</text>
          <text x="170" y="125" fill="currentColor" font-size="7" text-anchor="middle">(1p, 1n, 1e)</text>
        </g>
        
        <!-- Tritium -->
        <g>
          <text x="285" y="15" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">³H</text>
          <circle cx="285" cy="65" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
          <circle cx="280" cy="60" r="6" fill="#ef4444" class="anim-pulse"/>
          <circle cx="290" cy="60" r="6" fill="#3b82f6" class="anim-pulse"/>
          <circle cx="285" cy="72" r="6" fill="#3b82f6" class="anim-pulse"/>
          <text x="280" y="63" fill="white" font-size="4" text-anchor="middle">p⁺</text>
          <text x="290" y="63" fill="white" font-size="4" text-anchor="middle">n</text>
          <text x="285" y="75" fill="white" font-size="4" text-anchor="middle">n</text>
          <circle cx="285" cy="35" r="5" fill="#f59e0b" class="anim-rotate-cw" style="transform-origin: 285px 65px;"/>
          <text x="285" y="115" fill="currentColor" font-size="8" text-anchor="middle">Tritium</text>
          <text x="285" y="125" fill="currentColor" font-size="7" text-anchor="middle">(1p, 2n, 1e)</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Same protons (same element) • Different neutrons (different mass numbers) • Red = proton, Blue = neutron, Yellow = electron</p>
  </div>
</div>
        `,
        canonical_keywords: ["atomic radius", "nucleus", "10⁻¹⁰", "10⁻¹⁴", "isotopes", "neutrons", "mass", "empty space"],
        practice_items: [
          {
            id: "size-mass-1",
            prompt_template: "State the approximate radius of an atom and the radius of its nucleus. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["1 × 10⁻¹⁰", "atom", "1 × 10⁻¹⁴", "nucleus"]
          },
          {
            id: "size-mass-2",
            prompt_template: "Explain why isotopes of the same element have the same chemical properties but different physical properties. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["same protons", "same electrons", "chemical", "different neutrons", "different mass", "physical"]
          }
        ]
      },
      {
        id: "1-1-6-relative-atomic-mass",
        title: "1.1.6 RELATIVE ATOMIC MASS (Aᵣ)",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What is Relative Atomic Mass?</h3>
  
  <div class="diagram-block hover-pause">
    <h4>⚖️ Calculating Relative Atomic Mass (Aᵣ)</h4>
    <svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Title -->
      <text x="225" y="25" fill="#94a3b8" font-size="11" text-anchor="middle">Example: Chlorine isotopes</text>
      
      <!-- Isotope 1: Cl-35 -->
      <g transform="translate(100, 80)">
        <circle cx="0" cy="0" r="40" fill="#22d3ee" opacity="0.3" stroke="#22d3ee" stroke-width="2">
          <animate attributeName="r" values="40;43;40" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="-5" fill="#22d3ee" font-size="18" font-weight="bold" text-anchor="middle">³⁵Cl</text>
        <text x="0" y="15" fill="#94a3b8" font-size="10" text-anchor="middle">Mass: 35</text>
        <text x="0" y="60" fill="#22d3ee" font-size="12" font-weight="bold" text-anchor="middle">75%</text>
        <text x="0" y="75" fill="#64748b" font-size="9" text-anchor="middle">abundance</text>
      </g>
      
      <!-- Isotope 2: Cl-37 -->
      <g transform="translate(350, 80)">
        <circle cx="0" cy="0" r="40" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="r" values="40;43;40" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="-5" fill="#f59e0b" font-size="18" font-weight="bold" text-anchor="middle">³⁷Cl</text>
        <text x="0" y="15" fill="#94a3b8" font-size="10" text-anchor="middle">Mass: 37</text>
        <text x="0" y="60" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">25%</text>
        <text x="0" y="75" fill="#64748b" font-size="9" text-anchor="middle">abundance</text>
      </g>
      
      <!-- Plus sign -->
      <text x="225" y="85" fill="#94a3b8" font-size="24" text-anchor="middle">+</text>
      
      <!-- Calculation box -->
      <rect x="80" y="160" width="290" height="50" fill="#475569" opacity="0.3" rx="8"/>
      <text x="225" y="178" fill="#94a3b8" font-size="10" text-anchor="middle">Aᵣ = (35 × 75) + (37 × 25) ÷ 100</text>
      <text x="225" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">= (2625 + 925) ÷ 100 = <tspan fill="#10b981" font-weight="bold">35.5</tspan></text>
      
      <!-- Result arrow -->
      <path d="M 225 135 L 225 155" stroke="#10b981" stroke-width="2" marker-end="url(#arrowGr)"/>
      
      <defs>
        <marker id="arrowGr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#10b981"/>
        </marker>
      </defs>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #22d3ee; border-radius: 50%;"></span> ³⁵Cl (75%)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #f59e0b; border-radius: 50%;"></span> ³⁷Cl (25%)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #10b981; border-radius: 2px;"></span> Weighted average = 35.5</span>
    </div>
  </div>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The relative atomic mass (Aᵣ) of an element is the average mass of all its isotopes, weighted according to their abundance, compared with 1/12 of the mass of a carbon-12 atom.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Ideas</h4>
    <ul>
      <li>Elements often exist as mixtures of isotopes</li>
      <li>The relative atomic mass is not a whole number because it's an average</li>
      <li>Carbon-12 is used as the standard reference atom</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>Chlorine has two main isotopes: ³⁵Cl (abundance 75%) and ³⁷Cl (abundance 25%)</p>
    <p>Its average atomic mass (Aᵣ) = 35.5, not 35 or 37, because it's a weighted mean.</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Formula for Calculating Aᵣ</h3>
  <div class="definition-block">
    <h4>🔴 Equation</h4>
    <p>Aᵣ = [(mass of isotope₁ × % abundance₁) + (mass of isotope₂ × % abundance₂)] ÷ 100</p>
  </div>
  <div class="example-block">
    <h4>🟢 Worked Example</h4>
    <p><strong>Question:</strong> A sample of rubidium contains 72% of Rb-85 and 28% of Rb-87. Calculate Aᵣ.</p>
    <p><strong>Solution:</strong></p>
    <p>Aᵣ = [(85 × 72) + (87 × 28)] ÷ 100</p>
    <p>Aᵣ = [6120 + 2436] ÷ 100 = 85.56</p>
    <p><strong>Answer:</strong> Aᵣ = 85.6</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always multiply each mass by its % abundance, then divide by 100. Round only at the end.</p>
  </div>
</div>
        `,
        canonical_keywords: ["relative atomic mass", "Aᵣ", "isotopes", "abundance", "weighted average", "carbon-12"],
        practice_items: [
          {
            id: "ar-1",
            prompt_template: "Define relative atomic mass. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["average mass", "isotopes", "abundance", "carbon-12"]
          },
          {
            id: "ar-2",
            prompt_template: "A sample of copper contains 69% of ⁶³Cu and 31% of ⁶⁵Cu. Calculate the relative atomic mass. Show your working. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["63", "69", "65", "31", "multiply", "divide", "100", "63.62"]
          }
        ]
      },
      {
        id: "1-1-7-electronic-structure",
        title: "1.1.7 ELECTRONIC STRUCTURE",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – How Electrons Fill Energy Levels</h3>
  <div class="definition-block">
    <h4>🔵 Key Concept</h4>
    <p>Electrons orbit the nucleus in regions called energy levels (or shells). Each shell can hold a limited number of electrons.</p>
  </div>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Shell</th><th>Maximum Electrons</th><th>Notes</th></tr></thead>
      <tbody>
        <tr><td>1st (closest to nucleus)</td><td>2</td><td>Lowest energy level</td></tr>
        <tr><td>2nd</td><td>8</td><td>Next energy level</td></tr>
        <tr><td>3rd</td><td>8</td><td>Fills up after 2nd for the first 20 elements</td></tr>
      </tbody>
    </table>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Rule</h4>
    <p>Electrons fill the lowest available energy level first, before moving to higher ones.</p>
    <p><strong>Example:</strong> Magnesium (atomic number 12) → 2,8,2</p>
  </div>

  <!-- Animated Electronic Shell Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚛️ Electronic Configuration of Sodium (2,8,1) (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="240" height="160" viewBox="0 0 240 160">
        <!-- Nucleus -->
        <circle cx="120" cy="80" r="15" fill="#ef4444" opacity="0.3" stroke="#ef4444" stroke-width="2" class="anim-pulse"/>
        <text x="120" y="84" fill="#ef4444" font-size="8" text-anchor="middle" font-weight="bold">11p⁺</text>
        
        <!-- Shell 1 (2 electrons) -->
        <circle cx="120" cy="80" r="30" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
        <g class="anim-rotate-cw-fast" style="transform-origin: 120px 80px;">
          <circle cx="150" cy="80" r="5" fill="#f59e0b"/>
          <circle cx="90" cy="80" r="5" fill="#f59e0b"/>
        </g>
        <text x="155" y="60" fill="currentColor" font-size="7">Shell 1: 2e⁻</text>
        
        <!-- Shell 2 (8 electrons) -->
        <circle cx="120" cy="80" r="50" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
        <g class="anim-rotate-ccw" style="transform-origin: 120px 80px;">
          <circle cx="170" cy="80" r="4" fill="#22c55e"/>
          <circle cx="70" cy="80" r="4" fill="#22c55e"/>
          <circle cx="120" cy="30" r="4" fill="#22c55e"/>
          <circle cx="120" cy="130" r="4" fill="#22c55e"/>
          <circle cx="155" cy="45" r="4" fill="#22c55e"/>
          <circle cx="85" cy="45" r="4" fill="#22c55e"/>
          <circle cx="155" cy="115" r="4" fill="#22c55e"/>
          <circle cx="85" cy="115" r="4" fill="#22c55e"/>
        </g>
        <text x="180" y="50" fill="currentColor" font-size="7">Shell 2: 8e⁻</text>
        
        <!-- Shell 3 (1 electron) -->
        <circle cx="120" cy="80" r="70" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
        <g class="anim-rotate-cw" style="transform-origin: 120px 80px;">
          <circle cx="190" cy="80" r="5" fill="#3b82f6"/>
        </g>
        <text x="205" y="95" fill="#3b82f6" font-size="7" font-weight="bold">Shell 3: 1e⁻</text>
        <text x="205" y="105" fill="#3b82f6" font-size="6">(outer electron)</text>
        
        <!-- Legend at bottom -->
        <text x="120" y="155" fill="currentColor" font-size="8" text-anchor="middle">Na: 2,8,1 → Group 1 (1 outer electron)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Electrons fill inner shells first • Outer electrons determine reactivity</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Writing Electronic Configurations</h3>
  <div class="definition-block">
    <h4>🔵 What is Electronic Configuration?</h4>
    <p>It's a shorthand way to describe how electrons are arranged in shells.</p>
  </div>
  <div class="example-block">
    <h4>🟢 Examples</h4>
    <p>Sodium (Na, Z = 11): 2,8,1</p>
    <p>Chlorine (Cl, Z = 17): 2,8,7</p>
    <p>Calcium (Ca, Z = 20): 2,8,8,2</p>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 How to Write Configurations</h4>
    <ul>
      <li>Find atomic number → number of electrons</li>
      <li>Fill shells in order: 2,8,8,2 (up to element 20)</li>
      <li>Separate numbers with commas</li>
    </ul>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Electronic Structure and the Periodic Table</h3>
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Group number = number of outer shell electrons</li>
      <li>Period number = number of shells used</li>
      <li>Outer electrons control chemical reactivity</li>
    </ul>
  </div>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Group</th><th>Outer Electrons</th><th>Example</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>1</td><td>Sodium (Na): 2,8,1</td></tr>
        <tr><td>2</td><td>2</td><td>Magnesium (Mg): 2,8,2</td></tr>
        <tr><td>7</td><td>7</td><td>Chlorine (Cl): 2,8,7</td></tr>
        <tr><td>0 (8)</td><td>8 (full)</td><td>Neon (Ne): 2,8</td></tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: ["electronic structure", "shells", "energy levels", "configuration", "2,8,8", "outer electrons", "group"],
        practice_items: [
          {
            id: "electronic-1",
            prompt_template: "Write the electronic configuration for aluminium (atomic number 13). [1 mark]",
            marks: 1,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["2,8,3"]
          },
          {
            id: "electronic-2",
            prompt_template: "Explain the relationship between the group number and the number of outer shell electrons for elements in Groups 1-7. [2 marks]",
            marks: 2,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["group number", "same as", "outer electrons", "shell"]
          },
          {
            id: "electronic-3",
            prompt_template: "An element has the electronic configuration 2,8,7. State its group number and explain why elements in this group are reactive. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["Group 7", "7 outer electrons", "need 1 more", "full shell", "gain electron"]
          }
        ]
      },
      {
        id: "1-2-1-periodic-table",
        title: "1.2.1 THE PERIODIC TABLE",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Structure of the Periodic Table</h3>
  
  <div class="diagram-block hover-pause">
    <h4>🧪 Periodic Table Layout</h4>
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Group labels -->
      <text x="35" y="25" fill="#f59e0b" font-size="8" text-anchor="middle">1</text>
      <text x="55" y="25" fill="#94a3b8" font-size="8" text-anchor="middle">2</text>
      <text x="165" y="25" fill="#94a3b8" font-size="7" text-anchor="middle">3-12</text>
      <text x="275" y="25" fill="#94a3b8" font-size="8" text-anchor="middle">3</text>
      <text x="295" y="25" fill="#94a3b8" font-size="8" text-anchor="middle">4</text>
      <text x="315" y="25" fill="#94a3b8" font-size="8" text-anchor="middle">5</text>
      <text x="335" y="25" fill="#94a3b8" font-size="8" text-anchor="middle">6</text>
      <text x="355" y="25" fill="#22d3ee" font-size="8" text-anchor="middle">7</text>
      <text x="375" y="25" fill="#a78bfa" font-size="8" text-anchor="middle">0</text>
      
      <!-- Period labels -->
      <text x="15" y="50" fill="#94a3b8" font-size="8">1</text>
      <text x="15" y="70" fill="#94a3b8" font-size="8">2</text>
      <text x="15" y="90" fill="#94a3b8" font-size="8">3</text>
      <text x="15" y="110" fill="#94a3b8" font-size="8">4</text>
      <text x="15" y="130" fill="#94a3b8" font-size="8">5</text>
      <text x="15" y="150" fill="#94a3b8" font-size="8">6</text>
      <text x="15" y="170" fill="#94a3b8" font-size="8">7</text>
      
      <!-- Period 1 -->
      <rect x="25" y="35" width="18" height="18" fill="#f59e0b" rx="2"/>
      <text x="34" y="48" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">H</text>
      <rect x="365" y="35" width="18" height="18" fill="#a78bfa" rx="2"/>
      <text x="374" y="48" fill="white" font-size="8" font-weight="bold" text-anchor="middle">He</text>
      
      <!-- Period 2 -->
      <rect x="25" y="55" width="18" height="18" fill="#f59e0b" rx="2"/>
      <text x="34" y="68" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Li</text>
      <rect x="45" y="55" width="18" height="18" fill="#10b981" rx="2"/>
      <text x="54" y="68" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Be</text>
      <rect x="265" y="55" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="274" y="68" fill="white" font-size="7" font-weight="bold" text-anchor="middle">B</text>
      <rect x="285" y="55" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="294" y="68" fill="white" font-size="7" font-weight="bold" text-anchor="middle">C</text>
      <rect x="305" y="55" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="314" y="68" fill="white" font-size="7" font-weight="bold" text-anchor="middle">N</text>
      <rect x="325" y="55" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="334" y="68" fill="white" font-size="7" font-weight="bold" text-anchor="middle">O</text>
      <rect x="345" y="55" width="18" height="18" fill="#22d3ee" rx="2"/>
      <text x="354" y="68" fill="#0f172a" font-size="7" font-weight="bold" text-anchor="middle">F</text>
      <rect x="365" y="55" width="18" height="18" fill="#a78bfa" rx="2"/>
      <text x="374" y="68" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Ne</text>
      
      <!-- Period 3 -->
      <rect x="25" y="75" width="18" height="18" fill="#f59e0b" rx="2"/>
      <text x="34" y="88" fill="#0f172a" font-size="7" font-weight="bold" text-anchor="middle">Na</text>
      <rect x="45" y="75" width="18" height="18" fill="#10b981" rx="2"/>
      <text x="54" y="88" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Mg</text>
      <rect x="265" y="75" width="18" height="18" fill="#3b82f6" rx="2"/>
      <text x="274" y="88" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Al</text>
      <rect x="285" y="75" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="294" y="88" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Si</text>
      <rect x="305" y="75" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="314" y="88" fill="white" font-size="7" font-weight="bold" text-anchor="middle">P</text>
      <rect x="325" y="75" width="18" height="18" fill="#6b7280" rx="2"/>
      <text x="334" y="88" fill="white" font-size="7" font-weight="bold" text-anchor="middle">S</text>
      <rect x="345" y="75" width="18" height="18" fill="#22d3ee" rx="2"/>
      <text x="354" y="88" fill="#0f172a" font-size="7" font-weight="bold" text-anchor="middle">Cl</text>
      <rect x="365" y="75" width="18" height="18" fill="#a78bfa" rx="2"/>
      <text x="374" y="88" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Ar</text>
      
      <!-- Period 4 (partial with transition metals) -->
      <rect x="25" y="95" width="18" height="18" fill="#f59e0b" rx="2"/>
      <text x="34" y="108" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">K</text>
      <rect x="45" y="95" width="18" height="18" fill="#10b981" rx="2"/>
      <text x="54" y="108" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Ca</text>
      
      <!-- Transition metals block -->
      <rect x="65" y="95" width="198" height="78" fill="#ef4444" opacity="0.2" rx="4" stroke="#ef4444" stroke-width="1" stroke-dasharray="4,2">
        <animate attributeName="opacity" values="0.2;0.35;0.2" dur="3s" repeatCount="indefinite"/>
      </rect>
      <text x="164" y="138" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">TRANSITION METALS</text>
      <text x="164" y="152" fill="#ef4444" font-size="8" text-anchor="middle">(Fe, Cu, Zn, etc.)</text>
      
      <rect x="345" y="95" width="18" height="18" fill="#22d3ee" rx="2"/>
      <text x="354" y="108" fill="#0f172a" font-size="7" font-weight="bold" text-anchor="middle">Br</text>
      <rect x="365" y="95" width="18" height="18" fill="#a78bfa" rx="2"/>
      <text x="374" y="108" fill="white" font-size="7" font-weight="bold" text-anchor="middle">Kr</text>
      
      <!-- Group arrows -->
      <path d="M 35 185 L 35 210" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowOrange)"/>
      <text x="35" y="225" fill="#f59e0b" font-size="7" text-anchor="middle">Group 1</text>
      <text x="35" y="235" fill="#f59e0b" font-size="6" text-anchor="middle">Alkali</text>
      
      <path d="M 355 185 L 355 210" stroke="#22d3ee" stroke-width="2" marker-end="url(#arrowCyan)"/>
      <text x="355" y="225" fill="#22d3ee" font-size="7" text-anchor="middle">Group 7</text>
      <text x="355" y="235" fill="#22d3ee" font-size="6" text-anchor="middle">Halogens</text>
      
      <path d="M 375 185 L 375 210" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrowPurple)"/>
      <text x="375" y="225" fill="#a78bfa" font-size="7" text-anchor="middle">Group 0</text>
      <text x="375" y="235" fill="#a78bfa" font-size="6" text-anchor="middle">Noble</text>
      
      <!-- Period arrow -->
      <path d="M 400 50 L 480 50" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>
      <text x="440" y="40" fill="#94a3b8" font-size="8" text-anchor="middle">Period →</text>
      
      <path d="M 400 60 L 400 100" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowGray)"/>
      <text x="440" y="85" fill="#94a3b8" font-size="8" text-anchor="middle">↓ Group</text>
      
      <defs>
        <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#f59e0b"/>
        </marker>
        <marker id="arrowCyan" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#22d3ee"/>
        </marker>
        <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#a78bfa"/>
        </marker>
        <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 z" fill="#94a3b8"/>
        </marker>
      </defs>
      
      <!-- Labels -->
      <text x="250" y="265" fill="#94a3b8" font-size="9" text-anchor="middle">Elements arranged by increasing atomic number</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; font-size: 11px;">
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #f59e0b; border-radius: 2px;"></span> Group 1 (Alkali metals)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #10b981; border-radius: 2px;"></span> Group 2</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #ef4444; border-radius: 2px;"></span> Transition metals</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #22d3ee; border-radius: 2px;"></span> Group 7 (Halogens)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #a78bfa; border-radius: 2px;"></span> Group 0 (Noble gases)</span>
    </div>
  </div>

  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The Periodic Table arranges all known elements in order of increasing atomic number.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Terms</h4>
    <ul>
      <li><strong>Groups:</strong> Vertical columns (numbered 1-7 and 0)</li>
      <li><strong>Periods:</strong> Horizontal rows</li>
      <li>Elements in the same group have similar properties</li>
    </ul>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why It's Called "Periodic"</h3>
  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>The table is called periodic because patterns in properties repeat at regular intervals as you go across the table.</p>
    <ul>
      <li>Elements in Group 1 (Li, Na, K) are all reactive metals</li>
      <li>Elements in Group 7 (F, Cl, Br, I) are all reactive non-metals</li>
      <li>Elements in Group 0 (He, Ne, Ar) are unreactive gases</li>
    </ul>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Groups and Periods</h3>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Group</th><th>Example Elements</th><th>Outer Electrons</th><th>Type</th><th>Typical Ion</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Li, Na, K</td><td>1</td><td>Metals</td><td>+1</td></tr>
        <tr><td>2</td><td>Be, Mg, Ca</td><td>2</td><td>Metals</td><td>+2</td></tr>
        <tr><td>7</td><td>F, Cl, Br, I</td><td>7</td><td>Non-metals</td><td>-1</td></tr>
        <tr><td>0</td><td>He, Ne, Ar</td><td>8 (full shell)</td><td>Noble gases</td><td>None</td></tr>
      </tbody>
    </table>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Remember: All Group 1 metals form compounds with Group 7 halogens in a 1:1 ratio (e.g. NaCl, KBr).</p>
  </div>
</div>
        `,
        canonical_keywords: ["periodic table", "groups", "periods", "atomic number", "properties", "metals", "non-metals", "noble gases"],
        practice_items: [
          {
            id: "periodic-1",
            prompt_template: "State what is meant by a group in the periodic table. [1 mark]",
            marks: 1,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["vertical column", "same outer electrons"]
          },
          {
            id: "periodic-2",
            prompt_template: "Explain why elements in the same group have similar chemical properties. [2 marks]",
            marks: 2,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["same number", "outer electrons", "react similarly", "chemical properties"]
          }
        ]
      },
      {
        id: "1-2-2-development-periodic-table",
        title: "1.2.2 DEVELOPMENT OF THE PERIODIC TABLE",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Early Classification of Elements</h3>
  
  <div class="diagram-block hover-pause">
    <h4>📜 Development of the Periodic Table Timeline</h4>
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Timeline line -->
      <line x1="50" y1="100" x2="450" y2="100" stroke="#475569" stroke-width="3"/>
      
      <!-- 1817 - Dobereiner -->
      <g transform="translate(80, 100)">
        <circle cx="0" cy="0" r="12" fill="#ef4444" stroke="#fca5a5" stroke-width="2">
          <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="8" font-weight="bold" text-anchor="middle">1</text>
        <text x="0" y="-25" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">1817</text>
        <text x="0" y="30" fill="#94a3b8" font-size="8" text-anchor="middle">Dobereiner</text>
        <text x="0" y="42" fill="#64748b" font-size="7" text-anchor="middle">Triads</text>
        <line x1="0" y1="-12" x2="0" y2="-18" stroke="#ef4444" stroke-width="2"/>
      </g>
      
      <!-- 1864 - Newlands -->
      <g transform="translate(180, 100)">
        <circle cx="0" cy="0" r="12" fill="#f59e0b" stroke="#fcd34d" stroke-width="2">
          <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="8" font-weight="bold" text-anchor="middle">2</text>
        <text x="0" y="-25" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">1864</text>
        <text x="0" y="30" fill="#94a3b8" font-size="8" text-anchor="middle">Newlands</text>
        <text x="0" y="42" fill="#64748b" font-size="7" text-anchor="middle">Octaves</text>
        <line x1="0" y1="-12" x2="0" y2="-18" stroke="#f59e0b" stroke-width="2"/>
      </g>
      
      <!-- 1869 - Mendeleev -->
      <g transform="translate(290, 100)">
        <circle cx="0" cy="0" r="15" fill="#10b981" stroke="#6ee7b7" stroke-width="3">
          <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="8" font-weight="bold" text-anchor="middle">3</text>
        <text x="0" y="-30" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">1869</text>
        <text x="0" y="35" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Mendeleev</text>
        <text x="0" y="47" fill="#64748b" font-size="7" text-anchor="middle">Left gaps!</text>
        <line x1="0" y1="-15" x2="0" y2="-22" stroke="#10b981" stroke-width="2"/>
        
        <!-- Star highlight -->
        <text x="25" y="-15" fill="#fbbf24" font-size="12">★</text>
      </g>
      
      <!-- 1913 - Moseley (Modern) -->
      <g transform="translate(410, 100)">
        <circle cx="0" cy="0" r="12" fill="#3b82f6" stroke="#93c5fd" stroke-width="2">
          <animate attributeName="r" values="12;14;12" dur="3s" repeatCount="indefinite" begin="1.5s"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="8" font-weight="bold" text-anchor="middle">4</text>
        <text x="0" y="-25" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="middle">1913</text>
        <text x="0" y="30" fill="#94a3b8" font-size="8" text-anchor="middle">Modern</text>
        <text x="0" y="42" fill="#64748b" font-size="7" text-anchor="middle">Atomic No.</text>
        <line x1="0" y1="-12" x2="0" y2="-18" stroke="#3b82f6" stroke-width="2"/>
      </g>
      
      <!-- Progress arrow -->
      <path d="M 50 100 L 30 95 L 30 105 Z" fill="#475569"/>
      <path d="M 450 100 L 470 95 L 470 105 Z" fill="#10b981"/>
      
      <!-- Labels -->
      <text x="250" y="180" fill="#64748b" font-size="9" text-anchor="middle">Arranged by atomic WEIGHT → Arranged by atomic NUMBER</text>
      <text x="290" y="70" fill="#10b981" font-size="8" text-anchor="middle">Key breakthrough!</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; font-size: 11px;">
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #ef4444; border-radius: 50%;"></span> Triads (limited)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #f59e0b; border-radius: 50%;"></span> Octaves (flawed)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #10b981; border-radius: 50%;"></span> Mendeleev (breakthrough)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #3b82f6; border-radius: 50%;"></span> Modern (atomic number)</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🧠 Early Attempts</h4>
    <ul>
      <li><strong>Dobereiner's Triads (1817):</strong> Grouped elements in threes with similar properties. Middle element's atomic mass ≈ average of other two. Problem: Didn't work for all known elements.</li>
      <li><strong>Newlands' Law of Octaves (1864):</strong> Arranged elements by increasing atomic weight. Every 8th element had similar properties. Problems: Didn't leave gaps for new elements; mixed metals and non-metals together.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Mendeleev's Periodic Table (1869)</h3>
  <div class="definition-block">
    <h4>🔵 Key Ideas</h4>
    <p>Dmitri Mendeleev arranged the 63 known elements in order of increasing atomic weight. He grouped elements with similar chemical properties in the same column.</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Mendeleev's Genius Moves</h4>
    <ul>
      <li><strong>Left Gaps for Missing Elements:</strong> Predicted the existence and properties of new elements like gallium, scandium, and germanium</li>
      <li><strong>Reordered Some Elements:</strong> Swapped elements that didn't fit by weight to better match chemical properties</li>
      <li><strong>Grouped by Properties:</strong> Elements in the same group had similar reactions</li>
    </ul>
  </div>
  <div class="example-block">
    <h4>🟢 Example: Mendeleev's Predictions</h4>
    <p>When gallium and germanium were discovered later, their measured properties matched Mendeleev's predictions exactly — proving his model was correct.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – The Modern Periodic Table</h3>
  <div class="definition-block">
    <h4>🔵 What Changed</h4>
    <p>In the early 20th century, scientists discovered protons and realised that elements are best arranged by atomic number (number of protons), not atomic mass.</p>
  </div>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Feature</th><th>Mendeleev's Table</th><th>Modern Table</th></tr></thead>
      <tbody>
        <tr><td>Basis of order</td><td>Atomic weight</td><td>Atomic number</td></tr>
        <tr><td>Gaps left</td><td>Yes (for new elements)</td><td>No (all known elements included)</td></tr>
        <tr><td>Noble gases</td><td>Not discovered yet</td><td>Present (Group 0)</td></tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: ["Mendeleev", "periodic table", "development", "atomic number", "Dobereiner", "Newlands", "predictions"],
        practice_items: [
          {
            id: "dev-pt-1",
            prompt_template: "Explain how Mendeleev overcame the problems with earlier attempts to classify elements. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["gaps", "predicted", "properties", "reordered", "chemical properties", "gallium", "germanium"]
          }
        ]
      },
      {
        id: "1-2-3-metals-non-metals",
        title: "1.2.3 METALS AND NON-METALS",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Where They Are Found</h3>
  
  <div class="diagram-block hover-pause">
    <h4>⚡ Metals vs Non-Metals Location</h4>
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Periodic table outline -->
      <rect x="30" y="30" width="340" height="140" fill="none" stroke="#475569" stroke-width="2" rx="4"/>
      
      <!-- Metals region (left) -->
      <path d="M 30 30 L 220 30 L 220 60 L 250 60 L 250 90 L 280 90 L 280 120 L 310 120 L 310 170 L 30 170 Z" fill="#3b82f6" opacity="0.3"/>
      <text x="120" y="110" fill="#3b82f6" font-size="16" font-weight="bold" text-anchor="middle">METALS</text>
      <text x="120" y="125" fill="#3b82f6" font-size="9" text-anchor="middle">~80% of elements</text>
      
      <!-- Non-metals region (right) -->
      <path d="M 220 30 L 370 30 L 370 170 L 310 170 L 310 120 L 280 120 L 280 90 L 250 90 L 250 60 L 220 60 Z" fill="#10b981" opacity="0.3"/>
      <text x="310" y="70" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">NON-</text>
      <text x="310" y="85" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">METALS</text>
      
      <!-- Staircase line -->
      <path d="M 220 30 L 220 60 L 250 60 L 250 90 L 280 90 L 280 120 L 310 120 L 310 170" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8,4">
        <animate attributeName="stroke-dashoffset" values="0;24" dur="2s" repeatCount="indefinite"/>
      </path>
      
      <!-- Labels -->
      <text x="235" y="145" fill="#f59e0b" font-size="9" text-anchor="middle" transform="rotate(-45, 235, 145)">Staircase</text>
      <text x="260" y="165" fill="#f59e0b" font-size="9" text-anchor="middle" transform="rotate(-45, 260, 165)">line</text>
      
      <!-- Properties arrows -->
      <text x="60" y="145" fill="#3b82f6" font-size="8">• Shiny</text>
      <text x="60" y="157" fill="#3b82f6" font-size="8">• Conduct</text>
      
      <text x="320" y="110" fill="#10b981" font-size="8">• Dull</text>
      <text x="320" y="122" fill="#10b981" font-size="8">• Insulate</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #3b82f6; border-radius: 2px;"></span> Metals (left side)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #10b981; border-radius: 2px;"></span> Non-metals (right side)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #f59e0b;"></span> Dividing line</span>
    </div>
  </div>
  
  <div class="definition-block">
    <h4>🔵 Key Idea</h4>
    <p>The Periodic Table is roughly divided by a diagonal "staircase line." Elements to the left and below this line are metals. Elements to the right and above are non-metals.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Physical Properties</h3>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Property</th><th>Metals</th><th>Non-Metals</th></tr></thead>
      <tbody>
        <tr><td>State at room temp</td><td>Mostly solid (except mercury)</td><td>Many gases or brittle solids</td></tr>
        <tr><td>Appearance</td><td>Shiny (lustrous)</td><td>Dull</td></tr>
        <tr><td>Melting & Boiling Point</td><td>High</td><td>Low</td></tr>
        <tr><td>Density</td><td>Usually high</td><td>Usually low</td></tr>
        <tr><td>Conductivity</td><td>Conduct heat & electricity</td><td>Poor conductors (insulators)</td></tr>
        <tr><td>Malleability</td><td>Malleable and ductile</td><td>Brittle if solid</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Chemical Properties</h3>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Property</th><th>Metals</th><th>Non-Metals</th></tr></thead>
      <tbody>
        <tr><td>Ion formation</td><td>Lose electrons → positive ions</td><td>Gain/share electrons → negative ions or covalent bonds</td></tr>
        <tr><td>Type of bonding</td><td>Metallic or Ionic</td><td>Covalent</td></tr>
        <tr><td>Reaction with Oxygen</td><td>Metal oxides (basic)</td><td>Non-metal oxides (acidic)</td></tr>
      </tbody>
    </table>
  </div>
  <div class="example-block">
    <h4>🟢 Examples</h4>
    <ul>
      <li><strong>Metal + Oxygen:</strong> 2Mg + O₂ → 2MgO (basic)</li>
      <li><strong>Non-metal + Oxygen:</strong> C + O₂ → CO₂ (acidic)</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: ["metals", "non-metals", "conductivity", "malleability", "oxides", "basic", "acidic"],
        practice_items: [
          {
            id: "metal-nm-1",
            prompt_template: "Compare the physical properties of metals and non-metals. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["conductivity", "malleability", "melting point", "density", "shiny", "dull", "brittle"]
          }
        ]
      },
      {
        id: "1-2-4-group-0",
        title: "1.2.4 GROUP 0 (THE NOBLE GASES)",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Introducing the Noble Gases</h3>
  
  <div class="diagram-block hover-pause">
    <h4>💜 Noble Gas Electron Shells (Full Outer Shells)</h4>
    <svg viewBox="0 0 450 180" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Helium -->
      <g transform="translate(75, 90)">
        <circle cx="0" cy="0" r="35" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.5"/>
        <circle cx="0" cy="0" r="12" fill="#a78bfa" opacity="0.6">
          <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="10" font-weight="bold" text-anchor="middle">He</text>
        <!-- 2 electrons -->
        <circle cx="-20" cy="0" r="4" fill="#fbbf24">
          <animate attributeName="cx" values="-20;0;20;0;-20" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="0;-20;0;20;0" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="20" cy="0" r="4" fill="#fbbf24">
          <animate attributeName="cx" values="20;0;-20;0;20" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="0;20;0;-20;0" dur="3s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="55" fill="#a78bfa" font-size="10" font-weight="bold" text-anchor="middle">Helium</text>
        <text x="0" y="68" fill="#94a3b8" font-size="8" text-anchor="middle">(2)</text>
      </g>
      
      <!-- Neon -->
      <g transform="translate(225, 90)">
        <circle cx="0" cy="0" r="50" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.5"/>
        <circle cx="0" cy="0" r="25" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.3"/>
        <circle cx="0" cy="0" r="12" fill="#a78bfa" opacity="0.6">
          <animate attributeName="r" values="12;14;12" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="10" font-weight="bold" text-anchor="middle">Ne</text>
        <!-- Inner shell: 2 electrons -->
        <circle cx="-15" cy="0" r="3" fill="#fbbf24" opacity="0.8"/>
        <circle cx="15" cy="0" r="3" fill="#fbbf24" opacity="0.8"/>
        <!-- Outer shell: 8 electrons -->
        <g>
          <circle cx="0" cy="-40" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="28" cy="-28" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="40" cy="0" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="28" cy="28" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="0" cy="40" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-28" cy="28" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-40" cy="0" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="-28" cy="-28" r="4" fill="#fbbf24">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="8s" repeatCount="indefinite"/>
          </circle>
        </g>
        <text x="0" y="70" fill="#a78bfa" font-size="10" font-weight="bold" text-anchor="middle">Neon</text>
        <text x="0" y="83" fill="#94a3b8" font-size="8" text-anchor="middle">(2, 8)</text>
      </g>
      
      <!-- Argon -->
      <g transform="translate(375, 90)">
        <circle cx="0" cy="0" r="60" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.5"/>
        <circle cx="0" cy="0" r="40" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.3"/>
        <circle cx="0" cy="0" r="20" fill="none" stroke="#a78bfa" stroke-width="1" opacity="0.2"/>
        <circle cx="0" cy="0" r="10" fill="#a78bfa" opacity="0.6">
          <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="4" fill="white" font-size="8" font-weight="bold" text-anchor="middle">Ar</text>
        <!-- First shell: 2 -->
        <circle cx="-12" cy="0" r="2" fill="#fbbf24" opacity="0.6"/>
        <circle cx="12" cy="0" r="2" fill="#fbbf24" opacity="0.6"/>
        <!-- Second shell: 8 (simplified) -->
        <circle cx="0" cy="-30" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="21" cy="-21" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="30" cy="0" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="21" cy="21" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="0" cy="30" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="-21" cy="21" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="-30" cy="0" r="3" fill="#fbbf24" opacity="0.7"/>
        <circle cx="-21" cy="-21" r="3" fill="#fbbf24" opacity="0.7"/>
        <!-- Third shell: 8 -->
        <circle cx="0" cy="-50" r="4" fill="#fbbf24"/>
        <circle cx="35" cy="-35" r="4" fill="#fbbf24"/>
        <circle cx="50" cy="0" r="4" fill="#fbbf24"/>
        <circle cx="35" cy="35" r="4" fill="#fbbf24"/>
        <circle cx="0" cy="50" r="4" fill="#fbbf24"/>
        <circle cx="-35" cy="35" r="4" fill="#fbbf24"/>
        <circle cx="-50" cy="0" r="4" fill="#fbbf24"/>
        <circle cx="-35" cy="-35" r="4" fill="#fbbf24"/>
        <text x="0" y="80" fill="#a78bfa" font-size="10" font-weight="bold" text-anchor="middle">Argon</text>
        <text x="0" y="93" fill="#94a3b8" font-size="8" text-anchor="middle">(2, 8, 8)</text>
      </g>
      
      <!-- Key message -->
      <rect x="130" y="155" width="190" height="20" fill="#a78bfa" opacity="0.2" rx="4"/>
      <text x="225" y="169" fill="#a78bfa" font-size="10" font-weight="bold" text-anchor="middle">✓ Full outer shells = STABLE</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #a78bfa; border-radius: 50%;"></span> Noble gas nucleus</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #fbbf24; border-radius: 50%;"></span> Electrons (full shells)</span>
    </div>
  </div>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The noble gases are the elements in Group 0 (sometimes called Group 8) of the periodic table: Helium (He), Neon (Ne), Argon (Ar), Krypton (Kr), Xenon (Xe), Radon (Rn).</p>
  </div>
  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>Found on the far right-hand side of the periodic table</li>
      <li>All are non-metals and exist as single atoms (monatomic)</li>
      <li>Colourless, odourless gases at room temperature</li>
      <li>They all have full outer electron shells</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Electronic Structure and Stability</h3>
  <div class="definition-block">
    <h4>🔵 Key Idea</h4>
    <p>Each noble gas has a complete outer shell of electrons. This makes them very stable and chemically unreactive.</p>
  </div>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Element</th><th>Atomic Number</th><th>Electron Configuration</th><th>Outer Electrons</th></tr></thead>
      <tbody>
        <tr><td>Helium</td><td>2</td><td>2</td><td>2</td></tr>
        <tr><td>Neon</td><td>10</td><td>2,8</td><td>8</td></tr>
        <tr><td>Argon</td><td>18</td><td>2,8,8</td><td>8</td></tr>
      </tbody>
    </table>
  </div>
  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always mention "full outer shell" when explaining unreactivity.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Physical Properties and Trends</h3>
  <div class="definition-block">
    <h4>🔵 Trend Down Group 0</h4>
    <p>As you go down Group 0: atoms get larger, intermolecular forces get stronger, boiling points and densities increase.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Uses of the Noble Gases</h3>
  <div class="example-block">
    <table class="data-table">
      <thead><tr><th>Noble Gas</th><th>Uses</th><th>Reason</th></tr></thead>
      <tbody>
        <tr><td>Helium (He)</td><td>Balloons, airships</td><td>Low density, non-flammable</td></tr>
        <tr><td>Neon (Ne)</td><td>Advertising lights</td><td>Glows brightly when electricity passes through</td></tr>
        <tr><td>Argon (Ar)</td><td>Inert atmosphere for welding & in light bulbs</td><td>Prevents metal from reacting with oxygen</td></tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: ["noble gases", "Group 0", "helium", "neon", "argon", "unreactive", "full outer shell", "monatomic"],
        practice_items: [
          {
            id: "group0-1",
            prompt_template: "Explain why the noble gases are unreactive. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["full outer shell", "stable", "no need to react", "gain", "lose", "share"]
          }
        ]
      },
      {
        id: "1-2-5-group-1",
        title: "1.2.5 GROUP 1: THE ALKALI METALS",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Electronic Structure</h3>
  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>Each Group 1 atom has one electron in its outer shell</li>
      <li>This outer electron is easily lost, forming a +1 ion</li>
    </ul>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Reaction with Water</h3>
  <div class="definition-block">
    <h4>🔵 General Reaction</h4>
    <p>Metal + Water → Metal Hydroxide + Hydrogen</p>
  </div>
  <div class="example-block">
    <h4>🟢 Examples</h4>
    <ul>
      <li><strong>Lithium:</strong> Fizzes gently, moves slowly</li>
      <li><strong>Sodium:</strong> Fizzes strongly, melts into ball, yellow flame</li>
      <li><strong>Potassium:</strong> Violent reaction, lilac flame, explodes</li>
    </ul>
  </div>

  <!-- Animated Group 1 Reaction with Water Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔥 Group 1 Metals Reacting with Water (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="340" height="160" viewBox="0 0 340 160">
        <!-- Three beakers -->
        <!-- Lithium beaker -->
        <g>
          <path d="M25 50 L25 130 L85 130 L85 50" fill="#e0f2fe" stroke="currentColor" stroke-width="2"/>
          <rect x="27" y="80" width="56" height="48" fill="#bae6fd" opacity="0.5"/>
          <circle cx="55" cy="85" r="8" fill="#a1a1aa" class="anim-vibrate-slow"/>
          <circle cx="45" cy="70" r="3" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise"/>
          <circle cx="60" cy="75" r="2" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise anim-delay-200"/>
          <text x="55" y="145" fill="currentColor" font-size="9" text-anchor="middle">Lithium</text>
          <text x="55" y="155" fill="#22c55e" font-size="7" text-anchor="middle">Gentle fizz</text>
        </g>
        
        <!-- Sodium beaker -->
        <g>
          <path d="M135 50 L135 130 L195 130 L195 50" fill="#e0f2fe" stroke="currentColor" stroke-width="2"/>
          <rect x="137" y="80" width="56" height="48" fill="#bae6fd" opacity="0.5"/>
          <circle cx="165" cy="82" r="10" fill="#a1a1aa" class="anim-vibrate"/>
          <circle cx="155" cy="65" r="4" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise"/>
          <circle cx="170" cy="68" r="3" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise anim-delay-100"/>
          <circle cx="160" cy="72" r="3" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise anim-delay-300"/>
          <circle cx="165" cy="60" r="8" fill="#fbbf24" opacity="0.6" class="anim-pulse"/>
          <text x="165" y="145" fill="currentColor" font-size="9" text-anchor="middle">Sodium</text>
          <text x="165" y="155" fill="#f59e0b" font-size="7" text-anchor="middle">Yellow flame</text>
        </g>
        
        <!-- Potassium beaker -->
        <g>
          <path d="M245 50 L245 130 L305 130 L305 50" fill="#e0f2fe" stroke="currentColor" stroke-width="2"/>
          <rect x="247" y="80" width="56" height="48" fill="#bae6fd" opacity="0.5"/>
          <circle cx="275" cy="78" r="12" fill="#a1a1aa" class="anim-vibrate"/>
          <circle cx="265" cy="55" r="5" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise"/>
          <circle cx="280" cy="58" r="4" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise anim-delay-100"/>
          <circle cx="270" cy="62" r="4" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise anim-delay-200"/>
          <circle cx="285" cy="65" r="3" fill="transparent" stroke="#94a3b8" class="anim-bubble-rise anim-delay-300"/>
          <circle cx="275" cy="50" r="15" fill="#a855f7" opacity="0.5" class="anim-pulse-fast"/>
          <text x="275" y="145" fill="currentColor" font-size="9" text-anchor="middle">Potassium</text>
          <text x="275" y="155" fill="#a855f7" font-size="7" text-anchor="middle">Lilac flame!</text>
        </g>
        
        <!-- Reactivity arrow -->
        <path d="M55 35 L275 35" stroke="#ef4444" stroke-width="2" marker-end="url(#reactArrow)"/>
        <text x="165" y="25" fill="#ef4444" font-size="9" text-anchor="middle">Reactivity increases →</text>
        
        <defs>
          <marker id="reactArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Reactivity increases down Group 1 • Outer electron easier to lose in larger atoms</p>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Trend in Reactivity</h3>
  <div class="definition-block">
    <h4>🔵 Pattern</h4>
    <p>Reactivity increases down the group: K > Na > Li</p>
    <p><strong>Reason:</strong> Outer electron farther from nucleus → weaker attraction → easier to lose</p>
  </div>
</div>
        `,
        canonical_keywords: ["alkali metals", "Group 1", "lithium", "sodium", "potassium", "water", "reactivity", "outer electron", "+1 ion"],
        practice_items: [
          {
            id: "group1-1",
            prompt_template: "Describe what you would see when sodium reacts with water. Write a balanced symbol equation for this reaction. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["fizzes", "yellow flame", "melts", "moves", "2Na", "2H₂O", "2NaOH", "H₂"]
          },
          {
            id: "group1-2",
            prompt_template: "Explain why potassium is more reactive than sodium. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["outer electron", "further from nucleus", "weaker attraction", "easier to lose", "more shells"]
          }
        ]
      },
      {
        id: "1-2-6-group-7",
        title: "1.2.6 GROUP 7: THE HALOGENS",
        type: "content",
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Introducing the Halogens</h3>
  <div class="definition-block">
    <h4>🔵 Key Facts</h4>
    <ul>
      <li>Group 7 non-metals: Fluorine, Chlorine, Bromine, Iodine</li>
      <li>Exist as diatomic molecules (F₂, Cl₂, Br₂, I₂)</li>
      <li>Have 7 electrons in outer shell</li>
      <li>Very reactive with metals</li>
    </ul>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Physical Properties</h3>
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Halogen</th><th>State</th><th>Colour</th></tr>
      </thead>
      <tbody>
        <tr><td>Chlorine</td><td>Gas</td><td>Green</td></tr>
        <tr><td>Bromine</td><td>Liquid</td><td>Red-brown</td></tr>
        <tr><td>Iodine</td><td>Solid</td><td>Grey-black</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Displacement Reactions</h3>
  <div class="definition-block">
    <h4>🔵 Rule</h4>
    <p>A more reactive halogen displaces a less reactive halogen from its compound.</p>
    <p><strong>Reactivity:</strong> F₂ > Cl₂ > Br₂ > I₂</p>
  </div>
  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>Cl₂ + 2NaBr → 2NaCl + Br₂</p>
    <p>Observation: Orange solution (bromine formed)</p>
  </div>

  <!-- Animated Halogen Displacement Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚗️ Halogen Displacement Reaction (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="150" viewBox="0 0 320 150">
        <!-- Before reaction beaker -->
        <g>
          <text x="80" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">BEFORE</text>
          <path d="M40 30 L40 100 L120 100 L120 30" fill="#fef3c7" stroke="currentColor" stroke-width="2"/>
          <rect x="42" y="50" width="76" height="48" fill="#fde68a" opacity="0.5"/>
          <text x="80" y="70" fill="#92400e" font-size="8" text-anchor="middle">NaBr solution</text>
          <text x="80" y="82" fill="#92400e" font-size="7" text-anchor="middle">(colourless)</text>
          
          <!-- Chlorine gas bubbles -->
          <circle cx="60" cy="45" r="4" fill="#22c55e" opacity="0.6" class="anim-flow-down"/>
          <circle cx="75" cy="40" r="3" fill="#22c55e" opacity="0.6" class="anim-flow-down anim-delay-200"/>
          <circle cx="90" cy="42" r="4" fill="#22c55e" opacity="0.6" class="anim-flow-down anim-delay-400"/>
          <text x="80" y="115" fill="#22c55e" font-size="8" text-anchor="middle">+ Cl₂ gas</text>
        </g>
        
        <!-- Arrow -->
        <path d="M130 65 L170 65" stroke="currentColor" stroke-width="2" marker-end="url(#dispArrow)"/>
        <text x="150" y="55" fill="currentColor" font-size="7" text-anchor="middle">Reaction</text>
        
        <!-- After reaction beaker -->
        <g>
          <text x="240" y="15" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">AFTER</text>
          <path d="M200 30 L200 100 L280 100 L280 30" fill="#fed7aa" stroke="currentColor" stroke-width="2"/>
          <rect x="202" y="50" width="76" height="48" fill="#fdba74" opacity="0.7"/>
          <text x="240" y="70" fill="#c2410c" font-size="8" text-anchor="middle">NaCl + Br₂</text>
          <text x="240" y="82" fill="#c2410c" font-size="7" text-anchor="middle">(orange-brown)</text>
          <text x="240" y="115" fill="currentColor" font-size="8" text-anchor="middle">Bromine displaced!</text>
        </g>
        
        <!-- Equation -->
        <text x="160" y="140" fill="currentColor" font-size="8" text-anchor="middle">Cl₂ + 2NaBr → 2NaCl + Br₂</text>
        
        <defs>
          <marker id="dispArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">More reactive halogen (Cl₂) displaces less reactive halogen (Br⁻) • Solution turns orange</p>
  </div>
</div>
        `,
        canonical_keywords: ["halogens", "Group 7", "chlorine", "bromine", "iodine", "displacement", "reactivity", "diatomic"],
        practice_items: [
          {
            id: "group7-1",
            prompt_template: "Describe the physical properties of chlorine, bromine, and iodine including their state and colour. [3 marks]",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["chlorine", "gas", "green", "bromine", "liquid", "red-brown", "iodine", "solid", "grey"]
          },
          {
            id: "group7-2",
            prompt_template: "Explain what happens when chlorine is added to a solution of potassium bromide. Write a balanced equation. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["displacement", "chlorine", "more reactive", "bromine", "Cl₂", "KBr", "KCl", "Br₂", "orange"]
          },
          {
            id: "group7-3",
            prompt_template: "Explain why fluorine is more reactive than iodine. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["outer shell", "closer to nucleus", "stronger attraction", "easier to gain electron", "fewer shells"]
          }
        ]
      },
      {
        id: "1-3-1-transition-metals-comparison",
        title: "1.3.1 COMPARISON OF TRANSITION METALS WITH GROUP 1 ELEMENTS",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Where They Are Found</h3>
  
  <div class="diagram-block hover-pause">
    <h4>🔬 Periodic Table Location: Group 1 vs Transition Metals</h4>
    <svg viewBox="0 0 450 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Periodic table outline -->
      <rect x="30" y="40" width="390" height="120" fill="none" stroke="#475569" stroke-width="2" rx="4"/>
      
      <!-- Group 1 column highlighted -->
      <rect x="35" y="45" width="30" height="110" fill="#f59e0b" opacity="0.4" rx="2">
        <animate attributeName="opacity" values="0.4;0.6;0.4" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="35" y="45" width="30" height="110" fill="none" stroke="#f59e0b" stroke-width="2" rx="2"/>
      
      <!-- Group 1 elements -->
      <rect x="40" y="50" width="20" height="15" fill="#f59e0b" rx="2"/>
      <text x="50" y="61" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Li</text>
      <rect x="40" y="70" width="20" height="15" fill="#f59e0b" rx="2"/>
      <text x="50" y="81" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Na</text>
      <rect x="40" y="90" width="20" height="15" fill="#f59e0b" rx="2"/>
      <text x="50" y="101" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">K</text>
      <rect x="40" y="110" width="20" height="15" fill="#f59e0b" rx="2"/>
      <text x="50" y="121" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Rb</text>
      <rect x="40" y="130" width="20" height="15" fill="#f59e0b" rx="2"/>
      <text x="50" y="141" fill="#0f172a" font-size="8" font-weight="bold" text-anchor="middle">Cs</text>
      
      <!-- Group 2 column -->
      <rect x="70" y="70" width="20" height="15" fill="#64748b" opacity="0.5" rx="2"/>
      <rect x="70" y="90" width="20" height="15" fill="#64748b" opacity="0.5" rx="2"/>
      <rect x="70" y="110" width="20" height="15" fill="#64748b" opacity="0.5" rx="2"/>
      
      <!-- Transition metals block highlighted -->
      <rect x="100" y="85" width="200" height="70" fill="#ef4444" opacity="0.3" rx="4">
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite"/>
      </rect>
      <rect x="100" y="85" width="200" height="70" fill="none" stroke="#ef4444" stroke-width="2" rx="4"/>
      
      <!-- Transition metal elements -->
      <rect x="105" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="114" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Sc</text>
      <rect x="125" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="134" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Ti</text>
      <rect x="145" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="154" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">V</text>
      <rect x="165" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="174" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Cr</text>
      <rect x="185" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="194" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Mn</text>
      <rect x="205" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="214" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Fe</text>
      <rect x="225" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="234" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Co</text>
      <rect x="245" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="254" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Ni</text>
      <rect x="265" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="274" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Cu</text>
      <rect x="285" y="90" width="18" height="13" fill="#ef4444" rx="1"/>
      <text x="294" y="100" fill="white" font-size="6" font-weight="bold" text-anchor="middle">Zn</text>
      
      <!-- Second row of transition metals -->
      <rect x="105" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="125" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="145" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="165" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="185" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="205" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="225" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="245" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="265" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      <rect x="285" y="107" width="18" height="13" fill="#ef4444" opacity="0.7" rx="1"/>
      
      <!-- Labels -->
      <text x="50" y="175" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">GROUP 1</text>
      <text x="50" y="188" fill="#f59e0b" font-size="8" text-anchor="middle">(Alkali metals)</text>
      
      <text x="200" y="175" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">TRANSITION METALS</text>
      <text x="200" y="188" fill="#ef4444" font-size="8" text-anchor="middle">(d-block, centre)</text>
      
      <!-- Right side non-metals -->
      <rect x="310" y="50" width="20" height="15" fill="#475569" opacity="0.4" rx="2"/>
      <rect x="330" y="50" width="20" height="15" fill="#475569" opacity="0.4" rx="2"/>
      <rect x="350" y="50" width="20" height="15" fill="#475569" opacity="0.4" rx="2"/>
      <rect x="370" y="50" width="20" height="15" fill="#a78bfa" rx="2"/>
      <rect x="390" y="40" width="25" height="15" fill="#a78bfa" rx="2"/>
      <text x="402" y="51" fill="white" font-size="7" text-anchor="middle">He</text>
      
      <!-- Arrows showing location -->
      <path d="M 50 35 L 50 42" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowO)"/>
      <text x="50" y="30" fill="#f59e0b" font-size="8" text-anchor="middle">Far left</text>
      
      <path d="M 200 75 L 200 82" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowR)"/>
      <text x="200" y="70" fill="#ef4444" font-size="8" text-anchor="middle">Centre block</text>
      
      <defs>
        <marker id="arrowO" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="#f59e0b"/>
        </marker>
        <marker id="arrowR" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill="#ef4444"/>
        </marker>
      </defs>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #f59e0b; border-radius: 2px;"></span> Group 1 (Alkali Metals)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #ef4444; border-radius: 2px;"></span> Transition Metals</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔵 Key Points</h4>
    <ul>
      <li><strong>Group 1 elements:</strong> the alkali metals — found on the far left of the periodic table.</li>
      <li><strong>Transition metals:</strong> located in the centre block (between Groups 2 and 3).</li>
      <li>These central elements are sometimes called the <strong>d-block metals</strong>.</li>
    </ul>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Category</th><th>Example Elements</th><th>Periodic Table Location</th></tr>
      </thead>
      <tbody>
        <tr><td>Group 1 (Alkali Metals)</td><td>Li, Na, K</td><td>Far left</td></tr>
        <tr><td>Transition Metals</td><td>Fe, Cu, Ni, Zn</td><td>Middle block</td></tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>If an exam question asks for "transition elements," always include examples — e.g. iron, copper, nickel, chromium.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚡ Subsection 2 – Physical Property Comparison</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Property</th><th>Group 1 Metals</th><th>Transition Metals</th></tr>
      </thead>
      <tbody>
        <tr><td>Density</td><td>Low (Li, Na, K float on water)</td><td>High (Fe, Cu sink in water)</td></tr>
        <tr><td>Hardness</td><td>Very soft (cut with knife)</td><td>Hard and strong</td></tr>
        <tr><td>Melting/Boiling Point</td><td>Low</td><td>High</td></tr>
        <tr><td>Appearance</td><td>Silvery, tarnish quickly</td><td>Shiny, lustrous, often coloured</td></tr>
        <tr><td>Conductivity</td><td>Good</td><td>Excellent</td></tr>
        <tr><td>Strength</td><td>Weak, soft</td><td>Very strong, durable</td></tr>
        <tr><td>Malleability</td><td>Yes</td><td>Yes (often more malleable)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>🧠 Explanation</h4>
    <p>Transition metals have:</p>
    <ul>
      <li><strong>Stronger metallic bonding</strong> due to more delocalised electrons.</li>
      <li><strong>Tightly packed atoms</strong>, giving higher density and hardness.</li>
    </ul>
    <p>This explains why they're widely used in construction, tools, and machinery.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💥 Subsection 3 – Chemical Property Comparison</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Property</th><th>Group 1 Metals</th><th>Transition Metals</th></tr>
      </thead>
      <tbody>
        <tr><td>Reactivity</td><td>Very reactive (especially with water & oxygen)</td><td>Much less reactive</td></tr>
        <tr><td>Reaction with Water</td><td>Vigorous → metal hydroxide + H₂</td><td>Slow or no reaction</td></tr>
        <tr><td>Reaction with Oxygen</td><td>React quickly → white oxides</td><td>Often form coloured oxides</td></tr>
        <tr><td>Reaction with Chlorine</td><td>React vigorously → white salts</td><td>Form coloured chlorides</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Examples</h4>
    <p><strong>Group 1:</strong><br/>2Na + 2H₂O → 2NaOH + H₂<br/>(Fizzes violently, forms colourless alkaline solution)</p>
    <p><strong>Transition Metal (e.g. Fe):</strong><br/>Fe + H₂O → no visible reaction (only rusts slowly over time)</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔬 Subsection 4 – Ion Formation</h3>
  
  <div class="definition-block">
    <h4>🔵 Group 1</h4>
    <p>Always form <strong>+1 ions</strong> because they lose one outer electron.</p>
    <p><strong>Example:</strong> Na → Na⁺ + e⁻</p>
  </div>

  <div class="definition-block">
    <h4>🔵 Transition Metals</h4>
    <p>Can form ions with <strong>different charges</strong> (variable oxidation states).</p>
    <p><strong>Examples:</strong></p>
    <ul>
      <li>Fe²⁺ and Fe³⁺</li>
      <li>Cu⁺ and Cu²⁺</li>
      <li>Cr³⁺, Mn²⁺, etc.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why Important</h4>
    <p>Variable ion charges → <strong>coloured compounds</strong> and <strong>catalytic activity</strong>.<br/>(Each charge produces slightly different chemical behaviour.)</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🎨 Subsection 5 – Appearance and Colour of Compounds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Transition Metal</th><th>Example Compound</th><th>Colour</th></tr>
      </thead>
      <tbody>
        <tr><td>Copper (Cu²⁺)</td><td>Copper(II) sulfate (CuSO₄)</td><td>Blue</td></tr>
        <tr><td>Iron (Fe²⁺)</td><td>Iron(II) sulfate (FeSO₄)</td><td>Pale green</td></tr>
        <tr><td>Iron (Fe³⁺)</td><td>Iron(III) chloride (FeCl₃)</td><td>Brown/yellow</td></tr>
        <tr><td>Nickel (Ni²⁺)</td><td>Nickel(II) sulfate (NiSO₄)</td><td>Green</td></tr>
        <tr><td>Chromium (Cr³⁺)</td><td>Chromium(III) oxide (Cr₂O₃)</td><td>Green</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why?</h4>
    <p>The electrons in transition metal ions <strong>absorb light of specific wavelengths</strong> → reflected light appears coloured.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚙️ Subsection 6 – Catalytic Properties</h3>
  
  <div class="definition-block">
    <h4>🔵 Key Idea</h4>
    <p>Transition metals and their compounds are <strong>excellent catalysts</strong> because they can:</p>
    <ul>
      <li>Change oxidation states easily (gain/lose electrons).</li>
      <li>Provide surfaces for reactions to occur.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🧪 Important Catalysts</h4>
    <table class="data-table">
      <thead>
        <tr><th>Transition Metal</th><th>Use</th><th>Process</th></tr>
      </thead>
      <tbody>
        <tr><td>Iron (Fe)</td><td>Catalyst in the Haber Process</td><td>Ammonia manufacture</td></tr>
        <tr><td>Nickel (Ni)</td><td>Hydrogenation of alkenes</td><td>Making margarine</td></tr>
        <tr><td>Platinum (Pt)</td><td>In catalytic converters</td><td>Converts CO → CO₂</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>These uses rely on transition metals' ability to form temporary bonds and <strong>lower the activation energy</strong> of reactions.</p>
  </div>
</div>
        `,
        canonical_keywords: ["transition metals", "Group 1", "alkali metals", "density", "reactivity", "hardness"],
        practice_items: [
          {
            id: "trans-comp-1",
            prompt_template: "Compare the physical properties of Group 1 metals and transition metals. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["density", "hardness", "melting point", "Group 1", "soft", "low density", "transition", "hard", "high density"]
          }
        ]
      },
      {
        id: "1-3-2-typical-transition-properties",
        title: "1.3.2 TYPICAL PROPERTIES OF TRANSITION METALS",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Definition of Transition Metals</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Transition metals are the elements in the centre block of the periodic table (Groups 3–12). They form part of the <strong>d-block</strong> — their outermost electrons are in the d-subshell.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Example Elements</th><th>Symbols</th></tr>
      </thead>
      <tbody>
        <tr><td>Chromium</td><td>Cr</td></tr>
        <tr><td>Manganese</td><td>Mn</td></tr>
        <tr><td>Iron</td><td>Fe</td></tr>
        <tr><td>Cobalt</td><td>Co</td></tr>
        <tr><td>Nickel</td><td>Ni</td></tr>
        <tr><td>Copper</td><td>Cu</td></tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Note</h4>
    <p>These are the most common transition metals studied at GCSE.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚙️ Subsection 2 – General Physical Properties</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Property</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>High melting and boiling points</td><td>Very strong metallic bonds due to many delocalised electrons.</td></tr>
        <tr><td>High density</td><td>Closely packed atomic structure.</td></tr>
        <tr><td>Good conductors</td><td>Free electrons carry current and heat efficiently.</td></tr>
        <tr><td>Hard and strong</td><td>Strong metallic bonding makes them resistant to deformation.</td></tr>
        <tr><td>Malleable and ductile</td><td>Layers can slide but bonds still hold.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🟢 Examples</h4>
    <ul>
      <li><strong>Iron (Fe):</strong> strong, used in construction and steel.</li>
      <li><strong>Copper (Cu):</strong> excellent conductor, used in wires and electrical circuits.</li>
      <li><strong>Nickel (Ni):</strong> resists corrosion, used in coins and alloys.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💥 Subsection 3 – Chemical Properties</h3>
  
  <div class="diagram-block hover-pause">
    <h4>🎨 Coloured Transition Metal Compounds</h4>
    <svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Test tubes with colored solutions -->
      
      <!-- Tube 1: CuSO4 (blue) -->
      <g transform="translate(50, 30)">
        <rect x="0" y="60" width="40" height="90" fill="#3b82f6" opacity="0.8" rx="2"/>
        <rect x="-2" y="50" width="44" height="10" fill="#475569" rx="2"/>
        <path d="M 0 150 Q 20 160 40 150" fill="#3b82f6" opacity="0.8"/>
        <circle cx="20" cy="100" r="3" fill="#60a5fa" opacity="0.6">
          <animate attributeName="cy" values="100;80;100" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="12" cy="120" r="2" fill="#60a5fa" opacity="0.5">
          <animate attributeName="cy" values="120;90;120" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <text x="20" y="175" fill="#3b82f6" font-size="9" font-weight="bold" text-anchor="middle">CuSO₄</text>
        <text x="20" y="188" fill="#94a3b8" font-size="8" text-anchor="middle">Cu²⁺ Blue</text>
      </g>
      
      <!-- Tube 2: FeSO4 (pale green) -->
      <g transform="translate(130, 30)">
        <rect x="0" y="60" width="40" height="90" fill="#86efac" opacity="0.6" rx="2"/>
        <rect x="-2" y="50" width="44" height="10" fill="#475569" rx="2"/>
        <path d="M 0 150 Q 20 160 40 150" fill="#86efac" opacity="0.6"/>
        <circle cx="25" cy="110" r="2" fill="#a7f3d0" opacity="0.5">
          <animate attributeName="cy" values="110;85;110" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <text x="20" y="175" fill="#86efac" font-size="9" font-weight="bold" text-anchor="middle">FeSO₄</text>
        <text x="20" y="188" fill="#94a3b8" font-size="8" text-anchor="middle">Fe²⁺ Green</text>
      </g>
      
      <!-- Tube 3: FeCl3 (brown/orange) -->
      <g transform="translate(210, 30)">
        <rect x="0" y="60" width="40" height="90" fill="#c2410c" opacity="0.7" rx="2"/>
        <rect x="-2" y="50" width="44" height="10" fill="#475569" rx="2"/>
        <path d="M 0 150 Q 20 160 40 150" fill="#c2410c" opacity="0.7"/>
        <circle cx="15" cy="95" r="2" fill="#ea580c" opacity="0.5">
          <animate attributeName="cy" values="95;75;95" dur="1.8s" repeatCount="indefinite"/>
        </circle>
        <text x="20" y="175" fill="#ea580c" font-size="9" font-weight="bold" text-anchor="middle">FeCl₃</text>
        <text x="20" y="188" fill="#94a3b8" font-size="8" text-anchor="middle">Fe³⁺ Brown</text>
      </g>
      
      <!-- Tube 4: KMnO4 (purple) -->
      <g transform="translate(290, 30)">
        <rect x="0" y="60" width="40" height="90" fill="#a855f7" opacity="0.8" rx="2"/>
        <rect x="-2" y="50" width="44" height="10" fill="#475569" rx="2"/>
        <path d="M 0 150 Q 20 160 40 150" fill="#a855f7" opacity="0.8"/>
        <circle cx="28" cy="105" r="3" fill="#c084fc" opacity="0.6">
          <animate attributeName="cy" values="105;80;105" dur="2.3s" repeatCount="indefinite"/>
        </circle>
        <text x="20" y="175" fill="#a855f7" font-size="9" font-weight="bold" text-anchor="middle">KMnO₄</text>
        <text x="20" y="188" fill="#94a3b8" font-size="8" text-anchor="middle">Mn⁷⁺ Purple</text>
      </g>
      
      <!-- Tube 5: K2Cr2O7 (orange) -->
      <g transform="translate(370, 30)">
        <rect x="0" y="60" width="40" height="90" fill="#f97316" opacity="0.7" rx="2"/>
        <rect x="-2" y="50" width="44" height="10" fill="#475569" rx="2"/>
        <path d="M 0 150 Q 20 160 40 150" fill="#f97316" opacity="0.7"/>
        <circle cx="18" cy="100" r="2" fill="#fb923c" opacity="0.5">
          <animate attributeName="cy" values="100;78;100" dur="2.1s" repeatCount="indefinite"/>
        </circle>
        <text x="20" y="175" fill="#f97316" font-size="8" font-weight="bold" text-anchor="middle">K₂Cr₂O₇</text>
        <text x="20" y="188" fill="#94a3b8" font-size="8" text-anchor="middle">Cr⁶⁺ Orange</text>
      </g>
      
      <!-- Title annotation -->
      <text x="250" y="20" fill="#94a3b8" font-size="10" text-anchor="middle">Different ions absorb different wavelengths of light → visible colours</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 10px; font-size: 11px;">
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #3b82f6; border-radius: 2px;"></span> Cu²⁺ (Blue)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #86efac; border-radius: 2px;"></span> Fe²⁺ (Green)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #c2410c; border-radius: 2px;"></span> Fe³⁺ (Brown)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #a855f7; border-radius: 2px;"></span> Mn⁷⁺ (Purple)</span>
      <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 10px; height: 10px; background: #f97316; border-radius: 2px;"></span> Cr⁶⁺ (Orange)</span>
    </div>
  </div>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Property</th><th>Description</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Variable oxidation states</td><td>Can form ions with different charges.</td><td>Fe²⁺ and Fe³⁺, Cu⁺ and Cu²⁺</td></tr>
        <tr><td>Form coloured compounds</td><td>Each ion absorbs different wavelengths of light.</td><td>CuSO₄ (blue), FeCl₃ (brown)</td></tr>
        <tr><td>Catalytic activity</td><td>Increase rate of reactions without being used up.</td><td>Fe in Haber Process</td></tr>
        <tr><td>Form complex ions</td><td>Bond to other molecules via coordinate bonds.</td><td>[Cu(H₂O)₆]²⁺ in aqueous solution</td></tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>🧠 Why Transition Metals Are Special</h4>
    <p>Their partially filled d-orbitals allow them to:</p>
    <ul>
      <li>Gain or lose different numbers of electrons.</li>
      <li>Form many stable ions and complexes.</li>
      <li>Absorb light energy → visible colour.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚗️ Subsection 4 – Variable Oxidation States</h3>
  
  <div class="definition-block">
    <h4>🔵 Key Concept</h4>
    <p>Transition metals can lose different numbers of electrons, forming ions with varying charges. This leads to <strong>multiple compounds</strong> of the same element with different properties.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Element</th><th>Ion(s) Formed</th><th>Example Compound</th><th>Colour</th></tr>
      </thead>
      <tbody>
        <tr><td>Iron</td><td>Fe²⁺, Fe³⁺</td><td>FeSO₄ (pale green), FeCl₃ (brown)</td><td>Green/Brown</td></tr>
        <tr><td>Copper</td><td>Cu⁺, Cu²⁺</td><td>Cu₂O (red), CuSO₄ (blue)</td><td>Red/Blue</td></tr>
        <tr><td>Manganese</td><td>Mn²⁺, Mn⁷⁺</td><td>MnSO₄ (pale pink), KMnO₄ (purple)</td><td>Pink/Purple</td></tr>
        <tr><td>Chromium</td><td>Cr³⁺, Cr⁶⁺</td><td>Cr₂O₃ (green), K₂Cr₂O₇ (orange)</td><td>Green/Orange</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>These variable oxidation states are a <strong>unique feature</strong> of transition metals.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🎨 Subsection 5 – Coloured Compounds</h3>
  
  <div class="definition-block">
    <h4>🔵 Why Compounds Are Coloured</h4>
    <p>When light hits a transition metal compound:</p>
    <ul>
      <li>Electrons in the d-orbital <strong>absorb specific wavelengths</strong> of light.</li>
      <li>The remaining wavelengths are reflected — this is the <strong>colour we see</strong>.</li>
    </ul>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Compound</th><th>Colour</th></tr>
      </thead>
      <tbody>
        <tr><td>CuSO₄ (aq)</td><td>Blue</td></tr>
        <tr><td>FeSO₄ (aq)</td><td>Pale green</td></tr>
        <tr><td>FeCl₃ (aq)</td><td>Yellow/brown</td></tr>
        <tr><td>NiSO₄ (aq)</td><td>Green</td></tr>
        <tr><td>Cr₂O₃ (s)</td><td>Dark green</td></tr>
        <tr><td>KMnO₄ (aq)</td><td>Purple</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Contrast</h4>
    <p>Non-transition metal compounds (like NaCl or MgO) are <strong>white or colourless</strong> because they have no d-electrons to absorb visible light.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔬 Subsection 6 – Catalytic Properties</h3>
  
  <div class="definition-block">
    <h4>🔵 Key Concept</h4>
    <p>Transition metals and their compounds act as <strong>catalysts</strong> in both industrial and biological reactions.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Catalyst</th><th>Reaction</th><th>Use</th></tr>
      </thead>
      <tbody>
        <tr><td>Iron (Fe)</td><td>N₂ + 3H₂ ⇌ 2NH₃</td><td>Haber Process (ammonia production)</td></tr>
        <tr><td>Nickel (Ni)</td><td>Hydrogenation of alkenes</td><td>Produces margarine (solid fats)</td></tr>
        <tr><td>Platinum (Pt), Rhodium (Rh)</td><td>Converts CO → CO₂</td><td>Catalytic converters in cars</td></tr>
        <tr><td>Copper (Cu)</td><td>Decomposition of H₂O₂</td><td>Speeds up oxygen production</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>⚙️ How They Work</h4>
    <ul>
      <li>Provide surface area for reactants to collide.</li>
      <li>Allow temporary bonding to lower activation energy.</li>
      <li>Can change oxidation state, helping transfer electrons.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧪 Subsection 7 – Common Uses of Transition Metals</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Metal</th><th>Main Uses</th><th>Why It's Suitable</th></tr>
      </thead>
      <tbody>
        <tr><td>Iron (Fe)</td><td>Construction, machinery</td><td>Strong, cheap, forms alloys (steel)</td></tr>
        <tr><td>Copper (Cu)</td><td>Electrical wires, plumbing</td><td>Conductive, malleable, unreactive</td></tr>
        <tr><td>Nickel (Ni)</td><td>Coins, alloys, catalysts</td><td>Corrosion resistant</td></tr>
        <tr><td>Chromium (Cr)</td><td>Stainless steel coating</td><td>Shiny, corrosion resistant</td></tr>
        <tr><td>Titanium (Ti)</td><td>Aircraft, implants</td><td>Light, strong, corrosion resistant</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💡 Subsection 8 – Comparison to Group 1 Metals</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr><th>Property</th><th>Group 1 Metals</th><th>Transition Metals</th></tr>
      </thead>
      <tbody>
        <tr><td>Hardness</td><td>Soft</td><td>Hard and strong</td></tr>
        <tr><td>Density</td><td>Low</td><td>High</td></tr>
        <tr><td>Melting/Boiling Point</td><td>Low</td><td>High</td></tr>
        <tr><td>Reactivity</td><td>Very reactive</td><td>Less reactive</td></tr>
        <tr><td>Ion Formation</td><td>+1 only</td><td>Variable</td></tr>
        <tr><td>Compound Colour</td><td>White/colourless</td><td>Often coloured</td></tr>
        <tr><td>Catalyst Use</td><td>Rare</td><td>Common</td></tr>
        <tr><td>Example Element</td><td>Sodium</td><td>Iron</td></tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>This table is ideal for <strong>6-mark "compare and contrast" questions</strong>.</p>
  </div>
</div>
        `,
        canonical_keywords: ["transition metals", "catalysts", "coloured compounds", "variable oxidation states", "iron", "copper", "nickel"],
        practice_items: [
          {
            id: "trans-prop-1",
            prompt_template: "Explain why transition metals form coloured compounds. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["d-orbital", "electrons", "absorb", "light", "wavelengths", "reflected", "colour"]
          }
        ]
      }
    ]
  },
  {
    id: "bonding-structure",
    title: "Bonding, structure & the properties of matter",
    status: "ready",
    subsections: [
      {
        id: "2-1-1-chemical-bonds",
        title: "2.1.1 CHEMICAL BONDS",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Are Chemical Bonds?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A chemical bond is a strong attraction that holds atoms or ions together in compounds or elements. Bonds form because atoms want to achieve a full outer shell of electrons — the same stable arrangement as noble gases.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>When atoms bond, they either:</p>
    <ul>
      <li><strong>Transfer electrons</strong> (ionic bonding),</li>
      <li><strong>Share electrons</strong> (covalent bonding), or</li>
      <li><strong>Pool electrons</strong> (metallic bonding).</li>
    </ul>
    <p>The result is a more stable structure with lower energy.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – The Three Types of Strong Chemical Bonds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Type of Bond</th>
          <th>Occurs Between</th>
          <th>How It Works</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Ionic</strong></td>
          <td>Metal + Non-metal</td>
          <td>Electrons are transferred from the metal to the non-metal, forming positive and negative ions held by electrostatic forces.</td>
          <td>Sodium chloride (NaCl)</td>
        </tr>
        <tr>
          <td><strong>Covalent</strong></td>
          <td>Non-metal + Non-metal</td>
          <td>Electrons are shared between atoms to achieve full outer shells.</td>
          <td>Water (H₂O), Oxygen (O₂)</td>
        </tr>
        <tr>
          <td><strong>Metallic</strong></td>
          <td>Metal + Metal</td>
          <td>Positive metal ions are held together by a sea of delocalised electrons that move freely throughout the structure.</td>
          <td>Copper (Cu), Iron (Fe)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Quick Summary</h4>
    <ul>
      <li><strong>Ionic → Transfer</strong></li>
      <li><strong>Covalent → Share</strong></li>
      <li><strong>Metallic → Delocalise</strong></li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Particles Involved in Each Bond Type</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Bond Type</th>
          <th>Particles Involved</th>
          <th>Attraction Between</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ionic</td>
          <td>Positive metal ions and negative non-metal ions</td>
          <td>Oppositely charged ions</td>
        </tr>
        <tr>
          <td>Covalent</td>
          <td>Non-metal atoms</td>
          <td>Shared pair(s) of electrons</td>
        </tr>
        <tr>
          <td>Metallic</td>
          <td>Metal atoms and delocalised electrons</td>
          <td>Positive ions ↔ delocalised electrons</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📘 Diagram Reminder (Visual Summary)</h4>
    <ul>
      <li><strong>Ionic</strong> → alternating + and – ions in a lattice</li>
      <li><strong>Covalent</strong> → overlapping electron shells (shared pairs)</li>
      <li><strong>Metallic</strong> → positive ion lattice + moving electrons</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Why Bonds Form (Energy Explanation)</h3>
  
  <div class="definition-block">
    <h4>⚡ The Stability Rule</h4>
    <p>Atoms bond to reach full outer shells (usually 8 electrons). When they do, they become more stable (lower potential energy).</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Type of Bond</th>
          <th>Electron Movement</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ionic</td>
          <td>Transfer</td>
          <td>Both atoms gain stable electronic structures</td>
        </tr>
        <tr>
          <td>Covalent</td>
          <td>Share</td>
          <td>Each atom has a complete shell</td>
        </tr>
        <tr>
          <td>Metallic</td>
          <td>Delocalise</td>
          <td>Metal ions surrounded by electrons for stability</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🔋 Energy Change</h4>
    <p><strong>Bond formation = exothermic</strong> (energy released). <strong>Breaking bonds = endothermic</strong> (energy absorbed).</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Strength of Bonds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Strength</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ionic</td>
          <td>Strong</td>
          <td>Electrostatic attraction acts in all directions in a lattice.</td>
        </tr>
        <tr>
          <td>Covalent</td>
          <td>Strong</td>
          <td>Shared electrons tightly hold atoms together.</td>
        </tr>
        <tr>
          <td>Metallic</td>
          <td>Strong</td>
          <td>Delocalised electrons form strong attraction to positive ions.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Important Note</h4>
    <p>Even though these are all "strong" bonds, remember: The forces between molecules (intermolecular forces) in simple covalent substances are weak — that's why many covalent substances are gases or liquids.</p>
  </div>
</div>
        `,
        canonical_keywords: ["chemical bonds", "ionic bonding", "covalent bonding", "metallic bonding", "electrons", "transfer", "share", "delocalised", "electrostatic forces"],
        practice_items: [
          {
            id: "bonds-1",
            prompt_template: "Describe the three types of strong chemical bonds and explain when each type forms. [6 marks]",
            marks: 6,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["ionic", "covalent", "metallic", "transfer", "share", "delocalised", "metal", "non-metal"]
          },
          {
            id: "bonds-2",
            prompt_template: "Explain why atoms form chemical bonds. Use the concept of stability in your answer. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["stable", "full outer shell", "noble gas", "lower energy"]
          }
        ]
      },
      {
        id: "2-1-2-ionic-bonding",
        title: "2.1.2 IONIC BONDING",
        type: "content",
        study_group: 1,
        content_html: `
<div class="note-block">
  <p><strong>📝 This section is one of the most examined in Paper 1.</strong> You must be able to describe how ions form, draw dot-and-cross diagrams, and explain ionic charges and forces in terms of electrostatic attraction.</p>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is Ionic Bonding?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Ionic bonding is the electrostatic attraction between oppositely charged ions (positive and negative).</p>
    <p>It happens when:</p>
    <ul>
      <li>A metal atom <strong>loses electrons</strong> to form a <strong>positive ion (cation)</strong>.</li>
      <li>A non-metal atom <strong>gains those electrons</strong> to form a <strong>negative ion (anion)</strong>.</li>
    </ul>
    <p>Both atoms end up with full outer electron shells, achieving a stable noble gas configuration.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Formation of Ionic Bonds (Step-by-Step)</h3>
  
  <div class="example-block">
    <h4>🧪 Example 1 – Sodium and Chlorine</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Atom</th>
          <th>Electronic Structure</th>
          <th>What Happens</th>
          <th>Ion Formed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sodium (Na)</td>
          <td>2,8,1</td>
          <td>Loses 1 electron</td>
          <td>Na⁺</td>
        </tr>
        <tr>
          <td>Chlorine (Cl)</td>
          <td>2,8,7</td>
          <td>Gains 1 electron</td>
          <td>Cl⁻</td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>Result:</strong></p>
    <p>Na → Na⁺ + e⁻</p>
    <p>Cl + e⁻ → Cl⁻</p>
    
    <p><strong>Word Equation:</strong><br>
    Sodium + Chlorine → Sodium chloride</p>
    
    <p><strong>Dot-and-Cross Diagram (animated):</strong></p>
    
    <!-- Animated Electron Transfer Diagram -->
    <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
      <div style="display: flex; justify-content: center; padding: 0.5rem;">
        <svg width="320" height="140" viewBox="0 0 320 140">
          <!-- Sodium atom -->
          <circle cx="80" cy="70" r="35" fill="#3b82f6" opacity="0.1" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="80" cy="70" r="20" fill="#3b82f6" opacity="0.2" stroke="#3b82f6" stroke-width="1"/>
          <circle cx="80" cy="70" r="8" fill="#3b82f6" opacity="0.4"/>
          <text x="80" y="75" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Na</text>
          
          <!-- Sodium outer electron - animated transfer -->
          <g class="anim-electron-transfer">
            <circle cx="115" cy="70" r="4" fill="#ef4444"/>
            <text x="115" y="60" fill="#ef4444" font-size="8" text-anchor="middle">e⁻</text>
          </g>
          
          <!-- Arrow showing electron movement -->
          <path class="anim-field-flow" d="M120 70 Q160 50 195 70" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#ionArrow)"/>
          <defs>
            <marker id="ionArrow" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
              <polygon points="0 0, 6 2.5, 0 5" fill="#f59e0b"/>
            </marker>
          </defs>
          
          <!-- Chlorine atom -->
          <circle cx="240" cy="70" r="40" fill="#22c55e" opacity="0.1" stroke="#22c55e" stroke-width="2"/>
          <circle cx="240" cy="70" r="25" fill="#22c55e" opacity="0.2" stroke="#22c55e" stroke-width="1"/>
          <circle cx="240" cy="70" r="12" fill="#22c55e" opacity="0.3" stroke="#22c55e" stroke-width="1"/>
          <circle cx="240" cy="70" r="5" fill="#22c55e" opacity="0.5"/>
          <text x="240" y="75" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Cl</text>
          
          <!-- Chlorine existing electrons - vibrating -->
          <g class="anim-vibrate-slow">
            <circle cx="265" cy="60" r="3" fill="#22c55e"/>
            <circle cx="270" cy="75" r="3" fill="#22c55e"/>
            <circle cx="260" cy="85" r="3" fill="#22c55e"/>
            <circle cx="220" cy="55" r="3" fill="#22c55e"/>
            <circle cx="215" cy="75" r="3" fill="#22c55e"/>
            <circle cx="225" cy="90" r="3" fill="#22c55e"/>
          </g>
          
          <!-- Labels -->
          <text x="80" y="120" fill="currentColor" font-size="9" text-anchor="middle">2,8,1</text>
          <text x="240" y="120" fill="currentColor" font-size="9" text-anchor="middle">2,8,7</text>
          <text x="160" y="35" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Electron transfer</text>
        </svg>
      </div>
      <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Hover to pause • Na loses 1 electron → Na⁺ • Cl gains 1 electron → Cl⁻</p>
    </div>
    
    <ul>
      <li>Sodium atom transfers one outer electron (shown by a cross) to chlorine's outer shell (shown by a dot).</li>
      <li>Sodium now has a full 2,8 shell (Na⁺) and chlorine has a full 2,8,8 shell (Cl⁻).</li>
      <li>Brackets are drawn around each ion with charges written outside.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🧪 Example 2 – Magnesium and Oxygen</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Atom</th>
          <th>Electronic Structure</th>
          <th>Change</th>
          <th>Ion Formed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Magnesium (Mg)</td>
          <td>2,8,2</td>
          <td>Loses 2 electrons</td>
          <td>Mg²⁺</td>
        </tr>
        <tr>
          <td>Oxygen (O)</td>
          <td>2,6</td>
          <td>Gains 2 electrons</td>
          <td>O²⁻</td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>Result:</strong></p>
    <p>Mg → Mg²⁺ + 2e⁻</p>
    <p>O + 2e⁻ → O²⁻</p>
    
    <p><strong>Dot-and-Cross Diagram (described):</strong></p>
    <ul>
      <li>Two crosses (electrons from Mg) are transferred to oxygen's outer shell.</li>
      <li>Brackets around Mg²⁺ and O²⁻ with charges labelled.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🧪 Example 3 – Calcium and Chlorine</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Electronic Structure</th>
          <th>Change</th>
          <th>Ion Formed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calcium (Ca)</td>
          <td>2,8,8,2</td>
          <td>Loses 2 electrons</td>
          <td>Ca²⁺</td>
        </tr>
        <tr>
          <td>Chlorine (Cl)</td>
          <td>2,8,7</td>
          <td>Gains 1 electron</td>
          <td>Cl⁻ (×2)</td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>Equation:</strong><br>
    Ca + Cl₂ → CaCl₂</p>
    
    <p><strong>Explanation:</strong><br>
    Each chlorine atom gains one electron → two Cl⁻ ions for every Ca²⁺ ion.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Charges on Ions in Groups 1, 2, 6, and 7</h3>
  
  <div class="exam-tip-block">
    <h4>🧠 Rule</h4>
    <p>The charge equals the number of electrons lost or gained.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Group</th>
          <th>Example Element</th>
          <th>Ion Formed</th>
          <th>Charge Pattern</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sodium (Na)</td>
          <td>Na⁺</td>
          <td>+1 (Lose 1 electron)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Magnesium (Mg)</td>
          <td>Mg²⁺</td>
          <td>+2 (Lose 2 electrons)</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Oxygen (O)</td>
          <td>O²⁻</td>
          <td>-2 (Gain 2 electrons)</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Chlorine (Cl)</td>
          <td>Cl⁻</td>
          <td>-1 (Gain 1 electron)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Shortcut</h4>
    <p>Group number = electrons in outer shell → number of electrons lost or gained to reach 8.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Dot-and-Cross Diagram Skills</h3>
  
  <div class="key-facts-block">
    <h4>🧠 How to Draw Step-by-Step:</h4>
    <ol>
      <li>Write electron configurations for both atoms.</li>
      <li>Show transfer of electrons with arrows.</li>
      <li>Use dots for one atom's electrons and crosses for the other's.</li>
      <li>Put brackets around each ion.</li>
      <li>Write charges outside brackets (+1, +2, -1, -2).</li>
    </ol>
  </div>

  <!-- Animated Ionic Bonding Diagram - NaCl Formation -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚛️ Ionic Bond Formation: Na + Cl → NaCl (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="200" viewBox="0 0 400 200">
        <!-- Sodium atom -->
        <g>
          <circle cx="80" cy="100" r="45" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <circle cx="80" cy="100" r="30" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <circle cx="80" cy="100" r="15" fill="none" stroke="#94a3b8" stroke-width="1"/>
          <!-- Nucleus -->
          <circle cx="80" cy="100" r="8" fill="#ef4444" class="anim-pulse"/>
          <text x="80" y="103" fill="white" font-size="8" text-anchor="middle" font-weight="bold">11+</text>
          <!-- Inner electrons -->
          <circle cx="73" cy="88" r="3" fill="#3b82f6"/>
          <circle cx="87" cy="88" r="3" fill="#3b82f6"/>
          <!-- Second shell electrons -->
          <circle cx="55" cy="100" r="3" fill="#3b82f6"/>
          <circle cx="105" cy="100" r="3" fill="#3b82f6"/>
          <circle cx="80" cy="75" r="3" fill="#3b82f6"/>
          <circle cx="80" cy="125" r="3" fill="#3b82f6"/>
          <circle cx="60" cy="82" r="3" fill="#3b82f6"/>
          <circle cx="100" cy="82" r="3" fill="#3b82f6"/>
          <circle cx="60" cy="118" r="3" fill="#3b82f6"/>
          <circle cx="100" cy="118" r="3" fill="#3b82f6"/>
          <!-- Outer electron (to be transferred) -->
          <circle cx="80" cy="55" r="4" fill="#f59e0b" class="anim-electron-transfer"/>
          <text x="80" y="170" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Na atom</text>
        </g>
        
        <!-- Arrow showing electron transfer -->
        <g class="anim-pulse">
          <path d="M130 70 Q180 50 230 70" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowhead)"/>
          <text x="180" y="45" fill="#f59e0b" font-size="10" text-anchor="middle">e⁻ transferred</text>
        </g>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b"/>
          </marker>
        </defs>
        
        <!-- Chlorine atom -->
        <g>
          <circle cx="320" cy="100" r="50" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <circle cx="320" cy="100" r="35" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
          <circle cx="320" cy="100" r="18" fill="none" stroke="#94a3b8" stroke-width="1"/>
          <!-- Nucleus -->
          <circle cx="320" cy="100" r="10" fill="#22c55e" class="anim-pulse"/>
          <text x="320" y="103" fill="white" font-size="8" text-anchor="middle" font-weight="bold">17+</text>
          <!-- Inner electrons -->
          <circle cx="313" cy="88" r="3" fill="#3b82f6"/>
          <circle cx="327" cy="88" r="3" fill="#3b82f6"/>
          <!-- Second shell electrons -->
          <circle cx="293" cy="100" r="3" fill="#3b82f6"/>
          <circle cx="347" cy="100" r="3" fill="#3b82f6"/>
          <circle cx="320" cy="73" r="3" fill="#3b82f6"/>
          <circle cx="320" cy="127" r="3" fill="#3b82f6"/>
          <circle cx="298" cy="82" r="3" fill="#3b82f6"/>
          <circle cx="342" cy="82" r="3" fill="#3b82f6"/>
          <circle cx="298" cy="118" r="3" fill="#3b82f6"/>
          <circle cx="342" cy="118" r="3" fill="#3b82f6"/>
          <!-- Outer shell electrons (7) -->
          <circle cx="275" cy="100" r="3" fill="#ec4899"/>
          <circle cx="365" cy="100" r="3" fill="#ec4899"/>
          <circle cx="290" cy="75" r="3" fill="#ec4899"/>
          <circle cx="350" cy="75" r="3" fill="#ec4899"/>
          <circle cx="290" cy="125" r="3" fill="#ec4899"/>
          <circle cx="350" cy="125" r="3" fill="#ec4899"/>
          <circle cx="320" cy="55" r="3" fill="#ec4899"/>
          <!-- Incoming electron -->
          <circle cx="320" cy="150" r="4" fill="#f59e0b" class="anim-pulse-fast"/>
          <text x="320" y="175" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Cl atom → Cl⁻</text>
        </g>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Sodium loses 1 electron → Na⁺ • Chlorine gains 1 electron → Cl⁻ • Electrostatic attraction forms ionic bond</p>
  </div>

  <div class="example-block">
    <h4>📝 Common Examples You Must Know:</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Compound</th>
          <th>Metal</th>
          <th>Non-Metal</th>
          <th>Diagram Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NaCl</td>
          <td>Na →</td>
          <td>1 electron transferred</td>
          <td>[Na⁺] [Cl⁻]</td>
        </tr>
        <tr>
          <td>MgO</td>
          <td>Mg →</td>
          <td>2 electrons transferred</td>
          <td>[Mg²⁺] [O²⁻]</td>
        </tr>
        <tr>
          <td>CaF₂</td>
          <td>Ca →</td>
          <td>2 electrons transferred (to 2 F atoms)</td>
          <td>[Ca²⁺] [F⁻]₂</td>
        </tr>
        <tr>
          <td>Li₂O</td>
          <td>2 Li →</td>
          <td>2 electrons total transferred</td>
          <td>[Li⁺]₂ [O²⁻]</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Why Ionic Bonds Are Strong</h3>
  
  <div class="key-facts-block">
    <h4>📘 Explanation</h4>
    <p>Ions in an ionic compound are held together by <strong>strong electrostatic forces</strong> between oppositely charged ions. These forces:</p>
    <ul>
      <li>Act in all directions throughout the lattice,</li>
      <li>Require lots of energy to overcome.</li>
    </ul>
    <p>This is why ionic compounds have <strong>high melting and boiling points</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Representing Ionic Compounds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Representation</th>
          <th>Description</th>
          <th>Limitation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dot-and-cross diagram</td>
          <td>Shows electron transfer clearly</td>
          <td>Doesn't show 3D structure or bonding strength</td>
        </tr>
        <tr>
          <td>Ball-and-stick model</td>
          <td>Shows 3D arrangement and bonds</td>
          <td>Doesn't show relative ion size or electron transfer</td>
        </tr>
        <tr>
          <td>2D diagram</td>
          <td>Easy to draw</td>
          <td>No depth or perspective</td>
        </tr>
        <tr>
          <td>3D space-filling model</td>
          <td>Realistic spacing between ions</td>
          <td>Can't see internal ions; looks crowded</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Exam Tip</h4>
    <p>When asked "Describe the structure of an ionic compound," you must include: <strong>giant lattice</strong>, <strong>electrostatic forces</strong>, and <strong>ions arranged in regular pattern</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Empirical Formula of Ionic Compounds</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The empirical formula shows the simplest whole number ratio of ions in a compound.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 How to Work It Out</h4>
    <ol>
      <li>Identify each ion and its charge.</li>
      <li>Combine so total positive = total negative charge.</li>
      <li>Write the ratio as the formula.</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Ions</th>
          <th>Balancing Charge</th>
          <th>Formula</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Na⁺ and Cl⁻</td>
          <td>+1 and -1</td>
          <td>NaCl</td>
        </tr>
        <tr>
          <td>Mg²⁺ and O²⁻</td>
          <td>+2 and -2</td>
          <td>MgO</td>
        </tr>
        <tr>
          <td>Ca²⁺ and F⁻</td>
          <td>+2 and 2×(-1)</td>
          <td>CaF₂</td>
        </tr>
        <tr>
          <td>Al³⁺ and O²⁻</td>
          <td>2×(+3) = +6, 3×(-2) = -6</td>
          <td>Al₂O₃</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: ["ionic bonding", "ions", "cation", "anion", "electrostatic forces", "electron transfer", "dot-and-cross diagram", "lattice", "empirical formula"],
        practice_items: [
          {
            id: "ionic-bonding-1",
            prompt_template: "Describe how ionic bonds form between sodium and chlorine atoms. Include electron configurations in your answer. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["sodium", "loses", "electron", "chlorine", "gains", "electron", "Na+", "Cl-", "electrostatic", "attraction"]
          },
          {
            id: "ionic-bonding-2",
            prompt_template: "Explain why ionic bonds are strong. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["electrostatic forces", "oppositely charged", "ions", "all directions", "lattice", "energy"]
          },
          {
            id: "ionic-bonding-3",
            prompt_template: "Work out the empirical formula for the compound formed between aluminium (Al³⁺) and oxygen (O²⁻). Show your working. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["Al2O3", "2×(+3)", "3×(-2)", "balanced"]
          }
        ]
      },
      {
        id: "2-1-3-ionic-compounds",
        title: "2.1.3 IONIC COMPOUNDS",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Structure of Ionic Compounds</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Ionic compounds have a <strong>giant ionic lattice structure</strong> — a three-dimensional repeating pattern of positive and negative ions held together by strong electrostatic forces acting in all directions.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Description</h4>
    <ul>
      <li>Ions are closely packed in a regular pattern.</li>
      <li>Each positive ion is surrounded by negative ions, and each negative ion is surrounded by positive ions.</li>
      <li>The structure extends throughout the solid (that's why it's "giant").</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example – Sodium Chloride (NaCl)</h4>
    <ul>
      <li>Each Na⁺ ion is surrounded by 6 Cl⁻ ions.</li>
      <li>Each Cl⁻ ion is surrounded by 6 Na⁺ ions.</li>
      <li><strong>Arrangement:</strong> cubic lattice.</li>
      <li><strong>Bond type:</strong> Strong electrostatic attraction between Na⁺ and Cl⁻.</li>
    </ul>
  </div>

  <!-- Animated Giant Ionic Lattice Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧊 Giant Ionic Lattice - NaCl (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="220" viewBox="0 0 300 220">
        <!-- 3D lattice representation -->
        <!-- Front face - Layer 1 -->
        <g class="anim-pulse">
          <circle cx="80" cy="80" r="16" fill="#ef4444" opacity="0.8"/>
          <text x="80" y="84" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Na⁺</text>
        </g>
        <g class="anim-pulse anim-delay-200">
          <circle cx="140" cy="80" r="20" fill="#22c55e" opacity="0.8"/>
          <text x="140" y="84" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Cl⁻</text>
        </g>
        <g class="anim-pulse anim-delay-100">
          <circle cx="200" cy="80" r="16" fill="#ef4444" opacity="0.8"/>
          <text x="200" y="84" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Na⁺</text>
        </g>
        
        <g class="anim-pulse anim-delay-300">
          <circle cx="80" cy="140" r="20" fill="#22c55e" opacity="0.8"/>
          <text x="80" y="144" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Cl⁻</text>
        </g>
        <g class="anim-pulse anim-delay-400">
          <circle cx="140" cy="140" r="16" fill="#ef4444" opacity="0.8"/>
          <text x="140" y="144" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Na⁺</text>
        </g>
        <g class="anim-pulse anim-delay-500">
          <circle cx="200" cy="140" r="20" fill="#22c55e" opacity="0.8"/>
          <text x="200" y="144" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Cl⁻</text>
        </g>
        
        <g class="anim-pulse anim-delay-200">
          <circle cx="80" cy="200" r="16" fill="#ef4444" opacity="0.8"/>
          <text x="80" y="204" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Na⁺</text>
        </g>
        <g class="anim-pulse anim-delay-300">
          <circle cx="140" cy="200" r="20" fill="#22c55e" opacity="0.8"/>
          <text x="140" y="204" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Cl⁻</text>
        </g>
        <g class="anim-pulse anim-delay-400">
          <circle cx="200" cy="200" r="16" fill="#ef4444" opacity="0.8"/>
          <text x="200" y="204" fill="white" font-size="9" text-anchor="middle" font-weight="bold">Na⁺</text>
        </g>
        
        <!-- Back face (offset) - creates 3D effect -->
        <g opacity="0.5">
          <circle cx="110" cy="50" r="14" fill="#22c55e"/>
          <circle cx="170" cy="50" r="12" fill="#ef4444"/>
          <circle cx="230" cy="50" r="14" fill="#22c55e"/>
          
          <circle cx="110" cy="110" r="12" fill="#ef4444"/>
          <circle cx="170" cy="110" r="14" fill="#22c55e"/>
          <circle cx="230" cy="110" r="12" fill="#ef4444"/>
          
          <circle cx="110" cy="170" r="14" fill="#22c55e"/>
          <circle cx="170" cy="170" r="12" fill="#ef4444"/>
          <circle cx="230" cy="170" r="14" fill="#22c55e"/>
        </g>
        
        <!-- Connection lines (electrostatic forces) -->
        <g stroke="currentColor" stroke-width="1" opacity="0.3" stroke-dasharray="3,2">
          <line x1="96" y1="80" x2="120" y2="80"/>
          <line x1="160" y1="80" x2="184" y2="80"/>
          <line x1="80" y1="96" x2="80" y2="120"/>
          <line x1="140" y1="96" x2="140" y2="120"/>
          <line x1="200" y1="96" x2="200" y2="120"/>
          <line x1="100" y1="140" x2="120" y2="140"/>
          <line x1="156" y1="140" x2="180" y2="140"/>
          <line x1="80" y1="160" x2="80" y2="180"/>
          <line x1="140" y1="156" x2="140" y2="180"/>
          <line x1="200" y1="160" x2="200" y2="180"/>
        </g>
        
        <!-- Legend -->
        <rect x="230" y="30" width="65" height="55" fill="none" stroke="currentColor" stroke-width="1" rx="3" opacity="0.3"/>
        <circle cx="245" cy="48" r="8" fill="#ef4444"/>
        <text x="257" y="52" fill="currentColor" font-size="8">Na⁺ (small)</text>
        <circle cx="245" cy="70" r="10" fill="#22c55e"/>
        <text x="257" y="74" fill="currentColor" font-size="8">Cl⁻ (larger)</text>
        
        <!-- Label -->
        <text x="150" y="18" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">3D Cubic Lattice</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Alternating Na⁺ and Cl⁻ ions • Each ion surrounded by 6 opposite ions • Strong electrostatic forces in all directions</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Forces in Ionic Compounds</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Key Idea</h4>
    <p>The strength of ionic bonds depends on:</p>
    <ul>
      <li><strong>Charge of the ions</strong> – higher charges = stronger attraction. (e.g. MgO has stronger bonds than NaCl because 2+ and 2- ions attract more strongly.)</li>
      <li><strong>Size of ions</strong> – smaller ions = stronger attraction because charges are closer together.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Therefore:</h4>
    <p>Compounds with highly charged, small ions have very high melting and boiling points.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Properties of Ionic Compounds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>High melting and boiling points</td>
          <td>Strong electrostatic forces require a lot of energy to break.</td>
        </tr>
        <tr>
          <td>Don't conduct electricity when solid</td>
          <td>Ions fixed in lattice — cannot move.</td>
        </tr>
        <tr>
          <td>Conduct electricity when molten or dissolved (aqueous)</td>
          <td>Ions free to move → carry charge.</td>
        </tr>
        <tr>
          <td>Brittle</td>
          <td>When layers shift, like charges align → repel → lattice shatters.</td>
        </tr>
        <tr>
          <td>Usually soluble in water</td>
          <td>Polar water molecules pull ions apart due to attraction.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Explaining Conductivity</h3>
  
  <div class="key-facts-block">
    <h4>📘 In Solids</h4>
    <p>Ions are locked in fixed positions → cannot carry charge → <strong>non-conductor</strong>.</p>
    
    <h4>📘 In Molten or Solution</h4>
    <ul>
      <li>Lattice breaks apart → ions move freely.</li>
      <li>Positive ions move to negative electrode (cathode).</li>
      <li>Negative ions move to positive electrode (anode).</li>
    </ul>
    <p>This is why ionic compounds are used in electrolysis experiments.</p>
  </div>

  <!-- Animated Electrolysis Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Electrolysis Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="280" viewBox="0 0 360 280">
        <!-- Power supply -->
        <rect x="130" y="10" width="100" height="40" fill="#374151" rx="5"/>
        <text x="180" y="35" fill="white" font-size="10" text-anchor="middle" font-weight="bold">DC Power Supply</text>
        <circle cx="150" cy="25" r="6" fill="#ef4444"/>
        <text x="150" y="28" fill="white" font-size="8" text-anchor="middle">+</text>
        <circle cx="210" cy="25" r="6" fill="#3b82f6"/>
        <text x="210" y="28" fill="white" font-size="8" text-anchor="middle">−</text>
        
        <!-- Wires -->
        <line x1="150" y1="50" x2="150" y2="80" stroke="#ef4444" stroke-width="2"/>
        <line x1="150" y1="80" x2="90" y2="80" stroke="#ef4444" stroke-width="2"/>
        <line x1="90" y1="80" x2="90" y2="120" stroke="#ef4444" stroke-width="2"/>
        
        <line x1="210" y1="50" x2="210" y2="80" stroke="#3b82f6" stroke-width="2"/>
        <line x1="210" y1="80" x2="270" y2="80" stroke="#3b82f6" stroke-width="2"/>
        <line x1="270" y1="80" x2="270" y2="120" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Container/Beaker -->
        <rect x="60" y="120" width="240" height="130" fill="#e0f2fe" opacity="0.3" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Electrolyte solution -->
        <rect x="62" y="140" width="236" height="108" fill="#bfdbfe" opacity="0.4"/>
        
        <!-- Anode (positive electrode) -->
        <rect x="80" y="120" width="20" height="100" fill="#4b5563"/>
        <text x="90" y="240" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Anode (+)</text>
        
        <!-- Cathode (negative electrode) -->
        <rect x="260" y="120" width="20" height="100" fill="#4b5563"/>
        <text x="270" y="240" fill="#3b82f6" font-size="10" text-anchor="middle" font-weight="bold">Cathode (−)</text>
        
        <!-- Moving cations (positive ions) to cathode -->
        <g class="anim-flow-right">
          <circle cx="140" cy="160" r="8" fill="#ef4444" opacity="0.8"/>
          <text x="140" y="163" fill="white" font-size="7" text-anchor="middle">+</text>
        </g>
        <g class="anim-flow-right anim-delay-300">
          <circle cx="160" cy="180" r="8" fill="#ef4444" opacity="0.8"/>
          <text x="160" y="183" fill="white" font-size="7" text-anchor="middle">+</text>
        </g>
        <g class="anim-flow-right anim-delay-500">
          <circle cx="150" cy="200" r="8" fill="#ef4444" opacity="0.8"/>
          <text x="150" y="203" fill="white" font-size="7" text-anchor="middle">+</text>
        </g>
        
        <!-- Moving anions (negative ions) to anode -->
        <g class="anim-flow-left">
          <circle cx="220" cy="165" r="8" fill="#3b82f6" opacity="0.8"/>
          <text x="220" y="168" fill="white" font-size="7" text-anchor="middle">−</text>
        </g>
        <g class="anim-flow-left anim-delay-400">
          <circle cx="200" cy="185" r="8" fill="#3b82f6" opacity="0.8"/>
          <text x="200" y="188" fill="white" font-size="7" text-anchor="middle">−</text>
        </g>
        <g class="anim-flow-left anim-delay-200">
          <circle cx="210" cy="205" r="8" fill="#3b82f6" opacity="0.8"/>
          <text x="210" y="208" fill="white" font-size="7" text-anchor="middle">−</text>
        </g>
        
        <!-- Bubbles at electrodes -->
        <g class="anim-bubble-rise">
          <circle cx="85" cy="150" r="3" fill="none" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
        </g>
        <g class="anim-bubble-rise anim-delay-300">
          <circle cx="92" cy="155" r="2" fill="none" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
        </g>
        <g class="anim-bubble-rise anim-delay-500">
          <circle cx="275" cy="150" r="3" fill="none" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
        </g>
        <g class="anim-bubble-rise anim-delay-200">
          <circle cx="268" cy="155" r="2" fill="none" stroke="#6b7280" stroke-width="1" opacity="0.6"/>
        </g>
        
        <!-- Labels -->
        <text x="180" y="270" fill="currentColor" font-size="10" text-anchor="middle">Molten or dissolved ionic compound</text>
        
        <!-- Legend -->
        <rect x="285" y="130" width="70" height="50" fill="none" stroke="currentColor" stroke-width="1" rx="3" opacity="0.3"/>
        <circle cx="295" cy="145" r="5" fill="#ef4444"/>
        <text x="305" y="148" fill="currentColor" font-size="8">Cation (+)</text>
        <circle cx="295" cy="165" r="5" fill="#3b82f6"/>
        <text x="305" y="168" fill="currentColor" font-size="8">Anion (−)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Cations move to cathode (−) • Anions move to anode (+) • Reduction at cathode, oxidation at anode</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Models of Ionic Structures</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Model Type</th>
          <th>Description</th>
          <th>Advantages</th>
          <th>Limitations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2D lattice diagram</td>
          <td>Flat grid showing alternating ions</td>
          <td>Simple to draw</td>
          <td>Doesn't show 3D arrangement</td>
        </tr>
        <tr>
          <td>Ball-and-stick model</td>
          <td>3D lattice showing ions and bonds</td>
          <td>Shows regular pattern and bonding</td>
          <td>Not to scale – sticks not real</td>
        </tr>
        <tr>
          <td>Space-filling model</td>
          <td>Shows how ions pack together</td>
          <td>Realistic proportions</td>
          <td>Can't see internal structure</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>💡 Exam tip</h4>
    <p>When asked to "describe the structure of sodium chloride," always include:</p>
    <p>"A giant 3D lattice of positive and negative ions held together by strong electrostatic forces acting in all directions."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Comparing Different Ionic Compounds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Compound</th>
          <th>Ion Charges</th>
          <th>Relative Strength</th>
          <th>Melting Point (°C)</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NaCl</td>
          <td>+1 / -1</td>
          <td>Moderate</td>
          <td>801</td>
          <td>Moderate electrostatic attraction</td>
        </tr>
        <tr>
          <td>MgO</td>
          <td>+2 / -2</td>
          <td>Very strong</td>
          <td>2852</td>
          <td>High attraction due to double charges</td>
        </tr>
        <tr>
          <td>CaF₂</td>
          <td>+2 / -1</td>
          <td>Strong</td>
          <td>1418</td>
          <td>Two F⁻ per Ca²⁺ – balanced strong lattice</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Trend</h4>
    <p>Greater charge → stronger ionic bond → higher melting point.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Solubility in Water</h3>
  
  <div class="key-facts-block">
    <h4>📘 Explanation</h4>
    <p>Water is a polar molecule (O end = negative, H ends = positive). When an ionic solid is placed in water:</p>
    <ul>
      <li>The positive hydrogen attracts the negative ion (anion).</li>
      <li>The negative oxygen attracts the positive ion (cation).</li>
    </ul>
    <p>The lattice breaks apart, and ions dissolve in solution.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Term</h4>
    <p>This is called <strong>dissociation</strong> — important in chemistry of acids, bases, and electrolysis.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Limitations of Ionic Models</h3>
  
  <div class="key-facts-block">
    <h4>🔍 What They Miss</h4>
    <ul>
      <li>Movement of ions isn't shown.</li>
      <li>Relative ion sizes can be inaccurate.</li>
      <li>Electrostatic forces are not visible (they act in 3D, not as rods).</li>
      <li>Dynamic nature (melting, dissolving) not represented.</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: ["ionic compounds", "giant ionic lattice", "electrostatic forces", "conductivity", "melting point", "solubility", "brittle"],
        practice_items: [
          {
            id: "ionic-compounds-1",
            prompt_template: "Explain why ionic compounds have high melting and boiling points. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["strong", "electrostatic forces", "ions", "energy", "break", "lattice"]
          },
          {
            id: "ionic-compounds-2",
            prompt_template: "Explain why ionic compounds conduct electricity when molten but not when solid. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["solid", "ions", "fixed", "cannot move", "molten", "free to move", "carry charge"]
          }
        ]
      },
      {
        id: "2-1-4-covalent-bonding",
        title: "2.1.4 COVALENT BONDING",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is Covalent Bonding?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A covalent bond is a <strong>shared pair of electrons</strong> between two non-metal atoms. Each atom contributes one or more electrons to the shared pair so that both achieve a full outer shell (stable electronic configuration).</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <ul>
      <li>Occurs between <strong>non-metals only</strong>.</li>
      <li>The shared electrons are attracted to the nuclei of both atoms, holding them together.</li>
      <li>The atoms are <strong>neutral</strong> — no ions are formed.</li>
      <li>Covalent bonds are very strong because the attraction between nuclei and shared electrons is powerful.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – How Covalent Bonds Form</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Step-by-Step Explanation</h4>
    <ol>
      <li>Each atom has unfilled outer electron shells.</li>
      <li>Atoms share electrons to fill these shells.</li>
      <li>Each atom ends up with a stable configuration (usually 8 outer electrons — 2 for hydrogen).</li>
      <li>The shared electrons form a strong electrostatic attraction between the two nuclei.</li>
    </ol>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Remember</h4>
    <p>"Covalent bonding is <strong>sharing</strong>, not transfer."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Dot-and-Cross Diagrams</h3>
  
  <div class="key-facts-block">
    <p>Dot-and-cross diagrams show which electrons are shared between atoms. Use dots for one atom's electrons and crosses for the other's.</p>
  </div>

  <div class="example-block">
    <h4>🔵 Example 1 – Hydrogen (H₂)</h4>
    <ul>
      <li>Each H atom has 1 electron.</li>
      <li>They share a pair → both have 2 (first shell full).</li>
      <li><strong>Displayed formula:</strong> H–H</li>
      <li><strong>Dot-and-cross:</strong> Two overlapping circles with one dot and one cross shared.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🔵 Example 2 – Chlorine (Cl₂)</h4>
    <ul>
      <li>Each Cl atom has 7 outer electrons.</li>
      <li>They share one pair → both have 8.</li>
      <li><strong>Displayed formula:</strong> Cl–Cl</li>
      <li><strong>Dot-and-cross:</strong> Two overlapping circles; one dot and one cross shared.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🔵 Example 3 – Water (H₂O)</h4>
    <ul>
      <li>Oxygen: 6 outer electrons</li>
      <li>Each hydrogen: 1 electron → Two shared pairs of electrons.</li>
      <li><strong>Displayed formula:</strong> H–O–H</li>
      <li><strong>Dot-and-cross:</strong> Oxygen overlaps twice — one with each hydrogen.</li>
    </ul>
  </div>

  <!-- Animated Water Molecule Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>💧 Water Molecule - Covalent Bonding (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="280" height="200" viewBox="0 0 280 200">
        <!-- Oxygen atom (center) -->
        <circle cx="140" cy="100" r="35" fill="#ef4444" opacity="0.2"/>
        <circle cx="140" cy="100" r="25" fill="#ef4444" opacity="0.4" class="anim-pulse"/>
        <text x="140" y="105" fill="white" font-size="14" text-anchor="middle" font-weight="bold">O</text>
        
        <!-- Hydrogen atom (left) -->
        <circle cx="75" cy="140" r="20" fill="#3b82f6" opacity="0.3"/>
        <circle cx="75" cy="140" r="14" fill="#3b82f6" opacity="0.5" class="anim-pulse"/>
        <text x="75" y="145" fill="white" font-size="12" text-anchor="middle" font-weight="bold">H</text>
        
        <!-- Hydrogen atom (right) -->
        <circle cx="205" cy="140" r="20" fill="#3b82f6" opacity="0.3"/>
        <circle cx="205" cy="140" r="14" fill="#3b82f6" opacity="0.5" class="anim-pulse"/>
        <text x="205" y="145" fill="white" font-size="12" text-anchor="middle" font-weight="bold">H</text>
        
        <!-- Covalent bonds -->
        <line x1="115" y1="115" x2="90" y2="130" stroke="#22c55e" stroke-width="4" stroke-linecap="round"/>
        <line x1="165" y1="115" x2="190" y2="130" stroke="#22c55e" stroke-width="4" stroke-linecap="round"/>
        
        <!-- Shared electron pairs -->
        <g class="anim-oscillate-x">
          <circle cx="100" cy="122" r="4" fill="#f59e0b"/>
          <circle cx="106" cy="118" r="4" fill="#ec4899"/>
        </g>
        <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
          <circle cx="174" cy="118" r="4" fill="#f59e0b"/>
          <circle cx="180" cy="122" r="4" fill="#ec4899"/>
        </g>
        
        <!-- Lone pairs on oxygen -->
        <circle cx="125" cy="72" r="3" fill="#f59e0b"/>
        <circle cx="132" cy="68" r="3" fill="#f59e0b"/>
        <circle cx="148" cy="68" r="3" fill="#f59e0b"/>
        <circle cx="155" cy="72" r="3" fill="#f59e0b"/>
        
        <!-- Bond angle indicator -->
        <path d="M100 120 Q140 90 180 120" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,2" opacity="0.5"/>
        <text x="140" y="80" fill="currentColor" font-size="10" text-anchor="middle">104.5°</text>
        
        <!-- Labels -->
        <text x="100" y="175" fill="#22c55e" font-size="10" text-anchor="middle">Shared pair</text>
        <text x="140" y="45" fill="currentColor" font-size="10" text-anchor="middle">Lone pairs</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Two O–H covalent bonds formed by sharing electrons • Oxygen has 2 lone pairs • Bond angle 104.5°</p>
  </div>

  <div class="example-block">
    <h4>🔵 Example 4 – Carbon Dioxide (CO₂)</h4>
    <ul>
      <li>Carbon: 4 outer electrons</li>
      <li>Oxygen: 6 outer electrons (×2) → Two double bonds form (each O shares 2 pairs).</li>
      <li><strong>Displayed formula:</strong> O=C=O</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🔵 Example 5 – Ammonia (NH₃)</h4>
    <ul>
      <li>Nitrogen: 5 outer electrons</li>
      <li>Hydrogen: 1 outer electron (×3) → Three shared pairs of electrons.</li>
      <li><strong>Displayed formula:</strong> 
        <pre>    H
    |
H—N—H</pre>
      </li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Types of Covalent Structures</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Structure Type</th>
          <th>Description</th>
          <th>Example</th>
          <th>Bonds Between Molecules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Simple molecular</strong></td>
          <td>Small groups of atoms joined by covalent bonds</td>
          <td>H₂, O₂, H₂O, CH₄</td>
          <td>Weak forces (low melting point)</td>
        </tr>
        <tr>
          <td><strong>Giant covalent</strong></td>
          <td>Network of covalently bonded atoms</td>
          <td>Diamond, Graphite, SiO₂</td>
          <td>Strong bonds throughout (high melting point)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Point</h4>
    <p>In both types, covalent bonds are strong — the difference lies in the <strong>forces between molecules</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Properties of Simple Covalent Substances</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low melting/boiling points</td>
          <td>Weak intermolecular forces (forces between molecules) are easy to overcome.</td>
        </tr>
        <tr>
          <td>Do not conduct electricity</td>
          <td>No free electrons or ions to carry charge.</td>
        </tr>
        <tr>
          <td>Usually gases or liquids at room temp</td>
          <td>Molecules move freely; weak attractions.</td>
        </tr>
        <tr>
          <td>Insoluble in water (mostly)</td>
          <td>Non-polar molecules; water is polar.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Terms</h4>
    <ul>
      <li><strong>Covalent bond:</strong> strong attraction within molecule.</li>
      <li><strong>Intermolecular forces:</strong> weak attractions between molecules.</li>
    </ul>
    <p><strong>For exams:</strong> Always say "weak intermolecular forces" — not "weak covalent bonds."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Multiple Bonds</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Bond Type</th>
          <th>Number of Shared Electron Pairs</th>
          <th>Example</th>
          <th>Bond Representation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Single bond</td>
          <td>1</td>
          <td>H–Cl</td>
          <td>H–Cl</td>
        </tr>
        <tr>
          <td>Double bond</td>
          <td>2</td>
          <td>CO₂</td>
          <td>O=C=O</td>
        </tr>
        <tr>
          <td>Triple bond</td>
          <td>3</td>
          <td>N₂</td>
          <td>N≡N</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Remember</h4>
    <p>More shared pairs = <strong>stronger, shorter bond</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Giant Covalent (Macromolecular) Structures</h3>
  
  <div class="key-facts-block">
    <p>Some covalently bonded substances form giant 3D networks, not small molecules.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Structure</th>
          <th>Key Properties</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diamond</td>
          <td>Each carbon bonded to 4 others → tetrahedral lattice</td>
          <td>Very hard, very high melting point, no conductivity</td>
        </tr>
        <tr>
          <td>Graphite</td>
          <td>Each carbon bonded to 3 others → layers</td>
          <td>Conducts electricity (delocalised electrons), soft/slippery</td>
        </tr>
        <tr>
          <td>Silicon dioxide (SiO₂)</td>
          <td>Each Si bonded to 4 O atoms</td>
          <td>Hard, high melting point, insulator</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Important</h4>
    <p>These have no weak intermolecular forces — every atom is bonded covalently, making them solid and strong.</p>
  </div>
</div>
        `,
        canonical_keywords: ["covalent bonding", "shared electrons", "non-metals", "dot-and-cross diagram", "simple molecular", "giant covalent", "intermolecular forces", "multiple bonds"],
        practice_items: [
          {
            id: "covalent-1",
            prompt_template: "Explain what a covalent bond is and describe how it forms. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["shared pair", "electrons", "non-metals", "full outer shell", "nuclei", "attraction"]
          },
          {
            id: "covalent-2",
            prompt_template: "Explain why simple covalent substances have low melting and boiling points. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["weak", "intermolecular forces", "between molecules", "easy to overcome", "little energy"]
          }
        ]
      },
      {
        id: "2-1-5-metallic-bonding",
        title: "2.1.5 METALLIC BONDING",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is Metallic Bonding?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Metallic bonding occurs between metal atoms. It involves a <strong>giant lattice of positive metal ions</strong> surrounded by a <strong>sea of delocalised electrons</strong> that move freely throughout the structure.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>Metal atoms lose their outer electrons, forming positive ions. These electrons become <strong>delocalised</strong> (free to move). Strong electrostatic forces of attraction between the positive ions and the negative electrons hold the metal together.</p>
  </div>

  <div class="example-block">
    <h4>📘 Representation</h4>
    <p><strong>Metal ions:</strong> ⁺⁺⁺⁺⁺</p>
    <p><strong>Delocalised electrons:</strong> e⁻ e⁻ e⁻ e⁻</p>
    <p>🧠 These electrons act like glue, holding the lattice together.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Structure of Metals</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Giant Metallic Lattice</h4>
    <ul>
      <li>Atoms are arranged in regular layers.</li>
      <li>The structure extends in all directions (giant lattice).</li>
      <li>The delocalised electrons move freely between positive ions.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example – Sodium Metal (Na)</h4>
    <ul>
      <li>Each Na atom loses 1 outer electron → Na⁺ ion.</li>
      <li>Lost electrons become delocalised.</li>
      <li>The attraction between Na⁺ ions and delocalised electrons forms metallic bonds.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Key Properties of Metals</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>High melting and boiling points</td>
          <td>Strong electrostatic attraction between positive ions and delocalised electrons requires lots of energy to overcome.</td>
        </tr>
        <tr>
          <td>Good electrical conductivity</td>
          <td>Delocalised electrons move freely, carrying charge through the structure.</td>
        </tr>
        <tr>
          <td>Good thermal conductivity</td>
          <td>Free electrons transfer kinetic energy efficiently.</td>
        </tr>
        <tr>
          <td>Malleable (can be hammered into shape)</td>
          <td>Layers of ions can slide over each other while metallic bonds stay intact.</td>
        </tr>
        <tr>
          <td>Ductile (can be drawn into wires)</td>
          <td>Same reason — layers can move without breaking bonds.</td>
        </tr>
        <tr>
          <td>Shiny (lustrous)</td>
          <td>Delocalised electrons reflect light from surface.</td>
        </tr>
        <tr>
          <td>High density</td>
          <td>Atoms packed tightly in lattice.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Explanation of Metallic Bond Strength</h3>
  
  <!-- Animated Metallic Bonding Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔩 Metallic Bonding Structure (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="200" viewBox="0 0 320 200">
        <!-- Metal cation lattice -->
        <g>
          <!-- Row 1 -->
          <circle cx="60" cy="50" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="60" y="54" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="120" cy="50" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="120" y="54" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="180" cy="50" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="180" y="54" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="240" cy="50" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="240" y="54" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          
          <!-- Row 2 (offset) -->
          <circle cx="90" cy="100" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="90" y="104" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="150" cy="100" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="150" y="104" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="210" cy="100" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="210" y="104" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          
          <!-- Row 3 -->
          <circle cx="60" cy="150" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="60" y="154" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="120" cy="150" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="120" y="154" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="180" cy="150" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="180" y="154" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
          <circle cx="240" cy="150" r="18" fill="#6366f1" opacity="0.8"/>
          <text x="240" y="154" fill="white" font-size="10" text-anchor="middle" font-weight="bold">M⁺</text>
        </g>
        
        <!-- Sea of delocalised electrons - animated -->
        <g class="anim-brownian">
          <circle cx="45" cy="75" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-2">
          <circle cx="75" cy="65" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-3">
          <circle cx="105" cy="78" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian">
          <circle cx="135" cy="70" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-2">
          <circle cx="165" cy="80" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-3">
          <circle cx="195" cy="68" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian">
          <circle cx="225" cy="75" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-2">
          <circle cx="255" cy="82" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-3">
          <circle cx="55" cy="125" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian">
          <circle cx="85" cy="130" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-2">
          <circle cx="115" cy="120" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-3">
          <circle cx="145" cy="128" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian">
          <circle cx="175" cy="122" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-2">
          <circle cx="205" cy="132" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian-3">
          <circle cx="235" cy="118" r="4" fill="#f59e0b"/>
        </g>
        <g class="anim-brownian">
          <circle cx="265" cy="128" r="4" fill="#f59e0b"/>
        </g>
        
        <!-- Legend -->
        <rect x="260" y="10" width="55" height="55" fill="none" stroke="currentColor" stroke-width="1" rx="4" opacity="0.3"/>
        <circle cx="275" cy="25" r="6" fill="#6366f1"/>
        <text x="285" y="28" fill="currentColor" font-size="8">Metal ion</text>
        <circle cx="275" cy="45" r="4" fill="#f59e0b"/>
        <text x="285" y="48" fill="currentColor" font-size="8">Free e⁻</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Metal cations (M⁺) in a lattice with delocalised electrons moving freely between them</p>
  </div>

  <div class="key-facts-block">
    <p>The strength of metallic bonds depends on:</p>
    <ul>
      <li><strong>Number of delocalised electrons</strong> → more electrons = stronger bonding (e.g. Mg stronger than Na).</li>
      <li><strong>Size of the ions</strong> → smaller ions = stronger attraction (closer positive charge).</li>
      <li><strong>Charge on metal ion</strong> → higher charge = stronger bond (Al³⁺ > Mg²⁺ > Na⁺).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🔬 Trend Example</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Metal</th>
          <th>Outer Electrons</th>
          <th>Ion Charge</th>
          <th>Strength</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sodium (Na)</td>
          <td>1</td>
          <td>+1</td>
          <td>Weakest</td>
        </tr>
        <tr>
          <td>Magnesium (Mg)</td>
          <td>2</td>
          <td>+2</td>
          <td>Stronger</td>
        </tr>
        <tr>
          <td>Aluminium (Al)</td>
          <td>3</td>
          <td>+3</td>
          <td>Very strong</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Metals vs Non-Metals</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Metals</th>
          <th>Non-Metals</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bond Type</td>
          <td>Metallic</td>
          <td>Covalent / Ionic</td>
        </tr>
        <tr>
          <td>Conductivity</td>
          <td>Conduct electricity and heat</td>
          <td>Poor conductors (except graphite)</td>
        </tr>
        <tr>
          <td>Melting/Boiling Point</td>
          <td>High</td>
          <td>Often low (if molecular)</td>
        </tr>
        <tr>
          <td>Strength</td>
          <td>Strong, dense</td>
          <td>Brittle, weak (if solid)</td>
        </tr>
        <tr>
          <td>Malleability</td>
          <td>Malleable & ductile</td>
          <td>Brittle</td>
        </tr>
        <tr>
          <td>Appearance</td>
          <td>Shiny</td>
          <td>Dull</td>
        </tr>
        <tr>
          <td>Typical Elements</td>
          <td>Fe, Cu, Al</td>
          <td>S, O, Cl</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Point</h4>
    <p>The difference arises from the presence (metals) or absence (non-metals) of delocalised electrons.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Why Metals Conduct Electricity</h3>
  
  <div class="key-facts-block">
    <h4>🔋 In Detail</h4>
    <p>Metals contain delocalised electrons that can move freely.</p>
    <p>When voltage is applied:</p>
    <ul>
      <li>Electrons flow towards the positive terminal, carrying charge.</li>
      <li>This allows a current to pass through the entire metal.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💧 Even in Liquid (Molten) State</h4>
    <p>Metals conduct in both solid and liquid states, because delocalised electrons remain free to move.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Alloys</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>An alloy is a mixture of metals (or a metal and another element) that improves a metal's properties.</p>
  </div>

  <div class="key-facts-block">
    <h4>📘 Structure Explanation</h4>
    <ul>
      <li>Pure metals have regular layers of atoms → easy to slide → soft.</li>
      <li>Alloys contain different-sized atoms, which distort the layers, making it harder for them to slide → stronger and harder.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🔬 Common Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Alloy</th>
          <th>Composition</th>
          <th>Properties</th>
          <th>Uses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Steel</td>
          <td>Iron + carbon</td>
          <td>Strong, hard</td>
          <td>Construction, tools</td>
        </tr>
        <tr>
          <td>Brass</td>
          <td>Copper + zinc</td>
          <td>Hard, corrosion-resistant</td>
          <td>Musical instruments, fittings</td>
        </tr>
        <tr>
          <td>Bronze</td>
          <td>Copper + tin</td>
          <td>Tough, corrosion-resistant</td>
          <td>Medals, statues</td>
        </tr>
        <tr>
          <td>Duralumin</td>
          <td>Aluminium + copper + magnesium</td>
          <td>Strong, light</td>
          <td>Aircraft</td>
        </tr>
        <tr>
          <td>Solder</td>
          <td>Lead + tin</td>
          <td>Low melting point</td>
          <td>Joining metal parts</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Summary Sentence</h4>
    <p>"Alloys are harder than pure metals because the different-sized atoms distort the regular layers, preventing them from sliding."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Metals and Energy</h3>
  
  <div class="key-facts-block">
    <h4>🔋 Bonding Energy</h4>
    <p>Breaking metallic bonds requires large amounts of energy because of:</p>
    <ul>
      <li>Strong electrostatic attraction, and</li>
      <li>The extensive network of bonding throughout the structure.</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: ["metallic bonding", "delocalised electrons", "giant metallic lattice", "conductivity", "malleable", "ductile", "alloys"],
        practice_items: [
          {
            id: "metallic-1",
            prompt_template: "Describe the structure and bonding in metals. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["giant lattice", "positive ions", "delocalised electrons", "electrostatic forces", "sea of electrons"]
          },
          {
            id: "metallic-2",
            prompt_template: "Explain why metals conduct electricity. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["delocalised electrons", "free to move", "carry charge"]
          },
          {
            id: "metallic-3",
            prompt_template: "Explain why alloys are harder than pure metals. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["different sized atoms", "distort", "layers", "harder to slide", "irregular"]
          }
        ]
      },
      {
        id: "2-2-1-three-states-matter",
        title: "2.2.1 THE THREE STATES OF MATTER",
        type: "content",
        study_group: 3,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – The Particle Model and the Three States</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The particle model explains the properties and behaviour of solids, liquids and gases by describing how the particles are arranged and move, and how strong the forces of attraction are between them.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Ideas</h4>
    <ul>
      <li>All matter is made of tiny particles (atoms or molecules).</li>
      <li>Particles are in constant motion.</li>
      <li>The amount of energy they have determines their movement and state.</li>
      <li>Forces of attraction between particles vary depending on the state.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Particle Arrangement and Movement</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Solid</th>
          <th>Liquid</th>
          <th>Gas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Arrangement</td>
          <td>Regular, tightly packed</td>
          <td>Irregular, close together</td>
          <td>Random, far apart</td>
        </tr>
        <tr>
          <td>Movement</td>
          <td>Vibrate around fixed positions</td>
          <td>Move around each other</td>
          <td>Move freely in all directions</td>
        </tr>
        <tr>
          <td>Forces Between Particles</td>
          <td>Strong</td>
          <td>Moderate</td>
          <td>Very weak</td>
        </tr>
        <tr>
          <td>Energy of Particles</td>
          <td>Low</td>
          <td>Medium</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Shape</td>
          <td>Fixed shape</td>
          <td>No fixed shape</td>
          <td>No fixed shape</td>
        </tr>
        <tr>
          <td>Volume</td>
          <td>Fixed</td>
          <td>Fixed</td>
          <td>Can be compressed</td>
        </tr>
        <tr>
          <td>Density</td>
          <td>High</td>
          <td>Medium</td>
          <td>Low</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 In Summary</h4>
    <ul>
      <li><strong>Solids:</strong> Strong forces keep particles fixed.</li>
      <li><strong>Liquids:</strong> Particles can move, flow, and take shape of container.</li>
      <li><strong>Gases:</strong> Weak forces → high energy → fill available space.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Explaining Melting and Boiling Points</h3>
  
  <div class="key-facts-block">
    <h4>⚡ Key Principle</h4>
    <p>The melting point and boiling point of a substance depend on the <strong>strength of the forces between its particles</strong>.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Force Strength</th>
          <th>Example</th>
          <th>Melting/Boiling Point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Strong (e.g. ionic or covalent)</td>
          <td>Sodium chloride, diamond</td>
          <td>Very high</td>
        </tr>
        <tr>
          <td>Weak (e.g. simple molecules)</td>
          <td>Oxygen, water, methane</td>
          <td>Low</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>📘 Explanation</h4>
    <ul>
      <li>When heated, particles gain kinetic energy and move faster.</li>
      <li>When they have enough energy to overcome forces of attraction, a change of state occurs.</li>
      <li><strong>Stronger forces → more energy needed → higher melting and boiling points.</strong></li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Predicting States of Matter</h3>
  
  <div class="key-facts-block">
    <h4>🔍 How to Predict</h4>
    <p>If you know the melting point and boiling point, you can predict the state at a given temperature.</p>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Temperature vs. Points</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Below melting point</td>
          <td>Solid</td>
        </tr>
        <tr>
          <td>Between melting and boiling point</td>
          <td>Liquid</td>
        </tr>
        <tr>
          <td>Above boiling point</td>
          <td>Gas</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🟢 Example – Water</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Temperature</th>
          <th>State</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>-10°C</td>
          <td>Solid</td>
          <td>Below 0°C (melting point)</td>
        </tr>
        <tr>
          <td>25°C</td>
          <td>Liquid</td>
          <td>Between 0°C and 100°C</td>
        </tr>
        <tr>
          <td>120°C</td>
          <td>Gas</td>
          <td>Above 100°C (boiling point)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>AQA often gives melting and boiling data — you must state why (use phrases like "particles have enough energy to overcome forces").</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Energy Transfers in Changes of State</h3>
  
  <div class="key-facts-block">
    <h4>🔋 When Heating (Endothermic)</h4>
    <ul>
      <li>Energy is absorbed.</li>
      <li>Particles gain kinetic energy → move faster.</li>
      <li>Forces weaken → particles move further apart.</li>
      <li>Solid → liquid → gas.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>❄️ When Cooling (Exothermic)</h4>
    <ul>
      <li>Energy is released.</li>
      <li>Particles lose kinetic energy → move slower.</li>
      <li>Forces strengthen → particles move closer together.</li>
      <li>Gas → liquid → solid.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Important Note</h4>
    <p>Changes of state are <strong>physical, not chemical</strong> — no new substance forms.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Particle Model and Limitations</h3>
  
  <div class="key-facts-block">
    <h4>✅ What the Model Shows</h4>
    <ul>
      <li>General particle arrangement.</li>
      <li>Relative movement and energy.</li>
      <li>Strength of forces in each state.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>⚠️ What the Model Doesn't Show</h4>
    <ul>
      <li>Real particle sizes — atoms are not solid spheres.</li>
      <li>The spaces between particles — scale not accurate.</li>
      <li>The forces between particles — can't see attraction.</li>
      <li>The dynamic nature of particles — they constantly move and vibrate.</li>
    </ul>
  </div>

  <div class="note-block">
    <h4>🔬 Advanced Note</h4>
    <p>The particle model is simplified; in reality:</p>
    <ul>
      <li>Atoms have electron clouds, not hard edges.</li>
      <li>Forces vary continuously, not at set distances.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Particle Model Diagrams (Visual Descriptions)</h3>
  
  <div class="key-facts-block">
    <h4>📘 Solid</h4>
    <ul>
      <li>Regular pattern, close-packed particles.</li>
      <li>Vibrating around fixed positions.</li>
      <li>Strong attractions.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📘 Liquid</h4>
    <ul>
      <li>Close together but randomly arranged.</li>
      <li>Move past each other.</li>
      <li>Moderate attractions.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📘 Gas</h4>
    <ul>
      <li>Far apart, random motion.</li>
      <li>Weak attractions.</li>
      <li>Frequent collisions, easily compressed.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Important Keywords</h4>
    <p>You must be able to recognise and describe these diagrams using the keywords: <strong>regular, random, spacing, movement, energy, and forces</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Energy and Changes of State</h3>
  
  <div class="key-facts-block">
    <h4>⚡ Key Energy Concepts</h4>
    <p>When particles change state, energy goes into or out of <strong>breaking or forming intermolecular forces</strong>, not into changing temperature.</p>
    <p>During melting or boiling, <strong>temperature stays constant</strong> — even while energy is being added.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Important Words:</h4>
    <ul>
      <li><strong>Endothermic</strong> – absorbs energy (melting, boiling, sublimation).</li>
      <li><strong>Exothermic</strong> – releases energy (freezing, condensation, deposition).</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 9 – Using the Particle Model to Explain Properties</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Solid</th>
          <th>Liquid</th>
          <th>Gas</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Can flow?</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Fixed volume?</td>
          <td>✅</td>
          <td>✅</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Fixed shape?</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>Compressible?</td>
          <td>❌</td>
          <td>❌</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>Conduct heat easily?</td>
          <td>Often</td>
          <td>Moderate</td>
          <td>Poor</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🧠 Example Applications:</h4>
    <ul>
      <li>Liquids are used as lubricants because particles can move.</li>
      <li>Gases are easily compressed for transport (e.g. oxygen tanks).</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: ["particle model", "states of matter", "solid", "liquid", "gas", "forces", "melting point", "boiling point", "endothermic", "exothermic"],
        practice_items: [
          {
            id: "states-1",
            prompt_template: "Describe the arrangement and movement of particles in solids, liquids, and gases. [6 marks]",
            marks: 6,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["solid", "regular", "vibrate", "liquid", "move around", "gas", "random", "freely", "forces"]
          },
          {
            id: "states-2",
            prompt_template: "Explain why substances with strong forces between particles have high melting points. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["strong forces", "energy", "overcome", "break", "high temperature"]
          }
        ]
      },
      {
        id: "2-2-3-simple-covalent",
        title: "2.2.3 COVALENT SUBSTANCES (SIMPLE MOLECULES)",
        type: "content",
        study_group: 3,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Structure and Bonding in Simple Molecules</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A simple covalent substance (or simple molecular substance) is made of small molecules containing a few atoms joined by <strong>strong covalent bonds within the molecule</strong>. However, the forces between molecules (called intermolecular forces) are <strong>weak</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <ul>
      <li>Covalent bonds hold the atoms together <strong>inside</strong> each molecule.</li>
      <li>Intermolecular forces act <strong>between</strong> molecules, not inside them.</li>
      <li>The weak intermolecular forces determine the physical properties (melting, boiling, state).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Examples of Simple Molecular Substances</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Formula</th>
          <th>Bonds Inside Molecule</th>
          <th>Forces Between Molecules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hydrogen</td>
          <td>H₂</td>
          <td>Covalent</td>
          <td>Weak</td>
        </tr>
        <tr>
          <td>Oxygen</td>
          <td>O₂</td>
          <td>Covalent</td>
          <td>Weak</td>
        </tr>
        <tr>
          <td>Water</td>
          <td>H₂O</td>
          <td>Covalent</td>
          <td>Weak hydrogen bonds</td>
        </tr>
        <tr>
          <td>Methane</td>
          <td>CH₄</td>
          <td>Covalent</td>
          <td>Weak</td>
        </tr>
        <tr>
          <td>Carbon dioxide</td>
          <td>CO₂</td>
          <td>Covalent</td>
          <td>Weak</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam tip</h4>
    <p>Always refer to "<strong>weak intermolecular forces</strong>," not "weak covalent bonds." Covalent bonds are strong, but the forces between molecules are weak.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Melting and Boiling Points</h3>
  
  <div class="key-facts-block">
    <h4>📘 Explanation</h4>
    <p>Simple molecular substances have <strong>low melting and boiling points</strong> because:</p>
    <p>Only <strong>weak intermolecular forces</strong> need to be overcome to melt or boil the substance.</p>
    <p>Covalent bonds inside molecules are strong and <strong>do not break</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>⚡ Key Detail</h4>
    <p>When you heat a covalent substance:</p>
    <ul>
      <li>The <strong>molecules</strong> separate, not the atoms.</li>
      <li>The <strong>intermolecular forces</strong> break, not the covalent bonds.</li>
    </ul>
  </div>

  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Example</th>
          <th>Forces Between Molecules</th>
          <th>Melting/Boiling Point</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oxygen (O₂)</td>
          <td>Weak</td>
          <td>Very low (gas at room temp)</td>
        </tr>
        <tr>
          <td>Water (H₂O)</td>
          <td>Moderate (hydrogen bonding)</td>
          <td>0°C / 100°C</td>
        </tr>
        <tr>
          <td>Carbon dioxide (CO₂)</td>
          <td>Weak</td>
          <td>Sublimes at –78°C</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Remember</h4>
    <p>The stronger the intermolecular forces, the higher the melting/boiling point.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Electrical Conductivity</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Do not conduct electricity</td>
          <td>Molecules have no free electrons or ions to carry charge.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <p>Even if dissolved in water, they usually do not conduct, because molecules remain neutral (except acids or polar molecules).</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Solubility and States</h3>
  
  <div class="key-facts-block">
    <h4>💧 Solubility</h4>
    <ul>
      <li>Many covalent substances are <strong>insoluble in water</strong>, but may dissolve in non-polar solvents (like petrol).</li>
      <li>Some polar covalent molecules (e.g. sugar, ethanol) dissolve in water due to hydrogen bonding.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📘 Common Physical States at Room Temperature</h4>
    <p>Most simple molecular substances are <strong>gases or liquids</strong> at room temperature due to weak intermolecular forces.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Forces Between Molecules</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Intermolecular Forces</h4>
    <ul>
      <li><strong>Van der Waals (induced dipole)</strong> – weakest; temporary attraction.</li>
      <li><strong>Permanent dipole-dipole</strong> – between slightly charged polar molecules.</li>
      <li><strong>Hydrogen bonds</strong> – strongest type; between H and F, O, or N.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Order of Strength</h4>
    <p>Hydrogen bonds > Dipole-dipole > Van der Waals.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example</h4>
    <ul>
      <li>Water has <strong>hydrogen bonds</strong> → relatively high boiling point.</li>
      <li>Oxygen has <strong>Van der Waals</strong> → gas at room temp.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Examples of Simple Molecular Structures</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Molecule</th>
          <th>Description</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>H₂</td>
          <td>Two atoms sharing one pair of electrons</td>
          <td>Very small molecule</td>
        </tr>
        <tr>
          <td>O₂</td>
          <td>Two atoms sharing two pairs (double bond)</td>
          <td>Gas, low boiling point</td>
        </tr>
        <tr>
          <td>H₂O</td>
          <td>Two H atoms bonded to O (bent shape)</td>
          <td>Hydrogen bonding present</td>
        </tr>
        <tr>
          <td>CH₄</td>
          <td>Carbon with four single bonds to H</td>
          <td>Tetrahedral shape</td>
        </tr>
        <tr>
          <td>CO₂</td>
          <td>Carbon with two double bonds to O</td>
          <td>Linear molecule, no H-bonds</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Explaining Properties with Forces</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Low melting and boiling points</td>
          <td>Weak intermolecular forces.</td>
        </tr>
        <tr>
          <td>Do not conduct electricity</td>
          <td>No charged particles.</td>
        </tr>
        <tr>
          <td>Usually gases or liquids</td>
          <td>Weak forces between molecules.</td>
        </tr>
        <tr>
          <td>Soft if solid</td>
          <td>Weak attractions between layers of molecules.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam Tip</h4>
    <p>When answering "Explain why…" questions: always say "<strong>because only weak intermolecular forces need to be overcome</strong>."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Key Differences Between Simple and Giant Covalent Structures</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Simple Covalent</th>
          <th>Giant Covalent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bonds</td>
          <td>Strong covalent bonds within molecules, weak between</td>
          <td>Strong covalent bonds throughout</td>
        </tr>
        <tr>
          <td>Melting/Boiling Point</td>
          <td>Low</td>
          <td>Very high</td>
        </tr>
        <tr>
          <td>Conductivity</td>
          <td>None</td>
          <td>None (except graphite)</td>
        </tr>
        <tr>
          <td>State at Room Temp</td>
          <td>Often gas or liquid</td>
          <td>Solid</td>
        </tr>
        <tr>
          <td>Example</td>
          <td>H₂O, CO₂, CH₄</td>
          <td>Diamond, Graphite, SiO₂</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 9 – Explaining Trends</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Trend</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>As molecules get larger</td>
          <td>→ More electrons → stronger intermolecular forces → higher melting/boiling points</td>
        </tr>
        <tr>
          <td>Small molecules</td>
          <td>→ Weak forces → gases</td>
        </tr>
        <tr>
          <td>Medium molecules</td>
          <td>→ Stronger forces → liquids</td>
        </tr>
        <tr>
          <td>Large molecules</td>
          <td>→ Even stronger → solids</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 AQA Example</h4>
    <p>AQA may ask why iodine is a solid but fluorine is a gas — answer: <strong>because iodine molecules are larger and have stronger intermolecular forces</strong>.</p>
  </div>
</div>
        `,
        canonical_keywords: ["simple molecular", "covalent substances", "intermolecular forces", "low melting point", "non-conductor", "Van der Waals", "hydrogen bonds"],
        practice_items: [
          {
            id: "simple-covalent-1",
            prompt_template: "Explain why simple molecular substances have low melting and boiling points. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["weak", "intermolecular forces", "between molecules", "little energy", "overcome", "break"]
          },
          {
            id: "simple-covalent-2",
            prompt_template: "Explain why simple molecular substances do not conduct electricity. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["no free electrons", "no ions", "no charged particles", "carry charge"]
          }
        ]
      },
      {
        id: "2-2-4-giant-covalent",
        title: "2.2.4 GIANT COVALENT STRUCTURES (MACROMOLECULES)",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Are Giant Covalent Structures?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A giant covalent structure (also known as a macromolecule) is a huge 3D network of atoms bonded together by <strong>strong covalent bonds throughout the structure</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Facts</h4>
    <ul>
      <li>Found in some non-metals and compounds of non-metals (like carbon and silicon dioxide).</li>
      <li>Contain no weak intermolecular forces — all atoms are connected by covalent bonds.</li>
      <li>Require large amounts of energy to break → very high melting and boiling points.</li>
      <li>Usually solids at room temperature.</li>
      <li>Generally don't conduct electricity (except graphite).</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Diamond (Carbon)</h3>
  
  <div class="diagram-block hover-pause">
    <h4>💎 Diamond Structure</h4>
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Tetrahedral Diamond Lattice -->
      <!-- Central Carbon -->
      <circle cx="200" cy="150" r="18" fill="#22d3ee" stroke="#67e8f9" stroke-width="2">
        <animate attributeName="r" values="18;20;18" dur="2s" repeatCount="indefinite"/>
      </circle>
      <text x="200" y="155" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">C</text>
      
      <!-- Top Carbon -->
      <circle cx="200" cy="60" r="16" fill="#22d3ee" stroke="#67e8f9" stroke-width="2"/>
      <text x="200" y="65" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">C</text>
      <line x1="200" y1="132" x2="200" y2="76" stroke="#a5b4fc" stroke-width="4"/>
      
      <!-- Bottom Left Carbon -->
      <circle cx="120" cy="220" r="16" fill="#22d3ee" stroke="#67e8f9" stroke-width="2"/>
      <text x="120" y="225" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">C</text>
      <line x1="187" y1="163" x2="133" y2="207" stroke="#a5b4fc" stroke-width="4"/>
      
      <!-- Bottom Right Carbon -->
      <circle cx="280" cy="220" r="16" fill="#22d3ee" stroke="#67e8f9" stroke-width="2"/>
      <text x="280" y="225" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">C</text>
      <line x1="213" y1="163" x2="267" y2="207" stroke="#a5b4fc" stroke-width="4"/>
      
      <!-- Front Carbon -->
      <circle cx="280" cy="100" r="16" fill="#22d3ee" stroke="#67e8f9" stroke-width="2"/>
      <text x="280" y="105" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">C</text>
      <line x1="216" y1="140" x2="264" y2="112" stroke="#a5b4fc" stroke-width="4"/>
      
      <!-- Back Carbon (slightly faded for 3D effect) -->
      <circle cx="120" cy="100" r="16" fill="#22d3ee" opacity="0.7" stroke="#67e8f9" stroke-width="2"/>
      <text x="120" y="105" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle" opacity="0.7">C</text>
      <line x1="184" y1="140" x2="136" y2="112" stroke="#a5b4fc" stroke-width="4" opacity="0.7"/>
      
      <!-- Extended network hints -->
      <circle cx="200" cy="10" r="10" fill="#22d3ee" opacity="0.4"/>
      <line x1="200" y1="44" x2="200" y2="20" stroke="#a5b4fc" stroke-width="3" opacity="0.4"/>
      
      <circle cx="70" cy="260" r="10" fill="#22d3ee" opacity="0.4"/>
      <line x1="107" y1="232" x2="80" y2="252" stroke="#a5b4fc" stroke-width="3" opacity="0.4"/>
      
      <circle cx="330" cy="260" r="10" fill="#22d3ee" opacity="0.4"/>
      <line x1="293" y1="232" x2="320" y2="252" stroke="#a5b4fc" stroke-width="3" opacity="0.4"/>
      
      <!-- Labels -->
      <text x="320" y="30" fill="#94a3b8" font-size="10">Each C bonded</text>
      <text x="320" y="45" fill="#94a3b8" font-size="10">to 4 others</text>
      
      <text x="30" y="270" fill="#67e8f9" font-size="10">Tetrahedral</text>
      <text x="30" y="285" fill="#67e8f9" font-size="10">arrangement</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #22d3ee; border-radius: 50%;"></span> Carbon atom</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #a5b4fc;"></span> Strong covalent bond</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔬 Structure</h4>
    <ul>
      <li>Each carbon atom forms four covalent bonds to other carbon atoms.</li>
      <li>Atoms arranged in a tetrahedral (3D) lattice.</li>
      <li>Bonds are identical and extremely strong.</li>
      <li>No free electrons — all used in bonding.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💎 Properties and Explanations</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very hard</td>
          <td>Each atom strongly bonded to four others; rigid 3D network</td>
        </tr>
        <tr>
          <td>Very high melting point</td>
          <td>Many strong covalent bonds throughout structure</td>
        </tr>
        <tr>
          <td>Does not conduct electricity</td>
          <td>No free electrons or ions</td>
        </tr>
        <tr>
          <td>Transparent</td>
          <td>Regular structure allows light to pass through</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Graphite (Carbon)</h3>
  
  <div class="diagram-block hover-pause">
    <h4>✏️ Graphite Structure</h4>
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Top Layer -->
      <g transform="translate(50, 40)">
        <!-- Hexagonal layer 1 -->
        <polygon points="60,0 120,0 150,35 120,70 60,70 30,35" fill="none" stroke="#64748b" stroke-width="2"/>
        <polygon points="120,0 180,0 210,35 180,70 120,70 90,35" fill="none" stroke="#64748b" stroke-width="2"/>
        <polygon points="60,70 120,70 150,105 120,140 60,140 30,105" fill="none" stroke="#64748b" stroke-width="2"/>
        <polygon points="120,70 180,70 210,105 180,140 120,140 90,105" fill="none" stroke="#64748b" stroke-width="2"/>
        
        <!-- Carbon atoms layer 1 -->
        <circle cx="60" cy="0" r="8" fill="#64748b"/>
        <circle cx="120" cy="0" r="8" fill="#64748b"/>
        <circle cx="180" cy="0" r="8" fill="#64748b"/>
        <circle cx="30" cy="35" r="8" fill="#64748b"/>
        <circle cx="90" cy="35" r="8" fill="#64748b"/>
        <circle cx="150" cy="35" r="8" fill="#64748b"/>
        <circle cx="210" cy="35" r="8" fill="#64748b"/>
        <circle cx="60" cy="70" r="8" fill="#64748b"/>
        <circle cx="120" cy="70" r="8" fill="#64748b"/>
        <circle cx="180" cy="70" r="8" fill="#64748b"/>
      </g>
      
      <!-- Middle Layer (main) -->
      <g transform="translate(70, 100)">
        <!-- Hexagonal layer 2 -->
        <polygon points="60,0 120,0 150,35 120,70 60,70 30,35" fill="none" stroke="#22d3ee" stroke-width="3"/>
        <polygon points="120,0 180,0 210,35 180,70 120,70 90,35" fill="none" stroke="#22d3ee" stroke-width="3"/>
        <polygon points="60,70 120,70 150,105 120,140 60,140 30,105" fill="none" stroke="#22d3ee" stroke-width="3"/>
        <polygon points="120,70 180,70 210,105 180,140 120,140 90,105" fill="none" stroke="#22d3ee" stroke-width="3"/>
        
        <!-- Carbon atoms layer 2 -->
        <circle cx="60" cy="0" r="10" fill="#22d3ee"/>
        <circle cx="120" cy="0" r="10" fill="#22d3ee"/>
        <circle cx="180" cy="0" r="10" fill="#22d3ee"/>
        <circle cx="30" cy="35" r="10" fill="#22d3ee"/>
        <circle cx="90" cy="35" r="10" fill="#22d3ee"/>
        <circle cx="150" cy="35" r="10" fill="#22d3ee"/>
        <circle cx="210" cy="35" r="10" fill="#22d3ee"/>
        <circle cx="60" cy="70" r="10" fill="#22d3ee"/>
        <circle cx="120" cy="70" r="10" fill="#22d3ee"/>
        <circle cx="180" cy="70" r="10" fill="#22d3ee"/>
        
        <!-- Delocalised electrons -->
        <circle cx="90" cy="25" r="3" fill="#fbbf24">
          <animate attributeName="cx" values="90;150;210;150;90" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="25;35;25;35;25" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="120" cy="50" r="3" fill="#fbbf24">
          <animate attributeName="cx" values="120;60;30;60;120" dur="2.5s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="50;70;105;70;50" dur="2.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Bottom Layer -->
      <g transform="translate(90, 160)">
        <!-- Hexagonal layer 3 -->
        <polygon points="60,0 120,0 150,35 120,70 60,70 30,35" fill="none" stroke="#475569" stroke-width="2"/>
        <polygon points="120,0 180,0 210,35 180,70 120,70 90,35" fill="none" stroke="#475569" stroke-width="2"/>
        
        <!-- Carbon atoms layer 3 -->
        <circle cx="60" cy="0" r="8" fill="#475569"/>
        <circle cx="120" cy="0" r="8" fill="#475569"/>
        <circle cx="180" cy="0" r="8" fill="#475569"/>
        <circle cx="30" cy="35" r="8" fill="#475569"/>
        <circle cx="90" cy="35" r="8" fill="#475569"/>
        <circle cx="150" cy="35" r="8" fill="#475569"/>
        <circle cx="210" cy="35" r="8" fill="#475569"/>
      </g>
      
      <!-- Sliding arrow -->
      <path d="M 340 120 L 360 120 L 360 180 L 340 180" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#slideArrow)">
        <animate attributeName="d" values="M 340 120 L 360 120 L 360 180 L 340 180;M 340 125 L 360 125 L 360 185 L 340 185;M 340 120 L 360 120 L 360 180 L 340 180" dur="2s" repeatCount="indefinite"/>
      </path>
      <text x="345" y="155" fill="#ef4444" font-size="9">Layers</text>
      <text x="350" y="168" fill="#ef4444" font-size="9">slide</text>
      
      <defs>
        <marker id="slideArrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L0,8 L8,4 z" fill="#ef4444"/>
        </marker>
      </defs>
      
      <!-- Labels -->
      <text x="20" y="60" fill="#64748b" font-size="9">Layer 1</text>
      <text x="20" y="140" fill="#22d3ee" font-size="9">Layer 2</text>
      <text x="20" y="200" fill="#475569" font-size="9">Layer 3</text>
      
      <text x="20" y="270" fill="#fbbf24" font-size="9">e⁻ = delocalised</text>
      <text x="20" y="285" fill="#fbbf24" font-size="9">electrons</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #22d3ee; border-radius: 50%;"></span> Carbon atoms</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #fbbf24; border-radius: 50%;"></span> Delocalised electrons</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #ef4444;"></span> Layers can slide</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔬 Structure</h4>
    <ul>
      <li>Each carbon atom forms three covalent bonds → forms flat hexagonal layers.</li>
      <li>Each atom has one delocalised electron that moves freely between layers.</li>
      <li>Layers held together by weak intermolecular forces → can slide over each other easily.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💎 Properties and Explanations</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Soft and slippery</td>
          <td>Layers can slide due to weak forces between them.</td>
        </tr>
        <tr>
          <td>Good conductor of electricity and heat</td>
          <td>Delocalised electrons move freely between layers.</td>
        </tr>
        <tr>
          <td>High melting point</td>
          <td>Strong covalent bonds in layers require a lot of energy to break.</td>
        </tr>
        <tr>
          <td>Less dense than diamond</td>
          <td>Layers are far apart.</td>
        </tr>
        <tr>
          <td>Opaque</td>
          <td>Free electrons absorb light.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🧠 Uses</h4>
    <ul>
      <li>Electrodes (good conductor).</li>
      <li>Lubricants (layers slide easily).</li>
      <li>Pencils (layers flake off onto paper).</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Graphene (Single Layer of Graphite)</h3>
  
  <div class="diagram-block hover-pause">
    <h4>🔬 Graphene Structure</h4>
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Single hexagonal layer -->
      <g transform="translate(50, 50)">
        <!-- Row 1 -->
        <polygon points="30,0 60,0 75,26 60,52 30,52 15,26" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="60,0 90,0 105,26 90,52 60,52 45,26" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="90,0 120,0 135,26 120,52 90,52 75,26" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="120,0 150,0 165,26 150,52 120,52 105,26" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="150,0 180,0 195,26 180,52 150,52 135,26" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="180,0 210,0 225,26 210,52 180,52 165,26" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="210,0 240,0 255,26 240,52 210,52 195,26" fill="none" stroke="#10b981" stroke-width="3"/>
        
        <!-- Row 2 -->
        <polygon points="45,52 75,52 90,78 75,104 45,104 30,78" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="75,52 105,52 120,78 105,104 75,104 60,78" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="105,52 135,52 150,78 135,104 105,104 90,78" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="135,52 165,52 180,78 165,104 135,104 120,78" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="165,52 195,52 210,78 195,104 165,104 150,78" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="195,52 225,52 240,78 225,104 195,104 180,78" fill="none" stroke="#10b981" stroke-width="3"/>
        
        <!-- Row 3 -->
        <polygon points="30,104 60,104 75,130 60,156 30,156 15,130" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="60,104 90,104 105,130 90,156 60,156 45,130" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="90,104 120,104 135,130 120,156 90,156 75,130" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="120,104 150,104 165,130 150,156 120,156 105,130" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="150,104 180,104 195,130 180,156 150,156 135,130" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="180,104 210,104 225,130 210,156 180,156 165,130" fill="none" stroke="#10b981" stroke-width="3"/>
        <polygon points="210,104 240,104 255,130 240,156 210,156 195,130" fill="none" stroke="#10b981" stroke-width="3"/>
        
        <!-- Carbon atoms at vertices -->
        <circle cx="30" cy="0" r="6" fill="#10b981"/>
        <circle cx="60" cy="0" r="6" fill="#10b981"/>
        <circle cx="90" cy="0" r="6" fill="#10b981"/>
        <circle cx="120" cy="0" r="6" fill="#10b981"/>
        <circle cx="150" cy="0" r="6" fill="#10b981"/>
        <circle cx="180" cy="0" r="6" fill="#10b981"/>
        <circle cx="210" cy="0" r="6" fill="#10b981"/>
        <circle cx="240" cy="0" r="6" fill="#10b981"/>
        
        <circle cx="15" cy="26" r="6" fill="#10b981"/>
        <circle cx="45" cy="26" r="6" fill="#10b981"/>
        <circle cx="75" cy="26" r="6" fill="#10b981"/>
        <circle cx="105" cy="26" r="6" fill="#10b981"/>
        <circle cx="135" cy="26" r="6" fill="#10b981"/>
        <circle cx="165" cy="26" r="6" fill="#10b981"/>
        <circle cx="195" cy="26" r="6" fill="#10b981"/>
        <circle cx="225" cy="26" r="6" fill="#10b981"/>
        <circle cx="255" cy="26" r="6" fill="#10b981"/>
        
        <!-- Delocalised electrons moving across -->
        <circle cx="60" cy="30" r="4" fill="#fbbf24">
          <animate attributeName="cx" values="60;120;180;240;180;120;60" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="150" cy="80" r="4" fill="#fbbf24">
          <animate attributeName="cx" values="150;90;30;90;150;210;150" dur="3.5s" repeatCount="indefinite"/>
        </circle>
        <circle cx="100" cy="130" r="4" fill="#fbbf24">
          <animate attributeName="cx" values="100;160;220;160;100;40;100" dur="4.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Thickness indicator -->
      <line x1="340" y1="70" x2="340" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
      <line x1="335" y1="125" x2="345" y2="125" stroke="#f472b6" stroke-width="3"/>
      <text x="350" y="128" fill="#f472b6" font-size="9">1 atom thick!</text>
      
      <!-- Labels -->
      <text x="20" y="230" fill="#10b981" font-size="10">Hexagonal honeycomb pattern</text>
      <text x="250" y="230" fill="#fbbf24" font-size="10">e⁻ move freely</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #10b981; border-radius: 50%;"></span> Carbon atoms</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #10b981;"></span> Covalent bonds</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #fbbf24; border-radius: 50%;"></span> Delocalised electrons</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔬 Structure</h4>
    <ul>
      <li>A single layer of graphite → one atom thick.</li>
      <li>Atoms arranged in a hexagonal pattern.</li>
      <li>Contains delocalised electrons that move across the layer.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💎 Properties</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very strong</td>
          <td>Each carbon bonded to three others in a sheet.</td>
        </tr>
        <tr>
          <td>Conducts electricity</td>
          <td>Delocalised electrons can move freely.</td>
        </tr>
        <tr>
          <td>Lightweight and flexible</td>
          <td>Single atomic layer, extremely thin.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🧠 Uses</h4>
    <ul>
      <li>Flexible electronics.</li>
      <li>Lightweight composite materials.</li>
      <li>Conductive coatings.</li>
      <li>Medical sensors.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Silicon Dioxide (SiO₂)</h3>
  
  <div class="key-facts-block">
    <h4>🔬 Structure</h4>
    <ul>
      <li>Each silicon atom covalently bonded to four oxygen atoms.</li>
      <li>Each oxygen atom bonded to two silicon atoms.</li>
      <li>Giant covalent lattice, similar to diamond.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💎 Properties and Explanations</h4>
    <ul>
      <li><strong>High melting and boiling point:</strong> Strong covalent bonds throughout structure.</li>
      <li><strong>Hard:</strong> Strong bonds between silicon and oxygen.</li>
      <li><strong>Insoluble in water:</strong> No attraction to polar molecules.</li>
      <li><strong>Does not conduct electricity:</strong> No free electrons or ions.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📘 Common Names</h4>
    <ul>
      <li>Also known as silica or quartz.</li>
      <li>Main component of sand and glass.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Comparing Giant Covalent Structures</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Structure</th>
          <th>Type of Bonds</th>
          <th>Conductivity</th>
          <th>Hardness</th>
          <th>Melting Point</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diamond</td>
          <td>C–C single bonds (4 per atom)</td>
          <td>None</td>
          <td>Extremely hard</td>
          <td>Very high</td>
          <td>Used in tools</td>
        </tr>
        <tr>
          <td>Graphite</td>
          <td>3 bonds per atom; layers with delocalised electrons</td>
          <td>Yes</td>
          <td>Soft/slippery</td>
          <td>Very high</td>
          <td>Used in electrodes, pencils</td>
        </tr>
        <tr>
          <td>Graphene</td>
          <td>3 bonds per atom; single sheet</td>
          <td>Yes</td>
          <td>Very strong</td>
          <td>Very high</td>
          <td>Used in electronics</td>
        </tr>
        <tr>
          <td>Silicon Dioxide</td>
          <td>Si–O covalent bonds</td>
          <td>None</td>
          <td>Hard</td>
          <td>Very high</td>
          <td>Component of glass, sand</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Why Giant Covalent Substances Have High Melting Points</h3>
  
  <div class="key-facts-block">
    <h4>📘 Explanation</h4>
    <ul>
      <li>Covalent bonds are very strong → require a lot of energy to break.</li>
      <li>Because the structure is giant, many bonds must be broken.</li>
      <li>Therefore, melting and boiling points are very high.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>📝 The key AQA phrase:</h4>
    <p>"Giant covalent structures have high melting and boiling points because of the <strong>strong covalent bonds that must be broken</strong> to change state."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Conductivity in Giant Covalent Structures</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Conductivity</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diamond</td>
          <td>❌</td>
          <td>No free electrons.</td>
        </tr>
        <tr>
          <td>Graphite</td>
          <td>✅</td>
          <td>Delocalised electrons move freely between layers.</td>
        </tr>
        <tr>
          <td>Graphene</td>
          <td>✅</td>
          <td>Delocalised electrons move across sheet.</td>
        </tr>
        <tr>
          <td>Silicon dioxide</td>
          <td>❌</td>
          <td>No delocalised electrons.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Remember</h4>
    <p>Always specify that conductivity comes from delocalised electrons, not ions.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 9 – Strength and Uses</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Key Property</th>
          <th>Common Uses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Diamond</td>
          <td>Extremely hard</td>
          <td>Cutting, drilling, jewellery</td>
        </tr>
        <tr>
          <td>Graphite</td>
          <td>Conductive, slippery</td>
          <td>Electrodes, lubricants, pencils</td>
        </tr>
        <tr>
          <td>Graphene</td>
          <td>Strong, conductive, light</td>
          <td>Electronics, composites</td>
        </tr>
        <tr>
          <td>Silicon dioxide</td>
          <td>Hard, transparent</td>
          <td>Glass, ceramics, sand</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: ["giant covalent", "macromolecule", "diamond", "graphite", "graphene", "silicon dioxide", "high melting point", "delocalised electrons"],
        practice_items: [
          {
            id: "giant-covalent-1",
            prompt_template: "Explain why diamond is very hard and has a very high melting point. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["four", "covalent bonds", "carbon atom", "strong", "giant structure", "energy", "break"]
          },
          {
            id: "giant-covalent-2",
            prompt_template: "Explain why graphite conducts electricity but diamond does not. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["graphite", "delocalised electrons", "free to move", "diamond", "no free electrons", "all electrons in bonds"]
          }
        ]
      },
      {
        id: "2-3-1-diamond",
        title: "2.3.1 DIAMOND",
        type: "content",
        study_group: 5,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Structure of Diamond</h3>
  
  <div class="key-facts-block">
    <h4>📘 Description</h4>
    <ul>
      <li>Diamond is a <strong>giant covalent structure</strong> (a type of macromolecule).</li>
      <li>It is made entirely of carbon atoms.</li>
      <li>Each carbon atom is covalently bonded to <strong>four other carbon atoms</strong>.</li>
      <li>These bonds form a <strong>tetrahedral 3D lattice</strong> (a pyramid-like arrangement).</li>
      <li>All bonds are identical and very strong, extending throughout the entire crystal.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Point:</h4>
    <p>There are <strong>no layers, no weak forces, and no free electrons</strong> in diamond. Every atom is linked to the structure by strong covalent bonds in all directions.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Properties of Diamond</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very hard</td>
          <td>Hardest known natural material.</td>
        </tr>
        <tr>
          <td>Very high melting point</td>
          <td>Requires huge energy to break the bonds.</td>
        </tr>
        <tr>
          <td>Does not conduct electricity</td>
          <td>No delocalised (free) electrons or ions.</td>
        </tr>
        <tr>
          <td>Transparent and shiny</td>
          <td>Strong bonding → light passes through cleanly.</td>
        </tr>
        <tr>
          <td>Insoluble in water</td>
          <td>Bonds too strong to be broken by polar molecules.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Explaining Diamond's Properties Using Structure and Bonding</h3>
  
  <div class="key-facts-block">
    <h4>💎 1. Diamond is very hard</h4>
    <p>Each carbon atom forms <strong>four strong covalent bonds</strong> to other carbon atoms. These bonds extend throughout the entire structure, creating a rigid, 3D network. There are no weak bonds or layers to slide over each other. ✅ Therefore, diamond is extremely hard and resistant to scratching or breaking.</p>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Diamond is very hard because each carbon atom is covalently bonded to <strong>four others in a giant 3D lattice</strong>."</p>
  </div>

  <div class="key-facts-block">
    <h4>💎 2. Diamond has a very high melting point</h4>
    <p>The covalent bonds in diamond are very strong and there are <strong>millions of them throughout the lattice</strong>. To melt diamond, all of these bonds must be broken.</p>
    <p>Breaking covalent bonds requires a lot of energy (not just separating molecules). Therefore, diamond has an extremely high melting and boiling point (around 3550°C).</p>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Diamond has a very high melting point because a <strong>large amount of energy is required to break the many strong covalent bonds</strong> throughout the structure."</p>
  </div>

  <div class="key-facts-block">
    <h4>💎 3. Diamond does not conduct electricity</h4>
    <p>Electricity requires free electrons or ions to carry charge.</p>
    <p>In diamond, <strong>all four outer electrons of each carbon atom are used in covalent bonds</strong>.</p>
    <p>There are no delocalised electrons and no ions that can move. Therefore, diamond is a non-conductor of electricity, both as a solid and liquid.</p>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Diamond does not conduct electricity because it has <strong>no delocalised electrons or ions</strong> to carry charge."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Summary: Linking Structure to Properties</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Structure Feature</th>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Each carbon atom covalently bonded to four others</td>
          <td>Hard</td>
          <td>Strong network; no weak bonds</td>
        </tr>
        <tr>
          <td>Many strong covalent bonds</td>
          <td>High melting point</td>
          <td>Large energy required to break them</td>
        </tr>
        <tr>
          <td>No delocalised electrons or ions</td>
          <td>Non-conductor</td>
          <td>No charged particles available to carry current</td>
        </tr>
        <tr>
          <td>Tetrahedral lattice</td>
          <td>Transparent and strong</td>
          <td>Evenly bonded, symmetrical arrangement</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Uses of Diamond</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Use</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cutting tools and drills</td>
          <td>Extremely hard; can cut through other materials</td>
        </tr>
        <tr>
          <td>Jewellery</td>
          <td>Transparent, shiny, and durable</td>
        </tr>
        <tr>
          <td>Industrial saws</td>
          <td>Hardness makes it ideal for cutting concrete and stone</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: ["diamond", "giant covalent", "tetrahedral", "four bonds", "hard", "high melting point", "non-conductor"],
        practice_items: [
          {
            id: "diamond-1",
            prompt_template: "Describe the structure and bonding in diamond. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["carbon", "four", "covalent bonds", "tetrahedral", "giant structure", "3D lattice"]
          },
          {
            id: "diamond-2",
            prompt_template: "Explain why diamond is very hard. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["strong", "covalent bonds", "four", "rigid", "network", "all directions"]
          }
        ]
      },
      {
        id: "2-3-2-graphite",
        title: "2.3.2 GRAPHITE",
        type: "content",
        study_group: 5,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Structure of Graphite</h3>
  
  <div class="key-facts-block">
    <h4>📘 Description</h4>
    <ul>
      <li>Graphite is a <strong>giant covalent structure</strong> made entirely of carbon atoms.</li>
      <li>Each carbon atom is covalently bonded to <strong>three other carbon atoms</strong> in flat hexagonal layers.</li>
      <li>The <strong>fourth outer electron</strong> of each carbon atom is <strong>delocalised</strong> (free to move between the layers).</li>
      <li>The layers are held together by <strong>weak intermolecular forces</strong> (Van der Waals forces).</li>
      <li>Layers can <strong>slide easily</strong> over each other.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Features</h4>
    <ul>
      <li>Strong covalent bonds <strong>within</strong> each layer.</li>
      <li>Weak forces <strong>between</strong> layers.</li>
      <li>One delocalised electron per carbon atom that moves freely.</li>
      <li>Structure described as "layers of hexagons with delocalised electrons between them."</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Properties of Graphite</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Soft and slippery</td>
          <td>Layers slide over each other easily.</td>
        </tr>
        <tr>
          <td>Conducts electricity and heat</td>
          <td>Delocalised electrons move through the layers.</td>
        </tr>
        <tr>
          <td>High melting and boiling point</td>
          <td>Strong covalent bonds in each layer require lots of energy to break.</td>
        </tr>
        <tr>
          <td>Less dense than diamond</td>
          <td>Layers are far apart with space between them.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Explaining Graphite's Properties Using Structure and Bonding</h3>
  
  <div class="key-facts-block">
    <h4>✏️ 1. Soft and Slippery</h4>
    <p>Atoms in each layer are strongly bonded, but only <strong>weak forces exist between the layers</strong>.</p>
    <p>These weak forces (Van der Waals) can be easily overcome, allowing layers to slide over each other.</p>
    <p>✅ Therefore, graphite is soft and slippery.</p>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Graphite is soft because there are only <strong>weak forces between layers</strong>, allowing them to slide over one another."</p>
  </div>

  <div class="key-facts-block">
    <h4>⚡ 2. Conducts Electricity and Heat</h4>
    <p>Each carbon atom forms three covalent bonds, leaving <strong>one delocalised electron</strong>.</p>
    <p>These electrons are free to move through the structure, carrying electric charge.</p>
    <p>Delocalised electrons also transfer energy, allowing graphite to conduct heat.</p>
    <p>✅ Therefore, graphite conducts electricity and heat, unlike most non-metals.</p>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Graphite conducts electricity because it has <strong>delocalised electrons that can move freely between layers</strong>."</p>
  </div>

  <div class="key-facts-block">
    <h4>🔥 3. Very High Melting and Boiling Point</h4>
    <p>Each layer has <strong>strong covalent bonds</strong> between carbon atoms.</p>
    <p>These bonds require a lot of energy to break.</p>
    <p>Even though layers slide easily, breaking the layers themselves takes enormous energy.</p>
    <p>✅ Therefore, graphite has a very high melting and boiling point (similar to diamond).</p>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Graphite has a high melting point because <strong>many strong covalent bonds must be broken</strong> to change state."</p>
  </div>

  <div class="key-facts-block">
    <h4>📊 4. Less Dense Than Diamond</h4>
    <p>Layers in graphite are spread further apart than the tightly bonded atoms in diamond.</p>
    <p>The gaps between layers make graphite less dense.</p>
    <p>✅ Therefore, graphite is lighter and less compact than diamond.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Uses of Graphite</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Use</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Electrodes in electrolysis</td>
          <td>Conducts electricity, resists heat.</td>
        </tr>
        <tr>
          <td>Lubricant</td>
          <td>Layers slide easily (soft and slippery).</td>
        </tr>
        <tr>
          <td>Pencils</td>
          <td>Layers flake off onto paper.</td>
        </tr>
        <tr>
          <td>Brushes in electric motors</td>
          <td>Conducts electricity and withstands friction.</td>
        </tr>
        <tr>
          <td>Nuclear reactor moderator</td>
          <td>Absorbs neutrons, resists high temperatures.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <p>Graphite's <strong>conductivity and softness</strong> make it useful in both electrical and mechanical applications.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Comparison Between Diamond and Graphite</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>Diamond</th>
          <th>Graphite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Structure</td>
          <td>3D tetrahedral lattice</td>
          <td>Layers of hexagons</td>
        </tr>
        <tr>
          <td>Bonds per carbon atom</td>
          <td>4</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Delocalised electrons</td>
          <td>None</td>
          <td>One per carbon atom</td>
        </tr>
        <tr>
          <td>Conducts Electricity?</td>
          <td>❌ No</td>
          <td>✅ Yes</td>
        </tr>
        <tr>
          <td>Hardness</td>
          <td>Very hard</td>
          <td>Soft/slippery</td>
        </tr>
        <tr>
          <td>Melting point</td>
          <td>Very high</td>
          <td>Very high</td>
        </tr>
        <tr>
          <td>Uses</td>
          <td>Cutting tools, jewellery</td>
          <td>Electrodes, pencils, lubricant</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Point</h4>
    <p>Both are giant covalent structures made of carbon, but graphite's <strong>delocalised electrons</strong> make it unique.</p>
  </div>
</div>
        `,
        canonical_keywords: ["graphite", "layers", "hexagonal", "three bonds", "delocalised electrons", "conducts electricity", "soft", "slippery"],
        practice_items: [
          {
            id: "graphite-1",
            prompt_template: "Describe the structure of graphite and explain why it conducts electricity. [5 marks]",
            marks: 5,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["layers", "hexagonal", "three bonds", "delocalised electrons", "free to move", "carry charge"]
          },
          {
            id: "graphite-2",
            prompt_template: "Explain why graphite is soft and slippery. [2 marks]",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["weak forces", "between layers", "slide", "easily"]
          }
        ]
      },
      {
        id: "2-3-3-graphene-fullerenes",
        title: "2.3.3 GRAPHENE AND FULLERENES",
        type: "content",
        study_group: 5,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Graphene: Structure</h3>
  
  <div class="key-facts-block">
    <h4>📘 Description</h4>
    <ul>
      <li>Graphene is a <strong>single layer of graphite</strong>, just one atom thick.</li>
      <li>It consists of carbon atoms joined by strong covalent bonds in a flat sheet of hexagons.</li>
      <li>Each carbon atom is bonded to <strong>three others</strong>, leaving one delocalised electron per atom.</li>
      <li>The sheet is <strong>two-dimensional (2D)</strong> — it has length and width, but no thickness.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Fact:</h4>
    <p>Graphene is the <strong>thinnest material ever discovered</strong>, yet also one of the strongest.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Graphene: Properties and Explanations</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very strong</td>
          <td>Each carbon atom forms strong covalent bonds → strong hexagonal sheet.</td>
        </tr>
        <tr>
          <td>Lightweight and flexible</td>
          <td>Only one atom thick → very low density.</td>
        </tr>
        <tr>
          <td>Conducts electricity</td>
          <td>Delocalised electrons move freely across the sheet.</td>
        </tr>
        <tr>
          <td>Conducts heat efficiently</td>
          <td>Free electrons transfer energy rapidly.</td>
        </tr>
        <tr>
          <td>Transparent</td>
          <td>Extremely thin → allows light to pass through.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Linking Properties to Structure</h4>
    <ul>
      <li>Covalent bonds → strength and high melting point.</li>
      <li>Delocalised electrons → electrical and thermal conductivity.</li>
      <li>Single atomic layer → flexibility, transparency, lightness.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Uses of Graphene</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Use</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Electronics</td>
          <td>Excellent electrical conductivity; used in transistors and circuits.</td>
        </tr>
        <tr>
          <td>Composites</td>
          <td>Added to plastics → makes them stronger but still lightweight.</td>
        </tr>
        <tr>
          <td>Flexible displays</td>
          <td>Conductive and transparent → ideal for touchscreens.</td>
        </tr>
        <tr>
          <td>Medical sensors</td>
          <td>Thin and biocompatible → detects small electrical changes.</td>
        </tr>
        <tr>
          <td>Energy storage</td>
          <td>Used in batteries and supercapacitors due to conductivity.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam phrase:</h4>
    <p>"Graphene's <strong>strength, conductivity, and flexibility</strong> make it useful in electronics and composite materials."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Fullerenes: What They Are</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Fullerenes are molecules of carbon shaped like <strong>closed tubes or hollow spheres</strong>, made up of hexagonal and pentagonal rings of carbon atoms. They are also allotropes of carbon (like diamond, graphite, and graphene).</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Atoms are joined by strong covalent bonds.</li>
      <li>Structures are <strong>hollow</strong>, giving them unique chemical and physical properties.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Buckminsterfullerene (C₆₀)</h3>
  
  <div class="diagram-block hover-pause">
    <h4>⚽ Buckminsterfullerene (C₆₀) Structure</h4>
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Outer sphere outline -->
      <ellipse cx="200" cy="150" rx="100" ry="100" fill="none" stroke="#8b5cf6" stroke-width="1" opacity="0.3"/>
      
      <!-- Front-facing hexagons and pentagons -->
      <!-- Top pentagon -->
      <polygon points="200,60 230,85 220,120 180,120 170,85" fill="none" stroke="#8b5cf6" stroke-width="2"/>
      
      <!-- Middle hexagons ring -->
      <polygon points="170,85 180,120 150,140 120,120 130,85 150,70" fill="none" stroke="#a78bfa" stroke-width="2"/>
      <polygon points="230,85 270,70 280,100 260,130 220,120" fill="none" stroke="#a78bfa" stroke-width="2"/>
      <polygon points="180,120 220,120 240,150 220,180 180,180 160,150" fill="none" stroke="#8b5cf6" stroke-width="2"/>
      <polygon points="120,120 150,140 140,175 100,175 85,145 100,115" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.7"/>
      <polygon points="260,130 300,135 305,170 280,190 240,175 240,150" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.7"/>
      
      <!-- Bottom pentagon -->
      <polygon points="180,180 220,180 230,215 200,240 170,215" fill="none" stroke="#8b5cf6" stroke-width="2"/>
      
      <!-- Side hexagons (faded for 3D effect) -->
      <polygon points="140,175 180,180 170,215 140,225 110,200 110,175" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.5"/>
      <polygon points="220,180 260,175 270,200 260,225 230,215" fill="none" stroke="#a78bfa" stroke-width="2" opacity="0.5"/>
      
      <!-- Carbon atoms at key vertices -->
      <circle cx="200" cy="60" r="5" fill="#8b5cf6">
        <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="170" cy="85" r="5" fill="#8b5cf6"/>
      <circle cx="230" cy="85" r="5" fill="#8b5cf6"/>
      <circle cx="180" cy="120" r="5" fill="#8b5cf6"/>
      <circle cx="220" cy="120" r="5" fill="#8b5cf6"/>
      <circle cx="150" cy="140" r="5" fill="#8b5cf6" opacity="0.7"/>
      <circle cx="260" cy="130" r="5" fill="#8b5cf6" opacity="0.7"/>
      <circle cx="160" cy="150" r="5" fill="#8b5cf6"/>
      <circle cx="240" cy="150" r="5" fill="#8b5cf6"/>
      <circle cx="180" cy="180" r="5" fill="#8b5cf6"/>
      <circle cx="220" cy="180" r="5" fill="#8b5cf6"/>
      <circle cx="170" cy="215" r="5" fill="#8b5cf6"/>
      <circle cx="230" cy="215" r="5" fill="#8b5cf6"/>
      <circle cx="200" cy="240" r="5" fill="#8b5cf6">
        <animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Rotation animation hint -->
      <g transform="translate(200, 150)">
        <circle cx="0" cy="0" r="2" fill="#fbbf24" opacity="0.8">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="cx" values="0;80;0;-80;0" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="cy" values="-80;0;80;0;-80" dur="8s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      <!-- Labels -->
      <text x="320" y="60" fill="#94a3b8" font-size="10">60 carbon atoms</text>
      <text x="320" y="80" fill="#8b5cf6" font-size="10">⬠ = pentagon (12)</text>
      <text x="320" y="100" fill="#a78bfa" font-size="10">⬡ = hexagon (20)</text>
      
      <text x="20" y="270" fill="#94a3b8" font-size="10">Hollow centre can</text>
      <text x="20" y="285" fill="#94a3b8" font-size="10">trap molecules</text>
      
      <!-- Football comparison -->
      <text x="300" y="260" fill="#fbbf24" font-size="9">Like a football! ⚽</text>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #8b5cf6; border-radius: 50%;"></span> Carbon atoms</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #8b5cf6;"></span> Pentagon rings (12)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #a78bfa;"></span> Hexagon rings (20)</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔬 Structure</h4>
    <ul>
      <li>The first fullerene discovered.</li>
      <li>Made of <strong>60 carbon atoms</strong> arranged in a spherical shape (similar to a football).</li>
      <li>Contains 12 pentagons and 20 hexagons.</li>
      <li>Each carbon forms three covalent bonds → delocalised electrons → weak intermolecular forces between molecules.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💎 Properties and Explanations</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Molecular (not giant)</td>
          <td>Made of individual C₆₀ molecules.</td>
        </tr>
        <tr>
          <td>Soft</td>
          <td>Weak intermolecular forces between molecules.</td>
        </tr>
        <tr>
          <td>Low melting point</td>
          <td>Forces between molecules are weak.</td>
        </tr>
        <tr>
          <td>Conducts electricity poorly</td>
          <td>Some delocalised electrons but they cannot move easily between molecules.</td>
        </tr>
        <tr>
          <td>Can act as a 'molecular cage'</td>
          <td>Hollow centre can trap other atoms or molecules.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="note-block">
    <h4>📝 Key Fact:</h4>
    <p>Named after Buckminster Fuller, who designed geodesic dome structures that look similar.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Carbon Nanotubes</h3>
  
  <div class="diagram-block hover-pause">
    <h4>🔬 Carbon Nanotube Structure</h4>
    <svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Nanotube cylinder -->
      <!-- Top ellipse -->
      <ellipse cx="250" cy="50" rx="80" ry="20" fill="none" stroke="#06b6d4" stroke-width="2"/>
      
      <!-- Bottom ellipse (front half visible) -->
      <ellipse cx="250" cy="230" rx="80" ry="20" fill="none" stroke="#06b6d4" stroke-width="2"/>
      
      <!-- Side lines -->
      <line x1="170" y1="50" x2="170" y2="230" stroke="#06b6d4" stroke-width="2"/>
      <line x1="330" y1="50" x2="330" y2="230" stroke="#06b6d4" stroke-width="2"/>
      
      <!-- Hexagonal pattern on tube surface -->
      <g stroke="#22d3ee" stroke-width="1.5" fill="none">
        <!-- Row 1 -->
        <polygon points="200,60 215,60 222,72 215,84 200,84 193,72"/>
        <polygon points="230,60 245,60 252,72 245,84 230,84 223,72"/>
        <polygon points="260,60 275,60 282,72 275,84 260,84 253,72"/>
        <polygon points="290,60 305,60 312,72 305,84 290,84 283,72"/>
        
        <!-- Row 2 -->
        <polygon points="185,84 200,84 207,96 200,108 185,108 178,96"/>
        <polygon points="215,84 230,84 237,96 230,108 215,108 208,96"/>
        <polygon points="245,84 260,84 267,96 260,108 245,108 238,96"/>
        <polygon points="275,84 290,84 297,96 290,108 275,108 268,96"/>
        <polygon points="305,84 320,84 327,96 320,108 305,108 298,96"/>
        
        <!-- Row 3 -->
        <polygon points="200,108 215,108 222,120 215,132 200,132 193,120"/>
        <polygon points="230,108 245,108 252,120 245,132 230,132 223,120"/>
        <polygon points="260,108 275,108 282,120 275,132 260,132 253,120"/>
        <polygon points="290,108 305,108 312,120 305,132 290,132 283,120"/>
        
        <!-- Row 4 -->
        <polygon points="185,132 200,132 207,144 200,156 185,156 178,144"/>
        <polygon points="215,132 230,132 237,144 230,156 215,156 208,144"/>
        <polygon points="245,132 260,132 267,144 260,156 245,156 238,144"/>
        <polygon points="275,132 290,132 297,144 290,156 275,156 268,144"/>
        <polygon points="305,132 320,132 327,144 320,156 305,156 298,144"/>
        
        <!-- Row 5 -->
        <polygon points="200,156 215,156 222,168 215,180 200,180 193,168"/>
        <polygon points="230,156 245,156 252,168 245,180 230,180 223,168"/>
        <polygon points="260,156 275,156 282,168 275,180 260,180 253,168"/>
        <polygon points="290,156 305,156 312,168 305,180 290,180 283,168"/>
        
        <!-- Row 6 -->
        <polygon points="185,180 200,180 207,192 200,204 185,204 178,192"/>
        <polygon points="215,180 230,180 237,192 230,204 215,204 208,192"/>
        <polygon points="245,180 260,180 267,192 260,204 245,204 238,192"/>
        <polygon points="275,180 290,180 297,192 290,204 275,204 268,192"/>
        <polygon points="305,180 320,180 327,192 320,204 305,204 298,192"/>
      </g>
      
      <!-- Delocalised electrons flowing through tube -->
      <circle cx="200" cy="80" r="4" fill="#fbbf24">
        <animate attributeName="cy" values="60;230;60" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="250" cy="150" r="4" fill="#fbbf24">
        <animate attributeName="cy" values="150;230;60;150" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="300" cy="100" r="4" fill="#fbbf24">
        <animate attributeName="cy" values="100;60;230;100" dur="3s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Labels -->
      <text x="360" y="50" fill="#94a3b8" font-size="10">Rolled-up</text>
      <text x="360" y="65" fill="#94a3b8" font-size="10">graphene sheet</text>
      
      <text x="30" y="100" fill="#22d3ee" font-size="10">Hexagonal</text>
      <text x="30" y="115" fill="#22d3ee" font-size="10">carbon rings</text>
      
      <text x="30" y="180" fill="#fbbf24" font-size="10">Electrons flow</text>
      <text x="30" y="195" fill="#fbbf24" font-size="10">along tube</text>
      
      <!-- Hollow indicator -->
      <text x="220" y="145" fill="#64748b" font-size="10">HOLLOW</text>
      
      <!-- Length indicator -->
      <line x1="430" y1="50" x2="430" y2="230" stroke="#f472b6" stroke-width="2" marker-start="url(#arrowUp)" marker-end="url(#arrowDown)"/>
      <text x="440" y="145" fill="#f472b6" font-size="9">Very long</text>
      
      <defs>
        <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="8" orient="auto">
          <path d="M0,8 L4,0 L8,8" fill="none" stroke="#f472b6" stroke-width="1"/>
        </marker>
        <marker id="arrowDown" markerWidth="8" markerHeight="8" refX="4" refY="0" orient="auto">
          <path d="M0,0 L4,8 L8,0" fill="none" stroke="#f472b6" stroke-width="1"/>
        </marker>
      </defs>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #22d3ee;"></span> Covalent bonds (hexagons)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #fbbf24; border-radius: 50%;"></span> Delocalised electrons</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 3px; background: #06b6d4;"></span> Tube structure</span>
    </div>
  </div>
  
  <div class="key-facts-block">
    <h4>🔬 Structure</h4>
    <ul>
      <li>Cylindrical fullerenes — <strong>rolled-up sheets of graphene</strong>.</li>
      <li>Each tube consists of carbon atoms bonded in hexagonal rings.</li>
      <li>Have very high length-to-diameter ratios (extremely long and thin).</li>
      <li>Can be single-walled or multi-walled (several layers rolled together).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💎 Properties and Explanations</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Very strong</td>
          <td>Covalent bonds between carbon atoms make the structure very tough.</td>
        </tr>
        <tr>
          <td>Lightweight</td>
          <td>Hollow cylindrical shape with low density.</td>
        </tr>
        <tr>
          <td>Excellent electrical conductor</td>
          <td>Delocalised electrons move freely along the tube.</td>
        </tr>
        <tr>
          <td>High thermal conductivity</td>
          <td>Transfers heat efficiently.</td>
        </tr>
        <tr>
          <td>High tensile strength</td>
          <td>Can be stretched without breaking.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Key Idea:</h4>
    <p>Carbon nanotubes combine <strong>strength, conductivity, and lightness</strong> — making them ideal for nanotechnology.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Uses of Fullerenes and Nanotubes</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Use</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Buckminsterfullerene (C₆₀)</td>
          <td>Drug delivery systems</td>
          <td>Hollow spheres can carry molecules inside.</td>
        </tr>
        <tr>
          <td></td>
          <td>Lubricants</td>
          <td>Roll easily between surfaces (like microscopic ball bearings).</td>
        </tr>
        <tr>
          <td></td>
          <td>Catalysts</td>
          <td>Large surface area for reactions.</td>
        </tr>
        <tr>
          <td>Carbon Nanotubes</td>
          <td>Reinforcing materials</td>
          <td>Added to sports equipment and composites for strength.</td>
        </tr>
        <tr>
          <td></td>
          <td>Electronics</td>
          <td>Excellent conductors → used in circuits and transistors.</td>
        </tr>
        <tr>
          <td></td>
          <td>Nanotechnology</td>
          <td>Deliver molecules at nanoscale or build tiny sensors.</td>
        </tr>
        <tr>
          <td></td>
          <td>Medical uses</td>
          <td>Drug carriers, biosensors.</td>
        </tr>
        <tr>
          <td></td>
          <td>Space materials</td>
          <td>Lightweight but extremely strong.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam Tip:</h4>
    <p>Always link <strong>use → property → structure</strong>. For example:</p>
    <p>"Carbon nanotubes are used in composite materials because they are <strong>very strong and lightweight</strong> due to their covalently bonded carbon atoms arranged in tubes."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Recognising Graphene and Fullerenes</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Structure Type</th>
          <th>Description</th>
          <th>Key Features</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Graphene</td>
          <td>One atom thick sheet of hexagons</td>
          <td>Delocalised electrons</td>
        </tr>
        <tr>
          <td>Buckminsterfullerene (C₆₀)</td>
          <td>Hollow sphere of 60 carbon atoms</td>
          <td>12 pentagons + 20 hexagons</td>
        </tr>
        <tr>
          <td>Carbon Nanotube</td>
          <td>Rolled-up sheet of graphene</td>
          <td>Long, thin cylinder; strong, conductive</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Tip for diagrams:</h4>
    <ul>
      <li>Hexagonal pattern = graphene.</li>
      <li>Spherical = C₆₀ fullerene.</li>
      <li>Cylindrical = nanotube.</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: ["graphene", "fullerenes", "buckminsterfullerene", "carbon nanotubes", "C60", "hexagonal", "delocalised electrons", "hollow"],
        practice_items: [
          {
            id: "graphene-fullerenes-1",
            prompt_template: "Describe the structure of graphene and explain why it conducts electricity. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["single layer", "hexagonal", "delocalised electrons", "free to move", "conduct"]
          },
          {
            id: "graphene-fullerenes-2",
            prompt_template: "Explain why carbon nanotubes are used in composite materials. [3 marks]",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["strong", "lightweight", "covalent bonds", "carbon atoms", "tubes"]
          }
        ]
      },
      {
        id: "2-4-1-nanoscience",
        title: "2.4.1 SIZES OF PARTICLES AND THEIR PROPERTIES (NANOSCIENCE)",
        type: "content",
        study_group: 6,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is Nanoscience?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>Nanoscience is the study of materials that have structures between <strong>1 and 100 nanometres (nm)</strong> in size.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <ul>
      <li>A <strong>nanometre (nm) = 1 × 10⁻⁹ metres</strong>.</li>
      <li>Nanoparticles are made of only a few hundred atoms.</li>
      <li>They are larger than atoms and simple molecules, but smaller than fine or coarse particles.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📊 Particle Size Comparisons</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Type of Particle</th>
          <th>Approx. Diameter</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nanoparticle</td>
          <td>1 – 100 nm (1 × 10⁻⁹ to 1 × 10⁻⁷ m)</td>
          <td>Silver nanoparticles</td>
        </tr>
        <tr>
          <td>Fine particle</td>
          <td>100 – 2,500 nm (1 × 10⁻⁷ to 2.5 × 10⁻⁶ m)</td>
          <td>Vehicle exhausts (PM2.5)</td>
        </tr>
        <tr>
          <td>Coarse particle</td>
          <td>2,500 – 10,000 nm (2.5 × 10⁻⁶ to 1 × 10⁻⁵ m)</td>
          <td>Pollen, dust, dirt</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Mnemonic</h4>
    <p>Nano < Fine < Coarse in size.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Comparing Nano Dimensions to Atoms and Molecules</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Particle</th>
          <th>Approximate Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Atom (e.g. carbon)</td>
          <td>0.1 nm</td>
        </tr>
        <tr>
          <td>Small molecule (e.g. water)</td>
          <td>~ 0.5 nm</td>
        </tr>
        <tr>
          <td>Nanoparticle</td>
          <td>1 – 100 nm</td>
        </tr>
        <tr>
          <td>Human hair width</td>
          <td>~80,000 nm</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Key Point</h4>
    <p>Nanoparticles sit <strong>between individual atoms and visible materials</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Surface Area to Volume Ratio (SA:V)</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>As the size of a particle decreases, its <strong>surface area to volume ratio increases</strong>.</p>
    <p>This means:</p>
    <ul>
      <li>Nanoparticles have a <strong>huge surface area</strong> compared to their volume.</li>
      <li>A large fraction of their atoms are on the surface rather than inside.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📏 Rule</h4>
    <p>If the side of a cube decreases by a factor of 10,</p>
    <p>👉 the surface area to volume ratio <strong>increases by a factor of 10</strong>.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Why It Matters</h4>
    <ul>
      <li>Higher SA:V → more area for reactions → <strong>more reactive</strong>.</li>
      <li>Small amounts can have big effects (e.g. in catalysts).</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example:</h4>
    <p>A block of gold and gold nanoparticles have the same atoms, but nanoparticles are <strong>far more reactive and catalytic</strong> because of their much larger surface area.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Why Nanoparticles Have Different Properties</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Higher reactivity</td>
          <td>More atoms exposed on the surface → more collisions → faster reactions.</td>
        </tr>
        <tr>
          <td>Different colour/optical behaviour</td>
          <td>Electron interactions change with particle size (quantum effects).</td>
        </tr>
        <tr>
          <td>Different strength or conductivity</td>
          <td>Structures behave differently when only a few atoms thick.</td>
        </tr>
        <tr>
          <td>Lower melting point</td>
          <td>Smaller structures require less energy to change state.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Key Point</h4>
    <p>Nanomaterials behave differently from bulk materials because their atoms are on the surface and interact differently with light, heat, and chemicals.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Why Smaller Quantities Are Effective</h3>
  
  <div class="key-facts-block">
    <p>Nanoparticles have a <strong>large surface area per gram</strong>, so less material is needed for the same effect.</p>
    <p>This makes them <strong>cost-effective</strong> and useful for medicine, catalysts, and coatings.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example:</h4>
    <p>Only a tiny amount of silver nanoparticles can kill bacteria in wound dressings, compared to much larger quantities of bulk silver.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Applications of Nanoparticles</h3>
  
  <div class="example-block">
    <table class="data-table">
      <thead>
        <tr>
          <th>Application</th>
          <th>Nanoparticle Used</th>
          <th>Why It's Useful</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Medicine (drug delivery)</td>
          <td>Fullerenes, nanotubes</td>
          <td>Hollow structure can carry drugs to specific cells</td>
        </tr>
        <tr>
          <td>Antibacterial materials</td>
          <td>Silver nanoparticles</td>
          <td>High surface area → kills bacteria effectively</td>
        </tr>
        <tr>
          <td>Sunscreens</td>
          <td>Titanium dioxide (TiO₂)</td>
          <td>Transparent but blocks UV light</td>
        </tr>
        <tr>
          <td>Catalysts</td>
          <td>Platinum, palladium nanoparticles</td>
          <td>Huge surface area speeds up reactions</td>
        </tr>
        <tr>
          <td>Electronics</td>
          <td>Carbon nanotubes</td>
          <td>Excellent conductors, very small</td>
        </tr>
        <tr>
          <td>Composite materials</td>
          <td>Carbon nanotubes, graphene</td>
          <td>Added to plastics for strength without weight</td>
        </tr>
        <tr>
          <td>Sensors</td>
          <td>Quantum dots</td>
          <td>Change colour depending on particle size</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Risks and Benefits of Nanoparticles</h3>
  
  <div class="key-facts-block">
    <h4>✅ Benefits</h4>
    <ul>
      <li>More efficient materials (less waste).</li>
      <li>Targeted drug delivery (fewer side effects).</li>
      <li>Stronger, lighter materials.</li>
      <li>Faster chemical reactions (catalysts).</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>⚠️ Risks</h4>
    <ul>
      <li>Nanoparticles are so small they can enter cells and tissues.</li>
      <li>Long-term health effects are not fully understood.</li>
      <li>May cause respiratory problems if inhaled.</li>
      <li>Environmental impact is uncertain.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Balance</h4>
    <p>Scientists continue to research nanomaterials to maximize benefits while minimizing risks.</p>
  </div>
</div>
        `,
        canonical_keywords: ["nanoscience", "nanoparticles", "surface area to volume ratio", "1-100 nm", "quantum effects", "applications", "risks"],
        practice_items: [
          {
            id: "nano-1",
            prompt_template: "Explain why nanoparticles have different properties from bulk materials. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["surface area", "volume ratio", "high", "more atoms", "surface", "react", "differently"]
          },
          {
            id: "nano-2",
            prompt_template: "Give two uses of nanoparticles and explain why they are suitable for each use. [4 marks]",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["silver", "antibacterial", "surface area", "drug delivery", "hollow", "carry molecules", "catalysts", "reactions"]
          }
        ]
      }
    ]
  },
  {
    id: "quantitative-chemistry",
    title: "Quantitative chemistry",
    status: "ready",
    subsections: [
      {
        id: "3-1-1-conservation-mass",
        title: "3.1.1 CONSERVATION OF MASS AND BALANCED CHEMICAL EQUATIONS",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Law of Conservation of Mass</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The law of conservation of mass states that no atoms are lost or made during a chemical reaction — they are simply rearranged.</p>
    <p>This means the total mass of reactants = total mass of products.</p>
    <p class="formula"><strong>Mass of reactants = Mass of products</strong></p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <ul>
      <li>Atoms cannot be created or destroyed, so the total number of each type of atom must be the same on both sides of the equation.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p><strong>Magnesium + Oxygen → Magnesium oxide</strong></p>
    <p class="equation">2 Mg + O₂ → 2 MgO</p>
    
    <p><strong>Mass check:</strong></p>
    <ul>
      <li>2 × 24 (Mg) = 48 g</li>
      <li>1 × 32 (O₂) = 32 g</li>
    </ul>
    <p>Total = 80 g reactants → 80 g product ✅</p>
    <p><strong>Mass is conserved because the same number of each atom exists before and after the reaction.</strong></p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Why Conservation of Mass Is True</h4>
    <ul>
      <li>Atoms are indivisible in chemical reactions.</li>
      <li>All atoms in the reactants become part of the products.</li>
      <li>The apparent change in mass sometimes occurs when gases are involved (explained next section).</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Balanced Chemical Equations</h3>
  
  <div class="definition-block">
    <h4>🔵 What a Balanced Equation Shows</h4>
    <p>The number of atoms of each element on the left (reactants) and right (products) must be equal.</p>
    <p>Balanced equations represent the ratio in which substances react — not necessarily actual masses.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Steps to Balance an Equation</h4>
    <ol>
      <li>Write down the symbols for each element.</li>
      <li>Count the number of atoms on both sides.</li>
      <li>Add coefficients (big numbers) to balance atoms.</li>
      <li>Never change small numbers in formulas — that changes the substance!</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>💡 Example 1 – Simple</h4>
    <p class="equation">H₂ + O₂ → H₂O</p>
    <p><strong>Not balanced:</strong></p>
    <table class="data-table">
      <tbody>
        <tr>
          <td>Left:</td>
          <td>2H, 2O</td>
        </tr>
        <tr>
          <td>Right:</td>
          <td>2H, 1O</td>
        </tr>
      </tbody>
    </table>
    
    <p><strong>✅ Balanced:</strong></p>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
  </div>

  <div class="example-block">
    <h4>💡 Example 2 – Metal Reaction</h4>
    <p class="equation">Fe + O₂ → Fe₂O₃</p>
    <p><strong>Not balanced:</strong> Fe = 1 vs 2, O = 2 vs 3</p>
    
    <p><strong>✅ Balanced:</strong></p>
    <p class="equation">4 Fe + 3 O₂ → 2 Fe₂O₃</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <ul>
      <li>Big numbers in front multiply everything in the formula.</li>
      <li>Small numbers after an element only multiply that element.</li>
      <li>Check each element carefully before moving to the next.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Why Balancing Is Important</h4>
    <p>Balanced equations show the correct ratio of reactants and products.</p>
    <p>They are used to calculate reacting masses, moles, and yields later in the topic.</p>
    <p><strong>AQA exam tip:</strong> You will always lose marks if you fail to balance equations before doing any quantitative calculation!</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "conservation of mass", "law", "atoms", "rearranged", "reactants", "products",
          "balanced equation", "coefficients", "ratio", "chemical reaction", "mass conserved"
        ],
        practice_items: []
      },
      {
        id: "3-1-2-relative-formula-mass",
        title: "3.1.2 RELATIVE FORMULA MASS (Mr)",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Definition of Relative Formula Mass</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The relative formula mass (M<sub>r</sub>) of a substance is the sum of all the relative atomic masses (A<sub>r</sub>) of the atoms shown in its formula.</p>
    <p><strong>In simple terms:</strong> Add up all the atomic masses of the atoms in one molecule or formula unit.</p>
    <p class="formula">M<sub>r</sub> = ∑ A<sub>r</sub> (all atoms in formula)</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Sodium Chloride (NaCl)</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>A<sub>r</sub></th>
          <th>Number of Atoms</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Na</td>
          <td>23</td>
          <td>1</td>
          <td>23</td>
        </tr>
        <tr>
          <td>Cl</td>
          <td>35.5</td>
          <td>1</td>
          <td>35.5</td>
        </tr>
      </tbody>
    </table>
    <p>M<sub>r</sub> = 23 + 35.5 = 58.5</p>
    <p><strong>✅ Relative formula mass of NaCl = 58.5</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Carbon Dioxide (CO₂)</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>A<sub>r</sub></th>
          <th>Number of Atoms</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>C</td>
          <td>12</td>
          <td>1</td>
          <td>12</td>
        </tr>
        <tr>
          <td>O</td>
          <td>16</td>
          <td>2</td>
          <td>32</td>
        </tr>
      </tbody>
    </table>
    <p>M<sub>r</sub> = 12 + 32 = 44</p>
    <p><strong>✅ M<sub>r</sub> of CO₂ = 44</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 3 – Glucose (C₆H₁₂O₆)</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Atomic Mass (A<sub>r</sub>)</th>
          <th>Number of Atoms</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>C</td>
          <td>12</td>
          <td>6</td>
          <td>72</td>
        </tr>
        <tr>
          <td>H</td>
          <td>1</td>
          <td>12</td>
          <td>12</td>
        </tr>
        <tr>
          <td>O</td>
          <td>16</td>
          <td>6</td>
          <td>96</td>
        </tr>
      </tbody>
    </table>
    <p>M<sub>r</sub> = 72 + 12 + 96 = 180</p>
    <p><strong>✅ M<sub>r</sub> of glucose = 180</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – How to Calculate Mr Step-by-Step</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Method</h4>
    <ol>
      <li>Write the formula of the compound.</li>
      <li>Identify the number of each atom.</li>
      <li>Multiply each element's A<sub>r</sub> by the number of atoms.</li>
      <li>Add all totals together.</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>🟢 Example – Calcium Carbonate (CaCO₃)</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Atomic Mass (A<sub>r</sub>)</th>
          <th>Number of Atoms</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ca</td>
          <td>40</td>
          <td>1</td>
          <td>40</td>
        </tr>
        <tr>
          <td>C</td>
          <td>12</td>
          <td>1</td>
          <td>12</td>
        </tr>
        <tr>
          <td>O</td>
          <td>16</td>
          <td>3</td>
          <td>48</td>
        </tr>
      </tbody>
    </table>
    <p>M<sub>r</sub> = 40 + 12 + 48 = 100</p>
    <p><strong>✅ M<sub>r</sub> of CaCO₃ = 100</strong></p>
  </div>

  <div class="warning-block">
    <h4>⚡ Common Mistakes to Avoid</h4>
    <ul>
      <li>🔸 Forgetting to multiply by the number of atoms in brackets, e.g. (OH)₂ → 2 × (O + H).</li>
      <li>🔸 Using incorrect A<sub>r</sub> values — always use those from the periodic table.</li>
      <li>🔸 Confusing A<sub>r</sub> (atomic) with M<sub>r</sub> (formula).</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Relative Atomic Mass (Ar) Recap</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The relative atomic mass (A<sub>r</sub>) of an element is the average mass of its atoms compared with 1/12th the mass of a carbon-12 atom.</p>
  </div>

  <div class="example-block">
    <h4>🧠 Example</h4>
    <ul>
      <li>A<sub>r</sub> of carbon = 12</li>
      <li>A<sub>r</sub> of hydrogen = 1</li>
      <li>A<sub>r</sub> of chlorine = 35.5 (average of isotopes Cl-35 and Cl-37)</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Relation Between Ar and Mr</h4>
    <ul>
      <li>A<sub>r</sub> = relative atomic mass of one atom.</li>
      <li>M<sub>r</sub> = total of all A<sub>r</sub> values in the formula.</li>
    </ul>
  </div>
</div>
        `,
        canonical_keywords: [
          "relative formula mass", "Mr", "relative atomic mass", "Ar", "sum", "atoms",
          "formula", "periodic table", "calculate", "compound"
        ],
        practice_items: []
      },
      {
        id: "3-1-3-mass-changes-gas",
        title: "3.1.3 MASS CHANGES WHEN A REACTANT OR PRODUCT IS A GAS",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Why Mass Sometimes Appears to Change</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>In some reactions, the total mass seems to change, but this is only because a gas has either:</p>
    <ul>
      <li>Entered the reaction from the air, or</li>
      <li>Escaped into the surroundings.</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>If a gas cannot be contained, its mass isn't measured — so the reaction appears to gain or lose mass, even though atoms are still conserved.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Apparent Increase in Mass</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">2 Mg + O₂ → 2 MgO</p>
    
    <p><strong>Explanation:</strong></p>
    <ul>
      <li>Magnesium reacts with oxygen gas from the air.</li>
      <li>Oxygen is added to the solid metal.</li>
      <li>Since the oxygen gas wasn't initially weighed, the product (magnesium oxide) seems heavier.</li>
      <li>Mass appears to increase, but atoms are still conserved.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Apparent Decrease in Mass</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">CaCO₃(s) → CaO(s) + CO₂(g)</p>
    
    <p><strong>Explanation:</strong></p>
    <ul>
      <li>Heating calcium carbonate produces calcium oxide and carbon dioxide gas.</li>
      <li>The CO₂ escapes into the air, so it isn't weighed in the final product.</li>
      <li>The mass of the solid left behind seems smaller.</li>
      <li>Mass appears to decrease because gas escapes.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Explaining Mass Change in Terms of Conservation of Mass</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>The law of conservation of mass still applies — even when gases are involved. The apparent mass change happens only because we're not including the mass of the gas that has entered or left the reaction system.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example Summary Table</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Reaction</th>
          <th>Gas Involved</th>
          <th>Apparent Mass Change</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Magnesium + oxygen → magnesium oxide</td>
          <td>O₂ added</td>
          <td>Increase</td>
          <td>Oxygen from air combines with solid metal</td>
        </tr>
        <tr>
          <td>Calcium carbonate → calcium oxide + carbon dioxide</td>
          <td>CO₂ released</td>
          <td>Decrease</td>
          <td>CO₂ gas escapes to surroundings</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Closed vs Open Systems</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>System Type</th>
          <th>Description</th>
          <th>Effect on Mass</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Closed system</td>
          <td>No substances can enter or leave</td>
          <td>Mass is conserved exactly</td>
        </tr>
        <tr>
          <td>Open system</td>
          <td>Gases can enter or escape</td>
          <td>Apparent mass change</td>
        </tr>
      </tbody>
    </table>
    <p>Closed systems always show perfect conservation of mass because no particles are lost or gained.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Experimental Examples</h3>
  
  <div class="example-block">
    <h4>🟢 1. Combustion of Magnesium</h4>
    <ul>
      <li>Place magnesium ribbon in a crucible, heat it in air.</li>
      <li>It reacts with oxygen to form magnesium oxide.</li>
      <li>Mass increases because oxygen joins from the air.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🟢 2. Thermal Decomposition of Copper Carbonate</h4>
    <p class="equation">CuCO₃(s) → CuO(s) + CO₂(g)</p>
    <ul>
      <li>When heated, green copper carbonate decomposes to black copper oxide and CO₂ gas.</li>
      <li>Gas escapes → mass decreases.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Linking to Conservation of Mass Calculations</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>Sometimes exam questions ask you to calculate missing masses when gases are involved.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example Question</h4>
    <p>A student heats 25.0 g of calcium carbonate. After heating, only 14.0 g of solid calcium oxide remains.</p>
    <p><strong>Calculate the mass of CO₂ released.</strong></p>
    
    <p><strong>Step 1:</strong></p>
    <p class="equation">CaCO₃ → CaO + CO₂</p>
    
    <p><strong>Step 2:</strong></p>
    <ul>
      <li>Total mass before = 25.0 g (CaCO₃)</li>
      <li>Mass of solid after = 14.0 g (CaO)</li>
      <li>25.0 - 14.0 = 11.0 g CO₂ released</li>
    </ul>
    
    <p><strong>✅ Answer:</strong> 11.0 g of CO₂ gas escaped.</p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam phrase</h4>
    <p>"Mass appears to decrease because a gas (CO₂) escapes into the atmosphere."</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "mass change", "gas", "conservation of mass", "increase", "decrease", "oxygen",
          "carbon dioxide", "closed system", "open system", "escape", "apparent"
        ],
        practice_items: []
      },
      {
        id: "3-2-1-moles",
        title: "3.2.1 MOLES",
        type: "content",
        study_group: 3,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is a Mole?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>A mole is a way of counting particles (atoms, ions, or molecules) — just like a "dozen" means 12, a mole means 6.022 × 10²³ particles.</p>
    <p>This number is called the <strong>Avogadro constant (L)</strong>.</p>
    <p class="formula">L = 6.022 × 10²³ particles per mole</p>
  </div>

  <div class="example-block">
    <h4>💡 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>1 mole contains...</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Carbon atoms</td>
          <td>6.022 × 10²³ carbon atoms</td>
        </tr>
        <tr>
          <td>Water molecules</td>
          <td>6.022 × 10²³ water molecules</td>
        </tr>
        <tr>
          <td>Sodium ions</td>
          <td>6.022 × 10²³ Na⁺ ions</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>A mole is a fixed number of particles, not a fixed mass. The mass of one mole depends on what the substance is.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Relationship Between Mass, Moles, and Mr</h3>
  
  <div class="definition-block">
    <h4>🔢 Formula</h4>
    <p class="formula">Moles = Mass (g) / M<sub>r</sub></p>
    <p class="formula">Mass (g) = Moles × M<sub>r</sub></p>
    <p class="formula">M<sub>r</sub> = Mass (g) / Moles</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Finding Moles</h4>
    <p><strong>Calculate the number of moles in 32 g of oxygen gas (O₂).</strong></p>
    <p>M<sub>r</sub> (O₂) = 16 × 2 = 32</p>
    <p>Moles = 32 / 32 = 1.0 mol</p>
    <p><strong>✅ Answer: 1.0 mol of O₂</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Finding Mass</h4>
    <p><strong>Calculate the mass of 0.25 mol of carbon dioxide (CO₂).</strong></p>
    <p>M<sub>r</sub> (CO₂) = 12 + (16 × 2) = 44</p>
    <p>Mass = 0.25 × 44 = 11 g</p>
    <p><strong>✅ Answer: 11 g of CO₂</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 3 – Finding Mr</h4>
    <p><strong>A student has 0.5 mol of a compound weighing 29 g. Find its M<sub>r</sub>.</strong></p>
    <p>M<sub>r</sub> = 29 / 0.5 = 58</p>
    <p><strong>✅ Answer: M<sub>r</sub> = 58</strong></p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Units Reminder</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Symbol</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mass</td>
          <td>m</td>
          <td>g</td>
        </tr>
        <tr>
          <td>Moles</td>
          <td>n</td>
          <td>mol</td>
        </tr>
        <tr>
          <td>Relative formula mass</td>
          <td>M<sub>r</sub></td>
          <td>(no units)</td>
        </tr>
      </tbody>
    </table>
    <p><strong>Always make sure mass is in grams, not kilograms.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – The Mole and the Periodic Table</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>The relative atomic mass (A<sub>r</sub>) of an element (from the periodic table) tells you the mass of one mole of that element in grams.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Examples</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Element</th>
          <th>Mass of 1 mol (g)</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>H</td><td>1</td></tr>
        <tr><td>C</td><td>12</td></tr>
        <tr><td>O</td><td>16</td></tr>
        <tr><td>Na</td><td>23</td></tr>
        <tr><td>Mg</td><td>24</td></tr>
      </tbody>
    </table>
    <p><strong>Note:</strong> 1 mole of oxygen atoms = 16 g, but 1 mole of oxygen molecules (O₂) = 32 g.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Converting Between Particles and Moles</h3>
  
  <div class="definition-block">
    <h4>🔢 Key Formula</h4>
    <p class="formula">Number of particles = Moles × (6.022 × 10²³)</p>
    <p class="formula">Moles = Number of particles / 6.022 × 10²³</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Finding Number of Atoms</h4>
    <p><strong>How many atoms are in 0.25 mol of carbon atoms?</strong></p>
    <p>Particles = 0.25 × 6.022 × 10²³ = 1.5055 × 10²³</p>
    <p><strong>✅ Answer: 1.5 × 10²³ atoms of carbon</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Finding Moles from Atoms</h4>
    <p><strong>A sample contains 1.204 × 10²⁴ molecules of oxygen gas. How many moles is this?</strong></p>
    <p>Moles = 1.204 × 10²⁴ / 6.022 × 10²³ = 2.0 mol</p>
    <p><strong>✅ Answer: 2.0 mol O₂ molecules</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Moles and Formula Units (Ionic Compounds)</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Important Note</h4>
    <p>When you have an ionic compound, a mole counts formula units, not individual atoms.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Mole Calculations in Practice</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Summary Table</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Type of Question</th>
          <th>Formula</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Find moles from mass</td>
          <td>n = m / M<sub>r</sub></td>
          <td>36 g of H₂O → 36 / 18 = 2 mol</td>
        </tr>
        <tr>
          <td>Find mass from moles</td>
          <td>m = n × M<sub>r</sub></td>
          <td>0.25 mol CO₂ → 0.25 × 44 = 11 g</td>
        </tr>
        <tr>
          <td>Find number of particles</td>
          <td>N = n × 6.022 × 10²³</td>
          <td>2 mol atoms → 1.204 × 10²⁴ atoms</td>
        </tr>
        <tr>
          <td>Find moles from particles</td>
          <td>n = N / 6.022 × 10²³</td>
          <td>3.01 × 10²³ = 0.5 mol</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Why Moles Are Useful</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Applications</h4>
    <p>Moles are used to:</p>
    <ul>
      <li>Compare quantities of substances in reactions.</li>
      <li>Balance chemical equations quantitatively.</li>
      <li>Calculate reacting masses, concentrations, gas volumes, and yields.</li>
    </ul>
    <p><strong>The mole links microscopic chemistry (atoms) to macroscopic chemistry (grams).</strong></p>
  </div>
</div>
        `,
        canonical_keywords: [
          "mole", "Avogadro constant", "particles", "atoms", "molecules", "ions",
          "mass", "Mr", "formula", "calculation", "6.022 × 10²³"
        ],
        practice_items: []
      },
      {
        id: "3-2-2-amounts-in-equations",
        title: "3.2.2 AMOUNTS OF SUBSTANCES IN EQUATIONS",
        type: "content",
        study_group: 4,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Understanding Moles in Balanced Equations</h3>
  
  <div class="definition-block">
    <h4>🔵 Key Idea</h4>
    <p>A balanced chemical equation shows the ratio of moles of reactants and products.</p>
    <p>The big numbers in a balanced equation tell you how many moles of each substance react or are produced.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1</h4>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Coefficient</th>
          <th>Moles in Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hydrogen</td>
          <td>2</td>
          <td>2 mol</td>
        </tr>
        <tr>
          <td>Oxygen</td>
          <td>1</td>
          <td>1 mol</td>
        </tr>
        <tr>
          <td>Water</td>
          <td>2</td>
          <td>2 mol</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 This means 2 moles of hydrogen react with 1 mole of oxygen to form 2 moles of water.</strong></p>
    <p><strong>✅ Mole ratio = 2 : 1 : 2</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2</h4>
    <p class="equation">Mg + 2 HCl → MgCl₂ + H₂</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Coefficient</th>
          <th>Moles in Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mg</td>
          <td>1</td>
          <td>1 mol</td>
        </tr>
        <tr>
          <td>HCl</td>
          <td>2</td>
          <td>2 mol</td>
        </tr>
        <tr>
          <td>MgCl₂</td>
          <td>1</td>
          <td>1 mol</td>
        </tr>
        <tr>
          <td>H₂</td>
          <td>1</td>
          <td>1 mol</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Meaning: 1 mol of Mg reacts with 2 mol of HCl to produce 1 mol of MgCl₂ and 1 mol of H₂.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Using Mole Ratios to Calculate Amounts</h3>
  
  <div class="key-facts-block">
    <h4>🔢 Step-by-Step Method</h4>
    <ol>
      <li>Write the balanced equation.</li>
      <li>Identify the substance you know and the one you're finding.</li>
      <li>Find the number of moles you have (using n = m / M<sub>r</sub>).</li>
      <li>Use the ratio from the equation to find the unknown moles.</li>
      <li>Convert back to mass (if needed) using m = n × M<sub>r</sub>.</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Mass–Mass Calculation</h4>
    <p><strong>Question: What mass of magnesium oxide is formed when 6.0 g of magnesium reacts with oxygen?</strong></p>
    <p class="equation">2 Mg + O₂ → 2 MgO</p>
    
    <p><strong>Step 1: Find moles of Mg.</strong></p>
    <p>n = 6.0 ÷ 24 = 0.25 mol</p>
    
    <p><strong>Step 2: Ratio Mg : MgO = 2 : 2 (1 : 1).</strong></p>
    <p>So, moles of MgO = 0.25 mol.</p>
    
    <p><strong>Step 3: Find mass of MgO.</strong></p>
    <p>m = n × M<sub>r</sub> = 0.25 × 40 = 10.0 g</p>
    
    <p><strong>✅ Answer: 10.0 g of magnesium oxide formed.</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Reacting Mass Calculation</h4>
    <p><strong>Question: What mass of hydrogen is produced when 4.0 g of sodium reacts with water?</strong></p>
    <p class="equation">2 Na + 2 H₂O → 2 NaOH + H₂</p>
    
    <p><strong>Step 1: Moles of Na = 4 ÷ 23 = 0.174 mol.</strong></p>
    
    <p><strong>Step 2: Ratio Na : H₂ = 2 : 1</strong></p>
    <p>→ Moles of H₂ = 0.174 ÷ 2 = 0.087 mol.</p>
    
    <p><strong>Step 3: Mass of H₂ = 0.087 × 2 = 0.174 g</strong></p>
    
    <p><strong>✅ Answer: 0.17 g of hydrogen gas produced.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Using Moles to Predict Products</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Concept</h4>
    <p>Balanced equations can be used to predict how much of a product forms from known reactant masses — or vice versa.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example – Iron and Oxygen</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">4 Fe + 3 O₂ → 2 Fe₂O₃</p>
    
    <p><strong>Given:</strong> 16.8 g Fe (M<sub>r</sub> = 56).</p>
    <p><strong>Find:</strong> Mass of Fe₂O₃ produced (M<sub>r</sub> = 160).</p>
    
    <p><strong>Step 1:</strong></p>
    <p>n(Fe) = 16.8 ÷ 56 = 0.3 mol</p>
    
    <p><strong>Step 2: Ratio Fe : Fe₂O₃ = 4 : 2 → 2 : 1</strong></p>
    <p>n(Fe₂O₃) = 0.3 ÷ 2 = 0.15 mol</p>
    
    <p><strong>Step 3:</strong></p>
    <p>m = n × M<sub>r</sub> = 0.15 × 160 = 24 g</p>
    
    <p><strong>✅ Answer: 24 g of Fe₂O₃ formed.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Interpreting Equations Using Mole Ratios</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Common Reactions</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Equation</th>
          <th>Ratio of Reactants : Products</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2 H₂ + O₂ → 2 H₂O</td>
          <td>2 : 1 : 2</td>
          <td>Two moles of hydrogen react with one mole of oxygen.</td>
        </tr>
        <tr>
          <td>N₂ + 3 H₂ → 2 NH₃</td>
          <td>1 : 3 : 2</td>
          <td>One mole nitrogen reacts with three moles hydrogen to form two moles ammonia.</td>
        </tr>
        <tr>
          <td>4 Fe + 3 O₂ → 2 Fe₂O₃</td>
          <td>4 : 3 : 2</td>
          <td>Four moles of Fe react with three moles O₂.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip</h4>
    <p>Always simplify mole ratios to the smallest whole numbers.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Limiting Reactants (Intro)</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>When one reactant is used up first, the reaction stops — that reactant is called the <strong>limiting reactant</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>The other reactant is in excess (some is left over). Only the limiting reactant determines the amount of product made.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
    <p>If you have 5 mol H₂ and 2 mol O₂, the limiting reactant is O₂, because you need 2.5 mol O₂ for 5 mol H₂ — but you only have 2.</p>
    <p><strong>✅ So O₂ limits the reaction → less water forms.</strong></p>
  </div>
</div>
        `,
        canonical_keywords: [
          "mole ratio", "balanced equation", "coefficients", "reactants", "products",
          "calculation", "mass", "limiting reactant", "excess", "stoichiometry"
        ],
        practice_items: []
      },
      {
        id: "3-2-3-balance-with-moles",
        title: "3.2.3 USING MOLES TO BALANCE EQUATIONS",
        type: "content",
        study_group: 5,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – Why Moles Are Used to Balance Equations</h3>
  
  <div class="definition-block">
    <h4>🔵 Key Idea</h4>
    <p>Balanced chemical equations show the ratio of moles of reactants and products. If we know how many moles of each substance react or form, we can use those numbers to write a balanced equation.</p>
    <p><strong>In other words:</strong> The smallest whole-number ratio of moles becomes the coefficients in the balanced equation.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Step-by-Step Method</h3>
  
  <div class="key-facts-block">
    <h4>🔢 Method to Balance Using Moles</h4>
    <ol>
      <li>Find the number of moles of each substance (from experiment or given data).</li>
      <li>Write the ratio of moles of each substance.</li>
      <li>Divide by the smallest number of moles to simplify the ratio.</li>
      <li>Multiply up to whole numbers if necessary.</li>
      <li>Write the balanced equation using these numbers as coefficients.</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Magnesium and Oxygen</h4>
    <p><strong>Experimental data:</strong></p>
    <p>0.5 mol Mg reacts with 0.25 mol O₂</p>
    <p><strong>Product:</strong> MgO</p>
    
    <p><strong>Step 1: Write the mole ratio → Mg : O₂ = 0.5 : 0.25</strong></p>
    
    <p><strong>Step 2: Divide both by 0.25 → 2 : 1</strong></p>
    
    <p><strong>✅ Ratio = 2 : 1 → Equation:</strong></p>
    <p class="equation">2 Mg + O₂ → 2 MgO</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Hydrogen and Oxygen</h4>
    <p><strong>Moles found experimentally:</strong></p>
    <p>2.0 mol H₂ reacts with 1.0 mol O₂</p>
    <p><strong>Product:</strong> H₂O</p>
    
    <p><strong>Step 1: H₂ : O₂ : H₂O = 2 : 1 : 2</strong></p>
    
    <p><strong>✅ Balanced equation:</strong></p>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 3 – Magnesium and Hydrochloric Acid</h4>
    <p><strong>Data from experiment:</strong></p>
    <p>0.1 mol Mg reacts with 0.2 mol HCl, forming 0.1 mol MgCl₂ and 0.1 mol H₂.</p>
    
    <p><strong>Step 1: Write the mole ratio</strong></p>
    <p>Mg : HCl : MgCl₂ : H₂ = 0.1 : 0.2 : 0.1 : 0.1</p>
    
    <p><strong>Step 2: Divide by 0.1 → 1 : 2 : 1 : 1</strong></p>
    
    <p><strong>✅ Balanced equation:</strong></p>
    <p class="equation">Mg + 2 HCl → MgCl₂ + H₂</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Using Moles to Check Balanced Equations</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>You can check if a given equation is balanced by comparing moles of each element on both sides.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p class="equation">N₂ + 3 H₂ → 2 NH₃</p>
    <table class="data-table">
      <thead>
        <tr>
          <th>Substance</th>
          <th>Moles</th>
          <th>Atoms of N</th>
          <th>Atoms of H</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>N₂</td>
          <td>1</td>
          <td>2</td>
          <td>—</td>
        </tr>
        <tr>
          <td>H₂</td>
          <td>3</td>
          <td>—</td>
          <td>6</td>
        </tr>
        <tr>
          <td>NH₃</td>
          <td>2</td>
          <td>2</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>
    <p><strong>✅ Same number of N and H atoms → equation balanced.</strong></p>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Important Note</h4>
    <p>Always compare total atoms of each element — not total moles of substances.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Calculating Unknown Masses Using Balanced Ratios</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Concept</h4>
    <p>Once an equation is balanced, it can be used to calculate unknown masses of reactants or products.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p><strong>Ammonia is made from nitrogen and hydrogen:</strong></p>
    <p class="equation">N₂ + 3 H₂ → 2 NH₃</p>
    
    <p><strong>Given:</strong> 4 mol H₂</p>
    <p><strong>Find:</strong> moles of NH₃ formed</p>
    
    <p><strong>Ratio H₂ : NH₃ = 3 : 2</strong></p>
    <p>n(NH₃) = 4 × (2/3) = 2.67 mol</p>
    
    <p><strong>✅ Answer: 2.67 mol NH₃ formed.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Practice Problem</h3>
  
  <div class="example-block">
    <h4>🟢 Practice Question</h4>
    <p><strong>A student found that 0.4 mol of calcium reacted completely with 0.8 mol of chlorine gas. Write a balanced equation for this reaction.</strong></p>
    
    <p><strong>Step 1: Ca : Cl₂ = 0.4 : 0.8</strong></p>
    
    <p><strong>Divide both by 0.4 → 1 : 2</strong></p>
    
    <p><strong>✅ Balanced equation:</strong></p>
    <p class="equation">Ca + Cl₂ → CaCl₂</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Exam Technique</h3>
  
  <div class="exam-tip-block">
    <h4>🧠 Exam Tips</h4>
    <ul>
      <li>🔹 Always state your mole ratio clearly — AQA often awards one mark for this.</li>
      <li>🔹 Show your working, even if your final ratio is obvious.</li>
      <li>🔹 Never write decimals as coefficients — multiply up to whole numbers (e.g., 1.5 : 1 → 3 : 2).</li>
      <li>🔹 Units for mole data are often hidden in tables — check carefully.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Common Errors</h3>
  
  <div class="warning-block">
    <h4>⚡ Common Mistakes</h4>
    <ul>
      <li>❌ Forgetting to simplify ratios (e.g., 4 : 2 : 2 should be 2 : 1 : 1).</li>
      <li>❌ Using masses instead of moles to balance.</li>
      <li>❌ Forgetting diatomic molecules (O₂, H₂, Cl₂, N₂).</li>
    </ul>
    <p><strong>🧠 Always convert given masses → moles first using n = m / M<sub>r</sub>, then balance.</strong></p>
  </div>
</div>
        `,
        canonical_keywords: [
          "balance equation", "mole ratio", "coefficients", "experimental data", "simplify",
          "whole numbers", "stoichiometry", "calculation", "method"
        ],
        practice_items: []
      },
      {
        id: "3-3-1-limiting-reactants",
        title: "3.3.1 LIMITING REACTANTS",
        type: "content",
        study_group: 6,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is a Limiting Reactant?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>In a chemical reaction, the limiting reactant is the reactant that is completely used up first, which stops the reaction from continuing.</p>
    <p>Once the limiting reactant is gone, the reaction cannot produce any more product, even if other reactants remain.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <ul>
      <li>The amount of product formed is directly proportional to the amount of limiting reactant.</li>
      <li>The excess reactant is left over and does not affect how much product is formed.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Identifying the Limiting Reactant</h3>
  
  <div class="key-facts-block">
    <h4>🔢 Method</h4>
    <ol>
      <li>Write a balanced equation.</li>
      <li>Calculate the moles of each reactant using n = m / M<sub>r</sub></li>
      <li>Use the mole ratio from the equation to see which reactant would run out first.</li>
      <li>The reactant that runs out first = limiting reactant.</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>🟢 Example 1 – Simple Mole Ratio</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
    
    <p><strong>If you have:</strong></p>
    <ul>
      <li>4 mol H₂</li>
      <li>2 mol O₂</li>
    </ul>
    
    <p>Ratio needed = 2 : 1</p>
    <p>Actual ratio = 4 : 2 → matches perfectly ✅ → no limiting reactant (both used completely).</p>
    
    <p><strong>Now suppose:</strong></p>
    <ul>
      <li>5 mol H₂</li>
      <li>2 mol O₂</li>
    </ul>
    
    <p>Ratio needed = 2 : 1 → 2 mol H₂ needs 1 mol O₂. For 5 mol H₂, you need 2.5 mol O₂, but only have 2 mol O₂.</p>
    <p><strong>✅ O₂ is the limiting reactant because it runs out first.</strong></p>
  </div>

  <div class="example-block">
    <h4>💡 Example 2 – Using Masses</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">Mg + 2 HCl → MgCl₂ + H₂</p>
    
    <p><strong>Given:</strong> 6.0 g Mg, 10.0 g HCl</p>
    
    <p><strong>Step 1: Convert to moles</strong></p>
    <p>n(Mg) = 6.0 ÷ 24 = 0.25 mol</p>
    <p>n(HCl) = 10.0 ÷ 36.5 = 0.274 mol</p>
    
    <p><strong>Step 2: Ratio required = 1 : 2</strong></p>
    <p>To react with 0.25 mol Mg, we need 0.50 mol HCl — but we only have 0.274 mol.</p>
    
    <p><strong>✅ HCl is the limiting reactant</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Calculating Product from the Limiting Reactant</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>Once you've found the limiting reactant, you can calculate the maximum mass of product that can be made.</p>
  </div>

  <div class="key-facts-block">
    <h4>🔢 Method Summary</h4>
    <ol>
      <li>Find moles of each reactant.</li>
      <li>Identify limiting reactant using the mole ratio.</li>
      <li>Use the limiting reactant to find moles of product using the equation ratio.</li>
      <li>Convert moles → mass using m = n × M<sub>r</sub>.</li>
    </ol>
  </div>

  <div class="example-block">
    <h4>💡 Example – Magnesium and Hydrochloric Acid</h4>
    <p class="equation">Mg + 2 HCl → MgCl₂ + H₂</p>
    
    <p><strong>Given:</strong></p>
    <ul>
      <li>0.25 mol Mg</li>
      <li>0.30 mol HCl</li>
    </ul>
    
    <p><strong>Ratio = 1 : 2</strong></p>
    <p>To react with 0.25 mol Mg → need 0.50 mol HCl → only have 0.30 mol → HCl is limiting.</p>
    
    <p><strong>Step 1: Ratio HCl : H₂ = 2 : 1</strong></p>
    <p>So, 0.30 mol HCl produces:</p>
    <p>0.30 ÷ 2 = 0.15 mol H₂</p>
    
    <p><strong>Step 2: Convert to mass</strong></p>
    <p>m = n × M<sub>r</sub> = 0.15 × 2 = 0.30 g of H₂</p>
    
    <p><strong>✅ Maximum mass of hydrogen gas = 0.30 g</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Understanding Excess Reactants</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The excess reactant is the one still left after the limiting reactant is fully used.</p>
    <p>It can be calculated by comparing moles used vs. moles available.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Point</h4>
    <p>Only the limiting reactant controls the yield of product.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Common Exam Questions</h3>
  
  <div class="exam-tip-block">
    <h4>🧠 Exam Tips</h4>
    <ul>
      <li><strong>Q1 – Which reactant is limiting?</strong></li>
      <li>✅ Always compare mole ratio in equation vs. actual ratio.</li>
      <li><strong>Q2 – What mass of product forms?</strong></li>
      <li>✅ Use the limiting reactant → find product moles → convert to mass.</li>
      <li><strong>Q3 – How much excess reactant remains?</strong></li>
      <li>✅ Calculate moles used, subtract from moles available.</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Worked Example (Full Calculation)</h3>
  
  <div class="example-block">
    <h4>🟢 Complete Example</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
    
    <p><strong>Given:</strong></p>
    <ul>
      <li>8.0 g H₂ (M<sub>r</sub> = 2)</li>
      <li>32.0 g O₂ (M<sub>r</sub> = 32)</li>
    </ul>
    
    <p><strong>Step 1: Moles of each</strong></p>
    <p>n(H₂) = 8 ÷ 2 = 4.0 mol</p>
    <p>n(O₂) = 32 ÷ 32 = 1.0 mol</p>
    
    <p><strong>Step 2: Ratio required = 2 : 1</strong></p>
    <p>Actual ratio = 4 : 1 → O₂ limiting.</p>
    
    <p><strong>Step 3: Moles of H₂O formed = 2 × 1 = 2 mol.</strong></p>
    
    <p><strong>Step 4: Mass of H₂O = 2 × 18 = 36 g.</strong></p>
    
    <p><strong>✅ Maximum yield = 36 g water</strong></p>
    <p><strong>✅ Oxygen = limiting reactant</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Real-Life Connection</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Industrial Applications</h4>
    <p>In industrial reactions:</p>
    <ul>
      <li>Limiting reactants are chosen carefully to avoid waste.</li>
      <li>The cheaper reactant is often used in excess, so the more expensive reactant is fully reacted for maximum yield.</li>
    </ul>
    <p><strong>Example:</strong> In the Haber process (N₂ + 3H₂ → 2NH₃), nitrogen is usually in excess, so hydrogen becomes the limiting reactant.</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "limiting reactant", "excess reactant", "mole ratio", "product yield", "calculation",
          "mass", "used up", "runs out", "maximum yield", "stoichiometry"
        ],
        practice_items: []
      },
      {
        id: "3-3-2-atom-economy",
        title: "3.3.2 ATOM ECONOMY",
        type: "content",
        study_group: 7,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – What Is Atom Economy?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The atom economy of a reaction is the measure of how efficiently atoms are used to make the desired product.</p>
    <p>It compares the total mass of useful products to the total mass of all products.</p>
    <p class="formula">Atom Economy = (M<sub>r</sub> of desired product × 100) / (Sum of M<sub>r</sub> of all products)</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>High atom economy → fewer atoms wasted → more efficient reaction.</p>
    <p>Low atom economy → many atoms form unwanted by-products → wasteful and expensive.</p>
    <p><strong>💡 Atom economy is always calculated from the balanced equation using formula masses (M<sub>r</sub> values), not from actual experimental data.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Why Atom Economy Is Important</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Why It Matters</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Reason</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Economic</td>
          <td>High atom economy = less waste, less cost.</td>
        </tr>
        <tr>
          <td>Environment</td>
          <td>Less waste → less pollution and disposal issues.</td>
        </tr>
        <tr>
          <td>Sustainability</td>
          <td>Conserves limited natural resources.</td>
        </tr>
        <tr>
          <td>Efficiency</td>
          <td>Maximises useful output, improves green chemistry.</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Reactions with 100% atom economy are ideal because all atoms from reactants form the desired product.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Calculating Atom Economy</h3>
  
  <div class="example-block">
    <h4>💡 Example 1 – Simple Reaction</h4>
    <p class="equation">2 H₂ + O₂ → 2 H₂O</p>
    
    <p><strong>Step 1: Identify desired product → H₂O</strong></p>
    
    <p><strong>Step 2: Calculate M<sub>r</sub> values</strong></p>
    <ul>
      <li>H₂ = 2</li>
      <li>O₂ = 32</li>
      <li>H₂O = 18</li>
    </ul>
    
    <p><strong>Step 3:</strong></p>
    <p>Total M<sub>r</sub> of desired products = 2 × 18 = 36</p>
    <p>Total M<sub>r</sub> of all products = 36</p>
    
    <p>Atom Economy = 36 × 100 / 36 = 100%</p>
    <p><strong>✅ 100% atom economy (no waste — all atoms form water).</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 2 – Reaction Producing a By-Product</h4>
    <p class="equation">C₂H₄ + H₂O → C₂H₆O</p>
    <p><strong>✅ Atom economy = 100% (one product only).</strong></p>
    
    <p>But now consider:</p>
    <p class="equation">C₂H₄ + Cl₂ → C₂H₄Cl₂</p>
    <p>Still 100%, since one product forms.</p>
    
    <p><strong>🧠 So atom economy is only &lt;100% if unwanted products are formed.</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 3 – Reaction with Waste Product</h4>
    <p class="equation">Na₂CO₃ + 2 HCl → 2 NaCl + H₂O + CO₂</p>
    
    <p><strong>Desired product: NaCl</strong></p>
    
    <p><strong>Total M<sub>r</sub> (products):</strong></p>
    <table class="data-table">
      <tbody>
        <tr>
          <td>2NaCl</td>
          <td>=</td>
          <td>2 × 58.5</td>
          <td>=</td>
          <td>117</td>
        </tr>
        <tr>
          <td>H₂O</td>
          <td>=</td>
          <td>18</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>CO₂</td>
          <td>=</td>
          <td>44</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>=</td>
          <td><strong>179</strong></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    
    <p>Atom Economy = 117 × 100 / 179 = 65.4%</p>
    
    <p><strong>✅ Atom economy = 65.4% → the other 34.6% of atoms become waste (H₂O and CO₂).</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Interpreting Atom Economy</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Atom Economy Guide</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Atom Economy</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>100%</td>
          <td>All atoms in reactants become product</td>
          <td>Hydrogen + oxygen → water</td>
        </tr>
        <tr>
          <td>High (70–99%)</td>
          <td>Efficient, little waste</td>
          <td>Industrial synthesis, addition reactions</td>
        </tr>
        <tr>
          <td>Low (&lt;70%)</td>
          <td>Inefficient, lots of by-products</td>
          <td>Substitution or neutralisation reactions</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Addition reactions tend to have 100% atom economy; substitution and neutralisation reactions do not.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Improving Atom Economy</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Strategies</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Strategy</th>
          <th>Explanation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Use reactions with fewer by-products</td>
          <td>e.g. addition reactions instead of substitution.</td>
        </tr>
        <tr>
          <td>Find uses for waste products</td>
          <td>Sell or reuse waste to improve overall efficiency.</td>
        </tr>
        <tr>
          <td>Design better catalysts</td>
          <td>Helps direct the reaction to produce desired products only.</td>
        </tr>
        <tr>
          <td>Change reaction conditions</td>
          <td>Adjust temperature or pressure to improve product yield.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Difference Between Atom Economy and Percentage Yield</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Comparison</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Definition</th>
          <th>Depends On</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Atom Economy</td>
          <td>How efficiently atoms are used</td>
          <td>Balanced equation</td>
          <td>Adds up M<sub>r</sub> values</td>
        </tr>
        <tr>
          <td>Percentage Yield</td>
          <td>How much product you actually get</td>
          <td>Experimental results</td>
          <td>Depends on losses and side reactions</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h4>🟢 Example:</h4>
    <p>A reaction could have 100% atom economy but 50% yield if half the product was lost during extraction.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Exam-Style Example</h3>
  
  <div class="example-block">
    <h4>🟢 Question</h4>
    <p><strong>Ethanol (C₂H₆O) can be made by two methods:</strong></p>
    
    <p><strong>1. Fermentation:</strong></p>
    <p class="equation">C₆H₁₂O₆ → 2 C₂H₆O + 2 CO₂</p>
    
    <p><strong>2. Hydration of ethene:</strong></p>
    <p class="equation">C₂H₄ + H₂O → C₂H₆O</p>
    
    <p><strong>Which has the higher atom economy?</strong></p>
    
    <p><strong>Step 1:</strong></p>
    <p><strong>Fermentation:</strong></p>
    <p>M<sub>r</sub> (desired) = 2 × 46 = 92</p>
    <p>Total M<sub>r</sub> (products) = 92 + (2 × 44) = 180</p>
    <p>Atom economy = 92 × 100 / 180 = 51.1%</p>
    
    <p><strong>Hydration:</strong></p>
    <p>Atom economy = 46 × 100 / 46 = 100%</p>
    
    <p><strong>✅ Answer: Hydration of ethene → 100% atom economy → more efficient and sustainable.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Environmental Importance</h3>
  
  <div class="key-facts-block">
    <h4>🌍 Green Chemistry</h4>
    <p>High atom economy reactions are vital for green chemistry because they:</p>
    <ul>
      <li>Reduce waste production</li>
      <li>Lower costs of raw materials and waste disposal</li>
      <li>Reduce energy consumption</li>
      <li>Use fewer non-renewable resources</li>
    </ul>
    <p><strong>🧠 Modern chemical industries aim for both high yield and high atom economy.</strong></p>
  </div>
</div>
        `,
        canonical_keywords: [
          "atom economy", "efficiency", "waste", "by-products", "desired product",
          "Mr", "percentage", "green chemistry", "sustainable", "calculation"
        ],
        practice_items: []
      },
      {
        id: "3-3-3-concentration-solutions",
        title: "3.3.3 CONCENTRATION OF SOLUTIONS",
        type: "content",
        study_group: 8,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What Is Concentration?</h3>
  
  <div class="definition-block">
    <h4>🔵 Definition</h4>
    <p>The concentration of a solution tells you how much solute (solid, liquid, or gas) is dissolved in a given volume of solvent.</p>
    <p><strong>🧠 In simpler words:</strong></p>
    <p>How much stuff is in a given amount of liquid.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Units of Concentration</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Formula</th>
          <th>Units</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mass concentration</td>
          <td>c = mass of solute (g) / volume of solution (dm³)</td>
          <td>g/dm³</td>
          <td>10 g NaCl in 1 dm³ → 10 g/dm³</td>
        </tr>
        <tr>
          <td>Molar concentration</td>
          <td>c = moles of solute (mol) / volume of solution (dm³)</td>
          <td>mol/dm³</td>
          <td>0.5 mol HCl in 1 dm³ → 0.5 mol/dm³</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Conversion Between Units</h4>
    <p>To convert between the two:</p>
    <p class="formula">c (mol/dm³) = c (g/dm³) / M<sub>r</sub> of solute</p>
    <p class="formula">c (g/dm³) = c (mol/dm³) × M<sub>r</sub> of solute</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Calculating Mass or Moles in Solutions</h3>
  
  <div class="key-facts-block">
    <h4>🔢 Formulae Summary</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>To Find</th>
          <th>Formula</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mass (g)</td>
          <td>m = c × V</td>
          <td>g, dm³</td>
        </tr>
        <tr>
          <td>Moles (mol)</td>
          <td>n = c × V</td>
          <td>mol, dm³</td>
        </tr>
        <tr>
          <td>Concentration (mol/dm³)</td>
          <td>c = n / V</td>
          <td>mol, dm³</td>
        </tr>
        <tr>
          <td>Concentration (g/dm³)</td>
          <td>c = m / V</td>
          <td>g, dm³</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Always convert volume into dm³ before using these equations (1 dm³ = 1000 cm³ = 1 L).</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💡 Subsection 3 – Worked Examples</h3>
  
  <div class="example-block">
    <h4>💎 Example 1 – Find Concentration (g/dm³)</h4>
    <p>A solution contains 5.0 g of sodium chloride dissolved in 0.25 dm³ of water. Find its concentration in g/dm³.</p>
    
    <p>c = m / V = 5.0 / 0.25 = 20 g/dm³</p>
    
    <p><strong>✅ Answer: 20 g/dm³</strong></p>
  </div>

  <div class="example-block">
    <h4>💎 Example 2 – Convert to mol/dm³</h4>
    <p>NaCl has an M<sub>r</sub> = 58.5.</p>
    <p>c (mol/dm³) = 20 / 58.5 = 0.34 mol/dm³</p>
    
    <p><strong>✅ Answer: 0.34 mol/dm³</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 3 – Find Moles in a Solution</h4>
    <p>A 250 cm³ (0.25 dm³) solution of sulfuric acid (H₂SO₄) has a concentration of 0.2 mol/dm³. Find the number of moles of acid present.</p>
    
    <p>n = c × V = 0.2 × 0.25 = 0.05 mol</p>
    
    <p><strong>✅ Answer: 0.05 mol H₂SO₄</strong></p>
  </div>

  <div class="example-block">
    <h4>🟢 Example 4 – Find Mass in Solution</h4>
    <p>A 0.1 mol/dm³ solution of potassium hydroxide (KOH) has a volume of 0.5 dm³. Find the mass of KOH in the solution (M<sub>r</sub> = 56).</p>
    
    <p>n = c × V = 0.1 × 0.5 = 0.05 mol</p>
    <p>m = n × M<sub>r</sub> = 0.05 × 56 = 2.8 g</p>
    
    <p><strong>✅ Answer: 2.8 g of KOH</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Interpreting Graphs and Tables</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Key Points</h4>
    <p>You may see questions showing volume and concentration data. Remember:</p>
    <ul>
      <li>Concentration is directly proportional to the amount of solute.</li>
      <li>Doubling concentration doubles the number of moles per dm³.</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h4>🧠 Exam Tip:</h4>
    <p>If the same solute is dissolved in a smaller volume, the concentration increases.</p>
  </div>

  <div class="example-block">
    <h4>🟢 Example</h4>
    <p>10 g NaCl in:</p>
    <ul>
      <li>1 dm³ → 10 g/dm³</li>
      <li>0.5 dm³ → 20 g/dm³</li>
    </ul>
    <p><strong>✅ Halving the volume doubles the concentration.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Conversion Between cm³ and dm³</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Volume Conversion</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 dm³</td>
          <td>1000 cm³</td>
        </tr>
        <tr>
          <td>250 cm³</td>
          <td>0.25 dm³</td>
        </tr>
        <tr>
          <td>25 cm³</td>
          <td>0.025 dm³</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 AQA often gives you cm³. Always convert before using concentration formulas.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Practical Relevance</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Applications</h4>
    <p>Concentration is measured in:</p>
    <ul>
      <li>Titrations (to find unknown concentrations).</li>
      <li>Medicine (drug strength in mol/dm³).</li>
      <li>Environmental testing (pollutants in water).</li>
      <li>Food chemistry (salt or acid levels in products).</li>
    </ul>
    <p><strong>🧠 Concentration links to reaction rates and product yield.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Common Exam Mistakes</h3>
  
  <div class="warning-block">
    <h4>⚡ Common Mistakes</h4>
    <ul>
      <li>❌ Forgetting to convert cm³ → dm³ (divide by 1000).</li>
      <li>❌ Mixing up g/dm³ and mol/dm³.</li>
      <li>❌ Using M<sub>r</sub> instead of A<sub>r</sub> or vice versa.</li>
      <li>❌ Forgetting to show units in the final answer.</li>
    </ul>
    <p><strong>✅ Always state final answer with correct unit (mol/dm³ or g/dm³).</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 8 – Summary Table</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Quick Reference</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Concept</th>
          <th>Formula</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Concentration (mass)</td>
          <td>c = m / V</td>
          <td>g/dm³</td>
        </tr>
        <tr>
          <td>Concentration (moles)</td>
          <td>c = n / V</td>
          <td>mol/dm³</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
        `,
        canonical_keywords: [
          "concentration", "solution", "solute", "solvent", "mol/dm³", "g/dm³",
          "moles", "mass", "volume", "dm³", "cm³", "conversion", "calculation"
        ],
        practice_items: []
      },
      {
        id: "3-3-6-titrations",
        title: "3.3.6 TITRATIONS",
        type: "content",
        study_group: 9,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧠 1️⃣ What Is a Titration?</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Specification Point</h4>
    <p>Recall that the volumes of acid and alkali solutions that react with each other can be measured by titration using a suitable indicator.</p>
  </div>

  <div class="definition-block">
    <h4>⚛️ Definition</h4>
    <p>A titration is an accurate laboratory technique used to determine the reacting volumes of an acid and an alkali that exactly neutralise each other.</p>
    <p>It allows us to find the unknown concentration of one solution (acid or alkali) when the concentration of the other is known.</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <p>Titrations are based on neutralisation:</p>
    <p class="formula">acid + alkali → salt + water</p>
    <p>and use precise volumetric measurements for accuracy.</p>
  </div>

  <div class="key-facts-block">
    <h4>💡 Examples of Strong Acids and Alkalis</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Acid</th>
          <th>Formula</th>
          <th>Type</th>
          <th>Alkali Used</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hydrochloric acid</td>
          <td>HCl</td>
          <td>Strong</td>
          <td>Sodium hydroxide (NaOH)</td>
        </tr>
        <tr>
          <td>Nitric acid</td>
          <td>HNO₃</td>
          <td>Strong</td>
          <td>Potassium hydroxide (KOH)</td>
        </tr>
        <tr>
          <td>Sulfuric acid</td>
          <td>H₂SO₄</td>
          <td>Strong diprotic acid</td>
          <td>Sodium hydroxide (NaOH)</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 All these acids fully dissociate in water, forming H⁺ ions.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧪 2️⃣ How to Carry Out a Titration</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Specification Point</h4>
    <p>Describe how to carry out titrations using strong acids and strong alkalis only to find the reacting volumes accurately.</p>
  </div>

  <div class="key-facts-block">
    <h4>⚙️ Step-by-Step Method (Strong Acid + Strong Alkali)</h4>
    
    <h5>1️⃣ Rinse the apparatus properly</h5>
    <ul>
      <li>Wash burette with the acid solution.</li>
      <li>Wash pipette with the alkali solution.</li>
      <li>Wash conical flask with distilled water.</li>
    </ul>
    <p>✅ Prevents contamination and ensures correct concentrations.</p>
    
    <h5>2️⃣ Set up the apparatus</h5>
    <ul>
      <li>Attach burette vertically to a clamp stand.</li>
      <li>Fill it with the acid (known concentration) using a funnel.</li>
      <li>Make sure the burette tap is closed when filling.</li>
      <li>Remove the funnel before starting (to prevent extra acid dripping in).</li>
    </ul>
    
    <h5>3️⃣ Measure the alkali</h5>
    <ul>
      <li>Use a 25.0 cm³ pipette and pipette filler to transfer the alkali to a clean conical flask.</li>
      <li>Add 2–3 drops of a suitable indicator.</li>
      <li>Place the flask on a white tile to see the colour change clearly.</li>
    </ul>
    
    <h5>4️⃣ Perform the titration</h5>
    <ul>
      <li>Slowly open the burette tap to add acid dropwise into the alkali while swirling the flask constantly.</li>
      <li>As you approach the colour change (endpoint), add acid one drop at a time.</li>
      <li>The indicator changes colour when neutralisation is reached.</li>
    </ul>
    
    <h5>5️⃣ Record and repeat</h5>
    <ul>
      <li>Record the final burette reading to the nearest 0.05 cm³.</li>
      <li>Subtract the initial reading → titre (volume of acid used).</li>
      <li>Repeat until you get two concordant results (within 0.10 cm³).</li>
      <li>Calculate the mean titre (average volume).</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧪 Suitable Indicators (for Strong Acid + Strong Alkali)</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Indicator</th>
          <th>Colour in Acid</th>
          <th>Colour in Alkali</th>
          <th>Endpoint</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Phenolphthalein</td>
          <td>Colourless</td>
          <td>Pink</td>
          <td>Colourless</td>
        </tr>
        <tr>
          <td>Methyl orange</td>
          <td>Red</td>
          <td>Yellow</td>
          <td>Orange</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Use only these two indicators for strong acid + strong base titrations.</strong></p>
  </div>

  <!-- Animated Titration Setup Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧪 Titration Apparatus Setup (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="320" height="380" viewBox="0 0 320 380">
        <!-- Clamp stand -->
        <rect x="30" y="340" width="120" height="10" fill="#6b7280" rx="2"/>
        <rect x="85" y="40" width="8" height="300" fill="#6b7280"/>
        <rect x="60" y="340" width="16" height="30" fill="#6b7280"/>
        
        <!-- Burette clamp -->
        <rect x="93" y="55" width="50" height="8" fill="#6b7280"/>
        <rect x="143" y="50" width="24" height="18" fill="#4b5563" rx="3"/>
        
        <!-- Burette -->
        <rect x="150" y="68" width="18" height="180" fill="none" stroke="#94a3b8" stroke-width="2"/>
        <rect x="152" y="70" width="14" height="176" fill="#fecaca" opacity="0.4"/>
        
        <!-- Burette graduations -->
        <g fill="none" stroke="#64748b" stroke-width="0.5">
          <line x1="150" y1="80" x2="155" y2="80"/>
          <line x1="150" y1="100" x2="155" y2="100"/>
          <line x1="150" y1="120" x2="155" y2="120"/>
          <line x1="150" y1="140" x2="155" y2="140"/>
          <line x1="150" y1="160" x2="155" y2="160"/>
          <line x1="150" y1="180" x2="155" y2="180"/>
          <line x1="150" y1="200" x2="155" y2="200"/>
          <line x1="150" y1="220" x2="155" y2="220"/>
        </g>
        <text x="145" y="84" fill="currentColor" font-size="7" text-anchor="end">0</text>
        <text x="145" y="124" fill="currentColor" font-size="7" text-anchor="end">10</text>
        <text x="145" y="164" fill="currentColor" font-size="7" text-anchor="end">20</text>
        <text x="145" y="204" fill="currentColor" font-size="7" text-anchor="end">30</text>
        
        <!-- Burette tap -->
        <rect x="155" y="248" width="8" height="12" fill="#4b5563"/>
        <rect x="163" y="250" width="12" height="8" fill="#22c55e" rx="2"/>
        
        <!-- Burette tip -->
        <line x1="159" y1="260" x2="159" y2="280" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Acid drops falling - animated -->
        <g class="anim-flow-down">
          <circle cx="159" cy="285" r="3" fill="#ef4444" opacity="0.8"/>
        </g>
        <g class="anim-flow-down anim-delay-300">
          <circle cx="159" cy="295" r="2" fill="#ef4444" opacity="0.6"/>
        </g>
        
        <!-- White tile -->
        <rect x="120" y="355" width="80" height="8" fill="#f8fafc" stroke="#e2e8f0"/>
        
        <!-- Conical flask -->
        <path d="M140 350 L130 310 L130 305 L190 305 L190 310 L180 350 Z" 
              fill="none" stroke="#94a3b8" stroke-width="2"/>
        <path d="M132 310 L132 305 L188 305 L188 310" fill="none" stroke="#94a3b8" stroke-width="2"/>
        
        <!-- Alkali solution in flask with indicator (pink) -->
        <path d="M142 348 L134 318 L186 318 L178 348 Z" fill="#f9a8d4" opacity="0.5"/>
        
        <!-- Swirling motion indicator -->
        <g class="anim-rotate-cw-slow" style="transform-origin: 160px 333px;">
          <path d="M145 333 Q160 325 175 333 Q160 341 145 333" 
                fill="none" stroke="#ec4899" stroke-width="1" opacity="0.6"/>
        </g>
        
        <!-- Labels -->
        <text x="180" y="130" fill="#ef4444" font-size="9" font-weight="bold">Acid (HCl)</text>
        <text x="180" y="142" fill="currentColor" font-size="8">Known conc.</text>
        <text x="180" y="256" fill="currentColor" font-size="8">Tap</text>
        <text x="200" y="330" fill="#ec4899" font-size="9" font-weight="bold">Alkali (NaOH)</text>
        <text x="200" y="342" fill="currentColor" font-size="8">+ Indicator</text>
        <text x="120" y="375" fill="currentColor" font-size="8">White tile</text>
        
        <!-- Burette label -->
        <text x="159" y="58" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Burette</text>
        
        <!-- Flask label -->
        <text x="160" y="298" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">Conical Flask</text>
        
        <!-- Colour legend -->
        <rect x="230" y="60" width="80" height="70" fill="none" stroke="currentColor" stroke-width="1" rx="4" opacity="0.3"/>
        <text x="240" y="75" fill="currentColor" font-size="8" font-weight="bold">Colour Change:</text>
        <circle cx="245" cy="90" r="5" fill="#f9a8d4"/>
        <text x="255" y="93" fill="currentColor" font-size="7">Pink (alkaline)</text>
        <circle cx="245" cy="110" r="5" fill="#f5f5f5" stroke="#d4d4d4"/>
        <text x="255" y="113" fill="currentColor" font-size="7">Colourless (endpoint)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Titration setup showing burette with acid, conical flask with alkali + indicator, and white tile</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚖️ 3️⃣ Example Reactions in Titrations</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Common Titration Reactions</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Reaction</th>
          <th>Equation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hydrochloric acid + sodium hydroxide</td>
          <td>HCl + NaOH → NaCl + H₂O</td>
        </tr>
        <tr>
          <td>Nitric acid + potassium hydroxide</td>
          <td>HNO₃ + KOH → KNO₃ + H₂O</td>
        </tr>
        <tr>
          <td>Sulfuric acid + sodium hydroxide</td>
          <td>H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 All are neutralisation reactions forming salt + water.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧮 4️⃣ Titration Calculations</h3>
  
  <div class="key-facts-block">
    <h4>🔵 Specification Point</h4>
    <p>Calculate the chemical quantities in titrations involving concentrations in mol/dm³ and in g/dm³.</p>
  </div>

  <div class="key-facts-block">
    <h4>⚙️ Step-by-Step Calculation Method</h4>
    <ol>
      <li><strong>1️⃣ Write the balanced equation</strong><br/>e.g. HCl + NaOH → NaCl + H₂O</li>
      <li><strong>2️⃣ Record data</strong>
        <ul>
          <li>Concentration of acid (c₁)</li>
          <li>Volume of acid (V₁)</li>
          <li>Volume of alkali (V₂)</li>
          <li>Find unknown concentration (c₂).</li>
        </ul>
      </li>
      <li><strong>3️⃣ Convert all volumes → dm³</strong><br/>1 dm³ = 1000 cm³</li>
      <li><strong>4️⃣ Use n = c × V to find moles</strong>
        <ul>
          <li>Find moles of known solution.</li>
          <li>Use the balanced equation to find moles of the unknown solution.</li>
        </ul>
      </li>
      <li><strong>5️⃣ Calculate the unknown concentration</strong><br/><span class="formula">c = n / V</span></li>
    </ol>
  </div>

  <div class="example-block">
    <h4>💎 Worked Example</h4>
    <p>25.0 cm³ of sodium hydroxide solution is completely neutralised by 23.50 cm³ of 0.100 mol/dm³ hydrochloric acid. Calculate the concentration of the NaOH solution.</p>
    
    <p><strong>Step 1:</strong></p>
    <p class="equation">HCl + NaOH → NaCl + H₂O</p>
    
    <p><strong>Step 2:</strong></p>
    <p>c₁ = 0.100 mol/dm³, V₁ = 23.50 cm³ = 0.02350 dm³</p>
    <p>V₂ = 25.00 cm³ = 0.02500 dm³</p>
    
    <p><strong>Step 3: Moles of HCl</strong></p>
    <p>n = c × V = 0.100 × 0.02350 = 0.00235 mol</p>
    
    <p><strong>Step 4: Ratio HCl : NaOH = 1 : 1</strong></p>
    <p>→ Moles NaOH = 0.00235 mol</p>
    
    <p><strong>Step 5: Concentration of NaOH</strong></p>
    <p>c = n / V = 0.00235 / 0.02500 = 0.094 mol/dm³</p>
    
    <p><strong>✅ Answer: 0.094 mol/dm³ NaOH</strong></p>
  </div>

  <div class="example-block">
    <h4>⚙️ Example 2 – Converting to g/dm³</h4>
    <p>Find concentration in g/dm³ for the same NaOH solution (M<sub>r</sub> = 40).</p>
    
    <p class="formula">c (g/dm³) = c (mol/dm³) × M<sub>r</sub> = 0.094 × 40 = 3.76 g/dm³</p>
    
    <p><strong>✅ Answer: 3.76 g/dm³</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5️⃣ Accuracy and Sources of Error</h3>
  
  <div class="key-facts-block">
    <h4>🧠 Common Errors and Solutions</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Error</th>
          <th>Effect</th>
          <th>Solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Parallax error (reading burette not at eye level)</td>
          <td>Incorrect volume reading</td>
          <td>Read at eye level</td>
        </tr>
        <tr>
          <td>Overshooting the endpoint</td>
          <td>Adds extra acid → too high titre</td>
          <td>Add dropwise near endpoint</td>
        </tr>
        <tr>
          <td>Contamination</td>
          <td>Alters concentration</td>
          <td>Rinse apparatus correctly</td>
        </tr>
        <tr>
          <td>Inconsistent swirling</td>
          <td>Uneven mixing</td>
          <td>Swirl constantly</td>
        </tr>
        <tr>
          <td>Incorrect indicator</td>
          <td>Wrong endpoint</td>
          <td>Use phenolphthalein/methyl orange</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Always use concordant titres and average only the consistent results.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">💎 6️⃣ Results Table Example (for exam layout)</h3>
  
  <div class="example-block">
    <h4>🟢 Example Results Table</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Rough titre (cm³)</th>
          <th>Accurate 1</th>
          <th>Accurate 2</th>
          <th>Accurate 3</th>
          <th>Mean titre</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>23.8</td>
          <td>23.5</td>
          <td>23.4</td>
          <td>23.6</td>
          <td>23.5 cm³</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Exclude the rough titre from your mean calculation. Only average concordant results (within 0.10 cm³).</strong></p>
  </div>
</div>
        `,
        canonical_keywords: [
          "titration", "burette", "pipette", "indicator", "endpoint", "neutralisation",
          "concentration", "unknown", "accurate", "concordant", "mean titre", "calculation",
          "phenolphthalein", "methyl orange", "HCl", "NaOH", "strong acid", "strong alkali",
          "moles", "mol/dm³", "g/dm³", "volumetric", "neutralisation", "salt", "water"
        ],
        practice_items: []
      },
      {
        id: "3-5-gas-volumes",
        title: "3.5 USING THE AMOUNT OF SUBSTANCE IN RELATION TO VOLUMES OF GASES",
        type: "content",
        study_group: 5,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – The Mole and Gas Volumes</h3>
  
  <div class="definition-block">
    <h4>⚛️ Definition</h4>
    <p>At room temperature and pressure (RTP) — approximately 20°C and 1 atmosphere — 1 mole of any gas occupies a volume of 24 dm³.</p>
    <p class="formula">1 mol of gas = 24 dm³ at RTP</p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea</h4>
    <ul>
      <li>Different gases have different masses, but equal volumes contain the same number of molecules (Avogadro's law).</li>
      <li>This allows gas quantities to be compared using volume instead of mass.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Gas</th>
          <th>1 mol mass (M<sub>r</sub>)</th>
          <th>Volume (at RTP)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>H₂</td>
          <td>2 g</td>
          <td>24 dm³</td>
        </tr>
        <tr>
          <td>O₂</td>
          <td>32 g</td>
          <td>24 dm³</td>
        </tr>
        <tr>
          <td>CO₂</td>
          <td>44 g</td>
          <td>24 dm³</td>
        </tr>
        <tr>
          <td>N₂</td>
          <td>28 g</td>
          <td>24 dm³</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 One mole of any gas — regardless of its type — always takes up 24 dm³ at RTP.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – The Gas Volume Equation</h3>
  
  <div class="key-facts-block">
    <h4>🔢 Formulae</h4>
    <p>You can link moles, volume, and molar volume using:</p>
    <p class="formula">Volume (dm³) = Moles × 24</p>
    <p class="formula">Moles = Volume (dm³) / 24</p>
  </div>

  <div class="example-block">
    <h4>💡 Example 1 – Finding Volume</h4>
    <p><strong>What volume will 0.25 mol of hydrogen gas occupy at RTP?</strong></p>
    <p>V = n × 24 = 0.25 × 24 = 6.0 dm³</p>
    <p><strong>✅ Answer: 6.0 dm³ of H₂</strong></p>
  </div>

  <div class="example-block">
    <h4>💡 Example 2 – Finding Moles</h4>
    <p><strong>A sample of oxygen gas occupies 36 dm³ at RTP. How many moles is this?</strong></p>
    <p>n = V / 24 = 36 / 24 = 1.5 mol</p>
    <p><strong>✅ Answer: 1.5 mol of O₂</strong></p>
  </div>

  <div class="example-block">
    <h4>💡 Example 3 – Finding Mass from Volume</h4>
    <p><strong>A student collects 48 dm³ of CO₂ at RTP. Find its mass.</strong></p>
    <p>(M<sub>r</sub> of CO₂ = 44)</p>
    <p>n = 48 / 24 = 2.0 mol</p>
    <p>m = n × M<sub>r</sub> = 2 × 44 = 88 g</p>
    <p><strong>✅ Answer: 88 g of CO₂</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Using Balanced Equations with Gas Volumes</h3>
  
  <div class="key-facts-block">
    <h4>💎 Key Concept</h4>
    <p>Gas volumes in equations work just like mole ratios — the numbers in front of gases show their volume ratios at RTP.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example</h4>
    <p class="equation">N₂ + 3H₂ → 2NH₃</p>
    
    <p><strong>Ratio of moles = 1 : 3 : 2</strong></p>
    <p>👉 Ratio of volumes = 1 : 3 : 2</p>
    
    <p><strong>If 30 dm³ of H₂ reacts completely:</strong></p>
    <ul>
      <li>N₂ required = 1/3 × 30 = 10 dm³</li>
      <li>NH₃ produced = 2/3 × 30 = 20 dm³</li>
    </ul>
    
    <p><strong>✅ Answer: 10 dm³ of nitrogen used, 20 dm³ of ammonia formed.</strong></p>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Rule</h4>
    <p><strong>Volume ratios of gases = mole ratios of gases.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Working with cm³ and dm³</h3>
  
  <div class="key-facts-block">
    <h4>⚙️ Unit Conversions</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Conversion</th>
          <th>Equation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1 dm³</td>
          <td>1000 cm³</td>
        </tr>
        <tr>
          <td>1 cm³</td>
          <td>0.001 dm³</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 Always convert to dm³ before using gas equations.</strong></p>
  </div>

  <div class="example-block">
    <h4>💡 Example</h4>
    <p><strong>A student collects 600 cm³ of hydrogen gas at RTP. Find the number of moles.</strong></p>
    <p>600 cm³ = 600 ÷ 1000 = 0.600 dm³</p>
    <p>n = V / 24 = 0.600 / 24 = 0.025 mol</p>
    <p><strong>✅ Answer: 0.025 mol H₂</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Combined Example (Multi-Step Exam Style)</h3>
  
  <div class="example-block">
    <h4>⚡ Reaction</h4>
    <p class="equation">CaCO₃ → CaO + CO₂</p>
    
    <p><strong>Question:</strong></p>
    <p>Calculate the volume of CO₂ (in dm³) formed when 10 g of calcium carbonate (CaCO₃, M<sub>r</sub> = 100) is decomposed at RTP.</p>
    
    <p><strong>Step 1: Find moles of CaCO₃</strong></p>
    <p>n = 10 / 100 = 0.10 mol</p>
    
    <p><strong>Step 2: Ratio CaCO₃ : CO₂ = 1 : 1</strong></p>
    <p>→ Moles of CO₂ = 0.10 mol</p>
    
    <p><strong>Step 3: Find volume</strong></p>
    <p>V = n × 24 = 0.10 × 24 = 2.4 dm³</p>
    
    <p><strong>✅ Answer: 2.4 dm³ of CO₂ gas produced.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – When to Use 24 dm³</h3>
  
  <div class="key-facts-block">
    <h4>💎 Important Note</h4>
    <p>The 24 dm³ molar volume applies only at room temperature and pressure (RTP).</p>
    <p>If conditions change (e.g. higher pressure or lower temperature), the volume changes too.</p>
  </div>

  <div class="example-block">
    <h4>🧠 Effect of Conditions</h4>
    <table class="data-table">
      <thead>
        <tr>
          <th>Condition</th>
          <th>Volume per mol</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Room Temp (20°C, 1 atm)</td>
          <td>24 dm³</td>
        </tr>
        <tr>
          <td>High pressure</td>
          <td>Decreases</td>
        </tr>
        <tr>
          <td>Low temperature</td>
          <td>Decreases</td>
        </tr>
      </tbody>
    </table>
    <p><strong>🧠 At high pressure or low temperature, gas particles are closer together → smaller volume.</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Common Exam Errors</h3>
  
  <div class="warning-block">
    <h4>💡 Common Mistakes</h4>
    <ul>
      <li>❌ Forgetting to convert cm³ → dm³.</li>
      <li>❌ Using 24 when the question says "standard temperature and pressure" (use 22.4 dm³).</li>
      <li>❌ Mixing up moles and mass in calculations.</li>
      <li>❌ Forgetting gas only relationships work for gaseous substances.</li>
    </ul>
    <p><strong>✅ Always check which reactants/products are gases before using volume ratios.</strong></p>
  </div>
</div>
        `,
        canonical_keywords: [
          "mole", "gas volume", "24 dm³", "RTP", "room temperature and pressure",
          "Avogadro", "volume ratio", "molar volume", "dm³", "cm³", "conversion",
          "gas equation", "balanced equation", "volume calculation"
        ],
        practice_items: []
      }
    ]
  },
  {
    id: "chemical-changes",
    title: "Chemical changes",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "energy-changes",
    title: "Energy changes",
    status: "ready",
    subsections: [
      {
        id: "5-1-1-exothermic-endothermic",
        title: "5.1.1 – ENERGY TRANSFER DURING EXOTHERMIC AND ENDOTHERMIC REACTIONS",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧠 1️⃣ Conservation of Energy in Chemical Reactions</h3>
  
  <div class="spec-point-block">
    <h4>🔵 Specification Point</h4>
    <p>Recall that energy is conserved in chemical reactions. The amount of energy in the universe at the end of a chemical reaction is the same as before the reaction takes place.</p>
  </div>

  <div class="definition-block">
    <h4>⚛️ Definition</h4>
    <p><strong>Energy is conserved</strong> — it cannot be created or destroyed, only transferred between substances or stored in different forms.</p>
    <p>During chemical reactions:</p>
    <ul>
      <li>Energy is transferred between the reactants and their surroundings.</li>
      <li>The total energy of reactants = total energy of products + energy transferred to/from surroundings.</li>
    </ul>
    <p>This means: <strong>Energy in before reaction = Energy in after reaction</strong></p>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Idea</h4>
    <p>If energy is <strong>released</strong>, the products contain <strong>less</strong> chemical energy than the reactants. If energy is <strong>absorbed</strong>, the products contain <strong>more</strong> chemical energy than the reactants.</p>
  </div>

  <div class="example-block">
    <h4>💡 Example</h4>
    <p><strong>Combustion of methane:</strong></p>
    <p class="equation">CH₄ + 2O₂ → CO₂ + 2H₂O</p>
    <ul>
      <li>Reactants have more stored chemical energy in bonds.</li>
      <li>When bonds break and new ones form, energy is released as heat and light to surroundings.</li>
      <li>Products have lower energy → surroundings get hotter.</li>
    </ul>
    <p>✅ This is an <strong>exothermic reaction</strong>.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔥 2️⃣ Exothermic Reactions</h3>
  
  <div class="spec-point-block">
    <h4>🔵 Specification Point</h4>
    <ul>
      <li>Describe what an exothermic reaction is and give examples.</li>
      <li>State everyday uses of exothermic reactions.</li>
      <li>Distinguish between exothermic and endothermic reactions based on temperature change.</li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>⚛️ Definition</h4>
    <p>An <strong>exothermic reaction</strong> is a reaction that transfers energy <strong>to the surroundings</strong>, usually in the form of heat, causing the temperature of the surroundings to <strong>rise</strong>.</p>
    <p>The energy released from forming new bonds in products is <strong>greater than</strong> the energy absorbed to break bonds in reactants.</p>
  </div>

  <div class="table-block">
    <h4>🧪 Examples of Exothermic Reactions</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Reaction</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Combustion</td><td>CH₄ + 2O₂ → CO₂ + 2H₂O</td><td>Burning fuels — large release of energy as heat & light.</td></tr>
        <tr><td>Neutralisation</td><td>HCl + NaOH → NaCl + H₂O</td><td>Acid + alkali → salt + water, energy released as warmth.</td></tr>
        <tr><td>Oxidation</td><td>e.g. iron rusting, respiration</td><td>Electrons lost = heat released.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="table-block">
    <h4>🏠 Everyday Uses of Exothermic Reactions</h4>
    <table>
      <thead>
        <tr><th>Application</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Self-heating cans</td><td>Quicklime (CaO) reacts with water → releases heat → warms food/drinks.</td></tr>
        <tr><td>Hand warmers</td><td>Iron powder oxidises slowly in air → releases heat over hours.</td></tr>
        <tr><td>Fuel combustion</td><td>Gas heaters, car engines, power generation.</td></tr>
      </tbody>
    </table>
    <p>All rely on heat released to surroundings.</p>
  </div>

  <div class="key-idea-block">
    <h4>🌡️ Energy Change Pattern (Exothermic)</h4>
    <p><strong>Surroundings: temperature increases</strong></p>
    <p class="equation">Reactants → Products + Energy (released)</p>
    <ul>
      <li>Reactants start <strong>high</strong> on energy axis.</li>
      <li>Products are <strong>lower</strong>.</li>
      <li>The difference between them (ΔH) = energy released to surroundings.</li>
      <li><strong>ΔH is negative</strong> (because energy leaves the system).</li>
    </ul>
    <p class="highlight-box">ΔH < 0 → Exothermic</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">❄️ 3️⃣ Endothermic Reactions</h3>
  
  <div class="spec-point-block">
    <h4>🔵 Specification Point</h4>
    <ul>
      <li>Describe what an endothermic reaction is and give examples.</li>
      <li>State everyday uses of endothermic reactions.</li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>⚛️ Definition</h4>
    <p>An <strong>endothermic reaction</strong> is one that <strong>absorbs energy</strong> from the surroundings, usually as heat, causing the temperature of surroundings to <strong>fall</strong>.</p>
    <p>🧠 The energy needed to break bonds in reactants is <strong>greater than</strong> the energy released when new bonds form in the products.</p>
  </div>

  <div class="table-block">
    <h4>🧪 Examples of Endothermic Reactions</h4>
    <table>
      <thead>
        <tr><th>Type</th><th>Reaction</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>Thermal decomposition</td><td>CaCO₃ → CaO + CO₂</td><td>Heat needed to break bonds → absorbs energy.</td></tr>
        <tr><td>Photosynthesis</td><td>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</td><td>Light energy from sun absorbed by chlorophyll.</td></tr>
        <tr><td>Dissolving salts</td><td>Ammonium nitrate dissolving in water</td><td>Absorbs heat → solution cools.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="table-block">
    <h4>💡 Everyday Uses of Endothermic Reactions</h4>
    <table>
      <thead>
        <tr><th>Application</th><th>Explanation</th></tr>
      </thead>
      <tbody>
        <tr><td>Instant cold packs</td><td>Ammonium nitrate dissolves in water → temperature drop → reduces swelling.</td></tr>
        <tr><td>Sports injury packs</td><td>Endothermic reactions absorb heat from injured area.</td></tr>
      </tbody>
    </table>
    <p>🧠 All rely on energy being absorbed from surroundings to cause cooling.</p>
  </div>

  <div class="key-idea-block">
    <h4>🌡️ Energy Change Pattern (Endothermic)</h4>
    <p><strong>Surroundings: temperature decreases</strong></p>
    <p class="equation">Reactants + Energy (absorbed) → Products</p>
    <ul>
      <li>Reactants start <strong>lower</strong> on energy axis.</li>
      <li>Products are <strong>higher</strong>.</li>
      <li>The difference (ΔH) = energy absorbed from surroundings.</li>
      <li><strong>ΔH is positive</strong> (because energy enters the system).</li>
    </ul>
    <p class="highlight-box">ΔH > 0 → Endothermic</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚖️ 4️⃣ Comparing Exothermic and Endothermic Reactions</h3>
  
  <div class="diagram-block hover-pause">
    <h4>📊 Reaction Profile Diagrams</h4>
    <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="max-width: 100%; height: auto; background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; padding: 10px;">
      <!-- Exothermic Side -->
      <text x="130" y="25" fill="#22d3ee" font-size="14" font-weight="bold" text-anchor="middle">EXOTHERMIC</text>
      
      <!-- Exothermic Axes -->
      <line x1="40" y1="280" x2="260" y2="280" stroke="#64748b" stroke-width="2"/>
      <line x1="40" y1="280" x2="40" y2="50" stroke="#64748b" stroke-width="2"/>
      <text x="150" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">Progress of Reaction</text>
      <text x="20" y="165" fill="#94a3b8" font-size="10" text-anchor="middle" transform="rotate(-90, 20, 165)">Energy</text>
      
      <!-- Exothermic Curve -->
      <path d="M 50 120 Q 80 120 100 110 Q 130 60 150 60 Q 170 60 200 110 Q 220 220 250 220" fill="none" stroke="#22d3ee" stroke-width="3">
        <animate attributeName="stroke-dasharray" values="0 500;500 0" dur="2s" fill="freeze"/>
      </path>
      
      <!-- Exothermic Energy Levels -->
      <line x1="45" y1="120" x2="90" y2="120" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5,3"/>
      <line x1="210" y1="220" x2="255" y2="220" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5,3"/>
      <text x="60" y="110" fill="#22d3ee" font-size="9">Reactants</text>
      <text x="215" y="240" fill="#22d3ee" font-size="9">Products</text>
      
      <!-- Activation Energy Arrow -->
      <line x1="150" y1="120" x2="150" y2="60" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowYellow)"/>
      <text x="165" y="90" fill="#f59e0b" font-size="8">Ea</text>
      
      <!-- Energy Released Arrow -->
      <line x1="180" y1="120" x2="180" y2="220" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRed)"/>
      <text x="195" y="175" fill="#ef4444" font-size="8">ΔH &lt; 0</text>
      
      <!-- Energy Release Animation -->
      <circle cx="180" cy="180" r="4" fill="#ef4444">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Endothermic Side -->
      <text x="500" y="25" fill="#fb923c" font-size="14" font-weight="bold" text-anchor="middle">ENDOTHERMIC</text>
      
      <!-- Endothermic Axes -->
      <line x1="380" y1="280" x2="600" y2="280" stroke="#64748b" stroke-width="2"/>
      <line x1="380" y1="280" x2="380" y2="50" stroke="#64748b" stroke-width="2"/>
      <text x="490" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">Progress of Reaction</text>
      
      <!-- Endothermic Curve -->
      <path d="M 390 200 Q 420 200 440 190 Q 470 80 490 80 Q 510 80 540 130 Q 560 140 590 140" fill="none" stroke="#fb923c" stroke-width="3">
        <animate attributeName="stroke-dasharray" values="0 500;500 0" dur="2s" fill="freeze"/>
      </path>
      
      <!-- Endothermic Energy Levels -->
      <line x1="385" y1="200" x2="430" y2="200" stroke="#fb923c" stroke-width="2" stroke-dasharray="5,3"/>
      <line x1="550" y1="140" x2="595" y2="140" stroke="#fb923c" stroke-width="2" stroke-dasharray="5,3"/>
      <text x="400" y="190" fill="#fb923c" font-size="9">Reactants</text>
      <text x="555" y="130" fill="#fb923c" font-size="9">Products</text>
      
      <!-- Activation Energy Arrow -->
      <line x1="490" y1="200" x2="490" y2="80" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowYellow)"/>
      <text x="505" y="140" fill="#f59e0b" font-size="8">Ea</text>
      
      <!-- Energy Absorbed Arrow -->
      <line x1="520" y1="200" x2="520" y2="140" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowGreen)"/>
      <text x="535" y="175" fill="#22c55e" font-size="8">ΔH &gt; 0</text>
      
      <!-- Energy Absorption Animation -->
      <circle cx="520" cy="170" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/>
        <animate attributeName="r" values="4;8;4" dur="1s" repeatCount="indefinite"/>
      </circle>
      
      <!-- Arrow Markers -->
      <defs>
        <marker id="arrowYellow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#f59e0b"/>
        </marker>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444"/>
        </marker>
        <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" fill="#22c55e"/>
        </marker>
      </defs>
      
      <!-- Divider -->
      <line x1="330" y1="40" x2="330" y2="280" stroke="#475569" stroke-width="1" stroke-dasharray="5,5"/>
    </svg>
    
    <div class="color-legend" style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 10px; font-size: 12px;">
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #22d3ee; border-radius: 2px;"></span> Exothermic profile</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #fb923c; border-radius: 2px;"></span> Endothermic profile</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #f59e0b; border-radius: 2px;"></span> Activation energy (Ea)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #ef4444; border-radius: 2px;"></span> Energy released (–ΔH)</span>
      <span style="display: flex; align-items: center; gap: 5px;"><span style="width: 12px; height: 12px; background: #22c55e; border-radius: 2px;"></span> Energy absorbed (+ΔH)</span>
    </div>
  </div>

  <div class="table-block">
    <table>
      <thead>
        <tr><th>Feature</th><th>Exothermic</th><th>Endothermic</th></tr>
      </thead>
      <tbody>
        <tr><td>Energy flow</td><td>Transferred <strong>to</strong> surroundings</td><td>Transferred <strong>from</strong> surroundings</td></tr>
        <tr><td>Temperature change</td><td>Surroundings get <strong>hotter</strong></td><td>Surroundings get <strong>colder</strong></td></tr>
        <tr><td>Energy diagram</td><td>Products have <strong>less</strong> energy than reactants</td><td>Products have <strong>more</strong> energy than reactants</td></tr>
        <tr><td>ΔH value</td><td><strong>Negative (–ΔH)</strong></td><td><strong>Positive (+ΔH)</strong></td></tr>
        <tr><td>Examples</td><td>Combustion, neutralisation</td><td>Photosynthesis, thermal decomposition</td></tr>
        <tr><td>Everyday uses</td><td>Hand warmers, self-heating cans</td><td>Cold packs, instant ice packs</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 5️⃣ Evaluating Uses and Applications</h3>
  
  <div class="spec-point-block">
    <h4>🔵 Specification Point</h4>
    <p>Evaluate uses and applications of exothermic and endothermic reactions given appropriate information.</p>
  </div>

  <div class="table-block">
    <h4>📊 Evaluation Criteria</h4>
    <table>
      <thead>
        <tr><th>Factor</th><th>Explanation</th><th>Example</th></tr>
      </thead>
      <tbody>
        <tr><td>Safety</td><td>Reactions releasing too much heat can be dangerous</td><td>Combustion reactions require control in engines.</td></tr>
        <tr><td>Practicality</td><td>Reactions must be controllable, portable, reusable.</td><td>Hand warmers → limited duration; cold packs → single-use.</td></tr>
        <tr><td>Efficiency</td><td>High energy transfer = better usefulness.</td><td>Self-heating cans with CaO effective for short-term heating.</td></tr>
        <tr><td>Environmental Impact</td><td>Combustion releases CO₂ (greenhouse gas).</td><td>Endothermic cooling packs → eco-friendly, no emissions.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h4>📝 In exams</h4>
    <p>When asked to "evaluate the use", discuss:</p>
    <ul>
      <li>How well it performs its function (e.g. maintains warmth/coldness).</li>
      <li>Whether it's safe, efficient, cost-effective, and environmentally sustainable.</li>
    </ul>
  </div>
</div>
`,
        canonical_keywords: [
          "energy conservation", "exothermic", "endothermic", "energy transfer", "surroundings",
          "combustion", "neutralisation", "oxidation", "thermal decomposition", "photosynthesis",
          "hand warmers", "cold packs", "self-heating cans", "temperature change", "ΔH",
          "negative ΔH", "positive ΔH", "energy released", "energy absorbed"
        ],
        practice_items: [
          {
            id: "5-1-1-q1",
            prompt_template: "Define an exothermic reaction and give two examples.",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["exothermic", "energy released", "surroundings", "temperature increase", "combustion", "neutralisation"]
          },
          {
            id: "5-1-1-q2",
            prompt_template: "Explain why the temperature of surroundings decreases during an endothermic reaction.",
            marks: 3,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["endothermic", "energy absorbed", "surroundings", "bonds", "temperature decrease"]
          },
          {
            id: "5-1-1-q3",
            prompt_template: "Compare and contrast exothermic and endothermic reactions in terms of energy flow, temperature change, and ΔH value.",
            marks: 6,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["exothermic", "endothermic", "energy released", "energy absorbed", "negative ΔH", "positive ΔH", "temperature"]
          }
        ]
      },
      {
        id: "5-1-2-reaction-profiles",
        title: "5.1.2 – REACTION PROFILES",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 1️⃣ What Must Happen for Particles to React?</h3>
  
  <div class="definition-block">
    <h4>⚛️ Collision Theory</h4>
    <p>For a reaction to happen, <strong>three things</strong> must happen at the same time:</p>
    <ol>
      <li><strong>✔ Particles must collide</strong> — If they do not physically touch, bonds cannot break and products cannot form. All reactions start with a collision.</li>
      <li><strong>✔ Particles must collide with enough energy</strong> — More particles move faster = more particles have enough energy to react.</li>
      <li><strong>✔ Particles must collide in the correct orientation</strong> — Atoms inside molecules must face the correct parts of the other molecule. If they hit at the wrong angle, no bonds break, even if the energy is high enough.</li>
    </ol>
  </div>

  <div class="key-idea-block">
    <h4>⭐ Why This Matters</h4>
    <p>Reactions do not happen because collisions occur — they happen because <strong>successful collisions</strong> occur. You can use this line in exams:</p>
    <p class="highlight-box">"A reaction occurs when particles collide with enough energy and the correct orientation to overcome the activation energy."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚡ 2️⃣ What is Activation Energy? (Eₐ)</h3>
  
  <div class="definition-block">
    <h4>✔ Simple Definition</h4>
    <p><strong>Activation energy</strong> is the <strong>minimum energy</strong> particles need to start breaking bonds and reacting.</p>
  </div>

  <div class="key-facts-block">
    <h4>✔ Why Reactions Need Activation Energy</h4>
    <ul>
      <li>All reactants have bonds holding atoms together.</li>
      <li>These bonds must be stretched and weakened first before they can break.</li>
      <li>That initial "push" of energy = activation energy.</li>
      <li>After bonds break and new bonds form, the reaction continues on its own.</li>
    </ul>
  </div>

  <div class="comparison-block">
    <div class="comparison-item">
      <h4>✔ If collisions have less than Eₐ</h4>
      <ul>
        <li>No reaction</li>
        <li>Even if collisions are frequent, they are <strong>not successful</strong></li>
      </ul>
    </div>
    <div class="comparison-item">
      <h4>✔ If collisions have more than Eₐ</h4>
      <ul>
        <li>Bonds start to break</li>
        <li>Reaction begins properly</li>
      </ul>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>⭐ Good Exam Phrase</h4>
    <p class="highlight-box">"Eₐ is the energy barrier that must be overcome for the reaction to proceed."</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📊 3️⃣ What Does a Reaction Profile Show?</h3>
  
  <div class="definition-block">
    <h4>📈 Definition</h4>
    <p>A <strong>reaction profile</strong> is a graph showing how the energy changes during a reaction. It includes:</p>
    <ul>
      <li><strong>Energy of reactants</strong> — How much stored chemical energy reactants have at the start.</li>
      <li><strong>Energy of products</strong> — How much energy products have after the reaction.</li>
      <li><strong>Activation energy (Eₐ)</strong> — Shown as the peak — the highest point. It represents the transition state, where bonds are part-broken and part-formed.</li>
      <li><strong>Overall energy change (ΔH)</strong> — ΔH = Energy of products − Energy of reactants
        <ul>
          <li>If products are lower → ΔH is negative → exothermic</li>
          <li>If products are higher → ΔH is positive → endothermic</li>
        </ul>
      </li>
      <li><strong>Energy pathway curve</strong> — A smooth line showing how energy rises to Eₐ and then falls to the level of products.</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>📚 Why AQA Uses These Diagrams</h4>
    <p>They help you:</p>
    <ul>
      <li>Identify reaction type (exo/endo)</li>
      <li>Identify Eₐ and ΔH</li>
      <li>Explain temperature changes in surroundings</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔥 4️⃣ Exothermic Reaction Profile</h3>
  
  <div class="key-idea-block">
    <h4>📌 Key Idea</h4>
    <p>Exothermic reactions <strong>release energy</strong> to the surroundings. This released energy usually becomes heat → temperature of surroundings rises.</p>
  </div>

  <div class="diagram-block anim-pause-hover">
    <h4>📊 Exothermic Reaction Profile Diagram (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 1rem; background: hsl(var(--muted)/0.3); border-radius: 12px;">
      <svg width="400" height="280" viewBox="0 0 400 280">
        <!-- Axes -->
        <line x1="60" y1="240" x2="380" y2="240" stroke="currentColor" stroke-width="2"/>
        <line x1="60" y1="240" x2="60" y2="30" stroke="currentColor" stroke-width="2"/>
        
        <!-- Axis arrows -->
        <polygon points="380,240 370,235 370,245" fill="currentColor"/>
        <polygon points="60,30 55,40 65,40" fill="currentColor"/>
        
        <!-- Axis labels -->
        <text x="220" y="270" fill="currentColor" font-size="14" text-anchor="middle" font-weight="bold">Progress of Reaction</text>
        <text x="25" y="140" fill="currentColor" font-size="14" text-anchor="middle" font-weight="bold" transform="rotate(-90 25 140)">Energy</text>
        
        <!-- Grid lines (subtle) -->
        <line x1="60" y1="80" x2="380" y2="80" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4,4"/>
        <line x1="60" y1="140" x2="380" y2="140" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4,4"/>
        <line x1="60" y1="200" x2="380" y2="200" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4,4"/>
        
        <!-- Reactants level line -->
        <line x1="60" y1="100" x2="120" y2="100" stroke="#22c55e" stroke-width="3"/>
        <text x="90" y="90" fill="#22c55e" font-size="12" text-anchor="middle" font-weight="bold">Reactants</text>
        
        <!-- Products level line -->
        <line x1="300" y1="180" x2="360" y2="180" stroke="#3b82f6" stroke-width="3"/>
        <text x="330" y="200" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Products</text>
        
        <!-- Energy curve path -->
        <path d="M 120 100 Q 180 100, 210 60 Q 240 20, 270 80 Q 300 140, 300 180" 
              fill="none" stroke="#f97316" stroke-width="3" class="anim-draw-infinite" style="stroke-dasharray: 300;"/>
        
        <!-- Activation energy peak marker -->
        <circle cx="220" cy="50" r="6" fill="#ef4444" class="anim-pulse"/>
        <text x="220" y="35" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Eₐ (peak)</text>
        
        <!-- Activation energy arrow -->
        <line x1="140" y1="100" x2="140" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/>
        <polygon points="140,50 135,60 145,60" fill="#ef4444"/>
        <text x="155" y="75" fill="#ef4444" font-size="10" font-weight="bold">Eₐ</text>
        
        <!-- ΔH arrow (downward) -->
        <line x1="340" y1="100" x2="340" y2="180" stroke="#a855f7" stroke-width="3"/>
        <polygon points="340,180 335,170 345,170" fill="#a855f7"/>
        <text x="365" y="145" fill="#a855f7" font-size="11" font-weight="bold">ΔH</text>
        <text x="365" y="158" fill="#a855f7" font-size="9">(negative)</text>
        
        <!-- Energy released label -->
        <rect x="250" y="210" width="120" height="24" fill="#22c55e" opacity="0.2" rx="4"/>
        <text x="310" y="227" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Energy RELEASED</text>
        
        <!-- Animated particle moving along curve -->
        <circle r="8" fill="#f97316" class="anim-pulse-fast">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 120 100 Q 180 100, 210 60 Q 240 20, 270 80 Q 300 140, 300 180"/>
        </circle>
      </svg>
    </div>
    <div class="diagram-annotations">
      <p><strong>Key features:</strong></p>
      <ul>
        <li>Reactants <strong>HIGHER</strong> than products</li>
        <li>Curve rises to Eₐ (activation energy peak), then drops</li>
        <li>ΔH arrow points <strong>downward</strong> (negative ΔH)</li>
        <li>Energy is <strong>released</strong> to surroundings</li>
      </ul>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🔬 Why Exothermic Reactions Release Energy</h4>
    <ul>
      <li>You need energy to break reactant bonds</li>
      <li>BUT more energy is released when product bonds form</li>
      <li>So the overall result = energy given out</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📘 Examples</h4>
    <ul>
      <li>Combustion (burning fuels)</li>
      <li>Most neutralisation reactions</li>
      <li>Self-heating cans / hand warmers</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">❄️ 5️⃣ Endothermic Reaction Profile</h3>
  
  <div class="key-idea-block">
    <h4>📌 Key Idea</h4>
    <p>Endothermic reactions <strong>take in energy</strong> from the surroundings. This makes the surroundings cooler.</p>
  </div>

  <div class="diagram-block anim-pause-hover">
    <h4>📊 Endothermic Reaction Profile Diagram (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 1rem; background: hsl(var(--muted)/0.3); border-radius: 12px;">
      <svg width="400" height="280" viewBox="0 0 400 280">
        <!-- Axes -->
        <line x1="60" y1="240" x2="380" y2="240" stroke="currentColor" stroke-width="2"/>
        <line x1="60" y1="240" x2="60" y2="30" stroke="currentColor" stroke-width="2"/>
        
        <!-- Axis arrows -->
        <polygon points="380,240 370,235 370,245" fill="currentColor"/>
        <polygon points="60,30 55,40 65,40" fill="currentColor"/>
        
        <!-- Axis labels -->
        <text x="220" y="270" fill="currentColor" font-size="14" text-anchor="middle" font-weight="bold">Progress of Reaction</text>
        <text x="25" y="140" fill="currentColor" font-size="14" text-anchor="middle" font-weight="bold" transform="rotate(-90 25 140)">Energy</text>
        
        <!-- Grid lines (subtle) -->
        <line x1="60" y1="80" x2="380" y2="80" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4,4"/>
        <line x1="60" y1="140" x2="380" y2="140" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4,4"/>
        <line x1="60" y1="200" x2="380" y2="200" stroke="currentColor" stroke-width="0.5" opacity="0.2" stroke-dasharray="4,4"/>
        
        <!-- Reactants level line -->
        <line x1="60" y1="180" x2="120" y2="180" stroke="#22c55e" stroke-width="3"/>
        <text x="90" y="200" fill="#22c55e" font-size="12" text-anchor="middle" font-weight="bold">Reactants</text>
        
        <!-- Products level line -->
        <line x1="300" y1="100" x2="360" y2="100" stroke="#3b82f6" stroke-width="3"/>
        <text x="330" y="90" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Products</text>
        
        <!-- Energy curve path -->
        <path d="M 120 180 Q 160 180, 190 120 Q 220 50, 250 70 Q 280 90, 300 100" 
              fill="none" stroke="#06b6d4" stroke-width="3" class="anim-draw-infinite" style="stroke-dasharray: 300;"/>
        
        <!-- Activation energy peak marker -->
        <circle cx="220" cy="50" r="6" fill="#ef4444" class="anim-pulse"/>
        <text x="220" y="35" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Eₐ (peak)</text>
        
        <!-- Activation energy arrow -->
        <line x1="140" y1="180" x2="140" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="5,3"/>
        <polygon points="140,50 135,60 145,60" fill="#ef4444"/>
        <text x="155" y="115" fill="#ef4444" font-size="10" font-weight="bold">Eₐ</text>
        
        <!-- ΔH arrow (upward) -->
        <line x1="340" y1="180" x2="340" y2="100" stroke="#a855f7" stroke-width="3"/>
        <polygon points="340,100 335,110 345,110" fill="#a855f7"/>
        <text x="365" y="135" fill="#a855f7" font-size="11" font-weight="bold">ΔH</text>
        <text x="365" y="148" fill="#a855f7" font-size="9">(positive)</text>
        
        <!-- Energy absorbed label -->
        <rect x="250" y="210" width="120" height="24" fill="#06b6d4" opacity="0.2" rx="4"/>
        <text x="310" y="227" fill="#06b6d4" font-size="11" text-anchor="middle" font-weight="bold">Energy ABSORBED</text>
        
        <!-- Animated particle moving along curve -->
        <circle r="8" fill="#06b6d4" class="anim-pulse-fast">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 120 180 Q 160 180, 190 120 Q 220 50, 250 70 Q 280 90, 300 100"/>
        </circle>
      </svg>
    </div>
    <div class="diagram-annotations">
      <p><strong>Key features:</strong></p>
      <ul>
        <li>Reactants <strong>LOWER</strong> than products</li>
        <li>Curve rises to Eₐ, then settles at higher product level</li>
        <li>ΔH arrow points <strong>upward</strong> (positive ΔH)</li>
        <li>Energy is <strong>absorbed</strong> from surroundings</li>
      </ul>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🔬 Why Endothermic Reactions Absorb Energy</h4>
    <ul>
      <li>Breaking bonds needs energy</li>
      <li>Forming product bonds releases energy</li>
      <li>In endothermic reactions: more energy is absorbed than released</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📘 Examples</h4>
    <ul>
      <li>Thermal decomposition</li>
      <li>Photosynthesis</li>
      <li>Instant cold packs</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🔍 6️⃣ Using Reaction Profiles to Identify Reaction Type</h3>
  
  <div class="diagram-block anim-pause-hover">
    <h4>📊 Comparison of Exothermic and Endothermic Profiles (hover to pause)</h4>
    <div style="display: flex; justify-content: center; gap: 1rem; padding: 1rem; background: hsl(var(--muted)/0.3); border-radius: 12px; flex-wrap: wrap;">
      <!-- Exothermic (left) -->
      <svg width="280" height="220" viewBox="0 0 280 220">
        <text x="140" y="20" fill="#f97316" font-size="14" text-anchor="middle" font-weight="bold">EXOTHERMIC</text>
        
        <!-- Axes -->
        <line x1="40" y1="190" x2="260" y2="190" stroke="currentColor" stroke-width="1.5"/>
        <line x1="40" y1="190" x2="40" y2="30" stroke="currentColor" stroke-width="1.5"/>
        <polygon points="260,190 252,186 252,194" fill="currentColor"/>
        <polygon points="40,30 36,38 44,38" fill="currentColor"/>
        
        <!-- Labels -->
        <text x="150" y="210" fill="currentColor" font-size="10" text-anchor="middle">Progress of Reaction</text>
        <text x="15" y="110" fill="currentColor" font-size="10" text-anchor="middle" transform="rotate(-90 15 110)">Energy</text>
        
        <!-- Reactants -->
        <line x1="40" y1="70" x2="80" y2="70" stroke="#22c55e" stroke-width="2.5"/>
        <text x="60" y="62" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">Reactants</text>
        
        <!-- Products (lower) -->
        <line x1="200" y1="140" x2="240" y2="140" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="220" y="155" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Products</text>
        
        <!-- Curve -->
        <path d="M 80 70 Q 120 70, 140 45 Q 160 20, 180 60 Q 200 100, 200 140" 
              fill="none" stroke="#f97316" stroke-width="2.5"/>
        
        <!-- Ea peak -->
        <circle cx="145" cy="40" r="4" fill="#ef4444" class="anim-pulse"/>
        <text x="145" y="30" fill="#ef4444" font-size="8" text-anchor="middle">Eₐ</text>
        
        <!-- ΔH arrow down -->
        <line x1="230" y1="70" x2="230" y2="140" stroke="#a855f7" stroke-width="2"/>
        <polygon points="230,140 226,132 234,132" fill="#a855f7"/>
        <text x="250" y="108" fill="#a855f7" font-size="8">−ΔH</text>
        
        <!-- Energy released -->
        <text x="140" y="180" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">↓ Energy Released</text>
        
        <!-- Animated particle -->
        <circle r="5" fill="#f97316" class="anim-pulse-fast">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 80 70 Q 120 70, 140 45 Q 160 20, 180 60 Q 200 100, 200 140"/>
        </circle>
      </svg>
      
      <!-- Endothermic (right) -->
      <svg width="280" height="220" viewBox="0 0 280 220">
        <text x="140" y="20" fill="#06b6d4" font-size="14" text-anchor="middle" font-weight="bold">ENDOTHERMIC</text>
        
        <!-- Axes -->
        <line x1="40" y1="190" x2="260" y2="190" stroke="currentColor" stroke-width="1.5"/>
        <line x1="40" y1="190" x2="40" y2="30" stroke="currentColor" stroke-width="1.5"/>
        <polygon points="260,190 252,186 252,194" fill="currentColor"/>
        <polygon points="40,30 36,38 44,38" fill="currentColor"/>
        
        <!-- Labels -->
        <text x="150" y="210" fill="currentColor" font-size="10" text-anchor="middle">Progress of Reaction</text>
        <text x="15" y="110" fill="currentColor" font-size="10" text-anchor="middle" transform="rotate(-90 15 110)">Energy</text>
        
        <!-- Reactants (lower) -->
        <line x1="40" y1="140" x2="80" y2="140" stroke="#22c55e" stroke-width="2.5"/>
        <text x="60" y="155" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">Reactants</text>
        
        <!-- Products (higher) -->
        <line x1="200" y1="70" x2="240" y2="70" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="220" y="62" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Products</text>
        
        <!-- Curve -->
        <path d="M 80 140 Q 110 140, 130 90 Q 150 40, 170 50 Q 190 60, 200 70" 
              fill="none" stroke="#06b6d4" stroke-width="2.5"/>
        
        <!-- Ea peak -->
        <circle cx="145" cy="45" r="4" fill="#ef4444" class="anim-pulse"/>
        <text x="145" y="35" fill="#ef4444" font-size="8" text-anchor="middle">Eₐ</text>
        
        <!-- ΔH arrow up -->
        <line x1="230" y1="140" x2="230" y2="70" stroke="#a855f7" stroke-width="2"/>
        <polygon points="230,70 226,78 234,78" fill="#a855f7"/>
        <text x="250" y="108" fill="#a855f7" font-size="8">+ΔH</text>
        
        <!-- Energy absorbed -->
        <text x="140" y="180" fill="#06b6d4" font-size="9" text-anchor="middle" font-weight="bold">↑ Energy Absorbed</text>
        
        <!-- Animated particle -->
        <circle r="5" fill="#06b6d4" class="anim-pulse-fast">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 80 140 Q 110 140, 130 90 Q 150 40, 170 50 Q 190 60, 200 70"/>
        </circle>
      </svg>
    </div>
  </div>

  <div class="comparison-block">
    <div class="comparison-item">
      <h4>✔ If products are LOWER → Exothermic</h4>
      <ul>
        <li>ΔH is negative</li>
        <li>Energy leaves the reaction</li>
        <li>Surroundings heat up</li>
      </ul>
    </div>
    <div class="comparison-item">
      <h4>✔ If products are HIGHER → Endothermic</h4>
      <ul>
        <li>ΔH is positive</li>
        <li>Energy enters the reaction</li>
        <li>Surroundings cool</li>
      </ul>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>⭐ How to Answer Questions Like This</h4>
    <p class="highlight-box">"The products are at a lower energy level than the reactants, so energy has been released to the surroundings, making the reaction exothermic."</p>
  </div>
</div>
`,
        canonical_keywords: [
          "reaction profile", "activation energy", "Eₐ", "collision theory", "successful collision",
          "transition state", "energy diagram", "exothermic profile", "endothermic profile",
          "reactants", "products", "ΔH", "energy pathway", "bond breaking", "bond forming"
        ],
        practice_items: [
          {
            id: "5-1-2-q1",
            prompt_template: "Define activation energy and explain why it is needed for reactions to occur.",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["activation energy", "minimum energy", "bonds", "break", "react"]
          },
          {
            id: "5-1-2-q2",
            prompt_template: "Describe and sketch a reaction profile for an exothermic reaction, labelling the activation energy and ΔH.",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["exothermic", "reactants higher", "products lower", "activation energy", "ΔH negative", "energy released"]
          },
          {
            id: "5-1-2-q3",
            prompt_template: "A student observes a reaction profile where the products are at a higher energy level than the reactants. Explain what type of reaction this is and what happens to the temperature of the surroundings.",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["endothermic", "products higher", "energy absorbed", "temperature decreases", "ΔH positive"]
          }
        ]
      },
      {
        id: "5-1-3-bond-energies",
        title: "5.1.3 – THE ENERGY CHANGE OF REACTIONS (BOND ENERGIES)",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">⚡ 1️⃣ Energy is Required to Break Bonds, and Energy is Released When New Bonds Form</h3>
  
  <div class="key-idea-block">
    <h4>📌 Key Idea</h4>
    <p>During chemical reactions, two things always happen:</p>
  </div>

  <div class="comparison-block">
    <div class="comparison-item">
      <h4>1. Breaking Bonds (in reactants)</h4>
      <ul>
        <li>Requires energy</li>
        <li>Energy must be <strong>supplied</strong></li>
        <li>This step is <strong>endothermic</strong></li>
      </ul>
      <p>Because reactant bonds must be pulled apart, energy must always be put in.</p>
    </div>
    <div class="comparison-item">
      <h4>2. Forming Bonds (in products)</h4>
      <ul>
        <li>Releases energy</li>
        <li>Energy is <strong>given out</strong></li>
        <li>This step is <strong>exothermic</strong></li>
      </ul>
      <p>When new, stable bonds form, energy leaves the reacting molecules and enters the surroundings.</p>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>📝 Exam Sentence to Memorise</h4>
    <p class="highlight-box">"Bond breaking is endothermic because energy is needed to break bonds. Bond forming is exothermic because energy is released when new bonds are made."</p>
    <p>This appears almost word for word in mark schemes.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧮 2️⃣ Calculating Energy Needed to Break Bonds and Energy Released from Forming Bonds</h3>
  
  <div class="definition-block">
    <h4>📚 Bond Energy Definition</h4>
    <p>A <strong>bond energy</strong> is the amount of energy needed to break <strong>1 mole</strong> of a particular bond.</p>
    <p><strong>Example:</strong> H–H bond energy = 436 kJ/mol → It takes 436 kJ to break 1 mol of H–H bonds.</p>
  </div>

  <div class="key-facts-block">
    <h4>📊 How to Calculate</h4>
    <p>To find the total energy change in a reaction:</p>
    <ol>
      <li>Add up all the bond energies of <strong>bonds broken</strong> (reactants)</li>
      <li>Add up all the bond energies of <strong>bonds formed</strong> (products)</li>
      <li>Apply the formula:</li>
    </ol>
    <p class="equation highlight-box">Energy change = Energy in (breaking bonds) − Energy out (forming bonds)</p>
  </div>

  <div class="key-idea-block">
    <h4>🔬 Why This Formula Works</h4>
    <p>Because breaking bonds always takes in energy and forming bonds always releases energy.</p>
    <ul>
      <li>If result is <strong>positive</strong> → endothermic</li>
      <li>If result is <strong>negative</strong> → exothermic</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">⚖️ 3️⃣ How the Energy Needed vs. Energy Released Determines Reaction Type</h3>
  
  <div class="comparison-block">
    <div class="comparison-item">
      <h4>🔥 Exothermic Reaction</h4>
      <p>Energy released (forming bonds) <strong>greater than</strong> energy supplied (breaking bonds).</p>
      <p class="equation">Energy in < Energy out</p>
      <ul>
        <li>ΔH is <strong>negative</strong></li>
        <li>Temperature of surroundings <strong>increases</strong></li>
      </ul>
    </div>
    <div class="comparison-item">
      <h4>❄️ Endothermic Reaction</h4>
      <p>Energy needed to break bonds <strong>greater than</strong> energy released forming bonds.</p>
      <p class="equation">Energy in > Energy out</p>
      <ul>
        <li>ΔH is <strong>positive</strong></li>
        <li>Temperature of surroundings <strong>decreases</strong></li>
      </ul>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📐 4️⃣ Calculating the Energy Change Using Supplied Bond Energies</h3>
  
  <div class="key-facts-block">
    <h4>📋 Steps to Follow (Must Memorise)</h4>
    <ol>
      <li>Write the balanced equation</li>
      <li>Draw out all reactant molecules (if needed)</li>
      <li>List all bonds broken</li>
      <li>List all bonds formed</li>
      <li>Use: <span class="equation">Energy change = Total energy to break bonds − Total energy released by bond formation</span></li>
      <li>Decide reaction type:
        <ul>
          <li>Positive = endothermic</li>
          <li>Negative = exothermic</li>
        </ul>
      </li>
    </ol>
  </div>

  <div class="example-block">
    <h4>💎 Worked Example (AQA Style)</h4>
    <p><strong>Reaction:</strong></p>
    <p class="equation">H₂ + Cl₂ → 2HCl</p>
    <p><strong>Bond energies given:</strong></p>
    <table>
      <thead>
        <tr><th>Bond</th><th>Energy (kJ/mol)</th></tr>
      </thead>
      <tbody>
        <tr><td>H–H</td><td>436</td></tr>
        <tr><td>Cl–Cl</td><td>243</td></tr>
        <tr><td>H–Cl</td><td>431</td></tr>
      </tbody>
    </table>
    
    <p><strong>Step 1 – Bonds broken (reactants):</strong></p>
    <ul>
      <li>1 × H–H = 436 kJ</li>
      <li>1 × Cl–Cl = 243 kJ</li>
    </ul>
    <p><strong>Total energy in: 436 + 243 = 679 kJ</strong></p>
    
    <p><strong>Step 2 – Bonds formed (products):</strong></p>
    <ul>
      <li>2 × H–Cl = 2 × 431 = 862 kJ</li>
    </ul>
    <p><strong>Total energy out: 862 kJ</strong></p>
    
    <p><strong>Step 3 – Apply the formula:</strong></p>
    <p class="equation">Energy change = 679 − 862 = −183 kJ</p>
    
    <p class="highlight-box">✔ Result: <strong>−183 kJ (exothermic)</strong><br/>Negative value → energy released.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">📊 5️⃣ Linking to Reaction Profiles</h3>
  
  <div class="key-idea-block">
    <h4>📈 Connecting Calculations to Diagrams</h4>
    <p>Whenever you do bond energy calculations, you can describe the energy change using a reaction profile diagram.</p>
  </div>

  <div class="diagram-block">
    <h4>📊 Reaction Profile Linking to Bond Energies</h4>
    <img src="/images/reaction-profiles-comparison.png" alt="Reaction profile diagram showing reactants, activation energy peak, products, and ΔH arrow" class="diagram-image" />
    <div class="diagram-annotations">
      <p><strong>The diagram shows:</strong></p>
      <ul>
        <li>Reactants → Activation energy peak → Products</li>
        <li>Reactants and products clearly labelled</li>
        <li>The ΔH arrow (up or down depending on reaction)</li>
        <li>The activation energy arrow</li>
        <li>Curve showing the energy pathway</li>
      </ul>
    </div>
  </div>

  <div class="exam-tip-block">
    <h4>💡 Why This Helps</h4>
    <p>This helps visualise <strong>why ΔH is positive or negative</strong> — you can see the difference in energy levels between reactants and products.</p>
  </div>
</div>
`,
        canonical_keywords: [
          "bond energy", "bond breaking", "bond forming", "endothermic", "exothermic",
          "energy calculation", "kJ/mol", "energy in", "energy out", "ΔH",
          "balanced equation", "moles", "energy change formula"
        ],
        practice_items: [
          {
            id: "5-1-3-q1",
            prompt_template: "Explain why bond breaking is an endothermic process and bond forming is an exothermic process.",
            marks: 4,
            type: "open",
            difficulty: "medium",
            randomise: false,
            expected_keywords: ["bond breaking", "endothermic", "energy required", "bond forming", "exothermic", "energy released"]
          },
          {
            id: "5-1-3-q2",
            prompt_template: "Calculate the energy change for the reaction N₂ + 3H₂ → 2NH₃ given: N≡N = 945 kJ/mol, H–H = 436 kJ/mol, N–H = 391 kJ/mol. State whether the reaction is exothermic or endothermic.",
            marks: 5,
            type: "open",
            difficulty: "hard",
            randomise: false,
            expected_keywords: ["bonds broken", "bonds formed", "945", "436", "391", "energy change", "exothermic", "negative"]
          },
          {
            id: "5-1-3-q3",
            prompt_template: "Write the formula used to calculate energy change from bond energies and explain what a negative result indicates.",
            marks: 3,
            type: "open",
            difficulty: "easy",
            randomise: false,
            expected_keywords: ["energy in", "energy out", "breaking bonds", "forming bonds", "negative", "exothermic"]
          }
        ]
      }
    ]
  },
  {
    id: "rate-extent",
    title: "Rate & extent of chemical change",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "organic-chemistry",
    title: "Organic chemistry",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "chemical-analysis",
    title: "Chemical analysis, the atmosphere & using resources",
    status: "coming_soon",
    subsections: []
  },
  {
    id: "required-practicals",
    title: "Required Practicals",
    status: "ready",
    subsections: [
      {
        id: "rp-neutralisation-titration",
        title: "Required Practical: Neutralisation Titration",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 — Purpose of the Practical</h3>
  <div class="definition-block">
    <h4>🎯 Aims:</h4>
    <ul>
      <li>To accurately measure how much acid neutralises a known volume of alkali (or vice versa)</li>
      <li>To use the results to calculate concentration (mol/dm³) using titration maths</li>
      <li>To identify the exact neutralisation point using a suitable indicator (single colour change)</li>
    </ul>
  </div>
  <div class="key-facts-block">
    <h4>📋 AQA Specification:</h4>
    <p>This practical uses <strong>strong acids only</strong>: HCl, H₂SO₄, HNO₃</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 — Required Apparatus</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Titration Apparatus Setup</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="380" viewBox="0 0 420 380">
        <!-- Clamp Stand -->
        <rect x="50" y="350" width="320" height="15" fill="#64748b"/>
        <rect x="60" y="30" width="15" height="320" fill="#64748b"/>
        <rect x="60" y="60" width="80" height="10" fill="#64748b"/>
        
        <!-- Burette Clamp -->
        <rect x="130" y="55" width="60" height="15" fill="#94a3b8"/>
        
        <!-- Burette -->
        <rect x="155" y="70" width="16" height="180" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <rect x="155" y="70" width="16" height="180" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Burette tap -->
        <rect x="158" y="250" width="10" height="15" fill="#ef4444"/>
        <line x1="163" y1="265" x2="163" y2="290" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Acid drops animation -->
        <g class="anim-flow-down">
          <circle cx="163" cy="295" r="3" fill="#3b82f6"/>
          <circle cx="163" cy="310" r="2" fill="#3b82f6" opacity="0.6"/>
        </g>
        
        <!-- Scale markings on burette -->
        <text x="175" y="85" fill="currentColor" font-size="8">0</text>
        <text x="175" y="130" fill="currentColor" font-size="8">10</text>
        <text x="175" y="175" fill="currentColor" font-size="8">25</text>
        <text x="175" y="220" fill="currentColor" font-size="8">40</text>
        <text x="175" y="245" fill="currentColor" font-size="8">50</text>
        
        <!-- Conical Flask -->
        <path d="M120 320 L145 340 L145 355 L200 355 L200 340 L225 320 L173 320 Z" fill="none" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="173" cy="320" rx="52" ry="8" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Solution in flask with indicator -->
        <path d="M148 340 L148 352 L198 352 L198 340 Z" fill="#ec4899" opacity="0.6"/>
        
        <!-- White Tile -->
        <rect x="110" y="355" width="130" height="12" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
        <text x="175" y="364" fill="#64748b" font-size="8" text-anchor="middle">White Tile</text>
        
        <!-- Labels -->
        <text x="200" y="150" fill="#3b82f6" font-size="10" font-weight="bold">Burette</text>
        <text x="200" y="162" fill="#3b82f6" font-size="8">(contains acid)</text>
        
        <text x="250" y="335" fill="#ec4899" font-size="10" font-weight="bold">Conical Flask</text>
        <text x="250" y="347" fill="#ec4899" font-size="8">(alkali + indicator)</text>
        
        <!-- Pipette illustration -->
        <rect x="280" y="100" width="8" height="100" fill="none" stroke="#22c55e" stroke-width="2"/>
        <ellipse cx="284" cy="200" rx="12" ry="6" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="310" y="150" fill="#22c55e" font-size="10" font-weight="bold">25 cm³ Pipette</text>
        <text x="310" y="162" fill="#22c55e" font-size="8">(measures alkali)</text>
        
        <!-- Funnel note -->
        <path d="M320 220 L340 220 L350 250 L330 250 Z" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="355" y="240" fill="#f59e0b" font-size="9">Funnel</text>
        <text x="355" y="252" fill="#f59e0b" font-size="7">(for filling)</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Apparatus</th><th>Purpose</th><th>Accuracy</th></tr></thead>
    <tbody>
      <tr><td>Burette</td><td>Delivers variable, precise volumes</td><td>±0.05 cm³</td></tr>
      <tr><td>25 cm³ Pipette + Filler</td><td>Measures fixed accurate volume</td><td>±0.06 cm³</td></tr>
      <tr><td>Conical Flask</td><td>Reaction vessel</td><td>—</td></tr>
      <tr><td>Clamp Stand</td><td>Holds burette securely</td><td>—</td></tr>
      <tr><td>Funnel</td><td>Safer burette filling</td><td>—</td></tr>
      <tr><td>White Tile</td><td>Makes colour change easier to see</td><td>—</td></tr>
    </tbody>
  </table>
  
  <div class="key-facts-block">
    <h4>🧪 Indicators (ONLY for strong acid + strong alkali):</h4>
    <ul>
      <li><strong>Phenolphthalein:</strong> pink → colourless</li>
      <li><strong>Methyl orange:</strong> red → yellow</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 — Step-by-Step Method</h3>
  
  <div class="key-facts-block">
    <h4>1️⃣ Prepare the Alkali</h4>
    <ul>
      <li>Use a pipette to measure <strong>25.0 cm³</strong> of alkali (e.g., NaOH)</li>
      <li>Transfer it into a conical flask</li>
      <li>Add <strong>2–3 drops</strong> of indicator</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>2️⃣ Prepare the Acid</h4>
    <ul>
      <li>Fill a burette with the acid (HCl / H₂SO₄ / HNO₃)</li>
      <li><strong>Remove funnel</strong> before titrating</li>
      <li>Record the initial burette reading (to <strong>2 decimal places</strong>)</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>3️⃣ Titrate</h4>
    <ul>
      <li>Slowly add the acid while <strong>swirling</strong> the conical flask</li>
      <li>Near end-point, add the acid <strong>dropwise</strong></li>
      <li>Stop when the <strong>first permanent colour change</strong> occurs</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>4️⃣ Record Results</h4>
    <ul>
      <li>Record the final burette reading</li>
      <li>Calculate the titre:</li>
    </ul>
  </div>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <p style="font-size: 1.2rem; font-weight: bold; color: hsl(var(--primary));">Titre (cm³) = Final reading − Initial reading</p>
  </div>
  
  <div class="key-facts-block">
    <h4>5️⃣ Repeat</h4>
    <ul>
      <li>Repeat until two <strong>concordant titres</strong> are within <strong>±0.10 cm³</strong></li>
      <li>Use <strong>ONLY concordant titres</strong> to calculate the mean</li>
    </ul>
  </div>
  
  <!-- Results Table Example -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📊 Example Results Table</h4>
    <table class="data-table" style="margin: 0.5rem 0;">
      <thead><tr><th>Trial</th><th>Initial (cm³)</th><th>Final (cm³)</th><th>Titre (cm³)</th></tr></thead>
      <tbody>
        <tr><td>Rough</td><td>0.00</td><td>24.80</td><td style="color: #ef4444;">24.80 ✗</td></tr>
        <tr><td>1</td><td>0.00</td><td>24.35</td><td style="color: #22c55e;">24.35 ✓</td></tr>
        <tr><td>2</td><td>0.00</td><td>24.40</td><td style="color: #22c55e;">24.40 ✓</td></tr>
        <tr><td>3</td><td>0.00</td><td>24.30</td><td style="color: #22c55e;">24.30 ✓</td></tr>
      </tbody>
    </table>
    <p style="text-align: center; font-size: 0.9rem;"><strong>Mean titre = (24.35 + 24.40 + 24.30) ÷ 3 = 24.35 cm³</strong></p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 — Choosing the Right Indicator</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🎨 Indicator Colour Changes</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="150" viewBox="0 0 400 150">
        <!-- Phenolphthalein -->
        <text x="100" y="25" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Phenolphthalein</text>
        <circle cx="50" cy="60" r="25" fill="#ec4899"/>
        <text x="50" y="65" fill="white" font-size="9" text-anchor="middle">Pink</text>
        <text x="50" y="100" fill="currentColor" font-size="8" text-anchor="middle">Alkali</text>
        <path d="M80 60 L120 60" stroke="currentColor" stroke-width="2" marker-end="url(#arrowInd)"/>
        <circle cx="150" cy="60" r="25" fill="transparent" stroke="currentColor" stroke-width="2"/>
        <text x="150" y="65" fill="currentColor" font-size="8" text-anchor="middle">Colourless</text>
        <text x="150" y="100" fill="currentColor" font-size="8" text-anchor="middle">Neutral/Acid</text>
        
        <!-- Methyl Orange -->
        <text x="300" y="25" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Methyl Orange</text>
        <circle cx="250" cy="60" r="25" fill="#ef4444"/>
        <text x="250" y="65" fill="white" font-size="9" text-anchor="middle">Red</text>
        <text x="250" y="100" fill="currentColor" font-size="8" text-anchor="middle">Acid</text>
        <path d="M280 60 L320 60" stroke="currentColor" stroke-width="2" marker-end="url(#arrowInd)"/>
        <circle cx="350" cy="60" r="25" fill="#fbbf24"/>
        <text x="350" y="65" fill="white" font-size="9" text-anchor="middle">Yellow</text>
        <text x="350" y="100" fill="currentColor" font-size="8" text-anchor="middle">Alkali</text>
        
        <!-- Warning -->
        <rect x="100" y="115" width="200" height="25" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" rx="5"/>
        <text x="200" y="132" fill="#92400e" font-size="9" text-anchor="middle" font-weight="bold">⚠️ Do NOT use universal indicator!</text>
        
        <defs>
          <marker id="arrowInd" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Reaction Type</th><th>Indicator</th><th>Colour Change</th></tr></thead>
    <tbody>
      <tr><td>Strong Acid + Strong Alkali</td><td>Phenolphthalein</td><td>Pink → Colourless</td></tr>
      <tr><td>Strong Acid + Strong Alkali</td><td>Methyl Orange</td><td>Red → Yellow</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 — Calculations You MUST Know</h3>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>1️⃣ Moles of Known Substance</h4>
    <p style="font-size: 1.4rem; font-weight: bold; color: hsl(var(--primary));">moles = concentration (mol/dm³) × volume (dm³)</p>
  </div>
  
  <div class="key-facts-block">
    <h4>2️⃣ Use the Balanced Equation</h4>
    <p>Example: <strong>NaOH + HCl → NaCl + H₂O</strong></p>
    <p>Ratio = <strong>1 : 1</strong></p>
  </div>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>3️⃣ Find Unknown Concentration</h4>
    <p style="font-size: 1.4rem; font-weight: bold; color: hsl(var(--primary));">concentration = moles ÷ volume (dm³)</p>
  </div>
  
  <div class="exam-tip-block">
    <h4>💡 Remember:</h4>
    <p>Convert cm³ to dm³ by dividing by 1000</p>
    <p>Example: 25.0 cm³ = 0.025 dm³</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 — Sources of Error & Improvements</h3>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Error</th><th>Improvement</th></tr></thead>
    <tbody>
      <tr><td>Parallax error when reading burette</td><td>Keep eye level with meniscus</td></tr>
      <tr><td>Overshooting end point</td><td>Add dropwise near end</td></tr>
      <tr><td>Contamination</td><td>Rinse pipette, burette, flask correctly</td></tr>
      <tr><td>Wrong indicator</td><td>Use correct one for strong acid + strong alkali</td></tr>
      <tr><td>Temperature changes</td><td>Titration at room temperature</td></tr>
    </tbody>
  </table>
  
  <!-- Parallax error diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>👁️ Avoiding Parallax Error</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="120" viewBox="0 0 300 120">
        <!-- Burette section -->
        <rect x="130" y="20" width="40" height="80" fill="none" stroke="currentColor" stroke-width="2"/>
        <rect x="130" y="50" width="40" height="30" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Meniscus -->
        <path d="M132 50 Q150 55, 168 50" fill="none" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Correct eye position -->
        <circle cx="80" cy="52" r="8" fill="#22c55e"/>
        <circle cx="78" cy="50" r="2" fill="white"/>
        <line x1="88" y1="52" x2="130" y2="52" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="50" y="75" fill="#22c55e" font-size="9" text-anchor="middle">Correct ✓</text>
        
        <!-- Wrong eye position -->
        <circle cx="80" cy="25" r="8" fill="#ef4444"/>
        <circle cx="78" cy="23" r="2" fill="white"/>
        <line x1="88" y1="25" x2="130" y2="45" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="50" y="15" fill="#ef4444" font-size="9" text-anchor="middle">Wrong ✗</text>
        
        <!-- Scale markings -->
        <line x1="170" y1="40" x2="180" y2="40" stroke="currentColor" stroke-width="1"/>
        <line x1="170" y1="50" x2="180" y2="50" stroke="currentColor" stroke-width="1"/>
        <line x1="170" y1="60" x2="180" y2="60" stroke="currentColor" stroke-width="1"/>
        
        <text x="230" y="55" fill="currentColor" font-size="9">Read at bottom</text>
        <text x="230" y="68" fill="currentColor" font-size="9">of meniscus</text>
      </svg>
    </div>
  </div>
</div>
        `,
        canonical_keywords: ["titration", "neutralisation", "burette", "pipette", "indicator", "phenolphthalein", "methyl orange", "concordant", "titre", "concentration"],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Describe the method for carrying out a titration to find the concentration of an acid.",
            marks: 6,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["pipette", "25 cm3", "alkali", "burette", "acid", "indicator", "swirl", "dropwise", "colour change", "concordant"]
          },
          {
            id: "p2",
            prompt_template: "Explain why universal indicator is not suitable for titrations.",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["gradual", "colour change", "not sharp", "end point"]
          },
          {
            id: "p3",
            prompt_template: "What does concordant mean in the context of titrations?",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["within", "0.10", "similar", "results"]
          }
        ]
      },
      {
        id: "rp-temperature-changes",
        title: "Required Practical: Temperature Changes (Calorimetry)",
        type: "content",
        study_group: 2,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 — Aim</h3>
  <div class="definition-block">
    <h4>🎯 Purpose:</h4>
    <p>To measure the temperature change during a chemical reaction (usually neutralisation: HCl + NaOH).</p>
  </div>
  <div class="key-facts-block">
    <h4>📋 Investigate how variables affect ΔT:</h4>
    <ul>
      <li>Volume of reactants</li>
      <li>Concentration</li>
      <li>Type of reaction (neutralisation, dissolving, displacement)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 — Apparatus</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Calorimetry Setup</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="320" viewBox="0 0 350 320">
        <!-- Outer beaker (support) -->
        <path d="M100 280 L100 150 Q100 140, 110 140 L240 140 Q250 140, 250 150 L250 280" fill="none" stroke="#94a3b8" stroke-width="2"/>
        <ellipse cx="175" cy="280" rx="75" ry="12" fill="none" stroke="#94a3b8" stroke-width="2"/>
        <text x="280" y="220" fill="#94a3b8" font-size="9">Beaker</text>
        <text x="280" y="232" fill="#94a3b8" font-size="8">(support)</text>
        
        <!-- Polystyrene cup -->
        <path d="M120 270 L120 170 Q120 160, 135 160 L215 160 Q230 160, 230 170 L230 270" fill="#f8fafc" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="175" cy="270" rx="55" ry="8" fill="#f8fafc" stroke="currentColor" stroke-width="2"/>
        
        <!-- Solution in cup -->
        <ellipse cx="175" cy="240" rx="50" ry="6" fill="#3b82f6" opacity="0.3"/>
        <path d="M125 240 L125 265 Q125 268, 175 268 Q225 268, 225 265 L225 240" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Lid with hole -->
        <ellipse cx="175" cy="160" rx="58" ry="10" fill="#e2e8f0" stroke="currentColor" stroke-width="2"/>
        <circle cx="175" cy="160" r="8" fill="white" stroke="currentColor" stroke-width="1"/>
        
        <!-- Thermometer -->
        <rect x="170" y="60" width="10" height="180" fill="none" stroke="#ef4444" stroke-width="2" rx="5"/>
        <rect x="172" y="200" width="6" height="30" fill="#ef4444"/>
        <circle cx="175" cy="235" r="8" fill="#ef4444"/>
        
        <!-- Temperature scale -->
        <line x1="180" y1="80" x2="190" y2="80" stroke="currentColor" stroke-width="1"/>
        <line x1="180" y1="110" x2="190" y2="110" stroke="currentColor" stroke-width="1"/>
        <line x1="180" y1="140" x2="190" y2="140" stroke="currentColor" stroke-width="1"/>
        <text x="195" y="85" fill="currentColor" font-size="8">100°C</text>
        <text x="195" y="115" fill="currentColor" font-size="8">50°C</text>
        <text x="195" y="145" fill="currentColor" font-size="8">0°C</text>
        
        <!-- Stirrer -->
        <rect x="205" y="100" width="6" height="140" fill="#22c55e" rx="2"/>
        <rect x="200" y="235" width="16" height="25" fill="#22c55e" rx="3"/>
        
        <!-- Labels -->
        <text x="50" y="165" fill="currentColor" font-size="9" font-weight="bold">Polystyrene</text>
        <text x="50" y="177" fill="currentColor" font-size="9" font-weight="bold">Cup</text>
        <text x="50" y="192" fill="currentColor" font-size="8">(reduces heat loss)</text>
        
        <text x="230" y="75" fill="#ef4444" font-size="9" font-weight="bold">Thermometer</text>
        
        <text x="245" y="130" fill="#22c55e" font-size="9" font-weight="bold">Stirrer</text>
        
        <text x="175" y="255" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Solution</text>
        
        <!-- Lid label -->
        <line x1="100" y1="160" x2="117" y2="160" stroke="currentColor" stroke-width="1"/>
        <text x="60" y="150" fill="currentColor" font-size="8">Lid with</text>
        <text x="60" y="162" fill="currentColor" font-size="8">hole</text>
      </svg>
    </div>
  </div>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Apparatus</th><th>Purpose</th></tr></thead>
    <tbody>
      <tr><td>Polystyrene cup</td><td>Reduces heat loss (insulation)</td></tr>
      <tr><td>Lid with hole</td><td>Further reduces heat loss</td></tr>
      <tr><td>Thermometer</td><td>Measures temperature (°C)</td></tr>
      <tr><td>Measuring cylinders</td><td>Measure volumes accurately</td></tr>
      <tr><td>Stirrer</td><td>Ensures even mixing</td></tr>
      <tr><td>Beaker</td><td>Supports the cup</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 — Full Required Method</h3>
  
  <div class="key-facts-block">
    <h4>1️⃣ Preparation</h4>
    <ul>
      <li>Place the polystyrene cup inside a beaker</li>
      <li>Add <strong>25.0 cm³</strong> of hydrochloric acid to the cup</li>
      <li>Record <strong>initial temperature</strong></li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>2️⃣ Reaction</h4>
    <ul>
      <li>Add <strong>5.0 cm³</strong> of sodium hydroxide (measured with cylinder)</li>
      <li>Stir gently</li>
      <li>Record <strong>maximum temperature</strong> reached</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>3️⃣ Repeating</h4>
    <ul>
      <li>Repeat the experiment, adding <strong>+5.0 cm³</strong> of NaOH each time (up to 40 cm³ total)</li>
      <li>Record two trials → calculate mean</li>
    </ul>
  </div>
  
  <div class="key-facts-block">
    <h4>4️⃣ Plotting Graph</h4>
    <ul>
      <li><strong>X-axis:</strong> Total volume of NaOH added (cm³)</li>
      <li><strong>Y-axis:</strong> Mean maximum temperature (°C)</li>
    </ul>
  </div>
  
  <!-- Example Results Table -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📊 Example Results Table</h4>
    <table class="data-table" style="margin: 0.5rem 0; font-size: 0.9rem;">
      <thead><tr><th>Vol NaOH (cm³)</th><th>Trial 1 (°C)</th><th>Trial 2 (°C)</th><th>Mean (°C)</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>20.0</td><td>20.0</td><td>20.0</td></tr>
        <tr><td>5</td><td>23.5</td><td>23.0</td><td>23.3</td></tr>
        <tr><td>10</td><td>27.0</td><td>27.5</td><td>27.3</td></tr>
        <tr><td>15</td><td>31.0</td><td>30.5</td><td>30.8</td></tr>
        <tr><td>20</td><td>34.5</td><td>35.0</td><td style="color: #ef4444; font-weight: bold;">34.8</td></tr>
        <tr><td>25</td><td>35.0</td><td>35.5</td><td style="color: #ef4444; font-weight: bold;">35.3 ← Peak</td></tr>
        <tr><td>30</td><td>33.0</td><td>33.5</td><td>33.3</td></tr>
        <tr><td>35</td><td>31.0</td><td>31.0</td><td>31.0</td></tr>
        <tr><td>40</td><td>29.0</td><td>29.5</td><td>29.3</td></tr>
      </tbody>
    </table>
  </div>
  
  <!-- Graph -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📈 Temperature vs Volume Graph</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="280" viewBox="0 0 380 280">
        <!-- Axes -->
        <line x1="60" y1="240" x2="360" y2="240" stroke="currentColor" stroke-width="2"/>
        <line x1="60" y1="240" x2="60" y2="40" stroke="currentColor" stroke-width="2"/>
        
        <!-- X-axis labels -->
        <text x="210" y="270" fill="currentColor" font-size="10" text-anchor="middle">Volume of NaOH added (cm³)</text>
        <text x="80" y="255" fill="currentColor" font-size="8">0</text>
        <text x="120" y="255" fill="currentColor" font-size="8">10</text>
        <text x="170" y="255" fill="currentColor" font-size="8">20</text>
        <text x="220" y="255" fill="currentColor" font-size="8">30</text>
        <text x="270" y="255" fill="currentColor" font-size="8">40</text>
        
        <!-- Y-axis labels -->
        <text x="30" y="150" fill="currentColor" font-size="10" text-anchor="middle" transform="rotate(-90 30 150)">Temperature (°C)</text>
        <text x="50" y="243" fill="currentColor" font-size="8">20</text>
        <text x="50" y="193" fill="currentColor" font-size="8">25</text>
        <text x="50" y="143" fill="currentColor" font-size="8">30</text>
        <text x="50" y="93" fill="currentColor" font-size="8">35</text>
        <text x="50" y="53" fill="currentColor" font-size="8">40</text>
        
        <!-- Grid lines -->
        <g opacity="0.2">
          <line x1="60" y1="190" x2="350" y2="190" stroke="currentColor" stroke-width="1"/>
          <line x1="60" y1="140" x2="350" y2="140" stroke="currentColor" stroke-width="1"/>
          <line x1="60" y1="90" x2="350" y2="90" stroke="currentColor" stroke-width="1"/>
        </g>
        
        <!-- Rising line (best fit) -->
        <line x1="80" y1="240" x2="195" y2="75" stroke="#3b82f6" stroke-width="3"/>
        
        <!-- Falling line (best fit) -->
        <line x1="195" y1="75" x2="320" y2="180" stroke="#ef4444" stroke-width="3"/>
        
        <!-- Data points -->
        <circle cx="80" cy="240" r="5" fill="#22c55e"/>
        <circle cx="100" cy="207" r="5" fill="#22c55e"/>
        <circle cx="120" cy="167" r="5" fill="#22c55e"/>
        <circle cx="145" cy="123" r="5" fill="#22c55e"/>
        <circle cx="170" cy="92" r="5" fill="#22c55e"/>
        <circle cx="195" cy="75" r="7" fill="#ec4899" stroke="white" stroke-width="2"/>
        <circle cx="220" cy="107" r="5" fill="#22c55e"/>
        <circle cx="250" cy="130" r="5" fill="#22c55e"/>
        <circle cx="280" cy="147" r="5" fill="#22c55e"/>
        
        <!-- Peak annotation -->
        <line x1="195" y1="75" x2="195" y2="240" stroke="#ec4899" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="195" y="30" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Neutralisation point</text>
        <text x="195" y="42" fill="#ec4899" font-size="9" text-anchor="middle">(exact volume)</text>
        
        <!-- Line labels -->
        <text x="110" y="130" fill="#3b82f6" font-size="9" font-weight="bold">Temperature</text>
        <text x="110" y="142" fill="#3b82f6" font-size="9" font-weight="bold">rising</text>
        <text x="260" y="100" fill="#ef4444" font-size="9" font-weight="bold">Temperature</text>
        <text x="260" y="112" fill="#ef4444" font-size="9" font-weight="bold">falling</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.9rem; color: var(--muted-foreground);">The crossing point of the two best-fit lines = exact neutralisation volume</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 — Explanation of Results</h3>
  
  <div class="key-facts-block">
    <h4>🔺 Why Temperature RISES at First (Exothermic Neutralisation)</h4>
    <ul>
      <li>H⁺ ions react with OH⁻ ions to form water</li>
      <li>This reaction <strong>releases energy</strong></li>
      <li>Temperature <strong>increases</strong></li>
    </ul>
  </div>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <p style="font-size: 1.2rem; font-weight: bold; color: hsl(var(--primary));">H⁺(aq) + OH⁻(aq) → H₂O(l) + ENERGY</p>
  </div>
  
  <div class="key-facts-block">
    <h4>🔻 Why Temperature FALLS After the Peak</h4>
    <ul>
      <li>One reactant becomes <strong>in excess</strong></li>
      <li>Addition of excess reactant <strong>dilutes</strong> the mixture</li>
      <li>No more neutralisation occurs → temperature <strong>drops</strong></li>
    </ul>
  </div>
  
  <!-- Energy diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>⚡ Exothermic Neutralisation (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="150" viewBox="0 0 300 150">
        <!-- Beaker -->
        <path d="M80 130 L80 60 Q80 50, 95 50 L205 50 Q220 50, 220 60 L220 130" fill="none" stroke="currentColor" stroke-width="2"/>
        <ellipse cx="150" cy="130" rx="70" ry="10" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Solution -->
        <ellipse cx="150" cy="100" rx="65" ry="8" fill="#3b82f6" opacity="0.3"/>
        <path d="M85 100 L85 125 Q85 128, 150 128 Q215 128, 215 125 L215 100" fill="#3b82f6" opacity="0.3"/>
        
        <!-- Heat waves -->
        <g class="anim-fade-in-out">
          <path d="M100 45 Q105 35, 110 45" fill="none" stroke="#ef4444" stroke-width="2"/>
          <path d="M145 40 Q150 28, 155 40" fill="none" stroke="#ef4444" stroke-width="2"/>
          <path d="M190 45 Q195 35, 200 45" fill="none" stroke="#ef4444" stroke-width="2"/>
        </g>
        
        <!-- Thermometer -->
        <rect x="135" y="20" width="8" height="90" fill="none" stroke="#ef4444" stroke-width="2" rx="4"/>
        <rect x="137" y="70" width="4" height="35" fill="#ef4444" class="anim-stretch"/>
        <circle cx="139" cy="105" r="6" fill="#ef4444"/>
        
        <!-- Labels -->
        <text x="250" y="40" fill="#ef4444" font-size="10" font-weight="bold">Heat</text>
        <text x="250" y="52" fill="#ef4444" font-size="10" font-weight="bold">released</text>
        <text x="250" y="70" fill="currentColor" font-size="9">Temperature</text>
        <text x="250" y="82" fill="currentColor" font-size="9">increases</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 — Variables</h3>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Variable Type</th><th>Examples</th></tr></thead>
    <tbody>
      <tr><td><strong>Independent</strong> (you change)</td><td>Volume of alkali, concentration, type of reaction</td></tr>
      <tr><td><strong>Dependent</strong> (you measure)</td><td>Maximum temperature change (ΔT)</td></tr>
      <tr><td><strong>Control</strong> (keep constant)</td><td>Initial temperature, volume of acid, same equipment</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 — Sources of Error & Improvements</h3>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Error</th><th>Improvement</th></tr></thead>
    <tbody>
      <tr><td>Heat loss to surroundings</td><td>Use lid, better insulation</td></tr>
      <tr><td>Thermometer resolution</td><td>Read to nearest 0.5°C</td></tr>
      <tr><td>Inconsistent stirring</td><td>Stir at same speed each trial</td></tr>
      <tr><td>Not reaching true max temp</td><td>Keep thermometer in solution continuously</td></tr>
      <tr><td>Starting temperatures differ</td><td>Ensure all reactants at same initial temperature</td></tr>
    </tbody>
  </table>
  
  <div class="exam-tip-block">
    <h4>💡 Exam Tip:</h4>
    <p>When asked to improve accuracy, always mention: <strong>repeat readings and calculate mean</strong>, <strong>use lid to reduce heat loss</strong>, and <strong>use same equipment throughout</strong>.</p>
  </div>
</div>
        `,
        canonical_keywords: ["calorimetry", "temperature change", "neutralisation", "exothermic", "polystyrene cup", "heat loss", "variables", "graph", "maximum temperature"],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Describe how you would investigate the temperature change when hydrochloric acid is neutralised by sodium hydroxide.",
            marks: 6,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["polystyrene cup", "measure acid", "initial temperature", "add alkali", "stir", "maximum temperature", "repeat"]
          },
          {
            id: "p2",
            prompt_template: "Explain why the temperature rises at first and then falls after adding excess alkali.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["exothermic", "neutralisation", "energy released", "excess", "dilutes", "no reaction"]
          },
          {
            id: "p3",
            prompt_template: "Give two ways to improve the accuracy of a calorimetry experiment.",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["lid", "insulation", "repeat", "mean", "stir"]
          }
        ]
      }
    ]
  }
];
