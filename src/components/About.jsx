import { Package, Shield, Truck, Star } from 'lucide-react';
import about from "../images/about.jpg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About ShopHub</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            India's leading ecommerce platform for entrepreneurs
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center ">
          {/* Left - Image */}
          <div className=" w-full h-full rounded-lg ">
            <div className="  bg-gradient-to-br rounded-lg from-blue-100 to-blue-200 w-full rounded-2xl flex items-center justify-center shadow-lg">
              <img className='w-full h-full ' src={about} alt="" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">Why Choose Us?</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                ShopHub is India's leading ecommerce platform designed to help small businesses and entrepreneurs succeed online. With over 50,000 successful merchants, we've processed millions of orders and built a reputation for reliability and innovation.
              </p>
              <p className="text-gray-700 leading-relaxed text-base">
                Our platform combines cutting-edge technology with exceptional customer support to provide you with everything needed to run a successful online store.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">100% Secure Transactions</p>
                  <p className="text-sm text-gray-600">Bank-level encryption & security</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Truck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Fast & Reliable Shipping</p>
                  <p className="text-sm text-gray-600">Integrated with major couriers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">24/7 Customer Support</p>
                  <p className="text-sm text-gray-600">Always here to help you succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}