import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">ShopHub</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your complete ecommerce solution for online success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition duration-200 text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition duration-200 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition duration-200 text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-200 text-sm">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ShopHub. All rights reserved. | Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}