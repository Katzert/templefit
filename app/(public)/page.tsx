import dynamic from 'next/dynamic';
import HeroSection from '../../components/home/HeroSection';
import EcosystemSection from '../../components/home/EcosystemSection';
import OffersSection from '../../components/home/OffersSection';
import RuleSection from '../../components/home/RuleSection';
import HashScrollHandler from '../../components/home/HashScrollHandler';

const DiagnosticWidget = dynamic(() => import('../../components/home/DiagnosticWidget'), {
  ssr: true
});

export default function Home() {
  return (
    <div className="font-sans relative">
      <HashScrollHandler />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <EcosystemSection />
        <OffersSection />
        <RuleSection />
        <DiagnosticWidget />
      </div>
    </div>
  );
}
