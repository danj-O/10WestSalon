import type { ReactNode } from "react";

type Align = "center" | "left";

/**
 * Primary page title — use once per page for the main `<h1>`.
 * Space below the rule is fixed (`mb-5 sm:mb-6`) so every route matches; don’t add
 * extra `mt-*` on the first block unless you need an exception.
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
      } mb-5 sm:mb-6 ${className}`.trim()}
    >
      {children}
    </h1>
  );
}
