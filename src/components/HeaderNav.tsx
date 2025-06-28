"use client";

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

export default function HeaderNav({activeSection,}: {activeSection: string;}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 sm:top-6 left-1/2 z-50 w-full max-w-[40rem] -translate-x-1/2 px-0 sm:px-4"
    >
      <div className="rounded-none sm:rounded-full border border-white/40 bg-white/70 sm:bg-white/30 backdrop-blur-xl shadow-lg shadow-indigo-500/20">
        <nav className="flex items-center justify-center h-20 sm:h-16 px-4 sm:px-12">
          <ul className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-8 text-base font-medium text-gray-700">
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
      </div>
    </motion.header>
  );
}
