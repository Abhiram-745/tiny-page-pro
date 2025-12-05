import { CheckCircle2, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "AI examiner reviewing your answer...",
  "Checking key points...",
  "Analyzing mark scheme...",
  "Calculating score...",
];

interface MarkingAnimationProps {
  isComplete?: boolean;
}

const MarkingAnimation = ({ isComplete = false }: MarkingAnimationProps) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isComplete) {
      setProgress(100);
      return;
    }

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1500);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [isComplete]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 animate-fade-in">
      <div className="relative">
        {isComplete ? (
          <CheckCircle2 className="h-16 w-16 text-green-500 animate-scale-in" />
        ) : (
          <>
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
            <Loader2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-primary animate-spin" />
          </>
        )}
      </div>

      <div className="w-full max-w-xs space-y-3">
        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-center font-heading text-sm font-medium text-muted-foreground animate-pulse">
          {isComplete ? "Marking complete!" : messages[messageIndex]}
        </p>
      </div>
    </div>
  );
};

export default MarkingAnimation;
