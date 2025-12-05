import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Brain } from "lucide-react";

interface TopicData {
  chapterName: string;
  subsectionName: string;
  avgScore: number;
  attempts: number;
  confidence: "struggling" | "developing" | "confident";
  whatToImprove?: string;
  whatDoingWell?: string;
}

interface SubjectTopicHeatmapProps {
  data: TopicData[];
  subjectName?: string;
}

const SubjectTopicHeatmap = ({ data, subjectName = "Topic" }: SubjectTopicHeatmapProps) => {
  const getColor = (confidence: string) => {
    switch (confidence) {
      case "struggling":
        return "hsl(0, 84%, 60%)"; // Red
      case "developing":
        return "hsl(45, 93%, 47%)"; // Yellow
      case "confident":
        return "hsl(142, 76%, 36%)"; // Green
      default:
        return "hsl(var(--muted))";
    }
  };

  const chartData = data.map((item) => ({
    x: item.attempts,
    y: item.avgScore,
    chapterName: item.chapterName,
    subsectionName: item.subsectionName,
    confidence: item.confidence,
    whatToImprove: item.whatToImprove,
    whatDoingWell: item.whatDoingWell,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border rounded-lg p-4 shadow-lg max-w-sm">
          <p className="font-bold text-sm mb-1">{data.chapterName}</p>
          <p className="text-xs text-muted-foreground mb-3">{data.subsectionName}</p>
          
          <div className="space-y-2 mb-3">
            <p className="text-sm text-muted-foreground">Score: <span className="font-semibold">{data.y}%</span></p>
            <p className="text-sm text-muted-foreground">Attempts: <span className="font-semibold">{data.x}</span></p>
            <p className="text-sm font-medium capitalize">
              {data.confidence === "struggling" && "🔴 Struggling"}
              {data.confidence === "developing" && "🟡 Developing"}
              {data.confidence === "confident" && "🟢 Confident"}
            </p>
          </div>

          {data.whatDoingWell && (
            <div className="mb-2 p-2 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">✓ Doing Well:</p>
              <p className="text-xs text-green-600 dark:text-green-300">{data.whatDoingWell}</p>
            </div>
          )}

          {data.whatToImprove && (
            <div className="p-2 bg-amber-50 dark:bg-amber-950/20 rounded border border-amber-200 dark:border-amber-800">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-1">→ To Improve:</p>
              <p className="text-xs text-amber-600 dark:text-amber-300">{data.whatToImprove}</p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          {subjectName} Topic Confidence Map
        </CardTitle>
        <CardDescription>
          Your performance across topics - hover over points to see AI-powered insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="h-[300px] flex items-center justify-center text-muted-foreground">
            Complete practice sessions to see your topic confidence map
          </div>
        ) : (
          <>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  type="number"
                  dataKey="x"
                  name="Attempts"
                  label={{ value: "Number of Attempts", position: "bottom", offset: 20 }}
                  domain={[0, "dataMax + 1"]}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name="Score"
                  label={{ value: "Average Score (%)", angle: -90, position: "left", offset: 10 }}
                  domain={[0, 100]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Scatter data={chartData} shape="circle">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getColor(entry.confidence)} opacity={0.8} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "hsl(0, 84%, 60%)" }} />
                <span>Struggling (0-50%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "hsl(45, 93%, 47%)" }} />
                <span>Developing (50-70%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: "hsl(142, 76%, 36%)" }} />
                <span>Confident (70%+)</span>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SubjectTopicHeatmap;
