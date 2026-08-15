"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  /** Seconds between each word. */
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
}

/**
 * Word-by-word mask reveal. Each word rides up out of an overflow-hidden slot,
 * which reads as typographic rather than as a generic fade.
 *
 * Accessibility: the full string stays in one aria-label and the animated words
 * are hidden from assistive tech, so screen readers get a sentence, not confetti.
 */
export function TextReveal({
  text,
  className,
  stagger = 0.045,
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  const reduced = useReducedMotionSafe();
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom pb-[0.12em]"
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/** Highlights a single fragment of a headline in the accent colour. */
export function Accent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("text-accent-bright", className)}>{children}</span>;
}
