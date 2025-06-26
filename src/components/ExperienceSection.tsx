"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    company: "G2i Inc.",
    location: "Remote | Florida, US",
    duration: "Dec 2023 – May 2025",
    details: [
      "Developed full-stack web applications using React, Next.js, Node.js, and Material UI.",
      "Created and consumed REST APIs with optimized SQL queries.",
      "Designed prototypes and wireframes using Figma.",
      "Wrote unit and integration tests with Jest.",
      "Worked in Agile teams using Jira for sprint planning.",
    ],
  },
  {
    role: "Software Designer",
    company: "INFOWIZ Software Solutions",
    location: "Chandigarh, India",
    duration: "Apr 2020 – Jul 2021",
    details: [
      "Built web apps with JavaScript, HTML, CSS, and React.",
      "Integrated frontend with REST APIs from backend teams.",
      "Contributed to Agile ceremonies and project reviews.",
      "Ensured responsive, cross-browser compatible designs.",
    ],
  },
  {
    role: "Software Engineer",
    company: "EVA Solutions (P) Ltd.",
    location: "Patiala, India",
    duration: "Sep 2018 – Mar 2019",
    details: [
      "Maintained and enhanced existing web applications.",
      "Optimized CSS/JavaScript for better performance.",
      "Participated in code reviews and requirement analysis.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-10 px-4 max-w-3xl mx-auto text-center space-y-4 sm:py-12 sm:px-6 md:px-10"
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

      <div className="relative">
        {/* Center timeline line */}
        <div className="absolute left-1/2 w-[2px] h-full bg-gray-300 -translate-x-1/2"></div>

        <div className="space-y-20">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={exp.role + exp.company}
                variants={fadeInUp}
                className={`relative w-full md:w-1/2 px-4 ${
                  isLeft
                    ? "md:pr-8 md:mr-auto text-right"
                    : "md:pl-8 md:ml-auto text-left"
                }`}
              >

                <div>
                  <div className="flex justify-between items-center mb-1 text-sm text-gray-800 font-medium">
                    <h3>
                      {exp.role}{" "}
                      <span className="font-normal text-gray-600">— {exp.company}</span>
                    </h3>
                    <span className="text-xs text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="italic text-xs text-gray-500 mb-2">{exp.location}</p>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-gray-700">
                    {exp.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
