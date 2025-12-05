import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, GraduationCap, Star } from "lucide-react";
import { biologyData } from "@/data/biologyData";
import SectionContent from "@/components/SectionContent";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const BiologyTopicView = () => {
  const navigate = useNavigate();
  const { chapterId, topicId } = useParams();
  const { toast } = useToast();
  const [isStarred, setIsStarred] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // Find the chapter and topic
  const chapter = biologyData.find(t => t.id === chapterId);
  const topic = chapter?.subsections.find(s => s.id === topicId);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        // Check if this subsection is starred
        const { data } = await supabase
          .from('starred_subsections')
          .select('id')
          .eq('user_id', user.id)
          .eq('topic_slug', chapterId)
          .eq('subsection_slug', topicId)
          .eq('subject', 'biology')
          .maybeSingle();
        
        setIsStarred(!!data);
      }
    };
    checkUser();
  }, [chapterId, topicId]);

  const toggleStar = async () => {
    if (!userId || !topic) return;

    if (isStarred) {
      await supabase
        .from('starred_subsections')
        .delete()
        .eq('user_id', userId)
        .eq('topic_slug', chapterId)
        .eq('subsection_slug', topicId)
        .eq('subject', 'biology');
      
      setIsStarred(false);
      toast({ title: "Removed from starred" });
    } else {
      await supabase
        .from('starred_subsections')
        .insert({
          user_id: userId,
          topic_slug: chapterId || '',
          subsection_slug: topicId || '',
          subsection_title: topic.title,
          subject: 'biology'
        });
      
      setIsStarred(true);
      toast({ title: "Added to starred" });
    }
  };

  if (!chapter || !topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Topic not found</h1>
          <Button onClick={() => navigate("/biology")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Biology
          </Button>
        </div>
      </div>
    );
  }

  const handleStartPractice = () => {
    navigate(`/blur-practice?subject=biology&topic=${chapterId}&subsection=${topicId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate(`/biology/${chapterId}`)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{topic.title}</h1>
              <p className="text-muted-foreground">{chapter.title}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleStar}
            className={isStarred ? "text-yellow-500" : "text-muted-foreground"}
          >
            <Star className={`h-5 w-5 ${isStarred ? "fill-current" : ""}`} />
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-8">
          <Button onClick={handleStartPractice} className="bg-emerald-600 hover:bg-emerald-700">
            <GraduationCap className="h-4 w-4 mr-2" />
            Practice Questions
          </Button>
        </div>

        {/* Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-600" />
              Study Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SectionContent html={topic.content_html} />
          </CardContent>
        </Card>

        {/* Practice Items Preview */}
        {topic.practice_items.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Practice Questions ({topic.practice_items.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topic.practice_items.slice(0, 3).map((item, index) => (
                  <div key={item.id} className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm font-medium">{index + 1}. {item.prompt_template}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded">
                        {item.marks} marks
                      </span>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {item.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {topic.practice_items.length > 3 && (
                <p className="text-sm text-muted-foreground mt-3">
                  + {topic.practice_items.length - 3} more questions
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BiologyTopicView;
