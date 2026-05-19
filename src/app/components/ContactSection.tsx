'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Phone } from "lucide-react";

import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '', // Transferred from floating form
    zipcode: '',
    product: '', // Transferred from floating form
    message: '',
    recaptchaToken: null as string | null, // Transferred from floating form
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      // Use FormData to compile the data cleanly for Formspree
      const payload = new FormData();
      payload.append("firstName", formData.firstName);
      payload.append("lastName", formData.lastName);
      payload.append("email", formData.email);
      payload.append("phone", formData.phone);
      payload.append("address", formData.address);
      payload.append("zipcode", formData.zipcode);
      payload.append("product", formData.product);
      payload.append("message", formData.message);
      payload.append("g-recaptcha-response", formData.recaptchaToken); // Crucial for Formspree spam safety

      const response = await fetch("https://formspree.io/f/mqeywyvz", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: payload,
      });

      if (response.ok) {
        alert("Quote request sent successfully!");
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          zipcode: '',
          product: '',
          message: '',
          recaptchaToken: null,
        });
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image + Trust Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Request a Free Quote
          </h2>
          <p className="text-gray-600">
            Upgrade your home with energy-efficient windows and doors.  
            Our licensed experts provide quality installation and reliable service — guaranteed.
          </p>

          {/* Trust badges */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span>Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span>Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span>Insured</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4 border border-gray-100"
        >
          
          {/* First / Last Name */}
          <div className="flex justify-between items-center mb-1">
              <a
                href="tel:+14252432209"
                className="flex items-center text-green-700 font-extrabold text-lg hover:text-green-800 transition"
              >
                <Phone className="w-4 h-4 mr-2" />
                (425) 243-2209
              </a>
              
            </div>

            <h3 className="text-base font-bold text-gray-800">Request a Free Quote</h3>
          <div className="grid md:grid-cols-2 gap-4">
            
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          {/* Address (Brought over from floating form) */}
          <input
            type="text"
            name="address"
            placeholder="Property Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
            required
          />

          {/* Phone & Zip */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              value={formData.zipcode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-600 outline-none"
              required
            />
          </div>

          {/* Product Select (Brought over from floating form) */}
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-green-600 outline-none bg-white"
          >
            <option value="" disabled>
              Choose Product
            </option>
            <option value="windows">Windows</option>
            <option value="doors">Doors</option>
            <option value="window-doors">Windows & Doors</option>
          </select>

          {/* Project Details Textarea */}
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 placeholder-gray-400 h-24 resize-none focus:ring-2 focus:ring-green-600 outline-none"
          />

          {/* Google reCAPTCHA Integration */}
          <div className="my-2 overflow-x-auto max-w-full">
            <ReCAPTCHA
              sitekey="6Ldy8e0sAAAAADvCLDWsOFgyYwd9oeO7JQGonByS"
              onChange={handleRecaptcha}
              onExpired={() => handleRecaptcha(null)}
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-[#2E6f40] text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition cursor-pointer"
          >
            Get Quote
          </motion.button>

          <p className="text-sm text-gray-500 text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </motion.form>
      </div>
    </section>
  );
}