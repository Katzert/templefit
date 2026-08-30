import Link from 'next/link';
import { Sun, ArrowRight } from 'lucide-react';

export default function RuleSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div className="p-8 md:p-14 rounded-[2rem] bg-white/80 dark:bg-gradient-to-r dark:from-[#0A0E17] dark:via-[#05070B] dark:to-[#0A0E17] border border-black/10 dark:border-white/5 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-xl">
        
        {/* Glow effects */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-temple-gold to-transparent opacity-40 dark:opacity-20" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-temple-gold/10 dark:bg-temple-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-800 dark:text-temple-gold-bright bg-temple-gold/15 dark:bg-temple-gold/10 px-4 py-2 rounded-full border border-temple-gold/30 dark:border-temple-gold/20 inline-block">
                La Regla de las 3 Horas Diarias
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-black uppercase text-slate-900 dark:text-white tracking-tight leading-tight text-balance">
                El Reto de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-temple-gold dark:from-temple-gold-bright dark:to-temple-gold">21 Días = ÍNTEGROS</span>
              </h2>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed font-light text-pretty">
                Durante 21 días reprogramas tus hábitos (dormir a las 22:00, despertar a las 06:00) y sigues esta rutina:
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-black/[0.03] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.04] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-lg border border-blue-500/20 shadow-sm">1h</div>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">Cuerpo: Entrenamiento</p>
                  <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed text-pretty">Calistenia, crossfit, fuerza y 3 litros de agua diarios.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-black/[0.03] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.04] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-black text-lg border border-amber-500/20 shadow-sm">1h</div>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">Mente: Nutrición y Enfoque</p>
                  <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed text-pretty">Respiración Buteyko, suplementación y entrenamiento en ventas.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-black/[0.03] dark:bg-white/[0.02] hover:bg-black/[0.05] dark:hover:bg-white/[0.04] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 transition-colors flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-black text-lg border border-emerald-500/20 shadow-sm">1h</div>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-1">Espíritu: Devocional</p>
                  <p className="text-xs text-slate-600 dark:text-gray-400 font-light leading-relaxed text-pretty">Lectura bíblica diaria, tiempo de quietud y enfoque familiar.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-black/5 dark:bg-black/40 backdrop-blur-md border border-black/10 dark:border-white/10 space-y-6 relative overflow-hidden group hover:border-temple-gold/40 transition-colors duration-500 shadow-xl dark:shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <Sun size={120} />
              </div>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-amber-500/15 dark:bg-temple-gold/20 rounded-xl text-amber-700 dark:text-temple-gold-bright border border-amber-500/30 dark:border-temple-gold/30 shadow-sm">
                  <Sun size={28} />
                </div>
                <h3 className="text-xl font-black uppercase text-slate-900 dark:text-white tracking-widest leading-tight">Sábados:<br/>CristoFit Camp (06:00 AM)</h3>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed font-light relative z-10 text-pretty">
                Cada sábado los escuadrones entrenan al amanecer, toman infusiones en el Snack Bar y hacen servicio comunitario (*&quot;Palabra y Pan&quot;* y *&quot;Ciudad ética sin Basura&quot;*). Una experiencia de pertenencia real.
              </p>
              
              <div className="pt-4 relative z-10">
                <Link
                  href="/escuadrones"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-amber-500/10 dark:bg-white/5 hover:bg-temple-gold hover:text-black dark:hover:bg-white/10 border border-amber-500/30 dark:border-white/10 text-xs font-black text-amber-900 dark:text-temple-gold-bright hover:text-black dark:hover:text-white uppercase tracking-widest rounded-xl transition-all duration-300 gap-3 group/btn focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-temple-gold"
                >
                  <span>Conocer los 25 Escuadrones</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
