import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, Trophy, CheckCircle, XCircle, ChevronDown, ChevronUp, Target, Clock, FileText, BookOpen, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import AnimatedMarkSchemeComparison from "@/components/AnimatedMarkSchemeComparison";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MarkingPoint {
  markPoint: string;
  studentText: string | null;
  awarded: boolean;
  marks: number;
  explanation?: string;
  improvedSentence?: string | null;
}

interface Question {
  id: string;
  topic: string;
  question_number: number;
  question_text: string;
  marks: number;
  page_number: number;
  diagram_svg?: string | null;
}

interface Result {
  question_id: string;
  score: number;
  max_marks: number;
  feedback: string;
  model_answer: string;
  key_points_covered: string[];
  key_points_missed: string[];
  what_done_well: string;
  areas_to_improve: string;
  marking_breakdown?: MarkingPoint[];
}

interface Answer {
  question_id: string;
  answer_text: string;
  answer_image_url: string;
}

interface Exam {
  id: string;
  subject: string;
  topic_title: string;
  selected_topics: string[];
  total_marks: number;
  total_score: number;
  time_limit_minutes: number;
  started_at: string;
  ended_at: string;
}

const MockExamResults = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [exam, setExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, [examId]);

  const loadResults = async () => {
    if (!examId) return;

    try {
      const { data: examData, error: examError } = await supabase
        .from("mock_exams")
        .select("*")
        .eq("id", examId)
        .single();

      if (examError) throw examError;
      setExam(examData as any);

      const { data: questionsData, error: questionsError } = await supabase
        .from("mock_exam_questions")
        .select("*")
        .eq("exam_id", examId)
        .order("question_number", { ascending: true });

      if (questionsError) throw questionsError;
      setQuestions(questionsData as any);
      
      // Select first question by default and expand all topics
      if (questionsData && questionsData.length > 0) {
        setSelectedQuestionId(questionsData[0].id);
        const topics = new Set(questionsData.map((q: any) => q.topic));
        setExpandedTopics(topics);
      }

      const { data: resultsData, error: resultsError } = await supabase
        .from("mock_exam_results")
        .select("*")
        .eq("exam_id", examId);

      if (resultsError) throw resultsError;
      setResults(resultsData as any);

      const { data: answersData, error: answersError } = await supabase
        .from("mock_exam_answers")
        .select("*")
        .eq("exam_id", examId);

      if (answersError) throw answersError;
      setAnswers(answersData as any);

    } catch (error) {
      console.error("Error loading results:", error);
      toast({
        title: "Error",
        description: "Failed to load exam results.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTopic = (topic: string) => {
    setExpandedTopics(prev => {
      const next = new Set(prev);
      if (next.has(topic)) {
        next.delete(topic);
      } else {
        next.add(topic);
      }
      return next;
    });
  };

  const getResultForQuestion = (questionId: string) => {
    return results.find(r => r.question_id === questionId);
  };

  const getAnswerForQuestion = (questionId: string) => {
    return answers.find(a => a.question_id === questionId);
  };

  const getScoreColor = (score: number, maxMarks: number) => {
    const percentage = (score / maxMarks) * 100;
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreBgColor = (score: number, maxMarks: number) => {
    const percentage = (score / maxMarks) * 100;
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getMarkingBreakdown = (result: Result, answer: Answer | undefined): MarkingPoint[] => {
    if (result.marking_breakdown && result.marking_breakdown.length > 0) {
      return result.marking_breakdown;
    }
    
    const breakdown: MarkingPoint[] = [];
    const studentText = answer?.answer_text || "";
    
    result.key_points_covered?.forEach((point) => {
      breakdown.push({
        markPoint: point,
        studentText: studentText.length > 0 ? findMatchingText(studentText, point) : null,
        awarded: true,
        marks: 1,
        explanation: "This point was correctly addressed in your answer."
      });
    });
    
    result.key_points_missed?.forEach((point) => {
      breakdown.push({
        markPoint: point,
        studentText: null,
        awarded: false,
        marks: 1,
        explanation: "This key point was missing or incomplete.",
        improvedSentence: point
      });
    });
    
    return breakdown;
  };

  const findMatchingText = (answer: string, point: string): string | null => {
    const words = point.toLowerCase().split(' ').slice(0, 3);
    const answerLower = answer.toLowerCase();
    
    for (const word of words) {
      if (word.length > 4 && answerLower.includes(word)) {
        const idx = answerLower.indexOf(word);
        const start = Math.max(0, idx - 20);
        const end = Math.min(answer.length, idx + word.length + 30);
        return answer.substring(start, end);
      }
    }
    return null;
  };

  // Group questions by topic
  const questionsByTopic = questions.reduce((acc, q) => {
    if (!acc[q.topic]) acc[q.topic] = [];
    acc[q.topic].push(q);
    return acc;
  }, {} as Record<string, Question[]>);

  const selectedQuestion = questions.find(q => q.id === selectedQuestionId);
  const selectedResult = selectedQuestion ? getResultForQuestion(selectedQuestion.id) : null;
  const selectedAnswer = selectedQuestion ? getAnswerForQuestion(selectedQuestion.id) : null;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-muted border-t-primary"></div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8">
          <CardContent className="text-center">
            <p className="text-muted-foreground">Results not found</p>
            <Button onClick={() => navigate("/dashboard")} className="mt-4">
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalScore = exam.total_score || results.reduce((acc, r) => acc + r.score, 0);
  const percentage = Math.round((totalScore / exam.total_marks) * 100);
  const timeTaken = exam.ended_at && exam.started_at
    ? Math.round((new Date(exam.ended_at).getTime() - new Date(exam.started_at).getTime()) / 60000)
    : exam.time_limit_minutes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="flex h-screen">
        {/* Left Sidebar - Question Navigation */}
        <div className="w-80 border-r bg-card/50 backdrop-blur-sm flex flex-col">
          {/* Score Summary */}
          <div className="p-4 border-b">
            <Button variant="ghost" size="sm" onClick={() => navigate("/dashboard")} className="mb-3 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <div className="flex items-center gap-3">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${getScoreBgColor(totalScore, exam.total_marks)}`}>
                <span className="text-white font-bold text-lg">{percentage}%</span>
              </div>
              <div>
                <p className="font-semibold">{totalScore}/{exam.total_marks} marks</p>
                <p className="text-xs text-muted-foreground">{timeTaken} min • {questions.length} questions</p>
              </div>
            </div>
            <Progress value={percentage} className="mt-3 h-2" />
          </div>

          {/* Question List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {Object.entries(questionsByTopic).map(([topic, topicQuestions]) => {
                const topicScore = topicQuestions.reduce((sum, q) => {
                  const r = getResultForQuestion(q.id);
                  return sum + (r?.score || 0);
                }, 0);
                const topicMaxMarks = topicQuestions.reduce((sum, q) => sum + q.marks, 0);
                const topicPercentage = Math.round((topicScore / topicMaxMarks) * 100);

                return (
                  <Collapsible
                    key={topic}
                    open={expandedTopics.has(topic)}
                    onOpenChange={() => toggleTopic(topic)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors text-left">
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                            topicPercentage >= 70 ? 'border-green-500 text-green-500' : 
                            topicPercentage >= 50 ? 'border-yellow-500 text-yellow-500' : 
                            'border-red-500 text-red-500'
                          }`}>
                            {topicPercentage >= 70 ? '✓' : topicPercentage}
                          </div>
                          <div>
                            <p className="font-medium text-sm line-clamp-1">{topic}</p>
                            <p className="text-xs text-muted-foreground">
                              {topicQuestions.length} Q • {topicScore}/{topicMaxMarks}
                            </p>
                          </div>
                        </div>
                        {expandedTopics.has(topic) ? (
                          <ChevronUp className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-4 border-l pl-2 space-y-1 pb-2">
                        {topicQuestions.map((q) => {
                          const r = getResultForQuestion(q.id);
                          const isSelected = selectedQuestionId === q.id;
                          const qPercentage = r ? Math.round((r.score / r.max_marks) * 100) : 0;

                          return (
                            <button
                              key={q.id}
                              onClick={() => setSelectedQuestionId(q.id)}
                              className={`w-full flex items-center justify-between p-2 rounded-md text-left transition-colors ${
                                isSelected 
                                  ? 'bg-primary/10 border border-primary/30' 
                                  : 'hover:bg-muted/50'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full ${
                                  !r ? 'bg-muted' :
                                  qPercentage >= 70 ? 'bg-green-500' : 
                                  qPercentage >= 50 ? 'bg-yellow-500' : 
                                  'bg-red-500'
                                }`} />
                                <span className="text-sm">Q{q.question_number}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {r ? `${r.score}/${r.max_marks}` : `0/${q.marks}`}
                                </span>
                                {isSelected && <ChevronRight className="h-3 w-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                );
              })}
            </div>
          </ScrollArea>

          {/* Footer Actions */}
          <div className="p-3 border-t space-y-2">
            <Button variant="outline" onClick={() => navigate("/dashboard")} className="w-full" size="sm">
              Back to Dashboard
            </Button>
            <Button onClick={() => navigate(-2)} className="w-full" size="sm">
              Try Another Exam
            </Button>
          </div>
        </div>

        {/* Main Content - Selected Question */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-6 max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>{exam.subject}</span>
                <ChevronRight className="h-4 w-4" />
                <span>{exam.topic_title}</span>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground font-medium">Results</span>
              </div>

              {selectedQuestion ? (
                <div className="space-y-6">
                  {/* Question Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold">Question {selectedQuestion.question_number}</h1>
                      <p className="text-muted-foreground mt-1">{selectedQuestion.topic}</p>
                    </div>
                    <Badge 
                      variant={selectedResult && selectedResult.score >= selectedResult.max_marks * 0.7 ? "default" : "secondary"}
                      className="text-lg px-4 py-2"
                    >
                      {selectedResult ? `${selectedResult.score}/${selectedResult.max_marks}` : `0/${selectedQuestion.marks}`} marks
                    </Badge>
                  </div>

                  {/* Question Text */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <MarkdownRenderer content={selectedQuestion.question_text} />
                      </div>
                      {selectedQuestion.diagram_svg && (
                        <div 
                          className="mt-4 flex justify-center"
                          dangerouslySetInnerHTML={{ __html: selectedQuestion.diagram_svg }}
                        />
                      )}
                    </CardContent>
                  </Card>

                  {/* Your Answer with Live Marking */}
                  {selectedResult && selectedAnswer && (selectedAnswer.answer_text || selectedAnswer.answer_image_url) && (
                    <AnimatedMarkSchemeComparison
                      markingBreakdown={getMarkingBreakdown(selectedResult, selectedAnswer)}
                      studentAnswer={selectedAnswer.answer_text || "[Photo/Drawing submitted]"}
                    />
                  )}

                  {/* Submitted Image */}
                  {selectedAnswer?.answer_image_url && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Your Submitted Image</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          src={selectedAnswer.answer_image_url}
                          alt="Your answer"
                          className="max-w-full rounded-lg border"
                        />
                      </CardContent>
                    </Card>
                  )}

                  {/* No answer case */}
                  {!selectedAnswer?.answer_text && !selectedAnswer?.answer_image_url && (
                    <Card className="border-dashed">
                      <CardContent className="py-8 text-center">
                        <p className="text-muted-foreground italic">No answer provided for this question</p>
                      </CardContent>
                    </Card>
                  )}

                  {selectedResult && (
                    <>
                      {/* Model Answer */}
                      <Card className="border-green-500/30 bg-green-500/5">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2 text-green-700 dark:text-green-400">
                            <BookOpen className="h-5 w-5" />
                            Model Answer
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="prose prose-sm max-w-none dark:prose-invert">
                            <MarkdownRenderer content={selectedResult.model_answer || "Not available"} />
                          </div>
                        </CardContent>
                      </Card>

                      {/* Feedback Grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedResult.what_done_well && (
                          <Card className="border-green-500/20 bg-green-500/5">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-center gap-2 text-green-700 dark:text-green-400">
                                <CheckCircle className="h-4 w-4" />
                                What You Did Well
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">{selectedResult.what_done_well}</p>
                            </CardContent>
                          </Card>
                        )}

                        {selectedResult.areas_to_improve && (
                          <Card className="border-yellow-500/20 bg-yellow-500/5">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                                <XCircle className="h-4 w-4" />
                                Areas to Improve
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">{selectedResult.areas_to_improve}</p>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    </>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        const currentIdx = questions.findIndex(q => q.id === selectedQuestionId);
                        if (currentIdx > 0) {
                          setSelectedQuestionId(questions[currentIdx - 1].id);
                        }
                      }}
                      disabled={questions.findIndex(q => q.id === selectedQuestionId) === 0}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous Question
                    </Button>
                    <Button
                      onClick={() => {
                        const currentIdx = questions.findIndex(q => q.id === selectedQuestionId);
                        if (currentIdx < questions.length - 1) {
                          setSelectedQuestionId(questions[currentIdx + 1].id);
                        }
                      }}
                      disabled={questions.findIndex(q => q.id === selectedQuestionId) === questions.length - 1}
                    >
                      Next Question
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-[60vh]">
                  <p className="text-muted-foreground">Select a question from the sidebar</p>
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default MockExamResults;
