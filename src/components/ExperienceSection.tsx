"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import {exp} from "../components/data";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="py-10 px-4 max-w-4xl mx-auto  space-y-4 sm:py-12 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeIn}
        className="text-xl sm:text-2xl font-semibold text-center text-gray-800 mb-10"
      >
        Work Experience
      </motion.h2>

      <div className="relative">
        {/* Vertical center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-12 relative z-10">
          {exp.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.company}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className={`relative w-full md:w-1/2 px-4 ${
                  isLeft ? "self-start md:pr-12" : "self-end md:pl-12"
                }`}
              >
                <div
                  className={`hidden md:block absolute top-6 h-[2px] bg-gray-400 z-0 ${
                    isLeft
                      ? "right-[6.25%] translate-x-1/2"
                      : "left-[6.25%] -translate-x-1/2"
                  } w-[calc(18%-2rem)]`}
                >
                  <div
                    className={`absolute top-[-6px] ${
                      isLeft
                        ? "right-0 border-l-[8px]"
                        : "left-0 border-r-[8px]"
                    } border-y-[8px] border-y-transparent ${
                      isLeft ? "border-l-gray-400" : "border-r-gray-400"
                    }`}
                  />
                </div>

                <div className="bg-gray-100 p-4 rounded shadow-md">
                  <div className="flex items-center text-sm font-medium text-gray-800 gap-2 mb-1">
                    <Briefcase size={16} className="text-blue-500" />
                    <span>
                      {item.role}
                      <span className="font-normal text-gray-600">
                        {" "}
                        — {item.company}
                      </span>
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{item.duration}</span>
                  <p className="italic text-xs text-gray-500">
                    {item.location}
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-700 space-y-0.5 mt-2">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
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
