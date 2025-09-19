import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TooltipModal } from "@/components/ui/tooltip-modal";
import { Shield, Lock, Eye, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "Your data is protected with 256-bit AES encryption, the same standard used by banks and government institutions worldwide.",
      stats: "99.99% Security Rating"
    },
    {
      icon: Lock,
      title: "Zero-Knowledge Architecture",
      description: "We never see your private keys or sensitive data. All encryption happens locally on your device before any data leaves your control.",
      stats: "100% User Control"
    },
    {
      icon: Eye,
      title: "Complete Privacy Protection",
      description: "Your transaction history and wallet activities remain completely private. No tracking, no data selling, no compromise.",
      stats: "0% Data Sharing"
    },
    {
      icon: Zap,
      title: "Instant Secure Transactions",
      description: "Lightning-fast transactions with multi-layer security validation. Speed without sacrificing safety.",
      stats: "<3s Processing"
    }
  ];

  const trustIndicators = [
    "SOC 2 Type II Certified",
    "Multi-Signature Security",
    "Regular Security Audits",
    "Bug Bounty Program",
    "Cold Storage Protection",
    "24/7 Threat Monitoring"
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-web3-primary/5 via-transparent to-web3-secondary/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-web3-primary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-web3-secondary/10 rounded-full blur-3xl opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-web3-primary/10 text-web3-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Bank-Level Security
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Assets, <span className="text-gradient">Absolutely Secure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of users who trust our platform with over $2B in digital assets. 
            Experience the perfect balance of security, privacy, and convenience.
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glass h-full border-border/30 hover:border-web3-primary/30 transition-all duration-300 group-hover:shadow-hover">
                <CardContent className="p-6 text-center">
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-web3-primary font-semibold">
                    {feature.stats}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="glass border-border/30 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                Trusted Security Standards
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-web3-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{indicator}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-primary p-12 border-none relative overflow-hidden">
            <CardContent className="p-0 relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Digital Future?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the most secure Web3 platform. Connect your wallet now and experience 
                unparalleled security with complete peace of mind.
              </p>
              <TooltipModal
                title="Connect Wallet Securely"
                description="Connect your wallet to our ultra-secure platform. Your private keys stay with you - we only facilitate secure connections."
                variant="secondary"
              >
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  Connect Wallet Now
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </TooltipModal>
            </CardContent>
            
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full" />
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;