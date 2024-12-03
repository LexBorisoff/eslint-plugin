<h1 align="center">LexJS ESLint plugin</h1>

- [Installation](#installation)
- [Usage](#usage-flat-config)
- [Configs](#configs)
  - [Recommended](#recommended)
  - [TypeScript](#typescript)
- [Utils](#utils)
  - [useIgnoreFile](#useignorefile)

## Installation

```bash
npm install @lexjs/eslint-plugin --save-dev
```

```bash
pnpm add @lexjs/eslint-plugin --save-dev
```

```bash
yarn add @lexjs/eslint-plugin --dev
```

## Usage (Flat config)

```typescript
// eslint.config.js
import lexjs from '@lexjs/eslint-plugin';

export default [
  // other configs
  ...lexjs.configs.recommended,
  ...lexjs.configs.typescript,
  // other configs
];
```

## Configs

### Recommended

_**Extends Configs**_

- [ESLint](https://www.npmjs.com/package/@eslint/js)
  - Recommended
- [Prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
  - Recommended
- [Import Plugin](https://www.npmjs.com/package/eslint-plugin-import)
  - Recommended

_**Rules**_

```typescript
{
  eqeqeq: ['error', 'smart'],
  'prefer-const': 'warn',
  'object-shorthand': 'error',
  'consistent-return': 'error',
  'no-else-return': ['error', { allowElseIf: false }],
  'lines-between-class-members': ['error', 'always'],
  'no-console': 'warn',
}
```

_**Import Rules**_

```typescript
{
  'import/no-cycle': 'error',
  'import/no-duplicates': 'error',
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-named-as-default-member': 'off',
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: 'export' },
    { blankLine: 'always', prev: 'export', next: '*' },
    { blankLine: 'any', prev: 'export', next: 'export' },
  ],
  'import/order': [
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
      'newlines-between': 'always-and-inside-groups',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
}
```

### TypeScript

_**Extends Configs**_

- [TypeScript ESLint](https://www.npmjs.com/package/typescript-eslint)
  - Recommended
  - ESLint Recommended
- [Import Plugin](https://www.npmjs.com/package/eslint-plugin-import)
  - TypeScript

_**Import Settings**_

```typescript
{
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
```

## Utils

### `useIgnoreFile`

Configure ESLint to ignore certain files and directories by including patterns from a `.gitignore` or any other file with gitignore-style patterns.

**_Type_**

```typescript
function useIgnoreFile(file: string, meta: ImportMeta): FlatConfig;
```

**_Usage_**

```typescript
// eslint.config.js
import { useIgnoreFile } from '@lexjs/eslint-plugin/utils';

export default [
  useIgnoreFile('.gitignore', import.meta),
  // other configs
];
```

> File name must be resolved relative to the ESLint config file.
