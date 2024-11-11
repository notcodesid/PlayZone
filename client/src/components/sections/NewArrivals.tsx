import { motion } from 'framer-motion';
import { Tag, ShoppingCart } from 'lucide-react';

const newProducts = [
  {
    id: 1,
    name: "Pro Elite Running Shoes",
    price: 159.99,
    tag: "New Release",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Performance Shorts",
    price: 45.99,
    tag: "Just Arrived",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Training Resistance Band Set",
    price: 29.99,
    tag: "New Collection",
    image: "https://images.unsplash.com/photo-1598632640487-6ea4a5e8d6c0?auto=format&fit=crop&w=600&q=80"
  }
];

const NewArrivals = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-600">Latest additions to our collection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Tag className="w-4 h-4 mr-1" />
                    {product.tag}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-4 right-4 bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;