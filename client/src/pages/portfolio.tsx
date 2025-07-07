import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TerminalSection from "@/components/TerminalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function PortfolioPage() {
  useEffect(() => {
    // Add scan line effect
    const scanLine = document.createElement('div');
    scanLine.className = 'scan-line';
    document.body.appendChild(scanLine);

    return () => {
      if (document.body.contains(scanLine)) {
        document.body.removeChild(scanLine);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-obsidian-black via-gray-900 to-deep-purple text-glacial-white overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TerminalSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
