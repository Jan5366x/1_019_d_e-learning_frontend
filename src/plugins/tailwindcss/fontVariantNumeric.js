/* eslint-disable func-names */
module.exports = function ({ addUtilities }) {
  const newUtilities = {
    '.font-numeric-tabular': {
      fontVariantNumeric: 'tabular-nums',
    },
    '.font-numeric-slashed': {
      fontVariantNumeric: 'slashed-zero',
    },
  };

  addUtilities(newUtilities, {
    variants: ['responsive'],
  });
};
