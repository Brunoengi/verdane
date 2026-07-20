'use client';

import { motion } from 'framer-motion';
import { Leaf, Target } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';
import { fadeInUp, staggerContainer } from '@/lib/motion';
import TituloSecao from '@/components/ui/TituloSecao';

export default function Sobre() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <TituloSecao
          titulo="Sobre a Verdane"
          descricao={empresa.descricao}
          className="[&_h2]:text-white [&_p]:text-white/70"
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
            className="flex gap-5 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/20">
              <Leaf className="h-7 w-7 text-verde-claro" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">
                Nossa Missão
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                Oferecer soluções ambientais inteligentes, com excelência técnica e compromisso com a sustentabilidade, promovendo o equilíbrio entre desenvolvimento e meio ambiente.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-5 p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/20">
              <Target className="h-7 w-7 text-verde-claro" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-white">
                Nosso Compromisso
              </h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                {empresa.compromisso}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
