import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "LoqAI's AI resume screener cut our time-to-hire by 60%. We now only interview candidates who are actually qualified — what a difference.",
    author: "Abena Owusu",
    role: "Head of Talent",
    company: "Accra Tech Solutions",
    avatar: "AO",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    quote:
      "We replaced three separate HR tools with LoqHRMS and saved significantly on licensing costs. The payroll module alone is worth it.",
    author: "David Mensah",
    role: "CFO",
    company: "Meridian Enterprises",
    avatar: "DM",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    quote:
      "The onboarding was incredibly smooth. Our HR team was fully operational on LoqAI within a week. Exceptional customer support throughout.",
    author: "Fatima Al-Hassan",
    role: "HR Director",
    company: "Nexus Group Africa",
    avatar: "FA",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "LoqTalent helped us build a talent pipeline we never had before. The ATS is intuitive and the AI scoring is remarkably accurate.",
    author: "Samuel Ofori",
    role: "People Operations Lead",
    company: "GreenPath Ventures",
    avatar: "SO",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    quote:
      "Our compliance headaches are gone. LoqHRMS handles all statutory deductions automatically and generates reports with one click.",
    author: "Grace Ntiamoah",
    role: "HR Manager",
    company: "Stellar Manufacturing",
    avatar: "GN",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    quote:
      "As a fast-growing startup, we needed an HR solution that could scale. LoqAI grows with us — we've tripled headcount without HR chaos.",
    author: "Kwame Darko",
    role: "CEO",
    company: "Foundry Labs",
    avatar: "KD",
    gradient: "from-blue-600 to-violet-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Customer stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by{" "}
            <span className="gradient-text">HR leaders</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Companies across Africa and beyond use LoqAI to transform how they
            manage people and find talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-zinc-900/60 border border-white/8 rounded-2xl p-6 hover:border-purple-500/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <blockquote className="text-white/65 text-sm leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.author}</p>
                  <p className="text-white/40 text-xs">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
