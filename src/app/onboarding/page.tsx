'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const DISCIPLINES = ['Finanzas', 'Tecnología', 'Operaciones', 'Ventas', 'Marketing'];

const RISK_LABELS = [
  { value: 1, label: 'Conservador' },
  { value: 2, label: 'Moderado' },
  { value: 3, label: 'Alto Crecimiento' },
];


export default function Page() {
  const [discipline, setDiscipline] = useState<string | null>('Finanzas');
  const [risk, setRisk] = useState<number>(2);
  const [capital, setCapital] = useState<string>('');
  const [vision, setVision] = useState<string>('');
  const router = useRouter();

  function handleSave() {
    const payload = { discipline, risk, capital, vision };
    console.log('[Onboarding] Guardando perfil:', payload);
    // Aquí podrías conectar con la API
    router.push('/dashboard');
  }

  return (
    <div className="bg-surface-container-lowest text-on-background font-body min-h-screen selection:bg-primary-container/30">

      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0B0E14]/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center w-full px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">potted_plant</span>
          </div>
          <span className="text-2xl font-black text-white tracking-tighter font-headline">SeedPath</span>
        </div>
        <div />
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-12 pb-48">

        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white tracking-tight">
            Cuestionario de Evaluación Activa
          </h1>
          <p className="text-primary font-medium text-lg max-w-xl mx-auto">
            Cuéntanos tu verdadero yo, no tu yo percibido. Define tus cimientos estratégicos.
          </p>
        </header>

        <div className="space-y-8">

          {/* Card 1: Disciplina */}
          <section className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">work</span>
              <h2 className="text-xl font-semibold font-headline text-white">
                ¿Cuál es tu disciplina profesional primaria?
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {DISCIPLINES.map((d) => {
                const isActive = discipline === d;
                return (
                  <button
                    key={d}
                    onClick={() => setDiscipline(d)}
                    className={[
                      'px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95',
                      isActive
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-[#272a31] text-slate-400 hover:bg-[#32353c] hover:text-slate-200 border border-white/5',
                    ].join(' ')}
                  >
                    {d}
                  </button>
                );
              })}
              <button
                onClick={() => setDiscipline('Otro')}
                className={[
                  'px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-95 flex items-center gap-1',
                  discipline === 'Otro'
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                    : 'border border-white/10 text-primary hover:border-primary',
                ].join(' ')}
              >
                Otro [+ Agregar]
              </button>
            </div>
          </section>

          {/* Card 2: Capital */}
          <section className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">payments</span>
              <h2 className="text-xl font-semibold font-headline text-white">
                Ingresa manualmente los recursos con los que cuentas.
              </h2>
            </div>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-3xl font-bold text-blue-500">$</span>
              <input
                className="w-full bg-[#0b0e14]/50 border-b-2 border-white/10 focus:border-primary focus:ring-0 text-4xl font-bold text-white pl-12 py-4 transition-all placeholder:text-slate-700 outline-none"
                placeholder="0.00"
                type="number"
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
            </div>
            <p className="mt-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
              Entrada de datos crudos, sin autoevaluación.
            </p>
          </section>

          {/* Card 3: Visión */}
          <section className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <h2 className="text-xl font-semibold font-headline text-white">
                Describe el problema específico que te apasiona resolver.
              </h2>
            </div>
            <textarea
              className="w-full bg-[#0b0e14]/50 rounded-xl border border-white/10 focus:border-primary/60 focus:ring-1 focus:ring-primary/20 text-on-surface p-4 transition-all resize-none outline-none placeholder:text-slate-700"
              placeholder="ej: Micro-logística para pequeñas empresas en CDMX..."
              rows={4}
              value={vision}
              onChange={(e) => setVision(e.target.value)}
            />
          </section>

          {/* Card 4: Riesgo */}
          <section className="glass-card p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">speed</span>
              <h2 className="text-xl font-semibold font-headline text-white">
                Evalúa tu perfil de riesgo primario para un nuevo emprendimiento.
              </h2>
            </div>
            <div className="px-4">
              {/* Slider */}
              <input
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-500"
                style={{ background: `linear-gradient(to right, #3B82F6 ${((risk - 1) / 2) * 100}%, #272a31 ${((risk - 1) / 2) * 100}%)` }}
                max={3}
                min={1}
                step={1}
                type="range"
                value={risk}
                onChange={(e) => setRisk(Number(e.target.value))}
              />
              {/* Labels */}
              <div className="flex justify-between mt-6">
                {RISK_LABELS.map(({ value, label }) => {
                  const isActive = risk === value;
                  return (
                    <div key={value} className="text-center">
                      <span
                        className={[
                          'block font-bold uppercase tracking-tighter transition-all duration-200',
                          isActive
                            ? 'text-primary text-sm drop-shadow-[0_0_8px_rgba(173,198,255,0.6)]'
                            : 'text-slate-600 text-xs',
                        ].join(' ')}
                      >
                        {label}
                      </span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mx-auto mt-2 shadow-[0_0_10px_rgba(173,198,255,0.8)]" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

        </div>

        {/* Footer Actions */}
        <footer className="mt-16 flex flex-col items-center gap-8">
          <p className="text-sm text-slate-500 font-medium text-center">
            Estas entradas crudas alimentan a Gemini Pro para generar tu análisis final.
          </p>
          <div className="flex items-center gap-6 w-full md:w-auto">
            <button
              onClick={() => { setDiscipline(null); setRisk(2); setCapital(''); setVision(''); }}
              className="px-8 py-4 text-slate-500 font-semibold hover:text-white transition-colors"
            >
              Descartar Cambios
            </button>
            <button
              onClick={handleSave}
              className="flex-1 md:flex-none px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold font-headline tracking-tight shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              GENERAR MI HIPÓTESIS ✨
            </button>
          </div>
        </footer>

      </main>

      {/* Bottom Left Profile */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="flex items-center gap-4 bg-[#1d2026]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 pr-6 shadow-2xl">
          <div className="relative">
            <img
              alt="Avatar MickeyVIP"
              className="w-12 h-12 rounded-xl object-cover border border-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbdB7L2ewXxVcULrVIrsG1NAF4dV2wrl3Pm603is0Xa8FicLATPGtJ_uUfLBSg3NsqF3uD1-gosZsIc1ovvSqLSG56IB3zXe0Dr1tpJet2ZSIePloIPRX4GK2I7OEpghVT42A2wV9Ycbu5gzAqWsdAcVP70VX-7vTPdjAWKMHBrjdAQ--QAkRl-fnawVwhSAOECLuby71Yc3fZ0CzuqrjwpAgE48TnhJnJ4HB3uATsBDdXU8RjZkcjn3dFEWLXVGO9AtJEorTboBxA"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1d2026] rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-tight">MickeyVIP</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Arquitecto Senior</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10 mx-2" />
          <button
            aria-label="Cerrar sesión"
            className="text-slate-400 hover:text-red-400 transition-colors active:scale-95"
            onClick={() => router.push('/')}
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>

    </div>
  );
}
