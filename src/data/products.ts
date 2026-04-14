/**
 * PRODUCTS GRID (/products)
 * --------------------------
 * Masonry-style columns: mixed portrait/landscape images keep their aspect ratio.
 *
 * HOW TO UPDATE
 * -------------
 * • Add WebP under `public/img/products/`, then add an entry with **width** and **height**
 *   (intrinsic pixels — run `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 your.webp`).
 * • Remove: delete the file and its array entry.
 *
 * FIELDS
 * ------
 * • imageSrc, imageAlt — path and accessibility text.
 * • width, height — intrinsic dimensions (for Next/Image layout; not a crop).
 * • href — optional; opens in a new tab when set.
 */

export type ProductTile = {
  imageSrc: string
  imageAlt: string
  /** Intrinsic width in pixels (for layout / aspect ratio). */
  width: number
  /** Intrinsic height in pixels. */
  height: number
  href?: string
}

/** Every WebP in `public/img/products/` — keep this list in sync when adding files. */
export const productTiles: ProductTile[] = [
  {
    imageSrc: "/img/products/awapuhi.webp",
    imageAlt: "Paul Mitchell Awapuhi Wild Ginger products",
    width: 480,
    height: 640,
    href: "https://www.paulmitchell.com/pages/awapuhi-wild-ginger",
  },
  {
    imageSrc: "/img/products/awapuhi2.webp",
    imageAlt: "Paul Mitchell Awapuhi Wild Ginger products",
    width: 640,
    height: 480,
    href: "https://www.paulmitchell.com/pages/awapuhi-wild-ginger",
  },
  {
    imageSrc: "/img/products/nioxin.webp",
    imageAlt: "Nioxin scalp and hair care",
    width: 480,
    height: 640,
    href: "https://www.nioxin.com/",
  },
  {
    imageSrc: "/img/products/olaplex.webp",
    imageAlt: "Olaplex",
    width: 1600,
    height: 1200,
    href: "https://olaplex.com/",
  },
  {
    imageSrc: "/img/products/paulmitchell.webp",
    imageAlt: "Paul Mitchell",
    width: 1600,
    height: 1200,
    href: "https://www.paulmitchell.com/",
  },
  {
    imageSrc: "/img/products/paulmitchell2.webp",
    imageAlt: "Paul Mitchell products on display",
    width: 480,
    height: 640,
    href: "https://www.paulmitchell.com/",
  },
  {
    imageSrc: "/img/products/redken.webp",
    imageAlt: "Redken hair care",
    width: 640,
    height: 480,
    href: "https://www.redken.com/",
  },
  {
    imageSrc: "/img/products/redken2.webp",
    imageAlt: "Redken products",
    width: 640,
    height: 480,
    href: "https://www.redken.com/",
  },
  {
    imageSrc: "/img/products/teatree.webp",
    imageAlt: "Paul Mitchell Tea Tree hair care",
    width: 640,
    height: 480,
    href: "https://www.paulmitchell.com/tea-tree/",
  },
]
