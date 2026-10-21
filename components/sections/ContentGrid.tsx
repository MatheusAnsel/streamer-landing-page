import Image from "next/image";
import Link from "next/link";
import { contentCategories } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContentGrid() {
  return (
    <section id="conteudos" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Conteúdos" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contentCategories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group block overflow-hidden rounded border border-line bg-card transition-colors hover:border-muted"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl uppercase tracking-wide text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm text-muted">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
