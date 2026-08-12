/**
 * Project inventory.
 *
 * Adding a project = adding an object here. Nothing about the showcase is
 * hardcoded in components: layout comes from `layout`, the case study renders
 * only the sections that actually have content, and links render only when a
 * URL is present.
 *
 * `image`: drop a screenshot in /public/projects/ and reference it here
 * (e.g. "/projects/tools4pdf.jpg"). While it is empty the card renders a
 * generated cover built from the project's `motif` — never a stretched or
 * cropped stand-in.
 */

export type ProjectLayout =
  | "feature" // full-bleed horizontal hero card
  | "split" // asymmetric two-column
  | "visual" // image-led, minimal copy
  | "stacked" // editorial stacked card
  | "rail"; // sits in the horizontal scrolling rail

export type ProjectMotif =
  | "editor"
  | "video"
  | "document"
  | "dashboard"
  | "commerce"
  | "assessment"
  | "enterprise"
  | "editorial"
  | "media"
  | "auth";

export interface CaseStudy {
  overview?: string;
  problem?: string;
  approach?: string;
  architecture?: string[];
  uiux?: string[];
  challenges?: string;
  solution?: string;
  result?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  year: string;
  description: string;
  technologies: string[];
  capabilities: string[];
  motif: ProjectMotif;
  layout: ProjectLayout;
  featured: boolean;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  /**
   * Shown next to the live link when the demo isn't openly browsable.
   * Never put credentials here — this file ships to the browser.
   */
  demoNote?: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "ai-editor",
    title: "AI Editor",
    category: "AI Product · Vue.js",
    type: "AI-powered editor",
    year: "2026",
    description:
      "A large AI-powered editor built in Vue.js — my main product work at Funsol Technologies.",
    technologies: ["Vue.js", "JavaScript", "REST APIs", "Component architecture"],
    capabilities: [
      "AI-assisted editing interface",
      "Large-scale component architecture",
      "Reusable UI systems",
      "API-driven application state",
      "Responsive product interface",
    ],
    motif: "editor",
    layout: "feature",
    featured: true,
    caseStudy: {
      overview:
        "An AI-powered editor developed in Vue.js at Funsol Technologies, where I work as a frontend developer on the product.",
      approach:
        "A long-running product rather than a one-off build: the interface is composed from a reusable component system so features can be added without the editor drifting apart.",
      architecture: [
        "Vue.js component architecture across a large editor surface",
        "Shared UI system for consistent editor controls",
        "REST API integration driving application state",
      ],
    },
  },
  {
    slug: "framekit-remotion",
    title: "Framekit",
    category: "Creative Product · Video Engineering",
    type: "Programmatic video platform",
    year: "2026",
    description:
      "Turns spreadsheets, scripts and URLs into rendered video. Built on Remotion.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Remotion",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    capabilities: [
      "Template-based video generation",
      "Data-to-video from CSV, Excel & JSON",
      "Script-to-video and website-to-video",
      "Multi-scene long-form workflows",
      "Timeline editing with live preview",
      "Video export & rendering pipeline",
    ],
    motif: "video",
    layout: "visual",
    featured: true,
    liveUrl: "https://remotion-green.vercel.app/",
    caseStudy: {
      overview:
        "Framekit treats video as a render target for React. Instead of editing clips by hand, a user picks a template, feeds it structured input — a spreadsheet, a JSON payload, a script, or a URL — and the platform composes a multi-scene video from it.",
      problem:
        "Producing video at volume normally means repeating the same edit for every row of data. The manual loop is the bottleneck, not the creative decision.",
      approach:
        "Scenes are React components with a declared prop contract, so a template is a typed composition rather than a fixed timeline. Any input source that can be normalised into that contract becomes a valid video source — which is what makes CSV, JSON, a script and a website URL interchangeable inputs.",
      architecture: [
        "Remotion composition layer — scenes as typed React components",
        "Input adapters normalising CSV / Excel / JSON / script / URL into a shared scene contract",
        "Timeline state driving both the editor UI and the render",
        "Live preview bound to the same composition used for final export",
        "Render & export pipeline for long-form, multi-scene output",
      ],
      uiux: [
        "Editor built around a timeline: scenes are the unit of interaction",
        "Preview and output are the same composition, so what is edited is what renders",
        "Progressive disclosure — template selection first, scene-level control second",
      ],
      challenges:
        "Keeping the interactive preview in sync with the render pipeline while long-form, multi-scene compositions stay responsive to edit.",
      solution:
        "A single source of truth for timeline and scene state, consumed by the editor and the renderer alike, so preview fidelity is structural rather than approximated.",
    },
  },
  {
    slug: "tools4pdf",
    title: "Tools4PDF",
    category: "SaaS · Document Tooling",
    type: "PDF tools platform",
    year: "2026",
    description:
      "A suite of PDF tools sharing one responsive SaaS interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    capabilities: [
      "PDF processing workflows",
      "File upload & dynamic flows",
      "Tool-based application architecture",
      "Responsive SaaS interface",
      "Reusable component system",
    ],
    motif: "document",
    layout: "split",
    featured: true,
    /* The www subdomain has no valid TLS cert; the apex serves HTTPS fine. */
    liveUrl: "https://tools4pdf.com/",
    caseStudy: {
      overview:
        "A platform where every PDF operation is a self-contained tool rendered through one shared interface shell — upload, configure, process, download.",
      approach:
        "Rather than building each tool as its own page, the interface is a shell parameterised by tool configuration. New tools are added as data; the upload, progress, error and result states come from the shell.",
      architecture: [
        "Shared tool shell driving upload → configure → process → result",
        "File upload handling with dynamic, per-tool flows",
        "REST API integration for document processing",
        "Reusable component library across the tool suite",
      ],
      uiux: [
        "One predictable interaction model across every tool in the suite",
        "State-complete flows: idle, uploading, processing, success and failure",
        "Responsive from desktop workstation down to mobile",
      ],
    },
  },
  {
    slug: "tml-inventory",
    title: "TML Inventory Management System",
    category: "Business System · MERN",
    type: "Inventory & admin platform",
    year: "2025",
    description:
      "Inventory management and admin dashboards on the MERN stack.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    capabilities: [
      "Inventory tracking & management",
      "Admin dashboard interfaces",
      "Data-driven views over live records",
      "Dynamic routing",
      "End-to-end API integration",
    ],
    motif: "dashboard",
    layout: "stacked",
    featured: true,
    liveUrl: "https://tml-frontend.vercel.app/",
    demoNote: "Sign-in required — ask me for access",
    caseStudy: {
      overview:
        "Designed and built as a working operational system for a retail business — the interface people actually use to keep stock accurate, not a dashboard mockup.",
      problem:
        "Inventory tracked outside a system drifts from reality, and every downstream decision inherits the error.",
      approach:
        "Model the business workflow first, then build screens around it: records, movements and the actions staff perform most often get the shortest path.",
      architecture: [
        "MERN stack — MongoDB, Express, React, Node",
        "REST API layer between the interface and inventory records",
        "Dynamic routing across record and detail views",
        "Data-driven components rendering live collections",
      ],
    },
  },
  {
    slug: "azwah",
    title: "Azwah",
    category: "eCommerce · Luxury",
    type: "Fragrance storefront",
    year: "2025",
    description:
      "Luxury fragrance storefront — product storytelling meets a conversion-focused buying flow.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    capabilities: [
      "Premium visual direction",
      "Product presentation & discovery",
      "Storytelling-led merchandising",
      "Conversion-focused layout",
      "Fully responsive commerce UI",
    ],
    motif: "commerce",
    layout: "split",
    featured: true,
    liveUrl: "https://azwah-seven.vercel.app/",
    caseStudy: {
      overview:
        "Fragrance cannot be sampled through a screen, so the storefront sells through atmosphere — imagery, pacing and typography doing the work a tester strip would do in person.",
      approach:
        "Editorial pacing over grid density: fewer products per viewport, larger imagery, and a discovery path that reads like a lookbook while still ending at a product page.",
      uiux: [
        "Restrained type hierarchy and generous whitespace to read as premium",
        "Product discovery structured as narrative rather than catalogue",
        "Commerce surfaces that hold their composition down to mobile",
      ],
    },
  },
  {
    slug: "gcs-assessment",
    title: "GCS Structured Assessment",
    category: "Interactive Tool · Clinical Education",
    type: "Assessment & scoring system",
    year: "2025",
    description:
      "Interactive Glasgow Coma Scale assessment with live scoring and a self-test mode.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    capabilities: [
      "Structured assessment workflow",
      "Score calculation from interactive state",
      "Self-test mode",
      "Clear educational information architecture",
      "Responsive interactive UI",
    ],
    motif: "assessment",
    layout: "stacked",
    featured: true,
    liveUrl: "https://gcs-brown.vercel.app/",
    caseStudy: {
      overview:
        "The Glasgow Coma Scale is a scored assessment across three response categories. The tool walks a user through it, computes the score from their selections, and offers a self-test mode to practise against.",
      problem:
        "Reference material explains the scale but does not let anyone perform or rehearse it — the gap between reading a table and applying it correctly is where errors live.",
      approach:
        "Model the assessment as state. Each selection is a typed value; the score is derived, never entered — which means the interface cannot disagree with itself.",
      uiux: [
        "One decision per step, with the scale's structure kept visible",
        "Derived score updates as the assessment is completed",
        "Self-test mode reuses the same components in a checked mode",
      ],
    },
  },
  {
    slug: "webginet",
    title: "Webginet",
    category: "Enterprise · Corporate Web",
    type: "Technology company website",
    year: "2025",
    description:
      "Enterprise technology site with a deep service and industry hierarchy.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    capabilities: [
      "Enterprise information architecture",
      "Multi-level navigation systems",
      "Industry & solution taxonomies",
      "Deep service hierarchies",
      "Responsive across the full tree",
    ],
    motif: "enterprise",
    layout: "rail",
    featured: false,
    liveUrl: "https://webginet.vercel.app/",
    caseStudy: {
      overview:
        "A corporate site whose real difficulty is structural: many services, many industries, and every page needing to stay reachable and legible.",
      approach:
        "Design the navigation model before the pages — a taxonomy that holds up as the content grows, rather than a menu retrofitted onto finished pages.",
    },
  },
  {
    slug: "efren-sports",
    title: "Efren Sports & Events",
    category: "Premium Web · Sports & Events",
    type: "Venue & booking experience",
    year: "2025",
    description:
      "Premium sports and events venue site with a booking flow.",
    technologies: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    capabilities: [
      "Luxury visual direction",
      "Service & venue presentation",
      "Booking flow",
      "Immersive imagery-led layout",
      "Responsive experience",
    ],
    motif: "editorial",
    layout: "rail",
    featured: false,
    liveUrl: "https://snookerball.vercel.app/",
  },
  {
    slug: "pak-arabian",
    title: "Pak Arabian Enterprises",
    category: "eCommerce · Luxury Fragrance",
    type: "Direct-to-consumer storefront",
    year: "2025",
    description:
      "Artisanal perfume house storefront — a browsable fragrance library and an account-free ordering flow.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    capabilities: [
      "Fragrance library with category browsing",
      "Product detail and stock presentation",
      "Account-free, three-step ordering flow",
      "Brand storytelling and testimonials",
      "Responsive commerce UI",
    ],
    motif: "commerce",
    layout: "rail",
    featured: false,
    liveUrl: "https://pak-arabian.vercel.app/",
    caseStudy: {
      overview:
        "A direct-to-consumer storefront for an artisanal perfume house, built around a browsable library of scents split by men's, women's, unisex and signature collections.",
      approach:
        "The buying flow is deliberately short — choose a fragrance, order without creating an account, pay on delivery — so the interface carries the brand rather than a checkout funnel.",
    },
  },
  {
    slug: "lumina",
    title: "LUMINA",
    category: "eCommerce · Fashion",
    type: "Luxury apparel storefront",
    year: "2025",
    description:
      "Luxury abaya and evening wear storefront, led by collection and editorial presentation.",
    technologies: ["React", "JavaScript", "CSS"],
    capabilities: [
      "Featured collections and new arrivals",
      "Editorial product presentation",
      "Catalogue browsing",
      "Responsive storefront layout",
    ],
    motif: "commerce",
    layout: "rail",
    featured: false,
    liveUrl: "https://lumina-eight-khaki.vercel.app/",
    caseStudy: {
      overview:
        "A storefront for luxury abayas and evening wear, structured around seasonal collections rather than a flat product grid.",
      uiux: [
        "Collection-first browsing over catalogue density",
        "Editorial imagery carrying the brand positioning",
      ],
    },
  },
  {
    slug: "surveillance-platform",
    title: "Surveillance Solutions Platform",
    category: "Enterprise · Security Technology",
    type: "Product & solutions website",
    year: "2025",
    description:
      "Enterprise security product site — cameras, NVR/VMS and IoT sensors organised by product line and industry.",
    technologies: ["React", "Vite", "JavaScript", "Responsive UI"],
    capabilities: [
      "Product catalogue across cameras, NVR/VMS and sensors",
      "Solutions segmented by industry",
      "Lead-capture and online demo request flows",
      "Deep multi-level navigation",
      "Responsive enterprise layout",
    ],
    motif: "enterprise",
    layout: "rail",
    featured: false,
    liveUrl: "https://frontend-zeta-ruddy-69.vercel.app/",
    caseStudy: {
      overview:
        "A security technology site presenting network cameras, PTZ, NVR/VMS, LoRaWAN sensors and access control, cross-cut by industry solutions such as city surveillance and healthcare.",
      problem:
        "Two overlapping taxonomies — products and industries — both need to lead to the same enquiry, without the visitor having to understand the catalogue first.",
      approach:
        "Products and solutions are separate entry paths into one shared enquiry flow, so either mental model reaches a contact form.",
    },
  },
  {
    slug: "video-player",
    title: "Video Player",
    category: "Media Interface",
    type: "Custom player UI",
    year: "2024",
    description:
      "Custom video interface — media controls and playback state built from scratch.",
    technologies: ["React", "TypeScript", "CSS"],
    capabilities: [
      "Custom media controls",
      "Playback & interaction state",
      "Keyboard-accessible controls",
      "Responsive player layout",
    ],
    motif: "media",
    layout: "rail",
    featured: false,
    liveUrl: "https://video-player-xi-lyart.vercel.app/",
  },
  {
    slug: "psychologist",
    title: "Psychologist Practice",
    category: "Professional Services",
    type: "Practice website",
    year: "2024",
    description:
      "Calm, trust-led site for a private practice.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    capabilities: [
      "Trust-focused visual language",
      "Clear service & contact paths",
      "Accessible, readable typography",
      "Responsive interface",
    ],
    motif: "editorial",
    layout: "stacked",
    featured: false,
    liveUrl: "https://psychologist-ruby.vercel.app/",
  },
  {
    slug: "auth-application",
    title: "Nexus Dashboard",
    category: "Application · Dashboard",
    type: "Dashboard & auth system",
    year: "2024",
    description:
      "Dashboard application — authentication, protected routing, user and content management.",
    technologies: ["React", "TypeScript", "Context API", "REST APIs"],
    capabilities: [
      "Authentication and protected routing",
      "User and content management views",
      "Form workflows with validation",
      "Scalable dashboard architecture",
    ],
    motif: "auth",
    layout: "stacked",
    featured: false,
    liveUrl: "https://assignment-practice.vercel.app/login",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const railProjects = projects.filter((p) => p.layout === "rail");
