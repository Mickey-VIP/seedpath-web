"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  function handleCreateAccount(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Ingresa tu nombre');
    const normalized = email.trim();
    if (!/\S+@\S+\.\S+/.test(normalized)) return setError('Correo inválido');
    if (password.length < 6) return setError('La contraseña debe tener al menos 6 caracteres');

    setIsProcessing(true);
    setTimeout(() => {
      try {
        const user = { name: name.trim(), email: normalized, createdAt: Date.now() };
        localStorage.setItem('user_v1', JSON.stringify(user));
      } finally {
        setIsProcessing(false);
        // Después de crear la cuenta, dirigir al selector de planes
        router.push('/onboarding/register/plan');
      }
    }, 900);
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-headline text-white">Crear cuenta y seleccionar plan</h1>
          <p className="text-slate-400 mt-2">Elige un plan y completa tu registro para recibir soporte personalizado.</p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="glass-card p-8 rounded-3xl">
            <form onSubmit={handleCreateAccount} className="space-y-4">
              <label className="text-sm text-slate-300">Nombre</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white" />

              <label className="text-sm text-slate-300">Correo</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white" />

              <label className="text-sm text-slate-300">Contraseña</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white" />

              {error && <div className="text-sm text-red-400">{error}</div>}

              <div className="flex items-center gap-3">
                <button type="submit" disabled={isProcessing} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                  {isProcessing ? 'Creando cuenta...' : 'Crear cuenta y continuar'}
                </button>

                <button type="button" onClick={() => router.push('/onboarding/analysis')} className="px-4 py-3 bg-[#1f2937] text-white rounded-full">Volver</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
