'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { tipoLucide } from '@/lib/icones';
import { servicos } from '@/lib/dados/servicos';
import { staggerContainer, fadeInUp } from '@/lib/motion';
import TituloSecao from '@/components/ui/TituloSecao';
import Botao from '@/components/ui/Botao';

export default function ServicosDestaque() {
  const destaques = servicos.slice(0, 6);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <TituloSecao
          titulo="Nossos Serviços"
          descricao="Atuamos em diferentes segmentos da área ambiental para oferecer soluções completas e integradas."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {destaques.map((servico) => {
            const Icone = tipoLucide(servico.icone);
            return (
              <motion.div key={servico.slug} variants={fadeInUp}>
                <Link href={`/servicos/${servico.slug}`}>
                  <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-verde-claro/30 transition-all duration-300">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-verde-claro/10">
                      <Icone className="h-6 w-6 text-verde-claro" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-azul-escuro group-hover:text-verde-claro transition-colors">
                      {servico.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
                      {servico.descricao}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-verde-claro">
                      Ver serviços
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Link href="/servicos">
            <Botao variante="outline" tamanho="grande">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Botao>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
