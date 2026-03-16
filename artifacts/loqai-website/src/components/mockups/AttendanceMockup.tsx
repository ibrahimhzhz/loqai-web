export default function AttendanceMockup() {
  const employees = [
    { name: "Kofi Asante", dept: "Engineering", status: "Present", time: "8:54 AM", avatar: "KA" },
    { name: "Ama Darko", dept: "HR", status: "Present", time: "9:01 AM", avatar: "AD" },
    { name: "James Boateng", dept: "Sales", status: "Late", time: "9:47 AM", avatar: "JB" },
    { name: "Priya Sharma", dept: "Finance", status: "Leave", time: "—", avatar: "PS" },
    { name: "David Mensah", dept: "Engineering", status: "Present", time: "8:31 AM", avatar: "DM" },
  ];

  const statusColor: Record<string, string> = {
    Present: "text-green-400 bg-green-500/10",
    Late: "text-yellow-400 bg-yellow-500/10",
    Leave: "text-blue-400 bg-blue-500/10",
    Absent: "text-red-400 bg-red-500/10",
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-white font-semibold text-sm">Attendance — Today</h4>
          <p className="text-white/35 text-xs mt-0.5">Monday, 16 March 2026</p>
        </div>
        <div className="text-right">
          <p className="text-white font-bold text-lg">89<span className="text-white/30 text-sm font-normal">/100</span></p>
          <p className="text-white/35 text-xs">Present today</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {[
          { label: "Present", count: "89", color: "text-green-400" },
          { label: "Late", count: "6", color: "text-yellow-400" },
          { label: "On Leave", count: "3", color: "text-blue-400" },
          { label: "Absent", count: "2", color: "text-red-400" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800/60 rounded-xl p-3 text-center">
            <p className={`font-bold text-xl ${s.color}`}>{s.count}</p>
            <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-800/40 rounded-xl overflow-hidden">
        <div className="grid grid-cols-4 px-3 py-2 text-xs text-white/30 border-b border-white/5">
          <span>Employee</span>
          <span>Department</span>
          <span>Clock-in</span>
          <span>Status</span>
        </div>
        {employees.map((emp) => (
          <div key={emp.name} className="grid grid-cols-4 px-3 py-2.5 items-center border-b border-white/5 last:border-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                {emp.avatar}
              </div>
              <span className="text-white/75 text-xs truncate">{emp.name}</span>
            </div>
            <span className="text-white/35 text-xs">{emp.dept}</span>
            <span className="text-white/50 text-xs font-mono">{emp.time}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full w-fit ${statusColor[emp.status]}`}>
              {emp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
