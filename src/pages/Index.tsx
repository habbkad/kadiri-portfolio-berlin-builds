
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="fixed top-20 right-4 z-40 bg-background/80 backdrop-blur-sm"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
      
      {/* Add pt-16 to account for fixed navbar */}
      <div className="pt-16">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
