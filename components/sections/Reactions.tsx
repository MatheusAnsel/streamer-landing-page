"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reactions } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Reactions() {
  return (
    <section id="reacoes" className="relative overflow-hidden bg-background py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-radial-glow opacity-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="No personagem" title="Reações do Jota" />

        <div className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {reactions.map((reaction, i) => (
            <motion.div
              key={reaction.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="glass group relative aspect-square overflow-hidden rounded-2xl shadow-deep transition-shadow hover:shadow-glow"
            >
              <Image
                src={reaction.image}
                alt={`Reação: ${reaction.label}`}
                fill
                className="object-contain object-bottom p-2 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, 16vw"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-2 text-center font-body text-xs font-medium text-white">
                {reaction.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
