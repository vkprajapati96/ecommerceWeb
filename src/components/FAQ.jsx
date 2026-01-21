import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How much does it cost to get started?",
      answer: "Our starter plan is completely FREE! You only pay transaction fees when you make sales (2.5% per transaction). Premium plans start at ₹999/month with lower fees and additional features like priority support and advanced analytics."
    },
    {
      id: 2,
      question: "How long does it take to set up my store?",
      answer: "You can set up your complete store in just 10-15 minutes! Simply sign up with your email, add your products with descriptions and images, set up payment methods, and you're ready to start selling. Most merchants go live within 30 minutes."
    },
    {
      id: 3,
      question: "What payment methods do you support?",
      answer: "We support all major payment methods including Credit/Debit Cards, UPI, Net Banking, Digital Wallets (Paytm, PhonePe, Google Pay), and Buy Now Pay Later (BNPL) options like Flipkart Pay Later for maximum customer convenience."
    },
    {
      id: 4,
      question: "Is my customer data secure?",
      answer: "Absolutely! We use bank-level encryption (AES-256), comply with PCI-DSS standards, and follow GDPR/CCPA regulations. Your customer data is backed up daily and protected by advanced security protocols. We never sell or share your data with third parties."
    },
    {
      id: 5,
      question: "Do you provide shipping integration?",
      answer: "Yes! We integrate with major Indian courier partners including Delhivery, BlueDart, Shiprocket, Ecom Express, and more. You can compare rates, generate shipping labels automatically, track orders in real-time, and handle returns seamlessly from one dashboard."
    },
    {
      id: 6,
      question: "Can I sell on multiple platforms at once?",
      answer: "Yes, definitely! You can integrate ShopHub with Flipkart, Amazon, Meesho, and other marketplaces. Manage all inventory, orders, and products from one central dashboard. We auto-sync inventory across all channels to prevent overselling."
    },
    {
      id: 7,
      question: "What if I need technical help?",
      answer: "Our 24/7 support team is always ready to help! You can reach us via live chat, email, WhatsApp, or phone. We offer free onboarding sessions, video tutorials, and detailed documentation. Most queries are resolved within 2 hours."
    },
    {
      id: 8,
      question: "Can I customize my store design?",
      answer: "Yes! We offer 100+ professionally designed templates that are mobile-responsive and SEO-friendly. You can customize colors, fonts, layouts using our drag-and-drop builder without any coding knowledge. You can also use a custom domain (yourshop.com)."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about our platform</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 transition duration-200"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 md:px-8 py-4 flex justify-between items-center hover:bg-gray-50 transition duration-200"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openFaq === faq.id && (
                <div className="px-6 md:px-8 py-4 bg-blue-50 border-t-2 border-blue-200">
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Box */}
        {/* <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-10 rounded-xl text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">Still have questions?</h3>
          <p className="text-blue-100 text-base md:text-lg">Contact our support team - we're here to help 24/7!</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Chat with us
          </button>
        </div> */}
      </div>
    </section>
  );
}