const IN_PRODUCTION = process.env.NODE_ENV === 'production';
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './public/index.html',
    './src/**/*.vue',
    './src/*.scss',
    './src/assets/styles/*.scss',
    // etc.
  ],
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: [],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    IN_PRODUCTION && purgecss,
  ],
};
