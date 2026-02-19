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
					400: "#fb923c",
					500: "#f97316",
					600: "#ea580c",
				},
			},
		},
	},
	plugins: [],
};
