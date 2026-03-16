export default function ScreenerMockup() {
  const candidates = [
    { name: "Kofi Acheampong", score: 94, skills: ["React", "Node", "AWS"], status: "Top Match", grade: "A" },
    { name: "Priya Sharma", score: 87, skills: ["Vue", "Python", "Docker"], status: "Strong Fit", grade: "B+" },
    { name: "James Boateng", score: 81, skills: ["Angular", "Java"], status: "Good Fit", grade: "B" },
    { name: "Liu Wei", score: 72, skills: ["React", "PHP"], status: "Consider", grade: "C+" },
    { name: "Ada Mensah", score: 65, skills: ["HTML", "CSS"], status: "Below Bar", grade: "C" },
  ];

  const gradeColor: Record<string, string> = {
    "A": "text-green-400 bg-green-500/10",
    "B+": "text-blue-400 bg-blue-500/10",
    "B": "text-blue-400 bg-blue-500/10",
    "C+": "text-yellow-400 bg-yellow-500/10",
    "C": "text-red-400 bg-red-500/10",
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-white font-semibold text-sm">AI Resume Screening</h4>
          <p className="text-white/35 text-xs mt-0.5">Senior Developer — 247 applications</p>
        </div>
        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          AI Running
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-white/40 mb-1.5">
          <span>Screened 189 of 247 resumes</span>
          <span>77%</span>
        </div>
        <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
          <div className="h-full w-[77%] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>
      </div>

      <div className="space-y-2.5">
        {candidates.map((c) => (
          <div key={c.name} className="flex items-center gap-3 bg-zinc-800/50 rounded-xl p-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs font-medium">{c.name}</p>
              <div className="flex gap-1 mt-1 flex-wrap">
                {c.skills.map((s) => (
                  <span key={s} className="text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-10 text-right">
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                      style={{ width: `${c.score}%` }}
                    />
                  </div>
                </div>
                <span className="text-blue-400 font-bold text-sm w-7">{c.score}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-lg font-semibold ${gradeColor[c.grade]}`}>
                  {c.grade}
                </span>
              </div>
              <p className="text-white/30 text-[10px] mt-0.5 text-right">{c.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
