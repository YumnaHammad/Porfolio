"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery, useReducedMotionSafe } from "@/lib/useMediaQuery";

type CursorMode = "default" | "button" | "view" | "link";

/**
 * Desktop-only pointer. A small dot tracks exactly; the ring lags on a spring.
 * Elements opt in by declaring data-cursor="view" | "button" | "link" — no
 * central registry of selectors to keep in sync.
 *
 * Hidden entirely for coarse pointers (CSS, .cursor-host) and never mounted
 * when the user prefers reduced motion.
 */
export function CustomCursor() {
  const [mode, setMode] = useState<CursorMode>("default");
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotionSafe();

  // Only precise pointers get a custom cursor.
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine)");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 30, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 320, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!enabled || reduced) return;

    function onMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const host = target?.closest?.("[data-cursor]") as HTMLElement | null;
      if (host) {
        setMode((host.dataset.cursor as CursorMode) ?? "default");
      } else if (target?.closest?.("a, button, input, textarea, select")) {
        setMode("link");
      } else {
        setMode("default");
      }
    }

    function onLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, reduced, x, y]);

  if (!enabled || reduced) return null;

  const ringSize = mode === "view" ? 76 : mode === "button" ? 52 : mode === "link" ? 40 : 26;

  return (
    <div className="cursor-host pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      {/* Precise dot */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-accent-bright"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && mode === "default" ? 1 : 0 }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing ring */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full border border-accent-bright/60 backdrop-blur-[1px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          backgroundColor:
            mode === "view" ? "rgba(124,92,255,0.92)" : "rgba(124,92,255,0)",
          borderColor:
            mode === "view" ? "rgba(124,92,255,0)" : "rgba(155,131,255,0.6)",
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      >
        <motion.span
          className="font-mono text-[10px] uppercase tracking-[0.16em] text-white"
          animate={{ opacity: mode === "view" ? 1 : 0, scale: mode === "view" ? 1 : 0.6 }}
          transition={{ duration: 0.18 }}
        >
          View
        </motion.span>
      </motion.div>
    </div>
  );
}
