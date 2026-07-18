'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navegacao } from '@/lib/dados/navegacao';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { scrollY } = useScroll();

  const headerShadow = useTransform(
    scrollY,
    [0, 80],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 2px 16px rgba(0,0,0,0.06)']
  );
  const logoScale = useTransform(scrollY, [0, 80], [1.5, 0.6]);

  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']
  );

  const logoComTextoOpacity = useTransform(scrollY, [0, 60], [1, 0]);
  const logoSemTextoOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full overflow-hidden transition-[height] duration-300 ${scrolled ? 'h-20' : 'h-[200px]'}`}
      style={{ backgroundColor, boxShadow: headerShadow }}
    >
      <motion.div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 h-full transition-all duration-300 ${scrolled ? 'py-1' : 'py-5'}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            style={{ scale: logoScale, originX: 0, originY: 0.5 }}
            className="relative flex items-center"
          >
            <motion.div
              className={`invisible shrink-0 transition-[width,height] duration-300 ${scrolled ? 'w-12 h-12' : 'w-40 h-40'}`}
            />
            <motion.div
              style={{ opacity: logoComTextoOpacity }}
              className="absolute inset-0 flex items-center"
            >
              <Image
                src="/logo-comtexto-sembg-linhabranca.png"
                alt="Verdane"
                width={500}
                height={500}
                className="h-auto w-40 md:w-44"
                quality={100}
                priority
              />
            </motion.div>
            <motion.div
              style={{ opacity: logoSemTextoOpacity }}
              className="absolute inset-0 flex items-center"
            >
              <Image
                src="/logo-semtexto-sembg.png"
                alt="Verdane"
                width={392}
                height={451}
                className="h-auto w-12 md:w-14"
                quality={100}
                priority
              />
            </motion.div>
          </motion.div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navegacao.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                scrolled
                  ? pathname === item.href
                    ? 'text-verde-claro'
                    : 'text-gray-600 hover:text-verde-claro'
                  : 'text-white hover:text-verde-claro'
              }`}
            >
              {item.nome}
              {pathname === item.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-verde-claro"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <motion.div className="flex items-center gap-3" style={{ scale: logoScale }}>
          <Link href="/contato">
            <span className="inline-flex items-center justify-center rounded-full font-semibold px-5 py-2 text-sm border-2 border-verde-claro text-verde-claro hover:bg-verde-claro hover:text-white transition-colors cursor-pointer">
              Solicitar Orçamento
            </span>
          </Link>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-azul-escuro" />
            ) : (
              <Menu className="h-6 w-6 text-azul-escuro" />
            )}
          </button>
        </motion.div>
      </motion.div>

      <MobileMenu
        aberto={mobileOpen}
        onFechar={() => setMobileOpen(false)}
        navegacao={navegacao}
        pathname={pathname}
      />
    </motion.header>
  );
}
