"use client";

import { useEffect, useState } from 'react';

export default function RoadmapClient() {
  const [validationDone, setValidationDone] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const v = localStorage.getItem('roadmap_phase_validation_done');
      if (v !== null) return v === 'true';
      // default: first phase already marked completed in UI
      return true;
    }
    return true;
  });

  const [prototypeDone, setPrototypeDone] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('roadmap_phase_prototype_done') === 'true';
    }
    return false;
  });

  const [launchDone, setLaunchDone] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('roadmap_phase_launch_done') === 'true';
    }
    return false;
  });

  const [warning, setWarning] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('roadmap_phase_validation_done', String(validationDone));
  }, [validationDone]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('roadmap_phase_prototype_done', String(prototypeDone));
  }, [prototypeDone]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('roadmap_phase_launch_done', String(launchDone));
  }, [launchDone]);

  function showWarning(msg: string) {
    setWarning(msg);
    setTimeout(() => setWarning(''), 3000);
  }

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleTopClick(phase: 'validation' | 'prototype' | 'launch') {
    if (phase === 'validation') return scrollToId('phase-validation');
    if (phase === 'prototype') {
      if (!validationDone) return showWarning('Completa la etapa de Validación antes de avanzar a Prototipado.');
      return scrollToId('phase-mvp');
    }
    if (phase === 'launch') {
      if (!validationDone || !prototypeDone) return showWarning('Debes completar las etapas previas antes de lanzar.');
      return scrollToId('phase-launch');
    }
  }

  function markPhaseDone(phase: 'validation' | 'prototype' | 'launch') {
    if (phase === 'validation') setValidationDone(true);
    if (phase === 'prototype') setPrototypeDone(true);
    if (phase === 'launch') setLaunchDone(true);
  }

  return (
    <div className="p-12 max-w-6xl mx-auto w-full">

      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-5xl font-['Space_Grotesk'] font-bold text-[#e1e2eb] tracking-tight mb-4">
          Hoja de Ruta de Ejecución
        </h1>
        <p className="text-xl text-[#c2c6d6] font-light max-w-2xl">
          Monitoreo de progreso y próximos hitos estratégicos para la consolidación del ecosistema SeedPath.
        </p>
      </div>

      {/* Top phases selector */}
      <div className="mb-8">
        {warning && (
          <div className="mb-4 text-sm text-yellow-300 bg-[#3f2a0f]/30 p-3 rounded-md">{warning}</div>
        )}
        <div className="flex gap-4">
          <button onClick={() => handleTopClick('validation')} className={"flex-1 p-4 rounded-xl text-left transition-shadow " + (validationDone ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-[#0f1114] border border-white/6 text-white') }>
            <div className="font-bold">1 - Validación</div>
            <div className="text-sm text-slate-300">Entrevistas, hipótesis y tracción inicial</div>
          </button>

          <button onClick={() => handleTopClick('prototype')} className={"flex-1 p-4 rounded-xl text-left transition-shadow " + (prototypeDone ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg' : 'bg-[#0f1114] border border-white/6 text-white ' + (validationDone ? '' : 'opacity-60 cursor-not-allowed')) }>
            <div className="font-bold">2 - Prototipado / MVP</div>
            <div className="text-sm text-slate-300">Arquitectura, stack y desarrollo inicial</div>
          </button>

          <button onClick={() => handleTopClick('launch')} className={"flex-1 p-4 rounded-xl text-left transition-shadow " + (launchDone ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg' : 'bg-[#0f1114] border border-white/6 text-white ' + ((validationDone && prototypeDone) ? '' : 'opacity-60 cursor-not-allowed')) }>
            <div className="font-bold">3 - Lanzamiento</div>
            <div className="text-sm text-slate-300">Go-to-market y adquisición</div>
          </button>
        </div>
      </div>

      {/* Vertical Roadmap */}
      <div className="relative">
        {/* Central Timeline Line */}
        <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#adc6ff] to-transparent opacity-20" />
        <div className="space-y-12">

          {/* Milestone 1: Completed */}
          <div id="phase-validation" className="flex gap-12 group">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#adc6ff]/20 flex items-center justify-center border border-[#adc6ff]/40 text-[#adc6ff]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8 flex-1 transition-all hover:translate-x-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#adc6ff]/10 text-[#adc6ff] text-[10px] font-bold uppercase tracking-widest mb-3">
                    Fase 1: Descubrimiento
                  </span>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">Validación de Mercado</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#adc6ff]/60 text-[10px] uppercase tracking-widest">Completado</span>
                  {!validationDone ? (
                    <button onClick={() => markPhaseDone('validation')} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Marcar completado</button>
                  ) : (
                    <button onClick={() => markPhaseDone('validation')} className="text-xs px-2 py-1 bg-[#1f2937] rounded opacity-70">Completado</button>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#272a31]/50 group-hover:bg-[#272a31] transition-colors">
                  <span className="material-symbols-outlined text-[#adc6ff] text-sm">task_alt</span>
                  <span className="text-sm font-medium text-[#c2c6d6]">Entrevistas con expertos</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#272a31]/50 group-hover:bg-[#272a31] transition-colors">
                  <span className="material-symbols-outlined text-[#adc6ff] text-sm">task_alt</span>
                  <span className="text-sm font-medium text-[#c2c6d6]">Análisis de brecha de mercado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 2: In Progress */}
          <div className="flex gap-12 group">
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#adc6ff]/10 flex items-center justify-center border border-[#adc6ff]/60 relative">
                <div className="absolute inset-0 rounded-full bg-[#adc6ff] animate-ping opacity-20" />
                <div className="w-3 h-3 rounded-full bg-[#adc6ff] shadow-[0_0_15px_rgba(173,198,255,0.8)]" />
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8 flex-1 border border-[#adc6ff]/20 transition-all hover:translate-x-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#c0c1ff]/10 text-[#c0c1ff] text-[10px] font-bold uppercase tracking-widest mb-3">
                    Fase 2: Validación de Hipótesis
                  </span>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">Tracción Inicial</h3>
                </div>
                <span className="text-[#c0c1ff] text-[10px] uppercase tracking-widest animate-pulse">En Progreso</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1d2026]/50 border border-[#adc6ff]/20">
                  <span className="material-symbols-outlined text-[#adc6ff] text-sm">rocket_launch</span>
                  <span className="text-sm font-medium text-[#e1e2eb]">Landing Page de validación</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#1d2026]/50 border border-white/5">
                  <span className="material-symbols-outlined text-slate-500 text-sm">query_stats</span>
                  <span className="text-sm font-medium text-[#c2c6d6]">Medición de CTR y conversión</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-slate-500">Progreso de Fase</span>
                  <span className="text-[10px] font-bold text-[#adc6ff]">65%</span>
                </div>
                <div className="h-1 w-full bg-[#32353c] rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#adc6ff] to-[#d0bcff] w-[65%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 3: Pending */}
          <div id="phase-mvp" className={"flex gap-12 group " + (prototypeDone ? '' : (validationDone ? 'opacity-60 hover:opacity-100 transition-opacity' : 'opacity-30') )}>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#272a31] flex items-center justify-center border border-white/10">
                <span className="material-symbols-outlined text-slate-500">radio_button_unchecked</span>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8 flex-1 transition-all hover:translate-x-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#32353c] text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    Fase 3: Desarrollo de MVP
                  </span>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">Arquitectura de Producto</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-[10px] uppercase tracking-widest">Pendiente</span>
                  {!prototypeDone && validationDone && (
                    <button onClick={() => markPhaseDone('prototype')} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Marcar completado</button>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#272a31]/30">
                  <span className="material-symbols-outlined text-slate-600 text-sm">layers</span>
                  <span className="text-sm font-medium text-slate-400">Definición de stack tecnológico</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#272a31]/30">
                  <span className="material-symbols-outlined text-slate-600 text-sm">database</span>
                  <span className="text-sm font-medium text-slate-400">Arquitectura de base de datos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone 4: Pending */}
          <div id="phase-launch" className={"flex gap-12 group " + (launchDone ? '' : ((validationDone && prototypeDone) ? 'opacity-40 hover:opacity-100 transition-opacity' : 'opacity-30'))}>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#272a31] flex items-center justify-center border border-white/5">
                <span className="material-symbols-outlined text-slate-600">radio_button_unchecked</span>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-8 flex-1 transition-all hover:translate-x-2">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#32353c] text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    Fase 4: Lanzamiento al Mercado
                  </span>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">Escalamiento Global</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-[10px] uppercase tracking-widest">Pendiente</span>
                  {!launchDone && validationDone && prototypeDone && (
                    <button onClick={() => markPhaseDone('launch')} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Marcar completado</button>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#272a31]/20">
                  <span className="material-symbols-outlined text-slate-600 text-sm">campaign</span>
                  <span className="text-sm font-medium text-slate-500">Estrategia de Go-to-Market</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#272a31]/20">
                  <span className="material-symbols-outlined text-slate-600 text-sm">ads_click</span>
                  <span className="text-sm font-medium text-slate-500">Campañas de adquisición inicial</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bento Summary Grid */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Métricas Card */}
        <div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-lg font-['Space_Grotesk'] font-bold mb-4">Métricas de Ejecución</h4>
            <div className="flex items-end gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Tasa de Completado</p>
                <p className="text-4xl font-['Space_Grotesk'] font-bold text-[#adc6ff]">38%</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Días en Sprint</p>
                <p className="text-4xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">24</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Nivel de Riesgo</p>
                <p className="text-4xl font-['Space_Grotesk'] font-bold text-[#c0c1ff]">Bajo</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none flex items-end justify-end">
            <span className="material-symbols-outlined text-[200px]">insights</span>
          </div>
        </div>

        {/* Próximo Hito Card */}
        <div className="bg-gradient-to-br from-[#adc6ff] to-[#d0bcff] p-[1px] rounded-3xl">
          <div className="bg-[#0b0e14] h-full w-full rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-['Space_Grotesk'] font-bold mb-2">Próximo Hito Crítico</h4>
              <p className="text-sm text-[#c2c6d6] font-light">
                Validación de Arquitectura Cloud para escalamiento masivo.
              </p>
            </div>
            <button className="mt-6 w-full py-3 bg-gradient-to-r from-[#adc6ff] to-[#d0bcff] rounded-full text-[#002e6a] font-bold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(173,198,255,0.3)] transition-all">
              Ver Detalles
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
