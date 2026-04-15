const founders = [
  {
    name: "Umar Asim",
    role: "CBO & Co-Founder",
    image: "/umar-asim.jpeg",
    initials: "UA",
    accent: "from-purple-600 to-violet-700",
    imagePosition: "object-top",
  },
  {
    name: "Ibrahim Zuberi",
    role: "CTO & Co-Founder",
    image: "/ibrahim-zuberi.jpeg",
    initials: "IZ",
    accent: "from-blue-600 to-cyan-700",
    imagePosition: "object-center",
  },
];

const companyVision = {
  title: "The vision of the founders",
  statement:
    "Our vision is to bridge the gap between software and artificial intelligence by building systems that deliver real, sustainable value. Instead of using AI as a temporary feature, we focus on combining structured software with intelligent automation to create solutions that scale with businesses. We believe the future belongs to companies that treat AI not as hype, but as reliable infrastructure that improves efficiency, reduces manual effort, and supports long-term growth.",
};

export default function FoundersSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.05)_0%,transparent_60%)]" />
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">
            The team behind LoqAI
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built by founders focused on{" "}
            <span className="gradient-text">sustainable AI supported systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="group bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="p-5 sm:p-6">
                <div className={`rounded-2xl bg-gradient-to-br ${founder.accent} p-[2px]`}>
                  <div className="relative rounded-[14px] overflow-hidden bg-white">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className={`w-full h-80 object-cover ${founder.imagePosition}`}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "flex";
                      }}
                    />
                    <div className="absolute inset-0 items-center justify-center text-5xl font-bold text-white/40 bg-gradient-to-br from-slate-800 to-slate-900 hidden">
                      {founder.initials}
                    </div>
                  </div>
                </div>

                <div className="pt-5">
                  <h3 className="text-gray-900 font-bold text-2xl leading-tight mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-purple-600 text-base font-semibold uppercase tracking-[0.14em]">
                    {founder.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-2">
            {companyVision.title}
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {companyVision.statement}
          </p>
        </div>
      </div>
    </section>
  );
}
