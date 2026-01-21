import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <a
          href="/"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </a>

        {/* Header */}
        <div className="mb-12 space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          
          {/* 1. Introduction */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
            <p className="leading-relaxed">
              ShopHub respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. By using our website or services, you agree to this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
            <div className="space-y-2">
              <p className="font-semibold">When you use our services, we collect:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Account details (name, email, phone, address)</li>
                <li>Payment information (processed securely by payment gateways)</li>
                <li>Order and transaction history</li>
                <li>Device information (IP address, browser, device type)</li>
                <li>Usage data (pages visited, clicks, searches)</li>
                <li>Cookies and tracking information</li>
              </ul>
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Process orders and deliver services</li>
              <li>Send order updates and notifications</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and secure your account</li>
              <li>Send promotional emails (you can unsubscribe anytime)</li>
              <li>Comply with legal requirements</li>
            </ul>
          </section>

          {/* 4. Data Security */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
            <p className="leading-relaxed">
              We use SSL/TLS encryption and secure payment gateways to protect your information. Payment details are not stored on our servers. However, no online system is 100% secure, so please keep your password safe.
            </p>
          </section>

          {/* 5. Sharing Your Information */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">5. Who We Share Information With</h2>
            <p className="leading-relaxed">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Payment processors (Razorpay, PayU, etc.)</li>
              <li>Shipping partners (Delhivery, BlueDart, etc.)</li>
              <li>Service providers who help us operate</li>
              <li>Government authorities when legally required</li>
            </ul>
            <p className="leading-relaxed mt-2">
              We do NOT sell your personal information to third parties.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">6. How Long We Keep Your Data</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Account information: Until you delete your account</li>
              <li>Transaction records: 7 years (tax/legal requirements)</li>
              <li>Cookies: Up to 2 years</li>
              <li>Email list (after unsubscribe): Deleted within 30 days</li>
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">7. Your Data Rights</h2>
            <p className="leading-relaxed">You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Access the data we hold about you</li>
              <li>Request corrections to inaccurate information</li>
              <li>Delete your account and personal data</li>
              <li>Unsubscribe from marketing emails anytime</li>
              <li>Download your data in a portable format</li>
            </ul>
            <p className="leading-relaxed mt-2 text-sm">
              Note: Some data may need to be retained for legal/tax purposes.
            </p>
          </section>

          {/* 8. Cookies */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">8. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies to improve your experience and analyze website usage. You can disable cookies in your browser settings, but this may affect site functionality.
            </p>
          </section>

          {/* 9. Third-Party Links */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">9. Links to Other Websites</h2>
            <p className="leading-relaxed">
              Our website contains links to third-party sites. We're not responsible for their privacy practices. Please review their privacy policies before sharing information.
            </p>
          </section>

          {/* 10. Changes to Policy */}
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">10. Policy Updates</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy occasionally. We'll notify you of major changes via email or a notice on our website. Your continued use means you accept the changes.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="space-y-3 bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or your data, please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> <a href="mailto:privacy@shophub.in" className="text-blue-600 hover:underline">privacy@shophub.in</a></p>
              <p><strong>Address:</strong> ShopHub, Ghaziabad, Uttar Pradesh, India 201001</p>
              <p><strong>Phone:</strong> <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 9876543210</a></p>
              <p><strong>Response Time:</strong> We aim to respond within 5 business days</p>
            </div>
          </section>
        </div>
      
    
      </div>
    </div>
  );
}