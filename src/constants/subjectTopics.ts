// Subject topic slugs for filtering practice sessions and history

export const CHEMISTRY_TOPICS = [
  "atomic-structure",
  "bonding",
  "quantitative-chemistry",
  "chemical-changes",
  "energy-changes",
  "rate-extent-chemical-change",
  "organic-chemistry",
  "chemical-analysis",
  "chemistry-atmosphere",
  "using-resources",
];

export const PHYSICS_TOPICS = [
  "energy",
  "electricity",
  "particle-model",
  "atomic-structure-physics",
  "forces",
  "waves",
  "magnetism",
];

export const PRODUCT_DESIGN_TOPICS = [
  "selection-of-materials",
  "forces-and-stresses",
  "ecological-and-social-footprint",
  "sources-and-origins",
  "using-and-working-with-materials",
  "stock-forms-types-and-sizes",
  "scales-of-production",
  "specialist-techniques-and-processes",
  "surface-treatments-and-finishes",
];

export const GEOGRAPHY_TOPICS = [
  "living-world",
  "physical-landscapes",
  "human-geography",
];

export const ENGLISH_TOPICS = [
  "dr-jekyll",
  "english-literature",
];

export const ECONOMICS_TOPICS = [
  "economic-groups-fop",
  "basic-economic-problem",
  "role-of-markets",
  "demand",
  "supply",
  "price",
];

export const getTopicsForSubject = (subject: string): string[] => {
  switch (subject) {
    case "chemistry":
      return CHEMISTRY_TOPICS;
    case "physics":
      return PHYSICS_TOPICS;
    case "product-design":
      return PRODUCT_DESIGN_TOPICS;
    case "geography":
      return GEOGRAPHY_TOPICS;
    case "english":
      return ENGLISH_TOPICS;
    case "economics":
      return ECONOMICS_TOPICS;
    default:
      return [];
  }
};
