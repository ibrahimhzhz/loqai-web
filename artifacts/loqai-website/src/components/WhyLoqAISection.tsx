import { ArrowRight } from "lucide-react";

const pillars = [
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center",
    title: "Everything you need to manage people, in one place",
    description:
      "LoqHRMS handles attendance, payroll, assets, and employee records — so your HR team stops juggling spreadsheets and starts doing meaningful work.",
    link: "/solutions/hrms/payroll-generation",
    linkLabel: "Explore LoqHRMS",
  },
  {
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&h=400&fit=crop&crop=center",
    title: "Hire smarter and faster with AI",
    description:
      "LoqTalent's AI resume screener ranks candidates in seconds, so your team spends less time filtering and more time building relationships with the right people.",
    link: "/solutions/talent/ai-resume-screener",
    linkLabel: "See LoqTalent in action",
  },
  {
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&crop=center",
    title: "AI-powered bots that work while you sleep",
    description:
      "LoqBot gives your business a 24/7 AI assistant — handling customer queries, reservations, and lead qualification across hotels, restaurants, e-commerce, and more.",
    link: "/solutions/loqbot/custom-chatbot",
    linkLabel: "Discover LoqBot",
  },
];

export default function WhyLoqAISection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-2xl mb-16 leading-tight">
          The smartest companies run on{" "}
          <span className="gradient-text">LoqAI</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group flex flex-col">
              <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                {pillar.description}
              </p>
              <a
                href={pillar.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group/link"
              >
                {pillar.linkLabel}
                <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
