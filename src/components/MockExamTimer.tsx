import React, { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

interface MockExamTimerProps {
  endTime: Date;
  onTimeUp: () => void;
}

const MockExamTimer = ({ endTime, onTimeUp }: MockExamTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();
      return Math.max(0, Math.floor(diff / 1000));
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);

      if (remaining <= 300) { // 5 minutes warning
        setIsWarning(true);
      }

      if (remaining <= 0) {
        clearInterval(timer);
        onTimeUp();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onTimeUp]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg transition-all ${
        isWarning
          ? 'bg-destructive/20 text-destructive animate-pulse'
          : 'bg-muted'
      }`}
    >
      {isWarning ? (
        <AlertTriangle className="h-5 w-5" />
      ) : (
        <Clock className="h-5 w-5" />
      )}
      <span className="font-bold">{formatTime(timeLeft)}</span>
    </div>
  );
};

export default MockExamTimer;
