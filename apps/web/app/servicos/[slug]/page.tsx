import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicos } from '@/lib/dados/servicos';
import ServicoDetalhe from './ServicoDetalhe';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const servico = servicos.find((s) => s.slug === params.slug);
  if (!servico) return { title: 'Serviço não encontrado' };
  return {
    title: `${servico.titulo} | Verdane Consultoria Ambiental`,
    description: servico.descricao,
  };
}

export default function ServicoPage({ params }: Props) {
  const servico = servicos.find((s) => s.slug === params.slug);
  if (!servico) notFound();
  return <ServicoDetalhe servico={servico} />;
}
