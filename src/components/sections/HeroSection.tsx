'use client';
import React from 'react';

const HeroSection: React.FC = () => (
  <section className="relative w-full min-h-screen py-16 md:py-24 bg-center mb-24 mb-40" style={{ backgroundColor: 'transparent' }}>
    <div className="mx-auto px-[80px] flex flex-col md:flex-row items-center justify-between relative z-10 gap-0 md:gap-[80px]">
      {/* Left */}
      <div className="md:w-2/5 text-center md:text-left mb-80 md:mb-0">
        <p
          className="text-white-100 text-md mb-15 flex items-center justify-center md:justify-start"
          style={{
            background: 'rgba(255,255,255,0.25)',
            borderRadius: '0.75rem',
            padding: '0.5rem 1rem',
            display: 'inline-flex',
            width: 'fit-content',
          }}
        >
          <span
            className="mr-2 inline-flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.25)',
              borderRadius: '0.5rem',
              padding: '0.15rem',
            }}
          >
            <img
              src="/assets/sparkle 2.svg"
              alt="Sparkle"
              className="w-5 h-5"
            />
          </span>
          Unlock Comfort And Convenience
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="font-normal text-white">ENHANCE YOUR </span>
          <span className="font-extrabold text-white">RESTAURANT EXPERIENCE</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          By Utilizing Qlub, Businesses Can Unlock A New Level Of Comfort And Convenience Both For
          Themselves And Their Customers.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 flex items-center">
            Book a Demo
            <img
              src="/assets/right arrow 4 1.png"
              alt="Right Arrow"
              className="ml-2 w-5 h-5"
            />
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 flex justify-center md:justify-end relative items-end">
        <div
          className="relative"
          style={{
            top: '200px',
            left: '-120px',
          }}
        >
          <img
            src="/assets/Frame 744.svg"
            alt="Woman using Qlub app"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const t = e.currentTarget;
              t.onerror = null;
              t.src = 'https://placehold.co/600x400/333333/FFFFFF?text=Hero+Image';
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
