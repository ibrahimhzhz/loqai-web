export default function TalentMockup() {
  const jobs = [
    { title: "Senior Software Engineer", dept: "Engineering", applicants: 247, posted: "2 days ago", status: "Active" },
    { title: "Product Designer", dept: "Design", applicants: 89, posted: "5 days ago", status: "Active" },
    { title: "Sales Executive", dept: "Sales", applicants: 312, posted: "1 week ago", status: "Active" },
    { title: "Finance Analyst", dept: "Finance", applicants: 143, posted: "3 days ago", status: "Draft" },
  ];

  const boards = ["LinkedIn", "Jobberman", "Indeed", "Careers Page"];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-white font-semibold text-sm">Talent Acquisition</h4>
          <p className="text-white/35 text-xs mt-0.5">4 active roles · 791 applicants</p>
        </div>
        <button className="px-3 py-1.5 bg-blue-600/20 text-blue-400 text-xs rounded-lg border border-blue-500/20">
          + Post Job
        </button>
      </div>

      <div className="bg-zinc-800/40 rounded-xl p-3 mb-4">
        <p className="text-white/35 text-xs mb-2">Publishing to</p>
        <div className="flex gap-2">
          {boards.map((b) => (
            <span key={b} className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-lg">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        {jobs.map((job) => (
          <div key={job.title} className="flex items-center gap-3 bg-zinc-800/50 rounded-xl p-3">
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs font-medium truncate">{job.title}</p>
              <p className="text-white/35 text-xs">{job.dept} · {job.posted}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-blue-400 font-bold text-sm">{job.applicants}</p>
              <p className="text-white/30 text-xs">applicants</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
              job.status === "Active"
                ? "text-green-400 bg-green-500/10"
                : "text-white/40 bg-white/5"
            }`}>
              {job.status}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { label: "Talent Pool", value: "2,841" },
          { label: "Agencies", value: "6 active" },
          { label: "Avg. Time-to-Hire", value: "18 days" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800/40 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-base">{s.value}</p>
            <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
