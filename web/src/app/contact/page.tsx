import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
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
        <div className="grid grid-cols-1 gap-2 px-2 pb-16 md:grid-cols-2">
          <div className="col-span-1 text-center md:col-span-2">
            <h1 className="font-display text-2xl font-black">Contact / Find Us!</h1>
          </div>
          <section className="min-w-0 rounded bg-white px-8 py-6 shadow-md md:px-12">
            <p className="text-2xl">10 West Hair Salon</p>
            <p className="mt-4 text-xl leading-relaxed">
              {site.address.street} Chagrin Falls, Ohio
              <br />
              Phone: ({site.phoneDisplay.slice(0, 3)}){site.phoneDisplay.slice(4)}
              <br />
              <br />
              Hours:
              <br />
              {site.hours.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <br />
              <br />
              Call to request an appointment!
            </p>
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
