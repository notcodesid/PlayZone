import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ArrowRight } from 'lucide-react';

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    discount: "30% OFF",
    category: "Running Gear",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    endDate: "2024-07-31"
  },
  {
    id: 2,
    title: "New Season",
    discount: "20% OFF",
    category: "Training Equipment",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    endDate: "2024-08-15"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
          <p className="text-gray-400">Limited time deals on premium gear</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Timer className="w-4 h-4 mr-1" />
                    Limited Time
                  </span>
                  <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-300 mb-2">{offer.category}</p>
                  <p className="text-4xl font-bold text-blue-400">{offer.discount}</p>
                </div>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-white group/btn"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;