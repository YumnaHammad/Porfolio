import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/hero/Hero";
import { Statement } from "@/components/sections/Statement";
import { Stats } from "@/components/sections/Stats";
import { Work } from "@/components/projects/Work";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { AILab } from "@/components/sections/AILab";
import { Services, WhyMe } from "@/components/sections/Services";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        {/* The scroll is a sequence: who → what → proof → work → person →
            track record → capability → range → reason → contact. */}
        <Hero />
        <Statement />
        <Stats />
        <Work />
        <About />
        <Experience />
        <Skills />
        <AILab />
        <Services />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
