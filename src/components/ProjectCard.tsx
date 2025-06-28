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

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const cardClass = `relative mx-auto flex flex-col sm:flex-row items-center gap-6
    ${isEven ? "sm:flex-row-reverse pl-0 sm:pl-5" : ""}
    bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition`;

  return (
    <motion.section
      ref={ref}
      style={{ scale, opacity }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={cardClass}
    >
      {/* Image */}
      <motion.div className="sm:w-[45%] w-full max-w-[450px] mx-auto">
        <Image
          src={image}
          alt={`Screenshot of ${title}`}
          width={500}
          height={280}
          className="rounded-md object-cover shadow-md"
          loading="lazy"
        />
      </motion.div>

      {/* Content */}
      <motion.div className="sm:w-[55%] w-full text-left space-y-2 text-sm px-6 py-0 sm:py-4 sm:px-2 mb-6">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
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
      </motion.div>
    </motion.section>
  );
}
