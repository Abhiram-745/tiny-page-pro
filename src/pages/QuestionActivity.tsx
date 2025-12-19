import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TimeRangeFilter } from "@/components/TimeRangeFilter";
import { ActivityCard, ActivityItem, ActivityType } from "@/components/ActivityCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { BarChart3, Target, TrendingUp, Clock } from "lucide-react";

export default function QuestionActivity() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [activeTab, setActiveTab] = useState<"all" | ActivityType>("all");

  useEffect(() => {
    fetchActivities();
  }, [startDate, endDate]);

  const fetchActivities = async () => {
    setLoading(true);
    
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
      return;
    }

    const allActivities: ActivityItem[] = [];

    // Fetch practice sessions (exam questions)
    let practiceQuery = supabase
      .from("practice_sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    
    if (startDate) practiceQuery = practiceQuery.gte("created_at", startDate.toISOString());
    if (endDate) practiceQuery = practiceQuery.lte("created_at", endDate.toISOString());

    const { data: practiceSessions } = await practiceQuery;
    
    if (practiceSessions) {
      practiceSessions.forEach(session => {
        allActivities.push({
          id: session.id,
          type: "exam",
          topic: session.topic_slug?.replace(/-/g, " ") || session.subsection_title || "Practice Session",
          subsection: session.subsection_title,
          score: session.overall_score || 0,
          maxScore: session.max_marks || 0,
          createdAt: new Date(session.created_at),
          keyPointsCovered: session.key_ideas_covered || [],
          keyPointsMissed: session.key_ideas_missed || [],
        });
      });
    }

    // Fetch blurt sessions
    let blurtQuery = supabase
      .from("blurt_sessions")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    
    if (startDate) blurtQuery = blurtQuery.gte("created_at", startDate.toISOString());
    if (endDate) blurtQuery = blurtQuery.lte("created_at", endDate.toISOString());

    const { data: blurtSessions } = await blurtQuery;
    
    if (blurtSessions) {
      blurtSessions.forEach(session => {
        allActivities.push({
          id: session.id,
          type: "blurt",
          topic: session.topic_slug?.replace(/-/g, " ") || "Blurt Session",
          subsection: session.subsection_slug?.replace(/-/g, " "),
          score: session.score || 0,
          maxScore: session.max_score || 0,
          createdAt: new Date(session.created_at),
        });
      });
    }

    // Fetch mock exams
    let mockQuery = supabase
      .from("mock_exams")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });
    
    if (startDate) mockQuery = mockQuery.gte("created_at", startDate.toISOString());
    if (endDate) mockQuery = mockQuery.lte("created_at", endDate.toISOString());

    const { data: mockExams } = await mockQuery;
    
    if (mockExams) {
      mockExams.forEach(exam => {
        allActivities.push({
          id: exam.id,
          type: "mock",
          subject: exam.subject,
          topic: exam.topic_title || "Mock Exam",
          score: exam.total_score || 0,
          maxScore: exam.total_marks || 0,
          createdAt: new Date(exam.created_at),
        });
      });
    }

    // Sort by date
    allActivities.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    setActivities(allActivities);
    setLoading(false);
  };

  const handleRangeChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
  };

  const filteredActivities = useMemo(() => {
    if (activeTab === "all") return activities;
    return activities.filter(a => a.type === activeTab);
  }, [activities, activeTab]);

  const stats = useMemo(() => {
    const total = filteredActivities.length;
    const totalScore = filteredActivities.reduce((sum, a) => sum + a.score, 0);
    const totalMax = filteredActivities.reduce((sum, a) => sum + a.maxScore, 0);
    const avgAccuracy = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;
    
    const byType = {
      exam: activities.filter(a => a.type === "exam").length,
      blurt: activities.filter(a => a.type === "blurt").length,
      mock: activities.filter(a => a.type === "mock").length,
    };

    return { total, avgAccuracy, byType };
  }, [filteredActivities, activities]);

  const handleActivityClick = (activity: ActivityItem) => {
    if (activity.type === "mock") {
      navigate(`/mock-exam-results/${activity.id}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container max-w-5xl mx-auto py-6 px-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Question Activity</h1>
        <p className="text-muted-foreground">Track your practice sessions and accuracy over time</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.total}</p>
                <p className="text-xs text-muted-foreground">Total Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <Target className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.avgAccuracy}%</p>
                <p className="text-xs text-muted-foreground">Avg Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10">
                <TrendingUp className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.byType.exam}</p>
                <p className="text-xs text-muted-foreground">Practice Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Clock className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.byType.blurt}</p>
                <p className="text-xs text-muted-foreground">Blurt Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Time Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Filter by Time</CardTitle>
        </CardHeader>
        <CardContent>
          <TimeRangeFilter
            startDate={startDate}
            endDate={endDate}
            onRangeChange={handleRangeChange}
          />
        </CardContent>
      </Card>

      {/* Activity List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All ({activities.length})</TabsTrigger>
              <TabsTrigger value="exam">Practice ({stats.byType.exam})</TabsTrigger>
              <TabsTrigger value="blurt">Blurt ({stats.byType.blurt})</TabsTrigger>
              <TabsTrigger value="mock">Mock ({stats.byType.mock})</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              {filteredActivities.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-3 opacity-20" />
                  <p>No activity found for this time period</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      onClick={() => handleActivityClick(activity)}
                    />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
