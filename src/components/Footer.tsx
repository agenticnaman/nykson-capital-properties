import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={logoImage} alt="Nykson Capital" className="h-12 w-12" />
              <div>
                <span className="text-xl font-bold">Nykson Capital</span>
                <p className="text-sm text-muted-foreground">Real Estate Investment</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">
              A privately held property investment firm dedicated to creating win-win real estate 
              solutions across Texas. We specialize in acquiring undervalued properties and 
              helping owners unlock their true value.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Twitter, link: "#" },
                { icon: Linkedin, link: "#" },
                { icon: Instagram, link: "#" }
              ].map(({ icon: Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon className="text-primary" size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Testimonials", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Direct Property Purchases</li>
              <li>Investor Partnerships</li>
              <li>Deal Structuring</li>
              <li>Rehab & Flip Support</li>
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/20">
          <div className="flex items-center gap-3">
            <Phone className="text-primary" size={20} />
            <span className="text-muted-foreground">Coming Soon!</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={20} />
            <span className="text-muted-foreground">info@texasinvestor.us</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-primary" size={20} />
            <span className="text-muted-foreground">San Antonio, Texas - USA</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-border/20">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nykson Capital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
