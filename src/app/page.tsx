import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { homeCardRows, homeGiftLine, homeIntro } from "@/data/home";
import { defaultDescription } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description: defaultDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/img/papyrus.webp')] text-black">
      {/* In-flow hero (below fixed header) — no fixed / scroll-over effect */}
      <section className="pt-14 md:pt-16">
        <div className="relative aspect-[16/10] max-h-[min(52vh,520px)] w-full min-h-[200px] sm:aspect-[2/1] sm:max-h-[min(48vh,560px)]">
          <Image
            src="/img/shop-from-counter.webp"
            alt="Interior of 10 West Salon"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <div className="border-t border-black/10 shadow-[0_-1px_4px_rgba(0,0,0,0.12)]">
        <div className="mx-2.5">
          <div className="bg-white/30 py-3 text-center text-base max-[850px]:text-sm">
            <h1 className="font-display text-lg font-black tracking-tight max-[850px]:text-xs">
              {homeIntro.h1}
            </h1>
            <p className="mt-1 font-display text-base max-[850px]:text-xs">{homeIntro.h2}</p>
          </div>

          {homeCardRows.map((row, ri) => (
            <div
              key={ri}
              className="my-0 flex flex-wrap justify-evenly gap-4 px-5 py-2 max-[450px]:flex-col"
            >
              {row.map((card) => {
                const inner = (
                  <>
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      width={400}
                      height={300}
                      className="h-auto w-full transition-opacity duration-300 group-hover:opacity-90"
                    />
                    <h2 className="group relative mt-2 text-xl leading-none text-brand">
                      <span className="relative inline-block pb-3 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[10%] after:bg-brand after:transition-all after:duration-300 after:ease-out group-hover:after:w-[30%]">
                        {card.heading}
                      </span>
                    </h2>
                    <p className="text-black transition-colors duration-300 group-hover:text-neutral-500">
                      {card.body}
                    </p>
                  </>
                );
                const className =
                  "group flex max-w-[300px] flex-col rounded bg-white p-2.5 shadow-md transition-all duration-300 max-[450px]:max-w-none hover:shadow-lg";
                return card.external ? (
                  <a
                    key={card.href + card.heading}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={card.href + card.heading} href={card.href} className={className}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          ))}

          <div className="bg-white/30 py-3 text-center text-xl max-[850px]:text-base">
            <h2 className="font-display font-black">{homeGiftLine}</h2>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  );
}
