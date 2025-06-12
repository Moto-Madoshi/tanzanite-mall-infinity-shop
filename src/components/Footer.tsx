
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-6 h-6 bg-gradient-to-br from-tanzanite to-tanzanite-dark rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-3 h-1.5 gradient-infinity rounded-full transform rotate-45"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-3 gradient-infinity rounded-full transform -rotate-45"></div>
              </div>
              <span className="text-lg font-bold">Tanzanite Mall</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your premier destination for computers, gadgets, gaming, drinks, and electronics. 
              Experience infinite possibilities with Tanzanite Mall.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/category/computers" className="hover:text-white transition-colors">Computers</Link></li>
              <li><Link to="/category/gadgets" className="hover:text-white transition-colors">Gadgets</Link></li>
              <li><Link to="/category/gaming" className="hover:text-white transition-colors">Gaming</Link></li>
              <li><Link to="/category/drinks" className="hover:text-white transition-colors">Drinks</Link></li>
              <li><Link to="/category/electronics" className="hover:text-white transition-colors">Electronics</Link></li>
              <li><Link to="/category/genz" className="hover:text-white transition-colors">Gen Z</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/tanzanitemall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-white font-bold">f</span>
              </a>
              <a 
                href="https://instagram.com/tanzanitemall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://x.com/tanzanitemall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white font-bold text-lg">𝕏</span>
              </a>
              <a 
                href="https://youtube.com/tanzanitemall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <span className="text-white font-bold">▶</span>
              </a>
            </div>
            <div className="text-gray-300 text-sm">
              <p>📧 info@tanzanitemall.com</p>
              <p>📞 +255 123 456 789</p>
              <p>📍 Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Tanzanite Mall. All rights reserved. Made with 💎 in Tanzania.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
