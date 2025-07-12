import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm mb-6">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 bg-blue-500 rounded-full" />
          <span className="font-bold text-lg text-blue-700">ReWear</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/browse" className="text-gray-700 hover:text-blue-600 font-medium">Browse</Link>
          <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">Login</Link>
          <Link href="/register" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded font-medium transition">Sign Up</Link>
        </nav>
        {/* Mobile nav placeholder (optional for MVP) */}
        <div className="md:hidden">
          {/* Hamburger menu could go here */}
        </div>
      </div>
    </header>
  );
} 