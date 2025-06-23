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

const experiences = [
  {
    role: "Full Stack Developer",
    company: "TechNova Solutions",
    location: "Calgary, AB",
    duration: "Mar 2023 – Present",
    details: [
      "Built scalable full-stack web applications using React, Node.js, and MongoDB.",
      "Led migration of legacy code to TypeScript and improved maintainability.",
      "Integrated third-party APIs including Stripe, SendGrid, and Firebase.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "BrightApps Inc.",
    location: "Remote",
    duration: "Jan 2022 – Feb 2023",
    details: [
      "Developed responsive UIs using Next.js and Tailwind CSS.",
      "Optimized performance with lazy loading and code splitting.",
      "Collaborated with designers to refine UX using Figma and Storybook.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-16 px-4 max-w-5xl mx-auto text-center space-y-10 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        Work Experience
      </motion.h2>

      <div className="space-y-8 text-left">
        {experiences.map(({ role, company, location, duration, details }) => (
          <motion.div
            key={role}
            variants={fadeInUp}
            className="rounded-xl border border-gray-200 bg-white/60 backdrop-blur p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h3 className="text-lg font-semibold text-indigo-600">
                {role} <span className="text-gray-700 font-medium">— {company}</span>
              </h3>
              <p className="text-sm text-gray-500 mt-1 sm:mt-0">{duration}</p>
            </div>
            <p className="text-sm text-gray-600 italic mt-1">{location}</p>
            <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
