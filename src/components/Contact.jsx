import { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("xLB6N9uRI4v0ZgdAv");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      number: formData.number,
      message: formData.message,
    };

    emailjs
      .send("service_esm1rjq", "template_5rgtdct", templateParams)
      .then(() => {
        toast.success("Message sent successfully ");
        setFormData({ name: "", email: "", number: "", message: "" });
      })
      .catch((err) => {
        console.log("EMAIL ERROR:", err);
        toast.error("Failed to send message ");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Send us a message!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Email
                  </h3>
                  <a href="mailto:tejprince12345678@gmail.com">
                    tejprince12345678@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <a href="tel:+918791308657">+91 87913 08657</a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p>
                    Ground floor 1Prince <br />
                     Ecommerce,lwara near by Guptkashi <br />
                    district Rudraprayag Uttarakhand, India{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2 border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border rounded-lg resize-none"
                ></textarea>

                <button
                  disabled={loading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
