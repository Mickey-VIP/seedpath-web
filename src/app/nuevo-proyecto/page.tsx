export default function Page() {
  return (
    <div className="flex flex-col h-full text-on-surface selection:bg-primary/30">
      {/* Top App Bar (uses layout's sidebar spacing) */}
      <header className="w-full h-16 sticky top-0 z-10 flex items-center justify-between px-8 bg-transparent">
        <h1 className="font-headline text-lg font-medium text-primary">Workspace / Evaluación Narrativa</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-slate-400">
            <button className="material-symbols-outlined hover:text-primary transition-colors" data-icon="help_outline">help_outline</button>
          </div>
        </div>
      </header>

      {/* Main Content: full height, internal scroll */}
      <main className="flex-1 h-screen flex flex-col min-h-0">
        {/* Abstract Background */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <div className="h-screen overflow-y-scroll pb-24 custom-scrollbar">
          <div className="w-full max-w-4xl mx-auto px-8 py-8 space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight text-white">
                Cuestionario Paso 1: <span className="text-gradient">Bautiza y Define tu Visión</span>
              </h2>
              <p className="text-slate-400 font-body text-sm">
                Establece los cimientos narrativos crudos de tu proyecto.
              </p>
            </div>
            {/* Global Input */}
            <div className="max-w-2xl mx-auto w-full">
              <div className="relative group">
                <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 text-2xl py-4 transition-all duration-300 font-headline text-center placeholder:text-slate-700" placeholder="Nombre del Proyecto (ej. Nivelia, CartLab)" type="text" />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-primary transition-all duration-500 group-focus-within:w-full"></div>
              </div>
            </div>
            {/* Narrative Panels */}
            <div className="space-y-6 pt-4">
              {/* Panel 1 */}
              <div className="panel-glass rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
                  <h3 className="font-headline font-semibold text-lg text-white">El Dolor</h3>
                </div>
                <p className="text-sm text-slate-400 pl-11">Describe el problema central que busca resolver tu proyecto.</p>
                <div className="pl-11">
                  <textarea className="w-full min-h-[120px] dark-crystal-input rounded-xl p-4 text-sm font-body text-slate-300 placeholder:text-slate-600 focus:ring-0 resize-none" placeholder="ej: Poca visibilidad de datos en tiempo real para la toma de decisiones críticas..."></textarea>
                </div>
              </div>
              {/* Panel 2 */}
              <div className="panel-glass rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
                  <h3 className="font-headline font-semibold text-lg text-white">Tu Solución</h3>
                </div>
                <p className="text-sm text-slate-400 pl-11">¿Cómo describirías tu producto o servicio mínimo viable (MVP)?</p>
                <div className="pl-11">
                  <textarea className="w-full min-h-[120px] dark-crystal-input rounded-xl p-4 text-sm font-body text-slate-300 placeholder:text-slate-600 focus:ring-0 resize-none" placeholder="Describe brevemente la propuesta de valor técnica y funcional..."></textarea>
                </div>
              </div>
              {/* Panel 3 */}
              <div className="panel-glass rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
                  <h3 className="font-headline font-semibold text-lg text-white">Tu Mercado Objetivo (Inicial)</h3>
                </div>
                <p className="text-sm text-slate-400 pl-11">¿Qué tipo de usuario o empresa tiene este dolor de manera más crítica?</p>
                <div className="pl-11">
                  <textarea className="w-full min-h-[120px] dark-crystal-input rounded-xl p-4 text-sm font-body text-slate-300 placeholder:text-slate-600 focus:ring-0 resize-none" placeholder="Define el perfil de tu Early Adopter ideal..."></textarea>
                </div>
              </div>
            </div>
            {/* Footer Action */}
            <div className="flex flex-col items-center gap-6 pt-8 pb-12">
              <button className="w-full max-w-md bg-gradient-primary py-5 rounded-xl text-xs font-bold tracking-widest text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase">
                SIGUIENTE PASO: CIMIENTOS FORTALEZAS ✨
              </button>
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium uppercase tracking-widest">
                <span className="material-symbols-outlined text-xs" data-icon="auto_awesome">auto_awesome</span>
                <span>IA Engine: Procesando Contexto Narrativo</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
