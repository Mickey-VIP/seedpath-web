export default function Page() {
  return (
    <div className="bg-surface-container-lowest text-on-background font-body h-full overflow-hidden">
        {/* Main Content Area (global Sidebar lives in layout.tsx) */}
        <div className="pt-10 px-12 pb-12 h-full overflow-y-auto">
           <div className="mb-6">
             <h2 className="text-6xl font-headline font-black tracking-tight" style={{ color: 'var(--color-primary, #3B82F6)', letterSpacing: '-0.03em' }}>PROJECT VAULT</h2>
           </div>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Hero Card: SeedPath */}
            <div className="col-span-12 lg:col-span-8 glass-card rounded-lg p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <span className="material-symbols-outlined text-blue-400/20 text-9xl transform rotate-12 group-hover:rotate-0 transition-transform duration-700" data-icon="architecture">architecture</span>
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      Arquitectando
                    </span>
                    <span className="text-on-surface-variant/40 text-xs">ID: SP-0882</span>
                  </div>
                  <h3 className="text-4xl font-headline font-bold text-white mb-4">SeedPath</h3>
                  <p className="text-on-surface-variant max-w-md mb-8">Plataforma de visualización de nodos para el análisis de flujos de capital en etapas tempranas.</p>
                </div>
                <div className="w-full space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-medium text-white">Progreso de Arquitectura</span>
                    <span className="text-2xl font-headline font-bold text-primary">80%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[80%] rounded-full shadow-[0_0_15px_rgba(173,198,255,0.4)]"></div>
                  </div>
                  <div className="pt-4">
                    <button className="bg-gradient-to-r from-primary to-secondary text-on-primary-container px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all active:scale-95">
                      <span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
                      Abrir Arquitectura
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Stats Card: Side Bento */}
            <div className="col-span-12 lg:col-span-4 glass-card rounded-lg p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl text-tertiary" data-icon="token">token</span>
              </div>
              <h4 className="text-white font-headline text-xl font-bold mb-2">Token de Sesión</h4>
              <p className="text-on-surface-variant text-sm mb-6">Su identidad MickeyVIP está verificada para acceso de alta seguridad.</p>
              <div className="w-full h-[1px] bg-white/10 mb-6"></div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-500 tracking-tighter">Proyectos Activos</p>
                  <p className="text-2xl font-bold text-white">12</p>
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-slate-500 tracking-tighter">Colaboradores</p>
                  <p className="text-2xl font-bold text-white">04</p>
                </div>
              </div>
            </div>
            {/* Project Card: Nivelia */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-lg p-6 group">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary" data-icon="lightbulb">lightbulb</span>
                </div>
                <span className="px-2 py-1 rounded-md bg-tertiary/20 text-tertiary text-[10px] font-bold">IDEA</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2">Nivelia</h3>
              <p className="text-on-surface-variant text-sm mb-8 line-clamp-2">Protocolo descentralizado para la nivelación de activos sintéticos en mercados emergentes.</p>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>ESTADO</span>
                  <span>20%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary w-[20%]"></div>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium text-sm transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="visibility">visibility</span>
                Abrir Arquitectura
              </button>
            </div>
            {/* Project Card: CartLab */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-lg p-6 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-400" data-icon="science">science</span>
                </div>
                <span className="px-2 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] font-bold">PAUSADO</span>
              </div>
              <h3 className="text-2xl font-headline font-bold text-white mb-2 text-slate-400">CartLab</h3>
              <p className="text-on-surface-variant text-sm mb-8 line-clamp-2 opacity-50">Laboratorio de cartografía predictiva para logística autónoma urbana.</p>
              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>DETENIDO</span>
                  <span>0%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-700 w-[0%]"></div>
                </div>
              </div>
              <button className="w-full py-3 rounded-xl border border-white/5 bg-white/5 text-slate-500 font-medium text-sm transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm" data-icon="lock">lock</span>
                Abrir Arquitectura
              </button>
            </div>
            {/* Add Project Bento */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-lg p-6 border-dashed border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-primary/40" data-icon="add_circle">add_circle</span>
              </div>
              <h3 className="text-white font-headline font-bold mb-1">Nueva Semilla</h3>
              <p className="text-slate-500 text-xs px-8">Comience el diseño de una nueva estructura arquitectónica de negocio.</p>
            </div>
          </div>
        </div>
        {/* Visual Accents */}
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        <div className="fixed bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-tertiary/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>
    </div>
  );
}
