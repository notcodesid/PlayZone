import { Card, CardContent } from '@/components/ui/card';
import { Star, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'Nike Pro Training Set',
    category: 'Professional Sports Gear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 2,481',
    originalPrice: 'Rs. 4,999',
    discount: '50% OFF',
    rating: 4.8,
    ratingCount: 127,
    isNew: true,
  },
  {
    id: 2,
    name: 'Adidas Runner Elite',
    category: 'Professional Running Shoes',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 3,299',
    originalPrice: 'Rs. 5,999',
    discount: '45% OFF',
    rating: 4.7,
    ratingCount: 89,
    isNew: false,
    stock: 'Only Few Left!',
  },
  {
    id: 3,
    name: 'Puma Training Kit',
    category: 'Gym Equipment Set',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 1,899',
    originalPrice: 'Rs. 3,799',
    discount: 'Rs. 1900 OFF',
    rating: 4.5,
    ratingCount: 56,
    isNew: true,
  },
  {
    id: 4,
    name: 'Under Armour Pro',
    category: 'Performance Gear',
    image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=600&q=80',
    price: 'Rs. 2,599',
    originalPrice: 'Rs. 4,999',
    discount: '48% OFF',
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
            <div key={product.id} className="group">
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <button 
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    {product.isNew && (
                      <Badge className="absolute top-4 left-4 bg-pink-500">
                        NEW
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-red-400 px-2 py-0.5 rounded text-sm text-white">
                      <span className="font-bold">{product.rating}</span>
                      <Star className="w-3 h-3 ml-1 fill-current" />
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.ratingCount})
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">
                      {product.originalPrice}
                    </span>
                    <span className="text-red-500 font-medium text-sm">
                      {product.discount}
                    </span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      className="flex-1 rounded-3xl"
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      variant="default"
                      className="flex-1 bg-red-500 hover:bg-red-600 rounded-3xl"
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;