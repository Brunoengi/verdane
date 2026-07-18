'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavegacaoItem {
  nome: string;
  href: string;
}

interface MobileMenuProps {
  aberto: boolean;
  onFechar: () => void;
  navegacao: NavegacaoItem[];
  pathname: string;
}

export default function MobileMenu({
  aberto,
  onFechar,
  navegacao,
  pathname,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden bg-white shadow-lg md:hidden"
        >
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navegacao.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={onFechar}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-verde-claro/10 text-verde-escuro'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-verde-claro'
                  }`}
                >
                  {item.nome}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navegacao.length * 0.05 }}
            >
              <Link
                href="/contato"
                onClick={onFechar}
                className="block mt-2 px-4 py-3 rounded-full text-center font-semibold bg-verde-claro text-white hover:bg-verde-escuro transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
