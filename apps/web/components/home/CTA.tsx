'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';
import Botao from '@/components/ui/Botao';

export default function CTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold text-azul-escuro md:text-5xl leading-tight">
            Pronto para regularizar seu negócio?
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            Fale com um de nossos consultores e descubra a solução ambiental ideal para sua empresa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/contato">
            <Botao variante="primario" tamanho="grande">
              Falar com Consultor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Botao>
          </Link>
          <a href={`mailto:${empresa.email}`}>
            <Botao variante="outline" tamanho="grande">
              <Mail className="mr-2 h-5 w-5" />
              {empresa.email}
            </Botao>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
