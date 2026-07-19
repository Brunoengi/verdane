'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';

const IMAGEM_FUNDO = '/natureza-3.jfif';

const TEXTOS = [
  <>
    Nosso compromisso é{' '}
    <span className="text-verde-claro">proteger o meio ambiente</span>.
    <br />O <span className="text-verde-claro">
    crescimento sustentável do seu negócio</span> começa aqui.
  </>,
  <>
    Atendemos em <span className="text-verde-claro">todo o Brasil</span>,
    <br />com sede no{' '}
    <span className="text-verde-claro whitespace-nowrap">Rio Grande do Sul</span>.
  </>,
];

export default function HeroRotated() {
  const [textoIndice, setTextoIndice] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const agendar = () => {
      const intervalo = textoIndice === 0 ? 4000 : 6000;
      timeoutRef.current = setTimeout(() => {
        setTextoIndice((prev) => (prev + 1) % TEXTOS.length);
      }, intervalo);
    };

    agendar();

    return () => clearTimeout(timeoutRef.current);
  }, [textoIndice]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bg-cover bg-center origin-center"
          style={{
            backgroundImage: `url(${IMAGEM_FUNDO})`,
            width: '100vh',
            height: '100vw',
            top: 'calc(50% - 50vw)',
            left: 'calc(50% - 50vh)',
            transform: 'rotate(90deg)',
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-0">
        <div className="flex flex-1 flex-col justify-center text-center md:text-left">
          <div className="flex w-fit flex-col mx-auto md:mx-0">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading text-5xl font-extrabold text-white md:text-7xl lg:text-8xl leading-none tracking-tight"
            >
              VERDANE
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 self-end rounded-full bg-verde-claro/20 px-6 py-3 text-lg font-semibold text-white mt-6"
            >
              Consultoria Ambiental
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="mt-6 max-w-md text-base text-white md:text-lg leading-relaxed mx-auto md:mx-0"
          >
            {empresa.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center"
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
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-azul-escuro transition-colors"
              >
                Nossos Serviços
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col justify-center text-center md:text-left mt-12 md:mt-0 md:pl-8">
          <AnimatePresence mode="wait">
            <motion.p
              key={textoIndice}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight"
            >
              {TEXTOS[textoIndice]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </div>
      </motion.div>
    </section>
  );
}
