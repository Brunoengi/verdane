import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';
import { empresa } from '@/lib/dados/empresa';
import { servicos } from '@/lib/dados/servicos';
import { navegacao } from '@/lib/dados/navegacao';

export default function Footer() {
  return (
    <footer className="bg-azul-escuro text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-7 w-7 text-verde-claro" />
              <span className="font-heading text-xl font-bold text-white">
                {empresa.nome}
              </span>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              {empresa.compromisso}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-verde-claro transition-colors"
                  >
                    {item.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-verde-claro mt-0.5 shrink-0" />
                <a
                  href={`mailto:${empresa.email}`}
                  className="text-sm text-gray-300 hover:text-verde-claro transition-colors"
                >
                  {empresa.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-verde-claro mt-0.5 shrink-0" />
                <a
                  href={`tel:+55${empresa.whatsapp}`}
                  className="text-sm text-gray-300 hover:text-verde-claro transition-colors"
                >
                  {empresa.telefone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-verde-claro mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">{empresa.endereco}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} {empresa.nomeCompleto}. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {servicos.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicos/${s.slug}`}
                  className="hover:text-verde-claro transition-colors"
                >
                  {s.titulo}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
