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
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            We Buy Houses for Cash in{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent animate-text-gradient">
              San Antonio — Any Condition!
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl leading-relaxed"
          >
            Sell your house fast! No repairs, no agent fees, no waiting months
            for a buyer. We buy distressed properties, inherited homes, and
            houses in any condition. Get your fair cash offer in 24 hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
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
            className="flex flex-wrap items-center gap-10 text-white/80"
          >
            {[
              { value: "10+", label: "Years Buying Houses" },
              { value: "1,200+", label: "Houses Purchased" },
              { value: "7–14", label: "Days to Close" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-2xl font-bold text-primary">
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
