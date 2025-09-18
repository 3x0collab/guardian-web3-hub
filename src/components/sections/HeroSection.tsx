import { Button } from "@/components/ui/button";
import { TooltipModal } from "@/components/ui/tooltip-modal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { ArrowRight, Shield, Wallet, Lock, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-web3-primary/10 via-transparent to-web3-secondary/10"></div>
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-web3-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-web3-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-web3-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Badge */}
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full glass border border-border/30 mb-8 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Shield className="w-4 h-4 text-web3-primary mr-2" />
            <span className="text-sm text-muted-foreground">Trusted by 500K+ Web3 users worldwide</span>
            <Zap className="w-4 h-4 text-web3-accent ml-2" />
          </motion.div>

          {/* Main Title with staggered animation */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your Trusted Gateway to{" "}
            <motion.span 
              className="bg-gradient-primary bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Web3 Security
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Connect, backup, and protect your crypto assets with military-grade security. 
            The ultimate platform for safe Web3 trading, staking, and decentralized finance.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <TooltipModal
              title="Connect Your Wallet"
              description="This will securely connect your Web3 wallet using industry-standard protocols. Your private keys remain safe and are never shared."
              variant="primary"
            >
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 glow-primary group px-8 py-6 text-lg font-semibold"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </TooltipModal>
            
            <TooltipModal
              title="Access Your Secure Ledger"
              description="Access your secure ledger to manage your Web3 assets, view portfolio, and control your digital identity with complete privacy and security."
              variant="secondary"
              href="/access-ledger"
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border hover:bg-card/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
              >
                <Lock className="w-5 h-5 mr-2" />
                Access Ledger
              </Button>
            </TooltipModal>
          </motion.div>

          {/* Animated Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                end={50}
                suffix="+"
                className="text-3xl md:text-4xl font-bold text-web3-primary"
              />
              <div className="text-sm text-muted-foreground">Countries Secured</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                end={500}
                suffix="K+"
                className="text-3xl md:text-4xl font-bold text-web3-secondary"
              />
              <div className="text-sm text-muted-foreground">Global Users</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                end={1}
                suffix="M+"
                className="text-3xl md:text-4xl font-bold text-web3-accent"
              />
              <div className="text-sm text-muted-foreground">Wallets Protected</div>
            </motion.div>
            <motion.div 
              className="space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatedCounter 
                end={2}
                prefix="$"
                suffix="B+"
                className="text-3xl md:text-4xl font-bold text-web3-purple"
              />
              <div className="text-sm text-muted-foreground">Volume Secured</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 hidden lg:block"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-web3-primary/30">
          <Shield className="w-8 h-8 text-web3-primary" />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-1/4 hidden lg:block"
        animate={{ 
          y: [10, -10, 10],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-web3-secondary/30">
          <Wallet className="w-8 h-8 text-web3-secondary" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 left-1/3 hidden lg:block"
        animate={{ 
          y: [-15, 15, -15],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      >
        <div className="w-12 h-12 glass rounded-full flex items-center justify-center border border-web3-accent/30">
          <Zap className="w-6 h-6 text-web3-accent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;