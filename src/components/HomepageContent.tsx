'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { RiGithubFill, RiTwitterXFill } from 'react-icons/ri';

import Title from '@/components/ui/Title';

export default function HomepageContent(): React.JSX.Element {
	return (
		<>
			<motion.p
				className={
					'mb-2 text-sm 2xs:mb-3 2xs:text-base sm:text-lg md:mb-4 md:text-xl lg:text-2xl'
				}
				initial={{ opacity: 0, y: 48 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.5, duration: 0.5 },
				}}
			>
				<span className={'opacity-60'}>{`Hello `}</span>
				<span>{`👋`}</span>
				<span className={'opacity-60'}>{` My name is`}</span>
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 48 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 0.75, duration: 0.5 },
				}}
			>
				<Title text={'Jamie Wade'} />
			</motion.div>

			<motion.p
				className={
					'mb-8 opacity-80 text-sm max-w-72 2xs:mb-9 2xs:text-base 2xs:max-w-xs sm:text-lg md:mb-10 md:text-xl md:max-w-xl lg:text-2xl lg:max-w-2xl'
				}
				initial={{ opacity: 0, y: 48 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { delay: 1, duration: 0.5 },
				}}
			>
				{`I'm a Software Engineer from the UK working with Next.js, TypeScript, Zod, Tailwind, React, and Craft CMS`}
				<span className={'text-emerald-500'}>.</span>
			</motion.p>

			<ul className={'flex gap-2 text-4xl sm:gap-4 sm:text-5xl'}>
				<motion.li
					initial={{ opacity: 0, y: 48 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { delay: 1.25, duration: 0.5 },
					}}
				>
					<Link
						className={
							'block transition duration-200 active:text-emerald-500 focus:text-emerald-500 hover:text-emerald-500'
						}
						href={'https://github.com/jamiewade'}
						target={'_blank'}
						title={'Follow me on GitHub'}
					>
						<RiGithubFill />
					</Link>
				</motion.li>

				<motion.li
					initial={{ opacity: 0, y: 48 }}
					animate={{
						opacity: 1,
						y: 0,
						transition: { delay: 1.5, duration: 0.5 },
					}}
				>
					<Link
						className={
							'block transition duration-200 active:text-emerald-500 focus:text-emerald-500 hover:text-emerald-500'
						}
						href={'https://x.com/itsjamiewade'}
						target={'_blank'}
						title={'Follow me on X'}
					>
						<RiTwitterXFill />
					</Link>
				</motion.li>
			</ul>
		</>
	);
}
