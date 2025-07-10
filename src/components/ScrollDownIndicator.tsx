"use client";

import { fadeInUp } from "@/utils/motion";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";


type Props = {
  targetId: string;
};

export default function ScrollDownIndicator({ targetId }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="pt-0 flex flex-col items-center justify-center sm:pt-10"
    >
      <a
        href={`#${targetId}`}
        aria-label={`Scroll down to ${targetId} section`}
        className="text-center text-gray-500 hover:text-gray-700 transition duration-300 hover:scale-110"
      >
        <BsChevronDown className="animate-bounce w-6 h-6 hidden sm:block" aria-hidden="true" />
      </a>
      <hr className="my-12 border-t border-gray-300 w-2/3 mx-auto" />
    </motion.div>
  );
}
