'use client';
import React from 'react';

const partners = [
	{
		category: 'Enterprise',
		
	},
	{
		category: 'Casual Dining',
		
	},
	{
		category: 'Breweries & Sports Bars',
		
	},
	{
		category: 'Hotel Restaurants',
		
	},
];

const PartnersSection: React.FC = () => (
	<section className="bg-black flex items-stretch justify-stretch p-0 m-0" style={{ backgroundColor: '#000', margin: 0 }}>
		<div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0" style={{ backgroundColor: '#444' }}>
			{partners.map((category, idx) => (
				<div
					key={idx}
					className="flex flex-col justify-center items-center border border-gray-700 pt-14 pb-8 px-10"
					style={{ minHeight: '28vh', minWidth: '50vw', backgroundColor: '#000' }}
				>
					<h3
						className="text-2xl font-semibold text-gray-400 mb-0 w-full text-left pl-2"
						style={{ paddingLeft: 40, marginBottom: 8 }}
					>
						{category.category}
					</h3>
					
				</div>
			))}
		</div>
	</section>
);

export default PartnersSection;
