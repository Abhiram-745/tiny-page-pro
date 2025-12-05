import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen } from "lucide-react";
import { geographyData } from "@/data/geographyData";

const GeographyTopicView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const section = geographyData.find(s => s.id === Number(id));

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button 
          variant="outline" 
          onClick={() => navigate("/geography/living-world/sections")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sections
        </Button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{section.title}</h1>
          <p className="text-muted-foreground">{section.topic}</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Practice This Section</CardTitle>
            <CardDescription>Test your knowledge with AI-powered feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate(`/geography/living-world/blurt/${section.id}`)}
              className="w-full"
            >
              Start Blurt Practice
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Full Study Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Content</h3>
              <div className="prose prose-sm max-w-none whitespace-pre-line text-muted-foreground">
                {section.content}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Key Points</h3>
              <ul className="space-y-2">
                {section.keyPoints.map((point, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GeographyTopicView;
