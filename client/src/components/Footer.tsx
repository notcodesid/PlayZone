import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">ONLINE SHOPPING</h3>
            <ul className="space-y-2">
              <li>Sports Gear</li>
              <li>Fitness Equipment</li>
              <li>Training Wear</li>
              <li>Sports Nutrition</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">CUSTOMER POLICIES</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">EXPERIENCE OUR APP</h3>
            <div className="flex space-x-4 mb-6">
              <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Get it on Google Play" className="h-10" />
              <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="Download on the App Store" className="h-10" />
            </div>
            
            <h3 className="text-white font-bold mb-4">KEEP IN TOUCH</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Instagram className="w-6 h-6" />
              <Youtube className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 SportsMyntra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;