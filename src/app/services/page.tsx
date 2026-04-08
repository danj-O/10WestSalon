import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { ServicePriceList } from "@/components/ServicePriceList";
import { SiteFooter } from "@/components/SiteFooter";
import { serviceBlocks } from "@/data/services";
import { defaultDescription, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & pricing",
  description: defaultDescription,
  alternates: { canonical: `${site.canonicalBase}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <InnerPage>
        <ServicePriceList blocks={serviceBlocks} />
      </InnerPage>
      <SiteFooter />
    </>
  );
}
