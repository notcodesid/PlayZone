import Navbar from "./components/navbar"; 
import Hero from "./components/herosection"; 
import FeaturedProducts from "./components/sections/featuredproducts"; 
import Categories from "./components/sections/categories"; 
import TestimonialsAthletes from "./components/TestimonialsAthletes";
import SpecialOffers from "./components/sections/SpecialOffers";
import NewArrivals from "./components/sections/NewArrivals";
import TopBrands from "./components/sections/TopBrands";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <SpecialOffers />
      <FeaturedProducts />
      <Categories />
      <NewArrivals />
      <TopBrands />
      <TestimonialsAthletes />
    </div>
  );
}

export default App;