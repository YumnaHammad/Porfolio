"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { RailCard } from "./ProjectCards";
import { ordinal } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

/**
 * Horizontally scrolling project rail.
 *
 * On large pointers the section pins and vertical scroll is translated into
 * horizontal travel (GSAP + ScrollTrigger). Below that breakpoint — and
 * whenever reduced motion is requested — it degrades to a native swipeable
 * scroller, which is the better interaction on touch anyway.
 */
export function ProjectRail({
  projects,
  offset,
  onOpen,
}: {
  projects: Project[];
  offset: number;
  onOpen: (p: Project) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const distance = () => track.scrollWidth - window.innerWidth + 96;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
          gsap.set(track, { x: 0 });
        };
      },
    );

    return () => mm.revert();
  }, [projects.length]);

  return (
    <div ref={sectionRef} className="relative lg:h-screen lg:overflow-hidden">
      <div className="shell flex h-full flex-col justify-center py-4 lg:py-0">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="eyebrow text-accent">More work</span>
            </div>
            <h3 className="display text-2xl sm:text-4xl">Selected projects</h3>
          </div>
          <p className="hidden items-center gap-2.5 font-mono text-[11px] text-faint lg:flex">
            Scroll to explore <MoveRight className="h-4 w-4" />
          </p>
        </div>

        <div className="-mx-5 overflow-x-auto px-5 pb-4 md:-mx-10 md:px-10 lg:mx-0 lg:overflow-visible lg:px-0 lg:pb-0">
          <div
            ref={trackRef}
            className="flex w-max gap-6 md:gap-10"
            style={{ willChange: "transform" }}
          >
            {projects.map((project, i) => (
              <RailCard
                key={project.slug}
                project={project}
                index={ordinal(i + offset)}
                onOpen={onOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
