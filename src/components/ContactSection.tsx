"use client";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

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

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
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
        Contact me
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="text-sm sm:text-base text-gray-700 leading-relaxed"
      >
        Please contact me directly at{" "}
        <a
          className="underline text-indigo-600 hover:text-indigo-800"
          href="mailto:sukhvirsingh4898@gmail.com"
        >
          sukhvirsingh4898@gmail.com
        </a>{" "}
        or through this form.
      </motion.p>

      <motion.form
        aria-label="Contact form"
        variants={fadeInUp}
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          toast.success("Thanks for your message!");
        }}
        className="flex flex-col gap-4 text-sm text-left"
      >
        <motion.div variants={fadeInUp}>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            aria-label="Your name"
            autoComplete="name"
            className="h-12 px-4 w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 outline-none transition"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            aria-label="Your email"
            autoComplete="email"
            className="h-12 px-4 w-full bg-white/70 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 outline-none transition"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message"
            aria-label="Your message"
            rows={5}
            autoComplete="off"
            className="p-4 w-full rounded-lg bg-white/70 border border-gray-300 resize-none focus:border-indigo-500 focus:ring-indigo-500 outline-none transition"
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-2 text-center">
          <button
            type="submit"
            className="inline-block rounded bg-slate-600 hover:bg-slate-700 text-white font-medium text-sm px-6 py-2 transition transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
}
