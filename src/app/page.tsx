import Hero from "@/app/components/Hero";
import DealSection from "./components/DealSection";
import AboutSection from "./components/AboutSection";
import TrustSection from "./components/TrustSection";
import ServicesSection from "./components/ServicesSection";
import ServiceAreasSection from "./components/ServiceAreasSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/BeforeAfterGallery";

export default function Home() {
  return (
    <main className="min-h-screen">
           <Hero />
          <TrustSection/>
          <ServicesSection/>
          <ServiceAreasSection/>
          <GallerySection/>
          <AboutSection/>
          <ContactSection/>
    </main>
  );
}
