'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';
import { InlineEdit } from '@/components/ui/inline-edit';
import { Eye, Edit2 } from 'lucide-react';

const DEFAULT_CONTENT = {
  franTitle: "EXPANDE TU DOMINIO",
  franSubtitle: "Integramos nuestra operación de alto rendimiento en tu club o franquicia. Elevamos la retención y el ticket promedio con el 'Efecto Escuadrón'.",
};

export default function FranquiciasPage() {
  const { user } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [content, setContent] = useState(DEFAULT_CONTENT);

  useEffect(() => {
    const saved = localStorage.getItem('templefit_fran_content');
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
    localStorage.setItem('templefit_fran_content', JSON.stringify(updated));
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

  return (
    <div className="animate-fade-in-up pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center py-20 px-6">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-20"
          style={{ backgroundImage: "url('https://katzert.github.io/templefit/dashboard/bg_dynamic.png')" }}
        />
        <div className="absolute inset-0 bg-temple-navy-dark/90 backdrop-blur-sm" />
        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1 bg-temple-red/10 border border-temple-red/30 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] text-temple-red">
            DIVISIÓN CORPORATIVA & ALIANZAS
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-black uppercase text-white leading-tight">
            {renderEditableText('franTitle')}
          </h1>
          <div className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            {renderEditableText('franSubtitle', 'block', true)}
          </div>
          <div className="pt-4">
            <a 
              href="https://wa.me/59169127691?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20franquicias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-temple-gold text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-temple-gold-bright transition"
            >
              Agendar Presentación Ejecutiva
            </a>
          </div>
        </div>
      </section>

      {/* Venture Details */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-temple-gold mb-2">VENTAJA COMPETITIVA</p>
            <h2 className="text-2xl md:text-4xl font-serif font-black uppercase text-white">
              EL JOINT VENTURE <span className="text-temple-gold italic">GANADOR</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2">
              TempleFit no es solo un programa, es una infraestructura de fidelización masiva.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Modelo de Retención', desc: 'Nuestra metodología CristoFit e impacto comunitario eleva un 40% la retención promedio de alumnos.' },
              { title: 'Optimización de Espacios', desc: 'Transformamos áreas subutilizadas de gimnasios en centros de impacto de alta facturación.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-temple-navy/40 border border-white/5 rounded-2xl">
                <h3 className="text-lg font-bold text-temple-gold uppercase mb-2">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
              isEditMode ? 'bg-temple-gold text-black border-temple-gold' : 'bg-white/5 text-white border-white/10 hover:border-temple-gold/50'
            }`}
          >
            {isEditMode ? <Eye size={12} /> : <Edit2 size={12} />}
            {isEditMode ? 'Ver Sitio Real' : 'Editar Sitio'}
          </button>
        </div>
      )}
    </div>
  );
}
