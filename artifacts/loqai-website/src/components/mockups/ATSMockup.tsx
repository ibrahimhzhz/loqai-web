export default function ATSMockup() {
  const stages = [
    { name: "Applied", count: 47, color: "bg-white/20" },
    { name: "Screened", count: 28, color: "bg-blue-600/50" },
    { name: "Interview", count: 12, color: "bg-violet-600/50" },
    { name: "Offer", count: 4, color: "bg-purple-600/50" },
  ];

  const candidates = [
    { name: "Kofi Acheampong", role: "Senior Dev", stage: "Interview", score: 94 },
    { name: "Priya Sharma", role: "Senior Dev", stage: "Screened", score: 87 },
    { name: "James Boateng", role: "Senior Dev", stage: "Interview", score: 81 },
    { name: "Liu Wei", role: "Senior Dev", stage: "Offer", score: 78 },
  ];

  const stageColor: Record<string, string> = {
    Interview: "text-violet-400 bg-violet-500/10",
    Screened: "text-blue-400 bg-blue-500/10",
    Applied: "text-white/50 bg-white/5",
    Offer: "text-purple-400 bg-purple-500/10",
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-white font-semibold text-sm">ATS Pipeline</h4>
          <p className="text-white/35 text-xs mt-0.5">Senior Software Developer</p>
        </div>
        <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
          Active Role
        </span>
      </div>

      <div className="flex gap-2 mb-4">
        {stages.map((s) => (
          <div key={s.name} className="flex-1 bg-zinc-800/60 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-xl">{s.count}</p>
            <p className="text-white/30 text-xs mt-0.5">{s.name}</p>
            <div className={`h-1 rounded-full mt-2 ${s.color}`} />
          </div>
        ))}
      </div>

      <div className="bg-zinc-800/40 rounded-xl overflow-hidden">
        <div className="grid grid-cols-4 px-3 py-2 text-xs text-white/30 border-b border-white/5">
          <span className="col-span-2">Candidate</span>
          <span>Stage</span>
          <span>AI Score</span>
        </div>
        {candidates.map((c) => (
          <div key={c.name} className="grid grid-cols-4 px-3 py-2.5 items-center border-b border-white/5 last:border-0">
            <div className="col-span-2 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                {c.name[0]}
              </div>
              <span className="text-white/75 text-xs truncate">{c.name}</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full w-fit ${stageColor[c.stage]}`}>
              {c.stage}
            </span>
            <span className="text-blue-400 font-bold text-sm">{c.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
