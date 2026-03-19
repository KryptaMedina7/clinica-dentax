import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBlock } from "@/components/sections/TrustBlock";
import { About } from "@/components/sections/About";
import { Specialists } from "@/components/sections/Specialists";
import { Treatments } from "@/components/sections/Treatments";
import { Experience } from "@/components/sections/Experience";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background relative selection:bg-accent/30 selection:text-primary overflow-x-hidden">
        <Hero />
        <TrustBlock />
        <About />
        <Specialists />
        <Treatments />
        <Experience />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
