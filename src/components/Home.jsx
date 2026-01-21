import { ShoppingCart } from "lucide-react";

export default function Home() {
  
  return (
    <section
      id="home"
      className="pt-32 pb-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Your Complete Ecommerce Solution
                </h1>
                <p className="text-lg md:text-xl text-blue-100">
                  Build, manage, and scale your online business with our
                  powerful ecommerce platform. Everything you need in one place.
                </p>
                <p className="text-base md:text-lg text-blue-200 font-semibold">
                  ₹0 Setup • ₹0 Platform Fee • Pay Only On Sales
                </p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact"  className="cursor-pointer bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition shadow-lg hover:shadow-xl transition duration-200">
                  Get Started Free
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold">50K+</p>
                  <p className="text-blue-100 text-sm md:text-base">
                    Active Merchants
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold">10M+</p>
                  <p className="text-blue-100 text-sm md:text-base">
                    Orders Processed
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-3xl md:text-4xl font-bold">24/7</p>
                  <p className="text-blue-100 text-sm md:text-base">Support</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 w-80 h-80 md:w-96 md:h-96 rounded-3xl flex items-center justify-center shadow-2xl">
                <ShoppingCart className="w-48 h-48 text-white opacity-80 animate-bounce" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
