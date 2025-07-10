"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJs,} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiMui, SiPostman, SiJest, SiTestinglibrary, SiVercel, SiNetlify, SiFigma, SiJira, SiJsonwebtokens,} from "react-icons/si";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/utils/motion";

const allSkills = [
  { name: "React.js", icon: <FaReact className="w-8 h-8 sm:w-9 sm:h-9 text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8 sm:w-9 sm:h-9" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 sm:w-9 sm:h-9 text-[#3178c6]" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs className="w-8 h-8 sm:w-9 sm:h-9 text-[#f7df1e]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 sm:w-9 sm:h-9 text-[#06B6D4]" /> },
  { name: "Material UI", icon: <SiMui className="w-8 h-8 sm:w-9 sm:h-9 text-[#007FFF]" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 sm:w-9 sm:h-9 text-[#68A063]" /> },
  { name: "Express.js", icon: <SiExpress className="w-8 h-8 sm:w-9 sm:h-9" /> },
  { name: "MongoDB + Mongoose", icon: <SiMongodb className="w-8 h-8 sm:w-9 sm:h-9 text-[#47A248]" /> },
  { name: "RESTful APIs", icon: <SiPostman className="w-8 h-8 sm:w-9 sm:h-9 text-[#FF6C37]" /> },
  { name: "JWT Auth", icon: <SiJsonwebtokens className="w-8 h-8 sm:w-9 sm:h-9" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="w-8 h-8 sm:w-9 sm:h-9 text-[#F05032]" /> },
  { name: "Docker", icon: <FaDocker className="w-8 h-8 sm:w-9 sm:h-9 text-[#2496ED]" /> },
  { name: "Vercel", icon: <SiVercel className="w-8 h-8 sm:w-9 sm:h-9" /> },
  { name: "Netlify", icon: <SiNetlify className="w-8 h-8 sm:w-9 sm:h-9 text-[#00C7B7]" /> },
  { name: "Jest", icon: <SiJest className="w-8 h-8 sm:w-9 sm:h-9 text-[#C21325]" /> },
  { name: "React Testing Library", icon: <SiTestinglibrary className="w-8 h-8 sm:w-9 sm:h-9 text-[#E33332]" /> },
  { name: "Figma", icon: <SiFigma className="w-8 h-8 sm:w-9 sm:h-9 text-[#F24E1E]" /> },
  { name: "Jira", icon: <SiJira className="w-8 h-8 sm:w-9 sm:h-9 text-[#0052CC]" /> },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Skills" className="space-y-8" scrollTargetId="experience">
      <motion.ul role="list" variants={staggerContainer} className="flex flex-wrap justify-center gap-5">
        {allSkills.map(({ name, icon }) => (
          <motion.li
            key={name}
            variants={fadeInUp}
            role="listitem"
            tabIndex={0}
            className="flex flex-col items-center gap-2 transition-transform hover:scale-105 focus:scale-105 outline-none"
          >
            {icon}
            <span className="text-sm text-gray-600 text-center">{name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </SectionWrapper>
  );
}
