import { Check, Home, Clock, DollarSign, UserCheck, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";

const WhySellToUs = () => {
  const benefits = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Sell Your Home As-Is",
      description: "No need for repairs, cleaning, or staging. We buy houses in any condition."
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Simple Sales Process",
      description: "Skip the hassle of showings, open houses, and dealing with multiple buyers."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Close When You Want",
      description: "We work on your timeline. Close in as little as 7 days or pick your date."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Cash Offer",
      description: "Fair market value offers based on current condition and local market data."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "No Agent Commissions or Fees",
      description: "Keep more money in your pocket. No hidden fees, commissions, or closing costs."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "No Need to Clean",
      description: "Leave everything behind. We handle all cleanup and removal of unwanted items."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Thousands Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nykson Capital
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make selling your house simple, fast, and profitable. No matter the condition or situation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">
                100% No-Obligation Cash Offers
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Get your fair cash offer in 24 hours. No pressure, no obligation. 
              If you don't love our offer, simply walk away.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySellToUs;