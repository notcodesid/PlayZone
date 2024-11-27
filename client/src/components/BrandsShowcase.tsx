import { Card, CardContent } from '@/components/ui/card';

const brands = [
  {
    id: 1,
    name: 'Nike',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    discount: 'MIN. 40% OFF',
    category: 'Premium Sports Gear',
  },
  {
    id: 2,
    name: 'Adidas',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
    discount: 'UP TO 60% OFF',
    category: 'Running Collection',
  },
  {
    id: 3,
    name: 'Puma',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80',
    discount: 'MIN. 30% OFF',
    category: 'Training Essentials',
  },
  {
    id: 4,
    name: 'Under Armour',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80',
    discount: 'STARTING ₹999',
    category: 'Performance Wear',
  },
];

const BrandsShowcase = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">MEDAL WORTHY BRANDS TO BAG</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.id} className="overflow-hidden group">
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

export default BrandsShowcase;