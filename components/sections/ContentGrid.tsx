"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { contentCategories } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContentGrid() {
  return (
    <section id="conteudos" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Explore" title="Conteúdos" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {contentCategories.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={item.href}
                target="_blank"
                className="focus-ring group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 shadow-deep"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity group-hover:from-black/95" />

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-3xl uppercase tracking-wide text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 max-w-xs font-body text-sm text-muted">
                        {item.description}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-white transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
