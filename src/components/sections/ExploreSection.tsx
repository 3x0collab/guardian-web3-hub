import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Rocket, Coins, Gamepad2, DollarSign, Zap, ArrowRight } from "lucide-react";

const ExploreSection = () => {
  const products = [
    {
      icon: Rocket,
      title: "IGO Launchpad",
      description: "Discover and invest in promising Initial Game Offerings with early access to top gaming projects.",
      category: "Investment",
      gradient: "from-purple-500 to-pink-500",
      href: "https://www.google.com"
    },
    {
      icon: TrendingUp,
      title: "Staking Pools",
      description: "Earn passive income by staking your tokens in our high-yield, secure staking protocols.",
      category: "Earn",
      gradient: "from-blue-500 to-cyan-500",
      href: "https://www.google.com"
    },
    {
      icon: Coins,
      title: "Yield Farming",
      description: "Maximize your returns through liquidity provision and automated yield optimization strategies.",
      category: "DeFi",
      gradient: "from-green-500 to-emerald-500",
      href: "https://www.google.com"
    },
    {
      icon: DollarSign,
      title: "DeFi Products",
      description: "Access a comprehensive suite of decentralized finance tools and protocols.",
      category: "Finance",
      gradient: "from-yellow-500 to-orange-500",
      href: "https://www.google.com"
    },
    {
      icon: Gamepad2,
      title: "NFT Marketplace",
      description: "Trade, collect, and discover unique digital assets in our secure NFT marketplace.",
      category: "NFTs",
      gradient: "from-red-500 to-pink-500",
      href: "https://www.google.com"
    },
    {
      icon: Zap,
      title: "Flash Loans",
      description: "Execute complex arbitrage strategies with instant, uncollateralized loans.",
      category: "Advanced",
      gradient: "from-indigo-500 to-purple-500",
      href: "https://www.google.com"
    }
  ];

  return (
    <section id="explore" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Web3 Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access a comprehensive ecosystem of DeFi protocols, NFT marketplaces, and investment opportunities all in one secure platform.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border overflow-hidden">
              <CardHeader className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{product.title}</CardTitle>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {product.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 line-clamp-3">
                  {product.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={product.href} className="flex items-center justify-center w-full">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Web3 Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect your wallet and gain access to the complete ecosystem of secure Web3 financial products.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <a href="https://www.google.com" className="flex items-center text-primary-foreground">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;