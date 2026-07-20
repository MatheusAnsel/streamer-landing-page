"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(align === "center" ? "text-center" : "text-left", className)}
    >
      <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-4xl uppercase tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-[3px] w-16 bg-primary-gradient",
          align === "center" && "mx-auto"
        )}
      />
    </motion.div>
  );
}
