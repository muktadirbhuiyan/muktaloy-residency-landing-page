import { AboutSection } from "@/components/about-section";
import { ApartmentSection } from "@/components/apartment-section";
import { ContactSection } from "@/components/contact-section";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Hero } from "@/components/hero";
import { LocationSection } from "@/components/location-section";
import { Navbar } from "@/components/navbar";
import { UnitsSection } from "@/components/units-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ApartmentSection />
      <UnitsSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
