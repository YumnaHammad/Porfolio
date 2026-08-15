"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";

interface CounterProps {
  value: number;
  suffix?: string;
  /** Years and similar literals must not be comma-formatted or counted from zero. */
  plain?: boolean;
  duration?: number;
}

export function Counter({ value, suffix = "", plain, duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduced = useReducedMotionSafe();
  const [display, setDisplay] = useState(plain ? value - 6 : 0);

  useEffect(() => {
    // Reduced motion renders the final value directly — no animation to run.
    if (!inView || reduced) return;

    const from = plain ? value - 6 : 0;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      // easeOutExpo — fast arrival, soft settle
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(from + (value - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, plain, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {reduced ? value : display}
      {suffix}
    </span>
  );
}
