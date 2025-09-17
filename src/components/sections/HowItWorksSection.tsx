import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Shield, CheckCircle, Play } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: Wallet,
      title: "Connect Wallet",
      description: "Choose your preferred wallet type and establish a secure connection to our platform.",
      color: "text-web3-primary"
    },
    {
      step: "02",
      icon: Shield,
      title: "Select Protection",
      description: "Choose your security level and backup preferences for maximum asset protection.",
      color: "text-web3-secondary"
    },
    {
      step: "03",
      icon: CheckCircle,
      title: "Backup Complete",
      description: "Your wallet is automatically backed up with military-grade encryption and redundancy.",
      color: "text-web3-accent"
    },
    {
      step: "04",
      icon: Play,
      title: "Start Trading",
      description: "Access all Web3 features with complete confidence in your asset security.",
      color: "text-green-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started with SecureWeb3 in just a few simple steps. Our streamlined process ensures maximum security with minimal complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent transform translate-x-4 z-0"></div>
              )}
              
              <Card className="relative z-10 group hover:shadow-card transition-all duration-300 bg-gradient-card border-border">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="text-6xl font-bold text-muted-foreground/20 mb-4">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-card rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-border group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-web3-primary" />
              <span className="text-foreground font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-web3-secondary" />
              <span className="text-foreground font-medium">Multi-layer Backup</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Wallet className="w-6 h-6 text-web3-accent" />
              <span className="text-foreground font-medium">Non-custodial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;