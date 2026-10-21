"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Reações", href: "#reacoes" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Clipes", href: "#clipes" },
  { label: "Agenda", href: "#agenda" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Apoie", href: "#apoie" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="focus-ring font-display text-2xl tracking-wide text-foreground">
          JOTA<span className="text-primary">JOGA</span>DBD
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-ring font-body text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={siteConfig.hero.ctaPrimary.href} className="!px-4 !py-2">
            {siteConfig.hero.ctaPrimary.label}
          </Button>
        </div>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="focus-ring rounded border border-line px-3 py-1.5 font-body text-sm text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-line px-6 py-3 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring block py-2 font-body text-sm text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button href={siteConfig.hero.ctaPrimary.href} className="w-full">
              {siteConfig.hero.ctaPrimary.label}
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
}
