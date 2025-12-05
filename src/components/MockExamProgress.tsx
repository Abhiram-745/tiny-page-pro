import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { FileText, Coffee } from "lucide-react";

interface MockExamProgressProps {
  isOpen: boolean;
  currentQuestion: number;
  totalQuestions: number;
  status: string;
}

const MockExamProgress = ({ isOpen, currentQuestion, totalQuestions, status }: MockExamProgressProps) => {
  const progress = totalQuestions > 0 ? (currentQuestion / totalQuestions) * 100 : 0;

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Marking Your Exam
          </DialogTitle>
          <DialogDescription>
            This may take a few minutes. You can close this tab and come back later.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-muted border-t-primary"></div>
              <FileText className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 text-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Marking question {currentQuestion} of {totalQuestions}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          <div className="bg-muted/50 rounded-lg p-4 text-center">
            <Coffee className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Feel free to close this tab and do something else.
              <br />
              Your results will be saved automatically.
            </p>
          </div>

          <p className="text-xs text-center text-muted-foreground">
            Status: {status}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MockExamProgress;
