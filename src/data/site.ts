/**
 * SITE-WIDE SETTINGS (global business info, analytics, navigation)
 * -----------------------------------------------------------------
 * Used by: layout (favicon/meta base), footer, contact page, Book Now button,
 *          Google Analytics snippet, and the main nav.
 *
 * HOW TO UPDATE
 * -------------
 * • Phone: keep `phoneDisplay` human-readable (dashes ok). `phoneTel` must be
 *   E.164 for tel: links — US example: "+14402478474" (country + number, no spaces).
 * • Hours: each array entry is one line; order is preserved. Edit text freely.
 * • Address / email: shown in footer and (partially) on Contact.
 * • Social URLs: full https:// links. Changing these updates icons site-wide.
 * • Map: `mapEmbedUrl` is the long URL from Google Maps → Share → Embed a map.
 * • `canonicalBase`: your live domain with https, no trailing slash. Used for SEO
 *   canonical URLs on pages. Change if the domain ever moves.
 * • `googleAnalyticsId`: Universal Analytics (UA-…) is deprecated. When you move
 *   to GA4, replace with a `G-XXXXXXXX` ID in layout/analytics (may need a small
 *   code tweak — search for GoogleAnalytics).
 * • `copyrightYear`: set to the current year when you refresh the site.
 * • `navLinks`: top navigation order. `href` must match a real route under
 *   `src/app/` (e.g. "/services" → `app/services/page.tsx`). Add a link only after
 *   the page exists.
 * • `defaultDescription`: fallback meta description; individual pages can override.
 *
 * SEO / SHARING
 * -------------
 * • Open Graph + Twitter preview images come from `public/og-image.webp` (see
 *   `app/layout.tsx`). Replace those files if you rebrand — keep roughly 1200×630.
 * • JSON-LD (HairSalon) is emitted from `components/LocalBusinessJsonLd.tsx`.
 * • `/privacy` is **not** in `navLinks`; it’s linked from the footer only.
 *
 * NOTE: `home.ts` repeats the phone in the home page headline — update both if
 *       you change the main number.
 */

export const site = {
  name: "10 West Salon",
  /** Shown in metadata contexts; home page tagline lives in `home.ts` too */
  tagline: `"Chagrin's best kept salon secret"`,
  /** Displayed as-is on screen (footer, etc.) */
  phoneDisplay: "440-247-8474",
  /** Used in tel: — must stay + and digits (and optional leading country code) */
  phoneTel: "+14402478474",
  email: "Salon10West@me.com",
  address: {
    street: "10 W. Washington St.",
    city: "Chagrin Falls, OH",
    zip: "44022",
  },
  /** One string per line; same block is reused in footer and contact */
  hours: [
    "Closed Sunday/Monday",
    "Tuesday, Friday  9am-5pm",
    "Wed, Thurs  9am-7pm",
    "Saturday 9am-4pm",
  ],
  social: {
    facebook: "https://www.facebook.com/10westsalon/",
    yelp: "https://www.yelp.com/biz/10-west-salon-chagrin-falls",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.425706945766!2d-81.39432518465354!3d41.42998367926036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311b2f09fedb01%3A0x303a9ce46e16238b!2s10%20West%20Salon!5e0!3m2!1sen!2sus!4v1575423888749!5m2!1sen!2sus",
  googleAnalyticsId: "UA-155631859-1",
  canonicalBase: "https://www.10westsalon.com",
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const defaultDescription =
  "Contemporary, Professional, and Family Friendly is what makes 10 WEST SALON a mainstay in CHAGRIN FALLS. Gift Certificates always available. Call us up or stop by!";
