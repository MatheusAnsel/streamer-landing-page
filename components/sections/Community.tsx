"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitch, Youtube, MessageCircle, Instagram, Music2, MessageSquare } from "lucide-react";
import { socialLinks } from "@/config/socials";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap = {
  Twitch,
  Youtube,
  MessageCircle,
  Instagram,
  Music2,
  MessageSquare,
};

export default function Community() {
  return (
    <section id="comunidade" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Junte-se" title="Comunidade" />

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {socialLinks.map((social, i) => {
            const Icon = iconMap[social.icon];
            return (
              <motion.div
                key={social.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8, rotateX: 6 }}
                style={{ perspective: 800 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring glass group flex flex-col items-center gap-3 rounded-2xl py-8 shadow-deep transition-shadow"
                  style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
                >
                  <span
                    className="grid h-14 w-14 place-items-center rounded-full border border-white/10 text-white transition-all group-hover:scale-110"
                    style={{
                      // @ts-expect-error CSS custom property
                      "--accent": social.accent,
                    }}
                  >
                    <Icon
                      className="h-6 w-6 transition-colors group-hover:text-[var(--accent)]"
                    />
                  </span>
                  <span className="font-body text-sm font-medium text-muted group-hover:text-white">
                    {social.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
