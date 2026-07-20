import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = href.startsWith("http");

  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-body font-semibold text-sm tracking-wide transition-all duration-300 will-change-transform hover:-translate-y-0.5";

  const styles =
    variant === "primary"
      ? "bg-primary-gradient text-white shadow-glow hover:shadow-glow-lg"
      : "border border-white/20 bg-white/5 text-white backdrop-blur hover:border-primary/60 hover:bg-primary/10";

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, styles, className)}
    >
      {children}
    </Link>
  );
}
