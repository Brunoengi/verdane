'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { servicos } from '@/lib/dados/servicos';
import { tipoLucide } from '@/lib/icones';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import Cartao from '@/components/ui/Cartao';

export default function ServicosPage() {
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
            Nossos Serviços
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-500"
          >
            Atuamos em diferentes segmentos da área ambiental em todo território nacional, com soluções completas e integradas para o seu negócio.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {servicos.map((servico) => {
              const Icone = tipoLucide(servico.icone);
              return (
                <motion.div key={servico.slug} variants={fadeInUp}>
                  <Link href={`/servicos/${servico.slug}`}>
                    <Cartao className="h-full group cursor-pointer">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-verde-claro/10 group-hover:bg-verde-claro/20 transition-colors">
                        <Icone className="h-7 w-7 text-verde-claro" />
                      </div>
                      <h3 className="mt-4 font-heading text-lg font-semibold text-azul-escuro group-hover:text-verde-claro transition-colors">
                        {servico.titulo}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {servico.descricao}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium text-gray-400">
                        {servico.itens.length} serviços
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-verde-claro">
                        Saiba mais
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Cartao>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
