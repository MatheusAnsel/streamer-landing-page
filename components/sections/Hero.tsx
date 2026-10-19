import Image from "next/image";
import { siteConfig } from "@/config/site";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="border-b border-line bg-background pt-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-10 px-6 lg:grid-cols-2">
        <div className="pb-16 lg:pb-24">
          <p className="font-body text-sm text-muted">
            {siteConfig.game} · ao vivo todo dia às 12h na Twitch
          </p>

          <h1 className="mt-3 font-display text-6xl uppercase leading-[0.9] text-foreground sm:text-7xl lg:text-8xl">
            {siteConfig.streamerName.replace("DBD", "")}
            <span className="text-primary">DBD</span>
          </h1>

          <p className="mt-5 max-w-md font-body text-lg text-muted">{siteConfig.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={siteConfig.hero.ctaPrimary.href}>{siteConfig.hero.ctaPrimary.label}</Button>
            <Button href={siteConfig.hero.ctaSecondary.href} variant="secondary">
              {siteConfig.hero.ctaSecondary.label}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
          <Image
            src={siteConfig.hero.streamerImage}
            alt={siteConfig.streamerName}
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 1024px) 90vw, 576px"
          />
        </div>
      </div>
    </section>
  );
}
