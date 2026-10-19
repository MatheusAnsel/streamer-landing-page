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
    "focus-ring inline-flex items-center justify-center gap-2 rounded px-6 py-3 font-body text-sm font-semibold transition-colors";

  const styles =
    variant === "primary"
      ? "bg-primary text-black hover:bg-primary-hover"
      : "border border-line text-foreground hover:border-muted";

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
