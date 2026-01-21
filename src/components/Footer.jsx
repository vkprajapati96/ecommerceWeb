export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">ShopHub</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's fastest-growing ecommerce platform empowering small businesses and entrepreneurs. We provide comprehensive solutions for online selling, payment processing, logistics integration, and business analytics. Join 50,000+ successful merchants already growing with ShopHub.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition duration-200 text-sm">
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
                <a href="#partners" className="hover:text-white transition duration-200 text-sm">
                  Partners
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
            <h4 className="text-lg font-bold">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
             
              <li>
                <a href="mailto:support@shophub.in" className="hover:text-white transition duration-200 text-sm">
                  support@shophub.in
                </a>
              </li>
              
              <li className="text-sm">
                ShopHub HQ, Ghaziabad<br />
                <span className="text-xs">Uttar Pradesh, India 201001</span>
              </li>
              
               <li>
                <a href="/privacy-policy" className="hover:text-white transition duration-200 text-sm font-semibold">
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ShopHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}