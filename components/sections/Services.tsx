"use client";

import {
  Code2,
  PenTool,
  Layers,
  LayoutDashboard,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Wand2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { services, valueProps } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

const icons: Record<string, LucideIcon> = {
  Code2,
  Layers,
  LayoutDashboard,
  ShoppingBag,
  PenTool,
  Sparkles,
  Wand2,
  RefreshCw,
};

export function Services() {
  return (
    <section id="services" className="section-pad relative border-t border-line-soft">
      <div className="shell">
        <SectionHeading
          index="07"
          label="Services"
          title="What I can build."
          lede="From a single interface to a complete product — scoped to what you actually need."
        />

        <Stagger className="grid gap-px overflow-hidden rounded-2xl border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <StaggerItem
                key={service.title}
                className="group relative flex flex-col bg-ink p-7 transition-colors duration-500 hover:bg-ink-2 lg:p-8"
              >
                <span className="mb-7 grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-mute transition-all duration-500 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent-bright">
                  <Icon className="h-[18px] w-[18px]" />
                </span>

                <h3 className="text-base font-medium tracking-tight">
                  {service.title}
                </h3>

                <ul className="mt-4 grow space-y-2">
                  {service.lines.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-mute">
                      {line}
                    </li>
                  ))}
                </ul>

                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px w-0 bg-accent transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                />
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Contextual CTA */}
        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-soft bg-ink-2/50 px-7 py-7 md:flex-row md:items-center">
          <p className="max-w-xl text-lg tracking-tight">
            Need something built — or something existing made faster, cleaner
            and properly responsive?
          </p>
          <MagneticButton href="#contact">
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyMe() {
  return (
    <section className="section-pad relative">
      <div className="shell">
        <SectionHeading
          index="08"
          label="Why work with me"
          title="The part that isn't on a CV."
          lede="No adjectives about passion — just what actually changes when I'm the one building it."
        />

        <Stagger className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, i) => (
            <StaggerItem key={prop.title} className="group">
              <div className="mb-5 flex items-center gap-3">
                <span className="eyebrow text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="h-px w-6 bg-line transition-all duration-500 group-hover:w-12 group-hover:bg-accent"
                  aria-hidden
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight">{prop.title}</h3>
              <p className="mt-4 leading-relaxed text-mute">{prop.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
