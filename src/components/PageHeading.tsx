import type { ReactNode } from "react";

type Align = "center" | "left";

/**
 * Primary page title — use once per page for the main `<h1>`.
 * Keeps typography consistent across About, Contact, Products, Services, etc.
 */
export function PageHeading({
  children,
  align = "center",
  className = "",
  id,
}: {
  children: ReactNode;
  align?: Align;
  className?: string;
  id?: string;
}) {
  return (
    <h1
      id={id}
      className={`border-b border-black/20 pb-3 font-display text-3xl font-bold tracking-tight text-neutral-900 sm:pb-4 sm:text-4xl ${
        align === "center" ? "text-center" : "text-left"
      } mb-8 sm:mb-10 ${className}`.trim()}
    >
      {children}
    </h1>
  );
}
