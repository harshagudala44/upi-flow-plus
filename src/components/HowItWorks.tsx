import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, CreditCard, Send, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Download & Sign Up",
    description: "Download the app and create your account with mobile verification and secure PIN setup.",
    step: "01"
  },
  {
    icon: CreditCard,
    title: "Link Bank Account",
    description: "Securely connect your bank accounts through UPI. Verify your account details safely.",
    step: "02"
  },
  {
    icon: Send,
    title: "Start Transferring",
    description: "Send money instantly using UPI ID, mobile number, or QR code. It's that simple!",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Enjoy Benefits",
    description: "Get instant confirmations, transaction history, and enjoy cashback rewards.",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Started in 
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              {" "}4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your digital payment journey today. It takes less than 5 minutes to set up 
            your account and make your first transaction.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-success to-warning transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 border-border/50 relative z-10">
                    <CardContent className="p-8 text-center">
                      {/* Step Number */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-success flex items-center justify-center text-primary-foreground text-sm font-bold">
                          {step.step}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Arrow for Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-success/5 to-warning/5 rounded-3xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Fast & Secure Payments?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join millions of users who trust Gajwel UPI for their daily transactions. 
              Download now and get ₹50 cashback on your first transaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-success hover:from-primary-dark hover:to-success text-primary-foreground"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};