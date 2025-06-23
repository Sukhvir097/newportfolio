"use client";

import { motion } from "framer-motion";

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

const skills = [
  "React.js",
  "Next.js",
  "TypeScript & JavaScript (ES6+)",
  "Tailwind CSS",
  "Material UI",
  "Node.js & Express.js",
  "MongoDB + Mongoose",
  "RESTful API Design",
  "JWT Authentication",
  "Git & GitHub",
  "Docker",
  "Vercel & Netlify",
  "Jira & Figma",
  "Jest",
  "React Testing Library",
  "Postman",
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-16 px-4 max-w-xl mx-auto text-left space-y-12 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      aria-labelledby="skills-heading"
    >
      <motion.h2
        id="skills-heading"
        variants={fadeInUp}
        className="text-2xl font-semibold text-gray-800 text-center mb-8"
      >
        Skills
      </motion.h2>

      <div role="list" className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            className="cursor-default select-none rounded-full bg-gray-100 border border-gray-300 px-4 py-2 text-gray-800 text-sm font-medium shadow-sm hover:bg-gray-200 transition"
            role="listitem"
            tabIndex={0}
            aria-label={skill}
            title={skill}
          >
            {skill}
          </button>
        ))}
      </div>
    </motion.section>
  );
}
