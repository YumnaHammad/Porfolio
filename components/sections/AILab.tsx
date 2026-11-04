"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/useMediaQuery";
import { aiCapabilities } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

/* ---------------- Live micro-demos ---------------- */

const BAR_HEIGHTS = [18, 34, 52, 28, 66, 44, 78, 38, 58, 24, 46, 70, 32, 54, 20, 40];

function Waveform() {
  const reduced = useReducedMotionSafe();

  return (
    <div className="flex h-24 items-center justify-center gap-[3px]" aria-hidden>
      {BAR_HEIGHTS.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-gradient-to-t from-accent to-accent-bright"
          style={{ height: h }}
          animate={reduced ? undefined : { scaleY: [1, 0.35, 1.25, 0.6, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.06,
          }}
        />
      ))}
    </div>
  );
}

function Timeline() {
  const reduced = useReducedMotionSafe();
  const scenes = [
    { w: "22%", label: "intro" },
    { w: "34%", label: "data" },
    { w: "18%", label: "chart" },
    { w: "26%", label: "outro" },
  ];

  return (
    <div className="relative h-24 py-4" aria-hidden>
      <div className="flex h-9 gap-1.5">
        {scenes.map((s, i) => (
          <div
            key={s.label}
            style={{ width: s.w }}
            className={`grid place-items-center rounded-md border font-mono text-[9px] tracking-wider ${
              i === 1
                ? "border-accent/60 bg-accent/20 text-accent-bright"
                : "border-line bg-surface text-faint"
            }`}
          >
            {s.label}
          </div>
        ))}
      </div>

      {/* Frame ruler */}
      <div className="mt-3 flex justify-between">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className={`w-px bg-line ${i % 4 === 0 ? "h-3" : "h-1.5"}`}
          />
        ))}
      </div>

      {/* Playhead */}
      <motion.div
        className="absolute inset-y-2 w-px bg-accent-bright"
        animate={reduced ? { left: "38%" } : { left: ["0%", "100%"] }}
        transition={
          reduced
            ? undefined
            : { duration: 6, repeat: Infinity, ease: "linear" }
        }
      >
        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-accent-bright" />
      </motion.div>
    </div>
  );
}

function CodePane() {
  const lines = [
    { t: "const", k: "kw", rest: " scene = defineScene({" },
    { t: "  input", k: "prop", rest: ": csvRow," },
    { t: "  duration", k: "prop", rest: ": 90," },
    { t: "  render", k: "prop", rest: ": (data) => <Slide {...data} />," },
    { t: "})", k: "plain", rest: "" },
  ];

  return (
    <div className="h-24 overflow-hidden py-1 font-mono text-[11px] leading-[1.55]" aria-hidden>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
          className="whitespace-pre"
        >
          <span
            className={
              line.k === "kw"
                ? "text-accent-bright"
                : line.k === "prop"
                  ? "text-emerald-300/80"
                  : "text-mute"
            }
          >
            {line.t}
          </span>
          <span className="text-mute">{line.rest}</span>
        </motion.div>
      ))}
    </div>
  );
}

const bench = [
  { title: "Voice", note: "ElevenLabs", demo: <Waveform /> },
  { title: "Motion", note: "Remotion timeline", demo: <Timeline /> },
  { title: "Composition", note: "Scene as code", demo: <CodePane /> },
];

/* ---------------- Section ---------------- */

export function AILab() {
  return (
    <section id="ai" className="section-edge section-pad relative overflow-hidden">
      <div aria-hidden className="wash-corner pointer-events-none absolute inset-0 -z-10" />

      <div className="shell">
        <SectionHeading
          index="06"
          label="Beyond Frontend"
          title="AI × Code × Creativity"
          lede="Not an AI showreel — a set of tools that genuinely shorten the distance between an idea and something you can click, watch or hear."
        />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <Reveal direction="right">
            <div className="lg:sticky lg:top-32">
              <p className="text-lg leading-relaxed text-mute">
                I use AI where it removes work that shouldn&rsquo;t be manual —
                prompt engineering for repeatable output, AI-assisted
                implementation for a reviewable interface sooner, generated
                voice and video inside pipelines I still build.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-mute">
                The engineering doesn&rsquo;t get skipped. It gets to start
                earlier.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {["Prompt Engineering", "AI-assisted development", "AI video", "AI voice"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 font-mono text-[11px] font-medium text-accent-bright"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          {/* The bench */}
          <div className="space-y-4">
            {bench.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card-pro group p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                      {item.note}
                    </span>
                  </div>
                  {item.demo}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Capability cards */}
        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((cap) => (
            <StaggerItem key={cap.name} className="h-full">
              <div className="card-pro group h-full p-7">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-bright">
                  {cap.role}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">
                  {cap.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{cap.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
