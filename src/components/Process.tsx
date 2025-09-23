import { motion } from "framer-motion";
import { Phone, FileText, HandCoins, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const Process = () => {
  const steps = [{
    icon: <Phone className="w-8 h-8" />,
    title: "Submit Property Info",
    description: "Tell us about your property through our simple form or give us a call. It takes less than 2 minutes.",
    timeline: "2 Minutes",
    details: ["Property address", "Basic condition info", "Your contact details", "Preferred timeline"]
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: "Get Your Cash Offer",
    description: "We'll evaluate your property and present you with a fair, no-obligation cash offer within 24 hours.",
    timeline: "24 Hours",
    details: ["Professional property evaluation", "Market analysis", "Fair cash offer", "No obligation to accept"]
  }, {
    icon: <HandCoins className="w-8 h-8" />,
    title: "Close Fast & Get Paid",
    description: "Accept our offer and choose your closing date. We handle all the paperwork and you get cash in hand.",
    timeline: "7-14 Days",
    details: ["Choose your closing date", "We handle all paperwork", "No repair requirements", "Cash in your hands"]
  }];
  return <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Simple{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-gray-950">
              3-Step Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selling your house has never been easier. No showings, no repairs, no hassle. 
            Just three simple steps to cash in your pocket.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2,
            duration: 0.6
          }} className="relative">
                {/* Connecting Arrow */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>}

                <div className="bg-card p-8 rounded-3xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-6">
                    {index + 1}
                  </div>

                  {/* Timeline Badge */}
                  <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {step.timeline}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>)}
                  </ul>
                </div>
              </motion.div>)}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.4,
        duration: 0.8
      }} className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied homeowners who chose the fast, easy way to sell their house.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform">
                Start My Cash Offer Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl">
                Call (210) 555-CASH
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ No obligation ✓ Free evaluation ✓ Fair offers ✓ Fast closing
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Process;