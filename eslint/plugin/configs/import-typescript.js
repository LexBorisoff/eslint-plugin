import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
export default tseslint.config(importPlugin.flatConfigs.typescript, {
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
});
