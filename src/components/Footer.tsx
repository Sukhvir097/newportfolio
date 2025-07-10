"use client";
import { fadeInUp } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Footer() {
  return (
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        aria-label="Site Footer"
        className="py-6 px-6 max-w-4xl mx-auto text-center text-gray-500 mt-16"
      >
        <small className="mb-2 block text-[11px] sm:text-xs">
          © {new Date().getFullYear()} Sukhvir Singh. All rights reserved.
        </small>

        <p className="text-[11px] sm:text-xs leading-relaxed">
          <span className="font-semibold">About this website:</span> built with{" "}
          <span className="underline">React</span> &{" "}
          <span className="underline">Next.js</span> (App Router & Server Actions),{" "}
          <span className="underline">TypeScript</span>,{" "}
          <span className="underline">Tailwind CSS</span>, Framer Motion, React Email,
          Resend, deployed on <span className="underline">Vercel</span>.
        </p>
      </motion.footer>
  );
}

