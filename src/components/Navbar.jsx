import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 top-0 left-0">
      <div className="w-full px-0 sm:px-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ShopHub</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              <button 
                onClick={() => handleNavClick('home')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('faq')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-2 space-y-1">
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition duration-200"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('about')} 
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition duration-200"
                >
                  About
                </button>
                <button 
                  onClick={() => handleNavClick('services')} 
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition duration-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => handleNavClick('faq')} 
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition duration-200"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}