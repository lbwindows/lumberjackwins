"use client";

import { motion } from "framer-motion";
import { Home, DoorOpen, Wrench, Ruler, PanelRight,GlassWater,Layers } from "lucide-react";

export default function ServicesSection() {
 const services = [
  {
    icon: <Layers className="w-10 h-10 text-green-600" />,
    title: "Window Replacement",
    text: "Upgrade to energy-efficient windows that enhance comfort, reduce noise, and lower energy costs.",
  },
  {
    icon: <DoorOpen className="w-10 h-10 text-green-600" />,
    title: "Door Installation",
    text: "From front entry doors to patio sliders, we install beautiful, secure doors that elevate your home's style.",
  },
  {
    icon: <PanelRight className="w-10 h-10 text-green-600" />,
    title: "Glass Replacement",
    text: "We replace cracked, foggy, or inefficient glass with high-performance, energy-efficient panes — restoring clarity, comfort, and insulation to your home.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-green-600" />,
    title: "Repair & Maintenance",
    text: "Keep your windows and doors operating smoothly with our expert repair and maintenance services.",
  },
];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
