import { Button } from "@/components/ui/button";
import { DollarSign, Clock, Home, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Cash for Houses - Any Condition",
      description: "We buy houses in any condition with cash. No repairs, no cleaning, no staging required.",
      features: [
        "Instant cash offers within 24 hours",
        "Buy houses as-is in any condition",
        "No realtor fees or commissions",
        "Handle all paperwork and closing costs"
      ]
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Fast Closings - Your Timeline",
      description: "Close on your schedule. Whether you need to sell in 7 days or 60 days, we work with your timeline.",
      features: [
        "Close in as little as 7 days",
        "Flexible closing dates to fit your needs",
        "No waiting for bank approvals",
        "Cash in hand at closing"
      ]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Problem Properties Welcome",
      description: "Fire damage, water damage, foundation issues, or hoarding situations - we buy them all.",
      features: [
        "Fire and water damaged properties",
        "Inherited properties you don't want",
        "Properties in foreclosure",
        "Houses needing major repairs"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Fair Market Value Offers",
      description: "Our offers are based on current market conditions and your property's potential value.",
      features: [
        "Professional property evaluations",
        "Transparent offer calculations",
        "Local market expertise",
        "No lowball offers - fair deals only"
      ]
    }
  ];

  return (
    <section
      id="services"
      className="py-28 relative overflow-hidden bg-background"
    >
      {/* Subtle glowing gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-yellow-500/5 blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-lg tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
            How We Help{" "}
            <span className="animate-text-gradient bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent">
              Homeowners Sell Fast
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in buying houses directly from homeowners. No agents, no repairs, no hassle.
            Just fast, fair cash offers for your property.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl relative group bg-gradient-to-br from-background/90 to-background/70 border border-border/40 shadow-xl backdrop-blur-lg hover:shadow-2xl transition-all"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-yellow-500/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.div whileHover={{ x: 5 }}>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary px-0 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl p-14 bg-gradient-to-r from-primary/10 via-primary/5 to-yellow-500/10 border border-primary/20 shadow-xl backdrop-blur-lg relative overflow-hidden"
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-yellow-500/20 to-primary/20 blur-2xl opacity-40 animate-pulse" />

          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 relative z-10">
            Ready to Sell Your House Fast?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Get your no-obligation cash offer today. Join thousands of homeowners who chose the fast, easy way to sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                className="px-10 py-4 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-yellow-500 shadow-xl hover:shadow-2xl transition"
              >
                Get My Cash Offer Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition"
              >
                Call (210) 555-CASH
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;