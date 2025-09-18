import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Wallet, Globe, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { TooltipModal } from "@/components/ui/tooltip-modal";

const DeFi = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" className="text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
              <div className="w-5 h-5 border-2 border-white rounded-full"></div>
            </div>
            <span className="font-bold text-xl text-foreground">SecureWeb3</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-border/30 mb-8 backdrop-blur-md">
            <Globe className="w-4 h-4 text-web3-primary mr-2" />
            <span className="text-sm text-muted-foreground">Decentralized Finance</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Secure <span className="bg-gradient-primary bg-clip-text text-transparent">DeFi</span> Platform
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Access the full spectrum of DeFi services with enhanced security, automated risk management, and seamless integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card className="glass border-border/30 text-center">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Wallet className="w-6 h-6 text-web3-primary" />
                <span>Connect Wallet for DeFi</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Connect your wallet to access our comprehensive DeFi ecosystem with enhanced security features.
              </p>
              <TooltipModal
                title="Connect Wallet for DeFi"
                description="Connect your wallet to access lending, borrowing, swapping, and other DeFi services with automated security checks and risk management."
                variant="primary"
              >
                <Button className="bg-gradient-primary hover:opacity-90 px-8 py-3">
                  <Wallet className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
              </TooltipModal>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Layers,
              title: "Multi-Protocol",
              description: "Access leading DeFi protocols across multiple blockchains from one secure interface."
            },
            {
              icon: Zap,
              title: "Auto-Optimization",
              description: "Automated strategies for lending, borrowing, and yield optimization across DeFi."
            },
            {
              icon: Globe,
              title: "Cross-Chain",
              description: "Seamless cross-chain DeFi operations with built-in bridge security verification."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="glass border-border/30 h-full hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default DeFi;