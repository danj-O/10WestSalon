# 10 West Salon — website

Next.js (App Router) static site for [10 West Salon](https://www.10westsalon.com), Chagrin Falls, OH.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

Static export goes to **`out/`** (`output: 'export'` in `next.config.ts`):

```bash
npm run build
```

Content editors: see **`src/data/README.md`** for where to edit copy, prices, and images.

## Brand logo (when replacing `public/img/10west_logo.png`)

The site uses **`10west_logo_white.webp`** in the header/footer (dark backgrounds). Keep **`10west_logo.png`** as the master source.

1. **White logo (header/footer on dark backgrounds):** from the PNG with transparency preserved:
   ```bash
   ffmpeg -y -i public/img/10west_logo.png -vf "format=rgba,geq=r='255':g='255':b='255':a='alpha(X,Y)'" public/img/10west_logo_white.png
   ffmpeg -y -i public/img/10west_logo_white.png -quality 90 public/img/10west_logo_white.webp
   ```
2. Regenerate **`public/og-image.webp`** and **`public/10westfav.png`** from **`10west_logo_white.png`** (white logo on black pad) so social previews match the site.

**HEIC photos:** Apple’s tiled HEIC often decodes wrong in ffmpeg alone. Use **`sips -s format png file.heic --out file.png`** first, then encode WebP with ffmpeg.

## Deploy

- **Netlify:** `netlify.toml` uses `npm run build` and publishes **`out`**. Set the repo root as the site root (no subfolder).
- **Vercel / Cloudflare Pages:** same idea — install deps, `npm run build`, serve **`out`**.

## Legacy site

The old hand-written HTML/CSS in the repo root has been removed in favor of this app.
