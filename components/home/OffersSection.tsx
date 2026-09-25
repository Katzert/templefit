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
    name: 'COACHING 1 A 1 (VIP)',
    subtitle: 'Mentoría Exclusiva con Paulo Gil Cuéllar',
    price: 450,
    unit: 'Bs. / mes',
    badge: 'Cupos Limitados • VIP',
    badgeColor: 'bg-gradient-to-r from-amber-500 to-temple-gold text-black font-black border-amber-300 shadow-lg',
    popular: true,
    features: [
      'Entrenamiento 100% individual y personalizado',
      'Atención directa de Paulo Gil Cuéllar (Head Coach)',
      'Protocolo biomecánico, calistenia y recomposición corporal',
      'Acompañamiento en nutrición antiinflamatoria y hábitos',
      'Acceso total ilimitado a todas las instalaciones y horarios'
    ],
    whatsappMsg: '¡Hola Paulo! Deseo postular a un cupo de *COACHING 1 A 1 VIP* (450 Bs./mes). ¿Tienes disponibilidad de horario?'
  },
  {
    id: 'trimestral',
    category: 'membresias',
    name: 'TRIMESTRAL ATLETA',
    subtitle: 'Consolidación y Progresión de Escuadrón',
    price: 500,
    unit: 'Bs. / 3 meses',
    badge: 'Más Elegido • Ahorro 100 Bs.',
    badgeColor: 'bg-amber-500 text-black border-amber-400 font-black',
    popular: false,
    features: [
      'Acceso continuo a los 25 Escuadrones y turnos',
      'Progresión hacia Corona de Plata (Escuadrón Gedeón)',
      'Evaluación antropométrica y seguimiento mensual',
      'Tarifas preferenciales en consumos del Snack Bar',
      'Talleres de Enfoque, Hábitos y Disciplina'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero aprovechar la membresía *TRIMESTRAL ATLETA* (500 Bs. / 3 meses). ¿Cuáles son los métodos de pago?'
  },
  {
    id: 'reto21',
    category: 'membresias',
    name: 'RETO 21 DÍAS = ÍNTEGROS',
    subtitle: 'Transformación Física y Hábitos Circadianos',
    price: 200,
    unit: 'Bs. / mes',
    badge: 'Iniciación',
    badgeColor: 'bg-temple-gold/15 text-temple-gold-dark dark:text-temple-gold-bright border-temple-gold/30',
    features: [
      'Calistenia, Crossfit Funcional y Boxeo Ético',
      'Escuadrón Táctico de 12 atletas con capitán',
      'CristoFit Camp Sábados 06:00 AM (Plogging & Devocional)',
      'Reset Circadiano (22:00 a 06:00)',
      'Protocolo ElectroHidra isotónico post-entreno'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero inscribirme al *Reto 21 Días = ÍNTEGROS* (200 Bs.). ¿Cómo reservo mi cupo en el escuadrón?'
  },
  {
    id: 'mensual-regular',
    category: 'membresias',
    name: 'MEMBRESÍA MENSUAL',
    subtitle: 'Entrenamiento Regular Abierto',
    price: 200,
    unit: 'Bs. / mes',
    badge: 'Flexible',
    badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    features: [
      'Acceso al gimnasio en turnos mañana o tarde',
      'Rutina base programada y seguimiento de instructores',
      'Uso de equipamiento de fuerza y calistenia',
      'Ambiente ético de superación comunitaria',
      'Opción de renovación mes a mes sin contratos'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero inscribirme a la *MEMBRESÍA MENSUAL REGULAR* (200 Bs.). ¿En qué horarios puedo empezar?'
  },
  {
    id: 'semestral',
    category: 'membresias',
    name: 'SEMESTRAL ATLETA',
    subtitle: 'Compromiso Profundo de Media Temporada',
    price: 950,
    unit: 'Bs. / 6 meses',
    badge: 'Ahorro de 250 Bs.',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    features: [
      '6 meses completos de acceso continuo y escuadrones',
      'Evaluaciones biométricas trimestrales completas',
      'Descuento especial en la botica e insumos del Snack Bar',
      'Planificación física de medio año con hitos claros',
      'Prioridad de reserva en campamentos CristoFit'
    ],
    whatsappMsg: '¡Hola Paulo! Deseo información de la membresía *SEMESTRAL ATLETA* (950 Bs. / 6 meses).'
  },
  {
    id: 'anual',
    category: 'membresias',
    name: 'ANUAL ATLETA DE ORO',
    subtitle: 'Transformación Total de Vida a 12 Meses',
    price: 1800,
    unit: 'Bs. / año',
    badge: 'Máximo Ahorro • 600 Bs.',
    badgeColor: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
    features: [
      '12 meses ininterrumpidos de membresía activa',
      'Tarifa mensual equivalente a solo 150 Bs./mes',
      'Kit oficial TempleFit de bienvenida (Remera + Botella)',
      'Acompañamiento integral en hábitos y liderazgo',
      'Acceso garantizado a todos los talleres y eventos'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero inscribirme al plan *ANUAL ATLETA DE ORO* (1.800 Bs. / año).'
  },
  {
    id: 'pase-diario',
    category: 'membresias',
    name: 'PASE DIARIO',
    subtitle: 'Entrenamiento Individual por Sesión',
    price: 25,
    unit: 'Bs. / día',
    badge: 'Por Sesión',
    badgeColor: 'bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30',
    features: [
      'Acceso total a 1 sesión de entrenamiento funcional',
      'Supervisión del instructor de turno',
      'Ideal para atletas de paso o clases de prueba',
      'Acceso a vestuarios y área de calistenia'
    ],
    whatsappMsg: '¡Hola Paulo! Quisiera adquirir un *Pase Diario* (25 Bs.) para entrenar hoy.'
  },

  // --- PROGRAMAS ESPECIALES & LIDERAZGO ---
  {
    id: 'eage',
    category: 'programas',
    name: 'FORMACIÓN E.A.G.E.',
    subtitle: 'Escuela de Atletas y Guías Ejecutivos',
    price: 1200,
    unit: 'Bs. / 3 meses',
    badge: 'Certificación & Liderazgo',
    badgeColor: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
    features: [
      'Formación teórica y práctica en el gimnasio',
      'Liderazgo y gestión táctica de escuadrones',
      'Capacitación en ventas éticas y protocolo de servicio',
      'Certificación y desarrollo como instructor avalado',
      'Mentoría directa intensiva con Paulo Gil Cuéllar'
    ],
    whatsappMsg: '¡Hola Paulo! Deseo información sobre el programa de *FORMACIÓN E.A.G.E.* (1.200 Bs.).'
  },
  {
    id: 'cristofit-camp',
    category: 'programas',
    name: 'CRISTOFIT CAMP (SÁBADOS)',
    subtitle: 'Plogging, Calistenia & Comunidad al Aire Libre',
    price: 150,
    unit: 'Bs. / mes',
    badge: 'Comunidad & Fe',
    badgeColor: 'bg-amber-600/15 text-amber-700 dark:text-amber-400 border-amber-600/30',
    features: [
      '4 sesiones sabatinas de 06:00 a 08:30 AM',
      'Entrenamiento de resistencia al aire libre y plogging',
      'Devocional y charla formativa en principios y disciplina',
      'Hidratación isotónica ElectroHidra incluida',
      'Integración familiar y espíritu de cuerpo'
    ],
    whatsappMsg: '¡Hola Paulo! Deseo inscribirme al abono mensual de *CristoFit Camp* (150 Bs./mes).'
  },

  // --- NUTRICIÓN & SNACK BAR ---
  {
    id: 'snack-pension',
    category: 'nutricion',
    name: 'PENSIÓN SNACK BAR',
    subtitle: 'Nutrición Limpia Funcional (Alianza Abuela Fit)',
    price: 55,
    unit: 'Bs. / día',
    badge: 'Nutrición Saludable',
    badgeColor: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    features: [
      'Desayuno Funcional (10 Bs.) + Media Mañana (5 Bs.)',
      'Almuerzo Saludable sin Ultraprocesados (25 Bs.)',
      'Merienda Proteica (5 Bs.) + Cena Ligera (10 Bs.)',
      'Panadería sin levadura y repostería fit limpia',
      'Opción mensual de Catering completo (900 Bs./mes)'
    ],
    whatsappMsg: '¡Hola Paulo! Quiero información y reserva para la *PENSIÓN SNACK BAR* (55 Bs./día o Catering 900 Bs.).'
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/15 dark:bg-temple-gold/10 border border-temple-gold/30 text-temple-gold-dark dark:text-temple-gold-bright text-[10px] font-black uppercase tracking-[0.3em]">
          <Sparkles size={14} />
          <span>TARIFARIO Y MEMBRESÍAS OFICIALES</span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif font-black uppercase text-temple-navy dark:text-white tracking-tight">
          Opciones de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">Inversión</span>
        </h2>
        
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
          Precios oficiales en Bolivianos (Bs.). Desde pases diarios (25 Bs.) y planes mensuales regulares (200 Bs.), hasta Coaching Personalizado 1 a 1 (450 Bs.) y membresías semestrales y anuales con ahorro significativo.
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
            <span>Membresías Gimnasio (Desde 25 a 1.800 Bs.)</span>
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
            <span>Formación E.A.G.E. & Campamentos</span>
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
            <span>Pensión Snack Bar & Catering</span>
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
