/**
 * config/site.ts
 * -----------------------------------------------------------------------
 * Conteúdo editável do site. Quem for atualizar textos, números, agenda
 * ou cards de conteúdo NÃO precisa mexer em nenhum componente — só aqui.
 * -----------------------------------------------------------------------
 */

export const siteConfig = {
  streamerName: "JotaJogaDBD",
  game: "Dead by Daylight",
  tagline: "Sobreviver nunca foi tão divertido.",
  seo: {
    title: "JotaJogaDBD — Streamer de Dead by Daylight",
    description:
      "Acompanhe jotajogadbd_ ao vivo jogando Dead by Daylight, todos os dias às 18h. Mais de 5 mil horas de jogo, SWF e parte da squad Beasts of Tomorrow.",
    url: "https://jotajogadbd.com",
    ogImage: "/og-image.jpg",
  },
  hero: {
    ctaPrimary: { label: "Assistir Agora", href: "https://www.twitch.tv/jotajogadbd_" },
    ctaSecondary: { label: "Entrar no Discord", href: "https://discord.gg/v8reXhC" },
    streamerImage: "/photos/hero.png",
  },
};

/** Seção de Estatísticas — dados reais do canal na Twitch, troque conforme forem crescendo */
export const stats = [
  { label: "Seguidores", value: 3_100, suffix: "+" },
  { label: "Horas de Jogo em DBD", value: 5_000, suffix: "+" },
  { label: "Pico de Espectadores", value: 98, suffix: "" },
  { label: "Lives por Semana", value: 7, suffix: "" },
];

/** Seção Sobre — destaques reais do canal (em vez de uma linha do tempo fictícia) */
export const timeline = [
  {
    year: "18H",
    title: "Ao vivo todos os dias",
    description: "Live diária às 18h, direto da Entity com o chat.",
  },
  {
    year: "6K+",
    title: "Horas de jogo em DBD",
    description: "Mais de 6 mil horas dedicadas a Dead by Daylight.",
  },
  {
    year: "SWF",
    title: "Joga em squad",
    description: "Streams constantes jogando WIN Streak.",
  },
  {
    year: "BoT",
    title: "Beasts of Tomorrow",
    description: "Dono do Beasts of Tomorrow.",
  },
];

/** Seção Conteúdos — os 4 grandes cards de categoria */
export const contentCategories = [
  {
    title: "Lives",
    description: "Transmissões completas, direto da Entity.",
    href: "https://www.twitch.tv/jotajogadbd_",
    image: "/content/lives.jpg",
  },
  {
    title: "Clipes",
    description: "Os melhores momentos, cortados na hora.",
    href: "https://www.twitch.tv/jotajogadbd_/videos?filter=highlights&sort=time",
    image: "/content/clipes.jpg",
  },
  {
    title: "Vídeos",
    description: "Guias, rankings e conteúdo editado.",
    href: "https://www.youtube.com/@livesdojotajogadbd",
    image: "/content/videos.jpg",
  },
  {
    title: "Melhores Momentos",
    description: "Jump scares, outplays e rage quits.",
    href: "https://www.twitch.tv/jotajogadbd_/videos?filter=highlights&sort=time",
    image: "/content/melhores-momentos.jpg",
  },
];

/** Seção Clipes — carrossel estilo Netflix, com destaques reais do canal */
export const clips = [
  {
    title: "Segunda live do canal, apoiem!",
    duration: "2:18",
    thumbnail: "/photos/reacoes/comemorando.png",
    href: "https://www.twitch.tv/videos/2787114236",
  },
  {
    title: "Outlast: Whistleblower até zerar",
    duration: "48:18",
    thumbnail: "/photos/reacoes/assustado.png",
    href: "https://www.twitch.tv/videos/2734172870",
  },
  {
    title: "Win streak insana em DBD",
    duration: "6:55",
    thumbnail: "/photos/reacoes/gargalhando.png",
    href: "https://www.twitch.tv/videos/2656012026",
  },
];

/** Seção Agenda — live diária real, todos os dias às 18h (categoria Dead by Daylight) */
export const schedule = [
  { day: "Segunda-feira", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
  { day: "Terça-feira", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
  { day: "Quarta-feira", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
  { day: "Quinta-feira", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
  { day: "Sexta-feira", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
  { day: "Sábado", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
  { day: "Domingo", date: "18H", time: "Todos os dias", title: "Dead by Daylight ao vivo" },
];

/** Seção Reações — fotos reais do streamer usadas como galeria de reações/emotes */
export const reactions = [
  { label: "Legal", image: "/photos/about.png" },
  { label: "Dando Joinha", image: "/photos/hero.png" },
  { label: "Triste", image: "/photos/reacoes/triste.png" },
  { label: "Assustado", image: "/photos/reacoes/assustado.png" },
  { label: "Bravo", image: "/photos/reacoes/bravo.png" },
  { label: "Chorando", image: "/photos/reacoes/chorando.png" },
  { label: "Comemorando", image: "/photos/reacoes/comemorando.png" },
  { label: "Gargalhada", image: "/photos/reacoes/gargalhando.png" },
  { label: "Cético", image: "/photos/reacoes/descrente.png" },
  { label: "Pensando", image: "/photos/reacoes/pensando.png" },
  { label: "Genial", image: "/photos/reacoes/genio.png" },
];
