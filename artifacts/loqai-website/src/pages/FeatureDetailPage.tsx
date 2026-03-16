import { ArrowRight, Check, ChevronRight, Clock, Package, DollarSign, FileText, Layers, Brain, Target, Users } from "lucide-react";
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

function LoqBotHotel() { return <LoqBotMockup variant="loqbot-hotel" />; }
function LoqBotRestaurant() { return <LoqBotMockup variant="loqbot-restaurant" />; }
function LoqBotEcommerce() { return <LoqBotMockup variant="loqbot-ecommerce" />; }
function LoqBotRealEstate() { return <LoqBotMockup variant="loqbot-realestate" />; }
function LoqBotCustom() { return <LoqBotMockup variant="default" />; }

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
};

interface Props {
  slug: string;
}

export default function FeatureDetailPage({ slug }: Props) {
  const page = getFeaturePage(slug);
  if (!page) return <NotFound />;

  const MockupComponent = mockupComponents[page.mockupType];
  const isBlue = page.accentColor === "blue";
  const gradientClass = isBlue
    ? "from-blue-600 to-cyan-600"
    : "from-purple-600 to-violet-600";
  const accentTextClass = isBlue ? "text-blue-400" : "text-purple-400";
  const accentBgClass = isBlue ? "bg-blue-500/15 text-blue-400" : "bg-purple-500/15 text-purple-400";
  const glowClass = isBlue ? "bg-blue-600/20" : "bg-purple-600/20";
  const borderHighlight = isBlue ? "border-blue-500/30" : "border-purple-500/30";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-zinc-950 border-b border-white/5 py-3">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center gap-2 text-xs text-white/35">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={12} />
            <a href="/" className="hover:text-white transition-colors">{page.product}</a>
            <ChevronRight size={12} />
            <span className="text-white/60">{page.title}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className={`absolute inset-0 ${isBlue ? "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1)_0%,transparent_60%)]" : "bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.1)_0%,transparent_60%)]"}`} />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${accentBgClass}`}>
                    {page.productSlug === "loqbot" ? "LoqBot" : page.product}
                  </span>
                  <ChevronRight size={12} className="text-white/20" />
                  <span className="text-xs text-white/35">{page.title}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {page.title}
                </h1>
                <p className={`text-lg font-medium mb-4 ${accentTextClass}`}>
                  {page.tagline}
                </p>
                <p className="text-white/50 leading-relaxed mb-8 text-base">
                  {page.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradientClass} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg`}
                  >
                    Get Started Free
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 border border-white/15 text-white/70 hover:text-white hover:border-white/25 font-medium rounded-xl transition-colors text-sm"
                  >
                    Book a Demo
                  </a>
                </div>

                <div className="flex gap-6 mt-10">
                  {page.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className={`text-2xl font-bold ${isBlue ? "text-blue-400" : "text-purple-400"}`}>
                        {stat.value}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <MockupComponent />
                </div>
                <div className={`absolute -inset-6 blur-3xl -z-10 opacity-15 rounded-3xl ${glowClass}`} />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-zinc-950 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${accentTextClass}`}>
                Everything included
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                What {page.title} can do
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.features.map((feature) => (
                <div
                  key={feature.title}
                  className={`bg-zinc-900/60 border border-white/8 rounded-2xl p-6 hover:${borderHighlight} transition-all duration-300`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 ${accentBgClass}`}>
                    <Check size={14} />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className={`absolute inset-0 ${isBlue ? "bg-gradient-to-br from-blue-950/25 via-transparent to-cyan-950/15" : "bg-gradient-to-br from-purple-950/25 via-transparent to-violet-950/15"}`} />
          <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to get started with{" "}
              <span className={`${isBlue ? "text-blue-400" : "text-purple-400"}`}>{page.title}?</span>
            </h2>
            <p className="text-white/50 mb-8">
              Join hundreds of companies already using LoqAI to streamline their HR operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className={`flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r ${gradientClass} text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg`}
              >
                Start Free Trial
                <ArrowRight size={15} />
              </a>
              <a
                href="/pricing"
                className="flex items-center justify-center px-8 py-3.5 border border-white/15 text-white/70 hover:text-white hover:border-white/25 font-medium rounded-xl transition-colors text-sm"
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
