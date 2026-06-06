import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductDetails from "@/components/ProductDetails";
import ViralCarousel from "@/components/ViralCarousel";
import BuySection from "@/components/BuySection";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-void pb-safe">
      <Header />
      <HeroSection />
      <ProductDetails />
      <ViralCarousel />
      <BuySection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
