import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft } from "lucide-react";

const EnglishDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate("/subjects")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">English</h1>
          <p className="text-muted-foreground">Select your English course</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
          <Card
            className="cursor-pointer hover:shadow-lg transition-all"
            onClick={() => navigate("/english/literature/chapters")}
          >
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle>English Literature</CardTitle>
              <CardDescription>Explore classic texts and analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                Start Learning
              </Button>
            </CardContent>
          </Card>

          <Card className="opacity-60">
            <CardHeader>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-500 to-gray-500 flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <CardTitle>English Language</CardTitle>
              <CardDescription>Coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Not Available
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnglishDashboard;
