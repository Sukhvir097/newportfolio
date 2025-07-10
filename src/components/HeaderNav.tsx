"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import icons
import {
  FiHome,
  FiUser,
  FiGrid,
  FiCode,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

// ✅ Include icons in the navLinks array
const navLinks = [
  { name: "Home", href: "#home", icon: <FiHome /> },
  { name: "About", href: "#about", icon: <FiUser /> },
  { name: "Projects", href: "#projects", icon: <FiGrid /> },
  { name: "Skills", href: "#skills", icon: <FiCode /> },
  { name: "Experience", href: "#experience", icon: <FiBriefcase /> },
  { name: "Contact", href: "#contact", icon: <FiMail /> },
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

  const [mobileOpen, setMobileOpen] = useState(false);

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

  function handleMobileLinkClick(href: string) {
    setActive(href);
    setMobileOpen(false);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 sm:top-6 left-1/2 z-50 w-full max-w-[40rem] -translate-x-1/2 px-0 sm:px-4"
    >
      {/* Desktop nav */}
      <nav className="hidden sm:block rounded-none sm:rounded-full border border-white/40 bg-white/70 backdrop-blur-xl shadow-lg shadow-indigo-500/20">
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

      {/*  mobile hamburger button  */}
      <div className="sm:hidden flex justify-end pr-4 pt-3">
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 focus:outline-none bg-gray-50 rounded-md"
        >
          {/* Hamburger icon with animation */}
          <span
            className={`block h-[3px] w-6 rounded bg-gray-700 transition-transform duration-300 ${
              mobileOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-6 rounded bg-gray-700 transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[3px] w-6 rounded bg-gray-700 transition-transform duration-300 ${
              mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-2 right-2 w-2/3 bg-white/90 backdrop-blur-lg border-t border-gray-200  rounded-lg shadow-md sm:hidden max-h-[80vh] overflow-y-auto"
          >
            <ul className="flex flex-col gap-3 p-5 mt-5 text-center font-medium text-gray-700">
              {navLinks.map(({ name, href, icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    scroll={true}
                    title={`Navigate to ${name} section`}
                    onClick={() => handleMobileLinkClick(href)}
                    aria-current={active === href ? "page" : undefined}
                    className={`flex items-center justify-center gap-2 py-2 transition-colors duration-200 hover:text-black ${
                      active === href ? "text-black font-semibold" : ""
                    }`}
                  >
                    <span className="text-md">{icon}</span>
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
