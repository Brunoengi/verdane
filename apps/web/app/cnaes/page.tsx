'use client';

import { motion } from 'framer-motion';
import { cnaes } from '@/lib/dados/cnaes';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import TituloSecao from '@/components/ui/TituloSecao';

const legenda = {
  CRBio: { label: 'CRBio', cor: 'bg-azul-claro/10 text-azul-escuro border-azul-claro/30' },
  CREA: { label: 'CREA', cor: 'bg-azul-escuro/10 text-azul-escuro border-azul-escuro/30' },
  'CRBio e CREA': { label: 'CRBio + CREA', cor: 'bg-verde-claro/10 text-verde-escuro border-verde-claro/30' },
  Nenhum: { label: 'Sem conselho', cor: 'bg-gray-100 text-gray-500 border-gray-200' },
};

export default function CNAEsPage() {
  return (
    <>
      <section className="bg-white pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-extrabold text-azul-escuro md:text-5xl"
          >
            CNAEs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-500"
          >
            Classificação Nacional de Atividades Econômicas da Verdane Consultoria Ambiental.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <TituloSecao
            titulo="Atividades Registradas"
            descricao="Cada CNAE está vinculado ao conselho profissional correspondente (CRBio ou CREA)."
          />

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(legenda).map(([key, val]) => (
              <span
                key={key}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${val.cor}`}
              >
                {val.label}
              </span>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-3"
          >
            {cnaes.map((cnae) => (
              <motion.div
                key={cnae.codigo}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-5 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow"
              >
                <span className="font-mono text-sm font-bold text-azul-escuro bg-azul-claro/10 px-3 py-1 rounded-lg shrink-0">
                  {cnae.codigo}
                </span>
                <p className="text-sm text-gray-600 flex-1">
                  {cnae.descricao}
                </p>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full border shrink-0 ${legenda[cnae.registro].cor}`}
                >
                  {legenda[cnae.registro].label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
