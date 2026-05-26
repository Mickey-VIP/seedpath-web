export default function Page() {
  // El ancho del sidebar debe coincidir con el Sidebar colapsable (80px/260px)
  // Usamos una variable CSS para que Sidebar y main-content estén sincronizados
  return (
    <div className="h-full overflow-hidden flex bg-[#0b0e14] text-white font-body">
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/10 blur-[120px] rounded-full" />
      </div>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <main className="flex-grow flex flex-col h-full overflow-hidden">

        {/* ── Top Header ── */}
        <header className="h-14 shrink-0 flex justify-between items-center px-8"
          style={{ background: "rgba(11,14,20,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-6">
            <div>
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Panel de control</span>
              <h1 className="text-sm font-bold font-headline text-blue-400 tracking-tight leading-tight">SeedPath God Mode</h1>
            </div>
            <span className="hidden lg:block text-[9px] font-mono text-slate-600 uppercase tracking-widest px-2 py-1 rounded"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}>Admin Mode</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
              style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-mono text-[9px] text-emerald-400 tracking-widest">SYSTEM ONLINE</span>
            </div>
            <button className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-base">notifications</span>
            </button>
            <button className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-base">terminal</span>
            </button>
          </div>
        </header>

        {/* ── Scrollable Content ── */}
        <div className="flex-grow overflow-y-auto p-7 space-y-6">

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Uptime */}
            <div className="rounded-2xl p-5 shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Uptime del Sistema</span>
                <span className="material-symbols-outlined text-emerald-500 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-white">99.98%</span>
                <span className="font-mono text-[9px] text-emerald-400">NOMINAL</span>
              </div>
            </div>
            {/* Usuarios */}
            <div className="rounded-2xl p-5 shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Usuarios Activos</span>
                <span className="material-symbols-outlined text-blue-400 text-sm">groups</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-white">42</span>
                <span className="font-mono text-[9px] text-blue-400">ONLINE</span>
              </div>
            </div>
            {/* Latencia */}
            <div className="rounded-2xl p-5 shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Latencia IA Gemini</span>
                <span className="material-symbols-outlined text-blue-400 text-sm">bolt</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-2xl font-bold text-white">1.2s</span>
                <span className="font-mono text-[9px] text-slate-500">AVG RESP</span>
              </div>
            </div>
            {/* Tokens */}
            <div className="rounded-2xl p-5 shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Tokens Consumidos</span>
                <span className="material-symbols-outlined text-blue-400 text-sm">generating_tokens</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[10px]">
                  <span className="text-slate-200">850k</span>
                  <span className="text-slate-600">2M LIMIT</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: "42.5%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Line chart */}
            <div className="lg:col-span-2 rounded-3xl p-7 shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h3 className="font-headline font-bold text-lg text-blue-500">Nuevas Semillas Plantadas</h3>
                  <p className="text-slate-600 text-[10px] font-mono mt-0.5 uppercase tracking-widest">Proyectos Generados Per Diem</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="font-mono text-[9px] text-slate-500">ACTUAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-700" />
                    <span className="font-mono text-[9px] text-slate-500">PREV</span>
                  </div>
                </div>
              </div>
              <div className="relative h-48 w-full overflow-hidden rounded-xl" style={{ padding: "12px 0" }}>
                {/* Grid lines */}
                <div className="absolute inset-0 grid grid-rows-4 pointer-events-none px-0">
                  {[0,1,2,3].map(i => <div key={i} className="border-t border-white/5" />)}
                </div>
                {/* SVG line — viewBox matches polyline coords, clipPath prevents overflow */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 800 220"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.4)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.9)" />
                    </linearGradient>
                    {/* Subtle area fill */}
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.12)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0)" />
                    </linearGradient>
                  </defs>
                  {/* Area fill */}
                  <polygon
                    fill="url(#areaFill)"
                    points="0,220 0,195 100,175 200,118 300,145 400,78 500,38 600,98 700,18 800,48 800,220"
                  />
                  {/* Line */}
                  <polyline
                    fill="none"
                    points="0,195 100,175 200,118 300,145 400,78 500,38 600,98 700,18 800,48"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 5px rgba(59,130,246,0.35))" }}
                  />
                  {/* Data dots */}
                  {[[0,195],[100,175],[200,118],[300,145],[400,78],[500,38],[600,98],[700,18],[800,48]].map(([x,y]) => (
                    <circle key={x} cx={x} cy={y} r="3" fill="rgba(59,130,246,0.9)" />
                  ))}
                </svg>

                <div className="flex-1 flex justify-around items-end h-full z-10">
                  {["LUN","MAR","MIE","JUE","VIE","SAB","DOM"].map(d => (
                    <div key={d} className="flex flex-col items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                      <span className="font-mono text-[9px] text-slate-600">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bar chart */}
            <div className="rounded-3xl p-7 shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <h3 className="font-headline font-bold text-lg text-blue-500 mb-0.5">Industrias Populares</h3>
              <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest mb-7">Market Dominance</p>
              <div className="space-y-5">
                {[
                  { label: "FINTECH",   pct: 45 },
                  { label: "SAAS B2B",  pct: 32 },
                  { label: "E-COMMERCE",pct: 18 },
                ].map(({ label, pct }) => (
                  <div key={label} className="space-y-1.5">
                    <div className="flex justify-between font-mono text-[10px]">
                      <span className="text-slate-300">{label}</span>
                      <span className="text-blue-400">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="h-full rounded-full bg-blue-600/70" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
                <div className="pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="font-mono text-[9px] text-slate-600">TOTAL NODOS</span>
                  <span className="font-mono text-sm font-bold text-white">1,402</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity + Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Activity Log */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-xl"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <div className="flex justify-between items-center px-6 py-4"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(20,24,33,0.6)" }}>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm text-blue-500">terminal</span>
                  <h3 className="font-mono text-xs font-bold tracking-widest text-blue-500">RECENT ACTIVITY MONITOR</h3>
                </div>
                <span className="font-mono text-[9px] text-slate-600">LATEST_LOG_STREAM_v2.0</span>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                {[
                  { time: "14:22:01", type: "SYS_EVENT", msg: "Nuevo Usuario: @Salvador_Alv inició arquitectura en ", tag: "Fintech", icon: "open_in_new", error: false },
                  { time: "14:18:45", type: "LOG_SUCCESS", msg: "Hipótesis Generada: Proyecto 'CartLab' completado con éxito.", tag: "", icon: "verified", error: false },
                  { time: "14:05:12", type: "SYS_CRITICAL", msg: "Alerta: Intento de acceso fallido desde IP 189.x.x.x", tag: "", icon: "warning", error: true },
                  { time: "13:55:00", type: "SYS_INIT", msg: "Despliegue de nodo IA-Gemini-Pro finalizado en Región EU-West.", tag: "", icon: "rocket_launch", error: false },
                ].map(({ time, type, msg, tag, icon, error }) => (
                  <div key={time}
                    className="px-6 py-4 flex gap-4 transition-colors hover:bg-white/[0.02]"
                    style={error ? { background: "rgba(239,68,68,0.04)" } : {}}>
                    <span className={`font-mono text-[10px] mt-0.5 whitespace-nowrap ${error ? "text-red-400" : "text-slate-600"}`}>{time}</span>
                    <div className="flex-1">
                      <p className={`font-mono text-xs ${error ? "text-red-400" : "text-slate-300"}`}>
                        <span className={`font-bold ${error ? "text-red-400 underline" : "text-blue-400"}`}>{type}: </span>
                        {msg}
                        {tag && <span className="text-emerald-400 font-medium">{tag}</span>}
                      </p>
                    </div>
                    <span className={`material-symbols-outlined text-xs ${error ? "text-red-400" : "text-slate-600"}`}>{icon}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infrastructure Controls */}
            <div className="rounded-3xl p-7 shadow-xl flex flex-col"
              style={{ background: "rgba(10,12,16,0.92)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(48px)" }}>
              <h3 className="font-headline font-bold text-lg text-blue-500 mb-6">Infraestructura</h3>
              <div className="space-y-3 flex-1">
                {[
                  { label: "Modo Mantenimiento",   sub: "GLOBAL_LOCKDOWN",     on: false },
                  { label: "Límite de Tokens",     sub: "QUOTA_PROTECTION",    on: true },
                  { label: "Debug Mode",            sub: "VERBOSITY_LEVEL_HIGH",on: false },
                ].map(({ label, sub, on }) => (
                  <div key={label} className="flex items-center justify-between p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div>
                      <p className="font-mono text-xs text-slate-200">{label}</p>
                      <p className="font-mono text-[9px] text-slate-600">{sub}</p>
                    </div>
                    <button className="w-11 h-6 rounded-full relative flex items-center px-1 transition-all"
                      style={on
                        ? { background: "rgba(37,99,235,0.6)", border: "1px solid rgba(59,130,246,0.4)" }
                        : { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className={`w-4 h-4 rounded-full transition-all ${on ? "translate-x-5 bg-white" : "bg-slate-600"}`} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <button className="w-full py-3 rounded-xl font-mono text-xs font-bold tracking-widest text-blue-400 hover:text-white transition-all"
                  style={{ border: "1px solid rgba(37,99,235,0.4)", background: "rgba(37,99,235,0.06)" }}>
                  REBOOT SYSTEM CLUSTER
                </button>
              </div>
            </div>
          </div>

          {/* Footer strip */}
          <div className="flex justify-between items-center py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="font-mono text-[9px] text-slate-600 tracking-widest">SECURE CONNECTION ESTABLISHED</span>
            </div>
            <span className="font-mono text-[9px] text-slate-700">SEEDPATH_GOD_MODE_OS_V4.9.22</span>
          </div>
        </div>
      </main>
    </div>
  );
}