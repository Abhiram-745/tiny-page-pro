import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Brain } from "lucide-react";
import { drJekyllData } from "@/data/drJekyllData";

const DrJekyllTopicView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const section = drJekyllData.find(s => s.id === Number(id));

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <Button 
          variant="outline" 
          onClick={() => navigate("/english/literature/dr-jekyll-mr-hyde/sections")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sections
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{section.title}</h1>
          <p className="text-muted-foreground">Section {section.id} of 15</p>
        </div>

        {/* Blurt Practice Button */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Practice This Section
            </CardTitle>
            <CardDescription>
              Test your understanding with blurt questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate(`/english/literature/dr-jekyll-mr-hyde/blurt/${section.id}`)}
              className="w-full"
            >
              Start Blurt Practice
            </Button>
          </CardContent>
        </Card>

        {/* Notes Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Study Notes
            </CardTitle>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DrJekyllTopicView;
