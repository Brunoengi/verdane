'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';

export default function Variante2NatureFirst() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="folhas" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M100 20 Q120 5 140 20 Q120 35 100 20Z" fill="#6fb030" />
              <path d="M60 50 Q80 35 100 50 Q80 65 60 50Z" fill="#6fb030" />
              <path d="M20 80 Q40 65 60 80 Q40 95 20 80Z" fill="#68c9e9" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#folhas)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-flex mb-6"
            animate={{ rotate: [0, 8, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Leaf className="h-16 w-16 md:h-20 md:w-20 text-verde-claro" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="font-heading text-6xl font-extrabold text-azul-escuro md:text-8xl lg:text-9xl leading-none tracking-tight">
            VERDANE
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-xl text-base text-gray-500 md:text-xl leading-relaxed"
        >
          {empresa.slogan}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: 'easeOut' }}
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
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-500 hover:border-verde-claro hover:text-verde-claro transition-colors"
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
        <div className="h-10 w-6 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-gray-400" />
        </div>
      </motion.div>
    </section>
  );
}
