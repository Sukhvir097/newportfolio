"use client";

import { motion } from "framer-motion";
import { skills } from "../components/data";
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

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="pt-10 px-4 max-w-3xl mx-auto text-center space-y-8 sm:pt-12 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      aria-labelledby="skills-heading"
    >
      <motion.h2
        id="skills-heading"
        variants={fadeInUp}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        Skills
      </motion.h2>

      <div role="list" className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <motion.button
            key={s}
            variants={fadeInUp}
            type="button"
            className="cursor-default select-none rounded-lg bg-white/50 border border-gray-300 px-4 py-2 text-gray-800 text-sm font-medium shadow-sm transition hover:scale-105 hover:bg-white"
            role="listitem"
            tabIndex={0}
            aria-label={s}
            title={s}
          >
            {s}
          </motion.button>
        ))}
      </div>
      <ScrollDownIndicator targetId="experience" />
    </motion.section>
  );
}
