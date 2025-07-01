import { motion } from "framer-motion";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="pt-10 mb-10 px-4 max-w-4xl mx-auto text-center text-gray-500"
    >
      <small className="mb-2 block text-xs">
        © 2025 Sukhvir Singh. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </motion.footer>
  );
}
