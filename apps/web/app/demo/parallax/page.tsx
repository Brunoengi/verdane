'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Leaf, Target, CheckCircle } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';

function Variante1BackgroundParallax() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-35%', '35%']);

  return (
    <>
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-azul-escuro md:text-4xl">
              Sobre a Verdane
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-verde-claro mx-auto" />
            <p className="mt-4 text-lg text-gray-600">
              {empresa.descricao}
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
                <Leaf className="h-7 w-7 text-verde-claro" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                  Nossa Missão
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Oferecer soluções ambientais inteligentes, com excelência
                  técnica e compromisso com a sustentabilidade.
                </p>
              </div>
            </div>

            <div className="flex gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
                <Target className="h-7 w-7 text-verde-claro" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                  Nosso Compromisso
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {empresa.compromisso}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 h-[200%] -top-[50%] bg-[url('/natureza-2.jfif')] bg-cover bg-center"
          style={{ y: bgY }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 py-32 md:py-40">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                Por que escolher a Verdane?
              </h2>
              <div className="mt-3 h-1 w-20 rounded-full bg-verde-claro mx-auto" />
              <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
                Nossa expertise garante tranquilidade e resultados para o seu
                negócio.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {empresa.diferenciais.map((d) => (
                <div
                  key={d.titulo}
                  className="flex gap-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/15 transition-colors"
                >
                  <CheckCircle className="h-6 w-6 text-verde-claro shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {d.titulo}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
                      {d.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Variante2RevelacaoEscala() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <section ref={ref}>
      <motion.div
        style={{ scale, opacity }}
        className="rounded-3xl bg-gradient-to-br from-verde-claro/5 to-azul-claro/5 border border-verde-claro/10 mx-auto max-w-5xl my-20"
      >
        <div className="p-10 md:p-16">
          <h2 className="font-heading text-3xl font-bold text-azul-escuro text-center md:text-4xl">
            Sobre a Verdane
          </h2>
          <p className="mt-4 text-center text-gray-500 max-w-2xl mx-auto">
            {empresa.descricao}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
                <Leaf className="h-7 w-7 text-verde-claro" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                  Nossa Missão
                </h3>
                <p className="mt-3 text-gray-600">
                  Oferecer soluções ambientais inteligentes, com excelência
                  técnica e compromisso com a sustentabilidade.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
                <Target className="h-7 w-7 text-verde-claro" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                  Nosso Compromisso
                </h3>
                <p className="mt-3 text-gray-600">{empresa.compromisso}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-verde-claro/10 p-10 md:p-16">
          <h2 className="font-heading text-3xl font-bold text-azul-escuro text-center md:text-4xl">
            Por que escolher a Verdane?
          </h2>
          <p className="mt-3 text-center text-gray-500">
            Nossa expertise garante tranquilidade e resultados para o seu
            negócio.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {empresa.diferenciais.map((d) => (
              <div
                key={d.titulo}
                className="rounded-xl bg-white p-5 shadow-sm border border-gray-100"
              >
                <h3 className="font-heading font-semibold text-azul-escuro">
                  {d.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{d.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Variante3CardsDeslocados() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const sobreTituloY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);
  const sobreTituloOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const sobreLeft = useTransform(scrollYProgress, [0, 0.2], ['-10%', '0%']);
  const sobreRight = useTransform(scrollYProgress, [0, 0.2], ['10%', '0%']);

  const porqueTituloY = useTransform(scrollYProgress, [0.35, 0.5], [40, 0]);
  const porqueTituloOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const porqueLeft = useTransform(scrollYProgress, [0.4, 0.6], ['-10%', '0%']);
  const porqueCenter = useTransform(scrollYProgress, [0.4, 0.6], ['15%', '0%']);
  const porqueRight = useTransform(scrollYProgress, [0.4, 0.6], ['10%', '0%']);

  return (
    <section ref={ref} className="overflow-hidden bg-gray-50 py-20">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div style={{ opacity: sobreTituloOpacity, y: sobreTituloY }}>
          <h2 className="font-heading text-3xl font-bold text-azul-escuro text-center md:text-4xl">
            Sobre a Verdane
          </h2>
          <p className="mt-3 text-center text-gray-500">{empresa.descricao}</p>
        </motion.div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <motion.div
            style={{ x: sobreLeft }}
            className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
              <Leaf className="h-7 w-7 text-verde-claro" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                Nossa Missão
              </h3>
              <p className="mt-3 text-gray-600">
                Oferecer soluções ambientais inteligentes, com excelência
                técnica e compromisso com a sustentabilidade.
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ x: sobreRight }}
            className="flex gap-5 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-verde-claro/10">
              <Target className="h-7 w-7 text-verde-claro" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-azul-escuro">
                Nosso Compromisso
              </h3>
              <p className="mt-3 text-gray-600">{empresa.compromisso}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: porqueTituloOpacity, y: porqueTituloY }}
          className="mt-20"
        >
          <h2 className="font-heading text-3xl font-bold text-azul-escuro text-center md:text-4xl">
            Por que escolher a Verdane?
          </h2>
          <p className="mt-3 text-center text-gray-500">
            Nossa expertise garante tranquilidade e resultados para o seu
            negócio.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {empresa.diferenciais.slice(0, 3).map((d, i) => {
            const xTransform =
              i === 0 ? porqueLeft : i === 2 ? porqueRight : 0;
            const yTransform = i === 1 ? porqueCenter : 0;
            return (
              <motion.div
                key={d.titulo}
                style={{ x: xTransform, y: yTransform }}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
              >
                <CheckCircle className="h-6 w-6 text-verde-claro mb-3" />
                <h3 className="font-heading font-semibold text-azul-escuro">
                  {d.titulo}
                </h3>
                <p className="mt-2 text-sm text-gray-500">{d.descricao}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Variante4StickyParallax() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const sobreOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const sobreY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const porqueOpacity = useTransform(scrollYProgress, [0.5, 0.9], [0, 1]);
  const porqueY = useTransform(scrollYProgress, [0.5, 0.9], [60, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.6, 1], [0.4, 0]);

  return (
    <section ref={ref} className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://greenviewgv.com.br/wp-content/uploads/2023/08/greenview-engenharia-e-consultoria-ambiental-bg-03.jpg')] bg-cover bg-center"
          style={{ scale: bgScale }}
        />
        <motion.div
          className="absolute inset-0 bg-black/50"
          style={{ opacity: bgOpacity }}
        />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white"
          style={{ opacity: sobreOpacity, y: sobreY }}
        >
          <h2 className="font-heading text-4xl font-bold md:text-6xl">
            Sobre a Verdane
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            {empresa.descricao}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm text-left">
              <Leaf className="h-7 w-7 text-verde-claro mb-3" />
              <h3 className="text-xl font-semibold">Nossa Missão</h3>
              <p className="mt-2 text-white/70">
                Oferecer soluções ambientais inteligentes, com excelência
                técnica e compromisso com a sustentabilidade.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm text-left">
              <Target className="h-7 w-7 text-verde-claro mb-3" />
              <h3 className="text-xl font-semibold">Nosso Compromisso</h3>
              <p className="mt-2 text-white/70">{empresa.compromisso}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute z-10 mx-auto max-w-4xl px-4 text-center"
          style={{ opacity: porqueOpacity, y: porqueY }}
        >
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Por que escolher a Verdane?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Nossa expertise garante tranquilidade e resultados para o seu
            negócio.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {empresa.diferenciais.slice(0, 3).map((d) => (
              <div
                key={d.titulo}
                className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm text-left"
              >
                <CheckCircle className="h-5 w-5 text-verde-claro mb-2" />
                <h3 className="font-heading font-semibold text-white">
                  {d.titulo}
                </h3>
                <p className="mt-2 text-sm text-white/70">{d.descricao}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function ParallaxDemoPage() {
  return (
    <>
      <div className="bg-white pt-32 pb-6">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-verde-claro transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Demo
          </Link>
          <h1 className="font-heading text-3xl font-bold text-azul-escuro">
            Demo de Parallax Scrolling
          </h1>
          <p className="mt-2 text-gray-500">
            4 variantes. Cada uma é um container único com o efeito parallax
            envolvendo as duas seções: Sobre a Verdane + Por que escolher a
            Verdane.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-azul-escuro mb-2">
            Variante 1 — Parallax no Por que escolher a Verdane
          </h2>
          <p className="text-gray-500">
            Sobre a Verdane com fundo branco original. Por que escolher a
            Verdane com parallax + imagem do Hero.
          </p>
        </div>
      </section>

      <Variante1BackgroundParallax />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-azul-escuro mb-2">
            Variante 2 — Container único com revelação e escala
          </h2>
          <p className="text-gray-500">
            Ambas as seções dentro de um card com gradiente que expande de 92%
            para 100%.
          </p>
        </div>
      </section>

      <Variante2RevelacaoEscala />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-azul-escuro mb-2">
            Variante 3 — Cards com deslocamentos progressivos
          </h2>
          <p className="text-gray-500">
            Dentro de um container com scroll unificado, títulos e cards
            deslizam em momentos diferentes do scroll.
          </p>
        </div>
      </section>

      <Variante3CardsDeslocados />

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-azul-escuro mb-2">
            Variante 4 — Sticky com transição entre as seções
          </h2>
          <p className="text-gray-500">
            Seção fixa com fundo em zoom. Sobre some enquanto Por que aparece
            no mesmo espaço, com transição suave.
          </p>
        </div>
      </section>

      <Variante4StickyParallax />

      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-gray-400">Fim da demo de parallax.</p>
        </div>
      </div>
    </>
  );
}
