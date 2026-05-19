'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface PromoBannerProps {
  message: string;
  linkText?: string;
  linkUrl?: string;
}

export default function PromoBanner({
  message,
  linkText,
  linkUrl,
}: PromoBannerProps) {
  const [visible, setVisible] = React.useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="promo-banner"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#2E6f40] text-white text-center py-3 px-4 md:px-6 text-sm md:text-base font-medium flex items-center justify-center gap-2 shadow-lg max-w-screen overflow-hidden"
        >
          {/* Full text for desktop */}
          <span className="hidden sm:inline text-white truncate">{message}</span>
          {/* Short text for mobile */}
          <span className="inline sm:hidden text-white font-semibold">
            🍂 Spring Special: 10% Off
          </span>

          {linkText && linkUrl && (
            <Link
              href={linkUrl}
              className="underline font-semibold hover:text-yellow-300 transition duration-300 truncate"
            >
              {linkText}
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
