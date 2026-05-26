"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AnalysisPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

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

              <div className="flex flex-col md:flex-row gap-3 justify-center">
                <button
                  onClick={() => router.push('/onboarding/solutions')}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold"
                >
                  Cómo solucionarlo
                </button>

                <button
                  onClick={() => router.push('/onboarding')}
                  className="px-8 py-3 bg-[#1f2937] text-white rounded-full"
                >
                  Volver al cuestionario
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
