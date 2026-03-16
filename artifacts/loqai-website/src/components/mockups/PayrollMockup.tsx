export default function PayrollMockup() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-white font-semibold text-sm">Payroll — March 2026</h4>
          <p className="text-white/35 text-xs mt-0.5">Processing in 3 days</p>
        </div>
        <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-500/20">
          Pending Approval
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Gross Total", value: "$284K" },
          { label: "Deductions", value: "$38K" },
          { label: "Net Payout", value: "$246K" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800/60 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-lg">{s.value}</p>
            <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-800/40 rounded-xl p-4 mb-3">
        <p className="text-white/35 text-xs mb-3">Deductions Breakdown</p>
        {[
          { label: "PAYE Tax", amount: "$18,400", pct: 48 },
          { label: "SSNIT / Pension", amount: "$11,200", pct: 30 },
          { label: "Health Insurance", amount: "$5,600", pct: 15 },
          { label: "Loan Deductions", amount: "$2,800", pct: 7 },
        ].map((d) => (
          <div key={d.label} className="mb-2.5 last:mb-0">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/55">{d.label}</span>
              <span className="text-white/50">{d.amount}</span>
            </div>
            <div className="h-1 bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-violet-500 rounded-full"
                style={{ width: `${d.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-zinc-800/40 rounded-xl p-3">
          <p className="text-white/35 text-xs mb-2">Quick Actions</p>
          {["Run Payroll", "Generate Payslips", "Export for Bank"].map((a) => (
            <button key={a} className="w-full text-left text-xs text-white/60 hover:text-white py-1.5 border-b border-white/5 last:border-0 transition-colors">
              → {a}
            </button>
          ))}
        </div>
        <div className="bg-zinc-800/40 rounded-xl p-3">
          <p className="text-white/35 text-xs mb-2">By Department</p>
          {[
            { dept: "Engineering", amount: "$98K" },
            { dept: "Sales", amount: "$72K" },
            { dept: "Operations", amount: "$54K" },
            { dept: "HR & Admin", amount: "$22K" },
          ].map((d) => (
            <div key={d.dept} className="flex justify-between text-xs py-1 border-b border-white/5 last:border-0">
              <span className="text-white/50">{d.dept}</span>
              <span className="text-purple-400">{d.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
