import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, Trash2, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarkdownRenderer from "@/components/MarkdownRenderer";

interface StarredQuestion {
  id: string;
  question_text: string;
  question_type: string;
  marks: number;
  markscheme: string | null;
  model_answer: string | null;
  topic_slug: string | null;
  subsection_slug: string | null;
  subsection_title: string | null;
  subject: string | null;
  created_at: string;
}

const QuestionBank = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<StarredQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [filterType, setFilterType] = useState<"all" | "blurt" | "exam">("all");

  useEffect(() => {
    loadStarredQuestions();
  }, []);

  const loadStarredQuestions = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data, error } = await supabase
        .from("starred_questions")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setQuestions(data || []);
    } catch (error) {
      console.error("Error loading starred questions:", error);
      toast.error("Failed to load starred questions");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuestion = async (id: string) => {
    try {
      const { error } = await supabase
        .from("starred_questions")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setQuestions(prev => prev.filter(q => q.id !== id));
      toast.success("Question removed from starred");
    } catch (error) {
      console.error("Error deleting question:", error);
      toast.error("Failed to remove question");
    }
  };

  const toggleExpanded = (id: string) => {
    setExpandedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredQuestions = questions.filter(q => {
    if (filterType === "all") return true;
    return q.question_type === filterType;
  });

  const groupedBySubject = filteredQuestions.reduce((acc, q) => {
    const subject = q.subject || "Other";
    if (!acc[subject]) acc[subject] = [];
    acc[subject].push(q);
    return acc;
  }, {} as Record<string, StarredQuestion[]>);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading question bank...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-8">
      <div className="container mx-auto max-w-6xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6 hover-lift"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
          <div>
            <h1 className="text-4xl font-bold">Question Bank</h1>
            <p className="text-muted-foreground">
              Your starred questions for quick review
            </p>
          </div>
        </div>

        <Tabs value={filterType} onValueChange={(v) => setFilterType(v as any)} className="mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="all">All ({questions.length})</TabsTrigger>
            <TabsTrigger value="blurt">
              Blurt ({questions.filter(q => q.question_type === "blurt").length})
            </TabsTrigger>
            <TabsTrigger value="exam">
              Exam ({questions.filter(q => q.question_type === "exam").length})
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {filteredQuestions.length === 0 ? (
          <Card className="animate-fade-in">
            <CardContent className="p-12 text-center">
              <Star className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No starred questions yet. Star questions while practicing to add them here!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-slide-up">
            {Object.entries(groupedBySubject).map(([subject, subjectQuestions]) => (
              <div key={subject}>
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                  <Badge variant="secondary">{subjectQuestions.length}</Badge>
                </h2>

                <div className="space-y-4">
                  {subjectQuestions.map((question, idx) => {
                    const isExpanded = expandedQuestions.has(question.id);
                    
                    return (
                      <Card 
                        key={question.id} 
                        className="hover:shadow-md transition-all hover-lift border-border/50"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant={question.question_type === "blurt" ? "default" : "secondary"}>
                                  {question.question_type}
                                </Badge>
                                {question.marks && (
                                  <Badge variant="outline">{question.marks} marks</Badge>
                                )}
                                {question.subsection_title && (
                                  <span className="text-sm text-muted-foreground">
                                    {question.subsection_title}
                                  </span>
                                )}
                              </div>
                              <CardTitle className="text-lg">
                                <MarkdownRenderer content={question.question_text} />
                              </CardTitle>
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleExpanded(question.id)}
                              >
                                {isExpanded ? (
                                  <ChevronUp className="h-4 w-4" />
                                ) : (
                                  <ChevronDown className="h-4 w-4" />
                                )}
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteQuestion(question.id)}
                                className="text-destructive hover:text-destructive"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>

                        {isExpanded && (
                          <CardContent className="pt-0 space-y-4 animate-fade-in">
                            {question.markscheme && (
                              <div>
                                <h4 className="font-semibold text-sm mb-2 text-primary">Mark Scheme:</h4>
                                <div className="p-4 bg-muted/50 rounded-lg">
                                  <MarkdownRenderer content={question.markscheme} />
                                </div>
                              </div>
                            )}
                            
                            {question.model_answer && (
                              <div>
                                <h4 className="font-semibold text-sm mb-2 text-primary">Model Answer:</h4>
                                <div className="p-4 bg-muted/50 rounded-lg">
                                  <MarkdownRenderer content={question.model_answer} />
                                </div>
                              </div>
                            )}
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionBank;
