"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { timeline, siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Quem é" title="Sobre o JotaJogaDBD" />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-3xl bg-radial-glow blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-glow">
              <Image
                src="/photos/about.png"
                alt={`Foto de ${siteConfig.streamerName}`}
                fill
                className="object-contain object-bottom p-4"
                sizes="(max-width: 1024px) 90vw, 400px"
              />
            </div>
          </motion.div>

          <div className="relative border-l border-white/10 pl-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative mb-12 last:mb-0"
              >
                <span className="absolute -left-[calc(2.5rem+5px)] top-1 h-3 w-3 rounded-full bg-primary shadow-glow" />
                <span className="font-display text-2xl text-primary">{item.year}</span>
                <h3 className="mt-1 font-display text-xl uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-lg font-body text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
