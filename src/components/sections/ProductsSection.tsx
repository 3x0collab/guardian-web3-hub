import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TooltipModal } from "@/components/ui/tooltip-modal";
import { FlipCard } from "@/components/ui/flip-card";
import { motion } from "framer-motion";
import { Rocket, Coins, Sprout, DollarSign, Image, Zap, TrendingUp, Shield } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      title: "IGO Launchpad",
      icon: Rocket,
      shortDescription: "Early access to promising Web3 projects",
      fullDescription: "Get exclusive access to Initial Game Offerings and innovative Web3 projects before they hit the mainstream market. Our launchpad features rigorous due diligence and community governance.",
      features: ["Due Diligence", "Early Access", "Community Voting"],
      gradient: "gradient-primary",
      comingSoon: false
    },
    {
      title: "Staking Pools",
      icon: Coins,
      shortDescription: "Earn rewards on your crypto holdings",
      fullDescription: "Stake your tokens in our secure, high-yield pools and earn competitive APY. Multiple staking options available including flexible and fixed-term deposits with compounding rewards.",
      features: ["High APY", "Flexible Terms", "Auto-Compound"],
      gradient: "gradient-secondary",
      comingSoon: false
    },
    {
      title: "Yield Farming",
      icon: Sprout,
      shortDescription: "Maximize returns through liquidity provision",
      fullDescription: "Provide liquidity to DeFi protocols and earn multiple reward tokens. Our farming strategies are optimized for maximum yield while minimizing impermanent loss.",
      features: ["Multi-Token Rewards", "Optimized Strategies", "Risk Management"],
      gradient: "gradient-accent",
      comingSoon: true
    },
    {
      title: "DeFi Products",
      icon: DollarSign,
      shortDescription: "Complete decentralized finance suite",
      fullDescription: "Access a comprehensive suite of DeFi products including lending, borrowing, and synthetic assets. Built on battle-tested protocols with institutional-grade security.",
      features: ["Lending", "Borrowing", "Synthetic Assets"],
      gradient: "gradient-primary",
      comingSoon: true
    },
    {
      title: "NFT Marketplace",
      icon: Image,
      shortDescription: "Trade and collect digital assets",
      fullDescription: "Discover, buy, and sell unique digital assets in our curated NFT marketplace. Features low fees, creator royalties, and advanced discovery tools.",
      features: ["Low Fees", "Creator Royalties", "Discovery Tools"],
      gradient: "gradient-secondary",
      comingSoon: true
    },
    {
      title: "Flash Trading",
      icon: Zap,
      shortDescription: "Lightning-fast arbitrage opportunities",
      fullDescription: "Execute arbitrage strategies across multiple DEXs with our flash loan integration. Profit from price discrepancies without initial capital requirements.",
      features: ["Flash Loans", "Multi-DEX", "No Capital Required"],
      gradient: "gradient-accent",
      comingSoon: true
    }
  ];

  return (
    <section id="products" className="py-24 bg-card/30">
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
            Explore Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover a comprehensive suite of Web3 products designed to maximize your crypto potential. 
            From launchpad access to yield farming, we've got you covered.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-80"
            >
              <FlipCard
                front={
                  <Card className="interactive-card h-full glass border-border/30 group">
                    <CardHeader className="text-center pb-4">
                      <motion.div 
                        className={`w-16 h-16 bg-${product.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <product.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl font-bold group-hover:text-web3-primary transition-colors">
                        {product.title}
                        {product.comingSoon && (
                          <span className="ml-2 text-xs px-2 py-1 bg-web3-accent/20 text-web3-accent rounded-full">
                            Soon
                          </span>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {product.shortDescription}
                      </CardDescription>
                      <motion.div 
                        className="mt-4 text-sm text-web3-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        Hover to learn more →
                      </motion.div>
                    </CardContent>
                  </Card>
                }
                back={
                  <Card className="h-full glass border-border/30 bg-gradient-glass">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-bold text-foreground mb-2">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {product.fullDescription}
                      </CardDescription>
                      
                      <div className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={feature}
                            className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground flex items-center gap-2"
                          >
                            <Shield className="w-3 h-3 text-web3-accent" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <TooltipModal
                        title={`${product.title} Details`}
                        description={`Learn more about ${product.title} and how it can help you maximize your Web3 potential. ${product.comingSoon ? 'This feature is coming soon!' : 'Available now for all users.'}`}
                        variant="primary"
                        className="w-full mt-4"
                      >
                        <Button 
                          className={`w-full bg-${product.gradient} hover:opacity-90 text-white`}
                          disabled={product.comingSoon}
                        >
                          {product.comingSoon ? 'Coming Soon' : 'Learn More'}
                          <TrendingUp className="w-4 h-4 ml-2" />
                        </Button>
                      </TooltipModal>
                    </CardContent>
                  </Card>
                }
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-xl p-8 border border-border/30 bg-gradient-glass">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Web3 Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of users who trust our platform for secure Web3 trading and investment. 
              Get started today and unlock the full potential of decentralized finance.
            </p>
            <TooltipModal
              title="Get Started Now"
              description="Connect your wallet to access all our products and start your secure Web3 journey today. No fees for basic features."
              variant="primary"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 font-semibold"
              >
                Get Started Now
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
            </TooltipModal>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;