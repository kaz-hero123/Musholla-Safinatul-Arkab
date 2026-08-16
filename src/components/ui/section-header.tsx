import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  BadgeIcon?: LucideIcon;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  BadgeIcon,
  alignment = "left",
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 md:mb-16",
        alignment === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {badge && (
        <div 
          className={cn(
            "inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-emerald-primary/20 bg-emerald-primary/5",
            alignment === "center" && "mx-auto justify-center"
          )}
        >
          {BadgeIcon && <BadgeIcon className="text-emerald-primary w-4 h-4" />}
          <span className="text-emerald-primary text-sm font-bold tracking-wide uppercase">
            {badge}
          </span>
        </div>
      )}
      
      <h2 className="text-3xl md:text-5xl font-display font-bold text-text-primary tracking-tight mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
