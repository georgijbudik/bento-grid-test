import BentoGrid from "./components/bento-grid";
import { gridItems } from "./lib/constants";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans text-zinc-900">
      <main className="flex min-h-screen w-full items-start justify-center">
        <BentoGrid items={gridItems} />
      </main>
    </div>
  );
}
