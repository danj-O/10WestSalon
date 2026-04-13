import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { PageHeading } from "@/components/PageHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { defaultDescription, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: defaultDescription,
  alternates: { canonical: `${site.canonicalBase}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <InnerPage>
        <div className="grid grid-cols-1 gap-6 px-2 pb-16 md:grid-cols-2 md:gap-8">
          <div className="col-span-1 text-center md:col-span-2">
            <PageHeading>Contact / Find Us!</PageHeading>
          </div>
          <section className="min-w-0 rounded bg-white px-6 py-6 text-left text-base leading-relaxed text-neutral-800 shadow-md md:px-8 md:py-8">
            <p className="font-semibold text-neutral-900">10 West Hair Salon</p>
            <p className="mt-4">
              {site.address.street}
              <br />
              {site.address.city} {site.address.zip}
            </p>
            <p className="mt-4">
              Phone:{" "}
              <a href={`tel:${site.phoneTel}`} className="text-brand hover:underline">
                {site.phoneDisplay}
              </a>
            </p>
            <div className="mt-4">
              <p className="font-medium text-neutral-900">Hours</p>
              <ul className="mt-1 list-none space-y-0.5 pl-0">
                {site.hours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-neutral-700">Call to request an appointment!</p>
          </section>
          <section className="relative min-h-0 overflow-hidden rounded bg-white pb-[56.25%] shadow-md">
            <iframe
              title="10 West Salon on Google Maps"
              src={site.mapEmbedUrl}
              className="absolute left-0 top-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </section>
        </div>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
