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
  role: "Frontend Developer & Full-Stack Developer",
  positioning:
    "Frontend Specialist · Full-Stack Capable · AI & Prompt Engineer",
  location: "Islamabad, Pakistan",
  specialisation: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Modern UI/UX",
    "AI-Powered Development",
  ],
  availability: "Available for freelance projects & product development",

  email: "yumnahammad4884@gmail.com",

  /** Public profile URLs. Leave blank until the real URL is confirmed. */
  linkedin: "",
  github: "",

  /**
   * Hero portrait — 960x1280 (3:4), which the hero frame is sized to match so
   * the image fills it exactly. Any other ratio is letterboxed via
   * object-contain rather than cropped or distorted.
   */
  portrait: "/assets/Yumna.jpeg",
  portraitAlt: "Yumna Hammad, frontend developer, Islamabad",

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
  { value: 2026, label: "On-site engineering at Funsol", plain: true },
] as const;
