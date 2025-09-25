<div className="container mx-auto px-4 h-full flex items-center">
  {/* Mobile Layout */}
  <div className="flex md:hidden items-center justify-between w-full h-full">
    {/* Logo */}
    <motion.a
      href="#home"
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2 transition-opacity h-full"
    >
      <img
        src={logoImage}
        alt="Nykson Capital"
        className={`object-contain drop-shadow-sm transition-all ${
          scrolled ? "h-8 w-8" : "h-10 w-10"
        }`}
      />
      <div className="flex flex-col leading-tight justify-center h-full">
        <span
          className={`font-semibold tracking-wide text-foreground transition-all ${
            scrolled ? "text-base" : "text-lg"
          }`}
        >
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
      className="p-2 rounded-lg hover:bg-accent/10 transition-colors flex items-center justify-center h-full"
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
      className="flex items-center space-x-3 transition-opacity h-full"
    >
      <img
        src={logoImage}
        alt="Nykson Capital"
        className="h-12 w-12 object-contain drop-shadow-sm"
      />
      <div className="flex flex-col leading-tight justify-center h-full">
        <span className="text-xl font-semibold tracking-wide text-foreground">
          Nykson Capital
        </span>
        <span className="text-sm text-muted-foreground">
          Real Estate Firm
        </span>
      </div>
    </motion.a>

    {/* Desktop Navigation */}
    <nav className="flex items-center h-full space-x-8">
      {NAV_ITEMS.map((item, i) => (
        <motion.a
          key={item}
          href={`#${item.toLowerCase()}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="relative text-foreground font-medium tracking-wide hover:text-primary transition-colors group flex items-center h-full"
        >
          {item}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
      ))}
    </nav>

    {/* Desktop CTA Buttons */}
    <div className="flex items-center space-x-5 h-full">
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
</div>
