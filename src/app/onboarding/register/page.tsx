"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PLANS = [
  { id: 'starter', name: 'Starter', price: '$9', priceNum: 9, features: ['Checklist inicial', 'Email support', '1 proyecto'] },
  { id: 'growth', name: 'Growth', price: '$29', priceNum: 29, features: ['Todo Starter', 'Templates', '3 proyectos'] },
  { id: 'scale', name: 'Scale', price: '$99', priceNum: 99, features: ['Todo Growth', 'Soporte prioritario', 'Proyectos ilimitados'] },
];

export default function RegisterPage() {
  const router = useRouter();
  const [selected, setSelected] = useState(PLANS[0].id);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!name.trim()) return setError('Ingresa tu nombre');
    const normalized = email.trim();
    if (!/\S+@\S+\.\S+/.test(normalized)) return setError('Correo inválido');
    if (password.length < 6) return setError('La contraseña debe tener al menos 6 caracteres');

    setIsProcessing(true);
    setTimeout(() => {
      try {
        const plan = PLANS.find((p) => p.id === selected) ?? PLANS[0];
        const user = { name: name.trim(), email: normalized, plan: plan.id, planName: plan.name, subscribedAt: Date.now() };
        localStorage.setItem('user_v1', JSON.stringify(user));
        localStorage.setItem('subscription_v1', JSON.stringify({ plan: plan.id, price: plan.priceNum, status: 'active', startedAt: Date.now() }));
      } finally {
        setIsProcessing(false);
        router.push('/onboarding/advanced');
      }
    }, 1200);
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-headline text-white">Crear cuenta y seleccionar plan</h1>
          <p className="text-slate-400 mt-2">Elige un plan y completa tu registro para recibir soporte personalizado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {PLANS.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                className={[
                  'w-full text-left p-6 rounded-2xl transition-all border',
                  selected === p.id ? 'border-primary bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-white/6 bg-[#0b0e14]/40 text-white/80',
                ].join(' ')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-lg">{p.name}</div>
                    <div className="text-sm text-slate-300">{p.features.join(' · ')}</div>
                  </div>
                  <div className="text-2xl font-extrabold">{p.price}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="glass-card p-6 rounded-3xl">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <label className="text-sm text-slate-300">Nombre</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white" />

              <label className="text-sm text-slate-300">Correo</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white" />

              <label className="text-sm text-slate-300">Contraseña</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white" />

              <div className="text-xs text-slate-400">El pago se simula en esta demostración; aquí podrías integrar Stripe/PayPal.</div>

              {error && <div className="text-sm text-red-400">{error}</div>}

              <div className="flex items-center gap-3">
                <button type="submit" disabled={isProcessing} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                  {isProcessing ? 'Procesando pago...' : 'Pagar y crear cuenta'}
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
