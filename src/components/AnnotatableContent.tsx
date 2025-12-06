import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Highlighter, Circle, MessageSquare, X } from "lucide-react";
import SectionContent from "./SectionContent";
import { cn } from "@/lib/utils";

interface AnnotatableContentProps {
  html: string;
  onAskAI: (text: string) => void;
  isEnabled: boolean;
}

type AnnotationTool = 'highlight' | 'circle' | null;

interface PopupState {
  visible: boolean;
  x: number;
  y: number;
  text: string;
}

export const AnnotatableContent = ({ html, onAskAI, isEnabled }: AnnotatableContentProps) => {
  const [activeTool, setActiveTool] = useState<AnnotationTool>(null);
  const [popup, setPopup] = useState<PopupState>({ visible: false, x: 0, y: 0, text: '' });
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTextSelection = useCallback(() => {
    if (!isEnabled) return;

    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setPopup({ visible: false, x: 0, y: 0, text: '' });
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 3) {
      setPopup({ visible: false, x: 0, y: 0, text: '' });
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    // Position popup above the selection
    setPopup({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
      text
    });
  }, [isEnabled]);

  useEffect(() => {
    document.addEventListener('mouseup', handleTextSelection);
    return () => document.removeEventListener('mouseup', handleTextSelection);
  }, [handleTextSelection]);

  const handleAskAI = () => {
    if (popup.text) {
      onAskAI(popup.text);
      setPopup({ visible: false, x: 0, y: 0, text: '' });
      window.getSelection()?.removeAllRanges();
    }
  };

  const closePopup = () => {
    setPopup({ visible: false, x: 0, y: 0, text: '' });
    window.getSelection()?.removeAllRanges();
  };

  return (
    <div className="relative">
      {/* Annotation Toolbar - Fixed on the right side */}
      {isEnabled && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 bg-card border rounded-xl p-2 shadow-lg">
          <Button
            variant={activeTool === 'highlight' ? 'default' : 'ghost'}
            size="icon"
            className={cn(
              "h-10 w-10 rounded-lg transition-all",
              activeTool === 'highlight' && "bg-yellow-500 hover:bg-yellow-600"
            )}
            onClick={() => setActiveTool(activeTool === 'highlight' ? null : 'highlight')}
          >
            <Highlighter className="h-5 w-5" />
          </Button>
          <Button
            variant={activeTool === 'circle' ? 'default' : 'ghost'}
            size="icon"
            className={cn(
              "h-10 w-10 rounded-lg transition-all",
              activeTool === 'circle' && "bg-blue-500 hover:bg-blue-600"
            )}
            onClick={() => setActiveTool(activeTool === 'circle' ? null : 'circle')}
          >
            <Circle className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Selection Popup */}
      {popup.visible && (
        <div
          className="fixed z-50 transform -translate-x-1/2 -translate-y-full animate-in fade-in-0 zoom-in-95"
          style={{ left: popup.x, top: popup.y }}
        >
          <div className="bg-card border rounded-xl shadow-xl p-1 flex items-center gap-1">
            <Button
              onClick={handleAskAI}
              size="sm"
              className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white rounded-lg gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Ask AI Tutor
            </Button>
            <Button
              onClick={closePopup}
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-lg"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-card" />
        </div>
      )}

      {/* Content */}
      <div 
        ref={contentRef}
        className={cn(
          "transition-all",
          isEnabled && activeTool === 'highlight' && "cursor-text selection:bg-yellow-300 selection:text-foreground",
          isEnabled && activeTool === 'circle' && "cursor-crosshair selection:bg-blue-200 selection:text-foreground"
        )}
      >
        <SectionContent html={html} />
      </div>
    </div>
  );
};
