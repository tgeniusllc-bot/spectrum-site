import { type Config } from 'tailwindcss'
import typographyStyles from './typography'
import typographyPlugin from '@tailwindcss/typography'
import headlessuiPlugin from '@headlessui/tailwindcss'

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}',],
	darkMode: 'selector',
	theme: {
		
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1500px',
			'3xl': '1780px',
		},
		extend: {
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				secondary: 'var(--color-bg-secondary)',
				accent: 'var(--color-bg-accent)',
				button: 'var(--color-bg-button)',
				buttonHover: 'var(--color-bg-buttonHover)',
 				input: 'var(--color-bg-input)',
 				menuBorder: 'var(--color-bg-menuBorder)',
 				silver: 'var(--color-bg-silver)',
 				whitelilac: 'var(--color-bg-whitelilac)',
 				mercury: 'var(--color-bg-mercury)',
 				alabaster: 'var(--color-bg-alabaster)',
 				alabaster2: 'var(--color-bg-alabaster2)',
 				catskill: 'var(--color-bg-catskill)',
 				santafe: 'var(--color-bg-santafe)',
 				santafe2: 'var(--color-bg-santafe2)',
 				mineshaft: 'var(--color-bg-mineshaft)',
 				boulder: 'var(--color-bg-boulder)',
			  },
			  textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)',
				three: 'var(--color-text-three)',
				buttonTextHover: 'var(--color-text-buttonTextHover)',
				menu: 'var(--color-text-menu)',
				error: 'var(--color-text-error)',
				success: 'var(--color-text-success)',
				body: 'var(--color-text-body)',
			  },
			  borderColor: {
				accent: 'var(--color-border-accent)',
				primary: 'var(--color-border-primary)',
				secondary: 'var(--color-border-secondary)',
				active: 'var(--color-border-active)',
				heading: 'var(--color-border-heading)',
			  },
			colors: {
				spectrumOrange: "#f3992e",
				spectrumBlue: "#1b559b",
				body: "#5A5A5A",
				input: "#1D1E1F",
				black: "#000",
				white: "#fff",
				linen: "#FBF1E9",
				linenSecondary: "#ECE7E3",
				olive: "#3D9970",
				maroon: "#B03060",
				brown: "#C7844B",
				placeholder: "#707070",
				borderBottom: "#f7f7f7",
				facebook: "#4267B2",
				facebookHover: "#395fad",
				google: "#4285F4",
				googleHover: "#307bf9",
				whatsapp: "#25d366",
				whatsappHover: "#075e54",
				gray: {
					50: "#FBFBFB",
					100: "#F1F1F1",
					150: "#F4F4F4",
					200: "#F9F9F9",
					300: "#E6E6E6",
					350: "#E9ECEF",
					400: "#999999",
					500: "#D8D8D8",
					600: "#3A3A3A",
					700: "#292929",
					800: "#707070",
				},
			},
			zIndex: {
				'100': '100',
			  },
 			fontSize: {
				'10px': '.625rem',
			},
			typography: typographyStyles,
			spacing: {
				'430px': '430px',
				'450px': '450px',
				'500px': '500px',
				'64vh': '64vh',
			},
			minHeight: {
				'50px': '50px',
			},
			scale: {
				80: '0.8',
				85: '0.85',
				300: '3',
				400: '4',
			},
			animation: {
				shine: 'shine 1s',
			},
			keyframes: {
				shine: {
					'100%': { left: '125%' },
				},
			},
			backgroundImage: {
				'app-pattern': "url('/assets/images/app-pattern.png')",
			},
			
		},
		boxShadow: {
			cart: '0 3px 6px rgba(0,0,0,0.12)',
			product: '0 6px 12px rgba(0,0,0,.08)',
			listProduct: '0 2px 4px rgba(0,0,0,.08)',
			navigation: '0 3px 6px rgba(0, 0, 0, 0.16)',
			navigationReverse: '0 -3px 6px rgba(0, 0, 0, 0.16)',
			header: '0 2px 3px rgba(0, 0, 0, 0.08)',
			vendorCard: '1px 1px 4px rgba(0, 0, 0, 0.12)',
			vendorCardHover: '0 6px 18px rgba(0, 0, 0, 0.12)',
			subMenu: '1px 2px 3px rgba(0, 0, 0, 0.08)',
			bottomNavigation: '0 -2px 3px rgba(0, 0, 0, 0.06)',
			cookies: '0 -2px 3px rgba(0, 0, 0, 0.04)',
			avatar: '0px 15px 30px rgba(0, 0, 0, 0.16)',
		},
		fontFamily: {
			body: ["'Open Sans', sans-serif"],
			satisfy: ["'Satisfy', cursive"],
			segoe: ["'Segoe UI', sans-serif"],
		},
	},
	plugins: [
		require('@tailwindcss/forms')({
			strategy: 'class',
		}),
		require('tailwindcss-rtl'), 
 		require('tailwind-scrollbar-hide'),
		typographyPlugin, headlessuiPlugin
	],
} satisfies Config