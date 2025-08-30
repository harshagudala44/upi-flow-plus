import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Security } from "@/components/Security";
import { HowItWorks } from "@/components/HowItWorks";
import { Support } from "@/components/Support";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Security />
      <HowItWorks />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
