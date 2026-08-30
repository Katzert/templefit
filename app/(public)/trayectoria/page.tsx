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
    img: 'dashboard/media/media__1779149990472.jpg',
    category: 'Instructor Fitness & Imagen Personal',
    title: 'Técnicas en Instrucción Corporal y de Relajamiento',
    issuer: 'Centro de Capacitación Técnica Privada IBTA (R.M. 0259/2019 del Ministerio de Educación de Bolivia)',
    hours: '150 Horas Académicas',
    meta: 'REGISTRO: Libro Nº 5, Foja 36',
    date: '05/AGO/2024'
  },
  {
    id: 'cert2',
    img: 'dashboard/media/media__1779149990428.jpg',
    category: 'Gestión de Servicio & Catering de Élite',
    title: 'Organización de Restaurantes, Eventos y Garzones',
    issuer: 'Centro de Capacitación Técnica Privada IBTA (R.M. 0259/2019 del Ministerio de Educación de Bolivia)',
    hours: '240 Horas Académicas',
    meta: 'REGISTRO: Libro Nº 13, Foja 075',
    date: '05/AGO/2024'
  },
  {
    id: 'cert3',
    img: 'dashboard/media/media__1779149990274.jpg',
    category: 'Liderazgo & Discipulado de Gobierno',
    title: 'Principios y Modelos para Reformar Naciones',
    issuer: 'CGN Institute - Concilio Global de Naciones & Instituto Universitario Antonio Caso (IUAC)',
    hours: '120 Horas Académicas',
    meta: 'MODALIDAD: Virtual Internacional',
    date: '30/ENE/2025'
  },
  {
    id: 'cert4',
    img: 'dashboard/media/media__1779225988764.jpg',
    category: 'Terapia de Resultados',
    title: 'Minicurso Terapeuta de Resultados',
    issuer: 'IBFT - Instituto Brasileiro de Formação de Terapeutas (Brasil)',
    hours: '16 Horas de Carga',
    meta: 'FIRMA: Dr. Jair Soares dos Santos',
    date: '15/MAR/2026'
  },
  {
    id: 'cert5',
    img: 'dashboard/media/media__1779225546898.jpg',
    category: 'Entrenamiento Funcional Avanzado',
    title: 'Aplicación Práctica del Entrenamiento Funcional',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026'
  },
  {
    id: 'cert6',
    img: 'dashboard/media/media__1779225546905.jpg',
    category: 'Biomecánica Deportiva',
    title: 'Biomecánica y Movimiento Corporal',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026'
  },
  {
    id: 'cert7',
    img: 'dashboard/media/media__1779225546923.jpg',
    category: 'Acondicionamiento Físico',
    title: 'Capacidades Físicas y el Entrenamiento Funcional',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026'
  },
  {
    id: 'cert8',
    img: 'dashboard/media/media__1779225546929.jpg',
    category: 'Fisioterapia & Kinesiología',
    title: 'Ejercicios Funcionales Terapéuticos y Rehabilitación Física',
    issuer: 'VirtuallCorp Consultora, dpp & Upllearn Global Free Education (Tarija - Bolivia)',
    hours: '40 Horas Académicas',
    meta: 'REGISTRO OFICIAL: 066478',
    date: '20/MAR/2026'
  }
];

export default function NeuroVentasPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const handleImgFallback = (e: React.SyntheticEvent<HTMLImageElement, Event>, relativePath: string) => {
    const target = e.currentTarget;
    if (!target.src.includes('templefit/')) {
      target.src = '/templefit/' + relativePath;
    }
  };

  return (
    <div className="bg-[#FBF9F5] dark:bg-[#05070B] text-temple-navy dark:text-white overflow-x-hidden min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 border-b border-temple-gold/25 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="dashboard/team_spirit.png" 
            onError={(e) => handleImgFallback(e, 'dashboard/team_spirit.png')}
            className="w-full h-full object-cover opacity-15 dark:opacity-25 filter grayscale contrast-125 scale-105" 
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

            {/* Grid of author images in action */}
            <div className="lg:col-span-5 flex items-end justify-center pr-4">
              <div className="flex -space-x-8 md:-space-x-12 overflow-hidden py-4">
                {[
                  'dashboard/media/media__1779142481129.jpg',
                  'dashboard/media/media__1779142481197.jpg',
                  'dashboard/media/media__1779142481265.jpg',
                  'dashboard/media/media__1779142481269.jpg',
                  'dashboard/media/media__1779142481315.jpg'
                ].map((src, i) => (
                  <motion.div 
                    key={i} 
                    className="relative group w-20 md:w-28 h-36 md:h-52 overflow-hidden rounded-2xl border-2 border-temple-gold/40 dark:border-white/20 hover:border-temple-gold shadow-2xl transition-all duration-300 bg-[#0E1424]"
                    whileHover={{ y: -10, zIndex: 20, scale: 1.08 }}
                  >
                    <img 
                      src={src} 
                      onError={(e) => handleImgFallback(e, src)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      alt={`Paulo Gil en Acción ${i+1}`}
                    />
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

      {/* Certificaciones y Credenciales */}
      <section className="py-20 md:py-28 bg-[#FBF9F5] dark:bg-[#07090E] relative border-t-8 border-temple-gold">
        <div className="container mx-auto px-6 max-w-6xl space-y-20">
          
          {/* Author Featured Cert Image */}
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-temple-gold/15 blur-[90px] rounded-full max-w-md mx-auto h-full pointer-events-none" />
            <img 
              src="dashboard/media/media__1779142594726.jpg" 
              onError={(e) => handleImgFallback(e, 'dashboard/media/media__1779142594726.jpg')}
              className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain relative z-10 rounded-2xl shadow-2xl border-2 border-temple-gold/50 hover:scale-105 transition-transform duration-300" 
              alt="Certificación Oficial Paulo Gil Cuéllar - TEMPLEFIT"
            />
          </div>

          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-black text-temple-navy dark:text-white uppercase tracking-tight">
              CERTIFICACIÓN OFICIAL TEMPLEFIT
            </h2>
            <p className="text-temple-gold font-bold uppercase text-xs tracking-[0.25em]">
              Neuroentrenamiento de Impacto en Ventas & Servicio
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest">
              ✦ Certificación con Resultados · 240 horas técnicas · Respaldo Ministerial R.M. 0259/2019
            </p>
            <div className="h-px w-20 bg-temple-gold/40 mx-auto" />
            <p className="text-temple-navy dark:text-white font-bold uppercase text-sm tracking-widest">
              Paulo Alberto Gil Cuéllar · Fundador & Lead Coach
            </p>
            <p className="text-slate-800 dark:text-slate-200 italic font-medium text-lg border-l-4 border-r-4 border-temple-gold px-6 py-2 inline-block">
              "Te llevaremos a la excelencia profesional mediante resultados, no por diplomas."
            </p>
          </div>
          
          {/* Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-8 border-t border-black/10 dark:border-white/10">
            <div className="space-y-6">
              <p className="text-temple-gold font-bold uppercase text-xs tracking-widest border-b border-black/10 dark:border-white/10 pb-2">
                Experiencia Práctica In Situ
              </p>
              <h3 className="text-2xl font-bold text-temple-navy dark:text-white uppercase tracking-tight">
                Servicio Protocolar y Dirección de Garzones
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Paulo Alberto Gil Cuéllar es un profesional titulado directamente vinculado a la excelencia en el servicio protocolar de atención, dirección de garzones y organización de catering. Su entrenamiento no es solo teoría, sino disciplina forjada en la exigencia real del servicio al cliente de alto nivel.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                'dashboard/media/media__1779142594729.jpg',
                'dashboard/media/media__1779142594777.jpg',
                'dashboard/media/media__1779142594814.jpg',
                'dashboard/media/media__1779142594821.jpg'
              ].map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-temple-gold shadow-lg transition-all duration-300 bg-[#0E1424]">
                  <img 
                    src={src} 
                    onError={(e) => handleImgFallback(e, src)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    alt={`Experiencia Paulo Gil ${i+1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action feature images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="space-y-3">
              <div className="h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-temple-gold/40 hover:border-temple-gold transition-colors shadow-2xl bg-[#0E1424]">
                <img 
                  src="dashboard/media/media__1779142694557.jpg" 
                  onError={(e) => handleImgFallback(e, 'dashboard/media/media__1779142694557.jpg')}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300" 
                  alt="Capacitación Gastronómica y Servicio"
                />
              </div>
              <p className="text-center text-[10px] text-slate-800 dark:text-slate-300 uppercase tracking-widest font-bold">Capacitación Gastronómica</p>
            </div>
            <div className="space-y-3">
              <div className="h-64 md:h-80 rounded-2xl overflow-hidden border-2 border-temple-gold/40 hover:border-temple-gold transition-colors shadow-2xl bg-[#0E1424]">
                <img 
                  src="dashboard/media/media__1779142694661.jpg" 
                  onError={(e) => handleImgFallback(e, 'dashboard/media/media__1779142694661.jpg')}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" 
                  alt="Dirección de Garzones en Buffet"
                />
              </div>
              <p className="text-center text-[10px] text-slate-800 dark:text-slate-300 uppercase tracking-widest font-bold">Titulación IBTA en Acción</p>
            </div>
          </div>

          {/* Technical Certifications lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#0C101A] p-8 rounded-2xl border border-black/10 dark:border-white/10 space-y-4 shadow-lg">
              <h4 className="text-temple-gold font-bold uppercase tracking-wider text-sm">Titulaciones Técnicas (IBTA)</h4>
              <ul className="space-y-4 text-xs text-slate-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5 font-bold">✦</span>
                  <span><strong>Técnicas en Instrucción Corporal y de Relajamiento.</strong> Imagen personal - Instructor Fitness (Régimen de Estudio 4 meses y 150 horas Académicas).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5 font-bold">✦</span>
                  <span><strong>Organización de Catering, eventos y Garzones.</strong> Régimen de Estudios de 6 meses y una carga horaria 240 horas Académicas (2024).</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#0C101A] p-8 rounded-2xl border border-black/10 dark:border-white/10 space-y-4 shadow-lg">
              <h4 className="text-temple-gold font-bold uppercase tracking-wider text-sm">Especializaciones & Diplomados</h4>
              <ul className="space-y-4 text-xs text-slate-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5 font-bold">✦</span>
                  <span><strong>Diplomado en Principios bíblicos de Gobierno</strong> por Mgr. María Irene Squilliaci. Instituto Universitario Antonio Caso (120 horas Académicas, 30/Ene/2025).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5 font-bold">✦</span>
                  <span><strong>Terapeuta de Resultados.</strong> Mini curso de 16 horas Académicas dictado por el Dr. Jair Soares dos Santos (15/Mar/2026).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2 mt-0.5 font-bold">✦</span>
                  <span><strong>Capacitación Gastronómica</strong> por el Cheff Cristian Martinez Terán (IBTA).</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Portafolio de Certificados Verificados */}
          <div className="pt-20 border-t border-black/10 dark:border-white/10 space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 bg-temple-gold/10 border border-temple-gold/30 text-temple-gold px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full">
                <Award size={14} />
                Galería de Títulos y Diplomas Oficiales
              </span>
              <h3 className="text-3xl md:text-5xl font-serif font-black text-temple-navy dark:text-white uppercase">PORTAFOLIO DE CERTIFICADOS VERIFICADOS</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs uppercase tracking-widest max-w-2xl mx-auto">
                Haz clic en cualquier certificado para ampliarlo en alta definición y revisar sus sellos oficiales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATES.map((cert) => (
                <div 
                  key={cert.id} 
                  onClick={() => setSelectedCert(cert)}
                  className="bg-white dark:bg-[#0C101A] border border-black/10 dark:border-white/10 hover:border-temple-gold transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-slate-100 dark:bg-black/60">
                    <img 
                      src={cert.img} 
                      onError={(e) => handleImgFallback(e, cert.img)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      alt={cert.title}
                    />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                      <ZoomIn size={16} className="text-temple-gold" />
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <p className="text-[10px] text-temple-gold font-bold uppercase tracking-wider">{cert.category}</p>
                      <h4 className="text-base font-bold text-temple-navy dark:text-white uppercase leading-snug group-hover:text-temple-gold transition-colors">{cert.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{cert.issuer}</p>
                    </div>
                    
                    <div className="space-y-4 pt-4 border-t border-black/5 dark:border-white/5">
                      <span className="inline-block bg-temple-gold/15 border border-temple-gold/30 text-temple-gold text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {cert.hours}
                      </span>
                      <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-white/40 font-mono">
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
              className="relative max-w-4xl w-full max-h-[88vh] bg-white dark:bg-[#0E1424] border-2 border-temple-gold rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="md:w-1/2 bg-black flex items-center justify-center overflow-hidden max-h-[45vh] md:max-h-full p-2">
                <img 
                  src={selectedCert.img} 
                  onError={(e) => handleImgFallback(e, selectedCert.img)}
                  className="w-full h-full object-contain rounded-xl" 
                  alt={selectedCert.title} 
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs text-temple-gold font-bold uppercase tracking-wider">{selectedCert.category}</span>
                  <h3 className="text-2xl font-serif font-black uppercase text-temple-navy dark:text-white leading-tight">{selectedCert.title}</h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-black/5 dark:bg-white/5 p-4 rounded-xl border border-black/5 dark:border-white/5">
                    {selectedCert.issuer}
                  </p>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-black/10 dark:border-white/10">
                  <div>
                    <span className="inline-block bg-temple-gold text-black font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                      {selectedCert.hours}
                    </span>
                  </div>
                  <div className="space-y-1 font-mono text-xs text-slate-600 dark:text-slate-400">
                    <p>{selectedCert.meta}</p>
                    <p>FECHA: {selectedCert.date}</p>
                  </div>
                </div>
                
                <button 
                  className="w-full py-3.5 bg-gradient-to-r from-temple-gold to-amber-600 text-black font-black uppercase tracking-widest text-xs rounded-xl shadow-lg hover:brightness-110 transition-all"
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
