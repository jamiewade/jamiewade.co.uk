/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "2rem",
				md: "3rem",
				lg: "4rem",
			},
		},
		extend: {},
	},
	plugins: [],
};
