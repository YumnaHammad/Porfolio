"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Project } from "@/data/projects";
import { ProjectPlate } from "./ProjectPlate";

/**
 * Case study overlay.
 *
 * Sections are rendered only when the project actually carries that content —
 * an absent "result" or "problem" is simply not shown rather than filled in.
 * Numbering is computed from what renders, so it never skips.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Keep focus inside the dialog.
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  const cs = project?.caseStudy;

  const blocks: { label: string; body: React.ReactNode }[] = [];
  if (cs?.overview) blocks.push({ label: "Overview", body: <p>{cs.overview}</p> });
  if (cs?.problem) blocks.push({ label: "Problem", body: <p>{cs.problem}</p> });
  if (cs?.approach) blocks.push({ label: "Approach", body: <p>{cs.approach}</p> });
  if (cs?.architecture?.length)
    blocks.push({
      label: "Architecture",
      body: (
        <ul className="space-y-2.5">
          {cs.architecture.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    });
  if (cs?.uiux?.length)
    blocks.push({
      label: "UI / UX",
      body: (
        <ul className="space-y-2.5">
          {cs.uiux.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2.5 h-px w-4 shrink-0 bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
    });
  if (project)
    blocks.push({
      label: "Technologies",
      body: (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[11px] text-mute"
            >
              {t}
            </span>
          ))}
        </div>
      ),
    });
  if (cs?.challenges) blocks.push({ label: "Challenges", body: <p>{cs.challenges}</p> });
  if (cs?.solution) blocks.push({ label: "Solution", body: <p>{cs.solution}</p> });
  if (cs?.result) blocks.push({ label: "Result", body: <p>{cs.result}</p> });

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-ink/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="shell relative min-h-full py-8 md:py-14"
          >
            {/* Close */}
            <div className="sticky top-0 z-20 -mx-1 mb-8 flex justify-end">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="flex items-center gap-2 rounded-full border border-line bg-ink/85 px-4 py-2.5 text-xs backdrop-blur-md transition-colors hover:border-accent hover:text-accent-bright"
              >
                Close
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mx-auto max-w-5xl">
              {/* Header */}
              <p className="eyebrow text-accent">{project.category}</p>
              <h2 className="display mt-5 text-3xl sm:text-4xl lg:text-5xl">
                {project.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mute">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent-bright"
                  >
                    <GithubIcon className="h-4 w-4" /> Repository
                  </a>
                )}
                <span className="font-mono text-[11px] text-faint">
                  {project.type} · {project.year}
                </span>
              </div>

              {project.demoNote && (
                <p className="mt-3 font-mono text-[11px] text-faint">
                  {project.demoNote}
                </p>
              )}

              {/* Cover */}
              <div className="group relative mt-12 aspect-16/10 overflow-hidden rounded-2xl border border-line md:aspect-21/9">
                <ProjectPlate project={project} sizes="(max-width: 1280px) 100vw, 64rem" />
              </div>

              {/* Capabilities */}
              <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {project.capabilities.map((c) => (
                  <div
                    key={c}
                    className="rounded-xl border border-line-soft bg-surface/50 px-4 py-3.5 text-sm text-mute"
                  >
                    {c}
                  </div>
                ))}
              </div>

              {/* Numbered case-study blocks */}
              <div className="mt-16 space-y-14">
                {blocks.map((block, i) => (
                  <section
                    key={block.label}
                    className="grid gap-5 border-t border-line-soft pt-8 md:grid-cols-[10rem_1fr] md:gap-12"
                  >
                    <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
                      <span className="eyebrow text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-sm font-medium tracking-tight">
                        {block.label}
                      </h3>
                    </div>
                    <div className="max-w-2xl text-[15px] leading-relaxed text-mute">
                      {block.body}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-16 border-t border-line-soft pt-8">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="group inline-flex items-center gap-3 text-lg tracking-tight transition-colors hover:text-accent-bright"
                >
                  Want something like this built?
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
