import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SDRIcebergSection from "@/components/SDRIcebergSection";
import ProblemSection from "@/components/ProblemSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAFooter from "@/components/CTAFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SDRIcebergSection />
        <ProblemSection />
        <TestimonialsSection />
        <CTAFooter />
      </main>
    </div>
  );
}