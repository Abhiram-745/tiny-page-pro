import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { economicsData } from "@/data/economicsData";

const EconomicsChapters = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-emerald-500/5 to-teal-500/5">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/subjects")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Subjects
        </Button>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <span className="text-2xl">💹</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">OCR GCSE Economics</h1>
              <p className="text-muted-foreground">Select a chapter to begin revising</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {economicsData.map((chapter) => {
            const totalSubsections = chapter.modules.reduce(
              (acc, module) => acc + module.subsections.length,
              0
            );
            const readyModules = chapter.modules.filter(m => m.status === "ready").length;

            return (
              <Card
                key={chapter.id}
                className="cursor-pointer hover:shadow-lg transition-all hover:border-emerald-500/50 group"
                onClick={() => navigate(`/economics/sections/${chapter.id}`)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-2xl">
                      {chapter.icon}
                    </div>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600">
                      {readyModules}/{chapter.modules.length} modules
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mt-3 group-hover:text-emerald-600 transition-colors">
                    {chapter.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {chapter.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{totalSubsections} topics</span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EconomicsChapters;
