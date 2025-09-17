import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ExploreSection from "@/components/sections/ExploreSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ExploreSection />
      <HowItWorksSection />
      <FAQSection />
      <TrustedBySection />
      <FooterSection />
    </div>
  );
};

export default Index;
