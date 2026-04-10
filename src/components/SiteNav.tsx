"use client";

import Image from "next/image";
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
      <header className="fixed top-0 z-[200] flex min-h-[4.5rem] w-full items-center border-b border-neutral-800/70 bg-black px-4 shadow-md sm:px-6 md:px-8">
        <Link
          href="/"
          className="z-[1] flex shrink-0 items-center rounded-md px-2 py-2 sm:px-3 sm:py-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src="/img/10west_logo_white.webp"
            alt="10 West Salon"
            width={640}
            height={346}
            className="h-10 w-auto max-w-[120px] sm:h-11"
            priority
          />
        </Link>

        <nav className="ml-auto hidden items-center md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-4 text-neutral-100 transition-colors hover:text-brand lg:px-5"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 md:hidden">
          <button
            type="button"
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md text-neutral-100 hover:bg-white/5 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:h-14 sm:w-14"
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
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-[190] md:hidden ${
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
