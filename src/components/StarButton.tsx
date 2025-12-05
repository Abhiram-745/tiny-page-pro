import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface StarButtonProps {
  itemId: string;
  isStarred: boolean;
  onToggle: () => void;
  size?: "sm" | "default" | "lg";
  showLabel?: boolean;
}

export const StarButton = ({ 
  itemId, 
  isStarred, 
  onToggle, 
  size = "default",
  showLabel = false 
}: StarButtonProps) => {
  const [isPending, setIsPending] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPending(true);
    
    try {
      await onToggle();
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={handleClick}
      disabled={isPending}
      className={`gap-2 ${isStarred ? 'text-yellow-500 hover:text-yellow-600' : 'text-muted-foreground hover:text-yellow-500'} transition-colors`}
    >
      <Star 
        className={`h-4 w-4 transition-all ${isStarred ? 'fill-yellow-500' : ''} ${isPending ? 'animate-pulse' : ''}`} 
      />
      {showLabel && (isStarred ? "Starred" : "Star")}
    </Button>
  );
};
