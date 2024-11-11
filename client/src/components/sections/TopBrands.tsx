import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    products: "2.5k+ Products"
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?auto=format&fit=crop&w=600&q=80",
    products: "2k+ Products"
  },
  {
    id: 3,
    name: "Under Armour",
    logo: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80",
    products: "1.8k+ Products"
  },
  {
    id: 4,
    name: "Puma",
    logo: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80",
    products: "1.5k+ Products"
  }
];

const TopBrands = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Top Brands</h2>
          <p className="text-gray-600">Shop your favorite sports brands</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-500">{brand.products}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;