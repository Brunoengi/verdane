'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { ServicoCategoria } from '@/lib/dados/servicos';
import { tipoLucide } from '@/lib/icones';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import Cartao from '@/components/ui/Cartao';

export default function ServicoDetalhe({
  servico,
}: {
  servico: ServicoCategoria;
}) {
  const Icone = tipoLucide(servico.icone);

  return (
    <>
      <section className="bg-white pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-verde-claro transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Serviços
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-verde-claro/10 mb-6">
              <Icone className="h-8 w-8 text-verde-claro" />
            </div>
            <h1 className="font-heading text-4xl font-extrabold text-azul-escuro md:text-5xl">
              {servico.titulo}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-500">
              {servico.descricao}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl font-bold text-azul-escuro mb-10"
          >
            Serviços nesta categoria
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-30px' }}
            className="grid gap-4"
          >
            {servico.itens.map((item) => (
              <motion.div key={item.nome} variants={fadeInUp}>
                <Cartao hover={true} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-verde-claro shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-azul-escuro">
                      {item.nome}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>
                </Cartao>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
