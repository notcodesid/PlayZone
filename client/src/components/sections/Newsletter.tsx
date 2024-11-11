import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">Stay in the Game</h2>
          <p className="text-blue-100">Subscribe for exclusive offers and updates</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center"
            >
              Subscribe
              <Send className="w-4 h-4 ml-2" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Newsletter;