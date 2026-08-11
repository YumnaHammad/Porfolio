"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { site } from "@/data/site";
import { PortraitFrame } from "./PortraitFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";

const headline = ["Building digital", "products that feel", "as good as they work."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The hero recedes slightly as the next section arrives.
  const y = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0.25]);

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32 lg:pt-24"
    >
      {/* Ground: grid, horizon glow, vignette */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <div className="grid-field absolute inset-0 opacity-[0.55]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 60% at 50% 0%, rgba(124,92,255,0.10), transparent 70%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 50%, transparent 40%, rgba(8,8,10,0.9) 100%)",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="shell w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
          {/* ---------- Left: the message ---------- */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  Open to freelance work
                </span>
              </span>
              <span className="eyebrow hidden sm:block">
                {site.role} — {site.location}
              </span>
            </motion.div>

            <h1 className="display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
              {headline.map((line, i) => (
                <span key={line} className="block overflow-hidden pb-[0.08em]">
                  <motion.span
                    className="block"
                    initial={{ y: reduced ? 0 : "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.1 + i * 0.11,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {i === 2 ? (
                      <>
                        as good as they{" "}
                        <span className="text-accent-bright">work.</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-mute md:text-lg"
            >
              Frontend-focused developer specialising in React.js, Next.js,
              TypeScript, modern UI, animation and AI-powered development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#work">
                View My Work
                <ArrowDown className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Let&rsquo;s Work Together
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line-soft pt-6"
            >
              {site.specialisation.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] tracking-wide text-faint"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ---------- Right: the portrait ---------- */}
          <div className="order-1 lg:order-2">
            <PortraitFrame />
          </div>
        </div>
      </motion.div>

      {/* Scroll affordance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
        aria-hidden
      >
        <span className="eyebrow">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-line">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent-bright"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
