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

## Deploy

- **Netlify:** `netlify.toml` uses `npm run build` and publishes **`out`**. Set the repo root as the site root (no subfolder).
- **Vercel / Cloudflare Pages:** same idea — install deps, `npm run build`, serve **`out`**.

## Legacy site

The old hand-written HTML/CSS in the repo root has been removed in favor of this app.
