"use client";

import { stats } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/**
 * Only verifiable numbers appear here: projects delivered, years active, and
 * the two dates that anchor the career. No client counts, no revenue, no
 * satisfaction percentages.
 */
export function Stats() {
  return (
    <section className="relative border-y border-line-soft bg-ink-2/50">
      <div className="shell">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={`group relative px-1 py-10 md:py-16 ${
                i % 2 === 1 ? "border-l border-line-soft pl-6 md:pl-10" : ""
              } ${i > 1 ? "border-t border-line-soft lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-10" : ""
              } ${i === 3 ? "lg:pl-10" : ""}`}
            >
              <div className="display text-5xl text-bone transition-colors duration-500 group-hover:text-accent-bright md:text-6xl lg:text-7xl">
                <Counter
                  value={stat.value}
                  suffix={"suffix" in stat ? stat.suffix : ""}
                  plain={"plain" in stat ? stat.plain : false}
                />
              </div>
              <p className="mt-4 max-w-[18ch] text-sm leading-snug text-mute">
                {stat.label}
              </p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
