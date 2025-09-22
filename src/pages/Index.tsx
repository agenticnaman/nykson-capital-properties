import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySellToUs from "@/components/WhySellToUs";
import PropertyConditions from "@/components/PropertyConditions";
import Process from "@/components/Process";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhySellToUs />
        <PropertyConditions />
        <Process />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
