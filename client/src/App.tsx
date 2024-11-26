import Navbar from "./components/navbar"; 
import Hero from "./components/herosection"; 
import FeaturedProducts from "./components/sections/featuredproducts"; 
import Categories from "./components/sections/categories"; 
import TestimonialsAthletes from "./components/TestimonialsAthletes";
import SpecialOffers from "./components/sections/SpecialOffers";
import NewArrivals from "./components/sections/NewArrivals";
import TopBrands from "./components/sections/TopBrands";
import Newsletter from "./components/sections/Newsletter";
import SocialGallery from "./components/sections/SpecialOffers";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Categories />
      <SpecialOffers />
      <NewArrivals />
      <TopBrands />
      <SocialGallery />
      <TestimonialsAthletes />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;