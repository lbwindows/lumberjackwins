"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg" // replace with your image
        alt="Beautiful home with new windows and doors"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Upgrade Your Home with New Windows & Doors
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          High-quality, energy-efficient installations built to last.
        </p>
        <button className="bg-[#2E6f40] hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition cursor-pointer">
          Get a Free Quote
        </button>
      </motion.div>
    </section>
  );
}
