import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, AlertTriangle, BookOpen, FileQuestion, PenLine, CheckCircle as CheckIcon, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { supabase } from "@/integrations/supabase/client";
import { LiveAnswerMarking } from "@/components/LiveAnswerMarking";
import AnimatedMarkSchemeComparison from "@/components/AnimatedMarkSchemeComparison";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { toast } from "sonner";

interface MarkingPoint {
  markPoint: string;
  studentText: string | null;
  awarded: boolean;
  marks: number;
  explanation?: string;
  improvedSentence?: string | null;
}

interface FeedbackState {
  question: string;
  answer: string;
  keyIdeasCovered: string[];
  keyIdeasMissed: string[];
  score: number;
  maxMarks: number;
  feedbackText: string;
  topicId: string;
  subsectionId: string;
  subsectionTitle: string;
  questionType: "blurt" | "exam";
  photoImage?: string;
  currentPairIndex?: number;
  previousQuestionResults?: any[];
  subject?: "physics" | "product-design" | "chemistry" | "economics" | "biology" | "geography";
  moduleId?: string;
  markingBreakdown?: MarkingPoint[];
  modelAnswer?: string;
  markscheme?: string;
}

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const feedbackData = location.state as FeedbackState;
  const [isQuestionStarred, setIsQuestionStarred] = useState(false);

  if (!feedbackData) {
    navigate("/dashboard");
    return null;
  }

  const { question, answer, keyIdeasCovered, keyIdeasMissed, score, maxMarks, topicId, subsectionId, subsectionTitle, questionType, photoImage, feedbackText, currentPairIndex, previousQuestionResults, subject, moduleId, markingBreakdown, modelAnswer, markscheme } = feedbackData;
  const percentage = Math.round((score / maxMarks) * 100);

  console.log("Results page - received currentPairIndex:", currentPairIndex);

  // Determine the correct base path based on subject from state
  const basePath = subject === 'physics' ? '/physics/blur-practice' : 
                   subject === 'product-design' ? '/product-design/blur-practice' :
                   subject === 'economics' ? '/economics/blur-practice' :
                   subject === 'biology' ? '/biology/blur-practice' :
                   subject === 'geography' ? '/geography/blur-practice' :
                   '/blur-practice';
  
  // Build the full navigation path
  const getNavigationPath = () => {
    if (subject === 'economics' && moduleId) {
      return `${basePath}/${topicId}/${moduleId}/${subsectionId}`;
    }
    return `${basePath}/${topicId}/${subsectionId}`;
  };

  // Handle star question toggle
  const handleToggleStarQuestion = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast.error("Please login to star questions");
        return;
      }

      if (isQuestionStarred) {
        const { error } = await supabase
          .from("starred_questions")
          .delete()
          .eq("user_id", user.id)
          .eq("question_text", question);

        if (error) throw error;
        setIsQuestionStarred(false);
        toast.success("Question removed from starred");
      } else {
        const { error } = await supabase
          .from("starred_questions")
          .insert({
            user_id: user.id,
            question_text: question,
            question_type: questionType,
            marks: maxMarks,
            markscheme: markscheme || null,
            model_answer: modelAnswer || null,
            topic_slug: topicId,
            subsection_slug: subsectionId,
            subsection_title: subsectionTitle || null,
            subject: subject || "chemistry"
          });

        if (error) throw error;
        setIsQuestionStarred(true);
        toast.success("Question added to question bank!");
      }
    } catch (error) {
      console.error("Error toggling star:", error);
      toast.error("Failed to star question");
    }
  };

  // Save practice session to database
  useEffect(() => {
    const savePracticeSession = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await supabase.from("practice_sessions").insert({
          user_id: user.id,
          topic_slug: topicId,
          subsection_slug: subsectionId,
          subsection_title: subsectionTitle,
          overall_score: score,
          max_marks: maxMarks,
          questions_count: 1,
          key_ideas_covered: keyIdeasCovered,
          key_ideas_missed: keyIdeasMissed,
        });

        if (error) {
          console.error("Error saving practice session:", error);
        } else {
          console.log("Practice session saved successfully");
        }
      } catch (error) {
        console.error("Error saving practice session:", error);
      }
    };

    savePracticeSession();
  }, [topicId, subsectionId, subsectionTitle, score, maxMarks, keyIdeasCovered, keyIdeasMissed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-6">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate(getNavigationPath())} 
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Practice
        </Button>

        <Card className="mb-6 shadow-lg">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="text-sm">
                {questionType === "exam" ? "Exam Question" : "Blurt Question"}
              </Badge>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  {maxMarks} marks
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleToggleStarQuestion}
                  className={`gap-2 ${isQuestionStarred ? 'text-yellow-500 hover:text-yellow-600' : 'text-muted-foreground hover:text-yellow-500'}`}
                >
                  <Star className={`h-4 w-4 ${isQuestionStarred ? 'fill-yellow-500' : ''}`} />
                  {isQuestionStarred ? "Starred" : "Star"}
                </Button>
              </div>
            </div>
            <CardTitle className="text-xl font-semibold">Question</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg">{question}</p>
          </CardContent>
        </Card>

        <Card className="mb-6 shadow-lg">
          <CardHeader className="bg-secondary/5">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-semibold">Question Score</CardTitle>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{percentage}%</div>
                <div className="text-sm text-muted-foreground">{score}/{maxMarks} marks</div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Animated Mark Scheme Comparison */}
        {markingBreakdown && markingBreakdown.length > 0 && (
          <AnimatedMarkSchemeComparison 
            markingBreakdown={markingBreakdown}
            studentAnswer={answer}
          />
        )}

        <Card className="mb-6 shadow-lg">
          <CardHeader className="bg-muted/50">
            <CardTitle className="text-xl font-semibold">AI Examiner Feedback</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{feedbackData.feedbackText}</p>
          </CardContent>
        </Card>

        <TooltipProvider delayDuration={200}>
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <Card className="shadow-lg border-l-4 border-l-green-500">
              <CardHeader className="bg-green-50 dark:bg-green-950/20">
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  Key Ideas Covered ({keyIdeasCovered.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {keyIdeasCovered.length > 0 ? (
                  <ul className="space-y-2">
                    {keyIdeasCovered.map((idea, idx) => {
                      const matchingPoint = markingBreakdown?.find(
                        p => p.awarded && p.markPoint.toLowerCase().includes(idea.toLowerCase().slice(0, 20))
                      ) || markingBreakdown?.find(p => p.awarded);
                      const explanation = matchingPoint?.explanation || "You demonstrated this concept correctly in your answer.";
                      
                      return (
                        <Tooltip key={idx}>
                          <TooltipTrigger asChild>
                            <li className="flex items-start gap-2 cursor-help hover:bg-green-50/50 dark:hover:bg-green-900/20 p-1 rounded transition-colors">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{idea}</span>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">{explanation}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">No key ideas covered</p>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-l-4 border-l-yellow-500">
              <CardHeader className="bg-yellow-50 dark:bg-yellow-950/20">
                <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                  <AlertTriangle className="h-5 w-5" />
                  Key Ideas Missed ({keyIdeasMissed.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {keyIdeasMissed.length > 0 ? (
                  <ul className="space-y-2">
                    {keyIdeasMissed.map((idea, idx) => {
                      const matchingPoint = markingBreakdown?.find(
                        p => !p.awarded && p.markPoint.toLowerCase().includes(idea.toLowerCase().slice(0, 20))
                      ) || markingBreakdown?.find(p => !p.awarded);
                      const explanation = matchingPoint?.explanation || "This key concept was missing or incomplete in your answer.";
                      
                      return (
                        <Tooltip key={idx}>
                          <TooltipTrigger asChild>
                            <li className="flex items-start gap-2 cursor-help hover:bg-yellow-50/50 dark:hover:bg-yellow-900/20 p-1 rounded transition-colors">
                              <AlertTriangle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{idea}</span>
                            </li>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="max-w-xs">
                            <p className="text-sm">{explanation}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">All key ideas covered!</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TooltipProvider>

        {/* Model Answer Section */}
        {modelAnswer && (
          <Card className="mb-6 shadow-lg border-l-4 border-l-purple-500">
            <CardHeader className="bg-purple-50 dark:bg-purple-950/20">
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                <BookOpen className="h-5 w-5" />
                ✨ Model Answer
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <MarkdownRenderer content={modelAnswer} />
            </CardContent>
          </Card>
        )}

        {/* Markscheme Section */}
        {markscheme && (
          <Card className="mb-6 shadow-lg border-l-4 border-l-blue-500">
            <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                <FileQuestion className="h-5 w-5" />
                📋 Official Markscheme
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <MarkdownRenderer content={markscheme} />
            </CardContent>
          </Card>
        )}

        <LiveAnswerMarking
          studentAnswer={answer}
          markingBreakdown={markingBreakdown}
          keyIdeasCovered={keyIdeasCovered}
          keyIdeasMissed={keyIdeasMissed}
          score={score}
          maxMarks={maxMarks}
          isPhotoAnswer={!!photoImage}
          photoImage={photoImage}
        />

        <div className="grid gap-4 md:grid-cols-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => {
              console.log("Move to Next clicked - passing currentPairIndex:", currentPairIndex);
              navigate(getNavigationPath(), { 
                state: { moveToNext: true, keepType: questionType, currentPairIndex } 
              });
            }}
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Move to Next
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => navigate(getNavigationPath(), { 
              state: { generateQuestion: "blurt", previousQuestionResults, currentPairIndex } 
            })}
          >
            <PenLine className="mr-2 h-5 w-5" />
            Blurt Question
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => navigate(getNavigationPath(), { 
              state: { generateQuestion: "exam", previousQuestionResults, currentPairIndex } 
            })}
          >
            <FileQuestion className="mr-2 h-5 w-5" />
            Exam Question
          </Button>
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary"
            onClick={() => {
              const sectionsPath = subject === 'physics' ? '/physics/sections' : 
                                   subject === 'product-design' ? '/product-design/sections' :
                                   subject === 'economics' ? '/economics/chapters' :
                                   subject === 'biology' ? '/biology/sections' :
                                   subject === 'geography' ? '/geography/sections' :
                                   '/sections';
              navigate(sectionsPath);
            }}
          >
            <CheckIcon className="mr-2 h-5 w-5" />
            Finish Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
