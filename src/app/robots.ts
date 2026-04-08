import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Required for `output: 'export'` — robots.txt is generated at build time. */
export const dynamic = "force-static";

/** Served as `/robots.txt` in the static export. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.canonicalBase}/sitemap.xml`,
  };
}
