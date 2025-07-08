"use client";

import dynamic from "next/dynamic";
import HeaderNav from "../components/HeaderNav";
import HomeSection from "../components/HomeSection";

const AboutSection = dynamic(
  () => import("../components/AboutSection"),
  {
    loading: () => <div className="text-center py-10">Loading About...</div>,
  }
);

const ProjectsSection = dynamic(
  () => import("../components/ProjectsSection"),
  {
    loading: () => <div className="text-center py-10">Loading Projects...</div>,
  }
);

const SkillsSection = dynamic(
  () => import("../components/SkillsSection"),
  {
    loading: () => <div className="text-center py-10">Loading Skills...</div>,
  }
);

const ExperienceSection = dynamic(
  () => import("../components/ExperienceSection"),
  {
    loading: () => <div className="text-center py-10">Loading Experience...</div>,
  }
);

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  {
    loading: () => <div className="text-center py-10">Loading Contact...</div>,
  }
);

const Footer = dynamic(
  () => import("../components/Footer"),
  {
    loading: () => <div className="text-center py-10">Loading Footer...</div>,
  }
);

export default function Home() {
  return (
    <div>
      <HeaderNav />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
