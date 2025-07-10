"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import SectionWrapper from "@/components/SectionWrapper";
import { fadeInUp } from "@/utils/motion";

export default function HomeSection() {
  return (
    <SectionWrapper id="home" className="pt-6 sm:pt-8">
      <motion.div
        variants={fadeInUp}
        className="flex justify-center mt-18 sm:mt-0"
      >
        <Image
          src="/2N1A4997.webp"
          alt="Portrait of Sukhvir Singh"
          width={112}
          height={112}
          priority
          className="rounded-full object-cover border-[0.25rem] border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.h1
        id="hero-title"
        variants={fadeInUp}
        className="text-base sm:text-lg md:text-xl font-bold text-gray-800"
      >
        Hi, I’m Sukhvir Singh
      </motion.h1>

      <motion.p variants={fadeInUp} className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
        A Full-Stack Developer with <strong>3+ years</strong> experience in
        building scalable and user-friendly web applications using{" "}
        <span className="underline decoration-gray-500 font-semibold">
          React, Next.js & TypeScript
        </span>
        .
      </motion.p>

      {/* buttons */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4"
      >
        <Link
          href="#contact"
          role="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition duration-200 w-full sm:w-auto text-sm sm:text-base font-medium shadow"
          title="Contact Me"
        >
          Contact Me <FaArrowRight className="w-4 h-4 hidden sm:inline" />
        </Link>

        <a
          href="/Sukhvir_Resume.pdf"
          download
          role="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-400 text-gray-800 hover:bg-gray-100 transition duration-200 w-full sm:w-auto text-sm sm:text-base font-medium shadow-sm"
          title="Download CV"
        >
          Download CV <HiDownload className="w-5 h-5 hidden sm:inline" />
        </a>

        <a
          href="https://www.linkedin.com/in/sukhvir-singh4898"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200 font-medium w-full sm:w-auto text-sm sm:text-base shadow-sm"
        >
          <FaLinkedin className="w-5 h-5 hidden sm:inline" />
          LinkedIn
        </a>

        <a
          href="https://github.com/sukhvir097"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white transition duration-200 font-medium w-full sm:w-auto text-sm sm:text-base shadow-sm"
        >
          <FaGithub className="w-5 h-5 hidden sm:inline" />
          GitHub
        </a>
      </motion.div>

      <ScrollDownIndicator targetId="about" />
    </SectionWrapper>
  );
}
