import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/HeroSection";
import WalletSection from "@/components/sections/WalletSection";
import SecuritySection from "@/components/sections/SecuritySection";
import ProductsSection from "@/components/sections/ProductsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WalletSection />
      <SecuritySection />
      <ProductsSection />
      <HowItWorksSection />
      <TrustedBySection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
