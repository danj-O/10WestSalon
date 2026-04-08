"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import { navLinks } from "@/data/site";

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen, closeMenu]);

  const linkClass =
    "block rounded-md px-4 py-3 text-lg text-neutral-100 transition-colors hover:bg-white/10 hover:text-brand";

  return (
    <>
      <header className="fixed top-0 z-[200] flex w-full items-center bg-black shadow-md">
        <Link href="/" className="z-[1] w-[115px] p-2 pl-2">
          {/* SVG: plain <img> avoids next/image dev warnings on responsive SVG sizing; no raster optimization needed */}
          <img
            src="/img/10west_logo.svg"
            alt="10 West Salon"
            width={115}
            height={48}
            className="h-auto w-full"
            fetchPriority="high"
          />
        </Link>

        <nav className="ml-auto hidden items-center md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="px-5 py-5 text-neutral-100 transition-colors hover:text-brand">
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex md:hidden">
          <button
            type="button"
            className="flex h-14 w-14 flex-col items-center justify-center gap-1.5 text-neutral-100 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu: backdrop + panel (below header so bar stays tappable) */}
      <div
        className={`fixed inset-x-0 bottom-0 top-14 z-[190] md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Close menu"
        />
        <nav
          id={menuId}
          className={`absolute bottom-0 right-0 top-0 flex w-[min(88vw,17.5rem)] flex-col border-l border-neutral-800 bg-neutral-950 shadow-2xl transition-transform duration-200 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Main mobile"
          aria-hidden={!menuOpen}
        >
          <ul className="flex flex-1 flex-col gap-1 p-4 pt-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={linkClass}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
