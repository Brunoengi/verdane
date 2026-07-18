import Variante1CorporateBold from './Variante1CorporateBold';
import Variante2NatureFirst from './Variante2NatureFirst';
import Variante3SplitScreen from './Variante3SplitScreen';

export default function DemoHeroPage() {
  return (
    <>
      <section className="relative min-h-screen">
        <div className="absolute top-20 left-4 z-40 pointer-events-none">
          <span className="bg-gray-100 border border-gray-200 text-gray-500 text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
            Variante 1 — Corporate Bold
          </span>
        </div>
        <Variante1CorporateBold />
      </section>

      <div className="h-px bg-gray-200" />

      <section className="relative min-h-screen">
        <div className="absolute top-20 left-4 z-40 pointer-events-none">
          <span className="bg-gray-100 border border-gray-200 text-gray-500 text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
            Variante 2 — Nature First
          </span>
        </div>
        <Variante2NatureFirst />
      </section>

      <div className="h-px bg-gray-200" />

      <section className="relative min-h-screen">
        <div className="absolute top-20 left-4 z-40 pointer-events-none">
          <span className="bg-gray-100 border border-gray-200 text-gray-500 text-[10px] font-semibold px-3 py-1 rounded-full tracking-wide uppercase">
            Variante 3 — Split Screen
          </span>
        </div>
        <Variante3SplitScreen />
      </section>
    </>
  );
}
