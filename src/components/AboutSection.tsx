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

export default function AboutSection() {
  const aboutTexts = [
    "I'm Sukhvir Singh, a passionate and detail-oriented Full Stack Developer based in Calgary, Alberta. I build scalable, secure, and user-friendly web apps using React, Next.js, Node.js, TypeScript, and Material UI.",
    "Experienced in full-stack development, API integration, and deployments on GCP & AWS. Proficient with GitHub, Jira, Figma, and Jest.",
    "I'm looking for a full-time software developer role where I can grow and contribute meaningfully.",
    "Outside coding, I explore tech trends, play games, watch movies, and dive into history & philosophy. I'm also learning guitar.",
  ];

  return (
    <motion.section
      id="about"
      className="py-10 px-4 max-w-3xl mx-auto text-center space-y-4 sm:py-12 sm:px-6 md:px-10"
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
        About Me
      </motion.h2>
      {aboutTexts.map((text, idx) => (
        <motion.p
          key={idx}
          variants={fadeInUp}
          initial={false}
          className="text-sm sm:text-base text-gray-700 leading-relaxed"
        >
          {text}
        </motion.p>
      ))}
    </motion.section>
  );
}
