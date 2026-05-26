"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RoadmapIntroPage() {
  const router = useRouter();
  const [issues, setIssues] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('onboarding_advanced_answers_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        const issuesList: string[] = [];
        if (Array.isArray(parsed)) {
          const a0 = parsed[0] || '';
          const match = a0.match(/\d+/);
          if (match && Number(match[0]) < 10) issuesList.push('Pocos prospectos identificados (menos de 10).');
          else if (!match) issuesList.push('No cuentas con una lista clara de prospectos identificados.');

          const a1 = parsed[1] || '';
          const match2 = a1.match(/\d+/);
          if (match2) {
            const val = Number(match2[0]);
            if (val < 100) issuesList.push('Presupuesto de validación muy limitado.');
          } else issuesList.push('No has definido presupuesto de validación claro.');

          const a2 = parsed[2] || '';
          if (!a2 || a2.length < 20) issuesList.push('Trigger de pago poco definido.');
        }

        const filler = [
          'Ajuste producto-mercado incompleto',
          'Canal de adquisición no validado',
          'Modelo de monetización por validar',
        ];
        while (issuesList.length < 3) {
          issuesList.push(filler[issuesList.length]);
        }

        setIssues(issuesList.slice(0, 3));
      } else {
        setIssues([
          'Ajuste producto-mercado incompleto',
          'Canal de adquisición no validado',
          'Modelo de monetización por validar',
        ]);
      }
    } catch (e) {
      setIssues([
        'Ajuste producto-mercado incompleto',
        'Canal de adquisición no validado',
        'Modelo de monetización por validar',
      ]);
    }
  }, []);

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="glass-card p-10 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Muy bien</h2>
          <p className="text-slate-400 mb-6">Estos son los problemas principales que hemos detectado en tu idea. Ir resolviéndolos te ayudará a traccionar.</p>

          <div className="text-left mx-auto max-w-xl mb-6">
            <ul className="list-disc ml-6 space-y-2 text-white/90">
              {issues.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={() => router.push('/onboarding/roadmap/generate')} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">Quiero generar mi roadmap</button>
            <button onClick={() => router.push('/dashboard')} className="px-8 py-3 bg-[#1f2937] text-white rounded-full">Omitir y continuar</button>
          </div>
        </div>
      </main>
    </div>
  );
}
