"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

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
      className="py-10 px-4 max-w-3xl mx-auto text-center space-y-6 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div variants={fadeInUp} className="flex justify-center mt-18 sm:mt-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
          alt="Sukhvir Singh"
          width={100}
          height={100}
          priority
          className="rounded-full object-cover border-[0.35rem] border-white shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.h1
        variants={fadeInUp}
        className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed px-2"
      >
        <span className="font-bold">Hello, {"I'm"} Sukhvir Singh.</span>{" "}
        {"I'm"} a <span className="font-bold">Full-Stack Developer</span> with{" "}
        <span className="font-bold">3+ years</span> of experience. I love
        building <span className="italic">scalable and user-friendly web apps</span>. My
        focus is{" "}
        <span className="underline decoration-indigo-500">
          React, Next.js & TypeScript
        </span>
        .
      </motion.h1>

      <motion.div
        variants={fadeInUp}
        className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-3 sm:gap-6"
      >
        <Link
          href="#contact"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-gray-900 text-white hover:bg-black transition w-full sm:w-auto text-sm sm:text-base shadow-md"
          title="Contact Me"
        >
          Contact Me <FaArrowRight className="w-4 h-4 hidden sm:inline" />
        </Link>
        <a
          href="/Sukhvir_Resume.pdf"
          download
          className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-gray-700 text-gray-700 hover:bg-white/100 transition w-full sm:w-auto text-sm sm:text-base"
          title="Download CV"
        >
          Download CV <HiDownload className="w-5 h-5 hidden sm:inline" />
        </a>
        <a
          href="https://www.linkedin.com/in/sukhvir-singh4898"
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
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 rounded border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition font-medium w-full sm:w-auto text-sm sm:text-base"
          title="GitHub Profile"
        >
          <FaGithub className="w-5 h-5 hidden sm:inline" />
          GitHub
        </a>
      </motion.div>
    </motion.section>
  );
}
