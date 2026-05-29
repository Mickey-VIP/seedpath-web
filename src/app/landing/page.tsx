"use client";

import Link from 'next/link';

export default function Page() {
  // Landing uses full width header (no sidebar offset)

  return (
    <>
      <main className="relative pt-6">
        <section className="relative min-h-[720px] flex items-center justify-center overflow-hidden hero-gradient">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary">Marco de Arquitectura Venture 2.0</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-headline font-bold text-white tracking-tighter mb-6 max-w-4xl mx-auto leading-tight">
              Arquitecta tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Visión Emprendedora</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Usa IA de nivel 'Venture Architect' para definir, validar y lanzar tu próximo unicornio con una inversión inicial de $50,000 MXN.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/onboarding" className="px-8 md:px-10 py-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                Crea tu Camino Gratis ✨
              </Link>
              <Link href="/nosotros" className="px-8 md:px-10 py-4 glass-panel text-white text-lg font-medium rounded-full hover:bg-white/5 transition-all">
                Explorar Metodología
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 glass-panel rounded-[1.5rem] p-8">
              <h3 className="text-2xl font-headline text-white mb-4">Arquitectura de Nodos</h3>
              <p className="text-on-surface-variant text-lg max-w-md">Visualiza tu modelo de negocio como una red validada por la metodología de SeedPath.</p>
            </div>
            <div className="md:col-span-4 glass-panel rounded-[1.5rem] p-8">
              <h3 className="text-xl font-headline text-white mb-4">Validación Hiper-Sónica</h3>
              <p className="text-on-surface-variant text-sm">Prueba hipótesis de mercado en segundos con simulaciones de agentes sintéticos.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b0e14] w-full relative py-12">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-lg font-bold text-white uppercase tracking-widest">SeedPath</div>
            <p className="text-slate-500 text-sm max-w-sm">Empoderando a la próxima generación de arquitectos de negocios con herramientas de grado industrial.</p>
            <div className="text-slate-500 text-sm">© 2024 SeedPath.</div>
          </div>
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-8">
              <Link href="/legal" className="text-slate-500 hover:text-[#3B82F6] text-sm tracking-wide transition-transform hover:translate-x-1">Privacidad</Link>
              <Link href="/legal" className="text-slate-500 hover:text-[#3B82F6] text-sm tracking-wide transition-transform hover:translate-x-1">Términos</Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .glass-panel { background: rgba(50, 53, 60, 0.4); backdrop-filter: blur(24px); border: 1px solid rgba(140,144,159,0.06); }
        .hero-gradient { background: radial-gradient(circle at top right, rgba(59,130,246,0.08), transparent), radial-gradient(circle at bottom left, rgba(139,92,246,0.06), transparent); }
      `}</style>
    </>
  );
}
