import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { geographyData } from "@/data/geographyData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const GeographyBlurtPractice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const section = geographyData.find(s => s.id === Number(id));

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer, setAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ 
    question: string; 
    answer: string; 
    strengths: string;
    improvements: string;
    modelAnswer: string;
  } | null>(null);
  const [showingInfo, setShowingInfo] = useState(true);
  const [questions, setQuestions] = useState<Array<{ question: string; guidance: string }>>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);

  // Fallback call in case the default client points to a stale backend
  const FUNCTIONS_FALLBACK_URL = 'https://oayqopwuvmqliknccwur.supabase.co/functions/v1';
  const PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

  const invokeFunction = async (name: string, body: any): Promise<{ data: any }> => {
    try {
      const { data, error } = await supabase.functions.invoke(name, { body });
      if (error) throw error;
      return { data };
    } catch (err: any) {
      const msg = err?.message || '';
      const shouldFallback = msg.includes('Failed to send a request to the Edge Function') || msg.includes('Failed to fetch');
      if (!shouldFallback) throw err;

      // Direct fetch to the correct backend project (public function)
      const resp = await fetch(`${FUNCTIONS_FALLBACK_URL}/${name}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': PUBLISHABLE_KEY,
        },
        body: JSON.stringify(body),
      });
      if (!resp.ok) {
        const t = await resp.text();
        throw new Error(`Fallback fetch failed: ${resp.status} ${t}`);
      }
      const data = await resp.json();
      return { data };
    }
  };

  if (!section) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Section Not Found</CardTitle>
            <CardDescription>The requested section could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/geography/living-world/sections")}>
              Back to Sections
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleStartPractice = async () => {
    setIsLoadingQuestions(true);
    
    try {
      const { data } = await invokeFunction("generate-geography-questions", {
          title: section.title,
          topic: section.topic,
          content: section.content,
          keyPoints: section.keyPoints
      });

      if (data.questions && data.questions.length === 3) {
        setQuestions(data.questions);
        setShowingInfo(false);
      } else {
        throw new Error("Invalid questions format");
      }
    } catch (error: any) {
      console.error("Error generating questions:", error);
      
      // Show specific error message if available
      const errorMessage = error?.message || error?.error || "Failed to generate questions. Please try again.";
      
      if (errorMessage.includes("Rate limits exceeded")) {
        toast.error("Rate limit reached. Please wait a moment and try again.");
      } else if (errorMessage.includes("Insufficient OpenAI credits")) {
        toast.error("Insufficient API credits. Please check your OpenAI account.");
      } else if (errorMessage.includes("Invalid OpenAI API key")) {
        toast.error("API key configuration issue. Please contact support.");
      } else {
        toast.error(errorMessage);
      }
    } finally {
      setIsLoadingQuestions(false);
    }
  };

  const handleSubmit = async () => {
    if (!answer.trim()) {
      toast.error("Please write your answer before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      const currentQ = questions[currentQuestion - 1];
      
      const { data } = await invokeFunction("mark-english-literature", {
        question: currentQ.question,
        studentAnswer: answer,
        quote: section.title,
        themes: section.topic,
        ao2Notes: `${section.content}\n\nGuidance: ${currentQ.guidance}`,
        ao3Notes: section.keyPoints.join("\n")
      });

      setFeedback({
        question: currentQ.question,
        answer: answer,
        strengths: data.strengths,
        improvements: data.improvements,
        modelAnswer: data.modelAnswer
      });
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast.error("Failed to mark answer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
      setFeedback(null);
    } else {
      toast.success("Blurt practice complete!");
      navigate(`/geography/living-world/topic/${section.id}`);
    }
  };

  if (showingInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button 
            variant="outline" 
            onClick={() => navigate(`/geography/living-world/topic/${section.id}`)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Section
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Study Information
              </CardTitle>
              <CardDescription>Review these notes before starting the practice</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{section.topic}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Content</h3>
                <div className="prose prose-sm max-w-none whitespace-pre-line text-muted-foreground">
                  {section.content}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Key Points</h3>
                <ul className="space-y-2">
                  {section.keyPoints.map((point, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                onClick={handleStartPractice} 
                className="w-full mt-6"
                disabled={isLoadingQuestions}
              >
                {isLoadingQuestions ? "Generating Questions..." : "Start Blurt Questions"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return null; // Questions not loaded yet
  }

  const currentQ = questions[currentQuestion - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/geography/living-world/topic/${section.id}`)}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Section
        </Button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{section.title}</h1>
          <p className="text-muted-foreground">Question {currentQuestion} of 3</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Question {currentQuestion}</CardTitle>
            <CardDescription className="whitespace-pre-line">{currentQ.question}</CardDescription>
            {currentQ.guidance && (
              <p className="text-sm text-muted-foreground mt-2 italic">
                💡 Tip: {currentQ.guidance}
              </p>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Write your answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="min-h-[200px]"
              disabled={feedback !== null}
            />
            
            {!feedback && (
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Marking..." : "Submit Answer"}
              </Button>
            )}
          </CardContent>
        </Card>

        {feedback && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Your Answer:</h3>
                <p className="text-muted-foreground whitespace-pre-line">{feedback.answer}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-green-600">✅ Strengths:</h3>
                <p className="text-muted-foreground whitespace-pre-line">{feedback.strengths}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-amber-600">⚠️ Areas to Improve:</h3>
                <p className="text-muted-foreground whitespace-pre-line">{feedback.improvements}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-blue-600">📝 Model Answer:</h3>
                <p className="text-muted-foreground whitespace-pre-line">{feedback.modelAnswer}</p>
              </div>

              <Button onClick={handleNextQuestion} className="w-full">
                {currentQuestion < 3 ? "Next Question" : "Finish Practice"}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GeographyBlurtPractice;
