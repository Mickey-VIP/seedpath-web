export default function Page() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body antialiased selection:bg-primary/30">
        <main className="pt-24 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
          {/* Section: Vision (Bento-inspired asymmetrical layout) */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-32">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest text-primary text-xs font-medium tracking-wider uppercase">
                <span className="material-symbols-outlined text-sm">architecture</span>
                Tesis Editorial
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight tracking-tighter text-on-surface">
                Arquitectura de <br />
                <span className="gradient-text">Nueva Generación</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                SeedPath democratiza el acceso a metodologías de Venture Capital usando IA avanzada, permitiendo a emprendedores modelar su visión con rigor arquitectónico.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-square glass-panel rounded-lg flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50"></div>
                <img className="w-full h-full object-cover mix-blend-lighten scale-110 group-hover:scale-100 transition-transform duration-700" data-alt="Abstract 3D crystalline structure representing complex data architecture with blue and purple light refractions in dark space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOwxiJqaYh7AhZ7jSjzXkTiT3nryZ0fpgS4UKBhZ2XL5ULbkFKKN6bMxojROe6JJR4_ngYwm5Bb4lU_1dNBFXWpicabk26BiDIRGX_yeuay58i-UCtXR7Hai8AB1iomzlurvHPD7FDHOfrT-07FCEai4Cf9aJvpKjsSsHn4bwMKv9JoI8jDvOPeCBqN9XpQR3dBWEsxiJuhdWgypkxoPTlJgnGScRT5CqtdGeXkB24MVdPvEJnK_0R9z4vRumxNqRCXbaaolzLJF75" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
              </div>
            </div>
          </section>
          {/* Section: El Modelo (Glass Pilares) */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-headline font-semibold text-on-surface">El Modelo</h2>
                <p className="text-on-surface-variant">Un flujo algorítmico diseñado para la precisión.</p>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-outline-variant/30 to-transparent hidden md:block mb-4 ml-12"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Pilar 1 */}
              <div className="glass-panel p-8 rounded-lg group hover:bg-surface-container-high transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary" data-icon="database">database</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 text-on-surface">1. Extracción de Datos Crudos</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Capturamos inputs estratégicos del ecosistema para alimentar el motor de análisis con información de alta fidelidad.
                </p>
              </div>
              {/* Pilar 2 */}
              <div className="glass-panel p-8 rounded-lg group hover:bg-surface-container-high transition-all duration-500 border-primary/20 bg-surface-container-high/40">
                <div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary" data-icon="psychology">psychology</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 text-on-surface">2. Análisis de Viabilidad Algorítmica</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Modelado predictivo avanzado que evalúa cada faceta de la venture mediante redes neuronales propietarias.
                </p>
              </div>
              {/* Pilar 3 */}
              <div className="glass-panel p-8 rounded-lg group hover:bg-surface-container-high transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary" data-icon="alt_route">alt_route</span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-3 text-on-surface">3. Roadmap de Ejecución</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Transformamos el análisis en hitos accionables y medibles, construyendo el camino crítico hacia el éxito.
                </p>
              </div>
            </div>
          </section>
          {/* Section: El Equipo (Circular Cards) */}
          <section className="mb-12">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-headline font-bold text-on-surface">El Equipo</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">Mentes visionarias fusionando estrategia humana con precisión tecnológica.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24">
              {/* Founder */}
              <div className="flex flex-col items-center group">
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-lowest">
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Professional portrait of a visionary male founder with confident expression and soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmSf66lpz-zi44ljxeD1afdHlzrZ65HKz_PRO8JxetXX-mS2dXExUJ0GTiILzliZQhYKx50INT1-yN5uq8TVw026jD1KGsviwhdex-vU5LRuY9Kw7y7HWBWjpJ-4OdXUV8CCN1tpLtSragDT8QI9GCxJZvcth-DK9kCiPKOsmchV3bT_RlqBShOrgQX6PwVF7SEm9ozyMRpN5m2us78Hs58YVhklHm4cuZ43BebrX4Ps73ezk5N7EOeim61Xq_XpEc-DSq552-q9HB" />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 right-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Founder</div>
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface">MickeyVIP</h4>
                <p className="text-primary text-sm font-medium">Founder &amp; Visionary</p>
              </div>
              {/* Growth */}
              <div className="flex flex-col items-center group">
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 rounded-full border border-white/10 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-lowest">
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Headshot of a strategic growth expert with sharp professional features and blue-toned ambient light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh6sKUUqObRIdCrxu_Ntcrqe3LmDZ_kW-g8Sbrulvgf7S6IgF816MSxlkC5S3wJWspfi3YZBX1QU7sWQRhHwFm_0QJZl0_C1bNIgaJ7dttcEiRQOQTkSGkZy6JDTWOrPxAGMsx-SnJ5GTmg0KmUvUqC4hoUP370L7988BLY9eMz2AiApNyvVUhIoEQLqwafX4lnX_TuiG65TLDeoci3_Ly88PsdqqHK7tZE5bsLyjyibwRCIcJS-3O6gsmSjZaRp2XN0Tqtw-mQbrn" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface">Salvador Alvarez</h4>
                <p className="text-on-surface-variant text-sm">Growth Strategy</p>
              </div>
              {/* Tech */}
              <div className="flex flex-col items-center group">
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 rounded-full border border-white/10 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-lowest">
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Portrait of a technology lead looking ahead with a focused gaze and high-tech digital atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdC7CBW7vgtnETjoxSzKdD3CJ2dHvFmYZb52PV-cHiyyTHyKAo6DfYEUJK4ZdbyMAWw_ka0Tz5y8U2qx59F6rXS5plk6QSBMJ4Ze_pqVDwt9YVPkIj2NJaOx8yLinJEhZh1VvOZ3K-nUjy3wBIjOA4Xdwo2mALgWLBvmNGj7SA7kln3w4mMUSGbf8s2D28qo-r9bHwGiUw595YgNS_eG_mqWiwcYZ6Xhqnq1GLxNVgmiN3S4hE0gkLYabcUCEUCXSAubJohobL1Mz6" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-headline font-bold text-on-surface">Ricardo Gomez</h4>
                <p className="text-on-surface-variant text-sm">Tech Lead</p>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="w-full py-12 mt-auto bg-[#0b0e14] border-t border-white/5 font-['Inter'] text-sm antialiased">
          <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto gap-6">
            <div className="text-lg font-black text-slate-200">
              SeedPath
            </div>
            <div className="flex gap-8 items-center">
              <a className="text-white font-semibold hover:text-blue-400 transition-colors" href="#">Landing Page</a>
              <a className="text-slate-500 hover:text-blue-400 transition-colors" href="#">Privacidad</a>
              <a className="text-slate-500 hover:text-blue-400 transition-colors" href="#">Términos</a>
            </div>
            <div className="text-slate-500 opacity-80">
              © 2024 SeedPath. The Obsidian Architect Blueprint.
            </div>
          </div>
        </footer>
    </div>
  );
}
