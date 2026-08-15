"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const paragraph =
  "Responsive, scalable interfaces across SaaS, eCommerce, dashboards, WordPress and custom internal systems.";

const lines = ["From Figma to production.", "From idea to interface.", "From interface to product."];

const ribbon = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "React Query",
  "Framer Motion",
  "GSAP",
  "Remotion",
  "MongoDB",
  "REST APIs",
  "WordPress",
  "WooCommerce",
  "Illustrator",
  "Vercel",
];

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    /* The hero already ends with breathing room, so the top padding here stays
       well under section-pad. A hairline marks where the hero ends, otherwise
       the two just run into each other as one long gap. */
    <section className="section-edge relative pt-12 pb-20 md:pt-14 md:pb-28 xl:pt-16 xl:pb-32">
      <div className="shell">
        {/* Three-line manifesto */}
        <div className="mb-12 md:mb-16">
          {lines.map((line, i) => (
            /* The trigger has to live on the slot, not on the text inside it.
               IntersectionObserver clips a target against its ancestors'
               overflow, so a line parked at 105% inside this hidden box never
               registers as visible and would wait forever. The slot itself is
               unclipped, so it observes reliably and drives the line by
               variant — the same arrangement TextReveal uses. */
            <motion.div
              key={line}
              className="overflow-hidden pb-[0.06em]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            >
              <motion.p
                variants={{
                  hidden: { y: reduced ? 0 : "105%", opacity: reduced ? 0 : 1 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: reduced ? 0.2 : 1,
                      delay: reduced ? 0 : i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="display text-[2rem] leading-[1.06] sm:text-5xl lg:text-[4rem]"
              >
                <span className={i === 2 ? "text-bone" : "text-mute"}>{line}</span>
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Scroll-linked paragraph — words resolve as the section is read */}
        <div ref={ref} className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal direction="none" className="lg:pt-3">
            <div className="flex items-center gap-3 lg:flex-col lg:items-start">
              <span className="eyebrow text-accent">01</span>
              <span className="h-px w-8 bg-line lg:mt-2 lg:w-14" aria-hidden />
            </div>
          </Reveal>

          <p className="max-w-4xl text-xl leading-[1.5] tracking-tight sm:text-2xl lg:text-[2rem] lg:leading-[1.45]">
            {reduced
              ? paragraph
              : words.map((word, i) => (
                  <Word
                    key={`${word}-${i}`}
                    progress={scrollYProgress}
                    range={[i / words.length, (i + 1.6) / words.length]}
                  >
                    {word}
                  </Word>
                ))}
          </p>
        </div>
      </div>

      <div className="mt-14 md:mt-20">
        <Marquee items={ribbon} />
      </div>
    </section>
  );
}
