import { Sparkles, Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingStep {
  message: string;
  duration: number; // in ms
}

const defaultSteps: LoadingStep[] = [
  { message: "Selecting question type...", duration: 1500 },
  { message: "Analyzing your study content...", duration: 2000 },
  { message: "Generating exam-style question...", duration: 2500 },
  { message: "Creating mark scheme...", duration: 2000 },
  { message: "Finalizing question...", duration: 1500 },
];

interface StepLoadingSpinnerProps {
  steps?: LoadingStep[];
}

const StepLoadingSpinner = ({ steps = defaultSteps }: StepLoadingSpinnerProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const totalDuration = steps.reduce((sum, step) => sum + step.duration, 0);

  useEffect(() => {
    let elapsed = 0;
    let stepIndex = 0;
    let stepStartTime = 0;

    const interval = setInterval(() => {
      elapsed += 100;
      
      // Calculate overall progress
      const overallProgress = Math.min((elapsed / totalDuration) * 100, 95);
      setProgress(overallProgress);

      // Check if current step is complete
      let accumulatedTime = 0;
      for (let i = 0; i < steps.length; i++) {
        accumulatedTime += steps[i].duration;
        if (elapsed >= accumulatedTime && !completedSteps.includes(i)) {
          setCompletedSteps(prev => [...prev, i]);
        }
        if (elapsed < accumulatedTime && stepIndex !== i) {
          stepIndex = i;
          setCurrentStep(i);
          break;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [steps, totalDuration]);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 animate-fade-in">
      {/* Animated Icon */}
      <div className="relative">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 animate-pulse-glow flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center animate-spin-slow">
            <Sparkles className="h-8 w-8 text-primary animate-float" />
          </div>
        </div>
        {/* Orbiting dots */}
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '3s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
        </div>
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-64">
        <Progress value={progress} className="h-2" />
        <p className="text-xs text-muted-foreground text-center mt-1">
          {Math.round(progress)}% complete
        </p>
      </div>

      {/* Step Indicators */}
      <div className="space-y-2 w-full max-w-sm">
        {steps.map((step, idx) => {
          const isCompleted = completedSteps.includes(idx);
          const isCurrent = currentStep === idx && !isCompleted;

          return (
            <div
              key={idx}
              className={`
                flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                ${isCurrent ? "bg-primary/10 scale-[1.02]" : ""}
                ${isCompleted ? "opacity-60" : ""}
              `}
            >
              <div 
                className={`
                  w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
                  ${isCompleted 
                    ? "bg-primary text-primary-foreground" 
                    : isCurrent 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }
                `}
              >
                {isCompleted ? (
                  <Check className="h-3 w-3 animate-scale-in" />
                ) : isCurrent ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <span className="text-xs">{idx + 1}</span>
                )}
              </div>
              <span 
                className={`
                  text-sm font-medium transition-all duration-300
                  ${isCurrent ? "text-primary" : ""}
                  ${isCompleted ? "line-through text-muted-foreground" : ""}
                `}
              >
                {step.message}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bouncing dots */}
      <div className="flex items-center justify-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};

export default StepLoadingSpinner;
