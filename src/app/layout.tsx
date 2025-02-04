import { GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import React from 'react';

import ThemeSelector from '@/components/ThemeSelector';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
		{ media: '(prefers-color-scheme: dark)', color: '#000000' },
	],
};

export const metadata: Metadata = {
	title: 'Jamie Wade - Software Engineer',
	description:
		'Jamie Wade is a Senior Software Engineer based in the UK. Jamie has years of experience working with Next.js, Tailwind CSS, JavaScript, and Craft CMS, as well as experience with using TypeScript, Zod, React, PostCSS, and GraphQL.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): React.JSX.Element {
	const gtmId: string = process.env.GTM_ID ?? '';
	const currentYear = new Date().getFullYear().toString();

	return (
		<html lang='en'>
			<body className={`flex flex-col relative ${inter.variable} antialiased`}>
				<ThemeSelector />

				<main className={'flex-grow pt-16 pb-8 sm:py-12'}>
					<div className={'flex items-center justify-center w-full h-full'}>
						<div
							className={
								'flex flex-col items-center justify-center text-center container md:items-start md:text-left'
							}
						>
							{children}
						</div>
					</div>
				</main>

				<footer className={'mt-auto text-center text-sm'}>
					<div className={'container'}>
						<div
							className={
								'grid gap-3 border-t border-emerald-500 py-4 w-full xs:grid-cols-2 xs:px-4 sm:py-5 md:py-6'
							}
						>
							<p className={'xs:order-2 xs:text-right'}>
								{`Built with `}
								<span className={'text-emerald-500'}>&#x2665;&#xFE0E;</span>
								{` using Next.js`}
							</p>

							<p
								className={'xs:order-1 xs:text-left'}
							>{`Jamie Wade © 2010 - ${currentYear}`}</p>
						</div>
					</div>
				</footer>
			</body>

			{process.env.NODE_ENV === 'production' && (
				<GoogleTagManager gtmId={gtmId} />
			)}
		</html>
	);
}
