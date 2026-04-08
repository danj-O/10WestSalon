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
        <div className="flex flex-wrap justify-evenly gap-4 px-5 pb-16">
          {productTiles.map((tile) => {
            const img = (
              <Image
                src={tile.imageSrc}
                alt={tile.imageAlt}
                width={tile.wide ? 800 : 400}
                height={300}
                className={`h-auto max-w-full shadow ${tile.wide ? "w-full md:max-w-[90%]" : "w-full max-w-[300px]"}`}
              />
            );
            return (
              <div
                key={tile.imageSrc}
                className={`flex justify-center p-2 ${tile.wide ? "w-full basis-full" : "max-w-[300px] basis-[300px] grow"}`}
              >
                {tile.href ? (
                  <a href={tile.href} target="_blank" rel="noopener noreferrer" className="block">
                    {img}
                  </a>
                ) : (
                  img
                )}
              </div>
            );
          })}
        </div>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
