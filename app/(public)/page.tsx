'use client';

import { useState, useEffect } from 'react';
import { Flame, Shield, Users, ArrowRight, Brain, Target, TrendingUp, Eye, Edit2 } from 'lucide-react';
import { siteConfig } from '@/data/content';
import { useAuth } from '@/context/AuthContext';
import { InlineEdit } from '@/components/ui/inline-edit';

const IconMap: Record<string, any> = {
  Flame,
  Shield,
  Users,
  Brain,
  Target,
  TrendingUp
};

const TestimonialIconMap: Record<string, any> = {
  Target,
  Users,
  Brain
};

const DEFAULT_CONTENT = {
  heroTitle1: "FORJANDO",
  heroTitle2: "CARÁCTER",
  heroTitle3: "INQUEBRANTABLE",
  heroSubtitle: "Entrenamiento híbrido, nutrición bio-optimizada y una comunidad de valores eternos diseñada para transformar tu físico y tu mente en 21 Días.",
  sectionTitle: "4 UNIDADES DE IMPACTO",
  unit1Title: "Reto 21 Días",
  unit1Desc: "Programa intensivo de transformación. Hábitos, nutrición y comunidad para reiniciar tu metabolismo y tu mente.",
  unit2Title: "TempleFit Base",
  unit2Desc: "Entrenamiento funcional diario diseñado para forjar disciplina, fuerza real y resistencia inquebrantable.",
  unit3Title: "Neuro Espiritual",
  unit3Desc: "Mentoría enfocada en inteligencia emocional, ventas y liderazgo bajo principios eternos.",
  unit4Title: "Sábado CristoFit",
  unit4Desc: "Nuestra reunión semanal cumbre. Integración, entrenamiento al aire libre y crecimiento espiritual comunitario.",
  counter1Val: "+500",
  counter1Lbl: "Vidas Transformadas",
  counter2Val: "21",
  counter2Lbl: "Días de Forja",
  counter3Val: "100%",
  counter3Lbl: "Compromiso Radical",
  counter4Val: "∞",
  counter4Lbl: "Crecimiento Continuo",
  testimonialTitle: "HISTORIAS DE TRASCENDENCIA",
  ctaTitle: "¿LISTO PARA TRASCENDER?",
};

export default function Home() {
  const { user } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState(DEFAULT_CONTENT);

  useEffect(() => {
    const saved = localStorage.getItem('templefit_home_content');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const merged = { ...DEFAULT_CONTENT };
        Object.keys(DEFAULT_CONTENT).forEach((k) => {
          const key = k as keyof typeof DEFAULT_CONTENT;
          if (parsed[key] !== undefined && parsed[key] !== null && parsed[key].trim() !== '') {
            merged[key] = parsed[key];
          }
        });
        setContent(merged);
      } catch (e) {
        setContent(DEFAULT_CONTENT);
      }
    }
  }, []);

  const updateContent = (key: keyof typeof DEFAULT_CONTENT, value: string) => {
    const updated = { ...content, [key]: value };
    setContent(updated);
    localStorage.setItem('templefit_home_content', JSON.stringify(updated));
  };

  const resetContent = () => {
    if (window.confirm('¿Estás seguro de que deseas restablecer los textos de la página principal a los originales?')) {
      setContent(DEFAULT_CONTENT);
      localStorage.setItem('templefit_home_content', JSON.stringify(DEFAULT_CONTENT));
    }
  };

  const renderEditableText = (key: keyof typeof DEFAULT_CONTENT, className?: string, multiline = false) => {
    if (isEditMode && user?.role === 'admin') {
      return (
        <InlineEdit
          value={content[key]}
          onSave={(val) => updateContent(key, val)}
          multiline={multiline}
          className={className}
        />
      );
    }
    return <span className={className}>{content[key]}</span>;
  };

  const features = [
    {
      id: "reto21",
      title: content.unit1Title,
      description: content.unit1Desc,
      icon: "Target",
      color: "temple-gold"
    },
    {
      id: "entrenamiento",
      title: content.unit2Title,
      description: content.unit2Desc,
      icon: "Flame",
      color: "temple-red"
    },
    {
      id: "neuro",
      title: content.unit3Title,
      description: content.unit3Desc,
      icon: "Brain",
      color: "temple-gold"
    },
    {
      id: "sabado",
      title: content.unit4Title,
      description: content.unit4Desc,
      icon: "Users",
      color: "temple-navy"
    }
  ];

  const testimonials = [
    {
      text: "No es solo sudar, es entrenar con propósito. Las unidades de impacto me ayudaron a transformar no solo mi cuerpo sino mi visión de los negocios.",
      author: "Marcos V.",
      role: "Reto 21 Días",
      initial: "M"
    },
    {
      text: "La hermandad que se forma aquí es real. Sábado CristoFit se ha convertido en el mejor momento de mi semana.",
      author: "Elena R.",
      role: "Atleta TempleFit",
      initial: "E"
    },
    {
      text: "Integrar mi fe con mis objetivos de salud y liderazgo empresarial me dio la claridad mental que buscaba.",
      author: "Carlos D.",
      role: "Neuro Espiritual",
      initial: "C"
    }
  ];

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/templefit/dashboard/hero_mission.png')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col justify-center min-h-[70vh]">
          <div className="max-w-4xl space-y-8">
            <div className="inline-block px-4 py-1.5 border border-temple-gold/30 bg-temple-gold/10 backdrop-blur-md rounded-full">
              <span className="label-tactical text-temple-gold">ELITE TRAINING DIVISION</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              <span className="block text-white/90">{renderEditableText('heroTitle1')}</span>
              <span className="block elegant-title text-temple-gold">{renderEditableText('heroTitle2')}</span>
              <span className="block text-white/90">{renderEditableText('heroTitle3')}</span>
            </h1>
            
            <div className="max-w-2xl text-lg md:text-2xl text-white/70 font-medium leading-relaxed border-l-2 border-temple-gold pl-6">
              {renderEditableText('heroSubtitle', 'block', true)}
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6">
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.message)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 bg-temple-gold text-temple-navy-dark px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Unirse al Escuadrón
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Key Values (Bento Grid) */}
      <section className="py-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <span className="label-tactical mb-2 block">SISTEMA INTEGRAL</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
              {renderEditableText('sectionTitle')}
            </h2>
          </div>

          <div className="bento-grid">
            {features.map((feature, idx) => {
              const Icon = IconMap[feature.icon];
              return (
                <div key={feature.id} className="tactical-card group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 text-white">
                    {Icon && <Icon className="w-32 h-32" />}
                  </div>
                  
                  <div className={`w-12 h-12 rounded-xl mb-8 flex items-center justify-center bg-white/5 border border-white/10 text-${feature.color}`}>
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  
                  <div className="mt-auto z-20">
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {renderEditableText(`unit${idx+1}Title` as any)}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">
                      {renderEditableText(`unit${idx+1}Desc` as any, 'block', true)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Stats Row */}
      <section className="py-16 bg-temple-navy-dark/50 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
            {[
              { val: 'counter1Val', lbl: 'counter1Lbl', tac: 'COMUNIDAD' },
              { val: 'counter2Val', lbl: 'counter2Lbl', tac: 'SISTEMA' },
              { val: 'counter3Val', lbl: 'counter3Lbl', tac: 'ENFOQUE' },
              { val: 'counter4Val', lbl: 'counter4Lbl', tac: 'PROYECCIÓN', color: 'text-temple-gold' },
            ].map((stat, i) => (
              <div key={i} className="space-y-3">
                <p className="label-tactical">{stat.tac}</p>
                <div className={`text-5xl md:text-6xl font-black elegant-title ${stat.color || 'text-white'}`}>
                  {renderEditableText(stat.val as any)}
                </div>
                <div className="text-white/40 uppercase tracking-widest text-[10px] font-bold">
                  {renderEditableText(stat.lbl as any)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof (Bento Grid) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/templefit/dashboard/bg_dynamic.png')] bg-cover opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-16 max-w-2xl">
            <span className="label-tactical mb-2 block text-temple-red">TESTIMONIOS</span>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
              {renderEditableText('testimonialTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => {
              const Icon = TestimonialIconMap[Object.keys(TestimonialIconMap)[i % 3]];
              return (
                <div key={i} className="tactical-card group">
                    <div className="mb-8 w-10 h-10 rounded-full bg-temple-navy flex items-center justify-center border border-white/10 text-temple-gold">
                        {Icon && <Icon className="w-5 h-5" />}
                    </div>
                    <p className="text-white/80 text-lg mb-8 leading-relaxed font-medium">
                      &quot;{t.text}&quot;
                    </p>
                    <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-temple-gold font-bold text-sm elegant-title">
                        {t.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm tracking-tight">{t.author}</h4>
                        <span className="text-temple-gold font-bold text-[10px] uppercase tracking-widest">{t.role}</span>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden border-t border-temple-gold/20">
        <div className="absolute inset-0 bg-gradient-to-t from-temple-navy-dark to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-scroll md:bg-fixed mix-blend-luminosity"></div>
        <div className="relative container mx-auto px-4 text-center space-y-12">
          <span className="label-tactical text-temple-red animate-pulse block">OPERACIÓN ACTIVA</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase elegant-title not-italic tracking-tighter">
            {renderEditableText('ctaTitle')}
          </h2>
          <div className="pt-8">
            <a 
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank" 
              className="inline-flex items-center gap-4 bg-white text-temple-navy-dark px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-temple-gold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
            >
              Reservar Mi Cupo Ahora
              <Target className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Admin Floating Control Bar */}
      {user?.role === 'admin' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/90 border border-temple-gold/40 rounded-2xl py-3.5 px-6 shadow-2xl backdrop-blur-xl flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-temple-gold animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">ADMIN CONTROL PANEL</span>
          </div>
          
          <div className="h-5 w-px bg-white/10" />

          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border transition-all ${
              isEditMode 
                ? 'bg-temple-gold text-black border-temple-gold' 
                : 'bg-white/5 text-white border-white/10 hover:border-temple-gold/50'
            }`}
          >
            {isEditMode ? <Eye size={12} /> : <Edit2 size={12} />}
            {isEditMode ? 'Ver Sitio Real' : 'Editar Sitio'}
          </button>

          <button
            onClick={resetContent}
            className="px-3 py-1.5 bg-transparent border border-temple-red/30 text-temple-red hover:bg-temple-red hover:text-white transition-all rounded-lg text-[10px] font-bold uppercase tracking-wider"
          >
            Restablecer Textos
          </button>
        </div>
      )}
    </div>
  );
}
