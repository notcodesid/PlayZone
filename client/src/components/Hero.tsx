import { useState, useEffect } from 'react';


const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80',
    subtitle: 'New Collection',
    title: ['ELITE', 'PERFORMANCE', 'GEAR'],
    description: 'Elevate your game with premium sports equipment',
    offer: 'Up to 50% off on selected items',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1920&q=80',
    subtitle: 'Limited Time',
    title: ['SUMMER', 'ESSENTIALS', '2024'],
    description: 'Stay cool and comfortable during your workouts',
    offer: 'Starting from ₹999 only',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/6740821/pexels-photo-6740821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'Exclusive Deal',
    title: ['PRO', 'ATHLETE', 'SERIES'],
    description: 'Professional grade equipment for serious athletes',
    offer: 'Free shipping on orders above ₹2999',
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
              alt={slide.title.join(' ')}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40">
              <div className="container mx-auto h-full">
                <div className="flex flex-col justify-center h-full max-w-6xl px-4 md:px-8">
                  <span className="text-yellow-400 font-semibold mb-4 tracking-wider uppercase text-lg md:text-xl">
                    {slide.subtitle}
                  </span>
                  <div className="mb-6">
                    <h2 className="flex flex-wrap items-center gap-x-4 text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                      {slide.title.map((word, index) => (
                        <span
                          key={index}
                          className="inline-block"
                          style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                            animation: `fadeInSlide ${0.5 + index * 0.2}s ease-out`
                          }}
                        >
                          {word}
                        </span>
                      ))}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                      {slide.description}
                    </p>
                    <p className="text-2xl md:text-3xl text-yellow-400 font-semibold">
                      {slide.offer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;