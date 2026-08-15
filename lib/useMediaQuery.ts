"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Subscribes to a media query the way React wants external state read:
 * useSyncExternalStore, so there is no setState-in-effect cascade and the
 * server snapshot is deterministic (false — no assumptions about the device).
 */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/**
 * Reduced-motion preference, read hydration-safely.
 *
 * framer-motion's own useReducedMotion reports the real value on the very first
 * client render while the server rendered `false`, so any component that
 * branches its markup on it (word-split headlines, for one) mismatches and
 * React throws the tree away. Reading through useSyncExternalStore makes the
 * hydration render match the server, then updates immediately after.
 */
export function useReducedMotionSafe() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
