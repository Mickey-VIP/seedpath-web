export default function Page() {
  return (
    <div className="h-full w-full flex flex-col min-h-0 bg-surface-container-lowest text-on-surface">
      <div className="h-full min-h-0 flex flex-col">
        {/* TopNavBar (kept) */}
        <header className="flex items-center justify-end px-8 w-full h-16 sticky top-0 z-40 bg-surface-container-lowest/50 backdrop-blur-md">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <span className="material-symbols-outlined text-slate-400 hover:text-white transition-colors cursor-pointer">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#3B82F6] rounded-full ring-2 ring-background"></span>
            </div>
            <span className="material-symbols-outlined text-slate-400 hover:text-white transition-colors cursor-pointer">help_outline</span>
          </div>
        </header>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-8 pb-24 pt-12">
            {/* Header Section */}
            <div className="mb-12">
              <h1 className="text-5xl font-headline font-bold text-on-surface tracking-tight leading-none mb-4">
                Configuración del <span className="gradient-text">Sistema</span>
              </h1>
              <p className="text-on-surface-variant text-lg font-body max-w-xl">
                Gestiona tu identidad, seguridad y nivel de arquitectura dentro del ecosistema SeedPath.
              </p>
            </div>

            {/* Settings Content */}
            <div className="space-y-8">
              {/* Section 1: Perfil de Arquitecto */}
              <div className="glass-card p-8 rounded-lg flex items-start gap-8">
                <div className="relative shrink-0">
                  <div className="w-24 h-24 rounded-lg overflow-hidden ring-4 ring-[#3B82F6]/10">
                    <img alt="Perfil" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7sUGSnQo1Snvt4vAhl2Ltvn7W30P5N9RNW-zq3c8rOlybdqdo9nOpUa8GfZsA5b79F7BNST08APb29Y44wBLduxWavHFzL7qjULa4O4aZ9iAaVLY-zkT1zwcl7wdRZdkv6ij6YVHnvkkHg3yN3sJQmmdosc2xYySKjN8xNzMzoPt5O78mXL7BP3Uy7-IprwkkSBdX3xECST1KenG6TeVfJoskm80Zkm9vcq4IMZJlVnDuTcoz-Kn4OeSmwhmrZvKZDJ1je-CI8hqO" />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-full shadow-lg shadow-primary/20 text-on-primary active:scale-90 transition-transform">
                    <span className="material-symbols-outlined text-sm">edit</span>
                  </button>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Perfil de Arquitecto</h3>
                      <p className="text-sm text-on-surface-variant">Información pública y credenciales de acceso.</p>
                    </div>
                    <button className="px-5 py-2 border border-[#3B82F6]/30 text-[#3B82F6] text-sm font-semibold rounded-full hover:bg-[#3B82F6]/10 transition-colors">
                      Actualizar Foto
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Nombre de Arquitecto</label>
                      <p className="text-on-surface font-medium">Usuario</p>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Correo Electrónico</label>
                      <p className="text-on-surface font-medium">mickey.vip@seedpath.ai</p>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-1 font-bold">Rol del Sistema</label>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <p className="text-on-surface font-medium">Venture Architect</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Suscripción y Plan */}
              <div className="glass-card p-8 rounded-lg">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Suscripción y Plan</h3>
                    <p className="text-sm text-on-surface-variant">Control de facturación y límites de computación.</p>
                  </div>
                  <span className="px-4 py-1.5 bg-[#3B82F6]/20 border border-[#3B82F6]/50 text-[#3B82F6] text-[11px] font-bold uppercase tracking-widest rounded-full">
                    Plan Premium
                  </span>
                </div>
                <div className="flex items-center justify-between p-6 bg-surface-container rounded-lg border border-white/5">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                      <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    </div>
                    <div>
                      <p className="text-on-surface font-bold">Plan Premium - Venture Architect</p>
                      <p className="text-sm text-slate-400">Tu próximo ciclo de facturación es el 15 de abril.</p>
                    </div>
                  </div>
                  <button className="gradient-btn px-6 py-2.5 rounded-full text-white text-sm font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
                    Gestionar Suscripción
                  </button>
                </div>
              </div>

              {/* Section 3: Seguridad y Acceso */}
              <div className="glass-card p-8 rounded-lg">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Seguridad y Acceso</h3>
                <p className="text-sm text-on-surface-variant mb-8">Protege tu arquitectura y datos de mercado.</p>
                <div className="space-y-6">
                  {/* Password */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-400">lock</span>
                      <div>
                        <p className="text-on-surface font-medium">Contraseña</p>
                        <p className="text-xs text-slate-500">Último cambio hace 3 meses</p>
                      </div>
                    </div>
                    <button className="text-[#3B82F6] text-sm font-semibold hover:underline">Cambiar Contraseña</button>
                  </div>

                  {/* 2FA */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/5">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-400">shield_person</span>
                      <div>
                        <p className="text-on-surface font-medium">Autenticación de Dos Factores (2FA)</p>
                        <p className="text-xs text-slate-500">Añade una capa extra de seguridad a tu cuenta.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3B82F6]"></div>
                    </label>
                  </div>

                  {/* Active Sessions */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-bold">Sesiones Activas</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-lg">laptop_mac</span>
                          <div>
                            <p className="text-sm font-medium">MacBook Pro - Madrid, ES</p>
                            <p className="text-[10px] text-slate-500">Sesión actual</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">ONLINE</span>
                      </div>
                      <div className="flex items-center justify-between p-3 hover:bg-white/5 transition-colors rounded-lg group">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-500 text-lg">smartphone</span>
                          <div>
                            <p className="text-sm font-medium">iPhone 15 - Barcelona, ES</p>
                            <p className="text-[10px] text-slate-500">Activo hace 2 horas</p>
                          </div>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 text-error text-[10px] font-bold uppercase tracking-tighter">Finalizar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Preferencias de IA */}
              <div className="glass-card p-8 rounded-lg">
                <h3 className="text-xl font-headline font-bold text-on-surface mb-1">Preferencias de IA</h3>
                <p className="text-sm text-on-surface-variant mb-8">Personaliza tu motor de asistencia inteligente.</p>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-400">psychology</span>
                      <div>
                        <p className="text-on-surface font-medium">Modo de Análisis Profundo</p>
                        <p className="text-xs text-slate-500">Utiliza Gemini Pro 1.5 para razonamiento complejo.</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3B82F6]"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-slate-400">language</span>
                      <div>
                        <p className="text-on-surface font-medium">Idioma de la Interfaz</p>
                        <p className="text-xs text-slate-500">Define el lenguaje de los reportes y el UI.</p>
                      </div>
                    </div>
                    <select defaultValue="Español" className="bg-surface-container border-none text-sm rounded-lg focus:ring-1 focus:ring-primary py-1.5 pr-10">
                      <option value="Español">Español</option>
                      <option value="English">English</option>
                      <option value="Deutsch">Deutsch</option>
                      <option value="Français">Français</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
              <button className="gradient-btn px-12 py-4 rounded-full text-white font-bold text-lg shadow-xl shadow-primary/30 active:scale-95 transition-all hover:brightness-110">
                GUARDAR CAMBIOS
              </button>
              <a className="text-slate-500 hover:text-error transition-colors text-sm font-medium flex items-center gap-2" href="#">
                <span className="material-symbols-outlined text-sm">logout</span>
                Cerrar Sesión
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles preserved from original */}
      <style>{`
        body {
          background-color: #0b0e14;
          color: #e1e2eb;
          font-family: 'Inter', sans-serif;
        }
        .glass-card {
          background: rgba(25, 28, 34, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(173, 198, 255, 0.1);
        }
        .gradient-text {
          background: linear-gradient(to right, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gradient-btn {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}
