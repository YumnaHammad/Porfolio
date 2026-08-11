"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

const paragraph =
  "I design and build responsive, scalable digital experiences across SaaS, eCommerce, dashboards, business websites, interactive tools and custom systems.";

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
    <section className="section-pad relative">
      <div className="shell">
        {/* Three-line manifesto */}
        <div className="mb-20 md:mb-28">
          {lines.map((line, i) => (
            <div key={line} className="overflow-hidden pb-[0.06em]">
              <motion.p
                initial={{ y: reduced ? 0 : "105%", opacity: reduced ? 0 : 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="display text-[2rem] leading-[1.06] sm:text-5xl lg:text-[4rem]"
              >
                <span className={i === 2 ? "text-bone" : "text-mute"}>{line}</span>
              </motion.p>
            </div>
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

      <div className="mt-20 md:mt-28">
        <Marquee items={ribbon} />
      </div>
    </section>
  );
}
