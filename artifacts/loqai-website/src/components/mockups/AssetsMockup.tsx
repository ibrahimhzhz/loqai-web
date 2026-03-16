export default function AssetsMockup() {
  const assets = [
    { id: "LAP-0042", name: "MacBook Pro 14\"", category: "Laptop", assignedTo: "Kofi Asante", status: "Assigned", value: "$2,400" },
    { id: "MON-0018", name: "Dell 27\" Monitor", category: "Display", assignedTo: "Ama Darko", status: "Assigned", value: "$480" },
    { id: "PHN-0091", name: "iPhone 15 Pro", category: "Phone", assignedTo: "James Boateng", status: "Assigned", value: "$1,100" },
    { id: "LAP-0055", name: "Lenovo ThinkPad", category: "Laptop", assignedTo: "—", status: "Available", value: "$1,200" },
    { id: "VHC-0007", name: "Toyota Camry", category: "Vehicle", assignedTo: "David Mensah", status: "Assigned", value: "$28,000" },
  ];

  const statusColor: Record<string, string> = {
    Assigned: "text-purple-400 bg-purple-500/10",
    Available: "text-green-400 bg-green-500/10",
    Maintenance: "text-yellow-400 bg-yellow-500/10",
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-white font-semibold text-sm">Asset Registry</h4>
          <p className="text-white/35 text-xs mt-0.5">892 total assets tracked</p>
        </div>
        <button className="px-3 py-1.5 bg-purple-600/20 text-purple-400 text-xs rounded-lg border border-purple-500/20 hover:bg-purple-600/30 transition-colors">
          + Add Asset
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Total Value", value: "$1.2M" },
          { label: "Assigned", value: "784" },
          { label: "Available", value: "108" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800/60 rounded-xl p-3 text-center">
            <p className="text-white font-bold text-lg">{s.value}</p>
            <p className="text-white/30 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-800/40 rounded-xl overflow-hidden">
        <div className="grid grid-cols-5 px-3 py-2 text-xs text-white/30 border-b border-white/5">
          <span>ID</span>
          <span>Asset</span>
          <span>Assigned To</span>
          <span>Value</span>
          <span>Status</span>
        </div>
        {assets.map((asset) => (
          <div key={asset.id} className="grid grid-cols-5 px-3 py-2.5 items-center border-b border-white/5 last:border-0">
            <span className="text-white/35 text-xs font-mono">{asset.id}</span>
            <div>
              <p className="text-white/75 text-xs">{asset.name}</p>
              <p className="text-white/30 text-xs">{asset.category}</p>
            </div>
            <span className="text-white/50 text-xs truncate">{asset.assignedTo}</span>
            <span className="text-white/50 text-xs">{asset.value}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full w-fit ${statusColor[asset.status]}`}>
              {asset.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
