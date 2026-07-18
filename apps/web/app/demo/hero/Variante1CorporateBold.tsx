'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';

export default function Variante1CorporateBold() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-azul-escuro overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6 w-full">
        <motion.h1
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-heading text-6xl font-extrabold text-white md:text-8xl lg:text-9xl leading-none tracking-tight"
        >
          VERDANE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-xl text-base text-white/60 md:text-xl leading-relaxed"
        >
          {empresa.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/contato">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-verde-claro px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-verde-escuro transition-colors"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
          <Link href="/servicos">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-azul-escuro transition-colors"
            >
              Nossos Serviços
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
