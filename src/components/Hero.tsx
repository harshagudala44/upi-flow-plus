import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Zap, Shield } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-success">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full border border-primary-foreground/20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full border border-primary-foreground/20"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 rounded-full border border-primary-foreground/20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <Zap className="w-5 h-5 text-warning" />
                <span className="text-primary-foreground/80 text-sm font-medium">Instant Transfers</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-primary-foreground/40"></div>
              <div className="flex items-center space-x-1">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-primary-foreground/80 text-sm font-medium">Bank-Grade Security</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Send Money
              <br />
              <span className="bg-gradient-to-r from-warning via-success-light to-success bg-clip-text text-transparent">
                Instantly
              </span>
            </h1>

            <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Transfer money to anyone, anywhere in seconds with our secure UPI platform. 
              Pay bills, recharge, and manage all your payments in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">50M+</div>
                <div className="text-primary-foreground/60 text-sm">Users</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">₹100B+</div>
                <div className="text-primary-foreground/60 text-sm">Transactions</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">99.9%</div>
                <div className="text-primary-foreground/60 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* Phone Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroPhone} 
                alt="Gajwel UPI mobile app interface" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-success/20 to-warning/20 rounded-3xl blur-3xl scale-110"></div>
          </div>
        </div>
      </div>
    </section>
  );
};