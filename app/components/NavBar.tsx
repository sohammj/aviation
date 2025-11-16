"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Centered brand */}
        <div className="absolute left-1/2 -translate-x-1/2 text-xs tracking-[0.35em] uppercase text-white/70">
          AeroSoft Systems
        </div>

        {/* Right navigation */}
        <div className="ml-auto flex items-center gap-8 text-sm text-white/70">
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="#contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
