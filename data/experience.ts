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
      "Building production web applications and SaaS interfaces in a professional engineering team.",
    highlights: [
      "Developing modern web applications with React.js and Next.js",
      "Building scalable, reusable frontend architectures",
      "Developing responsive SaaS interfaces",
      "Building PDF-related tools and applications",
      "Integrating REST APIs, file uploads and dynamic application flows",
      "Implementing modern UI systems from reusable components",
      "Improving frontend performance and responsive behaviour",
      "Working with modern AI-assisted development workflows",
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
      "20+ projects delivered directly for clients — eCommerce platforms, dashboards, SaaS products, business sites and custom frontend systems.",
    highlights: [
      "eCommerce platforms and storefronts",
      "Admin dashboards and internal systems",
      "SaaS applications and interactive tools",
      "Business and portfolio websites",
      "API-integrated, custom frontend systems",
      "AI-related products and workflows",
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
      "Enterprise web application development with a modern TypeScript frontend stack.",
    highlights: [
      "Built enterprise web applications with React.js, Next.js and TypeScript",
      "Implemented state management with Redux Toolkit and Context API",
      "Worked within a modern frontend architecture",
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
      "Designed and developed an inventory management system alongside operational and business work.",
    highlights: [
      "Designed and developed an Inventory Management System on the MERN stack",
      "Handled operational and development tasks",
      "Worked on digital marketing activities",
      "Contributed to customer engagement and business workflows",
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
      "IT operations and technical support across company computer systems and networks.",
    highlights: [
      "IT operations and technical support",
      "Computer systems and networks",
      "Troubleshooting and system documentation",
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
      "Early professional frontend work — React development inside a collaborative team process.",
    highlights: [
      "React.js development and responsive interfaces",
      "Modern JavaScript and frontend workflows",
      "Collaboration, planning and code reviews",
    ],
  },
];

export const education = {
  degree: "MS Computer Science",
  institution: "FAST National University",
  location: "Islamabad, Pakistan",
};
