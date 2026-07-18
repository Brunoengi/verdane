import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DemoPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading text-3xl font-bold text-azul-escuro text-center">
          Demo de Componentes
        </h1>
        <p className="mt-3 text-gray-500 text-center">
          Selecione um componente para visualizar as variantes.
        </p>

        <div className="mt-10 grid gap-4">
          <Link
            href="/demo/hero"
            className="flex items-center justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-verde-claro/30 transition-all group"
          >
            <div>
              <h2 className="font-heading text-lg font-semibold text-azul-escuro">
                Hero Section
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                3 variantes: Corporate Bold, Nature First, Split Screen
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-verde-claro group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
