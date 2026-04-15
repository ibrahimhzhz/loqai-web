import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Activity, BarChart3, CheckCircle2, Layers3 } from "lucide-react";

const walkthroughSteps = [
  {
    id: "capture",
    label: "Capture",
    title: "All HR workflows in one command center",
    subtitle: "LoqHRMS centralizes attendance, payroll, records, and compliance signals.",
    metric: "98.7%",
    metricLabel: "attendance sync accuracy",
    highlights: [
      "Live attendance anomalies surfaced instantly",
      "Payroll cycle health visible in one timeline",
      "Policy reminders auto-routed to managers",
    ],
  },
  {
    id: "screen",
    label: "Screen",
    title: "AI shortlists top candidates in minutes",
    subtitle: "LoqHire ranks applicants and explains why each profile fits the role.",
    metric: "22%",
    metricLabel: "faster time-to-hire",
    highlights: [
      "Ranked pipeline with explainable scoring",
      "Bias-aware candidate comparisons",
      "Hiring panel sync with one-click notes",
    ],
  },
  {
    id: "optimize",
    label: "Optimize",
    title: "Leadership gets decision-ready clarity",
    subtitle: "Operational and hiring analytics connect to reveal workforce ROI trends.",
    metric: "10h",
    metricLabel: "saved weekly per HR manager",
    highlights: [
      "Cross-team KPI dashboard in real time",
      "Forecast attrition and staffing gaps",
      "Automated weekly summary to stakeholders",
    ],
  },
];

export default function ProductWalkthroughSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % walkthroughSteps.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  const activeStep = walkthroughSteps[activeIndex];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08)_0%,transparent_62%)]" />
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
            Interactive walkthrough
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Experience how teams run faster with <span className="gradient-text">LoqAI</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
          <div className="lg:col-span-4 space-y-3">
            {walkthroughSteps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left rounded-2xl border px-4 py-4 transition-all duration-300 ${
                    isActive
                      ? "bg-white border-purple-300 shadow-md"
                      : "bg-white/70 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-purple-600 font-semibold mb-1">
                    {step.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{step.title}</p>
                  <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: reduceMotion ? 0.01 : 3.2, ease: "linear" }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 rounded-3xl border border-gray-200 bg-white p-6 lg:p-8 shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.45 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-2">
                      Phase {activeIndex + 1}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{activeStep.title}</h3>
                    <p className="text-gray-500">{activeStep.subtitle}</p>
                  </div>

                  <div className="rounded-2xl border border-purple-100 bg-purple-50 px-5 py-4 min-w-44">
                    <p className="text-3xl font-bold text-gray-900">{activeStep.metric}</p>
                    <p className="text-xs text-gray-600 mt-1 uppercase tracking-wider">{activeStep.metricLabel}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {[Layers3, Activity, BarChart3].map((Icon, index) => (
                    <article key={index} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                      <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-3">
                        <Icon size={15} className="text-purple-700" />
                      </div>
                      <p className="text-xs text-gray-500">Live signal</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">{activeStep.label} module active</p>
                    </article>
                  ))}
                </div>

                <div className="rounded-2xl border border-gray-200 p-4 bg-white">
                  <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
                    Current automation outputs
                  </p>
                  <div className="space-y-2.5">
                    {activeStep.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 size={16} className="text-purple-600 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}