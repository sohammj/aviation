"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* Center Brand */}
        <div className="absolute left-1/2 -translate-x-1/2 text-white/90 tracking-wide text-sm font-medium">
          AEROSOFT SYSTEMS
        </div>

        {/* Right Links */}
        <div className="ml-auto flex gap-8 text-white/70 text-sm">
          <Link href="#about" className="hover:text-white transition">About</Link>
          <Link href="#services" className="hover:text-white transition">Services</Link>
          <Link href="#contact" className="hover:text-white transition">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
