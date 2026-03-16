import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black hero-glow pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[80px]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDB2Nmg2di02aC02em0xMiAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
          Trusted by{" "}
          <span className="gradient-text">400+ Founders</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
          One platform, complete HR coverage. From employee payroll management
          to streamlining recruitment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-purple-900/30 text-sm"
          >
            Start Free Trial
            <ArrowRight size={16} />
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 hover:text-white hover:border-white/25 font-medium rounded-xl transition-colors text-sm"
          >
            Book Free Consultation
          </a>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-zinc-900">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-zinc-950">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-zinc-800 rounded-md h-6 flex items-center px-3">
                <span className="text-xs text-white/30">app.loqai.com/dashboard</span>
              </div>
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
              <div className="grid grid-cols-3 gap-4 p-8 w-full relative z-10">
                {[
                  { label: "Employees", value: "1,247", change: "+12%", color: "purple" },
                  { label: "Open Positions", value: "38", change: "+5", color: "blue" },
                  { label: "Resumes Screened", value: "2,891", change: "Today", color: "violet" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-zinc-900/70 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                  >
                    <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.color === "purple" ? "text-purple-400" : stat.color === "blue" ? "text-blue-400" : "text-violet-400"}`}>
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-zinc-900/70 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <p className="text-xs text-white/40 mb-3">AI Screening Pipeline</p>
                  <div className="flex items-center gap-3">
                    {["Applied", "AI Screened", "Shortlisted", "Interview", "Hired"].map((stage, i) => (
                      <div key={stage} className="flex items-center gap-2 flex-1">
                        <div className={`h-1.5 flex-1 rounded-full ${i < 3 ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-white/10"}`} />
                        {i < 4 && <div className="w-1 h-1 rounded-full bg-white/20" />}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Applied", "AI Screened", "Shortlisted", "Interview", "Hired"].map((stage) => (
                      <span key={stage} className="text-[10px] text-white/30">{stage}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl rounded-2xl -z-10" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "500+", label: "Companies" },
            { value: "50K+", label: "Employees Managed" },
            { value: "2M+", label: "Resumes Screened" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-white/40 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
