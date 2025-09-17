import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, RefreshCw, Wallet, Smartphone, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Backup Wallet",
      description: "Secure your wallet with military-grade encryption and multi-layer backup systems.",
      href: "https://www.google.com"
    },
    {
      icon: RefreshCw,
      title: "Automatic Backup",
      description: "Set it and forget it. Your wallet is continuously backed up in real-time.",
      href: "https://www.google.com"
    },
    {
      icon: Wallet,
      title: "MetaMask Support",
      description: "Seamlessly connect and secure your MetaMask wallet with enhanced protection.",
      href: "https://www.google.com"
    },
    {
      icon: Smartphone,
      title: "WalletConnect",
      description: "Universal protocol support for connecting to any decentralized application.",
      href: "https://www.google.com"
    }
  ];

  const walletTypes = [
    { name: "MetaMask", logo: "🦊" },
    { name: "WalletConnect", logo: "🔗" },
    { name: "Coinbase", logo: "🔵" },
    { name: "SafePal", logo: "🛡️" }
  ];

  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advanced Security Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Protect your digital assets with enterprise-grade security tools designed for the modern Web3 ecosystem.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6">
                  {feature.description}
                </CardDescription>
                <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a href={feature.href} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supported Wallets */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Supported Wallet Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {walletTypes.map((wallet, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 cursor-pointer">
                <a href="https://www.google.com">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{wallet.logo}</div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {wallet.name}
                    </h4>
                  </CardContent>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;