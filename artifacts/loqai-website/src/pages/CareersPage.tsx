import { ArrowRight, BriefcaseBusiness, HeartHandshake, Laptop } from "lucide-react";
import ResourcePageLayout from "@/components/ResourcePageLayout";

const values = [
  {
    title: "Ownership mindset",
    text: "We solve customer problems end-to-end and take responsibility for outcomes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "People-first culture",
    text: "We build technology that improves work for HR teams and employees alike.",
    icon: HeartHandshake,
  },
  {
    title: "Flexible work",
    text: "Hybrid and remote-friendly workflows with clear communication and trust.",
    icon: Laptop,
  },
];

const openings = [
  {
    role: "Product Designer",
    type: "Full-time",
    location: "Remote",
  },
  {
    role: "Frontend Engineer (React)",
    type: "Full-time",
    location: "Remote",
  },
  {
    role: "Customer Success Specialist",
    type: "Full-time",
    location: "Remote",
  },
];

export default function CareersPage() {
  return (
    <ResourcePageLayout
      eyebrow="Company"
      title="Careers at LoqAI"
      description="Join a team building AI-powered HR products that help businesses hire better and run smarter."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {values.map(({ title, text, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center mb-4">
              <Icon size={18} className="text-purple-700" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Open roles</h3>
        <div className="space-y-3">
          {openings.map((opening) => (
            <div
              key={opening.role}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-gray-100 rounded-xl px-4 py-4"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">{opening.role}</p>
                <p className="text-xs text-gray-500 mt-1">{opening.type} · {opening.location}</p>
              </div>
              <a
                href="/resources/contact-us"
                className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-800"
              >
                Apply interest
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </ResourcePageLayout>
  );
}
