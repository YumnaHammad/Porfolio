"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { projects, featuredProjects, railProjects, type Project } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProjectModal } from "./ProjectModal";
import {
  FeatureCard,
  SplitCard,
  VisualCard,
  StackedCard,
  LiveDemoButton,
} from "./ProjectCards";
import { ordinal } from "@/lib/utils";

/* The rail pulls in GSAP + ScrollTrigger — kept out of the initial bundle
   and off the server, since it measures the viewport to work at all. */
const ProjectRail = dynamic(
  () => import("./ProjectRail").then((m) => m.ProjectRail),
  { ssr: false },
);

export function Work() {
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const open = (p: Project) => setActive(p);
  const rest = projects.filter((p) => !p.featured && p.layout !== "rail");

  return (
    <>
      <section id="work" className="section-pad relative">
        <div className="shell">
          <SectionHeading
            index="02"
            label="Selected Work"
            title="Products, systems and interfaces."
            lede="Each project below is a real build. Open any one for the architecture, the interface decisions and the problem it solves."
          />

          <div className="space-y-24 md:space-y-36">
            {featuredProjects.map((project, i) => {
              const index = ordinal(i);
              const common = { project, index, onOpen: open };

              return (
                <Reveal key={project.slug} duration={0.9}>
                  {project.layout === "feature" && (
                    <FeatureCard {...common} priority={i === 0} />
                  )}
                  {project.layout === "split" && <SplitCard {...common} flip={i % 4 === 3} />}
                  {project.layout === "visual" && <VisualCard {...common} />}
                  {project.layout === "stacked" && <StackedCard {...common} />}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Horizontal rail */}
      <section className="relative pb-20 lg:pb-0">
        <ProjectRail
          projects={railProjects}
          offset={featuredProjects.length}
          onOpen={open}
        />
      </section>

      {/* Everything else + contextual CTA */}
      <section className="pb-24 md:pb-32">
        <div className="shell">
          {showAll && rest.length > 0 && (
            <ul className="mb-14 grid gap-4 md:grid-cols-2">
              {rest.map((project) => (
                <li
                  key={project.slug}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-line-soft bg-ink-2/50 px-6 py-5 transition-colors hover:border-accent/50"
                >
                  <button
                    type="button"
                    onClick={() => open(project)}
                    className="flex-1 text-left"
                  >
                    <span className="eyebrow">{project.category}</span>
                    <span className="mt-2 block text-xl font-medium tracking-tight">
                      {project.title}
                    </span>
                  </button>

                  <LiveDemoButton project={project} size="sm" />
                </li>
              ))}
            </ul>
          )}

          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 border-t border-line-soft pt-12 md:flex-row md:items-center">
              <div>
                <h3 className="display text-2xl sm:text-4xl">Have a project in mind?</h3>
                <p className="mt-3 max-w-md text-mute">
                  The work above started as a conversation. Yours can too.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {rest.length > 0 && (
                  <MagneticButton
                    variant="ghost"
                    onClick={() => setShowAll((v) => !v)}
                  >
                    {showAll ? "Hide extra projects" : "View All Projects"}
                  </MagneticButton>
                )}
                <MagneticButton href="#contact">
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}
