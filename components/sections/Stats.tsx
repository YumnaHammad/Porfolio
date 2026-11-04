"use client";

import { stats } from "@/data/site";
import { Counter } from "@/components/ui/Counter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/**
 * Only verifiable numbers appear here: projects delivered, years active, and
 * the two dates that anchor the career. No client counts, no revenue, no
 * satisfaction percentages.
 *
 * A full-bleed blue band: the first strong change of colour on the page.
 */
export function Stats() {
  return (
    <section className="band-blue relative overflow-hidden">
      <div aria-hidden className="grid-field absolute inset-0 opacity-[0.12] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="shell relative">
        <Stagger className="grid grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {stats.map((stat, i) => (
            <StaggerItem
              key={stat.label}
              className={`group relative px-1 py-10 md:py-14 ${
                i % 2 === 1 ? "border-l border-white/15 pl-6 md:pl-10" : ""
              } ${i > 1 ? "border-t border-white/15 lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-10" : ""
              } ${i === 3 ? "lg:pl-10" : ""}`}
            >
              <div className="display text-4xl text-white md:text-5xl lg:text-6xl">
                <Counter
                  value={stat.value}
                  suffix={"suffix" in stat ? stat.suffix : ""}
                  plain={"plain" in stat ? stat.plain : false}
                />
              </div>
              <p className="mt-4 max-w-[20ch] text-sm leading-snug text-white/75">
                {stat.label}
              </p>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 h-0.5 w-10 bg-rose-400 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
