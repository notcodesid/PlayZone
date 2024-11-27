import { Card, CardContent } from '@/components/ui/card';

const winterProducts = [
  {
    id: 1,
    name: 'Thermal Training Jacket',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80',
    price: '₹2,499',
    originalPrice: '₹4,999',
    discount: '50% OFF',
  },
  {
    id: 2,
    name: 'Winter Running Gloves',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=600&q=80',
    price: '₹799',
    originalPrice: '₹1,499',
    discount: '47% OFF',
  },
  {
    id: 3,
    name: 'Compression Thermals',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    price: '₹1,299',
    originalPrice: '₹2,499',
    discount: '48% OFF',
  },
];

const SeasonalDeals = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">WINTER SEASON SPECIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {winterProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer">
              <CardContent className="p-4">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[300px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold">{product.price}</span>
                      <span className="text-gray-300 line-through text-sm">
                        {product.originalPrice}
                      </span>
                      <span className="bg-red-500 px-2 py-1 rounded text-sm">
                        {product.discount}
                      </span>
                    </div>
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

export default SeasonalDeals;