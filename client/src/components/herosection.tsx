import React from 'react';
import { ArrowRight, Award, Trophy, Target, Users, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const products = [
  {
    name: "Pro Runner",
    price: 180,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Elite Ball",
    price: 75,
    image: "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Training Kit",
    price: 120,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pro Gear",
    price: 200,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=80",
  }
];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className="text-sm text-gray-600">Performance is a lifestyle</p>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              GEAR UP FOR
              <br />
              GREATNESS
            </h1>

            <p className="text-gray-600 mb-8 max-w-md">
              Elevate your game with cutting-edge sportswear engineered for peak performance. 
              Every athlete. Every sport. Every victory.
            </p>

           

            <div className="flex space-x-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition"
              >
                View Collection
              </motion.button>
            </div>
          </div>

          {/* Right Column - Product Carousel */}
          <div className="md:col-span-5 relative h-[500px]">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full flex flex-col justify-center">
                  <motion.img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover rounded-xl mb-4 hover:shadow-2xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-blue-600 text-lg">${product.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats with CountUp Animation */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10  gap-8 border-t pt-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl font-bold">
              <CountUp end={50} duration={2} suffix="+" />
            </h3>
            <p className="text-gray-600">Sports Categories</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-600">Expert Support</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl font-bold">
              <CountUp end={100} duration={2} suffix="k+" />
            </h3>
            <p className="text-gray-600">Happy Athletes</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl font-bold">
              <CountUp end={95} duration={2} suffix="%" />
            </h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;