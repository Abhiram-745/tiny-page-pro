import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { drJekyllData } from "@/data/drJekyllData";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const DrJekyllBlurtPractice = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const section = drJekyllData.find(s => s.id === Number(id));

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

  if (!section) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Section Not Found</CardTitle>
            <CardDescription>The requested section could not be found.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/english/literature/dr-jekyll-mr-hyde/sections")}>
              Back to Sections
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleStartPractice = () => {
    setShowingInfo(false);
  };

  const handleSubmit = async () => {
    if (!answer.trim()) {
      toast.error("Please write your answer before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      const questionText = 
        currentQuestion === 1 ? `Analyse this quote: "${section.quote}"` :
        currentQuestion === 2 ? "State the themes shown by this quote" :
        `Recall the quote from this section`;

      const { data, error } = await supabase.functions.invoke("mark-english-literature", {
        body: {
          question: questionText,
          studentAnswer: answer,
          quote: section.quote,
          themes: section.themes,
          ao2Notes: section.ao2,
          ao3Notes: section.ao3
        }
      });

      if (error) throw error;

      setFeedback({
        question: questionText,
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
      navigate(`/english/literature/dr-jekyll-mr-hyde/topic/${section.id}`);
    }
  };

  if (showingInfo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button 
            variant="outline" 
            onClick={() => navigate(`/english/literature/dr-jekyll-mr-hyde/topic/${section.id}`)}
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
                <h3 className="text-xl font-semibold mb-2">Quote</h3>
                <p className="text-lg italic border-l-4 border-primary pl-4 py-2">
                  "{section.quote}"
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Themes</h3>
                <p className="text-muted-foreground">{section.themes}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">AO2 (Language / Structure / Effect)</h3>
                <div className="prose prose-sm max-w-none whitespace-pre-line text-muted-foreground">
                  {section.ao2}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">AO3 (Context)</h3>
                <p className="text-muted-foreground">{section.ao3}</p>
              </div>

              <Button onClick={handleStartPractice} className="w-full mt-6">
                Start Blurt Questions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const questionText = 
    currentQuestion === 1 ? `Analyse this quote: "${section.quote}"` :
    currentQuestion === 2 ? "State the themes shown by this quote" :
    "Recall the quote from this section";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/english/literature/dr-jekyll-mr-hyde/topic/${section.id}`)}
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
            <CardDescription>{questionText}</CardDescription>
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

export default DrJekyllBlurtPractice;
