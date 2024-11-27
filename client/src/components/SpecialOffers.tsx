import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const offers = [
  {
    id: 1,
    title: 'Fitness Equipment',
    description: 'Up to 60% OFF on Gym Essentials',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80',
    badge: 'Limited Time',
  },
  {
    id: 2,
    title: 'Sports Nutrition',
    description: 'Buy 2 Get 1 Free on Supplements',
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=600&q=80',
    badge: 'Best Seller',
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">SPECIAL OFFERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden">
              <CardContent className="p-0 relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <span className="inline-block bg-red-500 px-3 py-1 rounded-full text-sm mb-4">
                      {offer.badge}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                    <p className="mb-4">{offer.description}</p>
                    <Button variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;