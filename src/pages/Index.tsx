import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import MenuSection from "@/components/MenuSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <MenuSection />
      <ReservationSection />
      <Footer />
      <FloatingBookButton />
    </main>
  );
};

export default Index;
