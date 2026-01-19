import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-lg text-gray-600">We'd love to hear from you. Send us a message!</p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:support@shophub.in" className="text-gray-700 hover:text-blue-600 transition">support@shophub.in</a>
                <a href="mailto:sales@shophub.in" className="text-gray-700 hover:text-blue-600 transition block">sales@shophub.in</a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+919876543210" className="text-gray-700 hover:text-blue-600 transition">+91 9876543210</a>
                <a href="tel:+919123456789" className="text-gray-700 hover:text-blue-600 transition block">+91 9123456789</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-700">
                  ShopHub HQ<br />
                  Ghaziabad, Uttar Pradesh<br />
                  India 201001
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
            <div className="space-y-4">
              <input 
                type="text"
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
              <input 
                type="email"
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
              <input 
                type="text"
                name="subject"
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
              ></textarea>
              <button 
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}