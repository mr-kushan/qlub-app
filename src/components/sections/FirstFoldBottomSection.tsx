'use client';
import React from 'react';

const FirstFoldBottomSection: React.FC = () => (
  <section className="bg-purple-800 py-8 md:py-10">
    <div className="container mx-auto px-20 mx-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center items-center">
        <div className="text-left md:col-span-2 px-4">
          <p className="text-2lg md:text-3xl text-purple-300 mb-2">Choose To Take Payments</p>
          <p className="text-2xl md:text-3xl font-bold text-white">With Qlub</p>
        </div>
        <div className="md:col-span-3 flex flex-col md:flex-row justify-end items-center gap-10 md:gap-30">
          {[
            ['Save 16 Min', 'Per Table'],
            ['Earn 300%', 'More Tips'],
            ['Get 7X', 'Positive Google Reviews'],
          ].map(([title, subtitle]) => (
            <div key={title} className="text-left">
              <p className="text-xl md:text-3xl font-bold text-white mb-4">{title}</p>
              <p className="text-lg text-purple-300">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FirstFoldBottomSection;
