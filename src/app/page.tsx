import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SectionHeading } from "@/components/SectionHeading"
import { SiteFooter } from "@/components/SiteFooter"
import { homeCardRows, homeGiftLine, homeHiring, homeIntro } from "@/data/home"
import { defaultDescription } from "@/data/site"

export const metadata: Metadata = {
  title: "Home",
  description: defaultDescription,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('/img/papyrus.webp')] text-black">
      {/* Hero: image + gradient overlay + title (standard landing pattern) */}
      <section className="pt-[4.5rem]">
        <div className="relative aspect-[16/10] max-h-[min(52vh,560px)] w-full min-h-[220px] sm:aspect-[2/1] sm:max-h-[min(52vh,600px)]">
          <Image
            src="/img/shop-from-counter.webp"
            alt="Interior of 10 West Salon"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Light scrim: darker toward bottom (where text sits) so the room stays visible */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 flex items-center justify-center px-4 py-16 sm:py-20">
            <h1 className="max-w-3xl text-balance text-center font-display text-2xl font-bold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_20px_rgba(0,0,0,0.55),0_0_2px_rgba(0,0,0,0.8)] sm:text-3xl md:text-4xl">
              {homeIntro.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </section>

      <div className="border-t border-black/10 shadow-[0_-1px_4px_rgba(0,0,0,0.12)]">
        <div className="mx-2.5">
          {homeCardRows.map((row, ri) => (
            <div key={ri} className="my-0 flex flex-wrap justify-evenly gap-4 px-5 py-2 max-[450px]:flex-col">
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
                )
                const className =
                  "group flex max-w-[300px] flex-col rounded bg-white p-2.5 shadow-md transition-all duration-300 max-[450px]:max-w-none hover:shadow-lg"
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
                )
              })}
            </div>
          ))}

          <div className="bg-white/30 px-3 py-6 text-center sm:py-8">
            <SectionHeading margin={false} className="text-balance">
              {homeGiftLine}
            </SectionHeading>
          </div>

          <div className="px-4 pb-10 pt-2">
            <a
              href={`mailto:${homeHiring.email}`}
              className="mx-auto block max-w-xl overflow-hidden rounded-lg shadow-md ring-1 ring-black/5 transition hover:opacity-95 hover:ring-2 hover:ring-brand/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <Image
                src={homeHiring.imageSrc}
                alt={homeHiring.imageAlt}
                width={573}
                height={480}
                className="h-auto w-full"
                sizes="(max-width: 640px) 100vw, 36rem"
              />
            </a>
          </div>
        </div>
        <SiteFooter />
      </div>
    </div>
  )
}
