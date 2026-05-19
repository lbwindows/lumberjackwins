'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

export default function FloatingContactForm() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    address: "",
    product: "",
    message: "", // Added missing message field state
    recaptchaToken: null as string | null, // Track the raw token instead of just a boolean
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptcha = (token: string | null) => {
    setFormData((prev) => ({ ...prev, recaptchaToken: token }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    try {
      // Use FormData to clean up payload delivery to Formspree
      const payload = new FormData();
      payload.append("firstName", formData.firstName);
      payload.append("lastName", formData.lastName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("address", formData.address);
      payload.append("zip", formData.zip);
      payload.append("product", formData.product);
      payload.append("message", formData.message);
      // Essential key Formspree looks for to handle validation:
      payload.append("g-recaptcha-response", formData.recaptchaToken);

      const response = await fetch("https://formspree.io/f/mqeywyvz", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: payload,
      });

      if (response.ok) {
        alert("Quote request sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          zip: "",
          address: "",
          product: "",
          message: "",
          recaptchaToken: null,
        });
        setIsOpen(false);
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    // Compacted the floating sizing layer down from large layout tiers to fixed-max boundaries
    <div className="fixed top-1/4 right-4 z-20 flex flex-col items-end w-full max-w-[calc(100%-2rem)] sm:max-w-xs md:max-w-sm">
      {/* Collapsed Icon */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-700 text-white p-4 rounded-l-full shadow-2xl hover:bg-green-600 transition flex items-center justify-center cursor-pointer"
        >
          <Phone className="w-6 h-6" />
        </button>
      )}

      {/* Expanded Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.form
            key="form"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="bg-white rounded-2xl w-full p-5 flex flex-col gap-3 mt-2 shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-gray-100"
            onSubmit={handleSubmit}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-1">
              <a
                href="tel:+14252432209"
                className="flex items-center text-green-700 font-extrabold text-lg hover:text-green-800 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                (425) 243-2209
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-700 font-bold text-base px-1 transition cursor-pointer"
                aria-label="Close form"
              >
                ✕
              </button>
            </div>

            <h3 className="text-base font-bold text-gray-800">Request a Free Quote</h3>

            {/* Name */}
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
            />

            {/* Address */}
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
            />

            {/* Phone & ZIP */}
            <div className="flex gap-2">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
              <input
                type="text"
                name="zip"
                placeholder="ZIP Code"
                value={formData.zip}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded px-3 py-1.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
            </div>

            {/* Product Select */}
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded px-3 py-1.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm w-full bg-white"
            >
              <option value="" disabled>
                Choose Product
              </option>
              <option value="windows">Windows</option>
              <option value="doors">Doors</option>
              <option value="sliding-doors">Windows & Doors</option>
            </select>

            {/* Textarea Description */}
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded text-gray-900 placeholder-gray-400 h-16 resize-none focus:ring-2 focus:ring-green-600 outline-none text-sm"
            />

            {/* reCAPTCHA Wrapping Container */}
            <div className="mt-1 mb-1 overflow-x-auto max-w-full">
              <ReCAPTCHA
                sitekey="6Ldy8e0sAAAAADvCLDWsOFgyYwd9oeO7JQGonByS"
                onChange={handleRecaptcha}
                onExpired={() => handleRecaptcha(null)}
                size="normal"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#2E6f40] text-white py-2.5 rounded-lg font-semibold shadow-md hover:bg-green-700 transition cursor-pointer text-sm mt-1"
            >
              Get Quote
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}