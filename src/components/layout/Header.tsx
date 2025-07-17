'use client';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent text-white p-4 md:p-6">
      <div className="container mx-auto px-4 md:px-14 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img src="/assets/logo.svg" alt="Qlub Logo" className="h-8 w-auto mr-12" />
          <nav className="hidden md:flex gap-12 items-center" aria-label="Main navigation">
            <a href="#" className="hover:text-purple-400 transition-colors">Take Payments</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Power Your Business</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Resources</a>
          </nav>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="bg-transparent text-white font-bold py-2 px-6 rounded-full transition-colors">
            Sign Up
          </button>
          <button className="bg-black text-white font-bold py-2 px-6 rounded-lg shadow transition-colors">
            Get Started
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-white" aria-label="Open menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;