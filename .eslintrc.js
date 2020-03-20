module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': 0,
    'array-callback-return': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'arrow-body-style': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase',
      {
        ignores: [],
      },
    ],
    'vue/singleline-html-element-content-newline': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/no-v-html': 1,
    'object-curly-newline': 0,
    'max-len': [2, 140, 2, { ignoreUrls: true }],
    'import/no-extraneous-dependencies': 0,
    strict: 0,
    'prefer-destructuring': 0,
  },
};
