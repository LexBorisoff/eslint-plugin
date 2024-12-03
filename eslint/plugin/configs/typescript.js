import tseslint from 'typescript-eslint';
import importConfigTypescript from './import-typescript.js';
export default tseslint.config(tseslint.configs.recommended, tseslint.configs.eslintRecommended, importConfigTypescript, {
    files: ['**/*.{ts,tsx}'],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-empty-object-type': 'error',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
            },
        ],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                leadingUnderscore: 'allowSingleOrDouble',
                trailingUnderscore: 'forbid',
            },
            {
                selector: 'enumMember',
                format: ['PascalCase'],
            },
        ],
    },
});
