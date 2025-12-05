import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle, BookOpen, ChevronDown } from "lucide-react";
import { biologyData, BiologyChapter, Module } from "@/data/biologyData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import SectionContent from "@/components/SectionContent";
import PracticeExamQuestions from "@/components/PracticeExamQuestions";
import ColorLegend from "@/components/ColorLegend";

const BiologySections = () => {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState<BiologyChapter | null>(null);
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [openModules, setOpenModules] = useState<string[]>([]);

  useEffect(() => {
    const foundChapter = biologyData.find((c) => c.id === chapterId);
    setChapter(foundChapter || null);
    
    // Open first module by default if chapter has modules
    if (foundChapter && foundChapter.modules && foundChapter.modules.length > 0) {
      setOpenModules([foundChapter.modules[0].id]);
      if (foundChapter.modules[0].subsections.length > 0) {
        setOpenSections([foundChapter.modules[0].subsections[0].id]);
      }
    } else if (foundChapter && foundChapter.status === "ready" && foundChapter.subsections.length > 0) {
      setOpenSections([foundChapter.subsections[0].id]);
    }
  }, [chapterId]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleModule = (moduleId: string) => {
    setOpenModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const startSubsectionPractice = (subsectionId: string, moduleId?: string) => {
    if (moduleId) {
      navigate(`/biology/blur-practice/${chapterId}/${moduleId}/${subsectionId}`);
    } else {
      navigate(`/biology/blur-practice/${chapterId}/${subsectionId}`);
    }
  };

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => navigate("/biology")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Button>
          <Card className="mt-8">
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Chapter not found</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (chapter.status === "coming_soon") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => navigate("/biology")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Button>
          
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-bold mb-4">{chapter.title}</h1>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="py-12">
                <p className="text-lg text-muted-foreground mb-6">
                  This chapter is coming soon! We're working hard to bring you comprehensive study materials.
                </p>
                <Button onClick={() => navigate("/biology")}>
                  Browse Other Topics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Check if chapter has modules
  const hasModules = chapter.modules && chapter.modules.length > 0;
  const totalSubsections = hasModules 
    ? chapter.modules.reduce((acc, mod) => acc + mod.subsections.length, 0)
    : chapter.subsections.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/biology")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Topics
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{chapter.title}</h1>
          <p className="text-muted-foreground">
            {hasModules 
              ? `${chapter.modules!.length} module${chapter.modules!.length !== 1 ? 's' : ''} • ${totalSubsections} subsection${totalSubsections !== 1 ? 's' : ''} available`
              : `${chapter.subsections.length} subsection${chapter.subsections.length !== 1 ? 's' : ''} available`
            }
          </p>
        </div>

        <ColorLegend />

        {/* Modules Section */}
        {hasModules && chapter.modules!.map((module) => (
          <div key={module.id} className="mb-8">
            <Collapsible
              open={openModules.includes(module.id)}
              onOpenChange={() => toggleModule(module.id)}
            >
              <Card className="border-2 border-emerald-500/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/5">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-emerald-500/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-emerald-500" />
                        <div className="text-left">
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <CardDescription>
                            {module.subsections.length} subsection{module.subsections.length !== 1 ? 's' : ''} available
                          </CardDescription>
                        </div>
                      </div>
                      <ChevronDown
                        className={`h-6 w-6 transition-transform ${
                          openModules.includes(module.id) ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    {/* Practice Subsections Grid */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Practice Subsections</h3>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {module.subsections.map((subsection) => (
                          <Card key={subsection.id} className="hover:shadow-lg transition-all">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{subsection.title}</CardTitle>
                              <CardDescription>
                                {subsection.practice_items.length} practice question{subsection.practice_items.length !== 1 ? 's' : ''}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <Button
                                className="w-full"
                                size="sm"
                                onClick={() => startSubsectionPractice(subsection.id, module.id)}
                              >
                                <PlayCircle className="h-4 w-4 mr-2" />
                                Start Practice
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Full Study Notes */}
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
                                  <SectionContent html={subsection.content_html} />
                                </CardContent>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </div>
        ))}

        {/* Non-module subsections (for chapters without modules) */}
        {!hasModules && chapter.subsections.length > 0 && (
          <>
            {/* Practice Subsections Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Practice Subsections</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {chapter.subsections.map((subsection) => (
                  <Card key={subsection.id} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{subsection.title}</CardTitle>
                      <CardDescription>
                        {subsection.practice_items.length} practice question{subsection.practice_items.length !== 1 ? 's' : ''}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        className="w-full"
                        onClick={() => startSubsectionPractice(subsection.id)}
                      >
                        <PlayCircle className="h-4 w-4 mr-2" />
                        Start Practice
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Full Study Notes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Full Study Notes</h2>
              <div className="space-y-4">
                {chapter.subsections.map((subsection) => (
                  <Collapsible
                    key={subsection.id}
                    open={openSections.includes(subsection.id)}
                    onOpenChange={() => toggleSection(subsection.id)}
                  >
                    <Card>
                      <CollapsibleTrigger className="w-full">
                        <CardHeader className="hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-left">{subsection.title}</CardTitle>
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
                          <SectionContent html={subsection.content_html} />
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Practice Exam Questions */}
        <PracticeExamQuestions 
          sectionContent={
            hasModules
              ? chapter.modules!.flatMap(mod => mod.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return doc.body.textContent || '';
                })).join('\n\n')
              : chapter.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return doc.body.textContent || '';
                }).join('\n\n')
          }
          sectionTitle={chapter.title}
          subsections={
            hasModules
              ? chapter.modules!.flatMap(mod => mod.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return {
                    title: sub.title,
                    content: doc.body.textContent || ''
                  };
                }))
              : chapter.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return {
                    title: sub.title,
                    content: doc.body.textContent || ''
                  };
                })
          }
        />
      </div>
    </div>
  );
};

export default BiologySections;
