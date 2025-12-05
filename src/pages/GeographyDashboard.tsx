import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Globe } from "lucide-react";

const GeographyDashboard = () => {
  const navigate = useNavigate();

  const chapters = [
    {
      id: "living-world",
      title: "The Living World",
      description: "Tropical Rainforests - The Amazon Basin",
      sections: 6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button 
          variant="outline" 
          onClick={() => navigate("/subjects")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Globe className="h-8 w-8" />
            Geography
          </h1>
          <p className="text-muted-foreground">
            Explore geographical concepts, ecosystems, and environmental studies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <Card 
              key={chapter.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/geography/${chapter.id}/sections`)}
            >
              <CardHeader>
                <CardTitle>{chapter.title}</CardTitle>
                <CardDescription>{chapter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {chapter.sections} sections available
                </p>
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

export default GeographyDashboard;
