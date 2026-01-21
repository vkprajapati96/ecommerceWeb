import { FaAmazon, FaGoogle, FaCreditCard, FaTruck, FaBox, FaGift, FaShoppingCart, FaBolt } from 'react-icons/fa';
import { SiFlipkart, SiRazorpay, SiPaypal } from 'react-icons/si';

export default function Partners() {
  const partners = [
    {
      name: "Amazon",
      icon: <FaAmazon className="w-12 h-12" />,
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-300",
      iconColor: "text-orange-600",
      hoverColor: "hover:bg-orange-200"
    },
    {
      name: "Flipkart",
      icon: <SiFlipkart className="w-12 h-12" />,
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
      iconColor: "text-blue-600",
      hoverColor: "hover:bg-blue-200"
    },
    {
      name: "Meesho",
      icon: <FaShoppingCart className="w-12 h-12" />,
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-300",
      iconColor: "text-pink-600",
      hoverColor: "hover:bg-pink-200"
    },
    {
      name: "Blinkit",
      icon: <FaBolt className="w-12 h-12" />,
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-300",
      iconColor: "text-yellow-600",
      hoverColor: "hover:bg-yellow-200"
    },
    {
      name: "Snapdeal",
      icon: <FaGift className="w-12 h-12" />,
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-300",
      iconColor: "text-red-600",
      hoverColor: "hover:bg-red-200"
    },
    {
      name: "JioMart",
      icon: <FaShoppingCart className="w-12 h-12" />,
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-300",
      iconColor: "text-purple-600",
      hoverColor: "hover:bg-purple-200"
    },
    {
      name: "Delhivery",
      icon: <FaTruck className="w-12 h-12" />,
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-300",
      iconColor: "text-green-600",
      hoverColor: "hover:bg-green-200"
    },
    {
      name: "Shiprocket",
      icon: <FaBox className="w-12 h-12" />,
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-300",
      iconColor: "text-indigo-600",
      hoverColor: "hover:bg-indigo-200"
    },
    {
      name: "BlueDart",
      icon: <FaBox className="w-12 h-12" />,
      bgColor: "from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-300",
      iconColor: "text-cyan-600",
      hoverColor: "hover:bg-cyan-200"
    },
    {
      name: "Razorpay",
      icon: <SiRazorpay className="w-12 h-12" />,
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-300",
      iconColor: "text-teal-600",
      hoverColor: "hover:bg-teal-200"
    },
    {
      name: "PayPal",
      icon: <SiPaypal className="w-12 h-12" />,
      bgColor: "from-lime-50 to-lime-100",
      borderColor: "border-lime-300",
      iconColor: "text-lime-600",
      hoverColor: "hover:bg-lime-200"
    },
    {
      name: "Google Pay",
      icon: <FaGoogle className="w-12 h-12" />,
      bgColor: "from-violet-50 to-violet-100",
      borderColor: "border-violet-300",
      iconColor: "text-violet-600",
      hoverColor: "hover:bg-violet-200"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Partners</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by India's leading ecommerce platforms and payment gateways
          </p>
        </div>

        {/* Partners Grid - Square Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${partner.bgColor} border-2 ${partner.borderColor} rounded-xl p-6 ${partner.hoverColor} hover:shadow-lg hover:scale-110 transition duration-300 cursor-pointer flex flex-col items-center justify-center gap-3 aspect-square`}
            >
              <div className={`${partner.iconColor}`}>
                {partner.icon}
              </div>
              <h3 className="text-gray-900 font-semibold text-xs text-center leading-tight">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
    
        {/* Statistics */}
       
        {/* CTA */}
       
      </div>
    </section>
  );
}