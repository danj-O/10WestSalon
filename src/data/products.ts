/**
 * PRODUCTS GRID (/products)
 * --------------------------
 * A simple list of tiles: image + optional link to a brand or product site.
 *
 * HOW TO UPDATE
 * -------------
 * • Add a tile: push `{ imageSrc, imageAlt, href?, wide? }` onto `productTiles`.
 * • Remove: delete that array entry.
 * • Reorder: move entries; the page renders in array order.
 *
 * FIELDS
 * ------
 * • imageSrc — path under `public/`, always starting with `/`. Use **WebP** files
 *              (e.g. `/img/products/foo.webp`). Add files to `public/img/products/`.
 * • imageAlt — short description for accessibility (and SEO). Don’t leave empty.
 * • href     — if set, the image becomes a clickable link (opens new tab).
 *              Omit `href` for a logo/image with no outbound link.
 * • wide     — if true, the tile is allowed to span wider on large screens
 *              (good for a banner-style image like CBD).
 *
 * After adding new images, run `npm run dev` and hard-refresh the browser.
 */

export type ProductTile = {
  imageSrc: string;
  imageAlt: string;
  href?: string;
  wide?: boolean;
};

export const productTiles: ProductTile[] = [
  { imageSrc: "/img/products/cbd.webp", imageAlt: "CBD Daily products", wide: true },
  { imageSrc: "/img/products/redken.webp", imageAlt: "Redken", href: "https://www.redken.com/" },
  {
    imageSrc: "/img/products/paulmitchell.webp",
    imageAlt: "Paul Mitchell",
    href: "https://www.paulmitchell.com/",
  },
  {
    imageSrc: "/img/products/keratincoppola.webp",
    imageAlt: "Keratin smoothing treatments",
    href: "https://keratincomplex.com/services/smoothing-treatments",
  },
  { imageSrc: "/img/products/devacurl.webp", imageAlt: "DevaCurl", href: "https://www.devacurl.com/" },
  { imageSrc: "/img/products/olaplex.webp", imageAlt: "Olaplex", href: "https://olaplex.com/" },
];
