"use client";
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Page() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/onboarding");
  }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-[#0b0e14] relative">

      {/* ── Ambient background glows ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] opacity-[0.06] blur-[140px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B5CF6] opacity-[0.06] blur-[160px] rounded-full -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="w-full max-w-sm px-4 flex flex-col items-center gap-6">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2 select-none">
          <span className="material-symbols-outlined text-3xl text-[#3B82F6]">potted_plant</span>
          <h1 className="font-headline text-2xl font-bold tracking-tighter text-[#3B82F6]">SeedPath</h1>
        </div>

        {/* ── Login Card ── */}
        <main className="w-full rounded-2xl p-7 shadow-2xl relative overflow-hidden"
          style={{ background: "rgba(16,19,26,0.7)", backdropFilter: "blur(40px)", border: "1px solid rgba(173,198,255,0.12)" }}>

          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] opacity-70" />

          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="font-headline text-2xl font-bold text-white mb-1">Bienvenido, Arquitecto</h2>
            <p className="text-slate-400 text-xs">Inicia sesión para continuar construyendo tu visión.</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-0.5">
                Correo Electrónico
              </label>
              <input
                className="glass-input w-full px-3.5 py-3 rounded-xl text-white text-sm placeholder-slate-600"
                placeholder="julian.rossi@seedpath.io"
                type="email"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-0.5">
                Contraseña
              </label>
              <input
                className="glass-input w-full px-3.5 py-3 rounded-xl text-white text-sm placeholder-slate-600"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="flex justify-end">
              <Link className="text-[11px] text-[#3B82F6] hover:text-[#8B5CF6] transition-colors" href="/recovery">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>
            <button
              className="action-gradient w-full py-3 rounded-full font-headline font-bold text-white text-sm shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all"
              type="submit"
            >
              Entrar
            </button>
          </form>

          {/* Divider */}
          <div className="mt-5 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 text-[10px] uppercase tracking-widest text-slate-500"
                style={{ background: "rgba(16,19,26,0.7)" }}>
                O continúa con
              </span>
            </div>
          </div>

          {/* Social Auth */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Google */}
            <button
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-sm font-medium text-slate-300"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
              </svg>
              Google
            </button>

            {/* GitHub */}
            <button
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-sm font-medium text-slate-300"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-slate-300">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Register link */}
          <div className="mt-5 text-center">
            <p className="text-xs text-slate-500">
              ¿No tienes cuenta?{" "}
              <Link className="text-[#3B82F6] font-semibold hover:text-[#8B5CF6] transition-colors" href="/registro">
                Regístrate gratis
              </Link>
            </p>
          </div>
        </main>

        {/* Footer links */}
        <div className="flex gap-6 pb-1">
          <Link className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors" href="/legal">Privacidad</Link>
          <Link className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors" href="/legal">Términos</Link>
          <Link className="text-[10px] uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors" href="/ayuda">Contacto</Link>
        </div>
      </div>
    </div>
  );
}
