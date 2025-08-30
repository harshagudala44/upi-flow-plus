import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-success flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Gajwel UPI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-gradient-to-r from-primary to-success hover:from-primary-dark hover:to-success text-primary-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
              <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline">Login</Button>
                <Button className="bg-gradient-to-r from-primary to-success hover:from-primary-dark hover:to-success text-primary-foreground">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};