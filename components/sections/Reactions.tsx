import Image from "next/image";
import { reactions } from "@/config/site";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Reactions() {
  return (
    <section id="reacoes" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Reações do Jota" />

        <ul className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {reactions.map((reaction) => (
            <li key={reaction.label} className="overflow-hidden rounded border border-line bg-card">
              <div className="relative aspect-square">
                <Image
                  src={reaction.image}
                  alt={`Reação: ${reaction.label}`}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
              </div>
              <p className="border-t border-line px-2 py-1.5 text-center font-body text-xs text-muted">
                {reaction.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
