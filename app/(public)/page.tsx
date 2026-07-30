'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Shield, Users, ArrowRight, Brain, Target, CheckCircle, Sparkles, ChevronRight, Award, Dumbbell, Heart, BookOpen, ExternalLink, Star } from 'lucide-react';
import { db } from '../../lib/firebase';
import Link from 'next/link';

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Home() {
  const [goal, setGoal] = useState<'fuerza' | 'habitos' | 'liderazgo'>('fuerza');
  const [assessmentResult, setAssessmentResult] = useState<string | null>(null);

  const calculatePlan = () => {
    let msg = '';
    if (goal === 'fuerza') {
      msg = 'Hola Paulo! Acabo de hacer la evaluación en la web y me recomendó el Plan: Entrenamiento de Fuerza + Nutrición Real. Quiero empezar.';
    } else if (goal === 'habitos') {
      msg = 'Hola Paulo! Acabo de hacer la evaluación en la web y me recomendó el Plan: Reto 21 Días + Sábados CristoFit Camp. Quiero empezar.';
    } else {
      msg = 'Hola Paulo! Acabo de hacer la evaluación en la web y me recomendó el Plan: Mentoría de Hábitos y Liderazgo. Quiero empezar.';
    }
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(msg)}`, '_blank');
    setAssessmentResult('¡Redirigiendo a WhatsApp para comenzar tu plan...');
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-24 pb-20 font-sans">
      
      {/* Top Banner: Portal Instructores Link */}
      <div className="bg-gradient-to-r from-temple-navy-dark via-temple-gold/20 to-temple-navy-dark border-b border-white/10 py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <span>Centro Integral de Fuerza y Mentalidad • Santa Cruz</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale-[30%]"
          style={{ backgroundImage: 'url(/templefit/media/hero_premium.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0A0A0A]/90 to-[#0A0A0A]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-temple-gold/30 backdrop-blur-md">
            <Sparkles className="text-temple-gold animate-pulse" size={16} />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-temple-gold">
              Mente • Cuerpo • Espíritu
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-4xl md:text-7xl font-serif font-black uppercase text-white tracking-tight leading-[1.05]">
            FORJA TU <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-temple-gold via-amber-200 to-temple-gold">CARÁCTER</span>
          </motion.h1>

          <motion.p variants={item} className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Entrenamiento, nutrición y comunidad para recuperar el control de tu cuerpo en 21 Días.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/59169127691?text=Hola%20Paulo!%20Quiero%20reclamar%20mi%20Semana%20de%20Prueba%20Gratis%20y%20el%2020%25%20de%20descuento%20en%20Snack%20Bar!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-temple-gold to-amber-500 text-black font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-lg hover:shadow-temple-gold/20 hover:scale-[1.02] transition duration-200 flex flex-col items-center justify-center gap-1"
            >
              <div className="flex items-center gap-2">
                <span>1 Semana de Prueba Gratuita</span>
                <ArrowRight size={18} />
              </div>
              <span className="text-[9px] opacity-80">+ 20% Dcto. en Snack Bar (Cupos Limitados)</span>
            </a>

            <a
              href="#metodo"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-extrabold uppercase tracking-wider text-xs rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2"
            >
              <span>Conoce el Método</span>
            </a>
          </motion.div>

        </div>
      </section>

      {/* The Method Section */}
      <section id="metodo" className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-3 mb-16">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-temple-gold">EL MÉTODO TEMPLEFIT</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white">
            Nuestros 4 <span className="italic text-temple-gold">Pilares</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-normal">Desarrolladas para potenciar las 3 dimensiones de tu ser.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Dumbbell size={32} className="text-temple-gold" />,
              title: "1. Centro de Entrenamiento",
              tag: "Tu espacio de entrenamiento",
              desc: "Programas intensivos, CristoFit Camp los sábados y hermandad en Escuadrones."
            },
            {
              icon: <Target size={32} className="text-amber-400" />,
              title: "2. Barra Nutricional Integrada",
              tag: "Snack Bar & Suplementos",
              desc: "Alimentación pre y post entreno de alta calidad. Productos anti-inflamatorios diseñados para acelerar tus resultados físicos."
            },
            {
              icon: <Award size={32} className="text-temple-gold-bright" />,
              title: "3. Apparel (Marca de Ropa)",
              tag: "Carácter y disciplina",
              desc: "Colecciones exclusivas que representan tu compromiso con los valores eternos. Vístete con el carácter que forjas a diario."
            },
            {
              icon: <Heart size={32} className="text-emerald-400" />,
              title: "4. Medicina Preventiva",
              tag: "Salud preventiva",
              desc: "Monitoreo clínico, rehabilitación y alianzas de salud para que puedas entrenar duro toda tu vida."
            }
          ].map((unit, i) => (
            <motion.div key={i} variants={item} className="p-8 rounded-3xl bg-black/40 border border-white/10 hover:border-temple-gold/40 transition-all duration-300 group h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition duration-300">
                    {unit.icon}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                    {unit.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-temple-gold transition">{unit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-normal">{unit.desc}</p>
              </div>
            </motion.div>

          ))}
        </div>
      </section>



      {/* Interactive Assessment Widget */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-black/60 to-black/90 border border-temple-gold/30 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-temple-gold/10 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-serif font-black uppercase text-white">
            Descubre tu <span className="italic text-temple-gold">Punto de Partida</span>
          </h3>
          <p className="text-sm text-gray-400 max-w-lg mx-auto">
            Selecciona tu meta principal y te diremos exactamente cómo empezar tu transformación.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              { id: 'fuerza', title: 'Fuerza y Nutrición', desc: 'Transformar cuerpo y grasa' },
              { id: 'habitos', title: 'Hábitos y Disciplina', desc: 'Rutina y consistencia' },
              { id: 'liderazgo', title: 'Mente y Espíritu', desc: 'Claridad mental y fe' },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setGoal(opt.id as any)}
                className={`p-4 rounded-xl border cursor-pointer transition ${goal === opt.id ? 'bg-temple-gold/20 border-temple-gold text-white' : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'}`}
              >
                <p className="text-sm font-bold">{opt.title}</p>
                <p className="text-xs text-gray-400 mt-1 font-normal">{opt.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={calculatePlan}
            className="px-8 py-3.5 bg-white text-black font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-temple-gold transition shadow-md"
          >
            Calcular Mi Plan Ideal
          </button>

          {assessmentResult && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-temple-gold/10 border border-temple-gold/30 text-temple-gold text-sm font-medium max-w-2xl mx-auto">
              {assessmentResult}
            </motion.div>
          )}
        </div>
      </section>

      {/* Quote / Footer Brand Banner */}
      <section className="text-center py-12 border-t border-white/5">
        <p className="font-serif italic text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          &quot;Cuidamos tu cuerpo porque es el templo del Espíritu.&quot;
        </p>
        <p className="text-xs text-temple-gold uppercase tracking-[0.3em] mt-4 font-extrabold">
          — Paulo, Fundador de TempleFit • Santa Cruz, Bolivia
        </p>
      </section>

    </motion.div>
  );
}
