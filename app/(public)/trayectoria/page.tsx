'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Lightbulb, Target, Award, Clock, ArrowRight, ShieldCheck, CheckCircle2, X, ZoomIn, FileCheck, Check, Sparkles } from 'lucide-react';

interface Certificate {
  id: string;
  category: string;
  title: string;
  issuer: string;
  hours: string;
  meta: string;
  date: string;
  institution: string;
  type: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    category: 'Instructor Fitness & Imagen Personal',
    title: 'Técnicas en Instrucción Corporal y de Relajamiento',
    issuer: 'Centro de Capacitación Técnica Privada IBTA (R.M. 0259/2019 del Ministerio de Educación de Bolivia)',
    hours: '150 Horas Académicas',
    meta: 'REGISTRO: Libro Nº 5, Foja 36',
    date: '05/AGO/2024',
    institution: 'IBTA BOLIVIA',
    type: 'TITULACIÓN TÉCNICA'
  },
  {
    id: 'cert2',
    category: 'Gestión de Servicio & Catering de Élite',
    title: 'Organización de Restaurantes, Eventos y Garzones',
    issuer: 'Centro de Capacitación Técnica Privada IBTA (R.M. 0259/2019 del Ministerio de Educación de Bolivia)',
    hours: '240 Horas Académicas',
    meta: 'REGISTRO: Libro Nº 13, Foja 075',
    date: '05/AGO/2024',
    institution: 'IBTA BOLIVIA',
    type: 'TITULACIÓN TÉCNICA'
  },
  {
    id: 'cert3',
    category: 'Liderazgo & Discipulado de Gobierno',
    title: 'Principios y Modelos para Reformar Naciones',
    issuer: 'CGN Institute - Concilio Global de Naciones & Instituto Universitario Antonio Caso (IUAC)',
    hours: '120 Horas Académicas',
    meta: 'MODALIDAD: Virtual Internacional',
    date: '30/ENE/2025',
    institution: 'CGN INSTITUTE & IUAC',
    type: 'DIPLOMADO INTERNACIONAL'
  },
  {
    id: 'cert4',
    category: 'Terapia de Resultados',
    title: 'Minicurso Terapeuta de Resultados',
    issuer: 'IBFT - Instituto Brasileiro de Formação de Terapeutas (Brasil)',
    hours: '16 Horas de Carga',
    meta: 'FIRMA: Dr. Jair Soares dos Santos',
    date: '15/MAR/2026',
    institution: 'IBFT BRASIL',
    type: 'ESPECIALIZACIÓN CLÍNICA'
  },
  {
    id: 'cert5',
    category: 'Entrenamiento Funcional Avanzado',
    title: 'Aplicación Práctica del Entrenamiento Funcional',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026',
    institution: 'VIRTUALLCORP & UPLLEARN',
    type: 'CERTIFICACIÓN AVANZADA'
  },
  {
    id: 'cert6',
    category: 'Biomecánica Deportiva',
    title: 'Biomecánica y Movimiento Corporal',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026',
    institution: 'VIRTUALLCORP & UPLLEARN',
    type: 'CERTIFICACIÓN AVANZADA'
  },
  {
    id: 'cert7',
    category: 'Acondicionamiento Físico',
    title: 'Capacidades Físicas y el Entrenamiento Funcional',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026',
    institution: 'VIRTUALLCORP & UPLLEARN',
    type: 'CERTIFICACIÓN AVANZADA'
  },
  {
    id: 'cert8',
    category: 'Fisioterapia & Kinesiología',
    title: 'Ejercicios Funcionales Terapéuticos y Rehabilitación Física',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026',
    institution: 'VIRTUALLCORP & UPLLEARN',
    type: 'CERTIFICACIÓN AVANZADA'
  }
];

const ACTION_GALLERY = [
  { src: 'media/hero_premium.png', fallback: '/templefit/media/hero_premium.png', alt: 'Coach Paulo Gil en Acción' },
  { src: 'media/carlos.png', fallback: '/templefit/media/carlos.png', alt: 'Entrenamiento de Fuerza' },
  { src: 'media/diego.png', fallback: '/templefit/media/diego.png', alt: 'Acondicionamiento Funcional' },
  { src: 'media/mariana.png', fallback: '/templefit/media/mariana.png', alt: 'Nutrición y Disciplina' },
  { src: 'images/squad_training.png', fallback: '/templefit/images/squad_training.png', alt: 'Escuadrones TempleFit' }
];

export default function NeuroVentasPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="bg-[#FBF9F5] dark:bg-[#05070B] text-temple-navy dark:text-white overflow-x-hidden min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 border-b border-temple-gold/25 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="media/hero_premium.png" 
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('templefit')) target.src = '/templefit/media/hero_premium.png';
            }}
            className="w-full h-full object-cover opacity-15 dark:opacity-20 filter grayscale contrast-125 scale-105" 
            alt="Entrenamiento en ventas - TEMPLEFIT" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FBF9F5] via-[#FBF9F5]/90 to-transparent dark:from-[#05070B] dark:via-[#05070B]/90 dark:to-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <span className="inline-block bg-temple-gold/20 border border-temple-gold/40 text-temple-gold px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] rounded-full shadow-lg">
                Respaldo Técnico & Capacitaciones
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-serif font-black uppercase text-temple-navy dark:text-white leading-[1.05] tracking-tight">
                CAPACITACIÓN & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-temple-gold to-yellow-500 block mt-2">CERTIFICACIONES</span>
              </h1>
              
              <div className="border-l-4 border-temple-gold pl-6 space-y-4">
                <p className="text-xl md:text-2xl text-slate-800 dark:text-slate-100 font-medium italic leading-relaxed">
                  "El servicio de excelencia y la disciplina no son casualidad: se forman con preparación real."
                </p>
                <p className="text-xs md:text-sm text-temple-gold uppercase tracking-[0.2em] font-bold">
                  Fundador & Lead Coach: Paulo Alberto Gil Cuéllar
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href={`https://wa.me/59169127691?text=${encodeURIComponent(`Hola TempleFit! Vi la sección de Capacitación & Certificaciones en la web de TempleFit:

*SOLICITUD DE INFORMACIÓN & MENTORÍA*
• Me interesa recibir información sobre los programas de capacitación y certificaciones.
• Quisiera conocer requisitos, temario técnico y disponibilidad de fechas.

¿Me podrías compartir los detalles para coordinar?`)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-[0_6px_24px_rgba(37,211,102,0.3)] hover:scale-[1.03] transition-all"
                >
                  <span className="text-base">💬</span>
                  <span>Consultar por Capacitaciones</span>
                </a>
              </div>
            </div>

            {/* High-Resolution Action Gallery Cards */}
            <div className="lg:col-span-5 flex items-end justify-center pr-4">
              <div className="flex -space-x-8 md:-space-x-12 overflow-hidden py-4">
                {ACTION_GALLERY.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="relative group w-20 md:w-28 h-36 md:h-52 overflow-hidden rounded-2xl border-2 border-temple-gold/40 dark:border-white/20 hover:border-temple-gold shadow-2xl transition-all duration-300 bg-[#0E1424]"
                    whileHover={{ y: -10, zIndex: 20, scale: 1.08 }}
                  >
                    <img 
                      src={item.src} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={item.alt}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('templefit')) {
                          target.src = item.fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                      <span className="text-[8px] font-bold text-temple-gold uppercase tracking-wider line-clamp-1">{item.alt}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los 3 Cerebros */}
      <section className="py-20 md:py-28 bg-[#FBF9F5] dark:bg-[#07090E] relative border-b border-black/5 dark:border-white/5">
        <div className="container mx-auto px-6 max-w-6xl text-center space-y-16">
          <div className="space-y-3">
            <p className="text-temple-gold font-bold tracking-[0.25em] text-xs uppercase">Fundamentos de Neuroventas</p>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-temple-navy dark:text-white uppercase tracking-tight">
              LOS 3 CEREBROS <span className="text-temple-gold ml-2">DEL VENDEDOR</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🦎', tag: 'Cerebro 1', title: 'REPTILIANO', border: 'border-t-amber-600',
                desc: 'Sistema de supervivencia. Controla los instintos primarios, la reacción inmediata y la toma de decisiones instintivas del comprador.'
              },
              {
                emoji: '❤️', tag: 'Cerebro 2', title: 'SISTEMA LÍMBICO', border: 'border-t-temple-gold',
                desc: 'Cerebro emocional. El 95% de las decisiones de compra se toman emocionalmente. Conecta genuinamente en este nivel.'
              },
              {
                emoji: '💡', tag: 'Cerebro 3', title: 'NEOCÓRTEX', border: 'border-t-temple-navy dark:border-t-white',
                desc: 'Cerebro racional. El comprador justifica con lógica lo que ya decidió emocionalmente. Domina los argumentos técnicos.'
              }
            ].map((brain, i) => (
              <div 
                key={i} 
                className={`p-8 bg-white dark:bg-[#0C101A] border border-black/10 dark:border-white/10 border-t-4 ${brain.border} rounded-2xl flex flex-col text-left group hover:shadow-xl transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{brain.emoji}</div>
                <span className="text-[10px] text-temple-navy/60 dark:text-white/40 uppercase tracking-widest mb-1 font-bold">{brain.tag}</span>
                <h4 className="text-xl font-bold text-temple-navy dark:text-white uppercase mb-4 tracking-tight">{brain.title}</h4>
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{brain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes de Formación */}
      <section className="py-20 md:py-28 bg-[#FBF9F5] dark:bg-[#05070B] relative">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <span className="inline-block bg-temple-gold/10 border border-temple-gold/30 text-temple-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
              Inversión en Resultados
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-temple-navy dark:text-white uppercase tracking-tight">
              PROGRAMAS DE FORMACIÓN
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl mx-auto">
              Metodología intensiva teórico-práctica con certificación oficial y garantía de aplicación directa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan 1 */}
            <div className="p-8 bg-white dark:bg-[#0C101A] border border-black/10 dark:border-white/10 rounded-2xl space-y-6 flex flex-col justify-between hover:border-temple-gold/40 transition-all">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-temple-gold uppercase tracking-widest">Nivel 1</span>
                <h3 className="text-xl font-bold text-temple-navy dark:text-white uppercase">Iniciación</h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Fundamentos de neuroventas, lenguaje corporal y protocolos de atención de impacto.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-3xl font-black text-temple-navy dark:text-white">450 Bs.</span>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1">Carga horaria: 40 horas académicas</p>
              </div>
            </div>

            {/* Plan 2 - Featured */}
            <div className="p-8 bg-white dark:bg-[#0E1424] border-2 border-temple-gold rounded-2xl space-y-6 flex flex-col justify-between shadow-2xl relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-temple-gold to-amber-600 text-black text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                Más Elegido
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-temple-gold uppercase tracking-widest">Nivel 2</span>
                <h3 className="text-xl font-bold text-temple-navy dark:text-white uppercase">Avanzado Ejecutivo</h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Cierre de ventas complejas, dirección de equipos y resolución de objeciones críticas.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-3xl font-black text-temple-gold">850 Bs.</span>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1">Carga horaria: 120 horas académicas</p>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="p-8 bg-white dark:bg-[#0C101A] border border-black/10 dark:border-white/10 rounded-2xl space-y-6 flex flex-col justify-between hover:border-temple-gold/40 transition-all">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-temple-gold uppercase tracking-widest">Nivel 3</span>
                <h3 className="text-xl font-bold text-temple-navy dark:text-white uppercase">Mentoría Integral</h3>
                <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                  Programa completo de liderazgo, neuroventas, protocolo in situ y certificación técnica.
                </p>
              </div>
              <div className="pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-3xl font-black text-temple-navy dark:text-white">1200 Bs.</span>
                <p className="text-[10px] text-slate-500 dark:text-gray-400 mt-1">12 días Teoría + 9 días Práctica In Situ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio de Certificados Verificados */}
      <section className="py-20 md:py-28 bg-[#FBF9F5] dark:bg-[#07090E] relative border-t-8 border-temple-gold">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-2 bg-temple-gold/10 border border-temple-gold/30 text-temple-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
              <Award size={14} />
              Acreditación Institucional
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-temple-navy dark:text-white uppercase tracking-tight">
              PORTAFOLIO DE CERTIFICADOS OFICIALES
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest max-w-2xl mx-auto">
              Haz clic en cualquier credencial para inspeccionar su registro ministerial y resolución legal en alta resolución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert) => (
              <div 
                key={cert.id} 
                onClick={() => setSelectedCert(cert)}
                className="bg-white dark:bg-[#0C101A] border border-black/10 dark:border-white/10 hover:border-temple-gold/60 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Visual Diploma Header */}
                <div className="p-6 bg-gradient-to-br from-amber-500/10 via-temple-gold/5 to-transparent border-b border-black/5 dark:border-white/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-temple-gold/15 text-temple-gold text-[9px] font-black uppercase tracking-wider border border-temple-gold/30">
                      <ShieldCheck size={12} />
                      {cert.type}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-gray-400">{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-xs shadow-md">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-temple-gold uppercase tracking-wider block">{cert.institution}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">{cert.meta}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <p className="text-[10px] text-temple-gold font-bold uppercase tracking-wider">{cert.category}</p>
                    <h4 className="text-base font-bold text-temple-navy dark:text-white uppercase leading-snug group-hover:text-temple-gold transition-colors">{cert.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{cert.issuer}</p>
                  </div>
                  
                  <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {cert.hours}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-temple-gold group-hover:translate-x-0.5 transition-transform">
                        <span>Inspeccionar</span>
                        <ZoomIn size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Cert Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-2xl w-full bg-white dark:bg-[#0E1424] border-2 border-temple-gold rounded-3xl overflow-hidden shadow-2xl p-8 space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black shadow-lg">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-temple-gold uppercase tracking-[0.2em]">{selectedCert.type}</span>
                    <h4 className="text-sm font-bold text-temple-navy dark:text-white uppercase">{selectedCert.institution}</h4>
                  </div>
                </div>
                <button 
                  className="text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                  onClick={() => setSelectedCert(null)}
                >
                  <X size={22} />
                </button>
              </div>

              <div className="space-y-4">
                <span className="text-xs text-temple-gold font-bold uppercase tracking-wider">{selectedCert.category}</span>
                <h3 className="text-2xl font-serif font-black uppercase text-temple-navy dark:text-white leading-tight">{selectedCert.title}</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                  {selectedCert.issuer}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-black/[0.03] dark:bg-black/40 border border-black/10 dark:border-white/10 text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Carga Horaria</span>
                  <span className="text-temple-gold font-bold">{selectedCert.hours}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Fecha de Emisión</span>
                  <span className="text-temple-navy dark:text-white font-bold">{selectedCert.date}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-black/5 dark:border-white/5 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                  {selectedCert.meta}
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  className="flex-1 py-3.5 bg-gradient-to-r from-temple-gold to-amber-600 text-black font-black uppercase tracking-wider text-xs rounded-xl shadow-lg hover:brightness-110 transition-all"
                  onClick={() => setSelectedCert(null)}
                >
                  Cerrar Credencial
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
