"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto relative">

        {/* ---- Centered Brand ---- */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a
            href="#top"
            className="block text-center text-white/90 text-sm tracking-[0.35em] uppercase font-semibold hover:text-white transition-colors"
          >
            AeroSoft Systems
          </a>
        </div>

        {/* ---- Desktop Links ---- */}
        <div className="hidden md:flex ml-auto space-x-10 text-sm tracking-wide">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ---- Mobile Menu Button ---- */}
        <button
          className="md:hidden ml-auto text-white/70 hover:text-white transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* ---- Mobile Dropdown ---- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 pb-4"
          >
            <div className="rounded-2xl bg-black/90 border border-white/10 p-4 backdrop-blur-xl shadow-lg">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
