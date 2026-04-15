import { CalendarDays, Search, UploadCloud } from "lucide-react";
import ResourcePageLayout from "@/components/ResourcePageLayout";

const publishingTips = [
  "Start with a clear thesis and keep each article focused on one core topic.",
  "Use internal links to related product and resource pages to help readers explore.",
  "Include practical examples, checklists, or templates readers can apply immediately.",
  "Review and update older posts regularly so guidance stays accurate.",
];

const samplePosts = [
  {
    title: "How AI Resume Screening Improves Quality of Hire",
    category: "Talent Acquisition",
    date: "March 2026",
  },
  {
    title: "HR Payroll Compliance Checklist for Growing Teams",
    category: "HR Operations",
    date: "February 2026",
  },
];

export default function BlogPage() {
  return (
    <ResourcePageLayout
      eyebrow="Resources"
      title="Blog"
      description="Publish HR and hiring insights, guides, and company updates for your audience."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Create a blog draft</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Blog title"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
            <input
              type="text"
              placeholder="Topic"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Paste article content"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 resize-y"
          />
          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <UploadCloud size={16} />
            Save draft
          </button>
          <p className="text-xs text-gray-500">This starter form is UI-only. Connect a CMS or backend API to persist uploads.</p>
        </div>

        <aside className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Publishing checklist</h2>
          <ul className="space-y-3">
            {publishingTips.map((tip) => (
              <li key={tip} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                <Search size={14} className="text-purple-700 mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent posts</h3>
        <div className="space-y-3">
          {samplePosts.map((post) => (
            <article key={post.title} className="border border-gray-100 rounded-xl px-4 py-4">
              <p className="text-sm font-semibold text-gray-900">{post.title}</p>
              <p className="text-xs text-gray-500 mt-1">{post.category}</p>
              <p className="text-xs text-gray-400 mt-1 inline-flex items-center gap-1">
                <CalendarDays size={12} />
                {post.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </ResourcePageLayout>
  );
}
