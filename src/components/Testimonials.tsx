import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mark Thompson",
      role: "Rehab Investor",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      quote:
        "Working with Nykson Capital was seamless. They handled everything and brought me a deal that fit my exact criteria. Closed without hassle.",
      rating: 5,
    },
    {
      name: "Sarah Lopez",
      role: "Property Seller",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      quote:
        "I needed to sell fast, and they came through. Straightforward, honest, and professional. Highly recommend to anyone looking to sell quickly.",
      rating: 5,
    },
    {
      name: "David Rodriguez",
      role: "Real Estate Investor",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      quote:
        "The team at Nykson Capital understands the investment game. They consistently deliver quality deals and make the whole process transparent.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-28 relative bg-background overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-yellow-500/10 to-primary/5 blur-3xl opacity-40" />

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
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent animate-text-gradient">
              Say About Us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here’s what sellers, investors,
            and partners have to say about working with Nykson Capital.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl relative bg-gradient-to-br from-background/90 to-background/70 border border-border/40 shadow-lg hover:shadow-2xl backdrop-blur-lg transition-all group"
            >
              {/* Glow Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-yellow-500/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-primary/20" size={32} />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="text-yellow-400 fill-current" size={20} />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  “{testimonial.quote}”
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-primary/30"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-16 border-t border-border/40"
        >
          {[
            { value: "500+", label: "Properties Sold" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "14", label: "Day Average Close" },
            { value: "$50M+", label: "Total Volume" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
