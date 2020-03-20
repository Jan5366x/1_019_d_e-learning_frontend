/* eslint-disable func-names */
module.exports = function ({ addVariant, e }) {
  addVariant('touch', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `html.touch-device .${e(`touch${separator}${className}`)}`;
    });
  });
};
