"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PLANS = [
  { id: 'starter', name: 'Starter', price: '$9', priceNum: 9, features: ['Checklist inicial', 'Email support', '1 proyecto'] },
  { id: 'growth', name: 'Growth', price: '$29', priceNum: 29, features: ['Todo Starter', 'Templates', '3 proyectos'] },
  { id: 'scale', name: 'Scale', price: '$99', priceNum: 99, features: ['Todo Growth', 'Soporte prioritario', 'Proyectos ilimitados'] },
];

export default function PlanPage() {
  const router = useRouter();
  const [selected, setSelected] = useState(PLANS[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    try {
      const u = localStorage.getItem('user_v1');
      setUserExists(Boolean(u));
    } catch (e) {}
  }, []);

  function handleSubscribe() {
    if (!userExists) return router.push('/onboarding/register');
    setIsProcessing(true);
    setTimeout(() => {
      try {
        const plan = PLANS.find((p) => p.id === selected) ?? PLANS[0];
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
          <h1 className="text-4xl font-bold font-headline text-white">Selecciona un plan</h1>
          <p className="text-slate-400 mt-2">Selecciona el plan que mejor se adapte a ti. El pago se simula en esta demo.</p>
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
            <div className="space-y-4">
              <div className="text-sm text-slate-400">Resumen del plan seleccionado</div>
              <div className="p-4 bg-[#0b0e14]/40 rounded-lg border border-white/6">
                <div className="font-bold text-lg">{PLANS.find((p) => p.id === selected)?.name}</div>
                <div className="text-slate-300 mt-1">{PLANS.find((p) => p.id === selected)?.features.join(' · ')}</div>
                <div className="text-2xl font-extrabold mt-3">{PLANS.find((p) => p.id === selected)?.price}</div>
              </div>

              <div className="text-xs text-slate-400">El pago se simula en esta demostración; aquí podrías integrar Stripe/PayPal.</div>

              <div className="flex items-center gap-3 mt-4">
                <button onClick={handleSubscribe} disabled={isProcessing} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">
                  {isProcessing ? 'Procesando pago...' : 'Pagar y activar plan'}
                </button>

                <button onClick={() => router.push('/onboarding/register')} className="px-4 py-3 bg-[#1f2937] text-white rounded-full">Volver</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
