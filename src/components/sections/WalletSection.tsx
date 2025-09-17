import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TooltipModal } from "@/components/ui/tooltip-modal";
import { motion } from "framer-motion";

const WalletSection = () => {
  const wallets = [
    {
      name: "MetaMask",
      icon: "🦊",
      description: "The most popular Web3 wallet with browser extension support",
      features: ["Browser Extension", "Mobile App", "Hardware Support"],
      color: "web3-primary"
    },
    {
      name: "Coinbase Wallet",
      icon: "🔵",
      description: "Enterprise-grade security with institutional support",
      features: ["Exchange Integration", "DeFi Access", "Multi-Chain"],
      color: "web3-secondary"
    },
    {
      name: "WalletConnect",
      icon: "🔗",
      description: "Universal protocol for connecting decentralized applications",
      features: ["Universal Protocol", "QR Code", "Mobile First"],
      color: "web3-accent"
    },
    {
      name: "TrustWallet",
      icon: "🛡️",
      description: "Mobile-first wallet with built-in dApp browser",
      features: ["Mobile Native", "DApp Browser", "Staking Support"],
      color: "web3-purple"
    }
  ];

  return (
    <section id="wallets" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Supported Wallet Types
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect securely with any major Web3 wallet. Our universal protocol ensures compatibility 
            while maintaining the highest security standards.
          </p>
        </motion.div>

        {/* Wallet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wallets.map((wallet, index) => (
            <motion.div
              key={wallet.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TooltipModal
                title={`Connect ${wallet.name}`}
                description={`${wallet.description}. This will establish a secure connection using industry-standard protocols.`}
                variant="primary"
                className="h-full"
              >
                <Card className="interactive-card h-full glass border-border/30 group cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <motion.div 
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {wallet.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold group-hover:text-web3-primary transition-colors">
                      {wallet.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {wallet.description}
                    </CardDescription>
                    
                    <div className="space-y-2">
                      {wallet.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    <motion.div 
                      className="mt-4 text-sm text-web3-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      Click to connect →
                    </motion.div>
                  </CardContent>
                </Card>
              </TooltipModal>
            </motion.div>
          ))}
        </div>

        {/* Security Features */}
        <motion.div 
          className="mt-16 glass rounded-xl p-8 border border-border/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Universal Security Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔐</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">End-to-End Encryption</h4>
              <p className="text-muted-foreground text-sm">
                Your private keys are encrypted locally and never leave your device
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Instant Connection</h4>
              <p className="text-muted-foreground text-sm">
                Connect to any dApp instantly with our optimized protocol
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground">Multi-Chain Support</h4>
              <p className="text-muted-foreground text-sm">
                Support for Ethereum, Polygon, BSC, and many other networks
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WalletSection;