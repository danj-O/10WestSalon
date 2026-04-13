import type { ReactNode } from "react";

type Align = "center" | "left";

/**
 * Secondary section title — `<h2>` for blocks like “Our Stylists” or Keratin subsections.
 * Set `margin={false}` when spacing is handled by a parent (e.g. home gift strip).
 */
export function SectionHeading({
  children,
  align = "center",
  className = "",
  margin = true,
}: {
  children: ReactNode;
  align?: Align;
  className?: string;
  /** When false, no bottom margin (parent provides padding). */
  margin?: boolean;
}) {
  return (
    <h2
      className={`font-display text-2xl font-bold text-neutral-900 sm:text-3xl ${
        margin ? "mb-5 sm:mb-6" : ""
      } ${align === "center" ? "text-center" : "text-left"} ${className}`.trim()}
    >
      {children}
    </h2>
  );
}
