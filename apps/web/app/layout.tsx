import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Verdane Consultoria Ambiental | Soluções Ambientais Inteligentes',
  description:
    'Consultoria ambiental em todo o Brasil. Licenciamento, gestão de resíduos, estudos ambientais, ESG e educação ambiental. Solicite um orçamento.',
  keywords: [
    'consultoria ambiental',
    'licenciamento ambiental',
    'gestão de resíduos',
    'ESG',
    'sustentabilidade',
    'Verdane',
    'Rio Grande do Sul',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased text-gray-900 bg-white`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
