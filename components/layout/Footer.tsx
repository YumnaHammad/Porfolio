"use client";

import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui/BrandIcons";
import { navItems, site } from "@/data/site";

const socials = [
  { href: site.whatsapp, label: "WhatsApp", Icon: WhatsappIcon, external: true },
  { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
  site.linkedin && {
    href: site.linkedin,
    label: "LinkedIn",
    Icon: LinkedinIcon,
    external: true,
  },
  site.github && {
    href: site.github,
    label: "GitHub",
    Icon: GithubIcon,
    external: true,
  },
].filter(Boolean) as {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
}[];

const linkClass =
  "text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline";

export function Footer() {
  return (
  <>
    <section className="band-blue relative overflow-hidden">
      <div aria-hidden className="grid-field absolute inset-0 opacity-[0.1] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="shell relative py-14 md:py-20">
        {/* Call to action */}
        <div className="flex flex-col items-start justify-between gap-8  md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-rose-300">
              Open to new projects
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Have something to build? Let&rsquo;s talk.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a1f6b] transition-transform hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <WhatsappIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>

    <footer
      className="relative overflow-hidden bg-[#060d1f] text-white"
      style={{
        backgroundImage:
          "radial-gradient(45% 60% at 0% 0%, rgb(37 99 235 / 0.22), transparent 70%), radial-gradient(40% 50% at 100% 100%, rgb(225 29 72 / 0.16), transparent 70%)",
      }}
    >
      {/* Blue-to-red edge, matching the section bars above */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-white/80 to-rose-500"
      />
      <div
        aria-hidden
        className="grid-field absolute inset-0 opacity-[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <div className="shell relative pt-4 pb-8">
        {/* Columns */}
        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white font-semibold text-[#0a1f6b]">
                {site.monogram}
              </span>
              <p className="text-xl font-semibold tracking-tight text-white">
                {site.name}
              </p>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Full-stack developer building SaaS products, dashboards, inventory
              systems and eCommerce for clients — with AI &amp; creative
              development on the side.
            </p>
            <ul className="mt-6 space-y-2.5">
              <li className="flex items-center gap-2.5 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-rose-300" />
                {site.location}
              </li>
              <li>
                <a href={site.phoneHref} className={`${linkClass} inline-flex items-center gap-2.5`}>
                  <Phone className="h-4 w-4 text-rose-300" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className={`${linkClass} inline-flex items-center gap-2.5 break-all`}
                >
                  <Mail className="h-4 w-4 text-rose-300" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
              Elsewhere
            </p>
            <ul className="flex flex-wrap gap-3">
              {socials.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-500"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#home"
              className="group mt-8 inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-[#0a1f6b]">
                <ArrowUp className="h-4 w-4" />
              </span>
              Back to top
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-white/60">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-white/60">
            Built with Next.js, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  </>
  );
}
