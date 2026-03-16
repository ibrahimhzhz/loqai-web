import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FoundersSection from "@/components/FoundersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <FoundersSection />
      <CTASection />
      <Footer />
    </div>
  );
}
