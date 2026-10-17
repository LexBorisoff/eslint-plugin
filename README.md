# `@lexjs/eslint`

![Build](https://img.shields.io/github/actions/workflow/status/LexBorisoff/eslint-plugin/release.yml)
![NPM Version](https://img.shields.io/npm/v/@lexjs/eslint)
![Static Badge](https://img.shields.io/badge/package-ESM--only-ffe536)

- [Installation](#installation)
- [Usage](#usage-flat-config)
- [Configs](#configs)
  - [`recommended`](#recommended)
  - [`typescript`](#typescript)
  - [`import`](#import)
  - [`importTs`](#importts)
- [Utils](#utils)
  - [`ignoreFile`](#ignorefile)

## Installation

```bash
npm install @lexjs/eslint --save-dev
```

```bash
pnpm add @lexjs/eslint --save-dev
```

```bash
yarn add @lexjs/eslint --dev
```

```bash
bun add @lexjs/eslint --dev
```

## Usage (Flat config)

```javascript
// eslint.config.js
import lexjs from '@lexjs/eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
  // other configs
  ...lexjs.configs.recommended,
  ...lexjs.configs.typescript,
  ...lexjs.configs.import,
  ...lexjs.configs.importTs,
  // other configs
);
```

## Configs

### `recommended`

_**Builds on**_

- [ESLint JavaScript](https://www.npmjs.com/package/@eslint/js)
  - `recommended`
- [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
  - `recommended`

_**Configs**_

```javascript
[
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
]
```

### `typescript`

_**Builds on**_

- [TypeScript ESLint](https://www.npmjs.com/package/typescript-eslint)
  - `recommended`
  - `eslint-recommended`

_**Configs**_

```javascript
[
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
]
```

### `import`

_**Builds on**_

- [Import-x](https://www.npmjs.com/package/eslint-plugin-import-x)
  - `recommended`

_**Configs**_

```javascript
[
  {
    name: '@lexjs/eslint/import',
    rules: {
      'import-x/no-cycle': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/first': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-named-as-default-member': 'off',
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'export' },
        { blankLine: 'always', prev: 'export', next: '*' },
        { blankLine: 'any', prev: 'export', next: 'export' },
      ],
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
]
```

### `importTs`

_**Builds on**_

- [Import-x](https://www.npmjs.com/package/eslint-plugin-import-x)
  - typescript

_**Configs**_

```javascript
[
  {
    name: '@lexjs/eslint/import-typescript',
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
        }),
      ],
    },
  },
]
```

## Utils

### `ignoreFile`

Configure ESLint to ignore certain files and directories by including patterns from a `.gitignore` or any other file with gitignore-style patterns.

**_Type_**

```javascript
function ignoreFile(file: string, meta: ImportMeta, options?: IncludeIgnoreFileOptions): ConfigObject;
```

**_Usage_**

```javascript
// eslint.config.js
import { ignoreFile } from '@lexjs/eslint/utils';

export default [
  ignoreFile('.gitignore', import.meta, { gitignoreResolution: true }),
  // other configs
];
```

> File name must be resolved relative to the ESLint config file.
