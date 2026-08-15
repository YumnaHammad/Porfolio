"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clusters, engineering, type Skill } from "@/data/skills";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const levelStyles: Record<Skill["level"], string> = {
  Core: "border-accent/40 bg-accent/10 text-accent-bright",
  Advanced: "border-line bg-surface text-bone",
  "Working knowledge": "border-line-soft bg-transparent text-faint",
};

/**
 * No percentage bars. A number like "React — 95%" measures nothing, so skills
 * are grouped by cluster and labelled Core / Advanced / Working knowledge, with
 * the detail panel showing what each one is actually used for.
 */
export function Skills() {
  const [selected, setSelected] = useState<Skill>(clusters[0].skills[0]);

  const related = (selected.projects ?? [])
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section id="skills" className="section-alt section-pad relative">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Capabilities"
          title="The stack, and what each part is for."
          lede="Grouped by the job each one does instead of ranked by a made up percentage. Pick any technology to see where it gets used."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Detail panel */}
          <div className="lg:order-2">
            <div className="lg:sticky lg:top-32">
              <Reveal direction="left">
                <div className="grain relative min-h-[20rem] overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface-2 to-ink-2 p-8">
                  <div className="grid-field absolute inset-0 opacity-25" aria-hidden />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selected.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="relative"
                    >
                      <span
                        className={cn(
                          "inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em]",
                          levelStyles[selected.level],
                        )}
                      >
                        {selected.level}
                      </span>

                      <h3 className="display mt-6 text-4xl sm:text-5xl">
                        {selected.name}
                      </h3>

                      {selected.usedFor?.length ? (
                        <div className="mt-8">
                          <p className="eyebrow">Used for</p>
                          <ul className="mt-3 space-y-2">
                            {selected.usedFor.map((u) => (
                              <li key={u} className="flex gap-3 text-[15px] text-mute">
                                <span
                                  className="mt-2.5 h-px w-4 shrink-0 bg-accent"
                                  aria-hidden
                                />
                                {u}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <p className="mt-8 text-[15px] leading-relaxed text-mute">
                          Part of the day-to-day toolkit across client and
                          professional work.
                        </p>
                      )}

                      {related.length > 0 && (
                        <div className="mt-8 border-t border-line-soft pt-6">
                          <p className="eyebrow">Shipped in</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {related.map((p) => (
                              <a
                                key={p!.slug}
                                href="#work"
                                className="rounded-full border border-line px-3.5 py-1.5 text-xs text-mute transition-colors hover:border-accent hover:text-accent-bright"
                              >
                                {p!.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Clusters */}
          <div className="space-y-10 lg:order-1">
            {clusters.map((cluster) => (
              <Reveal key={cluster.id} className="border-t border-line-soft pt-7">
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-medium tracking-tight">
                    {cluster.title}
                  </h3>
                  <p className="font-mono text-[11px] text-faint">{cluster.note}</p>
                </div>

                <Stagger className="flex flex-wrap gap-2" gap={0.03}>
                  {cluster.skills.map((skill) => {
                    const isActive = selected.name === skill.name;
                    return (
                      <StaggerItem key={skill.name}>
                        <button
                          type="button"
                          onMouseEnter={() => setSelected(skill)}
                          onFocus={() => setSelected(skill)}
                          onClick={() => setSelected(skill)}
                          aria-pressed={isActive}
                          className={cn(
                            "rounded-full border px-4 py-2 text-sm transition-all duration-300",
                            isActive
                              ? "border-accent bg-accent/12 text-accent-bright"
                              : "border-line-soft text-mute hover:border-line hover:text-bone",
                          )}
                        >
                          {skill.name}
                          {skill.level === "Core" && (
                            <span
                              className="ml-2 inline-block h-1 w-1 rounded-full bg-accent align-middle"
                              aria-hidden
                            />
                          )}
                        </button>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Engineering practice */}
        <Reveal className="mt-20 border-t border-line-soft pt-10">
          <p className="eyebrow mb-6">Engineering practice</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {engineering.map((item) => (
              <span key={item} className="text-sm text-mute">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
