import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
export default tseslint.config(importPlugin.flatConfigs.recommended, {
    rules: {
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
    },
});
