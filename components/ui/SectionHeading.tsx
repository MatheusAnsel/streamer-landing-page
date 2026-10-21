import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export default function SectionHeading({ title, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-display text-4xl uppercase tracking-wide text-foreground sm:text-5xl",
        className
      )}
    >
      {title}
    </h2>
  );
}
