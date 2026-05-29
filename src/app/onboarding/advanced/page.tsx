"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const QUESTIONS2: string[] = [
  'Necesito números, no intenciones. ¿Cuántas personas del perfil exacto de tu cliente objetivo tienes identificadas hoy — con nombre, cargo y empresa — a las que puedas mandarles un mensaje esta semana? Si la respuesta es menos de 10, dime por qué y qué canal usarías para conseguirlas.',
  'Seamos reales con la cartera: Si hoy tuvieras que pagar el servidor web, el dominio, herramientas o campañas de validación, ¿cuál es tu presupuesto máximo mensual en dólares que estás dispuesto a quemar de tu propio bolsillo antes de tirar la toalla?',
  '¿Cuál es la acción específica y mínima que tu cliente tiene que hacer para que tú cobres? Descríbela en una sola oración operativa. No me digas "cuando vean el valor" — dime el trigger exacto: ¿qué hace, cuándo, y qué le cobras en ese momento?',
  'Imagínate que tu producto ya está en vivo y un cliente entra. Describe paso a paso cómo sería su experiencia en los primeros 3 minutos. ¿Qué botón pica, qué información mete y qué resultado le entregas en la pantalla?',
  'Habilidades y restricciones, sin filtro: ¿qué puedes construir tú solo hoy — código, diseño, ventas, contenido — y qué necesitas de alguien más para llegar a tu primer cliente pagando? Si tienes socios o equipo, dime quiénes son y qué hacen en términos concretos.'
];

export default function AdvancedPage() {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(0);

  const [answers, setAnswers] = useState<string[]>(Array(QUESTIONS2.length).fill(''));

  // Load persisted advanced onboarding state on mount (avoid hydration mismatch)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const s = localStorage.getItem('onboarding_advanced_step_v1');
      if (s) setCurrent(Number(s));
    } catch (e) {}

    try {
      const saved = localStorage.getItem('onboarding_advanced_answers_v1');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const arr = Array(QUESTIONS2.length).fill('');
            for (let i = 0; i < Math.min(parsed.length, QUESTIONS2.length); i++) arr[i] = parsed[i] ?? '';
            setAnswers(arr);
          }
        } catch (e) {
          // ignore
        }
      }
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('onboarding_advanced_answers_v1', JSON.stringify(answers));
    } catch (e) {
      // ignore
    }
  }, [answers]);

  useEffect(() => {
    try {
      localStorage.setItem('onboarding_advanced_step_v1', String(current));
    } catch (e) {
      // ignore
    }
  }, [current]);

  function updateAnswer(value: string) {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[current] = value;
      return copy;
    });
  }

  function handleNext() {
    if (current < QUESTIONS2.length - 1) setCurrent((c) => c + 1);
    else handleFinish();
  }

  function handlePrev() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  function handleFinish() {
    try {
      localStorage.setItem('onboarding_advanced_completed_at', String(Date.now()));
    } catch (e) {}
    router.push('/onboarding/roadmap');
  }

  function handleReset() {
    setAnswers(Array(QUESTIONS2.length).fill(''));
    setCurrent(0);
    try {
      localStorage.removeItem('onboarding_advanced_answers_v1');
      localStorage.removeItem('onboarding_advanced_step_v1');
    } catch (e) {}
  }

  const progress = Math.round(((current + 1) / QUESTIONS2.length) * 100);

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-headline text-white">Cuestionario Avanzado</h1>
          <p className="text-slate-400 mt-2">Responde con datos y ejemplos concretos — esto nos ayudará a priorizar acciones.</p>
        </div>

        <section className="glass-card p-8 rounded-3xl relative">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold font-headline text-white">Pregunta {current + 1} de {QUESTIONS2.length}</h2>
              <p className="text-sm text-slate-400">Progreso: {progress}%</p>
            </div>
            <div className="w-40">
              <div className="h-2 bg-[#272a31] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold font-headline text-white leading-snug">{QUESTIONS2[current]}</h3>

            <textarea
              value={answers[current] ?? ''}
              onChange={(e) => updateAnswer(e.target.value)}
              placeholder="Responde con números, ejemplos y pasos concretos"
              rows={6}
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
                  {current < QUESTIONS2.length - 1 ? 'Siguiente' : 'Finalizar'}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
