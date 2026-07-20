"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import { schedule } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Schedule() {
  return (
    <section id="agenda" className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Não perca" title="Agenda de Lives" />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {schedule.map((item, i) => (
            <motion.div
              key={item.day + item.date}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass flex items-center gap-5 rounded-2xl p-6 shadow-deep transition-shadow hover:shadow-glow"
            >
              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary-gradient text-black">
                <CalendarDays className="h-5 w-5" />
                <span className="mt-1 font-display text-lg leading-none">{item.date}</span>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-primary">{item.day}</p>
                <h3 className="font-display text-2xl uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 font-body text-sm text-muted">
                  <Clock className="h-3.5 w-3.5" />
                  {item.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
