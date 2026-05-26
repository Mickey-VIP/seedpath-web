"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RoadmapGeneratePage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let mounted = true;
    let v = 0;
    const interval = setInterval(() => {
      v += Math.floor(Math.random() * 12) + 6;
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Generando tu roadmap...</h2>
              <div className="mx-auto w-40 h-40 flex items-center justify-center rounded-full bg-[#0b0e14]/30 border border-white/5 mb-6">
                <div className="w-20 h-20 border-4 border-white/10 border-t-white rounded-full animate-spin" />
              </div>
              <p className="text-slate-400">Estamos organizando los pasos prioritarios para que empieces a traccionar.</p>
              <div className="mt-6 w-full bg-[#272a31] rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-3 text-sm text-slate-400">{progress}%</div>
            </>
          )}

          {done && (
            <>
              <h3 className="text-2xl font-bold text-white mb-4">Roadmap listo</h3>
              <p className="text-slate-400 mb-6">Hemos generado un roadmap inicial con acciones priorizadas. Puedes revisarlo y ajustarlo.</p>
              <div className="flex gap-3 justify-center">
                <button onClick={() => router.push('/dashboard')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">Ver mi roadmap</button>
                <button onClick={() => router.push('/onboarding/roadmap')} className="px-8 py-3 bg-[#1f2937] text-white rounded-full">Volver</button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
