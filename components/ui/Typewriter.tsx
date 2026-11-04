"use client";

import { useEffect, useState } from "react";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";

type Props = {
  /** Phrases cycled in order, forever. */
  words: readonly string[];
  className?: string;
};

const TYPE_MS = 62;
const DELETE_MS = 30;
const HOLD_MS = 1700;

/**
 * Types a phrase out, holds it, deletes it, moves to the next.
 *
 * The longest phrase is rendered invisibly underneath so the line reserves its
 * final width and height up front — the paragraph below never reflows as the
 * text grows and shrinks. With reduced motion the first phrase is simply shown.
 */
export function Typewriter({ words, className = "" }: Props) {
  const reduced = useReducedMotionSafe();
  /* One state object, advanced only from inside the timer — every phase change
     is a single scheduled update rather than a cascade of synchronous ones. */
  const [{ index, count, deleting }, setState] = useState({
    index: 0,
    count: 0,
    deleting: false,
  });

  const word = words[index] ?? "";

  useEffect(() => {
    if (reduced) return;

    const atEnd = !deleting && count === word.length;
    const atStart = deleting && count === 0;
    const delay = atEnd ? HOLD_MS : deleting ? DELETE_MS : TYPE_MS;

    const t = setTimeout(() => {
      setState((s) => {
        if (atStart) {
          // Emptied — move to the next phrase and start typing again.
          return { index: (s.index + 1) % words.length, count: 0, deleting: false };
        }
        if (atEnd) return { ...s, deleting: true };
        return { ...s, count: s.count + (s.deleting ? -1 : 1) };
      });
    }, delay);

    return () => clearTimeout(t);
  }, [count, deleting, reduced, word.length, words.length]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const shown = reduced ? word : word.slice(0, count);

  return (
    <span className={`relative inline-block align-top ${className}`}>
      {/* Width/height reservation — never read, never seen. */}
      <span aria-hidden className="invisible block">
        {longest}
      </span>

      <span className="absolute inset-0 block">
        <span className="sr-only">{words.join(", ")}</span>
        <span aria-hidden>{shown}</span>
        <span
          aria-hidden
          className="ml-[0.06em] inline-block h-[0.82em] w-[3px] translate-y-[0.08em] rounded-[2px] bg-accent-bright align-middle motion-safe:animate-caret"
        />
      </span>
    </span>
  );
}
