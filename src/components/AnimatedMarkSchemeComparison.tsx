import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Check, X, Sparkles } from "lucide-react";

interface MarkingPoint {
  markPoint: string;
  studentText: string | null;
  awarded: boolean;
  marks: number;
  explanation?: string;
  improvedSentence?: string | null;
}

interface AnimatedMarkSchemeComparisonProps {
  markingBreakdown: MarkingPoint[];
  studentAnswer: string;
}

// Color palette for matching mark scheme points to answer highlights
const colorPalette = [
  { bg: "bg-blue-100 dark:bg-blue-900/40", border: "border-blue-500", text: "text-blue-700 dark:text-blue-300", glow: "shadow-blue-500/30" },
  { bg: "bg-purple-100 dark:bg-purple-900/40", border: "border-purple-500", text: "text-purple-700 dark:text-purple-300", glow: "shadow-purple-500/30" },
  { bg: "bg-teal-100 dark:bg-teal-900/40", border: "border-teal-500", text: "text-teal-700 dark:text-teal-300", glow: "shadow-teal-500/30" },
  { bg: "bg-pink-100 dark:bg-pink-900/40", border: "border-pink-500", text: "text-pink-700 dark:text-pink-300", glow: "shadow-pink-500/30" },
  { bg: "bg-orange-100 dark:bg-orange-900/40", border: "border-orange-500", text: "text-orange-700 dark:text-orange-300", glow: "shadow-orange-500/30" },
  { bg: "bg-cyan-100 dark:bg-cyan-900/40", border: "border-cyan-500", text: "text-cyan-700 dark:text-cyan-300", glow: "shadow-cyan-500/30" },
];

const AnimatedMarkSchemeComparison = ({ markingBreakdown, studentAnswer }: AnimatedMarkSchemeComparisonProps) => {
  const [visiblePoints, setVisiblePoints] = useState<number>(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [highlightedSegments, setHighlightedSegments] = useState<number[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Phase 1: Show answer
  useEffect(() => {
    const timer = setTimeout(() => setAnswerVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Phase 2: Reveal mark scheme points one by one
  useEffect(() => {
    if (!answerVisible) return;
    
    const revealPoints = () => {
      let currentPoint = 0;
      const interval = setInterval(() => {
        if (currentPoint < markingBreakdown.length) {
          setVisiblePoints(currentPoint + 1);
          // After point is visible, highlight corresponding answer text
          setTimeout(() => {
            setHighlightedSegments(prev => [...prev, currentPoint]);
          }, 300);
          currentPoint++;
        } else {
          clearInterval(interval);
          setTimeout(() => setAnimationComplete(true), 500);
        }
      }, 800);
      return interval;
    };

    const timeout = setTimeout(() => {
      const interval = revealPoints();
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, [answerVisible, markingBreakdown.length]);

  // Build highlighted answer with color coding
  const renderHighlightedAnswer = () => {
    if (!studentAnswer) return <p className="text-muted-foreground italic">No answer submitted</p>;

    const segments: Array<{ text: string; pointIndex: number | null; awarded: boolean | null }> = [];
    let remainingText = studentAnswer;

    // Find all matching positions
    const matches = markingBreakdown
      .map((point, idx) => ({
        ...point,
        index: idx,
        position: point.studentText 
          ? studentAnswer.toLowerCase().indexOf(point.studentText.toLowerCase())
          : -1
      }))
      .filter(m => m.position !== -1)
      .sort((a, b) => a.position - b.position);

    let lastIndex = 0;

    matches.forEach((match) => {
      const position = match.position;
      const length = match.studentText!.length;

      if (position > lastIndex) {
        segments.push({
          text: remainingText.substring(lastIndex, position),
          pointIndex: null,
          awarded: null
        });
      }

      segments.push({
        text: remainingText.substring(position, position + length),
        pointIndex: match.index,
        awarded: match.awarded
      });

      lastIndex = position + length;
    });

    if (lastIndex < remainingText.length) {
      segments.push({
        text: remainingText.substring(lastIndex),
        pointIndex: null,
        awarded: null
      });
    }

    return (
      <div className="text-sm leading-relaxed space-y-0">
        {segments.map((segment, idx) => {
          const isHighlighted = segment.pointIndex !== null && highlightedSegments.includes(segment.pointIndex);
          const colorIndex = segment.pointIndex !== null ? segment.pointIndex % colorPalette.length : 0;
          const colors = colorPalette[colorIndex];

          if (!isHighlighted || segment.pointIndex === null) {
            return <span key={idx} className="transition-opacity duration-300">{segment.text}</span>;
          }

          return (
            <span
              key={idx}
              className={`
                inline px-1.5 py-0.5 rounded-md border-b-2 font-medium
                transition-all duration-500 ease-out
                ${colors.bg} ${colors.border} ${colors.text}
                ${segment.awarded ? "ring-2 ring-green-500/50 shadow-lg " + colors.glow : ""}
                animate-highlight-sweep
              `}
              style={{
                animationDelay: `${segment.pointIndex * 100}ms`
              }}
            >
              {segment.text}
              {segment.awarded && (
                <Check className="inline-block ml-1 h-3 w-3 text-green-600 dark:text-green-400" />
              )}
            </span>
          );
        })}
      </div>
    );
  };

  const totalAwarded = markingBreakdown.filter(p => p.awarded).reduce((sum, p) => sum + p.marks, 0);
  const totalMarks = markingBreakdown.reduce((sum, p) => sum + p.marks, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header with score animation */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary animate-pulse" />
          Live Marking Breakdown
        </h3>
        {animationComplete && (
          <div className="flex items-center gap-2 animate-scale-in">
            <div className="relative h-12 w-12">
              <svg className="transform -rotate-90 h-12 w-12">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  className="text-muted"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="transparent"
                  strokeDasharray={`${(totalAwarded / totalMarks) * 125.6} 125.6`}
                  className="text-primary transition-all duration-1000"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                {totalAwarded}/{totalMarks}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Left Column: Your Answer */}
        <Card 
          className={`
            p-5 border-2 transition-all duration-500
            ${answerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            bg-gradient-to-br from-card via-background to-primary/5
          `}
        >
          <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
            ✍️ Your Answer
          </h4>
          <div className="p-4 bg-background/80 rounded-xl border min-h-[200px]">
            {renderHighlightedAnswer()}
          </div>
          
          {/* Color Legend */}
          <div className="mt-4 pt-3 border-t">
            <p className="text-xs font-semibold text-muted-foreground mb-2">Color Legend:</p>
            <div className="flex flex-wrap gap-2">
              {markingBreakdown.slice(0, visiblePoints).map((_, idx) => {
                const colors = colorPalette[idx % colorPalette.length];
                return (
                  <div 
                    key={idx}
                    className={`text-xs px-2 py-1 rounded ${colors.bg} ${colors.text} animate-fade-in`}
                  >
                    Point {idx + 1}
                  </div>
                );
              })}
            </div>
          </div>
        </Card>

        {/* Right Column: Mark Scheme */}
        <Card 
          className={`
            p-5 border-2 transition-all duration-500
            bg-gradient-to-br from-card via-background to-secondary/5
          `}
        >
          <h4 className="font-semibold mb-4 flex items-center gap-2 text-lg">
            📋 Mark Scheme
          </h4>
          <div className="space-y-3 min-h-[200px]">
            {markingBreakdown.map((point, idx) => {
              const isVisible = idx < visiblePoints;
              const isHighlighted = highlightedSegments.includes(idx);
              const colors = colorPalette[idx % colorPalette.length];

              return (
                <div
                  key={idx}
                  className={`
                    p-4 rounded-xl border-l-4 transition-all duration-500
                    ${!isVisible ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"}
                    ${isHighlighted ? `${colors.bg} ${colors.border} shadow-lg scale-[1.02]` : "bg-muted/30 border-muted"}
                    ${point.awarded && isHighlighted ? "ring-2 ring-green-500/30" : ""}
                  `}
                  style={{
                    transitionDelay: `${idx * 100}ms`
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className={`
                        mt-0.5 p-1 rounded-full transition-all duration-300
                        ${isHighlighted 
                          ? point.awarded 
                            ? "bg-green-500 text-white scale-110" 
                            : "bg-amber-500 text-white scale-110"
                          : "bg-muted text-muted-foreground"
                        }
                      `}
                    >
                      {point.awarded ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isHighlighted ? colors.text : ""}`}>
                        {point.markPoint}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span 
                          className={`
                            text-xs font-semibold px-2 py-0.5 rounded transition-all duration-300
                            ${isHighlighted
                              ? point.awarded
                                ? "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200"
                                : "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                              : "bg-muted text-muted-foreground"
                            }
                          `}
                        >
                          {point.marks} {point.marks === 1 ? "mark" : "marks"}
                        </span>
                        {isHighlighted && (
                          <span 
                            className={`
                              text-xs font-medium animate-fade-in
                              ${point.awarded 
                                ? "text-green-600 dark:text-green-400" 
                                : "text-amber-600 dark:text-amber-400"
                              }
                            `}
                          >
                            {point.awarded ? "✓ Awarded" : "✗ Missed"}
                          </span>
                        )}
                      </div>
                      {/* Show improved sentence suggestion for missed points */}
                      {isHighlighted && !point.awarded && point.improvedSentence && (
                        <div className="mt-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 rounded-lg border border-emerald-200 dark:border-emerald-800 animate-fade-in">
                          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-1.5 flex items-center gap-1">
                            💡 Add this to your answer:
                          </p>
                          <p className="text-sm text-emerald-800 dark:text-emerald-200 italic leading-relaxed">
                            "{point.improvedSentence}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground text-center italic animate-fade-in">
        Watch as each marking point reveals and highlights the corresponding text in your answer
      </p>
    </div>
  );
};

export default AnimatedMarkSchemeComparison;
