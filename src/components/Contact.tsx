import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative bg-background overflow-hidden">
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
            Ready to Buy, Sell, or{" "}
            <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent animate-text-gradient">
              Invest?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join the growing number of sellers, rehabbers, and investors who trust
            Nykson Capital to deliver real results. Get started today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-gradient-to-br from-background/90 to-background/70 border border-border/40 shadow-xl backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get Your Free Cash Offer
            </h3>
            <form className="space-y-6">
              {/* Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input placeholder="John" className="focus:ring-2 focus:ring-primary/60" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" className="focus:ring-2 focus:ring-primary/60" />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="john@example.com" className="focus:ring-2 focus:ring-primary/60" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input type="tel" placeholder="(210) 555-0123" className="focus:ring-2 focus:ring-primary/60" />
                </div>
              </div>

              {/* Property */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Address *
                </label>
                <Input placeholder="123 Main St, San Antonio, TX 78201" className="focus:ring-2 focus:ring-primary/60" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type
                </label>
                <select className="w-full h-11 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary/60">
                  <option value="">Select property type</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="multi-family">Multi-Family</option>
                  <option value="vacant-land">Vacant Land</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Details
                </label>
                <Textarea
                  placeholder="Tell us more about your property and situation..."
                  className="min-h-[120px] focus:ring-2 focus:ring-primary/60"
                />
              </div>

              <motion.div whileHover={{ scale: 1.03 }}>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full rounded-xl bg-gradient-to-r from-primary to-yellow-500 text-white shadow-lg hover:shadow-2xl transition"
                >
                  Get My Free Cash Offer
                </Button>
              </motion.div>

              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 24 hours with a fair, no-obligation offer.
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: <Phone className="text-primary" size={24} />,
                title: "Phone",
                text1: "Coming Soon",
                text2: "Call us anytime for immediate assistance",
              },
              {
                icon: <Mail className="text-primary" size={24} />,
                title: "Email",
                text1: "info@texasinvestor.us",
                text2: "We'll respond within 24 hours",
              },
              {
                icon: <MapPin className="text-primary" size={24} />,
                title: "Location",
                text1: "San Antonio, Texas",
                text2: "Serving San Antonio and surrounding areas",
              },
              {
                icon: <Clock className="text-primary" size={24} />,
                title: "Business Hours",
                text1: "Mon - Fri: 8:00 AM - 6:00 PM",
                text2: "Sat: 9:00 AM - 4:00 PM",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl bg-gradient-to-br from-background/90 to-background/70 border border-border/40 shadow-lg backdrop-blur-md flex items-start gap-4"
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
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl bg-gradient-to-br from-background/90 to-background/70 border border-border/40 shadow-lg backdrop-blur-md"
            >
              <h4 className="font-semibold text-foreground mb-4">Quick FAQ</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-foreground text-sm">How fast can you close?</p>
                  <p className="text-muted-foreground text-sm">In many cases, as quickly as 10–14 days.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Do I need to make repairs?</p>
                  <p className="text-muted-foreground text-sm">No! We buy properties as-is.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Any fees or commissions?</p>
                  <p className="text-muted-foreground text-sm">None. Our offer is what you get.</p>
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
