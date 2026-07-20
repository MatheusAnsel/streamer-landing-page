"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Reações", href: "#reacoes" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Clipes", href: "#clipes" },
  { label: "Agenda", href: "#agenda" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Apoie", href: "#apoie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3 shadow-deep" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link href="#hero" className="focus-ring font-display text-2xl tracking-wide text-white">
          JOTA<span className="text-primary">JOGA</span>DBD
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring font-body text-sm font-medium text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={siteConfig.hero.ctaPrimary.href} className="!px-5 !py-2.5 !text-xs">
            {siteConfig.hero.ctaPrimary.label}
          </Button>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          className="focus-ring flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-7 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass mt-4 flex flex-col gap-1 px-6 py-4 lg:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring block py-2 font-body text-sm text-muted hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
