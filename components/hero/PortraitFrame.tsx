"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { site } from "@/data/site";

const floatingLabels = [
  { text: "React.js", top: "6%", left: "-14%", delay: 0 },
  { text: "Next.js", top: "34%", right: "-13%", delay: 0.8 },
  { text: "TypeScript", bottom: "22%", left: "-16%", delay: 1.6 },
  { text: "Vue.js", bottom: "16%", right: "-12%", delay: 2.4 },
];

/**
 * The hero portrait sits inside a 3:4 frame, matching the source image so it
 * fills edge to edge.
 *
 * The image is rendered with object-contain and centred, so any other source
 * ratio is letterboxed rather than cropped, stretched or zoomed — a face is
 * never cut and proportions are never altered.
 *
 * Until `site.portrait` is set, the frame renders a composed monogram plate so
 * the layout is complete and correctly proportioned in the meantime.
 */
export function PortraitFrame() {
  const reduced = useReducedMotionSafe();

  return (
    /* Compact on phones so the headline still lands in the first viewport —
       the portrait stays visible, it just stops owning the whole screen. */
    <div className="relative mx-auto w-full max-w-[13.5rem] sm:max-w-[18rem] lg:max-w-[24rem]">
      {/* Atmospheric bloom behind the frame */}
      <div
        aria-hidden
        className="subject-glow absolute -inset-16 -z-10 rounded-full opacity-70 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: reduced ? 0 : 40, scale: reduced ? 1 : 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Offset technical outline — depth without a drop shadow */}
        <div
          aria-hidden
          className="absolute -bottom-3 -right-3 h-full w-full rounded-[2rem] border border-accent/25"
        />

        {/* 3:4 — the portrait's own ratio, so it fills the frame exactly */}
        <div className="grain relative aspect-3/4 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-b from-surface-2 to-ink">
          <div aria-hidden className="grid-field absolute inset-0 opacity-40" />

          {site.portrait ? (
            <>
              {/* The portrait is a cut-out on transparency, so a bloom behind
                  the subject gives it something to stand against. */}
              <div aria-hidden className="subject-glow absolute inset-0" />
              <Image
                src={site.portrait}
                alt={site.portraitAlt}
                fill
                priority
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 20rem, 24rem"
                /* object-contain, never cover: a different source ratio would
                   letterbox rather than crop the subject or stretch it. */
                className="object-contain object-center [filter:saturate(0.92)_contrast(1.04)] drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
              />
              <div aria-hidden className="frame-falloff absolute inset-0" />
            </>
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="display bg-gradient-to-b from-bone/90 to-bone/10 bg-clip-text text-[4rem] leading-none text-transparent sm:text-[7rem]">
                  {site.monogram}
                </div>
                <p className="eyebrow mt-4">{site.location}</p>
              </div>
            </div>
          )}

          {/* Grounds the cut-out against the panel instead of ending abruptly */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent"
          />

          {/* Corner ticks */}
          {[
            "left-4 top-4 border-l border-t",
            "right-4 top-4 border-r border-t",
            "left-4 bottom-4 border-l border-b",
            "right-4 bottom-4 border-r border-b",
          ].map((pos) => (
            <span
              key={pos}
              aria-hidden
              className={`absolute h-4 w-4 border-accent/40 ${pos}`}
            />
          ))}

        </div>

        {/* Floating technology labels */}
        {floatingLabels.map((label) => (
          <motion.span
            key={label.text}
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 + label.delay * 0.12, duration: 0.6 }}
            style={{
              top: label.top,
              left: label.left,
              right: label.right,
              bottom: label.bottom,
              animationDelay: `${label.delay}s`,
            }}
            className="animate-drift absolute hidden rounded-full border border-line bg-ink-2/80 px-3.5 py-1.5 font-mono text-[10px] tracking-wider text-mute backdrop-blur-sm md:block motion-reduce:animate-none"
          >
            {label.text}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
