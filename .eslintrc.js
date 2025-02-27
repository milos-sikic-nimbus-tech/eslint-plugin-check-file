'use strict';

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:node/recommended',
    'prettier',
    'plugin:jsdoc/recommended',
  ],
  plugins: ['prettier', 'jsdoc'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['tests/**/*.js'],
      env: { mocha: true },
    },
  ],
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
  },
};
