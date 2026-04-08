import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { SiteFooter } from "@/components/SiteFooter";
import { keratinPage } from "@/data/keratin";
import { defaultDescription, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Keratin treatments",
  description: defaultDescription,
  alternates: { canonical: `${site.canonicalBase}/keratin` },
};

export default function KeratinPage() {
  return (
    <>
      <InnerPage>
        <h1 className="mb-10 px-4 text-center font-display text-3xl font-black max-[600px]:text-2xl">
          {keratinPage.title}
        </h1>
        <div className="mx-auto max-w-3xl space-y-10 px-4 pb-16 text-left leading-relaxed">
          {keratinPage.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-4 font-display text-2xl font-bold text-neutral-900">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-neutral-800">
                  {p}
                </p>
              ))}
              {section.bullets ? (
                <ul className="ml-6 list-disc space-y-2 text-neutral-800">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
