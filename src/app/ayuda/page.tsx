export default function Page() {
	return (
		<div className="bg-surface-container-lowest text-on-surface font-body h-full">
			<div className="h-full w-full">
				<header className="fixed top-0 w-full z-30 bg-[#0b0e14]/80 backdrop-blur-xl border-b border-white/5 h-16">
					<div className="w-full max-w-[800px] px-6 mx-auto flex justify-between items-center">
						<div className="flex items-center gap-4">
							<div className="md:hidden">
								<span className="material-symbols-outlined text-white" data-icon="menu">menu</span>
							</div>
							<div className="relative group hidden sm:block">
								<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-sm" data-icon="search">search</span>
								<input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary/50 transition-all text-on-surface placeholder:text-slate-600" placeholder="Buscar ayuda..." type="text" />
							</div>
						</div>

						<div className="flex items-center gap-6">
							<button className="text-slate-400 hover:text-white transition-colors duration-200 active:scale-95">
								<span className="material-symbols-outlined" data-icon="help">help</span>
							</button>
							<button className="text-slate-400 hover:text-white transition-colors duration-200 active:scale-95">
								<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
							</button>
						</div>
					</div>
				</header>

				<main className="flex-1 h-screen flex flex-col min-h-0 pt-24 pb-20">
					<div className="h-screen overflow-y-scroll pb-24 custom-scrollbar">
						<div className="w-full max-w-[800px] px-6 mx-auto">
							<div className="mb-12 text-center">
								<h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Centro de Ayuda</h2>
								<p className="text-slate-400 text-lg max-w-xl">Arquitectando el futuro de tu venture con soporte técnico de precisión y marcos metodológicos avanzados.</p>
							</div>

							<div className="space-y-6">
							<div className="group relative bg-surface-container-low rounded-lg p-1 transition-all duration-300">
								<div className="absolute inset-0 rounded-lg border border-[#3B82F6] active-glow" />
								<div className="relative bg-surface-container p-6 rounded-[0.9rem] glass-glow">
									<button className="w-full flex justify-between items-center text-left">
										<span className="font-headline text-lg font-semibold text-[#3B82F6]">¿Qué es un Venture Architect?</span>
										<span className="material-symbols-outlined text-[#3B82F6] rotate-180 transition-transform" data-icon="expand_more">expand_more</span>
									</button>
									<div className="mt-4 text-slate-300 leading-relaxed font-light">
										Un Venture Architect en SeedPath es el puente entre la visión estratégica y la ejecución técnica. No solo diseñamos negocios; construimos infraestructuras escalables, definimos modelos de ingresos optimizados por IA y estructuramos el ADN operativo de tu startup desde la primera línea de código hasta el exit.
									</div>
								</div>
							</div>

							<div className="group relative bg-surface-container-low rounded-lg p-[1px] transition-all duration-300 hover:bg-white/10">
								<div className="absolute inset-0 rounded-lg border border-white/5" />
								<div className="relative bg-surface-container/40 backdrop-blur-sm p-6 rounded-[0.9rem] hover:bg-surface-container transition-colors cursor-pointer">
									<button className="w-full flex justify-between items-center text-left">
										<span className="font-headline text-lg font-medium text-on-surface">¿Mi información está segura?</span>
										<span className="material-symbols-outlined text-slate-500" data-icon="expand_more">expand_more</span>
									</button>
								</div>
							</div>

							<div className="group relative bg-surface-container-low rounded-lg p-[1px] transition-all duration-300 hover:bg-white/10">
								<div className="absolute inset-0 rounded-lg border border-white/5" />
								<div className="relative bg-surface-container/40 backdrop-blur-sm p-6 rounded-[0.9rem] hover:bg-surface-container transition-colors cursor-pointer">
									<button className="w-full flex justify-between items-center text-left">
										<span className="font-headline text-lg font-medium text-on-surface">¿Puedo exportar mis análisis a PDF?</span>
										<span className="material-symbols-outlined text-slate-500" data-icon="expand_more">expand_more</span>
									</button>
								</div>
							</div>

							<div className="group relative bg-surface-container-low rounded-lg p-[1px] transition-all duration-300 hover:bg-white/10">
								<div className="absolute inset-0 rounded-lg border border-white/5" />
								<div className="relative bg-surface-container/40 backdrop-blur-sm p-6 rounded-[0.9rem] hover:bg-surface-container transition-colors cursor-pointer">
									<button className="w-full flex justify-between items-center text-left">
										<span className="font-headline text-lg font-medium text-on-surface">¿Cómo se diferencia SeedPath de un chat normal de IA?</span>
										<span className="material-symbols-outlined text-slate-500" data-icon="expand_more">expand_more</span>
									</button>
								</div>
							</div>
							</div>

							<div className="mt-16 bg-gradient-to-br from-primary-container/20 to-secondary-container/10 rounded-lg p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
							<div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
							<div className="relative z-10">
								<h3 className="font-headline text-2xl font-bold text-white mb-2">¿Necesitas asistencia directa?</h3>
								<p className="text-slate-400">Nuestros arquitectos senior están disponibles para sesiones de consultoría técnica.</p>
							</div>
							<button className="relative z-10 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
								Contactar Arquitecto
							</button>
						</div>

						<div className="mt-20 py-8 border-t border-white/5 flex justify-between items-center opacity-40">
							<p className="text-xs uppercase tracking-tighter font-headline text-slate-400">SeedPath OS v4.2.0</p>
							<div className="flex gap-4">
								<span className="w-2 h-2 rounded-full bg-primary" />
								<span className="w-2 h-2 rounded-full bg-slate-600" />
								<span className="w-2 h-2 rounded-full bg-slate-600" />
							</div>
							</div>
						</div>
					</div>
				</main>

				<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mb-64 -mr-64 pointer-events-none z-0" />
			</div>
		</div>
	);
}