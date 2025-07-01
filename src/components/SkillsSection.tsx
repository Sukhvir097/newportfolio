"use client";

import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMui,
  SiPostman,
  SiJest,
  SiTestinglibrary,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiJira,
  SiJsonwebtokens,
} from "react-icons/si";

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

const allSkills = [
  { name: "React.js", icon: <FaReact size={35} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={35} /> },
  { name: "TypeScript", icon: <SiTypescript size={35} color="#3178c6" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs size={35} color="#f7df1e" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={35} color="#06B6D4" /> },
  { name: "Material UI", icon: <SiMui size={35} color="#007FFF" /> },
  { name: "Node.js", icon: <FaNodeJs size={35} color="#68A063" /> },
  { name: "Express.js", icon: <SiExpress size={35} /> },
  { name: "MongoDB + Mongoose", icon: <SiMongodb size={35} color="#47A248" /> },
  { name: "RESTful APIs", icon: <SiPostman size={35} color="#FF6C37" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens size={35} /> },
  { name: "Git & GitHub", icon: <FaGitAlt size={35} color="#F05032" /> },
  { name: "Docker", icon: <FaDocker size={35} color="#2496ED" /> },
  { name: "Vercel", icon: <SiVercel size={35} /> },
  { name: "Netlify", icon: <SiNetlify size={35} color="#00C7B7" /> },
  { name: "Jest", icon: <SiJest size={35} color="#C21325" /> },
  {
    name: "React Testing Library",
    icon: <SiTestinglibrary size={35} color="#E33332" />,
  },
  { name: "Postman", icon: <SiPostman size={35} color="#FF6C37" /> },
  { name: "Figma", icon: <SiFigma size={35} color="#F24E1E" /> },
  { name: "Jira", icon: <SiJira size={35} color="#0052CC" /> },
];

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

      <motion.ul
        role="list"
        variants={staggerContainer}
        className="flex flex-wrap justify-center gap-5"
      >
        {allSkills.map(({ name, icon }) => (
          <motion.li
            key={name}
            variants={fadeInUp}
            role="listitem"
            className="flex flex-col items-center gap-2 transition-transform hover:scale-105 "
          >
            {icon}
            <span className="text-sm text-gray-600 text-center">{name}</span>
          </motion.li>
        ))}
      </motion.ul>
      <ScrollDownIndicator targetId="experience" />
    </motion.section>
  );
}
