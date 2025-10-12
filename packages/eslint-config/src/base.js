const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const turbo = require('eslint-plugin-turbo');

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      turbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@repo/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/**',
              group: 'internal', 
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
