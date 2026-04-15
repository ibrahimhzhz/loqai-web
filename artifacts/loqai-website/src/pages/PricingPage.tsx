import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const pricingData = {
  loqhrms: [
    {
      name: "Core HR",
      description: "For startups getting HR off spreadsheets",
      price: 3,
      unit: "employee",
      basePrice: 39,
      highlight: false,
      features: [
        "Employee records & profiles",
        "Attendance & real-time clock-in/out",
        "Leave management",
        "Asset tracking & assignments",
        "Basic reporting & exports",
        "Email support",
      ],
    },
    {
      name: "HR + Payroll",
      description: "For SMBs that need full HR operations",
      price: 6,
      unit: "employee",
      basePrice: 59,
      highlight: true,
      badge: "Most popular",
      features: [
        "All Core HR features",
        "Automated payroll generation",
        "Expense claims & reimbursements",
        "Payroll sync across modules",
        "Compliance-ready payroll reports",
        "Advanced analytics dashboard",
        "Priority email support",
      ],
    },
  ],
  loqhire: [
    {
      name: "ATS",
      description: "Full hiring pipeline, no AI screener",
      price: 4,
      unit: "recruiter",
      basePrice: 49,
      highlight: false,
      features: [
        "End-to-end applicant tracking",
        "Talent acquisition pipeline",
        "Candidate profiles & notes",
        "Interview scheduling",
        "Job posting management",
        "Team collaboration on candidates",
        "Email support",
      ],
    },
    {
      name: "ATS + AI Screener",
      description: "Full pipeline with unlimited AI resume ranking",
      price: 7,
      unit: "recruiter",
      basePrice: 69,
      highlight: true,
      features: [
        "All ATS features",
        "AI resume screener — unlimited",
        "Candidate ranking in seconds",
        "Skills & experience gap analysis",
        "Bias-reduced screening",
        "Dedicated account support",
      ],
    },
  ],
  bundle: [
    {
      name: "Core HR + ATS",
      description: "HR basics with full hiring pipeline",
      price: 9,
      unit: "employee",
      basePrice: 149,
      highlight: false,
      features: [
        "Employee records & attendance",
        "Asset management",
        "Leave management",
        "Full ATS pipeline",
        "Job posting management",
      ],
    },
    {
      name: "Full Suite",
      description: "Complete HR + payroll + AI hiring in one",
      price: 15,
      unit: "employee",
      basePrice: 99,
      highlight: true,
      badge: "Best value",
      features: [
        "Full LoqHRMS HR + Payroll",
        "Expense & reimbursement management",
        "Full LoqHire ATS pipeline",
        "Includes up to 1 recruiter seat per 20 employees",
        "AI resume screener — unlimited",
        "Candidate ranking & gap analysis",
        "Dedicated account support",
      ],
    },
    {
      name: "HR + Payroll + ATS",
      description: "Full HR ops with hiring pipeline, no AI",
      price: 13,
      unit: "employee",
      basePrice: 179,
      highlight: false,
      features: [
        "Full HR + Payroll suite",
        "Payroll generation & compliance",
        "Expense management",
        "Full ATS pipeline",
        "Priority support",
      ],
    },
  ],
};

const trustIndicators = [];

function getPlanIdFromName(planName: string): string {
  if (planName === "Core HR") return "core-hr";
  if (planName === "HR + Payroll") return "hr-payroll";
  if (planName === "ATS") return "ats";
  if (planName === "ATS + AI Screener") return "ats-ai-screener";
  return "bundle-full-suite";
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [employeeCountInput, setEmployeeCountInput] = useState<string>("10");
  const [selectedPlanKey, setSelectedPlanKey] = useState<string>("full-suite");

  const currentPlans = [
    ...pricingData.loqhrms,
    ...pricingData.loqhire,
    pricingData.bundle.find((plan) => plan.name === "Full Suite"),
  ].filter((plan): plan is (typeof pricingData.loqhrms)[number] => Boolean(plan));

  const planRows = [
    currentPlans.slice(0, 2),
    currentPlans.slice(2, 4),
    currentPlans.slice(4, 5),
  ];

  // Get all plans for the dropdown
  const allPlans = [
    { key: "core-hr", label: "Core HR", price: 3, basePrice: 39, unit: "employee" },
    { key: "hr-payroll", label: "HR + Payroll", price: 6, basePrice: 59, unit: "employee" },
    { key: "ats", label: "ATS", price: 4, basePrice: 49, unit: "recruiter" },
    { key: "ats-ai-screener", label: "ATS + AI Screener", price: 7, basePrice: 69, unit: "recruiter" },
    { key: "full-suite", label: "Full Suite", price: 15, basePrice: 99, unit: "employee" },
  ];

  const selectedPlan = allPlans.find((p) => p.key === selectedPlanKey);
  const parsedEmployeeCount = parseInt(employeeCountInput, 10);
  const employeeCount = Number.isFinite(parsedEmployeeCount) && parsedEmployeeCount > 0 ? parsedEmployeeCount : 1;
  const monthlyCost = selectedPlan
    ? selectedPlan.basePrice + selectedPlan.price * employeeCount
    : 0;
  const annualCost = Math.round(monthlyCost * 12 * 0.83);
  const annualSavings = monthlyCost * 12 - annualCost;

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes, get a 21-day free trial with no credit card required. Full access to all features.",
    },
    {
      question: "How do we fit multiple users into one workspace?",
      answer: "You can add unlimited team members to your workspace. Pricing scales based on your employee count, not the number of users.",
    },
    {
      question: "How secure is my data, and can I export it?",
      answer: "Your data is protected with enterprise-grade security, including encrypted storage and access controls. You have full control over your data and can export it anytime in standard formats, ensuring you're never locked in.",
    },
    {
      question: "Can I switch my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll adjust billing proportionally.",
    },
    {
      question: "Do you offer annual company billing?",
      answer: "Yes, we offer flexible billing options including annual prepayment with a 17% discount, monthly subscriptions, and custom invoicing for enterprise accounts.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <section className="relative py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-[12px] uppercase tracking-[0.15em] text-blue-600 font-semibold mb-4">
                SIMPLE, TRANSPARENT PRICING
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                The HR and hiring stack your team will actually use
              </h1>
              <p className="text-base text-gray-600">
                Use LoqHRMS for HR operations, LoqHire for AI-powered hiring, or get both together at a discount.
              </p>
            </div>

            {/* Monthly/Annual Toggle */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <span
                className={`text-sm font-semibold cursor-pointer ${
                  billingPeriod === "monthly" ? "text-gray-900" : "text-gray-500"
                }`}
                onClick={() => setBillingPeriod("monthly")}
              >
                Monthly
              </span>
              <div
                onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")}
                className={`w-12 h-7 rounded-full transition-all cursor-pointer ${
                  billingPeriod === "annual"
                    ? "bg-blue-600"
                    : "bg-gray-300"
                } flex items-center ${billingPeriod === "annual" ? "justify-end" : "justify-start"} px-1`}
              >
                <span className="w-5 h-5 bg-white rounded-full" />
              </div>
              <span
                className={`text-sm font-semibold cursor-pointer ${
                  billingPeriod === "annual" ? "text-gray-900" : "text-gray-500"
                }`}
                onClick={() => setBillingPeriod("annual")}
              >
                Annual
              </span>
              {billingPeriod === "annual" && (
                <span className="ml-2 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  Save 17%
                </span>
              )}
            </div>

            {/* Pricing Cards */}
            <div className="space-y-6 mb-12">
              {planRows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
                  {row.map((plan) => (
                    <div
                      key={plan.name}
                      className={`w-full md:w-[calc(50%-0.75rem)] lg:w-[28rem] relative rounded-2xl border p-6 transition-all ${
                        plan.highlight
                          ? "border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 ring-2 ring-blue-500 shadow-lg"
                          : "border-gray-200 bg-white shadow-md hover:shadow-lg"
                      }`}
                    >
                      {/* Badge */}
                      {plan.badge && (
                        <div className="absolute -top-3 left-4">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-full ${
                              plan.highlight
                                ? "bg-blue-600 text-white"
                                : "bg-purple-500 text-white"
                            }`}
                          >
                            {plan.badge}
                          </span>
                        </div>
                      )}

                      {/* Product Label */}
                      <div className="mb-4">
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded mb-2 bg-blue-100 text-blue-700">
                          {plan.name === "Full Suite"
                            ? "Bundle"
                            : plan.name === "Core HR" || plan.name === "HR + Payroll"
                            ? "LoqHRMS"
                            : "LoqHire"}
                        </span>
                      </div>

                      {/* Plan Name */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-6">{plan.description}</p>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-gray-900">
                            {billingPeriod === "annual"
                              ? "$" + (plan.price * 0.83).toFixed(0)
                              : `$${plan.price}`}
                          </span>
                          <span className="text-gray-600">per {plan.unit} / month</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Base price: ${plan.basePrice} / month</p>
                        {billingPeriod === "annual" && (
                          <p className="text-xs text-green-600 font-semibold mt-1">Billed annually with 17% discount</p>
                        )}
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => {
                          const planId = getPlanIdFromName(plan.name);
                          window.location.href = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/purchase?plan=${planId}`;
                        }}
                        className={`w-full py-2.5 rounded-lg font-semibold transition-colors mb-6 ${
                          plan.highlight
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        Get started
                      </button>

                      {/* Features */}
                      <div className="space-y-3">
                        <p className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                          {plan.highlight && plan.name === "Full Suite"
                            ? "Everything, combined"
                            : plan.highlight
                            ? "Everything in ATS, plus"
                            : "What's included"}
                        </p>
                        <ul className="space-y-2.5">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Enterprise Section */}
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">250+ employees? Let's talk.</h3>
              <p className="text-gray-600 mb-5">
                Custom pricing, dedicated onboarding, SLA support, volume discounts, and local currency invoicing.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                Contact us <ArrowRight size={16} />
              </a>
            </div>

            {/* Price Calculator */}
            <div className="max-w-2xl mx-auto bg-white border border-gray-300 rounded-2xl p-8 mb-12 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Estimate your cost</h3>
              <p className="text-gray-600 mb-6">Total monthly pricing is calculated as base price + per-user rate.</p>

              {/* Employees Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  {selectedPlan?.unit === "recruiter" ? "Recruiters" : "Employees"}
                </label>
                <input
                  type="number"
                  value={employeeCountInput}
                  onChange={(e) => setEmployeeCountInput(e.target.value)}
                  onBlur={() => {
                    const parsedValue = parseInt(employeeCountInput, 10);
                    setEmployeeCountInput(
                      Number.isFinite(parsedValue) && parsedValue > 0
                        ? String(parsedValue)
                        : "1"
                    );
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                />
              </div>

              {/* Plan Dropdown */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Package</label>
                <div className="relative">
                  <select
                    value={selectedPlanKey}
                    onChange={(e) => setSelectedPlanKey(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white cursor-pointer pr-10"
                  >
                    {allPlans.map((plan) => (
                      <option key={plan.key} value={plan.key}>
                        {plan.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={18}
                    className="absolute right-3 top-3.5 text-gray-500 pointer-events-none"
                  />
                </div>
              </div>

              {/* Calculator Results */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Monthly cost
                  </p>
                  <p className="text-2xl font-bold text-gray-900">${monthlyCost}</p>
                  <p className="text-xs text-gray-500 mt-1">base + per-user pricing</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Annual cost
                  </p>
                  <p className="text-2xl font-bold text-gray-900">${annualCost.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">billed annually</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-green-600 uppercase tracking-wide mb-1">
                    You save annually
                  </p>
                  <p className="text-2xl font-bold text-green-600">${annualSavings.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">with annual billing</p>
                </div>
              </div>
            </div>


            {/* FAQs Section */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left"
                  >
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-all">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                        <span
                          className={`text-gray-500 transition-transform ${
                            openFAQ === index ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </div>
                      {openFAQ === index && (
                        <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
