import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Shield, 
  CreditCard, 
  Receipt, 
  Users, 
  Bell, 
  QrCode,
  Split,
  Gift,
  Globe
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send money instantly using UPI ID, mobile number, or QR code scan. Lightning-fast transactions 24/7.",
    color: "text-warning"
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Multi-factor authentication, biometric login, and advanced fraud detection keep your money safe.",
    color: "text-success"
  },
  {
    icon: CreditCard,
    title: "Link Multiple Banks",
    description: "Connect all your bank accounts securely. Switch between accounts for payments effortlessly.",
    color: "text-primary"
  },
  {
    icon: Receipt,
    title: "Bill Payments",
    description: "Pay utility bills, mobile recharge, DTH, and more. Never miss a payment with smart reminders.",
    color: "text-success"
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Save frequent payees for quick payments. Organize and manage your beneficiaries easily.",
    color: "text-primary"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Real-time alerts for all transactions. Stay informed with email, SMS, and app notifications.",
    color: "text-warning"
  },
  {
    icon: QrCode,
    title: "QR Code Generator",
    description: "Generate your own QR codes to receive payments. Share with anyone to collect money instantly.",
    color: "text-success"
  },
  {
    icon: Split,
    title: "Split Payments",
    description: "Split bills with friends and family. Send payment requests and settle expenses easily.",
    color: "text-primary"
  },
  {
    icon: Gift,
    title: "Rewards & Cashback",
    description: "Earn reward points and cashback on transactions. Redeem points for exciting offers.",
    color: "text-warning"
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Available in multiple regional languages for wider accessibility and ease of use.",
    color: "text-success"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for 
            <span className="bg-gradient-to-r from-primary via-success to-warning bg-clip-text text-transparent"> Digital Payments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of digital payments with our comprehensive suite of features 
            designed for speed, security, and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border-border/50"
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${feature.color.split('-')[1]}/10 to-${feature.color.split('-')[1]}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};