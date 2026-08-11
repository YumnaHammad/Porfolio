"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { navItems, site } from "@/data/site";

const socials = [
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

export function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="shell py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity */}
          <div>
            <p className="display text-3xl">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mute">
              Frontend Developer · Full-Stack Capable · AI &amp; Creative
              Development
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm text-mute underline-offset-4 transition-colors hover:text-accent-bright hover:underline"
            >
              {site.email}
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="grid grid-cols-2 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-mute transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <p className="eyebrow mb-5">Elsewhere</p>
            <ul className="space-y-2.5">
              {socials.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2.5 text-sm text-mute transition-colors hover:text-bone"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#home"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-mute transition-colors hover:text-accent-bright"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-colors group-hover:border-accent">
                <ArrowUp className="h-3.5 w-3.5" />
              </span>
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-soft pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {site.name}
          </p>
          <p className="font-mono text-[11px] text-faint">
            Designed &amp; built with code, curiosity, and too many browser tabs.
          </p>
        </div>
      </div>
    </footer>
  );
}
