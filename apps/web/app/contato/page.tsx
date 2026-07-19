'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { empresa } from '@/lib/dados/empresa';

export default function ContatoPage() {
  return (
    <>
      <section className="bg-white pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-extrabold text-azul-escuro md:text-5xl"
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-gray-500"
          >
            Solicite um orçamento ou fale com um de nossos consultores.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-6"
            >
              <h2 className="font-heading text-2xl font-bold text-azul-escuro">
                Informações de Contato
              </h2>

              <div className="space-y-4">
                <a
                  href={`mailto:${empresa.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-verde-claro/5 transition-colors group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-verde-claro/10">
                    <Mail className="h-5 w-5 text-verde-claro" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">E-mail</p>
                    <p className="text-sm font-medium text-azul-escuro group-hover:text-verde-claro transition-colors">
                      {empresa.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-verde-claro/10">
                    <MapPin className="h-5 w-5 text-verde-claro" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Localização</p>
                    <p className="text-sm font-medium text-azul-escuro">
                      {empresa.endereco}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-azul-escuro mb-6">
                  Como prefere falar com a gente?
                </h3>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${empresa.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#22c35e] transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                  <a
                    href={`mailto:${empresa.email}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-verde-claro bg-verde-claro px-6 py-3 text-sm font-semibold text-white hover:bg-verde-escuro transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    Enviar E-mail
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
