import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ResourcePageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function ResourcePageLayout({
  eyebrow,
  title,
  description,
  children,
}: ResourcePageLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar />

      <main className="pt-24">
        <section className="py-16 bg-white relative overflow-hidden border-b border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08)_0%,transparent_62%)]" />
          <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
              {eyebrow}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{description}</p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">{children}</div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
