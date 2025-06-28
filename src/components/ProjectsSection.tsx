"use client";

import { projects } from "./data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

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
      <motion.h2
        variants={fadeInUp}
        initial={false}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        initial={false}
        className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed"
      >
        Here are a few projects I’ve built recently using modern technologies.
        Each focuses on performance, responsiveness, and great UX.
      </motion.p>

      <div className="space-y-10">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            isEven={idx % 2 === 1}
          />
        ))}
      </div>
      <ScrollDownIndicator targetId="skills" />
    </motion.section>
  );
}
