import { useState } from "react";
import { CheckCircle } from "lucide-react";

const products = [
  {
    id: "hrms",
    name: "LoqHRMS",
    tagline: "Complete HR Operations Suite",
    description:
      "Manage your entire workforce from a single, elegant dashboard. LoqHRMS gives HR teams the tools to handle attendance, assets, payroll, and records — all automated and compliant.",
    benefits: [
      "Reduce payroll processing time by 80%",
      "100% compliance with labour regulations",
      "Real-time attendance visibility",
      "Seamless asset lifecycle tracking",
    ],
    mockup: "hrms",
    accentColor: "purple",
  },
  {
    id: "talent",
    name: "LoqHire",
    tagline: "AI-Powered Hiring Intelligence",
    description:
      "Stop drowning in resumes. LoqHire's AI screener evaluates candidates against your criteria in seconds, so your team only talks to the best-fit applicants.",
    benefits: [
      "Screen 10x more candidates in less time",
      "Reduce bias with objective AI scoring",
      "Collaborative team hiring workflows",
      "Integrated job board posting",
    ],
    mockup: "talent",
    accentColor: "blue",
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState("hrms");
  const product = products.find((p) => p.id === active)!;

  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Two products.{" "}
            <span className="gradient-text">One mission.</span>
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === p.id
                  ? p.accentColor === "purple"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                  : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className={`text-sm font-semibold mb-3 ${
                product.accentColor === "purple"
                  ? "text-purple-400"
                  : "text-blue-400"
              }`}
            >
              {product.tagline}
            </p>
            <h3 className="text-3xl font-bold text-white mb-4">
              {product.name}
            </h3>
            <p className="text-white/50 mb-8 leading-relaxed">
              {product.description}
            </p>

            <ul className="space-y-3 mb-8">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle
                    size={16}
                    className={
                      product.accentColor === "purple"
                        ? "text-purple-400 flex-shrink-0"
                        : "text-blue-400 flex-shrink-0"
                    }
                  />
                  <span className="text-white/70 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href="#"
                className={`px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 ${
                  product.accentColor === "purple"
                    ? "bg-gradient-to-r from-purple-600 to-violet-600"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600"
                }`}
              >
                Explore {product.name}
              </a>
              <a
                href="#"
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {product.mockup === "hrms" ? (
                <HRMSMockup />
              ) : (
                <TalentMockup />
              )}
            </div>
            <div
              className={`absolute -inset-4 blur-3xl -z-10 opacity-20 rounded-3xl ${
                product.accentColor === "purple"
                  ? "bg-purple-600"
                  : "bg-blue-600"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HRMSMockup() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-white font-semibold text-sm">HR Dashboard</h4>
          <p className="text-white/40 text-xs">March 2026</p>
        </div>
        <div className="flex gap-2">
          <span className="px-2.5 py-1 bg-green-500/15 text-green-400 text-xs rounded-full">
            All Systems Live
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        {[
          { label: "Total Employees", value: "1,247", sub: "Active" },
          { label: "On Leave", value: "34", sub: "This week" },
          { label: "Payroll Due", value: "$284K", sub: "In 3 days" },
          { label: "Assets Tracked", value: "892", sub: "All assigned" },
        ].map((s) => (
          <div key={s.label} className="bg-zinc-800/50 rounded-xl p-3">
            <p className="text-white/40 text-xs">{s.label}</p>
            <p className="text-white font-bold text-lg mt-0.5">{s.value}</p>
            <p className="text-purple-400 text-xs">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-800/50 rounded-xl p-4">
        <p className="text-white/40 text-xs mb-3">Recent Activity</p>
        {[
          { name: "Sarah Johnson", action: "Clocked in", time: "9:02 AM" },
          { name: "Mark Osei", action: "Leave approved", time: "8:45 AM" },
          { name: "Ada Mensah", action: "Payslip sent", time: "8:30 AM" },
        ].map((a) => (
          <div key={a.name} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
            <div>
              <p className="text-white/80 text-xs font-medium">{a.name}</p>
              <p className="text-white/30 text-xs">{a.action}</p>
            </div>
            <span className="text-white/30 text-xs">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TalentMockup() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-white font-semibold text-sm">AI Screening — Senior Dev</h4>
          <p className="text-white/40 text-xs">247 applications received</p>
        </div>
        <span className="px-2.5 py-1 bg-blue-500/15 text-blue-400 text-xs rounded-full">
          AI Running
        </span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-white/40 mb-2">
          <span>Screening progress</span>
          <span>189 / 247</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </div>
      </div>

      <div className="space-y-3">
        {[
          { name: "Kofi Acheampong", score: 94, skills: "React, Node, AWS", status: "Top Match" },
          { name: "Priya Sharma", score: 87, skills: "Vue, Python, Docker", status: "Strong" },
          { name: "James Boateng", score: 81, skills: "Angular, Java, K8s", status: "Good Fit" },
          { name: "Liu Wei", score: 72, skills: "React, PHP, MySQL", status: "Consider" },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 bg-zinc-800/50 rounded-xl p-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/80 text-xs font-medium truncate">{c.name}</p>
              <p className="text-white/30 text-xs truncate">{c.skills}</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-blue-400 font-bold text-sm">{c.score}</p>
              <p className="text-white/30 text-xs">{c.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
