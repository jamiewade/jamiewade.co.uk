import Link from 'next/link';

export default function Home() {
	const currentYear = new Date().getFullYear();

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
							className={'mb-2 text-sm sm:mb-4 lg:mb-6 lg:text-base xl:text-xl'}
						>{`Hello 👋 My name is`}</p>

						<h1
							className={
								'mb-4 font-extrabold text-4xl tracking-tighter xs:text-5xl sm:mb-6 md:text-6xl lg:mb-8 lg:text-7xl xl:text-8xl'
							}
						>
							Jamie Wade<span className={'text-emerald-500'}>.</span>
						</h1>

						<p
							className={
								'mb-8 text-sm sm:mb-10 sm:max-w-md sm:text-base md:max-w-lg lg:mb-12 lg:text-lg xl:max-w-2xl '
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
