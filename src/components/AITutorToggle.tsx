import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bot, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AITutorToggleProps {
  isEnabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export const AITutorToggle = ({ isEnabled, onToggle }: AITutorToggleProps) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl border transition-all cursor-pointer",
        isEnabled 
          ? "bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border-violet-500/30" 
          : "bg-muted/50 border-border hover:bg-muted"
      )}
      onClick={() => onToggle(!isEnabled)}
    >
      <div className={cn(
        "p-2 rounded-lg transition-all",
        isEnabled 
          ? "bg-gradient-to-br from-violet-500 to-indigo-600" 
          : "bg-muted-foreground/20"
      )}>
        {isEnabled ? (
          <Sparkles className="h-4 w-4 text-white" />
        ) : (
          <Bot className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      <div className="flex-1">
        <Label className="font-medium cursor-pointer">AI Tutor Mode</Label>
        <p className="text-xs text-muted-foreground">
          {isEnabled ? "Highlight text to get explanations" : "Turn on for AI-assisted learning"}
        </p>
      </div>
      <Switch 
        checked={isEnabled} 
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-violet-500 data-[state=checked]:to-indigo-600"
      />
    </div>
  );
};
