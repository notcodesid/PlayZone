import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/29541464/pexels-photo-29541464/free-photo-of-stylish-athletic-sneakers-and-box-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Exclusive Shoe Collection',
    description: 'Step into style with up to 50% off on select shoes',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5038834/pexels-photo-5038834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Couple Offer Collection',
    description: 'Explore exclusive deals for couples in sports fashion',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Gym Equipment',
    description: 'Discover top-notch gym equipment with free shipping',
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className="relative h-[600px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
              <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;