import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
          >
            {/* Search Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="w-full max-w-2xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 text-xl outline-none placeholder:text-gray-400"
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">Popular Searches</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Running Shoes', 'Basketball', 'Training Gear', 'Football Boots', 'Gym Equipment'].map((term) => (
                      <motion.button
                        key={term}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        {term}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Searches */}
              <div className="border-t mt-4">
                <div className="p-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Recent Searches</h3>
                  <div className="space-y-3">
                    {['Nike Air Zoom', 'Yoga Mat', 'Protein Powder'].map((search, index) => (
                      <motion.div
                        key={search}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 p-2 rounded-lg cursor-pointer"
                      >
                        <Search className="w-4 h-4" />
                        <span>{search}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchPopup;