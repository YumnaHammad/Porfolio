"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";
import { ProjectPlate } from "./ProjectPlate";
import { cn } from "@/lib/utils";

interface CardProps {
  project: Project;
  index: string;
  onOpen: (p: Project) => void;
  priority?: boolean;
}

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function Meta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-faint">
      <span className="text-accent">{project.year}</span>
      <span aria-hidden>·</span>
      <span>{project.type}</span>
    </div>
  );
}

function Tech({ items, max = 5 }: { items: string[]; max?: number }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.slice(0, max).map((t) => (
        <span
          key={t}
          className="rounded-full border border-line-soft bg-surface/60 px-3 py-1 font-mono text-[10.5px] tracking-wide text-mute"
        >
          {t}
        </span>
      ))}
      {items.length > max && (
        <span className="rounded-full border border-line-soft px-3 py-1 font-mono text-[10.5px] text-faint">
          +{items.length - max}
        </span>
      )}
    </div>
  );
}

function Links({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="group/cta inline-flex items-center gap-2 text-sm font-medium tracking-tight transition-colors hover:text-accent-bright"
      >
        Read case study
        <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-all duration-300 group-hover/cta:border-accent group-hover/cta:bg-accent group-hover/cta:text-white">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </button>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-accent-bright"
        >
          Live <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`${project.title} repository`}
          className="text-mute transition-colors hover:text-accent-bright"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

/** Image well with parallax drift and a hover scrim. */
function Well({
  project,
  onOpen,
  className,
  priority,
  sizes,
}: CardProps & { className?: string; sizes?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-24, 24]);

  return (
    <div
      ref={ref}
      onClick={() => onOpen(project)}
      data-cursor="view"
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-accent/50",
        className,
      )}
    >
      <motion.div style={{ y }} className="absolute inset-[-24px]">
        <ProjectPlate project={project} priority={priority} sizes={sizes} />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 01 — Feature: full-bleed horizontal hero card                       */
/* ------------------------------------------------------------------ */
export function FeatureCard({ project, index, onOpen, priority }: CardProps) {
  return (
    <article className="group/card relative">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="eyebrow text-accent">{index}</span>
            <span className="h-px w-10 bg-line" aria-hidden />
            <span className="eyebrow">{project.category}</span>
          </div>
          <h3 className="display text-4xl sm:text-6xl lg:text-7xl">{project.title}</h3>
        </div>
        <span className="hidden rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-bright md:block">
          Featured
        </span>
      </div>

      <Well
        project={project}
        index={index}
        onOpen={onOpen}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 90vw"
        className="aspect-4/3 md:aspect-21/9"
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-mute">
            {project.description}
          </p>
          <div className="mt-7">
            <Links project={project} onOpen={onOpen} />
          </div>
        </div>
        <div className="space-y-5 lg:pt-1">
          <Meta project={project} />
          <Tech items={project.technologies} max={6} />
          <ul className="grid gap-1.5 pt-1">
            {project.capabilities.slice(0, 4).map((c) => (
              <li key={c} className="flex gap-2.5 text-sm text-mute">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 02 — Split: asymmetric two-column                                   */
/* ------------------------------------------------------------------ */
export function SplitCard({
  project,
  index,
  onOpen,
  flip,
}: CardProps & { flip?: boolean }) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <div
        className={cn(
          "lg:col-span-7",
          flip ? "lg:order-2 lg:col-start-6" : "lg:order-1",
        )}
      >
        <Well
          project={project}
          index={index}
          onOpen={onOpen}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="aspect-4/3 lg:aspect-16/11"
        />
      </div>

      <div className={cn("lg:col-span-5", flip ? "lg:order-1 lg:row-start-1" : "lg:order-2")}>
        <div className="mb-4 flex items-center gap-3">
          <span className="eyebrow text-accent">{index}</span>
          <span className="h-px w-8 bg-line" aria-hidden />
          <span className="eyebrow">{project.category}</span>
        </div>
        <h3 className="display text-3xl sm:text-5xl">{project.title}</h3>
        <p className="mt-5 max-w-md leading-relaxed text-mute">{project.description}</p>
        <div className="mt-6">
          <Tech items={project.technologies} />
        </div>
        <div className="mt-7 space-y-5">
          <Meta project={project} />
          <Links project={project} onOpen={onOpen} />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 03 — Visual: image-led, copy overlaid                               */
/* ------------------------------------------------------------------ */
export function VisualCard({ project, index, onOpen }: CardProps) {
  return (
    <article className="relative">
      <Well
        project={project}
        index={index}
        onOpen={onOpen}
        sizes="100vw"
        className="aspect-4/5 sm:aspect-16/10 lg:aspect-21/9"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-12">
        <div className="mb-3 flex items-center gap-3">
          <span className="eyebrow text-accent">{index}</span>
          <span className="eyebrow">{project.category}</span>
        </div>
        <h3 className="display text-3xl sm:text-5xl lg:text-6xl">{project.title}</h3>
        <p className="mt-4 max-w-xl leading-relaxed text-mute">{project.description}</p>
        <div className="pointer-events-auto mt-6 flex flex-wrap items-center gap-6">
          <Links project={project} onOpen={onOpen} />
          <div className="hidden md:block">
            <Tech items={project.technologies} max={4} />
          </div>
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 04 — Stacked: editorial card                                        */
/* ------------------------------------------------------------------ */
export function StackedCard({ project, index, onOpen }: CardProps) {
  return (
    <article className="rounded-3xl border border-line-soft bg-ink-2/60 p-5 md:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="eyebrow text-accent">{index}</span>
              <span className="h-px w-8 bg-line" aria-hidden />
              <span className="eyebrow">{project.category}</span>
            </div>
            <h3 className="display text-3xl sm:text-5xl">{project.title}</h3>
            <p className="mt-5 leading-relaxed text-mute">{project.description}</p>
          </div>

          <div className="mt-8 space-y-5">
            <ul className="grid gap-1.5">
              {project.capabilities.slice(0, 3).map((c) => (
                <li key={c} className="flex gap-2.5 text-sm text-mute">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
            <Tech items={project.technologies} max={4} />
            <Links project={project} onOpen={onOpen} />
          </div>
        </div>

        <Well
          project={project}
          index={index}
          onOpen={onOpen}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-4/3 lg:aspect-auto lg:min-h-[26rem]"
        />
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* 05 — Rail card: fixed-width, used in the horizontal scroller        */
/* ------------------------------------------------------------------ */
export function RailCard({ project, index, onOpen }: CardProps) {
  return (
    <article className="w-[78vw] shrink-0 sm:w-[52vw] lg:w-[34vw] xl:w-[30rem]">
      <div
        onClick={() => onOpen(project)}
        data-cursor="view"
        className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-accent/50"
      >
        <ProjectPlate project={project} sizes="(max-width: 1024px) 78vw, 30rem" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30"
        />
        <span className="absolute left-5 top-5 font-mono text-[11px] text-accent-bright">
          {index}
        </span>
      </div>

      <div className="mt-6">
        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-2.5 text-2xl font-medium tracking-tight">{project.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-mute">
          {project.description}
        </p>
        <div className="mt-5">
          <Tech items={project.technologies} max={3} />
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-5 inline-flex items-center gap-1.5 text-sm text-mute transition-colors hover:text-accent-bright"
          >
            Visit live site
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
