"use client";

export default function Page() {
  return (
    <div className="bg-surface-container-lowest text-on-surface min-h-screen flex items-center justify-center selection:bg-primary/30 overflow-hidden relative">
{/* Background Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container/10 blur-[120px]"></div>
        </div>
        {/* Top Navigation (Shell suppressed for transactional focus, but Brand Identity maintained) */}
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6">
          <div className="text-2xl font-headline font-bold tracking-tighter text-primary">
            SeedPath
          </div>
          <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
            <span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">help_outline</span>
            <span className="text-sm font-medium">Ayuda</span>
          </button>
        </header>
        <main className="w-full max-w-[480px] px-6 relative z-10">
          {/* Central Card */}
          <div className="glass-card rounded-lg p-8 md:p-12 flex flex-col items-center">
            {/* Icon/Brand Element */}
            <div className="mb-8 w-16 h-16 rounded-2xl bg-surface-variant flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:blur-2xl transition-all rounded-full opacity-0 group-hover:opacity-100"></div>
              <span className="material-symbols-outlined text-primary text-3xl relative z-10">lock_reset</span>
            </div>
            {/* Content */}
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface text-center mb-4 tracking-tight">
              ¡No te me paniquees, wey!
            </h1>
            <p className="text-on-surface-variant text-center text-base leading-relaxed mb-10 max-w-[320px]">
              Ingresa el correo que usaste para registrarte y te mandaremos un link mágico para resetear tu clave.
            </p>
            {/* Form */}
            <form className="w-full space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2 group">
                <label className="text-xs font-semibold uppercase tracking-widest text-outline pl-1" htmlFor="email">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-1 text-on-surface placeholder:text-outline/50 focus:ring-0 focus:border-primary transition-all duration-300 outline-none" id="email" placeholder="ej. julian@seedpath.ai" type="email" />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-500 group-focus-within:w-full"></div>
                </div>
              </div>
              <button className="w-full action-gradient text-white font-headline font-bold py-4 rounded-full text-lg shadow-lg glow-hover transform active:scale-95 transition-all duration-300 flex items-center justify-center gap-2" type="submit">
                Mándame el link ✨
              </button>
            </form>
            {/* Footer */}
            <div className="mt-10">
              <a className="text-outline hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group" href="#">
                <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">arrow_back</span>
                A la chingada, regresar al Login
              </a>
            </div>
          </div>
          {/* System Status/Trust Indicator (Editorial Style) */}
          <div className="mt-8 flex justify-center items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encryption</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-outline-variant"></div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">shield</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Secure Recovery</span>
            </div>
          </div>
        </main>
        {/* Visual Texture Element */}
        <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzNk-MhDxEtJQLyyK7HK5v04vBGvzzKdJ6LGzVJ7AXnGU2c0V8SuewoWrdj9t4ze8yh09_7MQ-nNLkAlrMnqefbdGJbqke1GkKalUbDPy3ptyNjnoTnS7hgliY0A2TSSHlcBHOgSxVVtUafi-yP4GuRoh1S_1541tVktifrJjoa3VgACW5WkyFBUHoHGqarXYYngiCU53E9rQCkSa_tV4PkhFskkmEtWW5Buasgs1_0_gOwjk3wAKfqzawz-237zjiCiL-YOW3V3hU')" }}></div>
    </div>
  );
}
