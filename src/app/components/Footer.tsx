'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#2E6f40] text-white-300 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 items-start">
        {/* 4️⃣ Image Section */}

        {/* 1️⃣ Brand Section */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/logomain.png" // 👈 Place your image in /public
                alt="Window and Door Installation"
                width={240}
                height={140}
              />

            </div>
          </div>
          <p className="text-white-300 text-sm">
            Your trusted local experts in energy-efficient window and door replacements across the Puget Sound area.
          </p>
        </div>

        {/* 2️⃣ Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-green-400 transition">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 3️⃣ Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
              <a href="tel:4255550134" className="hover:underline hover:text-green-400 transition-colors">
                (425) 243-2209
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
              <a href="mailto:business@lumberjackwindows.com" className="hover:underline hover:text-green-400 transition-colors">
                business@lumberjackwindows.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Greater Seattle Area</span>
            </li>
          </ul>

          {/* Social Links */}
          {/* <div className="flex gap-4 mt-5">
            <Link href="https://facebook.com" target="_blank" className="hover:text-green-400 transition">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-green-400 transition">
              <Instagram className="w-5 h-5" />
            </Link>
          </div> */}
        </div>


      </div>

      {/* Divider + Bottom Line */}
      <div className="border-t border-white-700 mt-10 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} LumberjackWindows. All rights reserved.
      </div>
    </footer>
  );
}
