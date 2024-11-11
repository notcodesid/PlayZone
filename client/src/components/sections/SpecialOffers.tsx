import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    likes: "2.5k"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80",
    likes: "1.8k"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=600&q=80",
    likes: "3.2k"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=600&q=80",
    likes: "2.1k"
  }
];

const SocialGallery = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Follow Us @PlayZone</h2>
          <p className="text-gray-600">Join our community of athletes</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={`Social post ${post.id}`}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <Instagram className="w-6 h-6 mx-auto mb-2" />
                  <span>{post.likes} likes</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;