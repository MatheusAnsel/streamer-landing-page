import Image from "next/image";
import Link from "next/link";
import { clips } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Clips() {
  return (
    <section id="clipes" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Clipes" />

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip) => (
            <li key={clip.title}>
              <Link
                href={clip.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group block"
              >
                <div className="relative aspect-video overflow-hidden rounded border border-line bg-card">
                  <Image
                    src={clip.thumbnail}
                    alt={clip.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 font-body text-xs text-white">
                    {clip.duration}
                  </span>
                </div>
                <p className="mt-3 font-body text-sm font-medium text-foreground group-hover:text-primary">
                  {clip.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
