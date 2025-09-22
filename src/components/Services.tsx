import { Button } from "@/components/ui/button";
import { Home, Handshake, FileText, Hammer, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: "Direct Property Purchases",
      description:
        "We buy land and houses below market value for cash, offering sellers speed and certainty.",
      features: [
        "Cash offers within 24 hours",
        "No repairs needed",
        "Close in 10-14 days",
        "No fees or commissions",
      ],
    },
    {
      icon: <Handshake size={40} />,
      title: "Investor Partnerships",
      description:
        "Builders, rehabbers, and fix-and-flippers rely on us to bring them consistent deals that fit their exact criteria.",
      features: [
        "Curated deal flow",
        "Pre-vetted properties",
        "Flexible terms",
        "Ongoing relationship",
      ],
    },
    {
      icon: <FileText size={40} />,
      title: "Deal Structuring & Wholesaling",
      description:
        "With our contracts and buyer network, we create seamless assignments that generate value for all parties.",
      features: [
        "Professional contracts",
        "Established buyer network",
        "Quick turnaround",
        "Transparent process",
      ],
    },
    {
      icon: <Hammer size={40} />,
      title: "Rehab & Flip Support",
      description:
        "We connect rehabbers with distressed properties and help them maximize ROI through profitable exits.",
      features: [
        "Distressed property sourcing",
        "ROI analysis",
        "Exit strategy planning",
        "Market insights",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-lg tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
            Comprehensive Real Estate{" "}
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're selling, buying, or investing, we have the expertise and network 
            to make your real estate goals a reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 border border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 backdrop-blur-md"
            >
              <div className="text-primary mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-gradient-to-r from-primary to-yellow-500 rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="text-primary hover:text-primary px-0 font-medium"
              >
                Learn More
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  size={18}
                />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center rounded-2xl p-12 bg-gradient-to-r from-primary/10 via-primary/5 to-yellow-500/10 border border-primary/20 shadow-lg backdrop-blur-md"
        >
          <h3 className="text-3xl font-extrabold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing number of sellers, rehabbers, and investors who trust 
            Nykson Capital to deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="px-8 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-primary to-yellow-500 shadow-lg hover:shadow-xl transition"
            >
              Get Your Free Cash Offer
            </Button>
            <Button
              size="lg"
              className="px-8 py-3 rounded-xl font-semibold bg-gradient-to-r from-foreground to-muted text-background shadow-lg hover:shadow-xl transition"
            >
              Explore Investment Opportunities
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
