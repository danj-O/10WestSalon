import type { ReactNode } from "react";

/** Shared top padding below fixed nav — matches legacy % breakpoints. */
export function InnerPage({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`min-h-screen bg-[url('/img/papyrus.webp')] pt-[8%] max-[900px]:pt-[12%] max-[600px]:pt-[25%] ${className}`}
    >
      {children}
    </div>
  );
}
