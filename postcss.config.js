let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || './tailwind.config.js';
const tailwind = require('tailwindcss')(tailwindConfig);
const autoprefixer = require('autoprefixer');
const cssimport = require('postcss-import')({path: ['./assets/css/**/*.css']});
const cssnested = require('postcss-nested');

module.exports = {
	// eslint-disable-next-line no-process-env
	plugins: [ 
		tailwind, 
		cssimport,
		cssnested,
		...(process.env.HUGO_ENVIRONMENT === 'production' ? [ autoprefixer ] : []) ]
};