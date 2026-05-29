export default function Page() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body antialiased min-h-screen overflow-hidden">
        {/* Main Loading Canvas */}
        <main className="relative flex flex-col items-center justify-center min-h-screen w-full px-6">
          {/* High-End Circular Loading Element */}
          <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full"></div>
            {/* Outer Ring (Glassmorphism style) */}
            <div className="absolute inset-0 rounded-full border-2 border-outline-variant/20 border-t-primary border-r-secondary/40 animate-spin" style={{ animationDuration: "3s" }}></div>
            {/* Inner Engine Pulsing Core */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-[1px]">
              <div className="w-full h-full rounded-full bg-surface-container-lowest flex items-center justify-center backdrop-blur-3xl overflow-hidden">
                <span className="material-symbols-outlined text-4xl text-primary animate-pulse" data-icon="architecture" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
                {/* Luminous Inner Grain */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
              </div>
            </div>
            {/* Orbiting Particle Dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "8s" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary luminous-glow"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }}>
              <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 rounded-full bg-secondary/60"></div>
            </div>
          </div>
          {/* Typography Context */}
          <div className="text-center max-w-xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface">
              Arquitectando tu camino...
            </h1>
            <p className="text-on-surface-variant/80 text-lg md:text-xl font-body font-light leading-relaxed">
              Analizando capital de <span className="text-primary font-medium">$250k MXN</span> y fortalezas en <span className="text-secondary font-medium">Finanzas</span> para encontrar el "market-fit" ideal...
            </p>
          </div>
          {/* Progress Indicator (Minimalist) */}
          <div className="mt-16 w-64 h-1 bg-surface-container-low rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-secondary w-2/3 rounded-full relative">
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
        </main>
        {/* Bottom Left: User Profile (Shared Component Style) */}
        {/* Background Subtle Gradients */}
        <div className="fixed top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-0 left-1/4 -z-10 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
    </div>
  );
}
