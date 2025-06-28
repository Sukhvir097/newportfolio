"use client";

import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type Props = {
  targetId: string;
};

export default function ScrollDownIndicator({ targetId }: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      className="pt-10 flex justify-center"
    >
      <a
        href={`#${targetId}`}
        aria-label={`Scroll down to ${targetId} section`}
        className="text-gray-500 hover:text-gray-600 transition-colors duration-300"
      >
        <BsChevronDown className="animate-bounce w-6 h-6" aria-hidden="true" />
      </a>
    </motion.div>
  );
}
