'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TituloSecaoProps {
  titulo: string;
  descricao?: string;
  className?: string;
  centro?: boolean;
}

export default function TituloSecao({
  titulo,
  descricao,
  className,
  centro = true,
}: TituloSecaoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', centro && 'text-center', className)}
    >
      <h2 className="font-heading text-3xl font-bold text-azul-escuro md:text-4xl">
        {titulo}
      </h2>
      <div
        className={cn(
          'mt-3 h-1 w-20 rounded-full bg-verde-claro',
          centro && 'mx-auto'
        )}
      />
      {descricao && (
        <p className="mt-4 max-w-2xl text-lg text-gray-600 text-balance">
          {descricao}
        </p>
      )}
    </motion.div>
  );
}
