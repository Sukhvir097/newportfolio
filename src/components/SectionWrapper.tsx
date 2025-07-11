"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/utils/motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import { useIsMobile } from "@/hooks/useIsMobile";

type SectionWrapperProps = { id: string; title?: string; children: React.ReactNode; className?: string; scrollTargetId?: string;};

export default function SectionWrapper({ id, title, children, className = "", scrollTargetId,
}: SectionWrapperProps) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <section id={id} className={`pt-4 px-6 max-w-3xl mx-auto text-center space-y-4 sm:pt-12 sm:px-6 md:px-10 ${className}`}>
      {title && (
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h2>
      )}
      {children}
      {scrollTargetId && <ScrollDownIndicator targetId={scrollTargetId} />}
    </section>
  ) : (
    <motion.section
      id={id}
      className={`pt-4 px-6 max-w-3xl mx-auto text-center space-y-4 sm:pt-12 sm:px-6 md:px-10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {title && (
        <motion.h2 variants={fadeInUp} className="text-xl sm:text-2xl font-semibold text-gray-800">
          {title}
        </motion.h2>
      )}
      {children}
      {scrollTargetId && <ScrollDownIndicator targetId={scrollTargetId} />}
    </motion.section>
  );
}
