import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Download as DownloadIcon } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background-start to-background-end">
      <Header />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-success mx-auto mb-8 flex items-center justify-center">
                <Smartphone className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Download <span className="text-primary">Gajwel UPI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Fast, secure, and easy UPI payments at your fingertips. 
                Available for Android and iOS devices.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.gajwelupi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    Download for Android
                  </a>
                </Button>
                
                <Button 
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a 
                    href="https://apps.apple.com/app/gajwel-upi/id1234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <DownloadIcon className="w-5 h-5" />
                    Download for iOS
                  </a>
                </Button>
              </div>

              <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 rounded bg-primary"></div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Instant Transfers</h3>
                  <p className="text-sm text-muted-foreground">Send money in seconds with UPI</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 rounded bg-success"></div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Bank-Grade Security</h3>
                  <p className="text-sm text-muted-foreground">Your money is always protected</p>
                </div>
                
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 rounded bg-accent"></div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">24/7 Available</h3>
                  <p className="text-sm text-muted-foreground">Access your money anytime, anywhere</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Download;