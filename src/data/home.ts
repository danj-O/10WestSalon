/**
 * HOME PAGE (/) — hero headline, gift line, feature cards, hiring strip
 * -----------------------------------------------------------------------
 * Used only by `app/page.tsx`. Does not change the navigation bar (that’s `site.ts`).
 *
 * homeIntro.lines — main page title: one h1 with multiple lines (name, location, phone).
 * homeGiftLine — secondary heading (h2) below the cards; gift certificate message.
 * homeHiring — optional “we’re hiring” image + mailto (shown above footer).
 *
 * homeCardRows — rows of link cards (see type `HomeCard`).
 */

export type HomeCard = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  body: string;
  external?: boolean;
};

/** Main headline — rendered as one h1 with each string on its own line. */
export const homeIntro = {
  lines: ["10 West Salon", "Chagrin Falls, Ohio", "440-247-8474"] as const,
  /** Optional tagline (not shown on current layout unless you add it back). */
  tagline: `"Chagrin's best kept salon secret"`,
};

export const homeGiftLine = "Gift certificates are always available! Call in or stop by!";

/** Hiring banner above footer — image links to email. */
export const homeHiring = {
  imageSrc: "/img/hiring.webp",
  imageAlt: "We're hiring — email to apply at 10 West Salon",
  email: "stjohnkelle@yahoo.com",
};

export const homeCardRows: HomeCard[][] = [
  [
    {
      href: "/about",
      imageSrc: "/img/salon.webp",
      imageAlt: "Interior of 10 West Salon, Chagrin Falls",
      heading: "About Us",
      body: "Learn more about us and get to know our stylists.",
    },
    {
      href: "/products",
      imageSrc: "/img/products/olaplex.webp",
      imageAlt: "Salon retail hair care products",
      heading: "Products",
      body: "Paul Mitchell, Redken, It's a 10, and Nioxin are a few of our product lines.",
    },
    {
      href: "/services",
      imageSrc: "/img/shop.webp",
      imageAlt: "10 West Salon interior",
      heading: "Services",
      body: "We have a wide range of services. Click here to see our services and price list.",
    },
  ],
];
