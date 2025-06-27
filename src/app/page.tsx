"use client";

import { useState, useEffect } from "react";
import HeaderNav from "../components/HeaderNav";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length === 0) return;
        visibleSections.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        const current = `#${visibleSections[0].target.id}`;
        if (current !== activeSection) setActiveSection(current);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [activeSection]);

  return (
    <div>
      <HeaderNav activeSection={activeSection} />
      <main>
        <HomeSection />
        <hr className="my-12 border-t border-gray-300 w-2/3 mx-auto" />
        <AboutSection />
        <hr className="my-12 border-t border-gray-300 w-2/3 mx-auto" />
        <ProjectsSection />
        <hr className="my-12 border-t border-gray-300 w-2/3 mx-auto" />
        <SkillsSection />
        <hr className="my-12 border-t border-gray-300 w-2/3 mx-auto" />
        <ExperienceSection />
        <hr className="my-12 border-t border-gray-300 w-2/3 mx-auto" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
