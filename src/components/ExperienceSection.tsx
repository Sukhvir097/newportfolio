"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { exp } from "../components/data";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp } from "@/utils/motion";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" title="Work Experience" className="max-w-4xl space-y-8" scrollTargetId="contact">
      <motion.div variants={fadeInUp} className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2 z-0" />

        <div className="flex flex-col gap-12 relative z-10">
          {exp.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.company}
                variants={fadeInUp}
                custom={index + 1}
                className={`relative w-full md:w-1/2 px-4 ${
                  isLeft ? "self-start md:pr-12" : "self-end md:pl-12"
                }`}
              >
                {/* Timeline arrows */}
                <motion.div
                  variants={fadeInUp}
                  custom={index + 0.5}
                  className={`hidden md:block absolute top-6 h-[2px] bg-gray-300 z-0 ${
                    isLeft
                      ? "right-[6.25%] translate-x-1/2"
                      : "left-[6.25%] -translate-x-1/2"
                  } w-[calc(18%-2rem)]`}
                >
                  <motion.div
                    variants={fadeInUp}
                    custom={index + 0.5}
                    className={`absolute top-[-6px] ${
                      isLeft
                        ? "right-0 border-l-[8px]"
                        : "left-0 border-r-[8px]"
                    } border-y-[8px] border-y-transparent ${
                      isLeft ? "border-l-gray-300" : "border-r-gray-300"
                    }`}
                  />
                </motion.div>

                <div
                  className="p-6 rounded shadow-md transition-all duration-300 bg-white border border-gray-200 hover:bg-gray-50 hover:scale-105"
                  aria-label={`${item.role} at ${item.company}`}
                >
                  <div className="flex items-center text-sm font-medium text-gray-900 gap-2 mb-1">
                    <Briefcase size={16} className="text-blue-600" />
                    <span>
                      {item.role}
                      <span className="font-normal text-gray-700">
                        {" "}
                        — {item.company}
                      </span>
                    </span>
                  </div>
                  <span className="text-xs text-gray-600">{item.duration}</span>
                  <p className="italic text-xs text-gray-600">{item.location}</p>

                  <ul className="list-disc list-inside text-xs text-gray-800 space-y-0.5 mt-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
