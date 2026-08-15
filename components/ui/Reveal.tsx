"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMediaQuery, useReducedMotionSafe } from "@/lib/useMediaQuery";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
};

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  /** Re-trigger every time it enters the viewport. Off by default: entrance is a one-time event. */
  repeat?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
}

/**
 * The single entrance primitive for the site.
 * With reduced motion the content simply appears — no offset, no fade delay.
 */
export function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  className,
  repeat = false,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotionSafe();
  const Component = motion[as];

  /* Below the two-column breakpoint there is no horizontal room to travel
     through: a pre-animation x offset would push the page sideways while the
     element waits off-screen. Horizontal reveals become vertical ones there —
     the same recomposition the layouts make. */
  const wide = useMediaQuery("(min-width: 1024px)");
  const resolved =
    !wide && (direction === "left" || direction === "right") ? "up" : direction;

  const { x, y } = reduced ? offset.none : offset[resolved];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: !repeat, margin: "0px 0px -12% 0px" }}
      transition={{
        duration: reduced ? 0.2 : duration,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "section";
}

/** Parent for staggered children — pair with <StaggerItem>. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  as = "div",
}: StaggerProps) {
  const reduced = useReducedMotionSafe();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : gap } },
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduced = useReducedMotionSafe();
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduced ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </Component>
  );
}
