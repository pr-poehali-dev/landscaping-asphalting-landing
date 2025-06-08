import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientTypesSection from "@/components/ClientTypesSection";
import BonusSection from "@/components/BonusSection";
import ProcessSection from "@/components/ProcessSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ClientTypesSection />
      <BonusSection />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
