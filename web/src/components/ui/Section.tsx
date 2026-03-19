"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "./Button";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  containerClass?: string;
}

export const Section = ({ id, className, children, delay = 0, containerClass }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32 w-full overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        className={cn("max-w-7xl mx-auto px-6 md:px-12 w-full", containerClass)}
      >
        {children}
      </motion.div>
    </section>
  );
};
