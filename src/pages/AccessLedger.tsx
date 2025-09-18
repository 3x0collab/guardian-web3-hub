import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Lock, User, Shield, Check } from "lucide-react";
import { Link } from "react-router-dom";

const AccessLedger = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: ""
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="glass border-border/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Check Your Email
              </h3>
              <p className="text-muted-foreground mb-6">
                We've sent a verification link to <strong>{formData.email}</strong>. 
                Please check your inbox and click the link to activate your account.
              </p>
              <Link to="/">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between py-6">
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

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[calc(100vh-120px)]">
          {/* Left Side - Info */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Access Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Secure Ledger
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Join the most trusted Web3 security platform. Protect your assets, 
              connect securely, and explore the decentralized future with confidence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {[
                { icon: Shield, text: "Military-grade encryption" },
                { icon: Lock, text: "Advanced backup systems" },
                { icon: User, text: "Trusted by 500K+ users" },
                { icon: Mail, text: "24/7 support available" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Forms */}
          <motion.div 
            className="flex-1 max-w-md w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass border-border/30">
              <CardHeader className="pb-4">
                <CardTitle className="text-center text-2xl font-bold text-foreground">
                  Welcome to SecureWeb3
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="signup" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="login">Log In</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="signup">
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          required
                          className="bg-background/50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                        <Input
                          id="referralCode"
                          type="text"
                          placeholder="Enter referral code"
                          value={formData.referralCode}
                          onChange={(e) => setFormData({...formData, referralCode: e.target.value})}
                          className="bg-background/50"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                        Create Account
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="login">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="loginEmail">Email</Label>
                        <Input
                          id="loginEmail"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="loginPassword">Password</Label>
                        <Input
                          id="loginPassword"
                          type="password"
                          placeholder="Enter your password"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-muted-foreground">Remember me</span>
                        </label>
                        <a href="#" className="text-web3-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      
                      <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AccessLedger;