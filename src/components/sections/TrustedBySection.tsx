import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const TrustedBySection = () => {
  const partners = [
    { name: "CoinGecko", logo: "🦎" },
    { name: "Binance", logo: "🔶" },
    { name: "Polygon", logo: "🔺" },
    { name: "Chainlink", logo: "🔗" },
    { name: "Uniswap", logo: "🦄" },
    { name: "Aave", logo: "👻" },
    { name: "Compound", logo: "📈" },
    { name: "SushiSwap", logo: "🍣" }
  ];

  const testimonials = [
    {
      quote: "SecureWeb3 provides the peace of mind I need when managing my crypto portfolio. The backup system is incredibly reliable.",
      author: "Sarah Chen",
      role: "DeFi Investor",
      avatar: "👩‍💼"
    },
    {
      quote: "The security features are top-notch. I can trade with confidence knowing my assets are protected by military-grade encryption.",
      author: "Michael Rodriguez",
      role: "Crypto Trader",
      avatar: "👨‍💻"
    },
    {
      quote: "Finally, a platform that makes Web3 security simple. The automatic backup feature is a game-changer.",
      author: "Alex Thompson",
      role: "NFT Collector",
      avatar: "🎨"
    }
  ];

  return (
    <section id="trusted-by" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Leading Web3 Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of users and top blockchain companies who trust SecureWeb3 for their digital asset security.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 bg-gradient-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">{partner.logo}</div>
                <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {partner.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="text-4xl mb-4">"</div>
                    <p className="text-muted-foreground italic">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-secondary p-8 border-none">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Join Our Growing Community?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                See why leading companies and thousands of users trust SecureWeb3 for their Web3 security needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <a href="https://www.google.com" className="flex items-center">
                    View All Partners
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="https://www.google.com">
                    Become a Partner
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;