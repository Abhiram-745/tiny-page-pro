import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  TrendingUp,
  Clock,
  CheckCircle,
  Target,
  ArrowRight,
  Beaker,
  Zap,
  Palette,
  BookOpenText,
  Globe,
  Sparkles,
  Lock,
  Unlock,
  Award,
  Flame,
} from "lucide-react";
import SubjectTopicHeatmap from "@/components/SubjectTopicHeatmap";
import { getTopicsForSubject } from "@/constants/subjectTopics";
import { toast } from "sonner";
import FloatingGlassCard from "@/components/FloatingGlassCard";

interface Profile {
  full_name: string | null;
}

interface TopicPerformance {
  topic: string;
  sectionId: string;
  avgScore: number;
  attempts: number;
  lastAttempt: string;
  isStrength: boolean;
  topicSlug?: string;
}

interface AIInsights {
  insights: string;
  hasData: boolean;
}

interface ConfidenceMapData {
  chapterName: string;
  subsectionName: string;
  avgScore: number;
  attempts: number;
  confidence: "struggling" | "developing" | "confident";
  whatToImprove?: string;
  whatDoingWell?: string;
}

// Chemistry topic slugs for filtering
const CHEMISTRY_TOPICS = [
  "atomic-structure",
  "bonding",
  "quantitative-chemistry",
  "chemical-changes",
  "energy-changes",
  "rate-extent-chemical-change",
  "organic-chemistry",
  "chemical-analysis",
  "chemistry-atmosphere",
  "using-resources",
];

const subjectConfigs = {
  chemistry: {
    name: "Chemistry",
    icon: Beaker,
    color: "from-blue-500 to-cyan-500",
    sectionsRoute: "/sections",
  },
  physics: {
    name: "Physics",
    icon: Zap,
    color: "from-purple-500 to-pink-500",
    sectionsRoute: "/physics/sections",
  },
  biology: {
    name: "Biology",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500",
    sectionsRoute: "/biology",
  },
  "product-design": {
    name: "Product Design",
    icon: Palette,
    color: "from-amber-500 to-orange-500",
    sectionsRoute: "/product-design/chapters",
  },
  english: {
    name: "English",
    icon: BookOpenText,
    color: "from-rose-500 to-pink-500",
    sectionsRoute: "/english/literature/chapters",
  },
  geography: {
    name: "Geography",
    icon: Globe,
    color: "from-green-500 to-teal-500",
    sectionsRoute: "/geography/living-world/sections",
  },
  economics: {
    name: "Economics",
    icon: TrendingUp,
    color: "from-emerald-500 to-cyan-500",
    sectionsRoute: "/economics/chapters",
  },
};

const UnifiedDashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get("subject") as keyof typeof subjectConfigs | null;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [topicPerformance, setTopicPerformance] = useState<TopicPerformance[]>([]);
  const [loading, setLoading] = useState(true);
  const [aiInsights, setAiInsights] = useState<AIInsights | null>(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [confidenceMap, setConfidenceMap] = useState<ConfidenceMapData[]>([]);
  const [loadingConfidence, setLoadingConfidence] = useState(false);
  const [uniqueSubsectionsCount, setUniqueSubsectionsCount] = useState(0);
  const [totalSessions, setTotalSessions] = useState(0);
  const [avgScore, setAvgScore] = useState(0);

  const REQUIRED_SUBSECTIONS = 7;

  useEffect(() => {
    const loadData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/auth");
        return;
      }

      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      if (profileData) {
        setProfile(profileData);
      }

      // Fetch practice sessions
      const { data: sessions } = await supabase
        .from("practice_sessions")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      // Fetch blurt sessions for unique subsection count
      const { data: blurtSessions } = await supabase
        .from("blurt_sessions")
        .select("subsection_slug")
        .eq("user_id", user.id);

      // Calculate unique subsections from both tables
      const practiceSubsections = new Set(sessions?.map(s => s.subsection_slug).filter(Boolean) || []);
      const blurtSubsections = new Set(blurtSessions?.map(s => s.subsection_slug).filter(Boolean) || []);
      const allUniqueSubsections = new Set([...practiceSubsections, ...blurtSubsections]);
      setUniqueSubsectionsCount(allUniqueSubsections.size);

      // Calculate stats
      const allScores = sessions?.map(s => (s.overall_score / s.max_marks) * 100) || [];
      const blurtScores = blurtSessions?.length || 0;
      setTotalSessions((sessions?.length || 0) + blurtScores);
      if (allScores.length > 0) {
        setAvgScore(Math.round(allScores.reduce((a, b) => a + b, 0) / allScores.length));
      }

      if (sessions) {
        const topicScores: {
          [topic: string]: {
            scores: number[];
            sectionId: string;
            lastAttempt: string;
            topicSlug: string;
          };
        } = {};

        sessions.forEach((session) => {
          const topic = session.subsection_title || "Unknown Topic";
          const topicSlug = session.topic_slug || "";
          const percentage = Math.round((session.overall_score / session.max_marks) * 100);

          if (!topicScores[topic]) {
            topicScores[topic] = {
              scores: [],
              sectionId: session.section_id || "",
              lastAttempt: session.created_at,
              topicSlug: topicSlug,
            };
          }
          topicScores[topic].scores.push(percentage);

          if (new Date(session.created_at) > new Date(topicScores[topic].lastAttempt)) {
            topicScores[topic].lastAttempt = session.created_at;
          }
        });

        const performance = Object.entries(topicScores)
          .map(([topic, data]: [string, any]) => {
            const avgScore = Math.round(
              data.scores.reduce((a, b) => a + b, 0) / data.scores.length
            );
            return {
              topic,
              sectionId: data.sectionId,
              avgScore,
              attempts: data.scores.length,
              lastAttempt: data.lastAttempt,
              isStrength: avgScore >= 70,
              topicSlug: data.topicSlug,
            };
          })
          .sort((a, b) => b.avgScore - a.avgScore);

        setTopicPerformance(performance);
      }

      setLoading(false);
    };

    loadData();
  }, [navigate]);

  // Function to generate AI insights
  const generateAIInsights = async () => {
    if (!subject) return;
    
    setLoadingInsights(true);
    setLoadingConfidence(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;

      const topicSlugs = getTopicsForSubject(subject);
      
      // Fetch insights
      const { data: insightsData, error: insightsError } = await supabase.functions.invoke('generate-topic-insights', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: { subject, topicSlugs },
      });

      if (insightsError) {
        console.error('Error fetching insights:', insightsError);
        toast.error("Failed to generate insights");
      } else if (insightsData) {
        setAiInsights(insightsData);
      }

      // Fetch confidence map
      const { data: confidenceData, error: confidenceError } = await supabase.functions.invoke('generate-topic-confidence', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
        body: { subject, topicSlugs },
      });

      if (confidenceError) {
        console.error('Error fetching confidence map:', confidenceError);
        toast.error("Failed to generate confidence map");
      } else if (confidenceData?.confidenceMap) {
        setConfidenceMap(confidenceData.confidenceMap);
      }

      toast.success("AI insights generated!");
    } catch (error) {
      console.error('Error generating insights:', error);
      toast.error("Something went wrong");
    } finally {
      setLoadingInsights(false);
      setLoadingConfidence(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // If a specific subject is selected
  if (subject && subjectConfigs[subject]) {
    const config = subjectConfigs[subject];
    const Icon = config.icon;

    // Filter performance data by subject
    const subjectTopics = getTopicsForSubject(subject);
    const filteredPerformance = topicPerformance.filter(t => 
      t.topicSlug && subjectTopics.includes(t.topicSlug)
    );

    return (
      <div className="container mx-auto px-4 py-8 animate-fade-in">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{config.name}</h1>
              <p className="text-muted-foreground">Ready to continue your revision?</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="hover:shadow-lg transition-all cursor-pointer animate-scale-up" onClick={() => navigate(config.sectionsRoute)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Browse Topics
              </CardTitle>
              <CardDescription>Explore {config.name.toLowerCase()} content</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View All Topics</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer animate-scale-up" style={{ animationDelay: "0.1s" }} onClick={() => navigate(subject ? `/history?subject=${subject}` : "/history")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-secondary" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest attempts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View History</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all cursor-pointer animate-scale-up" style={{ animationDelay: "0.2s" }} onClick={() => navigate(subject ? `/progress?subject=${subject}` : "/progress")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Your Progress
              </CardTitle>
              <CardDescription>Track your improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Analytics</Button>
            </CardContent>
          </Card>
        </div>

        {aiInsights ? (
          <Card className="mb-6 border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Sparkles className="h-5 w-5" />
                AI Learning Insights
              </CardTitle>
              <CardDescription>Personalized assessment powered by Gemini 2.5 Pro</CardDescription>
            </CardHeader>
            <CardContent>
              {loadingInsights ? (
                <div className="animate-pulse text-muted-foreground">Analyzing your progress...</div>
              ) : (
                <p className="text-sm leading-relaxed">{aiInsights.insights}</p>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card className={`mb-6 ${uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS ? "border-primary/20 bg-primary/5" : "border-muted bg-muted/20"}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS ? (
                  <Unlock className="h-5 w-5 text-primary animate-scale-in" />
                ) : (
                  <Lock className="h-5 w-5 text-muted-foreground" />
                )}
                <span className={uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS ? "text-primary" : "text-muted-foreground"}>
                  Generate AI Insights
                </span>
                {uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS && (
                  <Badge className="ml-2 bg-primary/20 text-primary animate-scale-in">Unlocked!</Badge>
                )}
              </CardTitle>
              <CardDescription>
                {uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS 
                  ? "Get personalized learning recommendations based on your practice history"
                  : `Study ${REQUIRED_SUBSECTIONS - uniqueSubsectionsCount} more topics to unlock AI insights`
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Progress bar for unlocking */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress to unlock</span>
                  <span className={`font-semibold ${uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS ? "text-primary" : ""}`}>
                    {uniqueSubsectionsCount}/{REQUIRED_SUBSECTIONS} topics studied
                  </span>
                </div>
                <Progress 
                  value={(uniqueSubsectionsCount / REQUIRED_SUBSECTIONS) * 100} 
                  className="h-2"
                />
              </div>

              <Button 
                onClick={generateAIInsights} 
                disabled={loadingInsights || uniqueSubsectionsCount < REQUIRED_SUBSECTIONS}
                className="w-full"
              >
                {loadingInsights ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : uniqueSubsectionsCount >= REQUIRED_SUBSECTIONS ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate AI Insights
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Locked - Study more topics
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {confidenceMap.length > 0 && (
          <div className="mb-6">
            <SubjectTopicHeatmap data={confidenceMap} subjectName={config.name} />
          </div>
        )}

        {filteredPerformance.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-5 w-5" />
                  Your Strengths
                </CardTitle>
                <CardDescription>Topics you're performing well in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredPerformance.filter((t) => t.isStrength).length > 0 ? (
                    filteredPerformance
                      .filter((t) => t.isStrength)
                      .slice(0, 3)
                      .map((topic) => (
                        <div
                          key={topic.sectionId}
                          className="flex items-center justify-between p-3 bg-background rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                          onClick={() => navigate(config.sectionsRoute)}
                        >
                          <div className="flex-1">
                            <p className="font-medium text-sm">{topic.topic}</p>
                            <p className="text-xs text-muted-foreground">
                              Average: {topic.avgScore}% • {topic.attempts} attempts
                            </p>
                          </div>
                          <Badge className="bg-primary">{topic.avgScore}%</Badge>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Complete more practice to see your strengths
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Target className="h-5 w-5" />
                  Areas to Focus On
                </CardTitle>
                <CardDescription>Topics that need more practice</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredPerformance.filter((t) => !t.isStrength).length > 0 ? (
                    filteredPerformance
                      .filter((t) => !t.isStrength)
                      .slice(0, 3)
                      .map((topic) => (
                        <div
                          key={topic.sectionId}
                          className="flex items-center justify-between p-3 bg-background rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
                          onClick={() => navigate(`/blur-practice/${topic.sectionId}/0`)}
                        >
                          <div className="flex-1">
                            <p className="font-medium text-sm">{topic.topic}</p>
                            <p className="text-xs text-muted-foreground">
                              Average: {topic.avgScore}% • {topic.attempts} attempts
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            Practice
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Complete more practice to see areas to focus on
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  // Main overview dashboard (no subject selected)
  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, {profile?.full_name || "Student"}! 👋
        </h1>
        <p className="text-muted-foreground">Choose a subject to start revising</p>
      </div>

      {/* Floating Glass Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <FloatingGlassCard
          icon={Award}
          title="Sessions"
          value={totalSessions}
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
          icon={BookOpen}
          title="Topics"
          value={uniqueSubsectionsCount}
          subtitle="Unique topics studied"
          delay={400}
          gradientFrom="from-blue-500/30"
          gradientTo="to-cyan-500/10"
        />
        <FloatingGlassCard
          icon={Flame}
          title="Strengths"
          value={topicPerformance.filter(t => t.isStrength).length}
          subtitle="Strong topics"
          delay={600}
          gradientFrom="from-orange-500/30"
          gradientTo="to-amber-500/10"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {Object.entries(subjectConfigs).map(([key, config], index) => {
          const Icon = config.icon;
          return (
            <Card
              key={key}
              className="cursor-pointer hover:shadow-lg transition-all hover:scale-105 animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/dashboard?subject=${key}`)}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-center">{config.name}</CardTitle>
                <CardDescription className="text-center">Start learning</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="default">
                  Open Subject
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {topicPerformance.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest practice sessions across all subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topicPerformance.slice(0, 5).map((topic) => (
                <div
                  key={topic.sectionId}
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{topic.topic}</p>
                    <p className="text-xs text-muted-foreground">
                      {topic.attempts} attempts • Last practiced{" "}
                      {new Date(topic.lastAttempt).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant={topic.isStrength ? "default" : "secondary"}>
                    {topic.avgScore}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UnifiedDashboard;
