import { Button } from "@/components/ui/button";
import { CheckCircle, Award, TrendingUp } from "lucide-react";
import partnershipImage from "@/assets/partnership-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <span className="text-primary font-semibold text-lg">
              About Nykson Capital
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              More Than Investors — We're{" "}
              <span className="text-primary">Problem Solvers</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Our mission is to help property owners find fast, fair solutions
              while connecting investors with profitable opportunities. Founded
              with integrity and guided by professionalism, we've built a system
              that benefits every side of the transaction.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Fast & Fair Solutions",
                  description: "Close in days, not months, with transparent pricing",
                },
                {
                  icon: CheckCircle,
                  title: "Win-Win Approach",
                  description: "Every transaction benefits all parties involved",
                },
                {
                  icon: CheckCircle,
                  title: "Professional Network",
                  description: "Connected with trusted investors, builders, and rehabbers",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-xl bg-card shadow-md hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  <item.icon className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="px-6 py-3 rounded-xl text-sm font-semibold shadow-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Learn More About Our Process
            </Button>
          </div>

          {/* Image & Stats */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={partnershipImage}
              alt="Professional partnership in real estate"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />

            {/* Floating Stats Cards */}
            <div className="absolute -top-8 -left-8 p-4 w-32 bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Award className="text-primary" size={24} />
                <div>
                  <div className="text-2xl font-bold text-foreground">A+</div>
                  <div className="text-xs text-muted-foreground">BBB Rating</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 p-4 w-36 bg-white/90 backdrop-blur-md rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-primary" size={24} />
                <div>
                  <div className="text-2xl font-bold text-foreground">$50M+</div>
                  <div className="text-xs text-muted-foreground">
                    Properties Sold
                  </div>
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
