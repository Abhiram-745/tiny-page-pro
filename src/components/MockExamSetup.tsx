import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FileText, Keyboard, Pencil, Clock, Target, PlayCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import StepLoadingSpinner from "@/components/StepLoadingSpinner";

interface MockExamSetupProps {
  topicTitle: string;
  subsections: Array<{ title: string; content: string }>;
  subject?: string;
}

const MockExamSetup = ({ topicTitle, subsections, subject = "general" }: MockExamSetupProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [timeLimit, setTimeLimit] = useState<string>("30");
  const [totalMarks, setTotalMarks] = useState<string>("40");
  const [submissionMethod, setSubmissionMethod] = useState<string>("keyboard");
  const [isGenerating, setIsGenerating] = useState(false);

  const topics = subsections.map(sub => sub.title);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleStartExam = async () => {
    if (selectedTopics.length === 0) {
      toast({
        title: "Select topics",
        description: "Please select at least one topic for your mock exam.",
        variant: "destructive"
      });
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({
        title: "Login required",
        description: "Please login to start a mock exam.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Get content for selected topics
      const selectedContent = subsections
        .filter(sub => selectedTopics.includes(sub.title))
        .map(sub => ({ title: sub.title, content: sub.content }));

      // Create exam record
      const { data: exam, error: examError } = await supabase
        .from("mock_exams")
        .insert({
          user_id: user.id,
          subject,
          topic_title: topicTitle,
          selected_topics: selectedTopics,
          time_limit_minutes: parseInt(timeLimit),
          total_marks: parseInt(totalMarks),
          submission_method: submissionMethod
        } as any)
        .select()
        .single();

      if (examError) throw examError;

      // Generate questions via edge function
      const { data, error } = await supabase.functions.invoke('generate-mock-exam', {
        body: {
          examId: exam.id,
          topics: selectedContent,
          totalMarks: parseInt(totalMarks),
          subject
        }
      });

      if (error) throw error;

      toast({
        title: "Exam generated!",
        description: `Your ${totalMarks}-mark exam is ready. Good luck!`
      });

      // Navigate to exam page
      navigate(`/mock-exam/${exam.id}`);
    } catch (error) {
      console.error("Error creating exam:", error);
      toast({
        title: "Error",
        description: "Failed to generate exam. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="mt-6 border-primary/20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <FileText className="h-6 w-6 text-primary" />
          Mock Exams
        </CardTitle>
        <CardDescription>
          Create a timed mock exam with questions from your selected topics. Get detailed AI marking and feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Topic Selection */}
        <div>
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Select Topics for Your Exam:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-muted/30 rounded-lg">
            {topics.map((topic) => (
              <div key={topic} className="flex items-center space-x-2">
                <Checkbox
                  id={`exam-topic-${topic}`}
                  checked={selectedTopics.includes(topic)}
                  onCheckedChange={() => toggleTopic(topic)}
                />
                <label
                  htmlFor={`exam-topic-${topic}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {topic}
                </label>
              </div>
            ))}
          </div>
          {selectedTopics.length > 0 && (
            <p className="text-sm text-muted-foreground mt-2">
              {selectedTopics.length} topic{selectedTopics.length !== 1 ? 's' : ''} selected = {selectedTopics.length} page{selectedTopics.length !== 1 ? 's' : ''} in exam
            </p>
          )}
        </div>

        {/* Time and Marks Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              Time Limit
            </Label>
            <Select value={timeLimit} onValueChange={setTimeLimit}>
              <SelectTrigger>
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="45">45 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
                <SelectItem value="90">90 minutes</SelectItem>
                <SelectItem value="120">120 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              Total Marks
            </Label>
            <Select value={totalMarks} onValueChange={setTotalMarks}>
              <SelectTrigger>
                <SelectValue placeholder="Select marks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="20">20 marks</SelectItem>
                <SelectItem value="40">40 marks</SelectItem>
                <SelectItem value="60">60 marks</SelectItem>
                <SelectItem value="80">80 marks</SelectItem>
                <SelectItem value="100">100 marks</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Submission Method */}
        <div>
          <Label className="flex items-center gap-2 mb-3">
            Answer Method
          </Label>
          <RadioGroup value={submissionMethod} onValueChange={setSubmissionMethod} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${submissionMethod === 'paper' ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary/50'}`}>
              <RadioGroupItem value="paper" id="paper" />
              <Label htmlFor="paper" className="flex items-center gap-2 cursor-pointer">
                <FileText className="h-5 w-5" />
                <div>
                  <p className="font-medium">Paper</p>
                  <p className="text-xs text-muted-foreground">Upload photo at end</p>
                </div>
              </Label>
            </div>
            <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${submissionMethod === 'keyboard' ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary/50'}`}>
              <RadioGroupItem value="keyboard" id="keyboard" />
              <Label htmlFor="keyboard" className="flex items-center gap-2 cursor-pointer">
                <Keyboard className="h-5 w-5" />
                <div>
                  <p className="font-medium">Keyboard</p>
                  <p className="text-xs text-muted-foreground">Type in text boxes</p>
                </div>
              </Label>
            </div>
            <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer ${submissionMethod === 'stylus' ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary/50'}`}>
              <RadioGroupItem value="stylus" id="stylus" />
              <Label htmlFor="stylus" className="flex items-center gap-2 cursor-pointer">
                <Pencil className="h-5 w-5" />
                <div>
                  <p className="font-medium">Stylus</p>
                  <p className="text-xs text-muted-foreground">Draw in canvas boxes</p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Start Button */}
        <Button
          onClick={handleStartExam}
          disabled={isGenerating || selectedTopics.length === 0}
          className="w-full h-12 text-lg"
          size="lg"
        >
          {isGenerating ? (
            <>Generating Exam...</>
          ) : (
            <>
              <PlayCircle className="mr-2 h-5 w-5" />
              Start Mock Exam
            </>
          )}
        </Button>

        {isGenerating && <StepLoadingSpinner />}
      </CardContent>
    </Card>
  );
};

export default MockExamSetup;
