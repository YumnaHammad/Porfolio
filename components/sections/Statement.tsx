"use client";

import { Database, Monitor, Server, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const layers: {
  icon: LucideIcon;
  title: string;
  body: string;
  tech: string[];
}[] = [
  {
    icon: Monitor,
    title: "Frontend",
    body: "Responsive, fast interfaces for SaaS, eCommerce, dashboards and custom systems — from Figma to production.",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    body: "REST APIs, authentication and business logic that the interface can rely on.",
    tech: ["Node.js", "Express", "REST APIs", "Auth & roles"],
  },
  {
    icon: Database,
    title: "Database & Deploy",
    body: "Data models that hold up, shipped and running on the web.",
    tech: ["MongoDB", "Vercel", "Git", "CI basics"],
  },
];

export function Statement() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="shell">
        <SectionHeading
          index="01"
          label="What I do"
          title="One developer. The whole stack."
          lede="From the first screen to the database behind it — one person who can build, connect and ship all of it."
        />

        <Stagger className="grid gap-5 md:grid-cols-3">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <StaggerItem key={layer.title} className="h-full">
                <div className="card-pro group h-full p-8">
                  <span className={`${i === 1 ? "icon-tile-hot" : "icon-tile"} h-12 w-12 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">
                    {layer.body}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {layer.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] font-medium text-accent-bright"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
