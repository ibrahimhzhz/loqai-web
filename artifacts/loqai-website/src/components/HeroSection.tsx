import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-200/40 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-200/30 blur-[80px]" />
      </div>

      {/* Above-the-fold: vertically centered in viewport */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] text-gray-900">
            Trusted by{" "}
            <span className="gradient-text">400+ Founders</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Your complete AI-powered HR engine. Streamline everything from
            sourcing top candidates to managing your entire workforce, all in
            one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-purple-200 text-sm"
            >
              Book a free LoqHRMS trial
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-3.5 border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 font-medium rounded-xl transition-colors text-sm"
            >
              Avail 100 free AI resume screening
            </a>
          </div>
        </div>
      </div>

      {/* Below the fold: mockup + stats */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-100/80">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-md h-6 flex items-center px-3">
                <span className="text-xs text-gray-400">app.loqai.com/dashboard</span>
              </div>
            </div>
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 flex items-center justify-center relative">
              <div className="grid grid-cols-3 gap-4 p-8 w-full relative z-10">
                {[
                  { label: "Employees", value: "1,247", change: "+12%", color: "purple" },
                  { label: "Open Positions", value: "38", change: "+5", color: "blue" },
                  { label: "Resumes Screened", value: "2,891", change: "Today", color: "violet" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
                  >
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-xs mt-1 ${stat.color === "purple" ? "text-purple-600" : stat.color === "blue" ? "text-blue-600" : "text-violet-600"}`}>
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <p className="text-xs text-gray-400 mb-3">AI Screening Pipeline</p>
                  <div className="flex items-center gap-3">
                    {["Applied", "AI Screened", "Shortlisted", "Interview", "Hired"].map((stage, i) => (
                      <div key={stage} className="flex items-center gap-2 flex-1">
                        <div className={`h-1.5 flex-1 rounded-full ${i < 3 ? "bg-gradient-to-r from-purple-600 to-blue-600" : "bg-gray-200"}`} />
                        {i < 4 && <div className="w-1 h-1 rounded-full bg-gray-300" />}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["Applied", "AI Screened", "Shortlisted", "Interview", "Hired"].map((stage) => (
                      <span key={stage} className="text-[10px] text-gray-400">{stage}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-200/40 to-blue-200/40 blur-xl rounded-2xl -z-10" />
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-center">
          {[
            { value: "500+", label: "Companies" },
            { value: "50K+", label: "Employees Managed" },
            { value: "2M+", label: "Resumes Screened" },
            { value: "99.9%", label: "Uptime SLA" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
