import HeroRotated from './HeroRotated';
import Sobre from '@/components/home/Sobre';
import ServicosDestaque from '@/components/home/ServicosDestaque';
import PorQueVerdane from '@/components/home/PorQueVerdane';
import CTA from '@/components/home/CTA';

export default function HeroRotatedDemoPage() {
  return (
    <>
      <HeroRotated />
      <ServicosDestaque />
      <Sobre />
      <PorQueVerdane />
      <CTA />
    </>
  );
}
