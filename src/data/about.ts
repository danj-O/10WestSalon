/**
 * ABOUT PAGE (/about)
 * -------------------
 * Salon intro paragraph + stylist cards (photo + name).
 *
 * HOW TO UPDATE
 * -------------
 * • aboutIntro — single string; keep it one paragraph or join sentences. For line
 *                breaks in the UI you’d need to change the page component.
 * • stylists   — array of `{ name, imageSrc, imageAlt, role }`.
 *                - imageSrc: use `.webp` files under `public/img/` (see README in this folder).
 *                - imageAlt: use the stylist’s name at minimum (e.g. "Portrait of Les").
 *                - role: optional label (e.g. "Owner"); use "" when none.
 *
 * Replacing photos: add new WebP files to `public/img/`, then update `imageSrc`.
 *
 * To add/remove stylists: push or splice objects in the `stylists` array. Order =
 * display order on the page.
 */

export type Stylist = {
  name: string
  imageSrc: string
  imageAlt: string
  /** e.g. "Owner"; empty string when not shown */
  role: string
}

export const aboutIntro =
  "10 West Salon in Chagrin Falls has catered to Chagrin Valley families since 1983. We pride ourselves in using high quality products and our hair stylists are the best!"

export const stylists: Stylist[] = [
  // { name: "Les", imageSrc: "/img/les2.webp", imageAlt: "Les, stylist at 10 West Salon", role: "" },
  {
    name: "Kellee",
    imageSrc: "/img/kellee.webp",
    imageAlt: "Kellee, stylist at 10 West Salon",
    role: "Owner",
  },
  { name: "Michelle", imageSrc: "/img/michelle.webp", imageAlt: "Michelle, stylist at 10 West Salon", role: "" },
  {
    name: "Melissa",
    imageSrc: "/img/melissa.webp",
    imageAlt: "Melissa, stylist at 10 West Salon",
    role: "",
  },
  // {
  //   name: "Lisa",
  //   imageSrc: "/img/shop.webp",
  //   imageAlt: "10 West Salon interior — Lisa",
  // },
  // {
  //   name: "Angela",
  //   imageSrc: "/img/shop-outside.webp",
  //   imageAlt: "10 West Salon exterior — Angela",
  // },
]
