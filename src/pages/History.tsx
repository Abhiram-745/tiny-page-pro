import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { getTopicsForSubject } from "@/constants/subjectTopics";

interface HistoryItem {
  id: string;
  score: number;
  created_at: string;
  title: string;
  spec_tag: string;
  type: "submission" | "practice";
  subject?: string;
}

const History = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get("subject");
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/auth");
        return;
      }

      // Fetch old submissions
      const { data: submissionsData } = await supabase
        .from("submissions")
        .select(`
          id,
          score,
          created_at,
          sections (
            title,
            spec_tag
          )
        `)
        .eq("user_id", user.id);

      // Fetch practice sessions
      const { data: practiceData } = await supabase
        .from("practice_sessions")
        .select("*")
        .eq("user_id", user.id);

      // Combine and normalize data
      const combined: HistoryItem[] = [];

      if (submissionsData) {
        submissionsData.forEach((sub: any) => {
          if (sub.sections) {
            combined.push({
              id: sub.id,
              score: Math.round((sub.score || 0)),
              created_at: sub.created_at,
              title: sub.sections.title,
              spec_tag: sub.sections.spec_tag,
              type: "submission",
            });
          }
        });
      }

      if (practiceData) {
        practiceData.forEach((session: any) => {
          combined.push({
            id: session.id,
            score: Math.round((session.overall_score / session.max_marks) * 100),
            created_at: session.created_at,
            title: session.subsection_title || "Practice Session",
            spec_tag: session.topic_slug || "practice",
            type: "practice",
            subject: session.topic_slug || undefined,
          });
        });
      }

      // Sort by date
      combined.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      // Filter by subject if specified
      let filtered = combined;
      if (subject) {
        const subjectTopics = getTopicsForSubject(subject);
        filtered = combined.filter(item => 
          item.subject && subjectTopics.includes(item.subject)
        );
      }

      setHistoryItems(filtered);
      setLoading(false);
    };

    fetchHistory();
  }, [navigate]);

  const getScoreTrend = (currentIndex: number) => {
    if (currentIndex === historyItems.length - 1) return null;

    const currentScore = historyItems[currentIndex].score || 0;
    const previousScore = historyItems[currentIndex + 1].score || 0;

    if (currentScore > previousScore) return "up";
    if (currentScore < previousScore) return "down";
    return "same";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading history...</div>
      </div>
    );
  }

  const averageScore =
    historyItems.length > 0
      ? Math.round(
          historyItems.reduce((acc, item) => acc + item.score, 0) / historyItems.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" onClick={() => navigate("/dashboard")} className="mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Your Revision History</h1>
          <p className="text-muted-foreground">Track your progress and improvement over time</p>
        </div>

        {historyItems.length > 0 && (
          <Card className="mb-6 animate-fade-in">
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary">{historyItems.length}</div>
                  <div className="text-sm text-muted-foreground">Total Attempts</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-3xl font-bold text-secondary">{averageScore}%</div>
                  <div className="text-sm text-muted-foreground">Average Score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {historyItems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground mb-4">No submissions yet. Start practicing!</p>
              <Button onClick={() => navigate("/sections")}>Browse Sections</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {historyItems.map((item, index) => {
              const trend = getScoreTrend(index);
              const score = item.score;

              return (
                <Card
                  key={item.id}
                  className="hover:shadow-md transition-all cursor-pointer animate-fade-in hover:scale-[1.01]"
                  onClick={() => {
                    if (item.type === "submission") {
                      navigate(`/results/${item.id}`);
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {item.type === "practice" && (
                            <Badge variant="default" className="text-xs">
                              <Calendar className="h-3 w-3 mr-1" />
                              Practice
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {item.spec_tag}
                          </Badge>
                          {trend === "up" && (
                            <Badge variant="default" className="bg-green-600 text-xs">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Improved
                            </Badge>
                          )}
                          {trend === "down" && (
                            <Badge variant="destructive" className="text-xs">
                              <TrendingDown className="h-3 w-3 mr-1" />
                              Lower
                            </Badge>
                          )}
                          {trend === "same" && (
                            <Badge variant="secondary" className="text-xs">
                              <Minus className="h-3 w-3 mr-1" />
                              Same
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(item.created_at).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-4xl font-bold ${
                            score >= 70
                              ? "text-green-600"
                              : score >= 50
                              ? "text-yellow-600"
                              : "text-red-600"
                          }`}
                        >
                          {score}%
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
