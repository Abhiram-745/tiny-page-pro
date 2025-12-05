import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, Send, Upload, StopCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import MockExamTimer from "@/components/MockExamTimer";
import MockExamProgress from "@/components/MockExamProgress";
import { SimpleDrawingCanvas } from "@/components/SimpleDrawingCanvas";
import { SimplePhotoUpload } from "@/components/SimplePhotoUpload";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface Question {
  id: string;
  topic: string;
  question_number: number;
  question_text: string;
  marks: number;
  diagram_svg?: string;
  table_html?: string;
  page_number: number;
}

interface Exam {
  id: string;
  topic_title: string;
  selected_topics: string[];
  time_limit_minutes: number;
  total_marks: number;
  submission_method: string;
  started_at: string;
  status: string;
}

const MockExam = () => {
  const { examId } = useParams<{ examId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [exam, setExam] = useState<Exam | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [showMarkingProgress, setShowMarkingProgress] = useState(false);
  const [markingProgress, setMarkingProgress] = useState({ current: 0, total: 0, status: "Starting..." });
  const [paperImages, setPaperImages] = useState<Record<number, string>>({});

  useEffect(() => {
    loadExam();
  }, [examId]);

  const loadExam = async () => {
    if (!examId) return;

    try {
      const { data: examData, error: examError } = await supabase
        .from("mock_exams")
        .select("*")
        .eq("id", examId)
        .single();

      if (examError) throw examError;

      // Check if exam is already completed
      if (examData.status === "completed") {
        navigate(`/mock-exam-results/${examId}`);
        return;
      }

      setExam(examData as any);

      const { data: questionsData, error: questionsError } = await supabase
        .from("mock_exam_questions")
        .select("*")
        .eq("exam_id", examId)
        .order("page_number", { ascending: true })
        .order("marks", { ascending: true });

      if (questionsError) throw questionsError;
      setQuestions(questionsData as any);

      // Load existing answers
      const { data: answersData } = await supabase
        .from("mock_exam_answers")
        .select("question_id, answer_text")
        .eq("exam_id", examId);

      if (answersData) {
        const answersMap: Record<string, string> = {};
        answersData.forEach((a: any) => {
          answersMap[a.question_id] = a.answer_text || "";
        });
        setAnswers(answersMap);
      }
    } catch (error) {
      console.error("Error loading exam:", error);
      toast({
        title: "Error",
        description: "Failed to load exam. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleTimeUp = useCallback(() => {
    toast({
      title: "Time's up!",
      description: "Your exam is being submitted automatically.",
    });
    handleSubmitExam();
  }, []);

  const handleSubmitExam = async () => {
    if (!exam) return;
    setIsSubmitting(true);
    setShowEndDialog(false);
    setShowMarkingProgress(true);

    try {
      // Save all answers
      for (const question of questions) {
        const answerText = answers[question.id] || "";
        const imageUrl = paperImages[question.page_number] || null;

        const { data: existing } = await supabase
          .from("mock_exam_answers")
          .select("id")
          .eq("exam_id", examId)
          .eq("question_id", question.id)
          .maybeSingle();

        if (existing) {
          await supabase
            .from("mock_exam_answers")
            .update({
              answer_text: answerText,
              answer_image_url: imageUrl
            } as any)
            .eq("id", existing.id);
        } else {
          await supabase
            .from("mock_exam_answers")
            .insert({
              exam_id: examId,
              question_id: question.id,
              answer_text: answerText,
              answer_image_url: imageUrl
            } as any);
        }
      }

      // Update exam status
      await supabase
        .from("mock_exams")
        .update({ status: "submitted", ended_at: new Date().toISOString() } as any)
        .eq("id", examId);

      // Start marking
      setMarkingProgress({ current: 0, total: questions.length, status: "Marking..." });

      const { error } = await supabase.functions.invoke('mark-mock-exam', {
        body: { examId }
      });

      if (error) throw error;

      // Poll for completion
      const pollInterval = setInterval(async () => {
        const { data: updatedExam } = await supabase
          .from("mock_exams")
          .select("status, marking_progress")
          .eq("id", examId)
          .single();

        if (updatedExam) {
          setMarkingProgress({
            current: updatedExam.marking_progress || 0,
            total: questions.length,
            status: updatedExam.status === "completed" ? "Complete!" : "Marking..."
          });

          if (updatedExam.status === "completed") {
            clearInterval(pollInterval);
            navigate(`/mock-exam-results/${examId}`);
          }
        }
      }, 2000);

      // Cleanup after 5 minutes max
      setTimeout(() => clearInterval(pollInterval), 300000);

    } catch (error) {
      console.error("Error submitting exam:", error);
      toast({
        title: "Error",
        description: "Failed to submit exam. Please try again.",
        variant: "destructive"
      });
      setShowMarkingProgress(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDrawingComplete = (questionId: string, dataUrl: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: dataUrl }));
  };

  const handlePhotoUpload = (pageNumber: number, dataUrl: string) => {
    setPaperImages(prev => ({ ...prev, [pageNumber]: dataUrl }));
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
            <AlertCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
            <p className="text-muted-foreground">Exam not found</p>
            <Button onClick={() => navigate("/dashboard")} className="mt-4">
              Go to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const endTime = new Date(new Date(exam.started_at).getTime() + exam.time_limit_minutes * 60000);
  const pages = [...new Set(questions.map(q => q.page_number))].sort((a, b) => a - b);
  const currentPageQuestions = questions.filter(q => q.page_number === currentPage);
  const currentPageTopic = currentPageQuestions[0]?.topic || "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="font-bold text-lg">{exam.topic_title}</h1>
            <p className="text-sm text-muted-foreground">{exam.total_marks} marks</p>
          </div>
          <div className="flex items-center gap-4">
            <MockExamTimer endTime={endTime} onTimeUp={handleTimeUp} />
            <Button
              variant="destructive"
              onClick={() => setShowEndDialog(true)}
              disabled={isSubmitting}
            >
              <StopCircle className="h-4 w-4 mr-2" />
              End Exam
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        {/* Page Tabs */}
        {pages.length > 1 && (
          <Tabs value={currentPage.toString()} onValueChange={(v) => setCurrentPage(parseInt(v))} className="mb-6">
            <TabsList className="w-full justify-start">
              {pages.map((page) => {
                const pageTopic = questions.find(q => q.page_number === page)?.topic || `Page ${page}`;
                return (
                  <TabsTrigger key={page} value={page.toString()} className="flex-1">
                    {pageTopic}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        )}

        {/* Paper mode - Photo upload for entire page */}
        {exam.submission_method === "paper" && (
          <Card className="mb-6 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Your Answers for {currentPageTopic || `Page ${currentPage}`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SimplePhotoUpload
                onPhotoCapture={(dataUrl) => handlePhotoUpload(currentPage, dataUrl)}
                currentPhotoUrl={paperImages[currentPage]}
              />
            </CardContent>
          </Card>
        )}

        {/* Questions */}
        <div className="space-y-6">
          {currentPageQuestions.map((question, index) => (
            <Card key={question.id} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Question {question.question_number}</CardTitle>
                  <Badge variant="secondary">{question.marks} mark{question.marks !== 1 ? 's' : ''}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                {/* Question text */}
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <MarkdownRenderer content={question.question_text} />
                </div>

                {/* Diagram */}
                {question.diagram_svg && (
                  <div className="bg-white dark:bg-muted rounded-lg p-4 border">
                    <div dangerouslySetInnerHTML={{ __html: question.diagram_svg }} />
                  </div>
                )}

                {/* Table */}
                {question.table_html && (
                  <div className="overflow-x-auto">
                    <div
                      className="prose prose-sm max-w-none dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: question.table_html }}
                    />
                  </div>
                )}

                {/* Answer input based on method */}
                {exam.submission_method === "keyboard" && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Answer:</label>
                    <Textarea
                      value={answers[question.id] || ""}
                      onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                      placeholder="Type your answer here..."
                      className="min-h-[150px]"
                    />
                  </div>
                )}

                {exam.submission_method === "stylus" && (
                  <div>
                    <label className="text-sm font-medium mb-2 block">Draw Your Answer:</label>
                    <SimpleDrawingCanvas
                      onSave={(dataUrl) => handleDrawingComplete(question.id, dataUrl)}
                      initialImage={answers[question.id]?.startsWith("data:") ? answers[question.id] : undefined}
                    />
                  </div>
                )}

                {exam.submission_method === "paper" && (
                  <div className="bg-muted/30 rounded-lg p-4 text-center text-muted-foreground">
                    Answer this question on paper. Upload your answers using the upload section above.
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous Page
          </Button>
          {currentPage === pages.length ? (
            <Button onClick={() => setShowEndDialog(true)} disabled={isSubmitting}>
              <Send className="h-4 w-4 mr-2" />
              Submit Exam
            </Button>
          ) : (
            <Button onClick={() => setCurrentPage(prev => Math.min(pages.length, prev + 1))}>
              Next Page
            </Button>
          )}
        </div>
      </div>

      {/* End Exam Dialog */}
      <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>End Exam?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to end this exam? Your answers will be submitted and marked.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Exam</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmitExam}>
              End & Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Marking Progress */}
      <MockExamProgress
        isOpen={showMarkingProgress}
        currentQuestion={markingProgress.current}
        totalQuestions={markingProgress.total}
        status={markingProgress.status}
      />
    </div>
  );
};

export default MockExam;
