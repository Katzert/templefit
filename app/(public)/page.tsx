'use client';

import { motion } from 'framer-motion';

import HeroSection from '../../components/home/HeroSection';
import EcosystemSection from '../../components/home/EcosystemSection';
import RuleSection from '../../components/home/RuleSection';
import DiagnosticWidget from '../../components/home/DiagnosticWidget';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="font-sans relative">
      


      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <EcosystemSection />
        <RuleSection />
        <DiagnosticWidget />
      </main>

    </motion.div>
  );
}

