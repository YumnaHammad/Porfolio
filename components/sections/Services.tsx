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
    <section id="services" className="section-alt section-pad relative">
      <div className="shell">
        <SectionHeading
          index="07"
          label="Services"
          title="What I can build."
          lede="From a single interface to a complete product — scoped to what you actually need."
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <StaggerItem key={service.title} className="h-full">
                <div className="card-pro group flex h-full flex-col p-7 lg:p-8">
                <span className={`${(i + Math.floor(i / 4)) % 2 ? "icon-tile-hot" : "icon-tile"} mb-7 h-12 w-12 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>

                <ul className="mt-4 grow space-y-2">
                  {service.lines.map((line) => (
                    <li key={line} className="text-sm leading-relaxed text-mute">
                      {line}
                    </li>
                  ))}
                </ul>

                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Contextual CTA */}
        <Reveal className="mt-10 flex flex-col items-start justify-between gap-6 band-blue rounded-3xl px-8 py-9 md:flex-row md:items-center">
          <p className="max-w-xl text-xl font-medium tracking-tight text-white">
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
    <section className="section-edge section-pad relative">
      <div className="shell">
        <SectionHeading
          index="08"
          label="Why work with me"
          title="The part that isn't on a CV."
          lede="No adjectives about passion — just what actually changes when I'm the one building it."
        />

        <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, i) => (
            <StaggerItem key={prop.title} className="h-full">
              <div className="card-pro h-full p-8">
                <span className="text-brand display block text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{prop.title}</h3>
                <p className="mt-3 leading-relaxed text-mute">{prop.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
