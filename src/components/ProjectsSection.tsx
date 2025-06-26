"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce web app with user auth, cart, checkout, Stripe payments, and admin dashboard.",
    tech: ["MERN Stack", "Stripe", "Tailwind", "JWT"],
    image: "/portfolio.PNG",
    link: "https://github.com/sukhvir097/mern-ecommerce",
    demo: "https://mern-ecommerce-sukhvir.vercel.app",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js, showcasing projects, resume download, and contact form integration.",
    tech: ["Next.js", "Framer Motion", "TypeScript"],
    image: "/portfolio.PNG",
    link: "https://github.com/sukhvir097/newportfolio",
    demo: "https://sukhvir-portfolio.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="products"
      className="py-10 px-4 max-w-3xl mx-auto text-center space-y-8 sm:py-12 sm:px-6 md:px-10"
    >
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
        Featured Projects
      </h2>
      <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
        Here are a few projects I’ve built recently using modern technologies.
        Each focuses on performance, responsiveness, and great UX.
      </p>

      <div className="space-y-14">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            {...project}
            isEven={idx % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
  demo,
  isEven,
}: {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  demo: string;
  isEven: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className={`mx-auto flex flex-col sm:flex-row items-center ${
        isEven ? "sm:flex-row-reverse" : ""
      } gap-6 bg-white border border-gray-200 rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition`}
    >
      {/* Image */}
      <div className="sm:w-[40%] w-full max-w-[260px] mx-auto">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          width={500}
          height={280}
          className="rounded-md object-cover shadow-md"
        />
      </div>

      {/* Content */}
      <div className="sm:w-[60%] w-full text-left space-y-2 text-sm">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{description}</p>

        <ul className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <li
              key={t}
              className="bg-gray-100 text-[0.65rem] px-2 py-0.5 rounded-full border border-gray-300 text-gray-800"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 mt-5 text-[0.75rem]">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded font-medium transition"
          >
            Live Demo
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded font-medium transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
