import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '28rem',
			md: '48rem',
			lg: '64rem',
			xl: '80rem',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				xl: '6rem',
			},
		},
		extend: {
			fontFamily: {
				sans: "'Filson Pro', sans-serif",
				serif: "'Lust Display Italic', serif",
				cursive: "'Cochocib Script Latin Pro', serif",
			},
			colors: {},
		},
	},
} satisfies Config
