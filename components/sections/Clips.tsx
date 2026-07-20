"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { clips } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Clips() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(amount: number) {
    trackRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  }

  return (
    <section id="clipes" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Melhores cortes" title="Clipes" align="left" />
          <div className="hidden gap-3 sm:flex">
            <button
              aria-label="Anterior"
              onClick={() => scrollBy(-360)}
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Próximo"
              onClick={() => scrollBy(360)}
              className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {clips.map((clip, i) => (
            <motion.div
              key={clip.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="w-[280px] shrink-0"
            >
              <Link href={clip.href} className="focus-ring group block">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={clip.thumbnail}
                    alt={clip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-black shadow-glow">
                      <Play className="h-6 w-6 fill-current" />
                    </span>
                  </div>
                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 font-body text-xs text-white">
                    {clip.duration}
                  </span>
                </div>
                <p className="mt-3 font-body text-sm font-medium text-white group-hover:text-primary">
                  {clip.title}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
