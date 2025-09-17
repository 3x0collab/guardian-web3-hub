import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Wallet, Lock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-web3-primary/5 via-transparent to-web3-secondary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-web3-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-web3-primary/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/50 border border-border mb-8">
            <Shield className="w-4 h-4 text-web3-primary mr-2" />
            <span className="text-sm text-muted-foreground">Trusted by 500K+ Web3 users</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your Gateway to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Secure Web3
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect, backup, and protect your crypto assets with advanced security features. 
            The ultimate platform for safe Web3 trading and investment.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-glow group px-8 py-6 text-lg"
            >
              <a href="https://www.google.com" className="flex items-center text-primary-foreground">
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-card/50 px-8 py-6 text-lg"
            >
              <a href="https://www.google.com" className="flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                Learn More
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-web3-primary">50+</div>
              <div className="text-sm text-muted-foreground">Countries Covered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-web3-secondary">500K+</div>
              <div className="text-sm text-muted-foreground">Global Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-web3-accent">1M+</div>
              <div className="text-sm text-muted-foreground">Wallets Secured</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-web3-primary">$2B+</div>
              <div className="text-sm text-muted-foreground">Volume Secured</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-1/4 animate-bounce">
        <div className="w-12 h-12 bg-web3-primary/20 rounded-full flex items-center justify-center">
          <Shield className="w-6 h-6 text-web3-primary" />
        </div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-bounce delay-1000">
        <div className="w-12 h-12 bg-web3-secondary/20 rounded-full flex items-center justify-center">
          <Wallet className="w-6 h-6 text-web3-secondary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;