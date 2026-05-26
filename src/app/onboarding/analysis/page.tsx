"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnalysisPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState(() => {
    if (typeof window !== 'undefined') return localStorage.getItem('onboarding_contact_email_v1') || '';
    return '';
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(() => {
    if (typeof window !== 'undefined') return Boolean(localStorage.getItem('onboarding_contact_email_v1'));
    return false;
  });
  const [error, setError] = useState('');

  useEffect(() => {
    let mounted = true;
    let v = 0;
    const interval = setInterval(() => {
      v += Math.floor(Math.random() * 12) + 6; // increments vary so it feels dynamic
      if (v >= 100) {
        v = 100;
        if (mounted) setProgress(v);
        clearInterval(interval);
        setTimeout(() => {
          if (mounted) setDone(true);
        }, 700);
      } else {
        if (mounted) setProgress(v);
      }
    }, 140);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="glass-card p-10 rounded-3xl text-center">
          {!done && (
            <>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Analizando modelo de negocio...</h2>

              <div className="mx-auto w-40 h-40 flex items-center justify-center rounded-full bg-[#0b0e14]/30 border border-white/5 mb-6">
                <div className="w-20 h-20 border-4 border-white/10 border-t-white rounded-full animate-spin" />
              </div>

              <p className="text-slate-400">Procesando tus respuestas y evaluando señales clave</p>

              <div className="mt-6 w-full bg-[#272a31] rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-3 text-sm text-slate-400">{progress}%</div>
            </>
          )}

          {done && (
            <>
              <div className="text-red-400 text-lg font-semibold mb-4">⚠️ Análisis completado</div>
              <div className="bg-red-900/20 border border-red-700 text-red-100 rounded-lg p-6 mb-6 text-left">
                <div className="font-bold">SeedPath ha detectado 3 Riesgos Fatales en tu modelo que te impedirán traccionar.</div>
                <ul className="mt-3 list-disc ml-5 text-sm text-red-200">
                  <li>Riesgo 1: Ajuste producto-mercado insuficiente</li>
                  <li>Riesgo 2: Canal de adquisición no validado</li>
                  <li>Riesgo 3: Monetización débil</li>
                </ul>
              </div>

              <div className="max-w-xl mx-auto">
                {!submitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setError('');
                      const normalized = (email || '').trim();
                      const emailRegex = /^\S+@\S+\.\S+$/;
                      if (!emailRegex.test(normalized)) {
                        setError('Ingresa un correo válido');
                        return;
                      }
                      setIsSubmitting(true);
                      setTimeout(() => {
                        try {
                          localStorage.setItem('onboarding_contact_email_v1', normalized);
                          localStorage.setItem('onboarding_contact_at_v1', String(Date.now()));
                          setSubmitted(true);
                        } finally {
                          setIsSubmitting(false);
                        }
                      }, 900);
                    }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="w-full md:flex md:items-center md:justify-center md:gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@correo.com"
                        className="w-full md:w-80 px-4 py-3 rounded-lg bg-[#0b0e14]/50 border border-white/6 text-white outline-none"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-3 md:mt-0 md:ml-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold"
                      >
                        {isSubmitting ? 'Enviando...' : 'Agregar mi correo para ver cómo solucionarlo'}
                      </button>
                    </div>

                    <div className="text-sm text-slate-400">Recibirás un resumen con pasos prácticos a tu correo.</div>
                    {error && <div className="text-sm text-red-300 mt-2">{error}</div>}
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="text-sm text-slate-300 mb-3">Gracias. Te enviaremos al correo <strong className="text-white">{email}</strong> los pasos para solucionar los riesgos.</div>
                    <div className="flex gap-3 justify-center">
                      <button onClick={() => router.push('/onboarding/solutions')} className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold">Ver cómo solucionarlo</button>
                      <button onClick={() => router.push('/dashboard')} className="px-8 py-3 bg-[#1f2937] text-white rounded-full">Omitir y continuar</button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
