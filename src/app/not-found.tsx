import React from 'react';
import Link from 'next/link';

import Title from '@/components/ui/Title';

export default function NotFound(): React.JSX.Element {
	return (
		<>
			<Title text={'Uh oh'} />

			<p
				className={
					'mb-8 opacity-80 text-sm max-w-72 2xs:mb-9 2xs:text-base 2xs:max-w-xs sm:text-lg md:mb-10 md:text-xl md:max-w-xl lg:text-2xl lg:max-w-2xl'
				}
			>
				{`You have found a page that does not exist`}
				<span className={'text-emerald-500'}>.</span>
			</p>

			<p>
				<Link
					className={
						'block rounded-lg bg-emerald-500 px-4 py-3 font-extrabold text-sm text-white transition duration-200 hover:bg-emerald-600 sm:text-base lg:text-lg'
					}
					href={'/'}
				>
					Back to homepage
				</Link>
			</p>
		</>
	);
}
