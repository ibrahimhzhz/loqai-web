import { Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Kwabena Asante",
    role: "CEO & Co-Founder",
    bio: "Former VP of People at a Fortune 500 company with 15 years in HR technology. Kwabena founded LoqAI after seeing how outdated tools held HR teams back from doing their best work.",
    initials: "KA",
    gradient: "from-purple-600 to-violet-700",
    expertise: ["HR Strategy", "Product Vision", "Scaling Teams"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ama Darko",
    role: "CTO & Co-Founder",
    bio: "Machine learning engineer with a PhD in NLP from MIT. Ama built the AI engine powering LoqTalent's resume screener, which processes millions of applications with industry-leading accuracy.",
    initials: "AD",
    gradient: "from-blue-600 to-cyan-700",
    expertise: ["AI & ML", "NLP Systems", "Engineering Leadership"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emmanuel Boateng",
    role: "COO & Co-Founder",
    bio: "Serial entrepreneur and operations expert who previously scaled a fintech startup to $40M ARR. Emmanuel ensures LoqAI delivers enterprise-grade reliability and customer success at every touchpoint.",
    initials: "EB",
    gradient: "from-violet-600 to-indigo-700",
    expertise: ["Operations", "Customer Success", "Growth Strategy"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
];

export default function FoundersSection() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.06)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            The team behind LoqAI
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built by people who{" "}
            <span className="gradient-text">understand HR</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Our founders bring together deep expertise in HR, artificial
            intelligence, and enterprise software — united by a shared mission
            to modernise the way organisations manage their people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group bg-zinc-900/60 border border-white/8 rounded-2xl overflow-hidden hover:border-purple-500/25 transition-all duration-300"
            >
              <div className={`relative h-56 bg-gradient-to-br ${founder.gradient} overflow-hidden`}>
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center text-5xl font-bold text-white/30 hidden"
                >
                  {founder.initials}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-0.5">
                  {founder.name}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {founder.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {founder.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/50 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-white/30 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-white/30 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
