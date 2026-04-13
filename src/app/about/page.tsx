import type { Metadata } from "next";
import Image from "next/image";
import { InnerPage } from "@/components/InnerPage";
import { PageHeading } from "@/components/PageHeading";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { aboutIntro, stylists } from "@/data/about";
import { defaultDescription, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: defaultDescription,
  alternates: { canonical: `${site.canonicalBase}/about` },
};

export default function AboutPage() {
  return (
    <>
      <InnerPage>
        <PageHeading>About Us</PageHeading>
        <p className="mx-auto max-w-4xl bg-white/30 px-6 py-5 text-center text-xl leading-relaxed max-[600px]:px-5 max-[600px]:text-base">
          {aboutIntro}
        </p>
        <SectionHeading className="mt-5">Our Stylists</SectionHeading>
        <div className="flex flex-wrap justify-evenly gap-4 px-5 py-6">
          {stylists.map((s) => (
            <div
              key={s.name}
              className="flex w-full max-w-[300px] flex-col rounded bg-white p-2.5 shadow-md max-[450px]:max-w-full"
            >
              <div className="flex w-full justify-center rounded-sm bg-neutral-100 p-1">
                <Image
                  src={s.imageSrc}
                  alt={s.imageAlt}
                  width={300}
                  height={500}
                  className="h-auto w-full max-w-[300px] object-contain"
                  sizes="(max-width: 450px) 92vw, 300px"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <h3 className="relative mt-2 text-center text-xl text-brand">
                <span className="relative inline-block pb-3 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-[10%] after:-translate-x-1/2 after:bg-brand">
                  {s.name}
                </span>
              </h3>
              {s.role ? (
                <p className="mt-1 text-center text-sm font-medium text-neutral-600">{s.role}</p>
              ) : null}
            </div>
          ))}
        </div>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
