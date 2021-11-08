const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		content: [
			`components/**/*.{vue,js}`,
			`layouts/**/*.vue`,
			`pages/**/*.vue`,
			`plugins/**/*.{js,ts}`,
			`nuxt.config.{js,ts}`,
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ['Roboto Condensed', 'sans-serif'],
		},
		colors: {
			gray: colors.trueGray,
			indigo: colors.indigo,
			purple: colors.purple,
			transparent: 'transparent',
			white: 'white',
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
