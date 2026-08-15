"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Reduced motion is handled explicitly in this codebase — every animated
 * component reads the preference through useReducedMotionSafe and simplifies
 * itself, and the CSS layer disables keyframe/transition motion.
 *
 * framer-motion's own automatic handling would additionally rewrite initial
 * styles on the client only, which desynchronises hydration from the server
 * render. Setting reducedMotion to "never" hands that responsibility entirely
 * to our hooks: one source of truth, no mismatch.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
