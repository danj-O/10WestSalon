/**
 * HOME PAGE (/) — hero headline, gift line, and feature card rows
 * -----------------------------------------------------------------
 * Used only by `app/page.tsx`. Does not change the navigation bar (that’s `site.ts`).
 *
 * homeIntro
 * ---------
 * • h1 — main headline (currently includes phone; if you change the number, also
 *        update `site.ts` phone fields).
 * • h2 — subhead / tagline (quote marks are part of the string).
 *
 * homeGiftLine
 * ------------
 * Shown once in a banner above the footer on the home page.
 *
 * homeCardRows
 * ------------
 * Array of ROWS; each row is an array of cards. Row 1 = first strip of tiles, row 2 = second.
 *
 * Per card:
 *   • href      — internal path like "/services" OR full URL for external sites.
 *   • imageSrc  — `.webp` under `public/img/` (see README in this folder).
 *   • imageAlt  — accessibility text.
 *   • heading   — card title (red heading on the site).
 *   • body      — short blurb under the title.
 *   • external  — set `true` when `href` is outside this site (e.g. https://gelish.com/).
 *                 Opens in a new tab. Omit or false for internal Next.js routes.
 *
 * Adding a card: append to the correct inner array. New row: add `[ ...cards ]` to
 * `homeCardRows`.
 */

export type HomeCard = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  heading: string;
  body: string;
  external?: boolean;
};

export const homeIntro = {
  h1: "10 West Salon, Chagrin Falls, Ohio 440-247-8474",
  h2: `"Chagrin's best kept salon secret"`,
};

export const homeGiftLine = "Gift certificates are always available! Call in or stop by!";

export const homeCardRows: HomeCard[][] = [
  [
    {
      href: "/about",
      imageSrc: "/img/staff.webp",
      imageAlt: "Hair stylists of 10 West Salon Chagrin Falls",
      heading: "About Us",
      body: "Learn more about us and get to know our stylists.",
    },
    {
      href: "/products",
      imageSrc: "/img/products/olaplex.webp",
      imageAlt: "Olaplex and salon products",
      heading: "Products",
      body: "We have our own 10 West hair products as well as the top big brands. Check it out here.",
    },
    {
      href: "/services",
      imageSrc: "/img/shop.webp",
      imageAlt: "10 West Salon interior",
      heading: "Services",
      body: "We have a wide range of services. Click here to see our services and price list.",
    },
  ],
  [
    {
      href: "/keratin",
      imageSrc: "/img/products/keratincoppola.webp",
      imageAlt: "Keratin Complex smooth straight hair",
      heading: "Restructuring",
      body: "3 treatments available. We will help you choose the one that is best for you.",
    },
    {
      href: "/products",
      imageSrc: "/img/products/olaplex.webp",
      imageAlt: "Olaplex conditioning",
      heading: "Products",
      body: "The ultimate in conditioning treatments!",
    },
    {
      href: "https://gelish.com/",
      imageSrc: "/img/products/gelish_logo.webp",
      imageAlt: "Gelish nail products",
      heading: "Gelish.com",
      body: "Gel Nails by Gelish",
      external: true,
    },
  ],
];
