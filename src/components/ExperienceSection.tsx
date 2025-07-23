"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { exp } from "../components/data";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp } from "@/utils/motion";

export default function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      className="max-w-4xl space-y-8"
      scrollTargetId="contact"
    >
      <motion.div variants={fadeInUp} className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2" />

        <div className="flex flex-col gap-12 relative">
          {exp.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.company}
                variants={fadeInUp}
                className={`relative w-full px-4 ${
                  isLeft
                    ? "md:self-start md:w-1/2 md:pr-12"
                    : "md:self-end md:w-1/2 md:pl-12"
                }`}
              >
                {/* Timeline horizontal line and arrow */}
                <div
                  className={`hidden md:block absolute top-6 h-[2px] bg-gray-300 ${
                    isLeft ? "right-[5px]" : "left-[5px]"
                  } w-12`}
                >
                  <div
                    className={`absolute top-[-6px] ${
                      isLeft
                        ? "right-[-4px] border-l-[6px]"
                        : "left-[-4px] border-r-[6px]"
                    } border-y-[6px] border-y-transparent ${
                      isLeft ? "border-l-gray-300" : "border-r-gray-300"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className="relative p-6 rounded shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white/60 hover:scale-105 text-left"
                  aria-label={`${item.role} at ${item.company}`}
                  role="group"
                >
                  <div className="flex items-center text-sm font-medium text-gray-900 gap-2 mb-1">
                    <Briefcase size={16} className="text-blue-600 shrink-0" />
                    <span className="leading-tight">
                      {item.role}
                      <span className="font-normal text-gray-700">
                        {" "}
                        — {item.company}
                      </span>
                    </span>
                  </div>

                  <div className="mb-1 flex space-x-2 ml-6">
                    <span className="text-xs text-gray-600">
                      {item.duration}
                    </span>
                    <span className="italic text-xs text-gray-600">
                      {item.location}
                    </span>
                  </div>

                  <ul className="list-disc pl-5 text-xs text-gray-800 space-y-0.5 mt-2">
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
