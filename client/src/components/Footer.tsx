import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">PlayZone</h3>
            <p className="text-sm mb-4">
              Your ultimate destination for premium sports gear and equipment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Payment Methods</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>123 Sport Street, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contact@playzone.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} PlayZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;