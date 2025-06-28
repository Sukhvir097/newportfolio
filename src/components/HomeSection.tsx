"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";

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

export default function HomeSection() {
  return (
    <motion.section
      id="home"
      className="pt-10 px-4 max-w-3xl mx-auto text-center space-y-4 sm:pt-10 sm:px-6 md:px-10"
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
          src="/2N1A4997.JPG"
          alt="Portrait of Sukhvir Singh"
          width={100}
          height={100}
          priority
          className="rounded-full object-cover border-[0.25rem] border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-base sm:text-lg md:text-xl font-bold text-gray-800"
      >
        Hi, I’m Sukhvir Singh
      </motion.h1>

      <motion.p
        variants={fadeInUp}
        className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2"
      >
        A Full-Stack Developer with <strong>3+ years</strong> experience in
        building scalable and user-friendly apps using{" "}
        <span className="underline decoration-gray-500 font-semibold">
          React, Next.js & TypeScript
        </span>
        .
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-6"
      >
        <Link
          href="#contact"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-gray-800 text-white hover:bg-gray-950 transition w-full sm:w-auto text-sm sm:text-base shadow-md"
          title="Contact Me"
        >
          Contact Me <FaArrowRight className="w-4 h-4 hidden sm:inline" />
        </Link>
        <a
          href="/Sukhvir_Resume.pdf"
          aria-label="Download resume PDF"
          download
          className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-gray-700 text-gray-700 hover:bg-white/100 transition w-full sm:w-auto text-sm sm:text-base"
          title="Download CV"
        >
          Download CV <HiDownload className="w-5 h-5 hidden sm:inline" />
        </a>
        <a
          href="https://www.linkedin.com/in/sukhvir-singh4898"
          aria-label="Visit Sukhvir's LinkDin profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition font-medium w-full sm:w-auto text-sm sm:text-base"
          title="LinkedIn Profile"
        >
          <FaLinkedin className="w-5 h-5 hidden sm:inline" />
          LinkedIn
        </a>
        <a
          href="https://github.com/sukhvir097"
          aria-label="Visit Sukhvir's GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition font-medium w-full sm:w-auto text-sm sm:text-base"
          title="GitHub Profile"
        >
          <FaGithub className="w-5 h-5 hidden sm:inline" />
          GitHub
        </a>
      </motion.div>
      <ScrollDownIndicator targetId="about" />
    </motion.section>
  );
}
