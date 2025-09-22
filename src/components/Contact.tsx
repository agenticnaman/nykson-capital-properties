import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cash Offer Today
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fill out the form below or call us directly. We'll provide you with a fair, 
            no-obligation cash offer for your property within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 rounded-3xl border border-border shadow-xl"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Tell Us About Your Property
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    className="h-12 rounded-xl border-border focus:border-primary transition-colors"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    placeholder="(210) 555-0123"
                    className="h-12 rounded-xl border-border focus:border-primary transition-colors"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-12 rounded-xl border-border focus:border-primary transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Property Address *
                </label>
                <Input
                  placeholder="123 Main St, San Antonio, TX 78201"
                  className="h-12 rounded-xl border-border focus:border-primary transition-colors"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Property Condition
                </label>
                <select className="w-full h-12 rounded-xl border border-border bg-background px-4 focus:border-primary transition-colors">
                  <option value="">Select condition</option>
                  <option value="excellent">Excellent - Move-in ready</option>
                  <option value="good">Good - Minor repairs needed</option>
                  <option value="fair">Fair - Some repairs needed</option>
                  <option value="poor">Poor - Major repairs needed</option>
                  <option value="distressed">Distressed - Significant damage</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Additional Details
                </label>
                <Textarea
                  placeholder="Tell us about your timeline, any issues with the property, or other details that might help us provide the best offer..."
                  className="rounded-xl border-border focus:border-primary transition-colors resize-none"
                  rows={4}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                >
                  Get My Cash Offer Now
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <p className="text-sm text-muted-foreground text-center mt-3">
                  ✓ No obligation ✓ Free evaluation ✓ Response within 24 hours
                </p>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need to Sell Fast?
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Call us now for an immediate cash offer over the phone.
              </p>
              <Button
                size="lg"
                className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-secondary to-primary hover:scale-105 transition-transform"
              >
                <Phone className="mr-2" size={20} />
                Call (210) 555-CASH
              </Button>
            </div>

            {/* Contact Details */}
            {[
              {
                icon: <Phone className="text-primary" size={24} />,
                title: "Phone",
                text1: "(210) 555-CASH",
                text2: "Available 7 days a week",
              },
              {
                icon: <Mail className="text-primary" size={24} />,
                title: "Email",
                text1: "info@nyksoncapital.com",
                text2: "We respond within 2 hours",
              },
              {
                icon: <MapPin className="text-primary" size={24} />,
                title: "Service Area",
                text1: "San Antonio & Surrounding Areas",
                text2: "We buy houses throughout South Texas",
              },
              {
                icon: <Clock className="text-primary" size={24} />,
                title: "Response Time",
                text1: "Cash Offers in 24 Hours",
                text2: "Close in 7-14 days",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 rounded-xl bg-card border border-border shadow-lg flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-1">{item.text1}</p>
                  <p className="text-sm text-muted-foreground">{item.text2}</p>
                </div>
              </motion.div>
            ))}

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="p-6 rounded-xl bg-card border border-border shadow-lg"
            >
              <h4 className="font-semibold text-foreground mb-4">Common Questions</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground text-sm">How fast can you close?</p>
                  <p className="text-muted-foreground text-sm">We can close in as little as 7 days, or on your timeline.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Do I need to make repairs?</p>
                  <p className="text-muted-foreground text-sm">No! We buy houses as-is, in any condition.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Any fees or commissions?</p>
                  <p className="text-muted-foreground text-sm">Zero fees. Our cash offer is exactly what you get.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">What if my house needs major work?</p>
                  <p className="text-muted-foreground text-sm">Perfect! We specialize in distressed properties.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;