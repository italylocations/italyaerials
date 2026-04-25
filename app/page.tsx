import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReferencesSection from "@/components/sections/ReferencesSection";
import CtaSection from "@/components/sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ReferencesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
