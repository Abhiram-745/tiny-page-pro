import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb,
  HelpCircle,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface TopicPerformance {
  topic: string;
  percentage: number;
  attempts: number;
  missedKeyPoints: string[];
  strengths?: string[];
  weaknesses?: string[];
}

interface PriorityAnalysis {
  focusAreas: TopicPerformance[];
  developing: TopicPerformance[];
  confident: TopicPerformance[];
  noData: TopicPerformance[];
  aiInsights: string[];
  recommendedTopics: string[];
  totalAttempts: number;
}

interface MockExamPriorityListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  topicTitles: string[];
  topicSlugs: string[];
  subject: string;
  onConfirm: (selectedTopics: string[]) => void;
}

const MockExamPriorityList = ({
  open,
  onOpenChange,
  topicTitles,
  topicSlugs,
  subject,
  onConfirm,
}: MockExamPriorityListProps) => {
  const [analysis, setAnalysis] = useState<PriorityAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [expandedTopics, setExpandedTopics] = useState<string[]>([]);

  useEffect(() => {
    if (open) {
      fetchAnalysis();
    }
  }, [open]);

  const fetchAnalysis = async () => {
    setLoading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase.functions.invoke('generate-priority-analysis', {
        body: {
          userId: user.id,
          topicSlugs,
          topicTitles,
          subject
        }
      });

      if (error) throw error;

      if (data?.analysis) {
        setAnalysis(data.analysis);
        // Pre-select recommended topics
        setSelectedTopics(data.analysis.recommendedTopics || []);
      }
    } catch (error) {
      console.error("Error fetching priority analysis:", error);
      // Fallback: select all topics
      setSelectedTopics(topicTitles);
    } finally {
      setLoading(false);
    }
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const toggleExpanded = (topic: string) => {
    setExpandedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleConfirm = () => {
    onConfirm(selectedTopics);
    onOpenChange(false);
  };

  const renderTopicItem = (tp: TopicPerformance, category: 'focus' | 'developing' | 'confident' | 'noData') => {
    const colors = {
      focus: 'text-red-500 bg-red-500/10 border-red-500/30',
      developing: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
      confident: 'text-green-500 bg-green-500/10 border-green-500/30',
      noData: 'text-muted-foreground bg-muted/30 border-muted'
    };

    const isExpanded = expandedTopics.includes(tp.topic);
    const hasDetails = (tp.strengths && tp.strengths.length > 0) || 
                       (tp.weaknesses && tp.weaknesses.length > 0) ||
                       (tp.missedKeyPoints && tp.missedKeyPoints.length > 0);

    return (
      <Collapsible 
        key={tp.topic}
        open={isExpanded}
        onOpenChange={() => toggleExpanded(tp.topic)}
      >
        <div 
          className={`rounded-lg border transition-all ${colors[category]} ${
            selectedTopics.includes(tp.topic) ? 'ring-2 ring-primary/50' : ''
          }`}
        >
          <div className="flex items-start gap-3 p-3">
            <Checkbox
              checked={selectedTopics.includes(tp.topic)}
              onCheckedChange={() => toggleTopic(tp.topic)}
              className="mt-0.5"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm truncate">{tp.topic}</span>
                {category === 'focus' && (
                  <Badge variant="destructive" className="text-[10px] px-1.5 py-0">
                    <Sparkles className="h-2.5 w-2.5 mr-0.5" />
                    AI Recommended
                  </Badge>
                )}
                {category === 'noData' && (
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                    <HelpCircle className="h-2.5 w-2.5 mr-0.5" />
                    No data yet
                  </Badge>
                )}
              </div>
              {tp.percentage >= 0 && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs opacity-80">
                    Avg: {tp.percentage}%
                  </span>
                  <span className="text-xs opacity-60">
                    ({tp.attempts} attempt{tp.attempts !== 1 ? 's' : ''})
                  </span>
                </div>
              )}
            </div>
            {hasDetails && tp.percentage >= 0 && (
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            )}
          </div>
          
          <CollapsibleContent>
            {tp.percentage >= 0 && (
              <div className="px-3 pb-3 pt-0 space-y-3 border-t border-inherit mx-3 mt-1">
                {/* Strengths */}
                {tp.strengths && tp.strengths.length > 0 && (
                  <div className="mt-3">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <ThumbsUp className="h-3.5 w-3.5 text-green-500" />
                      <span className="text-xs font-medium text-green-600 dark:text-green-400">Strengths</span>
                    </div>
                    <ul className="space-y-1">
                      {tp.strengths.slice(0, 3).map((strength, i) => (
                        <li key={i} className="text-[11px] text-muted-foreground flex gap-1.5">
                          <span className="text-green-500">✓</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Weaknesses */}
                {tp.weaknesses && tp.weaknesses.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <ThumbsDown className="h-3.5 w-3.5 text-red-500" />
                      <span className="text-xs font-medium text-red-600 dark:text-red-400">Areas to Improve</span>
                    </div>
                    <ul className="space-y-1">
                      {tp.weaknesses.slice(0, 3).map((weakness, i) => (
                        <li key={i} className="text-[11px] text-muted-foreground flex gap-1.5">
                          <span className="text-red-500">✗</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Missed Key Points (fallback) */}
                {(!tp.strengths || tp.strengths.length === 0) && 
                 (!tp.weaknesses || tp.weaknesses.length === 0) && 
                 tp.missedKeyPoints.length > 0 && (
                  <div className="mt-2">
                    <span className="text-[11px] font-medium text-muted-foreground">Often missed:</span>
                    <p className="text-[11px] opacity-70 mt-0.5">
                      {tp.missedKeyPoints.slice(0, 3).join(', ')}
                    </p>
                  </div>
                )}
              </div>
            )}
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Your Topic Performance
          </DialogTitle>
          <DialogDescription>
            Based on your past practice, here's how you're doing. We've pre-selected topics you should focus on.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 -mx-6 px-6">
          {loading ? (
            <div className="space-y-4 py-4">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          ) : analysis ? (
            <div className="space-y-5 py-4">
              {/* Focus Areas */}
              {analysis.focusAreas.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <h3 className="font-semibold text-sm text-red-500">
                      Focus Areas (Need Practice)
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {analysis.focusAreas.map(tp => renderTopicItem(tp, 'focus'))}
                  </div>
                </div>
              )}

              {/* No Data */}
              {analysis.noData.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold text-sm text-muted-foreground">
                      Not Yet Practiced
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {analysis.noData.map(tp => renderTopicItem(tp, 'noData'))}
                  </div>
                </div>
              )}

              {/* Developing */}
              {analysis.developing.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-yellow-500" />
                    <h3 className="font-semibold text-sm text-yellow-500">
                      Developing (50-69%)
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {analysis.developing.map(tp => renderTopicItem(tp, 'developing'))}
                  </div>
                </div>
              )}

              {/* Confident */}
              {analysis.confident.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <h3 className="font-semibold text-sm text-green-500">
                      Confident (70%+)
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {analysis.confident.map(tp => renderTopicItem(tp, 'confident'))}
                  </div>
                </div>
              )}

              {/* AI Insights */}
              {analysis.aiInsights.length > 0 && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-sm">AI Insights</h3>
                  </div>
                  <ul className="space-y-2">
                    {analysis.aiInsights.map((insight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary">•</span>
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {analysis.totalAttempts === 0 && (
                <div className="text-center py-6 text-muted-foreground">
                  <HelpCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No practice data yet for these topics.</p>
                  <p className="text-xs mt-1">Select the topics you'd like to practice!</p>
                </div>
              )}
            </div>
          ) : (
            <div className="py-4 space-y-2">
              {topicTitles.map(title => (
                <div key={title} className="flex items-center gap-3 p-3 rounded-lg border">
                  <Checkbox
                    checked={selectedTopics.includes(title)}
                    onCheckedChange={() => toggleTopic(title)}
                  />
                  <span className="text-sm">{title}</span>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <DialogFooter className="flex-row justify-between sm:justify-between gap-2 pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} selected
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleConfirm}
              disabled={selectedTopics.length === 0}
            >
              Continue to Exam Setup
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MockExamPriorityList;