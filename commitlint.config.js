/** @type {import("@commitlint/types").UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'deps', 'chore', 'docs', 'refactor', 'test', 'ci'],
    ],
    'scope-enum': [
      2,
      'always',
      ['web', 'web-e2e', 'eslint-config', 'shared', 'typescript-config'],
    ],
    'scope-empty': [0],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-max-line-length': [2, 'always', 100],
  },
};
