'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 md:py-12 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <div className="text-xl font-bold text-purple-500 mb-4">Qlub.</div>
        <p className="mb-4">&copy; {new Date().getFullYear()} Qlub. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
