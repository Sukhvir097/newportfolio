"use client";

import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import { fadeInUp, staggerContainer } from "@/utils/motion";

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="pt-10 px-4 max-w-3xl mx-auto text-center space-y-4 sm:pt-12 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Title */}
      <motion.h2
        variants={fadeInUp}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        Featured Projects
      </motion.h2>

      {/* Subtext */}
      <motion.p
        variants={fadeInUp}
        className="text-sm sm:text-base text-gray-600 px-2 sm:px-4 leading-relaxed"
      >
        Here are a few projects I’ve built recently using modern technologies.
        Each focuses on performance, responsiveness, and great UX.
      </motion.p>

      {/* Project Cards */}
      <div className="flex flex-col gap-y-10 relative mt-6">
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <ProjectCard {...project} isEven={idx % 2 === 0} />
          </motion.div>
        ))}
      </div>

      {/* Scroll to next section */}
      <ScrollDownIndicator targetId="skills" />
    </motion.section>
  );
}
