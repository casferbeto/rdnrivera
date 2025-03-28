import React from 'react';
import { Logo } from '@/components/Logo';

export default function layout({ children }: { children: React.ReactNode }) {
	return (
		/*className='relative h-screen w-full overflow-hidden">
		'
		>
			<video
				autoPlay
				loop
				muted
				className="absolute top-0 left-0 w-full h-full object-cover"
				preload="auto"
			>
				<source src="/videos/Hidratación total.mp4" type="video/mp4" />
				Lo sentimos, tu navegador no admite videos.
			</video>*/

		<div className="flex flex-col justify-center h-full items-center">
			<Logo />
			<h1 className="text-3xl my-2">RDN Rivera</h1>
			<h2 className="text-2xl mb-3">
				Welcome to the Electrolit RDN Rivera App
			</h2>
			{children}
		</div>
	);
}
