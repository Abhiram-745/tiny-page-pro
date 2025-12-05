import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "Analyzing AQA past papers...",
  "Generating exam-style question...",
  "Crafting mark scheme...",
  "Applying command words...",
  "Finalizing question...",
];

const LoadingSpinner = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12 animate-fade-in">
      <div className="relative">
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-glow" />
        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 text-primary animate-float" />
      </div>
      
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        
        <p className="font-heading text-lg font-semibold text-foreground animate-pulse">
          {messages[messageIndex]}
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
