"use client";

import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import { fadeInUp, staggerContainer } from "@/utils/motion";

export default function AboutSection() {
  const aboutTexts = [
    "I'm Sukhvir Singh, a passionate and detail-oriented Full Stack Developer based in Calgary, Alberta. I specialize in building scalable, secure, and user-friendly web applications using React, Next.js, Node.js, TypeScript, and Material UI.",
    "With solid experience in full-stack development, API integration, and cloud deployments on Google Cloud Platform (GCP) and Amazon Web Services (AWS), I bring proficiency in modern development workflows using GitHub, Jira, Figma, and Jest.",
    "I am actively seeking a full-time software developer role where I can continue to grow professionally and contribute meaningfully to innovative and impactful projects.",
    "Beyond coding, I enjoy exploring the latest technology trends, playing video games, watching movies, and diving deep into history and philosophy. Additionally, I am currently learning to play the guitar to nurture my creative side.",
  ];

  return (
    <motion.section
      id="about"
      className="pt-10 px-4 max-w-3xl mx-auto text-center space-y-4 sm:pt-12 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        About Me
      </motion.h2>

      {aboutTexts.map((text, idx) => (
        <motion.p
          key={idx}
          variants={fadeInUp}
          className="text-sm sm:text-base text-gray-700 leading-relaxed px-2 sm:px-4"
        >
          {text}
        </motion.p>
      ))}

      <ScrollDownIndicator targetId="projects" />
    </motion.section>
  );
}
