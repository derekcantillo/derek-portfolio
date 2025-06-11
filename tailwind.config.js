/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				// Clash Display variants
				clash: ['ClashDisplay-Variable', 'sans-serif'],
				'clash-extralight': ['ClashDisplay-Extralight', 'sans-serif'],
				'clash-light': ['ClashDisplay-Light', 'sans-serif'],
				'clash-regular': ['ClashDisplay-Regular', 'sans-serif'],
				'clash-medium': ['ClashDisplay-Medium', 'sans-serif'],
				'clash-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
				'clash-bold': ['ClashDisplay-Bold', 'sans-serif'],
				'clash-variable': ['ClashDisplay-Variable', 'sans-serif'],
				// League Gothic variants
				league: ['LeagueGothic-Regular', 'sans-serif'],
				'league-condensed': ['LeagueGothic-Condensed', 'sans-serif'],
				'league-semicondensed': ['LeagueGothic-SemiCondensed', 'sans-serif']
			}
		}
	},
	plugins: []
}
