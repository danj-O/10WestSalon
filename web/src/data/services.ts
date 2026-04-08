/**
 * SERVICES & PRICING (/services page)
 * -----------------------------------
 * This file is the single source of truth for the price list. Editing it updates
 * only the Services page — keratin “story” copy is in `keratin.ts` instead.
 *
 * STRUCTURE
 * ---------
 * `serviceBlocks` is a top-to-bottom list of bordered columns on the page (on
 * desktop you get a 2-column grid; blocks flow in order).
 *
 * Each block has:
 *   • title     — section heading (e.g. "Standard Services")
 *   • intro     — optional; paragraphs above the list. Use \n\n for a blank line.
 *   • entries   — lines and notes (see below)
 *   • subblocks — optional smaller sections inside the same column (e.g.
 *                 "Retexturing" under Color). Each has its own title + entries.
 *
 * ENTRY TYPES
 * -----------
 * 1) Price line:
 *    { kind: "line", title: "Service name", price: "$50.00", description?: "..." }
 *    • `price` optional (e.g. "Consultation" as text)
 *    • `description` optional; shows as smaller text under the title
 *
 * 2) Note (italic disclaimer):
 *    { kind: "note", text: "*Something the client should know" }
 *
 * ADDING / REORDERING
 * -------------------
 * • New service: push another `{ kind: "line", ... }` into `entries` (or into a
 *   subblock’s `entries`).
 * • New major section: push a new object onto `serviceBlocks`.
 * • Reorder: move whole blocks or individual entries; no IDs required.
 *
 * IMAGES: not used here — only text. Images for the site live under `public/img/`.
 */

export type ServiceEntry =
  | {
      kind: "line";
      title: string;
      price?: string;
      description?: string;
    }
  | { kind: "note"; text: string };

export type ServiceBlock = {
  title: string;
  intro?: string;
  entries: ServiceEntry[];
  subblocks?: { title: string; entries: ServiceEntry[] }[];
};

export const serviceBlocks: ServiceBlock[] = [
  {
    title: "Standard Services",
    entries: [
      { kind: "line", title: "Woman's Haircut & Style", price: "$57.00" },
      { kind: "line", title: "Woman's Cut Only/No Finish Style", price: "$45.00" },
      { kind: "line", title: "Shampoo-Blow dry Style", price: "$33.00+" },
      { kind: "line", title: "Extra Styling/finish (long hair)", price: "$6.00" },
      { kind: "line", title: "Men's Cut/Style", price: "$30.00" },
      { kind: "line", title: "Boy's Cut/Style (13-18)", price: "$23.00" },
      { kind: "line", title: "Girl's Cut/Style (13-18)", price: "$42.00" },
      { kind: "line", title: "Children's Cut (12 & under)", price: "$20.00" },
      { kind: "line", title: "Special Occasion/Up-Do", price: "$50.00+" },
      { kind: "note", text: "*Bang trim always complimentary" },
      {
        kind: "line",
        title: "Conditioning Treatments",
        description:
          "Your stylist will decide if your hair is in need of moisture or protein and will recommend what is most needed and will help design an at home plan as well.",
        price: "$10.00+",
      },
      {
        kind: "line",
        title: "Olaplex Conditioning Treatments",
        description: "The ultimate conditioning treatment",
        price: "$25.00",
      },
      { kind: "line", title: "Special Occasion/Up-Do", price: "$47.00" },
      { kind: "line", title: "Bridal Hair", price: "Consultation" },
    ],
  },
  {
    title: "Color Enhancements",
    intro:
      "Color is the essential element that makes your cut and style come together. It can add movement to lifeless hair and will personalize your hair to make it your own.\n\nHighlights starting at 35 for a few and up to 80 for the highlight addicted.",
    entries: [
      {
        kind: "line",
        title: "Single Process",
        description: "Lisap of Milan, Matrix and Redken are our color brands.",
        price: "$60.00",
      },
      { kind: "line", title: "Overlay/Toner", price: "$22.00" },
      {
        kind: "line",
        title: "Quickie 23",
        description:
          "Quick color touch-up to get you by. Can only be performed up to 3 weeks after initial single process all over color.",
        price: "$28.00",
      },
      { kind: "line", title: "Quickie Take-Home Kit", price: "$28.00" },
      { kind: "line", title: "Accent Foils", price: "$50.00+" },
      { kind: "line", title: "Partial Foil", price: "$75.00+" },
      { kind: "line", title: "Full Foil", price: "$100.00+" },
      { kind: "line", title: "Customized Colors or Technique", price: "Consultation" },
      { kind: "line", title: "Men's Color", price: "$30.00" },
      { kind: "line", title: "Corrective Color", price: "Consultation" },
    ],
    subblocks: [
      {
        title: "Retexturing",
        entries: [
          {
            kind: "line",
            title: "Perm",
            description: "Volumize with subtle waves or lots of curl.",
            price: "$68.00+",
          },
          { kind: "line", title: "Special Wrap Perm", price: "$85.00+" },
          { kind: "line", title: "Keratin Blowout Express Treatment", price: "$165.00" },
          { kind: "line", title: "Full Keratin Treatment", price: "$375.00" },
        ],
      },
    ],
  },
  {
    title: "Waxing Services",
    entries: [
      { kind: "line", title: "Brows", price: "$12.00" },
      { kind: "line", title: "Lip", price: "$10.00" },
      { kind: "line", title: "Chin", price: "$10.00" },
      { kind: "line", title: "Total Face", price: "$25.00" },
    ],
  },
  {
    title: "Nail Services",
    entries: [
      { kind: "line", title: "Manicure", price: "$23.00" },
      { kind: "line", title: "Pedicure (Spa)", price: "$53.00" },
      { kind: "line", title: "Gel Nails", price: "$36.00" },
    ],
  },
];
