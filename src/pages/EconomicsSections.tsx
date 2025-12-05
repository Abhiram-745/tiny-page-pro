import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, ChevronDown, PlayCircle, Lock } from "lucide-react";
import { getEconomicsChapterById } from "@/data/economicsData";
import SectionContent from "@/components/SectionContent";
import PracticeExamQuestions from "@/components/PracticeExamQuestions";
import ColorLegend from "@/components/ColorLegend";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const EconomicsSections = () => {
  const navigate = useNavigate();
  const { chapterId } = useParams();
  const [openModules, setOpenModules] = useState<string[]>([]);
  const [openSections, setOpenSections] = useState<string[]>([]);

  const chapter = getEconomicsChapterById(chapterId || "");

  useEffect(() => {
    if (chapter && chapter.modules.length > 0) {
      const firstReadyModule = chapter.modules.find(m => m.status === "ready");
      if (firstReadyModule) {
        setOpenModules([firstReadyModule.id]);
        if (firstReadyModule.subsections.length > 0) {
          setOpenSections([firstReadyModule.subsections[0].id]);
        }
      }
    }
  }, [chapter]);

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const startSubsectionPractice = (moduleId: string, subsectionId: string) => {
    navigate(`/economics/blur-practice/${chapterId}/${moduleId}/${subsectionId}`);
  };

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" data-testid="text-not-found">Chapter not found</h1>
          <Button onClick={() => navigate("/economics/chapters")} data-testid="button-back-chapters">
            Back to Chapters
          </Button>
        </div>
      </div>
    );
  }

  const totalSubsections = chapter.modules.reduce((acc, mod) => acc + mod.subsections.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-500/5 to-teal-500/5">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/economics/chapters")}
          className="mb-6"
          data-testid="button-back"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Chapters
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl">
              {chapter.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold" data-testid="text-chapter-title">{chapter.title}</h1>
              <p className="text-muted-foreground" data-testid="text-chapter-description">
                {chapter.modules.length} module{chapter.modules.length !== 1 ? 's' : ''} • {totalSubsections} subsection{totalSubsections !== 1 ? 's' : ''} available
              </p>
            </div>
          </div>
        </div>

        <ColorLegend />

        {chapter.modules.map((module) => (
          <div key={module.id} className="mb-8">
            <Collapsible
              open={openModules.includes(module.id)}
              onOpenChange={() => toggleModule(module.id)}
            >
              <Card className="border-2 border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/5">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-emerald-500/5 transition-colors">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {module.status === "ready" ? (
                          <BookOpen className="h-6 w-6 text-emerald-600" />
                        ) : (
                          <Lock className="h-6 w-6 text-muted-foreground" />
                        )}
                        <div className="text-left">
                          <CardTitle className="text-xl" data-testid={`text-module-title-${module.id}`}>{module.title}</CardTitle>
                          <CardDescription>
                            {module.subsections.length} subsection{module.subsections.length !== 1 ? 's' : ''} available
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={module.status === "ready" ? "default" : "secondary"}
                          className={module.status === "ready" ? "bg-emerald-500" : ""}
                        >
                          {module.status === "ready" ? "Ready" : "Coming Soon"}
                        </Badge>
                        <ChevronDown
                          className={`h-6 w-6 transition-transform ${
                            openModules.includes(module.id) ? "transform rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    {module.status === "ready" ? (
                      <>
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold mb-4">Practice Subsections</h3>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {module.subsections.map((subsection) => (
                              <Card key={subsection.id} className="hover:shadow-lg transition-all" data-testid={`card-subsection-${subsection.id}`}>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base" data-testid={`text-subsection-title-${subsection.id}`}>{subsection.title}</CardTitle>
                                  <CardDescription>
                                    {subsection.practiceItems?.length || 0} practice question{(subsection.practiceItems?.length || 0) !== 1 ? 's' : ''}
                                  </CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <Button
                                    className="w-full bg-emerald-500 hover:bg-emerald-600"
                                    size="sm"
                                    onClick={() => startSubsectionPractice(module.id, subsection.id)}
                                    data-testid={`button-start-practice-${subsection.id}`}
                                  >
                                    <PlayCircle className="h-4 w-4 mr-2" />
                                    Start Practice
                                  </Button>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-4">Full Study Notes</h3>
                          <div className="space-y-3">
                            {module.subsections.map((subsection) => (
                              <Collapsible
                                key={subsection.id}
                                open={openSections.includes(subsection.id)}
                                onOpenChange={() => toggleSection(subsection.id)}
                              >
                                <Card>
                                  <CollapsibleTrigger className="w-full">
                                    <CardHeader className="py-3 hover:bg-muted/50 transition-colors">
                                      <div className="flex items-center justify-between">
                                        <CardTitle className="text-left text-base">{subsection.title}</CardTitle>
                                        <ChevronDown
                                          className={`h-5 w-5 transition-transform ${
                                            openSections.includes(subsection.id) ? "transform rotate-180" : ""
                                          }`}
                                        />
                                      </div>
                                    </CardHeader>
                                  </CollapsibleTrigger>
                                  <CollapsibleContent>
                                    <CardContent className="pt-0">
                                      <SectionContent html={subsection.content} />
                                    </CardContent>
                                  </CollapsibleContent>
                                </Card>
                              </Collapsible>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        <Lock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>This module is coming soon. Check back later!</p>
                      </div>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        ))}

        <PracticeExamQuestions
          sectionContent={
            chapter.modules.flatMap(mod =>
              mod.status === "ready"
                ? mod.subsections.map(sub => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(sub.content, 'text/html');
                    return doc.body.textContent || '';
                  })
                : []
            ).join('\n\n')
          }
          sectionTitle={chapter.title}
          subject="economics"
          subsections={
            chapter.modules.flatMap(mod =>
              mod.status === "ready"
                ? mod.subsections.map(sub => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(sub.content, 'text/html');
                    return {
                      title: sub.title,
                      content: doc.body.textContent || ''
                    };
                  })
                : []
            )
          }
        />
      </div>
    </div>
  );
};

export default EconomicsSections;
