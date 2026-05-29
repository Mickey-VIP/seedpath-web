"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const QUESTIONS: string[] = [
  'Cuéntame tu idea en un par de líneas: ¿Qué problema estás resolviendo y a quién le urge tanto que la construyas?',
  'Interesante. Pero seamos reales: la gente ya resuelve esto de alguna forma hoy, aunque sea usando Excel, WhatsApp o haciéndolo a mano. ¿Por qué alguien dejaría su hábito actual para usar tu solución?',
  'Imagina que lanzas mañana, pero tienes $0 pesos para meterle a Facebook Ads o Instagram. ¿Cuál es el paso a paso exacto para conseguir a tus primeros 10 clientes de pago?',
  'Para que esto sea un negocio y no un hobby caro: ¿Cómo y cuánto vas a cobrar, y cuál es el gasto más fuerte que vas a tener que absorber mes a mes para operar?'
];

export default function Page() {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const s = localStorage.getItem('onboarding_step_v1');
      return s ? Number(s) : 0;
    }
    return 0;
  });

  const [answers, setAnswers] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('onboarding_answers_v1');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length === QUESTIONS.length) return parsed;
        } catch (e) {
          // ignore
        }
      }
    }
    return Array(QUESTIONS.length).fill('');
  });

  useEffect(() => {
    try {
      localStorage.setItem('onboarding_answers_v1', JSON.stringify(answers));
    } catch (e) {
      // ignore
    }
  }, [answers]);

  useEffect(() => {
    try {
      localStorage.setItem('onboarding_step_v1', String(current));
    } catch (e) {
      // ignore
    }
  }, [current]);

  const [isThinking, setIsThinking] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const THINK_DELAY = 700; // ms
  const ANALYZE_DELAY = 1600; // ms

  function updateAnswer(value: string) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[current] = value;
      return copy;
    });
  }

  function handleNext() {
    if (isThinking || isAnalyzing) return;
    if (current < QUESTIONS.length - 1) {
      setIsThinking(true);
      setTimeout(() => {
        setCurrent((c) => c + 1);
        setIsThinking(false);
      }, THINK_DELAY);
    } else {
      // Última pregunta: mostrar análisis antes de redirigir
      setIsAnalyzing(true);
      setTimeout(() => {
        console.log('[Onboarding] Respuestas finales:', answers);
        // Después del cuestionario rápido, dirigir al registro/pago y luego al cuestionario avanzado
        router.push('/onboarding/register');
      }, ANALYZE_DELAY);
    }
  }

  function handlePrev() {
    if (isThinking || isAnalyzing) return;
    if (current > 0) {
      setIsThinking(true);
      setTimeout(() => {
        setCurrent((c) => c - 1);
        setIsThinking(false);
      }, THINK_DELAY);
    }
  }

  function handleReset() {
    setAnswers(Array(QUESTIONS.length).fill(''));
    setCurrent(0);
    try {
      localStorage.removeItem('onboarding_answers_v1');
      localStorage.removeItem('onboarding_step_v1');
    } catch (e) {}
  }

  const progress = Math.round(((current + 1) / QUESTIONS.length) * 100);

  return (
    <div className="bg-surface-container-lowest text-on-background font-body min-h-screen selection:bg-primary-container/30">

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pt-6 pb-48">

        {/* Header */}
        <header className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-white tracking-tight">
            Cuestionario de Evaluación Activa
          </h1>
          <p className="text-primary font-medium text-lg max-w-xl mx-auto">
            Responde una pregunta a la vez; tus respuestas se guardan automáticamente.
          </p>
        </header>

        <div className="space-y-8">

          <section className="glass-card p-8 rounded-3xl relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold font-headline text-white">Pregunta {current + 1} de {QUESTIONS.length}</h2>
                <p className="text-sm text-slate-400">Progreso: {progress}%</p>
              </div>
              <div className="w-40">
                <div className="h-2 bg-[#272a31] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>

            {(isThinking || isAnalyzing) && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 rounded-3xl">
                <div className="text-center text-white px-6">
                  {isThinking && (
                    <>
                      <div className="text-xl font-semibold mb-2">Pensando...</div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
                      </div>
                    </>
                  )}
                  {isAnalyzing && (
                    <>
                      <div className="text-2xl font-bold mb-4">Haciendo el análisis de tus respuestas...</div>
                      <div className="mx-auto w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="mt-4">
              <h3 className="text-3xl md:text-4xl font-bold font-headline text-white leading-snug">{QUESTIONS[current]}</h3>

              <textarea
                value={answers[current] ?? ''}
                onChange={(e) => updateAnswer(e.target.value)}
                placeholder="Escribe tu respuesta aquí..."
                rows={8}
                className="w-full mt-6 bg-[#0b0e14]/60 rounded-xl border border-white/6 focus:border-primary/60 focus:ring-1 focus:ring-primary/10 text-on-surface p-6 text-lg transition-all resize-none outline-none placeholder:text-slate-600 min-h-[180px]"
              />

              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={handlePrev}
                  disabled={current === 0}
                  className={
                    'px-6 py-3 rounded-full font-semibold transition-all duration-150 ' +
                    (current === 0
                      ? 'bg-[#272a31] text-slate-600 cursor-not-allowed'
                      : 'bg-[#1f2937] text-white hover:brightness-105')
                  }
                >
                  Anterior
                </button>

                <div className="flex items-center gap-3">
                  <button onClick={handleReset} className="text-slate-500 hover:text-white">Borrar respuestas</button>
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold hover:scale-[1.02] active:scale-95 transition-transform"
                  >
                    {current < QUESTIONS.length - 1 ? 'Siguiente' : 'Finalizar'}
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>

      </main>

      {/* Bottom Left Profile */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="flex items-center gap-4 bg-[#1d2026]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 pr-6 shadow-2xl">
          <div className="relative">
            <img
              alt="Avatar"
              className="w-12 h-12 rounded-xl object-cover border border-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbdB7L2ewXxVcULrVIrsG1NAF4dV2wrl3Pm603is0Xa8FicLATPGtJ_uUfLBSg3NsqF3uD1-gosZsIc1ovvSqLSG56IB3zXe0Dr1tpJet2ZSIePloIPRX4GK2I7OEpghVT42A2wV9Ycbu5gzAqWsdAcVP70VX-7vTPdjAWKMHBrjdAQ--QAkRl-fnawVwhSAOECLuby71Yc3fZ0CzuqrjwpAgE48TnhJnJ4HB3uATsBDdXU8RjZkcjn3dFEWLXVGO9AtJEorTboBxA"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#1d2026] rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white leading-tight">MickeyVIP</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Arquitecto Senior</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10 mx-2" />
          <button
            aria-label="Cerrar sesión"
            className="text-slate-400 hover:text-red-400 transition-colors active:scale-95"
            onClick={() => router.push('/')}
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
          </button>
        </div>
      </div>

    </div>
  );
}
