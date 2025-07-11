"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  demo: string;
  isEven: boolean;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
  demo,
  isEven,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const cardClass = `
    relative mx-4 sm:mx-auto flex flex-col sm:flex-row items-center gap-6
    ${isEven ? "sm:flex-row-reverse" : ""}
    bg-white border border-gray-200 rounded-lg
    shadow-sm hover:shadow-lg transition-all`;

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={cardClass}
    >
      {/* Image */}
      <div className="sm:w-[45%] w-full max-w-[550px] mx-auto">
        <Image
          src={image}
          alt={title ? `Screenshot of ${title}` : "Project screenshot"}
          width={500}
          height={280}
          className="rounded-md object-cover shadow-md w-full h-auto"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div
        className={`
          sm:w-[55%] w-full text-left space-y-3 px-5 py-5
          ${isEven ? "sm:pl-6" : "sm:pr-6"}
        `}
      >
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-800 leading-relaxed">{description}</p>

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

        {/* Button */}
        <div className="flex gap-3 pt-4 text-xs">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo of ${title}`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1 rounded font-medium transition"
          >
            Live Demo
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${title}`}
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded font-medium transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}