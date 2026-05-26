"use client";

import { useRouter } from 'next/navigation';

export default function SolutionsPage() {
  const router = useRouter();

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body min-h-screen selection:bg-primary-container/30">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <div className="glass-card p-10 rounded-3xl">
          <h1 className="text-3xl font-bold mb-4">Cómo solucionar los riesgos detectados</h1>
          <p className="text-slate-400 mb-6">A continuación verás recomendaciones prácticas para mitigar los riesgos que impiden la tracción.</p>

          <ol className="list-decimal list-inside space-y-4 mb-8">
            <li>
              <strong>Validar el ajuste producto-mercado:</strong> realiza entrevistas con 10 clientes potenciales y prueba una landing con captura de correos.
            </li>
            <li>
              <strong>Probar canales de adquisición baratos:</strong> usa outreach manual, alianzas y pruebas de contenido orgánico antes de invertir en Ads.
            </li>
            <li>
              <strong>Revisar la monetización:</strong> crea una oferta simple y cobra desde el primer cliente para validar willingness to pay.
            </li>
          </ol>

          <div className="flex gap-3">
            <button onClick={() => router.push('/onboarding/register')} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold">Quiero ayuda con esto</button>
            <button onClick={() => router.push('/onboarding/analysis')} className="px-6 py-3 bg-[#1f2937] text-white rounded-full">Volver al análisis</button>
          </div>
        </div>
      </main>
    </div>
  );
}
