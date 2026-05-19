"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  id: number;
  after: string;
  description: string;
}

// Only 6 projects
const projects: GalleryItem[] = [
  { id: 1, after: "/IMG_0824.jpg", description: "" },
  { id: 2, after: "/IMG_0825.jpg", description: "" },
  { id: 3, after: "/IMG_0826.jpg", description: "" },
  { id: 4, after: "/IMG_0828.jpg", description: "" },
  
];

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleNextImage = () => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-10 items-center">
        {/* LEFT SIDE: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Transformations You Can See
          </h2>
          <div className="w-110 h-1 bg-green-600 rounded-md" />
          <p className="text-gray-700 text-base leading-relaxed">
            Every home has potential — and we bring it out. Whether it’s outdated windows,
            drafty patio doors, or faded entryways, our expert installers make your home more
            beautiful, comfortable, and energy efficient.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Browse real projects below and see the dramatic difference after our work. Each
            installation is done with precision and care using premium materials built to last.
          </p>
          <button className="mt-2 bg-[#2E6f40] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition cursor-pointer">
            Get a Free Quote
          </button>
        </motion.div>

        {/* RIGHT SIDE: GALLERY GRID */}
        <div className="relative flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full"
          >
            {projects.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group cursor-pointer"
              >
                <Image
                  src={item.after}
                  alt={item.description}
                  width={500}
                  height={400}
                  className="w-full h-52 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.description}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={projects[currentIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative flex flex-col items-center max-w-5xl w-full"
            >
              <div className="relative w-full flex justify-center">
                <Image
                  src={projects[currentIndex].after}
                  alt={projects[currentIndex].description}
                  width={1200}
                  height={800}
                  className="w-full max-w-4xl max-h-[80vh] object-contain rounded-lg"
                />

                {/* CLOSE */}
                <button
                  onClick={() => setCurrentIndex(null)}
                  className="absolute top-2 right-2 bg-black/70 text-white rounded-full p-2 hover:bg-black transition cursor-pointer"
                >
                  <X size={22} />
                </button>

                {/* LEFT */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-2 hover:bg-black transition cursor-pointer"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* RIGHT */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-2 hover:bg-black transition cursor-pointer"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* DESCRIPTION */}
              <p className="text-white text-center mt-4 text-sm max-w-xl">
                {projects[currentIndex].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}