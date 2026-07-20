import Hero from '@/components/home/Hero';
import Sobre from '@/components/home/Sobre';
import ServicosDestaque from '@/components/home/ServicosDestaque';
import PorQueVerdane from '@/components/home/PorQueVerdane';
import CTA from '@/components/home/CTA';
import FundoParallax from '@/components/home/FundoParallax';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicosDestaque />
      <FundoParallax>
        <Sobre />
        <PorQueVerdane />
      </FundoParallax>
      <CTA />
    </>
  );
}
