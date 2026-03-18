import { ArrowRight, Shield, Zap, HeadphonesIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-14 text-center overflow-hidden shadow-2xl shadow-purple-200">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10">
            <p className="text-xs font-semibold text-purple-200 uppercase tracking-widest mb-4">
              Get started today
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to modernise{" "}
              <span className="text-purple-200">your HR?</span>
            </h2>
            <p className="text-white/75 max-w-lg mx-auto mb-10 text-lg">
              Join 500+ companies already using LoqAI to save time, reduce costs,
              and hire better. Get started in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-colors shadow-md text-sm"
              >
                Start Free 14-day Trial
                <ArrowRight size={16} />
              </a>
              <a
                href="/pricing"
                className="flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 font-medium rounded-xl transition-colors text-sm"
              >
                View Pricing
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
              {[
                { icon: Shield, label: "No credit card required" },
                { icon: Zap, label: "Setup in under 10 minutes" },
                { icon: HeadphonesIcon, label: "Dedicated onboarding support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} className="text-purple-200" />
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
