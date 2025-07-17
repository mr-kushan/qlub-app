'use client';
import React from 'react';

const paymentMethods = [
	{
		imageUrl: '/assets/Frame 2608862.png',
	},
	{
		imageUrl: '/assets/Frame 2608863.png',
	},
	{
		imageUrl: '/assets/Frame 2608864.png',
	},
	{
		imageUrl: '/assets/Frame 2608865.png',
	},
];

const PaymentMethodsSection: React.FC = () => (
	<section className="bg-white px-8 md:px-16 md:py-24">
		<div className="container mx-auto px-2 md:px-8">
			<h2 className="text-4xl md:text-5xl text-gray-900 mt-20 text-center mb-4">
				<span>PAYMENT METHODS BUILT</span>
				<br />
				<span className="font-extrabold text-purple-700">FOR RESTAURANTS</span>
			</h2>
			<p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
				Every Time A Guest Pays With Qlub, You Earn Way More Than Just Revenue:
				More Tips, More Reviews, And More Data
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 mt-40 lg:grid-cols-4 gap-8">
				{paymentMethods.map((method, idx) => (
					<div key={idx} className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
						<img
							src={method.imageUrl}
							alt={`Payment method ${idx + 1}`}
							className="object-cover w-full h-full"
						/>
					</div>
				))}
			</div>			
		</div>
	</section>
);

export default PaymentMethodsSection;
