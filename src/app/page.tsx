import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgentWorkflow from "@/components/AgentWorkflow";
import ThemeTracks from "@/components/ThemeTracks";
import Statistics from "@/components/Statistics";
import Timeline from "@/components/Timeline";
import Judges from "@/components/Judges";
import Prizes from "@/components/Prizes";
import WhyParticipate from "@/components/WhyParticipate";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--color-bg)]">
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[var(--color-indigo)]/[0.02] blur-[180px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[var(--color-sky)]/[0.02] blur-[180px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AgentWorkflow />
        <ThemeTracks />
        <Statistics />
        <Timeline />
        <Judges />
        <Prizes />
        <WhyParticipate />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
