import { gridStyle } from "../lib/constants";
import { BentoGridItem } from "../lib/types";
import { calculateGridPlacements } from "../lib/utils";
import BentoTile from "./bento-tile";

type BentoGridProps = {
  items: BentoGridItem[];
};

export default function BentoGrid({ items }: BentoGridProps) {
  const placements = calculateGridPlacements(items);

  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <header className="space-y-3 text-center text-balance">
          <h1 className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">
            Bento Grid
          </h1>
        </header>

        <div className="overflow-x-auto pb-6">
          <div
            className="grid w-max min-w-[1080px] auto-rows-(--tile-base) grid-flow-row grid-cols-[repeat(4,minmax(260px,1fr))] gap-(--tile-gap) md:auto-rows-(--tile-base-sm) lg:w-full lg:min-w-0 lg:grid-cols-4 lg:auto-rows-(--tile-base-lg)"
            style={gridStyle}
          >
            {placements.map(({ item, columnStart, rowStart, rowSpan }, index) => (
              <BentoTile
                key={`${item.title}-${item.image}-${index}`}
                item={item}
                position={{ columnStart, rowStart, rowSpan }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
