'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "(425) 555-0134";
  const telLink = "tel:+14255550134"; // formatted for tel: link

  return (
    <nav className="bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}

          <div className="flex items-center gap-2 flex-shrink-0 text-2xl font-bold text-green-900">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logomain.png" // replace with your image
                alt="Lumberjack Windows Logo"
                width={220} // adjust size as needed
                height={40}
                className="rounded-md"
              />
            </Link>
          </div>

          {/* Center: Phone Number */}
          <div className="hidden md:flex items-center text-blue-600 font-bold text-lg md:text-xl lg:text-2xl">
             <a
                href="tel:+14255550134"
                className="flex items-center text-green-700 font-extrabold text-xl hover:text-green-800 transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                (425) 243-2209
              </a>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((page) => (
              <Link
                key={page}
                href={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors"
              >
                {page}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((page) => (
                <Link
                  key={page}
                  href={`/${page.toLowerCase() === 'home' ? '' : "#" + page.toLowerCase()}`}
                  className="block text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {page}
                </Link>
              ))}

              {/* Mobile Phone Number */}
              <div className="flex items-center text-blue-600 font-bold text-lg mt-2">
                <Phone className="w-6 h-6 mr-2" />
                <a href={telLink} className="hover:text-blue-800 transition">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
