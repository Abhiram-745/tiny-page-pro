// Question validation utilities for detecting and filtering generic/template questions

// Patterns that indicate a generic/template question
const GENERIC_PATTERNS = [
  /\bexplain\s+the\s+importance\s+of\s+\w+\s+in\s+this\s+topic\b/i,
  /\bdescribe\s+(?:key\s+)?concepts?\s+from\s+the\s+(?:notes?|content|study)\b/i,
  /\bexplain\s+\w+\s+from\s+the\s+notes\b/i,
  /\bin\s+this\s+topic\s*[.?]/i,
  /\bfrom\s+the\s+(?:notes?|content|study\s+content)\s*[.?]/i,
  /\bthe\s+content\s+(?:above|provided|given)\b/i,
  /\bexplain\s+the\s+(?:role|importance|significance)\s+of\s+standard\b/i,
  /\bdescribe\s+the\s+key\s+points\b/i,
  /\bwhat\s+are\s+the\s+main\s+(?:points|concepts|ideas)\b/i,
  /\bsummar(?:ize|ise)\s+the\s+(?:key|main)\s+(?:points|concepts)\b/i,
  /\blist\s+the\s+(?:key|main)\s+(?:points|facts|concepts)\b/i,
];

// Words that are too vague for a specific question
const VAGUE_TERMS = [
  'standard',
  'concept',
  'topic',
  'subject',
  'content',
  'material',
  'information',
  'aspect',
  'element',
  'component',
  'factor',
];

// Minimum question requirements
const MIN_QUESTION_WORDS = 8;
const MAX_VAGUE_TERM_RATIO = 0.3;

export interface ValidationResult {
  isValid: boolean;
  reason?: string;
  confidence: number; // 0-1, where 1 is definitely valid
}

/**
 * Validates a generated question to ensure it's specific and not a generic template
 */
export function validateQuestion(questionText: string, studyContent?: string): ValidationResult {
  const text = questionText.toLowerCase().trim();
  const words = text.split(/\s+/).filter(w => w.length > 0);
  
  // Check minimum length
  if (words.length < MIN_QUESTION_WORDS) {
    return {
      isValid: false,
      reason: `Question too short (${words.length} words, minimum ${MIN_QUESTION_WORDS})`,
      confidence: 0
    };
  }
  
  // Check for generic patterns
  for (const pattern of GENERIC_PATTERNS) {
    if (pattern.test(text)) {
      return {
        isValid: false,
        reason: `Question matches generic pattern: ${pattern.source}`,
        confidence: 0.1
      };
    }
  }
  
  // Check for excessive vague terms
  const vagueTermCount = words.filter(w => VAGUE_TERMS.includes(w)).length;
  const vagueRatio = vagueTermCount / words.length;
  
  if (vagueRatio > MAX_VAGUE_TERM_RATIO) {
    return {
      isValid: false,
      reason: `Too many vague terms (${Math.round(vagueRatio * 100)}% vague)`,
      confidence: 0.2
    };
  }
  
  // Check if question contains at least some specific scientific/technical terms
  // This is a heuristic - questions should have specific terminology
  const hasSpecificTerms = /\b(reaction|energy|temperature|pressure|concentration|mass|volume|cell|organism|force|velocity|acceleration|equation|bond|atom|molecule|ion|electron|photon|wave|frequency|amplitude|respiration|photosynthesis|osmosis|diffusion|enzyme|catalyst|equilibrium|rate|product|reactant)\b/i.test(text);
  
  // If we have study content, check if the question references actual terms from it
  let contentRelevance = 0.5;
  if (studyContent) {
    const contentWords = studyContent.toLowerCase().split(/\s+/).filter(w => w.length > 5);
    const uniqueContentWords = new Set(contentWords);
    const questionContentOverlap = words.filter(w => w.length > 4 && uniqueContentWords.has(w)).length;
    contentRelevance = Math.min(questionContentOverlap / 3, 1); // At least 3 matching words for full relevance
  }
  
  // Calculate confidence
  let confidence = 0.5;
  if (hasSpecificTerms) confidence += 0.2;
  confidence += contentRelevance * 0.3;
  
  // Reduce confidence for questions that look templated
  if (/^(?:explain|describe|state|define)\s+(?:the|a|an)\s+\w+\s*[.?]?$/i.test(text)) {
    confidence -= 0.3;
  }
  
  return {
    isValid: confidence > 0.4,
    reason: confidence > 0.4 ? undefined : 'Question appears too generic or templated',
    confidence: Math.max(0, Math.min(1, confidence))
  };
}

/**
 * Filter an array of questions to remove generic ones
 */
export function filterValidQuestions(questions: any[], studyContent?: string): any[] {
  return questions.filter(q => {
    const questionText = typeof q === 'string' ? q : q.question;
    const result = validateQuestion(questionText, studyContent);
    if (!result.isValid) {
      console.log('[questionValidation] Filtered out:', questionText.substring(0, 50), '| Reason:', result.reason);
    }
    return result.isValid;
  });
}

/**
 * Extract key topic phrases from study content for better fallback questions
 */
export function extractTopicPhrases(studyContent: string): string[] {
  const phrases: string[] = [];
  
  // Scientific processes
  const processPatterns = [
    /\b(exothermic|endothermic)\s+reactions?\b/gi,
    /\b(photosynthesis|respiration|fermentation)\b/gi,
    /\b(oxidation|reduction|neutralisation)\s+reactions?\b/gi,
    /\b(activation|bond)\s+energy\b/gi,
    /\b(reaction\s+profile|energy\s+diagram)\b/gi,
    /\b(rate\s+of\s+reaction)\b/gi,
    /\b(limiting\s+reactant)\b/gi,
    /\b(equilibrium|reversible\s+reactions?)\b/gi,
  ];
  
  for (const pattern of processPatterns) {
    const matches = studyContent.matchAll(pattern);
    for (const match of matches) {
      phrases.push(match[0].toLowerCase());
    }
  }
  
  return [...new Set(phrases)]; // Remove duplicates
}
