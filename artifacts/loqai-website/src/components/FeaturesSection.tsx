import {
  Users,
  Clock,
  Package,
  DollarSign,
  FileText,
  Brain,
  Target,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Attendance Tracking",
    description:
      "Automated clock-in/out with real-time dashboards, shift scheduling, and compliance reporting.",
    product: "LoqHRMS",
  },
  {
    icon: Package,
    title: "Asset Management",
    description:
      "Track, assign, and audit every company asset from laptops to vehicles in one place.",
    product: "LoqHRMS",
  },
  {
    icon: DollarSign,
    title: "Payroll Generation",
    description:
      "Automated payroll with tax deductions, salary disbursement, and statutory compliance built-in.",
    product: "LoqHRMS",
  },
  {
    icon: FileText,
    title: "Employee Records",
    description:
      "Centralised digital employee profiles, documents, performance history, and HR notes.",
    product: "LoqHRMS",
  },
  {
    icon: Brain,
    title: "AI Resume Screener",
    description:
      "Our AI reads, scores, and ranks thousands of resumes in seconds — matched to your job criteria.",
    product: "LoqTalent",
  },
  {
    icon: Target,
    title: "Applicant Tracking",
    description:
      "Visualise your full hiring pipeline. Move candidates through stages with collaborative notes.",
    product: "LoqTalent",
  },
  {
    icon: Users,
    title: "Talent Acquisition",
    description:
      "Post to multiple job boards, manage agencies, and build a talent pool — all in one platform.",
    product: "LoqTalent",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Automate onboarding tasks, approval flows, and notifications across your HR processes.",
    product: "LoqHRMS",
  },
];

const productColors: Record<string, string> = {
  LoqHRMS: "purple",
  LoqTalent: "blue",
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Everything you need
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            One platform, complete{" "}
            <span className="gradient-text">HR coverage</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            From employee lifecycle management to AI-powered hiring — LoqAI
            covers every touchpoint of the workforce journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            const color = productColors[feature.product];
            return (
              <div
                key={feature.title}
                className="bg-zinc-900/60 border border-white/8 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 card-glow group"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    color === "purple"
                      ? "bg-purple-500/15 text-purple-400"
                      : "bg-blue-500/15 text-blue-400"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <div
                  className={`text-xs font-semibold mb-2 ${
                    color === "purple" ? "text-purple-500" : "text-blue-500"
                  }`}
                >
                  {feature.product}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
