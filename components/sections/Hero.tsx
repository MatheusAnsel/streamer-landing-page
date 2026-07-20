"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-32"
    >
      {/* Glow ambiente atrás do conteúdo */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[600px] w-[600px] rounded-full bg-radial-glow blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-radial-glow opacity-60 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.4em] text-primary">
            {siteConfig.game}
          </span>

          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.95] text-white text-glow sm:text-7xl lg:text-8xl">
            {siteConfig.streamerName.replace("DBD", "")}
            <span className="text-primary">DBD</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-lg text-muted">{siteConfig.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={siteConfig.hero.ctaPrimary.href}>
              <Play className="h-4 w-4 fill-current" />
              {siteConfig.hero.ctaPrimary.label}
            </Button>
            <Button href={siteConfig.hero.ctaSecondary.href} variant="secondary">
              {siteConfig.hero.ctaSecondary.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-md animate-float"
        >
          <div className="absolute inset-0 rounded-3xl bg-radial-glow blur-2xl" />
          <div className="relative h-full w-full">
            <Image
              src={siteConfig.hero.streamerImage}
              alt={siteConfig.streamerName}
              fill
              priority
              className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              sizes="(max-width: 1024px) 90vw, 480px"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
      >
        <div className="h-9 w-5 rounded-full border border-white/30 p-1">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
