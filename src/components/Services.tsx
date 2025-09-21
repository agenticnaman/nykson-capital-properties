import { Button } from "@/components/ui/button";
import { Home, Handshake, FileText, Hammer, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Direct Property Purchases",
      description: "We buy land and houses below market value for cash, offering sellers speed and certainty.",
      features: ["Cash offers within 24 hours", "No repairs needed", "Close in 10-14 days", "No fees or commissions"]
    },
    {
      icon: <Handshake size={32} />,
      title: "Investor Partnerships",
      description: "Builders, rehabbers, and fix-and-flippers rely on us to bring them consistent deals that fit their exact criteria.",
      features: ["Curated deal flow", "Pre-vetted properties", "Flexible terms", "Ongoing relationship"]
    },
    {
      icon: <FileText size={32} />,
      title: "Deal Structuring & Wholesaling",
      description: "With our contracts and buyer network, we create seamless assignments that generate value for all parties.",
      features: ["Professional contracts", "Established buyer network", "Quick turnaround", "Transparent process"]
    },
    {
      icon: <Hammer size={32} />,
      title: "Rehab & Flip Support",
      description: "We connect rehabbers with distressed properties and help them maximize ROI through profitable exits.",
      features: ["Distressed property sourcing", "ROI analysis", "Exit strategy planning", "Market insights"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Comprehensive Real Estate{" "}
            <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're selling, buying, or investing, we have the expertise and network 
            to make your real estate goals a reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-premium p-8 group cursor-pointer">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="text-primary hover:text-primary group p-0">
                Learn More 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center card-premium p-12 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing number of sellers, rehabbers, and investors who trust 
            Nykson Capital to deliver real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Your Free Cash Offer
            </Button>
            <Button variant="premium" size="lg">
              Explore Investment Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;