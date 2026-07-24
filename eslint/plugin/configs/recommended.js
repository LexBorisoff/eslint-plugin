import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import importConfig from './import.js';
export default defineConfig(eslint.configs.recommended, prettierRecommended, importConfig, {
    name: '@lexjs/eslint-plugin/recommended',
    rules: {
        eqeqeq: ['error', 'smart'],
        'prefer-const': 'warn',
        'object-shorthand': 'error',
        'consistent-return': 'error',
        'no-else-return': ['error', { allowElseIf: false }],
        'lines-between-class-members': ['error', 'always'],
        'no-console': 'warn',
    },
});
