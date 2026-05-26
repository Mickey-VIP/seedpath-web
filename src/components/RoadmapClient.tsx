"use client";

import React, { useEffect, useState, useRef } from 'react';

type Doc = {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
};

export default function RoadmapClient() {
  const [validationDone, setValidationDone] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const v = localStorage.getItem('roadmap_phase_validation_done');
      if (v !== null) return v === 'true';
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
  const [expandedPhase, setExpandedPhase] = useState<null | 'validation' | 'prototype' | 'launch'>(null);

  const loadDocs = (key: string): Doc[] => {
    try {
      if (typeof window === 'undefined') return [];
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
      return [];
    }
  };

  const [attachments, setAttachments] = useState<{ validation: Doc[]; prototype: Doc[]; launch: Doc[] }>(() => ({
    validation: loadDocs('roadmap_docs_validation'),
    prototype: loadDocs('roadmap_docs_prototype'),
    launch: loadDocs('roadmap_docs_launch'),
  }));

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

  function toggleExpand(phase: 'validation' | 'prototype' | 'launch') {
    setExpandedPhase((prev) => (prev === phase ? null : phase));
  }

  const readFileAsDataUrl = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const fileInputs = useRef<any>({});
  const [dragOverPhase, setDragOverPhase] = useState<null | 'validation' | 'prototype' | 'launch'>(null);

  const ACCEPTED_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.oasis.opendocument.text',
    'text/plain',
  ];

  function isAcceptedFile(file: File) {
    if (ACCEPTED_TYPES.includes(file.type)) return true;
    // fallback by extension
    const name = file.name.toLowerCase();
    return name.endsWith('.pdf') || name.endsWith('.doc') || name.endsWith('.docx') || name.endsWith('.odt') || name.endsWith('.txt');
  }

  async function handleFiles(e: React.ChangeEvent<HTMLInputElement> | FileList | null, phase: 'validation' | 'prototype' | 'launch') {
    const filesList: File[] = [];
    if (!e) return;
    if ('length' in e && typeof e.item === 'function' && !(e as any).target) {
      // e is FileList
      for (let i = 0; i < (e as FileList).length; i++) {
        const f = (e as FileList).item(i);
        if (f) filesList.push(f);
      }
    } else if ('target' in (e as any)) {
      const ev = e as React.ChangeEvent<HTMLInputElement>;
      const files = ev.target.files;
      if (!files) return;
      for (let i = 0; i < files.length; i++) filesList.push(files[i]);
    }

    if (filesList.length === 0) return;
    const newDocs: Doc[] = [];
    const invalid: string[] = [];
    for (const file of filesList) {
      if (!isAcceptedFile(file)) {
        invalid.push(file.name);
        continue;
      }
      if (file.size > 5 * 1024 * 1024) {
        showWarning(`Archivo "${file.name}" demasiado grande (máx 5MB).`);
        continue;
      }
      const dataUrl = await readFileAsDataUrl(file);
      newDocs.push({ id: Date.now().toString(36) + Math.random().toString(16).slice(2), name: file.name, type: file.type, size: file.size, dataUrl });
    }
    if (invalid.length > 0) {
      showWarning(`Tipo no permitido: ${invalid.slice(0, 3).join(', ')}${invalid.length > 3 ? ', ...' : ''}`);
    }
    if (newDocs.length === 0) return;
    setAttachments((prev) => {
      const next = { ...prev, [phase]: [...prev[phase], ...newDocs] } as typeof prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem(`roadmap_docs_${phase}`, JSON.stringify(next[phase]));
      }
      return next;
    });
    // clear file input if used
    try {
      const input = fileInputs.current[phase] as HTMLInputElement | undefined;
      if (input) input.value = '';
    } catch {}
  }

  function deleteDoc(phase: 'validation' | 'prototype' | 'launch', id: string, e?: React.MouseEvent) {
    e?.stopPropagation();
    setAttachments((prev) => {
      const filtered = prev[phase].filter((d) => d.id !== id);
      const next = { ...prev, [phase]: filtered } as typeof prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem(`roadmap_docs_${phase}`, JSON.stringify(filtered));
      }
      return next;
    });
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
              <div className="flex justify-between items-start mb-6 cursor-pointer" onClick={() => toggleExpand('validation')}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#adc6ff]/10 text-[#adc6ff] text-[10px] font-bold uppercase tracking-widest mb-3">
                    Fase 1: Descubrimiento
                  </span>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">Validación de Mercado</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#adc6ff]/60 text-[10px] uppercase tracking-widest">Completado</span>
                  {!validationDone ? (
                    <button onClick={(e) => { e.stopPropagation(); markPhaseDone('validation'); }} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Marcar completado</button>
                  ) : (
                    <button onClick={(e) => { e.stopPropagation(); markPhaseDone('validation'); }} className="text-xs px-2 py-1 bg-[#1f2937] rounded opacity-70">Completado</button>
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

              {/* Expandable details + upload */}
              {expandedPhase === 'validation' && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <h4 className="text-lg font-bold mb-2">Detalle y evidencias</h4>
                  <p className="text-sm text-slate-300">Describe las entrevistas realizadas, conclusiones, hipótesis validadas y métricas obtenidas. Sube aquí los documentos (resúmenes, grabaciones, CSVs) que prueben que completaste esta fase.</p>

                  <div className="mt-4">
                    <label className="text-sm font-medium mb-2 block">Subir documentos de verificación (máx 5MB por archivo)</label>
                    <div
                      onDragOver={(ev) => { ev.preventDefault(); setDragOverPhase('validation'); }}
                      onDragLeave={() => setDragOverPhase(null)}
                      onDrop={(ev) => { ev.preventDefault(); setDragOverPhase(null); handleFiles(ev.dataTransfer.files, 'validation'); }}
                      onClick={() => fileInputs.current['validation']?.click()}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') fileInputs.current['validation']?.click(); }}
                      className={`border-2 border-dashed p-4 rounded-lg flex items-center gap-4 cursor-pointer ${dragOverPhase === 'validation' ? 'border-white/40 bg-white/2' : 'border-white/10 bg-transparent'}`}
                    >
                      <div className="flex-1">
                        <div className="text-sm text-slate-300">Arrastra aquí o haz click para examinar archivos. Tipos permitidos: PDF, DOC, DOCX, ODT, TXT.</div>
                      </div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); fileInputs.current['validation']?.click(); }} className="px-3 py-2 bg-[#1f2937] rounded text-sm">Examinar</button>
                      <input
                        ref={(el) => { fileInputs.current['validation'] = el; }}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.odt,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                        className="hidden"
                        onChange={(e) => handleFiles(e, 'validation')}
                      />
                    </div>

                    <div className="mt-4 space-y-3">
                      {attachments.validation.length === 0 && <div className="text-sm text-slate-500">No hay archivos subidos.</div>}
                      {attachments.validation.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between bg-[#0f1114] p-3 rounded">
                          <div className="flex items-center gap-3">
                            {doc.type.startsWith('image/') ? (
                              <img src={doc.dataUrl} alt={doc.name} className="h-16 w-16 object-cover rounded" />
                            ) : (
                              <div className="h-12 w-12 rounded bg-[#1f2937] flex items-center justify-center text-xs text-slate-400">DOC</div>
                            )}
                            <div>
                              <div className="font-medium text-sm">{doc.name}</div>
                              <div className="text-xs text-slate-500">{(doc.size / 1024).toFixed(0)} KB</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <a href={doc.dataUrl} target="_blank" rel="noreferrer" className="text-sm text-[#adc6ff]">Abrir</a>
                            <button onClick={(e) => deleteDoc('validation', doc.id, e)} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Eliminar</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

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
              <div className="flex justify-between items-start mb-6 cursor-pointer" onClick={() => toggleExpand('prototype')}>
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

              {expandedPhase === 'prototype' && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <h4 className="text-lg font-bold mb-2">Detalle y evidencias</h4>
                  <p className="text-sm text-slate-300">Sube especificaciones técnicas, diagramas de arquitectura, prototipos y pruebas de usuario que demuestren que el MVP satisface las hipótesis validadas.</p>

                  <div className="mt-4">
                    <label className="text-sm font-medium mb-2 block">Subir documentos de verificación (máx 5MB por archivo)</label>
                    <div
                      onDragOver={(ev) => { ev.preventDefault(); setDragOverPhase('prototype'); }}
                      onDragLeave={() => setDragOverPhase(null)}
                      onDrop={(ev) => { ev.preventDefault(); setDragOverPhase(null); handleFiles(ev.dataTransfer.files, 'prototype'); }}
                      onClick={() => fileInputs.current['prototype']?.click()}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') fileInputs.current['prototype']?.click(); }}
                      className={`border-2 border-dashed p-4 rounded-lg flex items-center gap-4 cursor-pointer ${dragOverPhase === 'prototype' ? 'border-white/40 bg-white/2' : 'border-white/10 bg-transparent'}`}
                    >
                      <div className="flex-1">
                        <div className="text-sm text-slate-300">Arrastra aquí o haz click para examinar archivos. Tipos permitidos: PDF, DOC, DOCX, ODT, TXT.</div>
                      </div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); fileInputs.current['prototype']?.click(); }} className="px-3 py-2 bg-[#1f2937] rounded text-sm">Examinar</button>
                      <input
                        ref={(el) => { fileInputs.current['prototype'] = el; }}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.odt,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                        className="hidden"
                        onChange={(e) => handleFiles(e, 'prototype')}
                      />
                    </div>

                    <div className="mt-4 space-y-3">
                      {attachments.prototype.length === 0 && <div className="text-sm text-slate-500">No hay archivos subidos.</div>}
                      {attachments.prototype.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between bg-[#0f1114] p-3 rounded">
                          <div className="flex items-center gap-3">
                            {doc.type.startsWith('image/') ? (
                              <img src={doc.dataUrl} alt={doc.name} className="h-16 w-16 object-cover rounded" />
                            ) : (
                              <div className="h-12 w-12 rounded bg-[#1f2937] flex items-center justify-center text-xs text-slate-400">DOC</div>
                            )}
                            <div>
                              <div className="font-medium text-sm">{doc.name}</div>
                              <div className="text-xs text-slate-500">{(doc.size / 1024).toFixed(0)} KB</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <a href={doc.dataUrl} target="_blank" rel="noreferrer" className="text-sm text-[#adc6ff]">Abrir</a>
                            <button onClick={(e) => deleteDoc('prototype', doc.id, e)} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Eliminar</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

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
              <div className="flex justify-between items-start mb-6 cursor-pointer" onClick={() => toggleExpand('launch')}>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#32353c] text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">
                    Fase 3: Desarrollo de MVP
                  </span>
                  <h3 className="text-2xl font-['Space_Grotesk'] font-bold text-[#e1e2eb]">Arquitectura de Producto</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-600 text-[10px] uppercase tracking-widest">Pendiente</span>
                  {!prototypeDone && validationDone && (
                    <button onClick={(e) => { e.stopPropagation(); markPhaseDone('prototype'); }} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Marcar completado</button>
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

              {expandedPhase === 'launch' && (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <h4 className="text-lg font-bold mb-2">Detalle y evidencias</h4>
                  <p className="text-sm text-slate-300">Aquí puedes adjuntar planes de lanzamiento, listas de verificación de go-to-market y evidencia de pruebas A/B o campañas piloto.</p>

                  <div className="mt-4">
                    <label className="text-sm font-medium mb-2 block">Subir documentos de verificación (máx 5MB por archivo)</label>
                    <div
                      onDragOver={(ev) => { ev.preventDefault(); setDragOverPhase('launch'); }}
                      onDragLeave={() => setDragOverPhase(null)}
                      onDrop={(ev) => { ev.preventDefault(); setDragOverPhase(null); handleFiles(ev.dataTransfer.files, 'launch'); }}
                      onClick={() => fileInputs.current['launch']?.click()}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(ev) => { if (ev.key === 'Enter' || ev.key === ' ') fileInputs.current['launch']?.click(); }}
                      className={`border-2 border-dashed p-4 rounded-lg flex items-center gap-4 cursor-pointer ${dragOverPhase === 'launch' ? 'border-white/40 bg-white/2' : 'border-white/10 bg-transparent'}`}
                    >
                      <div className="flex-1">
                        <div className="text-sm text-slate-300">Arrastra aquí o haz click para examinar archivos. Tipos permitidos: PDF, DOC, DOCX, ODT, TXT.</div>
                      </div>
                      <button type="button" onClick={(e) => { e.stopPropagation(); fileInputs.current['launch']?.click(); }} className="px-3 py-2 bg-[#1f2937] rounded text-sm">Examinar</button>
                      <input
                        ref={(el) => { fileInputs.current['launch'] = el; }}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.odt,.txt,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
                        className="hidden"
                        onChange={(e) => handleFiles(e, 'launch')}
                      />
                    </div>

                    <div className="mt-4 space-y-3">
                      {attachments.launch.length === 0 && <div className="text-sm text-slate-500">No hay archivos subidos.</div>}
                      {attachments.launch.map((doc) => (
                        <div key={doc.id} className="flex items-center justify-between bg-[#0f1114] p-3 rounded">
                          <div className="flex items-center gap-3">
                            {doc.type.startsWith('image/') ? (
                              <img src={doc.dataUrl} alt={doc.name} className="h-16 w-16 object-cover rounded" />
                            ) : (
                              <div className="h-12 w-12 rounded bg-[#1f2937] flex items-center justify-center text-xs text-slate-400">DOC</div>
                            )}
                            <div>
                              <div className="font-medium text-sm">{doc.name}</div>
                              <div className="text-xs text-slate-500">{(doc.size / 1024).toFixed(0)} KB</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <a href={doc.dataUrl} target="_blank" rel="noreferrer" className="text-sm text-[#adc6ff]">Abrir</a>
                            <button onClick={(e) => deleteDoc('launch', doc.id, e)} className="text-xs px-2 py-1 bg-[#1f2937] rounded">Eliminar</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

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
