import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingGlassCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
  subtitle: string;
  delay?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

const FloatingGlassCard = ({
  icon: Icon,
  title,
  value,
  subtitle,
  delay = 0,
  gradientFrom = "from-primary/20",
  gradientTo = "to-secondary/20"
}: FloatingGlassCardProps) => {
  return (
    <div
      className="floating-glass-card group"
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Liquid gradient background */}
      <div className={`
        absolute inset-0 rounded-2xl 
        bg-gradient-to-br ${gradientFrom} ${gradientTo}
        opacity-60 group-hover:opacity-80
        transition-opacity duration-500
        liquid-gradient
      `} />
      
      {/* Glass layer */}
      <div className="absolute inset-0 rounded-2xl backdrop-blur-xl bg-card/30 border border-border/30" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="shimmer-sweep" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className={`
            p-2.5 rounded-xl 
            bg-gradient-to-br ${gradientFrom} ${gradientTo}
            backdrop-blur-sm
            group-hover:scale-110 transition-transform duration-300
          `}>
            <Icon className="h-5 w-5 text-foreground" />
          </div>
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {title}
          </span>
        </div>
        
        <div className="mt-auto">
          <p className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
            {value}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {subtitle}
          </p>
        </div>

        {/* Decorative glow */}
        <div className={`
          absolute -bottom-4 -right-4 w-20 h-20 
          bg-gradient-to-br ${gradientFrom} ${gradientTo}
          rounded-full blur-2xl opacity-30
          group-hover:opacity-50 transition-opacity duration-500
        `} />
      </div>
    </div>
  );
};

export default FloatingGlassCard;
