'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

import Title from '@/components/ui/Title';

export default function NotFoundContent(): React.JSX.Element {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 48 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.5, duration: 0.5 },
				}}
			>
				<Title text={'Uh oh'} />
			</motion.div>

			<motion.p
				className={
					'mb-8 opacity-80 text-sm max-w-72 2xs:mb-9 2xs:text-base 2xs:max-w-xs sm:text-lg md:mb-10 md:text-xl md:max-w-xl lg:text-2xl lg:max-w-2xl'
				}
				initial={{ opacity: 0, y: 48 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.75, duration: 0.5 },
				}}
			>
				{`You have found a page that does not exist`}
				<span className={'text-emerald-500'}>.</span>
			</motion.p>

			<motion.p
				className={
					'mb-2 text-sm 2xs:mb-3 2xs:text-base sm:text-lg md:mb-4 md:text-xl lg:text-2xl'
				}
				initial={{ opacity: 0, y: 48 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 1, duration: 0.5 },
				}}
			>
				<Link
					className={
						'block rounded-lg bg-emerald-500 px-4 py-3 font-extrabold text-sm text-white transition duration-200 hover:bg-emerald-600 sm:text-base lg:text-lg'
					}
					href={'/'}
				>
					Back to homepage
				</Link>
			</motion.p>
		</>
	);
}
