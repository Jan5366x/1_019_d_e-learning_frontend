/* eslint-disable func-names */
module.exports = function ({ addUtilities }) {
  const newUtilities = {
    '.container-default': {
      maxWidth: '1440px',
    },
  };

  addUtilities(newUtilities, {
    variants: ['responsive'],
  });
};
