import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "@/assets/nykson-logo.png";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["Home", "About", "Services", "Testimonials", "Contact"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink header on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    if (isMenuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  // Prevent body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-sm h-16" : "bg-background/90 h-20"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Row: use relative so we can absolutely place left & right sections and keep brand centered */}
        <div className="relative h-full flex items-center justify-center">
          {/* LEFT (desktop) - nav placed absolutely so center remains perfectly centered */}
          <div className="absolute left-0 inset-y-0 flex items-center pl-2 md:pl-0">
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-foreground font-medium tracking-wide hover:text-primary transition-colors group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* CENTER - Brand (always centered) */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.03 }}
            className="flex items-center space-x-3 transition-opacity"
            aria-label="Nykson Capital"
          >
            {/* On very small screens we show the icon only to keep the brand visually centered & compact */}
            <img
              src={logoImage}
              alt="Nykson Capital"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-sm"
            />

            <div className="hidden sm:flex flex-col leading-tight text-center">
              <span className="text-lg sm:text-xl font-semibold tracking-wide text-foreground">
                Nykson Capital
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">Real Estate Firm</span>
            </div>
          </motion.a>

          {/* RIGHT - Desktop CTAs & mobile menu button (absolute so center stays centered) */}
          <div className="absolute right-0 inset-y-0 flex items-center pr-2 md:pr-0">
            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center space-x-5">
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

            {/* Mobile menu button (keeps header visually balanced) */}
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="md:hidden p-2 rounded-lg hover:bg-accent/10 transition-colors ml-2"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU - centered column with full-width CTAs (closes on link click) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.995 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden mt-2 py-6 border-t border-border/40 bg-background/95 shadow-lg rounded-b-2xl"
            >
              <nav className="flex flex-col space-y-4 text-lg font-medium items-center px-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full text-center text-foreground px-2 py-2 rounded-md hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}

                <div className="w-full pt-4 border-t border-border/40 flex flex-col items-center gap-3">
                  <Button
                    variant="ghost"
                    size="md"
                    className="w-11/12 rounded-xl text-muted-foreground hover:text-primary hover:bg-accent/10 transition-all"
                  >
                    <Phone size={16} />
                    Coming Soon
                  </Button>

                  <Button
                    size="lg"
                    className="w-11/12 rounded-xl bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-all"
                    onClick={() => setIsMenuOpen(false)}
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
