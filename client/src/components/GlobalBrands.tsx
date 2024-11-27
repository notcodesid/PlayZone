import { Card, CardContent } from '@/components/ui/card';

const brands = [
  {
    id: 1,
    name: 'Nike Pro',
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=600&q=80',
    discount: 'MIN. 30% OFF',
    category: 'Premium Collection',
  },
  {
    id: 2,
    name: 'Adidas Originals',
    image: 'https://images.unsplash.com/photo-1520316587275-5e4f06f355e6?auto=format&fit=crop&w=600&q=80',
    discount: 'UP TO 60% OFF',
    category: 'Exclusive Range',
  },
  {
    id: 3,
    name: 'New Balance',
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=600&q=80',
    discount: 'MIN. 40% OFF',
    category: 'Latest Arrivals',
  },
  {
    id: 4,
    name: 'Reebok',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=600&q=80',
    discount: 'UP TO 70% OFF',
    category: 'Special Edition',
  },
];

const GlobalBrands = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">GRAND GLOBAL BRANDS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.id} className="overflow-hidden group cursor-pointer">
              <CardContent className="p-0 relative">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                  <h3 className="font-semibold text-lg">{brand.category}</h3>
                  <p className="text-sm font-bold">{brand.discount}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalBrands;