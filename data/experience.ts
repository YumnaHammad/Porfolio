export interface Role {
  company: string;
  position: string;
  period: string;
  year: string;
  location: string;
  mode: "On-site" | "Remote" | "Hybrid";
  current?: boolean;
  summary: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    company: "Funsol Technologies",
    position: "Associate Frontend Developer",
    period: "January 2026 — Present",
    year: "2026",
    location: "Islamabad, Pakistan",
    mode: "On-site",
    current: true,
    summary:
      "Frontend developer on an AI editor built in Vue.js — a large, long-running product — alongside React and Next.js work.",
    highlights: [
      "Frontend development of an AI-powered editor built in Vue.js",
      "React.js and Next.js applications with reusable architectures",
      "Responsive SaaS interfaces and PDF tooling",
      "REST API integration, file uploads and dynamic flows",
      "AI-assisted development workflows",
    ],
  },
  {
    company: "Freelance",
    position: "Frontend & Full-Stack Developer",
    period: "February 2022 — Present",
    year: "2022",
    location: "Remote",
    mode: "Remote",
    current: true,
    summary:
      "20+ projects delivered directly for clients, remote.",
    highlights: [
      "eCommerce platforms and storefronts",
      "Admin dashboards and SaaS applications",
      "Business websites and interactive tools",
      "API-integrated custom frontend systems",
    ],
  },
  {
    company: "INSTLY",
    position: "Frontend Developer",
    period: "September 2025",
    year: "2025",
    location: "Remote",
    mode: "Remote",
    summary: "Enterprise web applications on a modern TypeScript stack.",
    highlights: [
      "React.js, Next.js and TypeScript applications",
      "State management with Redux Toolkit and Context API",
    ],
  },
  {
    company: "The Mother Land Mart (TML Mart)",
    position: "Software Engineer & Developer",
    period: "September 2025",
    year: "2025",
    location: "Pakistan",
    mode: "On-site",
    summary: "Built an inventory management system on the MERN stack.",
    highlights: [
      "Designed and developed an Inventory Management System (MERN)",
      "Operational, development and digital marketing work",
    ],
  },
  {
    company: "Fauji Fertilizer Company (FFC)",
    position: "IT Intern",
    period: "2023",
    year: "2023",
    location: "Pakistan",
    mode: "On-site",
    summary: "IT operations and technical support.",
    highlights: [
      "Computer systems, networks and troubleshooting",
      "System documentation",
    ],
  },
  {
    company: "Virtual Soft",
    position: "Frontend Developer",
    period: "2022",
    year: "2022",
    location: "Pakistan",
    mode: "On-site",
    summary: "Early professional frontend work in a team process.",
    highlights: [
      "React.js development and responsive interfaces",
      "Collaboration, planning and code reviews",
    ],
  },
];

export const education = {
  degree: "MS Computer Science",
  institution: "FAST National University",
  location: "Islamabad, Pakistan",
};
