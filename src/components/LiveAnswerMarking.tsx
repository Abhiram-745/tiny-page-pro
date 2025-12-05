import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Check, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MarkingPoint {
  markPoint: string;
  studentText: string | null;
  awarded: boolean;
  marks: number;
  explanation?: string;
}

interface LiveAnswerMarkingProps {
  studentAnswer: string;
  markingBreakdown?: MarkingPoint[];
  keyIdeasCovered: string[];
  keyIdeasMissed: string[];
  score: number;
  maxMarks: number;
  isPhotoAnswer?: boolean;
  photoImage?: string;
}

const colorPalette = [
  { bg: "bg-blue-100 dark:bg-blue-900/40", border: "border-blue-400", text: "text-blue-700 dark:text-blue-300", glow: "shadow-blue-400/50" },
  { bg: "bg-purple-100 dark:bg-purple-900/40", border: "border-purple-400", text: "text-purple-700 dark:text-purple-300", glow: "shadow-purple-400/50" },
  { bg: "bg-teal-100 dark:bg-teal-900/40", border: "border-teal-400", text: "text-teal-700 dark:text-teal-300", glow: "shadow-teal-400/50" },
  { bg: "bg-pink-100 dark:bg-pink-900/40", border: "border-pink-400", text: "text-pink-700 dark:text-pink-300", glow: "shadow-pink-400/50" },
  { bg: "bg-orange-100 dark:bg-orange-900/40", border: "border-orange-400", text: "text-orange-700 dark:text-orange-300", glow: "shadow-orange-400/50" },
  { bg: "bg-cyan-100 dark:bg-cyan-900/40", border: "border-cyan-400", text: "text-cyan-700 dark:text-cyan-300", glow: "shadow-cyan-400/50" },
];

export const LiveAnswerMarking = ({
  studentAnswer,
  markingBreakdown,
  keyIdeasCovered,
  keyIdeasMissed,
  score,
  maxMarks,
  isPhotoAnswer,
  photoImage
}: LiveAnswerMarkingProps) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [visiblePoints, setVisiblePoints] = useState<number[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Create simulated marking breakdown from key ideas if not provided
  const effectiveBreakdown: MarkingPoint[] = markingBreakdown || [
    ...keyIdeasCovered.map((idea, idx) => ({
      markPoint: idea,
      studentText: findMatchingText(studentAnswer, idea),
      awarded: true,
      marks: 1
    })),
    ...keyIdeasMissed.map((idea) => ({
      markPoint: idea,
      studentText: null,
      awarded: false,
      marks: 1
    }))
  ];

  // Find matching text in student answer for a key idea
  function findMatchingText(answer: string, idea: string): string | null {
    const words = idea.toLowerCase().split(/\s+/).filter(w => w.length > 3);
    const answerLower = answer.toLowerCase();
    
    for (const word of words) {
      const idx = answerLower.indexOf(word);
      if (idx !== -1) {
        // Extract surrounding context
        const start = Math.max(0, idx - 20);
        const end = Math.min(answer.length, idx + word.length + 30);
        return answer.slice(start, end).trim();
      }
    }
    return null;
  }

  // Animation sequence when started
  useEffect(() => {
    if (!hasStarted) return;

    const totalPoints = effectiveBreakdown.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < totalPoints) {
        setVisiblePoints(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowScore(true);
          setAnimationComplete(true);
        }, 500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [hasStarted, effectiveBreakdown.length]);

  const handleStartMarking = () => {
    setHasStarted(true);
    setVisiblePoints([]);
    setShowScore(false);
    setAnimationComplete(false);
  };

  const percentage = Math.round((score / maxMarks) * 100);

  // Render highlighted answer
  const renderHighlightedAnswer = () => {
    if (isPhotoAnswer && photoImage) {
      return (
        <img 
          src={photoImage} 
          alt="Your submitted answer" 
          className="w-full h-auto rounded-lg max-h-[400px] object-contain"
        />
      );
    }

    if (!hasStarted) {
      return (
        <div className="text-sm whitespace-pre-wrap leading-relaxed">
          {studentAnswer}
        </div>
      );
    }

    // Build highlighted segments
    let segments: { text: string; colorIndex: number | null; awarded: boolean; pointIndex: number }[] = [];
    let remainingAnswer = studentAnswer;
    let usedRanges: { start: number; end: number }[] = [];

    // Find all matches first
    const matches: { start: number; end: number; colorIndex: number; awarded: boolean; pointIndex: number }[] = [];
    
    effectiveBreakdown.forEach((point, idx) => {
      if (!visiblePoints.includes(idx) || !point.studentText) return;
      
      const matchText = point.studentText;
      const answerLower = studentAnswer.toLowerCase();
      const matchLower = matchText.toLowerCase();
      
      // Find the match position
      let searchStart = 0;
      let foundIdx = -1;
      
      while (searchStart < answerLower.length) {
        const idx = answerLower.indexOf(matchLower, searchStart);
        if (idx === -1) break;
        
        // Check if this range overlaps with existing
        const overlaps = usedRanges.some(r => 
          (idx >= r.start && idx < r.end) || 
          (idx + matchText.length > r.start && idx + matchText.length <= r.end)
        );
        
        if (!overlaps) {
          foundIdx = idx;
          break;
        }
        searchStart = idx + 1;
      }
      
      if (foundIdx !== -1) {
        matches.push({
          start: foundIdx,
          end: foundIdx + matchText.length,
          colorIndex: idx % colorPalette.length,
          awarded: point.awarded,
          pointIndex: idx
        });
        usedRanges.push({ start: foundIdx, end: foundIdx + matchText.length });
      }
    });

    // Sort matches by position
    matches.sort((a, b) => a.start - b.start);

    // Build segments
    let lastEnd = 0;
    matches.forEach(match => {
      if (match.start > lastEnd) {
        segments.push({
          text: studentAnswer.slice(lastEnd, match.start),
          colorIndex: null,
          awarded: false,
          pointIndex: -1
        });
      }
      segments.push({
        text: studentAnswer.slice(match.start, match.end),
        colorIndex: match.colorIndex,
        awarded: match.awarded,
        pointIndex: match.pointIndex
      });
      lastEnd = match.end;
    });

    if (lastEnd < studentAnswer.length) {
      segments.push({
        text: studentAnswer.slice(lastEnd),
        colorIndex: null,
        awarded: false,
        pointIndex: -1
      });
    }

    if (segments.length === 0) {
      segments.push({
        text: studentAnswer,
        colorIndex: null,
        awarded: false,
        pointIndex: -1
      });
    }

    return (
      <div className="text-sm whitespace-pre-wrap leading-relaxed">
        {segments.map((segment, idx) => {
          if (segment.colorIndex === null) {
            return <span key={idx}>{segment.text}</span>;
          }

          const color = colorPalette[segment.colorIndex];
          const isVisible = visiblePoints.includes(segment.pointIndex);

          return (
            <span
              key={idx}
              className={`
                relative inline px-1 py-0.5 rounded transition-all duration-500
                ${isVisible ? `${color.bg} ${color.border} border` : ''}
                ${isVisible && segment.awarded ? `shadow-lg ${color.glow}` : ''}
                ${isVisible ? 'animate-highlight-sweep' : ''}
              `}
            >
              {segment.text}
              {isVisible && (
                <span className={`
                  absolute -top-2 -right-2 w-4 h-4 rounded-full flex items-center justify-center text-xs
                  ${segment.awarded 
                    ? 'bg-green-500 text-white' 
                    : 'bg-amber-500 text-white'}
                  animate-scale-in
                `}>
                  {segment.awarded ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <Card className="mb-6 shadow-lg overflow-hidden">
      <CardHeader className="bg-muted/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Your Answer</CardTitle>
          {!hasStarted && !isPhotoAnswer && (
            <Button 
              onClick={handleStartMarking}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Start Live Marking
            </Button>
          )}
          {showScore && (
            <div className="flex items-center gap-3 animate-scale-in">
              <div className="relative w-14 h-14">
                <svg className="w-14 h-14 -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${(percentage / 100) * 150.8} 150.8`}
                    className="text-primary transition-all duration-1000"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {percentage}%
                </span>
              </div>
              <span className="text-sm text-muted-foreground">{score}/{maxMarks}</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="bg-background/50 p-4 rounded-lg min-h-[100px]">
          {renderHighlightedAnswer()}
        </div>
        
        {/* Marking points legend */}
        {hasStarted && visiblePoints.length > 0 && !isPhotoAnswer && (
          <div className="mt-4 space-y-2">
            <p className="text-xs text-muted-foreground font-medium">Mark scheme points found:</p>
            <TooltipProvider delayDuration={200}>
              <div className="flex flex-wrap gap-2">
                {effectiveBreakdown.map((point, idx) => {
                  if (!visiblePoints.includes(idx)) return null;
                  const color = colorPalette[idx % colorPalette.length];
                  return (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <div
                          className={`
                            flex items-center gap-1.5 px-2 py-1 rounded-full text-xs cursor-help
                            ${color.bg} ${color.text} ${color.border} border
                            animate-fade-in hover:shadow-md transition-shadow
                          `}
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {point.awarded ? (
                            <Check className="w-3 h-3 text-green-600" />
                          ) : (
                            <X className="w-3 h-3 text-amber-600" />
                          )}
                          <span className="max-w-[150px] truncate">{point.markPoint}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <p className="text-sm">
                          {point.explanation || (
                            point.awarded 
                              ? "You demonstrated this concept correctly in your answer."
                              : "This key concept was missing or incomplete in your answer."
                          )}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </div>
        )}

        {animationComplete && !isPhotoAnswer && (
          <div className="mt-4 p-3 rounded-lg bg-muted/30 text-xs text-muted-foreground animate-fade-in">
            <Sparkles className="w-3 h-3 inline mr-1" />
            Live marking complete. Highlighted text shows where mark scheme points were found in your answer.
          </div>
        )}
      </CardContent>
    </Card>
  );
};