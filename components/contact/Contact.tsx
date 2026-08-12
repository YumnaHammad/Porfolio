"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { ContactForm } from "./ContactForm";

/**
 * Ordered by how directly they reach me. Only channels with a real
 * destination are rendered.
 */
const channels = [
  {
    label: "WhatsApp",
    value: site.phone,
    href: site.whatsapp,
    Icon: WhatsappIcon,
    external: true,
  },
  { label: "Phone", value: site.phoneIntl, href: site.phoneHref, Icon: Phone },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  site.linkedin && {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: site.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
  site.github && {
    label: "GitHub",
    value: "See the code",
    href: site.github,
    Icon: GithubIcon,
    external: true,
  },
].filter(Boolean) as {
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}[];

export function Contact() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden border-t border-line-soft pt-24 pb-20 md:pt-36 md:pb-28"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="grid-field absolute inset-0 opacity-40" />
        <div className="wash-bottom absolute inset-0" />
      </div>

      <div className="shell">
        <Reveal direction="none">
          <div className="mb-8 flex items-center gap-3">
            <span className="eyebrow text-accent">09</span>
            <span className="h-px w-8 bg-line" aria-hidden />
            <span className="eyebrow">Contact</span>
          </div>
        </Reveal>

        <TextReveal
          as="h2"
          text="Let's build something people remember."
          className="display max-w-[14ch] text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-8xl"
        />

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">
            Tell me what you&rsquo;re building, what&rsquo;s broken, or what you
            want to improve. Detailed or half-formed — both are fine.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Channels */}
          <div>
            <Reveal direction="right">
              <ul className="space-y-px overflow-hidden rounded-2xl border border-line-soft">
                {channels.map(({ label, value, href, Icon, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center justify-between gap-4 bg-ink-2/60 px-6 py-6 transition-colors duration-300 hover:bg-surface"
                    >
                      <span className="flex items-center gap-4">
                        <Icon className="h-4 w-4 shrink-0 text-accent" />
                        <span>
                          <span className="eyebrow block">{label}</span>
                          <span className="mt-1 block text-[15px] text-bone">
                            {value}
                          </span>
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-bright" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-line-soft bg-ink-2/40 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                    Currently available
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-mute">
                  {site.availability}. Based in {site.location}, working
                  remotely across time zones.
                </p>
                <p className="mt-4 text-sm text-bone">
                  Fastest reply:{" "}
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline-offset-4 transition-colors hover:text-accent-bright hover:underline"
                  >
                    WhatsApp {site.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left" delay={0.1}>
            <div className="rounded-3xl border border-line bg-ink-2/70 p-6 backdrop-blur-sm md:p-9">
              <h3 className="text-xl font-medium tracking-tight">
                Start a project
              </h3>
              <p className="mt-2 mb-8 text-sm text-mute">
                A few details is all I need to come back with a useful answer.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
