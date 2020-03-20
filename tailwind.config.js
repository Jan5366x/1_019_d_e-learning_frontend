// safe area paddings for iphonex and other ios based devices
const safeAreaSpacing = require('./src/plugins/tailwindcss/safeAreaSpacing');
// touch variant use like this touch:mt-4
const touchVariant = require('./src/plugins/tailwindcss/touchVariant');
const fontVariantNumeric = require('./src/plugins/tailwindcss/fontVariantNumeric');

// tailwind.config.js
module.exports = {
  theme: {
    // extend default tailwind configs
    extend: {
      zIndex: {
        21: '21',
      },
      screens: {
        xxl: '1440px',
        xxxl: '1920px',
      },
    },
  },
  variants: {
    fontSize: ['responsive', 'touch'],
    padding: ['responsive', 'hover', 'focus', 'touch'],
    width: ['responsive', 'touch'],
    userSelect: ['responsive', 'touch'],
    overflow: ['responsive', 'touch'],
  },
  plugins: [
    safeAreaSpacing,
    touchVariant,
    fontVariantNumeric,
  ],
};
