# Updating site content

All editable copy and pricing for the marketing site lives in this folder (`web/src/data/`).  
After you change any file, save it and refresh the dev server, or run `npm run build` before deploy.

## Images (WebP)

Raster images are stored as **`.webp`** under **`web/public/img/`** (and `public/img/products/`). Paths in data files look like `/img/shop.webp` or `/img/products/olaplex.webp`.

To add a new photo:

1. Create a WebP (e.g. export from an editor, or use `ffmpeg -i input.jpg -quality 85 output.webp`).
2. Put the file in `public/img/` (or `public/img/products/`).
3. Reference it in the data file with a leading slash: `/img/yourfile.webp`.

SVG logos (`10west_logo.svg`, etc.) stay as SVG — no need to convert.

**Social / SEO preview image:** `web/public/og-image.webp` (and `og-image.png`) — used for Open Graph and Twitter cards; built from the favicon. Regenerate with ffmpeg if you replace the brand mark.

## Files

| File | What it drives |
|------|----------------|
| `site.ts` | Business info, hours, social links, analytics ID, **top navigation** |
| `services.ts` | **Services & prices** page (`/services`) |
| `products.ts` | Product logos/grid on `/products` |
| `about.ts` | About intro + stylist cards on `/about` |
| `home.ts` | Home page headline, gift line, and feature cards |
| `keratin.ts` | Long-form keratin copy on `/keratin` |
| `colortogo.ts` | YouTube embed on `/colortogo` (not in the main nav unless you add it in `site.ts`) |

## Other routes (not in `data/` only)

- **`/privacy`** — legal copy lives in `web/src/app/privacy/page.tsx` (short policy + analytics note).
- **Sitemap / robots** — generated at build from `web/src/app/sitemap.ts` and `robots.ts`.

## TypeScript

These are `.ts` files: use **straight double quotes** for strings, commas between items, and keep **commas** after the last property if the linter/formatting expects them. If the editor shows red squiggles, you likely have a missing comma or an extra/missing `{` `}`.

## Adding a nav item

1. Add `{ href: "/your-page", label: "Label" }` to `navLinks` in `site.ts`.  
2. Create the matching route under `web/src/app/your-page/page.tsx` (or ask a developer to).
