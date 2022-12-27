/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx}",,],
	theme: {
		extend: {
			fontFamily: {
				'Nunito': ['Nunito', 'sans-serif'],
				'OpenS': ['Open Sans', 'sans-serif'],
			},
			fontSize: {
				em: {
					xs: ['0.75em', '1em'],
					sm: ['0.875em', '1.25em'],
					base: ['1em', '1.5em'],
					lg: ['1.125em', '1.75em'],
					xl: ['1.25em', '1.75em'],
					'2xl': ['1.5em', '2em'],
					'3xl': ['1.875em', '2.25em'],
					'4xl': ['2.25em', '2.5em'],
					'5xl': ['3em', '1'],
					'6xl': ['3.75em', '1'],
					'7xl': ['4.5em', '1'],
					'8xl': ['6em', '1'],
					'9xl': ['8em', '1']
				 },
			},
			width: {
				inherit: 'inherit'
			},
			height: {
				inherit: 'inherit'
			},
			colors: {
				'gray':'#F3EDED',
				'gray-20':'#C2BEBE',
		 	},
			transitionTimingFunction: {
				'in-over': 'cubic-bezier(.5, 1.75, .75, 1.25)',
			},	 
			backgroundImage: {
				'eye-ua': `radial-gradient(4.5% 3.5% at 45% 45%, #FFFFFF 0%, #FFFFFF 100%, rgba(255, 255, 255, 0) 100%), 
						 radial-gradient(50% 50% at 50% 50%, #000000 25%, rgba(0, 0, 0, 0) 25%, 
						 	rgba(255, 255, 255, 0.15) 50%, #FFFFFF 50%, #EBEBEB 100%), 
						 conic-gradient(from 90deg at 50% 50%, rgba(255, 255, 255, 0) -35deg, 
						   rgba(255, 255, 0, 0.8) 65deg, #FFFF00 115deg, rgba(255, 255, 255, 0) 325deg, 
							rgba(255, 255, 0, 0.8) 425deg),
						 linear-gradient(180deg, #0057FF 0%, #0057FF 95%, transparent 100%)`
			},
			boxShadow: {
				'eye': '0px 4px 20px rgba(0, 0, 0, 0.25), inset 0px -7px 15px rgba(150, 150, 150, 0.25)',
				'fire': '0px -15px 50px #FFFFFF, 0px -20px 50px #FFFFFF, 0px -15px 50px #FAFF00, 0px -10px 50px #FF9900, 0px -30px 100px #FF0000, 0px -30px 50px #FF0000, 0px -20px 150px #FF0000',
				'fire-blue': '0px 15px 50px #FFFFFF, 0px 20px 50px #FFFFFF, 0px 15px 50px #62F6FF, 0px 10px 50px #0085FF, 0px 30px 100px #0000FF, 0px 30px 50px #0000FF, 0px 20px 150px #0000FF',
			},
			
		},
	},
	plugins: [
		function ({ addVariant }) {
			addVariant('child', '& > *');
			addVariant('child-hover', '& > *:hover');
			addVariant('hover-child', '&:hover > *');
			addVariant('all-after', '& + *');
			// p ~ ul
			// addVariant('NavLink', '.active > &* *');
	  }
	],
}
