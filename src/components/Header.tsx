import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logoImage} alt="Nykson Capital" className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">Nykson Capital</span>
              <span className="text-xs text-muted-foreground">Real Estate Investment</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Phone size={16} />
              Coming Soon
            </Button>
            <Button variant="hero" size="lg">
              Get Cash Offer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors py-2">Services</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors py-2">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">Contact</a>
              <div className="pt-4 border-t border-border/50">
                <Button variant="hero" size="lg" className="w-full">
                  Get Cash Offer
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
