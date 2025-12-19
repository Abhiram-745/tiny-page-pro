// Note format variation utility - dynamically transforms note block headings and emojis

interface FormatVariation {
  headingReplacements: Record<string, string[]>;
  emojiReplacements: Record<string, string[]>;
}

const formatVariations: FormatVariation = {
  headingReplacements: {
    // Key Facts variations
    "Key Facts": ["Essential Points", "Core Concepts", "Remember These", "Quick Recall", "Must-Know Facts", "Key Takeaways"],
    "🔑 Key Facts": ["📌 Essential Points", "💡 Core Concepts", "🎯 Remember These", "⚡ Quick Recall", "🧠 Must-Know Facts", "✨ Key Takeaways"],
    
    // Definition variations
    "Definition": ["What is it?", "Key Term", "Meaning", "Concept Explained", "Technical Definition"],
    "📖 Definition": ["❓ What is it?", "📝 Key Term", "💬 Meaning", "🔍 Concept Explained", "📚 Technical Definition"],
    
    // Memory Trick variations
    "Memory Trick": ["Learning Hack", "Quick Tip", "Recall Helper", "Remember It", "Study Shortcut", "Brain Boost"],
    "🧠 Memory Trick": ["💡 Learning Hack", "⚡ Quick Tip", "🎯 Recall Helper", "🔁 Remember It", "📍 Study Shortcut", "🚀 Brain Boost"],
    
    // Exam Tip variations
    "Exam Tip": ["Exam Strategy", "Mark Grabber", "Examiner's Secret", "Top Tip", "A* Advice", "Grade Booster"],
    "💡 Exam Tip": ["🎯 Exam Strategy", "⭐ Mark Grabber", "🔮 Examiner's Secret", "💫 Top Tip", "🏆 A* Advice", "📈 Grade Booster"],
    
    // Example variations
    "Example": ["In Practice", "Real World", "See It In Action", "Worked Example", "Case Study"],
    "📝 Example": ["🌍 In Practice", "🔬 Real World", "⚡ See It In Action", "✍️ Worked Example", "📋 Case Study"],
    
    // Warning variations
    "Warning": ["Watch Out!", "Common Mistake", "Don't Forget", "Important!", "Caution", "Pitfall Alert"],
    "⚠️ Warning": ["🚨 Watch Out!", "❌ Common Mistake", "📢 Don't Forget", "❗ Important!", "⛔ Caution", "💥 Pitfall Alert"],
    
    // Key Idea variations
    "Key Idea": ["Big Picture", "Main Concept", "Central Theme", "Core Principle", "Fundamental Idea"],
    "💡 Key Idea": ["🎨 Big Picture", "🧩 Main Concept", "🌟 Central Theme", "⚙️ Core Principle", "🔑 Fundamental Idea"],
    
    // Specification Point variations
    "Specification Point": ["Syllabus Focus", "Exam Board Says", "What You Need", "Required Knowledge", "AQA Requirement"],
    "📋 Specification Point": ["📊 Syllabus Focus", "📜 Exam Board Says", "✅ What You Need", "📚 Required Knowledge", "🎓 AQA Requirement"],
  },
  
  emojiReplacements: {
    "🔑": ["📌", "💎", "🎯", "⚡", "✨"],
    "📖": ["📚", "📝", "📄", "🔍", "💬"],
    "🧠": ["💡", "🎯", "⚡", "🔮", "🚀"],
    "💡": ["⚡", "🌟", "✨", "🔆", "💫"],
    "📝": ["✍️", "📋", "🔬", "🌍", "📊"],
    "⚠️": ["🚨", "❗", "⛔", "🔴", "💥"],
  }
};

// Get a random item from an array
function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate a consistent random seed for the session (so variations don't change on re-render)
let sessionSeed: number | null = null;

function getSessionSeed(): number {
  if (sessionSeed === null) {
    sessionSeed = Math.random();
  }
  return sessionSeed;
}

// Seeded random function for consistent variations within a session
function seededRandom(seed: number, index: number): number {
  const x = Math.sin(seed * 9999 + index) * 10000;
  return x - Math.floor(x);
}

// Transform HTML content with random variations
export function applyNoteVariations(html: string): string {
  let transformedHtml = html;
  const seed = getSessionSeed();
  let varIndex = 0;
  
  // Apply heading replacements
  for (const [original, replacements] of Object.entries(formatVariations.headingReplacements)) {
    if (transformedHtml.includes(original)) {
      const randomIndex = Math.floor(seededRandom(seed, varIndex++) * replacements.length);
      const replacement = replacements[randomIndex];
      // Use regex to replace all occurrences
      const escapedOriginal = original.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      transformedHtml = transformedHtml.replace(new RegExp(escapedOriginal, 'g'), replacement);
    }
  }
  
  return transformedHtml;
}

// Reset the session seed (call this when navigating to a new page)
export function resetNoteVariationSeed(): void {
  sessionSeed = null;
}

// Get a random format style name for display
export function getRandomFormatStyleName(): string {
  const styleNames = [
    "Classic Study Mode",
    "Quick Recall Format",
    "Exam Focus Mode",
    "Deep Dive Style",
    "Speed Review Format",
    "Brain Boost Mode"
  ];
  return getRandomItem(styleNames);
}
