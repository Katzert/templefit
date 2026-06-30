'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Heart, Lightbulb, Target, Award, Clock, ArrowRight, ShieldCheck, CheckCircle2, X, ZoomIn } from 'lucide-react';

interface Certificate {
  id: string;
  img: string;
  category: string;
  title: string;
  issuer: string;
  hours: string;
  meta: string;
  date: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    img: '/templefit/dashboard/media/media__1779149990472.jpg',
    category: 'Instructor Fitness & Imagen Personal',
    title: 'Técnicas en Instrucción Corporal y de Relajamiento',
    issuer: 'Centro de Capacitación Técnica Privada IBTA (R.M. 0259/2019 del Ministerio de Educación de Bolivia)',
    hours: '150 Horas Académicas',
    meta: 'REGISTRO: Libro Nº 5, Foja 36',
    date: '05/AGO/2024'
  },
  {
    id: 'cert2',
    img: '/templefit/dashboard/media/media__1779149990428.jpg',
    category: 'Gestión de Servicio & Catering de Élite',
    title: 'Organización de Restaurantes, Eventos y Garzones',
    issuer: 'Centro de Capacitación Técnica Privada IBTA (R.M. 0259/2019 del Ministerio de Educación de Bolivia)',
    hours: '240 Horas Académicas',
    meta: 'REGISTRO: Libro Nº 13, Foja 075',
    date: '05/AGO/2024'
  },
  {
    id: 'cert3',
    img: '/templefit/dashboard/media/media__1779149990274.jpg',
    category: 'Liderazgo & Discipulado de Gobierno',
    title: 'Principios y Modelos para Reformar Naciones',
    issuer: 'CGN Institute - Concilio Global de Naciones & Instituto Universitario Antonio Caso (IUAC)',
    hours: '120 Horas Académicas',
    meta: 'MODALIDAD: Virtual',
    date: '30/ENE/2025'
  },
  {
    id: 'cert4',
    img: '/templefit/dashboard/media/media__1779225988764.jpg',
    category: 'Terapia de Resultados',
    title: 'Minicurso Terapeuta de Resultados',
    issuer: 'IBFT - Instituto Brasileiro de Formação de Terapeutas (Brasil)',
    hours: '8 Horas de Carga',
    meta: 'FIRMA: Dr. Jair Soares dos Santos',
    date: '08/FEB/2026'
  },
  {
    id: 'cert5',
    img: '/templefit/dashboard/media/media__1779225546898.jpg',
    category: 'Entrenamiento Funcional Avanzado',
    title: 'Aplicación Práctica del Entrenamiento Funcional',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO: 066478',
    date: '20/MAR/2026'
  },
  {
    id: 'cert6',
    img: '/templefit/dashboard/media/media__1779225546905.jpg',
    category: 'Biomecánica Deportiva',
    title: 'Biomecánica y Movimiento Corporal',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO: 066478',
    date: '20/MAR/2026'
  },
  {
    id: 'cert7',
    img: '/templefit/dashboard/media/media__1779225546923.jpg',
    category: 'Acondicionamiento Físico',
    title: 'Capacidades Físicas y el Entrenamiento Funcional',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO: 066478',
    date: '20/MAR/2026'
  },
  {
    id: 'cert8',
    img: '/templefit/dashboard/media/media__1779225546929.jpg',
    category: 'Fisioterapia & Kinesiología',
    title: 'Ejercicios Funcionales Terapéuticos y Rehabilitación Física',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO: 066478',
    date: '20/MAR/2026'
  }
];

export default function NeuroVentasPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="bg-temple-navy-dark text-white overflow-x-hidden min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 border-b border-temple-gold/25 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/templefit/dashboard/team_spirit.png" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity" 
            alt="Entrenamiento en ventas - TEMPLEFIT" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-temple-navy-dark via-temple-navy-dark/90 to-transparent" />
        </div>
        
        {/* Decorative Ambient Blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-temple-gold/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-temple-red/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <span className="inline-block bg-temple-red/20 border border-temple-red/40 text-temple-red px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] rounded-full shadow-lg">
                Programa Especializado
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] font-serif font-black uppercase text-white leading-[1.05] tracking-tight">
                NEURO ENTRENAMIENTO DE <span className="elegant-title text-temple-gold block mt-2">IMPACTO EN VENTAS</span>
              </h1>
              
              <div className="border-l-4 border-temple-gold pl-6 space-y-4">
                <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed">
                  "El precio se olvida, pero la calidad permanece."
                </p>
                <p className="text-xs md:text-sm text-temple-gold uppercase tracking-[0.2em] font-bold">
                  Autor & Capacitador: Paulo Alberto Gil Cuéllar
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <a 
                  href="https://wa.me/59169127691?text=Hola,%20quiero%20más%20información%20sobre%20el%20programa%20de%20Neuroventas." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-[0_6px_24px_rgba(37,211,102,0.3)] hover:scale-[1.03] transition-all"
                >
                  <span className="text-base">💬</span>
                  <span>Iniciar Entrenamiento</span>
                </a>
              </div>
            </div>

            {/* Grid of author images in action */}
            <div className="lg:col-span-5 flex items-end justify-center pr-4">
              <div className="flex -space-x-8 md:-space-x-12 overflow-hidden py-4">
                {[
                  '/templefit/dashboard/media/media__1779142481129.jpg',
                  '/templefit/dashboard/media/media__1779142481197.jpg',
                  '/templefit/dashboard/media/media__1779142481265.jpg',
                  '/templefit/dashboard/media/media__1779142481269.jpg',
                  '/templefit/dashboard/media/media__1779142481315.jpg'
                ].map((src, i) => (
                  <motion.div 
                    key={i} 
                    className="relative group w-20 md:w-28 h-36 md:h-52 overflow-hidden rounded-2xl border border-white/20 hover:border-temple-gold shadow-2xl transition-all"
                    whileHover={{ y: -10, zIndex: 10, scale: 1.05 }}
                  >
                    <img 
                      src={src} 
                      className="w-full h-full object-cover transition-transform duration-300"
                      alt={`Galeria ${i+1}`}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los 3 Cerebros */}
      <section className="py-20 md:py-28 bg-black relative border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl text-center space-y-16">
          <div className="space-y-3">
            <p className="text-temple-gold font-bold tracking-[0.25em] text-xs uppercase">Fundamentos de Neuroventas</p>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tight">
              LOS 3 CEREBROS <span className="text-temple-red ml-2">DEL VENDEDOR</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: '🦎', tag: 'Cerebro 1', title: 'REPTILIANO', border: 'border-t-temple-red',
                desc: 'Sistema de supervivencia. Controla los instintos primarios, la reacción inmediata y la toma de decisiones instintivas del comprador.'
              },
              {
                emoji: '❤️', tag: 'Cerebro 2', title: 'SISTEMA LÍMBICO', border: 'border-t-temple-gold',
                desc: 'Cerebro emocional. El 95% de las decisiones de compra se toman emocionalmente. Conecta genuinamente en este nivel.'
              },
              {
                emoji: '💡', tag: 'Cerebro 3', title: 'NEOCÓRTEX', border: 'border-t-white',
                desc: 'Cerebro racional. El comprador justifica con lógica lo que ya decidió emocionalmente. Domina los argumentos técnicos.'
              }
            ].map((brain, i) => (
              <div 
                key={i} 
                className={`p-8 bg-temple-navy/40 border border-white/5 border-t-4 ${brain.border} rounded-2xl flex flex-col text-left group hover:bg-white/5 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{brain.emoji}</div>
                <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">{brain.tag}</span>
                <h4 className="text-xl font-bold text-white uppercase mb-4 tracking-tight">{brain.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{brain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos de Entrenamiento */}
      <section className="py-20 md:py-28 bg-temple-navy-dark relative border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-16">
            <p className="text-temple-gold font-bold mb-3 tracking-[0.25em] text-xs uppercase">Contenido del Programa</p>
            <h2 className="text-3xl md:text-6xl font-serif font-black text-white uppercase leading-tight tracking-tight">
              MÓDULOS DE <span className="elegant-title text-temple-gold block md:inline-block md:ml-3 mt-2 md:mt-0">ENTRENAMIENTO</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { num: '01', emoji: '🧠', title: 'Biohacking & Mentalidad', desc: 'Reprograma y resetea tu biología. Retos de 21 días con acciones aplicables. Hábitos que transforman el rendimiento vendedor.' },
              { num: '02', emoji: '🫁', title: 'Método Buteyko', desc: 'Programa de reeducación respiratoria del Dr. Konstantin Buteyko. Regula el sistema nervioso autónomo para potenciar tu resiliencia.' },
              { num: '03', emoji: '⚡', title: 'Control del Estrés', desc: 'Origen del control de la frustración del vendedor. Estrategias de expansión mental y protocolo anti-bloqueo.' },
              { num: '04', emoji: '🎯', title: 'Protocolo de Ventas', desc: 'Técnicas y protocolos estandarizados para elevar ventas con precisión. Sistema disciplinario para ventas efectivas.' },
              { num: '05', emoji: '💎', title: 'Imagen & Presentación', desc: 'Alimentación, imagen corporal y salud personal. Estándar de calidad en la presentación profesional para elevar la percepción.' },
              { num: '06', emoji: '🏆', title: 'Servicio al Cliente', desc: 'Atención en base a metas medibles reales. Cordialidad y disciplina con garantía de sistema. Marca la diferencia en el mercado.' }
            ].map((mod, i) => (
              <div 
                key={i} 
                className="p-8 bg-temple-navy/40 border border-white/5 border-l-4 border-l-white/10 hover:border-l-temple-gold hover:bg-white/5 transition-all duration-300 flex flex-col justify-between rounded-r-2xl"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-3xl font-serif font-black text-white/15">{mod.num}</span>
                    <span className="text-2xl">{mod.emoji}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white uppercase mb-3 tracking-tight">{mod.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología y Objetivos */}
      <section className="py-20 md:py-28 bg-black relative border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            
            {/* Metodología */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tight">
                METODOLOGÍA DE <span className="text-temple-gold">IMPACTO</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-temple-gold pl-4">
                La capacitación combina teoría rigurosa con práctica in situ. No diplomas vacíos: resultados medibles con un estándar ROI que las empresas pueden verificar.
              </p>
              
              <div className="bg-temple-navy/55 border border-white/10 p-6 rounded-2xl">
                <p className="text-temple-gold font-bold uppercase text-[9px] tracking-widest mb-2">Nuestra Visión</p>
                <p className="text-white text-sm font-medium italic">
                  "Informar, entrenar y crear equipos de trabajo sostenibles que valoren la importancia de su labor sirviendo a clientes, capaces de lograr metas medibles y reales."
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { tag: 'F.T', title: 'Fase Teórica', desc: 'Definiciones de Protocolo y sistema de ventas. Fundamentos de neurociencia aplicada al proceso comercial.' },
                  { tag: 'F.P', title: 'Fase Práctica In Situ', desc: 'Acciones y ejercicios reales en campo. 9 días de práctica aplicada en tu entorno de trabajo.' },
                  { tag: 'F.E', title: 'Evaluaciones & Retos', desc: '3 evaluaciones durante los 3 meses. Resumen y ejercicio final integrador. Hábitos medidos por resultados.' },
                  { tag: 'F.C', title: 'Certificación con Resultados', desc: 'Certificado TEMPLEFIT emitido tras demostrar efectividad real. 63 horas (36 teoría + 27 práctica).', gold: true }
                ].map((phase, i) => (
                  <div key={i} className="flex items-start">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl mr-4 shrink-0 uppercase text-xs font-bold ${
                      phase.gold ? 'bg-temple-gold text-black' : 'bg-white/5 border border-white/10 text-white'
                    }`}>
                      {phase.tag}
                    </div>
                    <div>
                      <h5 className={`font-bold uppercase mb-1 text-sm ${phase.gold ? 'text-temple-gold' : 'text-white'}`}>
                        {phase.title}
                      </h5>
                      <p className="text-gray-400 text-xs leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qué Lograrás */}
            <div className="space-y-8">
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tight">
                ¿QUÉ <span className="text-temple-red">LOGRARÁS?</span>
              </h3>
              <p className="text-temple-gold font-bold uppercase text-[10px] tracking-widest">
                Objetivos del Programa
              </p>

              <div className="space-y-4">
                {[
                  { num: '01', title: 'Protocolos Activos', desc: 'Organizar y disponer técnicas y protocolos de ventas en tu establecimiento con un sistema claro y replicable.' },
                  { num: '02', title: 'Ventas Efectivas', desc: 'Implementar un método disciplinario para que las ventas sean consistentes, medibles y efectivas en el tiempo.' },
                  { num: '03', title: 'Excelencia Profesional', desc: 'Mantener una presentación profesional impecable y un servicio de atención que marque la diferencia en el mercado.' }
                ].map((obj, i) => (
                  <div key={i} className="p-6 bg-temple-navy/40 border border-white/5 border-l-4 border-l-temple-red rounded-r-2xl">
                    <h5 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                      <span className="text-temple-red font-mono font-black text-sm">{obj.num}</span>
                      <span>{obj.title}</span>
                    </h5>
                    <p className="text-gray-400 text-xs leading-relaxed">{obj.desc}</p>
                  </div>
                ))}
              </div>

              {/* ROI Guarantee */}
              <div className="p-8 bg-temple-gold/5 border border-temple-gold/20 rounded-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-temple-gold text-xl">✦</span>
                  <h5 className="text-white font-black uppercase text-lg tracking-wider">GARANTÍA ROI</h5>
                </div>
                <p className="text-[10px] text-temple-gold font-bold uppercase tracking-widest">
                  Retorno de Inversión = VENTAJA
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Al completar el programa obtienes el conocimiento técnico y los protocolos estandarizados para elevar ventas con precisión. Efectividad demostrada para empresas a través del retorno de inversión.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modalidades y Precios */}
      <section className="py-20 md:py-28 bg-temple-navy-dark relative border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          <div className="text-center space-y-4">
            <p className="text-temple-gold font-bold tracking-[0.25em] text-xs uppercase">Inversión en tu equipo</p>
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tight">
              MODALIDADES DEL <span className="elegant-title text-temple-gold ml-1">PROGRAMA</span>
            </h2>
            <p className="text-white/40 text-xs uppercase tracking-widest font-black">
              "EL PRECIO SE OLVIDA · Y LA CALIDAD PERMANECE"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {/* Intensivo */}
            <div className="p-8 bg-temple-navy/40 border border-white/5 rounded-2xl text-center flex flex-col justify-between hover:bg-white/5 hover:border-temple-gold/30 transition-all duration-300">
              <div className="space-y-4">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Básico</span>
                <h4 className="text-2xl font-serif font-black text-white uppercase">INTENSIVO</h4>
                <p className="text-temple-gold font-bold text-xs uppercase">3 hrs · 1 día</p>
              </div>
              <div className="py-8">
                <span className="text-4xl font-black text-white">200 Bs.</span>
              </div>
            </div>
            
            {/* Estándar */}
            <div className="relative p-8 bg-white/5 border-2 border-temple-gold rounded-2xl text-center flex flex-col justify-between shadow-2xl shadow-temple-gold/10 transform md:-translate-y-4">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-temple-gold text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                Más Solicitado
              </div>
              <div className="space-y-4 mt-2">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Intermedio</span>
                <h4 className="text-2xl font-serif font-black text-white uppercase">ESTÁNDAR</h4>
                <p className="text-temple-gold font-bold text-xs uppercase">10 hrs · 5 días</p>
              </div>
              <div className="py-8">
                <span className="text-4xl font-black text-white">500 Bs.</span>
              </div>
            </div>
            
            {/* Completo */}
            <div className="p-8 bg-temple-navy/40 border border-white/5 rounded-2xl text-center flex flex-col justify-between hover:bg-white/5 hover:border-temple-gold/30 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-temple-red/10 to-transparent pointer-events-none" />
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Premium / Recomendado</span>
                <h4 className="text-2xl font-serif font-black text-white uppercase">COMPLETO</h4>
                <p className="text-temple-gold font-bold text-xs uppercase">210 hrs · 21 días</p>
              </div>
              <div className="py-6 relative z-10">
                <span className="text-4xl font-black text-white">1200 Bs.</span>
              </div>
              <p className="text-[9px] text-gray-400 relative z-10 leading-relaxed px-2">
                12 días de Teoría + 9 días de Práctica In Situ. El camino completo hacia la excelencia profesional.
              </p>
            </div>
          </div>

          {/* Horarios & Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-black/40 border border-white/10 rounded-2xl space-y-6">
              <h4 className="text-lg font-bold text-temple-gold uppercase tracking-wider">Horarios y Días Disponibles</h4>
              <p className="text-white font-bold text-xs uppercase">
                Mar · Mié · Jue <span className="text-white/40 font-normal ml-2">a elección</span>
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Turno Tarde:</span>
                  <span className="text-white font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-lg">3:00 - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Turno Noche:</span>
                  <span className="text-white font-bold bg-white/5 border border-white/10 px-3 py-1 rounded-lg">5:00 - 7:00 PM</span>
                </li>
              </ul>
              <p className="text-[10px] text-temple-gold uppercase font-bold tracking-widest">
                Adaptado a tu agenda profesional
              </p>
            </div>
            
            <div className="p-8 bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl flex flex-col justify-center space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">No improvises tu equipo.</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Evita experiencias de servicio carente de calidad. Nuestro entrenamiento garantiza disciplina, cordialidad y protocolo de ventas desde el primer día.
              </p>
              <a 
                href="https://wa.me/59169127691?text=Hola,%20solicito%20detalles%20de%20horarios%20para%20el%20entrenamiento%20de%20Neuroventas." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg transition-all"
              >
                <span>💬</span>
                <span>Contactar por WhatsApp · +591 691 27691</span>
              </a>
              <a 
                href="mailto:templefitbolivia@gmail.com" 
                className="text-center text-white/50 hover:text-temple-gold transition-colors text-xs font-bold"
              >
                ✉️ templefitbolivia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Credenciales */}
      <section className="py-20 md:py-28 bg-black relative border-t-8 border-temple-gold">
        <div className="container mx-auto px-6 max-w-6xl space-y-20">
          
          {/* Author Featured Cert Image */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-temple-gold/10 blur-[80px] rounded-full max-w-sm mx-auto h-full pointer-events-none" />
            <img 
              src="/templefit/dashboard/media/media__1779142594726.jpg" 
              className="w-full max-w-[280px] md:max-w-[320px] h-auto object-contain relative z-10 rounded-2xl shadow-2xl border border-white/10" 
              alt="Certificación Oficial TempleFit"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-white uppercase tracking-tight">
              CERTIFICACIÓN OFICIAL TEMPLEFIT
            </h2>
            <p className="text-temple-red font-bold uppercase text-xs tracking-[0.25em]">
              Neuroentrenamiento de Impacto en Ventas
            </p>
            <p className="text-white/60 text-[10px] uppercase tracking-widest">
              ✦ Certificación con Resultados 210 horas · 21 días · Garantía medible ROI
            </p>
            <div className="h-px w-20 bg-white/20 mx-auto" />
            <p className="text-temple-gold font-bold uppercase text-xs tracking-widest">
              Paulo Alberto Gil Cuéllar · Capacitador Certificado
            </p>
            <p className="text-white/80 italic font-medium text-lg border-l-4 border-r-4 border-temple-red px-6 py-2 inline-block">
              "Te llevaremos a la excelencia profesional mediante resultados, no por diplomas."
            </p>
          </div>
          
          {/* Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-white/5">
            <div className="space-y-6">
              <p className="text-temple-gold font-bold uppercase text-xs tracking-widest border-b border-white/10 pb-2">
                Experiencia Práctica In Situ
              </p>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">
                Servicio Protocolar y Dirección de Garzones
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Paulo Alberto Gil Cuéllar es un profesional titulado directamente vinculado a la excelencia en el servicio protocolar de atención, dirección de garzones y organización de catering. Su entrenamiento no es solo teoría, sino disciplina forjada en la exigencia real del servicio al cliente de alto nivel.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                '/templefit/dashboard/media/media__1779142594729.jpg',
                '/templefit/dashboard/media/media__1779142594777.jpg',
                '/templefit/dashboard/media/media__1779142594814.jpg',
                '/templefit/dashboard/media/media__1779142594821.jpg'
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-white/10 hover:border-temple-gold shadow-lg transition-all duration-300">
                  <img 
                    src={src} 
                    className="w-full h-full object-cover" 
                    alt={`Servicios ${i+1}`}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action feature images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <img 
                src="/templefit/dashboard/media/media__1779142694557.jpg" 
                className="w-full h-64 md:h-80 object-cover object-center rounded-2xl border border-temple-gold/30 hover:border-temple-gold transition-colors shadow-2xl" 
                alt="Capacitación Gastronómica y Servicio"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <p className="text-center text-[9px] text-white/50 uppercase tracking-widest font-bold">Capacitación Gastronómica</p>
            </div>
            <div className="space-y-3">
              <img 
                src="/templefit/dashboard/media/media__1779142694661.jpg" 
                className="w-full h-64 md:h-80 object-cover object-top rounded-2xl border border-temple-gold/30 hover:border-temple-gold transition-colors shadow-2xl" 
                alt="Dirección de Garzones en Buffet"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <p className="text-center text-[9px] text-white/50 uppercase tracking-widest font-bold">Titulación IBTA en Acción</p>
            </div>
          </div>

          {/* Technical Certifications lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-temple-gold font-bold uppercase tracking-wider text-sm">Titulaciones Técnicas (IBTA)</h4>
              <ul className="space-y-4 text-xs text-gray-300">
                <li className="flex items-start">
                  <span className="text-temple-red mr-2 mt-0.5">✦</span>
                  <span><strong>Técnicas en Instrucción Corporal y de Relajamiento.</strong> Imagen personal - Instructor Fitness (Régimen de Estudio 4 meses y 150 horas Académicas).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-red mr-2 mt-0.5">✦</span>
                  <span><strong>Organización de Catering, eventos y Garzones.</strong> Régimen de Estudios de 6 meses y una carga horaria 240 horas Académicas (2024).</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <h4 className="text-temple-gold font-bold uppercase tracking-wider text-sm">Especializaciones</h4>
              <ul className="space-y-4 text-xs text-gray-300">
                <li className="flex items-start">
                  <span className="text-temple-red mr-2 mt-0.5">✦</span>
                  <span><strong>Diplomado en Principios bíblicos de Gobierno</strong> por Mgr. María Irene Squilliaci. Instituto Universitario Antonio Caso (120 horas Académicas, 30/Ene/2025).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-red mr-2 mt-0.5">✦</span>
                  <span><strong>Terapeuta de Resultados.</strong> Mini curso de 16 horas Académicas dictado por el Dr. Jair Suárez dos Santos (15/Mar/2026).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-red mr-2 mt-0.5">✦</span>
                  <span><strong>Capacitación Gastronómica</strong> por el Cheff Cristian Martinez Terán (IBTA).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Portafolio de Certificados Verificados */}
          <div className="pt-20 border-t border-white/10 space-y-16">
            <div className="text-center space-y-4">
              <p className="text-temple-gold font-bold uppercase text-[10px] tracking-[0.3em]">Evidencia Física de Excelencia</p>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-white uppercase">PORTAFOLIO DE CERTIFICADOS VERIFICADOS</h3>
              <p className="text-white/40 text-xs uppercase tracking-widest max-w-2xl mx-auto">
                Haz clic en cualquier certificado para ampliarlo y revisar su validez y sellos oficiales en alta resolución.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATES.map((cert) => (
                <div 
                  key={cert.id} 
                  onClick={() => setSelectedCert(cert)}
                  className="bg-white/5 border border-white/10 hover:border-temple-gold/40 transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group shadow-lg"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-black/60">
                    <img 
                      src={cert.img} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                      alt={cert.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                      <ZoomIn size={14} className="text-temple-gold" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-[9px] text-temple-gold font-bold uppercase tracking-wider">{cert.category}</p>
                      <h4 className="text-base font-bold text-white uppercase leading-snug group-hover:text-temple-gold transition-colors">{cert.title}</h4>
                      <p className="text-white/60 text-[10px] leading-relaxed">{cert.issuer}</p>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <span className="inline-block bg-temple-red/20 border border-temple-red/40 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {cert.hours}
                      </span>
                      <div className="flex justify-between items-center text-[9px] text-white/30 font-mono">
                        <span>{cert.meta}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-temple-gold transition-colors z-50 bg-white/10 hover:bg-white/20 p-2.5 rounded-full"
              onClick={() => setSelectedCert(null)}
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-temple-navy border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 bg-black flex items-center justify-center overflow-hidden max-h-[45vh] md:max-h-full">
                <img 
                  src={selectedCert.img} 
                  className="w-full h-full object-contain" 
                  alt={selectedCert.title} 
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-[10px] text-temple-gold font-bold uppercase tracking-wider">{selectedCert.category}</span>
                  <h3 className="text-2xl font-serif font-black uppercase text-white leading-tight">{selectedCert.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{selectedCert.issuer}</p>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div>
                    <span className="inline-block bg-temple-red text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {selectedCert.hours}
                    </span>
                  </div>
                  <div className="space-y-1 font-mono text-xs text-white/40">
                    <p>{selectedCert.meta}</p>
                    <p>FECHA: {selectedCert.date}</p>
                  </div>
                </div>
                
                <button 
                  className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-temple-gold/50 text-white font-bold uppercase tracking-widest text-xs rounded-xl transition-all"
                  onClick={() => setSelectedCert(null)}
                >
                  Cerrar Vista
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
