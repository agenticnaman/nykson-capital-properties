import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm h-16" : "bg-background/90 h-20"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src={logoImage}
              alt="Nykson Capital"
              className="h-12 w-12 object-contain drop-shadow-md"
            />
            <a href="#home" className="flex flex-col leading-tight hover:opacity-80 transition-opacity">
              <span className="text-xl font-semibold tracking-wide text-foreground">
                Nykson Capital
              </span>
              <span className="text-sm text-muted-foreground">
                Real Estate Firm
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "About", "Services", "Testimonials", "Contact"].map(
              (item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative text-foreground font-medium transition-colors hover:text-primary group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition"
            >
              <Phone size={16} />
              Coming Soon
            </Button>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                size="lg"
                className="px-6 py-2 text-sm font-semibold tracking-wide rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-button)] hover:bg-primary/90 transition-all"
              >
                Get Cash Offer
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-6 border-t border-border/40 bg-background/95 shadow-lg rounded-b-2xl"
            >
              <nav className="flex flex-col space-y-5 text-lg font-medium">
                {["Home", "About", "Services", "Testimonials", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
                <div className="pt-5 border-t border-border/40">
                  <Button
                    size="lg"
                    className="w-full rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-button)] hover:bg-primary/90 transition-all"
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
};

export default Header;
