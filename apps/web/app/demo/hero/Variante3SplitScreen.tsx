'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';

export default function Variante3SplitScreen() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="relative flex items-center justify-center bg-white md:w-1/2 min-h-screen md:min-h-0">
        <div className="relative z-10 mx-auto max-w-lg px-6 py-20 md:py-0 w-full text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl font-extrabold text-azul-escuro md:text-7xl lg:text-8xl leading-none tracking-tight"
          >
            VERDANE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 text-base text-gray-500 md:text-lg leading-relaxed"
          >
            {empresa.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contato">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full bg-verde-claro px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-verde-escuro transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
            <Link href="/servicos">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-7 py-3.5 text-base font-semibold text-gray-500 hover:border-verde-claro hover:text-verde-claro transition-colors"
              >
                Nossos Serviços
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative md:w-1/2 min-h-[50vh] md:min-h-0 flex items-center justify-center bg-gradient-to-br from-verde-claro via-verde-escuro to-[#1a4a2e] overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <svg
            className="w-48 h-48 md:w-64 md:h-64 opacity-30"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M100 10 Q130 5 160 20 Q180 50 175 80 Q170 110 140 130 Q110 150 80 145 Q50 140 30 115 Q10 90 15 55 Q20 20 50 10 Z"
            />
            <path
              fill="white"
              opacity="0.6"
              d="M120 40 Q145 35 165 50 Q180 70 175 95 Q170 120 145 135 Q120 150 95 145 Q70 140 55 120 Q40 100 45 75 Q50 50 75 40 Z"
            />
            <path
              fill="white"
              opacity="0.4"
              d="M70 80 Q90 70 110 80 Q120 100 110 120 Q100 140 80 135 Q60 130 55 110 Q50 90 70 80 Z"
            />
          </svg>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 md:hidden"
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
