import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, Fingerprint, Key } from "lucide-react";
import securityImage from "@/assets/security-illustration.jpg";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All transactions are encrypted with military-grade security protocols."
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Secure login with fingerprint or face recognition technology."
  },
  {
    icon: Key,
    title: "Multi-Factor Authentication",
    description: "Additional layers of security with OTP and PIN verification."
  },
  {
    icon: Eye,
    title: "Real-time Monitoring",
    description: "24/7 fraud detection and suspicious activity monitoring."
  },
  {
    icon: AlertTriangle,
    title: "Instant Alerts",
    description: "Immediate notifications for all account activities and transactions."
  },
  {
    icon: Shield,
    title: "RBI Compliant",
    description: "Fully compliant with Reserve Bank of India regulations and guidelines."
  }
];

export const Security = () => {
  return (
    <section id="security" className="py-20 bg-gradient-to-br from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-8 h-8 text-success" />
              <span className="text-success font-semibold">Bank-Grade Security</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Money is 
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                {" "}100% Safe
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              We use the same security standards as leading banks to protect your financial data. 
              Your transactions are safeguarded by multiple layers of advanced security.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-success" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl border border-success/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-success flex items-center justify-center">
                  <Shield className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Certified & Insured</h4>
                  <p className="text-muted-foreground text-sm">
                    All transactions are insured and we maintain PCI DSS compliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src={securityImage} 
              alt="Security features illustration" 
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-success/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};