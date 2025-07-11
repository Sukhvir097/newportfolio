"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp } from "@/utils/motion";

const aboutTexts = [
  "I'm Sukhvir Singh, a passionate and detail-oriented Full Stack Developer based in Calgary, Alberta. I specialize in building scalable, secure, and user-friendly web applications using React, Next.js, Node.js, TypeScript, and Material UI.",
  "With solid experience in full-stack development, API integration, and cloud deployments on Google Cloud Platform (GCP) and Amazon Web Services (AWS), I bring proficiency in modern development workflows using GitHub, Jira, Figma, and Jest.",
  "I am actively seeking a full-time software developer role where I can continue to grow professionally and contribute meaningfully to innovative and impactful projects.",
  "Beyond coding, I enjoy exploring the latest technology trends, playing video games, watching movies, and diving deep into history and philosophy. Additionally, I am currently learning to play the guitar to nurture my creative side.",
];

export default function AboutSection() {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="about" title="About Me" scrollTargetId="projects">
      {aboutTexts.map((text, idx) =>
        isMobile ? (
          <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {text}
          </p>
        ) : (
          <motion.p
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: idx * 0.2 }}
            className="text-sm sm:text-base text-gray-700 leading-relaxed"
          >
            {text}
          </motion.p>
        )
      )}
    </SectionWrapper>
  );
}

