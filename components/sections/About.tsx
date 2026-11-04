"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  GraduationCap,
  MapPin,
  UserRound,
  Layers,
  Workflow,
  Target,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/data/site";
import { education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const blocks: { label: string; body: string; icon: LucideIcon }[] = [
  {
    label: "Who I am",
    icon: UserRound,
    body: "Full-stack developer in Islamabad. Engineering at Funsol Technologies and Zetfair, and building for many clients since 2022.",
  },
  {
    label: "What I build",
    icon: Layers,
    body: "SaaS products, inventory systems, dashboards, eCommerce and API-driven applications — frontend to database.",
  },
  {
    label: "How I work",
    icon: Workflow,
    body: "Figma, screenshot or rough idea in — production interface, integrated and deployed, out.",
  },
  {
    label: "Where I add value",
    icon: Target,
    body: "Between design and engineering: builds that survive real data, real devices and the next developer.",
  },
];

export function About() {
  return (
    <section id="about" className="section-alt section-pad relative">
      {/* Quiet ambient wash — keeps the long-form section from going flat */}
      <div
        aria-hidden
        className="wash-top pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem]"
      />

      <div className="shell">
        <SectionHeading
          index="03"
          label="About"
          title="Design-minded engineer, product-minded developer."
          lede="Frontend specialist, full-stack capable, and unusually comfortable in the space between the two."
        />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: identity card */}
          <div>
            <Reveal direction="right">
              <div className="card-pro sticky top-32 rounded-3xl bg-gradient-to-b from-surface to-surface-2 p-8">
                <div className="grid-field absolute inset-0 opacity-30" aria-hidden />

                <div className="relative">
                  {site.portrait ? (
                    <div className="relative aspect-3/4 w-32 overflow-hidden rounded-2xl border border-line-soft">
                      <Image
                        src={site.portrait}
                        alt={site.portraitAlt}
                        fill
                        sizes="8rem"
                        className="object-contain object-center [filter:saturate(0.85)_contrast(1.05)_brightness(0.92)]"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-accent/15 mix-blend-soft-light"
                      />
                    </div>
                  ) : (
                    <p className="display text-6xl text-bone/90">{site.monogram}</p>
                  )}
                  <h3 className="mt-6 text-2xl font-medium tracking-tight">
                    {site.name}
                  </h3>
                  <p className="mt-2 text-sm text-mute">{site.role}</p>

                  <dl className="mt-8 space-y-4 border-t border-line-soft pt-7 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <dt className="eyebrow">Based in</dt>
                        <dd className="mt-1 text-bone">{site.location}</dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <div>
                        <dt className="eyebrow">Education</dt>
                        <dd className="mt-1 text-bone">{education.degree}</dd>
                        <dd className="text-mute">{education.institution}</dd>
                      </div>
                    </div>
                  </dl>

                  <div className="mt-8 border-t border-line-soft pt-7">
                    <p className="eyebrow">Languages</p>
                    <p className="mt-2 text-sm text-mute">
                      English — professional working proficiency.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="group mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-bright"
                  >
                    Let&rsquo;s work together
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: the narrative */}
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {blocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <StaggerItem key={block.label} className="h-full">
                  <div className="card-pro h-full p-7">
                    <div className="flex items-center justify-between">
                      <span className={`${i % 2 ? "icon-tile-hot" : "icon-tile"} h-12 w-12`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-2xl font-semibold text-hot/25">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold tracking-tight">
                      {block.label}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-mute">
                      {block.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
