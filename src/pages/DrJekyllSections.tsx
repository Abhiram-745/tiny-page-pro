import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { drJekyllData } from "@/data/drJekyllData";

const DrJekyllSections = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/english/literature/chapters")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Chapters
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Dr Jekyll and Mr Hyde</h1>
          <p className="text-muted-foreground">Select a section to study</p>
        </div>

        <div className="grid gap-4 max-w-4xl">
          {drJekyllData.map((section) => (
            <Card
              key={section.id}
              className="cursor-pointer hover:shadow-lg transition-all"
              onClick={() => navigate(`/english/literature/dr-jekyll-mr-hyde/topic/${section.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        Section {section.id}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrJekyllSections;
