export type Proficiency = "Core" | "Advanced" | "Working knowledge";

export interface Skill {
  name: string;
  level: Proficiency;
  /** What it is actually used for — shown on hover/focus. */
  usedFor?: string[];
  /** Slugs from data/projects.ts. */
  projects?: string[];
}

export interface SkillCluster {
  id: string;
  title: string;
  note: string;
  skills: Skill[];
}

export const clusters: SkillCluster[] = [
  {
    id: "frontend",
    title: "Frontend",
    note: "The core of the work.",
    skills: [
      {
        name: "React.js",
        level: "Core",
        usedFor: [
          "Application interfaces",
          "Component architecture",
          "Interactive tools",
        ],
        projects: ["framekit-remotion", "tml-inventory", "gcs-assessment"],
      },
      {
        name: "Next.js",
        level: "Core",
        usedFor: [
          "SaaS applications",
          "Production websites",
          "Dynamic routing & rendering",
        ],
        projects: ["tools4pdf", "azwah", "webginet"],
      },
      {
        name: "TypeScript",
        level: "Core",
        usedFor: ["Typed component contracts", "API response modelling"],
        projects: ["framekit-remotion", "gcs-assessment"],
      },
      { name: "JavaScript ES6+", level: "Core" },
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      {
        name: "Vue.js",
        level: "Core",
        usedFor: [
          "AI editor product at Funsol",
          "Large, long-running application work",
        ],
      },
    ],
  },
  {
    id: "ui",
    title: "UI & Styling",
    note: "Design implemented exactly.",
    skills: [
      {
        name: "Tailwind CSS",
        level: "Core",
        usedFor: ["Design systems", "Responsive layout systems"],
      },
      { name: "Shadcn UI", level: "Advanced" },
      { name: "Material UI", level: "Advanced" },
      { name: "Bootstrap", level: "Working knowledge" },
      { name: "Responsive Web Design", level: "Core" },
      { name: "UI/UX principles", level: "Advanced" },
      {
        name: "Figma-to-code",
        level: "Core",
        usedFor: ["Pixel-accurate implementation", "Design system translation"],
      },
    ],
  },
  {
    id: "state",
    title: "State & Data",
    note: "Keeping interfaces honest.",
    skills: [
      { name: "Redux Toolkit", level: "Advanced", usedFor: ["Enterprise app state"] },
      { name: "Zustand", level: "Advanced" },
      { name: "React Query", level: "Advanced", usedFor: ["Server state & caching"] },
      { name: "Context API", level: "Core" },
      { name: "React Router", level: "Core" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    note: "Full-stack capable — frontend specialist first.",
    skills: [
      { name: "REST APIs", level: "Core", usedFor: ["Integration", "API-driven UI"] },
      { name: "MongoDB", level: "Advanced", projects: ["tml-inventory"] },
      { name: "PostgreSQL", level: "Working knowledge" },
      { name: "Python", level: "Working knowledge" },
      { name: "PHP", level: "Working knowledge" },
    ],
  },
  {
    id: "motion",
    title: "Motion & Creative",
    note: "Interfaces that move with intent.",
    skills: [
      {
        name: "Remotion",
        level: "Advanced",
        usedFor: ["Programmatic video", "Data-to-video pipelines"],
        projects: ["framekit-remotion"],
      },
      { name: "Framer Motion", level: "Core", usedFor: ["Interface motion", "Transitions"] },
      { name: "GSAP", level: "Advanced", usedFor: ["Timeline animation", "Scroll choreography"] },
      { name: "ScrollTrigger", level: "Advanced" },
      { name: "Animation systems", level: "Advanced" },
      { name: "Interactive UI", level: "Core" },
    ],
  },
  {
    id: "ai",
    title: "AI Development",
    note: "Practical tooling, not hype.",
    skills: [
      { name: "Prompt Engineering", level: "Advanced" },
      { name: "AI-assisted development", level: "Advanced" },
      { name: "AI content workflows", level: "Advanced" },
      { name: "Seedance", level: "Working knowledge", usedFor: ["AI video workflows"] },
      { name: "ElevenLabs", level: "Working knowledge", usedFor: ["AI voice workflows"] },
    ],
  },
  {
    id: "tools",
    title: "Tools & Delivery",
    note: "From local branch to production.",
    skills: [
      { name: "Git", level: "Core" },
      { name: "GitHub", level: "Core" },
      { name: "Vercel", level: "Core", usedFor: ["Production deployment"] },
      { name: "Postman", level: "Advanced" },
      { name: "Firebase", level: "Working knowledge" },
      { name: "VS Code", level: "Core" },
    ],
  },
];

/** Engineering practices — presented as capabilities, not a checklist. */
export const engineering = [
  "REST API integration",
  "Performance optimisation",
  "Responsive design",
  "Reusable components",
  "Component architecture",
  "API-driven UI",
  "Dynamic routing",
  "Cross-browser compatibility",
  "Production deployment",
  "Clean code",
  "Figma-to-code implementation",
];
