"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Responsible Gaming", href: "/responsible-gaming" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/95 border-b border-gold/10 text-white backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="https://mahadevbooks.today/wp-content/uploads/2025/05/cropped-mahadev-book-logo-120x40.png"
                alt="Mahadev Book Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-gold transition-colors duration-200 text-sm font-semibold tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-gold hover:text-black hover:scale-105 active:scale-95 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-200"
            >
              Get Mahadev Book ID
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold hover:bg-dark-card focus:outline-none transition-colors duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-black border-t border-gold/10`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-semibold text-white hover:text-gold hover:bg-dark-card transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-white text-black hover:bg-gold py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-colors duration-200"
            >
              Get Mahadev Book ID
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
