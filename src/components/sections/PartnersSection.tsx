'use client';
import React from 'react';

const partners = [
	{
		category: 'Enterprise',
		logos: [
			{
				name: 'Bareburger',
				src: '/assets/US-Restaurants-Enterprise-Bareburger@2x%201.png',
			},
			{
				name: 'Boka Restaurant Group',
				src: '/assets/US-Restaurants-Enterprise-Boka-restaurant-Group@2x%201.png',
			},
			{ name: 'BrewDog', src: '/assets/US-Restaurants-Enterprise-Brewdog@2x 1.png' },
			{
				name: "Chickie's & Pete's",
				src: '/assets/US-Restaurants-Enterprise-Chickies-Petes@2x 1.png',
			},
		],
	},
	{
		category: 'Casual Dining',
		logos: [
			{
				name: 'Lettuce Entertain You',
				src: '/assets/US-Restaurants-Enterprise-Lettuce-Entertain-You@2x 1.png',
			},
			{ name: 'Ramen-San', src: '/assets/US-Restaurants-Casual-Dining-Ramen-san@2x 1.png' },
			{
				name: 'Portofino',
				src: '/assets/US-Restaurants-Casual-Dining-Pizzeria-Portofino@2x 1.png',
			},
			{ name: 'Delbar', src: '/assets/US-Restaurants-Casual-Dining-Delbar@2x 1.png' },
		],
		
	},
	{
		category: 'Breweries & Sports Bars',
		logos: [
			{
				name: "Ranalli's",
				src: '/assets/US-Restaurants-Breweries-sports-bars-Ranallis-white@2x-1 1.png',
			},
			{
				name: "Chickie's & Pete's",
				src: '/assets/US-Restaurants-Enterprise-Chickies-Petes@2x 1.png',
			},
			{ name: 'BrewDog', src: '/assets/US-Restaurants-Enterprise-Brewdog@2x 1.png' },
			{
				name: 'Yards Brewing Company',
				src: '/assets/US-Restaurants-Breweries-sports-bars-Yards-white@2x-1 1.png',
			},
		],
	},
	{
		category: 'Hotel Restaurants',
		logos: [
			{
				name: 'The Hoxton',
				src: '/assets/US-Restaurants-Hotel-restaurants-the-hoxton-white@2x-1 1.png',
			},
			{
				name: 'Mama Shelter',
				src: '/assets/US-Restaurants-Hotel-restaurants-Mama-shelter-white@2x-1 1.png',
			},
			{ name: 'Jojoe', src: '/assets/US-Restaurants-Hotel-restaurants-JoJoe-white@2x-1 1.png' },
			{
				name: 'Bareburger',
				src: '/assets/US-Restaurants-Enterprise-Bareburger@2x%201.png',
			},
		],
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
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-items-center w-full" style={{ padding: 24, width: '100%' }}>
						{category.logos.map((logo, i) => (
							<img
								key={i}
								src={logo.src}
								alt={`${logo.name} Logo`}
								className="h-14 w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
								style={{ maxWidth: '100%' }}
								onError={(e) => {
									const t = e.currentTarget;
									t.onerror = null;
									t.src = `https://placehold.co/100x50/333333/FFFFFF?text=${encodeURIComponent(
										logo.name
									)}`;
								}}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default PartnersSection;
