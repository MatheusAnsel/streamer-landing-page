# Pasta `/config`

Esta é a **única pasta que você precisa editar** para atualizar o site no dia a dia.
Nenhum componente tem links ou textos fixos — tudo vem daqui.

| Arquivo | O que mudar aqui |
|---|---|
| `socials.ts` | Links de Twitch, YouTube, Discord, Instagram, TikTok, X e os botões da seção Apoie (PIX, subs, doação, wishlist) |
| `site.ts` | Nome, tagline, SEO, textos do Hero, números da seção Estatísticas, destaques da seção Sobre, cards da seção Conteúdos, itens do carrossel de Clipes, a Agenda de lives e a galeria de fotos da seção Reações |

## Como trocar um link social
Abra `socials.ts` e edite o campo `url` do item correspondente:

```ts
{
  key: "twitch",
  label: "Twitch",
  url: "https://twitch.tv/SEU_NOVO_LINK", // <- troque aqui
  ...
}
```

## Como atualizar os números de seguidores/horas de live
Abra `site.ts` e edite o array `stats`:

```ts
export const stats = [
  { label: "Seguidores", value: 128_400, suffix: "+" }, // <- troque o value
  ...
];
```

## Como adicionar uma nova live na Agenda
Edite o array `schedule` em `site.ts` — cada objeto é um card na seção Agenda.

## Como trocar um clipe do carrossel
Edite o array `clips` em `site.ts`. Coloque a thumbnail em `/public/clips/` e
aponte o campo `thumbnail` para o caminho do arquivo.

## Como adicionar/trocar uma foto na galeria de Reações
Edite o array `reactions` em `site.ts`. Coloque a foto (de preferência já
recortada, sem fundo) em `/public/photos/reacoes/` e aponte o campo `image`
para o caminho do arquivo.

Depois de editar qualquer arquivo aqui, salve e o site atualiza automaticamente
em desenvolvimento (`npm run dev`).
