export interface Service {
  title: string;
  icon: string;
  lines: string[];
}

export const services: Service[] = [
  {
    title: "Frontend Development",
    icon: "Code2",
    lines: [
      "React.js / Next.js applications",
      "Responsive interfaces",
      "Production-ready frontend",
    ],
  },
  {
    title: "Full-Stack Web Development",
    icon: "Layers",
    lines: [
      "Frontend, APIs and database integration",
      "Business systems",
      "Custom applications",
    ],
  },
  {
    title: "SaaS Development",
    icon: "LayoutDashboard",
    lines: [
      "Dashboards and admin panels",
      "Subscription products",
      "Interactive tools",
    ],
  },
  {
    title: "eCommerce Development",
    icon: "ShoppingBag",
    lines: [
      "Modern storefronts",
      "Product experiences",
      "Responsive commerce interfaces",
    ],
  },
  {
    title: "UI Development",
    icon: "PenTool",
    lines: [
      "Figma-to-code, pixel accurate",
      "Design systems",
      "Responsive layouts",
    ],
  },
  {
    title: "AI-Powered Development",
    icon: "Sparkles",
    lines: [
      "AI-assisted applications",
      "Prompt engineering",
      "AI video, voice and creative integrations",
    ],
  },
  {
    title: "Creative Development",
    icon: "Wand2",
    lines: [
      "GSAP, Framer Motion, Remotion",
      "Interactive animation",
      "Immersive web experiences",
    ],
  },
  {
    title: "Website Modernisation",
    icon: "RefreshCw",
    lines: [
      "Redesign dated interfaces",
      "Improve responsiveness and performance",
      "Modernise UX",
    ],
  },
];

export interface ValueProp {
  title: string;
  body: string;
}

export const valueProps: ValueProp[] = [
  {
    title: "Design and engineering",
    body: "I read a design the way a designer wrote it, and implement it the way an engineer has to maintain it. Nothing is lost in the handoff, because there isn't one.",
  },
  {
    title: "Product thinking",
    body: "Pages are the easy part. I build the flows, states and edge cases that decide whether a product is actually usable once real data arrives.",
  },
  {
    title: "A current stack",
    body: "React, Next.js, TypeScript, Tailwind, modern state tooling, motion libraries and AI-assisted workflows — chosen per problem, not by habit.",
  },
  {
    title: "Fast iteration",
    body: "AI-assisted development compresses the distance between a concept and something clickable. You review real interfaces early, not descriptions of them.",
  },
  {
    title: "Responsive by default",
    body: "Mobile is a layout decision made at the start, not a media query added at the end. Compositions are rebuilt per breakpoint, not shrunk.",
  },
  {
    title: "Production mindset",
    body: "Clean components, real API integration, accessible markup, performance budgets and a deployment that holds up after handover.",
  },
];

export const aiCapabilities = [
  {
    name: "Remotion",
    role: "Programmatic video",
    body: "Video as React components — templates, data-driven scenes and rendered output.",
  },
  {
    name: "GSAP",
    role: "Motion engineering",
    body: "Timeline-based animation and scroll choreography where precise sequencing matters.",
  },
  {
    name: "Framer Motion",
    role: "Interface motion",
    body: "Component-level transitions, gesture response and layout animation in React.",
  },
  {
    name: "ElevenLabs",
    role: "AI voice",
    body: "Generated voice tracks for video workflows and prototype narration.",
  },
  {
    name: "Seedance",
    role: "AI video",
    body: "AI-generated footage used as source material inside larger video pipelines.",
  },
  {
    name: "Prompt Engineering",
    role: "Applied AI",
    body: "Structuring prompts and workflows so AI output is repeatable enough to build on.",
  },
];
