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

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce web app with user auth, cart, checkout, Stripe payments, and admin dashboard.",
    tech: ["MERN Stack", "Stripe", "Tailwind", "JWT"],
    link: "https://github.com/sukhvirsingh4898/mern-ecommerce",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, showcasing projects, resume download, and contact form integration.",
    tech: ["Next.js", "Framer Motion", "TypeScript"],
    link: "https://github.com/sukhvirsingh4898/portfolio",
  },
  {
    title: "Blog CMS",
    description:
      "Content management system with markdown support, admin post editor, and dynamic routing.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/sukhvirsingh4898/blog-cms",
  },
];

export default function ProductsSection() {
  return (
    <motion.section
      id="products"
      className="py-16 px-4 max-w-6xl mx-auto text-center space-y-10 sm:px-6 md:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeInUp}
        className="text-xl sm:text-2xl font-semibold text-gray-800"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        variants={fadeInUp}
        className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600"
      >
        Here are a few projects I’ve built recently using modern technologies.
        Each focuses on performance, responsiveness, and great UX.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, description, tech, link }) => (
          <motion.div
            key={title}
            variants={fadeInUp}
            className="rounded-2xl border border-gray-200 bg-white/60 backdrop-blur p-6 shadow-md hover:shadow-xl transition-all text-left flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 mb-2">{title}</h3>
              <p className="text-sm text-gray-700 mb-4">{description}</p>
              <ul className="flex flex-wrap gap-2 text-xs text-gray-600 mb-4">
                {tech.map((t) => (
                  <li
                    key={t}
                    className="bg-gray-100 px-2 py-1 rounded-md border border-gray-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition"
              title={`View ${title} on GitHub`}
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
