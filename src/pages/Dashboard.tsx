import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, TrendingUp, LogOut, Settings as SettingsIcon, HelpCircle, Target, ArrowRight, CheckCircle, Star, Sparkles, Award, Flame } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { RecentActivityCard } from "@/components/RecentActivityCard";
import { Progress } from "@/components/ui/progress";
import FloatingGlassCard from "@/components/FloatingGlassCard";

interface Profile {
  full_name: string | null;
}

interface PracticeSession {
  id: string;
  overall_score: number;
  max_marks: number;
  created_at: string;
  subsection_title: string | null;
  topic_slug: string | null;
  subsection_slug: string | null;
  questions_count: number;
  key_ideas_covered: string[];
  key_ideas_missed: string[];
}

interface BlurtSession {
  id: string;
  score: number;
  max_score: number;
  created_at: string;
  topic_slug: string | null;
  subsection_slug: string | null;
  pair_number: number;
}

interface TopicPerformance {
  topic: string;
  sectionId: string;
  avgScore: number;
  attempts: number;
  lastAttempt: string;
  isStrength: boolean;
}

interface StarredSubsection {
  id: string;
  topic_slug: string;
  subsection_slug: string;
  subsection_title: string;
  subject: string | null;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [topicPerformance, setTopicPerformance] = useState<TopicPerformance[]>([]);
  const [recentSessions, setRecentSessions] = useState<(PracticeSession | BlurtSession)[]>([]);
  const [starredSubsections, setStarredSubsections] = useState<StarredSubsection[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [avgScore, setAvgScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: settingsData } = await supabase
        .from("user_settings")
        .select("theme")
        .eq("user_id", user.id)
        .single();

      if (settingsData?.theme) {
        const theme = settingsData.theme as 'light' | 'dark' | 'system';
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else if (theme === 'light') {
          document.documentElement.classList.remove('dark');
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }

      // Fetch practice sessions
      const { data: practiceSessions } = await supabase
        .from("practice_sessions")
        .select(`
          id,
          overall_score,
          max_marks,
          created_at,
          subsection_title,
          topic_slug,
          subsection_slug,
          questions_count,
          key_ideas_covered,
          key_ideas_missed
        `)
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(10);

      // Fetch blurt sessions
      const { data: blurtSessions } = await supabase
        .from("blurt_sessions")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(10);

      // Combine and sort all sessions
      const allSessions = [
        ...(practiceSessions || []),
        ...(blurtSessions || [])
      ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      setRecentSessions(allSessions.slice(0, 5));

      // Calculate statistics
      const totalPractice = practiceSessions?.length || 0;
      const totalBlurt = blurtSessions?.length || 0;
      setTotalQuestions(totalPractice + totalBlurt);

      const allScores = [
        ...(practiceSessions?.map(s => (s.overall_score / s.max_marks) * 100) || []),
        ...(blurtSessions?.map(s => (s.score / s.max_score) * 100) || [])
      ];
      
      if (allScores.length > 0) {
        const average = allScores.reduce((a, b) => a + b, 0) / allScores.length;
        setAvgScore(Math.round(average));
      }

      // Calculate topic performance
      if (practiceSessions) {
        const topicScores: { 
          [topic: string]: { 
            scores: number[]; 
            sectionId: string; 
            lastAttempt: string;
          } 
        } = {};
        
        practiceSessions.forEach((session) => {
          if (session.subsection_title) {
            const topic = session.subsection_title;
            const percentage = Math.round((session.overall_score / session.max_marks) * 100);
            
            if (!topicScores[topic]) {
              topicScores[topic] = { 
                scores: [], 
                sectionId: session.topic_slug || session.id,
                lastAttempt: session.created_at 
              };
            }
            topicScores[topic].scores.push(percentage);
            
            if (new Date(session.created_at) > new Date(topicScores[topic].lastAttempt)) {
              topicScores[topic].lastAttempt = session.created_at;
            }
          }
        });

        const performance = Object.entries(topicScores)
          .map(([topic, data]) => {
            const avgScore = Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length);
            return {
              topic,
              sectionId: data.sectionId,
              avgScore,
              attempts: data.scores.length,
              lastAttempt: data.lastAttempt,
              isStrength: avgScore >= 70
            };
          })
          .sort((a, b) => b.avgScore - a.avgScore);
        
        setTopicPerformance(performance);
      }

      // Load starred subsections
      const { data: starred } = await supabase
        .from("starred_subsections")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      setStarredSubsections(starred || []);

      setLoading(false);
    };

    checkAuth();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/auth");
  };

  const getSessionType = (session: any): "practice" | "blurt" => {
    return "overall_score" in session ? "practice" : "blurt";
  };

  const handleNavigateToSession = (session: any) => {
    navigate(`/history`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 md:p-12 animate-fade-in border border-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3 animate-slide-up">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Welcome back, {profile?.full_name || "Student"}! 👋
                </h1>
              </div>
              <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "100ms" }}>
                Ready to continue your revision journey?
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
                {/* Stats are now shown in floating cards below */}
              </div>
            </div>
            
            <Button variant="outline" onClick={handleSignOut} className="hover-lift">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Floating Glass Cards for Stats */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FloatingGlassCard
            icon={Award}
            title="Sessions"
            value={totalQuestions}
            subtitle="Total practice sessions"
            delay={0}
            gradientFrom="from-primary/30"
            gradientTo="to-primary/10"
          />
          <FloatingGlassCard
            icon={Target}
            title="Average"
            value={`${avgScore}%`}
            subtitle="Overall score"
            delay={200}
            gradientFrom="from-secondary/30"
            gradientTo="to-secondary/10"
          />
          <FloatingGlassCard
            icon={Star}
            title="Starred"
            value={starredSubsections.length}
            subtitle="Saved topics"
            delay={400}
            gradientFrom="from-yellow-500/30"
            gradientTo="to-amber-500/10"
          />
          <FloatingGlassCard
            icon={Flame}
            title="Strengths"
            value={topicPerformance.filter(t => t.isStrength).length}
            subtitle="Strong topics"
            delay={600}
            gradientFrom="from-orange-500/30"
            gradientTo="to-red-500/10"
          />
        </div>

        {/* Choose Your Subject */}
        <Card className="animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Choose Your Subject
            </CardTitle>
            <CardDescription>Select a subject to start revising</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { title: "Chemistry", desc: "AQA GCSE Chemistry", color: "from-blue-500 to-cyan-500", path: "/sections" },
                { title: "Physics", desc: "AQA GCSE Physics", color: "from-purple-500 to-pink-500", path: "/physics" },
                { title: "Geography", desc: "AQA GCSE Geography", color: "from-green-500 to-teal-500", path: "/geography" },
                { title: "Economics", desc: "OCR GCSE Economics", color: "from-emerald-500 to-teal-600", path: "/economics/chapters" },
                { title: "Product Design", desc: "AQA GCSE Product Design", color: "from-orange-500 to-amber-500", path: "/product-design/chapters" },
              ].map((subject, idx) => (
                <Card 
                  key={subject.title}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift border-border/50 overflow-hidden"
                  style={{ animationDelay: `${idx * 50}ms` }}
                  onClick={() => navigate(subject.path)}
                >
                  <div className={`h-2 bg-gradient-to-r ${subject.color}`} />
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{subject.title}</CardTitle>
                    <CardDescription className="text-xs">{subject.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Access Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Browse Sections", desc: "Explore topics", color: "primary", path: "/sections", delay: "0ms" },
            { icon: Star, title: "Question Bank", desc: "Starred questions", color: "yellow-500", path: "/question-bank", delay: "50ms" },
            { icon: Clock, title: "History", desc: "View past sessions", color: "secondary", path: "/history", delay: "100ms" },
            { icon: TrendingUp, title: "Progress", desc: "Track improvement", color: "accent", path: "/progress", delay: "150ms" }
          ].map((item) => (
            <Card 
              key={item.title}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift animate-scale-in border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: item.delay }}
              onClick={() => navigate(item.path)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-${item.color}/10 group-hover:bg-${item.color}/20 transition-colors`}>
                    <item.icon className={`h-5 w-5 text-${item.color}`} />
                  </div>
                  <span className="group-hover:text-primary transition-colors">{item.title}</span>
                </CardTitle>
                <CardDescription>{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Starred Subsections */}
        {starredSubsections.length > 0 && (
          <Card className="animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                Quick Access - Your Starred Subsections
              </CardTitle>
              <CardDescription>Jump straight into your favorite topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {starredSubsections.slice(0, 6).map((sub, idx) => (
                  <Card 
                    key={sub.id}
                    className="hover:shadow-md transition-all cursor-pointer hover-lift border-border/50"
                    style={{ animationDelay: `${idx * 50}ms` }}
                    onClick={() => {
                      const subject = sub.subject || "chemistry";
                      const basePath = subject === "chemistry" ? "" : `/${subject}`;
                      navigate(`${basePath}/blur-practice/${sub.topic_slug}/${sub.subsection_slug}`);
                    }}
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{sub.subsection_title}</p>
                        <p className="text-xs text-muted-foreground capitalize">{sub.subject || "chemistry"}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Activity */}
        {recentSessions.length > 0 && (
          <Card className="animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest practice sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentSessions.map((session, idx) => {
                  const type = getSessionType(session);
                  const isPractice = type === "practice";
                  const practiceSession = session as PracticeSession;
                  const blurtSession = session as BlurtSession;
                  
                  const topicName = isPractice 
                    ? practiceSession.subsection_title || practiceSession.topic_slug || "Practice Session"
                    : "Blurt Practice";
                  
                  const subsectionNames = isPractice && practiceSession.subsection_title
                    ? [practiceSession.subsection_title]
                    : [];

                  const score = isPractice ? practiceSession.overall_score : blurtSession.score;
                  const maxScore = isPractice ? practiceSession.max_marks : blurtSession.max_score;
                  
                  const questionsCorrect = isPractice 
                    ? practiceSession.key_ideas_covered.length 
                    : blurtSession.score;
                  
                  const questionsTotal = isPractice
                    ? practiceSession.questions_count || 1
                    : blurtSession.max_score;

                  return (
                    <div key={session.id} style={{ animationDelay: `${idx * 50}ms` }}>
                      <RecentActivityCard
                        topicName={topicName}
                        subsectionNames={subsectionNames}
                        score={score}
                        maxScore={maxScore}
                        questionsCorrect={questionsCorrect}
                        questionsTotal={questionsTotal}
                        timestamp={session.created_at}
                        onClick={() => handleNavigateToSession(session)}
                        subject="chemistry"
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Performance Cards */}
        {topicPerformance.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
            <Card className="border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  Your Strengths
                </CardTitle>
                <CardDescription>Topics you're performing well in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topicPerformance.filter(t => t.isStrength).length > 0 ? (
                    topicPerformance
                      .filter(t => t.isStrength)
                      .slice(0, 3)
                      .map((topic, idx) => (
                        <div
                          key={topic.sectionId}
                          className="flex items-center justify-between p-4 bg-background rounded-lg hover:shadow-sm transition-all cursor-pointer hover-lift border border-border/50"
                          onClick={() => navigate(`/sections`)}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="flex-1">
                            <p className="font-medium">{topic.topic}</p>
                            <p className="text-sm text-muted-foreground">
                              {topic.attempts} attempts
                            </p>
                            <Progress value={topic.avgScore} className="mt-2 h-2" />
                          </div>
                          <Badge className="bg-green-600 ml-4">
                            {topic.avgScore}%
                          </Badge>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Complete more practice to see your strengths</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-900 dark:bg-orange-950/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                  <Target className="h-5 w-5" />
                  Areas to Focus On
                </CardTitle>
                <CardDescription>Topics that need more practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topicPerformance.filter(t => !t.isStrength).length > 0 ? (
                    topicPerformance
                      .filter(t => !t.isStrength)
                      .slice(0, 3)
                      .map((topic, idx) => (
                        <div
                          key={topic.sectionId}
                          className="flex items-center justify-between p-4 bg-background rounded-lg hover:shadow-sm transition-all cursor-pointer hover-lift border border-border/50"
                          onClick={() => navigate(`/blur-practice/${topic.sectionId}/0`)}
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="flex-1">
                            <p className="font-medium">{topic.topic}</p>
                            <p className="text-sm text-muted-foreground">
                              {topic.attempts} attempts
                            </p>
                            <Progress value={topic.avgScore} className="mt-2 h-2" />
                          </div>
                          <Button size="sm" variant="outline" className="ml-4">
                            Practice
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">Complete more practice to see areas to focus on</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
