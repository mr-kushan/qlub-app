'use client';
import React from 'react';

const BenefitsSection: React.FC = () => (
  <section className="bg-white py-8 md:py-16 px-4 md:px-20">
    <div className="container mx-auto">
      <h2 className="text-4xl md:text-5xl text-gray-900 text-center mb-4">
				<span>BENEFITS YOU HAVE ALWAYS</span>
				<br />
				<span className="font-extrabold text-purple-700">DREAMED OF</span>
			</h2>
			<p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
				Every Time A Guest Pays With Qlub, You Earn Way More Than Just Revenue: More Tips, More Reviews, And More Data
			</p>

      <div className="flex flex-col lg:flex-row items-center mt-20 justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p
            className="text-purple text-md mb-15 flex items-center justify-center md:justify-start"
            style={{
              background: 'rgba(217, 156, 234, 0.25)',
              borderRadius: '0.75rem',
              padding: '0.5rem 1rem',
              display: 'inline-flex',
              width: 'fit-content',
            }}
          >
            <span
              className="mr-2 inline-flex items-center justify-center"
              style={{
                background: 'rgba(186, 129, 178, 0.25)',
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
            <span className="text-purple-700">Instant Transactions</span>
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-900 text-left mb-10">
            <span>SIMPLE SCANS </span>
            <br />
            <span className="font-extrabold text-black">SEAMLESS PAYMENTS</span>
          </h2>
          <p className="text-lg text-gray-700 text-left max-w-3xl mx-auto">
            Experience The Ultimate Convenience Of QR Payments With Our Simple Scans And Seamless Transactions.
          </p>
          <button className="bg-black hover:bg-black text-white font-bold py-2 px-6 mt-20 rounded-lg shadow-lg transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/assets/Frame 2608858.png"
            alt="People interacting with mobile payment solution via QR code"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const t = e.currentTarget;
              t.onerror = null;
              t.src = "https://placehold.co/600x400/999999/FFFFFF?text=Benefits+Image";
            }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
