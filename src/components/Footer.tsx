import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="Nykson Capital" className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Nykson Capital</span>
                <span className="text-sm text-muted-foreground">Real Estate Investment</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              A privately held property investment firm dedicated to creating win-win real estate 
              solutions across Texas. We specialize in acquiring undervalued properties and 
              helping owners unlock their true value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="text-primary" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="text-primary" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="text-primary" size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="text-primary" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Direct Property Purchases</span></li>
              <li><span className="text-muted-foreground">Investor Partnerships</span></li>
              <li><span className="text-muted-foreground">Deal Structuring</span></li>
              <li><span className="text-muted-foreground">Rehab & Flip Support</span></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-border/20">
          <div className="flex items-center gap-3">
            <Phone className="text-primary" size={20} />
            <span className="text-muted-foreground">Coming Soon!</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={20} />
            <span className="text-muted-foreground">infotexasinvestor.us</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={20} />
            <span className="text-muted-foreground">San Antonio, Texas-USA</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border/20">
          <p className="text-muted-foreground text-sm">
            © 2024 Nykson Capital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
