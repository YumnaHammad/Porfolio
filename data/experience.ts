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
    period: "January 2026 to Present",
    year: "2026",
    location: "Islamabad, Pakistan",
    mode: "On-site",
    current: true,
    summary:
      "Working in the office on an AI editor built in Vue.js, a large product that has been running for years, while also picking up React and Next.js work across the team.",
    highlights: [
      "Frontend development on an AI powered editor built in Vue.js",
      "React.js and Next.js applications with reusable architectures",
      "Responsive SaaS interfaces and PDF tooling",
      "REST API integration, file uploads and dynamic flows",
      "Daily collaboration with designers, backend and QA in one office",
      "AI assisted development workflows",
    ],
  },
  {
    company: "Freelance",
    position: "Frontend & Full-Stack Developer",
    period: "February 2022 to Present",
    year: "2022",
    location: "Remote",
    mode: "Remote",
    current: true,
    summary:
      "Over 20 projects delivered straight to clients, all of it remote. Four years of running my own briefs, calls, timelines and handovers across different time zones.",
    highlights: [
      "eCommerce platforms and storefronts",
      "WordPress and WooCommerce websites built and handed over to clients",
      "Admin dashboards and SaaS applications",
      "Business websites and interactive tools",
      "Custom frontend systems wired to live APIs",
      "Logos, icons and marketing graphics produced in Adobe Illustrator",
      "Proposals, reports and handover documents in Word, Excel and PowerPoint",
      "Several clients running at once, each kept to its own schedule",
    ],
  },
  {
    company: "INSTLY",
    position: "Frontend Developer",
    period: "September 2025",
    year: "2025",
    location: "Remote",
    mode: "Remote",
    summary:
      "Enterprise web applications on a modern TypeScript stack, delivered fully remote with a distributed team.",
    highlights: [
      "React.js, Next.js and TypeScript applications",
      "State management with Redux Toolkit and Context API",
      "Async standups, code review and remote pairing",
    ],
  },
  {
    company: "The Mother Land Mart (TML Mart)",
    position: "Software Engineer & Developer",
    period: "September 2025",
    year: "2025",
    location: "Pakistan",
    mode: "On-site",
    summary:
      "Built an inventory management system on the MERN stack for a retail business, sitting with the staff who use it every day.",
    highlights: [
      "Designed and developed an inventory management system on MERN",
      "Company WordPress site maintained and kept up to date",
      "Stock and sales reporting sheets built in Excel for the team",
      "Development, operations and digital marketing under one role",
    ],
  },
  {
    company: "Fauji Fertilizer Company (FFC)",
    position: "IT Intern",
    period: "2023",
    year: "2023",
    location: "Pakistan",
    mode: "On-site",
    summary:
      "IT operations and technical support inside a large industrial company, working alongside a full corporate IT department.",
    highlights: [
      "Computer systems, networks and day to day troubleshooting",
      "Support tickets handled directly with staff across departments",
      "System documentation written up in Word and Excel",
    ],
  },
  {
    company: "Virtual Soft",
    position: "Frontend Developer",
    period: "2022",
    year: "2022",
    location: "Pakistan",
    mode: "On-site",
    summary:
      "First professional role, learning how a real team plans, reviews and ships frontend work.",
    highlights: [
      "React.js development and responsive interfaces",
      "WordPress theme edits and content updates for client sites",
      "Sprint planning, code review and team collaboration",
    ],
  },
];

export const education = {
  degree: "MS Computer Science",
  institution: "FAST National University",
  location: "Islamabad, Pakistan",
};
