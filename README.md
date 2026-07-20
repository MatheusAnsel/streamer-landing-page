# JotaJogaDBD — Site Oficial

Site institucional/gamer para o streamer de Dead by Daylight **JotaJogaDBD**,
construído com Next.js 15 (App Router), TailwindCSS e Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## ⚙️ Onde editar as coisas (a parte mais importante)

**Toda edição do dia a dia acontece na pasta `/config`.** Nada de link ou texto
está "hardcoded" dentro dos componentes — veja `config/README.md` para o guia
completo, mas em resumo:

| Quero mudar... | Arquivo |
|---|---|
| Link da Twitch, YouTube, Discord, Instagram, TikTok, X | `config/socials.ts` |
| Chave PIX, link de doação, link da wishlist | `config/socials.ts` |
| Nome, tagline, textos de SEO | `config/site.ts` |
| Números de seguidores/horas de live/partidas | `config/site.ts` → `stats` |
| Timeline da seção Sobre | `config/site.ts` → `timeline` |
| Cards da seção Conteúdos | `config/site.ts` → `contentCategories` |
| Clipes do carrossel | `config/site.ts` → `clips` |
| Próximas lives (Agenda) | `config/site.ts` → `schedule` |
| Imagens (hero, foto, thumbnails) | arquivos em `/public` |

## Estrutura de pastas

```
/app                  Rotas do Next.js (App Router), layout, SEO (sitemap/robots)
/components
  /ui                 Componentes reutilizáveis (Button, SectionHeading, Cursor...)
  /sections           Uma seção do site por arquivo (Hero, Stats, About...)
/config               ⭐ TODOS os links e conteúdos editáveis do site
/hooks                Hooks customizados (ex.: contador animado das estatísticas)
/lib                  Funções utilitárias
/public               Imagens e assets estáticos
```

## Seções implementadas

Navbar · Hero · Estatísticas · Sobre (timeline) · Conteúdos · Clipes (carrossel)
· Agenda · Comunidade · Apoie · Footer — nessa ordem, seguindo o briefing.

## Stack

- Next.js 15 (App Router, Server Components)
- React 18 + TypeScript
- TailwindCSS (paleta e tipografia customizadas em `tailwind.config.ts`)
- Framer Motion (scroll reveals, hover 3D, loading screen)
- lucide-react (ícones)

## Imagens placeholder

As imagens em `/public` (hero, foto "sobre", capas de conteúdo e thumbnails de
clipes) são placeholders gerados automaticamente. Basta substituir os arquivos
pelos originais mantendo os mesmos nomes — os componentes não precisam de
nenhuma alteração.
