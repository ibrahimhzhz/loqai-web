import { ArrowRight, Shield, Zap, HeadphonesIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-transparent to-blue-950/20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Simple pricing
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Plans that grow{" "}
            <span className="gradient-text">with your team</span>
          </h2>
          <p className="text-white/50 text-lg">
            Start free. Scale as you grow. No contracts, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              name: "Starter",
              price: "$49",
              period: "/month",
              description: "Perfect for small teams getting started with HR automation.",
              features: [
                "Up to 50 employees",
                "Attendance & payroll",
                "Employee records",
                "Email support",
              ],
              cta: "Start Free Trial",
              highlighted: false,
              accentColor: "default",
            },
            {
              name: "Growth",
              price: "$149",
              period: "/month",
              description: "Full HR suite plus AI hiring tools for growing companies.",
              features: [
                "Up to 300 employees",
                "All Starter features",
                "LoqTalent ATS & AI Screener",
                "Asset management",
                "Priority support",
              ],
              cta: "Start Free Trial",
              highlighted: true,
              accentColor: "purple",
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              description: "Tailored solutions for large organisations with complex needs.",
              features: [
                "Unlimited employees",
                "All Growth features",
                "Custom integrations",
                "Dedicated CSM",
                "SLA guarantee",
              ],
              cta: "Contact Sales",
              highlighted: false,
              accentColor: "default",
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-purple-600/20 to-blue-600/10 border-2 border-purple-500/50"
                  : "bg-zinc-900/60 border border-white/8"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <p className="text-white/60 text-sm mb-1">{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-white/40 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-white/40 text-sm mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-white/70">
                    <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center py-2.5 rounded-lg text-sm font-medium transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 shadow-lg shadow-purple-900/30"
                    : "border border-white/15 text-white/70 hover:text-white hover:border-white/30"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/20 rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to modernise{" "}
              <span className="gradient-text">your HR?</span>
            </h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8 text-lg">
              Join 500+ companies already using LoqAI to save time, reduce costs,
              and hire better. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-purple-900/30 text-sm"
              >
                Start Free 14-day Trial
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white/30 font-medium rounded-xl transition-colors text-sm"
              >
                Book a Demo
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
              {[
                { icon: Shield, label: "No credit card required" },
                { icon: Zap, label: "Setup in under 10 minutes" },
                { icon: HeadphonesIcon, label: "Dedicated onboarding support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} className="text-purple-400" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
