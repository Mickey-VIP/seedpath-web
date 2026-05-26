export default function Page() {
    return (
        <div className="h-full w-full mesh-gradient bg-surface-container-lowest text-on-surface antialiased">
            <main className="h-full min-h-0 flex flex-col relative">
                {/* TopNavBar */}
                <header className="flex items-center justify-between px-12 h-16 bg-transparent backdrop-blur-xl sticky top-0 z-10">
                    <div className="flex items-center gap-8">
                        <nav className="flex gap-6">
                            <a className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-[#3B82F6] border-b border-[#3B82F6] pb-1" href="#">Overview</a>
                            <a className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-slate-500 hover:text-white transition-opacity" href="#">Models</a>
                            <a className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-slate-500 hover:text-white transition-opacity" href="#">Data</a>
                            <a className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-slate-500 hover:text-white transition-opacity" href="#">Export</a>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm">search</span>
                            <input className="bg-surface-container-low border-none rounded-full py-1.5 pl-10 pr-4 text-xs w-64 focus:ring-1 focus:ring-primary text-on-surface" placeholder="Search architecture..." type="text" />
                        </div>
                        <button className="p-2 text-slate-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">account_circle</span>
                        </button>
                    </div>
                </header>
                {/* Editorial Content Canvas */}
                <div className="flex-1 overflow-y-auto px-12 py-10 max-w-6xl w-full mx-auto">
                    {/* Page Header */}
                    <div className="mb-16">
                        <span className="text-[#3B82F6] font-['Space_Grotesk'] font-bold text-sm tracking-widest uppercase">SeedPath Project v1.0</span>
                        <h2 className="text-6xl font-headline font-bold text-white tracking-tight mt-2">Resumen de Arquitectura</h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mt-6 rounded-full" />
                    </div>
                    <div className="grid grid-cols-12 gap-8">
                        {/* Section 1: El Problema (Large Bento) */}
                        <div className="col-span-12 lg:col-span-7">
                            <section className="glass-card glass-glow p-10 rounded-lg h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6] opacity-5 blur-[120px]" />
                                <h3 className="text-2xl font-headline font-semibold text-white mb-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-[#3B82F6]">warning</span>
                                    El Problema
                                </h3>
                                <div className="space-y-6 text-on-surface-variant font-body leading-relaxed text-lg">
                                    <p>
                                        El ecosistema actual de startups enfrenta un abismo crítico entre la concepción de la idea y la ejecución escalable. Las incubadoras tradicionales operan bajo un modelo de <span className="text-white font-medium">"talla única"</span> que ignora las complejidades estructurales de los nuevos mercados digitales.
                                    </p>
                                    <p>
                                        Existe una carencia sistemática de herramientas de <span className="text-primary italic">Venture Architecture</span> que permitan modelar el riesgo antes de la primera línea de código. Esta brecha resulta en un desperdicio de capital del 40% en etapas tempranas debido a fallos evitables en la tesis de negocio.
                                    </p>
                                </div>
                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    <div className="bg-surface-container-high/40 p-4 rounded-DEFAULT border border-white/5">
                                        <p className="text-[10px] uppercase text-slate-500 tracking-wider">Gap de Mercado</p>
                                        <p className="text-2xl font-headline font-bold text-[#adc6ff] mt-1">82%</p>
                                        <p className="text-xs text-slate-400 mt-1">Falta de diseño estructural</p>
                                    </div>
                                    <div className="bg-surface-container-high/40 p-4 rounded-DEFAULT border border-white/5">
                                        <p className="text-[10px] uppercase text-slate-500 tracking-wider">Tasa de Desperdicio</p>
                                        <p className="text-2xl font-headline font-bold text-tertiary mt-1">$4.2M</p>
                                        <p className="text-xs text-slate-400 mt-1">Media anual por portfolio</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                        {/* Section 3: Market-Fit (Small Bento) */}
                        <div className="col-span-12 lg:col-span-5">
                            <section className="glass-card p-10 rounded-lg h-full flex flex-col">
                                <h3 className="text-2xl font-headline font-semibold text-white mb-8">Market-Fit</h3>
                                <div className="flex-1 flex items-end gap-3 min-h-[200px] mb-6">
                                    <div className="flex-1 bg-surface-container-highest group relative rounded-t-sm h-[30%] hover:h-[40%] transition-all duration-500">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">Q1</span>
                                    </div>
                                    <div className="flex-1 bg-surface-container-highest group relative rounded-t-sm h-[55%] hover:h-[65%] transition-all duration-500">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">Q2</span>
                                    </div>
                                    <div className="flex-1 bg-primary/80 group relative rounded-t-sm h-[85%] hover:h-[95%] transition-all duration-500 shadow-[0_0_20px_rgba(173,198,255,0.3)]">
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">Q3</span>
                                    </div>
                                    <div className="flex-1 bg-surface-container-highest group relative rounded-t-sm h-[65%] hover:h-[75%] transition-all duration-500">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">Q4</span>
                                    </div>
                                </div>
                                <p className="text-sm text-on-surface-variant italic border-l-2 border-primary pl-4">Proyección de alineación basada en el análisis sintético de 12,000 puntos de datos del sector Venture Capital.</p>
                            </section>
                        </div>
                        {/* Section 2: Tesis de Negocio (Full Width) */}
                        <div className="col-span-12">
                            <section className="glass-card p-10 rounded-lg">
                                <div className="flex items-center justify-between mb-10">
                                    <div>
                                        <h3 className="text-2xl font-headline font-semibold text-white">Tesis de Negocio</h3>
                                        <p className="text-slate-500 text-sm mt-1">Revenue Model Financial Analysis (LAF)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-primary uppercase">Auditado</span>
                                        <span className="px-3 py-1 bg-surface-container-highest rounded-full text-[10px] font-bold text-tertiary uppercase">Proyectado</span>
                                    </div>
                                </div>
                                <div className="overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold border-b border-white/5">
                                                <th className="pb-4 font-normal">Métrica de Arquitectura</th>
                                                <th className="pb-4 font-normal">Fase I (MVP)</th>
                                                <th className="pb-4 font-normal">Fase II (Escala)</th>
                                                <th className="pb-4 font-normal text-right">Impacto LAF</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            <tr className="group hover:bg-white/5 transition-colors">
                                                <td className="py-6 font-medium text-white">Customer Acquisition Cost (eCAC)</td>
                                                <td className="py-6 text-slate-400">$12.40</td>
                                                <td className="py-6 text-slate-400">$8.15</td>
                                                <td className="py-6 text-right font-headline font-bold text-primary">-34.2%</td>
                                            </tr>
                                            <tr className="group hover:bg-white/5 transition-colors">
                                                <td className="py-6 font-medium text-white">Lifetime Value (LTV)</td>
                                                <td className="py-6 text-slate-400">$850</td>
                                                <td className="py-6 text-slate-400">$1,420</td>
                                                <td className="py-6 text-right font-headline font-bold text-primary">+67.1%</td>
                                            </tr>
                                            <tr className="group hover:bg-white/5 transition-colors">
                                                <td className="py-6 font-medium text-white">Churn Rate Estructural</td>
                                                <td className="py-6 text-slate-400">4.2%</td>
                                                <td className="py-6 text-slate-400">1.8%</td>
                                                <td className="py-6 text-right font-headline font-bold text-primary">-57.0%</td>
                                            </tr>
                                            <tr className="group hover:bg-white/5 transition-colors">
                                                <td className="py-6 font-medium text-white">Burn Multiple Target</td>
                                                <td className="py-6 text-slate-400">1.5x</td>
                                                <td className="py-6 text-slate-400">0.8x</td>
                                                <td className="py-6 text-right font-headline font-bold text-primary">Eficiencia ++</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* Footer / Technical Specs */}
                <footer className="mt-auto px-12 py-8 border-t border-white/5 text-slate-600 text-[10px] flex justify-between items-center bg-surface-container-lowest">
                    <div>© 2024 SEEDPATH VENTURE ARCHITECTURE CORE</div>
                    <div className="flex gap-6">
                        <span>ENCRYPTED CONNECTION (SSL/TLS 1.3)</span>
                        <span>SYSTEM STATUS: <span className="text-primary font-bold">OPTIMAL</span></span>
                    </div>
                </footer>

                {/* Floating Action Button (moved into main so it respects the global sidebar offset) */}
                <div className="absolute bottom-10 right-10 z-50 group">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                    <div className="relative bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-8 py-5 rounded-full font-headline font-bold text-sm tracking-widest flex items-center gap-4 shadow-2xl active:scale-95 transition-transform">
                        <span>EXPORTAR PITCH DECK (PDF)</span>
                        <span className="material-symbols-outlined">download</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
