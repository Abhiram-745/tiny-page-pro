import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, PlayCircle, BookOpen } from "lucide-react";
import { physicsData, TopicSection, Module } from "@/data/physicsData";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import SectionContent from "@/components/SectionContent";
import PracticeExamQuestions from "@/components/PracticeExamQuestions";
import ColorLegend from "@/components/ColorLegend";

const PhysicsTopicView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [topic, setTopic] = useState<TopicSection | null>(null);
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [openModules, setOpenModules] = useState<string[]>([]);

  useEffect(() => {
    const foundTopic = physicsData.find((t) => t.id === id);
    setTopic(foundTopic || null);
    
    // Open first module by default if topic has modules
    if (foundTopic && foundTopic.modules && foundTopic.modules.length > 0) {
      setOpenModules([foundTopic.modules[0].id]);
      if (foundTopic.modules[0].subsections.length > 0) {
        setOpenSections([foundTopic.modules[0].subsections[0].id]);
      }
    } else if (foundTopic && foundTopic.status === "ready" && foundTopic.subsections.length > 0) {
      setOpenSections([foundTopic.subsections[0].id]);
    }
  }, [id]);

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
      navigate(`/physics/blur-practice/${id}/${moduleId}/${subsectionId}`);
    } else {
      navigate(`/physics/blur-practice/${id}/${subsectionId}`);
    }
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => navigate("/physics/sections")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Button>
          <Card className="mt-8">
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">Topic not found</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (topic.status === "coming_soon") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" onClick={() => navigate("/physics/sections")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Topics
          </Button>
          
          <div className="mt-8 text-center">
            <h1 className="text-4xl font-bold mb-4">{topic.title}</h1>
            <Card className="max-w-2xl mx-auto">
              <CardContent className="py-12">
                <p className="text-lg text-muted-foreground mb-6">
                  This topic is coming soon! We're working hard to bring you comprehensive study materials.
                </p>
                <Button onClick={() => navigate("/physics/sections")}>
                  Browse Other Topics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // Check if topic has modules
  const hasModules = topic.modules && topic.modules.length > 0;
  const totalSubsections = hasModules 
    ? topic.modules.reduce((acc, mod) => acc + mod.subsections.length, 0)
    : topic.subsections.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => navigate("/physics/sections")} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Topics
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{topic.title}</h1>
          <p className="text-muted-foreground">
            {hasModules 
              ? `${topic.modules!.length} module${topic.modules!.length !== 1 ? 's' : ''} • ${totalSubsections} subsection${totalSubsections !== 1 ? 's' : ''} available`
              : `${topic.subsections.length} subsection${topic.subsections.length !== 1 ? 's' : ''} available`
            }
          </p>
        </div>

        <ColorLegend />

        {/* Modules Section */}
        {hasModules && topic.modules!.map((module) => (
          <div key={module.id} className="mb-8">
            <Collapsible
              open={openModules.includes(module.id)}
              onOpenChange={() => toggleModule(module.id)}
            >
              <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <CollapsibleTrigger className="w-full">
                  <CardHeader className="hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-primary" />
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

        {/* Non-module subsections (for topics without modules) */}
        {!hasModules && topic.subsections.length > 0 && (
          <>
            {/* Practice Subsections Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Practice Subsections</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {topic.subsections.map((subsection) => (
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
                {topic.subsections.map((subsection) => (
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
              ? topic.modules!.flatMap(mod => mod.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return doc.body.textContent || '';
                })).join('\n\n')
              : topic.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return doc.body.textContent || '';
                }).join('\n\n')
          }
          sectionTitle={topic.title}
          subsections={
            hasModules
              ? topic.modules!.flatMap(mod => mod.subsections.map(sub => {
                  const parser = new DOMParser();
                  const doc = parser.parseFromString(sub.content_html, 'text/html');
                  return {
                    title: sub.title,
                    content: doc.body.textContent || ''
                  };
                }))
              : topic.subsections.map(sub => {
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

export default PhysicsTopicView;
