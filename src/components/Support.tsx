import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, Clock, HelpCircle, FileText } from "lucide-react";

export const Support = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Need Help? 
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              {" "}We're Here 24/7
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our dedicated support team is always ready to help you with any questions or issues. 
            Get assistance whenever you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Live Chat</h3>
              <p className="text-muted-foreground mb-4">
                Get instant help through our live chat. Available 24/7 for immediate assistance.
              </p>
              <Button className="w-full bg-primary hover:bg-primary-dark">
                Start Chat
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-success/10 to-success/20 flex items-center justify-center">
                <Phone className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Phone Support</h3>
              <p className="text-muted-foreground mb-4">
                Call our toll-free helpline for urgent issues and personalized support.
              </p>
              <Button variant="outline" className="w-full border-success/20 hover:bg-success/5">
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-warning/10 to-warning/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                Send us detailed queries via email. We respond within 2 hours.
              </p>
              <Button variant="outline" className="w-full border-warning/20 hover:bg-warning/5">
                Send Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ and Resources */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <HelpCircle className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-b border-border/20 pb-4">
                  <h4 className="font-semibold text-foreground mb-2">Is UPI Flow+ safe to use?</h4>
                  <p className="text-muted-foreground text-sm">Yes, we use bank-grade security with end-to-end encryption and multi-factor authentication.</p>
                </div>
                <div className="border-b border-border/20 pb-4">
                  <h4 className="font-semibold text-foreground mb-2">What are the transaction limits?</h4>
                  <p className="text-muted-foreground text-sm">You can send up to ₹1,00,000 per transaction and ₹1,00,000 per day as per RBI guidelines.</p>
                </div>
                <div className="pb-4">
                  <h4 className="font-semibold text-foreground mb-2">How long does a transfer take?</h4>
                  <p className="text-muted-foreground text-sm">All transfers are instant and processed in real-time, 24/7.</p>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-6">
                View All FAQs
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-8 h-8 text-success" />
                <h3 className="text-2xl font-semibold text-foreground">Help Resources</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/5 to-success/5 border border-primary/10">
                  <div>
                    <h4 className="font-semibold text-foreground">User Guide</h4>
                    <p className="text-muted-foreground text-sm">Complete guide to using UPI Flow+</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-success/5 to-warning/5 border border-success/10">
                  <div>
                    <h4 className="font-semibold text-foreground">Security Tips</h4>
                    <p className="text-muted-foreground text-sm">Keep your account secure</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-warning/5 to-primary/5 border border-warning/10">
                  <div>
                    <h4 className="font-semibold text-foreground">Troubleshooting</h4>
                    <p className="text-muted-foreground text-sm">Common issues and solutions</p>
                  </div>
                  <Button size="sm" variant="outline">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 to-success/5 rounded-2xl border border-primary/10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-foreground">24/7 Support Available</span>
          </div>
          <p className="text-muted-foreground">
            Toll-free: 1800-123-4567 | Email: support@upiflowplus.com
          </p>
        </div>
      </div>
    </section>
  );
};