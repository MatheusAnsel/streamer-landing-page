import Link from "next/link";
import { Twitch, Youtube, MessageCircle, Instagram, Music2, MessageSquare } from "lucide-react";
import { socialLinks } from "@/config/socials";
import { siteConfig } from "@/config/site";

const iconMap = { Twitch, Youtube, MessageCircle, Instagram, Music2, MessageSquare };

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "Agenda", href: "#agenda" },
  { label: "Apoie", href: "#apoie" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:items-start">
          <div>
            <Link href="#hero" className="focus-ring font-display text-2xl tracking-wide text-foreground">
              JOTA<span className="text-primary">JOGA</span>DBD
            </Link>
            <p className="mt-3 max-w-xs font-body text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          <div className="text-center sm:text-left">
            <p className="font-body text-sm font-semibold text-foreground">Links rápidos</p>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="focus-ring font-body text-sm text-muted hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="focus-ring grid h-10 w-10 place-items-center rounded border border-line text-muted transition-colors hover:border-muted hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center font-body text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.streamerName}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
