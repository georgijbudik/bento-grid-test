import Image from "next/image";
import { BentoGridItem, PositionedBentoItem } from "../lib/types";
import { getImageBehavior } from "../lib/utils";
import { objectFitMap } from "../lib/constants";

type BentoTileProps = {
  item: BentoGridItem;
  position?: Pick<PositionedBentoItem, "columnStart" | "rowStart" | "rowSpan">;
};

export default function BentoTile({ item, position }: BentoTileProps) {
  const { fit, position: imagePosition } = getImageBehavior(item);
  const spanClass = item.halfSize ? "row-span-1" : "row-span-2";

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-zinc-200/70 bg-white/90 p-5 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${spanClass}`}
      style={
        position
          ? {
              gridColumnStart: position.columnStart,
              gridRowStart: position.rowStart,
              gridRowEnd: `span ${position.rowSpan}`,
            }
          : undefined
      }
    >
      <div className="flex flex-col gap-1 text-left text-balance">
        {item.eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
            {item.eyebrow}
          </p>
        ) : null}
        <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
        <p className="text-sm text-zinc-500">{item.description}</p>
      </div>

      <div className="relative mt-6 flex min-h-0 flex-1">
        <div className="relative isolate h-full w-full overflow-hidden rounded-2xl border border-zinc-100 bg-linear-to-br from-zinc-100 via-zinc-50 to-white">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px"
            className="h-full w-full transition duration-500 ease-out will-change-transform group-hover:scale-[1.02]"
            style={{ objectFit: fit, objectPosition: objectFitMap[imagePosition] }}
            priority={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-60" />
        </div>
      </div>
    </article>
  );
}
