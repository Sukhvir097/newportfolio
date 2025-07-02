"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { sendEmail } from "../app/lib/sendEmail";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/motion";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const { error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Email sent successfully!");
      form.reset();
    }

    setLoading(false);
  };

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
        Please contact me at{" "}
        <a
          className="underline text-indigo-600 hover:text-indigo-800"
          href="mailto:sukhvirsingh4898@gmail.com"
        >
          sukhvirsingh4898@gmail.com
        </a>{" "}
        or use this form.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        variants={fadeInUp}
        className="flex flex-col gap-4 text-sm text-left"
      >
        <motion.div variants={fadeInUp}>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
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
            rows={5}
            autoComplete="off"
            className="p-4 w-full rounded-lg bg-white/70 border border-gray-300 resize-none focus:border-indigo-500 focus:ring-indigo-500 outline-none transition"
          />
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-2 text-center">
          <button
            type="submit"
            disabled={loading}
            className={`inline-block rounded bg-slate-600 text-white font-medium text-sm px-6 py-2 transition transform ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-slate-700 hover:scale-105 active:scale-95"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
}
