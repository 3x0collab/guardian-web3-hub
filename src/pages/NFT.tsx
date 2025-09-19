import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import FooterSection from "@/components/sections/FooterSection";
import TooltipModal from "@/components/ui/tooltip-modal";
import { 
  Wallet, 
  Shield, 
  TrendingUp, 
  Users, 
  Image, 
  Star,
  Play,
  ArrowUpRight,
  Eye,
  Heart
} from "lucide-react";

const NFT = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const nftCollections = [
    {
      id: 1,
      name: "CyberApes",
      image: "https://images.unsplash.com/photo-1635349834396-516fd161f2ba?w=400&q=80",
      price: "2.5 ETH",
      likes: "1.2K",
      views: "5.8K",
      trending: true
    },
    {
      id: 2,
      name: "MetaWorlds",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&q=80",
      price: "1.8 ETH",
      likes: "890",
      views: "3.2K",
      trending: false
    },
    {
      id: 3,
      name: "Digital Dreams",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=400&q=80",
      price: "3.1 ETH",
      likes: "2.1K",
      views: "7.5K",
      trending: true
    },
    {
      id: 4,
      name: "Pixel Punks",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80",
      price: "0.9 ETH",
      likes: "654",
      views: "2.1K",
      trending: false
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Trading",
      description: "Trade NFTs with enterprise-grade security and protection"
    },
    {
      icon: TrendingUp,
      title: "Market Analytics",
      description: "Real-time analytics and trending collections data"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of creators and collectors"
    },
    {
      icon: Image,
      title: "Multi-Chain Support",
      description: "Support for Ethereum, Polygon, and other major chains"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4 bg-gradient-secondary/20 border-web3-secondary">
                <Star className="w-4 h-4 mr-2" />
                NFT Marketplace
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Discover, Collect & Trade{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Digital Assets
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Explore the world's largest NFT marketplace. Buy, sell, and discover 
                exclusive digital collectibles from verified creators.
              </p>

              {!isWalletConnected ? (
                <TooltipModal
                  title="Connect Your Wallet"
                  description="Connect your wallet to start trading NFTs securely on our platform. Your wallet information is protected with military-grade encryption."
                  variant="primary"
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4"
                    onClick={() => setIsWalletConnected(true)}
                  >
                    <Wallet className="mr-2 h-5 w-5" />
                    Connect Wallet to Trade
                  </Button>
                </TooltipModal>
              ) : (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 border-web3-primary text-web3-primary hover:bg-web3-primary/10"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Wallet Connected
                </Button>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { label: "Total Volume", value: "2.4M ETH" },
                { label: "Active Users", value: "150K+" },
                { label: "NFTs Sold", value: "890K+" },
                { label: "Top Collections", value: "12K+" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trending Collections
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover the hottest NFT collections from top creators
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftCollections.map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group glass border-border/30 overflow-hidden hover:border-web3-primary/50 transition-all duration-300">
                    <div className="relative">
                      <img 
                        src={nft.image} 
                        alt={nft.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {nft.trending && (
                        <Badge className="absolute top-3 left-3 bg-gradient-primary">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-black/50 hover:bg-black/70">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="secondary" className="h-8 w-8 bg-black/50 hover:bg-black/70">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-bold text-foreground mb-2">{nft.name}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {nft.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {nft.views}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-web3-primary">{nft.price}</span>
                        <TooltipModal
                          title="View NFT Details"
                          description="View detailed information about this NFT including price history, traits, and trading options."
                        >
                          <Button size="sm" variant="outline" className="hover:border-web3-primary">
                            View Details
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Button>
                        </TooltipModal>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-web3-darker/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our NFT Platform?
              </h2>
              <p className="text-muted-foreground text-lg">
                Advanced features for creators, collectors, and traders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your NFT Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of creators and collectors building the future of digital ownership
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TooltipModal
                  title="Start Creating"
                  description="Begin creating and minting your own NFTs with our easy-to-use tools and features."
                  variant="primary"
                >
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                    <Play className="mr-2 h-5 w-5" />
                    Start Creating
                  </Button>
                </TooltipModal>
                
                <TooltipModal
                  title="Explore Collections"
                  description="Discover amazing NFT collections from artists and creators around the world."
                >
                  <Button size="lg" variant="outline" className="border-web3-primary text-web3-primary hover:bg-web3-primary/10">
                    Explore Collections
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </TooltipModal>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default NFT;