export default function Page() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] h-screen flex flex-col p-6 sidebar-border bg-[#111111]" data-purpose="sidebar">
        <div className="flex-1 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12" data-purpose="logo">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">SeedPath</h1>
            <p className="text-[10px] italic text-blue-400 -mt-1">find your path</p>
          </div>
        </div>

        {/* Perfil */}
        <div className="mb-8">
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
            Perfil de Emprendedor
          </h2>
          <div className="glass-card p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-400">Venture Architect</span>
              <span className="text-sm font-bold text-blue-400">$50k MXN</span>
            </div>
            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">Habilidades</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-[10px]"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Finanzas</span>
              <span className="bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-[10px]"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Marketing</span>
              <span className="bg-white/5 px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-[10px]"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />Programación</span>
            </div>
          </div>
        </div>

        {/* Hipótesis */}
        <div className="mb-8">
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
            Hipótesis Actual
          </h2>
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-blue-400 font-bold uppercase">Analizando</span>
            </div>
            <p className="text-xs italic text-gray-300 leading-relaxed">"Existe una demanda insatisfecha de soluciones SaaS para la gestión de micro-logística urbana en mercados emergentes."</p>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-8 flex-grow">
          <h2 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" /></svg>
            Roadmap
          </h2>
          <div className="space-y-4 px-2">
            <div className="flex items-start gap-3 opacity-60">
              <div className="mt-1 w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">✓</div>
              <div>
                <div className="text-[9px] uppercase font-bold text-gray-500">Fase 1</div>
                <div className="text-xs">Descubrimiento</div>
              </div>
            </div>
            <div className="glass-card p-3 flex items-start gap-3 border-blue-500/30">
              <div className="mt-1 w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /></div>
              <div>
                <div className="text-[9px] uppercase font-bold text-blue-400">Fase 2</div>
                <div className="text-xs font-bold">Validación</div>
              </div>
            </div>
            <div className="flex items-start gap-3 opacity-30">
              <div className="mt-1 w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>
              </div>
              <div>
                <div className="text-[9px] uppercase font-bold text-gray-500">Fase 3</div>
                <div className="text-xs">Escalamiento</div>
              </div>
            </div>
          </div>
        </div>

        </div>

        {/* Bottom Profile */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-between" data-purpose="user-footer">
          <div className="flex items-center gap-3">
            <img alt="M. Rodríguez" className="w-8 h-8 rounded-full border border-white/10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAblIaSQ2pXC7RjDr1HjwC-xQGb7--O2q4h1FrW1HTQgrmjeMVriNNWuihQwEMsv16IEPKZ_d1-xqqRZI8dWb-sWbIyCHZ-4xG7bULB7lDsZCAgY4-LJ0kMdCsENChpewC_mTNsKu1Z3zAsWdFhZm41zkgpRVtMmSWhJVwK_kQkT4cYjNssn9x69iIMkv8CBmh04gVDgBOq63jWDRx8OkeAJQApTTElfw3IvulPv4OI-1BPOGNR_9H1I8Muu7lgyWF9uUQ8ZgZGssI" />
            <div>
              <div className="text-xs font-bold">M. Rodríguez</div>
              <div className="text-[10px] text-blue-400">Plan Premium</div>
            </div>
          </div>
          <button className="p-1.5 glass-card hover:bg-white/10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden bg-black w-full" data-purpose="main-chat">
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/5 bg-black/80 backdrop-blur-md z-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300">Proyecto: Loginext Latam</h3>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-black" />
            </button>
            <button className="p-1 border border-dashed border-blue-500/50 rounded-sm">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" /></svg>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-8 min-h-0" data-purpose="chat-scroll-area">
          <div className="flex justify-center">
            <span className="text-[9px] uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">Hoy — 14:20</span>
          </div>

          {/* AI Message */}
          <div className="flex flex-col gap-3 max-w-[80%]" data-purpose="ai-message">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">SeedPath</span>
            </div>
            <div className="glass-card p-6 rounded-tl-none bg-[#111111]">
              <p className="text-sm leading-relaxed text-gray-200">He analizado los datos de tráfico de Ciudad de México en la última hora. El cuello de botella en la zona de Polanco-Santa Fe confirma tu hipótesis sobre la micro-logística.</p>

              <div className="mt-4 glass-card bg-black/60 p-4 border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-200">Reporte de Latencia Logística</div>
                    <div className="text-[10px] text-gray-500">PDF • 2.4 MB • Generado hace 5 min</div>
                  </div>
                </div>
                <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex flex-col gap-3 items-end" data-purpose="user-message">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tight mr-2">M. Rodríguez</span>
            <div className="glass-card p-6 rounded-tr-none max-w-[70%] bg-[#111111] border-white/10">
              <p className="text-sm leading-relaxed text-gray-200">Excelente. ¿Cómo afectaría esto a nuestra estructura de costos si usamos hubs descentralizados de 50m²? El presupuesto es de $50k MXN mensuales para el piloto.</p>
            </div>
          </div>

          {/* Typing */}
          <div className="flex flex-col gap-3 max-w-[80%]" data-purpose="ai-typing">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">SeedPath</span>
            </div>
            <div className="glass-card py-4 px-6 rounded-tl-none border-dashed border-white/20 w-max bg-[#111111]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" />
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
                <p className="text-[11px] italic text-blue-400/80 font-medium">Calculando proyecciones financieras...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-8 pt-0" data-purpose="chat-input-container">
          <div className="glass-card bg-white/5 flex items-center p-2 rounded-2xl gap-2">
            <button className="p-3 text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 4v16m8-8H4" /></svg>
            </button>
            <input className="flex-grow bg-transparent border-none text-sm focus:ring-0 text-gray-300 placeholder-gray-700" placeholder="Haz una pregunta sobre tu estrategia o finanzas..." type="text" />
            <div className="flex items-center gap-2">
              <button className="p-3 text-gray-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" /><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" /></svg>
              </button>
              <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
