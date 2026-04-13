import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[url('/img/papyrus-dark.webp')] bg-black text-white shadow-[0_-1px_4px_rgba(0,0,0,0.4)]">
      {/* Extra bottom padding on small screens so fixed Book Now bar doesn’t cover legal/copyright */}
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 max-[600px]:pb-[calc(50px+2.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="grid gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:max-w-xs">
            <Link href="/" className="inline-block w-44 shrink-0 sm:w-48">
              <Image
                src="/img/10west_logo_white.webp"
                alt="10 West Salon"
                width={640}
                height={346}
                className="h-auto w-full"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            <p className="text-sm text-white/75">Chagrin Falls, Ohio</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/55">Contact</h2>
            <address className="not-italic text-sm leading-relaxed text-white/90">
              {site.address.street}
              <br />
              {site.address.city} {site.address.zip}
              <br />
              <a href={`tel:${site.phoneTel}`} className="mt-1 inline-block text-white hover:text-brand">
                {site.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${site.email}`} className="mt-1 inline-block break-all hover:text-brand">
                {site.email}
              </a>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/55">Hours</h2>
            <ul className="space-y-1 text-sm leading-relaxed text-white/90">
              {site.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/55">Follow</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image src="/img/facebook.webp" alt="10 West Salon on Facebook" width={44} height={44} />
              </a>
              <a
                href={site.social.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-1 transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image src="/img/yelp.webp" alt="10 West Salon on Yelp" width={44} height={44} />
              </a>
            </div>
          </div>
        </div>

        <nav
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-8 text-sm sm:justify-start"
          aria-label="Footer"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/90 transition-colors hover:text-brand"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-white/70 sm:flex-row sm:text-left">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>
            <Link href="/privacy" className="font-medium text-white underline-offset-4 hover:text-brand hover:underline">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
