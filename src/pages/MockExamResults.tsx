import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Trophy, CheckCircle, XCircle, ChevronDown, ChevronUp, Target, Clock, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Question {
  id: string;
  topic: string;
  question_number: number;
  question_text: string;
  marks: number;
  page_number: number;
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
}

interface Answer {
  question_id: string;
  answer_text: string;
  answer_image_url: string;
}

interface Exam {
  id: string;
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
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, [examId]);

  const loadResults = async () => {
    if (!examId) return;

    try {
      // Load exam
      const { data: examData, error: examError } = await supabase
        .from("mock_exams")
        .select("*")
        .eq("id", examId)
        .single();

      if (examError) throw examError;
      setExam(examData as any);

      // Load questions
      const { data: questionsData, error: questionsError } = await supabase
        .from("mock_exam_questions")
        .select("*")
        .eq("exam_id", examId)
        .order("question_number", { ascending: true });

      if (questionsError) throw questionsError;
      setQuestions(questionsData as any);

      // Load results
      const { data: resultsData, error: resultsError } = await supabase
        .from("mock_exam_results")
        .select("*")
        .eq("exam_id", examId);

      if (resultsError) throw resultsError;
      setResults(resultsData as any);

      // Load answers
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

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
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

  const getScoreBadgeVariant = (score: number, maxMarks: number): "default" | "secondary" | "destructive" => {
    const percentage = (score / maxMarks) * 100;
    if (percentage >= 80) return "default";
    if (percentage >= 60) return "secondary";
    return "destructive";
  };

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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Overall Score Card */}
        <Card className="mb-8 overflow-hidden">
          <div className={`h-2 ${percentage >= 80 ? 'bg-green-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} />
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Trophy className={`h-16 w-16 ${getScoreColor(totalScore, exam.total_marks)}`} />
              </div>
            </div>
            <CardTitle className="text-4xl mb-2">{percentage}%</CardTitle>
            <CardDescription className="text-2xl font-semibold">
              {totalScore} / {exam.total_marks} marks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center mt-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <FileText className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Topic</p>
                <p className="font-semibold text-sm">{exam.topic_title}</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <Target className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Questions</p>
                <p className="font-semibold">{questions.length}</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg">
                <Clock className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-semibold">{timeTaken} min</p>
              </div>
            </div>
            <Progress value={percentage} className="mt-6 h-3" />
          </CardContent>
        </Card>

        {/* Question Results */}
        <h2 className="text-2xl font-bold mb-4">Question Breakdown</h2>
        <div className="space-y-4">
          {questions.map((question) => {
            const result = getResultForQuestion(question.id);
            const answer = getAnswerForQuestion(question.id);
            const isExpanded = expandedQuestions.has(question.id);

            return (
              <Collapsible
                key={question.id}
                open={isExpanded}
                onOpenChange={() => toggleQuestion(question.id)}
              >
                <Card className="overflow-hidden">
                  <CollapsibleTrigger asChild>
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-base px-3 py-1">
                            Q{question.question_number}
                          </Badge>
                          <div>
                            <p className="font-medium text-sm text-left">{question.topic}</p>
                            <p className="text-xs text-muted-foreground">{question.marks} mark{question.marks !== 1 ? 's' : ''}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {result && (
                            <Badge variant={getScoreBadgeVariant(result.score, result.max_marks)}>
                              {result.score}/{result.max_marks}
                            </Badge>
                          )}
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-muted-foreground" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="pt-0 space-y-6">
                      {/* Question */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Question:</h4>
                        <div className="prose prose-sm max-w-none dark:prose-invert">
                          <MarkdownRenderer content={question.question_text} />
                        </div>
                      </div>

                      {/* Your Answer */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Your Answer:</h4>
                        {answer?.answer_image_url ? (
                          <img
                            src={answer.answer_image_url}
                            alt="Your answer"
                            className="max-w-full rounded-lg border"
                          />
                        ) : answer?.answer_text ? (
                          <p className="whitespace-pre-wrap">{answer.answer_text}</p>
                        ) : (
                          <p className="text-muted-foreground italic">No answer provided</p>
                        )}
                      </div>

                      {result && (
                        <>
                          {/* Model Answer */}
                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="font-semibold mb-2 text-green-700 dark:text-green-400">Model Answer:</h4>
                            <div className="prose prose-sm max-w-none dark:prose-invert">
                              <MarkdownRenderer content={result.model_answer || "Not available"} />
                            </div>
                          </div>

                          {/* What you did well */}
                          {result.what_done_well && (
                            <div className="bg-green-500/5 border border-green-500/10 rounded-lg p-4">
                              <h4 className="font-semibold mb-2 flex items-center gap-2 text-green-700 dark:text-green-400">
                                <CheckCircle className="h-4 w-4" />
                                What You Did Well
                              </h4>
                              <p>{result.what_done_well}</p>
                            </div>
                          )}

                          {/* Areas to improve */}
                          {result.areas_to_improve && (
                            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-lg p-4">
                              <h4 className="font-semibold mb-2 flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                                <XCircle className="h-4 w-4" />
                                Areas to Improve
                              </h4>
                              <p>{result.areas_to_improve}</p>
                            </div>
                          )}

                          {/* Key Points */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {result.key_points_covered && result.key_points_covered.length > 0 && (
                              <div className="bg-green-500/5 rounded-lg p-4">
                                <h5 className="font-semibold mb-2 text-sm text-green-700 dark:text-green-400">
                                  ✓ Points Covered
                                </h5>
                                <ul className="text-sm space-y-1">
                                  {result.key_points_covered.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <CheckCircle className="h-3 w-3 mt-1 text-green-500" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {result.key_points_missed && result.key_points_missed.length > 0 && (
                              <div className="bg-red-500/5 rounded-lg p-4">
                                <h5 className="font-semibold mb-2 text-sm text-red-700 dark:text-red-400">
                                  ✗ Points Missed
                                </h5>
                                <ul className="text-sm space-y-1">
                                  {result.key_points_missed.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <XCircle className="h-3 w-3 mt-1 text-red-500" />
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-8">
          <Button variant="outline" onClick={() => navigate("/dashboard")} className="flex-1">
            Back to Dashboard
          </Button>
          <Button onClick={() => navigate(-2)} className="flex-1">
            Try Another Exam
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MockExamResults;
