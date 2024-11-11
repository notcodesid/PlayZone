import Navbar from "./components/navbar"; 
import Hero from "./components/herosection"; 
import FeaturedProducts from "./components/sections/featuredproducts"; 
import Categories from "./components/sections/categories"; 
import TestimonialsAthletes from "./components/TestimonialsAthletes";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <TestimonialsAthletes />
    </div>
  );
}

export default App;