"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Throttle function generic over argument tuple types
function throttle<Args extends unknown[]>(func: (...args: Args) => void, limit: number) {
  let inThrottle = false;

  return function (this: unknown, ...args: Args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

export default function HeaderNav() {
  const [activeSection, setActiveSection] = useState("#home");
  const activeSectionRef = useRef(activeSection);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const throttledSetActiveSection = useRef(
    throttle((current: string) => {
      if (current !== activeSectionRef.current) {
        setActiveSection(current);
      }
    }, 100)
  ).current;

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((entry) => entry.isIntersecting);
        if (visibleSections.length === 0) return;
        visibleSections.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        const current = `#${visibleSections[0].target.id}`;

        throttledSetActiveSection(current);
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [throttledSetActiveSection]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 sm:top-6 left-1/2 z-50 w-full max-w-[40rem] -translate-x-1/2 px-0 sm:px-4"
    >
      <nav className="rounded-none sm:rounded-full border border-white/40 bg-white/70 sm:bg-white/70 backdrop-blur-xl shadow-lg shadow-indigo-500/20">
        <ul className="flex items-center justify-center h-16 sm:h-14 px-4 sm:px-12 gap-4 sm:gap-8 text-base font-medium text-gray-700">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={activeSection === href ? "page" : undefined}
                className={`relative transition duration-200 hover:text-black ${
                  activeSection === href ? "text-black font-semibold" : ""
                } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  activeSection === href ? "after:scale-x-100" : ""
                }`}
                title={`Navigate to ${name} section`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
