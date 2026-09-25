'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Send, Dumbbell, Coffee, Award, Calendar, Zap, ShieldCheck } from 'lucide-react';

interface OfferItem {
  id: string;
  category: 'membresias' | 'programas' | 'nutricion';
  name: string;
  subtitle: string;
  price: number;
  unit: string;
  badge: string;
  badgeColor: string;
  popular?: boolean;
  features: string[];
  whatsappMsg: string;
}

const ALL_OFFERS: OfferItem[] = [
  // --- MEMBRESÍAS & ENTRENAMIENTO ---
  {
    id: 'coaching-vip',
    category: 'membresias',
    name: 'COACHING 1 A 1',
    subtitle: 'Entrena directo con Paulo Gil Cuéllar',
    price: 450,
    unit: 'Bs. / mes',
    badge: 'Atención personal',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-temple-gold text-black font-black border-amber-300 shadow-lg',
    popular: true,
    features: [
      'Rutina individual según tus metas y condición física',
      'Supervisión directa de Paulo en cada sesión',
      'Corrección de técnica en calistenia, fuerza y postura',
      'Guía práctica de alimentación y hábitos diarios',
      'Acceso libre al gimnasio en cualquier turno'
    ],
    whatsappMsg: 'Hola Paulo, me interesa el Coaching 1 a 1 (450 Bs./mes). ¿En qué horarios tienes espacio disponible?'
  },
  {
    id: 'trimestral',
    category: 'membresias',
    name: 'TRIMESTRAL ATLETA',
    subtitle: '3 meses de entrenamiento continuo',
    price: 500,
    unit: 'Bs. / 3 meses',
    badge: 'Más elegido (Ahorras 100 Bs.)',
    badgeColor: 'bg-amber-500 text-black border-amber-400 font-black',
    popular: false,
    features: [
      'Acceso continuo a turnos y grupos de entrenamiento',
      'Seguimiento mensual de peso y medidas',
      'Descuento en compras del Snack Bar',
      'Salidas de sábado en CristoFit Camp',
      'Apoyo constante para mantener la constancia'
    ],
    whatsappMsg: 'Hola Paulo, quiero inscribirme al plan Trimestral de 500 Bs. ¿Cómo puedo hacer el pago?'
  },
  {
    id: 'reto21',
    category: 'membresias',
    name: 'RETO 21 DÍAS',
    subtitle: '21 días de disciplina y entrenamiento matutino',
    price: 200,
    unit: 'Bs. / mes',
    badge: 'Turno 06:00 AM',
    badgeColor: 'bg-temple-gold/15 text-temple-gold-dark dark:text-temple-gold-bright border-temple-gold/30',
    features: [
      'Calistenia, entrenamiento funcional y boxeo básico',
      'Grupo de 12 personas con instructor asignado',
      'CristoFit Camp los sábados a las 06:00 AM',
      'Horario ordenado de descanso (22:00 a 06:00)',
      'Bebida isotónica fresca tras cada clase'
    ],
    whatsappMsg: 'Hola Paulo, quiero entrar al Reto 21 Días (200 Bs.). ¿Cómo reservo mi lugar en el grupo?'
  },
  {
    id: 'mensual-regular',
    category: 'membresias',
    name: 'MEMBRESÍA MENSUAL',
    subtitle: 'Mes libre en turno mañana o tarde',
    price: 200,
    unit: 'Bs. / mes',
    badge: 'Mes a mes',
    badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    features: [
      'Entrena en turnos de mañana o de tarde',
      'Rutina guiada por profesores en sala',
      'Uso libre de pesas, barras y jaulas',
      'Buen ambiente para entrenar enfocado',
      'Sin contratos forzados ni cobros automáticos'
    ],
    whatsappMsg: 'Hola Paulo, quiero empezar con la membresía mensual de 200 Bs. ¿Cuáles son los horarios de atención?'
  },
  {
    id: 'semestral',
    category: 'membresias',
    name: 'SEMESTRAL ATLETA',
    subtitle: '6 meses continuos con descuento',
    price: 950,
    unit: 'Bs. / 6 meses',
    badge: 'Ahorras 250 Bs.',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    features: [
      '6 meses de acceso completo al gimnasio',
      'Evaluación física cada trimestre',
      'Descuento en suplementos y comidas del snack bar',
      'Polera oficial TempleFit de regalo',
      'Cupo reservado en talleres y campamentos'
    ],
    whatsappMsg: 'Hola Paulo, me interesa la membresía Semestral (950 Bs.). ¿Cómo puedo registrarme?'
  },
  {
    id: 'anual',
    category: 'membresias',
    name: 'ANUAL ATLETA DE ORO',
    subtitle: 'Un año completo (150 Bs. al mes)',
    price: 1800,
    unit: 'Bs. / año',
    badge: 'Ahorras 600 Bs.',
    badgeColor: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
    features: [
      '12 meses de acceso total al gimnasio',
      'Pausa tu membresía hasta 30 días si sales de viaje',
      'Polera y botella oficial de bienvenida',
      'Seguimiento de peso, fuerza y avances',
      'Pase libre a todos los eventos y campamentos'
    ],
    whatsappMsg: 'Hola Paulo, quiero inscribirme al plan Anual de 1.800 Bs. ¿Qué formas de pago tienen?'
  },
  {
    id: 'pase-diario',
    category: 'membresias',
    name: 'PASE DIARIO',
    subtitle: 'Entrena por una sesión',
    price: 25,
    unit: 'Bs. / día',
    badge: 'Pase por día',
    badgeColor: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30',
    features: [
      'Acceso a una sesión completa de entrenamiento',
      'Acompañamiento del profesor de turno',
      'Uso de vestuarios y área de calistenia',
      'Ideal si estás de visita o quieres probar la clase'
    ],
    whatsappMsg: 'Hola Paulo, quiero comprar un Pase Diario (25 Bs.) para entrenar hoy.'
  },

  // --- PROGRAMAS ESPECIALES & LIDERAZGO ---
  {
    id: 'eage',
    category: 'programas',
    name: 'FORMACIÓN E.A.G.E.',
    subtitle: 'Curso intensivo para instructores',
    price: 1200,
    unit: 'Bs. / 3 meses',
    badge: 'Curso de 3 meses',
    badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    features: [
      'Clases prácticas en sala y fundamentos de movimiento',
      'Cómo dirigir a un grupo de 12 personas con orden',
      'Atención, servicio y trato con el alumno',
      'Prácticas en clase supervisadas por Paulo',
      'Opción de integrarse al equipo de TempleFit'
    ],
    whatsappMsg: 'Hola Paulo, quiero información sobre el curso de Formación E.A.G.E. (1.200 Bs.).'
  },
  {
    id: 'cristofit-camp',
    category: 'programas',
    name: 'CRISTOFIT CAMP (SÁBADOS)',
    subtitle: 'Entrenamiento al aire libre los sábados',
    price: 150,
    unit: 'Bs. / mes',
    badge: 'Sábados 06:00 AM',
    badgeColor: 'bg-amber-600/15 text-amber-700 dark:text-amber-400 border-amber-600/30',
    features: [
      '4 sábados al mes de 06:00 a 08:30 AM',
      'Calistenia, trote y limpieza comunitaria (plogging)',
      'Momento de devocional y principios de vida',
      'Bebida mineral isotónica para rehidratarte',
      'Ambiente sano y apto para toda la familia'
    ],
    whatsappMsg: 'Hola Paulo, quiero anotarme a los sábados de CristoFit Camp (150 Bs./mes).'
  },

  // --- NUTRICIÓN & SNACK BAR ---
  {
    id: 'snack-pension',
    category: 'nutricion',
    name: 'PENSIÓN SNACK BAR',
    subtitle: 'Comida sana preparada para el día',
    price: 55,
    unit: 'Bs. / día',
    badge: 'Comida limpia',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    features: [
      'Desayuno y media mañana nutritivos',
      'Almuerzo casero sin frituras ni ultraprocesados',
      'Merienda de la tarde y cena liviana',
      'Panadería artesanal y repostería saludable',
      'Opción mensual con entrega diaria (900 Bs./mes)'
    ],
    whatsappMsg: 'Hola Paulo, me interesa el servicio de Pensión Snack Bar (55 Bs./día o Catering mensual).'
  }
];

export default function OffersSection() {
  const [selectedCategory, setSelectedCategory] = useState<'membresias' | 'programas' | 'nutricion'>('membresias');

  const filteredOffers = ALL_OFFERS.filter(o => o.category === selectedCategory);

  const handleSelectOffer = (msg: string) => {
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ofertas" className="py-24 max-w-7xl mx-auto px-4 relative z-10 scroll-mt-20 font-sans">
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/15 dark:bg-temple-gold/10 border border-temple-gold/30 text-temple-gold-dark dark:text-temple-gold-bright text-[10px] font-black uppercase tracking-[0.25em]">
          <Sparkles size={14} />
          <span>TARIFAS Y MEMBRESÍAS</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-temple-navy dark:text-white tracking-tight">
          Planes de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">Entrenamiento</span>
        </h2>
        
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">
          Precios en Bolivianos (Bs.). Puedes entrenar por día desde 25 Bs., mes a mes por 200 Bs., o con Coaching personal de Paulo por 450 Bs. También tienes opciones de 3, 6 y 12 meses con descuento.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <button
            onClick={() => setSelectedCategory('membresias')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedCategory === 'membresias'
                ? 'bg-temple-gold text-black shadow-lg shadow-temple-gold/20'
                : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            <Dumbbell size={15} />
            <span>Membresías (25 a 1.800 Bs.)</span>
          </button>

          <button
            onClick={() => setSelectedCategory('programas')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedCategory === 'programas'
                ? 'bg-temple-gold text-black shadow-lg shadow-temple-gold/20'
                : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            <Award size={15} />
            <span>Retos y Cursos</span>
          </button>

          <button
            onClick={() => setSelectedCategory('nutricion')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedCategory === 'nutricion'
                ? 'bg-temple-gold text-black shadow-lg shadow-temple-gold/20'
                : 'bg-black/5 dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10'
            }`}
          >
            <Coffee size={15} />
            <span>Snack Bar y Comidas</span>
          </button>
        </div>
      </div>

      {/* Grid of Offers */}
      <motion.div 
        key={selectedCategory}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredOffers.map((offer) => (
          <div
            key={offer.id}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-xl ${
              offer.popular
                ? 'bg-white dark:bg-[#0F1420] border-2 border-temple-gold shadow-temple-gold/20 -translate-y-2'
                : 'bg-white/80 dark:bg-[#0B0F19]/90 border border-black/10 dark:border-white/10 hover:border-temple-gold/40'
            }`}
          >
            {offer.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-temple-gold text-black text-[10px] font-black uppercase tracking-wider shadow-md">
                Destacado VIP
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
              className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:translate-y-0 ${
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
      </motion.div>
    </section>
  );
}
