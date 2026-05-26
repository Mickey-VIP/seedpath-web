import Link from 'next/link';

export default function Page() {
  return (
    <div className="font-body selection:bg-primary-container selection:text-white">
{/* Suppress TopNavBar and Footer as per Transactional Screen Rule */}
        <main className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-secondary-container/10 blur-[150px] pointer-events-none"></div>
          {/* Branding Logo Top Left */}
          <div className="absolute top-10 left-10 hidden md:block">
            <span className="text-2xl font-headline font-bold tracking-tighter text-[#3B82F6]">SeedPath</span>
          </div>
          {/* Central Registration Card */}
          <section className="glass-card relative z-10 w-full max-w-[480px] rounded-lg p-10 md:p-12">
            <div className="mb-10 text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tight mb-3 text-on-surface">¡Únete a la Revolución, wey!</h1>
              <p className="text-on-surface-variant text-sm font-light">Comienza tu viaje arquitectónico hoy mismo.</p>
            </div>
            {/* Form */}
            <form className="space-y-6">
              {/* Nombre Completo */}
              <div className="space-y-2 group">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Nombre Completo</label>
                <div className="relative flex items-center border-b border-outline-variant hover:border-primary transition-colors input-glow pb-2">
                  <span className="material-symbols-outlined text-[#3B82F6] mr-3" data-icon="person">person</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 font-body" placeholder="Ej. Julian Rossi" type="text" />
                </div>
              </div>
              {/* Correo Electrónico */}
              <div className="space-y-2 group">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Correo Electrónico</label>
                <div className="relative flex items-center border-b border-outline-variant hover:border-primary transition-colors input-glow pb-2">
                  <span className="material-symbols-outlined text-[#3B82F6] mr-3" data-icon="mail">mail</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 font-body" placeholder="julian@seedpath.ai" type="email" />
                </div>
              </div>
              {/* Contraseña */}
              <div className="space-y-2 group">
                <label className="text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">Contraseña</label>
                <div className="relative flex items-center border-b border-outline-variant hover:border-primary transition-colors input-glow pb-2">
                  <span className="material-symbols-outlined text-[#3B82F6] mr-3" data-icon="lock">lock</span>
                  <input className="bg-transparent border-none focus:ring-0 w-full text-on-surface placeholder:text-outline/50 font-body" placeholder="••••••••" type="password" />
                </div>
              </div>
              {/* Terms & Conditions */}
              <div className="flex items-start pt-2">
                <div className="flex items-center h-5">
                  <input className="h-4 w-4 rounded border-outline-variant bg-surface text-primary focus:ring-primary focus:ring-offset-surface-container" id="terms" type="checkbox" />
                </div>
                <label className="ml-3 text-xs leading-relaxed text-on-surface-variant" htmlFor="terms">
                  Acepto los <Link href="/legal" className="text-[#3B82F6] hover:underline">Términos y Condiciones</Link> y la <Link href="/legal" className="text-[#3B82F6] hover:underline">Política de Privacidad</Link> de SeedPath.
                </label>
              </div>
              {/* Main Action Button */}
              <button className="w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white py-4 rounded-xl font-medium tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transform hover:scale-[1.01] active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-4" type="button">
                Regístrate Gratis ✨
              </button>
            </form>
            {/* Separator */}
            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant/30"></div></div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest text-on-surface-variant bg-transparent">
                <span className="px-4 bg-[#191c22]/50 backdrop-blur-sm rounded-full">O regístrate con</span>
              </div>
            </div>
            {/* Social Logins */}
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-high hover:bg-surface-bright border border-outline-variant/20 transition-all group">
                <img alt="Google Logo" className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" data-alt="Official Google icon with colorful branding on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnA1CSy9B8EMyiuoDrO3NH60sGlTT87JAAZI0Iyt4v1MnNr2prspDqBTE8i-HuLFgx7yXfG7RgofpzCdY5zOM8lCVExIAebWufwlHRYTLNsl9fK252p_9RcuYdwuyJiE_ENGwHt6GoWMVy26oeIeTEJ-mZbtNAMrYd11cYGcF2EvZvDMDxByjU0VIaKTS1EONeqrLec6ILb_r7COZilT12Dy8tzxNABxWBsmWnCYMYJef_JSQ2QpoffyvNcNhvFDYDSb9MXl-TCH4q" />
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-surface-container-high hover:bg-surface-bright border border-outline-variant/20 transition-all group">
                <svg className="w-5 h-5 fill-on-surface group-hover:fill-white transition-all" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
            {/* Footer Link */}
            <div className="mt-10 text-center">
              <p className="text-on-surface-variant text-sm font-light">
                ¿Ya tienes cuenta?
                <Link className="text-[#3B82F6] font-semibold hover:text-[#8B5CF6] transition-colors ml-1" href="/login">Inicia Sesión</Link>
              </p>
            </div>
          </section>
          {/* Fixed Bottom Left Avatar Identity */}
          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-[10%] w-1 h-20 bg-gradient-to-b from-[#3B82F6]/0 via-[#3B82F6]/20 to-[#3B82F6]/0 rounded-full hidden lg:block"></div>
          <div className="absolute top-1/2 right-[10%] w-1 h-20 bg-gradient-to-b from-[#8B5CF6]/0 via-[#8B5CF6]/20 to-[#8B5CF6]/0 rounded-full hidden lg:block"></div>
        </main>
        {/* Invisible footer as per prompt request to remove shell but maintain consistency */}
        <footer className="hidden">
          <span>© 2024 SeedPath. Todos los derechos reservados.</span>
        </footer>
    </div>
  );
}
