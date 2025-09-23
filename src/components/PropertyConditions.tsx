import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import distressedProperty1 from "@/assets/distressed-property-1.jpg";
import distressedProperty2 from "@/assets/distressed-property-2.jpg";
import distressedProperty3 from "@/assets/distressed-property-3.jpg";

const PropertyConditions = () => {
  const conditions = [
    "Fire Damaged Properties",
    "Water Damaged Homes",
    "Inherited Properties",
    "Foreclosure Properties",
    "Properties Needing Major Repairs",
    "Hoarding Situations",
    "Outdated Properties",
    "Properties with Foundation Issues",
    "Homes with Bad Tenants",
    "Divorce Properties",
    "Properties Behind on Taxes",
    "Any Condition - We Buy All!"
  ];

  const beforeAfterImages = [
    { before: distressedProperty1, title: "Water Damage Restoration" },
    { before: distressedProperty2, title: "Fire Damage Recovery" },
    { before: distressedProperty3, title: "Complete Renovation" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Buy Houses in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ANY Condition
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Don't worry about the condition of your property. We specialize in buying distressed properties 
            that other buyers won't touch. We see potential where others see problems.
          </p>
        </motion.div>

        {/* Property Examples */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {beforeAfterImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={image.before}
                  alt={image.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Before
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  We bought this property as-is and transformed it into a beautiful home.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conditions List */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Properties We Buy
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {conditions.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-center"
                >
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground font-medium">{condition}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-3xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Still Not Sure If We'll Buy Your House?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We've purchased over 1,200 properties in every imaginable condition. 
              From minor cosmetic issues to major structural problems - we buy them all. 
              The worst that can happen is we say "yes"!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Free property evaluation</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">No obligation cash offer</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-primary mr-3" />
                <span className="text-foreground">Close on your timeline</span>
              </div>
            </div>
            <Button className="w-full mt-6 text-lg py-6 rounded-xl bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform">
              Get My Cash Offer Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyConditions;