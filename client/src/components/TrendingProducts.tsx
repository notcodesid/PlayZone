import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Premium Yoga Mat',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80',
    price: '₹1,299',
    originalPrice: '₹2,499',
    discount: '48% OFF',
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
    price: '₹3,999',
    originalPrice: '₹7,999',
    discount: '50% OFF',
  },
  {
    id: 3,
    name: 'Resistance Bands Set',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=600&q=80',
    price: '₹899',
    originalPrice: '₹1,499',
    discount: '40% OFF',
  },
  {
    id: 4,
    name: 'Premium Cricket Bat',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80',
    price: '₹4,999',
    originalPrice: '₹8,999',
    discount: '44% OFF',
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">TRENDING NOW</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer">
              <CardContent className="p-4">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
                    {product.discount}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">
                    {product.originalPrice}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;