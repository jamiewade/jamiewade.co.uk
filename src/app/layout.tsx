import type { Metadata } from 'next';
import { Viewport } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import React from 'react';

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
		'Jamie Wade is a Senior Software Engineer based in the UK. Jamie has years of experience working with Next.js, Tailwind CSS, JavaScript, and Craft CMS, as well as experience with using TypeScript, React, PostCSS, and GraphQL.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): React.JSX.Element {
	return (
		<html lang='en'>
			<body className={`flex flex-col ${inter.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
