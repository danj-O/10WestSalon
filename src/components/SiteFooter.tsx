import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="w-full bg-[url('/img/papyrus-dark.webp')] bg-black py-8 text-white shadow-[0_-1px_4px_rgba(0,0,0,0.5)]">
      <div className="mx-5 flex flex-wrap justify-between gap-8 max-[450px]:mx-10 max-[450px]:flex-col max-[450px]:text-lg">
        <div className="flex flex-col gap-2">
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="footicon flex w-[50px] justify-center"
          >
            <Image src="/img/facebook.webp" alt="10 West Salon on Facebook" width={50} height={50} />
          </a>
          <a
            href={site.social.yelp}
            target="_blank"
            rel="noopener noreferrer"
            className="footicon flex w-[50px] justify-center"
          >
            <Image src="/img/yelp.webp" alt="10 West Salon on Yelp" width={50} height={50} />
          </a>
        </div>
        <div className="border-l border-dashed border-white/30 px-2.5 leading-7 max-[450px]:border-0">
          Address: <br />
          {site.address.street} <br />
          {site.address.city} <br />
          {site.address.zip} <br />
          {site.phoneDisplay} <br />
          {site.email}
        </div>
        <div className="border-l border-dashed border-white/30 px-2.5 leading-7 max-[450px]:border-0">
          Hours: <br />
          {site.hours.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </div>
        <div className="footlinks flex flex-col border-l border-dashed border-white/30 px-2.5 max-[450px]:hidden">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-white no-underline transition-colors hover:text-brand">
              {label}
            </Link>
          ))}
        </div>
        <div className="w-[200px] max-[450px]:w-[40vw]">
          <Image
            src="/img/10west_logo_white.webp"
            alt="10 West Salon"
            width={640}
            height={346}
            className="w-full"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <p className="mt-4 text-center text-sm">
        <Link href="/privacy" className="text-white/90 underline-offset-2 hover:text-brand hover:underline">
          Privacy
        </Link>
        <span className="mx-2 text-white/40" aria-hidden>
          ·
        </span>
        {site.name} &copy; {site.copyrightYear}
      </p>
    </footer>
  );
}
