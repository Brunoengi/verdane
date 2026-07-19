'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';
import TituloSecao from '@/components/ui/TituloSecao';

export default function PorQueVerdane() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-35%', '35%']);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 h-[200%] -top-[50%] bg-[url('/natureza-2.jfif')] bg-cover bg-center"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <TituloSecao
            titulo="Por que escolher a Verdane?"
            descricao="Nossa expertise garante tranquilidade e resultados para o seu negócio."
            className="[&_h2]:text-white [&_p]:text-white/70"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {empresa.diferenciais.map((diferencial) => (
              <div
                key={diferencial.titulo}
                className="flex gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/15 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-verde-claro shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {diferencial.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {diferencial.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
