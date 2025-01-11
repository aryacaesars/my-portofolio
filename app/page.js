'use client'

import { useSidebar } from "../contexts/SidebarContext"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import JourneySection from "../components/JourneySection"
import ToolsSection from "../components/ToolsSection"
import ContactSection from "../components/ContactSection"
import ParticlesBackground from "../components/ParticlesBackground"

export default function Home() {
  const { sidebarWidth } = useSidebar()

  return (
    <div className="relative">
      <ParticlesBackground />
      <div 
        className="transition-all duration-300 ease-in-out"
        style={{ marginRight: `${sidebarWidth}px` }}
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <ToolsSection />
        <ContactSection />
      </div>
    </div>
  )
}

