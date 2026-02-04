import { FaAmazon, FaShoppingCart } from 'react-icons/fa';
import { SiFlipkart } from 'react-icons/si';

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
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by India's leading ecommerce platforms and payment gateways
          </p>
        </div>

        {/* Partners Cards Center */}
        <div className="flex justify-center gap-6 flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${partner.bgColor} border-2 ${partner.borderColor} rounded-xl p-6 ${partner.hoverColor} hover:shadow-lg hover:scale-110 transition duration-300 cursor-pointer flex flex-col items-center justify-center gap-3 aspect-square w-32`}
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

      </div>
    </section>
  );
}
