import { schedule } from "@/config/site";
import { getSocial } from "@/config/socials";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Schedule() {
  return (
    <section id="agenda" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Agenda de Lives" />

        <div className="mt-10 flex flex-col gap-6 rounded border border-line bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-5xl text-primary">Todo dia, {schedule.time}</p>
            <p className="mt-1 font-body text-foreground">{schedule.title}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {schedule.days.map((day) => (
                <li
                  key={day}
                  className="rounded border border-line px-2.5 py-1 font-body text-xs text-muted"
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>
          <Button href={getSocial("twitch").url}>Seguir na Twitch</Button>
        </div>
      </div>
    </section>
  );
}
