"use client";

import { motion } from "framer-motion";

export default function DealSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-yellow-100 border-l-4 border-yellow-500 p-6 max-w-4xl mx-auto my-12 rounded shadow-md flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      {/* Deal Text */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Special Offer!
        </h2>
        <p className="text-gray-700 text-lg">
          Buy <span className="font-semibold">4 Windows</span> and get{" "}
          <span className="font-semibold text-blue-600">1 Free</span>!
        </p>
      </div>

      {/* Call to Action */}
      <button className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
        Claim Offer
      </button>
    </motion.section>
  );
}
