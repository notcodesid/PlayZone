import BrandsShowcase from "./components/BrandsShowcase";
import Footer from "./components/Footer";
import GlobalBrands from "./components/GlobalBrands";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SeasonalDeals from "./components/SeasonalDeals";
import SpecialOffers from "./components/SpecialOffers";
import Testimonials from "./components/Testimonials";
import TrendingProducts from "./components/TrendingProducts";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-white">
    <Navbar />
    <main>
      <Hero />
      <TrendingProducts />
      <BrandsShowcase />
      <SeasonalDeals />
      <GlobalBrands />
      <SpecialOffers />
      <Testimonials />
    </main>
    <Footer />
    <Toaster />
  </div>
  );
}

export default App;