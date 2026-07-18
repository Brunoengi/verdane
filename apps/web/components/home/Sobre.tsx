'use client';

import { motion } from 'framer-motion';
import { Leaf, Target } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import TituloSecao from '@/components/ui/TituloSecao';

export default function Sobre() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <TituloSecao
          titulo="Sobre a Verdane"
          descricao={empresa.descricao}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-14 grid gap-10 md:grid-cols-2"
        >
          <motion.div
            variants={fadeInUp}
            className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
              <Leaf className="h-7 w-7 text-verde-claro" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                Nossa Missão
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Oferecer soluções ambientais inteligentes, com excelência técnica e compromisso com a sustentabilidade, promovendo o equilíbrio entre desenvolvimento e meio ambiente.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
              <Target className="h-7 w-7 text-verde-claro" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                Nosso Compromisso
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {empresa.compromisso}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
