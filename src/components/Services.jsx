import { ShoppingCart, Truck, Shield, MessageSquare, Star, Package } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      bgColor: "from-blue-50 to-blue-100 border-blue-200",
      title: "Store Management",
      description: "Easy-to-use dashboard to manage products, inventory, and orders in real-time.",
      features: ["Unlimited Products", "Stock Management", "Order Tracking"]
    },
    {
      icon: <Truck className="w-12 h-12 text-green-600" />,
      bgColor: "from-green-50 to-green-100 border-green-200",
      title: "Logistics & Shipping",
      description: "Integrated shipping with major courier partners and real-time tracking.",
      features: ["Multi-courier Integration", "Real-time Tracking", "Auto Label Generation"]
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      bgColor: "from-purple-50 to-purple-100 border-purple-200",
      title: "Secure Payments",
      description: "Multiple payment gateways with bank-level security and fraud protection.",
      features: ["Credit/Debit Cards", "UPI & Wallets", "Zero Setup Fee"]
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-yellow-600" />,
      bgColor: "from-yellow-50 to-yellow-100 border-yellow-200",
      title: "Customer Support",
      description: "24/7 dedicated support team via chat, email, and phone for your peace of mind.",
      features: ["24/7 Availability", "Multi-channel Support", "Hindi Support"]
    },
    {
      icon: <Star className="w-12 h-12 text-red-600" />,
      bgColor: "from-red-50 to-red-100 border-red-200",
      title: "Marketing Tools",
      description: "Built-in marketing features to increase visibility and boost your sales.",
      features: ["Email Campaigns", "Discount & Coupons", "Social Sharing"]
    },
    {
      icon: <Package className="w-12 h-12 text-indigo-600" />,
      bgColor: "from-indigo-50 to-indigo-100 border-indigo-200",
      title: "Analytics & Reports",
      description: "Detailed insights into sales, revenue, and customer behavior patterns.",
      features: ["Sales Dashboard", "Revenue Reports", "Customer Analytics"]
    },
    {
      icon: <span className="text-4xl">🎨</span>,
      bgColor: "from-cyan-50 to-cyan-100 border-cyan-200",
      title: "Website Builder",
      description: "Drag-and-drop website builder with professional templates - no coding required.",
      features: ["Mobile Responsive", "SEO Optimized", "Custom Domain"]
    },
    {
      icon: <span className="text-4xl">📱</span>,
      bgColor: "from-pink-50 to-pink-100 border-pink-200",
      title: "Mobile App",
      description: "Sell on-the-go with our mobile app for iOS and Android devices.",
      features: ["Order Management", "Push Notifications", "Offline Mode"]
    },
    {
      icon: <span className="text-4xl">🏪</span>,
      bgColor: "from-orange-50 to-orange-100 border-orange-200",
      title: "Multi-Channel Selling",
      description: "Sell across multiple platforms - Facebook, Instagram, WhatsApp from one dashboard.",
      features: ["Social Commerce", "Marketplace Integration", "Sync Inventory"]
    },
    {
      icon: <span className="text-4xl">💳</span>,
      bgColor: "from-teal-50 to-teal-100 border-teal-200",
      title: "Subscription Management",
      description: "Manage subscription-based products and recurring billing effortlessly.",
      features: ["Auto Renewal", "Flexible Billing", "Customer Retention"]
    },
    {
      icon: <span className="text-4xl">🛡️</span>,
      bgColor: "from-lime-50 to-lime-100 border-lime-200",
      title: "Fraud Protection",
      description: "Advanced AI-powered fraud detection to protect your business and customers.",
      features: ["AI Detection", "Chargeback Protection", "Secure Transactions"]
    },
    {
      icon: <span className="text-4xl">✨</span>,
      bgColor: "from-violet-50 to-violet-100 border-violet-200",
      title: "Advanced Inventory",
      description: "Smart inventory management with low stock alerts and automated reordering.",
      features: ["Stock Alerts", "Bulk Import/Export", "Variant Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete ecommerce solutions tailored for your business success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${service.bgColor} p-6 md:p-8 rounded-xl border-2 hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer`}
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                {service.description}
              </p>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}