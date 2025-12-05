import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { getEconomicsChapterById, getEconomicsModuleById, getEconomicsSubsectionById } from "@/data/economicsData";
import SectionContent from "@/components/SectionContent";
import PracticeExamQuestions from "@/components/PracticeExamQuestions";
import { AIChatbot } from "../components/AIChatbot";

const EconomicsTopicView = () => {
  const navigate = useNavigate();
  const { chapterId, moduleId, subsectionId } = useParams();

  const chapter = getEconomicsChapterById(chapterId || "");
  const module = getEconomicsModuleById(chapterId || "", moduleId || "");
  const subsection = getEconomicsSubsectionById(chapterId || "", moduleId || "", subsectionId || "");

  if (!chapter || !module || !subsection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
          <Button onClick={() => navigate("/economics/chapters")}>
            Back to Chapters
          </Button>
        </div>
      </div>
    );
  }

  // Get all subsections in order for navigation
  const allSubsections = module.subsections;
  const currentIndex = allSubsections.findIndex(s => s.id === subsectionId);
  const prevSubsection = currentIndex > 0 ? allSubsections[currentIndex - 1] : null;
  const nextSubsection = currentIndex < allSubsections.length - 1 ? allSubsections[currentIndex + 1] : null;

  // Prepare content for practice questions
  const practiceContent = subsection.content;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-500/5 to-teal-500/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(`/economics/sections/${chapterId}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to {chapter.title}
          </Button>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>{chapter.title}</span>
            <span>•</span>
            <span>{module.title}</span>
          </div>
          <h1 className="text-2xl font-bold">{subsection.title}</h1>
        </div>

        <Tabs defaultValue="learn" className="space-y-6">
          <TabsList className="bg-emerald-500/10">
            <TabsTrigger value="learn" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <BookOpen className="h-4 w-4 mr-2" />
              Learn
            </TabsTrigger>
            <TabsTrigger value="practice" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <HelpCircle className="h-4 w-4 mr-2" />
              Practice
            </TabsTrigger>
          </TabsList>

          <TabsContent value="learn" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <SectionContent html={subsection.content} />
              </CardContent>
            </Card>

            {/* Navigation between subsections */}
            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                onClick={() => {
                  if (prevSubsection) {
                    navigate(`/economics/topic/${chapterId}/${moduleId}/${prevSubsection.id}`);
                  }
                }}
                disabled={!prevSubsection}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (nextSubsection) {
                    navigate(`/economics/topic/${chapterId}/${moduleId}/${nextSubsection.id}`);
                  }
                }}
                disabled={!nextSubsection}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="practice">
            <PracticeExamQuestions
              sectionContent={practiceContent}
              sectionTitle={subsection.title}
              subject="economics"
              moduleId={moduleId}
            />
          </TabsContent>
        </Tabs>

        {/* AI Chatbot */}
        <AIChatbot studyContent={practiceContent} />
      </div>
    </div>
  );
};

export default EconomicsTopicView;
