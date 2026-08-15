"use client";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Continuous technology ribbon. The list is rendered twice and translated by
 * -50%, so the loop is seamless without measuring anything at runtime.
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div
      className={`relative flex overflow-hidden border-y border-line-soft py-5 ${className ?? ""}`}
      aria-hidden
    >
      {/* Edge fades so the ribbon dissolves rather than cutting off */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10 motion-reduce:animate-none">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs uppercase tracking-[0.2em] text-faint whitespace-nowrap"
          >
            {item}
            <span className="ml-10 text-accent/50">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
