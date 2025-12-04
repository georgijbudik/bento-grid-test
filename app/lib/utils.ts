import { objectFitMap } from "./constants";
import { BentoGridItem, PositionedBentoItem } from "./types";

export const getImageBehavior = (
  item: BentoGridItem
): { fit: "cover" | "contain"; position: keyof typeof objectFitMap } => {
  if (!item.width || !item.height) {
    return { fit: "cover", position: "center" };
  }

  const ratio = item.width / item.height;
  const isLandscape = ratio > 1.15;
  const isPortrait = ratio < 0.85;

  if (!item.halfSize && isLandscape) {
    return { fit: "contain", position: "center" };
  }

  if (item.halfSize && isPortrait) {
    return { fit: "cover", position: "top" };
  }

  return { fit: "cover", position: "center" };
};

const getOpenColumn = (heights: number[], locked: boolean[]) => {
  let minIndex = 0;
  let minHeight = Number.POSITIVE_INFINITY;

  heights.forEach((height, index) => {
    if (locked[index]) {
      return;
    }

    if (height < minHeight) {
      minHeight = height;
      minIndex = index;
    }
  });

  return minIndex;
};

export const calculateGridPlacements = (
  items: BentoGridItem[],
  columns = 4
): PositionedBentoItem[] => {
  const heights = Array(columns).fill(0);
  const locked = Array(columns).fill(false);

  return items.map((item) => {
    const isHalf = Boolean(item.halfSize);
    if (isHalf) {
      const waitingColumn = locked.findIndex(Boolean);
      if (waitingColumn !== -1) {
        const rowStart = heights[waitingColumn];
        heights[waitingColumn] += 1;
        locked[waitingColumn] = false;

        return {
          item,
          columnStart: waitingColumn + 1,
          rowStart: rowStart + 1,
          rowSpan: 1,
        };
      }

      const columnIndex = getOpenColumn(heights, locked);
      const rowStart = heights[columnIndex];
      heights[columnIndex] += 1;
      locked[columnIndex] = true;

      return {
        item,
        columnStart: columnIndex + 1,
        rowStart: rowStart + 1,
        rowSpan: 1,
      };
    }

    const columnIndex = getOpenColumn(heights, locked);
    const rowStart = heights[columnIndex];
    heights[columnIndex] += 2;

    return {
      item,
      columnStart: columnIndex + 1,
      rowStart: rowStart + 1,
      rowSpan: 2,
    };
  });
};
