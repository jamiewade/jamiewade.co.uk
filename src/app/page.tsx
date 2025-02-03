import Link from 'next/link';

export default function Home() {
	const currentYear = new Date().getFullYear();

	return (
		<>
			<main className={'flex-grow py-4'}>
				<div
					className={
						'flex items-center justify-center text-center w-full h-full'
					}
				>
					<div
						className={'flex flex-col items-center justify-center container'}
					>
						<p className={''}>{`Hello 👋 My name is`}</p>

						<h1 className={'font-extrabold'}>Jamie Wade</h1>

						<p className={''}>
							{`I'm a Software Engineer from the UK, working with Next.js, TypeScript,
Tailwind, React, and Craft CMS.`}
						</p>

						<p>
							<Link
								className={
									'block rounded-lg bg-white px-4 py-3 font-bold text-black'
								}
								href={'https://github.com/jamiewade'}
							>
								Find me on GitHub
							</Link>
						</p>
					</div>
				</div>
			</main>

			<footer className={'mt-auto text-center text-sm'}>
				<div className={'container'}>
					<div className={'grid gap-3 border-t py-4 w-full xs:grid-cols-2'}>
						<p
							className={'xs:order-2 xs:text-right'}
						>{`Built with ♥ using Next.js`}</p>

						<p
							className={'xs:order-1 xs:text-left'}
						>{`Jamie Wade © 2010 - ${currentYear}`}</p>
					</div>
				</div>
			</footer>
		</>
	);
}
