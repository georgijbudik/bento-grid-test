import { CSSProperties } from "react";

export type BentoGridItem = {
  title: string;
  description: string;
  image: string;
  halfSize?: boolean;
  width?: number;
  height?: number;
  eyebrow?: string;
};

export type GridStyle = CSSProperties & {
  "--tile-gap": string;
  "--tile-base": string;
  "--tile-base-sm": string;
  "--tile-base-lg": string;
};

export type PositionedBentoItem = {
  item: BentoGridItem;
  columnStart: number;
  rowStart: number;
  rowSpan: number;
};
