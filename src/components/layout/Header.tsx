'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-transparent text-white p-4 md:p-6 overflow-hidden">
      <div className="container mx-auto px-15 flex justify-between items-center relative z-10">
        {/* Left side: Logo + Nav links */}
        <div className="flex items-center space-x-8">
          <img src="/assets/logo.svg" alt="Qlub Logo" className="h-8 w-auto mr-20" />
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#" className="hover:text-purple-400 transition duration-300">Take Payments</a>
            <a href="#" className="hover:text-purple-400 transition duration-300">Power Your Business</a>
            <a href="#" className="hover:text-purple-400 transition duration-300">Resources</a>
          </nav>
        </div>

        {/* Right side: Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Sign Up
          </button>
          <button className="bg-black hover:bg-black text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;