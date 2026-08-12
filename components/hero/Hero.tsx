"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { useRef } from "react";
import { site } from "@/data/site";
import { PortraitFrame } from "./PortraitFrame";
import { MagneticButton } from "@/components/ui/MagneticButton";

/* One statement, broken into three lines so each can mask-reveal in sequence.
   The final word carries the accent. */
const headline = ["I Turn Ideas Into", "Digital Products", "That Work."];

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
        <div className="wash-top absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-ink to-transparent" />
        <div className="vignette absolute inset-0" />
      </div>

      <motion.div style={{ y, opacity }} className="shell w-full">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-14 xl:gap-20">
          {/* ---------- Left: the message ---------- */}
          <div className="order-2 max-w-2xl lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 backdrop-blur-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  Available for work
                </span>
              </span>
              <span className="eyebrow hidden sm:block">{site.location}</span>
            </motion.div>

            <h1 className="display text-[2.4rem] leading-[1.04] sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
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
                        that <span className="text-accent-bright">work.</span>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* One line. The stack itself does the rest of the talking. */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-md text-[15px] leading-relaxed text-mute md:text-base"
            >
              Frontend developer, full-stack capable. I build SaaS products,
              dashboards and eCommerce that ship.
            </motion.p>

            {/* Contact is the primary action — the reason this page exists. */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#contact">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton href="#work" variant="ghost">
                View My Work
              </MagneticButton>
            </motion.div>

            {/* Direct lines — no form required */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-sm font-medium text-bone transition-colors hover:text-accent-bright"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-emerald-500 transition-colors group-hover:border-accent">
                  <WhatsappIcon className="h-4 w-4" />
                </span>
                WhatsApp {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2.5 text-sm text-mute transition-colors hover:text-accent-bright"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">{site.email}</span>
                <span className="sm:hidden">Email</span>
              </a>
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-mute transition-colors hover:text-accent-bright"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </motion.div>

            {/* Keywords — scanned, not read */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line-soft pt-5"
            >
              {site.specialisation.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[11px] tracking-wide text-faint"
                >
                  {item}
                </li>
              ))}
            </motion.ul>
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
