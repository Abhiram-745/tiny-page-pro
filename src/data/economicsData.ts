// Economics Data - OCR GCSE Economics
// Contains all chapters with detailed content and animated diagrams

export interface EconomicsSubsection {
  id: string;
  title: string;
  content: string;
  practiceItems?: {
    question: string;
    answer: string;
    marks?: number;
  }[];
}

export interface EconomicsModule {
  id: string;
  title: string;
  description: string;
  status: "ready" | "coming-soon";
  subsections: EconomicsSubsection[];
}

export interface EconomicsChapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  modules: EconomicsModule[];
}

// Animated SVG Diagrams

const economicGroupsInterdependenceDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 500 400" style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="consumerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6"/>
        <stop offset="100%" style="stop-color:#1D4ED8"/>
      </linearGradient>
      <linearGradient id="producerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
      <linearGradient id="govGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B5CF6"/>
        <stop offset="100%" style="stop-color:#6D28D9"/>
      </linearGradient>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280"/>
      </marker>
    </defs>
    
    <!-- Title -->
    <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Economic Groups Interdependence</text>
    
    <!-- Consumer Circle -->
    <circle cx="250" cy="100" r="50" fill="url(#consumerGrad)" opacity="0.9">
      <animate attributeName="r" values="48;52;48" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="250" y="95" text-anchor="middle" fill="white" font-weight="bold" font-size="12">CONSUMERS</text>
    <text x="250" y="110" text-anchor="middle" fill="white" font-size="10">Buy goods</text>
    
    <!-- Producer Circle -->
    <circle cx="130" cy="300" r="50" fill="url(#producerGrad)" opacity="0.9">
      <animate attributeName="r" values="48;52;48" dur="2s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <text x="130" y="295" text-anchor="middle" fill="white" font-weight="bold" font-size="12">PRODUCERS</text>
    <text x="130" y="310" text-anchor="middle" fill="white" font-size="10">Make goods</text>
    
    <!-- Government Circle -->
    <circle cx="370" cy="300" r="50" fill="url(#govGrad)" opacity="0.9">
      <animate attributeName="r" values="48;52;48" dur="2s" repeatCount="indefinite" begin="1s"/>
    </circle>
    <text x="370" y="295" text-anchor="middle" fill="white" font-weight="bold" font-size="12">GOVERNMENT</text>
    <text x="370" y="310" text-anchor="middle" fill="white" font-size="10">Regulates</text>
    
    <!-- Arrows with animated flow -->
    <!-- Consumer to Producer -->
    <path d="M 210 135 Q 170 200 145 250" stroke="#3B82F6" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="1.5s" repeatCount="indefinite"/>
    </path>
    <text x="150" y="185" fill="#3B82F6" font-size="9" transform="rotate(-50, 150, 185)">Spend money</text>
    
    <!-- Producer to Consumer -->
    <path d="M 165 260 Q 200 200 230 150" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
    </path>
    <text x="220" y="195" fill="#10B981" font-size="9" transform="rotate(-50, 220, 195)">Goods + Jobs</text>
    
    <!-- Consumer to Government -->
    <path d="M 290 135 Q 330 200 355 250" stroke="#3B82F6" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="1.5s" repeatCount="indefinite" begin="0.6s"/>
    </path>
    <text x="345" y="185" fill="#3B82F6" font-size="9" transform="rotate(50, 345, 185)">Pay taxes</text>
    
    <!-- Government to Consumer -->
    <path d="M 335 260 Q 300 200 270 150" stroke="#8B5CF6" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="1.5s" repeatCount="indefinite" begin="0.9s"/>
    </path>
    <text x="270" y="195" fill="#8B5CF6" font-size="9" transform="rotate(50, 270, 195)">Services + Rules</text>
    
    <!-- Producer to Government -->
    <path d="M 180 310 L 320 310" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,150;150,0" dur="1.5s" repeatCount="indefinite" begin="1.2s"/>
    </path>
    <text x="250" y="330" text-anchor="middle" fill="#10B981" font-size="9">Business taxes</text>
    
    <!-- Government to Producer -->
    <path d="M 320 290 L 180 290" stroke="#8B5CF6" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,150;150,0" dur="1.5s" repeatCount="indefinite" begin="1.5s"/>
    </path>
    <text x="250" y="285" text-anchor="middle" fill="#8B5CF6" font-size="9">Subsidies + Laws</text>
    
    <!-- Legend -->
    <rect x="20" y="360" width="12" height="12" fill="#3B82F6" rx="2"/>
    <text x="38" y="370" fill="currentColor" font-size="10">Consumer flows</text>
    <rect x="140" y="360" width="12" height="12" fill="#10B981" rx="2"/>
    <text x="158" y="370" fill="currentColor" font-size="10">Producer flows</text>
    <rect x="260" y="360" width="12" height="12" fill="#8B5CF6" rx="2"/>
    <text x="278" y="370" fill="currentColor" font-size="10">Government flows</text>
  </svg>
</div>
`;

const factorsOfProductionDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 550 450" style="width: 100%; max-width: 550px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#84CC16"/>
        <stop offset="100%" style="stop-color:#65A30D"/>
      </linearGradient>
      <linearGradient id="labourGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F97316"/>
        <stop offset="100%" style="stop-color:#EA580C"/>
      </linearGradient>
      <linearGradient id="capitalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#06B6D4"/>
        <stop offset="100%" style="stop-color:#0891B2"/>
      </linearGradient>
      <linearGradient id="enterpriseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#EC4899"/>
        <stop offset="100%" style="stop-color:#DB2777"/>
      </linearGradient>
      <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F59E0B"/>
        <stop offset="100%" style="stop-color:#D97706"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="275" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Factors of Production</text>
    
    <!-- Central Production circle -->
    <circle cx="275" cy="225" r="55" fill="url(#centerGrad)" opacity="0.9">
      <animate attributeName="r" values="53;57;53" dur="3s" repeatCount="indefinite"/>
    </circle>
    <text x="275" y="220" text-anchor="middle" fill="white" font-weight="bold" font-size="13">PRODUCTION</text>
    <text x="275" y="237" text-anchor="middle" fill="white" font-size="10">Goods & Services</text>
    
    <!-- Land (Top) -->
    <g>
      <rect x="215" y="55" width="120" height="70" rx="10" fill="url(#landGrad)" opacity="0.9">
        <animate attributeName="y" values="55;50;55" dur="2s" repeatCount="indefinite"/>
      </rect>
      <text x="275" y="85" text-anchor="middle" fill="white" font-weight="bold" font-size="12">🌍 LAND</text>
      <text x="275" y="100" text-anchor="middle" fill="white" font-size="9">Natural resources</text>
      <text x="275" y="115" text-anchor="middle" fill="white" font-size="9" font-style="italic">Reward: Rent</text>
    </g>
    
    <!-- Labour (Left) -->
    <g>
      <rect x="40" y="190" width="120" height="70" rx="10" fill="url(#labourGrad)" opacity="0.9">
        <animate attributeName="x" values="40;35;40" dur="2s" repeatCount="indefinite" begin="0.5s"/>
      </rect>
      <text x="100" y="220" text-anchor="middle" fill="white" font-weight="bold" font-size="12">👷 LABOUR</text>
      <text x="100" y="235" text-anchor="middle" fill="white" font-size="9">Human effort</text>
      <text x="100" y="250" text-anchor="middle" fill="white" font-size="9" font-style="italic">Reward: Wages</text>
    </g>
    
    <!-- Capital (Right) -->
    <g>
      <rect x="390" y="190" width="120" height="70" rx="10" fill="url(#capitalGrad)" opacity="0.9">
        <animate attributeName="x" values="390;395;390" dur="2s" repeatCount="indefinite" begin="1s"/>
      </rect>
      <text x="450" y="220" text-anchor="middle" fill="white" font-weight="bold" font-size="12">🏭 CAPITAL</text>
      <text x="450" y="235" text-anchor="middle" fill="white" font-size="9">Man-made tools</text>
      <text x="450" y="250" text-anchor="middle" fill="white" font-size="9" font-style="italic">Reward: Interest</text>
    </g>
    
    <!-- Enterprise (Bottom) -->
    <g>
      <rect x="215" y="325" width="120" height="70" rx="10" fill="url(#enterpriseGrad)" opacity="0.9">
        <animate attributeName="y" values="325;330;325" dur="2s" repeatCount="indefinite" begin="1.5s"/>
      </rect>
      <text x="275" y="355" text-anchor="middle" fill="white" font-weight="bold" font-size="12">💡 ENTERPRISE</text>
      <text x="275" y="370" text-anchor="middle" fill="white" font-size="9">Risk-taker organiser</text>
      <text x="275" y="385" text-anchor="middle" fill="white" font-size="9" font-style="italic">Reward: Profit</text>
    </g>
    
    <!-- Connecting arrows with animation -->
    <line x1="275" y1="125" x2="275" y2="170" stroke="#84CC16" stroke-width="3" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="1s" repeatCount="indefinite"/>
    </line>
    <line x1="160" y1="225" x2="220" y2="225" stroke="#F97316" stroke-width="3" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="1s" repeatCount="indefinite" begin="0.25s"/>
    </line>
    <line x1="390" y1="225" x2="330" y2="225" stroke="#06B6D4" stroke-width="3" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,60;60,0" dur="1s" repeatCount="indefinite" begin="0.5s"/>
    </line>
    <line x1="275" y1="325" x2="275" y2="280" stroke="#EC4899" stroke-width="3" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="1s" repeatCount="indefinite" begin="0.75s"/>
    </line>
    
    <!-- Examples text -->
    <text x="375" y="90" fill="currentColor" font-size="9" opacity="0.8">Trees, oil, minerals</text>
    <text x="100" y="280" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Workers, skills</text>
    <text x="450" y="280" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Machines, tech</text>
    <text x="275" y="420" text-anchor="middle" fill="currentColor" font-size="9" opacity="0.8">Entrepreneurs combine all factors</text>
  </svg>
</div>
`;

const productFactorMarketsDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 600 400" style="width: 100%; max-width: 600px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="productMarketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6"/>
        <stop offset="100%" style="stop-color:#1D4ED8"/>
      </linearGradient>
      <linearGradient id="factorMarketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
      <linearGradient id="householdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F97316"/>
        <stop offset="100%" style="stop-color:#EA580C"/>
      </linearGradient>
      <linearGradient id="firmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B5CF6"/>
        <stop offset="100%" style="stop-color:#6D28D9"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="300" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Circular Flow: Product & Factor Markets</text>
    
    <!-- Product Market (Top) -->
    <rect x="200" y="45" width="200" height="60" rx="10" fill="url(#productMarketGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite"/>
    </rect>
    <text x="300" y="75" text-anchor="middle" fill="white" font-weight="bold" font-size="13">PRODUCT MARKET</text>
    <text x="300" y="92" text-anchor="middle" fill="white" font-size="10">Goods & Services sold</text>
    
    <!-- Factor Market (Bottom) -->
    <rect x="200" y="295" width="200" height="60" rx="10" fill="url(#factorMarketGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" begin="1s"/>
    </rect>
    <text x="300" y="325" text-anchor="middle" fill="white" font-weight="bold" font-size="13">FACTOR MARKET</text>
    <text x="300" y="342" text-anchor="middle" fill="white" font-size="10">Land, Labour, Capital, Enterprise</text>
    
    <!-- Households (Left) -->
    <rect x="30" y="160" width="130" height="80" rx="10" fill="url(#householdGrad)" opacity="0.9">
      <animate attributeName="x" values="30;25;30" dur="3s" repeatCount="indefinite"/>
    </rect>
    <text x="95" y="195" text-anchor="middle" fill="white" font-weight="bold" font-size="12">🏠 HOUSEHOLDS</text>
    <text x="95" y="212" text-anchor="middle" fill="white" font-size="9">Consumers</text>
    <text x="95" y="228" text-anchor="middle" fill="white" font-size="9">Supply factors</text>
    
    <!-- Firms (Right) -->
    <rect x="440" y="160" width="130" height="80" rx="10" fill="url(#firmGrad)" opacity="0.9">
      <animate attributeName="x" values="440;445;440" dur="3s" repeatCount="indefinite" begin="1.5s"/>
    </rect>
    <text x="505" y="195" text-anchor="middle" fill="white" font-weight="bold" font-size="12">🏢 FIRMS</text>
    <text x="505" y="212" text-anchor="middle" fill="white" font-size="9">Producers</text>
    <text x="505" y="228" text-anchor="middle" fill="white" font-size="9">Demand factors</text>
    
    <!-- Outer flow (Clockwise - Money) -->
    <!-- Top left curve -->
    <path d="M 95 160 Q 95 75 200 75" stroke="#F97316" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" repeatCount="indefinite"/>
    </path>
    <text x="120" y="100" fill="#F97316" font-size="10" font-weight="bold">Spending £</text>
    
    <!-- Top right curve -->
    <path d="M 400 75 Q 505 75 505 160" stroke="#8B5CF6" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
    </path>
    <text x="430" y="100" fill="#8B5CF6" font-size="10" font-weight="bold">Revenue £</text>
    
    <!-- Bottom right curve -->
    <path d="M 505 240 Q 505 325 400 325" stroke="#8B5CF6" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" repeatCount="indefinite" begin="1s"/>
    </path>
    <text x="465" y="300" fill="#8B5CF6" font-size="10" font-weight="bold">Costs £</text>
    
    <!-- Bottom left curve -->
    <path d="M 200 325 Q 95 325 95 240" stroke="#F97316" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="stroke-dasharray" values="0,200;200,0" dur="2s" repeatCount="indefinite" begin="1.5s"/>
    </path>
    <text x="110" y="300" fill="#F97316" font-size="10" font-weight="bold">Income £</text>
    
    <!-- Inner flow (Counter-clockwise - Real) -->
    <!-- Inner top -->
    <path d="M 440 180 L 160 120" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5,3" fill="none">
      <animate attributeName="stroke-dasharray" values="5,3;3,5;5,3" dur="1s" repeatCount="indefinite"/>
    </path>
    <text x="300" y="135" text-anchor="middle" fill="#3B82F6" font-size="9">← Goods & Services flow to households</text>
    
    <!-- Inner bottom -->
    <path d="M 160 280 L 440 220" stroke="#10B981" stroke-width="2" stroke-dasharray="5,3" fill="none">
      <animate attributeName="stroke-dasharray" values="5,3;3,5;5,3" dur="1s" repeatCount="indefinite" begin="0.5s"/>
    </path>
    <text x="300" y="270" text-anchor="middle" fill="#10B981" font-size="9">→ Factors of production flow to firms</text>
    
    <!-- Legend -->
    <rect x="30" y="375" width="100" height="20" rx="3" fill="none" stroke="#F97316" stroke-width="2"/>
    <text x="80" y="388" text-anchor="middle" fill="currentColor" font-size="9">Money flows →</text>
    <rect x="150" y="375" width="100" height="20" rx="3" fill="none" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5,3"/>
    <text x="200" y="388" text-anchor="middle" fill="currentColor" font-size="9">Real flows →</text>
  </svg>
</div>
`;

const basicEconomicProblemDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 500 350" style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="scarceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#EF4444"/>
        <stop offset="100%" style="stop-color:#DC2626"/>
      </linearGradient>
      <linearGradient id="wantsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B5CF6"/>
        <stop offset="100%" style="stop-color:#7C3AED"/>
      </linearGradient>
      <linearGradient id="choiceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F59E0B"/>
        <stop offset="100%" style="stop-color:#D97706"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="250" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">The Basic Economic Problem</text>
    
    <!-- Scarce Resources box -->
    <rect x="30" y="60" width="180" height="100" rx="10" fill="url(#scarceGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite"/>
    </rect>
    <text x="120" y="95" text-anchor="middle" fill="white" font-weight="bold" font-size="14">SCARCE RESOURCES</text>
    <text x="120" y="115" text-anchor="middle" fill="white" font-size="10">• Limited land</text>
    <text x="120" y="130" text-anchor="middle" fill="white" font-size="10">• Limited labour</text>
    <text x="120" y="145" text-anchor="middle" fill="white" font-size="10">• Limited capital</text>
    
    <!-- Unlimited Wants box -->
    <rect x="290" y="60" width="180" height="100" rx="10" fill="url(#wantsGrad)" opacity="0.9">
      <animate attributeName="opacity" values="0.85;1;0.85" dur="2s" repeatCount="indefinite" begin="0.5s"/>
    </rect>
    <text x="380" y="95" text-anchor="middle" fill="white" font-weight="bold" font-size="14">UNLIMITED WANTS</text>
    <text x="380" y="115" text-anchor="middle" fill="white" font-size="10">• More goods</text>
    <text x="380" y="130" text-anchor="middle" fill="white" font-size="10">• Better services</text>
    <text x="380" y="145" text-anchor="middle" fill="white" font-size="10">• Always growing ∞</text>
    
    <!-- VS symbol -->
    <circle cx="250" cy="110" r="25" fill="#1F2937" stroke="white" stroke-width="2">
      <animate attributeName="r" values="23;27;23" dur="1.5s" repeatCount="indefinite"/>
    </circle>
    <text x="250" y="116" text-anchor="middle" fill="white" font-weight="bold" font-size="14">VS</text>
    
    <!-- Arrow down -->
    <path d="M 250 140 L 250 180" stroke="#6B7280" stroke-width="4">
      <animate attributeName="stroke-dasharray" values="0,50;50,0" dur="1s" repeatCount="indefinite"/>
    </path>
    <polygon points="240,175 260,175 250,195" fill="#6B7280">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" repeatCount="indefinite"/>
    </polygon>
    
    <!-- Creates GAP text -->
    <text x="250" y="215" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Creates a GAP → Forces CHOICES</text>
    
    <!-- Arrow down -->
    <path d="M 250 225 L 250 250" stroke="#6B7280" stroke-width="4"/>
    <polygon points="240,245 260,245 250,265" fill="#6B7280"/>
    
    <!-- Choice / Opportunity Cost box -->
    <rect x="125" y="270" width="250" height="60" rx="10" fill="url(#choiceGrad)" opacity="0.9">
      <animate attributeName="width" values="245;255;245" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="x" values="127;122;127" dur="2s" repeatCount="indefinite"/>
    </rect>
    <text x="250" y="295" text-anchor="middle" fill="white" font-weight="bold" font-size="14">OPPORTUNITY COST</text>
    <text x="250" y="315" text-anchor="middle" fill="white" font-size="10">The next best alternative forgone</text>
  </svg>
</div>
`;

const demandCurveDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 500 400" style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="demandLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6"/>
        <stop offset="100%" style="stop-color:#1D4ED8"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="250" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">The Demand Curve</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="320" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="320" x2="450" y2="320" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="185" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 185)">Price (£)</text>
    <text x="265" y="355" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity Demanded</text>
    
    <!-- Axis arrows -->
    <polygon points="80,50 75,60 85,60" fill="currentColor"/>
    <polygon points="450,320 440,315 440,325" fill="currentColor"/>
    
    <!-- Grid lines (subtle) -->
    <line x1="80" y1="110" x2="420" y2="110" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="80" y1="180" x2="420" y2="180" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="80" y1="250" x2="420" y2="250" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="170" y1="50" x2="170" y2="320" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="280" y1="50" x2="280" y2="320" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="390" y1="50" x2="390" y2="320" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    
    <!-- Price labels -->
    <text x="70" y="115" text-anchor="end" fill="currentColor" font-size="10">P₁</text>
    <text x="70" y="185" text-anchor="end" fill="currentColor" font-size="10">P₂</text>
    <text x="70" y="255" text-anchor="end" fill="currentColor" font-size="10">P₃</text>
    
    <!-- Quantity labels -->
    <text x="170" y="340" text-anchor="middle" fill="currentColor" font-size="10">Q₁</text>
    <text x="280" y="340" text-anchor="middle" fill="currentColor" font-size="10">Q₂</text>
    <text x="390" y="340" text-anchor="middle" fill="currentColor" font-size="10">Q₃</text>
    
    <!-- Demand curve -->
    <path d="M 120 80 Q 200 150 280 200 Q 360 250 420 290" stroke="url(#demandLineGrad)" stroke-width="4" fill="none">
      <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="2s" fill="freeze"/>
    </path>
    
    <!-- D label -->
    <text x="430" y="295" fill="#3B82F6" font-size="16" font-weight="bold">D</text>
    
    <!-- Animated point on curve -->
    <circle cx="170" cy="130" r="8" fill="#EF4444">
      <animate attributeName="cx" values="170;280;390;280;170" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="130;200;270;200;130" dur="4s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Dotted lines from animated point -->
    <line x1="170" y1="130" x2="170" y2="320" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4">
      <animate attributeName="x1" values="170;280;390;280;170" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="170;280;390;280;170" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="y1" values="130;200;270;200;130" dur="4s" repeatCount="indefinite"/>
    </line>
    <line x1="80" y1="130" x2="170" y2="130" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4">
      <animate attributeName="y1" values="130;200;270;200;130" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="130;200;270;200;130" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="170;280;390;280;170" dur="4s" repeatCount="indefinite"/>
    </line>
    
    <!-- Annotations -->
    <rect x="280" y="50" width="180" height="55" rx="5" fill="currentColor" opacity="0.1"/>
    <text x="370" y="70" text-anchor="middle" fill="currentColor" font-size="11" font-weight="bold">Law of Demand:</text>
    <text x="370" y="85" text-anchor="middle" fill="currentColor" font-size="10">Price ↑ → Quantity ↓</text>
    <text x="370" y="100" text-anchor="middle" fill="currentColor" font-size="10">Price ↓ → Quantity ↑</text>
    
    <!-- Movement labels -->
    <text x="220" y="385" text-anchor="middle" fill="#3B82F6" font-size="10">Curve slopes downward (inverse relationship)</text>
  </svg>
</div>
`;

const demandShiftsDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 550 420" style="width: 100%; max-width: 550px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="d0Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6"/>
        <stop offset="100%" style="stop-color:#1D4ED8"/>
      </linearGradient>
      <linearGradient id="d1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
      <linearGradient id="d2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#EF4444"/>
        <stop offset="100%" style="stop-color:#DC2626"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="275" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Shifts in the Demand Curve</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="320" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="320" x2="480" y2="320" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="185" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 185)">Price (£)</text>
    <text x="280" y="350" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity Demanded</text>
    
    <!-- Axis arrows -->
    <polygon points="80,50 75,60 85,60" fill="currentColor"/>
    <polygon points="480,320 470,315 470,325" fill="currentColor"/>
    
    <!-- Original Demand curve D -->
    <path d="M 180 70 Q 240 150 300 200 Q 360 250 400 290" stroke="url(#d0Grad)" stroke-width="3" fill="none"/>
    <text x="405" y="285" fill="#3B82F6" font-size="14" font-weight="bold">D</text>
    
    <!-- Shifted Right D1 (Increase) -->
    <path d="M 240 70 Q 300 150 360 200 Q 420 250 460 290" stroke="url(#d1Grad)" stroke-width="3" fill="none">
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </path>
    <text x="465" y="285" fill="#10B981" font-size="14" font-weight="bold">
      D₁
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <!-- Shifted Left D2 (Decrease) -->
    <path d="M 120 70 Q 180 150 240 200 Q 300 250 340 290" stroke="url(#d2Grad)" stroke-width="3" fill="none">
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </path>
    <text x="345" y="285" fill="#EF4444" font-size="14" font-weight="bold">
      D₂
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <!-- Shift arrows -->
    <path d="M 290 160 L 340 160" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </path>
    <path d="M 280 180 L 230 180" stroke="#EF4444" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </path>
    
    <!-- Legend box -->
    <rect x="30" y="360" width="490" height="55" rx="5" fill="currentColor" opacity="0.05" stroke="currentColor" stroke-width="1" opacity="0.2"/>
    
    <!-- Increase factors -->
    <text x="50" y="380" fill="#10B981" font-size="11" font-weight="bold">↗ Increase in Demand (D → D₁):</text>
    <text x="50" y="395" fill="currentColor" font-size="9">Income ↑ | Fashion trend | Substitute price ↑ | Complement price ↓ | Population ↑ | Good advertising</text>
    
    <!-- Decrease factors -->
    <text x="50" y="410" fill="#EF4444" font-size="11" font-weight="bold">↙ Decrease in Demand (D → D₂):</text>
    <text x="50" y="423" fill="currentColor" font-size="9" opacity="0.8">Income ↓ | Out of fashion | Substitute price ↓ | Complement price ↑ | Population ↓ | Bad publicity</text>
  </svg>
</div>
`;

const demandMovementsDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 500 420" style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
    <defs>
      <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#10B981"/>
      </marker>
      <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444"/>
      </marker>
    </defs>
    
    <!-- Title -->
    <text x="250" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Movements Along the Demand Curve</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="320" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="320" x2="450" y2="320" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="185" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 185)">Price (£)</text>
    <text x="265" y="350" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity Demanded</text>
    
    <!-- Demand curve -->
    <path d="M 120 80 Q 200 150 280 200 Q 360 250 420 290" stroke="#3B82F6" stroke-width="3" fill="none"/>
    <text x="430" y="295" fill="#3B82F6" font-size="16" font-weight="bold">D</text>
    
    <!-- Point A (High price, low quantity) -->
    <circle cx="160" cy="120" r="8" fill="#EF4444"/>
    <text x="175" y="115" fill="#EF4444" font-size="12" font-weight="bold">A</text>
    
    <!-- Point B (Low price, high quantity) -->
    <circle cx="360" cy="260" r="8" fill="#10B981"/>
    <text x="375" y="255" fill="#10B981" font-size="12" font-weight="bold">B</text>
    
    <!-- Dotted lines for A -->
    <line x1="80" y1="120" x2="160" y2="120" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="160" y1="120" x2="160" y2="320" stroke="#EF4444" stroke-width="1" stroke-dasharray="4,4"/>
    
    <!-- Dotted lines for B -->
    <line x1="80" y1="260" x2="360" y2="260" stroke="#10B981" stroke-width="1" stroke-dasharray="4,4"/>
    <line x1="360" y1="260" x2="360" y2="320" stroke="#10B981" stroke-width="1" stroke-dasharray="4,4"/>
    
    <!-- Price and Quantity labels -->
    <text x="70" y="125" text-anchor="end" fill="#EF4444" font-size="10">P₁</text>
    <text x="70" y="265" text-anchor="end" fill="#10B981" font-size="10">P₂</text>
    <text x="160" y="335" text-anchor="middle" fill="#EF4444" font-size="10">Q₁</text>
    <text x="360" y="335" text-anchor="middle" fill="#10B981" font-size="10">Q₂</text>
    
    <!-- Animated movement arrow A to B (Expansion) -->
    <path d="M 175 130 Q 260 190 345 250" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#arrowGreen)">
      <animate attributeName="stroke-dasharray" values="0,250;250,0" dur="2s" repeatCount="indefinite"/>
    </path>
    <text x="280" y="175" fill="#10B981" font-size="11" font-weight="bold">Expansion</text>
    <text x="280" y="190" fill="#10B981" font-size="9">(Price falls)</text>
    
    <!-- Animated movement arrow B to A (Contraction) -->
    <path d="M 345 250 Q 260 190 175 130" stroke="#EF4444" stroke-width="3" fill="none" marker-end="url(#arrowRed)">
      <animate attributeName="stroke-dasharray" values="0,250;250,0" dur="2s" repeatCount="indefinite" begin="1s"/>
    </path>
    <text x="220" y="230" fill="#EF4444" font-size="11" font-weight="bold">Contraction</text>
    <text x="220" y="245" fill="#EF4444" font-size="9">(Price rises)</text>
    
    <!-- Explanation box -->
    <rect x="30" y="360" width="440" height="55" rx="5" fill="currentColor" opacity="0.05"/>
    <text x="250" y="380" text-anchor="middle" fill="currentColor" font-size="11" font-weight="bold">Movements ONLY caused by price changes!</text>
    <text x="250" y="398" text-anchor="middle" fill="#10B981" font-size="10">Expansion: Price ↓ → Quantity demanded ↑ (A to B)</text>
    <text x="250" y="412" text-anchor="middle" fill="#EF4444" font-size="10">Contraction: Price ↑ → Quantity demanded ↓ (B to A)</text>
  </svg>
</div>
`;

const supplyCurveDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 500 400" style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="supplyLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="250" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">The Supply Curve</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="320" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="320" x2="450" y2="320" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="185" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 185)">Price (£)</text>
    <text x="265" y="355" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity Supplied</text>
    
    <!-- Axis arrows -->
    <polygon points="80,50 75,60 85,60" fill="currentColor"/>
    <polygon points="450,320 440,315 440,325" fill="currentColor"/>
    
    <!-- Grid lines -->
    <line x1="80" y1="110" x2="420" y2="110" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="80" y1="180" x2="420" y2="180" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="80" y1="250" x2="420" y2="250" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="170" y1="50" x2="170" y2="320" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="280" y1="50" x2="280" y2="320" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    <line x1="390" y1="50" x2="390" y2="320" stroke="currentColor" stroke-width="0.5" opacity="0.2"/>
    
    <!-- Supply curve (upward sloping) -->
    <path d="M 100 300 Q 180 250 260 180 Q 340 110 420 70" stroke="url(#supplyLineGrad)" stroke-width="4" fill="none">
      <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="2s" fill="freeze"/>
    </path>
    
    <!-- S label -->
    <text x="430" y="75" fill="#10B981" font-size="16" font-weight="bold">S</text>
    
    <!-- Animated point on curve -->
    <circle cx="150" cy="270" r="8" fill="#8B5CF6">
      <animate attributeName="cx" values="150;260;380;260;150" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="270;180;95;180;270" dur="4s" repeatCount="indefinite"/>
    </circle>
    
    <!-- Dotted lines from animated point -->
    <line x1="150" y1="270" x2="150" y2="320" stroke="#8B5CF6" stroke-width="1" stroke-dasharray="4,4">
      <animate attributeName="x1" values="150;260;380;260;150" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="150;260;380;260;150" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="y1" values="270;180;95;180;270" dur="4s" repeatCount="indefinite"/>
    </line>
    <line x1="80" y1="270" x2="150" y2="270" stroke="#8B5CF6" stroke-width="1" stroke-dasharray="4,4">
      <animate attributeName="y1" values="270;180;95;180;270" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="y2" values="270;180;95;180;270" dur="4s" repeatCount="indefinite"/>
      <animate attributeName="x2" values="150;260;380;260;150" dur="4s" repeatCount="indefinite"/>
    </line>
    
    <!-- Annotations -->
    <rect x="280" y="200" width="180" height="55" rx="5" fill="currentColor" opacity="0.1"/>
    <text x="370" y="220" text-anchor="middle" fill="currentColor" font-size="11" font-weight="bold">Law of Supply:</text>
    <text x="370" y="235" text-anchor="middle" fill="currentColor" font-size="10">Price ↑ → Quantity ↑</text>
    <text x="370" y="250" text-anchor="middle" fill="currentColor" font-size="10">Price ↓ → Quantity ↓</text>
    
    <!-- Movement labels -->
    <text x="265" y="385" text-anchor="middle" fill="#10B981" font-size="10">Curve slopes upward (direct relationship)</text>
  </svg>
</div>
`;

const supplyShiftsDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 550 450" style="width: 100%; max-width: 550px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="s0Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="275" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Shifts in the Supply Curve</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="320" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="320" x2="480" y2="320" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="185" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 185)">Price (£)</text>
    <text x="280" y="350" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity Supplied</text>
    
    <!-- Original Supply curve S -->
    <path d="M 180 290 Q 240 200 300 140 Q 360 80 400 60" stroke="url(#s0Grad)" stroke-width="3" fill="none"/>
    <text x="405" y="55" fill="#10B981" font-size="14" font-weight="bold">S</text>
    
    <!-- Shifted Right S1 (Increase) -->
    <path d="M 260 290 Q 320 200 380 140 Q 440 80 460 60" stroke="#3B82F6" stroke-width="3" fill="none">
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </path>
    <text x="465" y="55" fill="#3B82F6" font-size="14" font-weight="bold">
      S₁
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <!-- Shifted Left S2 (Decrease) -->
    <path d="M 100 290 Q 160 200 220 140 Q 280 80 320 60" stroke="#EF4444" stroke-width="3" fill="none">
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </path>
    <text x="325" y="55" fill="#EF4444" font-size="14" font-weight="bold">
      S₂
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <!-- Shift arrows -->
    <path d="M 290 160 L 340 160" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </path>
    <text x="315" y="150" fill="#3B82F6" font-size="10">
      Increase
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <path d="M 280 200 L 230 200" stroke="#EF4444" stroke-width="3" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </path>
    <text x="255" y="220" fill="#EF4444" font-size="10">
      Decrease
      <animate attributeName="opacity" values="0;0;1;1" dur="4s" repeatCount="indefinite"/>
    </text>
    
    <!-- Legend box -->
    <rect x="30" y="360" width="490" height="85" rx="5" fill="currentColor" opacity="0.05" stroke="currentColor" stroke-width="1" opacity="0.2"/>
    
    <!-- Increase factors -->
    <text x="50" y="378" fill="#3B82F6" font-size="11" font-weight="bold">↗ Increase in Supply (S → S₁) - Rightward shift:</text>
    <text x="50" y="393" fill="currentColor" font-size="9">Lower costs | Better technology | Subsidies | Good weather | More firms | Economies of scale</text>
    
    <!-- Decrease factors -->
    <text x="50" y="413" fill="#EF4444" font-size="11" font-weight="bold">↙ Decrease in Supply (S → S₂) - Leftward shift:</text>
    <text x="50" y="428" fill="currentColor" font-size="9">Higher costs | Taxes | Bad weather | Regulations | Fewer firms | Resource scarcity</text>
  </svg>
</div>
`;

const equilibriumDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 550 450" style="width: 100%; max-width: 550px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="eqDemandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6"/>
        <stop offset="100%" style="stop-color:#1D4ED8"/>
      </linearGradient>
      <linearGradient id="eqSupplyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="275" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">Market Equilibrium</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="350" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="350" x2="480" y2="350" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="200" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 200)">Price (£)</text>
    <text x="280" y="385" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity</text>
    
    <!-- Axis arrows -->
    <polygon points="80,50 75,60 85,60" fill="currentColor"/>
    <polygon points="480,350 470,345 470,355" fill="currentColor"/>
    
    <!-- Demand curve (downward sloping) -->
    <path d="M 120 80 Q 200 150 280 200 Q 360 250 440 310" stroke="url(#eqDemandGrad)" stroke-width="3" fill="none"/>
    <text x="450" y="315" fill="#3B82F6" font-size="14" font-weight="bold">D</text>
    
    <!-- Supply curve (upward sloping) -->
    <path d="M 120 310 Q 200 250 280 200 Q 360 150 440 80" stroke="url(#eqSupplyGrad)" stroke-width="3" fill="none"/>
    <text x="450" y="85" fill="#10B981" font-size="14" font-weight="bold">S</text>
    
    <!-- Equilibrium point -->
    <circle cx="280" cy="200" r="10" fill="#F59E0B" stroke="white" stroke-width="2">
      <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="295" y="195" fill="#F59E0B" font-size="12" font-weight="bold">E</text>
    
    <!-- Equilibrium dotted lines -->
    <line x1="80" y1="200" x2="280" y2="200" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5">
      <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
    </line>
    <line x1="280" y1="200" x2="280" y2="350" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5">
      <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
    </line>
    
    <!-- Labels -->
    <text x="65" y="205" text-anchor="end" fill="#F59E0B" font-size="11" font-weight="bold">Pe</text>
    <text x="280" y="370" text-anchor="middle" fill="#F59E0B" font-size="11" font-weight="bold">Qe</text>
    
    <!-- Excess supply zone -->
    <rect x="85" y="100" width="380" height="50" fill="#10B981" opacity="0.1"/>
    <text x="275" y="130" text-anchor="middle" fill="#10B981" font-size="10" font-weight="bold">Excess Supply (Price too high)</text>
    
    <!-- Excess demand zone -->
    <rect x="85" y="280" width="380" height="50" fill="#3B82F6" opacity="0.1"/>
    <text x="275" y="310" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="bold">Excess Demand (Price too low)</text>
    
    <!-- Equilibrium explanation -->
    <rect x="320" y="165" width="150" height="70" rx="5" fill="#F59E0B" opacity="0.15"/>
    <text x="395" y="185" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="bold">EQUILIBRIUM</text>
    <text x="395" y="200" text-anchor="middle" fill="currentColor" font-size="9">Supply = Demand</text>
    <text x="395" y="215" text-anchor="middle" fill="currentColor" font-size="9">No pressure for</text>
    <text x="395" y="228" text-anchor="middle" fill="currentColor" font-size="9">price to change</text>
    
    <!-- Legend -->
    <rect x="90" y="400" width="15" height="3" fill="#3B82F6"/>
    <text x="115" y="405" fill="currentColor" font-size="9">Demand</text>
    <rect x="170" y="400" width="15" height="3" fill="#10B981"/>
    <text x="195" y="405" fill="currentColor" font-size="9">Supply</text>
    <circle cx="260" cy="402" r="5" fill="#F59E0B"/>
    <text x="275" y="405" fill="currentColor" font-size="9">Equilibrium (E)</text>
  </svg>
</div>
`;

const equilibriumShiftDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 550 400" style="width: 100%; max-width: 550px; margin: 0 auto; display: block;">
    <!-- Title -->
    <text x="275" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">How Market Forces Change Equilibrium</text>
    
    <!-- Axes -->
    <line x1="80" y1="50" x2="80" y2="320" stroke="currentColor" stroke-width="2"/>
    <line x1="80" y1="320" x2="480" y2="320" stroke="currentColor" stroke-width="2"/>
    
    <!-- Axis labels -->
    <text x="45" y="185" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold" transform="rotate(-90, 45, 185)">Price (£)</text>
    <text x="280" y="350" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Quantity</text>
    
    <!-- Original curves -->
    <!-- Demand D -->
    <path d="M 120 70 Q 200 130 270 180 Q 340 230 420 290" stroke="#3B82F6" stroke-width="2" fill="none"/>
    <text x="430" y="290" fill="#3B82F6" font-size="12" font-weight="bold">D</text>
    
    <!-- Supply S -->
    <path d="M 120 290 Q 200 230 270 180 Q 340 130 420 70" stroke="#10B981" stroke-width="2" fill="none"/>
    <text x="430" y="75" fill="#10B981" font-size="12" font-weight="bold">S</text>
    
    <!-- Original equilibrium E1 -->
    <circle cx="270" cy="180" r="6" fill="#F59E0B"/>
    <text x="285" y="175" fill="#F59E0B" font-size="10" font-weight="bold">E₁</text>
    
    <!-- Shifted Demand D1 (increase) -->
    <path d="M 180 70 Q 260 130 330 180 Q 400 230 460 290" stroke="#3B82F6" stroke-width="2" fill="none" stroke-dasharray="5,3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </path>
    <text x="470" y="290" fill="#3B82F6" font-size="10">
      D₁
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <!-- New equilibrium E2 -->
    <circle cx="330" cy="150" r="6" fill="#EC4899">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    <text x="345" y="145" fill="#EC4899" font-size="10" font-weight="bold">
      E₂
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </text>
    
    <!-- Arrow from E1 to E2 -->
    <path d="M 276 175 L 320 155" stroke="#EC4899" stroke-width="2" fill="none" marker-end="url(#arrowhead)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </path>
    
    <!-- Dotted lines for new equilibrium -->
    <line x1="80" y1="150" x2="330" y2="150" stroke="#EC4899" stroke-width="1" stroke-dasharray="3,3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </line>
    <line x1="330" y1="150" x2="330" y2="320" stroke="#EC4899" stroke-width="1" stroke-dasharray="3,3">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
    </line>
    
    <!-- Price labels -->
    <text x="65" y="185" text-anchor="end" fill="#F59E0B" font-size="9">P₁</text>
    <text x="65" y="155" text-anchor="end" fill="#EC4899" font-size="9">P₂</text>
    
    <!-- Quantity labels -->
    <text x="270" y="335" text-anchor="middle" fill="#F59E0B" font-size="9">Q₁</text>
    <text x="330" y="335" text-anchor="middle" fill="#EC4899" font-size="9">Q₂</text>
    
    <!-- Explanation box -->
    <rect x="30" y="360" width="490" height="35" rx="5" fill="currentColor" opacity="0.05"/>
    <text x="275" y="378" text-anchor="middle" fill="currentColor" font-size="10" font-weight="bold">When Demand ↑: D shifts right → New equilibrium E₂ → Price ↑ AND Quantity ↑</text>
    <text x="275" y="392" text-anchor="middle" fill="currentColor" font-size="9">Similarly: Demand ↓ = P↓ Q↓ | Supply ↑ = P↓ Q↑ | Supply ↓ = P↑ Q↓</text>
  </svg>
</div>
`;

const priceFunctionsDiagram = `
<div class="diagram-container" style="margin: 2rem 0;">
  <svg viewBox="0 0 550 400" style="width: 100%; max-width: 550px; margin: 0 auto; display: block;">
    <defs>
      <linearGradient id="signalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#3B82F6"/>
        <stop offset="100%" style="stop-color:#1D4ED8"/>
      </linearGradient>
      <linearGradient id="transmitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#10B981"/>
        <stop offset="100%" style="stop-color:#059669"/>
      </linearGradient>
      <linearGradient id="rationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B5CF6"/>
        <stop offset="100%" style="stop-color:#6D28D9"/>
      </linearGradient>
    </defs>
    
    <!-- Title -->
    <text x="275" y="30" text-anchor="middle" font-size="16" font-weight="bold" fill="currentColor">The Three Functions of Price</text>
    
    <!-- Central Price circle -->
    <circle cx="275" cy="200" r="50" fill="#F59E0B" opacity="0.9">
      <animate attributeName="r" values="48;52;48" dur="2s" repeatCount="indefinite"/>
    </circle>
    <text x="275" y="195" text-anchor="middle" fill="white" font-weight="bold" font-size="16">PRICE</text>
    <text x="275" y="212" text-anchor="middle" fill="white" font-size="10">£</text>
    
    <!-- Signalling Function (Top) -->
    <rect x="195" y="50" width="160" height="70" rx="10" fill="url(#signalGrad)" opacity="0.9">
      <animate attributeName="y" values="50;45;50" dur="2s" repeatCount="indefinite"/>
    </rect>
    <text x="275" y="75" text-anchor="middle" fill="white" font-weight="bold" font-size="12">📡 SIGNALLING</text>
    <text x="275" y="92" text-anchor="middle" fill="white" font-size="9">Sends messages to</text>
    <text x="275" y="106" text-anchor="middle" fill="white" font-size="9">producers & consumers</text>
    
    <!-- Transmission of Preferences (Bottom Left) -->
    <rect x="50" y="280" width="160" height="70" rx="10" fill="url(#transmitGrad)" opacity="0.9">
      <animate attributeName="x" values="50;45;50" dur="2s" repeatCount="indefinite" begin="0.7s"/>
    </rect>
    <text x="130" y="305" text-anchor="middle" fill="white" font-weight="bold" font-size="11">🗳️ TRANSMISSION</text>
    <text x="130" y="322" text-anchor="middle" fill="white" font-size="9">Consumers "vote"</text>
    <text x="130" y="336" text-anchor="middle" fill="white" font-size="9">with their money</text>
    
    <!-- Rationing Function (Bottom Right) -->
    <rect x="340" y="280" width="160" height="70" rx="10" fill="url(#rationGrad)" opacity="0.9">
      <animate attributeName="x" values="340;345;340" dur="2s" repeatCount="indefinite" begin="1.4s"/>
    </rect>
    <text x="420" y="305" text-anchor="middle" fill="white" font-weight="bold" font-size="12">⚖️ RATIONING</text>
    <text x="420" y="322" text-anchor="middle" fill="white" font-size="9">Limits access to</text>
    <text x="420" y="336" text-anchor="middle" fill="white" font-size="9">scarce goods</text>
    
    <!-- Connecting lines with animation -->
    <line x1="275" y1="150" x2="275" y2="120" stroke="#3B82F6" stroke-width="3">
      <animate attributeName="stroke-dasharray" values="0,40;40,0" dur="1s" repeatCount="indefinite"/>
    </line>
    
    <line x1="235" y1="235" x2="170" y2="280" stroke="#10B981" stroke-width="3">
      <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="1s" repeatCount="indefinite" begin="0.3s"/>
    </line>
    
    <line x1="315" y1="235" x2="380" y2="280" stroke="#8B5CF6" stroke-width="3">
      <animate attributeName="stroke-dasharray" values="0,80;80,0" dur="1s" repeatCount="indefinite" begin="0.6s"/>
    </line>
    
    <!-- Examples -->
    <text x="420" y="145" fill="#3B82F6" font-size="9" opacity="0.8">High price = make more!</text>
    <text x="85" y="250" fill="#10B981" font-size="9" opacity="0.8">Buying = preference</text>
    <text x="430" y="250" fill="#8B5CF6" font-size="9" opacity="0.8">Limited seats = high price</text>
    
    <!-- Bottom explanation -->
    <text x="275" y="380" text-anchor="middle" fill="currentColor" font-size="10" opacity="0.8">Price allocates scarce resources efficiently in a market economy</text>
  </svg>
</div>
`;

// Economics Data Export
export const economicsData: EconomicsChapter[] = [
  {
    id: "economic-groups-fop",
    title: "1.1 Main Economic Groups & Factors of Production",
    description: "Consumers, producers, government, and the four factors of production",
    icon: "👥",
    modules: [
      {
        id: "economic-groups",
        title: "Main Economic Groups",
        description: "Consumers, producers and government",
        status: "ready",
        subsections: [
          {
            id: "three-economic-groups",
            title: "The Three Main Economic Groups",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Who Are the Main Economic Groups?</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Concept</h3>
    <p>There are <strong>three main groups</strong> in every economy that make markets function:</p>
    <ul>
      <li>✔ <strong>Consumers</strong> – people who buy things</li>
      <li>✔ <strong>Producers</strong> – people/businesses who make things</li>
      <li>✔ <strong>Government</strong> – the people who run the country</li>
    </ul>
    <p>These three groups interact constantly when goods and services are bought and sold.</p>
  </div>

  ${economicGroupsInterdependenceDiagram}

  <div class="definition-block">
    <h3>📘 Consumers</h3>
    <p><strong>Consumers</strong> = individuals or households who buy goods/services to satisfy needs and wants.</p>
    <p>Consumers behave this way to <strong>maximise utility</strong>, which means personal satisfaction.</p>
  </div>

  <p class="key-point">What consumers decide:</p>
  <ul>
    <li>What to buy</li>
    <li>When to buy</li>
    <li>How much to buy</li>
    <li>Which brand or shop to buy from</li>
  </ul>

  <div class="example-block">
    <h3>📝 Examples</h3>
    <ul>
      <li>Buying a chocolate bar = you are the consumer</li>
      <li>Buying a phone = you are the consumer</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Consumers make spending decisions based on the satisfaction they expect to gain."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Producers</h3>
    <p><strong>Producers</strong> = businesses, farmers, companies, or individuals who supply goods/services.</p>
    <p>Producers aim to <strong>maximise profit</strong> — the money left after costs.</p>
  </div>

  <p class="key-point">What producers decide:</p>
  <ul>
    <li>What to produce (e.g. biscuits, trainers, apps)</li>
    <li>How to produce (machines? workers? both?)</li>
    <li>How many to produce (based on demand)</li>
    <li>What price to charge</li>
  </ul>

  <div class="example-block">
    <h3>📝 Examples</h3>
    <ul>
      <li>Farmer growing crops</li>
      <li>Bakery making bread</li>
      <li>Apple producing iPhones</li>
      <li>Amazon delivering parcels</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Producers influence the price, quantity and quality of goods supplied."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Government</h3>
    <p>The <strong>government</strong> is a group that has power to make laws and run public services.</p>
  </div>

  <p class="key-point">What the government does:</p>
  <ul>
    <li>Builds hospitals, schools, roads</li>
    <li>Collects taxes</li>
    <li>Sets rules on safety (e.g. food labelling, age limits)</li>
    <li>Helps poor people (benefits)</li>
    <li>Controls things like smoking laws, alcohol age limits</li>
    <li>Ensures fair treatment of consumers</li>
  </ul>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"The government acts as a producer, regulator, and protector of consumers."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain why consumers, producers and government are said to be 'interdependent'. [4 marks]",
                answer: "Interdependent means they rely on each other. Consumers buy goods from producers, giving them revenue. Producers provide jobs and goods to consumers. Government collects taxes from both and provides services and regulations. Each group's decisions affect the others.",
                marks: 4
              },
              {
                question: "State two decisions that consumers must make. [2 marks]",
                answer: "1. What to buy 2. How much to buy (or: When to buy / Which brand to buy from)",
                marks: 2
              }
            ]
          },
          {
            id: "goods-services",
            title: "Goods and Services",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Goods and Services</h2>
  
  <div class="definition-block">
    <h3>📘 Goods</h3>
    <p><strong>Goods</strong> = things you can touch (tangible)</p>
    <p>Examples: phone, shoes, chocolate bar, furniture</p>
  </div>

  <div class="definition-block">
    <h3>📘 Services</h3>
    <p><strong>Services</strong> = actions someone does for you (intangible)</p>
    <p>Examples: haircut, banking, teaching, delivery</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"A good is tangible; a service is intangible."</p>
  </div>

  <table class="styled-table">
    <thead>
      <tr>
        <th>Goods (Tangible)</th>
        <th>Services (Intangible)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Can be touched</td>
        <td>Cannot be touched</td>
      </tr>
      <tr>
        <td>Can be stored</td>
        <td>Cannot be stored</td>
      </tr>
      <tr>
        <td>Phone, car, food</td>
        <td>Healthcare, education, banking</td>
      </tr>
    </tbody>
  </table>
</div>
            `,
            practiceItems: [
              {
                question: "Using examples, explain the difference between a good and a service. [3 marks]",
                answer: "A good is tangible (can be touched), such as a phone or chocolate bar. A service is intangible (cannot be touched), such as a haircut or banking. Goods can be stored whereas services are consumed immediately.",
                marks: 3
              }
            ]
          }
        ]
      },
      {
        id: "factors-of-production",
        title: "Factors of Production",
        description: "Land, labour, capital and enterprise",
        status: "ready",
        subsections: [
          {
            id: "four-factors",
            title: "The Four Factors of Production",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What Are the Factors of Production?</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Concept</h3>
    <p>To produce any good/service, producers use <strong>four resources</strong> (inputs into production):</p>
    <ol>
      <li><strong>Land</strong> – natural resources</li>
      <li><strong>Labour</strong> – human effort</li>
      <li><strong>Capital</strong> – man-made tools/machines</li>
      <li><strong>Enterprise</strong> – entrepreneur who organises everything</li>
    </ol>
  </div>

  ${factorsOfProductionDiagram}

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Factors of production are the resources used by producers to make goods and services."</p>
  </div>

  <div class="definition-block">
    <h3>🌍 Land (Natural Resources)</h3>
    <p><strong>Land</strong> = all natural resources from nature (not just actual soil)</p>
    <p>Includes: trees, water, oil, minerals, farmland, oceans, rivers, wind, sun (renewable resources)</p>
    <p><strong>Reward for land: Rent</strong></p>
  </div>

  <div class="example-block">
    <h3>📝 Example</h3>
    <p>Chocolate biscuits need cocoa beans → cocoa comes from land.</p>
  </div>

  <div class="definition-block">
    <h3>👷 Labour (Human Work)</h3>
    <p><strong>Labour</strong> = the workers who use their physical or mental effort.</p>
    <p>Examples: Factory workers, teachers, programmers, drivers, doctors, cleaners</p>
    <p><strong>Reward for labour: Wages</strong></p>
  </div>

  <p class="key-point">Quality of labour depends on:</p>
  <ul>
    <li>Education</li>
    <li>Health</li>
    <li>Skills</li>
    <li>Training</li>
    <li>Migration</li>
  </ul>

  <div class="definition-block">
    <h3>🏭 Capital (Man-made Tools)</h3>
    <p><strong>Capital</strong> = things humans build to help production (NOT money!)</p>
    <p>Examples: Machines, tools, technology, factories, trucks, computers, infrastructure (roads, broadband)</p>
    <p><strong>Reward for capital: Interest</strong></p>
  </div>

  <div class="definition-block">
    <h3>💡 Enterprise (Entrepreneurs)</h3>
    <p><strong>Enterprise</strong> = the person who:</p>
    <ul>
      <li>Takes risks</li>
      <li>Starts the business</li>
      <li>Organises the other 3 factors</li>
      <li>Makes decisions</li>
      <li>Aims for profit</li>
    </ul>
    <p><strong>Reward for enterprise: Profit</strong></p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Enterprise combines land, labour and capital and takes risks for profit."</p>
  </div>

  <table class="styled-table">
    <thead>
      <tr>
        <th>Factor</th>
        <th>Definition</th>
        <th>Reward</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Land</td>
        <td>Natural resources</td>
        <td>Rent</td>
        <td>Oil, minerals, farmland</td>
      </tr>
      <tr>
        <td>Labour</td>
        <td>Human effort</td>
        <td>Wages</td>
        <td>Workers, skills</td>
      </tr>
      <tr>
        <td>Capital</td>
        <td>Man-made tools</td>
        <td>Interest</td>
        <td>Machines, factories</td>
      </tr>
      <tr>
        <td>Enterprise</td>
        <td>Risk-taker/organiser</td>
        <td>Profit</td>
        <td>Business owners</td>
      </tr>
    </tbody>
  </table>
</div>
            `,
            practiceItems: [
              {
                question: "State the four factors of production and their rewards. [4 marks]",
                answer: "1. Land - rewarded with rent 2. Labour - rewarded with wages 3. Capital - rewarded with interest 4. Enterprise - rewarded with profit",
                marks: 4
              },
              {
                question: "Explain the difference between land and capital as factors of production. [3 marks]",
                answer: "Land refers to natural resources that come from nature such as oil, minerals and farmland. Capital refers to man-made equipment and tools used in production such as machinery, factories and computers. Land is natural while capital is manufactured by humans.",
                marks: 3
              }
            ]
          },
          {
            id: "combining-factors",
            title: "Combining Factors of Production",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">How Are Factors of Production Combined?</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Concept</h3>
    <p>Producers must decide the <strong>best mix</strong> of land, labour, capital, and enterprise.</p>
  </div>

  <p class="key-point">Decisions include:</p>
  <ul>
    <li>Use more workers or more machines?</li>
    <li>Invest in technology or hire skilled staff?</li>
    <li>How much raw material to use?</li>
  </ul>

  <div class="example-block">
    <h3>📝 Example: Amazon Go</h3>
    <ul>
      <li>Fewer workers (less labour)</li>
      <li>More sensors/cameras (more capital)</li>
      <li>Faster service (efficient combination)</li>
    </ul>
  </div>

  <div class="example-block">
    <h3>📝 Example: Chocolate Biscuits Factory</h3>
    <ul>
      <li>More production-line machinery (capital)</li>
      <li>Fewer workers (labour)</li>
      <li>More raw ingredients (land)</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Producers combine factors to increase efficiency and reduce costs."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Using an example, explain how a firm might change the combination of factors of production it uses. [4 marks]",
                answer: "A firm like Amazon Go has reduced the amount of labour (workers) it uses and increased the amount of capital (sensors and cameras). This increases efficiency as technology can work 24/7 and reduces wage costs. The entrepreneur decides on this combination to maximise profit.",
                marks: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "basic-economic-problem",
    title: "1.2 The Basic Economic Problem",
    description: "Scarcity, unlimited wants, opportunity cost and sustainability",
    icon: "⚖️",
    modules: [
      {
        id: "scarcity-wants",
        title: "Scarce Resources & Unlimited Wants",
        description: "The fundamental economic problem",
        status: "ready",
        subsections: [
          {
            id: "basic-problem",
            title: "The Basic Economic Problem",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What Is the Basic Economic Problem?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p>The <strong>basic economic problem</strong> = resources are scarce but wants are unlimited.</p>
    <p>This creates a gap between what people want and what the economy can actually produce.</p>
  </div>

  ${basicEconomicProblemDiagram}

  <div class="key-facts-block">
    <h3>📋 Scarce Resources</h3>
    <p><strong>Scarcity</strong> = not enough resources to satisfy all wants. A resource is scarce if it is limited, finite, or insufficient.</p>
    <p>Resources include: Land, workers, machines, raw materials, time, money</p>
  </div>

  <div class="example-block">
    <h3>📝 Examples of Scarcity</h3>
    <ul>
      <li>Limited oil vs unlimited petrol demand</li>
      <li>Limited doctors vs unlimited demand for healthcare</li>
      <li>Limited land vs unlimited need for housing</li>
      <li>Limited hospital beds vs unlimited patients</li>
      <li>Limited trains vs unlimited travel demand</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h3>📋 Unlimited Wants</h3>
    <p><strong>Unlimited wants</strong> = people always want more, even after their needs are met.</p>
    <p>People might want: more clothes, a better phone, a newer car, better food, more holidays, larger homes</p>
    <p>Even if you get everything you want today, tomorrow you will want more.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Unlimited wants and scarce resources create the basic economic problem."</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 The Three Central Economic Questions</h3>
    <p>Every country must answer these because of scarcity:</p>
    <ol>
      <li><strong>What to produce?</strong> Houses or hospitals? Food or defence?</li>
      <li><strong>How to produce?</strong> Labour-intensive or capital-intensive?</li>
      <li><strong>For whom to produce?</strong> Those with most money? Those who need it most?</li>
    </ol>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Due to scarcity, economies must decide what, how and for whom to produce."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain what is meant by the 'basic economic problem'. [3 marks]",
                answer: "The basic economic problem is that resources are scarce (limited) but human wants are unlimited. This means there are not enough resources to produce everything people want, so choices must be made about what to produce, how to produce it, and who receives the goods.",
                marks: 3
              },
              {
                question: "State the three central economic questions that all economies must answer. [3 marks]",
                answer: "1. What to produce? 2. How to produce? 3. For whom to produce?",
                marks: 3
              }
            ]
          },
          {
            id: "needs-wants",
            title: "Needs vs Wants",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Distinguishing Wants and Needs</h2>
  
  <div class="definition-block">
    <h3>📘 Needs</h3>
    <p><strong>Needs</strong> = Essential for survival</p>
    <p>Examples: water, food, shelter, heating, clothes</p>
  </div>

  <div class="definition-block">
    <h3>📘 Wants</h3>
    <p><strong>Wants</strong> = Non-essential desires</p>
    <p>Examples: designer clothes, holidays, latest phone, video games</p>
  </div>

  <div class="example-block">
    <h3>📝 Example</h3>
    <p>The NHS struggles because unlimited wants (healthcare demand) overwhelm limited resources like beds, doctors, and nurses.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Needs are essential for survival; wants are desires that extend beyond basic necessities."</p>
  </div>

  <table class="styled-table">
    <thead>
      <tr>
        <th>Needs</th>
        <th>Wants</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Essential for survival</td>
        <td>Not essential</td>
      </tr>
      <tr>
        <td>Food, water, shelter</td>
        <td>Holidays, designer goods</td>
      </tr>
      <tr>
        <td>Limited in number</td>
        <td>Unlimited</td>
      </tr>
    </tbody>
  </table>
</div>
            `,
            practiceItems: [
              {
                question: "Explain the difference between a need and a want. [2 marks]",
                answer: "A need is something essential for survival such as food, water or shelter. A want is a non-essential desire that goes beyond basic necessities, such as designer clothes or holidays.",
                marks: 2
              }
            ]
          }
        ]
      },
      {
        id: "opportunity-cost",
        title: "Opportunity Cost",
        description: "The cost of the next best alternative",
        status: "ready",
        subsections: [
          {
            id: "opp-cost-explained",
            title: "Understanding Opportunity Cost",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What Is Opportunity Cost?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p><strong>Opportunity cost</strong> = the next best alternative given up when you make a choice.</p>
    <p>It only applies when you give something up.</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why Opportunity Cost Exists</h3>
    <p>Because resources are limited:</p>
    <ul>
      <li>Time</li>
      <li>Money</li>
      <li>Labour</li>
      <li>Land</li>
    </ul>
    <p>You must choose one thing over another. If you choose X → you give up Y.</p>
  </div>

  <div class="example-block">
    <h3>📝 Examples</h3>
    <ul>
      <li>Spend 50p on a banana → opportunity cost is the apple you didn't buy</li>
      <li>Government spends on education → opportunity cost might be less spending on public transport</li>
      <li>Firm uses metal for cars → opportunity cost is fewer motorbikes</li>
      <li>A family chooses a new bathroom over a new car → opportunity cost = the car</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Opportunity cost is the benefit of the next best alternative forgone."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Define opportunity cost and give an example. [3 marks]",
                answer: "Opportunity cost is the benefit of the next best alternative forgone when making a choice. For example, if a student chooses to spend £20 on a concert ticket instead of buying a textbook, the opportunity cost is the textbook they cannot now buy.",
                marks: 3
              }
            ]
          },
          {
            id: "sustainability",
            title: "Economic, Social & Environmental Sustainability",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Evaluating Economic Choices</h2>
  
  <div class="key-idea-block">
    <h3>💡 Three Types of Sustainability</h3>
    <p>Any decision in the economy has costs and benefits. These can be grouped into 3 categories:</p>
    <ol>
      <li><strong>Economic Sustainability</strong></li>
      <li><strong>Social Sustainability</strong></li>
      <li><strong>Environmental Sustainability</strong></li>
    </ol>
  </div>

  <div class="definition-block">
    <h3>📘 Economic Sustainability</h3>
    <p>Ensures resources are used efficiently now and in the future so the economy can grow over time.</p>
    <p>Examines: costs of production, prices, unemployment, government spending and tax revenues, long-term benefits vs costs</p>
  </div>

  <div class="example-block">
    <h3>📝 Example</h3>
    <p>Government builds railway → jobs created → unemployment falls → government pays fewer benefits → economic sustainability improves.</p>
  </div>

  <div class="definition-block">
    <h3>📘 Social Sustainability</h3>
    <p>Focuses on people's quality of life and fairness in society.</p>
    <p>It asks: Does the decision help communities? Does it improve wellbeing? Does it make society more equal? Does it protect future generations?</p>
  </div>

  <div class="definition-block">
    <h3>📘 Environmental Sustainability</h3>
    <p>Focuses on protecting the natural world.</p>
    <p>Looks at: pollution, use of renewable resources, damage to wildlife, climate change</p>
  </div>

  <div class="key-facts-block">
    <h3>📋 Renewable vs Non-renewable Resources</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Renewable (replaced naturally)</th>
          <th>Non-renewable (cannot be replaced)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Solar power, wind power</td>
          <td>Oil, gas, coal</td>
        </tr>
        <tr>
          <td>Wave/tidal, timber (if replanted)</td>
          <td>Metals like copper, gold, diamond</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"To evaluate an economic choice, weigh its economic, social, and environmental impacts."</p>
  </div>

  <div class="conclusion-block">
    <h3>🎯 Master Exam Sentence</h3>
    <p>"The basic economic problem arises because limited resources cannot satisfy unlimited wants, so decisions involve opportunity cost and must balance economic, social and environmental impacts."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain how a government decision to build a new airport might be evaluated in terms of economic, social and environmental sustainability. [6 marks]",
                answer: "Economic: Creates jobs, boosts tourism revenue, but involves high construction costs. Social: May improve travel options and quality of life, but could cause noise pollution for nearby residents. Environmental: Aircraft emissions contribute to climate change, uses land that could be green space, but may replace older, less efficient airports. The decision should balance all three aspects.",
                marks: 6
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "role-of-markets",
    title: "2.1 The Role of Markets",
    description: "Market economy, economic sectors, product and factor markets",
    icon: "🏪",
    modules: [
      {
        id: "markets-basics",
        title: "Markets & Market Economy",
        description: "What markets are and how they work",
        status: "ready",
        subsections: [
          {
            id: "what-is-market",
            title: "What Is a Market?",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What Is a Market?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p>A <strong>market</strong> is any way of bringing together buyers and sellers to buy and sell goods and services.</p>
    <p>A market is a system where someone who wants to buy something meets someone who wants to sell it. It does not need to be a physical place.</p>
  </div>

  <div class="key-facts-block">
    <h3>📋 Types of Markets</h3>
    <ul>
      <li>A stall on the street</li>
      <li>Shops on the high street</li>
      <li>Auctions (buying by bidding)</li>
      <li>Online apps/websites (Amazon, eBay, Shein, Vinted)</li>
      <li>Telephone selling</li>
      <li>Catalogues / mail order</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why Markets Exist</h3>
    <ul>
      <li>Consumers want goods and services</li>
      <li>Producers want profit</li>
      <li>Markets connect them through prices</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"A market brings together buyers and sellers for exchange."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Market Economy</h3>
    <p>A <strong>market economy</strong> is an economy in which scarce resources are allocated by the market forces of supply and demand.</p>
    <ul>
      <li>Prices rise and fall depending on demand and supply</li>
      <li>Consumers decide what they want</li>
      <li>Producers decide what to supply</li>
      <li>No central authority plans production</li>
      <li>Resources go to where they are most valued</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"In a market economy, supply and demand allocate scarce resources."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Define what is meant by a 'market'. [2 marks]",
                answer: "A market is any way of bringing together buyers and sellers to buy and sell goods and services. It does not need to be a physical place.",
                marks: 2
              },
              {
                question: "Explain how resources are allocated in a market economy. [3 marks]",
                answer: "In a market economy, resources are allocated by the forces of supply and demand through the price mechanism. When demand for a product rises, prices increase, signalling to producers to make more. Resources flow to industries where they are most valued and can earn the highest returns.",
                marks: 3
              }
            ]
          },
          {
            id: "economic-sectors",
            title: "The Three Economic Sectors",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">The Three Economic Sectors</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Concept</h3>
    <p>Every good/service is produced in one of these 3 sectors:</p>
  </div>

  <div class="definition-block">
    <h3>🟫 Primary Sector</h3>
    <p>The <strong>primary sector</strong> refers to the direct use of natural resources.</p>
    <p>Examples: Farming, forestry, fishing, mining, oil extraction, quarrying</p>
    <p>These products are the raw materials the rest of the economy needs.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"The primary sector extracts raw materials."</p>
  </div>

  <div class="definition-block">
    <h3>🔵 Secondary Sector</h3>
    <p>The <strong>secondary sector</strong> refers to all activities concerned with manufacturing or construction.</p>
    <p><strong>Manufacturing:</strong> Making phones, cars, bread, furniture, oil refining, food processing, clothing factories</p>
    <p><strong>Construction:</strong> Building homes, offices, roads, schools, airports</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"The secondary sector turns raw materials into finished goods."</p>
  </div>

  <div class="definition-block">
    <h3>🟣 Tertiary Sector</h3>
    <p>The <strong>tertiary sector</strong> refers to all activities in which a service is provided.</p>
    <p>Includes: Retail shops, transport, banking, education, healthcare, insurance, entertainment, tourism, hairdressing, delivery services</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"The tertiary sector provides services to consumers, firms, and government."</p>
  </div>

  <table class="styled-table">
    <thead>
      <tr>
        <th>Sector</th>
        <th>Activity</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Primary</td>
        <td>Extraction of raw materials</td>
        <td>Mining, farming, fishing</td>
      </tr>
      <tr>
        <td>Secondary</td>
        <td>Manufacturing & construction</td>
        <td>Car factories, building houses</td>
      </tr>
      <tr>
        <td>Tertiary</td>
        <td>Providing services</td>
        <td>Banking, healthcare, retail</td>
      </tr>
    </tbody>
  </table>
</div>
            `,
            practiceItems: [
              {
                question: "Identify which economic sector each of the following belongs to: (a) farming (b) car manufacturing (c) banking [3 marks]",
                answer: "(a) Primary sector - farming extracts raw materials (b) Secondary sector - car manufacturing turns raw materials into finished goods (c) Tertiary sector - banking provides a service",
                marks: 3
              }
            ]
          }
        ]
      },
      {
        id: "product-factor-markets",
        title: "Product & Factor Markets",
        description: "How markets are linked",
        status: "ready",
        subsections: [
          {
            id: "product-factor-markets",
            title: "Product Markets & Factor Markets",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Product Markets & Factor Markets</h2>
  
  <div class="definition-block">
    <h3>📘 Product Market</h3>
    <p>A <strong>product market</strong> refers to markets in which final goods or services are offered to consumers, businesses and the public sector.</p>
    <p>Examples: Buying clothes from a shop, taking a bus, going to the cinema, shopping online, streaming Netflix</p>
    <p>Who buys here? Households, firms, government departments</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Product markets sell finished goods and services."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Factor Market</h3>
    <p>A <strong>factor market</strong> is one in which the services of the factors of production are bought and sold.</p>
    <p>What is traded? Land, labour, capital, enterprise</p>
    <p>Firms demand these resources. Households usually supply them (e.g. labour).</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 Key Concept: Derived Demand</h3>
    <p>Firms only hire labour if consumers want the goods those workers will produce.</p>
    <p>Example: Car demand rises → firms hire more workers → labour demand increases.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Factor markets trade the services of land, labour, capital and enterprise."</p>
  </div>

  ${productFactorMarketsDiagram}

  <div class="key-facts-block">
    <h3>📋 How Product & Factor Markets Link</h3>
    <p>These markets depend on each other (interdependent):</p>
    <ol>
      <li>Workers sell labour in factor markets → earn wages</li>
      <li>Workers spend wages in product markets → buy goods</li>
      <li>Firms earn revenue → buy more labour/capital in factor markets</li>
      <li>More production → more goods sold in product markets</li>
    </ol>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Factor and product markets are interdependent."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain the difference between a product market and a factor market. [4 marks]",
                answer: "A product market is where finished goods and services are bought and sold to consumers, such as buying clothes or streaming services. A factor market is where the factors of production (land, labour, capital, enterprise) are traded - for example, the labour market where workers sell their skills to firms. Firms are buyers in factor markets but sellers in product markets.",
                marks: 4
              },
              {
                question: "Explain what is meant by 'derived demand' for labour. [3 marks]",
                answer: "Derived demand means that the demand for labour depends on the demand for the goods/services that workers produce. If demand for cars increases, firms will hire more workers to make cars. Labour is not demanded for its own sake, but because of demand for products.",
                marks: 3
              }
            ]
          },
          {
            id: "specialisation-exchange",
            title: "Specialisation & Exchange",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Specialisation & Exchange</h2>
  
  <div class="definition-block">
    <h3>📘 Specialisation</h3>
    <p><strong>Specialisation</strong> is the process by which individuals, firms, regions and whole economies concentrate on producing those products that they are best at producing.</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why Specialisation Happens</h3>
    <ul>
      <li>Higher skill</li>
      <li>Faster production</li>
      <li>Lower cost</li>
      <li>Better quality</li>
      <li>Efficient use of resources</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Specialisation increases efficiency by focusing on strengths."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Exchange</h3>
    <p><strong>Exchange</strong> is the giving up of something that the individual or firm has, in return for something they need but do not possess.</p>
    <p>If you specialise in only one thing, you cannot produce everything you need — you must trade.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Specialisation requires exchange because no one produces everything they need."</p>
  </div>

  <div class="key-facts-block">
    <h3>📋 Benefits of Specialisation</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>For Producers</th>
          <th>For Workers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Higher output & productivity</td>
          <td>Increased skill</td>
        </tr>
        <tr>
          <td>Higher quality</td>
          <td>Use natural strengths</td>
        </tr>
        <tr>
          <td>Economies of scale</td>
          <td>Better pay</td>
        </tr>
        <tr>
          <td>Time saving</td>
          <td>Higher job satisfaction</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="warning-block">
    <h3>⚠️ Costs of Specialisation</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>For Producers</th>
          <th>For Workers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Costs may rise if resources scarce</td>
          <td>Boredom from repetition</td>
        </tr>
        <tr>
          <td>Dependency on one process</td>
          <td>Deskilling</td>
        </tr>
        <tr>
          <td>Failure if exchange breaks down</td>
          <td>Unemployment risk if demand falls</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain two benefits and two costs of specialisation for workers. [4 marks]",
                answer: "Benefits: 1. Workers develop higher skills through practice 2. May receive higher pay as specialists are valuable. Costs: 1. Boredom from repetitive tasks 2. Risk of unemployment if demand for their specialised product falls as they may lack transferable skills.",
                marks: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "demand",
    title: "2.2 Demand",
    description: "Law of demand, demand curves, shifts and movements",
    icon: "📈",
    modules: [
      {
        id: "demand-basics",
        title: "Understanding Demand",
        description: "What demand means and the law of demand",
        status: "ready",
        subsections: [
          {
            id: "what-is-demand",
            title: "What Is Demand?",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What Is Meant by Demand?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p><strong>Demand</strong> is the quantity of a good or service that consumers are <strong>willing and able</strong> to buy at a given price in a given time period.</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 "Willing and Able"</h3>
    <ul>
      <li><strong>Willing</strong> = the consumer wants the product</li>
      <li><strong>Able</strong> = the consumer has the money to buy it</li>
    </ul>
    <p>If someone wants a product but can't afford it → no effective demand.</p>
  </div>

  <div class="example-block">
    <h3>📝 Examples</h3>
    <ul>
      <li>You want a PS5 but have no money → no demand</li>
      <li>You can afford a chocolate bar and want it → demand exists</li>
    </ul>
  </div>

  <div class="definition-block">
    <h3>📘 Derived Demand</h3>
    <p>Some goods/services are demanded because another product is demanded.</p>
    <p>Example: People don't "want transport" for its own sake. They want transport because they need to commute, go on holiday, or move goods. → Demand for transport is <strong>derived</strong> from demand for travel.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Demand must be effective — consumers must be willing and able to pay."</p>
  </div>

  <div class="definition-block">
    <h3>📘 The Law of Demand</h3>
    <p>The <strong>law of demand</strong> states that for most products the quantity demanded <strong>varies inversely</strong> with its price.</p>
    <ul>
      <li>When price rises, quantity demanded falls</li>
      <li>When price falls, quantity demanded rises</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why This Happens</h3>
    <ul>
      <li>Consumers have more money left over when prices fall</li>
      <li>Cheaper goods offer higher satisfaction per pound spent</li>
      <li>Consumers may switch from more expensive goods</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Demand and price have an inverse relationship."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Define demand. [2 marks]",
                answer: "Demand is the quantity of a good or service that consumers are willing and able to buy at a given price in a given time period.",
                marks: 2
              },
              {
                question: "State the law of demand. [2 marks]",
                answer: "The law of demand states that quantity demanded varies inversely with price - when price rises, quantity demanded falls, and when price falls, quantity demanded rises.",
                marks: 2
              }
            ]
          },
          {
            id: "demand-curve",
            title: "The Demand Curve",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Drawing and Explaining a Demand Curve</h2>
  
  ${demandCurveDiagram}

  <div class="key-facts-block">
    <h3>📋 What a Demand Curve Shows</h3>
    <ul>
      <li><strong>Downward sloping</strong> (due to the law of demand)</li>
      <li><strong>Price on vertical axis (P)</strong></li>
      <li><strong>Quantity on horizontal axis (Q)</strong></li>
      <li>Label your curve <strong>D</strong></li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h3>💡 Reason for Slope</h3>
    <p>When price increases → people buy less</p>
    <p>When price decreases → people buy more</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Key Exam Points</h3>
    <ul>
      <li>Always label axes (Price, Quantity)</li>
      <li>Always label curve (D)</li>
      <li>Show direction of movement if required (arrows)</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"A demand curve slopes downward from left to right."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Individual vs Market Demand</h3>
    <p><strong>Individual demand</strong> = the demand for a good by an individual consumer</p>
    <p><strong>Market demand</strong> = the total demand, found by adding together all individual demands</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Market demand is the sum of all individual demands."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain why the demand curve slopes downward. [3 marks]",
                answer: "The demand curve slopes downward because of the law of demand - there is an inverse relationship between price and quantity demanded. When prices fall, consumers have more purchasing power so can buy more. When prices rise, goods become less affordable so consumers buy less.",
                marks: 3
              }
            ]
          }
        ]
      },
      {
        id: "demand-changes",
        title: "Changes in Demand",
        description: "Movements along vs shifts of the demand curve",
        status: "ready",
        subsections: [
          {
            id: "movements-along",
            title: "Movements Along the Demand Curve",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Movements Along the Demand Curve</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Rule</h3>
    <p>Movements along the demand curve are caused <strong>ONLY by changes in price</strong>.</p>
  </div>

  ${demandMovementsDiagram}

  <div class="key-facts-block">
    <h3>📋 Two Types of Movement</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Cause</th>
          <th>Effect</th>
          <th>Direction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="color: #10B981; font-weight: bold;">Expansion</td>
          <td>Price falls</td>
          <td>Quantity demanded rises</td>
          <td>Movement DOWN the curve</td>
        </tr>
        <tr>
          <td style="color: #EF4444; font-weight: bold;">Contraction</td>
          <td>Price rises</td>
          <td>Quantity demanded falls</td>
          <td>Movement UP the curve</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h3>📝 Example</h3>
    <p>If the price of scooters increases from £200 to £300 → fewer people buy → <strong>contraction</strong> (movement up the curve)</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Movements along the demand curve occur due to a change in price only."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain what causes a movement along the demand curve. [2 marks]",
                answer: "A movement along the demand curve is caused ONLY by a change in the price of the good. An expansion (movement down) occurs when price falls, and a contraction (movement up) occurs when price rises.",
                marks: 2
              }
            ]
          },
          {
            id: "shifts-demand",
            title: "Shifts of the Demand Curve",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Shifts of the Demand Curve</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Rule</h3>
    <p>Shifts happen when <strong>non-price factors</strong> change. A shift means the whole curve moves and demand changes at <strong>every price level</strong>.</p>
  </div>

  ${demandShiftsDiagram}

  <div class="key-facts-block">
    <h3>📋 Causes of Shifts in Demand (Non-Price Factors)</h3>
  </div>

  <div class="definition-block">
    <h3>💰 A. Income Changes</h3>
    <ul>
      <li>Higher income → consumers buy more → demand shifts <strong>right</strong></li>
      <li>Lower income → consumers buy less → demand shifts <strong>left</strong></li>
    </ul>
    <p>Example: During a recession, demand for luxury goods falls.</p>
  </div>

  <div class="definition-block">
    <h3>👗 B. Tastes and Fashion</h3>
    <p>If a product becomes more fashionable/popular, demand shifts <strong>right</strong>.</p>
    <p>Examples: 4G to 5G phones, trendy clothing, viral TikTok products</p>
  </div>

  <div class="definition-block">
    <h3>🔄 C. Prices of Substitutes</h3>
    <p>Substitute = can replace another product</p>
    <p>If price of one product rises, people switch to its substitute.</p>
    <p>Examples: Coffee vs tea, Coke vs Pepsi, iPhone vs Samsung</p>
    <p>If price of Pepsi rises → demand for Coke <strong>rises</strong></p>
  </div>

  <div class="definition-block">
    <h3>🔗 D. Prices of Complements</h3>
    <p>Complement = used together with another product</p>
    <p>If price of a complement rises → demand for main product <strong>falls</strong></p>
    <p>Examples: Cars & fuel, printers & ink, games consoles & games</p>
    <p>If petrol prices rise → demand for cars <strong>falls</strong></p>
  </div>

  <div class="definition-block">
    <h3>👥 E. Population Changes</h3>
    <ul>
      <li><strong>Size:</strong> More people = more demand</li>
      <li><strong>Age:</strong> Older populations demand healthcare, cruises</li>
      <li><strong>Gender:</strong> Can affect demand for certain products</li>
    </ul>
  </div>

  <div class="definition-block">
    <h3>📺 F. Marketing & Advertising</h3>
    <p>Good advertising increases demand → curve shifts <strong>right</strong></p>
  </div>

  <div class="definition-block">
    <h3>🏛️ G. Government Policies</h3>
    <ul>
      <li><strong>Taxes:</strong> Taxes on goods reduce disposable income → demand falls</li>
      <li><strong>Subsidies:</strong> Government pays part of cost → prices fall → demand increases</li>
    </ul>
  </div>

  <div class="definition-block">
    <h3>📊 H. Economic Situation</h3>
    <ul>
      <li>Strong economy: High incomes, high confidence → more spending → demand rises</li>
      <li>Weak economy: Low income, job losses → demand falls</li>
    </ul>
  </div>

  <div class="definition-block">
    <h3>⏰ I. Price Expectations</h3>
    <p>If people expect prices to rise in the future → they buy now → demand rises today</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Shifts change both price and quantity of a product."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Identify and explain two factors that could cause the demand curve for electric cars to shift to the right. [4 marks]",
                answer: "1. Rising incomes - as consumers have more disposable income they can afford electric cars which are often more expensive, so demand increases at every price level. 2. Rising petrol prices - petrol cars are a substitute, so if petrol becomes more expensive, consumers switch to electric cars, increasing demand.",
                marks: 4
              },
              {
                question: "Explain the difference between a movement along and a shift of the demand curve. [4 marks]",
                answer: "A movement along the demand curve is caused ONLY by a change in the price of the good - price falls cause expansion (down the curve) and price rises cause contraction (up the curve). A shift of the curve is caused by non-price factors such as income, tastes, or prices of substitutes - the whole curve moves and demand changes at every price level.",
                marks: 4
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "supply",
    title: "2.3 Supply",
    description: "Law of supply, supply curves, shifts and movements",
    icon: "📉",
    modules: [
      {
        id: "supply-basics",
        title: "Understanding Supply",
        description: "What supply means and the law of supply",
        status: "ready",
        subsections: [
          {
            id: "what-is-supply",
            title: "What Is Supply?",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What Is Meant by Supply?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p><strong>Supply</strong> is the ability and willingness of firms to provide goods and services at each price in a given time period.</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 "Ability and Willingness"</h3>
    <ul>
      <li><strong>Ability</strong> = firms must be capable of producing the good (have workers, machines, materials)</li>
      <li><strong>Willingness</strong> = firms must want to sell at that price (they want profit)</li>
    </ul>
    <p>If a firm is able but NOT willing (price too low) → no supply</p>
    <p>If a firm is willing but NOT able (not enough resources) → no supply</p>
  </div>

  <div class="key-facts-block">
    <h3>📋 Time Period Matters</h3>
    <p>Different products need different time periods to adjust supply:</p>
    <ul>
      <li>Easy to change quickly → baked beans production</li>
      <li>Hard to change quickly → cinema seats, buildings, aircraft</li>
    </ul>
    <p>Producers cannot always increase supply instantly.</p>
  </div>

  <div class="definition-block">
    <h3>📘 The Law of Supply</h3>
    <p>The <strong>law of supply</strong> states that for most products the quantity supplied <strong>varies directly</strong> with its price.</p>
    <ul>
      <li>If price rises, quantity supplied rises</li>
      <li>If price falls, quantity supplied falls</li>
    </ul>
    <p>This is the <strong>opposite</strong> of the law of demand.</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why Firms Supply More at Higher Prices</h3>
    <ol>
      <li><strong>Higher profits can be earned</strong> - Higher prices → higher profit → firms want to supply more</li>
      <li><strong>Production costs rise as output expands</strong> - To increase output, firms may need overtime pay, extra workers, more expensive machinery → they need higher prices to cover costs</li>
      <li><strong>New firms enter the market</strong> - Higher prices make the industry attractive to new producers → increases total supply</li>
    </ol>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"As price increases, firms are more willing to supply due to higher profit incentives."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Define supply. [2 marks]",
                answer: "Supply is the ability and willingness of firms to provide goods and services at each price in a given time period.",
                marks: 2
              },
              {
                question: "Explain why firms supply more at higher prices. [3 marks]",
                answer: "Firms supply more at higher prices because: 1. Higher prices mean higher profits which incentivise production 2. Higher prices allow firms to cover the increased costs of expanding output (overtime, extra materials) 3. Higher prices attract new firms to enter the market, increasing total supply.",
                marks: 3
              }
            ]
          },
          {
            id: "supply-curve",
            title: "The Supply Curve",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Drawing and Explaining a Supply Curve</h2>
  
  ${supplyCurveDiagram}

  <div class="key-facts-block">
    <h3>📋 What a Supply Curve Shows</h3>
    <ul>
      <li><strong>Upward sloping</strong> (from left to right)</li>
      <li>Price on vertical axis (P)</li>
      <li>Quantity on horizontal axis (Q)</li>
      <li>Curve labelled <strong>S</strong></li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h3>💡 Interpretation</h3>
    <ul>
      <li>Moving up the curve: price rises → supply expands</li>
      <li>Moving down the curve: price falls → supply contracts</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"The supply curve slopes upward due to direct relationship between price and quantity supplied."</p>
  </div>

  <div class="definition-block">
    <h3>📘 Individual vs Market Supply</h3>
    <p><strong>Individual supply</strong> = the supply by an individual producer</p>
    <p><strong>Market supply</strong> = the total supply by adding together all individual producers' supplies</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Market supply is the horizontal sum of individual supply curves."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain why the supply curve slopes upward. [3 marks]",
                answer: "The supply curve slopes upward because there is a direct relationship between price and quantity supplied. When prices rise, firms earn higher profits so are more willing to supply. Higher prices also allow firms to cover increased production costs and attract new firms to the market.",
                marks: 3
              }
            ]
          }
        ]
      },
      {
        id: "supply-changes",
        title: "Changes in Supply",
        description: "Movements along vs shifts of the supply curve",
        status: "ready",
        subsections: [
          {
            id: "movements-supply",
            title: "Movements Along the Supply Curve",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Movements Along the Supply Curve</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Rule</h3>
    <p>Movements along the supply curve are caused <strong>ONLY by changes in price</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h3>📋 Two Types of Movement</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Cause</th>
          <th>Effect</th>
          <th>Direction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="color: #10B981; font-weight: bold;">Expansion</td>
          <td>Price rises</td>
          <td>Firms supply more</td>
          <td>Movement UP the curve</td>
        </tr>
        <tr>
          <td style="color: #EF4444; font-weight: bold;">Contraction</td>
          <td>Price falls</td>
          <td>Firms supply less</td>
          <td>Movement DOWN the curve</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="example-block">
    <h3>📝 Example</h3>
    <p>If strawberries sell for higher prices in summer → farmers bring more to market → <strong>expansion</strong> (movement up the curve)</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"A movement along the supply curve is caused by a change in price only."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Distinguish between an expansion and a contraction of supply. [2 marks]",
                answer: "An expansion of supply occurs when price rises and firms supply more (movement up the curve). A contraction of supply occurs when price falls and firms supply less (movement down the curve). Both are movements along the same supply curve caused by price changes only.",
                marks: 2
              }
            ]
          },
          {
            id: "shifts-supply",
            title: "Shifts of the Supply Curve",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">Shifts of the Supply Curve</h2>
  
  <div class="key-idea-block">
    <h3>💡 Key Rule</h3>
    <p>Shifts are caused by <strong>non-price factors</strong>. The price stays the same but the quantity supplied changes at every price.</p>
    <ul>
      <li>Right shift (S → S₁) → <strong>Increase</strong> in supply</li>
      <li>Left shift (S → S₂) → <strong>Decrease</strong> in supply</li>
    </ul>
  </div>

  ${supplyShiftsDiagram}

  <div class="key-facts-block">
    <h3>📋 Causes of Shifts in Supply (Non-Price Factors)</h3>
  </div>

  <div class="definition-block">
    <h3>💰 A. Costs of Production</h3>
    <ul>
      <li>Costs rise → supply falls (leftward shift)</li>
      <li>Costs fall → supply rises (rightward shift)</li>
    </ul>
    <p>Causes of rising costs: higher wages, higher raw material prices, higher energy costs, increased rent</p>
    <p>Example: Higher oil prices → higher production costs → firms supply less petrol</p>
  </div>

  <div class="definition-block">
    <h3>🏛️ B. Taxes and Subsidies</h3>
    <ul>
      <li><strong>Indirect taxes</strong> (e.g. VAT) increase costs → firms supply less → left shift</li>
      <li><strong>Subsidies</strong> lower costs → firms supply more → right shift</li>
    </ul>
    <p>Example: Subsidies for electric cars increase supply of EVs</p>
  </div>

  <div class="definition-block">
    <h3>⚙️ C. Technology</h3>
    <p>Better technology allows firms to produce more using the same resources.</p>
    <p>Supply increases → right shift</p>
    <p>Examples: Farming machinery harvests more crops, computer automation speeds up factories</p>
  </div>

  <div class="definition-block">
    <h3>🌤️ D. Climate/Weather</h3>
    <p>Very important for agriculture:</p>
    <ul>
      <li>Good weather → more crops → higher supply (right shift)</li>
      <li>Bad weather (floods, drought, frost) → lower supply (left shift)</li>
    </ul>
  </div>

  <div class="definition-block">
    <h3>🏭 E. Number of Producers / Size of Firms</h3>
    <ul>
      <li>More firms enter market → supply increases (right shift)</li>
      <li>Firms expand → bigger production capacity → more supply</li>
    </ul>
  </div>

  <div class="definition-block">
    <h3>📋 F. Government Regulation</h3>
    <p>Regulations increase costs → supply falls (left shift)</p>
    <p>Examples: Safety rules, pollution limits, minimum wage, consumer protection laws</p>
  </div>

  <div class="definition-block">
    <h3>📈 G. Efficiency and Economies of Scale</h3>
    <p>If firms become more efficient (reduce waste, increase productivity) → supply increases (right shift)</p>
    <p>Examples: Better training, lean production, automation, bulk buying</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Consequences of Shifts</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Shift</th>
          <th>Price Effect</th>
          <th>Quantity Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Increase (right shift)</td>
          <td>Price falls</td>
          <td>Quantity rises</td>
        </tr>
        <tr>
          <td>Decrease (left shift)</td>
          <td>Price rises</td>
          <td>Quantity falls</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Identify and explain two factors that could cause the supply curve for wheat to shift to the left. [4 marks]",
                answer: "1. Bad weather - drought or floods destroy crops, reducing the amount of wheat farmers can produce at any price level. 2. Rising costs of production - if fuel or fertiliser prices increase, farming becomes more expensive and some farmers may reduce production or exit the market.",
                marks: 4
              },
              {
                question: "Explain how improved technology could affect the supply of smartphones. [3 marks]",
                answer: "Improved technology would shift the supply curve for smartphones to the right (increase in supply). Better machinery and automation allows firms to produce more phones with the same resources, reducing costs per unit. This means firms are willing and able to supply more smartphones at every price level.",
                marks: 3
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "price",
    title: "2.4 Price",
    description: "Equilibrium, market forces, and how prices allocate resources",
    icon: "💰",
    modules: [
      {
        id: "price-functions",
        title: "Functions of Price",
        description: "How prices work in markets",
        status: "ready",
        subsections: [
          {
            id: "what-is-price",
            title: "What Is Price?",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What is Price?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p><strong>Price</strong> = the money a consumer pays to a producer for a good or service.</p>
    <p>It is set by the interaction of demand and supply, not by random choice.</p>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why Price Matters</h3>
    <ul>
      <li>It tells consumers how much they must spend</li>
      <li>It tells producers how much revenue they earn per unit</li>
      <li>It tells the market how scarce or desirable a product is</li>
    </ul>
    <p><strong>Price is the language of the market — it communicates information.</strong></p>
  </div>

  <div class="example-block">
    <h3>📝 Example</h3>
    <p>If a pair of trainers costs £120, this reflects:</p>
    <ul>
      <li>High demand (many people want them)</li>
      <li>or limited supply (not many pairs available)</li>
      <li>or both</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h3>📋 Is Price a Reflection of Worth?</h3>
    <p><strong>Worth</strong> = how valuable something feels to a person</p>
    <p><strong>Price</strong> = what you actually pay</p>
    <p>These are NOT always the same because:</p>
    <ul>
      <li><strong>Worth is subjective</strong> - Someone thirsty after football might value water at £5, but someone at home may value it at £0.50</li>
      <li><strong>Price is influenced by supply and demand</strong> - The market price only changes when many consumers feel the same way</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Key Point</h3>
    <p>We need prices because resources are scarce. Without prices, there would be no way to compare wants or decide who gets what.</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain why the price of a good does not always reflect its worth to a consumer. [3 marks]",
                answer: "Worth is subjective - different people value the same product differently depending on their circumstances. For example, a thirsty person values water more than someone at home. However, price is determined by market forces of supply and demand, not individual feelings, so remains the same for all buyers.",
                marks: 3
              }
            ]
          },
          {
            id: "three-functions",
            title: "The Three Functions of Price",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">How Price Helps Allocate Resources Efficiently</h2>
  
  <div class="key-idea-block">
    <h3>💡 Three Major Functions</h3>
    <p>Price performs three major functions that help markets manage scarcity:</p>
  </div>

  ${priceFunctionsDiagram}

  <div class="definition-block">
    <h3>📡 A. Signalling Function</h3>
    <p><strong>Prices send messages</strong> to producers and consumers about what is happening in the market.</p>
    <ul>
      <li>If price rises → producers see this as a signal that more resources should be directed to this product</li>
      <li>If price falls → it signals that fewer resources are needed</li>
    </ul>
    <p>Example: Higher prices for renewable electricity → more firms build wind farms</p>
    <p>Without clear price signals, firms would not know which industries to invest in.</p>
  </div>

  <div class="definition-block">
    <h3>🗳️ B. Transmission of Preferences</h3>
    <p><strong>Consumers "vote" with their money</strong> - showing what they prefer by buying certain goods.</p>
    <ul>
      <li>When consumers buy lots of something → price rises → producers respond by supplying more</li>
      <li>When consumers buy less → price falls → producers stop supplying as much</li>
    </ul>
    <p>Example: Consumers want cleaner energy → they buy more renewable energy → prices rise → producers shift resources into solar and wind</p>
    <p>This is how consumer preferences shape the whole economy.</p>
  </div>

  <div class="definition-block">
    <h3>⚖️ C. Rationing Function</h3>
    <p><strong>Prices limit access to scarce goods</strong></p>
    <p>When a resource is very scarce, price increases so only those who value it most (and can afford it) are able to buy it.</p>
    <p>Example: Limited football stadium seats → high demand → price increases → only some fans get seats</p>
    <p>Rationing prevents shortages when goods are limited.</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Price allocates scarce resources efficiently through signalling, transmitting preferences, and rationing."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Explain how the signalling function of price helps allocate resources. [3 marks]",
                answer: "Rising prices signal to producers that there is high demand for a product and profits can be made. This encourages firms to direct more resources towards producing that good. Falling prices signal that fewer resources are needed, so firms move resources elsewhere. Prices therefore guide where resources flow in the economy.",
                marks: 3
              },
              {
                question: "Explain the rationing function of price with an example. [3 marks]",
                answer: "When goods are scarce, high prices limit who can buy them to those who value them most and can afford them. For example, concert tickets for popular artists are priced high due to limited seats and high demand. This rations the scarce seats to those willing to pay the most, preventing shortages.",
                marks: 3
              }
            ]
          }
        ]
      },
      {
        id: "equilibrium",
        title: "Market Equilibrium",
        description: "Where supply meets demand",
        status: "ready",
        subsections: [
          {
            id: "equilibrium-price",
            title: "Equilibrium Price and Quantity",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">What is Equilibrium Price and Quantity?</h2>
  
  <div class="definition-block">
    <h3>📘 Definition</h3>
    <p><strong>Equilibrium</strong> = where demand = supply</p>
    <p>At the equilibrium price:</p>
    <ul>
      <li>Consumers buy exactly the amount producers want to sell</li>
      <li>No one is left wanting more</li>
      <li>No stock is left unsold</li>
      <li>There is no pressure for price to change</li>
    </ul>
  </div>

  ${equilibriumDiagram}

  <div class="key-idea-block">
    <h3>💡 Why Equilibrium Happens Naturally</h3>
    <ul>
      <li>If price is <strong>too high</strong> → demand falls → supply > demand → producers must lower price</li>
      <li>If price is <strong>too low</strong> → demand rises → supply < demand → consumers bid price up</li>
    </ul>
    <p>Markets "self-correct" until equilibrium is reached.</p>
  </div>

  <div class="warning-block">
    <h3>⚠️ Excess Demand (Shortage)</h3>
    <p>Occurs when price is <strong>below equilibrium</strong></p>
    <p>Demand > Supply</p>
    <p>Effects: queues, rationing, price increases</p>
  </div>

  <div class="warning-block">
    <h3>⚠️ Excess Supply (Surplus)</h3>
    <p>Occurs when price is <strong>above equilibrium</strong></p>
    <p>Supply > Demand</p>
    <p>Effects: unsold stock, wasted resources, price decreases</p>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"At equilibrium, there is no excess demand or excess supply, so no pressure for price to change."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Define equilibrium price. [2 marks]",
                answer: "Equilibrium price is the price at which the quantity demanded by consumers equals the quantity supplied by producers. At this price, there is no excess demand or excess supply and no pressure for the price to change.",
                marks: 2
              },
              {
                question: "Explain what happens in a market when there is excess demand. [3 marks]",
                answer: "Excess demand occurs when price is below equilibrium, so demand exceeds supply. There are not enough goods for all buyers, causing queues and shortages. Sellers realise they can charge more, so they raise prices. As prices rise, demand falls and supply increases until equilibrium is reached.",
                marks: 3
              }
            ]
          },
          {
            id: "changing-equilibrium",
            title: "How Market Forces Change Equilibrium",
            content: `
<div class="subsection">
  <h2 class="subsection-heading">How Market Forces Change Equilibrium</h2>
  
  <div class="key-idea-block">
    <h3>💡 Market Forces = Demand & Supply</h3>
    <p>When demand or supply shifts, a NEW equilibrium is formed with a new price and quantity.</p>
  </div>

  ${equilibriumShiftDiagram}

  <div class="key-facts-block">
    <h3>📋 Effects of Changes in Demand and Supply</h3>
    <table class="styled-table">
      <thead>
        <tr>
          <th>Change</th>
          <th>Price Effect</th>
          <th>Quantity Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Demand increases (right shift)</td>
          <td>Price rises ↑</td>
          <td>Quantity rises ↑</td>
        </tr>
        <tr>
          <td>Demand decreases (left shift)</td>
          <td>Price falls ↓</td>
          <td>Quantity falls ↓</td>
        </tr>
        <tr>
          <td>Supply increases (right shift)</td>
          <td>Price falls ↓</td>
          <td>Quantity rises ↑</td>
        </tr>
        <tr>
          <td>Supply decreases (left shift)</td>
          <td>Price rises ↑</td>
          <td>Quantity falls ↓</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block">
    <h3>💡 Why Do Both Price AND Quantity Rise When Demand Increases?</h3>
    <p>Step-by-step reasoning:</p>
    <ol>
      <li>Consumers now want more of the product (e.g. incomes rise)</li>
      <li>Demand curve shifts from D to D₁</li>
      <li>At the old price, demand > supply → excess demand</li>
      <li>Consumers queue, stock sells out, some buyers are disappointed</li>
      <li>Because of excess demand, producers realise they can charge more</li>
      <li>Price begins to rise</li>
      <li>Higher price encourages producers to supply more</li>
      <li>Market settles at a new equilibrium with higher P and higher Q</li>
    </ol>
  </div>

  <div class="definition-block">
    <h3>📘 Consumer Power</h3>
    <p><strong>Consumer power</strong> = consumers influence how resources are used by choosing what to buy.</p>
    <p>Because firms want profit (which comes from sales), and consumers decide what sells:</p>
    <ul>
      <li>Consumers indirectly control which industries grow</li>
      <li>Which products decline</li>
      <li>Which firms survive</li>
    </ul>
    <p>Consumers control production by spending their money like votes.</p>
  </div>

  <div class="example-block">
    <h3>📝 Example: Apple & Samsung</h3>
    <ul>
      <li>Consumers no longer want older smartphone models</li>
      <li>Demand for the newest models remains high</li>
      <li>Prices for older models fall sharply</li>
      <li>Firms stop producing older designs</li>
      <li>Resources are moved into newer technologies</li>
    </ul>
  </div>

  <div class="exam-tip-block">
    <h3>⭐ Exam Phrase</h3>
    <p>"Market forces of supply and demand determine equilibrium price and quantity. Changes in either cause a new equilibrium."</p>
  </div>
</div>
            `,
            practiceItems: [
              {
                question: "Using a diagram, explain what happens to equilibrium price and quantity when demand for electric cars increases. [6 marks]",
                answer: "Draw S and D curves with initial equilibrium E1 at P1, Q1. When demand increases, D shifts right to D1. At old price P1, there is now excess demand. Price is bid up until new equilibrium E2 is reached at higher price P2 and higher quantity Q2. Both price and quantity increase because more consumers want electric cars, firms respond by producing more, but can only do so at higher prices to cover increased costs.",
                marks: 6
              },
              {
                question: "Explain what is meant by 'consumer power' in a market economy. [4 marks]",
                answer: "Consumer power means consumers influence how resources are allocated by choosing what to buy. When consumers buy more of a product, demand rises, prices increase, and producers make more. When consumers stop buying, prices fall and production stops. Consumers effectively 'vote with their money', determining which firms succeed and which industries grow or decline.",
                marks: 4
              }
            ]
          }
        ]
      }
    ]
  }
];

export const getEconomicsChapterById = (id: string): EconomicsChapter | undefined => {
  return economicsData.find(chapter => chapter.id === id);
};

export const getEconomicsModuleById = (chapterId: string, moduleId: string): EconomicsModule | undefined => {
  const chapter = getEconomicsChapterById(chapterId);
  return chapter?.modules.find(module => module.id === moduleId);
};

export const getEconomicsSubsectionById = (chapterId: string, moduleId: string, subsectionId: string): EconomicsSubsection | undefined => {
  const module = getEconomicsModuleById(chapterId, moduleId);
  return module?.subsections.find(subsection => subsection.id === subsectionId);
};
