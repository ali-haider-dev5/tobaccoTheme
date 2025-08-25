"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4
          ${scrolled ? "bg-[#2b211c] backdrop-blur-md shadow-lg" : "bg-transparent"}
          transition-[background-color,box-shadow,backdrop-filter] duration-200
        `}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold text-amber-500"
          >
            Buford Workshop
          </Link>

          <nav className="hidden lg:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-stone-200 hover:text-amber-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <button className="ml-6 bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-4 rounded-md transition-colors shadow-md">
              Download Now
            </button>
          </nav>

          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-2 rounded-md text-amber-500"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[rgba(121,60,5,0.85)]"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-amber-500"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <nav className="flex flex-col space-y-10 text-4xl font-semibold text-amber-100">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="relative group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-1 w-0 bg-amber-400 group-hover:w-full transition-all duration-300 rounded" />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
