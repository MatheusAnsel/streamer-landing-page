import { supportLinks } from "@/config/socials";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const cards = [supportLinks.subs, supportLinks.donation];

export default function Support() {
  return (
    <section id="apoie" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Apoie o Canal" />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-start rounded border border-line bg-card p-6"
            >
              <h3 className="font-display text-2xl uppercase tracking-wide text-foreground">
                {card.label}
              </h3>
              <p className="mt-1 font-body text-sm text-muted">{card.description}</p>
              <Button href={card.url} variant="secondary" className="mt-5">
                Contribuir
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
