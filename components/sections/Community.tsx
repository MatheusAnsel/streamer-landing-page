import Link from "next/link";
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
    <section id="comunidade" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Comunidade" />

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <li key={social.key}>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-3 rounded border border-line bg-card px-4 py-4 font-body text-sm text-foreground transition-colors hover:border-muted"
                >
                  <Icon className="h-5 w-5 shrink-0" style={{ color: social.accent }} />
                  {social.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
