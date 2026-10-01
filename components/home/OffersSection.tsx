'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Send, Dumbbell } from 'lucide-react';

interface FeatureRow {
  label: string;
  val: string;
  valColor?: string;
}

interface TacticalOffer {
  id: string;
  name: string;
  subtitle: string;
  type: string;
  price: number;
  unit: string;
  badge: string;
  badgeClass: string;
  topAccent: string;
  footerText: string;
  popular?: boolean;
  cardBorder: string;
  features: FeatureRow[];
  whatsappMsg: string;
}

const TACTICAL_OFFERS: TacticalOffer[] = [
  // Paquete 1: Coaching 1 a 1 VIP
  {
    id: 'coaching-vip',
    name: 'COACHING 1 A 1',
    subtitle: 'Con Paulo Gil Cuéllar (Head Coach)',
    type: 'Mentoría Personalizada',
    price: 450,
    unit: 'Bs. / mes',
    badge: 'VIP Exclusivo',
    badgeClass: 'bg-amber-500/20 text-temple-gold border border-temple-gold/40',
    topAccent: 'bg-gradient-to-r from-amber-600 to-temple-gold',
    footerText: 'Cupos limitados a 10 plazas',
    popular: false,
    cardBorder: 'border border-temple-gold/40',
    features: [
      { label: 'Diagnóstico Biomecánico & Postural', val: 'Personal', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Nutrición & Hábitos 1 a 1', val: 'Total', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Acceso a todas las instalaciones', val: 'Ilimitado', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Soporte Directo WhatsApp VIP', val: '24/7', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' }
    ],
    whatsappMsg: 'Hola Paulo, me interesa el Coaching 1 a 1 (450 Bs./mes). ¿En qué horarios tienes espacio disponible?'
  },

  // Paquete 2: Trimestral Atleta (Destacado)
  {
    id: 'trimestral',
    name: 'TRIMESTRAL ATLETA',
    subtitle: 'Ahorro de 100 Bs. (166 Bs./mes)',
    type: 'Membresía Continua',
    price: 500,
    unit: 'Bs. / 3 meses',
    badge: 'Más Elegido',
    badgeClass: 'bg-temple-gold text-black font-black',
    topAccent: 'bg-gradient-to-r from-temple-gold to-amber-500',
    footerText: 'Plan Oficial Más Recomendado',
    popular: true,
    cardBorder: 'border-2 border-temple-gold shadow-2xl shadow-temple-gold/20 -translate-y-1',
    features: [
      { label: 'Acceso a Escuadrones y Horarios', val: 'Total', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Plan Nutricional + Recetas', val: 'Total', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Evaluación Antropométrica', val: 'Mensual', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Sábado CristoFit Camp', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' }
    ],
    whatsappMsg: 'Hola Paulo, quiero aprovechar la membresía Trimestral Atleta de 500 Bs. / 3 meses. ¿Cuáles son los métodos de pago?'
  },

  // Paquete 3: Reto 21 Días / Mensual Regular
  {
    id: 'reto21',
    name: 'RETO 21 DÍAS / MENSUAL',
    subtitle: 'Turno 06:00 AM o Turnos Libres',
    type: 'Transformación de Base',
    price: 200,
    unit: 'Bs. / mes',
    badge: 'Transformación de Base',
    badgeClass: 'bg-temple-gold/15 text-temple-gold-dark dark:text-temple-gold border border-temple-gold/30',
    topAccent: 'bg-temple-gold',
    footerText: 'Inscripción directa o en sala',
    popular: false,
    cardBorder: 'border border-black/10 dark:border-white/10 hover:border-temple-gold/40',
    features: [
      { label: 'Entrenamiento Funcional & Calistenia', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Guía Nutricional Antiinflamatoria', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Comunidad & Soporte WhatsApp', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Sábado CristoFit Camp', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' }
    ],
    whatsappMsg: 'Hola Paulo, quiero inscribirme al Reto 21 Días / Mensual (200 Bs.). ¿Cómo reservo mi cupo en el escuadrón?'
  },

  // Paquete 4: Semestral Atleta
  {
    id: 'semestral',
    name: 'SEMESTRAL ATLETA',
    subtitle: 'Ahorro de 250 Bs. (158 Bs./mes)',
    type: 'Compromiso 6 Meses',
    price: 950,
    unit: 'Bs. / 6 meses',
    badge: 'Compromiso 6 Meses',
    badgeClass: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30',
    topAccent: 'bg-blue-500',
    footerText: 'Constancia y Disciplina Garantizada',
    popular: false,
    cardBorder: 'border border-black/10 dark:border-white/10 hover:border-temple-gold/40',
    features: [
      { label: 'Acceso a todas las clases y sedes', val: 'Semestre Total', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Plan Nutricional Periódico', val: 'Trimestral', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Polera Oficial TempleFit', val: 'Incluida', valColor: 'text-temple-gold font-black' },
      { label: 'Evaluación y Coaching Dedicado', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' }
    ],
    whatsappMsg: 'Hola Paulo, me interesa la membresía Semestral Atleta (950 Bs. / 6 meses). ¿Cómo puedo registrarme?'
  },

  // Paquete 5: Anual Atleta de Oro
  {
    id: 'anual',
    name: 'ANUAL ATLETA DE ORO',
    subtitle: 'Ahorro de 600 Bs. (150 Bs./mes)',
    type: 'Permanencia Anual',
    price: 1800,
    unit: 'Bs. / año',
    badge: 'Máximo Ahorro',
    badgeClass: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30',
    topAccent: 'bg-gradient-to-r from-amber-500 to-yellow-300',
    footerText: 'Corona de Oro TempleFit',
    popular: false,
    cardBorder: 'border border-black/10 dark:border-white/10 hover:border-temple-gold/40',
    features: [
      { label: '12 meses completos sin interrupción', val: 'Garantizado', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Congelamiento por viaje (hasta 30 días)', val: 'Incluido', valColor: 'text-emerald-500 dark:text-emerald-400 font-bold' },
      { label: 'Kit Indumentaria Oficial Completo', val: 'Gratis', valColor: 'text-temple-gold font-black' }
    ],
    whatsappMsg: 'Hola Paulo, quiero inscribirme a la membresía Anual Atleta de Oro (1.800 Bs./año). ¿Qué formas de pago tienen?'
  },

  // Paquete 6: Formación E.A.G.E.
  {
    id: 'eage',
    name: 'FORMACIÓN E.A.G.E.',
    subtitle: 'Escuela de Alto Rendimiento',
    type: 'Certificación & Liderazgo',
    price: 1200,
    unit: 'Bs. / 3 meses',
    badge: 'Certificación & Liderazgo',
    badgeClass: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30',
    topAccent: 'bg-white/40 dark:bg-white/30',
    footerText: 'Dirigido a líderes y futuros coaches',
    popular: false,
    cardBorder: 'border border-black/10 dark:border-white/10 hover:border-temple-gold/40',
    features: [
      { label: 'Metodología 21 Días (Teoría + Práctica)', val: 'Intensivo', valColor: 'text-temple-gold font-black' },
      { label: 'Capacitación en Ventas & Protocolo', val: 'Oficial', valColor: 'text-temple-gold font-black' },
      { label: 'Certificación con Valor Curricular', val: 'IBTA / R.M.', valColor: 'text-temple-gold font-black' },
      { label: 'Bolsa Laboral para Instructores', val: 'Exclusivo', valColor: 'text-temple-gold font-black' }
    ],
    whatsappMsg: 'Hola Paulo, deseo información sobre el programa de Formación E.A.G.E. (1.200 Bs.).'
  }
];

export default function OffersSection() {
  const handleSelectOffer = (msg: string) => {
    window.open(`https://wa.me/59169127691?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ofertas" className="py-20 md:py-28 max-w-7xl mx-auto px-4 relative z-10 scroll-mt-20 font-sans">
      {/* Encabezado */}
      <div className="text-center space-y-4 mb-14 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-temple-gold/15 dark:bg-temple-gold/10 border border-temple-gold/30 text-temple-gold-dark dark:text-temple-gold-bright text-[10px] font-black uppercase tracking-[0.25em]">
          <Sparkles size={14} />
          <span>TARIFARIO Y MEMBRESÍAS OFICIALES</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-black uppercase text-temple-navy dark:text-white tracking-tight leading-none">
          Planes de <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">Entrenamiento</span>
        </h2>
        
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">
          Precios oficiales en Bolivianos (Bs.). Sin costos ocultos. Diseñados para forjar disciplina física, nutrición consciente y constancia a largo plazo.
        </p>
      </div>

      {/* Grid de 6 Paquetes Tácticos Oficiales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {TACTICAL_OFFERS.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 shadow-xl bg-white/95 dark:bg-[#000F21]/85 backdrop-blur-xl ${offer.cardBorder}`}
          >
            {/* Línea de acento superior */}
            <div className={`h-1.5 w-full ${offer.topAccent}`} />

            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
              <div>
                {/* Header de la Tarjeta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${offer.badgeClass}`}>
                    {offer.badge}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-white/40 tracking-wider">
                    {offer.type}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-black uppercase text-temple-navy dark:text-white leading-tight">
                  {offer.name}
                </h3>

                {/* Precio */}
                <div className="mt-3 pb-4 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-temple-navy dark:text-white tracking-tight">
                      {offer.price.toLocaleString('es-BO')}
                    </span>
                    <span className="text-xs font-black uppercase text-temple-gold tracking-wider">
                      {offer.unit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-white/60 mt-1 font-medium">
                    {offer.subtitle}
                  </p>
                </div>

                {/* Filas de Características */}
                <div className="py-6 space-y-3.5">
                  {offer.features.map((feat, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-3 text-xs leading-snug">
                      <span className="text-slate-700 dark:text-white/75 uppercase font-medium text-[11px]">
                        {feat.label}
                      </span>
                      <span className={`text-[11px] shrink-0 text-right ${feat.valColor || 'text-slate-800 dark:text-white font-bold'}`}>
                        {feat.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón CTA */}
              <button
                onClick={() => handleSelectOffer(offer.whatsappMsg)}
                className={`w-full py-3.5 mt-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:translate-y-0 ${
                  offer.popular
                    ? 'bg-temple-gold hover:bg-temple-gold-bright text-black shadow-temple-gold/25'
                    : 'bg-black/5 dark:bg-white/10 hover:bg-temple-gold hover:text-black text-slate-800 dark:text-white border border-black/10 dark:border-white/10'
                }`}
              >
                <Send size={13} />
                <span>Inscribirme / Consultar</span>
              </button>
            </div>

            {/* Footer de Tarjeta con Tag de Estado */}
            <div className="py-2.5 px-4 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/10 text-center">
              <p className="text-[10px] text-temple-gold font-bold uppercase tracking-wider">
                {offer.footerText}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Banner Servicios Adicionales */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mt-12 p-6 sm:p-8 rounded-3xl bg-white/90 dark:bg-[#000F21]/80 border border-black/10 dark:border-white/15 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase text-temple-gold tracking-widest">
            <Dumbbell size={14} />
            <span>Servicios Complementarios Oficiales</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start text-xs sm:text-sm text-slate-700 dark:text-gray-300">
            <span><strong className="text-temple-navy dark:text-white">CristoFit Camp Sábados:</strong> 150 Bs./mes (o 40 Bs./sesión)</span>
            <span className="text-slate-300 dark:text-white/20">•</span>
            <span><strong className="text-temple-navy dark:text-white">Pase Diario:</strong> 25 Bs./día</span>
            <span className="text-slate-300 dark:text-white/20">•</span>
            <span><strong className="text-temple-navy dark:text-white">Pensión Snack Bar Saludable:</strong> 55 Bs./día</span>
          </div>
        </div>
        <button
          onClick={() => handleSelectOffer('Hola Paulo, quiero consultar sobre los servicios complementarios de TempleFit (Pase Diario, CristoFit Camp o Pensión Snack Bar).')}
          className="shrink-0 px-6 py-3.5 bg-temple-gold hover:bg-temple-gold-bright text-black font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-temple-gold/20 flex items-center gap-2"
        >
          <Send size={14} />
          <span>Consultar en WhatsApp</span>
        </button>
      </motion.div>
    </section>
  );
}
