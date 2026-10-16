import importPlugin from 'eslint-plugin-import-x';
import unusedImports from 'eslint-plugin-unused-imports';
export default {
    name: '@lexjs/eslint/import',
    plugins: {
        'unused-imports': unusedImports,
        'import-x': importPlugin,
    },
    rules: {
        ...importPlugin.flatConfigs.recommended.rules,
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
};
