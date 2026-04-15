import { ArrowRight, Check, ChevronRight, Clock, Package, DollarSign, FileText, Layers, Brain, Target, Users } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRoute } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getFeaturePage } from "@/data/featurePages";
import NotFound from "@/pages/not-found";
import AttendanceMockup from "@/components/mockups/AttendanceMockup";
import AssetsMockup from "@/components/mockups/AssetsMockup";
import PayrollMockup from "@/components/mockups/PayrollMockup";
import RecordsMockup from "@/components/mockups/RecordsMockup";
import ATSMockup from "@/components/mockups/ATSMockup";
import ScreenerMockup from "@/components/mockups/ScreenerMockup";
import TalentMockup from "@/components/mockups/TalentMockup";
import LoqBotMockup from "@/components/mockups/LoqBotMockup";
import CustomSolutionsMockup from "@/components/mockups/CustomSolutionsMockup";

function LoqBotHotel() { return <LoqBotMockup variant="loqbot-hotel" />; }
function LoqBotRestaurant() { return <LoqBotMockup variant="loqbot-restaurant" />; }
function LoqBotEcommerce() { return <LoqBotMockup variant="loqbot-ecommerce" />; }
function LoqBotRealEstate() { return <LoqBotMockup variant="loqbot-realestate" />; }
function LoqBotCustom() { return <LoqBotMockup variant="default" />; }
function CustomWebApps() { return <CustomSolutionsMockup variant="custom-web-apps" />; }
function CustomMobile() { return <CustomSolutionsMockup variant="mobile-development" />; }
function CustomAPI() { return <CustomSolutionsMockup variant="api-integrations" />; }
function CustomBI() { return <CustomSolutionsMockup variant="business-intelligence" />; }
function CustomConsulting() { return <CustomSolutionsMockup variant="digital-consulting" />; }

const mockupComponents: Record<string, React.ComponentType> = {
  attendance: AttendanceMockup,
  assets: AssetsMockup,
  payroll: PayrollMockup,
  records: RecordsMockup,
  ats: ATSMockup,
  screener: ScreenerMockup,
  talent: TalentMockup,
  "loqbot-hotel": LoqBotHotel,
  "loqbot-restaurant": LoqBotRestaurant,
  "loqbot-ecommerce": LoqBotEcommerce,
  "loqbot-realestate": LoqBotRealEstate,
  "loqbot-custom": LoqBotCustom,
  "custom-web-apps": CustomWebApps,
  "mobile-development": CustomMobile,
  "api-integrations": CustomAPI,
  "business-intelligence": CustomBI,
  "digital-consulting": CustomConsulting,
};

interface Props {
  slug: string;
}

export default function FeatureDetailPage({ slug }: Props) {
  const page = getFeaturePage(slug);
  if (!page) return <NotFound />;
  const [trialEmail, setTrialEmail] = useState("");
  const [isTrialSubmitted, setIsTrialSubmitted] = useState(false);

  const MockupComponent = mockupComponents[page.mockupType];
  const isBlue = page.accentColor === "blue";
  const gradientClass = isBlue
    ? "from-blue-600 to-cyan-600"
    : "from-purple-600 to-violet-600";
  const accentTextClass = isBlue ? "text-blue-600" : "text-purple-600";
  const accentBgClass = isBlue ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700";
  const glowClass = isBlue ? "bg-blue-300/30" : "bg-purple-300/30";
  const borderHighlight = isBlue ? "border-blue-300" : "border-purple-300";

  const handleTrialRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = trialEmail.trim();
    if (!trimmedEmail) return;

    setIsTrialSubmitted(true);
    setTrialEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-[96rem] mx-auto px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-400">
            <a href="/" className="hover:text-gray-700 transition-colors">Home</a>
            <ChevronRight size={12} />
            <a href="/" className="hover:text-gray-700 transition-colors">{page.product}</a>
            <ChevronRight size={12} />
            <span className="text-gray-600">{page.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className={`absolute inset-0 ${isBlue ? "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.06)_0%,transparent_60%)]" : "bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.06)_0%,transparent_60%)]"}`} />
          <div className="max-w-[96rem] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${accentBgClass}`}>
                    {page.productSlug === "loqbot" ? "LoqBot" : page.product}
                  </span>
                  <ChevronRight size={12} className="text-gray-300" />
                  <span className="text-xs text-gray-400">{page.title}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {page.title}
                </h1>
                <p className={`text-lg font-medium mb-4 ${accentTextClass}`}>
                  {page.tagline}
                </p>
                <p className="text-gray-500 leading-relaxed mb-8 text-base">
                  {page.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <a
                    href="#trial-request-email"
                    className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${gradientClass} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg`}
                  >
                    Request a 21-day free trial
                    <ArrowRight size={15} />
                  </a>
                  <form
                    onSubmit={handleTrialRequest}
                    className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
                  >
                    <input
                      id="trial-request-email"
                      type="email"
                      value={trialEmail}
                      onChange={(event) => {
                        setTrialEmail(event.target.value);
                        if (isTrialSubmitted) setIsTrialSubmitted(false);
                      }}
                      placeholder="james@acmecorp.com"
                      required
                      className="w-full sm:w-64 px-4 py-3 rounded-xl border border-gray-300 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400 text-sm"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-700 hover:text-gray-900 hover:border-gray-400 hover:bg-gray-50 font-medium transition-colors text-sm"
                    >
                      Send
                    </button>
                  </form>
                </div>
                {isTrialSubmitted && (
                  <p className="mt-3 text-sm text-green-600">
                    Thanks. We have received your request and will contact you soon.
                  </p>
                )}

                <div className="flex gap-6 mt-10">
                  {page.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className={`text-2xl font-bold ${accentTextClass}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-xl">
                  <MockupComponent />
                </div>
                <div className={`absolute -inset-6 blur-3xl -z-10 opacity-40 rounded-3xl ${glowClass}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-50 relative">
          <div className="max-w-[96rem] mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${accentTextClass}`}>
                Everything included
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                What {page.title} can do
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.features.map((feature) => (
                <div
                  key={feature.title}
                  className={`bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-md transition-all duration-300`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 ${accentBgClass}`}>
                    <Check size={14} />
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50" />
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to get started with{" "}
              <span className={accentTextClass}>{page.title}?</span>
            </h2>
            <p className="text-gray-500 mb-8">
              Join hundreds of companies already using LoqAI to streamline their HR operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className={`flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r ${gradientClass} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-purple-200`}
              >
                Book a demo
                <ArrowRight size={15} />
              </a>
              <a
                href="/pricing"
                className="flex items-center justify-center px-8 py-3.5 border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 font-medium rounded-xl transition-colors text-sm"
              >
                View Pricing
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
