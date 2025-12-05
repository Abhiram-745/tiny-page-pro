import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Leaf } from "lucide-react";
import { geographyData } from "@/data/geographyData";

const GeographyLivingWorldSections = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button 
          variant="outline" 
          onClick={() => navigate("/geography")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Geography
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Leaf className="h-8 w-8" />
            The Living World
          </h1>
          <p className="text-muted-foreground">
            Tropical Rainforests - The Amazon Basin
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {geographyData.map((section) => (
            <Card 
              key={section.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/geography/living-world/topic/${section.id}`)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
                <CardDescription className="text-sm">
                  Section {section.id} of {geographyData.length}
                </CardDescription>
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

export default GeographyLivingWorldSections;
