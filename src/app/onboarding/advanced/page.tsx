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
  const [answers, setAnswers] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('onboarding_advanced_answers_v1');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length === QUESTIONS2.length) return parsed;
        } catch (e) {}
      }
    }
    return Array(QUESTIONS2.length).fill('');
  });

  useEffect(() => {
    try {
      localStorage.setItem('onboarding_advanced_answers_v1', JSON.stringify(answers));
    } catch (e) {}
  }, [answers]);

  function updateAnswer(i: number, v: string) {
    setAnswers((prev) => {
      const c = [...prev];
      c[i] = v;
      return c;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      localStorage.setItem('onboarding_advanced_completed_at', String(Date.now()));
    } catch (e) {}
    router.push('/dashboard');
  }

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold font-headline text-white">Cuestionario Avanzado</h1>
          <p className="text-slate-400 mt-2">Responde con datos y ejemplos concretos — esto nos ayudará a priorizar acciones.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {QUESTIONS2.map((q, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl">
              <div className="text-sm text-slate-300 mb-3">Pregunta {i + 1}</div>
              <div className="text-lg font-semibold text-white mb-4">{q}</div>
              <textarea
                value={answers[i]}
                onChange={(e) => updateAnswer(i, e.target.value)}
                rows={5}
                className="w-full bg-[#0b0e14]/60 rounded-xl border border-white/6 focus:border-primary/60 focus:ring-1 focus:ring-primary/10 text-on-surface p-4 text-lg transition-all resize-none outline-none placeholder:text-slate-600"
                placeholder="Responde con números, ejemplos y pasos concretos"
              />
            </div>
          ))}

          <div className="flex items-center gap-4">
            <button type="button" onClick={() => router.push('/dashboard')} className="px-6 py-3 bg-[#1f2937] text-white rounded-full">Omitir</button>
            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">Guardar y continuar</button>
          </div>
        </form>
      </main>
    </div>
  );
}
