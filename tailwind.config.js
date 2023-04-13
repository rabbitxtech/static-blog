/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`
		}
		return `rgb(var(${variable}) / ${opacityValue})`
	}
}

const themeColors = {
	base: withOpacityValue('--bg-color'),
	text: withOpacityValue('--text-color')
}

module.exports = {
	darkMode: 'class',
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				handwritten: ['Virgil']
			}
		}
	},
	plugins: []
}

