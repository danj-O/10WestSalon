import type { Metadata } from "next";
import Image from "next/image";
import { InnerPage } from "@/components/InnerPage";
import { SiteFooter } from "@/components/SiteFooter";
import { productTiles } from "@/data/products";
import { defaultDescription, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description: defaultDescription,
  alternates: { canonical: `${site.canonicalBase}/products` },
};

export default function ProductsPage() {
  return (
    <>
      <InnerPage>
        <h1 className="mb-8 text-center font-display text-4xl font-black max-[600px]:text-2xl">Products</h1>
        <div className="mx-auto max-w-6xl px-5 pb-16">
          {/* Multi-column masonry: portrait + landscape stack without forced crops */}
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {productTiles.map((tile) => {
              const inner = (
                <Image
                  src={tile.imageSrc}
                  alt={tile.imageAlt}
                  width={tile.width}
                  height={tile.height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full rounded-md bg-neutral-100/80 shadow-md ring-1 ring-black/5"
                />
              );
              return (
                <article key={tile.imageSrc} className="mb-6 break-inside-avoid">
                  {tile.href ? (
                    <a
                      href={tile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
