import React, { useState } from 'react';
import { Search, Heart, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchPopup from './searchpopup';

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories: Record<string, string[]> = {
    Training: ["Gym Equipment", "Weights", "Resistance Bands", "Yoga Mats", "Exercise Bikes", "Treadmills", "Kettlebells", "Dumbbells"],
    Running: ["Running Shoes", "Track Suits", "Water Bottles", "Accessories", "Compression Wear", "Headbands", "Socks", "GPS Watches"],
    Basketball: ["Basketballs", "Shoes", "Jerseys", "Protective Gear", "Hoops", "Basketball Bags", "Training Gear"],
    Football: ["Football Shoes", "Jerseys", "Protective Gear", "Accessories", "Goalkeeper Gloves", "Shin Guards", "Training Cones", "Footballs"],
    Tennis: ["Tennis Rackets", "Balls", "Shoes", "Apparel", "Headbands", "Wristbands", "Racket Bags"],
    Swimming: ["Swimwear", "Goggles", "Swim Caps", "Training Gear", "Flippers", "Kickboards"],
    Sale: ["Discounted Shoes", "Clearance Apparel", "Equipment Sale", "End of Season Deals", "Last Chance Items"],
  };

  return (
    <>
      <nav className="py-4 px-6 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold tracking-tight text-gray-800"
          >
            PlayZone.
          </motion.div>
          
          {/* Navigation Links with Dropdowns */}
          <div className="hidden md:flex space-x-8 relative">
            {Object.keys(categories).map((category, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(category)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a 
                  href="#"
                  className="hover:text-blue-600" 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {category}
                </motion.a>
                
                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === category && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-56 bg-white shadow-lgd rounded-md p-4 space-y-2 z-10"
                    >
                      {categories[category].map((subCategory, subIndex) => (
                        <a 
                          key={subIndex}
                          href="#"
                          className="block text-gray-700 hover:text-blue-600"
                        >
                          {subCategory}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer hover:text-blue-600">
              <Heart className="w-5 h-5" />
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }} 
              className="relative cursor-pointer hover:text-blue-600"
            >
              <ShoppingCart className="w-5 h-5" />
              <motion.span
                className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                0
              </motion.span>
            </motion.div>
          </div>
        </div>
      </nav>

      <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;