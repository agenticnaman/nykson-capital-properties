import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turning Properties Into{" "}
            <span className="text-gradient-primary">Profitable Opportunities</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            We partner with motivated sellers, investors, and rehabbers to create win-win solutions 
            in San Antonio and beyond. Fast, transparent, and professional — that's how real estate should be.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Get Your Free Cash Offer Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button variant="premium" size="lg" className="text-lg px-8 py-4 h-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Play className="mr-2" size={20} />
              Watch Our Process
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">10+</span>
              </div>
              <span className="font-semibold">Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">500+</span>
              </div>
              <span className="font-semibold">Properties Sold</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">14</span>
              </div>
              <span className="font-semibold">Day Average Close</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;