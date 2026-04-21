import { PieChart, TrendingUp, DollarSign, Briefcase } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-vintage-base p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-base">Dashboard Financiero y Societario</h1>
          <p className="text-navy-light mt-2">Panel privado Gerencia S.R.L.</p>
        </div>

        {/* Highlight KPI Rule */}
        <div className="bg-navy-base rounded-2xl p-6 md:p-8 text-vintage-light shadow-xl mb-8 border border-accent-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-accent-gold text-sm font-bold tracking-widest uppercase">Regla de Oro</span>
              <h2 className="font-serif text-4xl font-bold mt-2 mb-2">50% Reinversión / 50% Distribución</h2>
              <p className="opacity-80 max-w-xl">Modelo de crecimiento sostenible y retribución justa para todos los engranajes operativos de Templefit.</p>
            </div>
            <div className="w-24 h-24 rounded-full border-4 border-accent-gold flex items-center justify-center bg-navy-dark shadow-[0_0_30px_rgba(193,154,107,0.3)]">
              <PieChart className="w-10 h-10 text-accent-gold" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Utilitites Breakdown */}
          <div className="lg:col-span-2 bg-vintage-light rounded-2xl p-6 shadow-md border border-vintage-dark/30">
            <h3 className="font-serif text-xl font-bold text-navy-base mb-6 flex items-center gap-2">
              <TrendingUp className="text-accent-rust" /> Desglose del 50% de Distribución
            </h3>
            
            <div className="space-y-6">
              {/* Founder Section */}
              <div className="p-4 bg-navy-base/5 rounded-xl border border-navy-base/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-navy-base"></div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-navy-base">Fundador (35%)</h4>
                    <p className="text-sm text-navy-light">25% Operación + 10% Regalía Know-How</p>
                  </div>
                  <span className="text-xl font-serif font-bold text-navy-base">35.0%</span>
                </div>
                {/* Visual Bar */}
                <div className="w-full bg-vintage-base h-3 mt-4 rounded-full overflow-hidden">
                  <div className="bg-navy-base h-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              {/* Variable Commissions */}
              <div className="p-4 bg-accent-gold/5 rounded-xl border border-accent-gold/20 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent-gold"></div>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="font-bold text-navy-base">Comisiones Variables (15%)</h4>
                    <p className="text-sm text-navy-light">Distribuido entre equipos operativos</p>
                  </div>
                  <span className="text-xl font-serif font-bold text-accent-gold">15.0%</span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {[
                    { label: 'Ventas', val: '4%' },
                    { label: 'Marketing', val: '3%' },
                    { label: 'Instructores', val: '5%' },
                    { label: 'Cocina', val: '3%' },
                  ].map((item) => (
                    <div key={item.label} className="bg-vintage-light p-3 rounded shadow-sm text-center border border-vintage-dark/10">
                      <div className="text-xs text-navy-light uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="font-bold text-navy-base">{item.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-vintage-light rounded-2xl p-6 shadow-md border border-vintage-dark/30">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="text-sm text-navy-light uppercase tracking-widest font-bold">Fondo Reinversión</p>
                   <h4 className="font-serif text-3xl font-bold text-navy-base mt-2">$24,500</h4>
                 </div>
                 <div className="p-3 bg-navy-base/10 rounded-lg">
                   <DollarSign className="w-6 h-6 text-navy-base" />
                 </div>
               </div>
               <p className="text-xs text-accent-rust mt-4 font-medium">+12% vs mes anterior</p>
            </div>
            
            <div className="bg-vintage-light rounded-2xl p-6 shadow-md border border-vintage-dark/30">
               <div className="flex justify-between items-start">
                 <div>
                   <p className="text-sm text-navy-light uppercase tracking-widest font-bold">Escuadrones Activos</p>
                   <h4 className="font-serif text-3xl font-bold text-navy-base mt-2">12</h4>
                 </div>
                 <div className="p-3 bg-accent-gold/20 rounded-lg">
                   <Briefcase className="w-6 h-6 text-accent-gold" />
                 </div>
               </div>
               {/* API Integration Comment */}
               {/* TODO: Connect with CRM API for active squads attendance */}
               <p className="text-xs text-navy-light mt-4">Asistencia promedio: 94%</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
