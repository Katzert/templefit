'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Send, Coffee, Target, Award, Flame } from 'lucide-react';

const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const OFFERS = [
  {
    id: 'reto21',
    name: 'RETO 21 DÍAS = ÍNTEGROS',
    subtitle: 'Transformación Física y Hábitos',
    price: 200,
    unit: 'Bs. / mes',
    badge: 'Iniciación',
    badgeColor: 'bg-temple-gold/15 text-temple-gold-dark dark:text-temple-gold-bright border-temple-gold/30',
    popular: false,
    features: [
      'Calistenia, Crossfit Funcional y Boxeo Ético',
      'Escuadrón Táctico de 12 atletas con capitán',
      'CristoFit Camp Sábados 06:00 AM (Plogging & Devocional)',
      'Reset Circadiano (22:00 PM a 06:00 AM)',
      'Protocolo ElectroHidra isotónico post-entreno'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero inscribirme al *Reto 21 Días = ÍNTEGROS* (200 Bs.). ¿Cómo reservo mi cupo en el escuadrón?'
  },
  {
    id: 'trimestral',
    name: 'TRIMESTRAL ATLETA',
    subtitle: 'Consolidación y Progresión',
    price: 500,
    unit: 'Bs. / 3 meses',
    badge: 'Más Elegido • Ahorro 100 Bs.',
    badgeColor: 'bg-amber-500 text-black border-amber-400 font-black',
    popular: true,
    features: [
      'Acceso continuo a los 25 Escuadrones y turnos',
      'Progresión hacia Corona de Plata (Escuadrón Gedeón)',
      'Evaluación antropométrica y seguimiento mensual',
      '20% de descuento en consumos del Snack Bar',
      'Talleres de Enfoque, Hábitos y Disciplina'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero aprovechar la membresía *TRIMESTRAL ATLETA* (500 Bs. / 3 meses). ¿Cuáles son los métodos de pago?'
  },
  {
    id: 'snack-pension',
    name: 'PENSIÓN SNACK BAR',
    subtitle: 'Nutrición Limpia (Alianza Abuela Fit)',
    price: 55,
    unit: 'Bs. / día',
    badge: 'Nutrición Saludable',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    popular: false,
    features: [
      'Desayuno Funcional (10 Bs.) + Media Mañana (5 Bs.)',
      'Almuerzo Saludable sin Ultraprocesados (25 Bs.)',
      'Merienda Proteica (5 Bs.) + Cena Ligera (10 Bs.)',
      'Panadería sin levadura y repostería fit limpia',
      'Opción mensual de Catering completo (900 Bs./mes)'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero información y reserva para la *PENSIÓN SNACK BAR* (55 Bs./día o Catering 900 Bs.).'
  },
  {
    id: 'eage',
    name: 'FORMACIÓN E.A.G.E.',
    subtitle: 'Escuela de Atletas y Guías',
    price: 1200,
    unit: 'Bs. / 3 meses',
    badge: 'Liderazgo & Certificación',
    badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    popular: false,
    features: [
      'Formación teórica y práctica en el gimnasio',
      'Liderazgo y gestión de escuadrones',
      'Capacitación en ventas y protocolo de servicio',
      'Certificación y desarrollo como instructor',
      'Mentoría directa con Paulo Cuellar'
    ],
    whatsappMsg: '¡Hola Paulo! Deseo información sobre el programa de *FORMACIÓN E.A.G.E.* (1.200 Bs.).'
  }
];

export default function OffersSection() {
  const handleSelectOffer = (msg: string) => {
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="ofertas" className="py-24 max-w-7xl mx-auto px-4 relative z-10 scroll-mt-20 font-sans">
      <div className="text-center space-y-4 mb-16">
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/15 dark:bg-temple-gold/10 border border-temple-gold/30 text-temple-gold-dark dark:text-temple-gold-bright text-[10px] font-black uppercase tracking-[0.3em]">
          <Sparkles size={14} />
          <span>TARIFAS Y OFERTAS OFICIALES</span>
        </motion.div>
        
        <motion.h2 variants={item} className="text-4xl md:text-6xl font-serif font-black uppercase text-temple-navy dark:text-white tracking-tight">
          Opciones de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">Inversión</span>
        </motion.h2>
        
        <motion.p variants={item} className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
          Precios oficiales en Bolivianos (Bs.). Sin costos ocultos. Diseñados para forjar constancia física, nutrición clara y hábitos sólidos.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {OFFERS.map((offer) => (
          <div
            key={offer.id}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-xl ${
              offer.popular
                ? 'bg-white dark:bg-[#0F1420] border-2 border-temple-gold shadow-temple-gold/10 -translate-y-2'
                : 'bg-white/80 dark:bg-[#0B0F19]/90 border border-black/10 dark:border-white/10 hover:border-temple-gold/40'
            }`}
          >
            {offer.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-temple-gold text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                Más Elegido
              </div>
            )}

            <div>
              {/* Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border ${offer.badgeColor}`}>
                  {offer.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-black uppercase text-temple-navy dark:text-white leading-tight">
                {offer.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 mb-5">
                {offer.subtitle}
              </p>

              {/* Price */}
              <div className="pb-6 mb-6 border-b border-black/5 dark:border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-temple-navy dark:text-white">
                    {offer.price}
                  </span>
                  <span className="text-xs font-extrabold uppercase text-temple-gold tracking-wider">
                    {offer.unit}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {offer.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-temple-gold/20 text-temple-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleSelectOffer(offer.whatsappMsg)}
              className={`w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:translate-y-0 ${
                offer.popular
                  ? 'bg-temple-gold hover:bg-temple-gold-bright text-black shadow-temple-gold/20'
                  : 'bg-black/5 dark:bg-white/5 hover:bg-temple-gold hover:text-black text-slate-800 dark:text-white border border-black/10 dark:border-white/10'
              }`}
            >
              <Send size={13} />
              <span>Inscribirme / Consultar</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
