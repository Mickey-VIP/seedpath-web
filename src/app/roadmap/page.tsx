import RoadmapClient from '../../components/RoadmapClient';

export default function Page() {
  return (
    <div className="bg-[#0b0e14] text-[#e1e2eb] font-['Inter'] selection:bg-[#adc6ff]/30 h-full flex">
      <main className="flex-1 relative flex flex-col min-w-0">
        <header className="flex justify-between items-center w-full px-8 py-4 border-b border-white/5 bg-[#0b0e14]/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <span className="font-['Inter'] text-sm uppercase tracking-widest text-[#3B82F6]">Roadmap</span>
            <span className="text-slate-700">/</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest text-slate-500">Q3 EXECUTION</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
              <input
                id="search-hitos"
                className="bg-[#1d2026] border-none rounded-full py-2 pl-10 pr-4 text-[10px] tracking-widest text-[#e1e2eb] focus:ring-1 focus:ring-[#adc6ff]/30 w-64 uppercase font-['Inter'] outline-none"
                placeholder="BUSCAR HITOS..."
                type="text"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <RoadmapClient />
      </main>

      {/* Background accents */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-[#3B82F6] opacity-[0.03] blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-[#8B5CF6] opacity-[0.03] blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

    </div>
  );
}
