// Framework
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Images
import GitHubIcon from "public/github.svg";
import Memoji from "public/memoji.png";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jamie Wade | Front-end Engineer</title>
				<meta
					name="description"
					content="Jamie Wade is a Front-end Engineer based in the UK. Jamie has years of experience working with Craft CMS, as well as experience with using tools such as Tailwind, PostCSS, JavaScript, Alpine.js, React, Gatsby, Next.js, Shopify, Laravel, and Python."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col bg-white text-gray-600 w-full h-full dark:bg-slate-800 dark:text-gray-200">
				<div className="my-auto pt-6 container">
					<div className="flex flex-col gap-2 text-center sm:gap-3 sm:mx-auto sm:max-w-2xl md:gap-4">
						<Image
							alt="Jamie Wade"
							className="mx-auto mb-2"
							height={144}
							src={Memoji}
							width={144}
						/>

						<h1 className="font-bold text-gray-800 text-2xl sm:text-3xl md:text-4xl dark:text-gray-50">
							Nice to meet you{" "}
							<span role="img" aria-label="Waving hand emoji">
								👋
							</span>
						</h1>

						<p className="sm:text-lg md:text-xl">
							I&apos;m Jamie Wade. I&apos;m a Front-end Engineer based in the
							UK, working with Craft CMS, GraphQL, Tailwind, and Next.js.
						</p>

						<p className="text-gray-400 md:text-lg">
							I also have experience with Shopify, PHP, Laravel, and Python, and
							other React frameworks such as React Native, and Gatsby.
						</p>

						<div className="mt-2">
							<Link href="https://github.com/jamiewade" legacyBehavior passHref>
								<a
									className="inline-block rounded bg-indigo-600 px-4 py-3 font-medium leading-none text-white transition hover:bg-indigo-700 sm:py-2.5 sm:text-lg"
									target={"_blank"}
								>
									Find me on GitHub
								</a>
							</Link>
						</div>
					</div>
				</div>

				<footer className="pt-8 text-gray-400 text-center text-sm">
					<div className="container">
						<div className="grid gap-3 border-t border-gray-100 py-6 md:flex md:justify-between dark:border-gray-600">
							<div className="md:order-2">
								<p>
									Built with ♥ using{" "}
									<Link href="https://nextjs.org" legacyBehavior passHref>
										<a className="hover:underline" target={"_blank"}>
											Next.js
										</a>
									</Link>{" "}
									&{" "}
									<Link href="https://tailwindcss.com" legacyBehavior passHref>
										<a className="hover:underline" target={"_blank"}>
											Tailwind
										</a>
									</Link>
								</p>
							</div>

							<div className="md:order-1">
								<p>
									&copy; {new Date().getFullYear()} Jamie Wade. All rights
									reserved
								</p>
							</div>

							<div className="md:order-3">
								<Link
									href="https://github.com/jamiewade"
									legacyBehavior
									passHref
								>
									<a target={"_blank"}>
										<Image
											alt="Find me on GitHub"
											className="mx-auto"
											height={24}
											src={GitHubIcon}
											width={24}
										/>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
