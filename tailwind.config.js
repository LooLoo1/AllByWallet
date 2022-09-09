/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}","./src/**/**/*.{ts,tsx}",],
	theme: {
		extend: {
			fontFamily: {
				'Nunito': ['Nunito', 'sans-serif'],
				'OpenS': ['Open Sans', 'sans-serif'],
			 },
			colors: {
				'gray':'#F3EDED',
		 	}
		},
	},
	plugins: [],
}
