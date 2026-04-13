import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { PageHeading } from "@/components/PageHeading";
import { SectionHeading } from "@/components/SectionHeading";
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
        <PageHeading className="px-4">{keratinPage.title}</PageHeading>
        <div className="mx-auto max-w-3xl space-y-10 px-4 pb-16 text-left leading-relaxed">
          {keratinPage.sections.map((section) => (
            <section key={section.heading}>
              <SectionHeading align="left" margin={false} className="mb-4">
                {section.heading}
              </SectionHeading>
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
