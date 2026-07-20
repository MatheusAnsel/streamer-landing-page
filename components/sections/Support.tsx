"use client";

import { motion } from "framer-motion";
import { Gift, Heart, Sparkles, QrCode } from "lucide-react";
import { supportLinks } from "@/config/socials";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const cards = [
  { ...supportLinks.pix, icon: QrCode },
  { ...supportLinks.subs, icon: Sparkles },
  { ...supportLinks.donation, icon: Heart },
  { ...supportLinks.wishlist, icon: Gift },
];

export default function Support() {
  return (
    <section id="apoie" className="relative overflow-hidden bg-background py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-radial-glow blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Faça parte" title="Apoie o Canal" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass flex flex-col items-center rounded-2xl px-6 py-10 text-center shadow-deep transition-shadow hover:shadow-glow"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-gradient text-black">
                <card.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl uppercase tracking-wide text-white">
                {card.label}
              </h3>
              <p className="mt-2 font-body text-sm text-muted">{card.description}</p>

              {"pixKey" in card ? (
                <p className="mt-6 select-all rounded-lg border border-white/10 bg-black/30 px-4 py-2 font-body text-xs text-primary">
                  {card.pixKey}
                </p>
              ) : (
                <Button
                  href={"url" in card ? card.url : "#"}
                  variant="secondary"
                  className="mt-6 !py-2.5 !text-xs"
                >
                  Contribuir
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
