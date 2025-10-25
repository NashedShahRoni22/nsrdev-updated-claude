"use client";
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';

export default function page() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  )
}
