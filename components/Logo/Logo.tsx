'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export function Logo() {
	const router = useRouter();

	return (
		<div
			className="min-h-20 h-20 flex items-center justify-center px-6 border-b cursor-pointer gap-2"
			onClick={() => router.push('/')}
		>
			<Image
				src="/logoelectrolit.svg"
				alt="Logo"
				width={150}
				height={150}
				priority
			/>
		</div>
	);
}
