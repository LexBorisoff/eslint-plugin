import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  {
    name: '@lexjs/eslint/unused-vars',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: '@lexjs/eslint/typescript',
    files: ['**/*.{ts,mts,cts,tsx}'],
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE'],
        },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
].flat();
