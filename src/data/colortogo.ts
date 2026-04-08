/**
 * COLOR TO GO PAGE (/colortogo)
 * -----------------------------
 * Single embedded YouTube video + page title. Not linked in the main nav by default;
 * URL is still /colortogo if you share it or add a nav item in `site.ts`.
 *
 * HOW TO UPDATE
 * -------------
 * • title — line shown as the main heading on the page (SEO title is shortened in
 *           `app/colortogo/page.tsx`).
 * • youtubeEmbedSrc — must be an *embed* URL, not a watch link:
 *       Good:   https://www.youtube.com/embed/VIDEO_ID
 *       Bad:    https://www.youtube.com/watch?v=VIDEO_ID
 *   In YouTube: Share → Embed → copy only the `src="..."` value from the iframe.
 */

export const colorToGoVideo = {
  title: "Color To Go Kit Instructional Video",
  youtubeEmbedSrc: "https://www.youtube.com/embed/TJS-V3kcayA",
} as const;
