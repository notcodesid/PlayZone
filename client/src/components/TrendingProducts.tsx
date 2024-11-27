import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'HRX by Hrithik Roshan',
    category: 'Women Regular Fit Tracksuit',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 1481',
    originalPrice: 'Rs. 3799',
    discount: '61% OFF',
    rating: 4.7,
    ratingCount: 7,
    isNew: false,
  },
  {
    id: 2,
    name: 'Allen Solly Woman',
    category: 'Women Self-Design Joggers',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 1059',
    originalPrice: 'Rs. 1999',
    discount: '47% OFF',
    rating: 4.5,
    ratingCount: 52,
    isNew: false,
    stock: 'Only Few Left!',
  },
  {
    id: 3,
    name: 'StyleCast',
    category: 'Women Round Neck Sweaters',
    image: 'https://images.unsplash.com/photo-1576558345433-58e777a5e423?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 1499',
    originalPrice: 'Rs. 3499',
    discount: 'Rs. 2000 OFF',
    rating: 4.3,
    ratingCount: 28,
    isNew: true,
  },
  {
    id: 4,
    name: 'Puma Sports',
    category: 'Men Training Jacket',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 1899',
    originalPrice: 'Rs. 3799',
    discount: '50% OFF',
    rating: 4.6,
    ratingCount: 142,
    isNew: false,
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
                    className="w-full h-[300px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 right-2 bg-pink-500">
                      NEW
                    </Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-green-600 text-white px-2 py-0.5 rounded text-sm">
                      <span className="font-bold">{product.rating}</span>
                      <Star className="w-3 h-3 ml-1 fill-current" />
                    </div>
                    <span className="text-gray-500 text-sm">
                      | {product.ratingCount}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-700">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">
                      {product.originalPrice}
                    </span>
                    <span className="text-orange-500 font-medium text-sm">
                      {product.discount}
                    </span>
                  </div>
                  
                  {product.stock && (
                    <p className="text-orange-500 text-sm font-medium">
                      {product.stock}
                    </p>
                  )}
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