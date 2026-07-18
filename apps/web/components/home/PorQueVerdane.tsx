'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import TituloSecao from '@/components/ui/TituloSecao';

export default function PorQueVerdane() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <TituloSecao
          titulo="Por que escolher a Verdane?"
          descricao="Nossa expertise garante tranquilidade e resultados para o seu negócio."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {empresa.diferenciais.map((diferencial) => (
            <motion.div
              key={diferencial.titulo}
              variants={fadeInUp}
              className="flex gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-verde-claro/20 transition-all duration-300"
            >
              <CheckCircle className="h-6 w-6 text-verde-claro shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading text-lg font-semibold text-azul-escuro">
                  {diferencial.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {diferencial.descricao}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
