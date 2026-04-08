/**
 * KERATIN PAGE (/keratin)
 * -----------------------
 * Long-form marketing copy for keratin / restructuring (not the tabular price list).
 * Exact dollar amounts for the menu live in `services.ts` under Retexturing.
 *
 * HOW TO UPDATE
 * -------------
 * • title   — page H1 (browser tab title is shortened in `app/keratin/page.tsx`).
 * • sections — ordered blocks. Each block has:
 *     - heading    — section title (H2)
 *     - paragraphs — one or more strings; each becomes a paragraph
 *     - bullets    — optional list items (ul) below the paragraphs
 *
 * To add a section: append `{ heading, paragraphs, bullets?: [...] }` to the array.
 * To add a paragraph only: push another string into `paragraphs`.
 * Use straight quotes in copy unless you intentionally want curly typography.
 */

export type KeratinSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export const keratinPage = {
  title: "Keratin & Hair Restructuring Treatments",
  sections: [
    {
      heading: "Is Keratin for you?",
      paragraphs: [
        "Natural Keratin Treatments may be for you! Tired of Frizzy or Curly Hair? Get the RIGHT Keratin Treatment for your specific desired results. Keratin Treatments are designed for specific results. We guarantee great results. Treatments range from $125.00 to $300.00. Consultation is recommended prior to setting up your appointment.",
      ],
    },
    {
      heading: "Our treatments",
      paragraphs: [
        "10 WEST SALON uses 3 different Keratin Treatments. Depending on how much curl you may want to keep and your hair type decides which product we use. Call for a free consultation. This product is for CERTIFIED PROFESSIONALS and should only be used by experienced professionals for optimum and safe results. Satisfaction is 100% guaranteed!",
        "We are using the Peter Coppola smoothing treatments and Keratin Complex smoothing treatments that last 3+ months and start at $250.00. We are also using the Keratin Complex 'Blow Out' treatment which is a ‘taste’ of what the treatments feel like. Those treatments last about 4-6 weeks and are usually $125.00.",
      ],
    },
    {
      heading: "It's good for your hair!",
      paragraphs: [
        "Unlike other salon services, the more you treat your hair, the healthier it becomes. With each treatment, the build-up of Keratin makes the hair:",
      ],
      bullets: [
        "Smoother and silkier",
        "Straighter and shinier",
        "Easier and faster to blow-dry",
        "Just about maintainance-free!",
      ],
    },
  ] satisfies KeratinSection[],
} as const;
