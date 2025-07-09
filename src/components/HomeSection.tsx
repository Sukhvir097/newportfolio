"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import { staggerContainer, fadeInUp } from "@/utils/motion";

export default function HomeSection() {
  return (
    <motion.section
      id="home"
      className="pt-6 px-4 max-w-3xl mx-auto text-center space-y-4 sm:pt-10 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
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

      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed md:leading-loose">
        A Full-Stack Developer with <strong>3+ years</strong> experience in
        building scalable and user-friendly web applications using{" "}
        <span className="underline decoration-gray-500 font-semibold">
          React, Next.js & TypeScript
        </span>
        .
      </p>

      {/*buttons/links */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-4"
      >
        {/* Contact Me button */}
        <Link
          href="#contact"
          role="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 transition duration-200 w-full sm:w-auto text-sm sm:text-base font-medium shadow"
          title="Contact Me"
        >
          Contact Me{" "}
          <FaArrowRight
            className="w-4 h-4 hidden sm:inline"
            aria-hidden="true"
          />
        </Link>

        {/* Download CV button */}
        <a
          href="/Sukhvir_Resume.pdf"
          download
          role="button"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-400 text-gray-800 hover:bg-gray-100 transition duration-200 w-full sm:w-auto text-sm sm:text-base font-medium shadow-sm"
          title="Download CV"
        >
          Download CV{" "}
          <HiDownload className="w-5 h-5 hidden sm:inline" aria-hidden="true" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sukhvir-singh4898"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Visit Sukhvir's LinkedIn profile"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200 font-medium w-full sm:w-auto text-sm sm:text-base shadow-sm"
          title="LinkedIn Profile"
        >
          <FaLinkedin className="w-5 h-5 hidden sm:inline" aria-hidden="true" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/sukhvir097"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Visit Sukhvir's GitHub profile"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-700 text-gray-800 hover:bg-gray-800 hover:text-white transition duration-200 font-medium w-full sm:w-auto text-sm sm:text-base shadow-sm"
          title="GitHub Profile"
        >
          <FaGithub className="w-5 h-5 hidden sm:inline" aria-hidden="true" />
          GitHub
        </a>
      </motion.div>

      {/* Scroll Down Indicator (unchanged) */}
      <ScrollDownIndicator targetId="about" />
    </motion.section>
  );
}
