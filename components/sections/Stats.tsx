import { stats } from "@/config/site";
import { formatNumber } from "@/lib/utils";

export default function Stats() {
  return (
    <section className="border-b border-line bg-background">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="py-10 pr-6">
            <dt className="font-body text-sm text-muted">{stat.label}</dt>
            <dd className="mt-1 font-display text-5xl text-foreground">
              {formatNumber(stat.value)}
              {stat.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
