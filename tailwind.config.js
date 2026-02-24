/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}", // Това е критично за React!
	],
	theme: {
		extend: {
			colors: {
				accent: {
					400: "##ffdd59",
					500: "##ffd32a",
					600: "##ffc048",
				},
			},
		},
	},
	plugins: [],
};
