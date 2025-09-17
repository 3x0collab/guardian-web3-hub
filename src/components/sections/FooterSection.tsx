import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Twitter, Github, Linkedin, Mail, Shield } from "lucide-react";

const FooterSection = () => {
  const quickLinks = [
    { name: "IGO", href: "https://www.google.com" },
    { name: "Launchpad", href: "https://www.google.com" },
    { name: "Staking", href: "https://www.google.com" },
    { name: "Farming", href: "https://www.google.com" }
  ];

  const products = [
    { name: "Crypto", href: "https://www.google.com" },
    { name: "DeFi", href: "https://www.google.com" },
    { name: "Web3", href: "https://www.google.com" },
    { name: "NFT", href: "https://www.google.com" }
  ];

  const company = [
    { name: "About Us", href: "https://www.google.com" },
    { name: "Security", href: "https://www.google.com" },
    { name: "Privacy Policy", href: "https://www.google.com" },
    { name: "Terms of Service", href: "https://www.google.com" }
  ];

  const support = [
    { name: "Help Center", href: "https://www.google.com" },
    { name: "Contact Us", href: "https://www.google.com" },
    { name: "API Docs", href: "https://www.google.com" },
    { name: "Community", href: "https://www.google.com" }
  ];

  return (
    <footer className="bg-web3-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-2xl text-foreground">SecureWeb3</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Your gateway to secure Web3. Connect, backup, and protect your crypto assets with advanced security features trusted by thousands worldwide.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-web3-dark border-border"
                  />
                  <Button className="bg-gradient-primary hover:opacity-90 shrink-0">
                    <a href="https://www.google.com">
                      Subscribe
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Products</h4>
              <ul className="space-y-3">
                {products.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-3">
                {support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2024 SecureWeb3. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://www.google.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.google.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Security Badge */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-web3-primary" />
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;