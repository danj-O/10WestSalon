import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Required for `output: 'export'` — sitemap is generated at build time. */
export const dynamic = "force-static";

/** Built at `out/sitemap.xml` when you run `npm run build` (static export). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.canonicalBase;
  const paths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.85 },
    { path: "/contact", priority: 0.85 },
    { path: "/products", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/keratin", priority: 0.75 },
    { path: "/colortogo", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
  ];

  return paths.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
