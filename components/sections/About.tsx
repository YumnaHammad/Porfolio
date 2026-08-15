"use client";

import Image from "next/image";
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const blocks = [
  {
    label: "Who I am",
    body: "A frontend developer based in Islamabad. I work on-site at Funsol Technologies and have been taking freelance clients since 2022.",
  },
  {
    label: "What I build",
    body: "SaaS products, dashboards, online stores, WordPress sites and interactive tools that talk to real APIs.",
  },
  {
    label: "How I work",
    body: "Send me a Figma file, a screenshot or just a rough idea. You get back a finished interface, connected up and live.",
  },
  {
    label: "Remote and on-site",
    body: "Four years of remote client delivery across time zones, plus office roles at larger companies. Clear updates either way, and no chasing needed.",
  },
  {
    label: "Beyond the code",
    body: "Illustrator for logos, icons and graphics, and Word, Excel and PowerPoint for the proposals, reports and decks that come with the work.",
  },
  {
    label: "Where I add value",
    body: "Right between design and engineering. I build things that hold up against real data, real devices and whoever picks up the code next.",
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
          lede="A frontend specialist who can hold the backend too, and is happiest working in the space between design and code."
        />

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: identity card */}
          <div>
            <Reveal direction="right">
              <div className="grain sticky top-32 overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface-2 to-ink-2 p-8">
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
                      English at professional working level.
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
          <Stagger className="divide-y divide-line-soft">
            {blocks.map((block, i) => (
              <StaggerItem
                key={block.label}
                className="group grid gap-4 py-8 first:pt-0 md:grid-cols-[9rem_1fr] md:gap-8"
              >
                <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
                  <span className="eyebrow text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-medium tracking-tight text-bone">
                    {block.label}
                  </h3>
                </div>
                <p className="text-[15px] leading-relaxed text-mute transition-colors duration-500 group-hover:text-bone/85 md:text-base">
                  {block.body}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
