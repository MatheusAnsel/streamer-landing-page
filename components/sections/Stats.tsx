"use client";

import { motion } from "framer-motion";
import { stats } from "@/config/site";
import { formatNumber } from "@/lib/utils";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ label, value, suffix, index }: { label: string; value: number; suffix: string; index: number }) {
  const { ref, value: animated } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass group rounded-2xl px-6 py-10 text-center shadow-deep transition-shadow hover:shadow-glow"
    >
      <p className="font-display text-5xl text-white transition-colors group-hover:text-primary sm:text-6xl">
        {formatNumber(animated)}
        <span className="text-primary">{suffix}</span>
      </p>
      <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-muted">{label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-background py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </section>
  );
}
