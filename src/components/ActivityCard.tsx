import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export type ActivityType = "exam" | "blurt" | "mock";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  subject?: string;
  topic?: string;
  subsection?: string;
  score: number;
  maxScore: number;
  createdAt: Date;
  keyPointsCovered?: string[];
  keyPointsMissed?: string[];
}

interface ActivityCardProps {
  activity: ActivityItem;
  onClick?: () => void;
}

const typeLabels: Record<ActivityType, string> = {
  exam: "Practice Questions",
  blurt: "Blurt Practice",
  mock: "Mock Exam",
};

const typeColors: Record<ActivityType, string> = {
  exam: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  blurt: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  mock: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

export function ActivityCard({ activity, onClick }: ActivityCardProps) {
  const [expanded, setExpanded] = useState(false);
  
  const percentage = activity.maxScore > 0 
    ? Math.round((activity.score / activity.maxScore) * 100) 
    : 0;
  
  const getScoreColor = () => {
    if (percentage >= 70) return "text-green-400";
    if (percentage >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getProgressColor = () => {
    if (percentage >= 70) return "bg-green-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const hasKeyPoints = (activity.keyPointsCovered?.length || 0) > 0 || 
                       (activity.keyPointsMissed?.length || 0) > 0;

  return (
    <Card 
      className={cn(
        "transition-all duration-200 hover:shadow-md cursor-pointer border-border/50",
        expanded && "ring-1 ring-primary/20"
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          {/* Left: Type, Subject, Topic */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className={typeColors[activity.type]}>
                {typeLabels[activity.type]}
              </Badge>
              {activity.subject && (
                <Badge variant="secondary" className="capitalize">
                  {activity.subject}
                </Badge>
              )}
            </div>
            
            <div>
              <h3 className="font-medium text-sm truncate">
                {activity.topic || "Unknown Topic"}
              </h3>
              {activity.subsection && (
                <p className="text-xs text-muted-foreground truncate">
                  {activity.subsection}
                </p>
              )}
            </div>
          </div>

          {/* Right: Score and Time */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            <div className="text-right">
              <span className={cn("text-lg font-bold", getScoreColor())}>
                {percentage}%
              </span>
              <span className="text-xs text-muted-foreground ml-1">
                ({activity.score}/{activity.maxScore})
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {format(activity.createdAt, "MMM d, HH:mm")}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3">
          <Progress 
            value={percentage} 
            className="h-2"
            style={{ 
              '--progress-foreground': getProgressColor() 
            } as React.CSSProperties}
          />
        </div>

        {/* Expandable Key Points */}
        {hasKeyPoints && (
          <div className="mt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
              }}
              className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              {expanded ? "Hide details" : "Show details"}
            </button>
            
            {expanded && (
              <div className="mt-3 space-y-3 animate-in slide-in-from-top-2">
                {activity.keyPointsCovered && activity.keyPointsCovered.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1 text-xs font-medium text-green-400 mb-1">
                      <CheckCircle className="h-3 w-3" />
                      Key Points Covered
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1 pl-4">
                      {activity.keyPointsCovered.map((point, i) => (
                        <li key={i} className="list-disc">{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activity.keyPointsMissed && activity.keyPointsMissed.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1 text-xs font-medium text-red-400 mb-1">
                      <XCircle className="h-3 w-3" />
                      Key Points Missed
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1 pl-4">
                      {activity.keyPointsMissed.map((point, i) => (
                        <li key={i} className="list-disc">{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
