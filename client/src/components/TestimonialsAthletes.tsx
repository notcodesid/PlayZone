import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Instagram, Twitter, Medal } from 'lucide-react';

const athletes = [
  {
    name: "Sarah Chen",
    sport: "Track & Field",
    achievement: "Olympic Gold Medalist",
    quote: "PlayZone's gear has been instrumental in my training journey.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    social: { instagram: "#", twitter: "#" }
  },
  {
    name: "Marcus Rodriguez",
    sport: "Basketball",
    achievement: "Pro League MVP",
    quote: "The quality and innovation in their products is unmatched.",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    social: { instagram: "#", twitter: "#" }
  }
];

const testimonials = [
  {
    id: 1,
    text: "The compression gear set completely transformed my recovery routine. Highly recommended!",
    author: "Alex Thompson",
    role: "Marathon Runner",
    rating: 5
  },
  {
    id: 2,
    text: "Best training equipment I've ever used. The quality is exceptional.",
    author: "Emma Wilson",
    role: "Fitness Trainer",
    rating: 5
  }
];

const TestimonialsAthletes = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Featured Athletes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Athletes</h2>
            <p className="text-gray-600">Champions who trust our gear</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {athletes.map((athlete, index) => (
              <motion.div
                key={athlete.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Medal className="w-5 h-5 text-yellow-400" />
                      <span className="text-sm font-medium">{athlete.achievement}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{athlete.name}</h3>
                    <p className="text-gray-200 mb-4">{athlete.sport}</p>
                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={athlete.social.instagram}
                        whileHover={{ scale: 1.1 }}
                        className="text-white hover:text-pink-400 transition"
                      >
                        <Instagram className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={athlete.social.twitter}
                        whileHover={{ scale: 1.1 }}
                        className="text-white hover:text-blue-400 transition"
                      >
                        <Twitter className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Athletes Say</h2>
            <p className="text-gray-600">Real feedback from real athletes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg relative"
              >
                <Quote className="w-10 h-10 text-blue-600/20 absolute top-4 right-4" />
                <p className="text-gray-700 mb-6 text-lg">{testimonial.text}</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAthletes;