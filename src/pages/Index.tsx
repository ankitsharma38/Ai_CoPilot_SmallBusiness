import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedTools from "@/components/FeaturedTools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedTools />
    </div>
  );
};

export default Index;
