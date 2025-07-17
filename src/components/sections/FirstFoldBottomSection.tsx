'use client';
import React from 'react';

const stats = [
  { title: 'Save 16 Min', subtitle: 'Per Table' },
  { title: 'Earn 300%', subtitle: 'More Tips' },
  { title: 'Get 7X', subtitle: 'Positive Google Reviews' },
];

const FirstFoldBottomSection: React.FC = () => (
  <section className="bg-purple-800 py-8 md:py-10" aria-label="Qlub Benefits">
    <div className="container mx-auto px-4 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-2 font-medium">
            Choose To Take Payments
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            With Qlub
          </h3>
        </div>
        <div className="md:col-span-3 flex flex-col md:flex-row justify-end items-center gap-16">
          {stats.map(({ title, subtitle }) => (
            <div key={title} className="px-2">
              <p className="text-xl md:text-3xl font-bold text-white mb-2">{title}</p>
              <p className="text-lg text-purple-300">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FirstFoldBottomSection;
