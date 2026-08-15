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
  {
    title: "WordPress Development",
    icon: "Globe",
    lines: [
      "Business sites and WooCommerce stores",
      "Custom themes, plugins and page builds",
      "Handed over so your team can edit it",
    ],
  },
  {
    title: "Graphics & Brand Assets",
    icon: "Palette",
    lines: [
      "Logos and vector artwork in Illustrator",
      "Icon sets and social graphics",
      "Assets exported ready for the web",
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
    body: "Nothing gets lost in handoff. I read the design the way it was meant and build it so the next developer can keep going.",
  },
  {
    title: "Product thinking",
    body: "I look at the flows, the empty states and the awkward edge cases, because that is what decides whether a build survives real data.",
  },
  {
    title: "A current stack",
    body: "React, Next.js, Vue, TypeScript and Tailwind, picked to suit the problem in front of me rather than out of habit.",
  },
  {
    title: "Fast iteration",
    body: "AI assisted development lets you review a working interface early instead of reading a description of one.",
  },
  {
    title: "Responsive by default",
    body: "Every layout is rebuilt for its breakpoint. Nothing is squeezed down to fit a phone at the last minute.",
  },
  {
    title: "Production mindset",
    body: "Clean components, real API integration and accessible markup, deployed and still standing months later.",
  },
  {
    title: "Remote or on-site, both work",
    body: "Four years of remote client delivery across time zones, plus on-site engineering inside larger companies. I slot into either setup without a warm up period.",
  },
  {
    title: "Comfortable running several tracks",
    body: "Client projects, a full time role and design or documentation work often overlap. I keep them organised, communicate progress and hit the dates I give you.",
  },
];

export const aiCapabilities = [
  {
    name: "Remotion",
    role: "Programmatic video",
    body: "Video built as React components, from templates and data driven scenes through to rendered output.",
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
    body: "Shaping prompts and workflows until the output is consistent enough to build a product on.",
  },
];
