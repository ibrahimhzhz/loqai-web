import { Mail, MapPin, Phone } from "lucide-react";
import ResourcePageLayout from "@/components/ResourcePageLayout";

const contactOptions = [
  {
    label: "Sales",
    value: "umar.asim@loqai.tech",
    icon: Mail,
  },
  {
    label: "Support",
    value: "+92 349 3135174",
    icon: Phone,
  },
  {
    label: "Office",
    value: "global",
    icon: MapPin,
  },
];

export default function ContactUsPage() {
  return (
    <ResourcePageLayout
      eyebrow="Resources"
      title="Contact Us"
      description="Talk to our team about product demos, onboarding, partnerships, and support."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Direct contact</h2>
          <div className="space-y-4">
            {contactOptions.map(({ label, value, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <Icon size={16} className="text-purple-700" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{label}</p>
                  <p className="text-sm text-gray-700 mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="lg:col-span-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Send us a message</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
          </div>
          <input
            type="text"
            placeholder="Company"
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"
          />
          <textarea
            placeholder="How can we help?"
            rows={5}
            className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 resize-y"
          />
          <button
            type="button"
            className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Submit enquiry
          </button>
        </form>
      </div>
    </ResourcePageLayout>
  );
}
