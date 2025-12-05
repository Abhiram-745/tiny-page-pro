import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";

const EnglishLiteratureChapters = () => {
  const navigate = useNavigate();

  const chapters = [
    {
      id: "dr-jekyll-mr-hyde",
      title: "Dr Jekyll and Mr Hyde",
      status: "ready",
      description: "Explore the classic tale of duality and human nature"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/english/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to English
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">English Literature</h1>
          <p className="text-muted-foreground">Select a text to study</p>
        </div>

        <div className="grid gap-6 max-w-4xl">
          {chapters.map((chapter) => (
            <Card
              key={chapter.id}
              className={`cursor-pointer hover:shadow-lg transition-all ${
                chapter.status !== "ready" ? 'opacity-60' : ''
              }`}
              onClick={() => {
                if (chapter.status === "ready") {
                  navigate(`/english/literature/${chapter.id}/sections`);
                }
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {chapter.status === "ready" ? "Ready" : "Coming Soon"}
                      </span>
                    </div>
                    <CardTitle className="mb-2">{chapter.title}</CardTitle>
                    <CardDescription>{chapter.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full"
                  variant={chapter.status === "ready" ? "default" : "outline"}
                  disabled={chapter.status !== "ready"}
                >
                  {chapter.status === "ready" ? "View Sections" : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishLiteratureChapters;
