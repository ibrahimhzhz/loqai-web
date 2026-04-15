import { ArrowRight } from "lucide-react";

const pillars = [
  {
    product: "LoqHRMS",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
    title: "Everything you need to manage people, in one place",
    description:
      "LoqHRMS handles attendance, payroll, assets, and employee records — so your HR team stops juggling spreadsheets and starts doing meaningful work.",
    link: "/solutions/hrms/payroll-generation",
    linkLabel: "Explore LoqHRMS",
  },
  {
    product: "LoqHire",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&fit=crop&crop=center",
    title: "Hire smarter and faster with AI",
    description:
      "LoqHire's AI resume screener ranks candidates in seconds, so your team spends less time filtering and more time building relationships with the right people.",
    link: "/solutions/talent/ai-resume-screener",
    linkLabel: "See LoqHire in action",
  },
];

export default function WhyLoqAISection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            The smartest companies run on{" "}
            <span className="gradient-text">LoqAI</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Pick the workflow your team needs today, and scale into a unified HR and hiring system as your organisation grows.
          </p>
        </div>

        <div className="space-y-6">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="group rounded-3xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className={`lg:col-span-5 min-h-[240px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="h-full w-full overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-7 p-8 lg:p-10 flex flex-col ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-sm font-semibold uppercase tracking-wider">
                      {pillar.product}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6 flex-1 max-w-2xl">
                    {pillar.description}
                  </p>

                  <a
                    href={pillar.link}
                    className="inline-flex items-center gap-1.5 text-base font-semibold text-purple-600 hover:text-purple-800 transition-colors group/link"
                  >
                    {pillar.linkLabel}
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
