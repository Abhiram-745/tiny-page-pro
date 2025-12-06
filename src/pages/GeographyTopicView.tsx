import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen } from "lucide-react";
import { geographyData } from "@/data/geographyData";
import MockExamSetup from "@/components/MockExamSetup";
import { AITutorToggle } from "@/components/AITutorToggle";
import { AITutorChat } from "@/components/AITutorChat";
import { cn } from "@/lib/utils";

const GeographyTopicView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const section = geographyData.find(s => s.id === Number(id));
  const [isAITutorEnabled, setIsAITutorEnabled] = useState(false);
  const [selectedText, setSelectedText] = useState("");

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

  const studyContent = section.content + "\n\nKey Points:\n" + section.keyPoints.join("\n");

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection && !selection.isCollapsed) {
      const text = selection.toString().trim();
      if (text.length > 3) {
        setSelectedText(text);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className={cn(
        "flex transition-all duration-300",
        isAITutorEnabled ? "flex-row" : "flex-col"
      )}>
        {/* AI Chat Panel - Left side when enabled */}
        {isAITutorEnabled && (
          <div className="w-[320px] h-screen sticky top-0 flex-shrink-0 border-r">
            <AITutorChat 
              studyContent={studyContent} 
              selectedText={selectedText}
              onClearSelection={() => setSelectedText("")}
            />
          </div>
        )}

        {/* Main Content */}
        <div className={cn(
          "flex-1 min-h-screen",
          isAITutorEnabled ? "pr-16" : ""
        )}>
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* AI Tutor Toggle */}
            <div className="mb-6">
              <AITutorToggle 
                isEnabled={isAITutorEnabled} 
                onToggle={setIsAITutorEnabled} 
              />
            </div>

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
                  {isAITutorEnabled && (
                    <span className="text-xs bg-violet-500/10 text-violet-600 px-2 py-1 rounded-full ml-2">
                      Select text to ask AI
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6" onMouseUp={isAITutorEnabled ? handleTextSelect : undefined}>
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

            {/* Mock Exams */}
            <MockExamSetup
              topicTitle={section.title}
              subsections={[{
                title: section.title,
                content: section.content
              }]}
              subject="geography"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographyTopicView;
