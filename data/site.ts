/**
 * Single source of truth for identity, contact and asset paths.
 *
 * Values left as an empty string are treated as "not supplied yet" — the UI
 * hides the corresponding link or falls back to a designed placeholder instead
 * of rendering a dead control. Fill these in and every surface updates.
 */

export const site = {
  name: "Yumna Hammad",
  monogram: "YH",
  role: "Full-Stack Developer",
  positioning:
    "Full-Stack Developer · React & Next.js · AI & Prompt Engineer",
  location: "Islamabad, Pakistan",
  specialisation: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "AI Development",
  ],
  availability: "Available for freelance projects & product development",

  email: "yumnahammad4884@gmail.com",

  /** Displayed as written locally; the tel:/wa.me links use E.164. */
  phone: "0321 6774884",
  phoneIntl: "+92 321 6774884",
  phoneHref: "tel:+923216774884",
  whatsapp: "https://wa.me/923216774884",

  /** Public profile URLs. Leave blank until the real URL is confirmed. */
  linkedin: "https://www.linkedin.com/in/yumnahammad/",
  github: "https://github.com/YumnaHammad",

  /**
   * Hero portrait — 960x1280 (3:4), which the hero frame is sized to match so
   * the image fills it exactly. Any other ratio is letterboxed via
   * object-contain rather than cropped or distorted.
   */
  /* Lowercase must match the file on disk — Linux hosts are case-sensitive. */
  portrait: "/assets/yumna.png",
  portraitAlt: "Yumna Hammad, full-stack developer, Islamabad",

  /** Used for canonical + Open Graph URLs. */
  url: "https://yumnahammad.com",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "AI & Creative", href: "#ai" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export const stats = [
  { value: 20, suffix: "+", label: "Freelance projects delivered" },
  { value: 4, suffix: "+", label: "Years building for the web" },
  { value: 2022, label: "Freelancing since", plain: true },
  { value: 2026, label: "Engineering at Funsol Technologies", plain: true },
] as const;
