import eslint from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import importConfig from './import.js';
export default tseslint.config(eslint.configs.recommended, prettierRecommended, importConfig, {
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
