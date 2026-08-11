"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { cn } from "@/lib/utils";

interface MagneticProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
  external?: boolean;
}

/**
 * Buttons that lean toward the pointer within their own bounds.
 * Pull is capped at ~22% of the offset so the control never separates
 * from its hit area — the effect is felt, not chased.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
  external,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotionSafe();

  function handleMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.22, y: y * 0.28 });
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 overflow-hidden";

  const styles =
    variant === "primary"
      ? "bg-bone text-ink hover:bg-accent-bright hover:text-white"
      : "border border-line text-bone hover:border-accent hover:text-accent-bright";

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">{children}</span>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:sweep_0.9s_ease-out]"
        />
      )}
    </>
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.5 }}
      className="inline-block"
      data-cursor={variant === "primary" ? "button" : undefined}
    >
      {href ? (
        <a
          href={href}
          aria-label={ariaLabel}
          className={cn(base, styles, className)}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {inner}
        </a>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={cn(base, styles, className)}
        >
          {inner}
        </button>
      )}
    </motion.div>
  );
}
