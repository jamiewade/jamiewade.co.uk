import React from 'react';
import Link from 'next/link';

export default function Home(): React.JSX.Element {
	const currentYear = new Date().getFullYear().toString();

	return (
		<>
			<main className={'flex-grow py-4'}>
				<div className={'flex items-center justify-center w-full h-full'}>
					<div
						className={
							'flex flex-col items-center justify-center text-center container md:items-start md:text-left'
						}
					>
						<p
							className={
								'mb-2 text-sm 2xs:mb-3 2xs:text-base sm:text-lg md:mb-4 md:text-xl lg:text-2xl'
							}
						>{`Hello 👋 My name is`}</p>

						<h1
							className={
								'mb-4 font-extrabold text-4xl tracking-tighter 2xs:mb-5 2xs:text-5xl xs:text-6xl sm:text-7xl md:mb-6 md:text-8xl'
							}
						>
							Jamie Wade
							<span className={'text-emerald-500'}>.</span>
						</h1>

						<p
							className={
								'mb-8 text-sm max-w-72 2xs:mb-9 2xs:text-base 2xs:max-w-xs xs:max-w-md sm:text-lg md:mb-10 md:text-xl md:max-w-lg lg:text-2xl lg:max-w-2xl'
							}
						>
							{`I'm a Software Engineer from the UK, working with Next.js, TypeScript,
Tailwind, React, and Craft CMS`}
							<span className={'text-emerald-500'}>.</span>
						</p>

						<p>
							<Link
								className={
									'block rounded-lg bg-emerald-500 px-4 py-3 font-extrabold text-sm text-white transition duration-200 hover:bg-emerald-600 sm:text-base lg:text-lg'
								}
								href={'https://github.com/jamiewade'}
							>
								Find me on GitHub
							</Link>
						</p>
					</div>
				</div>
			</main>

			<footer className={'mt-auto text-center text-sm lg:text-base'}>
				<div className={'container'}>
					<div
						className={
							'grid gap-3 border-t border-emerald-500 py-4 w-full xs:grid-cols-2 xs:px-4'
						}
					>
						<p className={'xs:order-2 xs:text-right'}>
							{`Built with `}
							<span className={'text-emerald-500'}>♥</span>
							{` using Next.js`}
						</p>

						<p
							className={'xs:order-1 xs:text-left'}
						>{`Jamie Wade © 2010 - ${currentYear}`}</p>
					</div>
				</div>
			</footer>
		</>
	);
}
