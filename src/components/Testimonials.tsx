import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import testimonialImage from "@/assets/testimonial-male.jpg";

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
      name: "Michael Rodriguez",
      role: "Property Owner",
      image: testimonialImage,
      quote:
        "Selling my inherited property seemed impossible until I found Nykson Capital. They made me a fair cash offer and closed in just 10 days. No repairs, no hassles - exactly what I needed during a difficult time.",
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
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our Clients{" "}
            <span className="text-primary">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what sellers, investors,
            and partners have to say about working with Nykson Capital.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-lg bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-lg transition-all group"
            >
              {/* Quote Icon */}
              <Quote className="text-primary/30 mb-4" size={32} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={18} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border"
                />
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border"
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;