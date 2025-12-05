import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface MarkingPoint {
  markPoint: string;
  studentText: string | null;
  awarded: boolean;
  marks: number;
}

interface MarkSchemeComparisonProps {
  markingBreakdown: MarkingPoint[];
  studentAnswer: string;
}

const MarkSchemeComparison = ({ markingBreakdown, studentAnswer }: MarkSchemeComparisonProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Function to highlight text in the student answer
  const highlightAnswer = () => {
    if (!studentAnswer) return null;

    // Create a map of text segments to their awarded status
    const segments: Array<{ text: string; awarded: boolean | null }> = [];
    let remainingText = studentAnswer;

    // Sort by position in the text to handle overlapping highlights
    const pointsWithText = markingBreakdown
      .filter(point => point.studentText)
      .map(point => ({
        ...point,
        position: studentAnswer.toLowerCase().indexOf(point.studentText!.toLowerCase())
      }))
      .filter(point => point.position !== -1)
      .sort((a, b) => a.position - b.position);

    let lastIndex = 0;

    pointsWithText.forEach((point, idx) => {
      const position = point.position;
      const length = point.studentText!.length;

      // Add text before this highlight
      if (position > lastIndex) {
        segments.push({
          text: remainingText.substring(lastIndex, position),
          awarded: null
        });
      }

      // Add highlighted text
      segments.push({
        text: remainingText.substring(position, position + length),
        awarded: point.awarded
      });

      lastIndex = position + length;
    });

    // Add remaining text
    if (lastIndex < remainingText.length) {
      segments.push({
        text: remainingText.substring(lastIndex),
        awarded: null
      });
    }

    return (
      <div className="text-sm leading-relaxed">
        {segments.map((segment, idx) => {
          if (segment.awarded === null) {
            return <span key={idx}>{segment.text}</span>;
          }
          return (
            <span
              key={idx}
              className={`${
                segment.awarded
                  ? "bg-green-100 dark:bg-green-900/40 border-b-2 border-green-500 font-medium"
                  : "bg-amber-100 dark:bg-amber-900/40 border-b-2 border-amber-500"
              } px-1 py-0.5 rounded transition-all duration-200`}
            >
              {segment.text}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-4 animate-slide-up-fade">
      <h3 className="text-lg font-semibold">📊 Marking Breakdown</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* Left Column: Mark Scheme */}
        <Card className="p-4 bg-blue-50 dark:bg-blue-950/30 border-2 border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center gap-2">
            📋 Mark Scheme Points
          </h4>
          <div className="space-y-3">
            {markingBreakdown.map((point, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border-l-4 transition-all duration-200 cursor-pointer ${
                  point.awarded
                    ? "bg-green-50 dark:bg-green-900/20 border-green-500 hover:bg-green-100 dark:hover:bg-green-900/30"
                    : "bg-amber-50 dark:bg-amber-900/20 border-amber-500 hover:bg-amber-100 dark:hover:bg-amber-900/30"
                } ${hoveredIndex === idx ? "ring-2 ring-primary scale-[1.02]" : ""} stagger-${idx + 1}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start gap-2">
                  <div className={`mt-0.5 flex-shrink-0 ${point.awarded ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
                    {point.awarded ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{point.markPoint}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        point.awarded 
                          ? "bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200"
                          : "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                      }`}>
                        {point.marks} {point.marks === 1 ? "mark" : "marks"}
                      </span>
                      {point.awarded && (
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          ✓ Awarded
                        </span>
                      )}
                      {!point.awarded && (
                        <span className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                          ✗ Not found
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right Column: Student Answer with Highlights */}
        <Card className="p-4 bg-gradient-to-br from-background to-secondary/5 border-2">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            ✍️ Your Answer
          </h4>
          <div className="prose prose-sm max-w-none dark:prose-invert">
            {studentAnswer ? (
              <div className="p-3 bg-background/50 rounded-lg border">
                {highlightAnswer()}
              </div>
            ) : (
              <p className="text-muted-foreground italic">No answer submitted (viewing markscheme only)</p>
            )}
          </div>
          
          {/* Legend */}
          <div className="mt-4 pt-3 border-t space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Legend:</p>
            <div className="flex flex-wrap gap-3 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-green-100 dark:bg-green-900/40 border-b-2 border-green-500 rounded"></div>
                <span>Mark awarded</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-amber-100 dark:bg-amber-900/40 border-b-2 border-amber-500 rounded"></div>
                <span>Point missed</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground text-center italic">
        Hover over marking points on the left to see details • Green highlights show where you earned marks
      </p>
    </div>
  );
};

export default MarkSchemeComparison;
