import { defaultDescription, site } from "@/data/site";

/** schema.org HairSalon — helps Google Maps / rich results. Uses `og-image` for image URL. */
export function LocalBusinessJsonLd() {
  const [locality, regionPart] = site.address.city.split(",").map((s) => s.trim());
  const region = regionPart ?? "OH";

  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: defaultDescription,
    image: [`${site.canonicalBase}/img/10west_logo_white.webp`, `${site.canonicalBase}/og-image.webp`],
    url: site.canonicalBase,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: locality,
      addressRegion: region,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    sameAs: [site.social.facebook, site.social.yelp],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
