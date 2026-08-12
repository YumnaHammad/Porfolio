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
    body: "No handoff gap — I read the design as intended and build it to be maintained.",
  },
  {
    title: "Product thinking",
    body: "The flows, states and edge cases that decide whether it survives real data.",
  },
  {
    title: "A current stack",
    body: "React, Next.js, Vue, TypeScript, Tailwind — chosen per problem, not by habit.",
  },
  {
    title: "Fast iteration",
    body: "AI-assisted development means you review real interfaces early, not descriptions.",
  },
  {
    title: "Responsive by default",
    body: "Layouts rebuilt per breakpoint, not shrunk down at the end.",
  },
  {
    title: "Production mindset",
    body: "Clean components, real API integration, accessible markup, deployed and holding.",
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
