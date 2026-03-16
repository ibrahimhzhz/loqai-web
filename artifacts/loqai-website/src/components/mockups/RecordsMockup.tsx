import { FileText, Shield, User } from "lucide-react";

export default function RecordsMockup() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-white font-semibold text-sm">Employee Profile</h4>
          <p className="text-white/35 text-xs mt-0.5">1,247 active records</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-white/5 text-white/50 text-xs rounded-lg border border-white/10">
            Filter
          </button>
          <button className="px-3 py-1.5 bg-purple-600/20 text-purple-400 text-xs rounded-lg border border-purple-500/20">
            + Add Employee
          </button>
        </div>
      </div>

      <div className="bg-zinc-800/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
            KA
          </div>
          <div>
            <p className="text-white font-semibold">Kofi Asante</p>
            <p className="text-white/45 text-xs">Senior Software Engineer</p>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">Engineering</span>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Active</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Employee ID", value: "EMP-0042" },
            { label: "Start Date", value: "Jan 14, 2022" },
            { label: "Department", value: "Engineering" },
            { label: "Manager", value: "David Mensah" },
            { label: "Location", value: "Accra HQ" },
            { label: "Contract", value: "Permanent" },
          ].map((f) => (
            <div key={f.label}>
              <p className="text-white/30 text-xs">{f.label}</p>
              <p className="text-white/70 text-xs font-medium mt-0.5">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: FileText, label: "Documents", count: "12 files" },
          { icon: User, label: "Performance", count: "4 reviews" },
          { icon: Shield, label: "Access Level", count: "Standard" },
        ].map(({ icon: Icon, label, count }) => (
          <div key={label} className="bg-zinc-800/40 rounded-xl p-3 text-center">
            <div className="w-7 h-7 rounded-lg bg-purple-500/15 flex items-center justify-center mx-auto mb-2">
              <Icon size={13} className="text-purple-400" />
            </div>
            <p className="text-white/60 text-xs">{label}</p>
            <p className="text-white/35 text-xs">{count}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
