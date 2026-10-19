import Image from "next/image";
import { timeline, siteConfig } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Sobre o JotaJogaDBD" />

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded border border-line bg-card">
            <Image
              src="/photos/about.png"
              alt={`Foto de ${siteConfig.streamerName}`}
              fill
              className="object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 320px"
            />
          </div>

          <dl className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.year} className="border-t border-line py-6">
                <dt>
                  <span className="font-display text-3xl text-primary">{item.year}</span>
                  <span className="mt-1 block font-body font-semibold text-foreground">
                    {item.title}
                  </span>
                </dt>
                <dd className="mt-2 font-body text-muted">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
