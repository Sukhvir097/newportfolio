"use client";

import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp } from "@/utils/motion";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Featured Projects" scrollTargetId="skills">
      <motion.p variants={fadeInUp} className="text-sm sm:text-base text-gray-600 leading-relaxed">
        Here are a few projects I’ve recently built using cutting-edge
        technologies. Each project emphasizes performance, responsiveness, and
        great user experience (UX):
      </motion.p>
      <div className="flex flex-col gap-y-10 relative mt-6">
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <ProjectCard {...project} isEven={idx % 2 === 0} />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
