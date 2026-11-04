"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { roles } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);

  /* The spine fills as the timeline is read. Scroll-linked rather than
     triggered, so it reflects position instead of just having happened. */
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="section-edge section-pad relative">
      <div className="shell">
        <SectionHeading
          index="04"
          label="Experience"
          title="Four years, many clients, one discipline."
          lede="Professional on-site engineering and independent client work, running in parallel since 2022."
        />

        <div ref={trackRef} className="relative">
          {/* Spine */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-line-soft md:left-[calc(9rem+7px)]"
          >
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="h-full w-full bg-gradient-to-b from-accent to-accent-bright"
            />
          </div>

          <ol className="space-y-14 md:space-y-20">
            {roles.map((role, i) => (
              <li key={`${role.company}-${role.period}`}>
                <Reveal delay={0.05} className="relative pl-9 md:pl-0">
                  <div className="grid gap-6 md:grid-cols-[9rem_1fr] md:gap-0">
                    {/* Year rail */}
                    <div className="md:pr-10 md:text-right">
                      <span className="font-mono text-sm text-accent">
                        {role.year}
                      </span>
                      <p className="mt-1 hidden font-mono text-[11px] text-faint md:block">
                        {role.mode}
                      </p>
                    </div>

                    {/* Node */}
                    <span
                      aria-hidden
                      className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border md:left-[9rem] ${
                        role.current
                          ? "border-accent bg-accent"
                          : "border-line bg-ink"
                      }`}
                    >
                      {role.current && (
                        <span className="animate-pulse-dot absolute inset-0 rounded-full bg-accent opacity-60" />
                      )}
                    </span>

                    {/* Entry */}
                    <div className="md:pl-10">
                      <div className="card-pro p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                          {role.position}
                        </h3>
                        {role.current && (
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-300">
                            Current
                          </span>
                        )}
                      </div>

                      <p className="mt-1.5 text-accent-bright">{role.company}</p>
                      <p className="mt-1 font-mono text-[11px] text-faint">
                        {role.period} · {role.location} · {role.mode}
                      </p>

                      <p className="mt-4 max-w-xl leading-relaxed text-mute">
                        {role.summary}
                      </p>

                      <ul className="mt-5 grid max-w-2xl gap-2 sm:grid-cols-2">
                        {role.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex gap-2.5 text-sm leading-relaxed text-mute"
                          >
                            <span
                              className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                              aria-hidden
                            />
                            {h}
                          </li>
                        ))}
                      </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
                {i < roles.length - 1 && <span className="sr-only">Next role</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
