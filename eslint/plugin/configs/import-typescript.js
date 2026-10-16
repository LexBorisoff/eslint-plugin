import importPlugin from 'eslint-plugin-import-x';
export default {
    name: '@lexjs/eslint/import-typescript',
    plugins: {
        'import-x': importPlugin,
    },
    settings: {
        'import-x/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    rules: {
        ...importPlugin.flatConfigs.typescript.rules,
    },
};
