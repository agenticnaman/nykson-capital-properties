import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
            Ready to Buy, Sell, or{" "}
            <span className="text-gradient-primary">Invest?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the growing number of sellers, rehabbers, and investors who trust 
            Nykson Capital to deliver real results. Get started today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-premium p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get Your Free Cash Offer
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input type="tel" placeholder="(210) 555-0123" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Address *
                </label>
                <Input placeholder="123 Main St, San Antonio, TX 78201" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Property Type
                </label>
                <select className="w-full h-10 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
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
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Get My Free Cash Offer
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll contact you within 24 hours with a fair, no-obligation offer.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground mb-1">(210) 555-0123</p>
                  <p className="text-sm text-muted-foreground">Call us anytime for immediate assistance</p>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground mb-1">info@nyksoncapital.com</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground mb-1">San Antonio, Texas</p>
                  <p className="text-sm text-muted-foreground">Serving San Antonio and surrounding areas</p>
                </div>
              </div>
            </div>

            <div className="card-premium p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                  <p className="text-muted-foreground mb-1">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground mb-1">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-sm text-muted-foreground">Emergency calls accepted 24/7</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="card-premium p-6">
              <h4 className="font-semibold text-foreground mb-4">Quick FAQ</h4>
              <div className="space-y-3">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;