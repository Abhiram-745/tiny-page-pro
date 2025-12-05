import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface RecentActivityCardProps {
  topicName: string;
  subsectionNames: string[];
  score: number;
  maxScore: number;
  questionsCorrect: number;
  questionsTotal: number;
  timestamp: string;
  onClick: () => void;
  subject?: string;
}

export const RecentActivityCard = ({
  topicName,
  subsectionNames,
  score,
  maxScore,
  questionsCorrect,
  questionsTotal,
  timestamp,
  onClick,
  subject = "chemistry"
}: RecentActivityCardProps) => {
  const percentage = Math.round((score / maxScore) * 100);
  
  const getScoreColor = (pct: number) => {
    if (pct >= 80) return "text-green-600 dark:text-green-400";
    if (pct >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-orange-600 dark:text-orange-400";
  };

  const getProgressColor = (pct: number) => {
    if (pct >= 80) return "bg-green-500";
    if (pct >= 60) return "bg-yellow-500";
    return "bg-orange-500";
  };

  const subjectEmoji = {
    chemistry: "🧪",
    physics: "⚡",
    "product-design": "🎨",
    english: "📚",
    geography: "🌍"
  }[subject] || "📖";

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 cursor-pointer hover-lift group animate-fade-in border-border/50"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 flex-1">
            <span className="text-2xl">{subjectEmoji}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {topicName}
              </h3>
              <div className="flex flex-col gap-1 mt-1">
                {subsectionNames.map((name, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground flex items-center gap-1">
                    <span className="text-xs">└─</span> {name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <Badge 
            className={`${getScoreColor(percentage)} border-current font-bold px-3 py-1`}
            variant="outline"
          >
            {percentage}%
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              {questionsCorrect}/{questionsTotal} questions correct
            </span>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
            </span>
          </div>
          
          <div className="relative">
            <Progress value={percentage} className="h-2" />
            <div 
              className={`absolute top-0 left-0 h-2 rounded-full transition-all ${getProgressColor(percentage)}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
