"use client";

import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  lede?: string;
  align?: "left" | "between";
  className?: string;
}

/**
 * Every section opens the same way: a numbered mono label, a display title,
 * and an optional lede. Consistency here is what makes the page read as one
 * system rather than a stack of blocks.
 */
export function SectionHeading({
  index,
  label,
  title,
  lede,
  align = "between",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <Reveal direction="none">
        <div className="flex items-center gap-3 mb-7">
          <span className="eyebrow font-semibold text-hot">{index}</span>
          <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-accent to-hot" aria-hidden />
          <span className="eyebrow">{label}</span>
        </div>
      </Reveal>

      <div
        className={cn(
          "flex flex-col gap-6",
          align === "between" && "lg:flex-row lg:items-end lg:justify-between lg:gap-16",
        )}
      >
        <TextReveal
          as="h2"
          text={title}
          className="display text-[1.75rem] leading-[1.12] sm:text-4xl lg:text-5xl max-w-[22ch]"
        />
        {lede && (
          <Reveal delay={0.15}>
            <p className="text-mute max-w-md text-base leading-relaxed lg:text-right lg:mb-3">
              {lede}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
