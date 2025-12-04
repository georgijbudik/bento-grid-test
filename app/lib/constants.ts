import { BentoGridItem, GridStyle } from "./types";

export const gridItems: BentoGridItem[] = [
  {
    title: "Powerful Filters",
    description:
      "Combine commute times, budget, and lifestyle tags to surface the homes that really match.",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 1960,
    halfSize: false,
    eyebrow: "Search",
  },
  {
    title: "Area Score & Renting Odds",
    description:
      "Neighborhood data and confidence scores to help you decide faster.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
    width: 1800,
    height: 1200,
    halfSize: true,
    eyebrow: "Insights",
  },
  {
    title: "Utility Calculator",
    description:
      "Estimate monthly costs for gas, water, electricity, and more in one tap.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    width: 1400,
    height: 933,
    halfSize: false,
    eyebrow: "Planning",
  },
  {
    title: "Anywhere In The Netherlands",
    description:
      "Tap into our partner network of localized advisors and relocation experts.",
    image:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1500&q=80",
    width: 1500,
    height: 1000,
    halfSize: true,
    eyebrow: "Network",
  },
  {
    title: "Secure Applications",
    description:
      "Share documents with owners securely and track every signature.",
    image:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
    width: 1200,
    height: 1800,
    halfSize: false,
    eyebrow: "Workflow",
  },
];

export const gridStyle: GridStyle = {
  "--tile-gap": "1.35rem",
  "--tile-base": "clamp(9.5rem, 62vw, 13.5rem)",
  "--tile-base-sm": "clamp(11.5rem, 28vw, 16.5rem)",
  "--tile-base-lg": "clamp(15rem, 18vw, 21rem)",
};

export const objectFitMap = {
  center: "center",
  top: "top",
} as const;
