import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["Home", "About", "Services", "Testimonials", "Contact"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm h-16" : "bg-background/90 h-20"
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 transition-opacity"
          >
            <img
              src={logoImage}
              alt="Nykson Capital"
              className={`object-contain drop-shadow-sm transition-all ${
                scrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-semibold tracking-wide text-foreground transition-all ${
                scrolled ? "text-base" : "text-lg"
              }`}>
                Nykson Capital
              </span>
              <span className="text-xs text-muted-foreground">
                Real Estate Firm
              </span>
            </div>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-accent/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-row items-center justify-center h-full gap-10">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 transition-opacity"
          >
            <img
              src={logoImage}
              alt="Nykson Capital"
              className="h-12 w-12 object-contain drop-shadow-sm"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold tracking-wide text-foreground">
                Nykson Capital
              </span>
              <span className="text-sm text-muted-foreground">
                Real Estate Firm
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative text-foreground font-medium tracking-wide hover:text-primary transition-colors group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="flex items-center space-x-5">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all"
            >
              <Phone size={16} />
              Coming Soon
            </Button>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                size="lg"
                className="px-6 py-2 text-sm font-semibold tracking-wide rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
              >
                Get Cash Offer
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 py-6 border-t border-border/40 bg-background/95 shadow-lg rounded-b-2xl"
            >
              <nav className="flex flex-col space-y-5 text-lg font-medium items-center text-center">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-5 border-t border-border/40 w-full flex flex-col items-center gap-3">
                  <Button
                    variant="ghost"
                    size="default"
                    className="w-11/12 rounded-xl text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all"
                  >
                    <Phone size={16} />
                    Coming Soon
                  </Button>
                  <Button
                    size="lg"
                    className="w-11/12 rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
                  >
                    Get Cash Offer
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
