import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-real-estate.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 scale-105 animate-slow-zoom"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-28 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Sell Your <span className="text-primary">San Antonio Home</span> for Cash
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
          >
            Fast, fair, and stress-free. No repairs. No agent fees. No waiting months.
            Get your cash offer within 24 hours and close on your timeline.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-14"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-xl shadow-xl bg-gradient-to-r from-primary to-yellow-500 font-semibold hover:scale-105 transition transform text-neutral-950"
            >
              Get My Cash Offer Now
              <ArrowRight className="ml-2" size={20} />
            </Button>

            <Button
              size="lg"
              className="text-lg px-8 py-4 h-auto rounded-xl bg-white/10 text-white border border-white/30 hover:bg-white/20 hover:scale-105 transition transform flex items-center"
            >
              <Play className="mr-2" size={20} />
              Call (210) 555-CASH
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-10 text-white/80"
          >
            {[
              { value: "10+", label: "Years Buying Houses" },
              { value: "1,200+", label: "Houses Purchased" },
              { value: "7–14", label: "Days to Close" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center shadow-md mb-2">
                  <span className="text-xl font-bold text-primary">
                    {stat.value}
                  </span>
                </div>
                <span className="font-semibold">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
