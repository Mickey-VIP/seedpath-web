import Link from 'next/link';
export default function Home() {
  return (
    <>
      <main className="relative pt-6">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden hero-gradient">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary">Marco de Arquitectura Venture 2.0</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline font-bold text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-tight">
              Arquitecta tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Visión Emprendedora
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              Usa IA de nivel &apos;Venture Architect&apos; para definir, validar y lanzar tu próximo unicornio con una inversión inicial de $50,000 MXN.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-primary/20 flex-shrink-0"
                href="/onboarding"
              >
                Crea tu Camino Gratis ✨
              </Link>
              <Link href="/nosotros" className="px-10 py-5 border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-all flex-shrink-0">
                Explorar Metodología
              </Link>
            </div>
          </div>
          {/* Abstract Architectural Elements */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-video glass-panel rounded-t-[4rem] border-b-0 opacity-40 translate-y-24">
            <img
              className="w-full h-full object-cover rounded-t-[4rem] opacity-60"
              alt="Futuristic dark mode dashboard interface with complex data visualizations"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-XXTX3eLPq0cIHrrd1yTQRhsD3uSLijZU8cXIjAPYgiHo18aKolwkLXEY2KDOqKIy5EbehJ-hQdI2w_poXqMXyQ6xvgj27g3ZHN_MawLTg6Sv4VNJQL23aVQ7CvjKegePBis04ZUTxhJRpRwXJd8KJDMZ7MpjXAnYumV94ijwmSHmSOUU9KoLt0m087vofWF--qY6DeqrRdX3yudk7o0Vcu_prgmFt9_Z3IAleCHqByHKdPShRdbe_zqATUELbpVMoEi4gCLm5Mn"
            />
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-32 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature */}
            <div className="md:col-span-8 glass-panel rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">architecture</span>
                <h3 className="text-3xl font-headline text-white mb-4">Arquitectura de Nodos</h3>
                <p className="text-on-surface-variant text-lg max-w-md">
                  Visualiza tu modelo de negocio como una red validada por la metodología de SeedPath.
                </p>
              </div>
              <div className="mt-12 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <img
                  className="w-full h-64 object-cover rounded-[1.5rem]"
                  alt="Abstract 3D nodal web connecting floating translucent geometric cubes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq8LqhLfbpY_souEfBxDbERgA24IbbU4_68u5v2VElWERppGPOcsleSEfWhdSrPKocfLRkUmd0RJLXGQohgiet3zF8oF16b8CtjveXSIB1vS4uNbKD0CsybGm4Gd0i-nPLJR5jun2cj1aqLWBLDz04UF559KpEjMx_e4OvNFTP-IL8KxlEEYcQgW1sgCS-FS2eX4BjDq1a062See6htQUT0_nByg70M7bvEPyB_Tfg1dnaQmeEnRevhIbO4vAuVew9LGQDY2p8HUwv"
                />
              </div>
            </div>

            {/* Secondary Feature */}
            <div className="md:col-span-4 glass-panel rounded-[2rem] p-10 flex flex-col justify-between bg-gradient-to-br from-surface-container to-surface-container-high">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-6">rocket_launch</span>
                <h3 className="text-2xl font-headline text-white mb-4">Validación Hiper-Sónica</h3>
                <p className="text-on-surface-variant">
                  Prueba hipótesis de mercado en segundos con simulaciones de agentes sintéticos por solo $50,000 MXN.
                </p>
              </div>
              <div className="pt-8 space-y-4">
                <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-primary" />
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-primary">
                  <span>Madurez de Mercado</span>
                  <span>75%</span>
                </div>
              </div>
            </div>

            {/* Third Feature */}
            <div className="md:col-span-4 glass-panel rounded-[2rem] p-8">
              <span className="material-symbols-outlined text-tertiary text-4xl mb-6">auto_awesome</span>
              <h3 className="text-xl font-headline text-white mb-2">IA Generativa de Pitch</h3>
              <p className="text-on-surface-variant text-sm">
                Convierte tu arquitectura en decks de inversión profesionales y archivos PDF listos para exportar con un solo clic.
              </p>
            </div>

            {/* Profile anchor removed to avoid implying a logged-in session */}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
            <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-white mb-8">
              El futuro no se espera,<br />se construye.
            </h2>
            <Link
              className="inline-block px-12 py-6 bg-white text-surface-container-lowest text-xl font-bold rounded-full hover:bg-primary transition-colors hover:text-white"
              href="/onboarding"
            >
              Comienza la Arquitectura
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0b0e14] w-full relative py-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="font-headline text-lg font-bold text-white uppercase tracking-widest">SeedPath</div>
            <p className="text-slate-500 font-body text-sm tracking-wide max-w-sm">
              Empoderando a la próxima generación de arquitectos de negocios con herramientas de grado industrial.
            </p>
            <div className="text-slate-500 font-body text-sm tracking-wide">
              © 2024 SeedPath.
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-8">
            <div className="flex gap-8">
              <Link href="/legal" className="text-slate-500 hover:text-[#3B82F6] font-body text-sm tracking-wide transition-transform hover:translate-x-1">Privacidad</Link>
              <Link href="/legal" className="text-slate-500 hover:text-[#3B82F6] font-body text-sm tracking-wide transition-transform hover:translate-x-1">Términos</Link>
            </div>
            {/* Author card removed to avoid implying an active session */}
          </div>
        </div>
        {/* Decoration Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </footer>
    </>
  );
}