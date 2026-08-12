import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { MotionProvider } from "@/components/layout/MotionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${site.name} — Frontend Developer | React.js & Next.js`;
const description =
  "Yumna Hammad is a frontend-focused full-stack developer specializing in React.js, Next.js, TypeScript, modern UI, animation, SaaS products, and AI-powered development.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Yumna Hammad",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Full-Stack Developer",
    "SaaS Development",
    "AI-Powered Development",
    "Islamabad",
    "Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f8" },
  ],
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before first paint: applies the saved choice, falling back to the
 * system preference, so the correct theme is painted immediately rather than
 * flashing dark-then-light. Without JS the CSS defaults to dark.
 */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',d);}catch(e){}})();`;

/** Structured data — only facts stated on the page itself. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Frontend Developer & Full-Stack Developer",
  email: `mailto:${site.email}`,
  telephone: site.phoneIntl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  worksFor: { "@type": "Organization", name: "Funsol Technologies" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "FAST National University" },
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Frontend Development",
    "UI/UX",
    "Prompt Engineering",
  ],
  ...(site.linkedin || site.github
    ? { sameAs: [site.linkedin, site.github].filter(Boolean) }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // The theme script stamps data-theme before paint; that divergence from
      // the server HTML is intentional, not a bug to warn about.
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-ink text-bone min-h-full">
        <script
          type="application/ld+json"
          // Static, author-controlled schema object.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
