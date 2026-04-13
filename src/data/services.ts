/**
 * SERVICES & PRICING (/services page)
 * -----------------------------------
 * Single source of truth for the price list (matches published sheet).
 *
 * STRUCTURE
 * ---------
 * `serviceBlocks` — bordered sections on the Services page.
 *
 * ENTRY TYPES
 * -----------
 * • `{ kind: "line", title, price?, description? }`
 * • `{ kind: "note", text }` — italic note
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
    intro: "Prices effective March 1, 2026.",
    entries: [
      { kind: "line", title: "Women's Cut & Style", price: "$60.00" },
      { kind: "line", title: "Women's Cut Only", price: "$50.00" },
      { kind: "line", title: "Shampoo Blow Dry Style", price: "$35.00" },
      { kind: "line", title: "Extra Styling Finish / long hair", price: "$6.00+" },
      { kind: "line", title: "Men's Cut / Style", price: "$30.00" },
      { kind: "line", title: "Boys Cut (13–18)", price: "$25.00" },
      { kind: "line", title: "Girls Cut / Style (age 10+)", price: "$45.00" },
      { kind: "line", title: "Children's Cut (under 10 yrs)", price: "$30.00" },
      { kind: "line", title: "Special Occasion / Up-do", price: "$60.00+" },
      { kind: "line", title: "Bridal Hair", price: "Consultation" },
    ],
  },
  {
    title: "Hair Coloring",
    entries: [
      { kind: "line", title: "Single Process", price: "$65.00" },
      { kind: "line", title: "Overlay / Toner", price: "$10.00" },
      { kind: "line", title: "Quickie Color", price: "$30.00" },
      { kind: "line", title: "Accent Foils", price: "$50.00" },
      { kind: "line", title: "Partial Foils", price: "$80.00+" },
      { kind: "line", title: "Full Foils", price: "$110.00+" },
      { kind: "line", title: "Men's Color", price: "$35.00" },
      { kind: "line", title: "Corrective Color", price: "Consultation" },
    ],
  },
];
