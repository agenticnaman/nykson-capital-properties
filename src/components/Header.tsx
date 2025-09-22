import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImage}
              alt="Nykson Capital"
              className="h-12 w-12 object-contain drop-shadow-md"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold tracking-wide text-foreground">
                Nykson Capital
              </span>
              <span className="text-sm text-muted-foreground">
                Real Estate Investment
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {["Home", "About", "Services", "Testimonials", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-foreground font-medium transition-colors hover:text-primary group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
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
            <Button
              size="lg"
              className="px-6 py-2 text-sm font-semibold tracking-wide rounded-xl bg-gradient-to-r from-primary to-yellow-500 text-white shadow-lg hover:opacity-90 transition"
            >
              Get Cash Offer
            </Button>
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
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden py-6 border-t border-border/40"
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
                    className="w-full rounded-xl bg-gradient-to-r from-primary to-yellow-500 text-white shadow-lg hover:opacity-90 transition"
                  >
                    Get Cash Offer
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
