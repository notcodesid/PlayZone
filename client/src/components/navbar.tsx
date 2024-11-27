import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import SearchPopup from './searchpopup';
import { useState } from 'react';


const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearchPopup = () => {
        setIsSearchOpen(!isSearchOpen);
      };

  return (
    <>
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <p className='text-2xl font-bold tracking-tight text-gray-800'>PlayZone.</p>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Gym Equipment</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold mb-2">Strength Training</h3>
                          <ul className="space-y-2">
                            <li>Dumbbells</li>
                            <li>Barbells</li>
                            <li>Weight Plates</li>
                            <li>Benches</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Cardio Equipment</h3>
                          <ul className="space-y-2">
                            <li>Treadmills</li>
                            <li>Exercise Bikes</li>
                            <li>Rowing Machines</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sports Gear</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold mb-2">Team Sports</h3>
                          <ul className="space-y-2">
                            <li>Cricket Bats</li>
                            <li>Footballs</li>
                            <li>Basketball</li>
                            <li>Volleyball</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Individual Sports</h3>
                          <ul className="space-y-2">
                            <li>Tennis Rackets</li>
                            <li>Badminton Sets</li>
                            <li>Table Tennis</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Sportswear</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px] md:w-[500px]">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold mb-2">Training Wear</h3>
                          <ul className="space-y-2">
                            <li>Performance T-Shirts</li>
                            <li>Training Shorts</li>
                            <li>Sports Bras</li>
                            <li>Compression Wear</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Accessories</h3>
                          <ul className="space-y-2">
                            <li>Sports Bags</li>
                            <li>Water Bottles</li>
                            <li>Fitness Trackers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex-1 max-w-xl px-4 hidden md:block">
            <div className="relative" 
            onClick={() => setIsSearchOpen(true)}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for sports products, brands and more"
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={toggleSearchPopup} 
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>

    <SearchPopup isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

    </>
  );
};

export default Navbar;