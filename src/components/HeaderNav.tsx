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

function throttle<FuncArgs extends unknown[]>(
  fn: (...args: FuncArgs) => void,
  limit: number
) {
  let inThrottle = false;
  return function (this: unknown, ...args: FuncArgs) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export default function HeaderNav() {
  const [active, setActive] = useState("#home");
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const throttledSetActive = useRef(
    throttle((current: string) => {
      if (current !== activeRef.current) {
        setActive(current);
      }
    }, 100)
  ).current;

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (!visible.length) return;

        visible.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
        );
        throttledSetActive(`#${visible[0].target.id}`);
      },
      {
        rootMargin: "-50% 0px -50% 0px", 
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [throttledSetActive]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 sm:top-6 left-1/2 z-50 w-full max-w-[40rem] -translate-x-1/2 px-0 sm:px-4"
    >
      <nav className="rounded-none sm:rounded-full border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-indigo-500/20">
        <ul className="flex items-center justify-center h-16 sm:h-14 px-4 sm:px-12 gap-4 sm:gap-8 text-base font-medium text-gray-700">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                scroll={true}
                title={`Navigate to ${name} section`}
                onClick={() => setActive(href)} 
                aria-current={active === href ? "page" : undefined}
                className={`relative transition duration-200 hover:text-black ${
                  active === href ? "text-black font-semibold" : ""
                } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  active === href ? "after:scale-x-100" : ""
                }`}
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
