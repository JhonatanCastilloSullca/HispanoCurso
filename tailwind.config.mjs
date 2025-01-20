/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
		"./node_modules/flowbite/**/*.js"
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				grayDark: '#444444',
				grayMedium: '#666666',
				stoneLight: '#938F84',
				yellowPrimary: '#FABE19',
				yellowSecondary: '#FAA419',
				brownDark: '#644637',
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
