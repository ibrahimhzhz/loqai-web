import { CheckSquare, Download, FileText, ShieldCheck } from "lucide-react";
import ResourcePageLayout from "@/components/ResourcePageLayout";

const checklistSections = [
  {
    title: "Hiring Compliance",
    items: [
      "Standardized job descriptions with clear role outcomes",
      "Interview scorecards and equal-opportunity review",
      "Offer letter template with legal clauses",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Onboarding Readiness",
    items: [
      "Day 1 orientation and policy acknowledgement workflow",
      "IT access, assets, and account provisioning checklist",
      "90-day onboarding milestone and manager feedback plan",
    ],
    icon: CheckSquare,
  },
  {
    title: "Payroll and Records",
    items: [
      "Verified tax and bank details for every employee",
      "Monthly payroll review and approval controls",
      "Centralized employee records retention policy",
    ],
    icon: FileText,
  },
];

export default function HrChecklistPage() {
  return (
    <ResourcePageLayout
      eyebrow="Resources"
      title="HR Checklist"
      description="Use this practical checklist to keep hiring, onboarding, payroll, and compliance workflows audit-ready."
    >
      <div className="space-y-5 mb-8">
        {checklistSections.map(({ title, items, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center">
                <Icon size={16} className="text-purple-700" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            </div>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-purple-700 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Want the editable version?</h3>
          <p className="text-sm text-gray-600 mt-1">Get the downloadable HR checklist as a DOCX and spreadsheet pack.</p>
        </div>
        <a
          href="/resources/contact-us"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          <Download size={14} />
          Request template pack
        </a>
      </div>
    </ResourcePageLayout>
  );
}
