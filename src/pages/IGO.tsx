import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Wallet, Rocket, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { TooltipModal } from "@/components/ui/tooltip-modal";

const IGO = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-border/30 mb-8 backdrop-blur-md">
            <Rocket className="w-4 h-4 text-web3-primary mr-2" />
            <span className="text-sm text-muted-foreground">Initial Game Offerings</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            IGO <span className="bg-gradient-primary bg-clip-text text-transparent">Launchpad</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Participate in exclusive Initial Game Offerings with enhanced security and investor protection.
          </p>
        </motion.div>

        {/* Connect Wallet Section */}
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
                <span>Connect Your Wallet</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                To participate in IGO launches, please connect your Web3 wallet securely.
              </p>
              <TooltipModal
                title="Connect Wallet for IGO"
                description="Connect your wallet to access exclusive Initial Game Offerings with enhanced security features and investor protection."
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

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Shield,
              title: "Secure Participation",
              description: "Military-grade security for all IGO transactions and wallet connections."
            },
            {
              icon: TrendingUp,
              title: "Early Access",
              description: "Get exclusive early access to promising gaming projects before public launch."
            },
            {
              icon: Rocket,
              title: "Vetted Projects",
              description: "All gaming projects undergo thorough security audits and due diligence."
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
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Card className="glass border-border/30 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Our IGO platform is currently in development. Connect your wallet now to be notified when exciting gaming projects launch.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default IGO;