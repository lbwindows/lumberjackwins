"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileBadge, CheckCircle } from "lucide-react";

export default function TrustSection() {
  const items = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
      title: "Licensed",
      text: "We’re fully licensed to operate across Washington State, ensuring all work meets local and state building codes.",
    },
    {
      icon: <FileBadge className="w-10 h-10 text-green-600" />,
      title: "Bonded",
      text: "We’re bonded to protect you from unexpected issues — giving you peace of mind throughout every project.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-green-600" />,
      title: "Insured",
      text: "We carry full liability and worker’s compensation insurance, keeping your property and our team safe.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 text-center mb-12"
        >
          Licensed, Bonded & Insured
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
