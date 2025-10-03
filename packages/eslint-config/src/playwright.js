const base = require('./base.js');
const playwright = require('eslint-plugin-playwright');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...base,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
    },
  },
];
