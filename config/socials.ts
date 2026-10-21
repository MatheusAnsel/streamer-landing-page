/**
 * config/socials.ts
 * -----------------------------------------------------------------------
 * TODOS os links de perfil do JotaJogaDBD ficam SOMENTE aqui.
 * Para trocar um link (Twitch, YouTube, Discord, etc.), edite só este arquivo.
 * Nenhum componente deve ter uma URL "hardcoded" — todos importam daqui.
 * -----------------------------------------------------------------------
 */

export type SocialKey =
  | "twitch"
  | "youtube"
  | "discord"
  | "instagram"
  | "tiktok"
  | "whatsapp";

export interface SocialLink {
  key: SocialKey;
  label: string;
  url: string;
  /** Nome do ícone lucide-react usado nos cards de comunidade */
  icon: "Twitch" | "Youtube" | "MessageCircle" | "Instagram" | "Music2" | "MessageSquare";
  /** Cor de destaque usada no hover do card (hex) */
  accent: string;
}

export const socialLinks: SocialLink[] = [
  {
    key: "twitch",
    label: "Twitch",
    url: "https://www.twitch.tv/jotajogadbd",
    icon: "Twitch",
    accent: "#9146FF",
  },
  {
    key: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@livesdojotajogadbd",
    icon: "Youtube",
    accent: "#FF0000",
  },
  {
    key: "discord",
    label: "Discord",
    url: "https://discord.gg/v8reXhC",
    icon: "MessageCircle",
    accent: "#5865F2",
  },
  {
    key: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/jotajogadbd_/",
    icon: "Instagram",
    accent: "#E1306C",
  },
  {
    key: "tiktok",
    label: "TikTok",
    url: "https://www.tiktok.com/@jotajogadbd_",
    icon: "Music2",
    accent: "#25F4EE",
  },
  {
    key: "whatsapp",
    label: "Grupo do Zap",
    url: "https://chat.whatsapp.com/CDxZSUVzpx02tNkzpBJYAi",
    icon: "MessageSquare",
    accent: "#25D366",
  },
];

/** Links de apoio — troque as URLs reais aqui */
export const supportLinks = {
  subs: {
    label: "Assinatura Twitch",
    description: "Vira sub e ganha emotes exclusivos",
    url: "https://www.twitch.tv/subs/jotajogadbd",
  },
  donation: {
    label: "PIX / Doação",
    description: "Qualquer valor, via LivePix.",
    url: "https://livepix.gg/jotajogadbd",
  },
};

/** Utilitário para buscar um link social pela chave */
export function getSocial(key: SocialKey): SocialLink {
  const found = socialLinks.find((s) => s.key === key);
  if (!found) throw new Error(`Social link "${key}" não encontrado em config/socials.ts`);
  return found;
}
