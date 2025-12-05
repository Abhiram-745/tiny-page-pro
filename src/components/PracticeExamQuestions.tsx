import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, RefreshCw, Camera, Paintbrush, FileText, ArrowRight, Home } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import StepLoadingSpinner from "@/components/StepLoadingSpinner";
import MarkingAnimation from "@/components/MarkingAnimation";
import AnimatedMarkSchemeComparison from "@/components/AnimatedMarkSchemeComparison";
import { StarButton } from "@/components/StarButton";
import { PhotoUpload } from "@/components/PhotoUpload";
import { DrawingCanvas } from "@/components/DrawingCanvas";

interface PracticeExamQuestionsProps {
  sectionContent: string;
  sectionTitle: string;
  subsections?: Array<{ title: string; content: string }>;
  subject?: string; // Add subject prop
  moduleId?: string; // Add moduleId for economics 3-level structure
}

interface GeneratedQuestion {
  question: string;
  marks: number;
  expectedKeyPoints: string[];
  markscheme?: string;
  caseStudy?: string;
  questionType?: string;
}

interface MarkingPoint {
  markPoint: string;
  studentText: string | null;
  awarded: boolean;
  marks: number;
  explanation?: string;
  improvedSentence?: string | null;
}

interface AnswerFeedback {
  score: number;
  maxMarks: number;
  keyIdeasCovered: string[];
  keyIdeasMissed: string[];
  feedbackText: string;
  modelAnswer?: string;
  markscheme?: string;
  markingBreakdown?: MarkingPoint[];
}

const PracticeExamQuestions = ({ sectionContent, sectionTitle, subsections, subject, moduleId }: PracticeExamQuestionsProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<GeneratedQuestion | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const [submissionMethod, setSubmissionMethod] = useState<'answer' | 'photo' | 'whiteboard' | 'viewAnswers' | null>(null);
  const [showSelfAssessment, setShowSelfAssessment] = useState(false);
  const [selfAssessedScore, setSelfAssessedScore] = useState("");
  const [showNavigation, setShowNavigation] = useState(false);
  const [isQuestionStarred, setIsQuestionStarred] = useState(false);
  const [selectedMarks, setSelectedMarks] = useState<number>(4);
  const [selectedQuestionType, setSelectedQuestionType] = useState<string>("general");

  // Sanitize poorly formatted AI output (e.g., line breaks before state symbols like (g))
  const sanitizeQuestionText = (text: string) => {
    let t = text.replace(/\r\n/g, "\n");
    // Join accidental newlines before state symbols (aq), (g), (s), (l)
    t = t.replace(/\n\((aq|g|s|l)\)/gi, " ($1)");
    // Join broken lines around arrows
    t = t.replace(/([A-Za-z0-9])\s*\n\s*→/g, "$1 →");
    // Collapse excessive blank lines
    t = t.replace(/\n{2,}/g, "\n\n");
    return t;
  };

  // Use subsections if provided, otherwise fall back to section title
  const topics = subsections && subsections.length > 0 
    ? subsections.map(sub => sub.title)
    : [sectionTitle];

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleGenerateQuestion = async () => {
    if (selectedTopics.length === 0) {
      toast({
        title: "Select topics",
        description: "Please select at least one topic to generate questions about.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    setFeedback(null);
    setUserAnswer("");

    try {
      // Build focused study content based on selected topics
      let focusedContent: string;
      
      if (subsections && subsections.length > 0) {
        // Filter to only include content from selected subsections
        const selectedSubsections = subsections.filter(sub => selectedTopics.includes(sub.title));
        focusedContent = `${sectionTitle}\n\nFocus on these topics: ${selectedTopics.join(", ")}\n\n${selectedSubsections.map(sub => `## ${sub.title}\n\n${sub.content}`).join('\n\n')}`;
      } else {
        focusedContent = `${sectionTitle}\n\nFocus on these topics: ${selectedTopics.join(", ")}\n\n${sectionContent}`;
      }

      const { data, error } = await supabase.functions.invoke('generate-simple-questions', {
        body: {
          studyContent: focusedContent,
          numQuestions: 1,
          previousQuestions: previousQuestions,
          subject: subject || 'general',
          marks: selectedMarks, // Pass selected marks
          questionType: selectedQuestionType // Pass question type
        }
      });

      if (error) throw error;

      if (data?.questions && data.questions.length > 0) {
        const question = data.questions[0];
        setCurrentQuestion(question);
        setPreviousQuestions(prev => [...prev, question.question]);
      } else {
        throw new Error("No questions generated");
      }
    } catch (error) {
      console.error("Error generating question:", error);
      toast({
        title: "Error",
        description: "Failed to generate question. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!currentQuestion || !userAnswer.trim()) {
      toast({
        title: "Write an answer",
        description: "Please write your answer before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('mark-answer', {
        body: {
          question: currentQuestion.question,
          studentAnswer: userAnswer,
          expectedContent: currentQuestion.expectedKeyPoints.join('\n'),
          marks: currentQuestion.marks,
          markscheme: currentQuestion.markscheme,
          questionType: selectedQuestionType,
          hasImage: submissionMethod === 'photo' || submissionMethod === 'whiteboard'
        }
      });

      if (error) throw error;

      setFeedback({
        score: data.score || 0,
        maxMarks: currentQuestion.marks,
        keyIdeasCovered: data.keyIdeasCovered || [],
        keyIdeasMissed: data.keyIdeasMissed || [],
        feedbackText: data.feedback || data.feedbackText || "Answer submitted.",
        modelAnswer: data.modelAnswer,
        markscheme: data.markscheme || currentQuestion.markscheme,
        markingBreakdown: data.markingBreakdown || []
      });

      toast({
        title: "Answer marked!",
        description: `You scored ${data.score || 0} out of ${currentQuestion.marks} marks.`,
      });
    } catch (error) {
      console.error("Error marking answer:", error);
      toast({
        title: "Error",
        description: "Failed to mark answer. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewQuestion = (questionType?: 'blurt' | 'exam') => {
    setCurrentQuestion(null);
    setUserAnswer("");
    setFeedback(null);
    setSubmissionMethod(null);
    setShowSelfAssessment(false);
    setSelfAssessedScore("");
    setShowNavigation(false);
    setIsQuestionStarred(false);
    handleGenerateQuestion();
  };

  const handleToggleStarQuestion = async () => {
    if (!currentQuestion || !feedback) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Login required",
          description: "Please login to star questions",
          variant: "destructive"
        });
        return;
      }

      if (isQuestionStarred) {
        // Remove from starred (find by matching question text)
        const { error } = await supabase
          .from("starred_questions")
          .delete()
          .eq("user_id", user.id)
          .eq("question_text", currentQuestion.question);

        if (error) throw error;
        setIsQuestionStarred(false);
        toast({
          title: "Removed",
          description: "Question removed from starred"
        });
      } else {
        // Add to starred
        const { error } = await supabase
          .from("starred_questions")
          .insert({
            user_id: user.id,
            question_text: currentQuestion.question,
            question_type: "exam",
            marks: currentQuestion.marks,
            markscheme: feedback.markscheme || null,
            model_answer: feedback.modelAnswer || null,
            topic_slug: null,
            subsection_slug: null,
            subsection_title: sectionTitle || null,
            subject: subject || "chemistry"
          });

        if (error) throw error;
        setIsQuestionStarred(true);
        toast({
          title: "Starred!",
          description: "Question added to question bank!"
        });
      }
    } catch (error) {
      console.error("Error toggling star:", error);
      toast({
        title: "Error",
        description: "Failed to star question",
        variant: "destructive"
      });
    }
  };

  const handleGoToAnswers = () => {
    if (!currentQuestion) return;
    
    setFeedback({
      score: 0,
      maxMarks: currentQuestion.marks,
      keyIdeasCovered: [],
      keyIdeasMissed: [],
      feedbackText: "",
      modelAnswer: "Review the markscheme below to understand what was expected.",
      markscheme: currentQuestion.markscheme
    });
    setShowSelfAssessment(true);
  };

  const handleSelfAssessmentSubmit = () => {
    const score = parseInt(selfAssessedScore);
    if (isNaN(score) || score < 0 || score > (currentQuestion?.marks || 0)) {
      toast({
        title: "Invalid score",
        description: `Please enter a score between 0 and ${currentQuestion?.marks || 0}`,
        variant: "destructive"
      });
      return;
    }
    
    setShowNavigation(true);
    toast({
      title: "Score recorded",
      description: `You scored ${score} out of ${currentQuestion?.marks || 0} marks.`,
    });
  };

  const handleFinishSession = () => {
    const basePath = subject === 'physics' ? '/physics' : 
                     subject === 'product-design' ? '/product-design' : 
                     subject === 'economics' ? '/economics' : 
                     '';
    navigate(`${basePath}/sections`);
  };

  return (
    <Card className="mt-6 border-primary/20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 animate-fade-in card-hover">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <BookOpen className="h-6 w-6 text-primary" />
          Practice Exam Questions
        </CardTitle>
        <CardDescription>
          Select topics below and generate application-based exam questions to test your understanding
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Marks Selection */}
        <div>
          <h3 className="font-semibold mb-3">Select Question Length:</h3>
          <div className="flex gap-3 flex-wrap">
            <Button
              variant={selectedMarks === 3 ? "default" : "outline"}
              onClick={() => setSelectedMarks(3)}
              className="btn-press"
            >
              3-4 Marks
            </Button>
            <Button
              variant={selectedMarks === 6 ? "default" : "outline"}
              onClick={() => setSelectedMarks(6)}
              className="btn-press"
            >
              6 Marks
            </Button>
            <Button
              variant={selectedMarks === 8 ? "default" : "outline"}
              onClick={() => setSelectedMarks(8)}
              className="btn-press"
            >
              8 Marks
            </Button>
          </div>
        </div>

        {/* Question Type Selection for 6-mark questions */}
        {selectedMarks === 6 && (
          <div className="animate-fade-in">
            <h3 className="font-semibold mb-3">Select Question Type:</h3>
            <div className="flex gap-3 flex-wrap">
              <Button
                variant={selectedQuestionType === "general" ? "default" : "outline"}
                onClick={() => setSelectedQuestionType("general")}
                className="btn-press"
              >
                General Analysis
              </Button>
              <Button
                variant={selectedQuestionType === "diagram" ? "default" : "outline"}
                onClick={() => setSelectedQuestionType("diagram")}
                className="btn-press"
              >
                Diagram Analysis
              </Button>
              <Button
                variant={selectedQuestionType === "case-study" ? "default" : "outline"}
                onClick={() => setSelectedQuestionType("case-study")}
                className="btn-press"
              >
                Case Study Analysis
              </Button>
            </div>
          </div>
        )}

        {/* Topic Selection */}
        <div>
          <h3 className="font-semibold mb-3">Select Topics:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {topics.map((topic) => (
              <div key={topic} className="flex items-center space-x-2">
                <Checkbox
                  id={`topic-${topic}`}
                  checked={selectedTopics.includes(topic)}
                  onCheckedChange={() => toggleTopic(topic)}
                />
                <label
                  htmlFor={`topic-${topic}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {topic}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <div className="flex gap-2">
          <Button
            onClick={handleGenerateQuestion}
            disabled={isGenerating || selectedTopics.length === 0}
            className="flex-1 btn-press"
          >
            {isGenerating ? (
              <>
                <BookOpen className="mr-2 h-4 w-4" />
                Generating Question...
              </>
            ) : (
              <>
                <BookOpen className="mr-2 h-4 w-4" />
                Generate Question
              </>
            )}
          </Button>
          {currentQuestion && (
            <Button
              onClick={() => handleNewQuestion()}
              disabled={isGenerating}
              variant="outline"
              className="btn-press"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              New Question
            </Button>
          )}
        </div>

        {/* Loading State */}
        {isGenerating && !currentQuestion && (
          <StepLoadingSpinner />
        )}

        {/* Current Question Display */}
        {currentQuestion && (
          <Card className="bg-background/50 animate-slide-up-fade hover-lift">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Question</CardTitle>
                <Badge variant="secondary" className="animate-scale-in">{currentQuestion.marks} marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Case Study Display */}
              {currentQuestion.caseStudy && (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4 animate-fade-in">
                  <h4 className="font-semibold text-primary mb-2">📋 Case Study</h4>
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <MarkdownRenderer content={currentQuestion.caseStudy} />
                  </div>
                </div>
              )}
              
              <div className="prose prose-sm max-w-none dark:prose-invert">
                {/* Format question with parts (a), (b), (c) on separate lines */}
                {(() => {
                  const questionText = sanitizeQuestionText(currentQuestion.question);
                  
                  // Check if question has parts like (a), (b), (c)
                  const hasMultipleParts = /\([a-d]\)/i.test(questionText);
                  
                  if (hasMultipleParts) {
                    // Split by parts but keep the part labels
                    const parts = questionText.split(/(?=\([a-d]\))/i);
                    
                    return (
                      <div className="space-y-3">
                        {parts.map((part, idx) => {
                          const trimmedPart = part.trim();
                          if (!trimmedPart) return null;
                          
                          // Check if this part starts with a part label
                          const startsWithLabel = /^\([a-d]\)/i.test(trimmedPart);
                          
                          return (
                            <div key={idx} className={startsWithLabel ? "ml-4 stagger-" + (idx + 1) : ""}>
                              <MarkdownRenderer content={trimmedPart} />
                            </div>
                          );
                        })}
                      </div>
                    );
                  }
                  
                  // Single part question - render normally
                  return <MarkdownRenderer content={questionText} />;
                })()}
              </div>

              {/* Submission Method Selector */}
              {!feedback && !submissionMethod && (
                <div className="space-y-4 animate-fade-in">
                  <h4 className="font-semibold text-center">Choose submission method:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex-col gap-2 hover-lift btn-press stagger-1"
                      onClick={() => setSubmissionMethod('answer')}
                    >
                      <FileText className="h-6 w-6" />
                      <span className="text-sm">Submit Answer</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex-col gap-2 hover-lift btn-press stagger-2"
                      onClick={() => setSubmissionMethod('photo')}
                    >
                      <Camera className="h-6 w-6" />
                      <span className="text-sm">Take a Photo</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex-col gap-2 hover-lift btn-press stagger-3"
                      onClick={() => setSubmissionMethod('whiteboard')}
                    >
                      <Paintbrush className="h-6 w-6" />
                      <span className="text-sm">Whiteboard</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto py-4 flex-col gap-2 hover-lift btn-press stagger-4"
                      onClick={() => {
                        setSubmissionMethod('viewAnswers');
                        handleGoToAnswers();
                      }}
                    >
                      <BookOpen className="h-6 w-6" />
                      <span className="text-sm">Go to Answers</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* Answer Input for Submit Answer method */}
              {!feedback && submissionMethod === 'answer' && !isSubmitting && (
                <div className="animate-fade-in">
                  <Textarea
                    placeholder="Type your answer here..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="min-h-[200px] mb-4"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={() => setSubmissionMethod(null)}
                      variant="outline"
                      className="flex-1 btn-press"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmitAnswer}
                      disabled={isSubmitting || !userAnswer.trim()}
                      className="flex-1 btn-press"
                    >
                      Submit Answer
                    </Button>
                  </div>
                </div>
              )}

              {/* Marking Animation - Full screen takeover during marking */}
              {isSubmitting && (
                <div className="py-8">
                  <MarkingAnimation />
                </div>
              )}

              {/* Photo Upload */}
              {!feedback && submissionMethod === 'photo' && !isSubmitting && (
                <div className="space-y-4 animate-fade-in">
                  <PhotoUpload
                    studyContent={sectionContent}
                    questions={currentQuestion ? [currentQuestion.question] : []}
                    currentQuestion={currentQuestion?.question || ""}
                    topicId=""
                    subsectionId=""
                    subsectionTitle={sectionTitle}
                    questionType="exam"
                    marks={currentQuestion?.marks || selectedMarks}
                    subject={subject as any}
                    moduleId={moduleId}
                  />
                  <Button
                    onClick={() => setSubmissionMethod(null)}
                    variant="outline"
                    className="w-full btn-press"
                  >
                    Back to Methods
                  </Button>
                </div>
              )}

              {/* Whiteboard Drawing */}
              {!feedback && submissionMethod === 'whiteboard' && !isSubmitting && (
                <div className="space-y-4 animate-fade-in">
                  <DrawingCanvas
                    studyContent={sectionContent}
                    questions={currentQuestion ? [currentQuestion.question] : []}
                    currentQuestion={currentQuestion?.question || ""}
                    topicId=""
                    subsectionId=""
                    subsectionTitle={sectionTitle}
                    questionType="exam"
                    marks={currentQuestion?.marks || selectedMarks}
                    subject={subject as any}
                    moduleId={moduleId}
                  />
                  <Button
                    onClick={() => setSubmissionMethod(null)}
                    variant="outline"
                    className="w-full btn-press"
                  >
                    Back to Methods
                  </Button>
                </div>
              )}

              {/* Feedback Display */}
              {feedback && (
                <div className="space-y-4 mt-4 animate-slide-up-fade">
                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg animate-scale-in">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">Your Score:</span>
                      <Badge variant="default" className="text-lg px-4 py-1">
                        {feedback.score} / {feedback.maxMarks}
                      </Badge>
                    </div>
                    <StarButton
                      itemId={currentQuestion?.question || ""}
                      isStarred={isQuestionStarred}
                      onToggle={handleToggleStarQuestion}
                      showLabel
                    />
                  </div>

                  {/* Animated Side-by-Side Mark Scheme Comparison */}
                  {feedback.markingBreakdown && feedback.markingBreakdown.length > 0 && (
                    <AnimatedMarkSchemeComparison 
                      markingBreakdown={feedback.markingBreakdown}
                      studentAnswer={userAnswer}
                    />
                  )}

                  {/* Fallback key ideas display if no breakdown */}
                  {(!feedback.markingBreakdown || feedback.markingBreakdown.length === 0) && (
                    <>
                      {feedback.keyIdeasCovered.length > 0 && (
                        <div className="stagger-1">
                          <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                            ✓ Key Ideas Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {feedback.keyIdeasCovered.map((idea, idx) => (
                              <Badge key={idx} variant="outline" className="border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 animate-scale-in">
                                {idea}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {feedback.keyIdeasMissed.length > 0 && (
                        <div className="stagger-2">
                          <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">
                            ⚠ Key Ideas to Review:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {feedback.keyIdeasMissed.map((idea, idx) => (
                              <Badge key={idx} variant="outline" className="border-amber-600 text-amber-600 dark:border-amber-400 dark:text-amber-400 animate-scale-in">
                                {idea}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {userAnswer && (
                        <div className="text-sm text-muted-foreground p-3 bg-background rounded border">
                          <strong>Your Answer:</strong>
                          <p className="mt-2">{userAnswer}</p>
                        </div>
                      )}
                    </>
                  )}

                  <div className="p-4 bg-muted rounded-lg stagger-3">
                    <h4 className="font-semibold mb-2">Feedback:</h4>
                    <MarkdownRenderer content={feedback.feedbackText} />
                  </div>

                  {/* Always show Markscheme */}
                  {feedback.markscheme && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800 stagger-4 hover-lift">
                      <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">📋 Official Markscheme (AQA Style)</h4>
                      <MarkdownRenderer content={feedback.markscheme} />
                    </div>
                  )}

                  {/* Always show Model Answer */}
                  {feedback.modelAnswer && (
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800 stagger-5 hover-lift">
                      <h4 className="font-semibold mb-3 text-purple-900 dark:text-purple-100">✨ Model Answer</h4>
                      <MarkdownRenderer content={feedback.modelAnswer} />
                    </div>
                  )}

                  {/* Self-Assessment Section */}
                  {showSelfAssessment && !showNavigation && (
                    <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20 space-y-4">
                      <h4 className="font-semibold text-lg">📝 Self-Assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        After reviewing the markscheme above, how many marks did you get?
                      </p>
                      <div className="flex items-center gap-3">
                        <Input
                          type="number"
                          min="0"
                          max={currentQuestion?.marks || 0}
                          placeholder="0"
                          value={selfAssessedScore}
                          onChange={(e) => setSelfAssessedScore(e.target.value)}
                          className="w-24"
                        />
                        <span className="text-sm font-medium">/ {currentQuestion?.marks} marks</span>
                        <Button
                          onClick={handleSelfAssessmentSubmit}
                          disabled={!selfAssessedScore}
                          className="ml-auto"
                        >
                          Submit Score
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons After Self-Assessment */}
                  {showNavigation && (
                    <div className="space-y-3">
                      <div className="h-px bg-border my-4" />
                      <h4 className="font-semibold text-center mb-4">What would you like to do next?</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          variant="outline"
                          onClick={() => handleNewQuestion()}
                          className="h-auto py-3 flex-col gap-1"
                        >
                          <RefreshCw className="h-5 w-5" />
                          <span className="text-sm">Another Blurt Question</span>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleNewQuestion()}
                          className="h-auto py-3 flex-col gap-1"
                        >
                          <BookOpen className="h-5 w-5" />
                          <span className="text-sm">Another Exam Question</span>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.history.back()}
                          className="h-auto py-3 flex-col gap-1"
                        >
                          <ArrowRight className="h-5 w-5" />
                          <span className="text-sm">Next</span>
                        </Button>
                        <Button
                          variant="outline"
                          onClick={handleFinishSession}
                          className="h-auto py-3 flex-col gap-1"
                        >
                          <Home className="h-5 w-5" />
                          <span className="text-sm">Finish Session</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default PracticeExamQuestions;
