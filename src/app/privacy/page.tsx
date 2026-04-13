import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { PageHeading } from "@/components/PageHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for 10 West Salon, Chagrin Falls, Ohio.",
  alternates: { canonical: `${site.canonicalBase}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <InnerPage>
        <article className="mx-auto max-w-2xl px-4 pb-16 leading-relaxed">
          <PageHeading align="left">Privacy</PageHeading>
          <p className="mb-4 text-neutral-800">
            This site is operated by {site.name}. We collect only what is typical for a small
            business website: for example, if you call or email us, that contact happens outside
            this page. We do not run user accounts or a shopping cart on this site.
          </p>
          <p className="mb-4 text-neutral-800">
            We may use analytics (such as Google Analytics) to understand how visitors use the
            site. Those tools can set cookies or similar technologies as described in their own
            policies. You can use your browser settings to limit cookies.
          </p>
          <p className="mb-4 text-neutral-800">
            Embedded content (for example a map or video) may load resources from third parties
            under their terms.
          </p>
          <p className="mb-8 text-neutral-800">
            Questions? Contact us at{" "}
            <a className="text-brand underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or {site.phoneDisplay}.
          </p>
          <p className="text-sm text-neutral-600">
            <Link href="/" className="text-brand underline">
              ← Back to home
            </Link>
          </p>
        </article>
      </InnerPage>
      <SiteFooter />
    </>
  );
}
