'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FundoParallaxProps {
  children: ReactNode;
}

export default function FundoParallax({ children }: FundoParallaxProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-35%', '35%']);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        className="absolute inset-0 h-[200%] -top-[50%] bg-[url('/natureza-3.jfif')] bg-cover bg-center"
        style={{ y: bgY }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
