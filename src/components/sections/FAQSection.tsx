import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How secure is the wallet backup system?",
      answer: "Our backup system uses military-grade 256-bit AES encryption with multi-layer redundancy. Your private keys are encrypted locally before being stored across multiple secure servers, ensuring that only you have access to your funds."
    },
    {
      question: "Which wallets are supported?",
      answer: "We support all major wallet types including MetaMask, WalletConnect, Coinbase Wallet, SafePal, and many others. Our universal protocol ensures compatibility with virtually any Web3 wallet."
    },
    {
      question: "Is my seed phrase stored on your servers?",
      answer: "No, we never store your seed phrase or private keys in plain text. All sensitive information is encrypted locally on your device before any backup process begins, ensuring complete user control and security."
    },
    {
      question: "What happens if I lose access to my device?",
      answer: "With our secure backup system, you can recover your wallet using your encrypted backup and recovery credentials. The process is designed to be secure yet accessible only to you."
    },
    {
      question: "Are there any fees for using the platform?",
      answer: "Basic wallet connection and backup features are free. Premium features like advanced staking and DeFi products may have competitive fees that are clearly disclosed before use."
    },
    {
      question: "How do automatic backups work?",
      answer: "Our automatic backup system monitors your wallet for changes and creates encrypted snapshots at regular intervals. These are stored securely across multiple locations with your encryption keys never leaving your control."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about wallet security, backup, and our platform features.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="bg-gradient-card border-border mb-12">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Support CTA */}
        <div className="text-center">
          <Card className="bg-gradient-primary p-8 border-none">
            <CardContent className="p-0">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Our support team is here to help you 24/7. Get personalized assistance with wallet setup, security, and any other questions.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href="https://www.google.com" className="flex items-center">
                  Contact Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;