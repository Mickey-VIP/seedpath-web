export default function Page() {
  return (
    <div className="bg-[#0b0e14] text-on-surface font-body selection:bg-primary/30">
        <main className="pt-8 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
          {/* Hero Section */}
          <header className="mb-20 text-center md:text-left">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-slate-50 mb-6">
              Legal &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Privacy</span>
            </h1>
            <p className="font-body text-slate-400 text-lg max-w-2xl leading-relaxed">
              Nuestros marcos legales están diseñados para proteger la integridad de los activos digitales y garantizar la transparencia en el procesamiento de datos arquitectónicos.
            </p>
          </header>
          <div className="space-y-12">
            <div className="space-y-12">
              {/* Section: Propiedad Intelectual */}
              <section className="glass-panel p-8 md:p-12 rounded-lg" id="intelectual">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="gavel">gavel</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-slate-50">Propiedad Intelectual</h2>
                </div>
                <div className="space-y-6 text-slate-400 leading-relaxed font-light">
                  <p>
                    Todo el software, los algoritmos, las interfaces y la documentación técnica de SeedPath son propiedad exclusiva de SeedPath Architecture S.A. No se permite la reproducción, distribución o ingeniería inversa sin autorización expresa por escrito.
                  </p>
                  <p>
                    Los diseños generados por los usuarios a través de nuestra plataforma mantienen la co-propiedad intelectual, permitiendo al usuario el uso comercial ilimitado mientras que SeedPath conserva el derecho de utilizar los metadatos para la optimización de modelos neuronales globales.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-primary text-sm mt-1" data-icon="verified">verified</span>
                      <span>Patentes de algoritmos de optimización espacial registradas internacionalmente.</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="material-symbols-outlined text-primary text-sm mt-1" data-icon="verified">verified</span>
                      <span>Derechos de autor sobre el motor de renderizado en tiempo real Obsidian Engine.</span>
                    </li>
                  </ul>
                </div>
              </section>
              {/* Section: Uso de Datos de IA */}
              <section className="glass-panel p-8 md:p-12 rounded-lg" id="ia-data">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary" data-icon="neurology">neurology</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-slate-50">Uso de Datos de IA</h2>
                </div>
                <div className="space-y-6 text-slate-400 leading-relaxed font-light">
                  <p>
                    En SeedPath, la privacidad de sus conjuntos de datos es nuestra prioridad absoluta. Los modelos de lenguaje y visión computacional se entrenan bajo protocolos de anonimización estricta (Zero-Knowledge Training).
                  </p>
                  <div className="bg-surface-container-high p-6 rounded-lg border-l-4 border-secondary/40">
                    <p className="italic text-sm">
                      "Ningún dato sensible del cliente es visible para los operadores humanos de SeedPath en ninguna etapa del proceso de inferencia de IA."
                    </p>
                  </div>
                  <p>
                    Utilizamos técnicas de encriptación homomórfica que permiten a nuestros servidores procesar cálculos complejos sobre sus datos sin necesidad de desencriptarlos, garantizando un entorno de trabajo 100% privado y seguro.
                  </p>
                </div>
              </section>
              {/* Section: Responsabilidad Financiera */}
              <section className="glass-panel p-8 md:p-12 rounded-lg" id="financiera">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-slate-50">Responsabilidad Financiera</h2>
                </div>
                <div className="space-y-6 text-slate-400 leading-relaxed font-light">
                  <p>
                    SeedPath Architecture no se hace responsable de las variaciones en los costos de construcción derivados de las estimaciones proporcionadas por la IA. Nuestras proyecciones son de carácter orientativo y deben ser validadas por profesionales financieros locales.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-4 rounded-lg bg-surface-container/50 border border-white/5">
                      <h4 className="text-slate-100 font-bold mb-2">Límites de Seguro</h4>
                      <p className="text-sm">Cobertura de hasta $5M USD en errores de diseño asistido por sistemas autónomos.</p>
                    </div>
                    <div className="p-4 rounded-lg bg-surface-container/50 border border-white/5">
                      <h4 className="text-slate-100 font-bold mb-2">Garantía de Suscripción</h4>
                      <p className="text-sm">Reembolso prorrateado disponible dentro de los primeros 14 días de contratación.</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-[#0b0e14] w-full py-12 border-t border-white/5 font-['Inter'] text-sm tracking-wide">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-lg font-black text-slate-100">SeedPath</span>
              <p className="text-slate-500">© 2024 SeedPath Architecture. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <a className="text-slate-500 hover:text-blue-300 transition-colors" href="#">Security</a>
              <a className="text-slate-500 hover:text-blue-300 transition-colors" href="#">Ethics</a>
              <a className="text-slate-500 hover:text-blue-300 transition-colors" href="#">Contact</a>
            </div>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-slate-400" data-icon="language">language</span>
              </a>
              <a className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors" href="#">
                <span className="material-symbols-outlined text-slate-400" data-icon="terminal">terminal</span>
              </a>
            </div>
          </div>
        </footer>
    </div>
  );
}
