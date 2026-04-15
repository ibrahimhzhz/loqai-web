import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyLoqAISection from "@/components/WhyLoqAISection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import FoundersSection from "@/components/FoundersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import SpotlightCard from "@/components/SpotlightCard";
import { CalendarClock, FileCheck2, Rocket, ShieldCheck, Timer, Users2 } from "lucide-react";

const proofMetrics = [
  {
    value: 22,
    suffix: "%",
    label: "faster time-to-hire",
    detail: "AI ranking and ATS workflows reduce manual screening bottlenecks.",
    icon: Timer,
  },
  {
    value: 10,
    unit: "hours",
    label: "saved per HR manager weekly",
    detail: "Payroll, attendance, and records are automated from one dashboard.",
    icon: CalendarClock,
  },
  {
    value: 360,
    suffix: "°",
    label: "workforce and hiring visibility",
    detail: "Track HR operations and recruitment performance in one unified dashboard.",
    icon: ShieldCheck,
  },
];

const onboardingSteps = [
  {
    title: "Unified HR operations",
    text: "Attendance, payroll, records, and compliance workflows run from one connected LoqHRMS workspace.",
    icon: FileCheck2,
  },
  {
    title: "AI-powered talent pipeline",
    text: "Source, screen, and shortlist candidates faster with LoqHire ATS and smart resume scoring.",
    icon: Users2,
  },
  {
    title: "Decision-ready visibility",
    text: "Track key HR and hiring metrics in real time so leadership can make confident, data-backed decisions.",
    icon: Rocket,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="ambient-orb ambient-orb-purple" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-blue ambient-orb-delay" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)]" />
          <ScrollReveal className="max-w-[96rem] mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-2/3">
                <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">
                  Why teams switch to LoqAI
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
                  Premium HR operations with
                  <span className="gradient-text"> measurable outcomes</span>
                </h2>
                <p className="text-gray-500 text-lg max-w-2xl">
                  LoqAI combines HRMS reliability and AI-powered ATS intelligence in one operational layer,
                  so your team can hire faster, stay compliant, and scale without process debt.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {proofMetrics.map(({ value, unit, suffix, label, detail, icon: Icon }, index) => (
                    <ScrollReveal key={label} delay={0.08 * (index + 1)}>
                      <SpotlightCard
                        className="reveal-card rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                      >
                        <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
                          <Icon size={16} className="text-purple-700" />
                        </div>
                        <p className="text-3xl font-bold text-gray-900 mb-1">
                          <CountUp value={value} suffix={suffix} />
                          {unit && <span className="text-2xl ml-1">{unit}</span>}
                        </p>
                        <p className="text-base font-medium text-gray-700 mb-3">{label}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
                      </SpotlightCard>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <aside className="lg:w-1/3">
                <SpotlightCard className="rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:p-7 reveal-card">
                  <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">
                    Why buyers choose LoqAI
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">
                    A product stack built for modern HR and hiring teams
                  </h3>
                  <div className="space-y-4">
                    {onboardingSteps.map(({ title, text, icon: Icon }, index) => (
                      <ScrollReveal key={title} delay={0.1 * index} direction="right">
                        <div className="relative pl-11">
                          <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Icon size={14} className="text-purple-700" />
                          </div>
                          {index < onboardingSteps.length - 1 && (
                            <div className="absolute left-4 top-9 h-8 w-px bg-gray-200" />
                          )}
                          <p className="text-base font-semibold text-gray-900 mb-1">{title}</p>
                          <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </SpotlightCard>
              </aside>
            </div>
          </ScrollReveal>
        </section>

        <ScrollReveal>
          <WhyLoqAISection />
        </ScrollReveal>

        {/*
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        */}
        <ScrollReveal>
          <FoundersSection />
        </ScrollReveal>
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}
