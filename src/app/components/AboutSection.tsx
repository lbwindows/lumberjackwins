"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Our Company
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded in 2025, we’ve quickly made a name for ourselves by helping homeowners transform their spaces with high-quality window and door replacements. Our team is dedicated to combining expert craftsmanship with dependable service, ensuring every project not only looks great but stands the test of time. At the heart of our work is a commitment to making homes more comfortable, beautiful, and lasting for years to come.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe in honesty, precision, and customer satisfaction — that’s
            why we treat every home like it’s our own. Whether it’s boosting
            energy efficiency or enhancing curb appeal, we’re here to make your
            vision a reality.
          </p>
          {/* <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Learn More
          </button> */}
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="/team.png"
            alt="Our installation team at work"
            fill
            className="object-cover object-center rounded-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
