import { ArrowRight, Check, Shield, Zap, HeadphonesIcon, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with HR automation.",
    features: [
      "Up to 50 employees",
      "Attendance & payroll",
      "Employee records",
      "Basic reporting",
      "Email support",
    ],
    notIncluded: ["LoqTalent ATS", "AI Resume Screener", "Asset management", "Custom integrations"],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "/month",
    description: "Full HR suite plus AI hiring tools for growing companies.",
    features: [
      "Up to 300 employees",
      "All Starter features",
      "LoqTalent ATS",
      "AI Resume Screener",
      "Asset management",
      "Advanced analytics",
      "Priority support",
    ],
    notIncluded: ["Custom integrations", "Dedicated CSM"],
    cta: "Start Free Trial",
    highlighted: true,
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
      "On-premise option",
      "Custom contracts",
    ],
    notIncluded: [],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — all Starter and Growth plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "How is 'number of employees' counted?",
    a: "We count active employee profiles in your account. Archived or offboarded employees do not count toward your limit.",
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes — paying annually gives you 2 months free (equivalent to a 17% discount) across all plans.",
  },
  {
    q: "What support is included?",
    a: "Starter includes email support. Growth includes priority support with faster response times. Enterprise plans include a dedicated Customer Success Manager.",
  },
  {
    q: "Is my data secure?",
    a: "We take security seriously. All data is encrypted in transit and at rest, and we are compliant with GDPR and local data protection laws.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)]" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
                Pricing
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
                Plans that grow{" "}
                <span className="gradient-text">with your team</span>
              </h1>
              <p className="text-gray-500 text-xl max-w-xl mx-auto">
                Start free. Scale as you grow. No contracts, no surprises.
              </p>

              <div className="inline-flex items-center gap-3 mt-8 bg-gray-100 border border-gray-200 rounded-full p-1.5">
                <button className="px-5 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  Monthly
                </button>
                <button className="px-5 py-1.5 rounded-full text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors">
                  Annual{" "}
                  <span className="text-purple-600 text-xs font-semibold ml-1">
                    Save 17%
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 flex flex-col ${
                    plan.highlighted
                      ? "bg-gradient-to-b from-purple-600 to-blue-600 border-2 border-purple-500 shadow-2xl shadow-purple-200"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-white text-purple-700 text-xs font-semibold rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className={`text-sm font-medium mb-2 ${plan.highlighted ? "text-purple-100" : "text-gray-500"}`}>{plan.name}</p>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className={`text-5xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                      {plan.period && (
                        <span className={`text-base ${plan.highlighted ? "text-purple-200" : "text-gray-400"}`}>{plan.period}</span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-purple-100" : "text-gray-500"}`}>{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check
                          size={14}
                          className={`flex-shrink-0 ${plan.highlighted ? "text-purple-200" : "text-purple-600"}`}
                        />
                        <span className={`text-sm ${plan.highlighted ? "text-white" : "text-gray-700"}`}>{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 opacity-40">
                        <div className={`w-3.5 h-px flex-shrink-0 ml-0.5 ${plan.highlighted ? "bg-purple-300" : "bg-gray-400"}`} />
                        <span className={`text-sm line-through ${plan.highlighted ? "text-purple-200" : "text-gray-400"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`block text-center py-3 rounded-xl text-sm font-medium transition-all ${
                      plan.highlighted
                        ? "bg-white text-purple-700 hover:bg-purple-50 shadow-md"
                        : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 shadow-md shadow-purple-100"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20 py-8 border-y border-gray-100">
              {[
                { icon: Shield, label: "No credit card required" },
                { icon: Zap, label: "Setup in under 10 minutes" },
                { icon: HeadphonesIcon, label: "Dedicated onboarding support" },
                { icon: Check, label: "Cancel anytime" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-gray-500">
                  <Icon size={16} className="text-purple-600 flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
                FAQ
              </p>
              <h2 className="text-4xl font-bold text-gray-900">
                Frequently asked{" "}
                <span className="gradient-text">questions</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle size={16} className="text-purple-600 flex-shrink-0 mt-0.5" />
                    <h3 className="text-gray-900 font-semibold text-sm">{faq.q}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50" />
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Not sure which plan is{" "}
              <span className="gradient-text">right for you?</span>
            </h2>
            <p className="text-gray-500 mb-8 text-lg">
              Talk to our team and we'll walk you through the best option for
              your organisation's size and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity shadow-xl shadow-purple-200 text-sm"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium rounded-xl transition-colors text-sm"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
