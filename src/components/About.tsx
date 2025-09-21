import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import partnershipImage from "@/assets/partnership-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-primary font-semibold text-lg">About Nykson Capital</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                More Than Investors — We're{" "}
                <span className="text-gradient-primary">Problem Solvers</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our mission is to help property owners find fast, fair solutions while connecting 
                investors with profitable opportunities. Founded with integrity and guided by 
                professionalism, we've built a system that benefits every side of the transaction.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fast & Fair Solutions</h4>
                  <p className="text-muted-foreground">Close in days, not months, with transparent pricing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Win-Win Approach</h4>
                  <p className="text-muted-foreground">Every transaction benefits all parties involved</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Professional Network</h4>
                  <p className="text-muted-foreground">Connected with trusted investors, builders, and rehabbers</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg">
              Learn More About Our Process
            </Button>
          </div>

          {/* Image & Stats */}
          <div className="relative">
            <img 
              src={partnershipImage} 
              alt="Professional partnership in real estate"
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full"
            />
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 card-premium p-4 w-32">
              <div className="flex items-center gap-2">
                <Award className="text-primary" size={24} />
                <div>
                  <div className="text-2xl font-bold text-foreground">A+</div>
                  <div className="text-xs text-muted-foreground">BBB Rating</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 card-premium p-4 w-36">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-primary" size={24} />
                <div>
                  <div className="text-2xl font-bold text-foreground">$50M+</div>
                  <div className="text-xs text-muted-foreground">Properties Sold</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 card-premium p-4 w-32">
              <div className="flex items-center gap-2">
                <Users className="text-primary" size={24} />
                <div>
                  <div className="text-2xl font-bold text-foreground">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfied Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;