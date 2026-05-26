export default function Page() {
    return (
        <div className="bg-surface-container-lowest text-on-surface font-body h-full overflow-hidden">
            <div className="h-full w-full mesh-gradient">
                <main className="h-full overflow-y-auto relative">
                    <header className="sticky top-0 z-50 flex justify-between items-center w-full px-8 h-20 bg-[#0b0e14]/50 backdrop-blur-xl border-b border-white/10">
                        <h1 className="text-2xl font-headline font-bold tracking-tight text-on-surface">Resumen del Vector de Arquitecto Derivado</h1>
                        <div className="flex items-center gap-4">
                            <button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-white transition-opacity">search</button>
                            <button className="material-symbols-outlined p-2 text-on-surface-variant hover:text-white transition-opacity">notifications</button>
                        </div>
                    </header>

                    <div className="p-8 grid grid-cols-12 gap-6 max-w-7xl mx-auto">
                        <div className="col-span-12 lg:col-span-8 glass-panel inner-glow p-8 rounded-lg relative overflow-hidden group">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                    <span className="font-label text-xs tracking-widest uppercase text-slate-400">Análisis del Vector</span>
                                </div>
                                <p className="text-xl font-headline leading-relaxed text-on-surface/90">
                                    El análisis sugiere una <span className="text-primary font-bold">alta síntesis estratégica</span> centrada en ecosistemas fintech escalables. Muestra una fuerte capacidad visionaria con un requerimiento de validación de dominio focalizada.
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/5">
                                    <p className="text-on-surface-variant leading-relaxed">
                                        Demuestra una significativa profundidad de ejecución pero requiere expansión de red de dominio para validación. La trayectoria del modelo indica una maduración acelerada en infraestructuras de transaccionalidad múltiple.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 bg-surface-container-high inner-glow p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                                    <span className="flex items-center gap-1 px-3 py-1 bg-primary/20 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">Verificado</span>
                                </div>
                                <h3 className="font-label text-xs tracking-widest uppercase text-slate-500 mb-2">Recursos Financieros</h3>
                                <p className="text-3xl font-headline font-bold text-white">$ 1,250,000 <span className="text-sm font-normal text-slate-500">MXN</span></p>
                            </div>
                            <div className="mt-8 space-y-3">
                                <div className="flex justify-between text-xs">
                                    <span className="text-slate-400">Liquidez</span>
                                    <span className="text-on-surface">85%</span>
                                </div>
                                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                                    <div className="bg-primary h-full w-[85%]" />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6 glass-panel inner-glow p-8 rounded-lg">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-secondary">verified_user</span>
                                <span className="font-label text-xs tracking-widest uppercase text-slate-400">Habilidades del Perfil</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-sm font-label rounded-md">Finanzas</span>
                                <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-sm font-label rounded-md">Marketing</span>
                                <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-sm font-label rounded-md">Marco Legal</span>
                                <span className="px-4 py-2 bg-surface-container-highest text-on-surface text-sm font-label rounded-md">Tecnología</span>
                            </div>
                            <div className="mt-12 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    <img alt="Network 1" className="w-10 h-10 rounded-full border-2 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALMeMxigFrjFEk9a71EEtS_2b11tOj2ulqEOJc9AP8ct7Uc9jwuXA9BoGoz2biX8IbwaRNPZaFroEBNpYHhwwKBCa_uwArmLmLrEjZsYzDZXQcJY7fGAtMkb_4_7GjVDHCGlKV1GbeqpK_WpXxiad2S2d3319pQgOVpinZNaHN61w3ej42mYVk3cu2NKg87B8cIceQ_EAsUIw4BHnTllCwJYgGq7iGJHZgt9MiBKW48zRfx1Zm6K1Tx7IkWBZaLrE08l2fgvJ0nHa2" />
                                    <img alt="Network 2" className="w-10 h-10 rounded-full border-2 border-surface-container-low" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31efpBsQuv9bU5Z7i5MycOWCwAtPeKdT1wSp19-2NP6sg51lMm9N4g0ewlOyWlNbV4fBg-V2Mg0wdIEF9ORY04QWUtFopdRrW_55YJMP0ed3VfEgs52RMTL7VMx9mKfgCEuFtiNWULNNYkEkAdvoGIJXKo7EjgBm91b99gATO3R4jUrznoyP9Kg6lOlabQ7BSXy1omZqR5dRPz_zPQupsFhkLTNgsdmDh4a_Ng4bzZ50AxbUjde3ENAjh5vBIFxv1bnR-S13SUlky" />
                                    <div className="w-10 h-10 rounded-full bg-surface-container-highest border-2 border-surface-container-low flex items-center justify-center text-[10px] text-slate-300 font-bold">+12</div>
                                </div>
                                <span className="text-xs text-slate-500 font-label italic">Red de validación disponible</span>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-6 bg-[#1d2026] inner-glow p-8 rounded-lg relative overflow-hidden group">
                            <div className="absolute left-0 top-0 h-full w-1 bg-tertiary" />
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-tertiary text-3xl">lightbulb</span>
                                </div>
                                <div>
                                    <h3 className="font-headline text-lg font-bold text-white mb-3">SeedPath Insight</h3>
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                                        Su arquitectura sugiere una oportunidad crítica en la optimización de flujos B2B. Recomendamos proceder con la fase de modelado de red antes de la expansión de capital. El enfoque debe ser la <span className="text-tertiary">reducción de fricción transaccional</span>.
                                    </p>
                                    <a className="inline-flex items-center gap-2 text-xs font-bold text-tertiary tracking-widest uppercase hover:underline" href="#">
                                        Ver Informe Detallado
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky bottom-0 w-full px-8 py-6 flex justify-end items-center gap-4 bg-gradient-to-t from-surface-container-lowest to-transparent backdrop-blur-sm">
                        <button className="px-8 py-3 rounded-xl border border-white/10 text-on-surface hover:bg-white/5 transition-all duration-300 font-headline font-medium text-sm">Descartar Cambios</button>
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-headline font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all duration-300">Confirmar y Proceder ✨</button>
                    </div>
                </main>
            </div>
        </div>
    );
}
