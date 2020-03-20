/* eslint-disable func-names */
module.exports = function ({ addUtilities }) {
  const newUtilities = {
    '.safe-area-t': {
      paddingTop: 'env(safe-area-inset-top)',
    },
    '.safe-area-l': {
      paddingTop: 'env(safe-area-inset-left)',
    },
    '.safe-area-r': {
      paddingTop: 'env(safe-area-inset-right)',
    },
    '.safe-area-b': {
      paddingBottom: 'env(safe-area-inset-bottom)',
    },
    '.mt-safe-area': {
      marginTop: 'env(safe-area-inset-bottom)',
    },
    '.ml-safe-area': {
      marginLeft: 'env(safe-area-inset-bottom)',
    },
    '.mr-safe-area': {
      marginRight: 'env(safe-area-inset-bottom)',
    },
    '.mb-safe-area': {
      marginBottom: 'env(safe-area-inset-bottom)',
    },
  };

  addUtilities(newUtilities, {
    variants: ['responsive'],
  });
};
