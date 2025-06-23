"use client";

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

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-16 px-4 max-w-3xl mx-auto text-center space-y-10 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        variants={fadeInUp}
        className="max-w-xl mx-auto text-sm sm:text-base text-gray-600"
      >
        I’m currently open to new opportunities and collaborations. Feel free to send me a message!
      </motion.p>

      <motion.form
        variants={fadeInUp}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submission not yet implemented.");
        }}
        className="flex flex-col gap-4 text-left"
      >
        <label className="block">
          <span className="text-gray-700 font-medium">Name</span>
          <input
            type="text"
            required
            placeholder="Your name"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            title="Enter your full name"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-medium">Email</span>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            title="Enter your email address"
          />
        </label>
        <label className="block">
          <span className="text-gray-700 font-medium">Message</span>
          <textarea
            required
            placeholder="Your message"
            rows={4}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            title="Write your message here"
          />
        </label>
        <button
          type="submit"
          className="inline-block rounded bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-700 transition"
          title="Send message"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
}
