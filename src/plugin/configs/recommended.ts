import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  prettierRecommended,
  {
    name: '@lexjs/eslint/recommended',
    rules: {
      eqeqeq: ['error', 'smart'],
      'prefer-const': 'warn',
      'object-shorthand': 'error',
      'consistent-return': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'lines-between-class-members': ['error', 'always'],
      'no-console': 'warn',
    },
  },
].flat();
