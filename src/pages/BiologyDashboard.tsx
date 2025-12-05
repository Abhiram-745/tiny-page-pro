import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, CheckCircle, Clock } from "lucide-react";
import { biologyData } from "@/data/biologyData";

const BiologyDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = biologyData.filter((chapter) =>
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to get display count for modules vs subsections
  const getModuleCount = (chapter: typeof biologyData[0]) => {
    if (chapter.modules && chapter.modules.length > 0) {
      return `${chapter.modules.length} module${chapter.modules.length !== 1 ? 's' : ''}`;
    }
    return `${chapter.subsections.length} subsection${chapter.subsections.length !== 1 ? 's' : ''} available`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-4xl font-bold mb-2">Biology Topics</h1>
            <p className="text-muted-foreground">GCSE AQA Biology Specification</p>
          </div>
        </div>

        <div className="mb-6 relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search topics..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredChapters.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">No topics found matching your search.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredChapters.map((chapter) => (
              <Card
                key={chapter.id}
                className={`cursor-pointer hover:shadow-lg transition-all ${
                  chapter.status === "coming_soon" ? "opacity-75" : ""
                }`}
                onClick={() => {
                  if (chapter.status === "ready") {
                    navigate(`/biology/${chapter.id}`);
                  }
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{chapter.title}</CardTitle>
                    {chapter.status === "ready" ? (
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    )}
                  </div>
                  <CardDescription>
                    {chapter.status === "ready" 
                      ? getModuleCount(chapter)
                      : "Not Available"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    variant={chapter.status === "ready" ? "default" : "outline"}
                    disabled={chapter.status === "coming_soon"}
                  >
                    {chapter.status === "ready" ? "Start Learning" : "Not Available"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BiologyDashboard;
