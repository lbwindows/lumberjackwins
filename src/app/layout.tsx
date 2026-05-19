'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import PromoBanner from "@/app/components/PromoBanner";
import NavBar from "./components/NavBar";
import FloatingContactForm from "./components/FloatingContactForm";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Promo Banner — stays visible at top while scrolling */}
        <PromoBanner
          message="🌱  Spring Special: 10% Off All Window & Door Installations!"
          linkText="Get a Free Quote"
          linkUrl="#quote"
        />

        {/* Page Content */}
<div className="pt-10 md:pt-12 w-screen overflow-x-hidden">
          <NavBar />
          {children}
          <FloatingContactForm />
          <Footer />
        </div>
      </body>
    </html>
  );
}
