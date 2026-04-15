import { Clock3, PlayCircle } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05)_0%,transparent_60%)]" />
      <div className="max-w-[96rem] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-3">
            Success stories
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real results from{" "}
            <span className="gradient-text">companies</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Companies across the globe use LoqAI to transform how they
            manage people and find talent.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-12 p-7 lg:p-10">
              <div className="flex items-center gap-2 text-purple-600 mb-4">
                <PlayCircle size={18} />
                <p className="text-sm font-semibold uppercase tracking-widest">
                  Testimonial video slot
                </p>
              </div>

              <div className="relative aspect-video rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15),transparent_45%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/95 border border-gray-200 flex items-center justify-center shadow-md">
                    <PlayCircle size={30} className="text-purple-700" />
                  </div>
                </div>

                <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-white/70 bg-white/85 backdrop-blur-sm p-3">
                  <p className="text-base font-semibold text-gray-900">
                    Customer testimonial video is currently in editing
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 text-sm text-gray-500">
                    <Clock3 size={13} />
                    Final cut will be added here soon.
                  </div>
                </div>
              </div>

              <p className="mt-4 text-base text-gray-500">
                This section is intentionally video-first so visitors can hear directly from your customers once the recording is ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
