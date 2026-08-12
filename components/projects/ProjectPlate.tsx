"use client";

import Image from "next/image";
import type { Project, ProjectMotif } from "@/data/projects";
import { cn } from "@/lib/utils";

/**
 * Project cover.
 *
 * If a screenshot exists it is rendered with `object-cover object-top` at the
 * card's own ratio — screenshots are never zoomed past their natural scale.
 *
 * Without a screenshot the card renders a generated plate: an abstract
 * wireframe of the interface type it represents. It is honest (it never
 * pretends to be a screenshot) and keeps the showcase composed.
 */

/* Theme-aware: these resolve to CSS variables defined per theme in
   globals.css, so the generated covers re-grade in light mode along with
   everything else. */
const stroke = "var(--plate-stroke)";
const faint = "var(--plate-faint)";
const solid = "var(--plate-solid)";

function Motif({ motif }: { motif: ProjectMotif }) {
  switch (motif) {
    case "editor":
      return (
        <g>
          {/* tool rail */}
          <rect x="24" y="24" width="52" height="200" rx="6" stroke={faint} fill="none" />
          {[38, 66, 94, 122].map((y, i) => (
            <rect
              key={y}
              x="36"
              y={y}
              width="28"
              height="18"
              rx="4"
              fill={i === 0 ? solid : "none"}
              stroke={i === 0 ? stroke : faint}
            />
          ))}
          {/* canvas */}
          <rect x="90" y="24" width="196" height="150" rx="6" stroke={faint} fill="none" />
          <rect x="106" y="42" width="120" height="9" rx="4.5" fill={faint} />
          <rect x="106" y="60" width="164" height="7" rx="3.5" fill={faint} />
          <rect x="106" y="76" width="150" height="7" rx="3.5" fill={faint} />
          <rect x="106" y="98" width="164" height="42" rx="5" fill={solid} stroke={stroke} />
          <rect x="118" y="112" width="96" height="7" rx="3.5" fill={stroke} />
          <rect x="118" y="124" width="130" height="6" rx="3" fill={faint} />
          {/* AI prompt bar */}
          <rect x="90" y="190" width="196" height="34" rx="17" fill={solid} stroke={stroke} />
          <circle cx="112" cy="207" r="7" fill={stroke} />
          <rect x="128" y="203" width="104" height="8" rx="4" fill={faint} />
          <rect x="246" y="198" width="28" height="18" rx="9" fill={stroke} />
          {/* inspector */}
          <rect x="300" y="24" width="76" height="200" rx="6" stroke={faint} fill="none" />
          {[40, 70, 100, 130, 160, 190].map((y) => (
            <rect key={y} x="312" y={y} width={y % 60 ? 52 : 40} height="6" rx="3" fill={faint} />
          ))}
        </g>
      );

    case "video":
      return (
        <g>
          {/* preview canvas */}
          <rect x="24" y="20" width="220" height="124" rx="6" fill={solid} stroke={stroke} />
          <path d="M120 66l30 18-30 18z" fill={stroke} />
          {/* scene inspector */}
          <rect x="256" y="20" width="120" height="124" rx="6" stroke={faint} fill="none" />
          {[34, 52, 70, 88, 106].map((y) => (
            <rect key={y} x="268" y={y} width={y % 3 ? 88 : 62} height="6" rx="3" fill={faint} />
          ))}
          {/* timeline */}
          <rect x="24" y="164" width="352" height="60" rx="6" stroke={faint} fill="none" />
          {[32, 104, 176, 248, 320].map((x, i) => (
            <rect
              key={x}
              x={x}
              y="176"
              width={i === 1 ? 64 : 56}
              height="16"
              rx="3"
              fill={i === 1 ? stroke : solid}
            />
          ))}
          {[32, 96, 160, 224, 288].map((x) => (
            <rect key={x} x={x} y="202" width="48" height="10" rx="2" fill={faint} />
          ))}
          <line x1="168" y1="160" x2="168" y2="228" stroke="var(--color-accent-bright)" strokeWidth="1.5" />
          <circle cx="168" cy="160" r="3.5" fill="var(--color-accent-bright)" />
        </g>
      );

    case "document":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={40 + i * 18}
              y={30 + i * 10}
              width="132"
              height="172"
              rx="6"
              fill={i === 2 ? solid : "var(--color-surface)"}
              stroke={i === 2 ? stroke : faint}
            />
          ))}
          {[62, 78, 94, 110, 126, 142, 158].map((y) => (
            <rect key={y} x="92" y={y} width={y % 32 ? 96 : 68} height="6" rx="3" fill={faint} />
          ))}
          {/* tool rail */}
          <rect x="228" y="30" width="148" height="172" rx="6" stroke={faint} fill="none" />
          {[44, 82, 120, 158].map((y, i) => (
            <g key={y}>
              <rect
                x="240"
                y={y}
                width="124"
                height="28"
                rx="5"
                fill={i === 1 ? solid : "none"}
                stroke={i === 1 ? stroke : faint}
              />
              <circle cx="256" cy={y + 14} r="5" fill={i === 1 ? stroke : faint} />
              <rect x="270" y={y + 11} width={i === 1 ? 72 : 56} height="6" rx="3" fill={faint} />
            </g>
          ))}
        </g>
      );

    case "dashboard":
      return (
        <g>
          <rect x="24" y="24" width="72" height="184" rx="6" stroke={faint} fill="none" />
          {[40, 62, 84, 106, 128].map((y, i) => (
            <rect
              key={y}
              x="36"
              y={y}
              width="48"
              height="8"
              rx="4"
              fill={i === 0 ? stroke : faint}
            />
          ))}
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={112 + i * 90}
              y="24"
              width="76"
              height="52"
              rx="6"
              stroke={faint}
              fill={i === 0 ? solid : "none"}
            />
          ))}
          <rect x="112" y="90" width="264" height="118" rx="6" stroke={faint} fill="none" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const h = [38, 62, 30, 78, 52, 90, 44, 68][i];
            return (
              <rect
                key={i}
                x={128 + i * 30}
                y={196 - h}
                width="16"
                height={h}
                rx="3"
                fill={i === 5 ? stroke : solid}
              />
            );
          })}
        </g>
      );

    case "commerce":
      return (
        <g>
          <rect x="24" y="24" width="176" height="184" rx="6" fill={solid} stroke={stroke} />
          <circle cx="112" cy="104" r="34" stroke={stroke} fill="none" />
          <rect x="96" y="76" width="32" height="56" rx="12" stroke={stroke} fill="none" />
          <rect x="60" y="164" width="104" height="7" rx="3.5" fill={faint} />
          <rect x="86" y="180" width="52" height="7" rx="3.5" fill={faint} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect
                x={216 + (i % 2) * 84}
                y={24 + Math.floor(i / 2) * 96}
                width="72"
                height="72"
                rx="6"
                stroke={faint}
                fill="none"
              />
              <circle
                cx={252 + (i % 2) * 84}
                cy={54 + Math.floor(i / 2) * 96}
                r="16"
                stroke={faint}
                fill="none"
              />
              <rect
                x={228 + (i % 2) * 84}
                y={80 + Math.floor(i / 2) * 96}
                width="48"
                height="5"
                rx="2.5"
                fill={faint}
              />
            </g>
          ))}
          <rect x="216" y="192" width="160" height="16" rx="8" fill={solid} stroke={stroke} />
        </g>
      );

    case "assessment":
      return (
        <g>
          <circle cx="80" cy="112" r="52" stroke={faint} fill="none" strokeWidth="8" />
          <circle
            cx="80"
            cy="112"
            r="52"
            stroke="var(--color-accent-bright)"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="240 327"
            transform="rotate(-90 80 112)"
          />
          <rect x="62" y="102" width="36" height="18" rx="4" fill={solid} />
          {[0, 1, 2].map((group) => (
            <g key={group}>
              <rect x="176" y={34 + group * 62} width="60" height="7" rx="3.5" fill={stroke} />
              {[0, 1].map((row) => (
                <g key={row}>
                  <rect
                    x="176"
                    y={50 + group * 62 + row * 20}
                    width="200"
                    height="14"
                    rx="4"
                    stroke={faint}
                    fill={group === 1 && row === 0 ? solid : "none"}
                  />
                  <circle
                    cx="186"
                    cy={57 + group * 62 + row * 20}
                    r="4"
                    fill={group === 1 && row === 0 ? stroke : "none"}
                    stroke={faint}
                  />
                </g>
              ))}
            </g>
          ))}
        </g>
      );

    case "enterprise":
      return (
        <g>
          <rect x="24" y="24" width="352" height="34" rx="6" stroke={faint} fill="none" />
          {[40, 110, 180, 250].map((x, i) => (
            <rect
              key={x}
              x={x}
              y="37"
              width={i === 1 ? 54 : 44}
              height="7"
              rx="3.5"
              fill={i === 1 ? stroke : faint}
            />
          ))}
          <rect x="150" y="66" width="120" height="86" rx="6" fill={solid} stroke={stroke} />
          {[80, 96, 112, 128].map((y) => (
            <rect key={y} x="162" y={y} width={y === 80 ? 84 : 96} height="6" rx="3" fill={faint} />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <line
                x1={210}
                y1="152"
                x2={64 + i * 96}
                y2="176"
                stroke={faint}
                strokeWidth="1"
              />
              <rect
                x={24 + i * 96}
                y="176"
                width="80"
                height="48"
                rx="6"
                stroke={faint}
                fill="none"
              />
              <rect x={36 + i * 96} y="192" width="44" height="6" rx="3" fill={faint} />
              <rect x={36 + i * 96} y="204" width="56" height="6" rx="3" fill={faint} />
            </g>
          ))}
        </g>
      );

    case "media":
      return (
        <g>
          <rect x="24" y="24" width="352" height="150" rx="8" fill={solid} stroke={stroke} />
          <circle cx="200" cy="99" r="30" stroke={stroke} fill="none" />
          <path d="M192 86l22 13-22 13z" fill={stroke} />
          <rect x="24" y="190" width="352" height="4" rx="2" fill={faint} />
          <rect x="24" y="190" width="196" height="4" rx="2" fill="var(--color-accent-bright)" />
          <circle cx="220" cy="192" r="6" fill="var(--color-accent-bright)" />
          {[40, 66, 92].map((x) => (
            <circle key={x} cx={x} cy="214" r="7" stroke={faint} fill="none" />
          ))}
          <rect x="316" y="208" width="60" height="12" rx="6" stroke={faint} fill="none" />
        </g>
      );

    case "auth":
      return (
        <g>
          <rect x="104" y="30" width="192" height="172" rx="10" fill={solid} stroke={stroke} />
          <rect x="184" y="52" width="32" height="32" rx="16" stroke={stroke} fill="none" />
          <rect x="192" y="64" width="16" height="14" rx="3" fill={stroke} />
          {[100, 132].map((y) => (
            <rect key={y} x="128" y={y} width="144" height="22" rx="5" stroke={faint} fill="none" />
          ))}
          <rect x="140" y="107" width="60" height="7" rx="3.5" fill={faint} />
          <rect x="140" y="139" width="84" height="7" rx="3.5" fill={faint} />
          <rect x="128" y="166" width="144" height="22" rx="11" fill={stroke} />
        </g>
      );

    case "editorial":
    default:
      return (
        <g>
          <rect x="24" y="24" width="208" height="184" rx="6" fill={solid} stroke={stroke} />
          <path d="M24 160l58-46 44 34 40-32 66 52v22a6 6 0 01-6 6H30a6 6 0 01-6-6z" fill={stroke} opacity="0.35" />
          <circle cx="82" cy="70" r="16" stroke={stroke} fill="none" />
          <rect x="252" y="30" width="124" height="9" rx="4.5" fill={stroke} />
          {[54, 72, 90, 108, 126].map((y) => (
            <rect key={y} x="252" y={y} width={y % 36 ? 124 : 92} height="6" rx="3" fill={faint} />
          ))}
          <rect x="252" y="160" width="96" height="24" rx="12" stroke={stroke} fill="none" />
        </g>
      );
  }
}

export function ProjectPlate({
  project,
  className,
  priority,
  sizes = "(max-width: 1024px) 100vw, 60vw",
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} — ${project.type}`}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover object-top transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 grid place-items-center overflow-hidden bg-gradient-to-br from-surface-2 via-ink-2 to-ink transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]",
        className,
      )}
      role="img"
      aria-label={`${project.title} — ${project.type} interface diagram`}
    >
      <div aria-hidden className="grid-field absolute inset-0 opacity-40" />
      <div aria-hidden className="wash-top absolute inset-0" />
      <svg
        viewBox="0 0 400 248"
        className="relative w-[78%] max-w-[42rem]"
        fill="none"
        strokeWidth="1.25"
        aria-hidden
      >
        <Motif motif={project.motif} />
      </svg>
    </div>
  );
}
