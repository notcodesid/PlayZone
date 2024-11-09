import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Training Gear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
    items: "268 items"
  },
  {
    id: 2,
    name: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    items: "432 items"
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=600&q=80",
    items: "158 items"
  },
  {
    id: 4,
    name: "Apparel",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80",
    items: "386 items"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600">Find the perfect gear for your sport</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 z-10" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-200">
                      {category.items}
                    </span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-900" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;